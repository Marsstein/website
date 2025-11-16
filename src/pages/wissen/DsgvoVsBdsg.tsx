import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Scale, Building2, Users, Shield, BookOpen, CheckCircle2, AlertCircle, ArrowRight, FileText, Gavel, TrendingUp, ChevronDown, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function DsgvoVsBdsg() {
  const [tocOpen, setTocOpen] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const sections = [
    { id: 'zusammenspiel', title: 'Zusammenspiel DSGVO & BDSG' },
    { id: 'unterschiede', title: 'Zentrale Unterschiede' },
    { id: 'oeffnungsklauseln', title: 'Öffnungsklauseln' },
    { id: 'praxisszenarien', title: 'Praxisszenarien' },
    { id: 'anwendungsreihenfolge', title: 'Anwendungsreihenfolge' },
    { id: 'irrtuemer', title: 'Häufige Irrtümer' },
    { id: 'bdsg-paragraphen', title: 'BDSG-Paragraphen' },
    { id: 'fazit', title: 'Fazit' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowToc(window.scrollY > 50);

      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setCurrentSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTocClick = () => {
    setTocOpen(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const keyDifferences = [
    {
      aspect: 'Rechtsnatur',
      dsgvo: 'EU-Verordnung - gilt unmittelbar in allen EU-Mitgliedstaaten',
      bdsg: 'Deutsches Bundesgesetz - konkretisiert und ergänzt die DSGVO',
      icon: Scale,
      importance: 'fundamental'
    },
    {
      aspect: 'Anwendungsbereich',
      dsgvo: 'Gesamte EU, gilt direkt ohne nationale Umsetzung',
      bdsg: 'Nur in Deutschland, nutzt Öffnungsklauseln der DSGVO',
      icon: Building2,
      importance: 'fundamental'
    },
    {
      aspect: 'Beschäftigtendatenschutz',
      dsgvo: 'Allgemeine Grundsätze in Art. 88 DSGVO',
      bdsg: '§ 26 BDSG regelt konkret Verarbeitung von Beschäftigtendaten',
      icon: Users,
      importance: 'practical',
      link: '/wissen/branchen/datenschutz-betriebsrat'
    },
    {
      aspect: 'Datenschutzbeauftragter',
      dsgvo: 'Pflicht bei bestimmten Kerntätigkeiten (Art. 37)',
      bdsg: '§ 38 BDSG: Konkrete 20-Personen-Grenze in Deutschland',
      icon: Shield,
      importance: 'practical',
      link: '/wissen/leitfaden/datenschutzbeauftragter'
    },
    {
      aspect: 'Videoüberwachung',
      dsgvo: 'Allgemeine Grundsätze der Rechtmäßigkeit',
      bdsg: '§ 4 BDSG: Spezielle Regelungen für öffentliche Stellen',
      icon: AlertCircle,
      importance: 'practical'
    },
    {
      aspect: 'Rangordnung',
      dsgvo: 'Vorrang als EU-Verordnung',
      bdsg: 'Darf DSGVO nicht widersprechen, nur konkretisieren',
      icon: Gavel,
      importance: 'fundamental'
    }
  ];

  const openingClauses = [
    {
      article: 'Art. 6 Abs. 2',
      topic: 'Rechtmäßigkeit der Verarbeitung',
      bdsgReference: '§ 26 BDSG (Beschäftigtendaten)',
      example: 'Verarbeitung von Mitarbeiterdaten für Bewerbungsverfahren, Vertragserfüllung, Leistungsbeurteilungen'
    },
    {
      article: 'Art. 9 Abs. 2 lit. b',
      topic: 'Besondere Kategorien',
      bdsgReference: '§ 26 Abs. 3 BDSG',
      example: 'Verarbeitung von Gesundheitsdaten im Beschäftigungskontext (z.B. Krankmeldungen)'
    },
    {
      article: 'Art. 37 Abs. 4',
      topic: 'Datenschutzbeauftragter',
      bdsgReference: '§ 38 BDSG',
      example: '20-Personen-Regel für Benennungspflicht des DSB in Deutschland'
    },
    {
      article: 'Art. 85',
      topic: 'Journalismus & Meinungsfreiheit',
      bdsgReference: '§§ 9a-9e BDSG',
      example: 'Ausnahmen für Medienschaffende, Forschung, Archivierung'
    },
    {
      article: 'Art. 88',
      topic: 'Beschäftigtendatenschutz',
      bdsgReference: '§ 26 BDSG',
      example: 'Kollektivvereinbarungen, Betriebsvereinbarungen zur Datenverarbeitung'
    }
  ];

  const practicalScenarios = [
    {
      scenario: 'Einstellung neuer Mitarbeiter',
      question: 'Welche Daten darf ich erheben?',
      dsgvoRule: 'Art. 6 Abs. 1 lit. b DSGVO - Verarbeitung zur Vertragserfüllung',
      bdsgRule: '§ 26 Abs. 1 BDSG - Konkretisierung für Beschäftigungsverhältnis',
      solution: 'Beide Gesetze greifen: DSGVO gibt Grundprinzip, BDSG konkretisiert für deutschen Arbeitsmarkt (Bewerbungsfotos, Vorstrafen, etc.)',
      color: 'blue'
    },
    {
      scenario: 'Betriebsrat möchte Mitbestimmung',
      question: 'Wie gestalte ich Betriebsvereinbarungen DSGVO-konform?',
      dsgvoRule: 'Art. 88 DSGVO - Öffnungsklausel für Kollektivvereinbarungen',
      bdsgRule: '§ 26 Abs. 4 BDSG - Konkrete Anforderungen an Betriebsvereinbarungen',
      solution: 'BDSG nutzt Spielraum der DSGVO und regelt Details für Deutschland (Mitbestimmung bei Zeiterfassung, Leistungskontrollen)',
      color: 'purple',
      link: '/wissen/branchen/datenschutz-betriebsrat'
    },
    {
      scenario: 'Unternehmen hat 25 Mitarbeiter',
      question: 'Brauche ich einen Datenschutzbeauftragten?',
      dsgvoRule: 'Art. 37 Abs. 1 DSGVO - DSB bei Kerntätigkeit in umfangreicher Verarbeitung',
      bdsgRule: '§ 38 Abs. 1 BDSG - DSB ab 20 Personen mit automatisierter Verarbeitung',
      solution: 'BDSG verschärft: In Deutschland Pflicht ab 20 Personen, auch wenn keine "Kerntätigkeit" vorliegt',
      color: 'orange',
      link: '/wissen/leitfaden/datenschutzbeauftragter'
    },
    {
      scenario: 'Videoüberwachung am Arbeitsplatz',
      question: 'Was muss ich bei Kameras beachten?',
      dsgvoRule: 'Art. 6 Abs. 1 lit. f DSGVO - Berechtigtes Interesse abwägen',
      bdsgRule: '§ 4 BDSG (öffentliche Stellen) + § 26 BDSG (Beschäftigte)',
      solution: 'DSGVO gibt Rahmen, BDSG konkretisiert für Arbeitsverhältnisse - hohes Schutzniveau für Mitarbeiter',
      color: 'red'
    }
  ];

  const applicationPriority = [
    {
      step: 1,
      title: 'DSGVO prüfen',
      description: 'Ist die Verarbeitung nach DSGVO grundsätzlich zulässig?',
      details: 'Prüfen Sie die Rechtsgrundlagen in Art. 6 DSGVO, Grundsätze in Art. 5 DSGVO',
      icon: BookOpen
    },
    {
      step: 2,
      title: 'BDSG-Konkretisierung prüfen',
      description: 'Gibt es spezifische BDSG-Regelungen, die greifen?',
      details: 'Besonders relevant: § 26 BDSG (Beschäftigte), § 38 BDSG (DSB), §§ 22-25 BDSG (Scoring)',
      icon: FileText
    },
    {
      step: 3,
      title: 'Strengere Regel anwenden',
      description: 'Bei Konflikt gilt die für Betroffene günstigere Regelung',
      details: 'BDSG darf DSGVO nicht abschwächen, nur konkretisieren oder verschärfen',
      icon: Shield
    }
  ];

  const commonMisconceptions = [
    {
      myth: 'BDSG ist veraltet und wurde durch DSGVO ersetzt',
      reality: 'Falsch! BDSG wurde 2018 angepasst (BDSG-neu) und ergänzt die DSGVO aktiv',
      icon: AlertCircle,
      color: 'red'
    },
    {
      myth: 'Ich muss nur die DSGVO beachten',
      reality: 'Nein! In Deutschland müssen Sie beide Gesetze parallel prüfen',
      icon: BookOpen,
      color: 'orange'
    },
    {
      myth: 'BDSG gilt nur für deutsche Unternehmen',
      reality: 'Auch ausländische Unternehmen mit Niederlassung in DE unterliegen dem BDSG',
      icon: Building2,
      color: 'blue'
    },
    {
      myth: 'Bei Widerspruch zwischen DSGVO und BDSG gilt BDSG',
      reality: 'Nein! DSGVO hat Vorrang. BDSG darf nur konkretisieren, nicht widersprechen',
      icon: Scale,
      color: 'purple'
    }
  ];

  const relatedArticles = [
    {
      title: 'Datenschutzbeauftragter: Der komplette Leitfaden',
      description: 'Alles zu Aufgaben, Pflichten, Kosten und der 20-Personen-Regel nach § 38 BDSG',
      link: '/wissen/leitfaden/datenschutzbeauftragter',
      icon: Shield
    },
    {
      title: 'TOM-Maßnahmen: Technisch-organisatorische Maßnahmen',
      description: 'Praktischer Leitfaden zu TOMs nach Art. 32 DSGVO',
      link: '/wissen/leitfaden/tom-massnahmen',
      icon: FileText
    },
    {
      title: 'Verarbeitungsverzeichnis erstellen',
      description: 'Dokumentationspflicht nach Art. 30 DSGVO rechtssicher umsetzen',
      link: '/wissen/leitfaden/verarbeitungsverzeichnis',
      icon: BookOpen
    },
    {
      title: 'Datenschutz Betriebsrat',
      description: 'Mitbestimmung und Beschäftigtendatenschutz nach § 26 BDSG',
      link: '/wissen/branchen/datenschutz-betriebsrat',
      icon: Users
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": commonMisconceptions.map(item => ({
      "@type": "Question",
      "name": item.myth,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.reality
      }
    }))
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "DSGVO vs BDSG: Unterschiede, Zusammenspiel & Praxisleitfaden",
    "description": "Umfassender Leitfaden zum Verhältnis von DSGVO und BDSG: Rechtsnatur, Öffnungsklauseln, Anwendungsfälle und praktische Szenarien.",
    "author": {
      "@type": "Organization",
      "name": "Marsstein"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marsstein",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marsstein.ai/logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
  };

  return (
    <>
      <Header />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>

      <AnimatePresence>
        {showToc && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 z-40 hidden lg:block"
          >
            <Card className="w-64 shadow-xl border-2 border-blue-200">
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900">Inhaltsverzeichnis</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${tocOpen ? 'rotate-180' : ''}`} />
              </button>

              {tocOpen && (
                <div className="border-t border-slate-200 p-2 max-h-96 overflow-y-auto">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={handleTocClick}
                      className={`block px-3 py-2 text-sm rounded transition-colors ${
                        currentSection === section.id
                          ? 'bg-blue-100 text-blue-700 font-semibold'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        <motion.div
          className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              {...fadeInUp}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30 mb-6">
                <Scale className="h-4 w-4 text-blue-300" />
                <span className="text-sm font-medium text-blue-200">Datenschutzrecht Deutschland</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                DSGVO vs BDSG
              </h1>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Verstehen Sie das Zusammenspiel von EU-Datenschutz-Grundverordnung und Bundesdatenschutzgesetz. Öffnungsklauseln, Rangordnung und Praxisbeispiele für Unternehmen in Deutschland.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Rechtliche Unterschiede erklärt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Öffnungsklauseln der DSGVO</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Praxisbeispiele Beschäftigtendaten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Anwendungsreihenfolge</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.section {...fadeInUp} className="mb-16" id="zusammenspiel">
            <Card className="p-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 border-2 border-blue-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Das Wichtigste zuerst: DSGVO und BDSG arbeiten zusammen
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Die <strong><Link to="/dsgvo" className="text-blue-600 hover:underline">DSGVO (Datenschutz-Grundverordnung)</Link></strong> ist eine EU-Verordnung, die seit Mai 2018 in allen EU-Mitgliedstaaten <strong>unmittelbar gilt</strong>. Das <strong>BDSG (Bundesdatenschutzgesetz)</strong> ist das deutsche Begleitgesetz, das die DSGVO konkretisiert und ergänzt - besonders dort, wo die DSGVO den Mitgliedstaaten Spielräume lässt (sogenannte Öffnungsklauseln).
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Gavel className="h-5 w-5 text-blue-600" />
                  Wichtiges Prinzip: Vorrang der DSGVO
                </h3>
                <p className="text-slate-700">
                  Die DSGVO als EU-Verordnung hat <strong>Vorrang</strong> vor nationalen Gesetzen. Das BDSG darf der DSGVO nicht widersprechen, sondern nur:
                </p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Konkretisieren:</strong> Offene Begriffe der DSGVO präzisieren (z.B. 20-Personen-Grenze für DSB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Ergänzen:</strong> Regelungen in Bereichen treffen, die die DSGVO den Mitgliedstaaten überlässt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Verschärfen:</strong> Strengere Anforderungen stellen (soweit DSGVO dies zulässt)</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16" id="unterschiede">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Zentrale Unterschiede: DSGVO vs BDSG
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Verstehen Sie die wesentlichen Unterschiede zwischen EU-Verordnung und deutschem Bundesgesetz
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyDifferences.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                          diff.importance === 'fundamental' ? 'bg-blue-600' : 'bg-purple-600'
                        }`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-1">{diff.aspect}</h3>
                          <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                            diff.importance === 'fundamental'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {diff.importance === 'fundamental' ? 'Grundlegend' : 'Praxisrelevant'}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                          <div className="text-xs font-semibold text-blue-600 mb-1">DSGVO</div>
                          <p className="text-sm text-slate-700">{diff.dsgvo}</p>
                        </div>

                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                          <div className="text-xs font-semibold text-slate-600 mb-1">BDSG</div>
                          <p className="text-sm text-slate-700">{diff.bdsg}</p>
                        </div>
                      </div>

                      {diff.link && (
                        <Link
                          to={diff.link}
                          className="mt-4 inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Mehr erfahren <ExternalLink className="h-4 w-4" />
                        </Link>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16" id="oeffnungsklauseln">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Öffnungsklauseln: Wo das BDSG die DSGVO konkretisiert
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Die DSGVO enthält über 50 Öffnungsklauseln, die nationale Regelungen ermöglichen. Dies sind die wichtigsten für Unternehmen:
              </p>
            </div>

            <div className="grid gap-4">
              {openingClauses.map((clause, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-xs font-semibold text-blue-600 mb-1">DSGVO Öffnungsklausel</div>
                        <div className="font-bold text-slate-900">{clause.article}</div>
                        <div className="text-sm text-slate-600 mt-1">{clause.topic}</div>
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-slate-600 mb-1">BDSG Umsetzung</div>
                        <div className="font-semibold text-slate-900">{clause.bdsgReference}</div>
                      </div>

                      <div className="md:col-span-2">
                        <div className="text-xs font-semibold text-slate-600 mb-1">Praxisbeispiel</div>
                        <p className="text-sm text-slate-700">{clause.example}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Wichtig für die Praxis</h3>
                  <p className="text-slate-700">
                    Bei der Rechtsgrundlagenprüfung müssen Sie <strong>immer beide Gesetze</strong> heranziehen. Beginnen Sie mit der DSGVO und prüfen Sie dann, ob das BDSG konkretisierende Regelungen enthält. Im Beschäftigungsverhältnis ist <Link to="/wissen/branchen/datenschutz-betriebsrat" className="text-blue-600 hover:underline font-semibold">§ 26 BDSG</Link> fast immer relevant!
                  </p>
                </div>
              </div>
            </Card>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16" id="praxisszenarien">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Praxisszenarien: DSGVO und BDSG im Zusammenspiel
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Typische Situationen aus dem Unternehmensalltag und wie beide Gesetze zusammenwirken
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {practicalScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`p-6 h-full border-t-4 border-t-${scenario.color}-500 hover:shadow-xl transition-all duration-300`}>
                    <div className="mb-4">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-${scenario.color}-100 text-${scenario.color}-700 mb-3`}>
                        Szenario {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{scenario.scenario}</h3>
                      <p className="text-slate-600 italic">"{scenario.question}"</p>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-l-blue-600">
                        <div className="text-xs font-semibold text-blue-600 mb-1">DSGVO Grundlage</div>
                        <p className="text-sm text-slate-700">{scenario.dsgvoRule}</p>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-3 border-l-4 border-l-slate-600">
                        <div className="text-xs font-semibold text-slate-600 mb-1">BDSG Konkretisierung</div>
                        <p className="text-sm text-slate-700">{scenario.bdsgRule}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold text-green-700 mb-1">Lösung</div>
                          <p className="text-sm text-slate-700">{scenario.solution}</p>
                        </div>
                      </div>
                    </div>

                    {scenario.link && (
                      <Link
                        to={scenario.link}
                        className="mt-4 inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Detaillierter Leitfaden <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16" id="anwendungsreihenfolge">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Anwendungsreihenfolge: So prüfen Sie richtig
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                3-Schritte-Methode zur korrekten Rechtsgrundlagenprüfung
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {applicationPriority.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="p-6 h-full relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>

                      <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {step.step}
                          </div>
                          <Icon className="h-8 w-8 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-700 font-medium mb-3">{step.description}</p>
                        <p className="text-sm text-slate-600">{step.details}</p>

                        {index < 2 && (
                          <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2">
                            <ArrowRight className="h-6 w-6 text-blue-400" />
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <Card className="mt-8 p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 border-2 border-blue-300">
              <h3 className="font-bold text-slate-900 mb-4 text-xl">Praxis-Tipp: Checkliste für jeden Verarbeitungsvorgang</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Rechtsgrundlage nach DSGVO identifizieren (Art. 6, 9)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Einschlägige BDSG-Regelung prüfen (v.a. § 26)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Bei Beschäftigten: Mitbestimmung klären</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Transparenzpflichten erfüllen (Info-Pflicht)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700"><Link to="/wissen/leitfaden/tom-massnahmen" className="text-blue-600 hover:underline">TOM (technische & organisatorische Maßnahmen)</Link> prüfen</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700"><Link to="/wissen/leitfaden/verarbeitungsverzeichnis" className="text-blue-600 hover:underline">Verarbeitungsverzeichnis</Link> dokumentieren</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16" id="irrtuemer">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Häufige Irrtümer: DSGVO vs BDSG
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Diese Missverständnisse begegnen uns in der Praxis immer wieder
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMisconceptions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`p-6 border-l-4 border-l-${item.color}-500 hover:shadow-lg transition-all duration-300`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 text-${item.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <div className={`inline-block px-2 py-1 rounded text-xs font-semibold bg-${item.color}-100 text-${item.color}-700 mb-2`}>
                            MYTHOS
                          </div>
                          <p className="text-slate-900 font-medium mb-3 italic">"{item.myth}"</p>
                          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-xs font-semibold text-green-700 mb-1">REALITÄT</div>
                                <p className="text-sm text-slate-700">{item.reality}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16" id="bdsg-paragraphen">
            <Card className="p-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">
                    Wichtige BDSG-Paragraphen für Unternehmen
                  </h2>
                  <p className="text-blue-100 max-w-2xl mx-auto">
                    Diese BDSG-Regelungen sollten Sie kennen und in Ihrer Datenschutz-Compliance berücksichtigen
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { section: '§ 26 BDSG', title: 'Beschäftigtendaten', desc: 'Kernregelung für HR-Daten, Bewerbungen, Leistungsbeurteilungen', link: '/wissen/branchen/datenschutz-betriebsrat' },
                    { section: '§ 38 BDSG', title: 'DSB-Pflicht', desc: '20-Personen-Grenze für Benennungspflicht', link: '/wissen/leitfaden/datenschutzbeauftragter' },
                    { section: '§ 22 BDSG', title: 'Scoring', desc: 'Regelungen für Bonitätsprüfungen und Scoring-Verfahren' },
                    { section: '§ 4 BDSG', title: 'Videoüberwachung', desc: 'Spezialregelung für öffentliche Stellen' },
                    { section: '§ 27 BDSG', title: 'Forschung', desc: 'Wissenschaftliche Forschung und Statistik' },
                    { section: '§ 29 BDSG', title: 'Archivierung', desc: 'Regelungen für Archive im öffentlichen Interesse' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="text-blue-300 font-bold mb-1">{item.section}</div>
                      <div className="text-white font-semibold mb-2">{item.title}</div>
                      <p className="text-sm text-blue-100 mb-3">{item.desc}</p>
                      {item.link && (
                        <Link to={item.link} className="text-xs text-blue-200 hover:text-white inline-flex items-center gap-1">
                          Details <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16" id="fazit">
            <Card className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 border-2 border-blue-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Fazit: DSGVO und BDSG als Einheit verstehen
                </h2>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                  Erfolgreiche Datenschutz-Compliance in Deutschland erfordert das Verständnis beider Regelwerke
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Parallele Anwendung</h3>
                  <p className="text-sm text-slate-600">
                    DSGVO und BDSG gelten gleichzeitig - prüfen Sie immer beide Gesetze
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Öffnungsklauseln nutzen</h3>
                  <p className="text-sm text-slate-600">
                    Das BDSG nutzt Spielräume der DSGVO für deutsche Besonderheiten
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Schutz erhöhen</h3>
                  <p className="text-sm text-slate-600">
                    BDSG verschärft teilweise (z.B. DSB-Pflicht ab 20 Personen)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <h3 className="font-bold text-slate-900 mb-4 text-xl">Empfehlung für Unternehmen</h3>
                <p className="text-slate-700 mb-4">
                  Behandeln Sie DSGVO und BDSG nicht als konkurrierende, sondern als <strong>ergänzende Regelwerke</strong>. Bei jeder Datenverarbeitung:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Starten Sie mit der DSGVO-Rechtsgrundlage (Art. 6, 9 DSGVO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Prüfen Sie einschlägige BDSG-Konkretisierungen (besonders § 26 für Mitarbeiterdaten)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Dokumentieren Sie beide Rechtsgrundlagen im <Link to="/wissen/leitfaden/verarbeitungsverzeichnis" className="text-blue-600 hover:underline">Verarbeitungsverzeichnis</Link></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Bei Unsicherheiten: <Link to="/wissen/leitfaden/datenschutzbeauftragter" className="text-blue-600 hover:underline">Datenschutzbeauftragten</Link> oder Rechtsberatung hinzuziehen</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Weiterführende Artikel
              </h2>
              <p className="text-lg text-slate-600">
                Vertiefen Sie Ihr Wissen zu spezifischen Themen
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <Link key={index} to={article.link}>
                    <Card className="p-6 h-full hover:shadow-xl hover:border-blue-300 transition-all duration-300 border-2 group">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-slate-600">{article.description}</p>
                          <div className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 font-medium">
                            Zum Leitfaden <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <Card className="p-8 bg-gradient-to-r from-[#e24e1b] to-[#d63516] text-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Benötigen Sie Unterstützung bei DSGVO & BDSG Compliance?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Unsere Datenschutz-Experten helfen Ihnen bei der rechtskonformen Umsetzung beider Regelwerke in Ihrem Unternehmen.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-[#e24e1b] hover:bg-blue-50">
                    <Link to="/contact">
                      Beratung anfragen
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                    <Link to="/wissen/leitfaden/datenschutzbeauftragter">
                      Mehr zu DSB-Pflichten
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>

      <Footer />
    </>
  );
}
