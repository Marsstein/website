import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Star,
  Download,
  BookOpen,
  Target,
  AlertTriangle,
  Lightbulb,
  FileText,
  Users,
  Scale,
  Lock,
  Eye,
  Gavel,
  Euro,
  Calendar,
  Share2,
  Bookmark,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Zap,
  Brain,
  Award,
  TrendingUp,
  Circle,
  Database,
  ClipboardList,
  Globe,
  Building2,
  UserCheck,
  FileCheck,
  Settings,
  AlertOctagon,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

const VerarbeitungsverzeichnisGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('grundlagen');
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    { id: 'grundlagen', title: 'Einführung & Rechtliche Grundlagen', icon: Info },
    { id: 'pflichtangaben', title: 'Pflichtangaben für Verantwortliche', icon: ClipboardList },
    { id: 'umsetzung', title: 'Praktische Umsetzung', icon: Settings },
    { id: 'fehler', title: 'Häufige Fehler vermeiden', icon: AlertTriangle },
    { id: 'tools', title: 'Tools und Vorlagen', icon: Download }
  ];

  const handleSectionComplete = (sectionId: string) => {
    setCompletedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

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

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionsList = sections.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sectionsList.length - 1; i >= 0; i--) {
        const section = sectionsList[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        setReadingProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CounterAnimation = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime: number;
        const startValue = 0;
        const endValue = value;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  return (
    <>
      <SEOHead
        title="Verarbeitungsverzeichnis – DSGVO Anleitung & Vorlagen"
        description="Verarbeitungsverzeichnis nach Art. 30 DSGVO erstellen: Schritt-für-Schritt Anleitung, Vorlagen & Beispiele. ✓ Rechtssicher ✓ Vollständig ✓ Sofort einsetzbar. Jetzt umsetzen!"
        canonical="/wissen/leitfaden/verarbeitungsverzeichnis"
        keywords="verarbeitungsverzeichnis dsgvo, art 30 dsgvo, verarbeitungstätigkeiten dokumentieren, dsgvo vorlage"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />

        <div className="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
          <div className="container mx-auto max-w-7xl px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  <Database className="h-3 w-3 mr-1" />
                  Verarbeitungsverzeichnis Guide
                </Badge>
                <div className="text-sm text-slate-400">
                  Abschnitt {sections.findIndex(s => s.id === activeSection) + 1} von {sections.length}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400">{Math.round(readingProgress)}% gelesen</span>
                <Button
                  onClick={() => setBookmarked(!bookmarked)}
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-yellow-400"
                >
                  <Bookmark className={cn("h-4 w-4", bookmarked && "fill-current text-yellow-400")} />
                </Button>
              </div>
            </div>
            <Progress value={readingProgress} className="h-1" />
          </div>
        </div>

        <motion.section
          className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                    <ClipboardList className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Verarbeitungsverzeichnis</h1>
                    <p className="text-xl text-orange-300">Art. 30 DSGVO Komplettanleitung</p>
                  </div>
                </div>

                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Das zentrale Dokumentationsinstrument der DSGVO. Lernen Sie, wie Sie ein vollständiges
                  Verzeichnis von Verarbeitungstätigkeiten erstellen, das allen rechtlichen Anforderungen entspricht.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="outline" className="bg-orange-500/10 border-orange-500/20 text-orange-300">
                    <Shield className="h-4 w-4 mr-2" />
                    Art. 30 DSGVO
                  </Badge>
                  <Badge variant="outline" className="bg-red-500/10 border-red-500/20 text-red-300">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Bußgeld bis 20 Mio €
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 border-blue-500/20 text-blue-300">
                    <Clock className="h-4 w-4 mr-2" />
                    45 Min Lesezeit
                  </Badge>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => scrollToSection('grundlagen')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Guide starten
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Download className="h-4 w-4 mr-2" />
                    PDF herunterladen
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">
                        <CounterAnimation value={8} />
                      </div>
                      <div className="text-sm text-slate-400">Pflichtangaben</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">
                        <CounterAnimation value={20} suffix="M€" />
                      </div>
                      <div className="text-sm text-slate-400">Max. Bußgeld</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        <CounterAnimation value={99} suffix="%" />
                      </div>
                      <div className="text-sm text-slate-400">Benötigen VVT</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        <CounterAnimation value={4} />
                      </div>
                      <div className="text-sm text-slate-400">Phasen Plan</div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Was Sie in diesem Guide lernen</h3>
                    <div className="space-y-3">
                      {[
                        'Rechtliche Grundlagen nach Art. 30 DSGVO',
                        'Alle 8 Pflichtangaben im Detail',
                        'Schritt-für-Schritt Umsetzung',
                        'Häufige Fehler und wie Sie diese vermeiden',
                        'Praktische Tools und Vorlagen',
                        'Excel-Template zum Download'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-orange-400" />
                          <span className="text-slate-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-6">
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Inhaltsverzeichnis</h3>
                    <div className="space-y-2">
                      {sections.map((section) => {
                        const IconComponent = section.icon;
                        return (
                          <button
                            key={section.id}
                            onClick={() => {
                              scrollToSection(section.id);
                              setActiveSection(section.id);
                            }}
                            className={cn(
                              "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                              activeSection === section.id
                                ? "bg-orange-500/20 border border-orange-500/50 text-orange-300"
                                : "border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="h-4 w-4" />
                              <div className="text-left">
                                <div className="text-sm font-medium">{section.title}</div>
                              </div>
                            </div>
                            {completedSections.includes(section.id) && (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Schnellaktionen</h3>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        Excel-Vorlage
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Compliance-Checkliste
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Share2 className="h-4 w-4 mr-2" />
                        Guide teilen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div ref={contentRef} className="space-y-20">

                <section id="grundlagen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Einführung & Rechtliche Grundlagen</h2>
                          <Button
                            onClick={() => handleSectionComplete('grundlagen')}
                            variant={completedSections.includes('grundlagen') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('grundlagen') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="p-3 bg-blue-500 rounded-xl">
                                <Info className="h-6 w-6 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-blue-300">Was ist ein Verarbeitungsverzeichnis?</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-lg mb-4">
                              Das <strong>Verzeichnis von Verarbeitungstätigkeiten (VVT)</strong> ist das zentrale Dokumentationsinstrument
                              der DSGVO und eine der wichtigsten Compliance-Pflichten für jedes Unternehmen. Es bietet einen vollständigen
                              Überblick über alle Datenverarbeitungen in Ihrer Organisation.
                            </p>
                            <div className="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
                              <p className="text-slate-300 italic">
                                "Jeder Verantwortliche [...] führt ein Verzeichnis aller Verarbeitungstätigkeiten, die ihrer Zuständigkeit unterliegen."
                                - Art. 30 Abs. 1 DSGVO
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <div className="p-2 bg-green-500 rounded-lg">
                                  <CheckCircle className="h-5 w-5 text-white" />
                                </div>
                                Warum ist es wichtig?
                              </h3>
                              <div className="space-y-3">
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <div className="text-green-400 font-semibold">Transparenz schaffen</div>
                                  <div className="text-slate-300">Vollständiger Überblick über alle Datenverarbeitungen</div>
                                </div>
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <div className="text-green-400 font-semibold">Rechenschaftspflicht</div>
                                  <div className="text-slate-300">Nachweis der DSGVO-Konformität</div>
                                </div>
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <div className="text-green-400 font-semibold">Risiken identifizieren</div>
                                  <div className="text-slate-300">Problematische Verarbeitungen erkennen</div>
                                </div>
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <div className="text-green-400 font-semibold">Compliance-Management</div>
                                  <div className="text-slate-300">Grundlage für Audits und Prüfungen</div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <div className="p-2 bg-red-500 rounded-lg">
                                  <AlertTriangle className="h-5 w-5 text-white" />
                                </div>
                                Bußgeldrisiken
                              </h3>
                              <div className="bg-slate-800/60 rounded-lg p-4 space-y-3">
                                <div className="text-red-400 font-semibold">Bei fehlendem Verzeichnis:</div>
                                <ul className="text-slate-300 space-y-2 ml-4">
                                  <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                    Bis zu <strong>20 Millionen Euro</strong> Bußgeld
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                    Oder <strong>4% des weltweiten Jahresumsatzes</strong>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                    Zusätzliche Zwangsgelder möglich
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                    Reputationsschäden und Vertrauensverlust
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-3 bg-yellow-500 rounded-xl">
                                <AlertTriangle className="h-6 w-6 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-yellow-300">Keine Ausnahme für KMU!</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                              Entgegen einem weit verbreiteten Irrtum gibt es <strong>keine generelle Ausnahme für kleine Unternehmen</strong>.
                              Die Ausnahme in Art. 30 Abs. 5 DSGVO greift nur bei:
                            </p>
                            <ul className="text-slate-300 space-y-2 mt-4 ml-4">
                              <li>• Weniger als 250 Mitarbeitern UND</li>
                              <li>• Nur gelegentlicher Verarbeitung UND</li>
                              <li>• Keinem Risiko für Betroffene UND</li>
                              <li>• Keinen besonderen Datenkategorien</li>
                            </ul>
                            <p className="text-yellow-300 font-semibold mt-4">
                              In der Praxis: 99% aller Unternehmen benötigen ein Verarbeitungsverzeichnis!
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                <section id="pflichtangaben" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Pflichtangaben für Verantwortliche</h2>
                          <Button
                            onClick={() => handleSectionComplete('pflichtangaben')}
                            variant={completedSections.includes('pflichtangaben') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('pflichtangaben') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-white mb-4">Die 8 Pflichtangaben im Überblick</h3>
                            <p className="text-xl text-slate-300 leading-relaxed mb-4">
                              Für jede Verarbeitungstätigkeit müssen Sie folgende Informationen dokumentieren:
                            </p>
                          </div>

                          <div className="space-y-8">
                            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                  1
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-2xl font-bold text-white mb-4">Kontaktdaten</h4>
                                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 mb-4">
                                    <ul className="space-y-2 text-slate-300">
                                      <li>✅ Name und Kontaktdaten des Verantwortlichen</li>
                                      <li>✅ Name und Kontaktdaten des Vertreters (falls vorhanden)</li>
                                      <li>✅ Name und Kontaktdaten des Datenschutzbeauftragten</li>
                                    </ul>
                                  </div>
                                  <div className="bg-slate-800/60 rounded-lg p-4">
                                    <div className="font-semibold text-blue-300 mb-2">Praxis-Beispiel:</div>
                                    <div className="text-slate-400 text-sm font-mono">
                                      Verantwortlicher: Mustermann GmbH<br/>
                                      Anschrift: Max-Planck-Str. 15, 12345 Berlin<br/>
                                      Tel: +49 30 12345678<br/>
                                      E-Mail: datenschutz@mustermann.de<br/>
                                      DSB: Dr. Anna Schmidt, dsb@mustermann.de
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                  2
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-2xl font-bold text-white mb-4">Zwecke der Verarbeitung</h4>
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                      <div className="text-red-300 font-semibold mb-2">❌ Schlecht:</div>
                                      <ul className="text-slate-400 text-sm space-y-1">
                                        <li>• "Kundenverwaltung"</li>
                                        <li>• "Administrative Zwecke"</li>
                                        <li>• "Geschäftstätigkeit"</li>
                                      </ul>
                                    </div>
                                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                      <div className="text-green-300 font-semibold mb-2">✅ Gut:</div>
                                      <ul className="text-slate-400 text-sm space-y-1">
                                        <li>• "Bearbeitung von Online-Shop Bestellungen"</li>
                                        <li>• "Versand wöchentlicher Newsletter"</li>
                                        <li>• "Lohnabrechnung für Mitarbeiter"</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="bg-green-500/5 rounded-lg p-4 border-l-4 border-green-500">
                                    <div className="font-semibold text-green-300 mb-2">Tipp:</div>
                                    <div className="text-slate-400 text-sm">
                                      Zwecke müssen konkret, spezifisch und nachvollziehbar sein. Vermeiden Sie vage Formulierungen!
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                  3
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-2xl font-bold text-white mb-4">Kategorien betroffener Personen</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                                    <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                                      <div className="text-purple-300 font-semibold mb-1">Kunden</div>
                                      <div className="text-slate-400 text-sm">Käufer, Interessenten, Abonnenten</div>
                                    </div>
                                    <div className="bg-pink-500/10 rounded-lg p-3 border border-pink-500/20">
                                      <div className="text-pink-300 font-semibold mb-1">Mitarbeiter</div>
                                      <div className="text-slate-400 text-sm">Beschäftigte, Bewerber, Ehemalige</div>
                                    </div>
                                    <div className="bg-purple-400/10 rounded-lg p-3 border border-purple-400/20">
                                      <div className="text-purple-400 font-semibold mb-1">Partner</div>
                                      <div className="text-slate-400 text-sm">Lieferanten, Dienstleister</div>
                                    </div>
                                  </div>
                                  <div className="bg-purple-500/5 rounded-lg p-4 border-l-4 border-purple-500">
                                    <div className="font-semibold text-purple-300 mb-2">Wichtig:</div>
                                    <div className="text-slate-400 text-sm">
                                      Besondere Kategorien wie Minderjährige oder schutzbedürftige Personen gesondert kennzeichnen!
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                  4
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-2xl font-bold text-white mb-4">Kategorien personenbezogener Daten</h4>
                                  <div className="space-y-4">
                                    <div className="bg-slate-800/60 rounded-lg p-4">
                                      <h5 className="text-orange-300 font-semibold mb-3">Strukturierte Übersicht:</h5>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                        <div>
                                          <div className="text-slate-200 font-medium mb-1">Stammdaten</div>
                                          <div className="text-slate-400">Name, Adresse, Geburtsdatum</div>
                                        </div>
                                        <div>
                                          <div className="text-slate-200 font-medium mb-1">Kontaktdaten</div>
                                          <div className="text-slate-400">E-Mail, Telefon, Fax</div>
                                        </div>
                                        <div>
                                          <div className="text-slate-200 font-medium mb-1">Vertragsdaten</div>
                                          <div className="text-slate-400">Kundennummer, Bestellhistorie</div>
                                        </div>
                                        <div>
                                          <div className="text-slate-200 font-medium mb-1">Technische Daten</div>
                                          <div className="text-slate-400">IP-Adresse, Browser-Info</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                      <div className="flex items-center gap-2 text-red-300 font-semibold mb-2">
                                        <AlertTriangle className="h-5 w-5" />
                                        Besondere Kategorien (Art. 9 DSGVO)
                                      </div>
                                      <div className="text-slate-400 text-sm">
                                        Gesundheitsdaten, biometrische Daten, ethnische Herkunft etc. müssen speziell gekennzeichnet werden!
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                  5
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-2xl font-bold text-white mb-4">Kategorien von Empfängern</h4>
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div className="bg-teal-500/10 rounded-lg p-4 border border-teal-500/20">
                                      <div className="text-teal-300 font-semibold mb-3">Interne Empfänger</div>
                                      <ul className="text-slate-400 text-sm space-y-1">
                                        <li>• Fachabteilungen</li>
                                        <li>• Tochtergesellschaften</li>
                                        <li>• Konzernunternehmen</li>
                                      </ul>
                                    </div>
                                    <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                                      <div className="text-cyan-300 font-semibold mb-3">Externe Empfänger</div>
                                      <ul className="text-slate-400 text-sm space-y-1">
                                        <li>• IT-Dienstleister</li>
                                        <li>• Marketing-Agenturen</li>
                                        <li>• Behörden (bei rechtl. Verpflichtung)</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                  6
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-2xl font-bold text-white mb-4">Übermittlungen in Drittländer</h4>
                                  <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20 mb-4">
                                    <div className="font-semibold text-indigo-300 mb-2">Angaben bei Drittlandübermittlung:</div>
                                    <ul className="text-slate-400 space-y-1">
                                      <li>✅ Zielländer konkret benennen</li>
                                      <li>✅ Rechtsgrundlage für Übermittlung</li>
                                      <li>✅ Geeignete Garantien dokumentieren</li>
                                    </ul>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <div className="bg-slate-800/60 rounded-lg p-3">
                                      <div className="text-indigo-300 font-medium">Angemessenheitsbeschluss</div>
                                      <div className="text-slate-400">EU-Kommission bestätigt Datenschutzniveau</div>
                                    </div>
                                    <div className="bg-slate-800/60 rounded-lg p-3">
                                      <div className="text-purple-300 font-medium">Standardvertragsklauseln</div>
                                      <div className="text-slate-400">Von EU genehmigte Vertragsklauseln</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                  7
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-2xl font-bold text-white mb-4">Löschfristen</h4>
                                  <div className="space-y-3">
                                    <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                                      <h5 className="text-yellow-300 font-semibold mb-2">Typische Löschfristen:</h5>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                        <div className="text-slate-400">
                                          <span className="text-slate-200">Kundendaten:</span> 10 Jahre (HGB)
                                        </div>
                                        <div className="text-slate-400">
                                          <span className="text-slate-200">Bewerberdaten:</span> 6 Monate
                                        </div>
                                        <div className="text-slate-400">
                                          <span className="text-slate-200">Mitarbeiterdaten:</span> Bis 10 Jahre
                                        </div>
                                        <div className="text-slate-400">
                                          <span className="text-slate-200">Marketing:</span> Bis Widerruf
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                  8
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-2xl font-bold text-white mb-4">Technische und organisatorische Maßnahmen</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                      <div className="text-red-300 font-semibold mb-2">Technische Maßnahmen</div>
                                      <ul className="text-slate-400 text-sm space-y-1">
                                        <li>• Verschlüsselung</li>
                                        <li>• Pseudonymisierung</li>
                                        <li>• Zugangskontrolle</li>
                                      </ul>
                                    </div>
                                    <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                                      <div className="text-pink-300 font-semibold mb-2">Organisatorische Maßnahmen</div>
                                      <ul className="text-slate-400 text-sm space-y-1">
                                        <li>• Schulungen</li>
                                        <li>• Prozesse</li>
                                        <li>• Kontrollen</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                <section id="umsetzung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Praktische Umsetzung</h2>
                          <Button
                            onClick={() => handleSectionComplete('umsetzung')}
                            variant={completedSections.includes('umsetzung') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('umsetzung') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                              <div className="p-2 bg-green-500 rounded-lg">
                                <ClipboardList className="h-6 w-6 text-white" />
                              </div>
                              Der 4-Phasen-Plan
                            </h3>
                            <p className="text-xl text-slate-300 leading-relaxed">
                              Mit diesem strukturierten Ansatz erstellen Sie Ihr Verarbeitungsverzeichnis effizient und vollständig.
                            </p>
                          </div>

                          <div className="space-y-6">
                            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                  1
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-white mb-2">Phase 1: Vorbereitung (1-2 Wochen)</h4>
                                  <p className="text-slate-300">Grundlagen schaffen und Team zusammenstellen</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <h5 className="text-blue-300 font-semibold mb-3">📋 Aufgaben:</h5>
                                  <ul className="text-slate-400 text-sm space-y-2">
                                    <li>✓ Projektteam bilden</li>
                                    <li>✓ Zeitplan erstellen</li>
                                    <li>✓ Abteilungen identifizieren</li>
                                    <li>✓ Templates vorbereiten</li>
                                  </ul>
                                </div>
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <h5 className="text-indigo-300 font-semibold mb-3">👥 Beteiligte:</h5>
                                  <ul className="text-slate-400 text-sm space-y-2">
                                    <li>• Geschäftsführung</li>
                                    <li>• Datenschutzbeauftragter</li>
                                    <li>• IT-Leitung</li>
                                    <li>• Abteilungsleiter</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                  2
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-white mb-2">Phase 2: Datenerhebung (2-4 Wochen)</h4>
                                  <p className="text-slate-300">Systematische Erfassung aller Verarbeitungen</p>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                  <h5 className="text-green-300 font-semibold mb-3">🔍 Vorgehen:</h5>
                                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                                    <div className="bg-slate-800/60 rounded-lg p-3">
                                      <div className="text-green-300 font-medium mb-1">Interviews</div>
                                      <div className="text-slate-400 text-sm">Mit allen Abteilungsleitern</div>
                                    </div>
                                    <div className="bg-slate-800/60 rounded-lg p-3">
                                      <div className="text-emerald-300 font-medium mb-1">System-Inventur</div>
                                      <div className="text-slate-400 text-sm">IT-Systeme dokumentieren</div>
                                    </div>
                                    <div className="bg-slate-800/60 rounded-lg p-3">
                                      <div className="text-green-400 font-medium mb-1">Prozessanalyse</div>
                                      <div className="text-slate-400 text-sm">Datenflüsse nachvollziehen</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <h5 className="text-emerald-300 font-semibold mb-2">💡 Praxis-Tipp:</h5>
                                  <p className="text-slate-400 text-sm">
                                    Nutzen Sie einen standardisierten Fragebogen für die Interviews.
                                    So stellen Sie sicher, dass keine wichtigen Informationen vergessen werden.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                  3
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-white mb-2">Phase 3: Dokumentation (1-2 Wochen)</h4>
                                  <p className="text-slate-300">Strukturierte Erfassung und Qualitätssicherung</p>
                                </div>
                              </div>
                              <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                                <h5 className="text-purple-300 font-semibold mb-4">📝 Dokumentationsschritte:</h5>
                                <div className="space-y-3">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                                    <div>
                                      <div className="text-purple-300 font-medium">Verzeichniseinträge erstellen</div>
                                      <div className="text-slate-400 text-sm">Pro Verarbeitungstätigkeit ein Eintrag</div>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                                    <div>
                                      <div className="text-purple-300 font-medium">Interne Abstimmung</div>
                                      <div className="text-slate-400 text-sm">Mit Fachabteilungen validieren</div>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                                    <div>
                                      <div className="text-purple-300 font-medium">Rechtsprüfung</div>
                                      <div className="text-slate-400 text-sm">Durch Datenschutzbeauftragten</div>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">4</div>
                                    <div>
                                      <div className="text-purple-300 font-medium">Freigabe</div>
                                      <div className="text-slate-400 text-sm">Durch Geschäftsführung</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
                              <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                  4
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-white mb-2">Phase 4: Implementierung (1 Woche)</h4>
                                  <p className="text-slate-300">Einführung und kontinuierliche Pflege</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
                                  <h5 className="text-orange-300 font-semibold mb-3">🚀 Einführung:</h5>
                                  <ul className="text-slate-400 text-sm space-y-2">
                                    <li>✓ Mitarbeiter schulen</li>
                                    <li>✓ Prozesse etablieren</li>
                                    <li>✓ Verantwortlichkeiten klären</li>
                                    <li>✓ Aktualisierung planen</li>
                                  </ul>
                                </div>
                                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                  <h5 className="text-red-300 font-semibold mb-3">🔄 Kontinuierliche Pflege:</h5>
                                  <ul className="text-slate-400 text-sm space-y-2">
                                    <li>• Quartalsweise Review</li>
                                    <li>• Bei neuen Projekten aktualisieren</li>
                                    <li>• Änderungen dokumentieren</li>
                                    <li>• Versionskontrolle führen</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                              <div className="p-2 bg-indigo-500 rounded-lg">
                                <FileText className="h-6 w-6 text-white" />
                              </div>
                              Vollständiges Praxis-Beispiel
                            </h3>
                            <div className="bg-slate-800/60 rounded-lg p-6">
                              <h4 className="text-indigo-300 font-semibold mb-4">Verarbeitungstätigkeit: "Online-Shop Bestellabwicklung"</h4>
                              <div className="space-y-3 text-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <span className="text-indigo-300 font-medium">Verantwortlicher:</span>
                                    <div className="text-slate-400">Mustermann GmbH, Berlin</div>
                                  </div>
                                  <div>
                                    <span className="text-indigo-300 font-medium">Zweck:</span>
                                    <div className="text-slate-400">Bestellabwicklung und Kundenservice</div>
                                  </div>
                                  <div>
                                    <span className="text-indigo-300 font-medium">Rechtsgrundlage:</span>
                                    <div className="text-slate-400">Art. 6 Abs. 1 lit. b DSGVO</div>
                                  </div>
                                  <div>
                                    <span className="text-indigo-300 font-medium">Betroffene:</span>
                                    <div className="text-slate-400">Online-Shop Kunden</div>
                                  </div>
                                  <div>
                                    <span className="text-indigo-300 font-medium">Datenkategorien:</span>
                                    <div className="text-slate-400">Name, Adresse, E-Mail, Bestelldaten</div>
                                  </div>
                                  <div>
                                    <span className="text-indigo-300 font-medium">Empfänger:</span>
                                    <div className="text-slate-400">Versanddienstleister, Zahlungsanbieter</div>
                                  </div>
                                  <div>
                                    <span className="text-indigo-300 font-medium">Drittland:</span>
                                    <div className="text-slate-400">USA (PayPal) - Angemessenheitsbeschluss</div>
                                  </div>
                                  <div>
                                    <span className="text-indigo-300 font-medium">Löschfrist:</span>
                                    <div className="text-slate-400">10 Jahre (§ 147 AO)</div>
                                  </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-700">
                                  <span className="text-indigo-300 font-medium">TOM:</span>
                                  <div className="text-slate-400">SSL-Verschlüsselung, Zugriffskontrolle, regelmäßige Backups</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                <section id="fehler" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Häufige Fehler vermeiden</h2>
                          <Button
                            onClick={() => handleSectionComplete('fehler')}
                            variant={completedSections.includes('fehler') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('fehler') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-3 bg-red-500 rounded-xl">
                                <AlertTriangle className="h-6 w-6 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold text-red-300">Vermeiden Sie diese kostspieligen Fehler!</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                              Diese Fehler führen regelmäßig zu Bußgeldern und Compliance-Problemen.
                              Lernen Sie aus den Fehlern anderer und vermeiden Sie teure Konsequenzen.
                            </p>
                          </div>

                          <div className="space-y-6">
                            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                                  1
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-xl font-bold text-red-300 mb-3">Unvollständigkeit</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                      <div className="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                                      <p className="text-slate-400 text-sm">Nicht alle Verarbeitungen erfasst, besonders "kleine" Prozesse übersehen</p>
                                    </div>
                                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                      <div className="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                                      <p className="text-slate-400 text-sm">Systematische Bestandsaufnahme aller Geschäftsprozesse durchführen</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                                  2
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-xl font-bold text-red-300 mb-3">Vage Zweckbeschreibungen</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                      <div className="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                                      <p className="text-slate-400 text-sm">"Administrative Zwecke", "Geschäftstätigkeit"</p>
                                    </div>
                                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                      <div className="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                                      <p className="text-slate-400 text-sm">Spezifische, nachvollziehbare Zweckangaben formulieren</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                                  3
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-xl font-bold text-red-300 mb-3">Fehlende Rechtsgrundlagen</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                      <div className="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                                      <p className="text-slate-400 text-sm">Rechtsgrundlage nicht angegeben oder falsch zugeordnet</p>
                                    </div>
                                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                      <div className="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                                      <p className="text-slate-400 text-sm">Für jeden Zweck passende Rechtsgrundlage aus Art. 6 DSGVO prüfen</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                                  4
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-xl font-bold text-red-300 mb-3">Drittlandübermittlungen übersehen</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                      <div className="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                                      <p className="text-slate-400 text-sm">Cloud-Services in USA nicht als Drittlandübermittlung erkannt</p>
                                    </div>
                                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                      <div className="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                                      <p className="text-slate-400 text-sm">Alle Server-Standorte und Dienstleister-Locations prüfen</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                                  5
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-xl font-bold text-red-300 mb-3">Veraltete Informationen</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                      <div className="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                                      <p className="text-slate-400 text-sm">Verzeichnis wird nicht aktualisiert, alte Prozesse bleiben drin</p>
                                    </div>
                                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                      <div className="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                                      <p className="text-slate-400 text-sm">Regelmäßige Überprüfung (mindestens jährlich) etablieren</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                              <div className="p-2 bg-green-500 rounded-lg">
                                <CheckCircle className="h-6 w-6 text-white" />
                              </div>
                              Best Practices für nachhaltigen Erfolg
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                <h4 className="text-green-300 font-semibold mb-3">🔄 Lebendiges Dokument</h4>
                                <ul className="text-slate-400 text-sm space-y-2">
                                  <li>• Quartalsweise Überprüfung</li>
                                  <li>• Automatische Erinnerungen</li>
                                  <li>• Change-Management Integration</li>
                                  <li>• Versionskontrolle</li>
                                </ul>
                              </div>
                              <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                                <h4 className="text-emerald-300 font-semibold mb-3">👥 Organisatorische Verankerung</h4>
                                <ul className="text-slate-400 text-sm space-y-2">
                                  <li>• Klare Verantwortlichkeiten</li>
                                  <li>• Mitarbeiterschulung</li>
                                  <li>• Eskalationswege</li>
                                  <li>• Compliance-Reviews</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                <section id="tools" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Tools und Vorlagen</h2>
                          <Button
                            onClick={() => handleSectionComplete('tools')}
                            variant={completedSections.includes('tools') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('tools') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                              <div className="p-2 bg-blue-500 rounded-lg">
                                <Settings className="h-6 w-6 text-white" />
                              </div>
                              Empfohlene Software-Lösungen
                            </h3>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                              <h4 className="text-xl font-bold text-green-300 mb-4">Für kleine Unternehmen</h4>
                              <div className="space-y-3">
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <h5 className="text-green-300 font-semibold mb-2">Microsoft Excel / Google Sheets</h5>
                                  <p className="text-slate-400 text-sm mb-2">Kosteneffizient für wenige Verarbeitungen</p>
                                  <div className="flex items-center gap-2">
                                    <span className="text-green-400">€</span>
                                    <span className="text-slate-600">€€€€</span>
                                  </div>
                                </div>
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <h5 className="text-green-300 font-semibold mb-2">Open-Source-Lösungen</h5>
                                  <p className="text-slate-400 text-sm mb-2">Privacyidea, DPIA-Tool der CNIL</p>
                                  <div className="flex items-center gap-2">
                                    <span className="text-green-400">Kostenlos</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                              <h4 className="text-xl font-bold text-purple-300 mb-4">Für mittlere/große Unternehmen</h4>
                              <div className="space-y-3">
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <h5 className="text-purple-300 font-semibold mb-2">Spezialisierte DSGVO-Tools</h5>
                                  <p className="text-slate-400 text-sm mb-2">OneTrust, TrustArc, DataGuard</p>
                                  <div className="flex items-center gap-2">
                                    <span className="text-purple-400">€€€</span>
                                    <span className="text-slate-600">€€</span>
                                  </div>
                                </div>
                                <div className="bg-slate-800/60 rounded-lg p-4">
                                  <h5 className="text-pink-300 font-semibold mb-2">Integrierte Compliance-Plattformen</h5>
                                  <p className="text-slate-400 text-sm mb-2">ServiceNow GRC, MetricStream</p>
                                  <div className="flex items-center gap-2">
                                    <span className="text-pink-400">€€€€</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">📊 Excel-Vorlage: Verarbeitungsverzeichnis</h3>
                            <div className="bg-slate-800/60 rounded-lg p-6 overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-slate-700">
                                    <th className="text-left text-indigo-300 p-2">Nr.</th>
                                    <th className="text-left text-indigo-300 p-2">Verarbeitung</th>
                                    <th className="text-left text-indigo-300 p-2">Zweck</th>
                                    <th className="text-left text-indigo-300 p-2">Rechtsgrundlage</th>
                                    <th className="text-left text-indigo-300 p-2">Betroffene</th>
                                    <th className="text-left text-indigo-300 p-2">Datenkategorien</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-slate-700/50">
                                    <td className="text-slate-400 p-2">001</td>
                                    <td className="text-slate-400 p-2">Newsletter</td>
                                    <td className="text-slate-400 p-2">Marketing</td>
                                    <td className="text-slate-400 p-2">Art. 6 Abs. 1 lit. a</td>
                                    <td className="text-slate-400 p-2">Abonnenten</td>
                                    <td className="text-slate-400 p-2">E-Mail, Name</td>
                                  </tr>
                                  <tr className="border-b border-slate-700/50">
                                    <td className="text-slate-400 p-2">002</td>
                                    <td className="text-slate-400 p-2">Bewerbermgmt</td>
                                    <td className="text-slate-400 p-2">Recruiting</td>
                                    <td className="text-slate-400 p-2">Art. 6 Abs. 1 lit. b</td>
                                    <td className="text-slate-400 p-2">Bewerber</td>
                                    <td className="text-slate-400 p-2">CV, Kontakt</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                              <Button className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
                                <Download className="h-4 w-4 mr-2" />
                                Download Excel-Template
                              </Button>
                              <span className="text-slate-400 text-sm">Enthält alle Pflichtfelder nach Art. 30 DSGVO</span>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">✅ Compliance-Checkliste</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <h4 className="text-yellow-300 font-semibold">Vollständigkeitsprüfung</h4>
                                <div className="space-y-2">
                                  <label className="flex items-center gap-3 text-slate-300">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-500 focus:ring-yellow-500" />
                                    <span>Alle Geschäftsprozesse erfasst</span>
                                  </label>
                                  <label className="flex items-center gap-3 text-slate-300">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-500 focus:ring-yellow-500" />
                                    <span>Alle IT-Systeme berücksichtigt</span>
                                  </label>
                                  <label className="flex items-center gap-3 text-slate-300">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-500 focus:ring-yellow-500" />
                                    <span>Website und Apps einbezogen</span>
                                  </label>
                                  <label className="flex items-center gap-3 text-slate-300">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-500 focus:ring-yellow-500" />
                                    <span>Archive und Backups geprüft</span>
                                  </label>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <h4 className="text-orange-300 font-semibold">Qualitätsprüfung</h4>
                                <div className="space-y-2">
                                  <label className="flex items-center gap-3 text-slate-300">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-orange-500 focus:ring-orange-500" />
                                    <span>Zwecke spezifisch formuliert</span>
                                  </label>
                                  <label className="flex items-center gap-3 text-slate-300">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-orange-500 focus:ring-orange-500" />
                                    <span>Rechtsgrundlagen korrekt</span>
                                  </label>
                                  <label className="flex items-center gap-3 text-slate-300">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-orange-500 focus:ring-orange-500" />
                                    <span>Löschfristen realistisch</span>
                                  </label>
                                  <label className="flex items-center gap-3 text-slate-300">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-orange-500 focus:ring-orange-500" />
                                    <span>TOM angemessen beschrieben</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                              <div className="p-2 bg-red-500 rounded-lg">
                                <AlertTriangle className="h-6 w-6 text-white" />
                              </div>
                              Notfall: Behördenanfrage
                            </h3>
                            <div className="space-y-4">
                              <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                <h4 className="text-red-300 font-semibold mb-3">🚨 Sofortmaßnahmen (1 Stunde)</h4>
                                <ul className="text-slate-400 space-y-2">
                                  <li>• Krisenstab aktivieren (DSB, GF, Rechtsabteilung)</li>
                                  <li>• Frist prüfen und dokumentieren</li>
                                  <li>• Vollständigkeit des Verzeichnisses checken</li>
                                  <li>• Bei Unsicherheit: Rechtsbeistand kontaktieren</li>
                                </ul>
                              </div>
                              <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                                <h4 className="text-pink-300 font-semibold mb-3">📋 Kurzfristige Maßnahmen (1 Tag)</h4>
                                <ul className="text-slate-400 space-y-2">
                                  <li>• Verzeichnis finalisieren</li>
                                  <li>• Interne Abstimmung durchführen</li>
                                  <li>• Qualitätsprüfung vornehmen</li>
                                  <li>• Kommunikationsstrategie abstimmen</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Nächste Schritte</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button asChild className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                      <Link to="/wissen/leitfaden/betroffenenrechte">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Betroffenenrechte Guide
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <Link to="/assessment/dsgvo">
                        <Target className="h-4 w-4 mr-2" />
                        DSGVO Assessment
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Verarbeitungsverzeichnis automatisch erstellen
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Erstellen und pflegen Sie Ihr ROPA/VVT ohne manuellen Aufwand.
                      Unsere DSGVO-Software automatisiert die Dokumentation aller Verarbeitungstätigkeiten
                      und hält Ihr Verzeichnis immer aktuell.
                    </p>
                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => window.location.href = '/features#verarbeitungsverzeichnis-ropa'}
                    >
                      ROPA-Software ansehen
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
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

export default VerarbeitungsverzeichnisGuide;
