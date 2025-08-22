import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Shield, BadgeCheck, Brain, Car, Lock, Network, Cloud, UserCheck, Euro, Church, Cross, Award, Building2, Globe, Search, Grid, List, Star, Calendar, AlertTriangle, Clock, Target, BarChart3, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
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
const ComplianceFrameworks = () => {
  var _a, _b;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const categories = [
    { id: "all", name: "Alle Frameworks", icon: Award, count: 14 },
    { id: "security", name: "IT-Sicherheit", icon: Shield, count: 4 },
    { id: "privacy", name: "Datenschutz", icon: Lock, count: 5 },
    { id: "industry", name: "Branchenstandards", icon: Building2, count: 3 },
    { id: "ai", name: "KI & Automation", icon: Brain, count: 2 }
  ];
  const difficulties = [
    { id: "all", name: "Alle Level", count: 14 },
    { id: "beginner", name: "Einsteiger", count: 3 },
    { id: "intermediate", name: "Fortgeschritten", count: 8 },
    { id: "expert", name: "Experte", count: 3 }
  ];
  const frameworks = [
    {
      id: "iso-27001",
      title: "ISO 27001",
      subtitle: "Information Security Management",
      description: "Internationaler Standard für Informationssicherheits-Managementsysteme (ISMS). Definiert systematische Herangehensweise an das Management sensibler Unternehmensinformationen.",
      category: "security",
      difficulty: "expert",
      readTime: "45 Min",
      implementationTime: "6-12 Monate",
      icon: Shield,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
      link: "/compliance/iso-27001",
      popular: true,
      certification: true,
      compliance: 98,
      lastUpdated: "2024-01-15",
      industries: ["Fintech", "Healthcare", "Government", "Enterprise"],
      benefits: [
        "Internationale Anerkennung",
        "Risikomanagement",
        "Vertrauen bei Kunden",
        "Compliance-Nachweis"
      ],
      requirements: [
        "ISMS-Dokumentation",
        "Risikobewertung",
        "Interne Audits",
        "Management Review"
      ],
      keyAreas: [
        "Informationssicherheitspolitik",
        "Organisation der Informationssicherheit",
        "Personalwesen",
        "Vermögenswerte-Management",
        "Zugangskontrollen",
        "Kryptographie",
        "Physische und umgebende Sicherheit",
        "Betriebssicherheit",
        "Kommunikationssicherheit",
        "Systemakquisition, -entwicklung und -wartung",
        "Lieferantenbeziehungen",
        "Incident Management",
        "Business Continuity",
        "Compliance"
      ],
      stats: {
        companies: "27.000+",
        countries: "170+",
        satisfaction: "94%"
      }
    },
    {
      id: "soc2",
      title: "SOC 2 Type II",
      subtitle: "Service Organization Control",
      description: "Audit-Framework für Service-Organisationen zur Bewertung interner Kontrollen bezüglich Sicherheit, Verfügbarkeit, Verarbeitungsintegrität, Vertraulichkeit und Datenschutz.",
      category: "security",
      difficulty: "expert",
      readTime: "40 Min",
      implementationTime: "4-8 Monate",
      icon: BadgeCheck,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900",
      link: "/compliance/soc-2",
      certification: true,
      compliance: 96,
      lastUpdated: "2024-01-20",
      industries: ["SaaS", "Cloud Services", "Fintech", "Healthcare"],
      benefits: [
        "Vertrauen bei US-Kunden",
        "Competitive Advantage",
        "Risikominimierung",
        "Prozessoptimierung"
      ],
      requirements: [
        "Trust Services Criteria",
        "Control Environment",
        "Risk Assessment",
        "Information Systems"
      ],
      keyAreas: [
        "Security (Sicherheit)",
        "Availability (Verfügbarkeit)",
        "Processing Integrity (Verarbeitungsintegrität)",
        "Confidentiality (Vertraulichkeit)",
        "Privacy (Datenschutz)"
      ],
      stats: {
        companies: "15.000+",
        countries: "25+",
        satisfaction: "91%"
      }
    },
    {
      id: "eu-ai-act",
      title: "EU AI Act",
      subtitle: "European Artificial Intelligence Act",
      description: "Erste umfassende KI-Regulierung weltweit. Regelt die Entwicklung, das Inverkehrbringen und die Nutzung von KI-Systemen in der EU mit risikobasiertem Ansatz.",
      category: "ai",
      difficulty: "intermediate",
      readTime: "35 Min",
      implementationTime: "3-6 Monate",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      link: "/compliance/eu-ai-act",
      upcoming: true,
      compliance: 85,
      lastUpdated: "2024-01-22",
      effectiveDate: "2025-08-02",
      industries: ["AI/ML", "Healthcare", "Finance", "Automotive", "Recruitment"],
      benefits: [
        "EU-Marktzugang",
        "Vertrauen schaffen",
        "Risikominimierung",
        "Innovation fördern"
      ],
      requirements: [
        "Risikoklassifizierung",
        "Konformitätsbewertung",
        "CE-Kennzeichnung",
        "Marktüberwachung"
      ],
      keyAreas: [
        "Verbotene KI-Praktiken",
        "Hochrisiko-KI-Systeme",
        "Transparenzpflichten",
        "Foundation Models",
        "Governance und Überwachung"
      ],
      stats: {
        riskCategories: "4",
        prohibitedUses: "8+",
        compliance: "Mandatory"
      }
    },
    {
      id: "tisax",
      title: "TISAX",
      subtitle: "Trusted Information Security Assessment Exchange",
      description: "Branchenstandard der Automobilindustrie für Informationssicherheit. Basiert auf ISO 27001 mit automobilspezifischen Anforderungen und Bewertungsverfahren.",
      category: "industry",
      difficulty: "expert",
      readTime: "30 Min",
      implementationTime: "4-8 Monate",
      icon: Car,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900",
      link: "/compliance/tisax",
      certification: true,
      compliance: 94,
      lastUpdated: "2024-01-18",
      industries: ["Automotive", "Supplier", "Manufacturing"],
      benefits: [
        "Automobilbranche-Zugang",
        "Lieferantenstatus",
        "Einheitliches Assessment",
        "Kosteneinsparung"
      ],
      requirements: [
        "ISA-Katalog",
        "Assessment durch Provider",
        "Scope Definition",
        "TISAX-Label"
      ],
      keyAreas: [
        "Information Security",
        "Prototype Protection",
        "Data Protection"
      ],
      stats: {
        participants: "4.500+",
        assessments: "12.000+",
        coverage: "Global"
      }
    },
    {
      id: "dsgvo",
      title: "DSGVO/GDPR",
      subtitle: "Datenschutz-Grundverordnung",
      description: "EU-Verordnung zum Schutz personenbezogener Daten. Regelt Verarbeitung, Übertragung und Schutz von Daten natürlicher Personen innerhalb der EU.",
      category: "privacy",
      difficulty: "intermediate",
      readTime: "25 Min",
      implementationTime: "2-6 Monate",
      icon: Lock,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-green-900 to-slate-900",
      link: "/compliance/dsgvo",
      mandatory: true,
      compliance: 100,
      lastUpdated: "2024-01-25",
      maxFine: "20 Mio. € oder 4% Jahresumsatz",
      industries: ["Alle EU-Unternehmen"],
      benefits: [
        "Rechtskonformität",
        "Vertrauen schaffen",
        "Einheitliche Standards",
        "Wettbewerbsvorteil"
      ],
      requirements: [
        "Verarbeitungsverzeichnis",
        "Datenschutzbeauftragter",
        "Technische Maßnahmen",
        "Betroffenenrechte"
      ],
      keyAreas: [
        "Rechtmäßigkeit der Verarbeitung",
        "Transparenz und Information",
        "Betroffenenrechte",
        "Datenschutz durch Technik",
        "Internationale Übertragungen",
        "Aufsichtsbehörden",
        "Haftung und Sanktionen"
      ],
      stats: {
        articles: "99",
        countries: "27",
        maxFine: "20M€"
      }
    },
    {
      id: "nis2",
      title: "NIS2 Direktive",
      subtitle: "Network and Information Security",
      description: "EU-Richtlinie zur Cybersicherheit kritischer Infrastrukturen. Aktualisierung der ursprünglichen NIS-Direktive mit erweiterten Anforderungen.",
      category: "security",
      difficulty: "intermediate",
      readTime: "30 Min",
      implementationTime: "6-12 Monate",
      icon: Network,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900",
      link: "/compliance/nis2",
      mandatory: true,
      compliance: 88,
      lastUpdated: "2024-01-20",
      deadline: "17. Oktober 2024",
      industries: ["Kritische Infrastruktur", "Digitale Dienste", "Telekommunikation"],
      benefits: [
        "Cyber-Resilienz",
        "EU-Harmonisierung",
        "Risikominimierung",
        "Incident Response"
      ],
      requirements: [
        "Cybersicherheitsmaßnahmen",
        "Incident Reporting",
        "Risikomanagement",
        "Lieferketten-Sicherheit"
      ],
      keyAreas: [
        "Wesentliche Einrichtungen",
        "Wichtige Einrichtungen",
        "Cybersicherheitsmaßnahmen",
        "Incident Reporting",
        "Aufsicht und Durchsetzung"
      ],
      stats: {
        sectors: "18",
        entities: "160.000+",
        deadline: "Okt 2024"
      }
    },
    {
      id: "iso-27017",
      title: "ISO 27017",
      subtitle: "Cloud Security Controls",
      description: "Leitfaden für Informationssicherheitskontrollen in Cloud-Services. Ergänzt ISO 27001/27002 um cloudspezifische Sicherheitsanforderungen.",
      category: "security",
      difficulty: "intermediate",
      readTime: "25 Min",
      implementationTime: "3-6 Monate",
      icon: Cloud,
      color: "from-sky-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900",
      link: "/compliance/iso-27017",
      certification: true,
      compliance: 92,
      lastUpdated: "2024-01-16",
      industries: ["Cloud Provider", "SaaS", "IaaS", "PaaS"],
      benefits: [
        "Cloud-spezifische Sicherheit",
        "Vertrauen bei Cloud-Nutzung",
        "Best Practices",
        "Compliance-Nachweis"
      ],
      requirements: [
        "Cloud-Sicherheitskontrollen",
        "Shared Responsibility Model",
        "Data Location",
        "Virtual Environment Security"
      ],
      keyAreas: [
        "Cloud Service Customer",
        "Cloud Service Provider",
        "Shared Controls",
        "Data Protection in Cloud"
      ],
      stats: {
        controls: "37",
        cloudFocus: "100%",
        adoption: "Growing"
      }
    },
    {
      id: "iso-27018",
      title: "ISO 27018",
      subtitle: "Cloud Privacy Protection",
      description: "Standard für Datenschutz in öffentlichen Cloud-Computing-Umgebungen. Erste internationale Norm speziell für Cloud-Datenschutz als Zusatz zu ISO 27001.",
      category: "privacy",
      difficulty: "intermediate",
      readTime: "20 Min",
      implementationTime: "2-4 Monate",
      icon: Shield,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900",
      link: "/compliance/iso-27018",
      certification: true,
      compliance: 90,
      lastUpdated: "2024-01-14",
      industries: ["Cloud Provider", "Public Cloud", "Multi-Tenant Services"],
      benefits: [
        "Cloud-Datenschutz",
        "GDPR-Komplementär",
        "Kundenvertrauen",
        "Transparenz"
      ],
      requirements: [
        "Privacy Impact Assessment",
        "Data Return/Deletion",
        "Subprocessor Management",
        "Transparency Reports"
      ],
      keyAreas: [
        "Consent and Choice",
        "Purpose Limitation",
        "Collection Limitation",
        "Use Limitation",
        "Retention Limitation",
        "Disclosure Limitation"
      ],
      stats: {
        principles: "6",
        controls: "40+",
        focus: "Cloud Privacy"
      }
    },
    {
      id: "hinweisgeberschutz",
      title: "Hinweisgeberschutzgesetz",
      subtitle: "Whistleblower Protection Act",
      description: "Deutsches Gesetz zum Schutz von Hinweisgebern. Umsetzung der EU-Whistleblower-Richtlinie mit Anforderungen an interne Meldesysteme.",
      category: "privacy",
      difficulty: "beginner",
      readTime: "15 Min",
      implementationTime: "1-3 Monate",
      icon: UserCheck,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900",
      link: "/compliance/hinweisgeberschutzgesetz",
      mandatory: true,
      compliance: 75,
      lastUpdated: "2024-01-12",
      effectiveDate: "2. Juli 2023",
      industries: ["Unternehmen >250 MA", "Bestimmte Branchen >50 MA"],
      benefits: [
        "Rechtskonformität",
        "Früherkennung von Missständen",
        "Reputationsschutz",
        "Präventive Wirkung"
      ],
      requirements: [
        "Interne Meldestelle",
        "Meldekanäle",
        "Vertraulichkeit",
        "Dokumentation"
      ],
      keyAreas: [
        "Interne Meldestellen",
        "Meldeverfahren",
        "Schutz vor Vergeltung",
        "Vertraulichkeit",
        "Nachverfolgung"
      ],
      stats: {
        threshold: "250+ MA",
        sectors: "Regulated",
        protection: "Full"
      }
    },
    {
      id: "geldwaeschegesetz",
      title: "Geldwäschegesetz",
      subtitle: "Anti-Money Laundering Act",
      description: "Deutsches Gesetz zur Verhinderung von Geldwäsche und Terrorismusfinanzierung. Umsetzung der EU-Geldwäsche-Richtlinien mit umfassenden Compliance-Anforderungen.",
      category: "industry",
      difficulty: "expert",
      readTime: "40 Min",
      implementationTime: "6-12 Monate",
      icon: Euro,
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900",
      link: "/compliance/geldwaeschegesetz",
      mandatory: true,
      compliance: 95,
      lastUpdated: "2024-01-19",
      industries: ["Banken", "Finanzdienstleister", "Immobilien", "Glücksspiel"],
      benefits: [
        "Rechtssicherheit",
        "Risikominimierung",
        "Reputationsschutz",
        "Marktakzeptanz"
      ],
      requirements: [
        "Kundenidentifizierung (KYC)",
        "Verdachtsmeldungen",
        "Aufzeichnungspflichten",
        "Mitarbeiterschulungen"
      ],
      keyAreas: [
        "Kundensorgfaltspflichten",
        "Verdachtsanzeigen",
        "Aufbewahrungspflichten",
        "Risikomanagement",
        "Aufsicht und Sanktionen"
      ],
      stats: {
        sectors: "15+",
        reporting: "BaFin",
        penalties: "Up to 5M€"
      }
    },
    {
      id: "dsg-ekd",
      title: "DSG-EKD",
      subtitle: "Kirchlicher Datenschutz",
      description: "Datenschutzgesetz der Evangelischen Kirche in Deutschland. Spezifische Regelung für kirchliche Einrichtungen mit Fokus auf Seelsorgegeheimnis und Gemeindedaten.",
      category: "privacy",
      difficulty: "intermediate",
      readTime: "30 Min",
      implementationTime: "3-6 Monate",
      icon: Church,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      link: "/dsg-ekd",
      certification: false,
      compliance: 97,
      lastUpdated: "2024-01-26",
      industries: ["Kirchen", "Gemeinden", "Diakonie", "Kirchliche Einrichtungen"],
      benefits: [
        "Kirchliche Autonomie",
        "Seelsorgegeheimnis",
        "Gemeindedatenschutz",
        "Vertrauensschutz"
      ],
      requirements: [
        "Kirchliche Datenschutzbeauftragte",
        "Seelsorge-Dokumentation",
        "Mitgliederdatenverwaltung",
        "Ehrenamtlichen-Schulung"
      ],
      keyAreas: [
        "Kirchliche Amtshandlungen",
        "Seelsorgegeheimnis",
        "Mitgliederverwaltung",
        "Gemeindekommunikation",
        "Ehrenamtlichen-Datenschutz",
        "Kirchenbuchführung"
      ],
      stats: {
        churches: "14.000+",
        members: "20.3M",
        speciality: "Kirchenrecht"
      }
    },
    {
      id: "kdg",
      title: "KDG",
      subtitle: "Katholischer Datenschutz",
      description: "Gesetz über den Kirchlichen Datenschutz der katholischen Kirche. Spezifische Regelung für katholische Einrichtungen mit Fokus auf Beichtgeheimnis und sakramentale Daten.",
      category: "privacy",
      difficulty: "intermediate",
      readTime: "30 Min",
      implementationTime: "3-6 Monate",
      icon: Cross,
      color: "from-amber-500 to-yellow-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900",
      link: "/compliance/kdg",
      certification: false,
      compliance: 96,
      lastUpdated: "2024-01-26",
      industries: ["Bistümer", "Pfarreien", "Caritas", "Katholische Einrichtungen"],
      benefits: [
        "Kirchenrechtliche Konformität",
        "Beichtgeheimnis-Schutz",
        "Sakramentendatenschutz",
        "Diözesane Einheit"
      ],
      requirements: [
        "Diözesane Datenschutzbeauftragte",
        "Matrikelbuch-Verwaltung",
        "Caritas-Datenschutz",
        "Pfarrverwaltung"
      ],
      keyAreas: [
        "Sakramentale Datenverarbeitung",
        "Beichtgeheimnis",
        "Diözesanverwaltung",
        "Caritative Dienste",
        "Matrikelbuchführung",
        "Digitale Seelsorge"
      ],
      stats: {
        dioceses: "27",
        catholics: "12.1M",
        speciality: "Kanonisches Recht"
      }
    }
  ];
  const filteredFrameworks = frameworks.filter((framework) => {
    const matchesCategory = selectedCategory === "all" || framework.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || framework.difficulty === selectedDifficulty;
    const matchesSearch = searchTerm === "" || framework.title.toLowerCase().includes(searchTerm.toLowerCase()) || framework.description.toLowerCase().includes(searchTerm.toLowerCase()) || framework.industries.some((industry) => industry.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesDifficulty && matchesSearch;
  });
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "expert":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };
  const getCategoryIcon = (category) => {
    switch (category) {
      case "security":
        return Shield;
      case "privacy":
        return Lock;
      case "industry":
        return Building2;
      case "ai":
        return Brain;
      default:
        return Award;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900", style: {
    wordWrap: "break-word",
    overflowWrap: "break-word"
  }, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        ref: heroRef,
        className: "relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
        style: { y },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" }),
          /* @__PURE__ */ jsx("div", { className: "relative container mx-auto max-w-7xl text-center", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500 rounded-xl", children: /* @__PURE__ */ jsx(Award, { className: "h-8 w-8 text-white" }) }),
                  /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-bold text-white", children: "Compliance Frameworks" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300 mb-8 max-w-4xl mx-auto", children: "Umfassende Leitfäden zu internationalen Compliance-Standards, Zertifizierungen und regulatorischen Frameworks. Navigieren Sie mit fachkundiger Anleitung durch die komplexe Landschaft moderner Compliance-Anforderungen." }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4 mb-8", children: [
                  /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 mr-2" }),
                    frameworks.length,
                    " Frameworks"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-blue-500/10 border-blue-500/20 text-blue-300", children: [
                    /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 mr-2" }),
                    "Alle Branchen"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-purple-500/10 border-purple-500/20 text-purple-300", children: [
                    /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 mr-2" }),
                    "International Standards"
                  ] })
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 py-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-6 lg:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-24 space-y-6", children: [
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search frameworks...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: "w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Kategorien" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: categories.map((category) => {
            const IconComponent = category.icon;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setSelectedCategory(category.id),
                className: cn(
                  "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                  selectedCategory === category.id ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300" : "border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300"
                ),
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: category.name })
                  ] }),
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: category.count })
                ]
              },
              category.id
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Schwierigkeit" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: difficulties.map((difficulty) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setSelectedDifficulty(difficulty.id),
              className: cn(
                "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                selectedDifficulty === difficulty.id ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300" : "border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300"
              ),
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: difficulty.name }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: difficulty.count })
              ]
            },
            difficulty.id
          )) })
        ] }) }),
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Ansicht" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: viewMode === "grid" ? "default" : "outline",
                onClick: () => setViewMode("grid"),
                className: "flex-1",
                children: [
                  /* @__PURE__ */ jsx(Grid, { className: "h-4 w-4 mr-2" }),
                  "Grid"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: viewMode === "list" ? "default" : "outline",
                onClick: () => setViewMode("list"),
                className: "flex-1",
                children: [
                  /* @__PURE__ */ jsx(List, { className: "h-4 w-4 mr-2" }),
                  "List"
                ]
              }
            )
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-white", children: [
            filteredFrameworks.length,
            " Framework",
            filteredFrameworks.length !== 1 ? "s" : "",
            " gefunden"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-400", children: [
            selectedCategory !== "all" && `Kategorie: ${(_a = categories.find((c) => c.id === selectedCategory)) == null ? void 0 : _a.name} • `,
            selectedDifficulty !== "all" && `Level: ${(_b = difficulties.find((d) => d.id === selectedDifficulty)) == null ? void 0 : _b.name}`
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: cn(
          "gap-6",
          viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"
        ), children: filteredFrameworks.map((framework, index) => {
          var _a2;
          const IconComponent = framework.icon;
          const CategoryIcon = getCategoryIcon(framework.category);
          return /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              children: /* @__PURE__ */ jsx(Card, { className: cn(
                "group relative overflow-hidden border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105",
                framework.bgColor
              ), children: /* @__PURE__ */ jsxs(CardContent, { className: cn(
                "p-6",
                viewMode === "list" ? "flex items-center gap-6" : ""
              ), children: [
                /* @__PURE__ */ jsxs("div", { className: cn(
                  "flex items-start justify-between mb-4",
                  viewMode === "list" ? "mb-0 flex-shrink-0" : ""
                ), children: [
                  /* @__PURE__ */ jsxs("div", { className: cn(
                    "flex items-center gap-3",
                    viewMode === "list" ? "flex-col items-center" : ""
                  ), children: [
                    /* @__PURE__ */ jsx("div", { className: cn(
                      "p-3 rounded-xl bg-gradient-to-r",
                      framework.color
                    ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                    viewMode === "list" && /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: framework.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: framework.subtitle })
                    ] })
                  ] }),
                  viewMode === "grid" && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-2", children: [
                    framework.popular && /* @__PURE__ */ jsxs(Badge, { className: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 mr-1" }),
                      "Beliebt"
                    ] }),
                    framework.upcoming && /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-500/20 text-purple-300 border-purple-500/30", children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "h-3 w-3 mr-1" }),
                      "Upcoming"
                    ] }),
                    framework.mandatory && /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 mr-1" }),
                      "Mandatory"
                    ] }),
                    framework.certification && /* @__PURE__ */ jsxs(Badge, { className: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", children: [
                      /* @__PURE__ */ jsx(BadgeCheck, { className: "h-3 w-3 mr-1" }),
                      "Zertifizierung"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: cn(
                  viewMode === "list" ? "flex-1" : ""
                ), children: [
                  viewMode === "grid" && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: framework.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-emerald-400 text-sm mb-3", children: framework.subtitle })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: cn(
                    "text-slate-300 leading-relaxed",
                    viewMode === "grid" ? "mb-4" : "mb-2"
                  ), children: framework.description }),
                  viewMode === "list" && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
                    framework.popular && /* @__PURE__ */ jsxs(Badge, { className: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 mr-1" }),
                      "Beliebt"
                    ] }),
                    framework.upcoming && /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-500/20 text-purple-300 border-purple-500/30", children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "h-3 w-3 mr-1" }),
                      "Upcoming"
                    ] }),
                    framework.mandatory && /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 mr-1" }),
                      "Mandatory"
                    ] }),
                    framework.certification && /* @__PURE__ */ jsxs(Badge, { className: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", children: [
                      /* @__PURE__ */ jsx(BadgeCheck, { className: "h-3 w-3 mr-1" }),
                      "Zertifizierung"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: cn(
                    "grid grid-cols-2 gap-4 mb-4",
                    viewMode === "list" ? "grid-cols-4" : ""
                  ), children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                        /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-slate-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: "Lesezeit" })
                      ] }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: framework.readTime })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 text-slate-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: "Umsetzung" })
                      ] }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: framework.implementationTime })
                    ] }),
                    viewMode === "list" && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                          /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 text-slate-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: "Compliance" })
                        ] }),
                        /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-white", children: [
                          framework.compliance,
                          "%"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                          /* @__PURE__ */ jsx(CategoryIcon, { className: "h-4 w-4 text-slate-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: "Kategorie" })
                        ] }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white capitalize", children: (_a2 = categories.find((c) => c.id === framework.category)) == null ? void 0 : _a2.name })
                      ] })
                    ] })
                  ] }),
                  viewMode === "grid" && /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-400", children: "Schwierigkeit" }),
                      /* @__PURE__ */ jsx(Badge, { className: getDifficultyColor(framework.difficulty), children: framework.difficulty === "beginner" ? "Einsteiger" : framework.difficulty === "intermediate" ? "Fortgeschritten" : "Experte" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-400", children: "Compliance Status" }),
                        /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-white", children: [
                          framework.compliance,
                          "%"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(Progress, { value: framework.compliance, className: "h-2" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-400 mb-2 block", children: "Branchen:" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1", children: [
                      framework.industries.slice(0, viewMode === "list" ? 6 : 3).map((industry) => /* @__PURE__ */ jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-xs bg-slate-700/50 text-slate-300 border-slate-600",
                          children: industry
                        },
                        industry
                      )),
                      framework.industries.length > (viewMode === "list" ? 6 : 3) && /* @__PURE__ */ jsxs(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-xs bg-slate-700/50 text-slate-300 border-slate-600",
                          children: [
                            "+",
                            framework.industries.length - (viewMode === "list" ? 6 : 3)
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      asChild: true,
                      className: cn(
                        "w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white",
                        viewMode === "list" ? "w-auto px-6" : ""
                      ),
                      children: /* @__PURE__ */ jsxs(Link, { to: framework.link, children: [
                        /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 mr-2" }),
                        "Details ansehen",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 ml-2" })
                      ] })
                    }
                  )
                ] })
              ] }) })
            },
            framework.id
          );
        }) }),
        filteredFrameworks.length === 0 && /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "text-center py-16",
            children: [
              /* @__PURE__ */ jsx("div", { className: "p-4 bg-slate-800/50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-slate-400" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Keine Frameworks gefunden" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-4", children: "Versuchen Sie andere Suchbegriffe oder Filter." }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: () => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedDifficulty("all");
                  },
                  variant: "outline",
                  children: "Filter zurücksetzen"
                }
              )
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  ComplianceFrameworks as default
};
