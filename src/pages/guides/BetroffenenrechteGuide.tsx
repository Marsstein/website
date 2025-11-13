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
  UserCheck,
  Edit3,
  Trash2,
  FileDown,
  Search,
  UserX,
  Settings,
  Database,
  Mail,
  Phone,
  AlertOctagon,
  Play,
  Repeat,
  Ban,
  FileSearch
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

const BetroffenenrechteGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('ueberblick');
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    { id: 'ueberblick', title: 'Übersicht & Grundlagen', icon: Info },
    { id: 'informationsrecht', title: 'Informationsrecht (Art. 13 & 14)', icon: FileText },
    { id: 'auskunftsrecht', title: 'Auskunftsrecht (Art. 15)', icon: Search },
    { id: 'loeschung-berichtigung', title: 'Löschung & Berichtigung', icon: Edit3 },
    { id: 'weitere-rechte', title: 'Weitere Betroffenenrechte', icon: Shield },
    { id: 'umsetzung', title: 'Praktische Umsetzung', icon: Settings }
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
        title="Betroffenenrechte – DSGVO Leitfaden für den Umgang"
        description="Betroffenenrechte nach DSGVO professionell managen: Auskunft, Löschung, Berichtigung, Datenportabilität. ✓ Prozesse ✓ Fristen ✓ Vorlagen. Jetzt rechtssicher umsetzen!"
        canonical="/wissen/leitfaden/betroffenenrechte"
        keywords="betroffenenrechte dsgvo, auskunftsrecht, recht auf löschung, datenportabilität, dsgvo betroffenenanfragen"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />

        <div className="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
          <div className="container mx-auto max-w-7xl px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                  <UserCheck className="h-3 w-3 mr-1" />
                  Betroffenenrechte Guide
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

        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8" ref={contentRef}>
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">Betroffenenrechte nach DSGVO</h1>
                  <p className="text-xl text-teal-300">Kompletter Leitfaden für rechtssichere Umsetzung</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>85 Min Lesezeit</span>
                </div>
              </div>
            </motion.div>

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
                                  ? "bg-teal-500/20 border border-teal-500/30 text-teal-300"
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
                <section id="ueberblick" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-teal-500 rounded-lg">
                        <Info className="h-6 w-6 text-white" />
                      </div>
                      Übersicht & Grundlagen
                    </h2>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-blue-500 rounded-xl">
                            <Info className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-blue-300">Paradigmenwechsel im Datenschutz</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg mb-4">
                          Die DSGVO hat einen fundamentalen Wandel eingeleitet: <strong>Datenhoheit liegt bei den Betroffenen</strong>,
                          nicht bei den Unternehmen. Personen haben konkrete, durchsetzbare Ansprüche auf Transparenz, Kontrolle und
                          Selbstbestimmung über ihre Daten.
                        </p>
                        <Card className="bg-blue-500/10 border-l-4 border-blue-500 mb-0">
                          <CardContent className="p-4">
                            <p className="text-slate-300 italic">
                              "Die Grundsätze und Vorschriften zum Schutz natürlicher Personen bei der Verarbeitung ihrer personenbezogenen
                              Daten sollten gewährleisten, dass ihre Grundrechte und Grundfreiheiten [...] gewahrt bleiben."
                              <span className="block mt-2 text-blue-300">- Erwägungsgrund 2 DSGVO</span>
                            </p>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <Card className="bg-slate-800/60 border-slate-700/50">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                            <div className="p-2 bg-green-500 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-white" />
                            </div>
                            Zentrale Charakteristika
                          </h3>
                          <div className="space-y-3">
                            <div className="bg-slate-700/50 rounded-lg p-4">
                              <div className="text-green-400 font-semibold mb-1">Kostenfrei</div>
                              <div className="text-slate-300 text-sm">Alle Rechte müssen unentgeltlich erfüllt werden</div>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                              <div className="text-green-400 font-semibold mb-1">Fristgebunden</div>
                              <div className="text-slate-300 text-sm">Standard: 1 Monat, max. 3 Monate bei Komplexität</div>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                              <div className="text-green-400 font-semibold mb-1">Schriftlich</div>
                              <div className="text-slate-300 text-sm">Anträge und Antworten dokumentiert</div>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                              <div className="text-green-400 font-semibold mb-1">Extraterritorial</div>
                              <div className="text-slate-300 text-sm">Gilt auch für Nicht-EU-Unternehmen</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-slate-800/60 border-slate-700/50">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                            <div className="p-2 bg-purple-500 rounded-lg">
                              <Shield className="h-5 w-5 text-white" />
                            </div>
                            Die 8 Betroffenenrechte
                          </h3>
                          <div className="space-y-2">
                            {[
                              { art: '13/14', name: 'Informationsrecht' },
                              { art: '15', name: 'Auskunftsrecht' },
                              { art: '16', name: 'Berichtigungsrecht' },
                              { art: '17', name: 'Löschungsrecht' },
                              { art: '18', name: 'Einschränkung der Verarbeitung' },
                              { art: '20', name: 'Datenübertragbarkeit' },
                              { art: '21', name: 'Widerspruchsrecht' },
                              { art: '22', name: 'Automatisierte Entscheidungen' }
                            ].map((right, idx) => (
                              <div key={idx} className="bg-slate-700/50 rounded-lg p-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-purple-400 font-semibold text-sm">Art. {right.art}</span>
                                  <span className="text-slate-300 text-sm">{right.name}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-red-500 rounded-xl">
                            <AlertTriangle className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-red-300">Bußgeldrisiken bei Missachtung</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card className="bg-red-500/10 border border-red-500/20">
                            <CardContent className="p-4">
                              <div className="text-red-300 font-semibold mb-2">Bußgelder</div>
                              <ul className="text-slate-400 text-sm space-y-1">
                                <li>• Bis zu 20 Mio. € oder 4% des Jahresumsatzes</li>
                                <li>• Zusätzliche Zwangsgelder möglich</li>
                                <li>• Wiederholte Verstöße = höhere Strafen</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-pink-500/10 border border-pink-500/20">
                            <CardContent className="p-4">
                              <div className="text-pink-300 font-semibold mb-2">Weitere Risiken</div>
                              <ul className="text-slate-400 text-sm space-y-1">
                                <li>• Schadensersatzansprüche</li>
                                <li>• Reputationsschäden</li>
                                <li>• Abmahnungen durch Mitbewerber</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="informationsrecht" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-teal-500 rounded-lg">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      Informationsrecht (Art. 13 & 14)
                    </h2>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Das proaktive Recht auf transparente Information</h3>
                        <p className="text-xl text-slate-300 leading-relaxed">
                          Das Informationsrecht bildet die Grundlage aller anderen Betroffenenrechte. Ohne transparente Information
                          können Betroffene ihre Rechte nicht wahrnehmen.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                        <CardContent className="p-6">
                          <h4 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
                            <UserCheck className="h-5 w-5" />
                            Art. 13: Direkte Erhebung
                          </h4>
                          <Card className="bg-green-500/10 border border-green-500/20 mb-4">
                            <CardContent className="p-4">
                              <p className="text-slate-300 text-sm">
                                Wenn Sie Daten direkt beim Betroffenen erheben (z.B. Kontaktformular, Registrierung)
                              </p>
                            </CardContent>
                          </Card>
                          <div className="space-y-3">
                            <div className="text-green-300 font-semibold">Zeitpunkt der Information:</div>
                            <Card className="bg-slate-800/60">
                              <CardContent className="p-3">
                                <p className="text-slate-400 text-sm">Bei Erhebung der Daten (sofort!)</p>
                              </CardContent>
                            </Card>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                        <CardContent className="p-6">
                          <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                            <Users className="h-5 w-5" />
                            Art. 14: Indirekte Erhebung
                          </h4>
                          <Card className="bg-purple-500/10 border border-purple-500/20 mb-4">
                            <CardContent className="p-4">
                              <p className="text-slate-300 text-sm">
                                Wenn Sie Daten von Dritten erhalten (z.B. Adresskauf, Datenübermittlung)
                              </p>
                            </CardContent>
                          </Card>
                          <div className="space-y-3">
                            <div className="text-purple-300 font-semibold">Zeitpunkt der Information:</div>
                            <Card className="bg-slate-800/60">
                              <CardContent className="p-3 space-y-1">
                                <p className="text-slate-400 text-sm">• Innerhalb angemessener Frist (max. 1 Monat)</p>
                                <p className="text-slate-400 text-sm">• Bei erster Kommunikation</p>
                                <p className="text-slate-400 text-sm">• Bei Weitergabe an Dritte</p>
                              </CardContent>
                            </Card>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Pflichtinformationen nach Art. 13/14
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="space-y-3">
                            <h4 className="text-indigo-300 font-semibold">Grundinformationen:</h4>
                            <div className="space-y-2">
                              {[
                                'Identität und Kontaktdaten des Verantwortlichen',
                                'Kontaktdaten des Datenschutzbeauftragten',
                                'Zwecke und Rechtsgrundlage der Verarbeitung',
                                'Empfänger oder Kategorien von Empfängern'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                                  <div className="text-slate-300 text-sm">{item}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-purple-300 font-semibold">Zusätzliche Informationen:</h4>
                            <div className="space-y-2">
                              {[
                                'Drittlandübermittlung und Garantien',
                                'Speicherdauer oder Kriterien',
                                'Alle Betroffenenrechte (Art. 15-22)',
                                'Beschwerderecht bei Aufsichtsbehörde'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                                  <div className="text-slate-300 text-sm">{item}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <Card className="bg-purple-500/10 border border-purple-500/20">
                          <CardContent className="p-4">
                            <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                              <AlertCircle className="h-4 w-4" />
                              Zusätzlich bei Art. 14 (indirekte Erhebung):
                            </h4>
                            <ul className="text-slate-400 text-sm space-y-1">
                              <li>• Kategorien der verarbeiteten Daten</li>
                              <li>• Quelle der personenbezogenen Daten</li>
                              <li>• Information über öffentliche Zugänglichkeit</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5" />
                          Praxis-Beispiel: Datenschutzerklärung Website
                        </h3>
                        <Card className="bg-slate-800/60">
                          <CardContent className="p-6">
                            <div className="space-y-4 text-sm text-slate-300 font-mono">
                              <div>
                                <div className="text-white font-semibold mb-2">## Verantwortlicher</div>
                                <div>Mustermann GmbH, Beispielstraße 123, 12345 Berlin</div>
                                <div>E-Mail: datenschutz@mustermann.de, Tel: +49 30 12345678</div>
                              </div>

                              <div>
                                <div className="text-white font-semibold mb-2">## Datenschutzbeauftragter</div>
                                <div>Dr. Anna Schmidt, datenschutz@mustermann.de</div>
                              </div>

                              <div>
                                <div className="text-white font-semibold mb-2">## Datenverarbeitung: Kontaktformular</div>
                                <div><strong className="text-green-300">Zweck</strong>: Bearbeitung Ihrer Anfrage und Kontaktaufnahme</div>
                                <div><strong className="text-green-300">Rechtsgrundlage</strong>: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)</div>
                                <div><strong className="text-green-300">Empfänger</strong>: Keine Weitergabe an Dritte</div>
                                <div><strong className="text-green-300">Speicherdauer</strong>: 3 Jahre nach Bearbeitung der Anfrage</div>
                                <div><strong className="text-green-300">Ihre Rechte</strong>: Sie haben das Recht auf Auskunft, Berichtigung, Löschung...</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="auskunftsrecht" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-teal-500 rounded-lg">
                        <Search className="h-6 w-6 text-white" />
                      </div>
                      Auskunftsrecht (Art. 15)
                    </h2>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                          <div className="p-2 bg-blue-500 rounded-lg">
                            <Search className="h-6 w-6 text-white" />
                          </div>
                          Das umfassende Recht auf Transparenz
                        </h3>
                        <p className="text-xl text-slate-300 leading-relaxed">
                          Das Auskunftsrecht ist das <strong>meistgenutzte Betroffenenrecht</strong> und gibt Personen Anspruch
                          auf vollständige Transparenz über ihre Datenverarbeitung.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Auskunftspflichtige Informationen
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h4 className="text-green-300 font-semibold">Grundlegende Informationen:</h4>
                            <div className="space-y-2">
                              {[
                                'Bestätigung, ob Daten verarbeitet werden',
                                'Zwecke der Verarbeitung',
                                'Kategorien personenbezogener Daten',
                                'Empfänger oder Kategorien',
                                'Geplante Speicherdauer'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                  <div className="text-slate-300 text-sm">{item}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-emerald-300 font-semibold">Erweiterte Informationen:</h4>
                            <div className="space-y-2">
                              {[
                                'Herkunft der Daten',
                                'Automatisierte Entscheidungsfindung',
                                'Drittlandübermittlung',
                                'Belehrung über Rechte',
                                'Kopie der personenbezogenen Daten'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <div className="text-slate-300 text-sm">{item}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          Fristen und Prozess
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card className="bg-purple-500/10 border border-purple-500/20">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-purple-300 mb-2">1</div>
                              <div className="text-purple-300 font-semibold mb-2">Monat</div>
                              <div className="text-slate-400 text-sm">Standardfrist für Antwort</div>
                            </CardContent>
                          </Card>
                          <Card className="bg-pink-500/10 border border-pink-500/20">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-pink-300 mb-2">3</div>
                              <div className="text-pink-300 font-semibold mb-2">Monate</div>
                              <div className="text-slate-400 text-sm">Maximum bei Komplexität</div>
                            </CardContent>
                          </Card>
                          <Card className="bg-purple-500/10 border border-purple-500/20">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-purple-300 mb-2">0€</div>
                              <div className="text-purple-300 font-semibold mb-2">Kosten</div>
                              <div className="text-slate-400 text-sm">Grundsätzlich kostenfrei</div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Häufige Fehler vermeiden
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              title: 'Unvollständige Auskunft',
                              description: 'Nicht alle Datenverarbeitungen werden berücksichtigt',
                              tip: 'Nutzen Sie ein Verarbeitungsverzeichnis als Basis'
                            },
                            {
                              title: 'Fristüberschreitung',
                              description: 'Antwort erfolgt erst nach 1-3 Monaten',
                              tip: 'Etablieren Sie einen strukturierten Workflow'
                            },
                            {
                              title: 'Fehlende Identitätsprüfung',
                              description: 'Auskunft ohne Verifizierung der Identität',
                              tip: 'Fordern Sie Ausweis oder andere Nachweise an'
                            },
                            {
                              title: 'Unverständliche Antworten',
                              description: 'Zu technisch oder juristisch formuliert',
                              tip: 'Nutzen Sie klare, verständliche Sprache'
                            }
                          ].map((error, idx) => (
                            <Card key={idx} className="bg-slate-800/60">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <AlertCircle className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                                  <div className="flex-grow">
                                    <div className="text-orange-300 font-semibold mb-1">{error.title}</div>
                                    <div className="text-slate-400 text-sm mb-2">{error.description}</div>
                                    <div className="text-green-400 text-sm flex items-center gap-1">
                                      <CheckCircle className="h-4 w-4" />
                                      {error.tip}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5" />
                          Praxis-Beispiel: Auskunftsantwort
                        </h3>
                        <Card className="bg-slate-800/60">
                          <CardContent className="p-6">
                            <div className="space-y-4 text-sm text-slate-300">
                              <div>
                                <div className="text-blue-300 font-semibold mb-2">Betreff: Ihre Auskunftsanfrage nach Art. 15 DSGVO</div>
                                <div className="text-slate-400 mb-4">Sehr geehrte/r [Name],</div>
                              </div>

                              <div>
                                <div className="text-white font-semibold mb-2">1. Verarbeitete Daten</div>
                                <div className="bg-slate-700/50 rounded p-3 space-y-1">
                                  <div>• Name: Max Mustermann</div>
                                  <div>• E-Mail: max@beispiel.de</div>
                                  <div>• Kunde seit: 01.01.2023</div>
                                  <div>• Letzte Bestellung: 15.03.2024</div>
                                </div>
                              </div>

                              <div>
                                <div className="text-white font-semibold mb-2">2. Verarbeitungszwecke</div>
                                <div className="bg-slate-700/50 rounded p-3 space-y-1">
                                  <div>• Vertragserfüllung (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO)</div>
                                  <div>• Newsletter (Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO)</div>
                                </div>
                              </div>

                              <div>
                                <div className="text-white font-semibold mb-2">3. Empfänger</div>
                                <div className="bg-slate-700/50 rounded p-3">
                                  <div>• Versanddienstleister: DHL</div>
                                  <div>• Zahlungsanbieter: Stripe (USA, SCC)</div>
                                </div>
                              </div>

                              <div>
                                <div className="text-white font-semibold mb-2">4. Speicherdauer</div>
                                <div className="bg-slate-700/50 rounded p-3">
                                  <div>10 Jahre nach letzter Bestellung (§ 147 AO)</div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="loeschung-berichtigung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-teal-500 rounded-lg">
                        <Edit3 className="h-6 w-6 text-white" />
                      </div>
                      Löschung & Berichtigung
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Edit3 className="h-5 w-5 text-blue-400" />
                            Art. 16: Berichtigungsrecht
                          </h3>
                          <p className="text-slate-300 mb-4">
                            Betroffene haben das Recht, unverzüglich die Berichtigung sie betreffender unrichtiger
                            personenbezogener Daten zu verlangen.
                          </p>
                          <Card className="bg-blue-500/10 border border-blue-500/20">
                            <CardContent className="p-4">
                              <div className="text-blue-300 font-semibold mb-2">Umfang:</div>
                              <ul className="text-slate-400 text-sm space-y-1">
                                <li>• Korrektur falscher Daten</li>
                                <li>• Vervollständigung unvollständiger Daten</li>
                                <li>• Ergänzende Erklärung</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Trash2 className="h-5 w-5 text-red-400" />
                            Art. 17: Löschungsrecht
                          </h3>
                          <p className="text-slate-300 mb-4">
                            Das "Recht auf Vergessenwerden" - Betroffene können unter bestimmten Voraussetzungen
                            die Löschung ihrer Daten verlangen.
                          </p>
                          <Card className="bg-red-500/10 border border-red-500/20">
                            <CardContent className="p-4">
                              <div className="text-red-300 font-semibold mb-2">Löschgründe:</div>
                              <ul className="text-slate-400 text-sm space-y-1">
                                <li>• Zweck erreicht</li>
                                <li>• Einwilligung widerrufen</li>
                                <li>• Widerspruch eingelegt</li>
                                <li>• Unrechtmäßige Verarbeitung</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Ausnahmen vom Löschungsrecht
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              title: 'Gesetzliche Aufbewahrungspflichten',
                              description: 'Steuer- und handelsrechtliche Pflichten (6-10 Jahre)',
                              icon: Gavel
                            },
                            {
                              title: 'Rechtliche Ansprüche',
                              description: 'Geltendmachung, Ausübung oder Verteidigung',
                              icon: Scale
                            },
                            {
                              title: 'Öffentliches Interesse',
                              description: 'Archivzwecke, wissenschaftliche Forschung',
                              icon: BookOpen
                            },
                            {
                              title: 'Meinungsfreiheit',
                              description: 'Journalistische oder künstlerische Zwecke',
                              icon: FileText
                            }
                          ].map((exception, idx) => {
                            const Icon = exception.icon;
                            return (
                              <Card key={idx} className="bg-slate-800/60">
                                <CardContent className="p-4">
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 bg-purple-500/20 rounded-lg">
                                      <Icon className="h-5 w-5 text-purple-400" />
                                    </div>
                                    <div>
                                      <div className="text-purple-300 font-semibold mb-1">{exception.title}</div>
                                      <div className="text-slate-400 text-sm">{exception.description}</div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Lösch-Workflow in der Praxis
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              step: '1',
                              title: 'Antrag prüfen',
                              description: 'Identität verifizieren, Antrag validieren',
                              time: 'Tag 1-3'
                            },
                            {
                              step: '2',
                              title: 'Rechtmäßigkeit prüfen',
                              description: 'Löschgründe vs. Ausnahmen abwägen',
                              time: 'Tag 4-7'
                            },
                            {
                              step: '3',
                              title: 'Systeme identifizieren',
                              description: 'Alle Speicherorte der Daten ermitteln',
                              time: 'Tag 8-14'
                            },
                            {
                              step: '4',
                              title: 'Löschung durchführen',
                              description: 'Daten in allen Systemen löschen',
                              time: 'Tag 15-21'
                            },
                            {
                              step: '5',
                              title: 'Bestätigung senden',
                              description: 'Betroffenen über Löschung informieren',
                              time: 'Tag 22-30'
                            }
                          ].map((step, idx) => (
                            <Card key={idx} className="bg-slate-800/60">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-4">
                                  <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                                      {step.step}
                                    </div>
                                  </div>
                                  <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-1">
                                      <div className="text-orange-300 font-semibold">{step.title}</div>
                                      <Badge className="bg-orange-500/20 text-orange-300">{step.time}</Badge>
                                    </div>
                                    <div className="text-slate-400 text-sm">{step.description}</div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5" />
                          Praxis-Beispiel: Löschantwort
                        </h3>
                        <Card className="bg-slate-800/60">
                          <CardContent className="p-6">
                            <div className="space-y-4 text-sm text-slate-300">
                              <div>
                                <div className="text-green-300 font-semibold mb-2">Betreff: Ihre Löschanfrage nach Art. 17 DSGVO</div>
                                <div className="text-slate-400 mb-4">Sehr geehrte/r [Name],</div>
                              </div>

                              <div className="text-slate-300">
                                wir haben Ihre Anfrage zur Löschung Ihrer personenbezogenen Daten erhalten und geprüft.
                              </div>

                              <div>
                                <div className="text-white font-semibold mb-2">Gelöschte Daten:</div>
                                <div className="bg-slate-700/50 rounded p-3 space-y-1">
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>Ihr Kundenkonto wurde vollständig gelöscht</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>Newsletter-Anmeldung wurde entfernt</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>Marketing-Daten wurden gelöscht</span>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="text-white font-semibold mb-2">Nicht gelöschte Daten:</div>
                                <div className="bg-slate-700/50 rounded p-3 space-y-1">
                                  <div className="flex items-start gap-2">
                                    <AlertCircle className="h-4 w-4 text-orange-400 mt-0.5" />
                                    <span>Rechnungsdaten (gesetzliche Aufbewahrungspflicht § 147 AO, Löschung am 31.12.2033)</span>
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

                <section id="weitere-rechte" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-teal-500 rounded-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      Weitere Betroffenenrechte
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Lock className="h-5 w-5 text-purple-400" />
                            Art. 18: Einschränkung der Verarbeitung
                          </h3>
                          <p className="text-slate-300 mb-4 text-sm">
                            Betroffene können verlangen, dass ihre Daten nur noch gespeichert, aber nicht mehr verarbeitet werden.
                          </p>
                          <Card className="bg-purple-500/10 border border-purple-500/20">
                            <CardContent className="p-4">
                              <div className="text-purple-300 font-semibold mb-2 text-sm">Gründe für Einschränkung:</div>
                              <ul className="text-slate-400 text-sm space-y-1">
                                <li>• Richtigkeit wird bestritten</li>
                                <li>• Verarbeitung unrechtmäßig</li>
                                <li>• Widerspruch eingelegt</li>
                                <li>• Daten werden für Rechtsansprüche benötigt</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <FileDown className="h-5 w-5 text-blue-400" />
                            Art. 20: Datenübertragbarkeit
                          </h3>
                          <p className="text-slate-300 mb-4 text-sm">
                            Recht auf Erhalt der eigenen Daten in strukturiertem, gängigem und maschinenlesbarem Format.
                          </p>
                          <Card className="bg-blue-500/10 border border-blue-500/20">
                            <CardContent className="p-4">
                              <div className="text-blue-300 font-semibold mb-2 text-sm">Voraussetzungen:</div>
                              <ul className="text-slate-400 text-sm space-y-1">
                                <li>• Verarbeitung auf Einwilligung/Vertrag basiert</li>
                                <li>• Verarbeitung automatisiert erfolgt</li>
                                <li>• Format: JSON, CSV, XML</li>
                                <li>• Direkte Übermittlung an anderen Verantwortlichen</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Ban className="h-5 w-5 text-orange-400" />
                            Art. 21: Widerspruchsrecht
                          </h3>
                          <p className="text-slate-300 mb-4 text-sm">
                            Widerspruch gegen Verarbeitung aus Gründen, die sich aus der besonderen Situation des Betroffenen ergeben.
                          </p>
                          <Card className="bg-orange-500/10 border border-orange-500/20">
                            <CardContent className="p-4">
                              <div className="text-orange-300 font-semibold mb-2 text-sm">Anwendungsbereiche:</div>
                              <ul className="text-slate-400 text-sm space-y-1">
                                <li>• Verarbeitung für berechtigte Interessen (Art. 6(1)f)</li>
                                <li>• Direktwerbung (jederzeit, ohne Begründung)</li>
                                <li>• Wissenschaftliche/historische Forschung</li>
                                <li>• Profiling</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Brain className="h-5 w-5 text-indigo-400" />
                            Art. 22: Automatisierte Entscheidungen
                          </h3>
                          <p className="text-slate-300 mb-4 text-sm">
                            Recht, nicht einer ausschließlich automatisierten Entscheidung unterworfen zu werden.
                          </p>
                          <Card className="bg-indigo-500/10 border border-indigo-500/20">
                            <CardContent className="p-4">
                              <div className="text-indigo-300 font-semibold mb-2 text-sm">Beispiele:</div>
                              <ul className="text-slate-400 text-sm space-y-1">
                                <li>• Kreditwürdigkeitsprüfung</li>
                                <li>• Bewerbungs-Screening</li>
                                <li>• Algorithmic Trading</li>
                                <li>• Personalisierte Preisgestaltung</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <FileDown className="h-5 w-5" />
                          Praxis: Datenübertragbarkeit umsetzen
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card className="bg-slate-800/60">
                              <CardContent className="p-4">
                                <div className="text-green-300 font-semibold mb-2">JSON Format</div>
                                <div className="text-slate-400 text-sm mb-3">Strukturiert, maschinenlesbar</div>
                                <div className="bg-slate-900/50 rounded p-2 font-mono text-xs text-slate-300">
                                  {`{
  "name": "Max",
  "email": "max@..."
}`}
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="bg-slate-800/60">
                              <CardContent className="p-4">
                                <div className="text-green-300 font-semibold mb-2">CSV Format</div>
                                <div className="text-slate-400 text-sm mb-3">Tabellarisch, Excel-kompatibel</div>
                                <div className="bg-slate-900/50 rounded p-2 font-mono text-xs text-slate-300">
                                  {`name,email
Max,max@...`}
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="bg-slate-800/60">
                              <CardContent className="p-4">
                                <div className="text-green-300 font-semibold mb-2">XML Format</div>
                                <div className="text-slate-400 text-sm mb-3">Hierarchisch, standardisiert</div>
                                <div className="bg-slate-900/50 rounded p-2 font-mono text-xs text-slate-300">
                                  {`<user>
  <name>Max</name>
</user>`}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Wichtige Hinweise zu Art. 22
                        </h3>
                        <div className="space-y-4">
                          <Card className="bg-slate-800/60">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <Info className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                                <div>
                                  <div className="text-yellow-300 font-semibold mb-2">Ausnahmen existieren:</div>
                                  <ul className="text-slate-400 text-sm space-y-1">
                                    <li>• Für Vertragsabschluss erforderlich</li>
                                    <li>• Durch Unionsrecht/nationales Recht erlaubt</li>
                                    <li>• Auf ausdrücklicher Einwilligung beruhend</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="bg-slate-800/60">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                                <div>
                                  <div className="text-green-300 font-semibold mb-2">Dann gelten diese Pflichten:</div>
                                  <ul className="text-slate-400 text-sm space-y-1">
                                    <li>• Recht auf Erwirkung des Eingreifens einer Person</li>
                                    <li>• Recht auf Darlegung des eigenen Standpunkts</li>
                                    <li>• Recht auf Anfechtung der Entscheidung</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="umsetzung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-teal-500 rounded-lg">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                      Praktische Umsetzung
                    </h2>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Prozess-Framework für Betroffenenanfragen
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              phase: 'Eingang',
                              tasks: ['E-Mail-Postfach einrichten', 'Automatische Eingangsbestätigung', 'Ticketing-System nutzen'],
                              icon: Mail,
                              color: 'blue'
                            },
                            {
                              phase: 'Identifikation',
                              tasks: ['Identität verifizieren', 'Art des Antrags klassifizieren', 'Zuständigkeit klären'],
                              icon: UserCheck,
                              color: 'green'
                            },
                            {
                              phase: 'Prüfung',
                              tasks: ['Rechtmäßigkeit prüfen', 'Ausnahmen evaluieren', 'Datenbankabfrage durchführen'],
                              icon: Search,
                              color: 'purple'
                            },
                            {
                              phase: 'Umsetzung',
                              tasks: ['Daten zusammenstellen', 'Maßnahmen durchführen', 'Empfänger benachrichtigen'],
                              icon: Settings,
                              color: 'orange'
                            },
                            {
                              phase: 'Dokumentation',
                              tasks: ['Vorgang dokumentieren', 'Fristen tracken', 'Statistiken pflegen'],
                              icon: FileText,
                              color: 'teal'
                            }
                          ].map((stage, idx) => {
                            const Icon = stage.icon;
                            return (
                              <Card key={idx} className="bg-slate-800/60">
                                <CardContent className="p-6">
                                  <div className="flex items-start gap-4">
                                    <div className={`p-3 bg-${stage.color}-500/20 rounded-lg`}>
                                      <Icon className={`h-6 w-6 text-${stage.color}-400`} />
                                    </div>
                                    <div className="flex-grow">
                                      <h4 className={`text-lg font-semibold text-${stage.color}-300 mb-3`}>
                                        {idx + 1}. {stage.phase}
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                        {stage.tasks.map((task, taskIdx) => (
                                          <div key={taskIdx} className="flex items-center gap-2 text-slate-300 text-sm">
                                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                                            <span>{task}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-8">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Database className="h-5 w-5" />
                          Empfohlene Tools und Software
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-indigo-300 font-semibold mb-4">Enterprise-Lösungen</h4>
                              <ul className="text-slate-300 space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                  OneTrust Privacy Management
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                  TrustArc Privacy Platform
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                  Privacyidea
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                  DataGuard
                                </li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="bg-slate-800/60">
                            <CardContent className="p-6">
                              <h4 className="text-blue-300 font-semibold mb-4">Integration & Minimal-Setup</h4>
                              <ul className="text-slate-300 space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400" />
                                  Salesforce Privacy Center
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400" />
                                  Microsoft Dynamics
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400" />
                                  Excel/Google Sheets mit Makros
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400" />
                                  Open-Source GDPR-Tools
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
                          <TrendingUp className="h-5 w-5" />
                          KPIs und Erfolgsmessung
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card className="bg-slate-800/60 text-center">
                            <CardContent className="p-6">
                              <div className="text-4xl font-bold text-yellow-400 mb-2">
                                <CounterAnimation value={20} suffix="" />
                              </div>
                              <div className="text-yellow-300 font-semibold mb-1">Tage</div>
                              <div className="text-slate-400 text-sm">Ø Bearbeitungszeit Auskunft</div>
                            </CardContent>
                          </Card>
                          <Card className="bg-slate-800/60 text-center">
                            <CardContent className="p-6">
                              <div className="text-4xl font-bold text-orange-400 mb-2">
                                <CounterAnimation value={95} suffix="%" />
                              </div>
                              <div className="text-orange-300 font-semibold mb-1">Fristeneinhaltung</div>
                              <div className="text-slate-400 text-sm">Bei professioneller Organisation</div>
                            </CardContent>
                          </Card>
                          <Card className="bg-slate-800/60 text-center">
                            <CardContent className="p-6">
                              <div className="text-4xl font-bold text-yellow-400 mb-2">
                                <CounterAnimation value={125} suffix="€" />
                              </div>
                              <div className="text-yellow-300 font-semibold mb-1">Kosten/Antrag</div>
                              <div className="text-slate-400 text-sm">Je nach Komplexität. <Link to="/wissen/kosten/dsgvo-compliance-kosten" className="text-blue-400 hover:text-blue-300 underline">Gesamtkosten ansehen</Link></div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
                      <CardContent className="p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Best Practices
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              title: 'Proaktive Transparenz',
                              description: 'Stellen Sie umfassende Informationen bereits vor Anfragen bereit',
                              tip: 'Reduziert Anfragen um bis zu 40%'
                            },
                            {
                              title: 'Self-Service Portal',
                              description: 'Ermöglichen Sie Betroffenen, selbst Auskünfte und Änderungen vorzunehmen',
                              tip: 'Spart 70% der Bearbeitungszeit'
                            },
                            {
                              title: 'Standardisierte Templates',
                              description: 'Nutzen Sie vordefinierte Antwortvorlagen für häufige Anfragen',
                              tip: 'Beschleunigt Prozess erheblich'
                            },
                            {
                              title: 'Regelmäßige Schulungen',
                              description: 'Trainieren Sie Ihr Team quartalsweise zu Betroffenenrechten',
                              tip: 'Verhindert kostspielige Fehler'
                            },
                            {
                              title: 'Datenkartierung',
                              description: 'Pflegen Sie ein aktuelles Verarbeitungsverzeichnis',
                              tip: 'Essentiell für schnelle Auskunft'
                            },
                            {
                              title: 'Monitoring & Reporting',
                              description: 'Überwachen Sie Fristen und erstellen Sie Statistiken',
                              tip: 'Ermöglicht kontinuierliche Verbesserung'
                            }
                          ].map((practice, idx) => (
                            <Card key={idx} className="bg-slate-800/60">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <div className="p-2 bg-teal-500/20 rounded-lg">
                                    <CheckCircle className="h-5 w-5 text-teal-400" />
                                  </div>
                                  <div className="flex-grow">
                                    <div className="text-teal-300 font-semibold mb-1">{practice.title}</div>
                                    <div className="text-slate-400 text-sm mb-2">{practice.description}</div>
                                    <Badge className="bg-teal-500/20 text-teal-300 text-xs">
                                      {practice.tip}
                                    </Badge>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Bereit für rechtssichere Umsetzung?</h3>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                      Nutzen Sie unsere Compliance-Plattform für automatisiertes Management von Betroffenenanfragen
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      >
                        <Link to="/kontakt">
                          Kostenlose Beratung
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-teal-500 text-teal-300 hover:bg-teal-500/10"
                      >
                        <Link to="/wissen/dsgvo-leitfaeden">
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
                    <FileSearch className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Betroffenenanfragen automatisch verwalten
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Verwalten Sie alle Auskunftsanfragen, Löschanträge und weitere Betroffenenrechte
                      zentral mit automatischem Fristenmanagement. Rechtssichere Vorlagen für alle Anfrage-Typen inklusive.
                    </p>
                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => window.location.href = '/features#betroffenenanfragen-dsar'}
                    >
                      DSAR-Tool ansehen
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

export default BetroffenenrechteGuide;
