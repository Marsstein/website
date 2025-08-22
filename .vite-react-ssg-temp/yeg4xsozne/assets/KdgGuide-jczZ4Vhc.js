import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { Church, Clock, Calendar, Shield, Landmark, Users, List, BookOpen, Target, Scale, Settings, FileText, Wrench, HelpCircle, CheckCircle2, Download, Bookmark, Building2, Heart, AlertCircle, Check, Lock, Key, Database, AlertTriangle, Info, Lightbulb, Book, GraduationCap, ChevronRight, Sparkles, Crown, ChevronDown, Gavel, Brain, Play, RotateCcw, Link, ExternalLink, MessageSquare, Phone, MapPin, ArrowLeft, Share2 } from "lucide-react";
import { Link as Link$1 } from "react-router-dom";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
import "@radix-ui/react-tabs";
import "react-helmet-async";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const KdgGuide = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarkedSections, setBookmarkedSections] = useState([]);
  const [readingSections, setReadingSections] = useState(/* @__PURE__ */ new Set());
  const [expandedFaqs, setExpandedFaqs] = useState(/* @__PURE__ */ new Set());
  const [selectedDiocese, setSelectedDiocese] = useState("");
  const [quizScore, setQuizScore] = useState(null);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute("data-section");
          if (sectionId) {
            setActiveSection(sectionId);
            setReadingSections((prev) => new Set(prev).add(sectionId));
          }
        }
      });
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleBookmark = (section) => {
    setBookmarkedSections(
      (prev) => prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const tableOfContents = [
    { id: "overview", title: "Übersicht", icon: BookOpen },
    { id: "history", title: "Geschichte & Entwicklung", icon: Clock },
    { id: "requirements", title: "Zentrale Anforderungen", icon: Target },
    { id: "comparison", title: "KDG vs. DSGVO", icon: Scale },
    { id: "implementation", title: "Implementierung", icon: Settings },
    { id: "documentation", title: "Dokumentation", icon: FileText },
    { id: "special-cases", title: "Besondere Fälle", icon: Church },
    { id: "tools", title: "Tools & Vorlagen", icon: Wrench },
    { id: "faq", title: "Häufige Fragen", icon: HelpCircle },
    { id: "checklist", title: "Checkliste", icon: CheckCircle2 },
    { id: "resources", title: "Ressourcen", icon: BookOpen }
  ];
  const dioceses = [
    "Erzbistum Berlin",
    "Bistum Dresden-Meißen",
    "Erzbistum Hamburg",
    "Bistum Hildesheim",
    "Erzbistum Köln",
    "Bistum Limburg",
    "Bistum Mainz",
    "Erzbistum München und Freising",
    "Bistum Osnabrück",
    "Erzbistum Paderborn",
    "Bistum Rottenburg-Stuttgart",
    "Bistum Trier"
  ];
  const kdgVsDsgvoComparison = [
    {
      aspect: "Rechtsgrundlage",
      kdg: "Kirchliches Selbstbestimmungsrecht nach Art. 140 GG i.V.m. Art. 137 WRV",
      dsgvo: "EU-Verordnung 2016/679",
      difference: "Verfassungsrechtlich garantierte Autonomie"
    },
    {
      aspect: "Geltungsbereich",
      kdg: "Katholische Kirche und ihre Einrichtungen",
      dsgvo: "Alle Unternehmen und Organisationen in der EU",
      difference: "Kirchenspezifischer Anwendungsbereich"
    },
    {
      aspect: "Aufsichtsbehörde",
      kdg: "Diözesaner Datenschutzbeauftragter",
      dsgvo: "Staatliche Datenschutzbehörden",
      difference: "Kircheninterne Aufsicht"
    },
    {
      aspect: "Beichtgeheimnis",
      kdg: "Absoluter Schutz nach can. 983 CIC",
      dsgvo: "Keine explizite Regelung",
      difference: "Sakramentaler Sonderschutz"
    },
    {
      aspect: "Bußgelder",
      kdg: "Bis zu 500.000 EUR",
      dsgvo: "Bis zu 20 Mio. EUR oder 4% des Jahresumsatzes",
      difference: "Geringere Maximalhöhe"
    }
  ];
  const implementationPhases = [
    {
      phase: 1,
      title: "Vorbereitung & Analyse",
      duration: "2-3 Monate",
      tasks: [
        "Bestandsaufnahme aller Datenverarbeitungen",
        "Identifikation sakramentaler Daten",
        "Analyse der Organisationsstruktur",
        "Ressourcenplanung"
      ],
      deliverables: ["IST-Analyse", "Projektplan", "Risikoanalyse"]
    },
    {
      phase: 2,
      title: "Konzeption & Planung",
      duration: "3-4 Monate",
      tasks: [
        "Erstellung des Datenschutzkonzepts",
        "Definition von Prozessen",
        "Schulungskonzept entwickeln",
        "Technische Maßnahmen planen"
      ],
      deliverables: ["Datenschutzkonzept", "Verfahrensverzeichnis", "Schulungsplan"]
    },
    {
      phase: 3,
      title: "Umsetzung",
      duration: "6-8 Monate",
      tasks: [
        "Implementierung der Prozesse",
        "Durchführung von Schulungen",
        "Technische Umsetzung",
        "Dokumentation erstellen"
      ],
      deliverables: ["Dokumentierte Prozesse", "Geschulte Mitarbeiter", "Technische Systeme"]
    },
    {
      phase: 4,
      title: "Prüfung & Optimierung",
      duration: "2-3 Monate",
      tasks: [
        "Interne Audits durchführen",
        "Schwachstellen identifizieren",
        "Prozesse optimieren",
        "Kontinuierliche Verbesserung"
      ],
      deliverables: ["Audit-Berichte", "Optimierungsplan", "KVP-System"]
    }
  ];
  const specialCases = [
    {
      title: "Beichtgeheimnis",
      icon: Lock,
      description: "Absoluter Schutz des sakramentalen Bekenntnisses",
      details: [
        "Unverbrüchliche Geheimhaltungspflicht nach can. 983 CIC",
        "Keine Ausnahmen für staatliche Behörden",
        "Keine digitale Dokumentation erlaubt",
        "Schutz erstreckt sich auf alle Beteiligten"
      ],
      bestPractices: [
        "Keine elektronische Erfassung",
        "Physische Trennung von anderen Daten",
        "Besondere Schulung der Seelsorger",
        "Klare Kommunikation an Gläubige"
      ]
    },
    {
      title: "Matrikelbücher",
      icon: Book,
      description: "Dauerhafte Aufbewahrung sakramentaler Register",
      details: [
        "Tauf-, Firm-, Ehe- und Sterberegister",
        "Unbegrenzte Aufbewahrungspflicht",
        "Besondere Sicherheitsanforderungen",
        "Digitalisierung unter strengen Auflagen"
      ],
      bestPractices: [
        "Sichere Verwahrung in Tresoren",
        "Zugriffskontrolle und Protokollierung",
        "Regelmäßige Sicherheitskopien",
        "Verschlüsselte Digitalisierung"
      ]
    },
    {
      title: "Caritas-Einrichtungen",
      icon: Heart,
      description: "Datenschutz in karitativen Diensten",
      details: [
        "Besonders sensible Gesundheitsdaten",
        "Soziale Notlagen dokumentieren",
        "Schweigepflicht vs. Dokumentationspflicht",
        "Zusammenarbeit mit staatlichen Stellen"
      ],
      bestPractices: [
        "Strenge Zweckbindung",
        "Minimale Datenweitergabe",
        "Besondere Einwilligungen",
        "Regelmäßige Löschungen"
      ]
    },
    {
      title: "Kirchliche Schulen",
      icon: GraduationCap,
      description: "Schülerdaten und Religionsunterricht",
      details: [
        "Minderjährigendatenschutz",
        "Religionszugehörigkeit als sensibles Datum",
        "Elternkommunikation",
        "Leistungsdokumentation"
      ],
      bestPractices: [
        "Elterliche Einwilligungen",
        "Getrennte Systeme für Noten/Religion",
        "Sichere Kommunikationskanäle",
        "Regelmäßige Datenlöschung"
      ]
    }
  ];
  const checklistItems = [
    {
      category: "Organisatorische Maßnahmen",
      items: [
        { id: "org1", text: "Datenschutzbeauftragten bestellt", required: true },
        { id: "org2", text: "Datenschutzorganisation aufgebaut", required: true },
        { id: "org3", text: "Verantwortlichkeiten definiert", required: true },
        { id: "org4", text: "Prozesse dokumentiert", required: true },
        { id: "org5", text: "Schulungsplan erstellt", required: true },
        { id: "org6", text: "Notfallplan entwickelt", required: false }
      ]
    },
    {
      category: "Rechtliche Grundlagen",
      items: [
        { id: "legal1", text: "Verarbeitungsverzeichnis erstellt", required: true },
        { id: "legal2", text: "Rechtsgrundlagen geprüft", required: true },
        { id: "legal3", text: "Einwilligungen aktualisiert", required: true },
        { id: "legal4", text: "Auftragsverarbeiter geprüft", required: true },
        { id: "legal5", text: "Datenschutzerklärungen angepasst", required: true },
        { id: "legal6", text: "Löschkonzept implementiert", required: true }
      ]
    },
    {
      category: "Technische Maßnahmen",
      items: [
        { id: "tech1", text: "Zugangskontrollen implementiert", required: true },
        { id: "tech2", text: "Verschlüsselung aktiviert", required: true },
        { id: "tech3", text: "Backup-Systeme eingerichtet", required: true },
        { id: "tech4", text: "Protokollierung aktiviert", required: true },
        { id: "tech5", text: "Firewall konfiguriert", required: true },
        { id: "tech6", text: "Penetrationstests durchgeführt", required: false }
      ]
    },
    {
      category: "Sakramentale Besonderheiten",
      items: [
        { id: "sac1", text: "Beichtgeheimnis-Prozesse definiert", required: true },
        { id: "sac2", text: "Matrikelbuch-Sicherheit gewährleistet", required: true },
        { id: "sac3", text: "Sakramentendaten klassifiziert", required: true },
        { id: "sac4", text: "Zugriffe streng limitiert", required: true },
        { id: "sac5", text: "Physische Sicherheit geprüft", required: true },
        { id: "sac6", text: "Archivierungskonzept erstellt", required: true }
      ]
    }
  ];
  const faqs = [
    {
      question: "Gilt das KDG auch für kleine Pfarrgemeinden?",
      answer: "Ja, das KDG gilt für alle kirchlichen Stellen unabhängig von ihrer Größe. Allerdings können die Anforderungen je nach Umfang der Datenverarbeitung variieren. Kleine Pfarreien können oft vereinfachte Verfahren nutzen.",
      category: "Geltungsbereich"
    },
    {
      question: "Wie wird das Beichtgeheimnis im KDG geschützt?",
      answer: "Das Beichtgeheimnis genießt absoluten Schutz. Es dürfen keinerlei Aufzeichnungen über Beichtinhalte gemacht werden, weder digital noch analog. Dies gilt auch für statistische Zwecke.",
      category: "Sakramente"
    },
    {
      question: "Müssen Ehrenamtliche auch geschult werden?",
      answer: "Ja, alle Personen, die personenbezogene Daten verarbeiten, müssen geschult werden. Dies gilt auch für Ehrenamtliche. Die Schulungen können jedoch an den Umfang ihrer Tätigkeit angepasst werden.",
      category: "Schulung"
    },
    {
      question: "Wie lange müssen Matrikeldaten aufbewahrt werden?",
      answer: "Matrikeldaten (Taufe, Firmung, Ehe, Tod) müssen dauerhaft aufbewahrt werden. Sie unterliegen keiner Löschfrist, da sie kirchenrechtlich und historisch bedeutsam sind.",
      category: "Aufbewahrung"
    },
    {
      question: "Wer ist Aufsichtsbehörde für das KDG?",
      answer: "Die Aufsicht über die Einhaltung des KDG obliegt dem diözesanen Datenschutzbeauftragten, nicht den staatlichen Datenschutzbehörden. Bei diözesanübergreifenden Fragen ist der Katholische Datenschutzbeauftragte zuständig.",
      category: "Aufsicht"
    },
    {
      question: "Können Bußgelder verhängt werden?",
      answer: "Ja, bei Verstößen gegen das KDG können Bußgelder bis zu 500.000 EUR verhängt werden. Die Höhe richtet sich nach der Schwere des Verstoßes und der Größe der Einrichtung.",
      category: "Sanktionen"
    }
  ];
  const quizQuestions = [
    {
      question: "Welche Rechtsgrundlage hat das KDG?",
      options: [
        "EU-Datenschutzgrundverordnung",
        "Kirchliches Selbstbestimmungsrecht",
        "Bundesdatenschutzgesetz",
        "Landesrecht"
      ],
      correct: 1
    },
    {
      question: "Wie hoch können Bußgelder nach KDG maximal sein?",
      options: [
        "100.000 EUR",
        "500.000 EUR",
        "1 Million EUR",
        "20 Millionen EUR"
      ],
      correct: 1
    },
    {
      question: "Wer überwacht die Einhaltung des KDG?",
      options: [
        "Bundesdatenschutzbeauftragter",
        "EU-Kommission",
        "Diözesaner Datenschutzbeauftragter",
        "Landesdatenschutzbehörde"
      ],
      correct: 2
    },
    {
      question: "Wie lange müssen Matrikeldaten aufbewahrt werden?",
      options: [
        "10 Jahre",
        "30 Jahre",
        "70 Jahre",
        "Dauerhaft"
      ],
      correct: 3
    },
    {
      question: "Gilt das KDG auch für Caritas-Einrichtungen?",
      options: [
        "Nein, nur DSGVO",
        "Ja, vollumfänglich",
        "Nur teilweise",
        "Nur bei kirchlichen Trägern"
      ],
      correct: 1
    }
  ];
  const handleQuizAnswer = (answer) => {
    setQuizAnswers({ ...quizAnswers, [currentQuizQuestion]: answer.toString() });
    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      let score = 0;
      Object.entries(quizAnswers).forEach(([questionIndex, answer2]) => {
        if (parseInt(answer2) === quizQuestions[parseInt(questionIndex)].correct) {
          score++;
        }
      });
      setQuizScore(Math.round(score / quizQuestions.length * 100));
      setIsQuizActive(false);
    }
  };
  const downloadResources = [
    {
      title: "KDG Musterdatenschutzerklärung",
      type: "Word-Vorlage",
      size: "245 KB",
      icon: FileText
    },
    {
      title: "Verarbeitungsverzeichnis Pfarrei",
      type: "Excel-Vorlage",
      size: "180 KB",
      icon: Database
    },
    {
      title: "Schulungspräsentation KDG Basics",
      type: "PowerPoint",
      size: "3.2 MB",
      icon: BookOpen
    },
    {
      title: "Checkliste KDG-Audit",
      type: "PDF",
      size: "420 KB",
      icon: CheckCircle2
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "KDG Leitfaden 2024 | Katholischer Datenschutz komplett erklärt",
        description: "Umfassender KDG-Leitfaden für katholische Einrichtungen. ✓ Schritt-für-Schritt Anleitung ✓ Praxisbeispiele ✓ Vorlagen ✓ Checklisten. Jetzt KDG rechtssicher umsetzen!",
        keywords: "KDG, Katholischer Datenschutz, KDG Leitfaden, Kirchendatenschutz, KDG Umsetzung, Beichtgeheimnis, Matrikelbücher, Sakramentenschutz",
        canonical: "https://datenschutzbeauftragter.nrw/compliance/kdg"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-700", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "h-full bg-gradient-to-r from-amber-500 to-yellow-600",
          style: { width: progressWidth }
        }
      ) }),
      /* @__PURE__ */ jsxs("section", { className: "relative pt-24 pb-20 overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-40 left-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-7xl", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 mb-6", children: [
                /* @__PURE__ */ jsx(Church, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Katholischer Datenschutz-Leitfaden" })
              ] }),
              /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent", children: "KDG Compliance Guide 2024" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto", children: "Der umfassende Leitfaden zum Kirchlichen Datenschutzgesetz für katholische Einrichtungen" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center items-center mb-12", children: [
                /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-base", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 mr-2" }),
                  "45 Min. Lesezeit"
                ] }),
                /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-base", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                  "Januar 2024"
                ] }),
                /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-base", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 mr-2" }),
                  "Von Experten geprüft"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: [
                /* @__PURE__ */ jsxs(Card, { className: "p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: [
                  /* @__PURE__ */ jsx(Landmark, { className: "h-12 w-12 text-amber-600 mx-auto mb-4" }),
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: "27 Bistümer" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Für alle deutschen Diözesen" })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-12 w-12 text-amber-600 mx-auto mb-4" }),
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: "12.000+ Pfarreien" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Praxiserprobte Lösungen" })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-12 w-12 text-amber-600 mx-auto mb-4" }),
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: "100% Rechtssicher" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "KDG-konform garantiert" })
                ] })
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-7xl pb-20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsx("aside", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs(Card, { className: "sticky top-24 p-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(List, { className: "h-5 w-5" }),
            "Inhaltsverzeichnis"
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "space-y-2", children: tableOfContents.map((item) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => scrollToSection(item.id),
              className: cn(
                "w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 group",
                activeSection === item.id ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium" : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
              ),
              children: [
                /* @__PURE__ */ jsx(item.icon, { className: cn(
                  "h-4 w-4 transition-transform",
                  activeSection === item.id && "scale-110"
                ) }),
                /* @__PURE__ */ jsx("span", { className: "flex-1", children: item.title }),
                readingSections.has(item.id) && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-500" })
              ]
            },
            item.id
          )) }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 pt-6 border-t", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Lesefortschritt" }),
                /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                  Math.round(readingProgress),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: readingProgress, className: "h-2" })
            ] }),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full",
                onClick: () => window.print(),
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                  "Als PDF speichern"
                ]
              }
            )
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("main", { className: "lg:col-span-3 space-y-12", children: [
          /* @__PURE__ */ jsx("section", { "data-section": "overview", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "h-8 w-8 text-amber-600" }),
                "Übersicht zum KDG"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("overview"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("overview") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "prose prose-lg dark:prose-invert max-w-none", children: [
              /* @__PURE__ */ jsx("p", { className: "lead text-xl text-gray-600 dark:text-gray-300 mb-6", children: "Das Gesetz über den Kirchlichen Datenschutz (KDG) ist die datenschutzrechtliche Grundlage für die Datenverarbeitung in der katholischen Kirche in Deutschland. Es basiert auf dem verfassungsrechtlich garantierten Selbstbestimmungsrecht der Kirchen und steht gleichrangig neben der DSGVO." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-8", children: [
                /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-amber-50 dark:bg-amber-950/20", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-amber-600" }),
                    "Ziele des KDG"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Schutz personenbezogener Daten in kirchlichen Einrichtungen" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Wahrung des Beichtgeheimnisses und sakramentaler Daten" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Balance zwischen Transparenz und kirchlicher Autonomie" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-yellow-50 dark:bg-yellow-950/20", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-yellow-600" }),
                    "Betroffene Einrichtungen"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-yellow-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Bistümer und Diözesanverwaltungen" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Church, { className: "h-5 w-5 text-yellow-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Pfarreien und Kirchengemeinden" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5 text-yellow-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Caritas und kirchliche Sozialeinrichtungen" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl my-8", children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-amber-600" }),
                  "Wichtiger Hinweis"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Das KDG gilt seit dem 24. Mai 2018 und wurde zuletzt 2021 novelliert. Es ist für alle katholischen Einrichtungen in Deutschland verbindlich und ersetzt die staatlichen Datenschutzgesetze im kirchlichen Bereich." })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { "data-section": "history", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-8 w-8 text-amber-600" }),
                "Geschichte & Entwicklung"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("history"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("history") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300 dark:bg-amber-600" }),
              [
                { year: "2018", title: "Inkrafttreten des KDG", description: "Zeitgleich mit der DSGVO tritt das KDG in Kraft" },
                { year: "2019", title: "Erste Anpassungen", description: "Praxiserfahrungen führen zu ersten Klarstellungen" },
                { year: "2021", title: "Novellierung", description: "Umfassende Überarbeitung und Anpassung an neue Anforderungen" },
                { year: "2023", title: "Digitalisierung", description: "Verstärkte Regelungen für digitale Sakramentenverwaltung" },
                { year: "2024", title: "Aktuelle Fassung", description: "Weitere Präzisierungen und Best Practices etabliert" }
              ].map((item, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { delay: index * 0.1 },
                  className: "relative flex items-start gap-6 mb-8",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center z-10", children: /* @__PURE__ */ jsx("span", { className: "font-bold text-amber-700 dark:text-amber-400", children: item.year }) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-2", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-1", children: item.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: item.description })
                    ] })
                  ]
                },
                index
              ))
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx("section", { "data-section": "requirements", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Target, { className: "h-8 w-8 text-amber-600" }),
                "Zentrale Anforderungen"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("requirements"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("requirements") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Tabs, { defaultValue: "grundsaetze", className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(TabsList, { className: "grid grid-cols-1 md:grid-cols-4 h-auto", children: [
                /* @__PURE__ */ jsxs(TabsTrigger, { value: "grundsaetze", className: "data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700", children: [
                  /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 mr-2" }),
                  "Grundsätze"
                ] }),
                /* @__PURE__ */ jsxs(TabsTrigger, { value: "rechte", className: "data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 mr-2" }),
                  "Betroffenenrechte"
                ] }),
                /* @__PURE__ */ jsxs(TabsTrigger, { value: "pflichten", className: "data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
                  "Pflichten"
                ] }),
                /* @__PURE__ */ jsxs(TabsTrigger, { value: "tom", className: "data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 mr-2" }),
                  "TOM"
                ] })
              ] }),
              /* @__PURE__ */ jsxs(TabsContent, { value: "grundsaetze", className: "space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Datenschutzgrundsätze nach KDG" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  { title: "Rechtmäßigkeit", desc: "Verarbeitung nur mit Rechtsgrundlage oder Einwilligung" },
                  { title: "Zweckbindung", desc: "Daten nur für festgelegte, eindeutige Zwecke" },
                  { title: "Datenminimierung", desc: "Auf das notwendige Maß beschränkt" },
                  { title: "Richtigkeit", desc: "Daten müssen sachlich richtig und aktuell sein" },
                  { title: "Speicherbegrenzung", desc: "Löschung nach Zweckerfüllung" },
                  { title: "Integrität", desc: "Schutz vor Verlust und Missbrauch" }
                ].map((item, index) => /* @__PURE__ */ jsxs(Card, { className: "p-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: item.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: item.desc })
                ] }, index)) })
              ] }),
              /* @__PURE__ */ jsxs(TabsContent, { value: "rechte", className: "space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Betroffenenrechte im kirchlichen Kontext" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                  { right: "Auskunftsrecht", desc: "Betroffene können Auskunft über ihre Daten verlangen", special: "Ausnahme: Beichtgeheimnis" },
                  { right: "Berichtigungsrecht", desc: "Korrektur unrichtiger Daten", special: "Besonders wichtig bei Matrikeldaten" },
                  { right: "Löschungsrecht", desc: "Unter bestimmten Voraussetzungen", special: "Nicht bei Matrikeldaten und kanonischen Pflichten" },
                  { right: "Widerspruchsrecht", desc: "Bei berechtigtem Interesse", special: "Eingeschränkt bei seelsorglichen Aufgaben" }
                ].map((item, index) => /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg mb-2", children: item.right }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-2", children: item.desc }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                      /* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3 mr-1" }),
                      item.special
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-6 w-6 text-green-600" })
                ] }) }, index)) })
              ] }),
              /* @__PURE__ */ jsxs(TabsContent, { value: "pflichten", className: "space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Pflichten der Verantwortlichen" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-amber-50 dark:bg-amber-950/20", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-amber-600" }),
                      "Dokumentationspflichten"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }),
                        "Verarbeitungsverzeichnis führen"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }),
                        "Datenschutz-Folgenabschätzungen"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }),
                        "Löschkonzept erstellen"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }),
                        "Auftragsverarbeitung dokumentieren"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-yellow-50 dark:bg-yellow-950/20", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-yellow-600" }),
                      "Organisatorische Pflichten"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }),
                        "Datenschutzbeauftragten bestellen"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }),
                        "Mitarbeiter schulen"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }),
                        "Meldepflichten beachten"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }),
                        "Datenschutzkultur etablieren"
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(TabsContent, { value: "tom", className: "space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Technische und Organisatorische Maßnahmen" }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600" }),
                      "Technische Maßnahmen"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-blue-600 mt-1" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Zutrittskontrolle" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Physischer Schutz von Serverräumen" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Key, { className: "h-4 w-4 text-blue-600 mt-1" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Zugangskontrolle" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Benutzerauthentifizierung" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Database, { className: "h-4 w-4 text-blue-600 mt-1" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Zugriffskontrolle" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Berechtigungskonzepte" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-green-600" }),
                      "Organisatorische Maßnahmen"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-green-600 mt-1" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Personalmaßnahmen" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Verpflichtung auf Datengeheimnis" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-green-600 mt-1" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Verfahrensdokumentation" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Prozesse beschreiben" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-green-600 mt-1" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Notfallmanagement" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Datenpannen-Prozess" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { "data-section": "comparison", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Scale, { className: "h-8 w-8 text-amber-600" }),
                "KDG vs. DSGVO"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("comparison"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("comparison") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-amber-200 dark:border-amber-700", children: [
                /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-bold", children: "Aspekt" }),
                /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-bold text-amber-600", children: "KDG" }),
                /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-bold text-blue-600", children: "DSGVO" }),
                /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-bold", children: "Unterschied" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { children: kdgVsDsgvoComparison.map((item, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-gray-800", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: item.aspect }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-sm", children: item.kdg }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-sm", children: item.dsgvo }),
                /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: item.difference }) })
              ] }, index)) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl", children: [
              /* @__PURE__ */ jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Info, { className: "h-5 w-5 text-amber-600" }),
                "Wichtige Erkenntnis"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Das KDG ist keine bloße Kopie der DSGVO, sondern berücksichtigt die besonderen Bedürfnisse und verfassungsrechtlichen Grundlagen der katholischen Kirche. Die kirchliche Selbstverwaltung ermöglicht eigene Datenschutzregelungen, die jedoch ein gleichwertiges Schutzniveau wie die DSGVO gewährleisten müssen." })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { "data-section": "implementation", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Settings, { className: "h-8 w-8 text-amber-600" }),
                "Implementierung"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("implementation"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("implementation") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "4-Phasen-Modell zur KDG-Umsetzung" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "Die strukturierte Einführung des KDG erfolgt idealerweise in vier aufeinander aufbauenden Phasen über einen Zeitraum von 12-18 Monaten." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: implementationPhases.map((phase, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: index * 0.1 },
                  children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-lg transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl", children: phase.phase }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold mb-1", children: phase.title }),
                        /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                          /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 mr-1" }),
                          phase.duration
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2 text-sm text-gray-600 dark:text-gray-400", children: "Hauptaufgaben" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.tasks.map((task, taskIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                            /* @__PURE__ */ jsx("span", { children: task })
                          ] }, taskIndex)) })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2 text-sm text-gray-600 dark:text-gray-400", children: "Ergebnisse" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.deliverables.map((deliverable, delIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                            /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-amber-600 mt-0.5" }),
                            /* @__PURE__ */ jsx("span", { children: deliverable })
                          ] }, delIndex)) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(Progress, { value: phase.phase / 4 * 100, className: "h-2" })
                    ] })
                  ] }) })
                },
                index
              )) }),
              /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20", children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-amber-600" }),
                  "Praxis-Tipp"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Beginnen Sie mit einer Pilotpfarrei oder -einrichtung, um Erfahrungen zu sammeln und das Konzept zu verfeinern, bevor Sie es auf die gesamte Diözese ausrollen." })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { "data-section": "special-cases", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Church, { className: "h-8 w-8 text-amber-600" }),
                "Besondere Fälle im kirchlichen Datenschutz"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("special-cases"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("special-cases") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-6", children: specialCases.map((case_, index) => /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { delay: index * 0.1 },
                children: /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden hover:shadow-xl transition-all duration-300", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md", children: /* @__PURE__ */ jsx(case_.icon, { className: "h-8 w-8 text-amber-600" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: case_.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: case_.description })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { className: "p-6 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-blue-600" }),
                        "Besonderheiten"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: case_.details.map((detail, detailIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-gray-400 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: detail })
                      ] }, detailIndex)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                        "Best Practices"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: case_.bestPractices.map((practice, practiceIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: practice })
                      ] }, practiceIndex)) })
                    ] })
                  ] })
                ] })
              },
              index
            )) })
          ] }) }),
          /* @__PURE__ */ jsx("section", { "data-section": "tools", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Wrench, { className: "h-8 w-8 text-amber-600" }),
                "Tools & Vorlagen"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("tools"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("tools") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Nutzen Sie unsere praxiserprobten Vorlagen und Tools für die KDG-Umsetzung in Ihrer kirchlichen Einrichtung." }) }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: downloadResources.map((resource, index) => /* @__PURE__ */ jsx(Card, { className: "p-4 hover:shadow-md transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg", children: /* @__PURE__ */ jsx(resource.icon, { className: "h-6 w-6 text-amber-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: resource.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                    resource.type,
                    " • ",
                    resource.size
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }) })
            ] }) }, index)) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl", children: [
              /* @__PURE__ */ jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-amber-600" }),
                "Premium-Paket"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-4", children: "Erhalten Sie Zugang zu über 50 weiteren Vorlagen, interaktiven Checklisten und unserem KDG-Compliance-Tool mit automatischer Dokumentenerstellung." }),
              /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-amber-600 to-yellow-600 text-white", children: [
                /* @__PURE__ */ jsx(Crown, { className: "h-4 w-4 mr-2" }),
                "Premium-Zugang anfordern"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { "data-section": "faq", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(HelpCircle, { className: "h-8 w-8 text-amber-600" }),
                "Häufige Fragen"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("faq"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("faq") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
              Card,
              {
                className: "overflow-hidden hover:shadow-md transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setExpandedFaqs((prev) => {
                        const newSet = new Set(prev);
                        if (newSet.has(index)) {
                          newSet.delete(index);
                        } else {
                          newSet.add(index);
                        }
                        return newSet;
                      }),
                      className: "w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
                      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                          /* @__PURE__ */ jsx("div", { className: "p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg", children: /* @__PURE__ */ jsx(HelpCircle, { className: "h-5 w-5 text-amber-600" }) }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg mb-1", children: faq.question }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: faq.category })
                          ] })
                        ] }) }),
                        /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                          "h-5 w-5 text-gray-400 transition-transform",
                          expandedFaqs.has(index) && "transform rotate-180"
                        ) })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: expandedFaqs.has(index) && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { height: 0 },
                      animate: { height: "auto" },
                      exit: { height: 0 },
                      transition: { duration: 0.3 },
                      className: "overflow-hidden",
                      children: /* @__PURE__ */ jsx("div", { className: "p-6 pt-0", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 leading-relaxed", children: faq.answer }) })
                    }
                  ) })
                ]
              },
              index
            )) })
          ] }) }),
          /* @__PURE__ */ jsx("section", { "data-section": "checklist", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-amber-600" }),
                "KDG-Umsetzungs-Checkliste"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("checklist"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("checklist") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Überprüfen Sie den Umsetzungsstand Ihrer KDG-Compliance" }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-sm", children: [
                /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 mr-1" }),
                "24 Anforderungen"
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "space-y-6", children: checklistItems.map((category, categoryIndex) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                categoryIndex === 0 && /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-amber-600" }),
                categoryIndex === 1 && /* @__PURE__ */ jsx(Gavel, { className: "h-5 w-5 text-amber-600" }),
                categoryIndex === 2 && /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-amber-600" }),
                categoryIndex === 3 && /* @__PURE__ */ jsx(Church, { className: "h-5 w-5 text-amber-600" }),
                category.category
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: category.items.map((item) => /* @__PURE__ */ jsxs(
                "label",
                {
                  className: "flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "mt-1 h-4 w-4 text-amber-600 rounded focus:ring-amber-500"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.text }),
                      item.required && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "ml-2 text-xs", children: "Pflicht" })
                    ] })
                  ]
                },
                item.id
              )) })
            ] }, categoryIndex)) }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-amber-600 to-yellow-600 text-white", children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
              "Checkliste als PDF exportieren"
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "scroll-mt-24 mb-8", children: /* @__PURE__ */ jsxs(Card, { className: "p-8 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-4 flex items-center justify-center gap-3", children: [
                /* @__PURE__ */ jsx(Brain, { className: "h-8 w-8 text-amber-600" }),
                "Testen Sie Ihr KDG-Wissen"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "5 Fragen zum katholischen Datenschutz" })
            ] }),
            !isQuizActive && quizScore === null && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(
              Button,
              {
                onClick: () => {
                  setIsQuizActive(true);
                  setCurrentQuizQuestion(0);
                  setQuizAnswers({});
                },
                className: "bg-gradient-to-r from-amber-600 to-yellow-600 text-white",
                children: [
                  /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 mr-2" }),
                  "Quiz starten"
                ]
              }
            ) }),
            isQuizActive && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                  "Frage ",
                  currentQuizQuestion + 1,
                  " von ",
                  quizQuestions.length
                ] }),
                /* @__PURE__ */ jsx(
                  Progress,
                  {
                    value: currentQuizQuestion / quizQuestions.length * 100,
                    className: "w-32 h-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: quizQuestions[currentQuizQuestion].question }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: quizQuestions[currentQuizQuestion].options.map((option, index) => /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "w-full justify-start text-left p-4 hover:bg-amber-50 dark:hover:bg-amber-900/20",
                    onClick: () => handleQuizAnswer(index),
                    children: [
                      /* @__PURE__ */ jsxs("span", { className: "font-medium mr-3", children: [
                        String.fromCharCode(65 + index),
                        "."
                      ] }),
                      option
                    ]
                  },
                  index
                )) })
              ] })
            ] }),
            quizScore !== null && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-white", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold", children: [
                  quizScore,
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Ergebnis" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: quizScore >= 80 ? "Hervorragend!" : quizScore >= 60 ? "Gut gemacht!" : "Weiter lernen!" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-4", children: quizScore >= 80 ? "Sie kennen sich sehr gut mit dem KDG aus!" : quizScore >= 60 ? "Sie haben solide Grundkenntnisse im KDG." : "Vertiefen Sie Ihr Wissen mit unserem Leitfaden." })
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => {
                    setQuizScore(null);
                    setIsQuizActive(false);
                    setCurrentQuizQuestion(0);
                    setQuizAnswers({});
                  },
                  variant: "outline",
                  children: [
                    /* @__PURE__ */ jsx(RotateCcw, { className: "h-4 w-4 mr-2" }),
                    "Quiz wiederholen"
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { "data-section": "resources", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "h-8 w-8 text-amber-600" }),
                "Weiterführende Ressourcen"
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleBookmark("resources"),
                  children: /* @__PURE__ */ jsx(Bookmark, { className: cn(
                    "h-5 w-5",
                    bookmarkedSections.includes("resources") && "fill-amber-600 text-amber-600"
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Link, { className: "h-5 w-5 text-amber-600" }),
                  "Offizielle Quellen"
                ] }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2 text-amber-600 hover:text-amber-700", children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
                    "Katholischer Datenschutz Deutschland"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2 text-amber-600 hover:text-amber-700", children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
                    "KDG Gesetzestext (aktuelle Fassung)"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2 text-amber-600 hover:text-amber-700", children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
                    "Arbeitshilfen der Deutschen Bischofskonferenz"
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5 text-amber-600" }),
                  "Schulungen & Seminare"
                ] }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-amber-600 mt-1" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "KDG-Grundlagenschulung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Nächster Termin: 15. März 2024" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-amber-600 mt-1" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Datenschutzbeauftragte Zertifizierung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "5-tägiger Intensivkurs" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-6 w-6 text-amber-600" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "Persönliche Beratung gewünscht?" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-4", children: "Unsere KDG-Experten unterstützen Sie bei der individuellen Umsetzung in Ihrer kirchlichen Einrichtung." }),
                /* @__PURE__ */ jsx(Link$1, { to: "/contact?source=kdg-guide", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-amber-600 to-yellow-600 text-white", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mr-2" }),
                  "Beratungsgespräch vereinbaren"
                ] }) })
              ] })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxs(Card, { className: "p-8 mt-8", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-6 w-6 text-amber-600" }),
              "Diözesanspezifische Informationen"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-2", children: "Wählen Sie Ihr Bistum:" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    className: "w-full p-3 border rounded-lg dark:bg-gray-800",
                    value: selectedDiocese,
                    onChange: (e) => setSelectedDiocese(e.target.value),
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Bitte wählen..." }),
                      dioceses.map((diocese) => /* @__PURE__ */ jsx("option", { value: diocese, children: diocese }, diocese))
                    ]
                  }
                )
              ] }),
              selectedDiocese && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  className: "p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg",
                  children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxs("strong", { children: [
                      selectedDiocese,
                      ":"
                    ] }),
                    " Kontaktieren Sie Ihren diözesanen Datenschutzbeauftragten für spezifische Richtlinien und Unterstützung."
                  ] })
                }
              )
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "fixed bottom-8 right-8 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "shadow-lg bg-white dark:bg-gray-800",
            onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
            children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 rotate-90" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            className: "shadow-lg bg-gradient-to-r from-amber-600 to-yellow-600 text-white",
            children: /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  KdgGuide as default
};
