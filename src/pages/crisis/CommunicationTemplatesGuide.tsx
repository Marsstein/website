import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Download,
  FileText,
  Users,
  Scale,
  Eye,
  Calendar,
  Copy,
  Edit3,
  Mail,
  Phone,
  Building2,
  Globe,
  Clock,
  AlertTriangle,
  Shield,
  Target,
  Settings,
  Zap,
  Brain,
  Award,
  TrendingUp,
  Search,
  Filter,
  Plus,
  Minus,
  X,
  Check,
  Save,
  Share2,
  ExternalLink,
  Bookmark,
  Star,
  Flag,
  Bell,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CommunicationTemplatesGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const categories = [
    { id: 'all', name: 'Alle Templates', count: 12 },
    { id: 'authorities', name: 'Behörden', count: 3 },
    { id: 'customers', name: 'Kunden', count: 4 },
    { id: 'employees', name: 'Mitarbeiter', count: 3 },
    { id: 'media', name: 'Medien', count: 2 }
  ];

  const templates = [
    {
      id: 1,
      category: 'authorities',
      title: 'DSGVO Behördenmeldung (Art. 33)',
      description: 'Offizielle Meldung einer Datenschutzverletzung an die Aufsichtsbehörde',
      urgency: 'KRITISCH',
      timeframe: 'Binnen 72h',
      icon: Scale,
      color: 'from-red-500 to-orange-500',
      recipient: 'Aufsichtsbehörde',
      language: 'Deutsch/Englisch',
      format: 'Formular + E-Mail',
      requiredInfo: [
        'Art der Datenschutzverletzung',
        'Kategorien betroffener Personen',
        'Ungefähre Anzahl betroffener Personen',
        'Kategorien betroffener Daten',
        'Wahrscheinliche Folgen der Verletzung',
        'Ergriffene oder vorgeschlagene Maßnahmen'
      ],
      template: `Betreff: Meldung einer Datenschutzverletzung gemäß Art. 33 DSGVO

Sehr geehrte Damen und Herren,

hiermit melden wir Ihnen eine Datenschutzverletzung gemäß Art. 33 DSGVO.

1. ANGABEN ZUM VERANTWORTLICHEN
Unternehmen: [FIRMENNAME]
Anschrift: [ADRESSE]
Kontakt: [KONTAKTDATEN]
Datenschutzbeauftragte(r): [NAME UND KONTAKT]

2. BESCHREIBUNG DER DATENSCHUTZVERLETZUNG
Art der Verletzung: [BESCHREIBUNG]
Zeitpunkt: [DATUM UND UHRZEIT]
Entdeckung: [DATUM UND UHRZEIT DER ENTDECKUNG]

3. KATEGORIEN UND ANZAHL BETROFFENER PERSONEN
[DETAILLIERTE AUFSCHLÜSSELUNG]

4. KATEGORIEN BETROFFENER PERSONENBEZOGENER DATEN
[AUFLISTUNG DER DATENARTEN]

5. WAHRSCHEINLICHE FOLGEN
[BEWERTUNG DER RISIKEN]

6. ERGRIFFENE UND GEPLANTE MASSNAHMEN
[DETAILLIERTE BESCHREIBUNG]

Mit freundlichen Grüßen
[UNTERSCHRIFT]`
    },
    {
      id: 2,
      category: 'customers',
      title: 'Kundenbenachrichtigung bei Datenschutzverletzung',
      description: 'Information der betroffenen Kunden über einen Datenschutzvorfall',
      urgency: 'HOCH',
      timeframe: 'Unverzüglich',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      recipient: 'Betroffene Kunden',
      language: 'Deutsch',
      format: 'E-Mail + Brief',
      requiredInfo: [
        'Art der Datenschutzverletzung in verständlicher Sprache',
        'Kontaktdaten des Datenschutzbeauftragten',
        'Wahrscheinliche Folgen der Verletzung',
        'Ergriffene oder vorgeschlagene Maßnahmen',
        'Empfohlene Schutzmaßnahmen für Betroffene'
      ],
      template: `Betreff: Wichtige Information zu Ihren Daten

Liebe Kundin, lieber Kunde,

wir müssen Sie über einen Vorfall informieren, der Ihre personenbezogenen Daten betreffen könnte.

WAS IST PASSIERT?
[VERSTÄNDLICHE BESCHREIBUNG DES VORFALLS]

WELCHE DATEN SIND BETROFFEN?
[AUFLISTUNG DER BETROFFENEN DATENARTEN]

WAS HABEN WIR UNTERNOMMEN?
[BESCHREIBUNG DER SOFORTMASSNAHMEN]

WAS BEDEUTET DAS FÜR SIE?
[BEWERTUNG DER AUSWIRKUNGEN]

WAS KÖNNEN SIE TUN?
[EMPFOHLENE SCHUTZMAHNAMEN]

KONTAKT
Bei Fragen erreichen Sie uns unter:
[KONTAKTINFORMATIONEN]

Mit freundlichen Grüßen
Ihr [UNTERNEHMEN] Team`
    },
    {
      id: 3,
      category: 'employees',
      title: 'Mitarbeiterinformation bei Security Incident',
      description: 'Interne Kommunikation an alle Mitarbeiter über einen Sicherheitsvorfall',
      urgency: 'HOCH',
      timeframe: 'Sofort',
      icon: Building2,
      color: 'from-yellow-500 to-orange-500',
      recipient: 'Alle Mitarbeiter',
      language: 'Deutsch',
      format: 'E-Mail + Intranet',
      requiredInfo: [
        'Art des Sicherheitsvorfalls',
        'Auswirkungen auf Arbeitsabläufe',
        'Verhaltensregeln für Mitarbeiter',
        'Ansprechpartner für Fragen',
        'Weitere Schritte und Timeline'
      ],
      template: `Betreff: [URGENT] Sicherheitsvorfall - Sofortmaßnahmen erforderlich

Liebe Kolleginnen und Kollegen,

wir müssen Sie über einen Sicherheitsvorfall informieren, der unser Unternehmen betrifft.

SITUATION:
[BESCHREIBUNG DES VORFALLS]

SOFORTMASSNAHMEN:
✓ [MASSNAHME 1]
✓ [MASSNAHME 2]
✓ [MASSNAHME 3]

IHRE AUFGABEN:
• [VERHALTENSREGEL 1]
• [VERHALTENSREGEL 2]
• [VERHALTENSREGEL 3]

NICHT ERLAUBT:
✗ [VERBOTENE AKTION 1]
✗ [VERBOTENE AKTION 2]

BEI FRAGEN:
IT-Security: [KONTAKT]
Management: [KONTAKT]

Weitere Updates folgen in Kürze.

Vielen Dank für Ihre Kooperation
[MANAGEMENT TEAM]`
    },
    {
      id: 4,
      category: 'media',
      title: 'Pressemitteilung bei Datenschutzvorfall',
      description: 'Öffentliche Stellungnahme für Medien und Öffentlichkeit',
      urgency: 'HOCH',
      timeframe: '2-6 Stunden',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      recipient: 'Medien & Öffentlichkeit',
      language: 'Deutsch',
      format: 'Pressemitteilung',
      requiredInfo: [
        'Sachliche Darstellung des Vorfalls',
        'Anzahl betroffener Kunden (falls bekannt)',
        'Ergriffene Sofortmaßnahmen',
        'Unterstützung für betroffene Kunden',
        'Kontakt für Medienanfragen'
      ],
      template: `PRESSEMITTEILUNG

[UNTERNEHMEN] informiert über Datenschutzvorfall

[ORT], [DATUM] - [UNTERNEHMEN] informiert hiermit über einen Vorfall, der personenbezogene Daten von Kunden betroffen haben könnte.

SACHSTAND:
[OBJEKTIVE BESCHREIBUNG DES VORFALLS]

BETROFFENE DATEN:
[KATEGORIEN OHNE SENSIBLE DETAILS]

SOFORTMASSNAHMEN:
• [MASSNAHME 1]
• [MASSNAHME 2]
• [MASSNAHME 3]

KUNDENBETREUUNG:
Betroffene Kunden werden direkt kontaktiert. Eine kostenlose Hotline wurde eingerichtet: [TELEFONNUMMER]

ZUSAMMENARBEIT MIT BEHÖRDEN:
Wir arbeiten eng mit den zuständigen Aufsichtsbehörden zusammen und haben den Vorfall ordnungsgemäß gemeldet.

MEDIENKONTAKT:
[NAME]
[TITEL]
[TELEFON]
[E-MAIL]

Über [UNTERNEHMEN]:
[KURZE UNTERNEHMENSBESCHREIBUNG]`
    },
    {
      id: 5,
      category: 'authorities',
      title: 'Strafanzeige bei Cyberangriff',
      description: 'Meldung eines Cyberangriffs bei der Polizei/Staatsanwaltschaft',
      urgency: 'HOCH',
      timeframe: 'Unverzüglich',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500',
      recipient: 'Polizei/Staatsanwaltschaft',
      language: 'Deutsch',
      format: 'Strafanzeige',
      requiredInfo: [
        'Tatzeit und Tatort',
        'Art des Angriffs',
        'Entstandener Schaden',
        'Beweismittel',
        'Verdachtsmomente'
      ],
      template: `STRAFANZEIGE

Anzeigeerstatter:
[UNTERNEHMEN]
[ADRESSE]
vertreten durch: [NAME UND FUNKTION]

TATBESTAND:
Hiermit erstatte ich Strafanzeige gegen unbekannt wegen:
☐ Computersabotage (§ 303b StGB)
☐ Ausspähen von Daten (§ 202a StGB)
☐ Datenveränderung (§ 303a StGB)
☐ [WEITERE STRAFTATBESTÄNDE]

SACHVERHALT:
[DETAILLIERTE BESCHREIBUNG DES ANGRIFFS]

TATZEIT:
Von: [DATUM/UHRZEIT]
Bis: [DATUM/UHRZEIT]

TATORT:
[BESCHREIBUNG DER BETROFFENEN SYSTEME]

ENTSTANDENER SCHADEN:
[BEWERTUNG DES SCHADENS]

BEWEISMITTEL:
• [LISTE DER GESICHERTEN BEWEISE]

[ORT, DATUM]
[UNTERSCHRIFT]`
    },
    {
      id: 6,
      category: 'customers',
      title: 'Kundenhotline Script',
      description: 'Gesprächsleitfaden für den Kundensupport bei Datenschutzvorfällen',
      urgency: 'MITTEL',
      timeframe: 'Bei Bedarf',
      icon: Phone,
      color: 'from-green-500 to-teal-500',
      recipient: 'Kundensupport Team',
      language: 'Deutsch',
      format: 'Gesprächsleitfaden',
      requiredInfo: [
        'Standardantworten auf häufige Fragen',
        'Eskalationsprozeduren',
        'Verfügbare Unterstützungsmaßnahmen',
        'Technische Details in einfacher Sprache'
      ],
      template: `KUNDENHOTLINE SCRIPT - DATENSCHUTZVORFALL

BEGRÜSSUNG:
"Guten Tag, mein Name ist [NAME] vom [UNTERNEHMEN] Kundensupport. Sie erreichen unsere spezielle Hotline zum Datenschutzvorfall. Wie kann ich Ihnen helfen?"

HÄUFIGE FRAGEN & ANTWORTEN:

Q: "Sind meine Daten betroffen?"
A: "Das kann ich gerne für Sie prüfen. Dafür benötige ich [IDENTIFIKATIONSMERKMALE]. Einen Moment bitte..."

Q: "Was soll ich jetzt tun?"
A: "Wir empfehlen folgende Schritte: [SCHUTZEMPFEHLUNGEN]. Möchten Sie, dass ich Sie dabei unterstütze?"

Q: "Wie ist das passiert?"
A: "[SACHLICHE ERKLÄRUNG OHNE TECHNISCHE DETAILS]"

Q: "Bekomme ich eine Entschädigung?"
A: "Dazu kann ich Ihnen zum jetzigen Zeitpunkt noch nichts Konkretes sagen. Wir prüfen jeden Fall individuell."

ESKALATION:
Bei komplexen Fragen oder unzufriedenen Kunden:
"Ich verstehe Ihre Bedenken. Lassen Sie mich Sie mit unserem Spezialisten verbinden."

GESPRÄCHSENDE:
"Haben Sie noch weitere Fragen? Sie erreichen uns jederzeit unter dieser Nummer. Vielen Dank für Ihr Verständnis."`
    },
    {
      id: 7,
      category: 'employees',
      title: 'Incident Response Team Aktivierung',
      description: 'Sofortige Alarmierung des Incident Response Teams',
      urgency: 'KRITISCH',
      timeframe: 'Sofort',
      icon: Bell,
      color: 'from-red-500 to-pink-500',
      recipient: 'IR-Team Mitglieder',
      language: 'Deutsch/Englisch',
      format: 'SMS + E-Mail + Anruf',
      requiredInfo: [
        'Art des Incidents',
        'Schweregrad',
        'Erste Maßnahmen',
        'Treffpunkt/Kommandozentrale'
      ],
      template: `🚨 INCIDENT RESPONSE AKTIVIERUNG 🚨

INCIDENT: [KURZE BESCHREIBUNG]
SCHWEREGRAD: [HOCH/KRITISCH]
STATUS: [AKTIV]

SOFORT ERFORDERLICH:
✓ Alle IR-Team Mitglieder
✓ Kommandozentrale: [ORT]
✓ Erste Maßnahmen: [ACTIONS]

KONTAKT:
IR-Lead: [TELEFON]
Backup: [TELEFON]

Zeit: [TIMESTAMP]
Ref: INC-[NUMMER]

Bestätigen Sie den Erhalt per SMS an [NUMMER]`
    },
    {
      id: 8,
      category: 'customers',
      title: 'Entschädigungsangebot für Betroffene',
      description: 'Angebot von Unterstützungsleistungen für betroffene Kunden',
      urgency: 'MITTEL',
      timeframe: '1-7 Tage',
      icon: Award,
      color: 'from-emerald-500 to-teal-500',
      recipient: 'Betroffene Kunden',
      language: 'Deutsch',
      format: 'E-Mail + Brief',
      requiredInfo: [
        'Art der angebotenen Leistungen',
        'Zeitraum der Gültigkeit',
        'Antragsprozess',
        'Kontaktmöglichkeiten'
      ],
      template: `Betreff: Unterstützungsleistungen nach Datenschutzvorfall

Sehr geehrte/r [NAME],

als Reaktion auf den kürzlich aufgetretenen Datenschutzvorfall möchten wir Ihnen konkrete Unterstützung anbieten.

VERFÜGBARE LEISTUNGEN:
• [LEISTUNG 1] - kostenlos für [ZEITRAUM]
• [LEISTUNG 2] - im Wert von [BETRAG]
• [LEISTUNG 3] - [BESCHREIBUNG]

SO BEANTRAGEN SIE DIE LEISTUNGEN:
1. [SCHRITT 1]
2. [SCHRITT 2]
3. [SCHRITT 3]

GÜLTIGKEITSZEITRAUM:
Diese Angebote sind gültig bis [DATUM].

WEITERE UNTERSTÜTZUNG:
Zusätzlich haben wir eine spezielle Beratungshotline eingerichtet:
[TELEFONNUMMER] (Mo-Fr, 8-20 Uhr)

Wir bedauern die entstandenen Unannehmlichkeiten und bedanken uns für Ihr Vertrauen.

Mit freundlichen Grüßen
[UNTERNEHMEN]`
    },
    {
      id: 9,
      category: 'media',
      title: 'Social Media Crisis Response',
      description: 'Vorlagen für Social Media Kanäle während einer Datenschutzkrise',
      urgency: 'HOCH',
      timeframe: '1-2 Stunden',
      icon: Share2,
      color: 'from-indigo-500 to-purple-500',
      recipient: 'Social Media Kanäle',
      language: 'Deutsch',
      format: 'Social Media Posts',
      requiredInfo: [
        'Kurze, klare Botschaft',
        'Link zu detaillierten Informationen',
        'Hashtags (falls angemessen)',
        'Monitoring und Response-Strategie'
      ],
      template: `TWITTER/X POST:
Wir informieren transparent über einen Vorfall, der Kundendaten betreffen könnte. Betroffene Kunden werden direkt kontaktiert. Alle Details: [LINK] #Datenschutz #Transparenz

LINKEDIN POST:
[UNTERNEHMEN] Update: Wir möchten unsere Community über einen Datenschutzvorfall informieren. Wir haben sofort Maßnahmen ergriffen und arbeiten eng mit den Behörden zusammen. Vollständige Information: [LINK]

FACEBOOK POST:
Liebe Community, wir müssen Sie über einen Vorfall informieren, der einige Kundendaten betreffen könnte. Ihre Sicherheit hat oberste Priorität. Hier die wichtigsten Fakten: [BULLET POINTS]. Mehr Details: [LINK]

INSTAGRAM STORY:
[Grafik mit Hauptinformationen]
"Wir informieren transparent"
"Kundensicherheit hat Priorität"
"Alle Details im Link in Bio"

RESPONSE-LEITFADEN:
• Antworten Sie sachlich und mitfühlend
• Verweisen Sie auf offizielle Kanäle
• Eskalieren Sie bei komplexen Anfragen
• Dokumentieren Sie alle Interaktionen`
    },
    {
      id: 10,
      category: 'authorities',
      title: 'Kooperationsangebot an Aufsichtsbehörde',
      description: 'Proaktives Angebot der Zusammenarbeit mit Datenschutzbehörden',
      urgency: 'MITTEL',
      timeframe: '24-48 Stunden',
      icon: Flag,
      color: 'from-teal-500 to-cyan-500',
      recipient: 'Datenschutzbehörde',
      language: 'Deutsch',
      format: 'Offizieller Brief',
      requiredInfo: [
        'Bereitschaft zur Kooperation',
        'Verfügbare Ressourcen',
        'Ansprechpartner',
        'Vorgeschlagenes Vorgehen'
      ],
      template: `Betreff: Kooperationsangebot zur Aufklärung des Datenschutzvorfalls

Sehr geehrte Damen und Herren,

in Ergänzung zu unserer Meldung vom [DATUM] möchten wir Ihnen unsere vollumfängliche Kooperation anbieten.

UNSERE UNTERSTÜTZUNG:
• Vollständige Dokumentation aller Vorgänge
• Direkter Zugang zu technischen Experten
• Bereitstellung forensischer Daten
• Regelmäßige Status-Updates

ANSPRECHPARTNER:
Hauptkontakt: [NAME, FUNKTION, KONTAKT]
Technischer Lead: [NAME, FUNKTION, KONTAKT]
Rechtsvertretung: [NAME, KANZLEI, KONTAKT]

VORGESCHLAGENES VORGEHEN:
1. Wöchentliche Status-Calls
2. Gemeinsame Bewertung der Maßnahmen
3. Koordinierte Kommunikation

VERFÜGBARE RESSOURCEN:
Wir stellen [BESCHREIBUNG] zur Verfügung, um eine schnelle und vollständige Aufklärung zu ermöglichen.

Wir sind überzeugt, dass eine enge Zusammenarbeit im Interesse aller Beteiligten liegt.

Mit freundlichen Grüßen
[UNTERSCHRIFT]
[NAME UND FUNKTION]`
    },
    {
      id: 11,
      category: 'employees',
      title: 'All-Hands Meeting Kommunikation',
      description: 'Einladung und Agenda für unternehmensweite Information',
      urgency: 'MITTEL',
      timeframe: '2-4 Stunden',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      recipient: 'Alle Mitarbeiter',
      language: 'Deutsch',
      format: 'Meeting-Einladung',
      requiredInfo: [
        'Zeitpunkt und Ort des Meetings',
        'Agenda und Redner',
        'Technische Teilnahmehinweise',
        'Q&A Prozess'
      ],
      template: `Betreff: URGENT - All-Hands Meeting heute um [UHRZEIT]

Liebe Kolleginnen und Kollegen,

aufgrund des aktuellen Sicherheitsvorfalls findet heute um [UHRZEIT] ein unternehmensweites Meeting statt.

DETAILS:
📅 Datum: [DATUM]
⏰ Zeit: [UHRZEIT]
📍 Ort: [ORT/VIDEO-LINK]
⏱️ Dauer: ca. 30 Minuten

AGENDA:
1. Aktuelle Situation (CEO) - 10 Min
2. Technische Details (CISO) - 10 Min
3. Auswirkungen auf uns (HR) - 5 Min
4. Q&A Session - 5 Min

TEILNAHME:
• Vor Ort: [RÄUMLICHKEITEN]
• Remote: [VIDEO-LINK]
• Telefonisch: [NUMMER]

FRAGEN:
Senden Sie Ihre Fragen vorab an: [E-MAIL]

WICHTIG:
• Meeting wird aufgezeichnet
• Slides werden nachträglich geteilt
• Vertraulichkeit beachten

Vielen Dank
[MANAGEMENT TEAM]`
    },
    {
      id: 12,
      category: 'customers',
      title: 'Follow-up Kommunikation nach Vorfall',
      description: 'Nachfolgekommunikation mit Updates zum Status der Aufarbeitung',
      urgency: 'NIEDRIG',
      timeframe: '1-2 Wochen',
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-500',
      recipient: 'Betroffene Kunden',
      language: 'Deutsch',
      format: 'E-Mail',
      requiredInfo: [
        'Status der Aufarbeitung',
        'Implementierte Verbesserungen',
        'Nächste Schritte',
        'Kontaktmöglichkeiten'
      ],
      template: `Betreff: Update zur Aufarbeitung des Datenschutzvorfalls

Liebe Kundin, lieber Kunde,

vor [ZEITRAUM] haben wir Sie über einen Datenschutzvorfall informiert. Heute möchten wir Sie über den aktuellen Stand der Aufarbeitung informieren.

WAS WIR ERREICHT HABEN:
✅ [MASSNAHME 1 - ABGESCHLOSSEN]
✅ [MASSNAHME 2 - ABGESCHLOSSEN]
✅ [MASSNAHME 3 - ABGESCHLOSSEN]

LAUFENDE AKTIVITÄTEN:
🔄 [MASSNAHME 4 - IN BEARBEITUNG]
🔄 [MASSNAHME 5 - IN BEARBEITUNG]

ZUSÄTZLICHE VERBESSERUNGEN:
🔐 [VERBESSERUNG 1]
🔐 [VERBESSERUNG 2]
🔐 [VERBESSERUNG 3]

ZUSAMMENARBEIT MIT BEHÖRDEN:
[STATUS DER BEHÖRDLICHEN UNTERSUCHUNG]

IHRE SICHERHEIT:
Nach unserem aktuellen Kenntnisstand [BEWERTUNG DER AKTUELLEN RISIKEN].

BEI FRAGEN:
Sie erreichen uns weiterhin unter:
📧 [E-MAIL]
📞 [TELEFON]

Vielen Dank für Ihr Vertrauen und Ihre Geduld.

Mit freundlichen Grüßen
[UNTERNEHMEN]`
    }
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'KRITISCH': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse';
      case 'HOCH': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'MITTEL': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'NIEDRIG': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y }}
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-teal-500/10 backdrop-blur-sm rounded-full mb-8 border border-teal-500/20"
            >
              <MessageSquare className="h-5 w-5 text-teal-400" />
              <span className="text-sm font-semibold text-teal-300">Crisis Communication</span>
              <FileText className="h-5 w-5 text-cyan-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Krisen</span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Kommunikation
              </span>
              <br />
              <span className="text-white">Templates</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              <span className="font-semibold text-teal-300">Sofort einsetzbare Vorlagen</span> für professionelle 
              Kommunikation in Datenschutz- und Sicherheitskrisen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Alle Templates laden
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-teal-500/30 hover:border-teal-400 text-teal-300 hover:bg-teal-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <Edit3 className="mr-2 h-5 w-5" />
                Template anpassen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border-2",
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-teal-500 shadow-xl"
                    : "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-teal-500/50 hover:text-teal-300"
                )}
              >
                <span>{category.name}</span>
                <Badge className="bg-slate-700 text-slate-200 border-0 text-xs">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                  `bg-gradient-to-r ${template.color}`,
                  "opacity-0 group-hover:opacity-20"
                )} />
                
                <Card className="h-full border-2 border-slate-700/50 bg-slate-800/80 transition-all duration-500 group-hover:shadow-2xl overflow-hidden">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={cn(
                          "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                          template.color
                        )}
                      >
                        <template.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex flex-col gap-2 items-end">
                        <Badge className={getUrgencyColor(template.urgency)}>
                          {template.urgency}
                        </Badge>
                        <Badge className="bg-slate-700 text-slate-200 border-0 text-xs">
                          {template.timeframe}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-300 transition-colors">
                        {template.title}
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {template.description}
                      </p>
                      
                      {/* Template Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-slate-700/50 rounded-xl">
                        <div>
                          <div className="text-sm font-semibold text-slate-300 mb-1">Empfänger</div>
                          <div className="text-xs text-slate-400">{template.recipient}</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-300 mb-1">Format</div>
                          <div className="text-xs text-slate-400">{template.format}</div>
                        </div>
                      </div>

                      {/* Required Info */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3">Benötigte Informationen:</h4>
                        <div className="space-y-2">
                          {template.requiredInfo.slice(0, 3).map((info, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-400">{info}</span>
                            </div>
                          ))}
                          {template.requiredInfo.length > 3 && (
                            <div className="text-xs text-slate-500">
                              +{template.requiredInfo.length - 3} weitere...
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => setSelectedTemplate(selectedTemplate === template.id ? null : template.id)}
                        className={cn(
                          "flex-1 bg-gradient-to-r text-white border-0 font-semibold",
                          template.color
                        )}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        {selectedTemplate === template.id ? 'Schließen' : 'Template anzeigen'}
                      </Button>
                      <Button
                        onClick={() => copyToClipboard(template.template)}
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Template Content */}
                    {selectedTemplate === template.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-600"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-sm font-semibold text-white">Template Inhalt:</h4>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => copyToClipboard(template.template)}
                              size="sm"
                              variant="ghost"
                              className="text-slate-400 hover:text-white"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-slate-400 hover:text-white"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <pre className="text-xs text-slate-300 whitespace-pre-wrap font-mono bg-slate-800/50 p-4 rounded-lg max-h-96 overflow-y-auto">
                          {template.template}
                        </pre>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-teal-900/30 to-slate-800/50" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Sofort-Tools
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Werkzeuge für effektive Krisenkommunikation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Template Generator",
                description: "Automatische Anpassung der Templates an Ihren Vorfall",
                icon: Settings,
                action: "Generator starten",
                color: "from-teal-500 to-cyan-500"
              },
              {
                title: "Multi-Channel Publisher",
                description: "Gleichzeitige Veröffentlichung auf allen Kanälen",
                icon: Send,
                action: "Publisher öffnen",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Response Tracker",
                description: "Überwachung und Analyse der Kommunikationseffektivität",
                icon: TrendingUp,
                action: "Tracking starten",
                color: "from-blue-500 to-indigo-500"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={cn(
                      "inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg",
                      tool.color
                    )}>
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{tool.title}</h3>
                    <p className="text-slate-300 mb-6">{tool.description}</p>
                    
                    <Button className={cn(
                      "w-full bg-gradient-to-r text-white",
                      tool.color
                    )}>
                      {tool.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Link to="/wissen/krisenmanagement">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zu Krisenmanagement
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
              <Link to="/wissen/krisenmanagement/media-crisis">
                Media Crisis Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunicationTemplatesGuide;