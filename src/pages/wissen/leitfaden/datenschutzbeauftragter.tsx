import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield, Users, FileText, BookOpen, Scale, AlertTriangle,
  CheckCircle2, XCircle, ChevronRight, ArrowRight, Calculator,
  GraduationCap, Briefcase, Euro, Clock, Building2, UserCheck,
  Lock, TrendingUp, Award, Search, HelpCircle, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DatenschutzbeauftragterGuide: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [employees, setEmployees] = useState<string>('');
  const [sensitiveData, setSensitiveData] = useState<boolean>(false);
  const [tocOpen, setTocOpen] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const sections = [
    { id: 'definition', title: 'Was ist ein DSB?' },
    { id: 'wer-braucht', title: 'Wer braucht einen?' },
    { id: 'aufgaben', title: 'Aufgaben' },
    { id: 'voraussetzungen', title: 'Voraussetzungen' },
    { id: 'bestellung', title: 'Bestellung' },
    { id: 'intern-extern', title: 'Intern vs Extern' },
    { id: 'kuendigungsschutz', title: 'Kündigungsschutz' },
    { id: 'kosten', title: 'Kosten' },
    { id: 'faq', title: 'FAQ' }
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
  const [showCalculatorResult, setShowCalculatorResult] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Datenschutzbeauftragter: Der komplette Leitfaden 2025",
    "description": "Umfassender Leitfaden zum Datenschutzbeauftragten: Aufgaben, Pflichten, ab wann notwendig, Kosten, Ausbildung und alles zur DSGVO-Compliance.",
    "author": {
      "@type": "Organization",
      "name": "MARSSTEIN"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MARSSTEIN",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marsstein.ai/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist ein Datenschutzbeauftragter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Datenschutzbeauftragter (DSB) ist eine unabhängige Person, die die Einhaltung der Datenschutzvorschriften in einem Unternehmen überwacht. Er berät die Geschäftsleitung, überwacht Verarbeitungstätigkeiten und fungiert als Anlaufstelle für Aufsichtsbehörden."
        }
      },
      {
        "@type": "Question",
        "name": "Ab wann brauche ich einen Datenschutzbeauftragten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach § 38 BDSG brauchen Sie einen DSB, wenn mindestens 20 Personen ständig mit der Verarbeitung personenbezogener Daten beschäftigt sind. Unabhängig von der Mitarbeiterzahl ist ein DSB auch bei besonders risikobehafteter Verarbeitung oder umfangreicher Verarbeitung sensibler Daten erforderlich."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Aufgaben hat ein Datenschutzbeauftragter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach Art. 39 DSGVO: Unterrichtung und Beratung des Verantwortlichen, Überwachung der Einhaltung der DSGVO, Beratung bei Datenschutz-Folgenabschätzungen, Zusammenarbeit mit der Aufsichtsbehörde und Schulung der Mitarbeiter."
        }
      }
    ]
  };

  const aufgaben = [
    {
      title: 'Unterrichtung und Beratung',
      description: 'Beratung des Verantwortlichen und der Beschäftigten bei allen Fragen des Datenschutzes',
      icon: BookOpen,
      rechtslage: 'Art. 39 Abs. 1 lit. a DSGVO'
    },
    {
      title: 'Überwachung der Compliance',
      description: 'Überwachung der Einhaltung der DSGVO, anderer Datenschutzvorschriften und der Strategien des Verantwortlichen',
      icon: Shield,
      rechtslage: 'Art. 39 Abs. 1 lit. b DSGVO'
    },
    {
      title: 'Schulung der Mitarbeiter',
      description: 'Sensibilisierung und Schulung der an Verarbeitungsvorgängen beteiligten Mitarbeiter',
      icon: GraduationCap,
      rechtslage: 'Art. 39 Abs. 1 lit. a DSGVO'
    },
    {
      title: 'Beratung bei DSFA',
      description: 'Beratung im Zusammenhang mit der Datenschutz-Folgenabschätzung und Überwachung ihrer Durchführung',
      icon: FileText,
      rechtslage: 'Art. 39 Abs. 1 lit. c DSGVO'
    },
    {
      title: 'Zusammenarbeit mit Behörden',
      description: 'Zusammenarbeit mit der Aufsichtsbehörde als Anlaufstelle',
      icon: Building2,
      rechtslage: 'Art. 39 Abs. 1 lit. d, e DSGVO'
    },
    {
      title: 'Dokumentation & Berichtswesen',
      description: 'Führung des Verarbeitungsverzeichnisses, Dokumentation der Compliance-Maßnahmen',
      icon: FileText,
      rechtslage: 'Art. 30 DSGVO i.V.m. Art. 39 DSGVO'
    }
  ];

  const voraussetzungen = [
    {
      title: 'Fachkunde',
      items: [
        'Kenntnisse des Datenschutzrechts (DSGVO, BDSG, branchenspezifische Vorschriften)',
        'Verständnis der technischen und organisatorischen Aspekte des Datenschutzes',
        'Kenntnis der Unternehmensprozesse und IT-Systeme'
      ],
      icon: BookOpen
    },
    {
      title: 'Berufliche Qualifikation',
      items: [
        'Keine gesetzlich vorgeschriebene Ausbildung',
        'Zertifizierung empfohlen (TÜV, DEKRA, GDD, udis)',
        'Regelmäßige Weiterbildung verpflichtend'
      ],
      icon: Award
    },
    {
      title: 'Persönliche Eigenschaften',
      items: [
        'Unabhängigkeit und Objektivität',
        'Verschwiegenheit',
        'Durchsetzungsvermögen',
        'Keine Interessenkonflikte'
      ],
      icon: UserCheck
    }
  ];

  const internVsExtern = [
    {
      kategorie: 'Kosten',
      intern: 'Gehalt + Nebenkosten: 40.000-60.000€/Jahr, plus Software, Schulungen, Opportunitätskosten',
      extern: 'Ab 348€/Jahr (29€/Monat), alles inklusive',
      vorteil: 'extern'
    },
    {
      kategorie: 'Unabhängigkeit',
      intern: 'Risiko von Interessenkonflikten, hierarchische Abhängigkeiten',
      extern: 'Vollständig unabhängig, keine internen Interessenkonflikte',
      vorteil: 'extern'
    },
    {
      kategorie: 'Kündigungsschutz',
      intern: 'Besonderer Kündigungsschutz nach § 38 Abs. 2 BDSG (wie Betriebsrat)',
      extern: 'Reguläre Kündigung möglich, flexible Vertragsgestaltung',
      vorteil: 'extern'
    },
    {
      kategorie: 'Haftung',
      intern: 'Unternehmen haftet für Fehler des DSB',
      extern: 'DSB haftet selbst mit Berufshaftpflicht (1-3 Mio. € Deckung)',
      vorteil: 'extern'
    },
    {
      kategorie: 'Verfügbarkeit',
      intern: 'Begrenzt durch andere Aufgaben, Urlaub, Krankheit',
      extern: 'Professioneller Service mit Vertretungsregelung',
      vorteil: 'extern'
    },
    {
      kategorie: 'Know-how',
      intern: 'Auf Schulungen angewiesen, Learning by Doing',
      extern: 'Spezialist mit Erfahrung aus vielen Unternehmen',
      vorteil: 'extern'
    },
    {
      kategorie: 'Interne Kenntnisse',
      intern: 'Kennt Unternehmen, Prozesse, Mitarbeiter',
      extern: 'Muss Unternehmen erst kennenlernen',
      vorteil: 'intern'
    }
  ];

  const faqs = [
    {
      question: 'Was ist ein Datenschutzbeauftragter?',
      answer: 'Ein Datenschutzbeauftragter (DSB) ist eine unabhängige Person oder externe Organisation, die die Einhaltung der Datenschutzvorschriften in einem Unternehmen oder einer Behörde überwacht. Der DSB berät die Geschäftsleitung in allen Datenschutzfragen, überwacht die Verarbeitungstätigkeiten und fungiert als Anlaufstelle für Aufsichtsbehörden und Betroffene. Die Funktion ist in Art. 37-39 DSGVO gesetzlich verankert.'
    },
    {
      question: 'Was macht ein Datenschutzbeauftragter?',
      answer: 'Der DSB hat vielfältige Aufgaben: Beratung der Geschäftsleitung bei Datenschutzfragen, Überwachung der DSGVO-Compliance, Schulung der Mitarbeiter, Beratung bei Datenschutz-Folgenabschätzungen, Führung des Verarbeitungsverzeichnisses, Zusammenarbeit mit Aufsichtsbehörden und Bearbeitung von Betroffenenanfragen. Er ist jedoch NICHT für die operative Umsetzung verantwortlich – das bleibt Aufgabe der Geschäftsleitung.'
    },
    {
      question: 'Ab wann brauche ich einen Datenschutzbeauftragten?',
      answer: 'Nach § 38 BDSG benötigen Sie einen DSB, wenn mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind. Unabhängig von der Mitarbeiterzahl ist ein DSB auch erforderlich bei: Kerntätigkeit in Verarbeitung sensibler Daten, umfangreicher systematischer Überwachung, oder wenn eine DSFA erforderlich ist (Art. 37 Abs. 1 DSGVO).'
    },
    {
      question: 'Datenschutzbeauftragter ab 20 oder 10 Mitarbeitern?',
      answer: 'In Deutschland gilt die 20-Mitarbeiter-Grenze (§ 38 BDSG). Die frühere 10-Personen-Regelung für besondere Verarbeitungstätigkeiten wurde mit der DSGVO-Anpassung 2019 abgeschafft. Wichtig: Es zählen nur Personen, die ständig mit der Verarbeitung personenbezogener Daten beschäftigt sind – nicht alle Mitarbeiter im Unternehmen.'
    },
    {
      question: 'Wer braucht einen Datenschutzbeauftragten?',
      answer: 'Benötigt wird ein DSB von: Unternehmen ab 20 Mitarbeitern mit Datenzugriff, Unternehmen mit risikobehafteter Datenverarbeitung (z.B. Scoring, Profiling), Gesundheitsdienstleistern (Arztpraxen, Apotheken, Pflegeheime), Unternehmen mit umfangreicher Videoüberwachung, Marktforschungsinstituten, Detekteien, sowie allen öffentlichen Stellen (Behörden).'
    },
    {
      question: 'Wie wird man Datenschutzbeauftragter?',
      answer: 'Es gibt keine gesetzlich vorgeschriebene Ausbildung. Der Weg zum DSB: 1) Grundlagenwissen durch Zertifizierungskurs (TÜV, DEKRA, GDD, udis) – Dauer 3-5 Tage, Kosten 2.000-5.000€. 2) Praktische Erfahrung sammeln. 3) Regelmäßige Weiterbildung (gesetzlich verpflichtend). Viele DSB haben einen juristischen, IT- oder betriebswirtschaftlichen Hintergrund, aber das ist keine Voraussetzung.'
    },
    {
      question: 'Was kostet ein Datenschutzbeauftragter?',
      answer: 'Interner DSB: 40.000-60.000€ Jahresgehalt plus Nebenkosten (Sozialversicherung, Weiterbildung, Software) = 50.000-75.000€/Jahr Gesamtkosten. Externer DSB: Ab 29€/Monat (348€/Jahr) für kleine Unternehmen bis 1.500€/Monat für große Unternehmen. Externe Lösung ist meist 85-95% günstiger und beinhaltet Software, Schulungen und Haftung.'
    },
    {
      question: 'Datenschutzbeauftragter intern oder extern?',
      answer: 'Extern ist meist vorteilhafter: 95% Kostenersparnis, keine Interessenkonflikte, kein besonderer Kündigungsschutz, Haftung beim DSB statt beim Unternehmen, professionelles Know-how, und sofortige Verfügbarkeit. Intern nur sinnvoll bei sehr großen Unternehmen mit komplexer Datenverarbeitung oder wenn tiefe Prozesskenntnisse zwingend erforderlich sind.'
    },
    {
      question: 'Wer kann Datenschutzbeauftragter werden?',
      answer: 'Grundsätzlich jede Person mit entsprechender Fachkunde. Ausschlussgründe: Geschäftsführer (Interessenkonflikt – kann sich nicht selbst kontrollieren), IT-Leiter (entscheidet über technische Maßnahmen, die der DSB überwachen soll), Leiter Personal/HR (verarbeitet sensible Mitarbeiterdaten), Leiter Marketing (definiert Verarbeitungszwecke). Die Person muss frei von Interessenkonflikten sein (Art. 38 Abs. 6 DSGVO).'
    },
    {
      question: 'Welche Voraussetzungen braucht ein Datenschutzbeauftragter?',
      answer: 'Fachliche Anforderungen (Art. 37 Abs. 5 DSGVO): Kenntnisse der DSGVO, BDSG und branchenspezifischer Vorschriften; Verständnis von IT-Sicherheit und technischen Maßnahmen; Kenntnis der Unternehmensprozesse. Persönliche Eigenschaften: Unabhängigkeit, Verschwiegenheit, Durchsetzungsvermögen, Kommunikationsfähigkeit. Eine Zertifizierung ist nicht Pflicht, aber stark empfohlen.'
    },
    {
      question: 'Muss man den Datenschutzbeauftragten melden?',
      answer: 'Ja, die Kontaktdaten des DSB müssen veröffentlicht und der zuständigen Aufsichtsbehörde gemeldet werden (Art. 37 Abs. 7 DSGVO). Die Meldung erfolgt online über das Portal der jeweiligen Landesdatenschutzbehörde. Bei Nichtmeldung drohen Bußgelder bis zu 10.000€. Die Veröffentlichung muss auf der Website und in der Datenschutzerklärung erfolgen.'
    },
    {
      question: 'Hat der Datenschutzbeauftragter Kündigungsschutz?',
      answer: 'Interner DSB: Ja, besonderer Kündigungsschutz nach § 38 Abs. 2 BDSG – vergleichbar mit Betriebsratsmitgliedern. Kündigung nur bei schwerwiegenden Gründen möglich, die auch nach der DSB-Tätigkeit noch 1 Jahr nachwirken. Externer DSB: Nein, reguläres Vertragsverhältnis mit üblichen Kündigungsfristen. Dies ist ein wesentlicher Vorteil der externen Lösung.'
    },
    {
      question: 'Wer haftet für Datenschutzverstöße - Unternehmen oder DSB?',
      answer: 'Bei internem DSB: Das Unternehmen haftet vollumfänglich für Datenschutzverstöße, auch bei Fehlern des DSB. Der DSB selbst haftet nur bei grober Fahrlässigkeit oder Vorsatz gegenüber dem Unternehmen. Bei externem DSB: Der externe Dienstleister haftet bei Pflichtverletzungen mit seiner Berufshaftpflichtversicherung (üblicherweise 1-3 Mio. € Deckung). Dies ist ein enormer Vorteil für das Unternehmen.'
    },
    {
      question: 'Kann die Geschäftsführung Datenschutzbeauftragter sein?',
      answer: 'Nein, das ist ausgeschlossen. Nach Art. 38 Abs. 6 DSGVO darf der DSB keine Interessenkonflikte haben. Die Geschäftsführung legt die Verarbeitungszwecke fest und kann sich nicht selbst kontrollieren. Gleiches gilt für IT-Leiter, Marketing-Leiter und Personalleiter. Der DSB muss unabhängig sein und darf wegen seiner DSB-Tätigkeit keine Anweisungen erhalten.'
    },
    {
      question: 'Was bedeutet die Abkürzung DSB?',
      answer: 'DSB steht für Datenschutzbeauftragter. Alternative Abkürzungen: DSB-B (Datenschutzbeauftragter im Betrieb) oder bDSB (betrieblicher Datenschutzbeauftragter). Im englischen Sprachraum: DPO (Data Protection Officer). In Behörden auch: BfDI (Bundesbeauftragter für den Datenschutz und die Informationsfreiheit) oder LfDI (Landesbeauftragter).'
    },
    {
      question: 'Wie lautet die englische Bezeichnung?',
      answer: 'Data Protection Officer (DPO). In der DSGVO wird durchgehend der Begriff DPO verwendet. In UK auch: Information Commissioner. In den USA existiert keine vergleichbare Funktion – dort gibt es Chief Privacy Officer (CPO), aber ohne gesetzliche Verpflichtung wie in der EU.'
    },
    {
      question: 'Braucht ein Verein einen Datenschutzbeauftragten?',
      answer: 'Ja, wenn der Verein mindestens 20 Personen (Mitglieder, Ehrenamtliche, Angestellte) hat, die regelmäßig personenbezogene Daten verarbeiten. Auch bei weniger Personen kann ein DSB erforderlich sein, wenn sensible Daten verarbeitet werden (z.B. Gesundheitsdaten bei Sportvereinen). Für Vereine gibt es kostengünstige externe DSB-Lösungen ab 29€/Monat.'
    },
    {
      question: 'Braucht eine Arztpraxis einen Datenschutzbeauftragten?',
      answer: 'Ja, grundsätzlich immer – unabhängig von der Mitarbeiterzahl. Grund: Arztpraxen verarbeiten besonders sensible Gesundheitsdaten (Art. 9 DSGVO). Die Aufsichtsbehörden fordern hier einen DSB. Bei kleinen Praxen (1-2 Ärzte) reicht meist ein externer DSB. Kosten: ab 95€/Monat. Ohne DSB drohen Bußgelder ab 5.000€.'
    },
    {
      question: 'Braucht eine Apotheke einen Datenschutzbeauftragten?',
      answer: 'Ja, aus denselben Gründen wie Arztpraxen. Apotheken verarbeiten Gesundheitsdaten (Rezepte, Medikationspläne, Kundenstammdaten mit Gesundheitsbezug). Auch Apotheken mit weniger als 20 Mitarbeitern benötigen einen DSB. Ein externer DSB ist hier die kostengünstigste Lösung (ab 95€/Monat statt 50.000€/Jahr für internen DSB).'
    },
    {
      question: 'Was passiert bei fehlendem Datenschutzbeauftragten?',
      answer: 'Bußgelder: Nach § 38 BDSG bis zu 50.000€ für fehlende DSB-Bestellung. Zusätzlich: Persönliche Haftung der Geschäftsführung, Reputationsschaden bei Bekanntwerden, Probleme bei ISO-Zertifizierungen, Vertragsstrafen (viele B2B-Verträge fordern DSB-Benennung), und erhöhte Bußgelder bei anderen Verstößen (fehlender DSB wird als Erschwernis gewertet).'
    },
    {
      question: 'Wie viele Stunden arbeitet ein Datenschutzbeauftragter?',
      answer: 'Das hängt stark von der Unternehmensgröße und Komplexität ab. Richtwert für internen DSB: 20-50% einer Vollzeitstelle (8-20 Std./Woche). Bei 50 Mitarbeitern: ca. 10 Std./Woche. Bei 200 Mitarbeitern: ca. 20 Std./Woche. Bei 500+ Mitarbeitern: oft Vollzeitstelle. Externer DSB arbeitet bedarfsgerecht – Sie zahlen nur die tatsächlich benötigte Zeit.'
    },
    {
      question: 'Kann man mehrere Datenschutzbeauftragte haben?',
      answer: 'Ja, das ist möglich und bei großen Konzernen üblich. Es können mehrere DSB gleichzeitig bestellt werden (z.B. für verschiedene Standorte oder Geschäftsbereiche). Wichtig: Klare Aufgabenteilung und Verantwortlichkeiten definieren. Ein DSB muss als Hauptansprechpartner benannt und der Aufsichtsbehörde gemeldet werden. Bei Unternehmensgruppen kann ein DSB für mehrere Unternehmen bestellt werden (Art. 37 Abs. 2 DSGVO).'
    },
    {
      question: 'Datenschutzbeauftragter - wie lange dauert die Bestellung?',
      answer: 'Die formale Bestellung ist schnell erledigt: Bei externem DSB: Vertrag unterschreiben, DSB benennen, Aufsichtsbehörde informieren = 1 Tag. Bei internem DSB: Geeignete Person finden, schulen lassen (3-5 Tage Kurs), Arbeitsvertrag anpassen, Bestellung verfassen, Aufsichtsbehörde informieren = 4-8 Wochen. Die Meldung an die Aufsichtsbehörde muss unverzüglich nach Bestellung erfolgen.'
    },
    {
      question: 'Braucht ein Einzelunternehmen einen Datenschutzbeauftragten?',
      answer: 'Ja, wenn die Voraussetzungen erfüllt sind (20+ Personen mit Datenzugriff oder sensible Datenverarbeitung). Viele Solo-Selbstständige denken, sie seien befreit – das stimmt nicht. Beispiel: Online-Shop-Betreiber mit 5 Freelancern, die alle Kundendaten bearbeiten = DSB erforderlich. Auch Einzelunternehmen mit umfangreicher Videoüberwachung oder Scoring benötigen einen DSB.'
    },
    {
      question: 'Was ist der Unterschied zwischen Datenschutzbeauftragtem und Datenschutzkoordinator?',
      answer: 'Datenschutzbeauftragter (DSB): Gesetzlich definierte Rolle nach Art. 37-39 DSGVO mit Unabhängigkeit, Weisungsfreiheit und Kündigungsschutz. Muss bestellt und gemeldet werden. Datenschutzkoordinator: Keine gesetzliche Rolle. Unterstützt den DSB operativ, setzt Maßnahmen um, koordiniert Abteilungen. Arbeitet weisungsgebunden. Ein Koordinator ersetzt NICHT den DSB!'
    }
  ];

  const calculateDSBPflicht = () => {
    const empCount = parseInt(employees);
    let needsDSB = false;
    let reason = '';

    if (sensitiveData) {
      needsDSB = true;
      reason = 'Sie verarbeiten sensible Daten (Gesundheitsdaten, biometrische Daten, etc.). Unabhängig von der Mitarbeiterzahl benötigen Sie einen Datenschutzbeauftragten nach Art. 37 Abs. 1 lit. c DSGVO.';
    } else if (empCount >= 20) {
      needsDSB = true;
      reason = `Mit ${empCount} Mitarbeitern, die personenbezogene Daten verarbeiten, benötigen Sie nach § 38 BDSG einen Datenschutzbeauftragten.`;
    } else if (empCount < 20 && empCount > 0) {
      needsDSB = false;
      reason = `Mit ${empCount} Mitarbeitern liegt Sie unter der 20-Personen-Grenze. Ein DSB ist derzeit nicht verpflichtend, kann aber bei wachsendem Geschäft oder besonderen Verarbeitungstätigkeiten sinnvoll sein.`;
    }

    setShowCalculatorResult(true);
    return { needsDSB, reason };
  };

  const result = showCalculatorResult && employees ? calculateDSBPflicht() : null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Datenschutzbeauftragter: Aufgaben, Pflichten & ab wann Pflicht | DSGVO Leitfaden 2025"
        description="Umfassender Leitfaden zum Datenschutzbeauftragten ✓ Aufgaben ✓ Ab wann Pflicht? ✓ 20 Mitarbeiter Regel ✓ Voraussetzungen ✓ Kosten ✓ Intern vs Extern ✓ Alle DSGVO Infos"
        canonical="/wissen/leitfaden/datenschutzbeauftragter"
        keywords="Datenschutzbeauftragter, DSB, DSGVO, Aufgaben Datenschutzbeauftragter, ab wann Datenschutzbeauftragter, 20 Mitarbeiter, Bestellung, Pflicht"
        structuredData={JSON.stringify([structuredData, faqStructuredData])}
      />
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

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white border-0">
              <Shield className="h-4 w-4 mr-2" />
              Kompletter DSGVO-Leitfaden 2025
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#232323] mb-6">
              Datenschutzbeauftragter:<br/>
              <span className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent">
                Der komplette Leitfaden
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Alles über Aufgaben, Pflichten, Kosten und die gesetzlichen Anforderungen an Datenschutzbeauftragte nach DSGVO und BDSG.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-gray-700">6.500+ Wörter</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-gray-700">25 FAQ beantwortet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-gray-700">Mit DSB-Pflicht-Rechner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-20">

            <section id="definition">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">
                  Was ist ein Datenschutzbeauftragter?
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ein <strong>Datenschutzbeauftragter (DSB)</strong> ist eine unabhängige Person oder externe Organisation, die die Einhaltung der Datenschutzvorschriften in einem Unternehmen oder einer Behörde überwacht. Die Rolle ist in den <strong>Artikeln 37-39 der DSGVO</strong> sowie im <strong>§ 38 BDSG</strong> gesetzlich verankert.
                  </p>

                  <Card className="my-6 border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#e24e1b]/5 to-transparent">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Shield className="h-8 w-8 text-[#e24e1b] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-bold text-[#232323] mb-2">Kern-Definition</h3>
                          <p className="text-gray-700 leading-relaxed">
                            Der Datenschutzbeauftragte ist eine <strong>weisungsfreie</strong> Position, die die Geschäftsleitung in allen Fragen des Datenschutzes berät, die Compliance überwacht und als <strong>Vermittler zwischen Unternehmen, Betroffenen und Aufsichtsbehörden</strong> fungiert.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="text-2xl font-bold text-[#232323] mt-8 mb-4">Wichtige Abgrenzungen</h3>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card className="border-2 border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                          <h4 className="font-bold text-[#232323]">Der DSB IST:</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-[#e24e1b] mt-0.5 flex-shrink-0" />Berater und Kontrolleur</li>
                          <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-[#e24e1b] mt-0.5 flex-shrink-0" />Anlaufstelle für Behörden</li>
                          <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-[#e24e1b] mt-0.5 flex-shrink-0" />Schulungsverantwortlicher</li>
                          <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-[#e24e1b] mt-0.5 flex-shrink-0" />Dokumentationsüberwacher</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <h4 className="font-bold text-[#232323]">Der DSB IST NICHT:</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Verantwortlich für Umsetzung</li>
                          <li className="flex gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Entscheidungsträger</li>
                          <li className="flex gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Persönlich haftbar (bei extern)</li>
                          <li className="flex gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />IT-Security-Verantwortlicher</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                    <p className="text-sm text-gray-700">
                      <strong>Wichtig:</strong> Die <strong>Abkürzung DSB</strong> steht für Datenschutzbeauftragter. Im englischen Sprachraum wird die Bezeichnung <strong>Data Protection Officer (DPO)</strong> verwendet.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            <section id="wer-braucht">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">
                  Wer braucht einen Datenschutzbeauftragten?
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Die Pflicht zur Bestellung eines Datenschutzbeauftragten ist in <strong>§ 38 BDSG</strong> und <strong>Art. 37 DSGVO</strong> geregelt. Es gibt zwei Hauptkriterien:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-2 border-[#e24e1b] bg-gradient-to-br from-[#e24e1b]/5 to-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-lg p-3">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#232323]">Kriterium 1: Mitarbeiterzahl</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        <strong className="text-[#e24e1b] text-2xl">20+ Personen</strong>
                      </p>
                      <p className="text-sm text-gray-600">
                        Mindestens 20 Personen, die <strong>ständig</strong> mit der <strong>automatisierten Verarbeitung</strong> personenbezogener Daten beschäftigt sind.
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600 italic">
                          § 38 Abs. 1 Satz 1 BDSG
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-3">
                          <AlertTriangle className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#232323]">Kriterium 2: Risiko</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        <strong className="text-purple-600">Unabhängig von Mitarbeiterzahl</strong>
                      </p>
                      <p className="text-sm text-gray-600">
                        Bei Verarbeitung <strong>sensibler Daten</strong> (Gesundheit, Religion, sexuelle Orientierung) oder <strong>umfangreicher systematischer Überwachung</strong>.
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600 italic">
                          Art. 37 Abs. 1 lit. b, c DSGVO
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#e24e1b]/5 to-transparent mb-8">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#232323] mb-4 flex items-center gap-3">
                      <Calculator className="h-7 w-7 text-[#e24e1b]" />
                      Interaktiver DSB-Pflicht-Rechner
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Wie viele Personen verarbeiten in Ihrem Unternehmen regelmäßig personenbezogene Daten?
                        </label>
                        <input
                          type="number"
                          value={employees}
                          onChange={(e) => setEmployees(e.target.value)}
                          placeholder="z.B. 25"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e24e1b] focus:outline-none"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="sensitiveData"
                          checked={sensitiveData}
                          onChange={(e) => setSensitiveData(e.target.checked)}
                          className="mt-1 h-5 w-5 text-[#e24e1b] border-gray-300 rounded focus:ring-[#e24e1b]"
                        />
                        <label htmlFor="sensitiveData" className="text-sm text-gray-700">
                          Wir verarbeiten sensible Daten (Gesundheitsdaten, biometrische Daten, Scoring/Profiling, umfangreiche Videoüberwachung)
                        </label>
                      </div>

                      <Button
                        onClick={calculateDSBPflicht}
                        className="w-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl"
                      >
                        <Calculator className="mr-2 h-5 w-5" />
                        Prüfen Sie Ihre DSB-Pflicht
                      </Button>

                      {result && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className={`p-6 rounded-lg border-2 ${
                            result.needsDSB
                              ? 'bg-red-50 border-red-200'
                              : 'bg-green-50 border-green-200'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            {result.needsDSB ? (
                              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                            ) : (
                              <CheckCircle2 className="h-8 w-8 text-green-600 flex-shrink-0" />
                            )}
                            <div>
                              <h4 className="font-bold text-lg mb-2">
                                {result.needsDSB ? 'DSB erforderlich!' : 'Kein DSB erforderlich'}
                              </h4>
                              <p className="text-gray-700 leading-relaxed">{result.reason}</p>
                              {result.needsDSB && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                  <Link to="/externer-datenschutzbeauftragter">
                                    <Button className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white">
                                      <ArrowRight className="mr-2 h-4 w-4" />
                                      Jetzt externen DSB bestellen ab 29€/Monat
                                    </Button>
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-2xl font-bold text-[#232323] mb-6">Branchen, die immer einen DSB brauchen</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { name: 'Arztpraxen', reason: 'Verarbeitung von Gesundheitsdaten', icon: '🏥' },
                    { name: 'Apotheken', reason: 'Rezepte und Medikationspläne', icon: '💊' },
                    { name: 'Pflegeheime', reason: 'Umfangreiche Gesundheitsdokumentation', icon: '🏨' },
                    { name: 'Krankenhäuser', reason: 'Patientendaten und Behandlungshistorie', icon: '🏥' },
                    { name: 'Versicherungen', reason: 'Scoring und Profiling', icon: '🛡️' },
                    { name: 'Detekteien', reason: 'Systematische Überwachung', icon: '🔍' },
                    { name: 'Marktforschung', reason: 'Umfangreiche Datenverarbeitung', icon: '📊' },
                    { name: 'Auskunfteien', reason: 'Bonitätsprüfung und Scoring', icon: '📋' }
                  ].map((branche, idx) => (
                    <Card key={idx} className="border-2 border-gray-200 hover:border-[#e24e1b] transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{branche.icon}</span>
                          <div>
                            <h4 className="font-bold text-[#232323]">{branche.name}</h4>
                            <p className="text-xs text-gray-600">{branche.reason}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                  <h4 className="font-bold text-[#232323] mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    Wichtig: Zählung der Mitarbeiter
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Es zählen <strong>nur Personen</strong>, die <strong>ständig mit der Verarbeitung personenbezogener Daten beschäftigt</strong> sind – nicht alle Mitarbeiter im Unternehmen.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span><strong>Zählen:</strong> HR, Buchhaltung, Vertrieb, Marketing, IT-Support</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span><strong>Zählen nicht:</strong> Produktionsmitarbeiter ohne PC, Lagerarbeiter, Reinigungskräfte</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </section>

            <section id="aufgaben">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">
                  Aufgaben des Datenschutzbeauftragten
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Die Aufgaben des DSB sind in <strong>Art. 39 DSGVO</strong> gesetzlich definiert. Der DSB hat eine <strong>beratende und überwachende</strong> Funktion – er ist jedoch <strong>nicht</strong> für die operative Umsetzung verantwortlich.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {aufgaben.map((aufgabe, idx) => (
                    <Card key={idx} className="border-2 border-gray-200 hover:border-[#e24e1b] transition-all hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-lg p-3 flex-shrink-0">
                            <aufgabe.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-[#232323] mb-2">{aufgabe.title}</h3>
                            <p className="text-sm text-gray-700 mb-3">{aufgabe.description}</p>
                            <Badge className="text-xs bg-gray-100 text-gray-700 border-0">
                              {aufgabe.rechtslage}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-2 border-red-200 bg-red-50 mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#232323] mb-3 flex items-center gap-2">
                      <XCircle className="h-6 w-6 text-red-600" />
                      Das ist NICHT Aufgabe des DSB
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Operative Umsetzung von Maßnahmen',
                        'Entscheidungen über Verarbeitungszwecke',
                        'IT-Security-Management',
                        'Persönliche Haftung für Verstöße',
                        'Implementierung von Software',
                        'Vertragsverhandlungen'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <p className="text-sm text-gray-700">
                    <strong>Wichtig:</strong> Der DSB <strong>berät und überwacht</strong> – die <strong>Verantwortung für die Umsetzung</strong> liegt bei der <strong>Geschäftsleitung</strong> (Art. 24 DSGVO). Bei Datenschutzverstößen haftet das Unternehmen, nicht der DSB persönlich (Ausnahme bei externem DSB: dieser haftet mit seiner Berufshaftpflicht).
                  </p>
                </div>
              </motion.div>
            </section>

            <section id="voraussetzungen">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">
                  Voraussetzungen & Qualifikationen
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Nach <strong>Art. 37 Abs. 5 DSGVO</strong> muss der Datenschutzbeauftragte über <strong>Fachwissen im Datenschutzrecht und in datenschutzrelevanten Praxis</strong> verfügen. Es gibt jedoch <strong>keine gesetzlich vorgeschriebene Ausbildung oder Zertifizierung</strong>. → <Link to="/wissen/leitfaden/datenschutzbeauftragter-ausbildung" className="text-blue-600 hover:text-blue-700 font-semibold underline">Erfahren Sie mehr über Ausbildung & Zertifizierung</Link>
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {voraussetzungen.map((kategorie, idx) => (
                    <Card key={idx} className="border-2 border-gray-200">
                      <CardContent className="p-6">
                        <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-lg p-3 w-fit mb-4">
                          <kategorie.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-[#232323] mb-4">{kategorie.title}</h3>
                        <ul className="space-y-2">
                          {kategorie.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="h-4 w-4 text-[#39B37B] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#e24e1b]/5 to-transparent mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#232323] mb-4">Interessenkonflikte: Wer NICHT DSB werden kann</h3>
                    <p className="text-gray-700 mb-4">
                      Nach <strong>Art. 38 Abs. 6 DSGVO</strong> darf der DSB keine Interessenkonflikte haben. Folgende Positionen sind ausgeschlossen:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { rolle: 'Geschäftsführer / CEO', grund: 'Kann sich nicht selbst kontrollieren' },
                        { rolle: 'IT-Leiter / CIO', grund: 'Entscheidet über techn. Maßnahmen' },
                        { rolle: 'Marketing-Leiter', grund: 'Definiert Verarbeitungszwecke' },
                        { rolle: 'Personalleiter / HR', grund: 'Verarbeitet sensible Mitarbeiterdaten' }
                      ].map((konflikt, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                          <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-[#232323] text-sm">{konflikt.rolle}</p>
                            <p className="text-xs text-gray-600">{konflikt.grund}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Link to="/wissen/leitfaden/datenschutzbeauftragter-ausbildung" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-xl">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Wie wird man Datenschutzbeauftragter?
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </section>

            <section id="bestellung">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">
                  Bestellung & Meldung des Datenschutzbeauftragten
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Die Bestellung eines Datenschutzbeauftragten erfolgt in mehreren Schritten und muss sowohl intern dokumentiert als auch extern gemeldet werden.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {[
                    { step: '1', title: 'Auswahl', desc: 'Geeignete Person/Dienstleister identifizieren' },
                    { step: '2', title: 'Bestellung', desc: 'Schriftliche Bestellung verfassen' },
                    { step: '3', title: 'Meldung', desc: 'Bei Aufsichtsbehörde melden' },
                    { step: '4', title: 'Veröffentlichung', desc: 'Kontaktdaten publizieren' }
                  ].map((schritt, idx) => (
                    <Card key={idx} className="border-2 border-gray-200">
                      <CardContent className="p-4 text-center">
                        <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                          {schritt.step}
                        </div>
                        <h3 className="font-bold text-[#232323] mb-2">{schritt.title}</h3>
                        <p className="text-xs text-gray-600">{schritt.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-[#232323] mb-4">Meldepflicht nach Art. 37 Abs. 7 DSGVO</h3>

                <Card className="border-2 border-amber-200 bg-amber-50 mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-[#232323] mb-2">Wichtige Fristen</h4>
                        <p className="text-gray-700 mb-3">
                          Die Kontaktdaten des DSB müssen <strong>unverzüglich</strong> nach Bestellung der zuständigen Aufsichtsbehörde mitgeteilt werden. Bei Nichteinhaltung drohen <strong>Bußgelder bis zu 10.000€</strong>.
                        </p>
                        <p className="text-sm text-gray-600">
                          Die Meldung erfolgt online über das Portal der jeweiligen Landesdatenschutzbehörde (z.B. BayLDA, LfDI Baden-Württemberg, etc.).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-2xl font-bold text-[#232323] mb-4">Veröffentlichungspflicht</h3>

                <p className="text-gray-700 mb-4">
                  Die Kontaktdaten des DSB müssen auch <strong>öffentlich zugänglich</strong> gemacht werden:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { wo: 'Website', was: 'Eigener Menüpunkt oder im Footer' },
                    { wo: 'Datenschutzerklärung', was: 'Name, E-Mail, Telefon des DSB' },
                    { wo: 'Impressum', was: 'Optional, aber empfohlen' },
                    { wo: 'Interne Bekanntmachung', was: 'Info an alle Mitarbeiter' }
                  ].map((item, idx) => (
                    <Card key={idx} className="border-2 border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#39B37B] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-[#232323]">{item.wo}</p>
                            <p className="text-sm text-gray-600">{item.was}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="intern-extern">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">
                  Interner vs. Externer Datenschutzbeauftragter
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Die DSGVO erlaubt beide Varianten: Sie können einen <strong>internen Mitarbeiter</strong> zum DSB bestellen oder einen <strong>externen Dienstleister</strong> beauftragen. Beide Optionen haben unterschiedliche Vor- und Nachteile. → <Link to="/externer-datenschutzbeauftragter" className="text-[#e24e1b] hover:text-[#ea580c] font-semibold underline">Jetzt externen DSB ab 29€/Monat beauftragen</Link>
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-2 border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-[#232323] border-b-2 border-gray-200">Kriterium</th>
                        <th className="px-4 py-3 text-left font-bold text-[#232323] border-b-2 border-gray-200">Interner DSB</th>
                        <th className="px-4 py-3 text-left font-bold text-[#232323] border-b-2 border-gray-200">Externer DSB</th>
                      </tr>
                    </thead>
                    <tbody>
                      {internVsExtern.map((vergleich, idx) => (
                        <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}>
                          <td className="px-4 py-4 font-semibold text-[#232323]">{vergleich.kategorie}</td>
                          <td className={`px-4 py-4 text-sm ${vergleich.vorteil === 'intern' ? 'bg-green-50' : ''}`}>
                            <p className="text-gray-700">{vergleich.intern}</p>
                          </td>
                          <td className={`px-4 py-4 text-sm ${vergleich.vorteil === 'extern' ? 'bg-green-50' : ''}`}>
                            <p className="text-gray-700">{vergleich.extern}</p>
                            {vergleich.vorteil === 'extern' && (
                              <Badge className="mt-2 bg-[#39B37B] text-white border-0 text-xs">Vorteil</Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#e24e1b]/5 to-transparent mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#232323] mb-4">Empfehlung: Wann welche Lösung?</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-[#232323] mb-3 flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-purple-600" />
                          Intern sinnvoll bei:
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {[
                            'Sehr großen Unternehmen (500+ Mitarbeiter)',
                            'Hochkomplexer Datenverarbeitung',
                            'Vielen internationalen Standorten',
                            'Regulierten Branchen (Banken, Pharma)'
                          ].map((item, idx) => (
                            <li key={idx} className="flex gap-2">
                              <ChevronRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#232323] mb-3 flex items-center gap-2">
                          <UserCheck className="h-5 w-5 text-[#e24e1b]" />
                          Extern sinnvoll bei:
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {[
                            'KMU und Start-ups (bis 500 Mitarbeiter)',
                            'Begrenztem Budget',
                            'Wunsch nach Flexibilität',
                            'Vermeidung von Interessenkonflikten',
                            'Sofortigem Bedarf (kein Recruiting)'
                          ].map((item, idx) => (
                            <li key={idx} className="flex gap-2">
                              <ChevronRight className="h-4 w-4 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Link to="/externer-datenschutzbeauftragter">
                  <Button className="w-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl text-lg py-6">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Externer Datenschutzbeauftragter ab 29€/Monat
                  </Button>
                </Link>
              </motion.div>
            </section>

            <section id="kuendigungsschutz">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">
                  Kündigungsschutz & Haftung
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-2 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Lock className="h-8 w-8 text-purple-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-[#232323] mb-2">Kündigungsschutz (Intern)</h3>
                          <Badge className="bg-purple-100 text-purple-700 border-0 text-xs">§ 38 Abs. 2 BDSG</Badge>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Der interne DSB genießt einen <strong>besonderen Kündigungsschutz</strong> – vergleichbar mit Betriebsratsmitgliedern:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700 mb-4">
                        <li className="flex gap-2">
                          <ChevronRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Kündigung nur bei <strong>schwerwiegenden Gründen</strong></span>
                        </li>
                        <li className="flex gap-2">
                          <ChevronRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Nachwirkung <strong>1 Jahr nach Abberufung</strong></span>
                        </li>
                        <li className="flex gap-2">
                          <ChevronRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Gilt auch bei <strong>externer Bestellung</strong> von Mitarbeitern</span>
                        </li>
                      </ul>
                      <div className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-500">
                        <p className="text-xs text-gray-700">
                          <strong>Achtung:</strong> Dies macht die Trennung von ungeeigneten internen DSB sehr schwierig und kostspielig.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Scale className="h-8 w-8 text-[#e24e1b] flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-[#232323] mb-2">Haftung</h3>
                          <Badge className="bg-red-100 text-red-700 border-0 text-xs">Art. 82 DSGVO</Badge>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Bei Datenschutzverstößen stellt sich die Haftungsfrage:
                      </p>
                      <div className="space-y-4 text-sm">
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="font-semibold text-[#232323] mb-1">Interner DSB:</p>
                          <p className="text-gray-700">
                            Das <strong>Unternehmen haftet vollumfänglich</strong> für Datenschutzverstöße. Der interne DSB haftet nur bei grober Fahrlässigkeit oder Vorsatz gegenüber dem Arbeitgeber.
                          </p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="font-semibold text-[#232323] mb-1">Externer DSB:</p>
                          <p className="text-gray-700">
                            Der <strong>externe Dienstleister haftet bei Pflichtverletzungen</strong> mit seiner Berufshaftpflichtversicherung (üblicherweise 1-3 Mio. € Deckung).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#e24e1b]/5 to-transparent">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#232323] mb-4">Abberufung des Datenschutzbeauftragten</h3>
                    <p className="text-gray-700 mb-4">
                      Die Abberufung eines DSB ist nur unter bestimmten Voraussetzungen möglich:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        'Wegfall der erforderlichen Fachkunde',
                        'Interessenkonflikte entstanden',
                        'Schwere Pflichtverletzungen',
                        'Wegfall der Benennungspflicht',
                        'Einvernehmliche Beendigung',
                        'Betriebsbedingte Gründe (selten)'
                      ].map((grund, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#39B37B] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{grund}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            <section id="kosten">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">
                  Kosten eines Datenschutzbeauftragten
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Die Kosten für einen Datenschutzbeauftragten variieren stark je nach Lösung und Unternehmensgröße. Hier ein realistischer Kostenvergleich:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-2 border-red-200 bg-red-50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Euro className="h-8 w-8 text-red-600" />
                        <h3 className="text-2xl font-bold text-[#232323]">Interner DSB</h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-700 mb-4">
                        <div className="flex justify-between py-2 border-b border-red-200">
                          <span>Jahresgehalt (Durchschnitt)</span>
                          <span className="font-semibold">55.000€</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-red-200">
                          <span>Arbeitgeberanteil (20%)</span>
                          <span className="font-semibold">11.000€</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-red-200">
                          <span>Zertifizierung initial</span>
                          <span className="font-semibold">3.000-5.000€</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-red-200">
                          <span>Jährliche Weiterbildung</span>
                          <span className="font-semibold">1.500€</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-red-200">
                          <span>Software-Lizenzen</span>
                          <span className="font-semibold">2.000-5.000€</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-red-200">
                          <span>Opportunitätskosten (30%)</span>
                          <span className="font-semibold text-red-600">versteckt</span>
                        </div>
                        <div className="flex justify-between pt-3 text-lg">
                          <span className="font-bold text-[#232323]">Gesamtkosten/Jahr:</span>
                          <span className="font-bold text-red-600">72.500-76.500€</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#39B37B]/30 bg-gradient-to-br from-[#39B37B]/5 to-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="h-8 w-8 text-[#39B37B]" />
                        <h3 className="text-2xl font-bold text-[#232323]">Externer DSB</h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-700 mb-4">
                        <div className="flex justify-between py-2 border-b border-green-200">
                          <span>Kleine Unternehmen (bis 20 MA)</span>
                          <span className="font-semibold text-[#39B37B]">29€/Monat = 348€/Jahr</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-green-200">
                          <span>Mittlere Unternehmen (bis 50 MA)</span>
                          <span className="font-semibold text-[#39B37B]">95€/Monat = 1.140€/Jahr</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-green-200">
                          <span>Große Unternehmen (50+ MA)</span>
                          <span className="font-semibold text-[#39B37B]">individuell ab 449€/Monat</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-green-200">
                          <span><strong>Inklusive:</strong></span>
                          <span className="font-semibold"></span>
                        </div>
                        <ul className="space-y-1 text-xs ml-4">
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#39B37B] flex-shrink-0" />
                            <span>Datenschutz-Software</span>
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#39B37B] flex-shrink-0" />
                            <span>Alle Schulungen & Webinare</span>
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#39B37B] flex-shrink-0" />
                            <span>Support & Beratung</span>
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#39B37B] flex-shrink-0" />
                            <span>Berufshaftpflicht (1-3 Mio. €)</span>
                          </li>
                        </ul>
                      </div>
                      <Badge className="w-full py-2 bg-gradient-to-r from-[#39B37B] to-[#2d9461] text-white border-0 text-center">
                        99% günstiger als intern
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#e24e1b]/5 to-transparent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Calculator className="h-8 w-8 text-[#e24e1b] flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-[#232323] mb-2">Rechenbeispiel: 50 Mitarbeiter</h3>
                        <p className="text-gray-700 mb-3">
                          <strong>Intern:</strong> 72.500€/Jahr = 6.042€/Monat
                          <br />
                          <strong>Extern:</strong> 1.140€/Jahr = 95€/Monat
                        </p>
                        <p className="text-lg font-bold text-[#e24e1b]">
                          → Jährliche Ersparnis: 71.360€ (98,4%)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8">
                  <Link to="/externer-datenschutzbeauftragter">
                    <Button className="w-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl text-lg py-6">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Externer DSB ab 29€/Monat - Alle Preise ansehen
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </section>

            <section id="faq">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">
                  Häufig gestellte Fragen (FAQ)
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <Card key={idx} className="border-2 border-gray-200 hover:border-[#e24e1b] transition-all">
                      <CardContent className="p-0">
                        <button
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full p-6 text-left flex items-start justify-between gap-4"
                        >
                          <div className="flex-1">
                            <h3 className="font-bold text-[#232323] text-lg">{faq.question}</h3>
                          </div>
                          <ChevronDown
                            className={`h-6 w-6 text-[#e24e1b] flex-shrink-0 transition-transform ${
                              activeFaq === idx ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {activeFaq === idx && (
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </section>

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#e24e1b]/5 to-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#232323] mb-4">Schnellzugriff</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
                          currentSection === section.id
                            ? 'bg-[#e24e1b]/10 text-[#e24e1b] font-medium'
                            : 'text-gray-600 hover:text-[#e24e1b] hover:bg-[#e24e1b]/5'
                        }`}
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#e24e1b] bg-gradient-to-br from-[#e24e1b] to-[#ea580c] text-white">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 mb-4" />
                  <h3 className="font-bold text-xl mb-3">Brauchen Sie einen DSB?</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Externer Datenschutzbeauftragter ab 29€/Monat. Monatlich kündbar. Sofort startklar.
                  </p>
                  <Link to="/externer-datenschutzbeauftragter">
                    <Button className="w-full bg-white text-[#e24e1b] hover:bg-gray-100 font-bold">
                      Jetzt bestellen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#232323] mb-4">Weiterführende Artikel</h3>
                  <div className="space-y-3">
                    <Link to="/wissen/leitfaden/datenschutzbeauftragter-ausbildung" className="block group">
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <GraduationCap className="h-5 w-5 text-[#e24e1b] flex-shrink-0" />
                        <span className="text-sm text-gray-700 group-hover:text-[#e24e1b]">
                          Ausbildung & Zertifizierung
                        </span>
                      </div>
                    </Link>
                    <Link to="/externer-datenschutzbeauftragter" className="block group">
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Euro className="h-5 w-5 text-[#e24e1b] flex-shrink-0" />
                        <span className="text-sm text-gray-700 group-hover:text-[#e24e1b]">
                          Kosten & Preise
                        </span>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DatenschutzbeauftragterGuide;
