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
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Zap,
  Brain,
  Award,
  TrendingUp,
  Circle,
  Settings,
  Database,
  Globe,
  Building2,
  UserCheck,
  FileCheck,
  Search,
  UserX,
  AlertOctagon,
  BarChart3,
  PieChart,
  Activity,
  Layers,
  Filter,
  FileSearch,
  ClipboardCheck,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark,
  Play,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

const DsfaDurchfuehrungGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('grundlagen');
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [riskScore, setRiskScore] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    { id: 'grundlagen', title: 'DSFA-Grundlagen & Anwendungsbereich', icon: Info },
    { id: 'schwellwertanalyse', title: 'Schwellwertanalyse durchführen', icon: Filter },
    { id: 'vorbereitung', title: 'DSFA-Vorbereitung & Projektplanung', icon: ClipboardCheck },
    { id: 'risikobewertung', title: 'Risikobewertung & Analyse', icon: BarChart3 },
    { id: 'massnahmen', title: 'Schutzmaßnahmen entwickeln', icon: Shield },
    { id: 'dokumentation', title: 'Dokumentation & Reporting', icon: FileText }
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
        title="DSFA Durchführung – Datenschutz-Folgenabschätzung Leitfaden"
        description="Datenschutz-Folgenabschätzung (DSFA) professionell durchführen: Wann nötig, wie umsetzen, Dokumentation. ✓ Schritt-für-Schritt ✓ Vorlagen ✓ Praxisbeispiele. Jetzt DSFA starten!"
        canonical="/wissen/leitfaden/dsfa-durchfuehrung"
        keywords="dsfa durchführung, datenschutz folgenabschätzung, dpia guide, art 35 dsgvo, risikobewertung datenschutz"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />

        <div className="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
          <div className="container mx-auto max-w-7xl px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <FileCheck className="h-3 w-3 mr-1" />
                  DSFA-Leitfaden
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
                  className={bookmarked ? "text-yellow-400" : "text-slate-400"}
                >
                  <Bookmark className={cn("h-4 w-4", bookmarked && "fill-current")} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Progress value={readingProgress} className="h-2" />
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
                <div className="flex items-center gap-2 mb-6 text-sm">
                  <Link to="/wissen" className="text-slate-400 hover:text-purple-300 transition-colors">Wissen</Link>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                  <Link to="/wissen/dsgvo" className="text-slate-400 hover:text-purple-300 transition-colors">DSGVO</Link>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                  <span className="text-purple-300">DSFA durchführen</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <FileCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Datenschutz-Folgenabschätzung</h1>
                    <p className="text-xl text-purple-300">Art. 35 DSGVO Komplettanleitung</p>
                  </div>
                </div>

                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Schritt-für-Schritt Anleitung für eine systematische DSFA nach Art. 35 DSGVO.
                  Lernen Sie, wie Sie Datenschutzrisiken professionell bewerten und minimieren.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-300">
                    <Shield className="h-4 w-4 mr-2" />
                    Art. 35 DSGVO
                  </Badge>
                  <Badge variant="outline" className="bg-pink-500/10 border-pink-500/20 text-pink-300">
                    <Target className="h-4 w-4 mr-2" />
                    Fortgeschritten
                  </Badge>
                  <Badge variant="outline" className="bg-red-500/10 border-red-500/20 text-red-300">
                    <Clock className="h-4 w-4 mr-2" />
                    85 Min Lesezeit
                  </Badge>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => scrollToSection('grundlagen')}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Guide starten
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Download className="h-4 w-4 mr-2" />
                    DSFA-Template
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
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        <CounterAnimation value={6} />
                      </div>
                      <div className="text-sm text-slate-400">DSFA-Phasen</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-pink-400 mb-2">
                        <CounterAnimation value={20} suffix="M€" />
                      </div>
                      <div className="text-sm text-slate-400">Max. Bußgeld</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">
                        <CounterAnimation value={3} />
                      </div>
                      <div className="text-sm text-slate-400">Kriterien für DSFA</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">
                        <CounterAnimation value={9} />
                      </div>
                      <div className="text-sm text-slate-400">Schritte</div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Was Sie in diesem Guide lernen</h3>
                    <div className="space-y-3">
                      {[
                        'Wann eine DSFA erforderlich ist',
                        'Schwellwertanalyse durchführen',
                        'DSFA-Team zusammenstellen',
                        'Systematische Risikobewertung',
                        'Schutzmaßnahmen entwickeln',
                        'DSFA-Bericht dokumentieren'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-purple-400" />
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

        <div className="pt-16 pb-16 px-4 sm:px-6 lg:px-8" ref={contentRef}>
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-40">
                  <Card className="bg-slate-800/60 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-4">Inhaltsverzeichnis</h3>
                      <div className="space-y-2">
                        {sections.map((section) => {
                          const Icon = section.icon;
                          return (
                            <button
                              key={section.id}
                              onClick={() => scrollToSection(section.id)}
                              className={cn(
                                "w-full text-left p-3 rounded-lg transition-all duration-200",
                                activeSection === section.id
                                  ? "bg-purple-500/20 border border-purple-500/30 text-purple-300"
                                  : "hover:bg-slate-700/50 text-slate-300"
                              )}
                            >
                              <div className="flex items-center gap-3 mb-1">
                                <Icon className="h-4 w-4" />
                                <div className="text-sm font-medium flex-grow">{section.title}</div>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-700">
                        <div className="text-sm text-slate-400 mb-2">Lesefortschritt</div>
                        <Progress value={readingProgress} className="h-2 mb-2" />
                        <div className="text-xs text-slate-400">
                          {Math.round(readingProgress)}% abgeschlossen
                        </div>
                      </div>

                      {completedSections.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-700">
                          <div className="text-sm text-slate-400 mb-2">
                            Abgeschlossen: {completedSections.length}/{sections.length}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {sections.map((section) => (
                              <div
                                key={section.id}
                                className={cn(
                                  "w-2 h-2 rounded-full",
                                  completedSections.includes(section.id)
                                    ? "bg-green-500"
                                    : "bg-slate-600"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-12">
                <section id="grundlagen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-500 rounded-lg">
                        <Info className="h-6 w-6 text-white" />
                      </div>
                      DSFA-Grundlagen & Anwendungsbereich
                    </h2>

                    <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-purple-500 rounded-xl">
                            <FileText className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-purple-300">Was ist eine DSFA?</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg mb-4">
                          Die <strong>Datenschutz-Folgenabschätzung (DSFA)</strong> ist ein systematisches Verfahren zur Bewertung
                          und Minimierung von Datenschutzrisiken bei Verarbeitungen, die ein hohes Risiko für die Rechte und
                          Freiheiten natürlicher Personen zur Folge haben können.
                        </p>
                        <Card className="bg-purple-500/5 border-l-4 border-purple-500">
                          <CardContent className="p-4">
                            <p className="text-slate-300 italic">
                              "Hat eine Form der Verarbeitung [...] voraussichtlich ein hohes Risiko für die Rechte und Freiheiten
                              natürlicher Personen zur Folge, so führt der Verantwortliche vorab eine Abschätzung der Folgen der
                              vorgesehenen Verarbeitungsvorgänge für den Schutz personenbezogener Daten durch."
                              <span className="block mt-2 text-purple-300">- Art. 35 Abs. 1 DSGVO</span>
                            </p>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-red-500 rounded-xl">
                            <AlertTriangle className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-red-300">Wann ist eine DSFA zwingend erforderlich?</h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          <Card className="bg-red-500/10 border border-red-500/20">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <h4 className="font-semibold text-red-300">Systematische Bewertung</h4>
                              </div>
                              <p className="text-slate-300 text-sm mb-3">
                                Systematische und umfassende Bewertung persönlicher Aspekte natürlicher Personen,
                                die sich auf automatisierte Verarbeitung einschließlich Profiling gründet.
                              </p>
                              <div className="text-xs text-slate-400">
                                <span className="font-semibold">Beispiele:</span> Scoring, automatisierte Kreditprüfung,
                                Personalauswahl mittels KI
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-orange-500/10 border border-orange-500/20">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <h4 className="font-semibold text-orange-300">Besondere Kategorien</h4>
                              </div>
                              <p className="text-slate-300 text-sm mb-3">
                                Umfangreiche Verarbeitung besonderer Kategorien personenbezogener Daten
                                oder von Daten über strafrechtliche Verurteilungen.
                              </p>
                              <div className="text-xs text-slate-400">
                                <span className="font-semibold">Beispiele:</span> Gesundheitsdaten-Plattformen,
                                Personaldossiers mit Gesundheitsinformationen
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-yellow-500/10 border border-yellow-500/20">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <h4 className="font-semibold text-yellow-300">Systematische Überwachung</h4>
                              </div>
                              <p className="text-slate-300 text-sm mb-3">
                                Systematische umfangreiche Überwachung öffentlich zugänglicher Bereiche.
                              </p>
                              <div className="text-xs text-slate-400">
                                <span className="font-semibold">Beispiele:</span> Videoüberwachung mit Gesichtserkennung,
                                Smart City Projekte mit Tracking
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-green-500 rounded-lg">
                            <Info className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-green-300">Best Practice Tipp</h4>
                        </div>
                        <p className="text-slate-300 text-sm">
                          <strong>Im Zweifel: DSFA durchführen!</strong> Eine "unnötige" DSFA schadet nicht und zeigt proaktive
                          Compliance-Haltung. Das Unterlassen einer erforderlichen DSFA kann hingegen zu erheblichen Bußgeldern führen.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="schwellwertanalyse" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-500 rounded-lg">
                        <Filter className="h-6 w-6 text-white" />
                      </div>
                      Schwellwertanalyse durchführen
                    </h2>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-blue-500 rounded-xl">
                            <ClipboardCheck className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-blue-300">DSFA-Schwellwert-Test</h3>
                        </div>

                        <p className="text-slate-300 mb-6">
                          Prüfen Sie systematisch, ob Ihre Verarbeitung eine DSFA erfordert:
                        </p>

                        <div className="space-y-4">
                          <Card className="bg-blue-500/10 border border-blue-500/20">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-500 rounded-lg flex-shrink-0 mt-1">
                                  <span className="text-white font-bold text-sm">1</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-blue-300 mb-2">Blacklist-Prüfung</h4>
                                  <p className="text-slate-300 text-sm mb-2">
                                    Steht Ihre Verarbeitung auf der <strong>Blacklist der Aufsichtsbehörde</strong>?
                                    In Deutschland führt jede Landesbehörde eine Liste DSFA-pflichtiger Verarbeitungen.
                                  </p>
                                  <div className="text-xs text-slate-400">
                                    ✓ Wenn JA → DSFA ist zwingend erforderlich
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-indigo-500/10 border border-indigo-500/20">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-indigo-500 rounded-lg flex-shrink-0 mt-1">
                                  <span className="text-white font-bold text-sm">2</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-indigo-300 mb-2">Risikofaktoren-Check</h4>
                                  <p className="text-slate-300 text-sm mb-2">
                                    Treffen mindestens <strong>zwei der folgenden Kriterien</strong> zu?
                                  </p>
                                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                                    <div>• Bewertung oder Scoring</div>
                                    <div>• Automatisierte Entscheidungsfindung</div>
                                    <div>• Systematische Überwachung</div>
                                    <div>• Besondere Datenkategorien</div>
                                    <div>• Große Datenmengen</div>
                                    <div>• Datenabgleich/-verknüpfung</div>
                                    <div>• Vulnerable Gruppen</div>
                                    <div>• Innovative Technologie</div>
                                  </div>
                                  <div className="text-xs text-slate-400 mt-2">
                                    ✓ Wenn JA → DSFA ist wahrscheinlich erforderlich
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-purple-500/10 border border-purple-500/20">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-purple-500 rounded-lg flex-shrink-0 mt-1">
                                  <span className="text-white font-bold text-sm">3</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-purple-300 mb-2">Whitelist-Prüfung</h4>
                                  <p className="text-slate-300 text-sm mb-2">
                                    Gibt es für Ihre Verarbeitung bereits eine <strong>Whitelist-Eintragung</strong>
                                    oder einen vergleichbaren Präzedenzfall?
                                  </p>
                                  <div className="text-xs text-slate-400">
                                    ✓ Wenn JA → DSFA ist möglicherweise nicht erforderlich (aber Dokumentation empfohlen)
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <BarChart3 className="h-5 w-5" />
                          Interaktiver Risiko-Check
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-slate-800/60 rounded-lg p-6">
                            <h4 className="font-semibold text-orange-300 mb-4">Ihr Risiko-Score</h4>
                            <div className="mb-4">
                              <Progress value={riskScore} className="h-4" />
                            </div>
                            <div className="text-center text-2xl font-bold text-orange-300 mb-6">
                              {riskScore}%
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <Button
                                onClick={() => setRiskScore(Math.min(100, riskScore + 12.5))}
                                variant="outline"
                                size="sm"
                                className="border-orange-500/30 hover:bg-orange-500/10"
                              >
                                <ThumbsUp className="h-4 w-4 mr-2" />
                                Kriterium trifft zu
                              </Button>
                              <Button
                                onClick={() => setRiskScore(Math.max(0, riskScore - 12.5))}
                                variant="outline"
                                size="sm"
                                className="border-slate-600 hover:bg-slate-700"
                              >
                                <ThumbsDown className="h-4 w-4 mr-2" />
                                Kriterium trifft nicht zu
                              </Button>
                            </div>
                            {riskScore >= 25 && (
                              <Card className="bg-red-500/10 border border-red-500/20 mt-4">
                                <CardContent className="p-4">
                                  <div className="flex items-center gap-2 text-red-300">
                                    <AlertTriangle className="h-5 w-5" />
                                    <span className="font-semibold">DSFA wahrscheinlich erforderlich!</span>
                                  </div>
                                </CardContent>
                              </Card>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="vorbereitung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-500 rounded-lg">
                        <ClipboardCheck className="h-6 w-6 text-white" />
                      </div>
                      DSFA-Vorbereitung & Projektplanung
                    </h2>

                    <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-cyan-500 rounded-xl">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-cyan-300">DSFA-Team zusammenstellen</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg mb-6">
                          Eine erfolgreiche DSFA erfordert <strong>interdisziplinäre Zusammenarbeit</strong>.
                          Stellen Sie ein Team aus verschiedenen Fachbereichen zusammen.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <Card className="bg-cyan-500/10 border border-cyan-500/20">
                            <CardContent className="p-4">
                              <div className="text-center mb-3">
                                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <UserCheck className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-cyan-300 text-sm">Projektleiter</h4>
                              </div>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>• Koordination & Planung</li>
                                <li>• Stakeholder-Management</li>
                                <li>• Risiko-Kommunikation</li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="bg-blue-500/10 border border-blue-500/20">
                            <CardContent className="p-4">
                              <div className="text-center mb-3">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <Shield className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-blue-300 text-sm">Datenschutzbeauftragter</h4>
                              </div>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>• Rechtliche Bewertung</li>
                                <li>• DSGVO-Compliance</li>
                                <li>• Methodische Beratung</li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="bg-indigo-500/10 border border-indigo-500/20">
                            <CardContent className="p-4">
                              <div className="text-center mb-3">
                                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <Settings className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-indigo-300 text-sm">IT-Security</h4>
                              </div>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>• Technische Risiken</li>
                                <li>• Sicherheitsmaßnahmen</li>
                                <li>• Vulnerability Assessment</li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="bg-purple-500/10 border border-purple-500/20">
                            <CardContent className="p-4">
                              <div className="text-center mb-3">
                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <Building2 className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-purple-300 text-sm">Fachbereich</h4>
                              </div>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>• Business-Anforderungen</li>
                                <li>• Prozess-Know-how</li>
                                <li>• Praktische Umsetzung</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-amber-500 rounded-xl">
                            <ClipboardCheck className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-amber-300">DSFA-Projektplan</h3>
                        </div>

                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-amber-500/10 border border-amber-500/20">
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-amber-300 mb-4">Phase 1: Initiierung (Woche 1)</h4>
                                <ul className="text-slate-300 text-sm space-y-2">
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                    Kick-off Meeting durchführen
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                    Team zusammenstellen & Rollen definieren
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                    Projektscope & Zeitplan festlegen
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                    Erste Dokumente sammeln
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>

                            <Card className="bg-orange-500/10 border border-orange-500/20">
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-orange-300 mb-4">Phase 2: Analyse (Woche 2-3)</h4>
                                <ul className="text-slate-300 text-sm space-y-2">
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                                    Verarbeitungsprozess detailliert beschreiben
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                                    Stakeholder-Interviews führen
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                                    Datenflüsse dokumentieren
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                                    Technische Architektur verstehen
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>

                            <Card className="bg-red-500/10 border border-red-500/20">
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-red-300 mb-4">Phase 3: Bewertung (Woche 4-5)</h4>
                                <ul className="text-slate-300 text-sm space-y-2">
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                    Risiken identifizieren & bewerten
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                    Betroffenenrechte analysieren
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                    Schutzmaßnahmen bewerten
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                    Restrisiko ermitteln
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>

                            <Card className="bg-green-500/10 border border-green-500/20">
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-green-300 mb-4">Phase 4: Maßnahmen (Woche 6)</h4>
                                <ul className="text-slate-300 text-sm space-y-2">
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                    Zusätzliche Schutzmaßnahmen entwickeln
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                    Implementierungsplan erstellen
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                    DSB-Stellungnahme einholen
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                    DSFA-Bericht finalisieren
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>

                          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                            <CardContent className="p-4">
                              <h4 className="font-semibold text-blue-300 mb-3">Kritische Erfolgsfaktoren</h4>
                              <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div className="text-slate-300">
                                  <div className="font-medium text-blue-300 mb-1">Frühzeitiger Start</div>
                                  <div className="text-xs text-slate-400">DSFA vor Entwicklungsbeginn durchführen</div>
                                </div>
                                <div className="text-slate-300">
                                  <div className="font-medium text-purple-300 mb-1">Stakeholder-Einbindung</div>
                                  <div className="text-xs text-slate-400">Alle Beteiligten aktiv einbeziehen</div>
                                </div>
                                <div className="text-slate-300">
                                  <div className="font-medium text-indigo-300 mb-1">Strukturierte Methodik</div>
                                  <div className="text-xs text-slate-400">Bewährte Frameworks verwenden</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-emerald-500 rounded-xl">
                            <FileText className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-emerald-300">Benötigte Dokumentation & Tools</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-emerald-300">Eingangsdokumente</h4>
                            <div className="space-y-2 text-sm">
                              <Card className="bg-emerald-500/10 border border-emerald-500/20">
                                <CardContent className="p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                                    <span className="font-medium text-emerald-300">Verarbeitungsverzeichnis</span>
                                  </div>
                                  <p className="text-slate-400 text-xs">Bestehende VVT-Einträge für die Verarbeitung</p>
                                </CardContent>
                              </Card>

                              <Card className="bg-emerald-500/10 border border-emerald-500/20">
                                <CardContent className="p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                                    <span className="font-medium text-emerald-300">Prozessdokumentation</span>
                                  </div>
                                  <p className="text-slate-400 text-xs">Detaillierte Beschreibung der Verarbeitungsschritte</p>
                                </CardContent>
                              </Card>

                              <Card className="bg-emerald-500/10 border border-emerald-500/20">
                                <CardContent className="p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                                    <span className="font-medium text-emerald-300">TOM-Dokumentation</span>
                                  </div>
                                  <p className="text-slate-400 text-xs">Bestehende technische und organisatorische Maßnahmen</p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-semibold text-teal-300">Empfohlene Tools</h4>
                            <div className="space-y-2 text-sm">
                              <Card className="bg-teal-500/10 border border-teal-500/20">
                                <CardContent className="p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <BarChart3 className="h-4 w-4 text-teal-400" />
                                    <span className="font-medium text-teal-300">DSFA-Template</span>
                                  </div>
                                  <p className="text-slate-400 text-xs">Strukturierte Vorlage der Aufsichtsbehörde</p>
                                </CardContent>
                              </Card>

                              <Card className="bg-teal-500/10 border border-teal-500/20">
                                <CardContent className="p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <BarChart3 className="h-4 w-4 text-teal-400" />
                                    <span className="font-medium text-teal-300">Risiko-Matrix</span>
                                  </div>
                                  <p className="text-slate-400 text-xs">Systematische Risikobewertung und -dokumentation</p>
                                </CardContent>
                              </Card>

                              <Card className="bg-teal-500/10 border border-teal-500/20">
                                <CardContent className="p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Users className="h-4 w-4 text-teal-400" />
                                    <span className="font-medium text-teal-300">Stakeholder-Register</span>
                                  </div>
                                  <p className="text-slate-400 text-xs">Übersicht aller beteiligten Parteien und Experten</p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="risikobewertung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-500 rounded-lg">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      Risikobewertung & Analyse
                    </h2>

                    <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Systematische Risikoidentifikation
                        </h3>
                        <p className="text-slate-300 mb-6">
                          Analysieren Sie systematisch alle Risiken für die Rechte und Freiheiten der betroffenen Personen:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-red-300 font-semibold mb-4 flex items-center gap-2">
                                <XCircle className="h-5 w-5" />
                                Risikokategorien
                              </h4>
                              <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                                  <div>
                                    <div className="text-slate-300 font-medium">Unbefugter Zugriff</div>
                                    <div className="text-slate-400 text-sm">Verlust der Vertraulichkeit</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                                  <div>
                                    <div className="text-slate-300 font-medium">Ungewollte Änderung</div>
                                    <div className="text-slate-400 text-sm">Verlust der Integrität</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                                  <div>
                                    <div className="text-slate-300 font-medium">Datenverlust</div>
                                    <div className="text-slate-400 text-sm">Verlust der Verfügbarkeit</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                                  <div>
                                    <div className="text-slate-300 font-medium">Diskriminierung</div>
                                    <div className="text-slate-400 text-sm">Unfaire Behandlung durch Profiling</div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-pink-300 font-semibold mb-4 flex items-center gap-2">
                                <BarChart3 className="h-5 w-5" />
                                Bewertungskriterien
                              </h4>
                              <div className="space-y-4">
                                <div>
                                  <div className="text-slate-300 font-medium mb-2">Eintrittswahrscheinlichkeit</div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <Badge className="bg-green-500/20 text-green-300">Gering</Badge>
                                    <Badge className="bg-yellow-500/20 text-yellow-300">Mittel</Badge>
                                    <Badge className="bg-red-500/20 text-red-300">Hoch</Badge>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-slate-300 font-medium mb-2">Schwere der Folgen</div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <Badge className="bg-green-500/20 text-green-300">Gering</Badge>
                                    <Badge className="bg-orange-500/20 text-orange-300">Mittel</Badge>
                                    <Badge className="bg-red-500/20 text-red-300">Hoch</Badge>
                                  </div>
                                </div>
                                <div className="bg-pink-500/10 rounded-lg p-3 border border-pink-500/20">
                                  <div className="text-pink-300 font-semibold text-sm mb-1">Risiko-Formel:</div>
                                  <div className="text-slate-300 text-sm">
                                    Risiko = Eintrittswahrscheinlichkeit × Schwere
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <PieChart className="h-5 w-5" />
                          Risiko-Matrix
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-slate-700">
                                <th className="p-3 text-left text-slate-400"></th>
                                <th className="p-3 text-center text-slate-400 text-sm">Gering</th>
                                <th className="p-3 text-center text-slate-400 text-sm">Mittel</th>
                                <th className="p-3 text-center text-slate-400 text-sm">Hoch</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-slate-700">
                                <td className="p-3 text-slate-400 text-sm font-medium">Hoch</td>
                                <td className="p-3 text-center">
                                  <div className="bg-yellow-500/20 text-yellow-300 rounded px-2 py-1 text-xs">Mittel</div>
                                </td>
                                <td className="p-3 text-center">
                                  <div className="bg-red-500/20 text-red-300 rounded px-2 py-1 text-xs">Hoch</div>
                                </td>
                                <td className="p-3 text-center">
                                  <div className="bg-red-500/30 text-red-200 rounded px-2 py-1 text-xs font-bold">Sehr Hoch</div>
                                </td>
                              </tr>
                              <tr className="border-b border-slate-700">
                                <td className="p-3 text-slate-400 text-sm font-medium">Mittel</td>
                                <td className="p-3 text-center">
                                  <div className="bg-green-500/20 text-green-300 rounded px-2 py-1 text-xs">Gering</div>
                                </td>
                                <td className="p-3 text-center">
                                  <div className="bg-yellow-500/20 text-yellow-300 rounded px-2 py-1 text-xs">Mittel</div>
                                </td>
                                <td className="p-3 text-center">
                                  <div className="bg-red-500/20 text-red-300 rounded px-2 py-1 text-xs">Hoch</div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-3 text-slate-400 text-sm font-medium">Gering</td>
                                <td className="p-3 text-center">
                                  <div className="bg-green-500/30 text-green-200 rounded px-2 py-1 text-xs">Sehr Gering</div>
                                </td>
                                <td className="p-3 text-center">
                                  <div className="bg-green-500/20 text-green-300 rounded px-2 py-1 text-xs">Gering</div>
                                </td>
                                <td className="p-3 text-center">
                                  <div className="bg-yellow-500/20 text-yellow-300 rounded px-2 py-1 text-xs">Mittel</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5" />
                          Praxis-Beispiel: Risikobewertung
                        </h3>
                        <Card className="bg-slate-800/60">
                          <CardContent className="p-6">
                            <div className="space-y-6">
                              <div>
                                <div className="text-purple-300 font-semibold mb-2">Szenario: Scoring-System für Kreditvergabe</div>
                                <div className="text-slate-400 text-sm mb-4">
                                  Ein Finanzdienstleister nutzt ein automatisiertes System zur Kreditwürdigkeitsprüfung
                                </div>
                              </div>

                              <div className="space-y-4">
                                <div className="bg-slate-700/50 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-white font-medium">Risiko 1: Falsche Bonitätsbewertung</span>
                                    <Badge className="bg-red-500/20 text-red-300">Hoch</Badge>
                                  </div>
                                  <div className="text-slate-400 text-sm mb-2">
                                    Eintrittswahrscheinlichkeit: Mittel | Schwere: Hoch
                                  </div>
                                  <div className="text-slate-300 text-sm">
                                    → Diskriminierung, finanzielle Nachteile für Betroffene
                                  </div>
                                </div>

                                <div className="bg-slate-700/50 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-white font-medium">Risiko 2: Datenleck bei Scoring-Daten</span>
                                    <Badge className="bg-yellow-500/20 text-yellow-300">Mittel</Badge>
                                  </div>
                                  <div className="text-slate-400 text-sm mb-2">
                                    Eintrittswahrscheinlichkeit: Gering | Schwere: Hoch
                                  </div>
                                  <div className="text-slate-300 text-sm">
                                    → Reputationsschaden, Identitätsdiebstahl
                                  </div>
                                </div>

                                <div className="bg-slate-700/50 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-white font-medium">Risiko 3: Fehlende Transparenz bei Algorithmen</span>
                                    <Badge className="bg-red-500/20 text-red-300">Hoch</Badge>
                                  </div>
                                  <div className="text-slate-400 text-sm mb-2">
                                    Eintrittswahrscheinlichkeit: Hoch | Schwere: Mittel
                                  </div>
                                  <div className="text-slate-300 text-sm">
                                    → Verletzung von Transparenzpflichten, Beschwerden
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="massnahmen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-500 rounded-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      Schutzmaßnahmen entwickeln
                    </h2>

                    <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Technische und organisatorische Maßnahmen (TOM)
                        </h3>
                        <p className="text-slate-300 mb-6">
                          Entwickeln Sie Maßnahmen zur Risikominimierung und dokumentieren Sie deren Wirksamkeit:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-green-300 font-semibold mb-4 flex items-center gap-2">
                                <Settings className="h-5 w-5" />
                                Technische Maßnahmen
                              </h4>
                              <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-slate-300 font-medium">Verschlüsselung</div>
                                    <div className="text-slate-400 text-sm">End-to-End und bei Speicherung</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-slate-300 font-medium">Zugriffskontrolle</div>
                                    <div className="text-slate-400 text-sm">Rollenbasierte Berechtigungen</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-slate-300 font-medium">Pseudonymisierung</div>
                                    <div className="text-slate-400 text-sm">Trennung von Identifikatoren</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-slate-300 font-medium">Logging & Monitoring</div>
                                    <div className="text-slate-400 text-sm">Revisionssichere Protokollierung</div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-emerald-300 font-semibold mb-4 flex items-center gap-2">
                                <Users className="h-5 w-5" />
                                Organisatorische Maßnahmen
                              </h4>
                              <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-slate-300 font-medium">Schulungen</div>
                                    <div className="text-slate-400 text-sm">Regelmäßige Mitarbeiter-Trainings</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-slate-300 font-medium">Richtlinien</div>
                                    <div className="text-slate-400 text-sm">Datenschutz-Policy und Prozesse</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-slate-300 font-medium">Incident Response</div>
                                    <div className="text-slate-400 text-sm">Notfallpläne bei Datenpannen</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-slate-300 font-medium">Datenschutz-Controlling</div>
                                    <div className="text-slate-400 text-sm">Regelmäßige Audits und Reviews</div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5" />
                          Privacy by Design & Default
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-blue-300 font-semibold mb-4">Privacy by Design</h4>
                              <p className="text-slate-300 text-sm mb-4">
                                Datenschutz von Anfang an in Systeme und Prozesse integrieren:
                              </p>
                              <ul className="space-y-2 text-slate-400 text-sm">
                                <li>• Datenminimierung bereits im Design</li>
                                <li>• Datenschutzfreundliche Voreinstellungen</li>
                                <li>• Transparenz durch Information</li>
                                <li>• Betroffenenrechte technisch umsetzen</li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-cyan-300 font-semibold mb-4">Privacy by Default</h4>
                              <p className="text-slate-300 text-sm mb-4">
                                Höchstmöglicher Datenschutz als Standardeinstellung:
                              </p>
                              <ul className="space-y-2 text-slate-400 text-sm">
                                <li>• Nur notwendige Daten voreingestellt</li>
                                <li>• Opt-in statt Opt-out</li>
                                <li>• Minimale Speicherdauer</li>
                                <li>• Restriktive Zugriffskontrolle</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Activity className="h-5 w-5" />
                          Restrisiko bewerten
                        </h3>
                        <p className="text-slate-300 mb-6">
                          Nach Implementierung der Schutzmaßnahmen muss das verbleibende Restrisiko bewertet werden:
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <Card className="bg-green-500/10 border border-green-500/20">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-green-400 mb-2">
                                <CheckCircle className="h-12 w-12 mx-auto" />
                              </div>
                              <div className="text-green-300 font-semibold mb-2">Akzeptabel</div>
                              <div className="text-slate-400 text-sm">Verarbeitung kann starten</div>
                            </CardContent>
                          </Card>

                          <Card className="bg-yellow-500/10 border border-yellow-500/20">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-yellow-400 mb-2">
                                <AlertCircle className="h-12 w-12 mx-auto" />
                              </div>
                              <div className="text-yellow-300 font-semibold mb-2">Grenzwertig</div>
                              <div className="text-slate-400 text-sm">Zusätzliche Maßnahmen prüfen</div>
                            </CardContent>
                          </Card>

                          <Card className="bg-red-500/10 border border-red-500/20">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-red-400 mb-2">
                                <XCircle className="h-12 w-12 mx-auto" />
                              </div>
                              <div className="text-red-300 font-semibold mb-2">Zu hoch</div>
                              <div className="text-slate-400 text-sm">Aufsichtsbehörde konsultieren</div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="dokumentation" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-500 rounded-lg">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      Dokumentation & Reporting
                    </h2>

                    <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <FileCheck className="h-5 w-5" />
                          Struktur des DSFA-Berichts
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              section: '1. Beschreibung der Verarbeitung',
                              content: 'Zweck, Umfang, Art der Daten, betroffene Personengruppen, Datenflüsse'
                            },
                            {
                              section: '2. Bewertung der Erforderlichkeit',
                              content: 'Rechtmäßigkeit, Verhältnismäßigkeit, Zweckbindung'
                            },
                            {
                              section: '3. Risikoanalyse',
                              content: 'Identifizierte Risiken, Eintrittswahrscheinlichkeit, Schwere der Folgen'
                            },
                            {
                              section: '4. Schutzmaßnahmen',
                              content: 'Bestehende und geplante TOM, Wirksamkeitsbewertung'
                            },
                            {
                              section: '5. Restrisikobewertung',
                              content: 'Verbleibendes Risiko nach Implementierung der Maßnahmen'
                            },
                            {
                              section: '6. Stellungnahme DSB',
                              content: 'Bewertung durch Datenschutzbeauftragten'
                            },
                            {
                              section: '7. Anhänge',
                              content: 'Risiko-Matrix, Stakeholder-Konsultationen, technische Dokumentation'
                            }
                          ].map((item, idx) => (
                            <Card key={idx} className="bg-slate-800/60">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    {idx + 1}
                                  </div>
                                  <div className="flex-grow">
                                    <div className="text-indigo-300 font-semibold mb-1">{item.section}</div>
                                    <div className="text-slate-400 text-sm">{item.content}</div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Kontinuierliche Überwachung
                        </h3>
                        <p className="text-slate-300 mb-6">
                          Eine DSFA ist kein einmaliges Dokument. Sie muss regelmäßig überprüft und aktualisiert werden:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-teal-300 font-semibold mb-4">Überprüfungsanlässe</h4>
                              <ul className="space-y-2 text-slate-400 text-sm">
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                                  Wesentliche Änderungen der Verarbeitung
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                                  Neue Technologien oder Schnittstellen
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                                  Änderungen der Rechtslage
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                                  Sicherheitsvorfälle
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                                  Mindestens jährlich
                                </li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-cyan-300 font-semibold mb-4">Dokumentationspflichten</h4>
                              <ul className="space-y-2 text-slate-400 text-sm">
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                  Versionierung des DSFA-Berichts
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                  Änderungshistorie führen
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                  Stellungnahmen archivieren
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                  Nachweise für Maßnahmenumsetzung
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                  Vorlagepflicht gegenüber Aufsicht
                                </li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Konsultation der Aufsichtsbehörde
                        </h3>
                        <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20 mb-6">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                            <div>
                              <div className="text-yellow-300 font-semibold mb-2">Wann ist Konsultation erforderlich?</div>
                              <p className="text-slate-300 text-sm">
                                Wenn aus der DSFA hervorgeht, dass die Verarbeitung ein <strong>hohes Risiko</strong> zur Folge hätte
                                und Sie keine geeigneten Maßnahmen zur Eindämmung des Risikos treffen können, müssen Sie die
                                zuständige Aufsichtsbehörde vor Beginn der Verarbeitung konsultieren.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Card className="bg-slate-800/60">
                            <CardContent className="p-4">
                              <h4 className="text-orange-300 font-semibold mb-3">Konsultationsprozess</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-3">
                                  <Badge className="bg-orange-500/20 text-orange-300">1</Badge>
                                  <span className="text-slate-300">DSFA-Bericht einreichen</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <Badge className="bg-orange-500/20 text-orange-300">2</Badge>
                                  <span className="text-slate-300">Behörde hat 8 Wochen Prüfzeit (verlängerbar)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <Badge className="bg-orange-500/20 text-orange-300">3</Badge>
                                  <span className="text-slate-300">Behörde gibt schriftliche Stellungnahme ab</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <Badge className="bg-orange-500/20 text-orange-300">4</Badge>
                                  <span className="text-slate-300">Empfehlungen umsetzen vor Verarbeitungsbeginn</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5" />
                          Best Practice Checkliste
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            'DSFA vor Beginn der Verarbeitung durchführen',
                            'Interdisziplinäres Team zusammenstellen',
                            'Datenschutzbeauftragten einbinden',
                            'Betroffene konsultieren (wenn möglich)',
                            'Risiken systematisch analysieren',
                            'Konkrete Schutzmaßnahmen definieren',
                            'Restrisiko ehrlich bewerten',
                            'DSFA-Bericht vollständig dokumentieren',
                            'Regelmäßig überprüfen und aktualisieren',
                            'Bei hohem Restrisiko: Behörde konsultieren'
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Bereit für Ihre DSFA?</h3>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                      Nutzen Sie unsere Compliance-Plattform für strukturierte DSFA-Durchführung mit Templates und Automatisierung
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      >
                        <Link to="/kontakt">
                          Kostenlose Beratung
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
                      >
                        <Link to="/wissen/dsgvo">
                          Zurück zur Übersicht
                          <BookOpen className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      DSFA automatisch durchführen
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Führen Sie Datenschutz-Folgenabschätzungen systematisch durch mit automatischer
                      Risikobewertung und vollständiger Dokumentation. Geführter Prozess für alle Hochrisiko-Verarbeitungen.
                    </p>
                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => window.location.href = '/features#datenschutz-folgenabschaetzung-dsfa'}
                    >
                      DSFA-Tool ansehen
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

export default DsfaDurchfuehrungGuide;
