import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Building2, Users, Briefcase, Target, TrendingUp, Zap,
  ChevronRight, ArrowRight, ArrowLeftRight, Eye, Filter,
  Layers, Map, GitBranch, UserCheck, Scale,
  Rocket, Globe, Search, Phone, CheckCircle2,
  CircleDot, UserPlus, Award, ListTodo, Calendar, AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ZoomLevel = 'overview' | 'tam' | 'icp' | 'funnel' | 'journey' | 'channels' | 'usecases';

const GrowthPlan2: React.FC = () => {
  const [activeZoom, setActiveZoom] = useState<ZoomLevel>('overview');
  const [selectedICP, setSelectedICP] = useState<number | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value / 1000000) + ' Mio.';
  };

  const tamData = {
    internal: {
      smeSimple: { count: 100000, price: 49, label: 'KMU (einfach)', color: '#e24e1b' },
      smeComplex: { count: 50000, price: 199, label: 'KMU (komplex)', color: '#ea580c' },
      enterprise: { count: 20000, price: 449, label: 'Enterprise', color: '#c2410c' },
    },
    external: {
      agencies: { count: 2000, price: 349, label: 'Agenturen/Kanzleien', color: '#474747' },
      freelancers: { count: 8000, price: 149, label: 'Freelancer DSBs', color: '#6b7280' },
    }
  };

  const calculateTAM = () => {
    const internalTAM = Object.values(tamData.internal).reduce(
      (sum, seg) => sum + seg.count * seg.price * 12, 0
    );
    const externalTAM = Object.values(tamData.external).reduce(
      (sum, seg) => sum + seg.count * seg.price * 12, 0
    );
    return { internal: internalTAM, external: externalTAM, total: internalTAM + externalTAM };
  };

  const tam = calculateTAM();

  const icpProfiles = [
    {
      id: 1,
      segment: 'Unternehmen',
      title: 'Starter',
      subtitle: 'Kleine Unternehmen',
      icon: Building2,
      color: 'from-[#474747] to-[#232323]',
      price: '€69/Mo',
      tam: tamData.internal.smeSimple.count,
      painPoints: ['Keine Zeit für DSGVO', 'Angst vor Bußgeldern', 'Kein internes Know-how'],
      channels: ['Google Ads', 'SEO/Content', 'IHK Events'],
      conversionRate: '3.5%',
      features: ['Alle DSGVO-Pflichtdokumente', 'MARS-AI Compliance Chat', 'DSGVO-Siegel VERIFIED'],
    },
    {
      id: 2,
      segment: 'Unternehmen',
      title: 'Professional',
      subtitle: 'Mit externem DSB',
      icon: Briefcase,
      color: 'from-[#e24e1b] to-[#ea580c]',
      price: '€199/Mo',
      tam: tamData.internal.smeComplex.count,
      painPoints: ['Komplexe Prozesse', 'Braucht DSB-Expertise', 'Audit-Anforderungen'],
      channels: ['LinkedIn', 'Direktvertrieb', 'Partner'],
      conversionRate: '8.2%',
      features: ['Externer Datenschutzbeauftragter', 'Lawyer-in-the-Loop', 'Halbjährliche Audits'],
      popular: true,
    },
    {
      id: 3,
      segment: 'Unternehmen',
      title: 'Enterprise',
      subtitle: 'Konzerne & kritische Daten',
      icon: Target,
      color: 'from-[#003366] to-[#1F1F24]',
      price: '€449/Mo',
      tam: tamData.internal.enterprise.count,
      painPoints: ['Multi-Standorte', '24/7 Verfügbarkeit', 'Höchste Compliance-Anforderungen'],
      channels: ['Direktvertrieb', 'Messen', 'Referrals'],
      conversionRate: '12.5%',
      features: ['24/7 DSB-Hotline', 'Multi-Standort Support', 'Quartalsweise Voll-Audits'],
    },
    {
      id: 4,
      segment: 'DSB',
      title: 'Intern',
      subtitle: 'Interne DSBs',
      icon: UserCheck,
      color: 'from-[#474747] to-[#374151]',
      price: '€49/Mo',
      tam: 15000,
      painPoints: ['Manuelle Dokumentation', 'Zeitfresser Routinen', 'Fehlende KI-Unterstützung'],
      channels: ['SEO/Content', 'LinkedIn', 'BvD Netzwerk'],
      conversionRate: '5.2%',
      features: ['1 Unternehmen', 'Automatisiertes VVT', '200 KI-Anfragen/Monat'],
    },
    {
      id: 5,
      segment: 'DSB',
      title: 'Professional',
      subtitle: 'Externe DSBs',
      icon: Users,
      color: 'from-[#e24e1b] to-[#ea580c]',
      price: '€149/Mo',
      tam: tamData.external.freelancers.count,
      painPoints: ['Mandanten-Verwaltung', 'Zeitfresser Routinen', 'Mandanten-Akquise'],
      channels: ['BvD Netzwerk', 'LinkedIn', 'Empfehlungen'],
      conversionRate: '12.5%',
      features: ['Bis zu 25 Mandanten', 'Multi-Client Dashboard', 'Kundenvermittlung'],
      popular: true,
    },
    {
      id: 6,
      segment: 'DSB',
      title: 'Agency',
      subtitle: 'DSB-Kanzleien',
      icon: Scale,
      color: 'from-[#003366] to-[#1F1F24]',
      price: '€349/Mo',
      tam: tamData.external.agencies.count,
      painPoints: ['Skalierung', 'Team-Koordination', 'White-Label Bedarf'],
      channels: ['Direktansprache', 'Konferenzen', 'Referrals'],
      conversionRate: '18.3%',
      features: ['Unbegrenzte Mandanten', 'Team-Verwaltung', 'Priorisierte Vermittlung'],
    },
  ];

  const [selectedFunnel, setSelectedFunnel] = useState<string>('seo');

  const salesFunnels = {
    seo: {
      name: 'Website / SEO',
      icon: Globe,
      color: '#e24e1b',
      shortDescription: 'Organischer Traffic über Content & SEO',
      targetICP: ['Unternehmen Starter', 'DSB Intern'],
      description: `Content-Marketing-Strategie zur organischen Kundengewinnung über Suchmaschinen.

**Strategie:**
- SEO-optimierte Landingpages für DSGVO-relevante Keywords (z.B. "Verarbeitungsverzeichnis erstellen", "externer Datenschutzbeauftragter Kosten")
- Wissen-Hub mit Guides, Checklisten und Vorlagen als Lead Magnets
- Blog-Content zu aktuellen Datenschutz-Themen und Urteilen
- Lokale SEO für regionale DSB-Suchen (z.B. "Datenschutzbeauftragter Konstanz")

**Content-Typen:**
- Branchen-spezifische DSGVO-Guides (Handwerk, E-Commerce, Gesundheitswesen)
- Interaktive Tools (DSGVO-Schnellcheck, Bußgeld-Rechner)
- Case Studies von erfolgreichen Implementierungen
- Video-Tutorials zur Software-Nutzung`,
      stages: [
        { id: 'visitors', label: 'Website Besucher', description: 'Organischer Traffic über Google/Bing' },
        { id: 'engaged', label: 'Engaged Visitors', description: 'Verweildauer >2 Min, mehrere Seiten' },
        { id: 'leads', label: 'Lead Magnet Downloads', description: 'Checklisten, Vorlagen, Guides' },
        { id: 'trial', label: 'Free Trial / Demo', description: 'Account-Erstellung oder Demo-Anfrage' },
        { id: 'customer', label: 'Zahlender Kunde', description: 'Conversion zu paid Plan' },
      ],
      metrics: { cac: 0, ltv: 0, conversions: 0 },
      status: 'active',
    },
    dsbOutreach: {
      name: 'DSB Outreach',
      icon: Users,
      color: '#474747',
      shortDescription: 'Direktansprache von Datenschutzkanzleien für Network & Lawyer-in-the-Loop',
      targetICP: ['DSB Professional', 'DSB Agency'],
      description: `Gezielte Akquise von externen Datenschutzbeauftragten für das MARSSTEIN Network als Lawyer-in-the-Loop Partner.

**Ziel:**
Aufbau eines Netzwerks von qualifizierten DSBs, die:
1. Ihre eigenen Mandanten über MARSSTEIN verwalten
2. Als "Lawyer-in-the-Loop" für Unternehmen-Kunden verfügbar sind
3. Neue Mandanten über MARSSTEIN vermittelt bekommen

**Outreach-Strategie:**
- Recherche über BvD-Verzeichnis, XING, LinkedIn
- Personalisierte Ansprache mit Value Proposition
- Fokus auf Pain Points: Zeitersparnis, Mandanten-Akquise, Skalierung
- Demo-Calls mit Live-Walkthrough der Multi-Mandanten-Features

**Partnerschafts-Modell:**
- Kostenlose Nutzung für erste 5 Mandanten
- Revenue Share bei vermittelten Unternehmen
- Priorisierte Listung im DSB-Verzeichnis
- Co-Marketing-Möglichkeiten`,
      stages: [
        { id: 'identified', label: 'DSBs identifiziert', description: 'Recherche via BvD, LinkedIn, Kammern' },
        { id: 'contacted', label: 'Erstansprache', description: 'Personalisierte E-Mail/LinkedIn Message' },
        { id: 'interested', label: 'Interesse bekundet', description: 'Positive Antwort, weitere Infos angefragt' },
        { id: 'demo', label: 'Demo / Call', description: 'Persönliches Gespräch + Live-Demo' },
        { id: 'partner', label: 'Network Partner', description: 'Vertrag unterzeichnet, Onboarding' },
      ],
      metrics: { cac: 0, ltv: 0, conversions: 0 },
      status: 'active',
    },
    cnMarkt: {
      name: 'CN Markt',
      icon: Globe,
      color: '#003366',
      shortDescription: 'China-DSGVO Compliance für Amazon Sellers, TikTok Shops & Joint Ventures',
      targetICP: ['CN Amazon Sellers', 'CN TikTok Shops', 'Joint Ventures'],
      description: `Spezialisierter Vertriebskanal für chinesische Unternehmen, die EU-Datenschutzanforderungen erfüllen müssen.

**Zielgruppen:**
- Amazon FBA Sellers aus China mit EU-Kunden
- TikTok Shop Betreiber mit EU-Präsenz
- Chinesische Unternehmen mit EU Joint Ventures
- Tech-Companies mit EU-Datenverarbeitung

**Unique Value Proposition:**
- EU-Vertreter nach Art. 27 DSGVO
- Zweisprachige Dokumentation (DE/EN + CN)
- Verständnis für CN-Geschäftskultur
- Compliance-Nachweis für EU-Marktplätze

**Kanäle:**
- WeChat Official Account mit Content
- Partnerschaften mit CN-Amazon-Agenturen
- Präsenz auf CN-E-Commerce-Foren
- Kooperationen mit CN-Anwaltskanzleien

**Pricing:**
- Premium-Aufschlag für mehrsprachigen Support
- Pakete speziell für E-Commerce-Compliance`,
      stages: [
        { id: 'awareness', label: 'CN Awareness', description: 'WeChat, CN-Foren, Partner-Referrals' },
        { id: 'interest', label: 'Landing Page (CN)', description: 'Chinesischsprachige Landingpages' },
        { id: 'leads', label: 'WeChat / Anfrage', description: 'Kontaktaufnahme via WeChat oder E-Mail' },
        { id: 'qualified', label: 'Qualifizierung', description: 'Bedarfsanalyse, Compliance-Check' },
        { id: 'customer', label: 'Kunde', description: 'Vertragsabschluss, Onboarding' },
      ],
      metrics: { cac: 0, ltv: 0, conversions: 0 },
      status: 'planned',
    },
    startup: {
      name: 'StartUp',
      icon: Rocket,
      color: '#39B37B',
      shortDescription: 'Startup-Ökosystem: Accelerators, VCs, Startup-Events',
      targetICP: ['Unternehmen Starter', 'Unternehmen Professional'],
      description: `Zugang zum Startup-Ökosystem für frühe Kundengewinnung und Netzwerkaufbau.

**Strategie:**
- Präsenz bei lokalen Startup-Events (Bodensee, Stuttgart, München)
- Partnerschaften mit Accelerators und Inkubatoren
- Startup-spezifische Pricing-Tiers
- "Compliance-as-a-Service" für schnell wachsende Startups

**Aktivitäten:**
- Pitches bei Startup-Events
- Workshops "DSGVO für Startups"
- Office Hours bei Co-Working Spaces
- Startup-Newsletter-Kooperationen

**Value Proposition für Startups:**
- Schnelles Setup (<30 Min)
- Skalierbare Preise mit dem Wachstum
- Investor-ready Compliance-Dokumentation
- Keine juristischen Vorkenntnisse nötig

**Partnerschaften:**
- Campus Founders (Heilbronn)
- Startup BW
- Cyber Valley (Tübingen)
- lokale IHKs`,
      stages: [
        { id: 'events', label: 'Event Kontakte', description: 'Pitch-Events, Meetups, Workshops' },
        { id: 'followup', label: 'Follow-up', description: 'Persönliche Nachverfolgung nach Event' },
        { id: 'demo', label: 'Demo / Beratung', description: 'Individuelle Compliance-Beratung' },
        { id: 'trial', label: 'Trial', description: 'Kostenlose Testphase' },
        { id: 'customer', label: 'Kunde', description: 'Startup-Paket gebucht' },
      ],
      metrics: { cac: 0, ltv: 0, conversions: 0 },
      status: 'active',
    },
    sea: {
      name: 'SEA (Google Ads)',
      icon: Search,
      color: '#ea580c',
      shortDescription: 'Paid Search Ads für High-Intent Keywords',
      targetICP: ['Unternehmen Professional', 'Unternehmen Enterprise'],
      description: `Performance-Marketing über Google Ads für transaktionale DSGVO-Keywords.

**Keyword-Strategie:**
- High-Intent: "externer Datenschutzbeauftragter beauftragen", "DSGVO Software kaufen"
- Problem-Aware: "DSGVO Bußgeld vermeiden", "Datenschutz Audit vorbereiten"
- Competitor: Branded Keywords der Wettbewerber
- Long-Tail: Branchenspezifische Compliance-Anfragen

**Kampagnen-Struktur:**
- Search Campaigns für Bottom-Funnel Keywords
- Display Remarketing für Website-Besucher
- YouTube Ads für Awareness
- Performance Max für Lead Generation

**Landing Pages:**
- Dedizierte LPs pro Keyword-Cluster
- A/B Testing von Headlines und CTAs
- Conversion-optimiert (Demo-Anfrage, Trial)

**Budget-Allokation:**
- 60% Search (High-Intent)
- 25% Remarketing
- 15% Discovery/YouTube`,
      stages: [
        { id: 'impressions', label: 'Ad Impressions', description: 'Sichtbarkeit in Google Search' },
        { id: 'clicks', label: 'Clicks', description: 'Traffic auf Landing Pages' },
        { id: 'leads', label: 'Lead / Demo', description: 'Formular-Submissions' },
        { id: 'qualified', label: 'Qualifiziert', description: 'Sales-qualifizierte Leads' },
        { id: 'customer', label: 'Kunde', description: 'Conversion zu paid' },
      ],
      metrics: { cac: 0, ltv: 0, conversions: 0 },
      status: 'planned',
    },
    linkedin: {
      name: 'LinkedIn',
      icon: Users,
      color: '#0077B5',
      shortDescription: 'Automatisierte B2B-Outreach-Kampagnen via Dripify',
      targetICP: ['DSB Professional', 'DSB Agency'],
      description: `Automatisierte LinkedIn-Outreach-Kampagnen mit Dripify zur Akquise von Datenschutzbeauftragten.

**Tool: Dripify**
- Automatisierte Connection Requests
- Personalisierte Nachrichtensequenzen
- Follow-up Automation
- Analytics & Tracking

**Zielgruppe:**
- Externe Datenschutzbeauftragte
- Datenschutz-Consultants
- Rechtsanwälte mit DSB-Spezialisierung
- Compliance-Manager in Unternehmen

**Kampagnen-Sequenz:**
1. **Connection Request** - Personalisiert mit Bezug auf Profil/Tätigkeit
2. **Willkommensnachricht** (Tag 1) - Kurze Vorstellung, kein Hard-Sell
3. **Value Message** (Tag 3) - Pain Points ansprechen, Lösung andeuten
4. **Case Study/Social Proof** (Tag 7) - Erfolgsgeschichte teilen
5. **Soft CTA** (Tag 10) - Einladung zu unverbindlichem Gespräch

**Personalisierungs-Variablen:**
- Name, Firma, Position
- Anzahl Mandanten (wenn sichtbar)
- Regionale Bezüge
- Gemeinsame Connections

**Content-Strategie parallel:**
- Thought Leadership Posts
- DSGVO-News und Updates
- Tool-Tipps für DSBs
- Engagement in DSB-Gruppen`,
      stages: [
        { id: 'reach', label: 'Profile Views / Reach', description: 'Sichtbarkeit durch Content & Outreach' },
        { id: 'connections', label: 'Connection Requests', description: 'Automatisierte Anfragen via Dripify' },
        { id: 'accepted', label: 'Accepted', description: 'Akzeptierte Connections' },
        { id: 'conversations', label: 'Conversations', description: 'Aktive Nachrichtenverläufe' },
        { id: 'calls', label: 'Discovery Calls', description: 'Gebuchte Gespräche' },
        { id: 'partner', label: 'Partner / Kunde', description: 'Conversion zu Network Partner' },
      ],
      metrics: { cac: 0, ltv: 0, conversions: 0 },
      status: 'active',
    },
  };

  const [selectedJourneyPhase, setSelectedJourneyPhase] = useState<number>(0);
  const [selectedJourneyICP, setSelectedJourneyICP] = useState<string>('starter');

  const icpJourneys: Record<string, {
    name: string;
    segment: string;
    description: string;
    icon: typeof Building2;
    color: string;
    price: string;
    primaryFunnels: string[];
    steps: Array<{
      phase: string;
      subtitle: string;
      icon: typeof Zap;
      color: string;
      emotion: string;
      goal: string;
      touchpoints: Array<{ channel: string; action: string }>;
      painPoints: string[];
      actions: string[];
    }>;
  }> = {
    // === UNTERNEHMEN ===
    starter: {
      name: 'Starter',
      segment: 'Unternehmen',
      description: 'Kleine Unternehmen ohne DSB-Erfahrung, die schnelle DSGVO-Compliance brauchen',
      icon: Building2,
      color: '#474747',
      price: '€69/Mo',
      primaryFunnels: ['Website/SEO', 'Google Ads', 'IHK Events'],
      steps: [
        {
          phase: 'Trigger',
          subtitle: 'Panik-Moment',
          icon: Zap,
          color: '#e24e1b',
          emotion: 'Angst & Überforderung',
          goal: 'Schnell verstehen was zu tun ist',
          touchpoints: [
            { channel: 'Google Search', action: '"DSGVO Bußgeld", "Datenschutz Pflichten kleine Firma"' },
            { channel: 'Behörde', action: 'Erste Anfrage einer Aufsichtsbehörde' },
            { channel: 'Kunde', action: 'Auftraggeber fordert Datenschutz-Nachweis' },
          ],
          painPoints: ['Keine Ahnung wo anfangen', 'Angst vor Strafen bis €20 Mio', 'Kein Budget für Anwalt'],
          actions: ['SEO: "DSGVO für kleine Unternehmen"', 'Google Ads auf Panik-Keywords', 'Bußgeld-Rechner Tool'],
        },
        {
          phase: 'Research',
          subtitle: 'DIY-Suche',
          icon: Search,
          color: '#ea580c',
          emotion: 'Hoffnung auf einfache Lösung',
          goal: 'Günstige Selbstmach-Lösung finden',
          touchpoints: [
            { channel: 'Blog/Guides', action: 'DSGVO-Checklisten, Branchen-Guides lesen' },
            { channel: 'YouTube', action: 'Erklärvideos zu DSGVO-Basics' },
            { channel: 'Vergleich', action: 'Software vs. Vorlagen vs. Berater' },
          ],
          painPoints: ['Zu kompliziert', 'Versteckte Kosten', 'Weiß nicht ob es reicht'],
          actions: ['Content Hub mit Checklisten', 'YouTube-Präsenz', 'Transparente Preisseite'],
        },
        {
          phase: 'Trial',
          subtitle: 'Selbst ausprobieren',
          icon: Eye,
          color: '#f97316',
          emotion: 'Vorsichtiger Optimismus',
          goal: 'Testen ob es wirklich so einfach ist',
          touchpoints: [
            { channel: 'Free Trial', action: 'Account erstellen, erste Dokumente' },
            { channel: 'Onboarding', action: 'Guided Setup durchlaufen' },
            { channel: 'KI-Chat', action: 'Fragen an MARS-AI stellen' },
          ],
          painPoints: ['Hoffentlich kein Abo-Fallen', 'Brauche schnelle Ergebnisse', 'Muss Chef überzeugen'],
          actions: ['Frictionless Trial Signup', '15-Min Onboarding', 'Quick Win: Erstes Dokument'],
        },
        {
          phase: 'Convert',
          subtitle: 'Starter-Paket buchen',
          icon: CheckCircle2,
          color: '#39B37B',
          emotion: 'Erleichterung',
          goal: 'Compliance abhaken',
          touchpoints: [
            { channel: 'Checkout', action: 'Starter €69/Mo wählen' },
            { channel: 'Setup', action: 'VVT, Datenschutzerklärung, TOMs erstellen' },
            { channel: 'Siegel', action: 'DSGVO-Verified Badge erhalten' },
          ],
          painPoints: ['War es das schon?', 'Ist das rechtssicher?', 'Was wenn Fragen kommen?'],
          actions: ['Simple Checkout', 'Compliance-Checkliste', 'Badge für Website'],
        },
        {
          phase: 'Expand',
          subtitle: 'Brauche doch mehr',
          icon: TrendingUp,
          color: '#22c55e',
          emotion: 'Wachsendes Vertrauen',
          goal: 'Professionellere Absicherung',
          touchpoints: [
            { channel: 'In-App', action: 'Hinweis auf Professional-Features' },
            { channel: 'Email', action: 'Case Study: "Warum Firma X upgradete"' },
            { channel: 'Support', action: 'Komplexere Frage → DSB empfohlen' },
          ],
          painPoints: ['Audit steht an', 'Komplexere Prozesse', 'Brauche echten Experten'],
          actions: ['Smart Upsell Prompts', 'Upgrade-Angebote', 'DSB-Matching'],
        },
      ],
    },
    professional: {
      name: 'Professional',
      segment: 'Unternehmen',
      description: 'Mittelständler mit komplexen Prozessen, die einen externen DSB brauchen',
      icon: Briefcase,
      color: '#e24e1b',
      price: '€199/Mo',
      primaryFunnels: ['LinkedIn', 'Direktvertrieb', 'Partner/DSB'],
      steps: [
        {
          phase: 'Trigger',
          subtitle: 'DSB-Pflicht erkannt',
          icon: Zap,
          color: '#e24e1b',
          emotion: 'Professionalität & Druck',
          goal: 'Qualifizierten DSB finden',
          touchpoints: [
            { channel: 'LinkedIn', action: 'Content zu DSB-Pflicht, Audits' },
            { channel: 'Netzwerk', action: 'Empfehlung von Geschäftspartner' },
            { channel: 'Berater', action: 'Steuerberater/Anwalt empfiehlt DSB' },
          ],
          painPoints: ['DSB-Pflicht ab 20 MA', 'Audit steht bevor', 'Interne Ressourcen fehlen'],
          actions: ['LinkedIn B2B Content', 'Partner-Programm Steuerberater', 'DSB-Pflicht Rechner'],
        },
        {
          phase: 'Evaluate',
          subtitle: 'DSB-Optionen prüfen',
          icon: Eye,
          color: '#ea580c',
          emotion: 'Kritische Bewertung',
          goal: 'Besten DSB-Partner finden',
          touchpoints: [
            { channel: 'Demo', action: 'Live-Demo mit DSB-Matching Erklärung' },
            { channel: 'Vergleich', action: 'Kanzlei vs. Freelancer vs. MARSSTEIN' },
            { channel: 'Referenzen', action: 'Erfolgsgeschichten ähnlicher Firmen' },
          ],
          painPoints: ['Kanzleien zu teuer', 'Freelancer unsicher', 'Brauche Zuverlässigkeit'],
          actions: ['Personalisierte Demo', 'ROI-Kalkulator', 'Branchen-Referenzen'],
        },
        {
          phase: 'Onboard',
          subtitle: 'DSB-Zuweisung',
          icon: UserPlus,
          color: '#f97316',
          emotion: 'Erwartung & Vertrauen',
          goal: 'Schneller Start mit zugewiesenem DSB',
          touchpoints: [
            { channel: 'Matching', action: 'Passenden DSB aus Network zuweisen' },
            { channel: 'Kickoff', action: 'Erstgespräch mit persönlichem DSB' },
            { channel: 'Audit', action: 'Initiales Compliance-Audit' },
          ],
          painPoints: ['Hoffentlich kompetent', 'Brauche schnelle Verfügbarkeit', 'Muss Chef überzeugen'],
          actions: ['DSB-Profil vorab zeigen', 'Kickoff-Call planen', 'Audit-Report erstellen'],
        },
        {
          phase: 'Operate',
          subtitle: 'Laufende Betreuung',
          icon: CheckCircle2,
          color: '#39B37B',
          emotion: 'Sicherheit & Routine',
          goal: 'Kontinuierliche Compliance',
          touchpoints: [
            { channel: 'Dashboard', action: 'Compliance-Status überwachen' },
            { channel: 'DSB-Hotline', action: 'Bei Fragen DSB kontaktieren' },
            { channel: 'Audits', action: 'Halbjährliche Compliance-Checks' },
          ],
          painPoints: ['Läuft alles?', 'Neue Anforderungen?', 'Behördenanfrage'],
          actions: ['Status-Dashboard', 'Proaktive DSB-Updates', 'Audit-Erinnerungen'],
        },
        {
          phase: 'Advocate',
          subtitle: 'Weiterempfehlung',
          icon: Award,
          color: '#10b981',
          emotion: 'Zufriedenheit & Stolz',
          goal: 'Anderen Unternehmen helfen',
          touchpoints: [
            { channel: 'Referral', action: 'Geschäftspartner empfehlen' },
            { channel: 'Review', action: 'Google/ProvenExpert Bewertung' },
            { channel: 'Case Study', action: 'Erfolgsgeschichte teilen' },
          ],
          painPoints: ['Will Anerkennung', 'Partner fragen nach Lösung'],
          actions: ['Referral-Bonus €200', 'Review-Request', 'Case Study Interview'],
        },
      ],
    },
    enterprise: {
      name: 'Enterprise',
      segment: 'Unternehmen',
      description: 'Konzerne mit Multi-Standorten und höchsten Compliance-Anforderungen',
      icon: Target,
      color: '#003366',
      price: '€449/Mo',
      primaryFunnels: ['Direktvertrieb', 'Messen', 'Referrals'],
      steps: [
        {
          phase: 'Awareness',
          subtitle: 'Vendor-Recherche',
          icon: Search,
          color: '#003366',
          emotion: 'Strategische Evaluation',
          goal: 'Enterprise-fähige Lösung finden',
          touchpoints: [
            { channel: 'Messe', action: 'it-sa, GDPR Summit, Compliance-Konferenzen' },
            { channel: 'Referral', action: 'Empfehlung von anderem Konzern' },
            { channel: 'RFP', action: 'Ausschreibung für DSB-Lösung' },
          ],
          painPoints: ['Multi-Standort Komplexität', 'ISO 27001 Anforderungen', 'Konzern-Policies'],
          actions: ['Messe-Präsenz', 'Enterprise Case Studies', 'RFP-Antwort-Team'],
        },
        {
          phase: 'Qualify',
          subtitle: 'Proof of Concept',
          icon: Eye,
          color: '#1e3a5f',
          emotion: 'Due Diligence',
          goal: 'Technische und rechtliche Prüfung',
          touchpoints: [
            { channel: 'PoC', action: 'Pilot mit einer Business Unit' },
            { channel: 'Security Review', action: 'IT-Sicherheitsprüfung' },
            { channel: 'Legal Review', action: 'Vertragsverhandlung mit Legal' },
          ],
          painPoints: ['Muss IT-Security bestehen', 'Legal-Freigabe nötig', 'Budget-Genehmigung'],
          actions: ['PoC-Umgebung', 'SOC2/ISO Zertifikate', 'Enterprise-Verträge'],
        },
        {
          phase: 'Contract',
          subtitle: 'Enterprise-Vertrag',
          icon: CheckCircle2,
          color: '#39B37B',
          emotion: 'Commitment',
          goal: 'Langfristige Partnerschaft',
          touchpoints: [
            { channel: 'Verhandlung', action: 'SLA, Preise, Laufzeit' },
            { channel: 'Onboarding', action: 'Dedicated Account Manager' },
            { channel: 'Rollout', action: 'Multi-Standort Deployment' },
          ],
          painPoints: ['SLA-Garantien', '24/7 Support', 'Skalierbarkeit'],
          actions: ['Enterprise SLAs', 'Dedicated AM', 'Rollout-Planung'],
        },
        {
          phase: 'Operate',
          subtitle: 'Konzern-Betrieb',
          icon: Layers,
          color: '#22c55e',
          emotion: 'Routine & Vertrauen',
          goal: 'Reibungsloser Multi-Standort Betrieb',
          touchpoints: [
            { channel: 'Dashboard', action: 'Konzern-weite Compliance-Übersicht' },
            { channel: 'QBR', action: 'Quartalsweise Business Reviews' },
            { channel: 'Voll-Audits', action: 'Quartalsweise Compliance-Audits' },
          ],
          painPoints: ['Reporting für Vorstand', 'Audit-Vorbereitung', 'Neue Standorte'],
          actions: ['Executive Dashboard', 'QBR-Meetings', 'Audit-Support'],
        },
        {
          phase: 'Expand',
          subtitle: 'Konzern-Rollout',
          icon: TrendingUp,
          color: '#10b981',
          emotion: 'Partnerschaft',
          goal: 'Weitere Töchter/Standorte',
          touchpoints: [
            { channel: 'Expansion', action: 'Weitere Business Units onboarden' },
            { channel: 'Referral', action: 'Andere Konzerne empfehlen' },
            { channel: 'Co-Marketing', action: 'Gemeinsame Pressemitteilung' },
          ],
          painPoints: ['Konzern-weiter Standard', 'Weitere Töchter', 'Board-Reporting'],
          actions: ['Expansion Pricing', 'Konzern-Referral', 'PR-Zusammenarbeit'],
        },
      ],
    },
    // === DATENSCHUTZBEAUFTRAGTE ===
    dsbIntern: {
      name: 'Intern',
      segment: 'DSB',
      description: 'Interne DSBs in Unternehmen, die ein effizientes Tool suchen',
      icon: UserCheck,
      color: '#474747',
      price: '€49/Mo',
      primaryFunnels: ['Website/SEO', 'LinkedIn', 'BvD Netzwerk'],
      steps: [
        {
          phase: 'Discovery',
          subtitle: 'Tool-Suche',
          icon: Search,
          color: '#474747',
          emotion: 'Frustration mit Status Quo',
          goal: 'Effizienteres Arbeiten',
          touchpoints: [
            { channel: 'Google', action: '"DSB Software", "VVT Tool", "DSGVO Dokumentation"' },
            { channel: 'LinkedIn', action: 'Content für interne DSBs' },
            { channel: 'BvD', action: 'Empfehlung von Kollegen im Verband' },
          ],
          painPoints: ['Excel ist nervig', 'Zu viel manuelle Arbeit', 'Keine KI-Unterstützung'],
          actions: ['SEO für DSB-Keywords', 'LinkedIn Content', 'BvD-Partnerschaft'],
        },
        {
          phase: 'Evaluate',
          subtitle: 'Tool-Test',
          icon: Eye,
          color: '#6b7280',
          emotion: 'Kritische Prüfung',
          goal: 'Prüfen ob es besser ist als Excel',
          touchpoints: [
            { channel: 'Trial', action: 'Kostenlosen Test starten' },
            { channel: 'Features', action: 'VVT, TOMs, KI-Chat testen' },
            { channel: 'Vergleich', action: 'Mit anderen Tools vergleichen' },
          ],
          painPoints: ['Lernkurve', 'Muss Chef überzeugen', 'Datenmigration'],
          actions: ['Einfacher Trial', 'Feature-Tour', 'Vergleichs-Content'],
        },
        {
          phase: 'Convert',
          subtitle: 'Intern-Paket',
          icon: CheckCircle2,
          color: '#39B37B',
          emotion: 'Erleichterung',
          goal: 'Endlich effizient arbeiten',
          touchpoints: [
            { channel: 'Checkout', action: 'Intern €49/Mo buchen' },
            { channel: 'Setup', action: 'Bestehendes VVT importieren' },
            { channel: 'KI', action: 'MARS-AI für Fragen nutzen' },
          ],
          painPoints: ['Budget-Freigabe', 'Migration', 'Kollegen-Akzeptanz'],
          actions: ['Simple Preise', 'Import-Hilfe', 'Team-Einladung'],
        },
        {
          phase: 'Optimize',
          subtitle: 'Workflow verbessern',
          icon: TrendingUp,
          color: '#22c55e',
          emotion: 'Produktivität',
          goal: 'Zeit sparen, mehr automatisieren',
          touchpoints: [
            { channel: 'Features', action: 'Automatisierungen entdecken' },
            { channel: 'KI', action: 'Mehr KI-Anfragen nutzen' },
            { channel: 'Templates', action: 'Vorlagen für Prozesse' },
          ],
          painPoints: ['Will noch mehr Automation', 'Brauche mehr KI-Anfragen'],
          actions: ['Feature-Tipps', 'KI-Limit Upgrade', 'Best Practices'],
        },
        {
          phase: 'Advocate',
          subtitle: 'Weiterempfehlen',
          icon: Award,
          color: '#10b981',
          emotion: 'Zufriedenheit',
          goal: 'Kollegen helfen',
          touchpoints: [
            { channel: 'BvD', action: 'Im Verband empfehlen' },
            { channel: 'LinkedIn', action: 'Erfahrungsbericht posten' },
            { channel: 'Kollegen', action: 'Anderen internen DSBs empfehlen' },
          ],
          painPoints: ['Will helfen', 'Austausch mit Kollegen'],
          actions: ['Referral-Programm', 'Community', 'User-Testimonials'],
        },
      ],
    },
    dsbProfessional: {
      name: 'Professional',
      segment: 'DSB',
      description: 'Externe DSBs (Freelancer) mit mehreren Mandanten',
      icon: Users,
      color: '#e24e1b',
      price: '€149/Mo',
      primaryFunnels: ['LinkedIn (Dripify)', 'BvD Netzwerk', 'Empfehlungen'],
      steps: [
        {
          phase: 'Outreach',
          subtitle: 'Dripify-Kampagne',
          icon: Users,
          color: '#0077B5',
          emotion: 'Neugier',
          goal: 'Verstehen was MARSSTEIN bietet',
          touchpoints: [
            { channel: 'LinkedIn', action: 'Dripify Connection Request + Sequenz' },
            { channel: 'Content', action: 'Posts zu DSB-Effizienz sehen' },
            { channel: 'DM', action: 'Personalisierte Nachricht erhalten' },
          ],
          painPoints: ['Zu viele Cold Messages', 'Skeptisch gegenüber Tools', 'Zeit ist knapp'],
          actions: ['Personalisierte Dripify-Sequenz', 'Value-first Content', 'Soft CTA'],
        },
        {
          phase: 'Interest',
          subtitle: 'Interesse geweckt',
          icon: Eye,
          color: '#474747',
          emotion: 'Offenheit',
          goal: 'Mehr erfahren',
          touchpoints: [
            { channel: 'Website', action: 'DSB-Landingpage besuchen' },
            { channel: 'Webinar', action: 'DSB-Effizienz Webinar ansehen' },
            { channel: 'Peer', action: 'Anderen DSB nach Erfahrung fragen' },
          ],
          painPoints: ['Ist es wirklich besser?', 'Mandanten-Migration', 'Kosten vs. Nutzen'],
          actions: ['DSB-spezifische LP', 'Webinar-Serie', 'Testimonials'],
        },
        {
          phase: 'Demo',
          subtitle: 'Multi-Mandanten Demo',
          icon: Eye,
          color: '#ea580c',
          emotion: 'Kritische Bewertung',
          goal: 'Features für Mandanten-Verwaltung sehen',
          touchpoints: [
            { channel: 'Demo-Call', action: 'Persönliche Demo buchen' },
            { channel: 'Features', action: 'Multi-Client Dashboard sehen' },
            { channel: 'Pricing', action: 'Mandanten-basierte Preise verstehen' },
          ],
          painPoints: ['Passt es für meine Mandanten?', 'Kann ich migrieren?', 'Support bei Fragen?'],
          actions: ['DSB-Demo Script', 'Migration-Zusage', 'DSB-Support Hotline'],
        },
        {
          phase: 'Convert',
          subtitle: 'Professional-Paket',
          icon: CheckCircle2,
          color: '#39B37B',
          emotion: 'Commitment',
          goal: 'Mandanten auf Plattform bringen',
          touchpoints: [
            { channel: 'Signup', action: 'Professional €149/Mo buchen' },
            { channel: 'Onboarding', action: 'Erste 5 Mandanten anlegen' },
            { channel: 'Migration', action: 'Bestehende Daten importieren' },
          ],
          painPoints: ['Migration-Aufwand', 'Mandanten informieren', 'Lernkurve'],
          actions: ['White-Glove Onboarding', 'Migrations-Support', 'Mandanten-Templates'],
        },
        {
          phase: 'Scale',
          subtitle: 'Mandanten skalieren',
          icon: TrendingUp,
          color: '#22c55e',
          emotion: 'Ambition',
          goal: 'Mehr Mandanten, mehr Effizienz',
          touchpoints: [
            { channel: 'Vermittlung', action: 'Neue Mandanten über MARSSTEIN' },
            { channel: 'Upgrade', action: 'Bei >25 Mandanten auf Agency' },
            { channel: 'Network', action: 'Lawyer-in-the-Loop Aufträge' },
          ],
          painPoints: ['Brauche mehr Mandanten', 'Limit erreicht', 'Will wachsen'],
          actions: ['Mandanten-Vermittlung', 'Upgrade-Angebot', 'Network-Einladung'],
        },
      ],
    },
    dsbAgency: {
      name: 'Agency',
      segment: 'DSB',
      description: 'DSB-Kanzleien mit Teams und unbegrenzten Mandanten',
      icon: Scale,
      color: '#003366',
      price: '€349/Mo',
      primaryFunnels: ['Direktansprache', 'Konferenzen', 'Referrals'],
      steps: [
        {
          phase: 'Identify',
          subtitle: 'Kanzlei identifiziert',
          icon: Search,
          color: '#003366',
          emotion: 'Geschäftlich',
          goal: 'Effizienz-Tool für Kanzlei evaluieren',
          touchpoints: [
            { channel: 'Direkt', action: 'Persönliche Ansprache durch Sales' },
            { channel: 'Konferenz', action: 'BvD-Tagung, DSB-Konferenzen' },
            { channel: 'Referral', action: 'Empfehlung von anderer Kanzlei' },
          ],
          painPoints: ['Team-Koordination', 'Skalierung schwierig', 'White-Label Bedarf'],
          actions: ['Outbound Sales', 'Konferenz-Präsenz', 'Kanzlei-Referral'],
        },
        {
          phase: 'Qualify',
          subtitle: 'Bedarfsanalyse',
          icon: Eye,
          color: '#1e3a5f',
          emotion: 'Strategische Prüfung',
          goal: 'Passt MARSSTEIN zur Kanzlei?',
          touchpoints: [
            { channel: 'Discovery Call', action: 'Bedarfsanalyse mit Sales' },
            { channel: 'Demo', action: 'Team-Features, White-Label Demo' },
            { channel: 'Referenz', action: 'Gespräch mit anderer Kanzlei' },
          ],
          painPoints: ['Muss für alle Mitarbeiter passen', 'Integration in Prozesse', 'ROI nachweisen'],
          actions: ['Discovery Framework', 'Kanzlei-Demo', 'Referenz-Calls'],
        },
        {
          phase: 'Pilot',
          subtitle: 'Kanzlei-Pilot',
          icon: Rocket,
          color: '#ea580c',
          emotion: 'Testen',
          goal: 'Mit Teil des Teams testen',
          touchpoints: [
            { channel: 'Pilot', action: 'Pilot mit 2-3 Mitarbeitern' },
            { channel: 'Training', action: 'Team-Schulung' },
            { channel: 'Feedback', action: 'Iteratives Feedback' },
          ],
          painPoints: ['Team-Akzeptanz', 'Workflow-Anpassung', 'Change Management'],
          actions: ['Pilot-Programm', 'Team-Training', 'Feedback-Loops'],
        },
        {
          phase: 'Contract',
          subtitle: 'Agency-Vertrag',
          icon: CheckCircle2,
          color: '#39B37B',
          emotion: 'Partnerschaft',
          goal: 'Langfristige Zusammenarbeit',
          touchpoints: [
            { channel: 'Vertrag', action: 'Agency €349/Mo + Konditionen' },
            { channel: 'Onboarding', action: 'Kanzlei-weites Rollout' },
            { channel: 'AM', action: 'Dedicated Account Manager' },
          ],
          painPoints: ['Vertragsbedingungen', 'Rollout-Planung', 'Support-Level'],
          actions: ['Flexible Verträge', 'Rollout-Support', 'Dedicated AM'],
        },
        {
          phase: 'Partner',
          subtitle: 'Strategic Partner',
          icon: Award,
          color: '#10b981',
          emotion: 'Partnerschaft',
          goal: 'Preferred Partner Status',
          touchpoints: [
            { channel: 'Vermittlung', action: 'Priorisierte Mandanten-Vermittlung' },
            { channel: 'Co-Marketing', action: 'Gemeinsame Webinare, Events' },
            { channel: 'Referral', action: 'Andere Kanzleien empfehlen' },
          ],
          painPoints: ['Mehr Mandanten', 'Sichtbarkeit', 'Exklusivität'],
          actions: ['Partner-Programm', 'Co-Marketing', 'Referral-Bonus'],
        },
      ],
    },
  };

  const currentJourney = icpJourneys[selectedJourneyICP];
  const journeySteps = currentJourney.steps;

  const channels = [
    { name: 'SEO/Content', icon: Globe, share: 35, cac: 120, ltv: 2400 },
    { name: 'Google Ads', icon: Search, share: 25, cac: 280, ltv: 2400 },
    { name: 'LinkedIn', icon: Users, share: 15, cac: 350, ltv: 3200 },
    { name: 'Partner/DSB', icon: ArrowLeftRight, share: 15, cac: 80, ltv: 4800 },
    { name: 'Direktvertrieb', icon: Phone, share: 10, cac: 450, ltv: 5400 },
  ];

  const zoomNavItems = [
    { id: 'overview', label: 'Übersicht', icon: Layers },
    { id: 'tam', label: 'TAM/SAM/SOM', icon: Target },
    { id: 'icp', label: 'ICP Segmente', icon: Users },
    { id: 'usecases', label: 'Use Cases', icon: Rocket },
    { id: 'funnel', label: 'Sales Funnel', icon: Filter },
    { id: 'journey', label: 'Customer Journey', icon: Map },
    { id: 'channels', label: 'Channels', icon: GitBranch },
  ];

  const [selectedFeature, setSelectedFeature] = useState<string>('dsar');

  const productFeatures = {
    dsar: {
      id: 'dsar',
      title: 'DSAR Management',
      subtitle: 'Betroffenenanfragen per E-Mail',
      icon: Users,
      color: '#e24e1b',
      segment: 'DSB Professional & Agency',
      tagline: 'E-Mail weiterleiten → Fall eröffnet → Frist läuft',
      howItWorks: {
        trigger: 'xh3r2@marsstein.ai',
        description: 'Kunde leitet DSAR-E-Mail an dedizierte Adresse weiter',
        magic: 'AI erkennt Anfragetyp, setzt DSGVO-Fristen, erstellt Tasks',
        result: 'Strukturierter Fall mit Deadline-Tracking & Audit-Trail',
      },
      painPoints: [
        'DSARs über 10+ Mandanten = 200 E-Mails im Postfach',
        'Manuelle Fristenverfolgung in Excel',
        'Copy-Paste von rechtlichen Antworten',
        'Fehlende Dokumentation bei Behördenanfragen',
      ],
      capabilities: [
        { title: 'Case Creation', description: 'E-Mail weiterleiten oder manuell erstellen', details: ['Automatische Mandanten-Zuordnung', 'Status: Neu / Eingehend'] },
        { title: 'Request Classification', description: 'AI erkennt Anfragetyp', details: ['Art. 15 Auskunft', 'Art. 16 Berichtigung', 'Art. 17 Löschung', 'Art. 18 Einschränkung', 'Art. 20 Datenportabilität', 'Art. 21 Widerspruch'] },
        { title: 'Deadline Management', description: 'DSGVO-konforme Fristberechnung', details: ['1-Monat Frist (Art. 12(3))', 'Fristverlängerung +2 Monate', 'Pause bei ID-Prüfung', 'Live Countdown'] },
        { title: 'Response Templates', description: 'Rechtssichere Antwortvorlagen', details: ['Art. 15-21 Templates', 'Teilerfüllung / Ablehnung', 'Pflichthinweise', 'AI-Entwurf'] },
        { title: 'Audit Trail', description: 'Lückenlose Dokumentation', details: ['Wer / Was / Wann', 'Revisionssicher', 'Behörden-Export'] },
      ],
      workflow: [
        { step: 'E-Mail weiterleiten', actor: 'DPO', time: '10 Sek' },
        { step: 'AI klassifiziert & erstellt Fall', actor: 'System', time: 'Sofort' },
        { step: 'Identität prüfen', actor: 'DPO', time: '5 Min' },
        { step: 'Daten zusammenstellen', actor: 'DPO', time: 'Variabel' },
        { step: 'Antwort generieren', actor: 'System', time: '1 Min' },
        { step: 'Review & Freigabe', actor: 'DPO', time: '10 Min' },
        { step: 'Archivierung', actor: 'System', time: 'Sofort' },
      ],
      notIncluded: ['Kein E-Mail Client', 'Kein Ticket-System', 'Keine Auto-Antworten ohne Freigabe'],
      metrics: { casesPerMonth: '50+', responseTime: '< 24h', compliance: '100%' },
      targetICPs: ['DSB Professional', 'DSB Agency', 'Enterprise'],
    },
    taskManagement: {
      id: 'taskManagement',
      title: 'Task Management',
      subtitle: 'Multi-Mandanten To-Do System',
      icon: ListTodo,
      color: '#f59e0b',
      segment: 'DSB Professional & Agency',
      tagline: 'Ein Dashboard zeigt was heute rechtlich gefährlich wird',
      howItWorks: {
        trigger: 'Automatisch',
        description: 'DSAR/DSFA wird erstellt oder Status ändert sich',
        magic: 'System generiert Tasks, berechnet Priorität nach Risiko',
        result: 'Zentrales Dashboard mit Deadline-Fokus & Audit-Trail',
      },
      painPoints: [
        'Aufgaben über mehrere Mandanten verstreut',
        'Fristen werden vergessen oder übersehen',
        'Kein Kontext welche Aufgabe zu welchem Fall gehört',
        'Keine Priorisierung nach rechtlichem Risiko',
        'Fehlende Nachweise für erledigte Aufgaben',
      ],
      capabilities: [
        { title: 'To-Do Dashboard', description: 'Sofort erkennen was kritisch ist', details: ['Gruppiert: Überfällig / Diese Woche / Kommend', 'Filter: Mandant, Fall-Typ, Risiko', 'Blocking-Indikator'] },
        { title: 'Task-Datenmodell', description: 'Strukturierte Aufgaben', details: ['Typ: DSAR / DSFA / VVT', 'Kontext: Fall, Mandant', 'Auto-Priorität', 'Status-Tracking'] },
        { title: 'Auto-Generierung', description: 'Tasks aus Ereignissen', details: ['Neuer DSAR-Fall', 'DSFA Status-Änderung', 'Gesetzesänderung', 'Frist-Verlängerung'] },
        { title: 'Intelligente Hinweise', description: 'Kontext-Warnungen', details: ['"Blockiert Fall-Abschluss"', '"Erhöht Compliance-Risiko"', '"Bereits für anderen Mandanten erledigt"'] },
        { title: 'Kalender-Sync', description: 'Fristen sichtbar machen', details: ['Read-only View', 'iCal / Google / Outlook', 'Nur Compliance-Termine'] },
      ],
      workflow: [
        { step: 'Dashboard öffnen', actor: 'DPO', time: '10 Sek' },
        { step: 'Kritische Tasks prüfen', actor: 'DPO', time: '2 Min' },
        { step: 'Task in Arbeit nehmen', actor: 'DPO', time: '1 Klick' },
        { step: 'Aufgabe erledigen', actor: 'DPO', time: 'Variabel' },
        { step: 'Nachweis dokumentieren', actor: 'DPO', time: '1 Klick' },
        { step: 'Fall-Status Update', actor: 'System', time: 'Sofort' },
      ],
      notIncluded: ['Kein Projektmanagement', 'Keine manuelle Priorität', 'Keine Zeitplanung'],
      metrics: { timeReduction: '90%', missedDeadlines: '0%', auditReady: '100%' },
      targetICPs: ['DSB Professional', 'DSB Agency'],
    },
    vvt: {
      id: 'vvt',
      title: 'VVT-Dokumentation',
      subtitle: 'Verarbeitungsverzeichnis',
      icon: Briefcase,
      color: '#003366',
      segment: 'Alle Segmente',
      tagline: 'Fragebogen → Dokumentation → Anwalt prüft',
      howItWorks: {
        trigger: 'Manuell',
        description: 'Neue Verarbeitungstätigkeit erfassen',
        magic: 'Geführter Fragebogen, AI-Dokumentation, Lawyer-in-Loop',
        result: 'DSGVO-konformes VVT mit Versionierung & Audit-Trail',
      },
      painPoints: [
        'Excel-Listen fehleranfällig',
        'Keine einheitliche Struktur',
        '2-4 Std pro Verarbeitung',
        'Keine Änderungsverfolgung',
      ],
      capabilities: [
        { title: 'Geführte Erfassung', description: 'Schritt-für-Schritt', details: ['Verständliche Fragen', 'Art. 30 Pflichtfelder', 'Branchen-Vorschläge'] },
        { title: 'AI-Dokumentation', description: 'Automatische Texte', details: ['Strukturierte Beschreibungen', 'Rechtsgrundlagen', 'Löschfristen'] },
        { title: 'Lawyer-in-Loop', description: 'Rechtliche QS', details: ['24h Anwaltsprüfung', 'Korrekturvorschläge', 'Freigabe-Workflow'] },
        { title: 'Versionierung', description: 'Änderungshistorie', details: ['Auto-Versionen', 'Diff-Ansicht', 'Audit-Trail'] },
      ],
      workflow: [
        { step: 'Neue Verarbeitung anlegen', actor: 'DPO', time: '1 Min' },
        { step: 'Fragebogen ausfüllen', actor: 'Fachbereich', time: '15 Min' },
        { step: 'AI generiert Doku', actor: 'System', time: '2 Min' },
        { step: 'Lawyer-in-Loop Review', actor: 'Anwalt', time: '24h' },
        { step: 'Freigabe', actor: 'DPO', time: '1 Klick' },
      ],
      notIncluded: ['Keine Auto-Erkennung', 'Kein System-Scan'],
      metrics: { timePerEntry: '20 Min', accuracy: '95%', compliance: '100%' },
      targetICPs: ['Starter', 'Professional', 'DSB Intern'],
    },
    dsfa: {
      id: 'dsfa',
      title: 'DSFA-Durchführung',
      subtitle: 'Datenschutz-Folgenabschätzung',
      icon: Scale,
      color: '#7c3aed',
      segment: 'Enterprise & Professional',
      tagline: 'Schwellenwert → Risiko-Analyse → Export',
      howItWorks: {
        trigger: 'Manuell',
        description: 'Neue risikoreiche Verarbeitung geplant',
        magic: 'Geführte DSFA mit Risiko-Matrix & Maßnahmenkatalog',
        result: 'Behörden-konforme Dokumentation',
      },
      painPoints: [
        'Komplexe Risikobewertung',
        'Fehlende Behörden-Doku',
        'Unklare Schwellenwerte',
        'Keine Maßnahmenkataloge',
      ],
      capabilities: [
        { title: 'Schwellenwert-Check', description: 'Muss DSFA sein?', details: ['Auto-Prüfung Art. 35', 'Blacklist/Whitelist', 'Dokumentierte Entscheidung'] },
        { title: 'Risiko-Analyse', description: 'Strukturierte Bewertung', details: ['Risiko-Identifikation', 'Wahrscheinlichkeit', 'Schadensausmaß', 'Matrix'] },
        { title: 'Maßnahmenkatalog', description: 'Risikominimierung', details: ['Best-Practice', 'Wirksamkeit', 'Restrisiko'] },
        { title: 'Behörden-Export', description: 'Fertige Doku', details: ['PDF-Export', 'Art. 35 konform', 'Audit-ready'] },
      ],
      workflow: [
        { step: 'Schwellenwert-Check', actor: 'DPO', time: '5 Min' },
        { step: 'Verarbeitung beschreiben', actor: 'DPO', time: '30 Min' },
        { step: 'Risiken bewerten', actor: 'DPO', time: '1 Std' },
        { step: 'Maßnahmen wählen', actor: 'DPO', time: '30 Min' },
        { step: 'Export', actor: 'System', time: '1 Min' },
      ],
      notIncluded: ['Keine Vorab-Konsultation', 'Kein Behörden-Upload'],
      metrics: { avgDuration: '2-3h', compliance: '100%', export: 'PDF' },
      targetICPs: ['Professional', 'Enterprise', 'DSB Professional'],
    },
  };

  const currentFeature = productFeatures[selectedFeature as keyof typeof productFeatures];

  const renderUseCases = () => (
    <div className="h-full flex flex-col overflow-y-auto">
      {/* Feature Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.values(productFeatures).map((feature) => {
          const Icon = feature.icon;
          return (
            <Button
              key={feature.id}
              variant={selectedFeature === feature.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFeature(feature.id)}
              className={cn(
                "transition-all",
                selectedFeature === feature.id
                  ? "text-white"
                  : "text-[#474747] border-gray-300"
              )}
              style={{
                backgroundColor: selectedFeature === feature.id ? feature.color : undefined,
              }}
            >
              <Icon className="h-4 w-4 mr-2" />
              {feature.title}
            </Button>
          );
        })}
      </div>

      {/* Feature Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedFeature}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex-grow space-y-6"
        >
          {/* ===== TOP SECTION: Description & Explanation ===== */}
          <div className="grid grid-cols-12 gap-4">
            {/* Header & Abstract */}
            <div className="col-span-4">
              <Card className="h-full border-gray-200">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${currentFeature.color}15` }}
                    >
                      <currentFeature.icon className="h-7 w-7" style={{ color: currentFeature.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#232323]">{currentFeature.title}</h3>
                      <p className="text-sm text-[#474747]">{currentFeature.subtitle}</p>
                    </div>
                  </div>
                  <div
                    className="p-3 rounded-lg mb-4"
                    style={{ backgroundColor: `${currentFeature.color}10` }}
                  >
                    <p className="text-sm font-semibold text-[#232323]">
                      {currentFeature.tagline}
                    </p>
                  </div>
                  <p className="text-sm text-[#474747] mb-4">
                    {currentFeature.id === 'dsar' && 'Betroffenenanfragen effizient verwalten: Von der E-Mail bis zur rechtssicheren Antwort - alles in einem System mit vollständigem Audit-Trail.'}
                    {currentFeature.id === 'taskManagement' && 'Alle Compliance-Aufgaben im Blick: Priorisiert nach rechtlichem Risiko, gruppiert nach Dringlichkeit, dokumentiert für Audits.'}
                    {currentFeature.id === 'vvt' && 'DSGVO-konformes Verarbeitungsverzeichnis erstellen: Geführte Erfassung, AI-Dokumentation und optionale Anwaltsprüfung.'}
                    {currentFeature.id === 'dsfa' && 'Datenschutz-Folgenabschätzungen strukturiert durchführen: Von der Schwellenwertprüfung bis zum behördenkonformen Export.'}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {currentFeature.targetICPs.map((icp: string, i: number) => (
                      <Badge
                        key={i}
                        className="text-xs text-white"
                        style={{ backgroundColor: currentFeature.color }}
                      >
                        {icp}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* How it Works - Visual Flow */}
            <div className="col-span-5">
              <Card className="h-full border-gray-200">
                <CardContent className="p-5">
                  <h4 className="text-sm font-bold text-[#232323] mb-4 flex items-center gap-2">
                    <Zap className="h-4 w-4" style={{ color: currentFeature.color }} />
                    So funktioniert's
                  </h4>
                  <div className="flex items-center justify-between gap-2">
                    {/* Step 1: Trigger */}
                    <div className="flex-1 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold text-blue-600">1</span>
                      </div>
                      <p className="text-xs font-bold text-[#232323] mb-1">Trigger</p>
                      <p className="text-xs text-[#474747] leading-tight">{currentFeature.howItWorks.trigger}</p>
                      <p className="text-xs text-[#6b7280] mt-1 leading-tight">{currentFeature.howItWorks.description}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-gray-300 flex-shrink-0" />
                    {/* Step 2: AI Magic */}
                    <div className="flex-1 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold text-purple-600">2</span>
                      </div>
                      <p className="text-xs font-bold text-[#232323] mb-1">AI Magic</p>
                      <p className="text-xs text-[#474747] leading-tight">{currentFeature.howItWorks.magic}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-gray-300 flex-shrink-0" />
                    {/* Step 3: Result */}
                    <div className="flex-1 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold text-green-600">3</span>
                      </div>
                      <p className="text-xs font-bold text-[#232323] mb-1">Ergebnis</p>
                      <p className="text-xs text-[#474747] leading-tight">{currentFeature.howItWorks.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pain Points */}
            <div className="col-span-3">
              <Card className="h-full border-gray-200 border-red-200 bg-red-50/30">
                <CardContent className="p-5">
                  <h4 className="text-sm font-bold text-[#232323] mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    Pain Points (ohne MARSSTEIN)
                  </h4>
                  <div className="space-y-3">
                    {currentFeature.painPoints.map((point: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                        <p className="text-sm text-[#474747]">{point}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ===== BOTTOM SECTION: UI Mockup ===== */}
          <Card className="border-gray-200">
            <CardContent className="p-0">
              {/* UI Header Bar */}
              <div
                className="px-5 py-3 border-b border-gray-200 flex items-center justify-between"
                style={{ backgroundColor: `${currentFeature.color}08` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-sm font-medium text-[#474747]">MARSSTEIN App — {currentFeature.title}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6b7280]">
                  <span>UI Preview</span>
                </div>
              </div>

              {/* UI Content */}
              <div className="p-5">
                {currentFeature.id === 'dsar' && (
                  <div className="grid grid-cols-12 gap-4">
                    {/* Left: Case List */}
                    <div className="col-span-4 border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-bold text-[#232323]">Offene Anfragen</h5>
                        <Badge className="bg-red-100 text-red-700 text-xs">7 offen</Badge>
                      </div>
                      {[
                        { name: 'Max Mustermann', type: 'Art. 15 Auskunft', days: 2, status: 'Neu' },
                        { name: 'Anna Schmidt', type: 'Art. 17 Löschung', days: 5, status: 'In Bearbeitung' },
                        { name: 'Peter Weber', type: 'Art. 20 Portabilität', days: 12, status: 'ID-Prüfung' },
                      ].map((req, i) => (
                        <div key={i} className={cn("p-2 rounded-lg mb-2 cursor-pointer transition-all", i === 0 ? "bg-orange-50 border border-orange-200" : "hover:bg-gray-50")}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-[#232323]">{req.name}</span>
                            <Badge variant="outline" className="text-xs">{req.status}</Badge>
                          </div>
                          <p className="text-xs text-[#474747]">{req.type}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Calendar className="h-3 w-3 text-orange-500" />
                            <span className="text-xs text-orange-600 font-medium">Noch {30 - req.days} Tage</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Center: Case Details */}
                    <div className="col-span-5 border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-bold text-[#232323]">Fall-Details</h5>
                        <Badge className="bg-blue-100 text-blue-700 text-xs">Case #2024-0847</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 bg-gray-50 rounded">
                            <span className="text-[#6b7280]">Antragsteller</span>
                            <p className="font-medium text-[#232323]">Max Mustermann</p>
                          </div>
                          <div className="p-2 bg-gray-50 rounded">
                            <span className="text-[#6b7280]">Anfrage-Typ</span>
                            <p className="font-medium text-[#232323]">Art. 15 Auskunft</p>
                          </div>
                          <div className="p-2 bg-gray-50 rounded">
                            <span className="text-[#6b7280]">Mandant</span>
                            <p className="font-medium text-[#232323]">Müller GmbH</p>
                          </div>
                          <div className="p-2 bg-orange-50 rounded border border-orange-200">
                            <span className="text-[#6b7280]">Frist</span>
                            <p className="font-bold text-orange-600">15.02.2025</p>
                          </div>
                        </div>
                        <div className="p-2 bg-gray-50 rounded">
                          <span className="text-xs text-[#6b7280]">Workflow-Status</span>
                          <div className="flex items-center gap-1 mt-2">
                            {['Eingang', 'ID-Check', 'Daten', 'Antwort', 'Abschluss'].map((s, i) => (
                              <div key={i} className="flex items-center">
                                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs", i < 2 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500")}>
                                  {i < 2 ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                                </div>
                                {i < 4 && <div className={cn("w-4 h-0.5", i < 1 ? "bg-green-500" : "bg-gray-200")} />}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions & Templates */}
                    <div className="col-span-3 space-y-3">
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h5 className="text-sm font-bold text-[#232323] mb-2">Schnellaktionen</h5>
                        <div className="space-y-2">
                          <Button size="sm" className="w-full justify-start text-xs" style={{ backgroundColor: currentFeature.color }}>
                            <Zap className="h-3 w-3 mr-2" />
                            AI-Antwort generieren
                          </Button>
                          <Button size="sm" variant="outline" className="w-full justify-start text-xs">
                            <Users className="h-3 w-3 mr-2" />
                            ID verifizieren
                          </Button>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h5 className="text-sm font-bold text-[#232323] mb-2">Audit-Trail</h5>
                        <div className="space-y-1 text-xs text-[#474747]">
                          <p>✓ 10:23 - E-Mail empfangen</p>
                          <p>✓ 10:23 - AI klassifiziert</p>
                          <p>○ Warte auf ID-Check</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentFeature.id === 'taskManagement' && (
                  <div className="grid grid-cols-12 gap-4">
                    {/* Left: Filter Sidebar */}
                    <div className="col-span-2 border border-gray-200 rounded-lg p-3">
                      <h5 className="text-sm font-bold text-[#232323] mb-3">Filter</h5>
                      <div className="space-y-3 text-xs">
                        <div>
                          <p className="text-[#6b7280] mb-1">Mandant</p>
                          <select className="w-full p-1.5 border border-gray-200 rounded text-[#232323]">
                            <option>Alle (12)</option>
                          </select>
                        </div>
                        <div>
                          <p className="text-[#6b7280] mb-1">Typ</p>
                          <div className="space-y-1">
                            {['DSAR', 'DSFA', 'VVT'].map((t) => (
                              <label key={t} className="flex items-center gap-2">
                                <input type="checkbox" defaultChecked className="rounded" />
                                <span>{t}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[#6b7280] mb-1">Priorität</p>
                          <div className="space-y-1">
                            <label className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500" />
                              <span>Kritisch (3)</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-yellow-500" />
                              <span>Hoch (5)</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main: Task Dashboard */}
                    <div className="col-span-10 border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-sm font-bold text-[#232323]">Task Dashboard</h5>
                        <div className="flex gap-2">
                          <Badge className="bg-red-100 text-red-700 text-xs">3 Überfällig</Badge>
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs">5 Diese Woche</Badge>
                          <Badge className="bg-gray-100 text-gray-700 text-xs">8 Kommend</Badge>
                        </div>
                      </div>

                      {/* Overdue Section */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          <span className="text-sm font-bold text-red-600">Überfällig</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { task: 'ID-Prüfung abschließen', case: 'DSAR #0841', client: 'Weber AG', days: -2 },
                            { task: 'Daten zusammenstellen', case: 'DSAR #0839', client: 'Schmidt GmbH', days: -1 },
                          ].map((t, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-red-50 rounded-lg border border-red-200">
                              <div className="flex items-center gap-3">
                                <input type="checkbox" className="rounded" />
                                <div>
                                  <p className="text-sm font-medium text-[#232323]">{t.task}</p>
                                  <p className="text-xs text-[#474747]">{t.case} • {t.client}</p>
                                </div>
                              </div>
                              <Badge className="bg-red-500 text-white text-xs">{t.days}d</Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* This Week Section */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-bold text-yellow-600">Diese Woche</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { task: 'Antwort-Review', case: 'DSAR #0847', client: 'Müller GmbH', days: 2 },
                            { task: 'DSFA fertigstellen', case: 'DSFA #0023', client: 'Tech AG', days: 3 },
                            { task: 'VVT aktualisieren', case: 'VVT-Audit', client: 'Meier KG', days: 5 },
                          ].map((t, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                              <div className="flex items-center gap-3">
                                <input type="checkbox" className="rounded" />
                                <div>
                                  <p className="text-sm font-medium text-[#232323]">{t.task}</p>
                                  <p className="text-xs text-[#474747]">{t.case} • {t.client}</p>
                                </div>
                              </div>
                              <Badge className="bg-yellow-500 text-white text-xs">{t.days}d</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentFeature.id === 'vvt' && (
                  <div className="grid grid-cols-12 gap-4">
                    {/* Left: VVT List */}
                    <div className="col-span-3 border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-bold text-[#232323]">Verarbeitungen</h5>
                        <Button size="sm" className="text-xs h-7" style={{ backgroundColor: currentFeature.color }}>+ Neu</Button>
                      </div>
                      {[
                        { name: 'Lohnabrechnung', status: 'Freigegeben', icon: '✓' },
                        { name: 'Newsletter-Versand', status: 'In Prüfung', icon: '⏳' },
                        { name: 'Bewerbermanagement', status: 'Entwurf', icon: '📝' },
                      ].map((v, i) => (
                        <div key={i} className={cn("p-2 rounded-lg mb-2 cursor-pointer", i === 1 ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50")}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-[#232323]">{v.name}</span>
                            <span className="text-xs">{v.icon}</span>
                          </div>
                          <p className="text-xs text-[#474747]">{v.status}</p>
                        </div>
                      ))}
                    </div>

                    {/* Center: VVT Form */}
                    <div className="col-span-6 border border-gray-200 rounded-lg p-3">
                      <h5 className="text-sm font-bold text-[#232323] mb-3">Newsletter-Versand</h5>
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs text-[#6b7280]">Bezeichnung der Verarbeitung</label>
                          <input className="w-full p-2 border border-gray-200 rounded text-sm" value="Newsletter-Versand an Bestandskunden" readOnly />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs text-[#6b7280]">Rechtsgrundlage</label>
                            <select className="w-full p-2 border border-gray-200 rounded text-sm">
                              <option>Art. 6(1)(a) - Einwilligung</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs text-[#6b7280]">Löschfrist</label>
                            <input className="w-full p-2 border border-gray-200 rounded text-sm" value="Bei Widerruf" readOnly />
                          </div>
                        </div>
                        <div>
                          <label className="text-xs text-[#6b7280]">Kategorien betroffener Personen</label>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {['Kunden', 'Interessenten'].map((c) => (
                              <Badge key={c} variant="outline" className="text-xs">{c}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="p-2 bg-purple-50 rounded-lg border border-purple-200">
                          <div className="flex items-center gap-2 text-xs text-purple-700">
                            <Zap className="h-4 w-4" />
                            <span className="font-medium">AI-Vorschlag verfügbar</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Status & Actions */}
                    <div className="col-span-3 space-y-3">
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h5 className="text-sm font-bold text-[#232323] mb-2">Status</h5>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#474747]">Erfassung</span>
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#474747]">AI-Dokumentation</span>
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#232323] font-medium">Lawyer-in-Loop</span>
                            <span className="text-yellow-600">⏳ 24h</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#474747]">Freigabe</span>
                            <div className="w-4 h-4 rounded-full bg-gray-200" />
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h5 className="text-sm font-bold text-[#232323] mb-2">Versionen</h5>
                        <div className="space-y-1 text-xs text-[#474747]">
                          <p className="font-medium text-[#232323]">v3 (aktuell)</p>
                          <p>v2 - 12.01.2025</p>
                          <p>v1 - 05.01.2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentFeature.id === 'dsfa' && (
                  <div className="grid grid-cols-12 gap-4">
                    {/* Left: DSFA List */}
                    <div className="col-span-3 border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-bold text-[#232323]">DSFAs</h5>
                        <Button size="sm" className="text-xs h-7" style={{ backgroundColor: currentFeature.color }}>+ Neu</Button>
                      </div>
                      {[
                        { name: 'KI-Bewerbertool', status: 'In Bearbeitung', risk: 'Hoch' },
                        { name: 'Videoüberwachung', status: 'Abgeschlossen', risk: 'Mittel' },
                      ].map((d, i) => (
                        <div key={i} className={cn("p-2 rounded-lg mb-2 cursor-pointer", i === 0 ? "bg-purple-50 border border-purple-200" : "hover:bg-gray-50")}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-[#232323]">{d.name}</span>
                            <Badge className={cn("text-xs", d.risk === 'Hoch' ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700")}>{d.risk}</Badge>
                          </div>
                          <p className="text-xs text-[#474747]">{d.status}</p>
                        </div>
                      ))}
                    </div>

                    {/* Center: Risk Matrix */}
                    <div className="col-span-6 border border-gray-200 rounded-lg p-3">
                      <h5 className="text-sm font-bold text-[#232323] mb-3">Risiko-Matrix: KI-Bewerbertool</h5>
                      <div className="grid grid-cols-4 gap-1 mb-4">
                        <div className="col-span-1" />
                        <div className="text-xs text-center text-[#474747]">Gering</div>
                        <div className="text-xs text-center text-[#474747]">Mittel</div>
                        <div className="text-xs text-center text-[#474747]">Hoch</div>
                        <div className="text-xs text-[#474747] flex items-center">Hoch</div>
                        <div className="h-12 bg-yellow-200 rounded flex items-center justify-center text-xs">1</div>
                        <div className="h-12 bg-red-200 rounded flex items-center justify-center text-xs font-bold">2</div>
                        <div className="h-12 bg-red-400 rounded" />
                        <div className="text-xs text-[#474747] flex items-center">Mittel</div>
                        <div className="h-12 bg-green-200 rounded" />
                        <div className="h-12 bg-yellow-200 rounded flex items-center justify-center text-xs">1</div>
                        <div className="h-12 bg-red-200 rounded" />
                        <div className="text-xs text-[#474747] flex items-center">Gering</div>
                        <div className="h-12 bg-green-200 rounded" />
                        <div className="h-12 bg-green-200 rounded" />
                        <div className="h-12 bg-yellow-200 rounded" />
                      </div>
                      <div className="text-xs text-[#474747]">
                        <p className="font-medium text-[#232323] mb-1">Identifizierte Risiken:</p>
                        <div className="space-y-1">
                          <p>🔴 R1: Automatisierte Entscheidungen ohne menschliche Prüfung</p>
                          <p>🔴 R2: Diskriminierungspotential durch Trainingsdaten</p>
                          <p>🟡 R3: Mangelnde Transparenz der Entscheidungskriterien</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Progress & Export */}
                    <div className="col-span-3 space-y-3">
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h5 className="text-sm font-bold text-[#232323] mb-2">Fortschritt</h5>
                        <div className="space-y-2">
                          {[
                            { step: 'Schwellenwert-Check', done: true },
                            { step: 'Verarbeitung beschreiben', done: true },
                            { step: 'Risiken bewerten', done: true },
                            { step: 'Maßnahmen wählen', done: false },
                            { step: 'Export', done: false },
                          ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs">
                              {s.done ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <div className="w-4 h-4 rounded-full border-2 border-gray-300" />}
                              <span className={s.done ? "text-[#474747]" : "text-[#232323] font-medium"}>{s.step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full" style={{ backgroundColor: currentFeature.color }}>
                        PDF Export
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* ===== Capabilities & Workflow Summary ===== */}
          <div className="grid grid-cols-12 gap-4">
            {/* Capabilities */}
            <div className="col-span-8">
              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-sm font-bold text-[#232323] mb-3 flex items-center gap-2">
                    <Rocket className="h-4 w-4" style={{ color: currentFeature.color }} />
                    Alle Capabilities
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {currentFeature.capabilities.map((cap: { title: string; description: string; details: string[] }, i: number) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all"
                      >
                        <h5 className="text-sm font-bold text-[#232323] mb-1">{cap.title}</h5>
                        <p className="text-xs text-[#474747] mb-2">{cap.description}</p>
                        <div className="space-y-1">
                          {cap.details.slice(0, 3).map((detail: string, j: number) => (
                            <div key={j} className="flex items-center gap-1.5 text-xs text-[#474747]">
                              <CheckCircle2 className="h-3 w-3 flex-shrink-0" style={{ color: currentFeature.color }} />
                              <span className="truncate">{detail}</span>
                            </div>
                          ))}
                          {cap.details.length > 3 && (
                            <p className="text-xs text-[#6b7280] italic">+{cap.details.length - 3} weitere</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Metrics & Not Included */}
            <div className="col-span-4 space-y-4">
              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-sm font-bold text-[#232323] mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" style={{ color: currentFeature.color }} />
                    Erwartete Ergebnisse
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(currentFeature.metrics).map(([key, value], i) => (
                      <div
                        key={key}
                        className="p-2 rounded-lg text-center"
                        style={{ backgroundColor: `${currentFeature.color}10` }}
                      >
                        <p className="text-lg font-bold" style={{ color: currentFeature.color }}>
                          {value as string}
                        </p>
                        <p className="text-xs text-[#474747] capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-4">
                  <h4 className="text-sm font-bold text-[#474747] mb-2">Bewusst nicht enthalten:</h4>
                  <div className="space-y-1">
                    {currentFeature.notIncluded.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#474747]">
                        <div className="w-1 h-1 rounded-full bg-gray-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const renderTAMPyramid = () => (
    <div className="relative h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* TAM */}
          <motion.div
            className={cn(
              "w-full h-20 bg-[#e24e1b]/10 rounded-t-xl border-2 border-[#e24e1b]/40 flex items-center justify-between px-6 cursor-pointer transition-all",
              hoveredSegment === 'tam' && "border-[#e24e1b] bg-[#e24e1b]/20"
            )}
            onMouseEnter={() => setHoveredSegment('tam')}
            onMouseLeave={() => setHoveredSegment(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <p className="text-xs font-bold text-[#e24e1b]">TAM</p>
              <p className="text-lg font-bold text-[#232323]">Total Addressable Market</p>
            </div>
            <p className="text-2xl font-bold text-[#e24e1b]">{formatCurrency(tam.total)}</p>
          </motion.div>

          {/* SAM */}
          <motion.div
            className={cn(
              "w-[85%] mx-auto h-20 bg-[#ea580c]/10 border-2 border-t-0 border-[#ea580c]/40 flex items-center justify-between px-6 cursor-pointer transition-all",
              hoveredSegment === 'sam' && "border-[#ea580c] bg-[#ea580c]/20"
            )}
            onMouseEnter={() => setHoveredSegment('sam')}
            onMouseLeave={() => setHoveredSegment(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <p className="text-xs font-bold text-[#ea580c]">SAM</p>
              <p className="text-base font-bold text-[#232323]">Serviceable Market</p>
            </div>
            <p className="text-xl font-bold text-[#ea580c]">{formatCurrency(tam.total * 0.35)}</p>
          </motion.div>

          {/* SOM */}
          <motion.div
            className={cn(
              "w-[65%] mx-auto h-20 bg-[#39B37B]/10 rounded-b-xl border-2 border-t-0 border-[#39B37B]/40 flex items-center justify-between px-6 cursor-pointer transition-all",
              hoveredSegment === 'som' && "border-[#39B37B] bg-[#39B37B]/20"
            )}
            onMouseEnter={() => setHoveredSegment('som')}
            onMouseLeave={() => setHoveredSegment(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <p className="text-xs font-bold text-[#39B37B]">SOM</p>
              <p className="text-base font-bold text-[#232323]">Year 1 Target</p>
            </div>
            <p className="text-xl font-bold text-[#39B37B]">{formatCurrency(tam.total * 0.07)}</p>
          </motion.div>
        </motion.div>

        {/* Segment Breakdown */}
        <AnimatePresence>
          {hoveredSegment && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-lg"
            >
              {hoveredSegment === 'tam' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-[#e24e1b] mb-2">Interne DSB</p>
                    {Object.entries(tamData.internal).map(([key, seg]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-[#474747]">{seg.label}</span>
                        <span className="font-semibold text-[#232323]">{seg.count.toLocaleString('de-DE')}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#474747] mb-2">Externe DSB</p>
                    {Object.entries(tamData.external).map(([key, seg]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-[#474747]">{seg.label}</span>
                        <span className="font-semibold text-[#232323]">{seg.count.toLocaleString('de-DE')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hoveredSegment === 'sam' && (
                <p className="text-sm text-[#474747]">
                  35% des TAM sind kurzfristig erreichbar durch digitale Kanäle und bestehende Awareness für DSGVO-Compliance-Tools.
                </p>
              )}
              {hoveredSegment === 'som' && (
                <p className="text-sm text-[#474747]">
                  7% Marktanteil im ersten Jahr durch fokussierte Go-to-Market-Strategie auf KMU und Freelancer DSBs.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  const renderSalesFunnel = () => {
    const currentFunnel = salesFunnels[selectedFunnel as keyof typeof salesFunnels];
    const funnelKeys = Object.keys(salesFunnels);

    return (
      <div className="h-full flex flex-col overflow-auto">
        {/* Funnel Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {funnelKeys.map((key) => {
            const funnel = salesFunnels[key as keyof typeof salesFunnels];
            const FunnelIcon = funnel.icon;
            return (
              <Button
                key={key}
                size="sm"
                variant={selectedFunnel === key ? 'default' : 'outline'}
                onClick={() => setSelectedFunnel(key)}
                className={cn(
                  "transition-all",
                  selectedFunnel === key
                    ? "text-white shadow-md"
                    : "text-[#474747] border-gray-300 hover:border-gray-400"
                )}
                style={selectedFunnel === key ? { backgroundColor: funnel.color } : {}}
              >
                <FunnelIcon className="h-4 w-4 mr-2" />
                {funnel.name}
                {funnel.status === 'planned' && (
                  <Badge variant="secondary" className="ml-2 text-[10px] bg-gray-200">Geplant</Badge>
                )}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-6 flex-grow">
          {/* Left: Description */}
          <div className="space-y-4">
            {/* Header */}
            <div className="p-4 rounded-lg" style={{ backgroundColor: `${currentFunnel.color}10` }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${currentFunnel.color}20` }}>
                  <currentFunnel.icon className="h-6 w-6" style={{ color: currentFunnel.color }} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#232323]">{currentFunnel.name}</h3>
                    <Badge
                      variant="outline"
                      className="text-xs"
                      style={{
                        borderColor: currentFunnel.status === 'active' ? '#39B37B' : '#ea580c',
                        color: currentFunnel.status === 'active' ? '#39B37B' : '#ea580c'
                      }}
                    >
                      {currentFunnel.status === 'active' ? 'Aktiv' : 'Geplant'}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#474747]">{currentFunnel.shortDescription}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-[#474747] font-medium">Ziel-ICP:</span>
                {currentFunnel.targetICP.map((icp, i) => (
                  <Badge key={i} variant="outline" className="text-xs" style={{ borderColor: currentFunnel.color, color: currentFunnel.color }}>
                    {icp}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h4 className="text-sm font-bold text-[#232323] mb-3">Kampagnen-Details</h4>
                <div className="text-sm text-[#474747] whitespace-pre-line leading-relaxed prose prose-sm max-w-none">
                  {currentFunnel.description.split('\n').map((line, i) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={i} className="font-bold text-[#232323] mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>;
                    }
                    if (line.startsWith('- ')) {
                      return <p key={i} className="ml-3 text-[#474747]">• {line.substring(2)}</p>;
                    }
                    if (line.match(/^\d+\./)) {
                      return <p key={i} className="ml-3 text-[#474747]">{line}</p>;
                    }
                    return line ? <p key={i}>{line}</p> : <br key={i} />;
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Funnel Stages + Metrics */}
          <div className="space-y-4">
            {/* Funnel Stages */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h4 className="text-sm font-bold text-[#232323] mb-4">Funnel Stages</h4>
                <div className="space-y-3">
                  {currentFunnel.stages.map((stage, index) => {
                    const widthPercent = 100 - (index * 15);
                    return (
                      <motion.div
                        key={stage.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <div
                          className="rounded-lg p-3 transition-all hover:scale-[1.01]"
                          style={{
                            width: `${Math.max(widthPercent, 40)}%`,
                            backgroundColor: `${currentFunnel.color}10`,
                            borderLeft: `4px solid ${currentFunnel.color}`,
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-[#232323] text-sm">{stage.label}</span>
                            <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: `${currentFunnel.color}20`, color: currentFunnel.color }}>
                              {index + 1}
                            </span>
                          </div>
                          <p className="text-xs text-[#474747] mt-1">{stage.description}</p>
                        </div>
                        {index < currentFunnel.stages.length - 1 && (
                          <div className="flex justify-start ml-6 my-1">
                            <ChevronRight className="h-3 w-3 text-gray-400 rotate-90" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* KPI Metrics */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h4 className="text-sm font-bold text-[#232323] mb-3">KPIs (zu aktualisieren)</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-lg" style={{ backgroundColor: `${currentFunnel.color}10` }}>
                    <p className="text-xl font-bold" style={{ color: currentFunnel.metrics.cac > 0 ? currentFunnel.color : '#9ca3af' }}>
                      {currentFunnel.metrics.cac > 0 ? `€${currentFunnel.metrics.cac}` : '–'}
                    </p>
                    <p className="text-xs text-[#474747] font-medium">CAC</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-[#39B37B]/10">
                    <p className="text-xl font-bold" style={{ color: currentFunnel.metrics.ltv > 0 ? '#39B37B' : '#9ca3af' }}>
                      {currentFunnel.metrics.ltv > 0 ? `€${currentFunnel.metrics.ltv.toLocaleString('de-DE')}` : '–'}
                    </p>
                    <p className="text-xs text-[#474747] font-medium">LTV</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-100">
                    <p className="text-xl font-bold" style={{ color: currentFunnel.metrics.conversions > 0 ? '#232323' : '#9ca3af' }}>
                      {currentFunnel.metrics.conversions > 0 ? currentFunnel.metrics.conversions : '–'}
                    </p>
                    <p className="text-xs text-[#474747] font-medium">Conversions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  const renderICPCards = () => {
    const unternehmenProfiles = icpProfiles.filter(p => p.segment === 'Unternehmen');
    const dsbProfiles = icpProfiles.filter(p => p.segment === 'DSB');

    const renderSegmentCards = (profiles: typeof icpProfiles, segmentTitle: string, segmentIcon: React.ReactNode) => (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          {segmentIcon}
          <h3 className="text-xl font-bold text-[#232323]">{segmentTitle}</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {profiles.map((icp, index) => (
            <motion.div
              key={icp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "cursor-pointer transition-all duration-300 h-full border-gray-200 bg-white relative",
                  selectedICP === icp.id
                    ? "ring-2 ring-[#e24e1b] shadow-xl scale-105"
                    : "hover:shadow-lg hover:scale-[1.02] hover:border-[#e24e1b]/30",
                  icp.popular && "border-[#e24e1b]/50"
                )}
                onClick={() => setSelectedICP(selectedICP === icp.id ? null : icp.id)}
              >
                {icp.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#e24e1b] text-white text-xs">Beliebt</Badge>
                  </div>
                )}
                <CardContent className="p-4">
                  <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3", icp.color)}>
                    <icp.icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="font-bold text-[#232323] text-lg">{icp.title}</h3>
                  <p className="text-sm text-[#474747] mb-2">{icp.subtitle}</p>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-[#e24e1b]">{icp.price}</span>
                    <span className="text-xs text-[#474747]">{icp.tam.toLocaleString('de-DE')} Zielkunden</span>
                  </div>

                  <div className="space-y-1 mb-3">
                    {icp.features?.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-1 text-xs text-[#474747]">
                        <CheckCircle2 className="h-3 w-3 text-[#39B37B]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <AnimatePresence>
                    {selectedICP === icp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-200 pt-3 mt-3 space-y-3"
                      >
                        <div>
                          <p className="text-xs font-bold text-[#232323] mb-1">Pain Points</p>
                          <ul className="space-y-1">
                            {icp.painPoints.map((point, i) => (
                              <li key={i} className="text-xs text-[#474747] flex items-center gap-1">
                                <CircleDot className="h-2 w-2 text-[#e24e1b]" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#232323] mb-1">Top Channels</p>
                          <div className="flex flex-wrap gap-1">
                            {icp.channels.map((ch, i) => (
                              <Badge key={i} variant="secondary" className="text-xs bg-gray-100 text-[#474747]">
                                {ch}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#474747]">Conversion Rate</span>
                          <span className="text-sm font-bold text-[#39B37B]">{icp.conversionRate}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );

    return (
      <div className="h-full flex flex-col justify-center space-y-8">
        {renderSegmentCards(
          unternehmenProfiles,
          'Unternehmen',
          <div className="p-2 bg-[#e24e1b]/10 rounded-lg"><Building2 className="h-6 w-6 text-[#e24e1b]" /></div>
        )}
        {renderSegmentCards(
          dsbProfiles,
          'Datenschutzbeauftragte',
          <div className="p-2 bg-gray-100 rounded-lg"><Users className="h-6 w-6 text-[#474747]" /></div>
        )}
      </div>
    );
  };

  const renderFlywheel = () => (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-72 h-72">
        {/* Outer Ring - Unternehmen */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-[#e24e1b]/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle Ring - Platform */}
        <motion.div
          className="absolute inset-8 rounded-full border-4 border-[#39B37B]/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Center - Marsstein */}
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#e24e1b] to-[#ea580c] flex items-center justify-center shadow-lg">
          <div className="text-center text-white">
            <Zap className="h-8 w-8 mx-auto mb-1" />
            <p className="text-xs font-bold">MARSSTEIN</p>
          </div>
        </div>

        {/* Flywheel Labels */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center">
          <div className="bg-[#e24e1b]/10 p-2 rounded-full mb-1">
            <Building2 className="h-5 w-5 text-[#e24e1b]" />
          </div>
          <p className="text-xs font-bold text-[#232323]">Unternehmen</p>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="bg-gray-100 p-2 rounded-full mb-1">
            <Users className="h-5 w-5 text-[#474747]" />
          </div>
          <p className="text-xs font-bold text-[#232323]">DSBs</p>
        </div>
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 text-center">
          <div className="bg-[#39B37B]/10 p-2 rounded-full mb-1">
            <ArrowRight className="h-5 w-5 text-[#39B37B]" />
          </div>
          <p className="text-xs font-bold text-[#232323]">Lawyer-in-Loop</p>
        </div>
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 text-center">
          <div className="bg-[#39B37B]/10 p-2 rounded-full mb-1">
            <UserPlus className="h-5 w-5 text-[#39B37B]" />
          </div>
          <p className="text-xs font-bold text-[#232323]">Mandanten-Match</p>
        </div>
      </div>
    </div>
  );

  const renderCustomerJourney = () => {
    const currentPhase = journeySteps[selectedJourneyPhase];

    return (
      <div className="h-full flex flex-col">
        {/* ICP Journey Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold text-[#232323]">Unternehmen:</span>
            <div className="flex gap-2">
              {(['starter', 'professional', 'enterprise'] as const).map((key) => {
                const journey = icpJourneys[key];
                const Icon = journey.icon;
                return (
                  <Button
                    key={key}
                    variant={selectedJourneyICP === key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => { setSelectedJourneyICP(key); setSelectedJourneyPhase(0); }}
                    className={cn(
                      "transition-all text-xs",
                      selectedJourneyICP === key
                        ? "text-white"
                        : "text-[#474747] border-gray-300"
                    )}
                    style={{
                      backgroundColor: selectedJourneyICP === key ? journey.color : undefined,
                    }}
                  >
                    <Icon className="h-3 w-3 mr-1" />
                    {journey.name}
                  </Button>
                );
              })}
            </div>
            <div className="w-px h-6 bg-gray-300 mx-2" />
            <span className="text-xs font-bold text-[#232323]">DSB:</span>
            <div className="flex gap-2">
              {(['dsbIntern', 'dsbProfessional', 'dsbAgency'] as const).map((key) => {
                const journey = icpJourneys[key];
                const Icon = journey.icon;
                return (
                  <Button
                    key={key}
                    variant={selectedJourneyICP === key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => { setSelectedJourneyICP(key); setSelectedJourneyPhase(0); }}
                    className={cn(
                      "transition-all text-xs",
                      selectedJourneyICP === key
                        ? "text-white"
                        : "text-[#474747] border-gray-300"
                    )}
                    style={{
                      backgroundColor: selectedJourneyICP === key ? journey.color : undefined,
                    }}
                  >
                    <Icon className="h-3 w-3 mr-1" />
                    {journey.name}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#474747]">{currentJourney.description}</span>
              <span className="text-xs text-[#474747]">|</span>
              <span className="text-xs font-medium" style={{ color: currentJourney.color }}>{currentJourney.price}</span>
            </div>
            <div className="flex gap-1">
              {currentJourney.primaryFunnels.map((funnel, i) => (
                <Badge key={i} variant="outline" className="text-xs" style={{ borderColor: currentJourney.color, color: currentJourney.color }}>
                  {funnel}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline Header */}
        <div className="relative mb-6">
          {/* Progress Line Background */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 rounded-full" />
          {/* Progress Line Active */}
          <motion.div
            className="absolute top-6 left-0 h-1 rounded-full"
            style={{ background: `linear-gradient(to right, ${currentJourney.color}, #39B37B)` }}
            initial={{ width: '0%' }}
            animate={{ width: `${((selectedJourneyPhase + 1) / journeySteps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />

          {/* Phase Nodes */}
          <div className="relative flex justify-between">
            {journeySteps.map((step, index) => (
              <motion.button
                key={step.phase}
                onClick={() => setSelectedJourneyPhase(index)}
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center relative z-10 transition-all shadow-md",
                    selectedJourneyPhase === index
                      ? "ring-4 ring-offset-2"
                      : index <= selectedJourneyPhase
                      ? "opacity-80"
                      : "bg-gray-100 opacity-50"
                  )}
                  style={{
                    backgroundColor: index <= selectedJourneyPhase ? step.color : undefined,
                    ['--tw-ring-color' as string]: selectedJourneyPhase === index ? step.color : undefined,
                  }}
                >
                  <step.icon className={cn(
                    "h-5 w-5",
                    index <= selectedJourneyPhase ? "text-white" : "text-gray-400"
                  )} />
                </div>
                <p className={cn(
                  "text-xs font-bold mt-2 transition-colors",
                  selectedJourneyPhase === index ? "text-[#232323]" : "text-[#474747]"
                )}>
                  {step.phase}
                </p>
                <p className="text-[10px] text-[#474747]">{step.subtitle}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Phase Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedJourneyICP}-${selectedJourneyPhase}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-grow grid grid-cols-3 gap-4"
          >
            {/* Left: Emotion & Goal */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${currentPhase.color}15` }}
                  >
                    <currentPhase.icon className="h-7 w-7" style={{ color: currentPhase.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#232323]">{currentPhase.phase}</h3>
                  <p className="text-sm text-[#474747]">{currentPhase.subtitle}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-[#232323] mb-1 flex items-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: currentPhase.color }} />
                      Emotion
                    </p>
                    <p className="text-sm text-[#474747] bg-gray-50 px-3 py-2 rounded-lg">{currentPhase.emotion}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#232323] mb-1 flex items-center gap-1">
                      <Target className="h-3 w-3" style={{ color: currentPhase.color }} />
                      Ziel des Kunden
                    </p>
                    <p className="text-sm text-[#474747] bg-gray-50 px-3 py-2 rounded-lg">{currentPhase.goal}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#232323] mb-2">Pain Points</p>
                    <div className="space-y-1">
                      {currentPhase.painPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#474747]">
                          <CircleDot className="h-2 w-2 text-[#e24e1b]" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Center: Touchpoints */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h4 className="text-sm font-bold text-[#232323] mb-4 flex items-center gap-2">
                  <Map className="h-4 w-4" style={{ color: currentPhase.color }} />
                  Touchpoints
                </h4>
                <div className="space-y-3">
                  {currentPhase.touchpoints.map((tp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-all"
                      style={{ borderLeftWidth: '3px', borderLeftColor: currentPhase.color }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant="outline"
                          className="text-xs"
                          style={{ borderColor: currentPhase.color, color: currentPhase.color }}
                        >
                          {tp.channel}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#474747]">{tp.action}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Right: Our Actions */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h4 className="text-sm font-bold text-[#232323] mb-4 flex items-center gap-2">
                  <Rocket className="h-4 w-4" style={{ color: currentPhase.color }} />
                  Unsere Aktionen
                </h4>
                <div className="space-y-2">
                  {currentPhase.actions.map((action, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 p-2 rounded-lg"
                      style={{ backgroundColor: `${currentPhase.color}08` }}
                    >
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: currentPhase.color }} />
                      <span className="text-sm text-[#474747]">{action}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stage Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs text-[#474747] mb-2">Journey Progress</p>
                  <div className="flex items-center gap-1">
                    {journeySteps.map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-2 flex-1 rounded-full transition-all",
                          i <= selectedJourneyPhase ? "opacity-100" : "opacity-30"
                        )}
                        style={{ backgroundColor: i <= selectedJourneyPhase ? journeySteps[i].color : '#e5e7eb' }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[#474747] mt-2 text-center">
                    Phase {selectedJourneyPhase + 1} von {journeySteps.length}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedJourneyPhase(Math.max(0, selectedJourneyPhase - 1))}
            disabled={selectedJourneyPhase === 0}
            className="text-[#474747]"
          >
            <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
            Zurück
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedJourneyPhase(Math.min(journeySteps.length - 1, selectedJourneyPhase + 1))}
            disabled={selectedJourneyPhase === journeySteps.length - 1}
            className="text-[#474747]"
          >
            Weiter
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    );
  };

  const renderChannels = () => (
    <div className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-5 gap-4">
        {channels.map((channel, index) => (
          <motion.div
            key={channel.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all border-gray-200 bg-white">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#e24e1b]/10 flex items-center justify-center mx-auto mb-3">
                  <channel.icon className="h-6 w-6 text-[#e24e1b]" />
                </div>
                <p className="font-bold text-[#232323] text-sm mb-3">{channel.name}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#474747]">Share</span>
                    <span className="font-bold text-[#232323]">{channel.share}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c]"
                      initial={{ width: 0 }}
                      animate={{ width: `${channel.share}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs pt-2">
                    <span className="text-[#474747]">CAC</span>
                    <span className="font-bold text-[#e24e1b]">€{channel.cac}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#474747]">LTV</span>
                    <span className="font-bold text-[#39B37B]">€{channel.ltv}</span>
                  </div>
                  <div className="flex justify-between text-xs border-t border-gray-200 pt-2">
                    <span className="text-[#474747]">LTV:CAC</span>
                    <span className="font-bold text-[#232323]">{(channel.ltv / channel.cac).toFixed(1)}x</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderDetailView = () => {
    switch (activeZoom) {
      case 'tam':
        return (
          <div className="grid grid-cols-2 gap-8 h-full">
            {renderTAMPyramid()}
            <div className="flex flex-col justify-center space-y-4">
              <Card className="bg-[#e24e1b]/5 border border-[#e24e1b]/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#e24e1b]/10 rounded-xl">
                      <Building2 className="h-8 w-8 text-[#e24e1b]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#474747] font-medium">Interne DSB Segment</p>
                      <p className="text-2xl font-bold text-[#232323]">{formatCurrency(tam.internal)}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(tamData.internal).map(([key, seg]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-sm text-[#474747]">{seg.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#232323]">{seg.count.toLocaleString('de-DE')}</span>
                          <span className="text-xs font-medium text-[#e24e1b]">× €{seg.price}/Mo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-100 rounded-xl">
                      <Users className="h-8 w-8 text-[#474747]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#474747] font-medium">Externe DSB Segment</p>
                      <p className="text-2xl font-bold text-[#232323]">{formatCurrency(tam.external)}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(tamData.external).map(([key, seg]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-sm text-[#474747]">{seg.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#232323]">{seg.count.toLocaleString('de-DE')}</span>
                          <span className="text-xs font-medium text-[#474747]">× €{seg.price}/Mo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'icp':
        return renderICPCards();
      case 'usecases':
        return renderUseCases();
      case 'funnel':
        return renderSalesFunnel();
      case 'journey':
        return renderCustomerJourney();
      case 'channels':
        return renderChannels();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header className="p-6 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/30 mb-2">
              Growth Strategy 2025
            </Badge>
            <h1 className="text-3xl font-bold text-[#232323]">Marsstein Growth Command Center</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-[#474747] font-medium">Total Addressable Market</p>
              <p className="text-2xl font-bold text-[#e24e1b]">{formatCurrency(tam.total)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#474747] font-medium">Year 1 Target</p>
              <p className="text-2xl font-bold text-[#39B37B]">{formatCurrency(tam.total * 0.07)}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6 pb-24 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activeZoom === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-12 gap-6"
            >
              {/* Left Column - TAM Pyramid */}
              <div className="col-span-4">
                <Card className="bg-white border-gray-200 h-full shadow-sm">
                  <CardContent className="p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-[#232323]">TAM / SAM / SOM</h2>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#e24e1b] hover:text-[#e24e1b] hover:bg-[#e24e1b]/10"
                        onClick={() => setActiveZoom('tam')}
                      >
                        Details <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                    {renderTAMPyramid()}
                  </CardContent>
                </Card>
              </div>

              {/* Center Column - Sales Funnel */}
              <div className="col-span-5">
                <Card className="bg-white border-gray-200 h-full shadow-sm">
                  <CardContent className="p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-[#232323]">Sales Funnel Flow</h2>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#e24e1b] hover:text-[#e24e1b] hover:bg-[#e24e1b]/10"
                        onClick={() => setActiveZoom('funnel')}
                      >
                        Details <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                    {renderSalesFunnel()}
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Flywheel */}
              <div className="col-span-3">
                <Card className="bg-white border-gray-200 h-full shadow-sm">
                  <CardContent className="p-6 h-full">
                    <h2 className="text-lg font-bold text-[#232323] mb-4 text-center">Dual Flywheel</h2>
                    {renderFlywheel()}
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Row - ICP Cards */}
              <div className="col-span-12">
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-[#232323]">ICP Segmente</h2>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#e24e1b] hover:text-[#e24e1b] hover:bg-[#e24e1b]/10"
                        onClick={() => setActiveZoom('icp')}
                      >
                        Alle Details <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                    {renderICPCards()}
                  </CardContent>
                </Card>
              </div>

              {/* Customer Journey Preview */}
              <div className="col-span-8">
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-[#232323]">Customer Journey</h2>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#e24e1b] hover:text-[#e24e1b] hover:bg-[#e24e1b]/10"
                        onClick={() => setActiveZoom('journey')}
                      >
                        Details <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                    {renderCustomerJourney()}
                  </CardContent>
                </Card>
              </div>

              {/* Channels Preview */}
              <div className="col-span-4">
                <Card className="bg-white border-gray-200 h-full shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-[#232323]">Top Channels</h2>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#e24e1b] hover:text-[#e24e1b] hover:bg-[#e24e1b]/10"
                        onClick={() => setActiveZoom('channels')}
                      >
                        Alle <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {channels.slice(0, 3).map((ch) => (
                        <div key={ch.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ch.icon className="h-4 w-4 text-[#e24e1b]" />
                            <span className="text-sm text-[#232323]">{ch.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs border-gray-300 text-[#474747]">
                            {ch.share}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeZoom}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[600px]"
            >
              <Card className="bg-white border-gray-200 h-full shadow-sm">
                <CardContent className="p-8 h-full">
                  {renderDetailView()}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation - Zoom Levels */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 shadow-lg">
        <div className="flex justify-center gap-2 max-w-7xl mx-auto">
          {zoomNavItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => setActiveZoom(item.id as ZoomLevel)}
              variant={activeZoom === item.id ? 'default' : 'outline'}
              className={cn(
                "transition-all duration-300",
                activeZoom === item.id
                  ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg border-0"
                  : "text-[#474747] border-gray-300 hover:text-[#e24e1b] hover:border-[#e24e1b]/50 hover:bg-[#e24e1b]/5"
              )}
            >
              <item.icon className="h-4 w-4 mr-2" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default GrowthPlan2;
