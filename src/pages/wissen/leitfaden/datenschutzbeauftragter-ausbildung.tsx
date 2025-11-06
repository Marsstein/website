import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Briefcase, Award, TrendingUp, Clock, Euro, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Users, Building2, FileCheck, Target } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const DatenschutzbeauftragterAusbildung: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedPath, setSelectedPath] = useState<'quereinsteiger' | 'jurist' | 'it' | null>(null);
  const [tocOpen, setTocOpen] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const sections = [
    { id: 'wie-wird-man-dsb', title: 'Wie wird man DSB?' },
    { id: 'karrierepfade', title: 'Karrierepfade' },
    { id: 'zertifizierungen', title: 'Zertifizierungen' },
    { id: 'kosten', title: 'Kosten & Zeitaufwand' },
    { id: 'skills', title: 'Fähigkeiten' },
    { id: 'gehalt', title: 'Gehalt' },
    { id: 'weiterbildung', title: 'Weiterbildung' },
    { id: 'jobsuche', title: 'Jobsuche' },
    { id: 'faq', title: 'FAQ' }
  ];

  useEffect(() => {
    // Show TOC immediately for testing
    setShowToc(true);

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

  const careerPaths = [
    {
      id: 'quereinsteiger' as const,
      title: 'Quereinsteiger',
      duration: '6-12 Monate',
      difficulty: 'Mittel',
      investment: '3.000-6.000 €',
      steps: [
        'Grundlagen-Schulung (40-80 Stunden)',
        'Vertiefungskurs DSGVO (3-5 Tage)',
        'TÜV/DEKRA Zertifizierung',
        'Praktische Erfahrung sammeln (3-6 Monate)',
        'Kontinuierliche Weiterbildung'
      ],
      requirements: [
        'Kaufmännische oder technische Ausbildung',
        'Berufserfahrung (mind. 2 Jahre)',
        'Affinität zu rechtlichen Themen',
        'Kommunikationsstärke'
      ]
    },
    {
      id: 'jurist' as const,
      title: 'Jurist/Rechtswissenschaftler',
      duration: '3-6 Monate',
      difficulty: 'Leicht',
      investment: '2.000-4.000 €',
      steps: [
        'Spezialisierung Datenschutzrecht',
        'DSGVO-Intensivkurs (3-5 Tage)',
        'IT-Grundlagen (optional, 2-3 Tage)',
        'Zertifizierung (TÜV/DEKRA)',
        'Netzwerk aufbauen'
      ],
      requirements: [
        'Jurastudium (1. oder 2. Staatsexamen)',
        'Rechtliches Grundverständnis',
        'Interesse an IT-Themen',
        'Beratungskompetenz'
      ]
    },
    {
      id: 'it' as const,
      title: 'IT-Fachkraft',
      duration: '4-8 Monate',
      difficulty: 'Mittel',
      investment: '3.000-5.000 €',
      steps: [
        'Rechtliche Grundlagen (40-60 Stunden)',
        'DSGVO-Fachkurs (5-7 Tage)',
        'IT-Security & Privacy (3-5 Tage)',
        'TÜV/DEKRA Zertifizierung',
        'Praxis in IT-Abteilung sammeln'
      ],
      requirements: [
        'IT-Ausbildung oder Studium',
        'Technisches Verständnis (Systeme, Netzwerke)',
        'Interesse an rechtlichen Themen',
        'Analytisches Denken'
      ]
    }
  ];

  const certifications = [
    {
      provider: 'TÜV Rheinland',
      name: 'Datenschutzbeauftragter TÜV',
      duration: '5 Tage Präsenz + Prüfung',
      cost: '2.290 €',
      recognition: 'Sehr hoch',
      renewal: 'Alle 3 Jahre Auffrischung',
      highlights: ['Anerkannter Standard', 'Praxisnah', 'Bundesweit']
    },
    {
      provider: 'TÜV Süd',
      name: 'Geprüfter Datenschutzbeauftragter',
      duration: '5 Tage + Online-Prüfung',
      cost: '2.390 €',
      recognition: 'Sehr hoch',
      renewal: 'Jährliche Fortbildung empfohlen',
      highlights: ['Prüfungsbasiert', 'International anerkannt', 'Modular']
    },
    {
      provider: 'DEKRA',
      name: 'Fachkraft Datenschutz',
      duration: '6 Tage Intensiv',
      cost: '2.490 €',
      recognition: 'Hoch',
      renewal: 'Alle 2 Jahre Update-Seminar',
      highlights: ['Intensivausbildung', 'Kleine Gruppen', 'Fallstudien']
    },
    {
      provider: 'GDDcert',
      name: 'Certified EU Data Protection Officer',
      duration: 'Selbststudium + Prüfung',
      cost: '1.200 €',
      recognition: 'Hoch (in der Branche)',
      renewal: 'Jährliche Fortbildungsnachweise',
      highlights: ['Flexibel', 'EU-weit anerkannt', 'GDD-Standard']
    },
    {
      provider: 'Bitkom Akademie',
      name: 'Datenschutzbeauftragter (Bitkom)',
      duration: '4 Tage + E-Learning',
      cost: '1.890 €',
      recognition: 'Mittel-Hoch',
      renewal: 'Freiwillige Updates',
      highlights: ['IT-fokussiert', 'Praxisnah', 'Netzwerk']
    }
  ];

  const salaryData = [
    { role: 'Junior DSB (0-2 Jahre)', intern: '42.000 - 55.000 €', extern: '35.000 - 48.000 €' },
    { role: 'DSB (2-5 Jahre)', intern: '55.000 - 72.000 €', extern: '48.000 - 65.000 €' },
    { role: 'Senior DSB (5-10 Jahre)', intern: '72.000 - 95.000 €', extern: '65.000 - 85.000 €' },
    { role: 'Lead DSB (>10 Jahre)', intern: '95.000 - 120.000 €', extern: '85.000 - 110.000 €' }
  ];

  const skills = {
    fachlich: [
      'DSGVO & nationale Datenschutzgesetze (BDSG)',
      'IT-Sicherheit & technische Maßnahmen (TOM)',
      'Prozessmanagement & Dokumentation',
      'Risikobewertung & DSFA-Durchführung',
      'Betroffenenrechte & Anfragenmanagement',
      'Datenschutz-Folgenabschätzung',
      'Incident Response & Meldepflichten',
      'Vertragsgestaltung & AVV-Prüfung'
    ],
    soft: [
      'Kommunikationsfähigkeit (mit Management & Mitarbeitern)',
      'Durchsetzungsvermögen & Verhandlungsgeschick',
      'Analytisches & strukturiertes Denken',
      'Schulungs- & Präsentationskompetenz',
      'Konfliktlösung & Mediation',
      'Projektmanagement',
      'Interkulturelle Kompetenz (bei internationalen Unternehmen)',
      'Zeitmanagement & Priorisierung'
    ]
  };

  const weiterbildung = [
    {
      thema: 'EU-Standardvertragsklauseln (SCC)',
      anbieter: 'IAPP, GDD, Bitkom',
      dauer: '1-2 Tage',
      kosten: '490-890 €',
      frequenz: 'Bei Änderungen'
    },
    {
      thema: 'IT-Sicherheit & Cyber Security',
      anbieter: 'BSI, ISACA, ISC2',
      dauer: '3-5 Tage',
      kosten: '1.200-2.500 €',
      frequenz: 'Jährlich empfohlen'
    },
    {
      thema: 'Künstliche Intelligenz & DSGVO',
      anbieter: 'Bitkom, IAPP, Akademien',
      dauer: '1-2 Tage',
      kosten: '590-990 €',
      frequenz: '1-2x jährlich'
    },
    {
      thema: 'Datenschutz-Folgenabschätzung (DSFA)',
      anbieter: 'TÜV, DEKRA, GDD',
      dauer: '1-2 Tage',
      kosten: '690-1.190 €',
      frequenz: 'Alle 2 Jahre'
    },
    {
      thema: 'Aufsichtsbehörden & Bußgeldverfahren',
      anbieter: 'Rechtsanwaltskanzleien, GDD',
      dauer: '1 Tag',
      kosten: '490-790 €',
      frequenz: 'Alle 2-3 Jahre'
    }
  ];

  const faqs = [
    {
      question: 'Wie wird man Datenschutzbeauftragter?',
      answer: 'Um Datenschutzbeauftragter zu werden, benötigen Sie eine Kombination aus Fachwissen (DSGVO, IT-Sicherheit) und praktischer Erfahrung. Der übliche Weg: 1) Grundlagen-Schulung (40-80 Stunden), 2) Vertiefungskurs zur DSGVO (3-5 Tage), 3) Zertifizierung (TÜV, DEKRA, GDD), 4) Praktische Erfahrung sammeln. Eine spezifische Ausbildung ist nicht vorgeschrieben, aber Zertifikate von TÜV oder DEKRA sind in der Praxis Standard.'
    },
    {
      question: 'Welche Ausbildung braucht ein Datenschutzbeauftragter?',
      answer: 'Es gibt keine gesetzlich vorgeschriebene Ausbildung. Nach Art. 37 DSGVO muss der DSB "Fachwissen auf dem Gebiet des Datenschutzrechts und der Datenschutzpraxis" besitzen. In der Praxis bedeutet dies: Eine Zertifizierung (TÜV/DEKRA), fundierte DSGVO-Kenntnisse, IT-Grundverständnis und idealerweise eine kaufmännische, juristische oder IT-bezogene Grundausbildung. Quereinsteiger sind willkommen, wenn sie die erforderlichen Kompetenzen nachweisen.'
    },
    {
      question: 'Wie viel kostet eine Datenschutzbeauftragter-Ausbildung?',
      answer: 'Die Kosten für eine vollständige Ausbildung zum DSB liegen zwischen 2.000 und 6.000 €, abhängig vom Anbieter und Umfang. Beispiele: TÜV-Zertifizierung (5 Tage): 2.290-2.490 €, GDDcert-Zertifizierung: ca. 1.200 € (Selbststudium + Prüfung), Bitkom Akademie: ca. 1.890 €. Hinzu kommen optionale Vertiefungskurse (500-1.500 € pro Jahr) und jährliche Fortbildungen (300-800 €).'
    },
    {
      question: 'Welche Zertifizierung ist die beste?',
      answer: 'Die TÜV-Zertifizierung (TÜV Rheinland oder TÜV Süd) gilt als Gold-Standard in Deutschland mit sehr hoher Anerkennung bei Arbeitgebern und Aufsichtsbehörden. GDDcert ist in der Datenschutz-Community sehr angesehen, besonders wenn Sie GDD-Mitglied sind. DEKRA ist ebenfalls sehr gut und bietet intensive Schulungen. Wählen Sie basierend auf: Ihrer Lernpräferenz (Präsenz vs. Online), Budget, regionaler Verfügbarkeit und Branchenfokus.'
    },
    {
      question: 'Kann man Datenschutzbeauftragter ohne Studium werden?',
      answer: 'Ja, absolut! Ein Studium ist keine Voraussetzung. Viele erfolgreiche DSB sind Quereinsteiger mit kaufmännischer oder IT-Ausbildung. Entscheidend ist die fachliche Qualifikation, die Sie durch Schulungen und Zertifizierungen erwerben können. Wichtig sind: DSGVO-Kenntnisse (durch Schulung erwerbbar), praktische Erfahrung, Kommunikationsfähigkeit und kontinuierliche Weiterbildung. Ihre Berufserfahrung + Zertifizierung + Engagement sind wichtiger als ein Studium.'
    },
    {
      question: 'Wie lange dauert die Ausbildung zum Datenschutzbeauftragten?',
      answer: 'Die Grundausbildung mit Zertifizierung dauert 3-12 Monate, abhängig von Ihrem Hintergrund: Juristen: 3-6 Monate (haben bereits rechtliches Fundament), IT-Fachkräfte: 4-8 Monate (müssen rechtliche Grundlagen aufbauen), Quereinsteiger: 6-12 Monate (brauchen sowohl IT- als auch Rechts-Basics). Die eigentliche Schulung + Prüfung dauert meist nur 5-7 Tage, aber Vor- und Nachbereitung sowie Praxiserfahrung brauchen Zeit.'
    },
    {
      question: 'Was verdient ein Datenschutzbeauftragter?',
      answer: 'Das Gehalt variiert stark nach Erfahrung, Region und Anstellungsart: Junior DSB (0-2 Jahre): 42.000-55.000 € intern, 35.000-48.000 € extern, DSB (2-5 Jahre): 55.000-72.000 € intern, 48.000-65.000 € extern, Senior DSB (5-10 Jahre): 72.000-95.000 € intern, 65.000-85.000 € extern, Lead DSB (>10 Jahre): 95.000-120.000 € intern, 85.000-110.000 € extern. In Großstädten (München, Frankfurt, Hamburg) liegen die Gehälter 10-20% höher.'
    },
    {
      question: 'Ist der TÜV-Kurs für Datenschutzbeauftragten Pflicht?',
      answer: 'Nein, der TÜV-Kurs ist gesetzlich nicht verpflichtend. Die DSGVO schreibt keine bestimmte Zertifizierung vor. Allerdings ist eine anerkannte Zertifizierung (TÜV, DEKRA, GDD) in der Praxis faktisch Standard, da: 1) Arbeitgeber sie als Nachweis der Fachkunde erwarten, 2) Aufsichtsbehörden bei Kontrollen nach Qualifikationsnachweisen fragen, 3) Sie ohne Zertifikat schwer eine Stelle finden, 4) Haftungsrisiken ohne fundierte Ausbildung hoch sind. Fazit: Nicht Pflicht, aber dringend empfohlen.'
    },
    {
      question: 'Gibt es eine Online-Ausbildung zum Datenschutzbeauftragten?',
      answer: 'Ja, es gibt vollwertige Online-Ausbildungen: GDDcert bietet Selbststudium mit Online-Prüfung, TÜV und DEKRA bieten hybride Modelle (E-Learning + virtuelle Präsenztage), Bitkom Akademie kombiniert 4 Tage Präsenz mit E-Learning-Modulen, diverse Akademien bieten reine Online-Kurse (1.200-2.500 €). Wichtig: Achten Sie auf Anerkennung (TÜV, GDD, DEKRA), praktische Übungen (nicht nur Theorie), Prüfung am Ende und Netzwerk-Möglichkeiten.'
    },
    {
      question: 'Welche Voraussetzungen braucht man als Datenschutzbeauftragter?',
      answer: 'Formale Voraussetzungen: Keine gesetzlich vorgeschriebene Ausbildung, Fachwissen zu DSGVO & Datenschutz (nachweisbar durch Zertifizierung), Zuverlässigkeit (keine Interessenkonflikte). Faktische Anforderungen: Abgeschlossene Berufsausbildung oder Studium (Jura, BWL, IT), 2-3 Jahre Berufserfahrung (nicht zwingend im Datenschutz), TÜV/DEKRA-Zertifizierung oder gleichwertig, IT-Grundverständnis, Kommunikationsstärke, kontinuierliche Weiterbildung.'
    },
    {
      question: 'Kann man als Quereinsteiger Datenschutzbeauftragter werden?',
      answer: 'Ja, Quereinsteiger sind sehr willkommen! Viele DSB kommen aus anderen Bereichen. Erfolgsfaktoren: Relevante Vorkenntnisse (IT, Recht, Compliance, HR, Qualitätsmanagement), strukturierte Weiterbildung (TÜV/DEKRA-Kurs), Praxiserfahrung sammeln (z.B. als interner DSB starten), Netzwerk aufbauen (GDD-Mitgliedschaft, Fachveranstaltungen), kontinuierliches Lernen. Zeitaufwand: 6-12 Monate bis zur ersten Position. Investition: 3.000-6.000 € für Ausbildung.'
    },
    {
      question: 'Wie oft muss ein Datenschutzbeauftragter geschult werden?',
      answer: 'Es gibt keine gesetzliche Pflicht, aber faktisch ist jährliche Weiterbildung Standard. Empfehlung: Mindestens 16-24 Stunden Fortbildung pro Jahr zu aktuellen Themen (neue Gerichtsurteile, Aufsichtsbehörden-Entscheidungen, Technik-Updates), alle 2-3 Jahre Auffrischungskurs (1-2 Tage), bei großen Änderungen (z.B. neue EU-Verordnungen) zeitnahe Spezialschulungen. Zertifizierungs-Erneuerung: TÜV alle 3 Jahre, DEKRA alle 2 Jahre, GDDcert jährlicher Nachweis.'
    },
    {
      question: 'Was ist der Unterschied zwischen TÜV, DEKRA und GDD-Zertifizierung?',
      answer: 'TÜV (Rheinland/Süd): Präsenzschulung (5 Tage), sehr hohe Anerkennung, praxisnah, 2.290-2.490 €, Erneuerung alle 3 Jahre. DEKRA: Intensivausbildung (6 Tage), kleine Gruppen, viele Fallstudien, 2.490 €, Update alle 2 Jahre. GDDcert: Selbststudium + Prüfung, flexibel, EU-weit anerkannt, 1.200 €, jährliche Fortbildungsnachweise. Empfehlung: TÜV für klassischen Präsenz-Weg, GDDcert für Flexibilität + GDD-Netzwerk, DEKRA für intensive Betreuung.'
    },
    {
      question: 'Braucht man eine IHK-Zertifizierung als Datenschutzbeauftragter?',
      answer: 'Nein, eine IHK-Zertifizierung ist nicht notwendig. Die IHK bietet zwar Datenschutz-Kurse an, aber in der Praxis sind TÜV, DEKRA und GDDcert die anerkannten Standards. Wenn Sie bereits eine IHK-Weiterbildung (z.B. Geprüfter Datenschutzbeauftragter IHK) haben, ist diese akzeptiert, aber nicht so weit verbreitet wie TÜV. Empfehlung: Investieren Sie lieber in TÜV oder GDDcert, da diese bei Arbeitgebern und Aufsichtsbehörden höhere Anerkennung genießen.'
    },
    {
      question: 'Wie viel verdient ein externer Datenschutzbeauftragter?',
      answer: 'Als externer DSB (selbstständig oder bei Dienstleister) variiert das Einkommen stark: Angestellt bei Dienstleister: 35.000-85.000 € (je nach Erfahrung), selbstständig als Freelancer: 60-150 €/Stunde (= 3.000-7.500 €/Monat bei 10-15 Mandanten), selbstständig mit eigenem Team: 80.000-150.000 € möglich. Durchschnittseinkommen liegt bei 55.000-75.000 €. Vorteile: Flexibilität, Skalierbarkeit. Nachteile: Unsicherheit, Akquise-Aufwand, keine Sozialleistungen.'
    },
    {
      question: 'Welche Weiterbildungen sind für Datenschutzbeauftragte sinnvoll?',
      answer: 'Wichtige Weiterbildungen: IT-Sicherheit & Cyber Security (jährlich, 1.200-2.500 €), KI & DSGVO (1-2x jährlich, 590-990 €), EU-Standardvertragsklauseln/SCC (bei Änderungen, 490-890 €), Datenschutz-Folgenabschätzung (alle 2 Jahre, 690-1.190 €), Aufsichtsbehörden & Bußgeldverfahren (alle 2-3 Jahre, 490-790 €), Projektmanagement (einmalig, 1.500-3.000 €), Branchenspezifisch (Gesundheit, Finance, HR je nach Fokus).'
    },
    {
      question: 'Kann man als IT-Mitarbeiter zum Datenschutzbeauftragten werden?',
      answer: 'Ja, IT-Mitarbeiter haben sehr gute Voraussetzungen! Ihre technischen Kenntnisse sind ein großer Vorteil. Weg: 1) Rechtliche Grundlagen aufbauen (40-60 Stunden Schulung), 2) DSGVO-Fachkurs (5-7 Tage), 3) IT-Security & Privacy vertiefen (3-5 Tage), 4) TÜV/DEKRA-Zertifizierung. Zeitaufwand: 4-8 Monate. Investition: 3.000-5.000 €. Vorteil: Sie verstehen technische Schutzmaßnahmen besser als reine Juristen. Achtung: Schulen Sie bewusst Soft Skills (Kommunikation mit Management).'
    },
    {
      question: 'Wie wird man externer Datenschutzbeauftragter?',
      answer: 'Um externer DSB zu werden: 1) Zertifizierung erwerben (TÜV/DEKRA/GDD), 2) Praxiserfahrung sammeln (2-3 Jahre als interner DSB oder bei Dienstleister), 3) Gewerbeanmeldung (freiberuflich oder GmbH), 4) Berufshaftpflichtversicherung abschließen (Pflicht! 1-3 Mio. € Deckung), 5) Marketing & Akquise starten, 6) Erste Mandate gewinnen (oft über Netzwerk). Investition: 5.000-10.000 € (Ausbildung + Versicherung + Marketing). Zeitaufwand bis zur Profitabilität: 6-18 Monate.'
    },
    {
      question: 'Was kostet ein Datenschutzbeauftragter Kurs?',
      answer: 'Kosten für DSB-Kurse im Überblick: Grundlagen-Schulung: 800-1.500 € (40-80 Stunden), TÜV-Zertifizierung (5 Tage): 2.290-2.490 €, DEKRA-Zertifizierung (6 Tage): 2.490 €, GDDcert: 1.200 € (Selbststudium + Prüfung), Bitkom Akademie: 1.890 € (4 Tage + E-Learning), Online-Kurse: 1.200-2.500 €. Zusätzliche Kosten: Fachliteratur (200-400 €), Fortbildungen (300-800 €/Jahr), GDD-Mitgliedschaft (180 €/Jahr empfohlen).'
    },
    {
      question: 'Welche Jobaussichten hat ein Datenschutzbeauftragter?',
      answer: 'Die Jobaussichten sind sehr gut! Gründe: DSGVO-Pflicht für viele Unternehmen, Fachkräftemangel (ca. 30.000 DSB fehlen in Deutschland), steigende Anforderungen (KI, Cloud, internationale Datenströme), wachsende Bedeutung (Bußgelder bis 20 Mio. €). Einstiegschancen: Junior DSB in KMU oder als Teil eines Teams in Großunternehmen. Entwicklung: Nach 3-5 Jahren Senior-Position oder externe Selbstständigkeit möglich. Arbeitsmarkt: Bundesweit gesucht, besonders in Großstädten und Industrieregionen.'
    },
    {
      question: 'Muss ein Datenschutzbeauftragter Jurist sein?',
      answer: 'Nein! Nur ca. 30% der DSB sind Juristen. Die DSGVO verlangt "Fachwissen auf dem Gebiet des Datenschutzrechts", nicht ein Jurastudium. Erfolgreiche DSB kommen aus: IT (40%), Kaufleute/BWL (20%), Juristen (30%), andere Quereinsteiger (10%). Wichtig ist die Kombination: Rechtskenntnisse (durch Schulung erwerbbar), IT-Verständnis, Prozess-Know-how, Kommunikationsfähigkeit. Vorteil Nicht-Juristen: Oft besseres IT-Verständnis und praxisnähere Lösungen.'
    },
    {
      question: 'Wie finde ich einen Job als Datenschutzbeauftragter?',
      answer: 'Jobsuche-Strategie: Online-Stellenbörsen (StepStone, LinkedIn, Indeed) mit Suchbegriff "Datenschutzbeauftragter", GDD-Stellenmarkt (spezialisiert), Direktbewerbung bei Unternehmen Ihrer Branche (viele suchen, aber schreiben nicht aus), Netzwerk nutzen (GDD-Events, Fachkonferenzen), Dienstleister kontaktieren (oft Einstieg für Juniors), Initiativbewerbungen (besonders bei KMU). Tipp: Starten Sie als interner DSB in KMU (weniger Konkurrenz als in Großunternehmen).'
    },
    {
      question: 'Kann man Datenschutzbeauftragter in Teilzeit werden?',
      answer: 'Ja, Teilzeit ist möglich und weit verbreitet! Besonders: Interner DSB in KMU (oft 20-50%), mehrere Mandate als externer DSB (je 10-20% pro Unternehmen), nebenberuflicher Einstieg während Ausbildung. Typische Teilzeit-Modelle: 20 Stunden/Woche für mittelständisches Unternehmen (2.200-3.500 €/Monat), 3-4 kleine KMU als externer DSB (je 4-6 Stunden/Monat, gesamt 2.000-4.000 €). Vorteil: Flexibler Einstieg, Work-Life-Balance. Nachteil: Weniger Gehalt, ggf. weniger Anerkennung.'
    },
    {
      question: 'Gibt es Fördermöglichkeiten für die DSB-Ausbildung?',
      answer: 'Ja, mehrere Förderwege: Bildungsgutschein (Arbeitsagentur/Jobcenter bei Arbeitslosigkeit oder Umschulung), Aufstiegs-BAföG (AFBG) für zertifizierte Fortbildungen (bis zu 75% Zuschuss), Bildungsprämie (50% der Kosten, max. 500 €, bei geringem Einkommen), Arbeitgeber-Förderung (viele Unternehmen übernehmen Kosten, wenn Sie intern DSB werden), Steuerliche Absetzbarkeit (als Werbungskosten oder Betriebsausgaben). Tipp: Fragen Sie bei Ihrer Agentur für Arbeit nach Weiterbildungsförderung.'
    },
    {
      question: 'Wie lange ist eine DSB-Zertifizierung gültig?',
      answer: 'Die Gültigkeit variiert je nach Anbieter: TÜV Rheinland: 3 Jahre (dann Auffrischungskurs empfohlen), TÜV Süd: Unbegrenzt, aber jährliche Fortbildung erwartet, DEKRA: 2 Jahre (dann Update-Seminar), GDDcert: Jährliche Fortbildungsnachweise erforderlich (mind. 16 Stunden). Wichtig: Auch wenn Ihre Zertifizierung "unbegrenzt" gültig ist, erwarten Arbeitgeber und Aufsichtsbehörden kontinuierliche Weiterbildung. Praxis: Mindestens alle 2-3 Jahre einen Auffrischungskurs (1-2 Tage).'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Datenschutzbeauftragter werden: Ausbildung, Gehalt & Karriere 2025",
    "description": "Vollständiger Karriere-Guide zum Datenschutzbeauftragten: Ausbildung, Zertifizierung (TÜV, DEKRA), Kosten, Gehalt, Weiterbildung & Jobaussichten",
    "image": "https://marsstein.ai/og-image.png",
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

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const courseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Ausbildung zum Datenschutzbeauftragten",
    "description": "Zertifizierte Ausbildung zum Datenschutzbeauftragten nach DSGVO mit TÜV/DEKRA/GDD-Zertifizierung",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Blended",
      "duration": "P3M"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>Datenschutzbeauftragter werden: Ausbildung, Zertifizierung & Gehalt 2025 | TÜV, DEKRA, GDD</title>
        <meta name="description" content="Umfassender Karriere-Guide ✓ Wie wird man Datenschutzbeauftragter? ✓ TÜV/DEKRA Zertifizierung ✓ Kosten & Dauer ✓ Gehalt (42.000-120.000 €) ✓ Quereinsteiger ✓ Online-Ausbildung ✓ Weiterbildung" />
        <meta name="keywords" content="Datenschutzbeauftragter Ausbildung, TÜV Zertifizierung, DEKRA, GDD, Gehalt, Kosten, wie wird man DSB, Quereinsteiger, Online Kurs, Weiterbildung" />
        <link rel="canonical" href="https://marsstein.ai/wissen/leitfaden/datenschutzbeauftragter-ausbildung" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(courseStructuredData)}</script>
      </Helmet>

      <Header />

      <AnimatePresence>
        {showToc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sticky top-[64px] left-0 right-0 z-[90] bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="flex items-center justify-between w-full md:w-auto text-left hover:text-blue-600 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-900">Inhaltsverzeichnis</span>
                  {currentSection && (
                    <Badge variant="secondary" className="hidden sm:inline-flex">
                      {sections.find(s => s.id === currentSection)?.title}
                    </Badge>
                  )}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform ml-2 ${tocOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {tocOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-3 border-t border-slate-200">
                      {sections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={handleTocClick}
                          className={`text-sm px-3 py-2 rounded-lg text-left transition-colors block ${
                            currentSection === section.id
                              ? 'bg-blue-50 text-blue-700 font-medium'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {section.title}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                  <GraduationCap className="w-4 h-4" />
                  Karriere & Ausbildung
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Datenschutzbeauftragter werden: Ausbildung, Zertifizierung & Karriere 2025
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Vollständiger Karriere-Guide: Wie wird man Datenschutzbeauftragter? Ausbildung, TÜV/DEKRA-Zertifizierung, Kosten, Gehalt, Quereinsteiger-Wege und Weiterbildung. → <Link to="/wissen/leitfaden/datenschutzbeauftragter" className="text-blue-600 hover:text-blue-700 font-medium underline">Zum DSB-Hauptleitfaden</Link>
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <Clock className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold text-slate-900">3-12</div>
                    <div className="text-sm text-slate-600">Monate Dauer</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <Euro className="w-6 h-6 text-green-600 mb-2" />
                    <div className="text-2xl font-bold text-slate-900">2-6k €</div>
                    <div className="text-sm text-slate-600">Ausbildungskosten</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <TrendingUp className="w-6 h-6 text-purple-600 mb-2" />
                    <div className="text-2xl font-bold text-slate-900">42-120k €</div>
                    <div className="text-sm text-slate-600">Jahresgehalt</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <Award className="w-6 h-6 text-amber-600 mb-2" />
                    <div className="text-2xl font-bold text-slate-900">Sehr gut</div>
                    <div className="text-sm text-slate-600">Jobaussichten</div>
                  </div>
                </div>

                <section id="wie-wird-man-dsb" className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                    Wie wird man Datenschutzbeauftragter?
                  </h2>

                  <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Der klassische Weg in 5 Schritten</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Grundlagen-Schulung (40-80 Stunden)</h4>
                          <p className="text-slate-600">Lernen Sie die Basics: DSGVO, BDSG, IT-Sicherheit, Prozesse. Online oder Präsenz, meist berufsbegleitend über 2-4 Wochen.</p>
                          <p className="text-sm text-slate-500 mt-1">Kosten: 800-1.500 €</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Vertiefungskurs DSGVO (3-5 Tage)</h4>
                          <p className="text-slate-600">Intensive Schulung zu allen DSGVO-Artikeln, Betroffenenrechten, technischen Maßnahmen, Vertragsgestaltung und Praxisfällen.</p>
                          <p className="text-sm text-slate-500 mt-1">Kosten: 1.200-2.000 €</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Zertifizierung (TÜV, DEKRA, GDD)</h4>
                          <p className="text-slate-600">Absolvieren Sie eine anerkannte Zertifizierungsprüfung. TÜV und DEKRA gelten als Gold-Standard in Deutschland.</p>
                          <p className="text-sm text-slate-500 mt-1">Kosten: 2.200-2.500 € | Dauer: 5-6 Tage inkl. Prüfung</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">4</div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Praktische Erfahrung sammeln (3-6 Monate)</h4>
                          <p className="text-slate-600">Arbeiten Sie als Junior-DSB, Assistent oder in Ihrer Abteilung mit Datenschutz-Bezug. Theorie trifft Praxis.</p>
                          <p className="text-sm text-slate-500 mt-1">Oft im aktuellen Job möglich (interne Rotation)</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">5</div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Kontinuierliche Weiterbildung</h4>
                          <p className="text-slate-600">Bleiben Sie auf dem Laufenden: Rechtsprechung, neue Gesetze, technische Entwicklungen (KI, Cloud). Mind. 16-24h/Jahr.</p>
                          <p className="text-sm text-slate-500 mt-1">Kosten: 300-800 €/Jahr</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                    <div className="flex gap-3">
                      <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Wichtig zu wissen</h4>
                        <ul className="text-amber-800 space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>Es gibt <strong>keine gesetzlich vorgeschriebene Ausbildung</strong> – die DSGVO verlangt nur "Fachwissen"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>In der Praxis ist eine <strong>TÜV- oder DEKRA-Zertifizierung jedoch faktischer Standard</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>Quereinsteiger ohne Studium sind ausdrücklich willkommen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>Die Ausbildung kann berufsbegleitend absolviert werden</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="karrierepfade" className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8 text-purple-600" />
                    Karrierepfade: Welcher Weg passt zu Ihnen?
                  </h2>

                  <p className="text-slate-600 mb-8">
                    Je nach Ihrem beruflichen Hintergrund gibt es unterschiedliche Wege zum Datenschutzbeauftragten. Wählen Sie Ihren Pfad:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {careerPaths.map((path) => (
                      <button
                        key={path.id}
                        onClick={() => setSelectedPath(path.id)}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          selectedPath === path.id
                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                            : 'border-slate-200 bg-white hover:border-blue-300'
                        }`}
                      >
                        <h3 className="font-bold text-lg text-slate-900 mb-2">{path.title}</h3>
                        <div className="space-y-1 text-sm text-slate-600">
                          <div className="flex justify-between">
                            <span>Dauer:</span>
                            <span className="font-semibold">{path.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Schwierigkeit:</span>
                            <span className="font-semibold">{path.difficulty}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Investition:</span>
                            <span className="font-semibold">{path.investment}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {selectedPath && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white p-8 rounded-xl shadow-lg border border-slate-200"
                    >
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">
                        Ihr Weg als {careerPaths.find(p => p.id === selectedPath)?.title}
                      </h3>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <FileCheck className="w-5 h-5 text-blue-600" />
                            Ausbildungsschritte
                          </h4>
                          <ol className="space-y-3">
                            {careerPaths.find(p => p.id === selectedPath)?.steps.map((step, idx) => (
                              <li key={idx} className="flex gap-3">
                                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                                  {idx + 1}
                                </span>
                                <span className="text-slate-700">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            Voraussetzungen
                          </h4>
                          <ul className="space-y-2">
                            {careerPaths.find(p => p.id === selectedPath)?.requirements.map((req, idx) => (
                              <li key={idx} className="flex gap-2 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </section>

                <section id="zertifizierungen" className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Award className="w-8 h-8 text-amber-600" />
                    Zertifizierungen im Vergleich
                  </h2>

                  <p className="text-slate-600 mb-8">
                    Die wichtigsten Zertifizierungen für Datenschutzbeauftragte in Deutschland im direkten Vergleich:
                  </p>

                  <div className="space-y-6">
                    {certifications.map((cert, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-lg border border-slate-200"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{cert.provider}</h3>
                            <p className="text-blue-600 font-semibold">{cert.name}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-slate-900">{cert.cost}</div>
                            <div className="text-sm text-slate-600">{cert.duration}</div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-slate-600 mb-1">Anerkennung</div>
                            <div className="font-semibold text-slate-900">{cert.recognition}</div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-600 mb-1">Erneuerung</div>
                            <div className="font-semibold text-slate-900">{cert.renewal}</div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-600 mb-1">Besonderheiten</div>
                            <div className="flex flex-wrap gap-1">
                              {cert.highlights.map((highlight, hIdx) => (
                                <span key={hIdx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Welche Zertifizierung ist die richtige?
                    </h4>
                    <ul className="text-blue-800 space-y-2 text-sm">
                      <li><strong>TÜV Rheinland/Süd:</strong> Gold-Standard, höchste Anerkennung, ideal für klassischen Präsenz-Weg</li>
                      <li><strong>DEKRA:</strong> Sehr intensive Schulung, kleine Gruppen, viele Fallstudien – ideal für Tiefgang</li>
                      <li><strong>GDDcert:</strong> Flexibel (Selbststudium), EU-weit anerkannt, starkes Netzwerk – ideal für Selbstlerner</li>
                      <li><strong>Bitkom:</strong> IT-fokussiert, modernes E-Learning – ideal für IT-Fachkräfte</li>
                    </ul>
                  </div>
                </section>

                <section id="kosten" className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Euro className="w-8 h-8 text-green-600" />
                    Kosten & Zeitaufwand
                  </h2>

                  <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">Gesamtinvestition für die Ausbildung</h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                        <span className="text-slate-700">Grundlagen-Schulung (40-80h)</span>
                        <span className="font-semibold text-slate-900">800 - 1.500 €</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                        <span className="text-slate-700">TÜV/DEKRA-Zertifizierung (5-6 Tage)</span>
                        <span className="font-semibold text-slate-900">2.200 - 2.500 €</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                        <span className="text-slate-700">Fachliteratur & Materialien</span>
                        <span className="font-semibold text-slate-900">200 - 400 €</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                        <span className="text-slate-700">GDD-Mitgliedschaft (Jahr 1, optional aber empfohlen)</span>
                        <span className="font-semibold text-slate-900">180 €</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b-2 border-slate-300">
                        <span className="text-slate-700">Erste Fortbildungen</span>
                        <span className="font-semibold text-slate-900">300 - 800 €</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-lg font-bold text-slate-900">Gesamtkosten</span>
                        <span className="text-2xl font-bold text-green-600">3.680 - 5.380 €</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        Zeitaufwand
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex justify-between">
                          <span>Grundlagen-Schulung:</span>
                          <span className="font-semibold">40-80 Stunden</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Selbststudium (Vorbereitung):</span>
                          <span className="font-semibold">60-100 Stunden</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Zertifizierungs-Kurs:</span>
                          <span className="font-semibold">40-48 Stunden</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Praxiserfahrung:</span>
                          <span className="font-semibold">3-6 Monate</span>
                        </li>
                        <li className="flex justify-between border-t border-blue-300 pt-2 mt-2">
                          <span className="font-bold">Gesamt bis Job-Ready:</span>
                          <span className="font-bold">3-12 Monate</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                      <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Fördermöglichkeiten
                      </h4>
                      <ul className="space-y-3 text-sm text-slate-700">
                        <li>
                          <strong>Bildungsgutschein:</strong> 100% Kostenübernahme bei Arbeitslosigkeit
                        </li>
                        <li>
                          <strong>Aufstiegs-BAföG:</strong> Bis zu 75% Zuschuss für zertifizierte Fortbildungen
                        </li>
                        <li>
                          <strong>Bildungsprämie:</strong> 50% Zuschuss (max. 500 €) bei geringem Einkommen
                        </li>
                        <li>
                          <strong>Arbeitgeber:</strong> Viele Unternehmen übernehmen Kosten, wenn Sie interner DSB werden
                        </li>
                        <li>
                          <strong>Steuerlich absetzbar:</strong> Als Werbungskosten oder Betriebsausgaben
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="skills" className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-indigo-600" />
                    Erforderliche Fähigkeiten
                  </h2>

                  <p className="text-slate-600 mb-8">
                    Ein erfolgreicher Datenschutzbeauftragter braucht eine ausgewogene Mischung aus fachlichen und sozialen Kompetenzen:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <FileCheck className="w-5 h-5 text-blue-600" />
                        Fachliche Kompetenzen
                      </h3>
                      <ul className="space-y-3">
                        {skills.fachlich.map((skill, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        Soft Skills
                      </h3>
                      <ul className="space-y-3">
                        {skills.soft.map((skill, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="gehalt" className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    Gehalt & Verdienstmöglichkeiten
                  </h2>

                  <p className="text-slate-600 mb-8">
                    Das Gehalt eines Datenschutzbeauftragten variiert je nach Erfahrung, Unternehmensgröße und Region. Hier ein realistischer Überblick:
                  </p>

                  <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Erfahrung</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Intern (Festanstellung)</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Extern (Dienstleister)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {salaryData.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.role}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{row.intern}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{row.extern}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-slate-900 mb-2">Einstiegsgehalt</h4>
                      <div className="text-3xl font-bold text-blue-700 mb-2">42-55k €</div>
                      <p className="text-sm text-slate-700">Junior DSB (0-2 Jahre), oft in KMU oder als Teil eines Teams</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                      <h4 className="font-semibold text-slate-900 mb-2">Durchschnitt</h4>
                      <div className="text-3xl font-bold text-green-700 mb-2">55-72k €</div>
                      <p className="text-sm text-slate-700">DSB mit 2-5 Jahren Erfahrung, eigenständige Führung von Datenschutz</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                      <h4 className="font-semibold text-slate-900 mb-2">Senior / Lead</h4>
                      <div className="text-3xl font-bold text-purple-700 mb-2">95-120k €</div>
                      <p className="text-sm text-slate-700">Lead DSB in Großunternehmen oder mit mehreren Mandaten ({'>'}10 Jahre)</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
                    <h4 className="font-semibold text-amber-900 mb-3">Gehalts-Einflussfaktoren</h4>
                    <ul className="text-amber-800 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span><strong>Region:</strong> München, Frankfurt, Hamburg: +10-20% | ländliche Regionen: -10-15%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span><strong>Unternehmensgröße:</strong> KMU: 42-65k € | Mittelstand: 55-85k € | Konzern: 75-120k €</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span><strong>Branche:</strong> Finance/Pharma: +15-25% | Handel/Handwerk: Standard | Non-Profit: -10-20%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span><strong>Zusatzqualifikationen:</strong> IT-Security, CIPP/E, Projektmanagement: +5-15%</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="weiterbildung" className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    Weiterbildung & Fortbildungspflicht
                  </h2>

                  <p className="text-slate-600 mb-8">
                    Der Datenschutz ist ein dynamisches Rechtsgebiet. Kontinuierliche Weiterbildung ist keine Option, sondern Pflicht, um auf dem neuesten Stand zu bleiben:
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Empfohlene Fortbildung
                    </h4>
                    <ul className="text-blue-800 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span><strong>Mindestens 16-24 Stunden pro Jahr</strong> zu aktuellen Themen (Rechtsprechung, neue Gesetze, Technik)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span><strong>Alle 2-3 Jahre Auffrischungskurs</strong> (1-2 Tage) zu DSGVO-Grundlagen</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span><strong>Bei großen Änderungen</strong> zeitnahe Spezialschulungen (z.B. neue EU-Verordnungen, EuGH-Urteile)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span><strong>Zertifizierungs-Erneuerung:</strong> TÜV alle 3 Jahre, DEKRA alle 2 Jahre, GDDcert jährlich</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Thema</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Anbieter</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Dauer</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Kosten</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Frequenz</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {weiterbildung.map((wb, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="px-6 py-4 text-sm font-medium text-slate-900">{wb.thema}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{wb.anbieter}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{wb.dauer}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{wb.kosten}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{wb.frequenz}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="jobsuche" className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-indigo-600" />
                    Jobsuche & Karrieremöglichkeiten
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        Wo finde ich Jobs?
                      </h3>
                      <ul className="space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <strong>Online-Stellenbörsen:</strong> StepStone, LinkedIn, Indeed mit "Datenschutzbeauftragter"
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <strong>GDD-Stellenmarkt:</strong> Spezialisiert auf Datenschutz-Jobs (nur für Mitglieder)
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <strong>Direktbewerbung:</strong> Bei Unternehmen Ihrer Branche (viele suchen, schreiben aber nicht aus)
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <strong>Netzwerk:</strong> GDD-Events, Fachkonferenzen, LinkedIn-Gruppen
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <strong>Dienstleister:</strong> Oft guter Einstieg für Juniors (Erfahrung bei mehreren Mandanten)
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        Karrierepfade
                      </h3>
                      <div className="space-y-4 text-sm text-slate-700">
                        <div>
                          <strong className="text-slate-900">1. Intern in KMU starten</strong>
                          <p className="text-slate-600 mt-1">20-50% Teilzeit, weniger Druck, lernen "on the job" (2-3 Jahre)</p>
                        </div>
                        <div>
                          <strong className="text-slate-900">2. Mittelstand / Konzern</strong>
                          <p className="text-slate-600 mt-1">Vollzeit, komplexere Strukturen, Team-Arbeit, höheres Gehalt (3-5 Jahre)</p>
                        </div>
                        <div>
                          <strong className="text-slate-900">3. Senior / Lead DSB</strong>
                          <p className="text-slate-600 mt-1">Leitung Datenschutz-Abteilung, strategische Projekte, internationale Themen (5-10 Jahre)</p>
                        </div>
                        <div>
                          <strong className="text-slate-900">4. Externe Selbstständigkeit</strong>
                          <p className="text-slate-600 mt-1">Mehrere Mandate, Flexibilität, höhere Verdienstmöglichkeiten (nach 5+ Jahren Erfahrung). → <Link to="/externer-datenschutzbeauftragter" className="text-blue-600 hover:text-blue-700 font-medium">Mehr zu externen DSB</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Warum sind die Jobaussichten so gut?
                    </h4>
                    <ul className="text-green-800 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span><strong>DSGVO-Pflicht:</strong> Tausende Unternehmen brauchen DSB (ab 20 Mitarbeitern oder sensible Daten)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span><strong>Fachkräftemangel:</strong> Ca. 30.000 DSB fehlen aktuell in Deutschland</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span><strong>Steigende Anforderungen:</strong> KI, Cloud, internationale Datenströme erhöhen Komplexität</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span><strong>Hohes Bußgeldrisiko:</strong> Bis 20 Mio. € – Unternehmen investieren lieber in Prävention</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="faq" className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    Häufige Fragen (FAQ)
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                          {activeFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                          )}
                        </button>

                        {activeFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </section>

                <section className="mb-16">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-4">Bereit, Datenschutzbeauftragter zu werden?</h2>
                    <p className="text-blue-100 mb-6">
                      Mit der richtigen Ausbildung, Zertifizierung und kontinuierlicher Weiterbildung stehen Ihnen alle Türen offen. Die Nachfrage ist hoch, die Jobaussichten exzellent.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/kontakt"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        Kostenlose Beratung
                        <CheckCircle2 className="w-5 h-5" />
                      </Link>
                      <Link
                        to="/wissen/leitfaden/datenschutzbeauftragter"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                      >
                        Zurück zum Hauptleitfaden
                        <BookOpen className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </section>
              </motion.div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Schnellzugriff</h3>
                  <div className="space-y-3">
                    <Link
                      to="/externer-datenschutzbeauftragter"
                      className="block px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                    >
                      Externer DSB buchen
                    </Link>
                    <Link
                      to="/wissen/leitfaden/datenschutzbeauftragter"
                      className="block px-4 py-3 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm"
                    >
                      DSB-Hauptleitfaden
                    </Link>
                    <Link
                      to="/kontakt"
                      className="block px-4 py-3 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm"
                    >
                      Kostenlose Beratung
                    </Link>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    Zertifizierungs-Tipp
                  </h3>
                  <p className="text-sm text-slate-700 mb-3">
                    TÜV Rheinland und TÜV Süd sind die am weitesten anerkannten Zertifizierungen in Deutschland.
                  </p>
                  <p className="text-xs text-slate-600">
                    GDDcert ist flexibler und bietet Zugang zum besten Datenschutz-Netzwerk.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Karriere-Tipp
                  </h3>
                  <p className="text-sm text-slate-700 mb-3">
                    Starten Sie als interner DSB in einem KMU (20-50% Teilzeit).
                  </p>
                  <p className="text-xs text-slate-600">
                    So sammeln Sie Praxiserfahrung mit weniger Druck und können nach 2-3 Jahren in größere Unternehmen oder die Selbstständigkeit wechseln.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DatenschutzbeauftragterAusbildung;