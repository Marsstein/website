import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, motion, useInView } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Shield, Eye, Calendar, BookOpen, Scale, CheckCircle2, AlertTriangle, Settings, FileText, Search, Award, RotateCcw, Network, Building2, TrendingUp, Code, Download, Bookmark, Globe, Clock, Play, CheckCircle, Share2, Circle, Target, CircleDot, Users, Heart, BarChart3, Database, Lock, Building, Activity, ChevronDown, Brain, Euro, Gavel, Lightbulb, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react-router-dom";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const Iso27001Guide = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeNavSection, setActiveNavSection] = useState("overview");
  const [completedSections, setCompletedSections] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedControls, setExpandedControls] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });
  const scrollToSection = (sectionId) => {
    window.history.pushState(null, "", `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveNavSection(hash);
      }, 100);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      const scrollPosition = window.scrollY + 150;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveNavSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const sections = [
    { id: "ueberblick", title: "Überblick", icon: Eye, readTime: "8 Min" },
    { id: "geschichte", title: "Geschichte & Evolution", icon: Calendar, readTime: "12 Min" },
    { id: "grundlagen", title: "ISMS-Grundlagen", icon: BookOpen, readTime: "15 Min" },
    { id: "rechtlicher-rahmen", title: "Rechtlicher Rahmen", icon: Scale, readTime: "10 Min" },
    { id: "anforderungen", title: "Anforderungen (Clauses)", icon: CheckCircle2, readTime: "25 Min" },
    { id: "sicherheitskontrollen", title: "Sicherheitskontrollen", icon: Shield, readTime: "45 Min" },
    { id: "risikomanagement", title: "Risikomanagement", icon: AlertTriangle, readTime: "20 Min" },
    { id: "implementierung", title: "Implementierung", icon: Settings, readTime: "30 Min" },
    { id: "dokumentation", title: "Dokumentation", icon: FileText, readTime: "18 Min" },
    { id: "audit-assessment", title: "Audit & Assessment", icon: Search, readTime: "22 Min" },
    { id: "zertifizierung", title: "Zertifizierung", icon: Award, readTime: "15 Min" },
    { id: "aufrechterhaltung", title: "Aufrechterhaltung", icon: RotateCcw, readTime: "12 Min" },
    { id: "integration-standards", title: "Integration & Standards", icon: Network, readTime: "14 Min" },
    { id: "branchenspezifika", title: "Branchenspezifika", icon: Building2, readTime: "16 Min" },
    { id: "vorteile-roi", title: "Vorteile & ROI", icon: TrendingUp, readTime: "12 Min" },
    { id: "fallstudien", title: "Fallstudien", icon: BookOpen, readTime: "20 Min" },
    { id: "tools-software", title: "Tools & Software", icon: Code, readTime: "10 Min" },
    { id: "ressourcen", title: "Ressourcen", icon: Download, readTime: "8 Min" }
  ];
  const controls = [
    {
      domain: "A.5 - Informationssicherheitspolitiken",
      icon: FileText,
      color: "from-blue-500 to-indigo-600",
      description: "Bereitstellung von Managementrichtlinien und -unterstützung für die Informationssicherheit",
      controls: [
        {
          id: "A.5.1",
          title: "Policys für Informationssicherheit",
          description: "Eine Informationssicherheitspolitik soll definiert, durch das Management genehmigt, veröffentlicht und an alle Mitarbeiter und relevanten externen Parteien kommuniziert werden.",
          purpose: "Bereitstellung von Managementrichtlinien und -unterstützung für die Informationssicherheit in Übereinstimmung mit Geschäftsanforderungen und relevanten Gesetzen und Vorschriften.",
          guidance: "Die Informationssicherheitspolitik sollte: a) in Übereinstimmung mit der Geschäftsstrategie sein; b) einen Rahmen für die Festlegung von Zielen und Grundsätzen für Maßnahmen bezüglich der Informationssicherheit enthalten; c) die strategische Geschäftsrichtung und -ziele berücksichtigen; d) das regulatorische Umfeld berücksichtigen; e) den Kontext für das Risikomanagement festlegen; f) eine Verpflichtung zur kontinuierlichen Verbesserung des ISMS enthalten.",
          implementation: [
            "Management-Genehmigung der Politik",
            "Regelmäßige Überprüfung und Aktualisierung",
            "Kommunikation an alle relevanten Parteien",
            "Integration in Einstellungs- und Schulungsprozesse",
            "Überwachung der Compliance"
          ],
          evidence: [
            "Genehmigte Informationssicherheitspolitik",
            "Nachweis der Kommunikation",
            "Schulungsunterlagen",
            "Überprüfungsprotokolle"
          ]
        }
      ]
    },
    {
      domain: "A.6 - Organisation der Informationssicherheit",
      icon: Building2,
      color: "from-emerald-500 to-teal-600",
      description: "Etablierung eines Managementframeworks zur Initiierung und Kontrolle der Implementierung von Informationssicherheit",
      controls: [
        {
          id: "A.6.1",
          title: "Interne Organisation",
          description: "Etablierung von Rollen und Verantwortlichkeiten für Informationssicherheit innerhalb der Organisation",
          purpose: "Gewährleistung, dass die Informationssicherheit angemessen organisiert ist und Management-Genehmigung und -Unterstützung für Informationssicherheit durch eine klare Managementrichtung und Demonstration der Unterstützung gewährleistet wird.",
          guidance: "Die Organisation sollte: a) Rollen und Verantwortlichkeiten für Informationssicherheit definieren und zuweisen; b) eine Informationssicherheitsfunktion etablieren; c) Kontakte zu relevanten Behörden aufrechterhalten; d) Kontakte zu besonderen Interessengruppen oder anderen speziellen Sicherheitsforen und professionellen Vereinigungen aufrechterhalten; e) Informationssicherheit bei Projektmanagement berücksichtigen.",
          implementation: [
            "Ernennung eines Chief Information Security Officer (CISO)",
            "Bildung eines Informationssicherheitskomitees",
            "Definition von Rollen und Verantwortlichkeiten-Matrix (RACI)",
            "Etablierung von Berichtswegen",
            "Regelmäßige Sicherheitsschulungen für alle Mitarbeiter",
            "Etablierung von Kontakten zu Behörden (BSI, Polizei)",
            "Mitgliedschaft in Sicherheitsforen und Branchenverbänden"
          ],
          evidence: [
            "Organisationsstruktur mit Sicherheitsrollen",
            "Stellenbeschreibungen mit Sicherheitsverantwortlichkeiten",
            "Protokolle des Sicherheitskomitees",
            "Kontaktlisten relevanter Behörden",
            "Schulungsnachweise",
            "Projektmanagement-Richtlinien mit Sicherheitsaspekten"
          ]
        },
        {
          id: "A.6.2",
          title: "Mobile Geräte und Telearbeit",
          description: "Schutz von Informationen beim Zugriff, der Verarbeitung und Speicherung auf mobilen Geräten und bei der Telearbeit",
          purpose: "Gewährleistung der Sicherheit von Telearbeit und der Verwendung mobiler Geräte.",
          guidance: "Die Organisation sollte: a) eine Politik und unterstützende Sicherheitsmaßnahmen zum Schutz von Informationen entwickeln, die von mobilen Geräten aus zugänglich sind; b) eine Politik und unterstützende Sicherheitsmaßnahmen für den Schutz von Informationen implementieren, auf die zugegriffen wird, die verarbeitet werden oder die an Telearbeitsplätzen gespeichert werden.",
          implementation: [
            "Mobile Device Management (MDM) Lösung implementieren",
            "Verschlüsselung aller mobilen Geräte",
            "VPN-Zugang für Telearbeiter",
            "Sichere Konfiguration von Heimarbeitsplätzen",
            "Richtlinien für BYOD (Bring Your Own Device)",
            "Remote-Wipe-Funktionalität",
            "Regelmäßige Sicherheitsupdates",
            "Awareness-Training für mobile Sicherheit"
          ],
          evidence: [
            "Mobile Device Management Policy",
            "Telearbeitsrichtlinien",
            "MDM-System-Konfiguration",
            "VPN-Zugangskontrollen",
            "Verschlüsselungsnachweise",
            "BYOD-Vereinbarungen",
            "Incident-Response-Verfahren für mobile Geräte"
          ]
        }
      ]
    },
    {
      domain: "A.7 - Personalwesen",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      description: "Sicherstellung, dass Mitarbeiter die Verantwortlichkeiten verstehen und für ihre Rollen geeignet sind",
      controls: [
        {
          id: "A.7.1",
          title: "Vor der Beschäftigung",
          description: "Sicherheitsüberprüfungen und Vertragsbedingungen vor der Beschäftigung",
          purpose: "Gewährleistung, dass Mitarbeiter und Auftragnehmer ihre Verantwortlichkeiten verstehen und für die Rollen geeignet sind, für die sie in Betracht gezogen werden.",
          guidance: "Überprüfungen vor der Beschäftigung sollten: a) angemessen für die Geschäftsanforderungen, die Klassifizierung der zu verarbeitenden Informationen und die wahrgenommenen Risiken sein; b) den geltenden Gesetzen, Vorschriften und ethischen Überlegungen entsprechen; c) proportional zum Zugang zu den Einrichtungen sein; d) für alle Kandidaten für eine Beschäftigung, Auftragnehmer und Drittparteien-Benutzer durchgeführt werden.",
          implementation: [
            "Standardisierte Background-Checks je nach Sicherheitsstufe",
            "Überprüfung von Referenzen und Qualifikationen",
            "Identitätsprüfung und Dokumentenverifikation",
            "Kreditwürdigkeitsprüfung für sensitive Positionen",
            "Vereinbarungen über Vertraulichkeit (NDAs)",
            "Sicherheitsklauseln in Arbeitsverträgen",
            "Code of Conduct und ethische Richtlinien",
            "Dokumentation der Überprüfungsergebnisse"
          ],
          evidence: [
            "Standardisierte Background-Check-Verfahren",
            "Dokumentierte Überprüfungsergebnisse",
            "Vertraulichkeitsvereinbarungen",
            "Arbeitsverträge mit Sicherheitsklauseln",
            "Referenz-Überprüfungsformulare",
            "Compliance-Nachweise zu Datenschutzgesetzen"
          ]
        },
        {
          id: "A.7.2",
          title: "Während der Beschäftigung",
          description: "Management-Verantwortlichkeiten während der Beschäftigung zur Gewährleistung der Informationssicherheit",
          purpose: "Gewährleistung, dass Mitarbeiter und Auftragnehmer sich ihrer Informationssicherheitsverantwortlichkeiten bewusst sind und diese erfüllen.",
          guidance: "Das Management sollte: a) von allen Mitarbeitern und Auftragnehmern verlangen, Informationssicherheit in Übereinstimmung mit den etablierten Politiken und Verfahren der Organisation anzuwenden; b) sicherstellen, dass sie über ihre Informationssicherheitsverantwortlichkeiten informiert sind; c) einen formalen Disziplinarprozess für Mitarbeiter implementieren, die Sicherheitsverletzungen begangen haben.",
          implementation: [
            "Umfassendes Onboarding-Programm mit Sicherheitsschulung",
            "Jährliche obligatorische Sicherheitsschulungen",
            "Regelmäßige Phishing-Simulationen",
            "Sicherheitsbewusstsein-Kampagnen",
            "Klare Disziplinarverfahren bei Sicherheitsverstößen",
            "Performance-Reviews mit Sicherheitszielen",
            "Kontinuierliche Weiterbildung in Sicherheitstrends",
            "Melde- und Escalation-Verfahren"
          ],
          evidence: [
            "Schulungsaufzeichnungen und Zertifikate",
            "Onboarding-Checklisten",
            "Phishing-Simulation-Ergebnisse",
            "Disziplinarverfahren-Dokumentation",
            "Performance-Review-Formulare",
            "Sicherheitsbewusstsein-Materialien",
            "Incident-Meldungen"
          ]
        },
        {
          id: "A.7.3",
          title: "Beendigung oder Änderung der Beschäftigung",
          description: "Schutz der Organisationsinteressen bei Beendigung oder Änderung der Beschäftigung",
          purpose: "Schutz der Interessen der Organisation als Teil des Prozesses der Änderung oder Beendigung der Beschäftigung.",
          guidance: "Die Verantwortlichkeiten für die Durchführung der Beendigung oder Änderung der Beschäftigung sollten: a) klar definiert und zugewiesen werden; b) die Rückgabe aller Organisationsvermögen umfassen; c) die Entfernung von Zugriffsrechten umfassen; d) Exit-Interviews umfassen.",
          implementation: [
            "Standardisierte Offboarding-Checklisten",
            "Sofortige Deaktivierung von IT-Zugängen",
            "Rückgabe aller Firmeneigentums (Geräte, Schlüssel, etc.)",
            "Exit-Interviews mit Sicherheitsfokus",
            "Erinnerung an fortbestehende Vertraulichkeitsverpflichtungen",
            "Übertragung von Verantwortlichkeiten und Wissen",
            "Dokumentation der Zugangsdeaktivierung",
            "Follow-up-Verfahren für unvollständige Offboardings"
          ],
          evidence: [
            "Offboarding-Checklisten",
            "IT-Zugangsdeaktivierungs-Logs",
            "Rückgabe-Bestätigungen",
            "Exit-Interview-Protokolle",
            "Vertraulichkeits-Erinnerungen",
            "Wissenstransfer-Dokumentation"
          ]
        }
      ]
    },
    {
      domain: "A.8 - Vermögenswerte-Management",
      icon: Database,
      color: "from-orange-500 to-red-600",
      description: "Identifikation von Organisationsvermögen und Definition angemessener Schutzverantwortlichkeiten",
      controls: [
        { id: "A.8.1", title: "Verantwortung für Vermögenswerte", description: "Inventarisierung und Eigentumsverantwortung für Informationsvermögen" },
        { id: "A.8.2", title: "Informationsklassifizierung", description: "Klassifizierung von Informationen nach Schutzbedarf" },
        { id: "A.8.3", title: "Medienhandhabung", description: "Handhabung von Wechselmedien gemäß Klassifizierungsschema" }
      ]
    },
    {
      domain: "A.9 - Zugangskontrollen",
      icon: Lock,
      color: "from-red-500 to-pink-600",
      description: "Begrenzung des Zugangs zu Informationen und informationsverarbeitenden Einrichtungen",
      controls: [
        { id: "A.9.1", title: "Geschäftsanforderungen für Zugangskontrolle", description: "Zugangskontrollpolicy und Benutzerzugriffsverwaltung" },
        { id: "A.9.2", title: "Benutzerzugriffsverwaltung", description: "Registrierung, Bereitstellung und Widerruf von Benutzerzugriffen" },
        { id: "A.9.3", title: "Benutzerverantwortlichkeiten", description: "Verwendung von geheimen Authentifizierungsinformationen" },
        { id: "A.9.4", title: "Systemzugriffskontrolle", description: "Autorisierte Nutzung und sichere Anmeldeverfahren" }
      ]
    },
    {
      domain: "A.10 - Kryptographie",
      icon: Code,
      color: "from-cyan-500 to-blue-600",
      description: "Gewährleistung einer ordnungsgemäßen und wirksamen Verwendung der Kryptographie",
      controls: [
        { id: "A.10.1", title: "Kryptographische Kontrollen", description: "Policy für die Verwendung kryptographischer Kontrollen und Schlüsselverwaltung" }
      ]
    },
    {
      domain: "A.11 - Physische und umgebende Sicherheit",
      icon: Building,
      color: "from-yellow-500 to-orange-600",
      description: "Verhinderung von unbefugtem physischem Zugang, Schäden und Beeinträchtigungen",
      controls: [
        { id: "A.11.1", title: "Sichere Bereiche", description: "Physischer Schutz und Zugangskontrollen für sichere Bereiche" },
        { id: "A.11.2", title: "Ausrüstung", description: "Schutz von Ausrüstung vor Verlust, Beschädigung, Diebstahl oder Kompromittierung" }
      ]
    },
    {
      domain: "A.12 - Betriebssicherheit",
      icon: Settings,
      color: "from-green-500 to-emerald-600",
      description: "Gewährleistung eines korrekten und sicheren Betriebs der informationsverarbeitenden Einrichtungen",
      controls: [
        { id: "A.12.1", title: "Betriebsverfahren und -verantwortlichkeiten", description: "Dokumentierte Betriebsverfahren und Änderungsmanagement" },
        { id: "A.12.2", title: "Schutz vor Malware", description: "Erkennung und Prävention von Malware" },
        { id: "A.12.3", title: "Datensicherung", description: "Regelmäßige Sicherungskopien von Informationen und Software" },
        { id: "A.12.4", title: "Protokollierung und Überwachung", description: "Aufzeichnung von Ereignissen und Schutz von Protokollinformationen" },
        { id: "A.12.5", title: "Kontrolle von Betriebssoftware", description: "Kontrolle der Installation von Software auf Betriebssystemen" },
        { id: "A.12.6", title: "Management technischer Schwachstellen", description: "Rechtzeitige Informationen über und Management von technischen Schwachstellen" },
        { id: "A.12.7", title: "Überlegungen zum Informationssystem-Audit", description: "Minimierung der Auswirkungen von Audit-Aktivitäten auf Betriebssysteme" }
      ]
    },
    {
      domain: "A.13 - Kommunikationssicherheit",
      icon: Network,
      color: "from-indigo-500 to-purple-600",
      description: "Gewährleistung des Schutzes von Informationen in Netzwerken und unterstützenden informationsverarbeitenden Einrichtungen",
      controls: [
        { id: "A.13.1", title: "Netzwerksicherheitsmanagement", description: "Management und Kontrolle von Netzwerken zum Schutz von Informationen" },
        { id: "A.13.2", title: "Informationsübertragung", description: "Wahrung der Sicherheit übertragener Informationen innerhalb und außerhalb der Organisation" }
      ]
    },
    {
      domain: "A.14 - Systemakquisition, -entwicklung und -wartung",
      icon: Code,
      color: "from-pink-500 to-rose-600",
      description: "Gewährleistung, dass Informationssicherheit ein integraler Bestandteil von Informationssystemen ist",
      controls: [
        { id: "A.14.1", title: "Sicherheitsanforderungen für Informationssysteme", description: "Spezifikation und Tests von Sicherheitsanforderungen" },
        { id: "A.14.2", title: "Sicherheit in Entwicklungs- und Unterstützungsprozessen", description: "Sichere Entwicklungsrichtlinien und -kontrollen" },
        { id: "A.14.3", title: "Testdaten", description: "Schutz von Testdaten" }
      ]
    },
    {
      domain: "A.15 - Lieferantenbeziehungen",
      icon: Building2,
      color: "from-teal-500 to-cyan-600",
      description: "Gewährleistung des Schutzes der Organisationsvermögen, die für Lieferanten zugänglich sind",
      controls: [
        { id: "A.15.1", title: "Informationssicherheit in Lieferantenbeziehungen", description: "Sicherheitsanforderungen für Lieferantenverträge" },
        { id: "A.15.2", title: "Lieferanten-Service-Bereitstellungsmanagement", description: "Überwachung und Überprüfung von Lieferanten-Services" }
      ]
    },
    {
      domain: "A.16 - Behandlung von Informationssicherheitsvorfällen",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-600",
      description: "Gewährleistung eines konsistenten und wirksamen Ansatzes für das Management von Informationssicherheitsvorfällen",
      controls: [
        { id: "A.16.1", title: "Management von Informationssicherheitsvorfällen und Verbesserungen", description: "Verantwortlichkeiten, Verfahren und kontinuierliche Verbesserung der Vorfallbehandlung" }
      ]
    },
    {
      domain: "A.17 - Informationssicherheitsaspekte des Business Continuity Management",
      icon: Activity,
      color: "from-violet-500 to-purple-600",
      description: "Kontinuität des Informationssicherheitsmanagements unter widrigen Bedingungen",
      controls: [
        { id: "A.17.1", title: "Kontinuität der Informationssicherheit", description: "Planung und Implementierung von Informationssicherheitskontinuität" },
        { id: "A.17.2", title: "Redundanz", description: "Verfügbarkeit von informationsverarbeitenden Einrichtungen" }
      ]
    },
    {
      domain: "A.18 - Compliance",
      icon: Scale,
      color: "from-amber-500 to-yellow-600",
      description: "Vermeidung von Verstößen gegen gesetzliche, regulatorische oder vertragliche Verpflichtungen",
      controls: [
        { id: "A.18.1", title: "Compliance mit gesetzlichen und vertraglichen Anforderungen", description: "Identifikation und Erfüllung rechtlicher Anforderungen" },
        { id: "A.18.2", title: "Informationssicherheitsreviews", description: "Regelmäßige Überprüfung der Informationssicherheit" }
      ]
    }
  ];
  const certificationSteps = [
    {
      phase: "Phase 1: Vorbereitung",
      duration: "3-6 Monate",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      steps: [
        "Gap-Analyse durchführen",
        "ISMS-Dokumentation erstellen",
        "Risikobewertung durchführen",
        "Sicherheitsziele definieren",
        "Statement of Applicability (SoA) erstellen"
      ]
    },
    {
      phase: "Phase 2: Implementierung",
      duration: "6-12 Monate",
      icon: Settings,
      color: "from-emerald-500 to-teal-600",
      steps: [
        "Sicherheitskontrollen implementieren",
        "Mitarbeiter schulen",
        "Prozesse etablieren",
        "Interne Audits durchführen",
        "Management Review abhalten"
      ]
    },
    {
      phase: "Phase 3: Zertifizierung",
      duration: "2-3 Monate",
      icon: Award,
      color: "from-purple-500 to-pink-600",
      steps: [
        "Zertifizierungsstelle auswählen",
        "Stage 1 Audit (Dokumentenprüfung)",
        "Stage 2 Audit (Implementierungsprüfung)",
        "Nicht-Konformitäten beheben",
        "Zertifikat erhalten"
      ]
    },
    {
      phase: "Phase 4: Aufrechterhaltung",
      duration: "Kontinuierlich",
      icon: RotateCcw,
      color: "from-orange-500 to-red-600",
      steps: [
        "Überwachungsaudits (jährlich)",
        "Kontinuierliche Verbesserung",
        "Rezertifizierung (alle 3 Jahre)",
        "Incident Management",
        "Aktualisierung der Dokumentation"
      ]
    }
  ];
  const benefits = [
    {
      category: "Geschäftliche Vorteile",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
      items: [
        { title: "Risikoreduktion", description: "Systematische Identifikation und Behandlung von Informationssicherheitsrisiken", impact: "70% weniger Sicherheitsvorfälle" },
        { title: "Wettbewerbsvorteil", description: "Differenzierung im Markt durch nachgewiesene Sicherheitsstandards", impact: "25% höhere Kundenakquisition" },
        { title: "Kostenersparnis", description: "Reduzierung von Kosten durch Sicherheitsvorfälle und Ausfallzeiten", impact: "ROI von 300-400%" },
        { title: "Compliance-Erfüllung", description: "Erfüllung regulatorischer Anforderungen (DSGVO, SOX, etc.)", impact: "Vermeidung von Bußgeldern" }
      ]
    },
    {
      category: "Operative Vorteile",
      icon: Settings,
      color: "from-blue-500 to-indigo-600",
      items: [
        { title: "Prozessoptimierung", description: "Standardisierung und Verbesserung von Sicherheitsprozessen", impact: "40% effizientere Prozesse" },
        { title: "Mitarbeitersensibilisierung", description: "Erhöhtes Bewusstsein für Informationssicherheit", impact: "60% weniger menschliche Fehler" },
        { title: "Incident Response", description: "Strukturierte Behandlung von Sicherheitsvorfällen", impact: "50% schnellere Reaktionszeiten" },
        { title: "Kontinuierliche Verbesserung", description: "Systematischer Ansatz zur kontinuierlichen Verbesserung", impact: "Jährliche Steigerung um 15%" }
      ]
    },
    {
      category: "Strategische Vorteile",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      items: [
        { title: "Kundenvertrauen", description: "Stärkung des Vertrauens durch nachgewiesene Sicherheit", impact: "85% höhere Kundenzufriedenheit" },
        { title: "Internationale Anerkennung", description: "Weltweite Anerkennung des ISO 27001 Standards", impact: "Zugang zu globalen Märkten" },
        { title: "Lieferantenstatus", description: "Voraussetzung für Geschäfte mit sicherheitsbewussten Unternehmen", impact: "45% mehr Geschäftschancen" },
        { title: "Investorenschutz", description: "Schutz vor reputationsbedingten Wertverlusten", impact: "Stabilere Unternehmensbewertung" }
      ]
    }
  ];
  const handleSectionComplete = (sectionId) => {
    setCompletedSections(
      (prev) => prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };
  const toggleControlExpansion = (controlId) => {
    setExpandedControls((prev) => ({
      ...prev,
      [controlId]: !prev[controlId]
    }));
  };
  const handleItemCheck = (itemId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrolled / maxScroll * 100;
        setReadingProgress(Math.min(progress, 100));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const CounterAnimation = ({ value, suffix = "", duration = 2e3 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
      if (isInView) {
        let startTime;
        const startValue = 0;
        const endValue = value;
        const animate = (currentTime) => {
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
    return /* @__PURE__ */ jsxs("span", { ref, children: [
      count,
      suffix
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", style: {
    wordWrap: "break-word",
    overflowWrap: "break-word"
  }, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 mr-1" }),
            "ISO 27001 Guide"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
            "Abschnitt ",
            sections.findIndex((s) => s.id === activeNavSection) + 1,
            " von ",
            sections.length
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm text-slate-400", children: [
            Math.round(readingProgress),
            "% gelesen"
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => setBookmarked(!bookmarked),
              variant: "ghost",
              size: "sm",
              className: "text-slate-400 hover:text-yellow-400",
              children: /* @__PURE__ */ jsx(Bookmark, { className: cn("h-4 w-4", bookmarked && "fill-current text-yellow-400") })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Progress, { value: readingProgress, className: "h-1" })
    ] }) }),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        className: "relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" }),
          /* @__PURE__ */ jsx("div", { className: "relative container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl", children: /* @__PURE__ */ jsx(Shield, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white", children: "ISO 27001" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-400", children: "Information Security Management" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300 mb-8 leading-relaxed", children: "Der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). Lernen Sie, wie Sie systematisch die Informationssicherheit in Ihrem Unternehmen managen und zertifizieren lassen." }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-8", children: [
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-blue-500/10 border-blue-500/20 text-blue-300", children: [
                      /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 mr-2" }),
                      "Zertifizierbar"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", children: [
                      /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 mr-2" }),
                      "International anerkannt"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-purple-500/10 border-purple-500/20 text-purple-300", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 mr-2" }),
                      "6-12 Monate Implementierung"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => scrollToSection("fundamentals"),
                        className: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
                        children: [
                          /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 mr-2" }),
                          "Guide starten"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "border-slate-600 text-slate-300 hover:bg-slate-700", children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                      "PDF herunterladen"
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 27e3, suffix: "+" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Zertifizierte Unternehmen" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-emerald-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 170, suffix: "+" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Länder" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-purple-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 114 }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Kontrollen" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-orange-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 94, suffix: "%" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Kundenzufriedenheit" })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-4", children: "Was Sie in diesem Guide lernen" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                      "ISMS-Grundlagen und Anforderungen",
                      "Alle 114 Sicherheitskontrollen im Detail",
                      "Schritt-für-Schritt Implementierungsplan",
                      "Zertifizierungsprozess und Vorbereitung",
                      "ROI-Berechnung und Business Case"
                    ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: item })
                    ] }, index)) })
                  ] }) })
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: sections.map((item, index) => {
      const IconComponent = item.icon;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            scrollToSection(item.id);
            setActiveNavSection(item.id);
          },
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
            activeNavSection === item.id ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : "hover:bg-slate-800/50 hover:text-slate-300 text-slate-400",
            "border",
            activeNavSection === item.id ? "border-blue-500/30" : "border-transparent hover:border-slate-700"
          ),
          children: [
            /* @__PURE__ */ jsx(IconComponent, { className: cn(
              "h-4 w-4",
              activeNavSection === item.id && "text-blue-400"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeNavSection === item.id && "text-blue-300"
            ), children: item.title })
          ]
        },
        item.id
      );
    }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 py-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-6 lg:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-32 space-y-6", children: [
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Fortschritt" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Gesamtfortschritt" }),
                /* @__PURE__ */ jsxs("span", { className: "text-blue-400", children: [
                  Math.round(readingProgress),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: readingProgress, className: "h-2" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
              completedSections.length,
              " von ",
              sections.length,
              " Abschnitten gelesen"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Schnellaktionen" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
              "Checkliste herunterladen"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
              "Template-Sammlung"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 mr-2" }),
              "Guide teilen"
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxs("div", { ref: contentRef, className: "space-y-20", children: [
          /* @__PURE__ */ jsx("section", { id: "ueberblick", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Überblick" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("overview"),
                      variant: completedSections.includes("overview") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("overview") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "prose prose-invert prose-slate max-w-none", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300 leading-relaxed mb-6", children: "ISO 27001 ist der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). Er bietet einen systematischen Ansatz zur Verwaltung sensibler Unternehmensinformationen und hilft dabei, diese sicher zu halten." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-blue-300 mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-5 w-5" }),
                        "Hauptziele"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Schutz der Vertraulichkeit, Integrität und Verfügbarkeit von Informationen" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Systematisches Risikomanagement" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Kontinuierliche Verbesserung der Informationssicherheit" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Nachweisbare Compliance gegenüber Stakeholdern" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" }),
                        "Anwendungsbereiche"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Alle Organisationsgrößen und -typen" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Besonders relevant für IT-Dienstleister" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Finanzdienstleister und Healthcare" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Kritische Infrastrukturen" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Warum ISO 27001?" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-500 rounded-xl w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-white" }) }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Risikominimierung" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Systematische Identifikation und Behandlung von Sicherheitsrisiken" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500 rounded-xl w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-white" }) }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Wettbewerbsvorteil" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Differenzierung durch nachgewiesene Sicherheitsstandards" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-500 rounded-xl w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-white" }) }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Compliance" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Erfüllung regulatorischer und vertraglicher Anforderungen" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" }),
          /* @__PURE__ */ jsx("section", { id: "geschichte", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Geschichte & Evolution von ISO 27001" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("history"),
                      variant: completedSections.includes("history") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("history") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6 text-center", children: "Entwicklungstimeline" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                      {
                        year: "1995",
                        title: "BS 7799-1",
                        description: 'British Standard 7799-1 "Code of Practice for Information Security Management" wird von BSI veröffentlicht',
                        milestone: "Erster Standard",
                        color: "bg-blue-500"
                      },
                      {
                        year: "1998",
                        title: "BS 7799-2",
                        description: 'British Standard 7799-2 "Specification for Information Security Management Systems" für Zertifizierung',
                        milestone: "Zertifizierungsstandard",
                        color: "bg-emerald-500"
                      },
                      {
                        year: "2000",
                        title: "ISO/IEC 17799",
                        description: "BS 7799-1 wird als internationaler Standard ISO/IEC 17799 übernommen",
                        milestone: "Internationalisierung",
                        color: "bg-purple-500"
                      },
                      {
                        year: "2005",
                        title: "ISO/IEC 27001:2005",
                        description: "Erste Version von ISO 27001 basierend auf BS 7799-2, Einführung des ISMS-Konzepts",
                        milestone: "ISO 27001 geboren",
                        color: "bg-orange-500"
                      },
                      {
                        year: "2013",
                        title: "ISO/IEC 27001:2013",
                        description: "Große Überarbeitung mit Annex SL High Level Structure, PDCA-Zyklus verbessert",
                        milestone: "Modernisierung",
                        color: "bg-red-500"
                      },
                      {
                        year: "2022",
                        title: "ISO/IEC 27001:2022",
                        description: "Aktuelle Version mit 11 neuen Kontrollen, Cloud- und Remote-Work-Fokus",
                        milestone: "Digitale Transformation",
                        color: "bg-cyan-500"
                      }
                    ].map((item, index) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: "flex items-start gap-4",
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0", children: [
                            /* @__PURE__ */ jsx("div", { className: cn("w-12 h-12 rounded-full flex items-center justify-center text-white font-bold", item.color), children: item.year.slice(-2) }),
                            index < 5 && /* @__PURE__ */ jsx("div", { className: "w-0.5 h-16 bg-slate-600 ml-6 mt-2" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-slate-800/50 rounded-lg p-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                              /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: item.title }),
                              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: item.milestone })
                            ] }),
                            /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: item.description })
                          ] })
                        ]
                      },
                      item.year
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-emerald-400" }),
                        "Wichtige Verbesserungen 2022"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                        "Neue Kontrollen für Cloud Computing",
                        "Remote Working Sicherheit",
                        "Data Loss Prevention (DLP)",
                        "Web Filtering",
                        "Application Security",
                        "Configuration Management",
                        "Information Deletion",
                        "Data Masking",
                        "Data Leakage Prevention",
                        "Network Monitoring",
                        "Privileged Access Management"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: item })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-blue-400" }),
                        "Globale Adoption"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400 mb-1", children: "27.000+" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Zertifizierte Organisationen weltweit" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-emerald-400 mb-1", children: "170+" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Länder mit ISO 27001 Zertifizierungen" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400 mb-1", children: "15%" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Jährliches Wachstum der Zertifizierungen" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Branchenauswirkungen" }),
                    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                      {
                        sector: "Finanzdienstleistungen",
                        impact: "Regulatorische Compliance (Basel III, MiFID II)",
                        adoption: "85%",
                        color: "text-green-400"
                      },
                      {
                        sector: "Gesundheitswesen",
                        impact: "Schutz von Patientendaten (HIPAA, MDR)",
                        adoption: "72%",
                        color: "text-blue-400"
                      },
                      {
                        sector: "Cloud-Provider",
                        impact: "Vertrauensnachweis für Enterprise-Kunden",
                        adoption: "91%",
                        color: "text-purple-400"
                      }
                    ].map((sector) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/30 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: sector.sector }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-3", children: sector.impact }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-400", children: "Adoption:" }),
                        /* @__PURE__ */ jsx("span", { className: cn("font-bold", sector.color), children: sector.adoption })
                      ] })
                    ] }, sector.sector)) })
                  ] })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "grundlagen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "ISMS-Grundlagen" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("fundamentals"),
                      variant: completedSections.includes("fundamentals") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("fundamentals") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6 text-center", children: "PDCA-Zyklus in ISO 27001" }),
                    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                      {
                        phase: "Plan",
                        icon: Target,
                        color: "from-blue-500 to-indigo-600",
                        description: "ISMS etablieren",
                        activities: ["Kontext bestimmen", "Leadership", "Planung", "Unterstützung"]
                      },
                      {
                        phase: "Do",
                        icon: Settings,
                        color: "from-emerald-500 to-teal-600",
                        description: "ISMS implementieren",
                        activities: ["Betrieb", "Risikobewertung", "Kontrollen umsetzen", "Training"]
                      },
                      {
                        phase: "Check",
                        icon: Eye,
                        color: "from-orange-500 to-red-600",
                        description: "ISMS überwachen",
                        activities: ["Leistungsbewertung", "Interne Audits", "Management Review", "Überwachung"]
                      },
                      {
                        phase: "Act",
                        icon: TrendingUp,
                        color: "from-purple-500 to-pink-600",
                        description: "ISMS verbessern",
                        activities: ["Verbesserung", "Nicht-Konformitäten", "Korrekturmaßnahmen", "Innovation"]
                      }
                    ].map((phase, index) => {
                      const IconComponent = phase.icon;
                      return /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5, delay: index * 0.1 },
                          className: "text-center",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: cn(
                              "p-4 rounded-xl bg-gradient-to-r w-fit mx-auto mb-4",
                              phase.color
                            ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-8 w-8 text-white" }) }),
                            /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-white mb-2", children: phase.phase }),
                            /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-4", children: phase.description }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm text-slate-300", children: phase.activities.map((activity, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 justify-center", children: [
                              /* @__PURE__ */ jsx(CircleDot, { className: "h-3 w-3 text-slate-500" }),
                              activity
                            ] }, idx)) })
                          ]
                        },
                        phase.phase
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    {
                      title: "Informationssicherheit",
                      icon: Shield,
                      color: "from-blue-500 to-indigo-600",
                      concepts: [
                        { term: "Vertraulichkeit", definition: "Information ist nur für autorisierte Personen zugänglich" },
                        { term: "Integrität", definition: "Information ist vollständig, genau und unverändert" },
                        { term: "Verfügbarkeit", definition: "Information ist zugänglich, wenn sie benötigt wird" }
                      ]
                    },
                    {
                      title: "Risikomanagement",
                      icon: AlertTriangle,
                      color: "from-red-500 to-orange-600",
                      concepts: [
                        { term: "Risikoidentifikation", definition: "Systematische Ermittlung von Sicherheitsrisiken" },
                        { term: "Risikobewertung", definition: "Analyse der Eintrittswahrscheinlichkeit und Auswirkungen" },
                        { term: "Risikobehandlung", definition: "Auswahl und Implementierung von Kontrollmaßnahmen" }
                      ]
                    }
                  ].map((section) => {
                    const IconComponent = section.icon;
                    return /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: cn(
                          "p-2 rounded-lg bg-gradient-to-r",
                          section.color
                        ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5 text-white" }) }),
                        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: section.title })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: section.concepts.map((concept) => /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-slate-200 mb-1", children: concept.term }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: concept.definition })
                      ] }, concept.term)) })
                    ] }, section.title);
                  }) })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "anforderungen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Anforderungen (Clauses 4-10)" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("requirements"),
                      variant: completedSections.includes("requirements") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("requirements") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                  {
                    clause: "4. Kontext der Organisation",
                    icon: Building2,
                    color: "from-blue-500 to-indigo-600",
                    requirements: [
                      "Verstehen der Organisation und ihres Kontexts",
                      "Verstehen der Erfordernisse und Erwartungen interessierter Parteien",
                      "Bestimmung des Anwendungsbereichs des ISMS",
                      "Informationssicherheits-Managementsystem"
                    ]
                  },
                  {
                    clause: "5. Führung",
                    icon: Users,
                    color: "from-emerald-500 to-teal-600",
                    requirements: [
                      "Führung und Verpflichtung",
                      "Informationssicherheitspolitik",
                      "Rollen, Verantwortlichkeiten und Befugnisse in der Organisation"
                    ]
                  },
                  {
                    clause: "6. Planung",
                    icon: Target,
                    color: "from-purple-500 to-pink-600",
                    requirements: [
                      "Maßnahmen zum Umgang mit Risiken und Chancen",
                      "Informationssicherheitsziele und Planung zu deren Erreichung"
                    ]
                  },
                  {
                    clause: "7. Unterstützung",
                    icon: Heart,
                    color: "from-orange-500 to-red-600",
                    requirements: [
                      "Ressourcen",
                      "Kompetenz",
                      "Bewusstsein",
                      "Kommunikation",
                      "Dokumentierte Information"
                    ]
                  },
                  {
                    clause: "8. Betrieb",
                    icon: Settings,
                    color: "from-cyan-500 to-blue-600",
                    requirements: [
                      "Betriebsplanung und -steuerung",
                      "Informationssicherheits-Risikobewertung",
                      "Informationssicherheits-Risikobehandlung"
                    ]
                  },
                  {
                    clause: "9. Bewertung der Leistung",
                    icon: BarChart3,
                    color: "from-yellow-500 to-orange-600",
                    requirements: [
                      "Überwachung, Messung, Analyse und Bewertung",
                      "Internes Audit",
                      "Managementbewertung"
                    ]
                  },
                  {
                    clause: "10. Verbesserung",
                    icon: TrendingUp,
                    color: "from-green-500 to-emerald-600",
                    requirements: [
                      "Nichtkonformität und Korrekturmaßnahmen",
                      "Fortlaufende Verbesserung"
                    ]
                  }
                ].map((section, index) => {
                  const IconComponent = section.icon;
                  return /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.5, delay: index * 0.1 },
                      className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700",
                      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                        /* @__PURE__ */ jsx("div", { className: cn(
                          "p-3 rounded-xl bg-gradient-to-r flex-shrink-0",
                          section.color
                        ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-3", children: section.clause }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: section.requirements.map((requirement, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: requirement })
                          ] }, idx)) })
                        ] })
                      ] })
                    },
                    section.clause
                  );
                }) })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "sicherheitskontrollen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Sicherheitskontrollen (Annex A)" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("controls"),
                      variant: completedSections.includes("controls") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("controls") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-300 mb-3", children: "Über Annex A" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Annex A enthält 114 Sicherheitskontrollen in 14 Kategorien. Diese sind als Referenzkatalog zu verstehen - nicht alle Kontrollen müssen implementiert werden. Die Auswahl erfolgt basierend auf der Risikobewertung." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: "14" }),
                      /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: "Kategorien" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-emerald-400", children: "114" }),
                      /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: "Kontrollen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "100%" }),
                      /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: "Abgedeckt" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: controls.map((domain, index) => {
                  const IconComponent = domain.icon;
                  const isExpanded = expandedControls[domain.domain];
                  return /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: index * 0.05 },
                      className: "border border-slate-700 rounded-xl overflow-hidden",
                      children: [
                        /* @__PURE__ */ jsxs(
                          "button",
                          {
                            onClick: () => toggleControlExpansion(domain.domain),
                            className: "w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                                /* @__PURE__ */ jsx("div", { className: cn(
                                  "p-3 rounded-xl bg-gradient-to-r",
                                  domain.color
                                ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: domain.domain }),
                                  /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: domain.description })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                                /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                                  domain.controls.length,
                                  " Kontrollen"
                                ] }),
                                /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                                  "h-5 w-5 text-slate-400 transition-transform duration-200",
                                  isExpanded && "rotate-180"
                                ) })
                              ] })
                            ]
                          }
                        ),
                        isExpanded && /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            initial: { opacity: 0, height: 0 },
                            animate: { opacity: 1, height: "auto" },
                            exit: { opacity: 0, height: 0 },
                            transition: { duration: 0.3 },
                            className: "bg-slate-800/30 border-t border-slate-700",
                            children: /* @__PURE__ */ jsx("div", { className: "p-6 space-y-4", children: domain.controls.map((control) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg", children: [
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "checkbox",
                                  id: control.id,
                                  checked: checkedItems[control.id] || false,
                                  onChange: () => handleItemCheck(control.id),
                                  className: "mt-1 rounded border-slate-600 text-blue-500 focus:ring-blue-500"
                                }
                              ),
                              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-white mb-1", children: [
                                  control.id,
                                  " - ",
                                  control.title
                                ] }),
                                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: control.description })
                              ] })
                            ] }, control.id)) })
                          }
                        )
                      ]
                    },
                    domain.domain
                  );
                }) })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "implementierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Implementierungsplan" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("implementation"),
                      variant: completedSections.includes("implementation") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("implementation") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-4 text-center", children: "Typische Implementierungszeit: 12-18 Monate" }),
                    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-4", children: [
                      { phase: "Vorbereitung", duration: "3-6 Monate", color: "bg-blue-500" },
                      { phase: "Implementierung", duration: "6-12 Monate", color: "bg-emerald-500" },
                      { phase: "Zertifizierung", duration: "2-3 Monate", color: "bg-purple-500" },
                      { phase: "Aufrechterhaltung", duration: "Kontinuierlich", color: "bg-orange-500" }
                    ].map((phase) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: cn("h-2 rounded-full mb-2", phase.color) }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: phase.phase }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: phase.duration })
                    ] }, phase.phase)) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-6", children: certificationSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700",
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                          /* @__PURE__ */ jsx("div", { className: cn(
                            "p-3 rounded-xl bg-gradient-to-r flex-shrink-0",
                            step.color
                          ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: step.phase }),
                              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: step.duration })
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: step.steps.map((stepItem, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "checkbox",
                                  id: `${step.phase}-${idx}`,
                                  checked: checkedItems[`${step.phase}-${idx}`] || false,
                                  onChange: () => handleItemCheck(`${step.phase}-${idx}`),
                                  className: "mt-1 rounded border-slate-600 text-blue-500 focus:ring-blue-500"
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                "label",
                                {
                                  htmlFor: `${step.phase}-${idx}`,
                                  className: "text-slate-300 cursor-pointer hover:text-white transition-colors",
                                  children: stepItem
                                }
                              )
                            ] }, idx)) })
                          ] })
                        ] })
                      },
                      step.phase
                    );
                  }) })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "zertifizierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Zertifizierungsprozess" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("certification"),
                      variant: completedSections.includes("certification") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("certification") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6 text-center", children: "Zwei-Stufen-Audit-Prozess" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                          /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-500 rounded-lg", children: /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-white" }) }),
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "Stage 1: Dokumenten-Audit" })
                        ] }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: "Überprüfung der ISMS-Dokumentation" })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: "Bewertung der Anwendbarkeitserklärung" })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: "Vorbereitung auf Stage 2" })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: "Dauer: 1-2 Tage" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                          /* @__PURE__ */ jsx("div", { className: "p-2 bg-emerald-500 rounded-lg", children: /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-white" }) }),
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "Stage 2: Implementierungs-Audit" })
                        ] }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: "Bewertung der ISMS-Implementierung" })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: "Überprüfung der Wirksamkeit" })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: "Interviews mit Mitarbeitern" })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: "Dauer: 2-5 Tage" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Akkreditierte Zertifizierungsstellen" }),
                    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                      { name: "TÜV SÜD", speciality: "Automotive, Healthcare", market: "DACH-Region" },
                      { name: "BSI Group", speciality: "IT, Finance", market: "International" },
                      { name: "SGS", speciality: "Manufacturing, Energy", market: "Global" },
                      { name: "DQS", speciality: "Public Sector", market: "Deutschland" },
                      { name: "DEKRA", speciality: "Critical Infrastructure", market: "Europa" },
                      { name: "Bureau Veritas", speciality: "Maritime, Oil & Gas", market: "International" }
                    ].map((body) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: body.name }),
                      /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-400 mb-1", children: [
                        "Spezialisierung: ",
                        body.speciality
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-400", children: [
                        "Markt: ",
                        body.market
                      ] })
                    ] }, body.name)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-emerald-300 mb-4", children: "Zertifizierungskosten" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: "Initiale Zertifizierung" }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-slate-300", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Kleine Unternehmen (<50 MA)" }),
                            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "€8.000 - €15.000" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Mittlere Unternehmen (50-250 MA)" }),
                            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "€15.000 - €30.000" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Große Unternehmen (>250 MA)" }),
                            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "€30.000 - €60.000" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: "Jährliche Kosten" }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-slate-300", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Überwachungsaudits" }),
                            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "€3.000 - €8.000" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Rezertifizierung (alle 3 Jahre)" }),
                            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "60-80% der Erstkosten" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Interne Ressourcen" }),
                            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "0.5-2 FTE" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "vorteile-roi", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Vorteile & ROI" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("benefits"),
                      variant: completedSections.includes("benefits") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("benefits") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-green-300 mb-6 text-center", children: "Typischer ROI von ISO 27001" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-green-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 300, suffix: "%" }) }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "ROI nach 3 Jahren" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-blue-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 70, suffix: "%" }) }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Weniger Sicherheitsvorfälle" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-purple-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 25, suffix: "%" }) }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Höhere Kundenakquisition" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-orange-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 15, suffix: "%" }) }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Jährliche Verbesserung" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-6", children: benefits.map((category, index) => {
                    const IconComponent = category.icon;
                    return /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700",
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                            /* @__PURE__ */ jsx("div", { className: cn(
                              "p-3 rounded-xl bg-gradient-to-r",
                              category.color
                            ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: category.category })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: category.items.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: item.title }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-3", children: item.description }),
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-400" }),
                              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-400", children: item.impact })
                            ] })
                          ] }, item.title)) })
                        ]
                      },
                      category.category
                    );
                  }) })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "rechtlicher-rahmen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Rechtlicher Rahmen & Compliance" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("legal"),
                      variant: completedSections.includes("legal") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("legal") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6", children: "EU-Regulierungen & ISO 27001" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-400" }),
                          "DSGVO/GDPR Kompatibilität"
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "ISO 27001 unterstützt DSGVO-Compliance durch strukturierte Sicherheitskontrollen:" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                            "A.8.2 - Informationsklassifizierung (Art. 25 DSGVO)",
                            "A.9 - Zugangskontrollen (Art. 32 DSGVO)",
                            "A.16 - Incident Management (Art. 33/34 DSGVO)",
                            "A.12.3 - Backup-Systeme (Art. 32 DSGVO)",
                            "A.10.1 - Verschlüsselung (Art. 32 DSGVO)"
                          ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: item })
                          ] }, idx)) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Network, { className: "h-5 w-5 text-emerald-400" }),
                          "NIS2-Direktive"
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "NIS2 verlangt angemessene Cybersicherheitsmaßnahmen, die ISO 27001 abdeckt:" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                            "Risikomanagement und Governance",
                            "Business Continuity Management",
                            "Lieferantensicherheit",
                            "Incident Response und Meldung",
                            "Vulnerability Management"
                          ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: item })
                          ] }, idx)) })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    {
                      title: "Finanzsektor",
                      icon: Euro,
                      color: "text-green-400",
                      regulations: ["PCI DSS", "Basel III", "MiFID II", "BAIT", "VAIT"],
                      mapping: "ISO 27001 ergänzt regulatorische Anforderungen durch systematisches ISMS"
                    },
                    {
                      title: "Gesundheitswesen",
                      icon: Heart,
                      color: "text-red-400",
                      regulations: ["HIPAA", "MDR", "IVDR", "DiGA-V", "TI-Richtlinie"],
                      mapping: "Schutz von Patientendaten durch technische und organisatorische Maßnahmen"
                    },
                    {
                      title: "Kritische Infrastrukturen",
                      icon: Activity,
                      color: "text-orange-400",
                      regulations: ["KRITIS-V", "IT-SiG 2.0", "BSI-KritisV", "UP KRITIS"],
                      mapping: "Erfüllung besonderer Sicherheitsanforderungen für systemrelevante Betreiber"
                    }
                  ].map((sector) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx(sector.icon, { className: cn("h-6 w-6", sector.color) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: sector.title })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Relevante Regulierungen:" }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: sector.regulations.map((reg) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: reg }, reg)) })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: sector.mapping })
                    ] })
                  ] }, sector.title)) }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Deutsche Zertifizierungslandschaft" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Akkreditierte Zertifizierungsstellen" }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                          { name: "TÜV SÜD", scope: "Vollumfang, internationale Präsenz" },
                          { name: "TÜV NORD", scope: "Fokus auf Industrie 4.0" },
                          { name: "DQS", scope: "Managementsysteme, KMU-Fokus" },
                          { name: "DEKRA", scope: "Automotive, kritische Infrastrukturen" },
                          { name: "Bureau Veritas", scope: "International, Multi-Standard" }
                        ].map((cert) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-semibold text-blue-300", children: cert.name }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: cert.scope })
                        ] }, cert.name)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Rechtliche Grundlagen" }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                          /* @__PURE__ */ jsxs("div", { className: "bg-blue-500/10 border border-blue-500/20 rounded-lg p-4", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-300 mb-2", children: "Akkreditierung nach DIN EN ISO/IEC 17021" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Deutsche Akkreditierungsstelle (DAkkS) überwacht Zertifizierungsstellen" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-300 mb-2", children: "Internationale Anerkennung" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "IAF MLA (International Accreditation Forum Mutual Recognition Arrangement)" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "risikomanagement", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Risikomanagement-Methodologie" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("riskmanagement"),
                      variant: completedSections.includes("riskmanagement") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("riskmanagement") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-300 mb-6 text-center", children: "ISO 27001 Risikomanagement-Prozess" }),
                    /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-4 gap-6", children: [
                      {
                        phase: "Identifikation",
                        icon: Search,
                        color: "from-blue-500 to-indigo-600",
                        description: "Assets, Bedrohungen & Schwachstellen",
                        activities: [
                          "Asset-Inventarisierung",
                          "Threat Modeling",
                          "Vulnerability Assessment",
                          "Dependency Mapping"
                        ]
                      },
                      {
                        phase: "Analyse",
                        icon: BarChart3,
                        color: "from-emerald-500 to-teal-600",
                        description: "Wahrscheinlichkeit & Auswirkung",
                        activities: [
                          "Likelihood Assessment",
                          "Impact Analysis",
                          "Risk Scoring",
                          "Scenario Development"
                        ]
                      },
                      {
                        phase: "Bewertung",
                        icon: Scale,
                        color: "from-orange-500 to-red-600",
                        description: "Risk Appetite & Toleranz",
                        activities: [
                          "Risk Matrix Mapping",
                          "Tolerance Definition",
                          "Priority Ranking",
                          "Accept/Treat Decision"
                        ]
                      },
                      {
                        phase: "Behandlung",
                        icon: Shield,
                        color: "from-purple-500 to-pink-600",
                        description: "Avoid, Mitigate, Transfer, Accept",
                        activities: [
                          "Control Selection",
                          "Implementation Planning",
                          "Residual Risk Assessment",
                          "Treatment Verification"
                        ]
                      }
                    ].map((phase, index) => {
                      const IconComponent = phase.icon;
                      return /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5, delay: index * 0.1 },
                          className: "text-center",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: cn(
                              "p-4 rounded-2xl bg-gradient-to-r mx-auto mb-4 w-fit",
                              phase.color
                            ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-8 w-8 text-white" }) }),
                            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-2", children: phase.phase }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-4", children: phase.description }),
                            /* @__PURE__ */ jsx("div", { className: "bg-slate-800/50 rounded-lg p-3", children: /* @__PURE__ */ jsx("ul", { className: "text-xs text-slate-300 space-y-1", children: phase.activities.map((activity, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1", children: [
                              /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }),
                              activity
                            ] }, idx)) }) })
                          ]
                        },
                        phase.phase
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-blue-400" }),
                        "Quantitative Methoden"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-500/10 border border-blue-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: "FAIR (Factor Analysis of Information Risk)" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "Standardisiertes Framework für quantitative Risikoanalyse mit Monte-Carlo-Simulationen." }),
                          /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Risk = Loss Event Frequency × Loss Magnitude" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-2", children: "ALE (Annual Loss Expectancy)" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "Berechnung jährlicher Verlusterwartung für ROI-Analysen von Sicherheitsmaßnahmen." }),
                          /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "ALE = ARO (Annual Rate of Occurrence) × SLE (Single Loss Expectancy)" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-purple-400" }),
                        "Qualitative Methoden"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-500/10 border border-purple-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-2", children: "OCTAVE (Operationally Critical Threat, Asset & Vulnerability Evaluation)" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "Self-directed Risikobewertung fokussiert auf organisationale Risiken." })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-500/10 border border-orange-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-300 mb-2", children: "CRAMM (CCTA Risk Analysis & Management Method)" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "Strukturierte Methodik mit Asset-basiertem Ansatz für Regierungsorganisationen." })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "ISO 27001 Risk Matrix (Beispiel)" }),
                    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center font-semibold text-slate-300 border border-slate-600", children: "Auswirkung →" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center font-semibold text-green-400 border border-slate-600 bg-green-500/10", children: "Gering (1)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center font-semibold text-yellow-400 border border-slate-600 bg-yellow-500/10", children: "Mittel (2)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center font-semibold text-orange-400 border border-slate-600 bg-orange-500/10", children: "Hoch (3)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center font-semibold text-red-400 border border-slate-600 bg-red-500/10", children: "Kritisch (4)" })
                      ] }) }),
                      /* @__PURE__ */ jsx("tbody", { children: [
                        { level: "Sehr hoch (4)", color: "text-red-400 bg-red-500/10", risks: ["Mittel", "Hoch", "Kritisch", "Kritisch"] },
                        { level: "Hoch (3)", color: "text-orange-400 bg-orange-500/10", risks: ["Gering", "Mittel", "Hoch", "Kritisch"] },
                        { level: "Mittel (2)", color: "text-yellow-400 bg-yellow-500/10", risks: ["Gering", "Gering", "Mittel", "Hoch"] },
                        { level: "Gering (1)", color: "text-green-400 bg-green-500/10", risks: ["Gering", "Gering", "Gering", "Mittel"] }
                      ].map((row) => /* @__PURE__ */ jsxs("tr", { children: [
                        /* @__PURE__ */ jsx("td", { className: cn("p-3 font-semibold border border-slate-600", row.color), children: row.level }),
                        row.risks.map((risk, idx) => {
                          const riskColor = {
                            "Gering": "bg-green-500/20 text-green-300",
                            "Mittel": "bg-yellow-500/20 text-yellow-300",
                            "Hoch": "bg-orange-500/20 text-orange-300",
                            "Kritisch": "bg-red-500/20 text-red-300"
                          }[risk];
                          return /* @__PURE__ */ jsx("td", { className: cn("p-3 text-center border border-slate-600 font-medium", riskColor), children: risk }, idx);
                        })
                      ] }, row.level)) })
                    ] }) }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 text-sm text-slate-400", children: "Wahrscheinlichkeit ↓ | Risikobewertung basiert auf: Risiko = Wahrscheinlichkeit × Auswirkung" })
                  ] })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "implementierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Implementierungs-Roadmap" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("implementation"),
                      variant: completedSections.includes("implementation") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("implementation") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-indigo-300 mb-6 text-center", children: "12-Monats Implementation Timeline" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                      {
                        phase: "Monate 1-2: Vorbereitung & Planung",
                        color: "bg-blue-500",
                        tasks: [
                          "Management Commitment sicherstellen",
                          "Projektteam aufstellen und CISO ernennen",
                          "Scope Definition und Asset-Inventarisierung",
                          "Gap-Analyse gegen ISO 27001 durchführen",
                          "Business Case und Budget erstellen",
                          "Externe Beratung evaluieren"
                        ],
                        deliverables: ["Projektcharter", "Asset-Register", "Gap-Analyse-Report"]
                      },
                      {
                        phase: "Monate 3-4: Risikomanagement",
                        color: "bg-emerald-500",
                        tasks: [
                          "Risiko-Assessment-Methodik festlegen",
                          "Threat Modeling und Vulnerability Assessment",
                          "Risikobewertung und -priorisierung",
                          "Risk Treatment Plan entwickeln",
                          "Kontrollen aus Annex A auswählen",
                          "Statement of Applicability (SoA) erstellen"
                        ],
                        deliverables: ["Risk Assessment Report", "Risk Treatment Plan", "SoA"]
                      },
                      {
                        phase: "Monate 5-7: Kontrollen-Implementation",
                        color: "bg-orange-500",
                        tasks: [
                          "Sicherheitspolicies entwickeln und genehmigen",
                          "Technische Kontrollen implementieren",
                          "Organisatorische Prozesse etablieren",
                          "Personalschulungen durchführen",
                          "Incident Response Team aufbauen",
                          "Business Continuity Pläne erstellen"
                        ],
                        deliverables: ["Policy-Set", "Implementierte Kontrollen", "Schulungspläne"]
                      },
                      {
                        phase: "Monate 8-9: Überwachung & Messung",
                        color: "bg-purple-500",
                        tasks: [
                          "KPIs und Metriken definieren",
                          "Monitoring-Systeme einrichten",
                          "Interne Audit-Programme etablieren",
                          "Management Review Prozesse definieren",
                          "Continuous Monitoring implementieren",
                          "Erstes internes Audit durchführen"
                        ],
                        deliverables: ["KPI-Dashboard", "Audit-Programm", "Monitoring-Berichte"]
                      },
                      {
                        phase: "Monate 10-11: Optimierung",
                        color: "bg-red-500",
                        tasks: [
                          "Non-Konformitäten behandeln",
                          "Korrekturmaßnahmen implementieren",
                          "Prozesse optimieren und dokumentieren",
                          "Mitarbeiter-Feedback einarbeiten",
                          "Pre-Audit mit externer Beratung",
                          "Management Review durchführen"
                        ],
                        deliverables: ["Optimierte Prozesse", "Pre-Audit-Report", "Management Review"]
                      },
                      {
                        phase: "Monat 12: Zertifizierungsaudit",
                        color: "bg-cyan-500",
                        tasks: [
                          "Zertifizierungsstelle beauftragen",
                          "Stage 1 Audit (Dokumentenprüfung)",
                          "Identified Issues addressieren",
                          "Stage 2 Audit (Implementation Audit)",
                          "Audit-Findings abarbeiten",
                          "Zertifikat erhalten"
                        ],
                        deliverables: ["Zertifizierungsaudit-Report", "ISO 27001 Zertifikat"]
                      }
                    ].map((phase, index) => /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700",
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                          /* @__PURE__ */ jsx("div", { className: cn("w-4 h-4 rounded-full mt-2", phase.color) }),
                          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: phase.phase }),
                            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Aufgaben:" }),
                                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.tasks.map((task, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                                  /* @__PURE__ */ jsx(
                                    "input",
                                    {
                                      type: "checkbox",
                                      id: `task-${index}-${idx}`,
                                      checked: checkedItems[`task-${index}-${idx}`] || false,
                                      onChange: () => handleItemCheck(`task-${index}-${idx}`),
                                      className: "mt-1 text-blue-500"
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(
                                    "label",
                                    {
                                      htmlFor: `task-${index}-${idx}`,
                                      className: cn(
                                        "text-slate-300 cursor-pointer",
                                        checkedItems[`task-${index}-${idx}`] && "line-through opacity-60"
                                      ),
                                      children: task
                                    }
                                  )
                                ] }, idx)) })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Deliverables:" }),
                                /* @__PURE__ */ jsx("div", { className: "space-y-1", children: phase.deliverables.map((deliverable, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs mr-1 mb-1", children: deliverable }, idx)) })
                              ] })
                            ] })
                          ] })
                        ] })
                      },
                      index
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400" }),
                        "Erfolgsfaktoren"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                        "Top-Management Commitment und sichtbare Unterstützung",
                        "Klare Kommunikation der Vorteile an alle Stakeholder",
                        "Ausreichende Ressourcen (Budget, Personal, Zeit)",
                        "Change Management und Mitarbeiter-Buy-in",
                        "Regelmäßige Progress Reviews und Milestone Tracking",
                        "Pragmatischer Ansatz - nicht über-engineeren",
                        "Integration in bestehende Prozesse",
                        "Kontinuierliche Schulung und Awareness"
                      ].map((factor, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: factor })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400" }),
                        "Häufige Stolpersteine"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                        "Zu großer Scope in der ersten Implementation",
                        "Unterschätzung des Dokumentationsaufwands",
                        "Fehlende Priorisierung von Risiken",
                        "Technologie-fokussiert statt prozess-orientiert",
                        "Unzureichende Schulung der Mitarbeiter",
                        "Mangelnde Integration in tägliche Abläufe",
                        "Zu späte Einbindung der Zertifizierungsstelle",
                        "Verzögerungen durch parallele Projekte"
                      ].map((pitfall, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: pitfall })
                      ] }, idx)) })
                    ] })
                  ] })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "dokumentation", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Dokumentations-Framework" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("documentation"),
                      variant: completedSections.includes("documentation") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("documentation") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6 text-center", children: "Dokumentenhierarchie" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                      {
                        level: "Level 1: Policies",
                        description: "Strategische Richtlinien und Grundsätze",
                        color: "from-red-500 to-pink-600",
                        icon: Gavel,
                        examples: ["Informationssicherheitspolitik", "Zugangsrichtlinie", "Incident Response Policy"],
                        audience: "Management & alle Mitarbeiter",
                        approval: "CEO/Geschäftsführung",
                        review: "1-2 Jahre"
                      },
                      {
                        level: "Level 2: Standards",
                        description: "Technische und organisatorische Standards",
                        color: "from-orange-500 to-red-600",
                        icon: Award,
                        examples: ["Cryptographic Standards", "Password Standards", "Backup Standards"],
                        audience: "IT-Teams & Sicherheitsverantwortliche",
                        approval: "CISO",
                        review: "1 Jahr"
                      },
                      {
                        level: "Level 3: Procedures",
                        description: "Detaillierte Verfahrensanweisungen",
                        color: "from-yellow-500 to-orange-600",
                        icon: Settings,
                        examples: ["User Provisioning Procedure", "Patch Management Process", "Backup Procedures"],
                        audience: "Operative Teams",
                        approval: "Abteilungsleiter",
                        review: "6 Monate"
                      },
                      {
                        level: "Level 4: Work Instructions",
                        description: "Schritt-für-Schritt Arbeitsanweisungen",
                        color: "from-green-500 to-emerald-600",
                        icon: FileText,
                        examples: ["Firewall Configuration Guide", "Incident Handling Checklist", "Audit Checklists"],
                        audience: "Techniker & Operatoren",
                        approval: "Team Lead",
                        review: "3 Monate"
                      }
                    ].map((level, index) => {
                      const IconComponent = level.icon;
                      return /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.5, delay: index * 0.1 },
                          className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700",
                          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                            /* @__PURE__ */ jsx("div", { className: cn(
                              "p-3 rounded-xl bg-gradient-to-r flex-shrink-0",
                              level.color
                            ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-2", children: level.level }),
                              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: level.description }),
                              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Beispiele:" }),
                                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: level.examples.map((example, idx) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-slate-400 flex items-center gap-2", children: [
                                    /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }),
                                    example
                                  ] }, idx)) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Zielgruppe:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: level.audience })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Genehmigung:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: level.approval })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Review-Zyklus:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: level.review })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        },
                        level.level
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }),
                        "Mandatory Documents (ISO 27001)"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        {
                          doc: "Information Security Policy",
                          clause: "5.2",
                          description: "High-level commitment to information security"
                        },
                        {
                          doc: "Scope of ISMS",
                          clause: "4.3",
                          description: "Boundaries and applicability of ISMS"
                        },
                        {
                          doc: "Risk Assessment Procedure",
                          clause: "6.1.2",
                          description: "Methodology for identifying and assessing risks"
                        },
                        {
                          doc: "Risk Treatment Plan",
                          clause: "6.1.3",
                          description: "Plan for treating identified risks"
                        },
                        {
                          doc: "Statement of Applicability",
                          clause: "6.1.3",
                          description: "Control objectives and controls selection"
                        },
                        {
                          doc: "Internal Audit Programme",
                          clause: "9.2",
                          description: "Systematic audit approach and schedule"
                        },
                        {
                          doc: "Management Review Records",
                          clause: "9.3",
                          description: "Evidence of management review activities"
                        }
                      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-1", children: [
                          /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-300 text-sm", children: item.doc }),
                          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: item.clause })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: item.description })
                      ] }, item.doc)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400" }),
                        "Best Practices"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-300 mb-2", children: "Document Control" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-sm text-slate-300 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Versionskontrolle mit klarer Nummerierung" }),
                            /* @__PURE__ */ jsx("li", { children: "• Automatische Benachrichtigung bei Änderungen" }),
                            /* @__PURE__ */ jsx("li", { children: "• Zugriffsrechte basierend auf Rolle" }),
                            /* @__PURE__ */ jsx("li", { children: "• Archivierung veralteter Versionen" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-2", children: "Content Guidelines" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-sm text-slate-300 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Klare, verständliche Sprache verwenden" }),
                            /* @__PURE__ */ jsx("li", { children: "• Prozessdiagramme für komplexe Abläufe" }),
                            /* @__PURE__ */ jsx("li", { children: "• Checklisten für operative Tätigkeiten" }),
                            /* @__PURE__ */ jsx("li", { children: "• Hyperlinks für Querverweise" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-500/10 border border-blue-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: "Tools & Platforms" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-sm text-slate-300 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• SharePoint / Confluence für Collaboration" }),
                            /* @__PURE__ */ jsx("li", { children: "• GRC-Tools für Policy Management" }),
                            /* @__PURE__ */ jsx("li", { children: "• Workflow-Engines für Approval Processes" }),
                            /* @__PURE__ */ jsx("li", { children: "• Automatisierte Compliance-Checks" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "audit-assessment", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Audit & Assessment Framework" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("audit"),
                      variant: completedSections.includes("audit") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("audit") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-green-300 mb-6 text-center", children: "Internes Audit-Programm" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                        /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5 text-green-400" }),
                          "Audit-Planung"
                        ] }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Jährlicher Audit-Plan mit allen ISMS-Bereichen" }),
                          /* @__PURE__ */ jsx("li", { children: "• Risiko-basierte Priorisierung" }),
                          /* @__PURE__ */ jsx("li", { children: "• Rotationsprinzip für Auditoren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Integration mit Compliance-Kalender" }),
                          /* @__PURE__ */ jsx("li", { children: "• Ad-hoc Audits bei Incidents" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                        /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-blue-400" }),
                          "Auditor-Qualifikation"
                        ] }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsx("li", { children: "• ISO 19011 Audit-Standards" }),
                          /* @__PURE__ */ jsx("li", { children: "• ISO 27001 Lead Auditor Zertifizierung" }),
                          /* @__PURE__ */ jsx("li", { children: "• Technische Fachkompetenz" }),
                          /* @__PURE__ */ jsx("li", { children: "• Unabhängigkeit vom auditierten Bereich" }),
                          /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Weiterbildung" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                        /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-purple-400" }),
                          "Audit-Durchführung"
                        ] }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Standardisierte Checklisten" }),
                          /* @__PURE__ */ jsx("li", { children: "• Stichproben-basierte Tests" }),
                          /* @__PURE__ */ jsx("li", { children: "• Interviews mit Prozessverantwortlichen" }),
                          /* @__PURE__ */ jsx("li", { children: "• Dokumentenprüfung" }),
                          /* @__PURE__ */ jsx("li", { children: "• Vor-Ort-Begehungen" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-blue-400" }),
                        "Zertifizierungsaudit (Stage 1)"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-500/10 border border-blue-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: "Dokumentenprüfung" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-sm text-slate-300 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• ISMS-Dokumentation vollständig?" }),
                            /* @__PURE__ */ jsx("li", { children: "• Policies und Prozesse definiert?" }),
                            /* @__PURE__ */ jsx("li", { children: "• Risk Assessment durchgeführt?" }),
                            /* @__PURE__ */ jsx("li", { children: "• Statement of Applicability erstellt?" }),
                            /* @__PURE__ */ jsx("li", { children: "• Interne Audits dokumentiert?" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-2", children: "Audit-Vorbereitung" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-sm text-slate-300 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Audit-Plan finalisieren" }),
                            /* @__PURE__ */ jsx("li", { children: "• Scope-Abgrenzung bestätigen" }),
                            /* @__PURE__ */ jsx("li", { children: "• Auditoren-Team zusammenstellen" }),
                            /* @__PURE__ */ jsx("li", { children: "• Termine für Stage 2 festlegen" }),
                            /* @__PURE__ */ jsx("li", { children: "• Non-Konformitäten identifizieren" })
                          ] })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400" }),
                        "Zertifizierungsaudit (Stage 2)"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-500/10 border border-orange-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-300 mb-2", children: "Implementation Assessment" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-sm text-slate-300 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Kontrollen tatsächlich implementiert?" }),
                            /* @__PURE__ */ jsx("li", { children: "• PDCA-Zyklus funktionsfähig?" }),
                            /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Verbesserung?" }),
                            /* @__PURE__ */ jsx("li", { children: "• Management Commitment evident?" }),
                            /* @__PURE__ */ jsx("li", { children: "• Effectiveness der Kontrollen?" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-500/10 border border-purple-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-2", children: "Certification Decision" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-sm text-slate-300 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• No non-conformities: Zertifikat" }),
                            /* @__PURE__ */ jsx("li", { children: "• Minor NCs: Korrektur binnen 90 Tagen" }),
                            /* @__PURE__ */ jsx("li", { children: "• Major NCs: Wiederholung Stage 2" }),
                            /* @__PURE__ */ jsx("li", { children: "• Critical NCs: Vollständige Wiederholung" }),
                            /* @__PURE__ */ jsx("li", { children: "• Zertifikatsgültigkeit: 3 Jahre" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Überwachungsaudits & Maintenance" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-blue-400 mb-2", children: "Jahr 1" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-3", children: "Surveillance Audit 1" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-xs text-slate-300 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Management Review" }),
                          /* @__PURE__ */ jsx("li", { children: "• Internes Audit-Programm" }),
                          /* @__PURE__ */ jsx("li", { children: "• Incident Management" }),
                          /* @__PURE__ */ jsx("li", { children: "• Stichproben Kontrollen" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-emerald-400 mb-2", children: "Jahr 2" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-3", children: "Surveillance Audit 2" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-xs text-slate-300 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Risk Assessment Update" }),
                          /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Verbesserung" }),
                          /* @__PURE__ */ jsx("li", { children: "• Compliance Monitoring" }),
                          /* @__PURE__ */ jsx("li", { children: "• Change Management" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-purple-400 mb-2", children: "Jahr 3" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-3", children: "Recertification Audit" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-xs text-slate-300 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Vollständiges Re-Assessment" }),
                          /* @__PURE__ */ jsx("li", { children: "• Strategische Überprüfung" }),
                          /* @__PURE__ */ jsx("li", { children: "• Effectiveness Review" }),
                          /* @__PURE__ */ jsx("li", { children: "• Zertifikatserneuerung" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "zertifizierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Zertifizierungsprozess" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("certification"),
                      variant: completedSections.includes("certification") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("certification") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-purple-300 mb-6 text-center", children: "Zertifizierungs-Journey" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                      {
                        step: "1. Vorbereitung",
                        duration: "2-4 Wochen",
                        tasks: [
                          "Zertifizierungsstelle auswählen und beauftragen",
                          "Audit-Scope und -Termine festlegen",
                          "Application Form ausfüllen",
                          "Dokumentation finalisieren",
                          "Pre-Assessment (optional) durchführen",
                          "Interne Readiness-Prüfung"
                        ],
                        costs: "5.000 - 15.000 €"
                      },
                      {
                        step: "2. Stage 1 Audit",
                        duration: "1-2 Tage",
                        tasks: [
                          "Dokumentenprüfung durch Zertifizierungsstelle",
                          "ISMS-Reifegrad-Assessment",
                          "Scope-Verifikation",
                          "Audit-Plan für Stage 2 finalisieren",
                          "Identifizierte Gaps adressieren",
                          "Stage 2 Vorbereitung"
                        ],
                        costs: "3.000 - 8.000 €"
                      },
                      {
                        step: "3. Stage 2 Audit",
                        duration: "2-5 Tage",
                        tasks: [
                          "On-site Implementation Assessment",
                          "Interviews mit Management und Mitarbeitern",
                          "Stichproben-Tests der Kontrollen",
                          "Evidence-Sammlung und -Bewertung",
                          "Non-Konformitäten-Behandlung",
                          "Zertifizierungsentscheidung"
                        ],
                        costs: "8.000 - 20.000 €"
                      },
                      {
                        step: "4. Zertifikat & Maintenance",
                        duration: "3 Jahre Gültigkeit",
                        tasks: [
                          "Zertifikat erhalten und kommunizieren",
                          "Jährliche Surveillance Audits",
                          "Kontinuierliche ISMS-Verbesserung",
                          "Scope-Erweiterungen (optional)",
                          "Recertification nach 3 Jahren",
                          "Marketing und Business Development"
                        ],
                        costs: "4.000 - 10.000 €/Jahr"
                      }
                    ].map((phase, index) => /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700",
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold", children: index + 1 }),
                          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                              /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: phase.step }),
                              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: phase.duration }),
                              /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300 text-xs", children: phase.costs })
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Aktivitäten:" }),
                              /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.tasks.map((task, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-purple-400 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: task })
                              ] }, idx)) })
                            ] }) })
                          ] })
                        ] })
                      },
                      phase.step
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Zertifizierungsstellen-Vergleich" }),
                    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-600", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Zertifizierungsstelle" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white text-center", children: "Preis-Level" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white text-center", children: "Internationale Anerkennung" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white text-center", children: "Audit-Qualität" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white text-center", children: "Spezialisierung" })
                      ] }) }),
                      /* @__PURE__ */ jsx("tbody", { children: [
                        {
                          name: "TÜV SÜD",
                          price: "Hoch",
                          recognition: "★★★★★",
                          quality: "★★★★★",
                          specialization: "Automotive, Manufacturing"
                        },
                        {
                          name: "DQS",
                          price: "Mittel",
                          recognition: "★★★★",
                          quality: "★★★★",
                          specialization: "KMU, Dienstleistung"
                        },
                        {
                          name: "Bureau Veritas",
                          price: "Mittel-Hoch",
                          recognition: "★★★★★",
                          quality: "★★★★",
                          specialization: "Oil & Gas, Maritime"
                        },
                        {
                          name: "BSI Group",
                          price: "Hoch",
                          recognition: "★★★★★",
                          quality: "★★★★★",
                          specialization: "IT, Cybersecurity"
                        }
                      ].map((cb) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-medium text-blue-300", children: cb.name }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-slate-300", children: cb.price }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-yellow-400", children: cb.recognition }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-green-400", children: cb.quality }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-slate-300 text-sm", children: cb.specialization })
                      ] }, cb.name)) })
                    ] }) })
                  ] })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx("section", { id: "ressourcen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Ressourcen & Downloads" }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: () => handleSectionComplete("resources"),
                      variant: completedSections.includes("resources") ? "default" : "outline",
                      size: "sm",
                      children: [
                        completedSections.includes("resources") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                        "Als gelesen markieren"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  {
                    title: "Templates & Checklisten",
                    icon: FileText,
                    color: "from-blue-500 to-indigo-600",
                    items: [
                      "ISMS-Policy-Template",
                      "Risikobewertungs-Matrix",
                      "Audit-Checkliste",
                      "Incident-Response-Plan",
                      "Statement of Applicability"
                    ]
                  },
                  {
                    title: "Implementierungs-Tools",
                    icon: Settings,
                    color: "from-emerald-500 to-teal-600",
                    items: [
                      "Gap-Analysis-Tool",
                      "Projekt-Roadmap",
                      "ROI-Calculator",
                      "Kosten-Nutzen-Analyse",
                      "Schulungsplan-Vorlage"
                    ]
                  },
                  {
                    title: "Externe Ressourcen",
                    icon: ExternalLink,
                    color: "from-purple-500 to-pink-600",
                    items: [
                      "ISO 27001:2022 Standard (kostenpflichtig)",
                      "BSI IT-Grundschutz",
                      "NIST Cybersecurity Framework",
                      "ENISA Guidelines",
                      "Akkreditierte Zertifizierer"
                    ]
                  },
                  {
                    title: "Weiterführende Guides",
                    icon: BookOpen,
                    color: "from-orange-500 to-red-600",
                    items: [
                      "ISO 27002 Kontrollen-Guide",
                      "Cloud Security (ISO 27017)",
                      "Privacy Protection (ISO 27018)",
                      "Business Continuity (ISO 22301)",
                      "Risk Management (ISO 31000)"
                    ]
                  }
                ].map((section) => {
                  const IconComponent = section.icon;
                  return /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: cn(
                        "p-2 rounded-lg bg-gradient-to-r",
                        section.color
                      ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5 text-white" }) }),
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: section.title })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: section.items.map((item, idx) => /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        className: "w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700",
                        children: [
                          /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                          item
                        ]
                      },
                      idx
                    )) })
                  ] }) }, section.title);
                }) })
              ] }) })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between mt-8 pt-6 border-t border-slate-700/50 gap-4", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: () => {
                const currentIndex = sections.findIndex((s) => s.id === activeNavSection);
                if (currentIndex > 0) {
                  scrollToSection(sections[currentIndex - 1].id);
                }
              },
              disabled: activeNavSection === sections[0].id,
              variant: "outline",
              className: "border-slate-600 text-slate-300 hover:bg-slate-700",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
                "Vorheriger Abschnitt"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 order-first lg:order-none", children: [
            /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
              sections.findIndex((s) => s.id === activeNavSection) + 1,
              " / ",
              sections.length
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: () => setBookmarked(!bookmarked),
                variant: "ghost",
                size: "sm",
                className: "text-slate-400 hover:text-yellow-400",
                children: /* @__PURE__ */ jsx(Bookmark, { className: cn("h-4 w-4", bookmarked && "fill-current text-yellow-400") })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: () => {
                const currentIndex = sections.findIndex((s) => s.id === activeNavSection);
                if (currentIndex < sections.length - 1) {
                  scrollToSection(sections[currentIndex + 1].id);
                }
              },
              disabled: activeNavSection === sections[sections.length - 1].id,
              className: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
              children: [
                "Nächster Abschnitt",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 ml-2" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Iso27001Guide as default
};
