import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, motion, useInView } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { T as Tabs, a as TabsList, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { Car, Eye, FileText, Gauge, Target, Shield, ClipboardCheck, Rocket, FileSearch, Users, Network, BadgeCheck, TrendingUp, GitMerge, Truck, Factory, Wrench, Download, Bookmark, Globe, Play, CheckCircle, CheckCircle2, Share2, Circle, Building2, TestTube2, Cog, ShieldAlert, ChevronDown, Clock, Database, Lock, Search, Workflow, AlertTriangle, Upload, Settings, Star, UserPlus, Cpu, AlertCircle, Award, Calendar, DollarSign, Activity, BarChart3, Monitor, RotateCcw, Zap, Brain, Lightbulb, ChevronRight, Layers, Scale, Briefcase, Building, Server, Code, Package, Cloud, GraduationCap, ExternalLink } from "lucide-react";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react-router-dom";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
import "@radix-ui/react-tabs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const TisaxGuide = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [completedSections, setCompletedSections] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedLevel, setExpandedLevel] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });
  const sections = [
    { id: "overview", title: "Überblick", icon: Eye, readTime: "10 Min" },
    { id: "vda-ism", title: "VDA ISM Standard", icon: FileText, readTime: "15 Min" },
    { id: "assessment-levels", title: "Assessment Level", icon: Gauge, readTime: "20 Min" },
    { id: "control-objectives", title: "Control Objectives", icon: Target, readTime: "35 Min" },
    { id: "protection-needs", title: "Protection Needs", icon: Shield, readTime: "18 Min" },
    { id: "assessment-process", title: "Assessment Prozess", icon: ClipboardCheck, readTime: "25 Min" },
    { id: "automotive-specifics", title: "Automotive Spezifika", icon: Car, readTime: "30 Min" },
    { id: "implementation", title: "Implementierung", icon: Rocket, readTime: "40 Min" },
    { id: "evidence-collection", title: "Evidence Collection", icon: FileSearch, readTime: "22 Min" },
    { id: "participant-types", title: "Teilnehmertypen", icon: Users, readTime: "15 Min" },
    { id: "exchange-portal", title: "Exchange Portal", icon: Network, readTime: "12 Min" },
    { id: "certification", title: "Zertifizierung", icon: BadgeCheck, readTime: "18 Min" },
    { id: "continuous-improvement", title: "Kontinuierliche Verbesserung", icon: TrendingUp, readTime: "15 Min" },
    { id: "integration", title: "Integration Standards", icon: GitMerge, readTime: "20 Min" },
    { id: "supply-chain", title: "Supply Chain Security", icon: Truck, readTime: "25 Min" },
    { id: "industry-practices", title: "Industry Best Practices", icon: Factory, readTime: "22 Min" },
    { id: "tools-automation", title: "Tools & Automation", icon: Wrench, readTime: "18 Min" },
    { id: "resources", title: "Ressourcen", icon: Download, readTime: "8 Min" }
  ];
  const assessmentLevels = [
    {
      level: "AL1",
      title: "Prototype Protection",
      description: "Schutz für Prototypdaten und vertrauliche Informationen mit geringem Schutzbedarf",
      color: "from-green-500 to-emerald-600",
      icon: TestTube2,
      characteristics: [
        "Niedrigste Sicherheitsanforderungen",
        "Basisschutz für Prototypentwicklung",
        "Vertrauliche Informationen mit geringem Impact",
        "Standard IT-Sicherheitsmaßnahmen ausreichend"
      ],
      typicalUseCase: [
        "Frühe Konzeptentwicklung",
        "Marktforschung und Trends",
        "Allgemeine Designstudien",
        "Proof-of-Concept Projekte"
      ],
      controlObjectives: 45,
      implementationEffort: "Niedrig (2-4 Monate)",
      costs: "€15.000 - €30.000"
    },
    {
      level: "AL2",
      title: "Development Protection",
      description: "Schutz für Entwicklungsdaten und sensible Geschäftsinformationen",
      color: "from-yellow-500 to-orange-600",
      icon: Cog,
      characteristics: [
        "Erhöhte Sicherheitsanforderungen",
        "Schutz für Entwicklungsprojekte",
        "Sensible Geschäftsinformationen",
        "Erweiterte Zugangskontrollen erforderlich"
      ],
      typicalUseCase: [
        "Produktentwicklung",
        "Engineering-Daten",
        "Geschäftspartnerschaften",
        "Lieferantenbeziehungen"
      ],
      controlObjectives: 67,
      implementationEffort: "Mittel (4-8 Monate)",
      costs: "€30.000 - €75.000"
    },
    {
      level: "AL3",
      title: "High Protection",
      description: "Höchster Schutz für kritische und hochsensible Informationen",
      color: "from-red-500 to-pink-600",
      icon: ShieldAlert,
      characteristics: [
        "Höchste Sicherheitsanforderungen",
        "Kritische Geschäftsinformationen",
        "Strenge Zugangskontrollen",
        "Umfassende Monitoring-Anforderungen"
      ],
      typicalUseCase: [
        "Geheime Entwicklungsprojekte",
        "M&A-Transaktionen",
        "Strategische Partnerschaften",
        "Top-Secret Fahrzeugprojekte"
      ],
      controlObjectives: 103,
      implementationEffort: "Hoch (8-18 Monate)",
      costs: "€75.000 - €200.000"
    }
  ];
  const controlObjectiveGroups = [
    {
      group: "Information Security Management",
      code: "ISM",
      icon: Building2,
      color: "from-blue-500 to-indigo-600",
      description: "Aufbau und Betrieb eines Informationssicherheits-Managementsystems",
      objectives: [
        {
          id: "ISM1",
          title: "Information Security Policy",
          description: "Eine Informationssicherheitspolitik soll definiert, dokumentiert, implementiert und kommuniziert werden",
          requirements: [
            "Schriftliche Informationssicherheitspolitik",
            "Management-Genehmigung und -Commitment",
            "Regelmäßige Überprüfung und Aktualisierung",
            "Kommunikation an alle Mitarbeiter",
            "Integration in Geschäftsprozesse"
          ],
          evidence: [
            "Informationssicherheitspolitik-Dokument",
            "Management-Approval-Dokumente",
            "Kommunikationsnachweis",
            "Schulungsunterlagen",
            "Review-Protokolle"
          ],
          automotiveSpecific: [
            "Automotive-spezifische Risiken berücksichtigen",
            "Lieferkettenintegration",
            "OEM-spezifische Anforderungen",
            "Fahrzeugdatenklassifizierung"
          ]
        },
        {
          id: "ISM2",
          title: "Organization of Information Security",
          description: "Rollen und Verantwortlichkeiten für Informationssicherheit definieren",
          requirements: [
            "CISO oder äquivalente Rolle definiert",
            "Informationssicherheitsorganisation etabliert",
            "Verantwortlichkeiten klar zugewiesen",
            "Reporting-Strukturen definiert",
            "Kontakte zu Sicherheitsbehörden"
          ],
          evidence: [
            "Organisationsstruktur",
            "Rollenbeschreibungen",
            "RACI-Matrix",
            "Kontaktlisten",
            "Eskalationsverfahren"
          ],
          automotiveSpecific: [
            "Automotive CISO Netzwerk Teilnahme",
            "OEM Security Officer Kontakte",
            "VDA Working Groups Mitgliedschaft",
            "Industry threat intelligence sharing"
          ]
        }
      ]
    },
    {
      group: "Human Resource Security",
      code: "HRS",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      description: "Sicherstellung vertrauenswürdiger Mitarbeiter und sicherer Arbeitsumgebung",
      objectives: [
        {
          id: "HRS1",
          title: "Prior to Employment",
          description: "Sicherheitsüberprüfungen vor der Beschäftigung durchführen",
          requirements: [
            "Background-Checks je nach Position",
            "Vertragsklauseln zur Informationssicherheit",
            "Vertraulichkeitsvereinbarungen",
            "Sicherheitsclearance-Verfahren",
            "Referenzprüfungen"
          ],
          evidence: [
            "Background-Check-Verfahren",
            "Arbeitsverträge mit Sicherheitsklauseln",
            "NDAs und Vertraulichkeitsvereinbarungen",
            "Clearance-Dokumentation",
            "Referenz-Validierungen"
          ],
          automotiveSpecific: [
            "Automotive industry background checks",
            "OEM-spezifische Clearance-Anforderungen",
            "Competitor employment restrictions",
            "IP protection agreements"
          ]
        }
      ]
    },
    {
      group: "Asset Management",
      code: "ASM",
      icon: Database,
      color: "from-purple-500 to-pink-600",
      description: "Identifikation, Klassifizierung und Schutz von Informationswerten",
      objectives: [
        {
          id: "ASM1",
          title: "Asset Responsibility",
          description: "Verantwortlichkeiten für Assets definieren und Asset-Inventar pflegen",
          requirements: [
            "Asset-Inventar erstellen und pflegen",
            "Asset-Owner definieren",
            "Klassifizierungsschema implementieren",
            "Lifecycle-Management",
            "Disposal-Verfahren"
          ],
          evidence: [
            "Asset-Register",
            "Klassifizierungsrichtlinien",
            "Asset-Owner-Listen",
            "Lifecycle-Dokumentation",
            "Disposal-Nachweise"
          ],
          automotiveSpecific: [
            "Vehicle project data classification",
            "CAD/CAM file management",
            "Simulation data protection",
            "Test data categorization"
          ]
        }
      ]
    },
    {
      group: "Access Control",
      code: "ACC",
      icon: Lock,
      color: "from-orange-500 to-red-600",
      description: "Kontrolle des Zugangs zu Informationen und IT-Systemen",
      objectives: [
        {
          id: "ACC1",
          title: "Access Control Policy",
          description: "Zugangsrichtlinien definieren und implementieren",
          requirements: [
            "Zugangsrichtlinien dokumentiert",
            "Role-based Access Control (RBAC)",
            "Least Privilege Prinzip",
            "Regular Access Reviews",
            "Privileged Account Management"
          ],
          evidence: [
            "Access Control Policy",
            "RBAC-Matrix",
            "Access Review Reports",
            "PAM-System-Konfiguration",
            "Audit-Logs"
          ],
          automotiveSpecific: [
            "Project-based access controls",
            "OEM data access restrictions",
            "Supplier access management",
            "Vehicle testing data access"
          ]
        }
      ]
    }
  ];
  const participantTypes = [
    {
      type: "Information Provider",
      description: "Organisationen, die sensible Informationen zur Verfügung stellen",
      icon: Upload,
      color: "from-blue-500 to-indigo-600",
      responsibilities: [
        "Definition der Schutzbedarfe für bereitgestellte Informationen",
        "Festlegung der erforderlichen Assessment Level",
        "Monitoring der Information Recipients",
        "Incident Response bei Sicherheitsverletzungen",
        "Regelmäßige Überprüfung der Schutzmaßnahmen"
      ],
      examples: [
        "OEMs (BMW, Mercedes, Audi, VW)",
        "Tier-1 Suppliers mit kritischen Daten",
        "Engineering Service Provider",
        "Research & Development Centers"
      ],
      tisaxRequirements: [
        "Mindestens eigenes TISAX Assessment durchgeführt",
        "Berechtigung zur Definition von Protection Needs",
        "Zugang zum TISAX Exchange Portal",
        "Incident Reporting Capabilities"
      ]
    },
    {
      type: "Information Recipient",
      description: "Organisationen, die sensible Informationen erhalten und verarbeiten",
      icon: Download,
      color: "from-emerald-500 to-teal-600",
      responsibilities: [
        "Nachweis angemessener Sicherheitsmaßnahmen",
        "Durchführung TISAX Assessment entsprechend Anforderungen",
        "Implementierung erforderlicher Schutzmaßnahmen",
        "Incident Reporting bei Sicherheitsvorfällen",
        "Compliance mit Information Provider Anforderungen"
      ],
      examples: [
        "Tier-1, Tier-2, Tier-3 Suppliers",
        "Engineering Dienstleister",
        "Software Development Companies",
        "Testing und Validation Services"
      ],
      tisaxRequirements: [
        "TISAX Assessment entsprechend gefordertem Level",
        "Nachweis der Implementierung",
        "Kontinuierliche Überwachung",
        "Incident Response Fähigkeiten"
      ]
    },
    {
      type: "Service Provider",
      description: "Organisationen, die IT-Services oder Business-Services anbieten",
      icon: Settings,
      color: "from-purple-500 to-pink-600",
      responsibilities: [
        "Service-spezifische Sicherheitsmaßnahmen",
        "Multi-Client Umgebungen sicher betreiben",
        "SLA-konforme Sicherheitsstandards",
        "Regular Security Assessments",
        "Transparente Sicherheitsdokumentation"
      ],
      examples: [
        "Cloud Service Provider",
        "Managed IT Services",
        "Software-as-a-Service Anbieter",
        "Hosting und Colocation Provider"
      ],
      tisaxRequirements: [
        "Service-spezifische Assessment Scope",
        "Multi-tenancy Sicherheitsnachweis",
        "SLA Security Requirements",
        "Incident Management Prozesse"
      ]
    }
  ];
  const implementationFramework = [
    {
      phase: "Phase 1: Readiness Assessment",
      duration: "4-6 Wochen",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      objectives: [
        "Bestimmung des erforderlichen Assessment Levels",
        "Gap-Analyse gegen VDA ISM Standard",
        "Ressourcenplanung und Budgetierung",
        "Stakeholder Alignment",
        "Projektteam Aufbau"
      ],
      deliverables: [
        "TISAX Readiness Report",
        "Gap Analysis Document",
        "Implementation Roadmap",
        "Resource Allocation Plan",
        "Project Charter"
      ],
      automotiveConsiderations: [
        "OEM-spezifische Anforderungen identifizieren",
        "Automotive supply chain Positionen bewerten",
        "Fahrzeugprojekt-Datenkategorien definieren",
        "Branchenspezifische Threats analysieren"
      ]
    },
    {
      phase: "Phase 2: Policy & Governance",
      duration: "6-8 Wochen",
      icon: FileText,
      color: "from-emerald-500 to-teal-600",
      objectives: [
        "Information Security Policy entwickeln",
        "Governance-Strukturen etablieren",
        "Rollen und Verantwortlichkeiten definieren",
        "Risk Management Framework",
        "Compliance Framework aufbauen"
      ],
      deliverables: [
        "Information Security Policy",
        "Governance Charter",
        "RACI Matrix",
        "Risk Management Procedures",
        "Compliance Monitoring Framework"
      ],
      automotiveConsiderations: [
        "Automotive-spezifische Policy-Elemente",
        "OEM Governance Requirements",
        "Supply Chain Risk Management",
        "Automotive Incident Response"
      ]
    },
    {
      phase: "Phase 3: Technical Implementation",
      duration: "12-20 Wochen",
      icon: Wrench,
      color: "from-purple-500 to-pink-600",
      objectives: [
        "Technical Controls implementieren",
        "Access Control Systeme aufbauen",
        "Monitoring und Logging etablieren",
        "Encryption und Data Protection",
        "Network Security Controls"
      ],
      deliverables: [
        "Implemented Technical Controls",
        "Access Control System",
        "SIEM/Monitoring Solution",
        "Encryption Infrastructure",
        "Network Security Architecture"
      ],
      automotiveConsiderations: [
        "CAD/CAM System Security",
        "Vehicle Testing Environment Protection",
        "OEM Network Integration",
        "Automotive-specific Encryption"
      ]
    },
    {
      phase: "Phase 4: Process Integration",
      duration: "8-12 Wochen",
      icon: Workflow,
      color: "from-orange-500 to-red-600",
      objectives: [
        "Business Process Integration",
        "Training und Awareness",
        "Incident Response Procedures",
        "Business Continuity Planning",
        "Supplier Integration"
      ],
      deliverables: [
        "Integrated Security Processes",
        "Training Materials",
        "Incident Response Plan",
        "Business Continuity Plan",
        "Supplier Security Requirements"
      ],
      automotiveConsiderations: [
        "Automotive Development Process Integration",
        "OEM-specific Training Requirements",
        "Automotive Supply Chain Incidents",
        "Vehicle Program Continuity"
      ]
    },
    {
      phase: "Phase 5: Assessment Preparation",
      duration: "4-6 Wochen",
      icon: ClipboardCheck,
      color: "from-cyan-500 to-blue-600",
      objectives: [
        "Assessment Scope definieren",
        "Evidence Collection",
        "Internal Pre-Assessment",
        "Assessor Selection",
        "Assessment Scheduling"
      ],
      deliverables: [
        "Assessment Scope Document",
        "Evidence Portfolio",
        "Pre-Assessment Report",
        "Assessor Contract",
        "Assessment Schedule"
      ],
      automotiveConsiderations: [
        "Automotive-qualified Assessors",
        "OEM Recognition Requirements",
        "Industry-specific Evidence",
        "Automotive Assessment Scope"
      ]
    },
    {
      phase: "Phase 6: TISAX Assessment",
      duration: "2-4 Wochen",
      icon: BadgeCheck,
      color: "from-yellow-500 to-orange-600",
      objectives: [
        "Onsite Assessment durchführen",
        "Evidence Review",
        "Control Testing",
        "Gap Remediation",
        "Assessment Finalization"
      ],
      deliverables: [
        "Assessment Report",
        "TISAX Label",
        "Gap Remediation Plan",
        "Certification Documentation",
        "Exchange Portal Registration"
      ],
      automotiveConsiderations: [
        "Automotive-specific Assessment Criteria",
        "OEM Validation Processes",
        "Industry Benchmark Comparison",
        "Automotive Label Validity"
      ]
    }
  ];
  const handleSectionComplete = (sectionId) => {
    setCompletedSections(
      (prev) => prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };
  const toggleLevelExpansion = (level) => {
    setExpandedLevel((prev) => ({
      ...prev,
      [level]: !prev[level]
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
  const CounterAnimation = ({ value, suffix = "", prefix = "", duration = 2e3 }) => {
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
      prefix,
      count,
      suffix
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30", children: [
            /* @__PURE__ */ jsx(Car, { className: "h-3 w-3 mr-1" }),
            "TISAX Guide"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
            "Abschnitt ",
            sections.findIndex((s) => s.id === activeSection) + 1,
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
                    /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl", children: /* @__PURE__ */ jsx(Car, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white", children: "TISAX" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-400", children: "Trusted Information Security Assessment eXchange" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300 mb-8 leading-relaxed", children: "Der Standard für Informationssicherheit in der Automobilindustrie. Basierend auf VDA ISM und ISO 27001 - entwickelt für die spezifischen Anforderungen der automotive supply chain." }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-8", children: [
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-blue-500/10 border-blue-500/20 text-blue-300", children: [
                      /* @__PURE__ */ jsx(Factory, { className: "h-4 w-4 mr-2" }),
                      "VDA Standard"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", children: [
                      /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 mr-2" }),
                      "Global anerkannt"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-purple-500/10 border-purple-500/20 text-purple-300", children: [
                      /* @__PURE__ */ jsx(Truck, { className: "h-4 w-4 mr-2" }),
                      "Supply Chain fokussiert"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => setActiveSection("assessment-levels"),
                        className: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
                        children: [
                          /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 mr-2" }),
                          "Guide starten"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "border-slate-600 text-slate-300 hover:bg-slate-700", children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                      "VDA ISM Framework"
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
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 3 }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Assessment Level" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-emerald-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 103 }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Control Objectives" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-purple-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 2500, suffix: "+" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Teilnehmer" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-orange-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 3 }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Jahre Gültigkeit" })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-4", children: "Was Sie in diesem Guide lernen" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                      "VDA ISM Standard und Assessment Level",
                      "Automotive-spezifische Control Objectives",
                      "TISAX Assessment Prozess im Detail",
                      "Supply Chain Security Requirements",
                      "Exchange Portal und Teilnehmertypen",
                      "Implementation Roadmap für automotive industry"
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
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 py-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-6 lg:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-32 space-y-6", children: [
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Inhaltsverzeichnis" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: sections.map((section, index) => {
            const IconComponent = section.icon;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setActiveSection(section.id),
                className: cn(
                  "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                  activeSection === section.id ? "bg-blue-500/20 border border-blue-500/50 text-blue-300" : "border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300"
                ),
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: section.title }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs opacity-70", children: section.readTime })
                    ] })
                  ] }),
                  completedSections.includes(section.id) && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" })
                ]
              },
              section.id
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Schnellaktionen" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
              "VDA ISM Catalogue"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
              "TISAX Handbook"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 mr-2" }),
              "Guide teilen"
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsx("div", { ref: contentRef, children: /* @__PURE__ */ jsxs(Tabs, { value: activeSection, onValueChange: setActiveSection, children: [
        /* @__PURE__ */ jsx(TabsList, { className: "hidden" }),
        /* @__PURE__ */ jsx(TabsContent, { value: "overview", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "TISAX Überblick" }),
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
                /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300 leading-relaxed mb-6", children: "TISAX (Trusted Information Security Assessment eXchange) ist der führende Standard für Informationssicherheit in der Automobilindustrie. Entwickelt vom VDA (Verband der Automobilindustrie) zur Harmonisierung von Sicherheitsanforderungen in der automotive supply chain." }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-blue-300 mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Target, { className: "h-5 w-5" }),
                      "Hauptziele"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Harmonisierung der Sicherheitsanforderungen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Reduktion von Assessment-Redundanzen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Vertrauen in der automotive supply chain" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Schutz kritischer Fahrzeugdaten" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" }),
                      "Teilnehmer"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "OEMs (BMW, Mercedes, Audi, VW, etc.)" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Tier-1, Tier-2, Tier-3 Suppliers" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Engineering Service Provider" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "IT Service Provider" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "TISAX vs. andere Standards" }),
                  /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-600", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Aspekt" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-blue-300 text-center", children: "TISAX" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-emerald-300 text-center", children: "ISO 27001" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-purple-300 text-center", children: "SOC 2" })
                    ] }) }),
                    /* @__PURE__ */ jsxs("tbody", { children: [
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: "Branchenfokus" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Automotive" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Universal" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "SaaS/Cloud" })
                      ] }),
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: "Assessment Level" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "3 Level (AL1-AL3)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Binary" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Type I/II" })
                      ] }),
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: "Gültigkeit" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "3 Jahre" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "3 Jahre" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "1 Jahr" })
                      ] }),
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: "Exchange Portal" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "✓" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "✗" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "✗" })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "assessment-levels", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Assessment Level" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("assessment-levels"),
                    variant: completedSections.includes("assessment-levels") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("assessment-levels") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-300 mb-3", children: "TISAX Assessment Level Konzept" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "TISAX verwendet drei Assessment Level (AL1, AL2, AL3), die unterschiedliche Schutzbedarfe und Sicherheitsanforderungen abbilden. Jedes Level baut auf dem vorherigen auf und erhöht die Anforderungen entsprechend dem Schutzbedarf der Daten." }),
                /* @__PURE__ */ jsx("div", { className: "relative h-48 flex items-end justify-center", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 400 150", children: [
                  /* @__PURE__ */ jsx("path", { d: "M200 30 L300 130 L100 130 Z", fill: "url(#alPyramidGradient)", stroke: "rgba(255,255,255,0.2)", strokeWidth: "2" }),
                  /* @__PURE__ */ jsx("line", { x1: "133", y1: "90", x2: "267", y2: "90", stroke: "rgba(255,255,255,0.3)", strokeWidth: "1" }),
                  /* @__PURE__ */ jsx("line", { x1: "166", y1: "110", x2: "234", y2: "110", stroke: "rgba(255,255,255,0.3)", strokeWidth: "1" }),
                  /* @__PURE__ */ jsx("text", { x: "200", y: "70", textAnchor: "middle", fill: "#ef4444", className: "text-sm font-semibold", children: "AL3" }),
                  /* @__PURE__ */ jsx("text", { x: "200", y: "105", textAnchor: "middle", fill: "#f97316", className: "text-sm font-semibold", children: "AL2" }),
                  /* @__PURE__ */ jsx("text", { x: "200", y: "125", textAnchor: "middle", fill: "#22c55e", className: "text-sm font-semibold", children: "AL1" }),
                  /* @__PURE__ */ jsx("text", { x: "320", y: "70", fill: "#ef4444", className: "text-xs", children: "103 Controls" }),
                  /* @__PURE__ */ jsx("text", { x: "320", y: "105", fill: "#f97316", className: "text-xs", children: "67 Controls" }),
                  /* @__PURE__ */ jsx("text", { x: "320", y: "125", fill: "#22c55e", className: "text-xs", children: "45 Controls" }),
                  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "alPyramidGradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#ef4444", stopOpacity: "0.6" }),
                    /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#f97316", stopOpacity: "0.4" }),
                    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#22c55e", stopOpacity: "0.2" })
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: assessmentLevels.map((level, index) => {
                const IconComponent = level.icon;
                const isExpanded = expandedLevel[level.level];
                return /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: index * 0.1 },
                    className: "border border-slate-700 rounded-xl overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          onClick: () => toggleLevelExpansion(level.level),
                          className: "w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between",
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                              /* @__PURE__ */ jsx("div", { className: cn(
                                "p-3 rounded-xl bg-gradient-to-r",
                                level.color
                              ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                              /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: level.level }),
                                  /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                                    level.controlObjectives,
                                    " Controls"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsx("h4", { className: "text-md font-semibold text-blue-300", children: level.title }),
                                /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: level.description })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                              /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-500/20 text-emerald-300 text-xs", children: level.costs }),
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
                          initial: { height: 0 },
                          animate: { height: "auto" },
                          exit: { height: 0 },
                          transition: { duration: 0.3 },
                          className: "border-t border-slate-700 bg-slate-900/50",
                          children: /* @__PURE__ */ jsx("div", { className: "p-6 space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-white mb-3 flex items-center gap-2", children: [
                                /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400" }),
                                "Charakteristika"
                              ] }),
                              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: level.characteristics.map((char, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                                /* @__PURE__ */ jsx(Circle, { className: "h-3 w-3 text-slate-400 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: char })
                              ] }, idx)) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-white mb-3 flex items-center gap-2", children: [
                                /* @__PURE__ */ jsx(Car, { className: "h-4 w-4 text-emerald-400" }),
                                "Typische Use Cases"
                              ] }),
                              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: level.typicalUseCase.map((useCase, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                                /* @__PURE__ */ jsx(Circle, { className: "h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: useCase })
                              ] }, idx)) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-white mb-3 flex items-center gap-2", children: [
                                /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-purple-400" }),
                                "Implementation"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded p-2", children: [
                                  /* @__PURE__ */ jsx("div", { className: "text-white font-medium", children: "Aufwand:" }),
                                  /* @__PURE__ */ jsx("div", { className: "text-slate-300", children: level.implementationEffort })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded p-2", children: [
                                  /* @__PURE__ */ jsx("div", { className: "text-white font-medium", children: "Kosten:" }),
                                  /* @__PURE__ */ jsx("div", { className: "text-slate-300", children: level.costs })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-white mb-3 flex items-center gap-2", children: [
                                /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 text-orange-400" }),
                                "Controls"
                              ] }),
                              /* @__PURE__ */ jsx("div", { className: "bg-slate-800/50 rounded p-3", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-orange-400", children: level.controlObjectives }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Control Objectives" })
                              ] }) })
                            ] })
                          ] }) })
                        }
                      )
                    ]
                  },
                  level.level
                );
              }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "control-objectives", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Control Objectives - VDA ISM Framework" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("control-objectives"),
                    variant: completedSections.includes("control-objectives") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("control-objectives") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6", children: "VDA ISM Control Framework Structure" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Basiert auf bewährten Standards" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                        "ISO/IEC 27001:2013 als Grundlage",
                        "Automotive-spezifische Erweiterungen",
                        "VDA-spezifische Anforderungen",
                        "Supply Chain Security Focus",
                        "OEM-Supplier Relationship Management"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: item })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Control-Gruppen Übersicht" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        { name: "Information Security Management", count: "12 Controls" },
                        { name: "Human Resource Security", count: "8 Controls" },
                        { name: "Asset Management", count: "9 Controls" },
                        { name: "Access Control", count: "18 Controls" },
                        { name: "Cryptography", count: "2 Controls" },
                        { name: "Physical Security", count: "15 Controls" },
                        { name: "Operations Security", count: "21 Controls" },
                        { name: "Communications Security", count: "7 Controls" },
                        { name: "Acquisition & Development", count: "11 Controls" }
                      ].map((group) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center bg-slate-900/50 rounded p-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: group.name }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: group.count })
                      ] }, group.name)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: controlObjectiveGroups.map((group, index) => {
                  const IconComponent = group.icon;
                  const isExpanded = expandedLevel[group.code];
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
                            onClick: () => toggleLevelExpansion(group.code),
                            className: "w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                                /* @__PURE__ */ jsx("div", { className: cn(
                                  "p-3 rounded-xl bg-gradient-to-r",
                                  group.color
                                ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: group.group }),
                                  /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: group.description })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                                /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                                  group.objectives.length,
                                  " Objectives"
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
                            initial: { height: 0 },
                            animate: { height: "auto" },
                            exit: { height: 0 },
                            transition: { duration: 0.3 },
                            className: "border-t border-slate-700 bg-slate-900/50",
                            children: /* @__PURE__ */ jsx("div", { className: "p-6 space-y-6", children: group.objectives.map((objective) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                                /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: objective.id }),
                                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: objective.title })
                              ] }),
                              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6 text-sm italic", children: objective.description }),
                              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-blue-300 mb-3", children: "Requirements:" }),
                                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: objective.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: req })
                                  ] }, idx)) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-emerald-300 mb-3", children: "Evidence:" }),
                                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: objective.evidence.map((evidence, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                                    /* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: evidence })
                                  ] }, idx)) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-orange-300 mb-3", children: "Automotive Specific:" }),
                                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: objective.automotiveSpecific.map((specific, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                                    /* @__PURE__ */ jsx(Car, { className: "h-3 w-3 text-orange-400 mt-1 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: specific })
                                  ] }, idx)) })
                                ] })
                              ] })
                            ] }, objective.id)) })
                          }
                        )
                      ]
                    },
                    group.code
                  );
                }) })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "implementation", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "TISAX Implementation Roadmap" }),
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
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-purple-300 mb-4", children: "Automotive-Specific Implementation Approach" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "TISAX Implementation erfordert ein tiefes Verständnis der automotive supply chain, OEM-spezifischer Anforderungen und der besonderen Herausforderungen der Fahrzeugentwicklung." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-center", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "6-18 Monate" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Typische Implementierungsdauer" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-pink-400", children: "6 Phasen" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Strukturierter Ansatz" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-indigo-400", children: "€15k-200k" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Investment je nach AL" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: implementationFramework.map((phase, index) => {
                  const IconComponent = phase.icon;
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
                          phase.color
                        ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: phase.phase }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: phase.duration })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Objectives:" }),
                              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.objectives.map((objective, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                                /* @__PURE__ */ jsx(
                                  "input",
                                  {
                                    type: "checkbox",
                                    id: `objective-${index}-${idx}`,
                                    checked: checkedItems[`objective-${index}-${idx}`] || false,
                                    onChange: () => handleItemCheck(`objective-${index}-${idx}`),
                                    className: "mt-1 text-blue-500"
                                  }
                                ),
                                /* @__PURE__ */ jsx(
                                  "label",
                                  {
                                    htmlFor: `objective-${index}-${idx}`,
                                    className: cn(
                                      "text-sm text-slate-300 cursor-pointer",
                                      checkedItems[`objective-${index}-${idx}`] && "line-through opacity-60"
                                    ),
                                    children: objective
                                  }
                                )
                              ] }, idx)) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Deliverables:" }),
                              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.deliverables.map((deliverable) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: deliverable }, deliverable)) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Automotive Considerations:" }),
                              /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.automotiveConsiderations.map((consideration, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-center gap-2", children: [
                                /* @__PURE__ */ jsx(Car, { className: "h-3 w-3 text-blue-400" }),
                                consideration
                              ] }, idx)) })
                            ] })
                          ] })
                        ] })
                      ] })
                    },
                    phase.phase
                  );
                }) })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "vda-ism", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "VDA ISM Standard" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("vda-ism"),
                    variant: completedSections.includes("vda-ism") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("vda-ism") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-300 mb-4", children: "Was ist VDA ISM?" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Der VDA Information Security Management (ISM) Standard ist das Fundament von TISAX. Entwickelt vom Verband der Automobilindustrie (VDA) in Zusammenarbeit mit der ENX Association, definiert er spezifische Sicherheitsanforderungen für die Automobilindustrie." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Basiert auf" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                        /* @__PURE__ */ jsx("li", { children: "• ISO/IEC 27001:2013" }),
                        /* @__PURE__ */ jsx("li", { children: "• ISO/IEC 27002:2013" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automotive-spezifische Anforderungen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Erweitert um" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Supply Chain Requirements" }),
                        /* @__PURE__ */ jsx("li", { children: "• OEM-Supplier Relationships" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automotive Data Classification" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-500/20 rounded-lg", children: /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-white", children: "VDA ISM Catalogue" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-4", children: "Der vollständige Katalog aller Control Objectives mit detaillierten Anforderungen und Implementierungshinweisen." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Version:" }),
                        /* @__PURE__ */ jsx("span", { className: "text-white", children: "5.0.1" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Seiten:" }),
                        /* @__PURE__ */ jsx("span", { className: "text-white", children: "200+" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Sprachen:" }),
                        /* @__PURE__ */ jsx("span", { className: "text-white", children: "DE, EN" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-2 bg-emerald-500/20 rounded-lg", children: /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-emerald-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-white", children: "Governance Model" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-4", children: "Strukturierte Governance mit klaren Rollen und Verantwortlichkeiten für alle Stakeholder in der automotive supply chain." }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: "VDA Working Group ISM" }),
                      /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: "ENX Association" }),
                      /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: "OEM Security Officers" }),
                      /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: "Supplier Representatives" })
                    ] }) })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-500/20 rounded-lg", children: /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-purple-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-white", children: "Assessment Scope" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-4", children: "Flexible Scope-Definition je nach Geschäftsanforderungen und Datenklassifizierung der automotive partner." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-xs text-slate-400", children: [
                      /* @__PURE__ */ jsx("div", { children: "• Information Processing" }),
                      /* @__PURE__ */ jsx("div", { children: "• Physical Locations" }),
                      /* @__PURE__ */ jsx("div", { children: "• Service Delivery" }),
                      /* @__PURE__ */ jsx("div", { children: "• Third-Party Management" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "VDA ISM Control Categories" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
                    { code: "A.5", name: "Information Security Policies", controls: 2, color: "blue" },
                    { code: "A.6", name: "Organization of Information Security", controls: 7, color: "emerald" },
                    { code: "A.7", name: "Human Resource Security", controls: 6, color: "purple" },
                    { code: "A.8", name: "Asset Management", controls: 10, color: "orange" },
                    { code: "A.9", name: "Access Control", controls: 14, color: "red" },
                    { code: "A.10", name: "Cryptography", controls: 2, color: "cyan" },
                    { code: "A.11", name: "Physical and Environmental Security", controls: 15, color: "yellow" },
                    { code: "A.12", name: "Operations Security", controls: 21, color: "green" },
                    { code: "A.13", name: "Communications Security", controls: 7, color: "pink" },
                    { code: "A.14", name: "System Acquisition, Development, Maintenance", controls: 13, color: "indigo" },
                    { code: "A.15", name: "Supplier Relationships", controls: 2, color: "teal" },
                    { code: "A.16", name: "Information Security Incident Management", controls: 7, color: "rose" },
                    { code: "A.17", name: "Business Continuity Management", controls: 4, color: "violet" },
                    { code: "A.18", name: "Compliance", controls: 3, color: "amber" }
                  ].map((category) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsx(Badge, { className: `bg-${category.color}-500/20 text-${category.color}-300 text-xs`, children: category.code }),
                      /* @__PURE__ */ jsxs("span", { className: "text-xs text-slate-400", children: [
                        category.controls,
                        " Controls"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-white", children: category.name })
                  ] }, category.code)) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "protection-needs", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Protection Needs" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("protection-needs"),
                    variant: completedSections.includes("protection-needs") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("protection-needs") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-shield-500/10 to-lock-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-300 mb-4", children: "Datenklassifizierung in der Automotive Industry" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Protection Needs definieren den erforderlichen Schutzbedarf für verschiedene Kategorien von automotive data. Diese Klassifizierung bestimmt das notwendige Assessment Level und die Sicherheitsmaßnahmen." })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: [
                  {
                    level: "High Protection Need",
                    description: "Informationen mit höchstem Schutzbedarf (AL3)",
                    icon: ShieldAlert,
                    color: "from-red-500 to-pink-600",
                    examples: [
                      "Geheime Fahrzeugprojekte und Konzepte",
                      "M&A-bezogene Informationen",
                      "Strategische Partnerschaften",
                      "Unreleased product specifications",
                      "Kritische Sicherheits- und Testdaten",
                      "Financial and business-critical data"
                    ],
                    requirements: [
                      "TISAX AL3 Assessment mandatory",
                      "Enhanced physical security controls",
                      "Strict need-to-know access",
                      "Comprehensive logging and monitoring",
                      "Regular security reviews",
                      "Incident response capabilities"
                    ],
                    businessImpact: [
                      "Severe competitive disadvantage",
                      "Significant financial losses",
                      "Regulatory compliance issues",
                      "Brand reputation damage",
                      "Legal consequences"
                    ]
                  },
                  {
                    level: "Normal Protection Need",
                    description: "Informationen mit normalem Schutzbedarf (AL2)",
                    icon: Shield,
                    color: "from-yellow-500 to-orange-600",
                    examples: [
                      "Produktentwicklungsdaten",
                      "Engineering specifications",
                      "Supplier negotiations",
                      "Technical documentation",
                      "Quality management data",
                      "Standard business correspondence"
                    ],
                    requirements: [
                      "TISAX AL2 Assessment required",
                      "Standard access controls",
                      "Regular access reviews",
                      "Basic monitoring and logging",
                      "Information handling procedures",
                      "Staff security awareness"
                    ],
                    businessImpact: [
                      "Moderate competitive impact",
                      "Financial implications",
                      "Project delays possible",
                      "Customer relationship effects"
                    ]
                  },
                  {
                    level: "Low Protection Need",
                    description: "Informationen mit geringem Schutzbedarf (AL1)",
                    icon: Eye,
                    color: "from-green-500 to-emerald-600",
                    examples: [
                      "Öffentliche Informationen",
                      "Marketing materials",
                      "Published research",
                      "General company information",
                      "Standard procedures",
                      "Training materials"
                    ],
                    requirements: [
                      "TISAX AL1 Assessment sufficient",
                      "Basic security measures",
                      "Standard IT policies",
                      "Employee guidelines",
                      "Incident reporting"
                    ],
                    businessImpact: [
                      "Limited business impact",
                      "Minimal financial risk",
                      "Low competitive relevance"
                    ]
                  }
                ].map((protectionLevel, index) => {
                  const IconComponent = protectionLevel.icon;
                  return /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.5, delay: index * 0.1 },
                      className: "bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden",
                      children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                          /* @__PURE__ */ jsx("div", { className: cn(
                            "p-3 rounded-xl bg-gradient-to-r",
                            protectionLevel.color
                          ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: protectionLevel.level }),
                            /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: protectionLevel.description })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-blue-300 mb-3", children: "Typische Beispiele:" }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: protectionLevel.examples.map((example, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(Circle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: example })
                            ] }, idx)) })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-emerald-300 mb-3", children: "Security Requirements:" }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: protectionLevel.requirements.map((requirement, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: requirement })
                            ] }, idx)) })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-orange-300 mb-3", children: "Business Impact:" }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: protectionLevel.businessImpact.map((impact, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-orange-400 mt-1 flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: impact })
                            ] }, idx)) })
                          ] })
                        ] })
                      ] })
                    },
                    protectionLevel.level
                  );
                }) }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Automotive Data Classification Matrix" }),
                  /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-600", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Data Category" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-blue-300 text-center", children: "Protection Level" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-emerald-300 text-center", children: "TISAX AL" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-purple-300 text-center", children: "Retention" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-orange-300 text-center", children: "Access Control" })
                    ] }) }),
                    /* @__PURE__ */ jsx("tbody", { children: [
                      { category: "Vehicle Concepts", protection: "High", al: "AL3", retention: "10+ years", access: "Need-to-know" },
                      { category: "CAD/CAM Data", protection: "Normal/High", al: "AL2/AL3", retention: "7-10 years", access: "Project-based" },
                      { category: "Test Results", protection: "Normal", al: "AL2", retention: "5-7 years", access: "Role-based" },
                      { category: "Supplier Data", protection: "Normal", al: "AL2", retention: "3-5 years", access: "Department" },
                      { category: "Marketing Materials", protection: "Low", al: "AL1", retention: "1-3 years", access: "General" },
                      { category: "Financial Data", protection: "High", al: "AL3", retention: "10+ years", access: "Restricted" }
                    ].map((row, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: row.category }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: cn(
                        "text-xs",
                        row.protection === "High" ? "bg-red-500/20 text-red-300" : row.protection === "Normal" ? "bg-yellow-500/20 text-yellow-300" : row.protection === "Normal/High" ? "bg-orange-500/20 text-orange-300" : "bg-green-500/20 text-green-300"
                      ), children: row.protection }) }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: row.al }) }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-slate-300 text-sm", children: row.retention }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-slate-300 text-sm", children: row.access })
                    ] }, index)) })
                  ] }) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "assessment-process", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "TISAX Assessment Prozess" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("assessment-process"),
                    variant: completedSections.includes("assessment-process") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("assessment-process") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-purple-300 mb-4", children: "Der strukturierte Weg zur TISAX Zertifizierung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Der TISAX Assessment Prozess folgt einem standardisierten Ablauf, der sicherstellt, dass alle automotive-spezifischen Anforderungen erfüllt und nachgewiesen werden. Der Prozess ist darauf ausgelegt, transparent, effizient und branchenweit vergleichbar zu sein." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-4 text-center", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(ClipboardCheck, { className: "h-8 w-8 text-purple-400 mx-auto mb-2" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "Preparation" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "2-6 Monate" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(Search, { className: "h-8 w-8 text-blue-400 mx-auto mb-2" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "Assessment" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "1-2 Wochen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-8 w-8 text-emerald-400 mx-auto mb-2" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "Report" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "2-4 Wochen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(BadgeCheck, { className: "h-8 w-8 text-orange-400 mx-auto mb-2" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "Label" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "3 Jahre gültig" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                  {
                    phase: "Phase 1: Scope Definition",
                    icon: Target,
                    color: "from-blue-500 to-indigo-600",
                    duration: "1-2 Wochen",
                    description: "Definition des Assessment-Umfangs basierend auf Geschäftsanforderungen",
                    activities: [
                      "Assessment Level Bestimmung (AL1, AL2, AL3)",
                      "Scope Definition (Standorte, Systeme, Prozesse)",
                      "Stakeholder Identifikation",
                      "Timeline und Ressourcenplanung",
                      "Assessment Provider Auswahl"
                    ],
                    deliverables: [
                      "Scope Statement",
                      "Assessment Agreement",
                      "Project Charter",
                      "Timeline & Milestones"
                    ],
                    automotiveSpecific: [
                      "OEM-spezifische Anforderungen berücksichtigen",
                      "Vehicle project data scope definition",
                      "Supply chain integration requirements",
                      "Multi-site assessment coordination"
                    ]
                  },
                  {
                    phase: "Phase 2: Pre-Assessment",
                    icon: Search,
                    color: "from-emerald-500 to-teal-600",
                    duration: "4-8 Wochen",
                    description: "Vorbereitung und interne Überprüfung vor dem eigentlichen Assessment",
                    activities: [
                      "Gap Analysis gegen VDA ISM Requirements",
                      "Evidence Collection und Dokumentation",
                      "Internal Controls Testing",
                      "Mock Assessment Sessions",
                      "Team Training und Preparation"
                    ],
                    deliverables: [
                      "Gap Analysis Report",
                      "Evidence Portfolio",
                      "Pre-Assessment Results",
                      "Action Plan for Gaps"
                    ],
                    automotiveSpecific: [
                      "Automotive-specific evidence preparation",
                      "OEM validation requirements check",
                      "Supply chain documentation review",
                      "Vehicle project security validation"
                    ]
                  },
                  {
                    phase: "Phase 3: Onsite Assessment",
                    icon: Eye,
                    color: "from-purple-500 to-pink-600",
                    duration: "3-10 Tage",
                    description: "Durchführung des eigentlichen TISAX Assessments vor Ort",
                    activities: [
                      "Opening Meeting und Scope Confirmation",
                      "Documentation Review",
                      "Interviews mit Key Personnel",
                      "Technical Controls Testing",
                      "Physical Security Inspection",
                      "Closing Meeting mit ersten Findings"
                    ],
                    deliverables: [
                      "Assessment Findings",
                      "Control Test Results",
                      "Interview Protocols",
                      "Preliminary Report"
                    ],
                    automotiveSpecific: [
                      "Automotive-qualified assessors",
                      "OEM-specific requirements validation",
                      "Vehicle development process review",
                      "Supply chain security assessment"
                    ]
                  },
                  {
                    phase: "Phase 4: Report & Remediation",
                    icon: FileText,
                    color: "from-orange-500 to-red-600",
                    duration: "2-4 Wochen",
                    description: "Erstellung des Assessment Reports und Behandlung von Findings",
                    activities: [
                      "Detailed Assessment Report Creation",
                      "Findings Classification und Prioritization",
                      "Remediation Plan Development",
                      "Follow-up Assessment (wenn erforderlich)",
                      "Final Report Finalization"
                    ],
                    deliverables: [
                      "Final Assessment Report",
                      "Findings Register",
                      "Remediation Plan",
                      "Management Summary"
                    ],
                    automotiveSpecific: [
                      "Automotive industry benchmarking",
                      "OEM-specific findings evaluation",
                      "Supply chain impact assessment",
                      "Vehicle project risk evaluation"
                    ]
                  },
                  {
                    phase: "Phase 5: TISAX Label Issuance",
                    icon: BadgeCheck,
                    color: "from-cyan-500 to-blue-600",
                    duration: "1-2 Wochen",
                    description: "Ausstellung des TISAX Labels und Registration im Exchange Portal",
                    activities: [
                      "Assessment Completion Verification",
                      "TISAX Label Generation",
                      "Exchange Portal Registration",
                      "Label Publication",
                      "Stakeholder Notification"
                    ],
                    deliverables: [
                      "TISAX Label Certificate",
                      "Exchange Portal Profile",
                      "Label Validity Documentation",
                      "Communication Package"
                    ],
                    automotiveSpecific: [
                      "OEM notification and validation",
                      "Automotive industry visibility",
                      "Supply chain integration enablement",
                      "Customer communication support"
                    ]
                  }
                ].map((phase, index) => {
                  const IconComponent = phase.icon;
                  return /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.5, delay: index * 0.1 },
                      className: "bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden",
                      children: /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                        /* @__PURE__ */ jsx("div", { className: cn(
                          "p-3 rounded-xl bg-gradient-to-r flex-shrink-0",
                          phase.color
                        ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: phase.phase }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: phase.duration })
                          ] }),
                          /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm mb-4", children: phase.description }),
                          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-blue-300 mb-2", children: "Activities:" }),
                              /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                                phase.activities.slice(0, 3).map((activity, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-start gap-1", children: [
                                  /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 text-blue-400 mt-1 flex-shrink-0" }),
                                  activity
                                ] }, idx)),
                                phase.activities.length > 3 && /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400", children: [
                                  "+",
                                  phase.activities.length - 3,
                                  " weitere"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-emerald-300 mb-2", children: "Deliverables:" }),
                              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: phase.deliverables.map((deliverable) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: deliverable }, deliverable)) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
                              /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-orange-300 mb-2", children: "Automotive Considerations:" }),
                              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-1", children: phase.automotiveSpecific.map((consideration, idx) => /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 flex items-center gap-1", children: [
                                /* @__PURE__ */ jsx(Car, { className: "h-2 w-2 text-orange-400" }),
                                consideration
                              ] }, idx)) })
                            ] })
                          ] })
                        ] })
                      ] }) })
                    },
                    phase.phase
                  );
                }) }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Assessment Success Factors" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-emerald-300 mb-4", children: "Critical Success Factors" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                        "Management Commitment und Leadership Support",
                        "Dedicated Project Team mit automotive expertise",
                        "Comprehensive Gap Analysis und Preparation",
                        "Stakeholder Engagement across all levels",
                        "Documentation Quality und Evidence Management",
                        "Change Management und Communication Strategy"
                      ].map((factor, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: factor })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-red-300 mb-4", children: "Common Pitfalls" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                        "Insufficient preparation time und resource allocation",
                        "Inadequate automotive industry knowledge",
                        "Poor documentation und evidence quality",
                        "Lack of stakeholder alignment",
                        "Underestimating scope complexity",
                        "Insufficient post-assessment follow-up"
                      ].map((pitfall, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: pitfall })
                      ] }, idx)) })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "participant-types", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "TISAX Teilnehmertypen" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("participant-types"),
                    variant: completedSections.includes("participant-types") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("participant-types") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-300 mb-4", children: "Rollen im TISAX Ecosystem" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Das TISAX Framework definiert verschiedene Teilnehmertypen mit spezifischen Rollen, Verantwortlichkeiten und Rechten. Diese Struktur ermöglicht eine effiziente und vertrauensvolle Zusammenarbeit in der automotive supply chain." })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: participantTypes.map((participant, index) => {
                  const IconComponent = participant.icon;
                  return /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: index * 0.1 },
                      className: "bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden",
                      children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
                          /* @__PURE__ */ jsx("div", { className: cn(
                            "p-4 rounded-xl bg-gradient-to-r",
                            participant.color
                          ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-8 w-8 text-white" }) }),
                          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-white mb-2", children: participant.type }),
                            /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-lg", children: participant.description })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-blue-300 mb-3 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }),
                              "Verantwortlichkeiten"
                            ] }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: participant.responsibilities.map((responsibility, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: responsibility })
                            ] }, idx)) })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-emerald-300 mb-3 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
                              "Typische Beispiele"
                            ] }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: participant.examples.map((example, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(Circle, { className: "h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: example })
                            ] }, idx)) })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(BadgeCheck, { className: "h-4 w-4" }),
                              "TISAX Anforderungen"
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-2", children: participant.tisaxRequirements.map((requirement, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 text-purple-400 mt-1 flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: requirement })
                            ] }, idx)) })
                          ] })
                        ] })
                      ] })
                    },
                    participant.type
                  );
                }) }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Participant Interaction Matrix" }),
                  /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-600", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Relationship" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-blue-300 text-center", children: "Information Flow" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-emerald-300 text-center", children: "Assessment Requirement" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-purple-300 text-center", children: "Mutual Recognition" })
                    ] }) }),
                    /* @__PURE__ */ jsx("tbody", { children: [
                      {
                        relationship: "OEM → Tier 1 Supplier",
                        flow: "Vehicle concepts, specifications",
                        assessment: "AL2/AL3 required",
                        recognition: "Full mutual recognition"
                      },
                      {
                        relationship: "Tier 1 → Tier 2 Supplier",
                        flow: "Component specifications",
                        assessment: "AL1/AL2 required",
                        recognition: "Conditional recognition"
                      },
                      {
                        relationship: "OEM → Service Provider",
                        flow: "Business processes",
                        assessment: "AL2/AL3 required",
                        recognition: "Service-specific"
                      },
                      {
                        relationship: "Supplier → Service Provider",
                        flow: "Technical services",
                        assessment: "AL1/AL2 required",
                        recognition: "Limited scope"
                      }
                    ].map((row, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300 font-medium", children: row.relationship }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-slate-300 text-sm", children: row.flow }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: row.assessment }) }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-slate-300 text-sm", children: row.recognition })
                    ] }, index)) })
                  ] }) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "exchange-portal", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "TISAX Exchange Portal" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("exchange-portal"),
                    variant: completedSections.includes("exchange-portal") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("exchange-portal") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-network-500/10 to-globe-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-300 mb-4", children: "Das zentrale TISAX Ecosystem" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Das TISAX Exchange Portal ist die zentrale Plattform für die Verwaltung, den Austausch und die Validierung von TISAX Assessment-Ergebnissen. Es ermöglicht eine effiziente und vertrauensvolle Zusammenarbeit zwischen allen Teilnehmern der automotive supply chain." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-center", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: "2500+" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Registered Participants" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-emerald-400", children: "99.8%" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Platform Availability" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "24/7" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Global Access" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-500/20 rounded-lg", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-blue-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "Portal Features" })
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Assessment Results Sharing",
                      "Participant Search & Discovery",
                      "Label Verification & Validation",
                      "Scope & Requirements Management",
                      "Audit Trail & Documentation",
                      "Integration APIs für enterprise systems"
                    ].map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: feature })
                    ] }, idx)) })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500/20 rounded-lg", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-emerald-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "Security & Privacy" })
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "End-to-end encryption",
                      "Multi-factor authentication",
                      "Role-based access controls",
                      "GDPR compliance",
                      "Audit logging & monitoring",
                      "Data residency compliance"
                    ].map((security, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: security })
                    ] }, idx)) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Portal Workflow" }),
                  /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-4 gap-6", children: [
                    {
                      step: "1. Registration",
                      icon: UserPlus,
                      color: "blue",
                      description: "Account creation and company verification",
                      actions: ["Company registration", "Contact verification", "Role assignment"]
                    },
                    {
                      step: "2. Assessment Upload",
                      icon: Upload,
                      color: "emerald",
                      description: "Upload and validation of TISAX assessment results",
                      actions: ["Result upload", "Document validation", "Label generation"]
                    },
                    {
                      step: "3. Sharing & Discovery",
                      icon: Search,
                      color: "purple",
                      description: "Share results with partners and discover certified suppliers",
                      actions: ["Partner search", "Result sharing", "Requirement matching"]
                    },
                    {
                      step: "4. Collaboration",
                      icon: Network,
                      color: "orange",
                      description: "Ongoing collaboration and relationship management",
                      actions: ["Project collaboration", "Status monitoring", "Renewal tracking"]
                    }
                  ].map((workflow, index) => {
                    const IconComponent = workflow.icon;
                    return /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: "bg-slate-900/50 rounded-lg p-4 border border-slate-700",
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                            /* @__PURE__ */ jsx("div", { className: cn(
                              "inline-flex p-3 rounded-full mb-3",
                              workflow.color === "blue" ? "bg-blue-500/20" : workflow.color === "emerald" ? "bg-emerald-500/20" : workflow.color === "purple" ? "bg-purple-500/20" : "bg-orange-500/20"
                            ), children: /* @__PURE__ */ jsx(IconComponent, { className: cn(
                              "h-6 w-6",
                              workflow.color === "blue" ? "text-blue-400" : workflow.color === "emerald" ? "text-emerald-400" : workflow.color === "purple" ? "text-purple-400" : "text-orange-400"
                            ) }) }),
                            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: workflow.step }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: workflow.description })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: workflow.actions.map((action, idx) => /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center gap-1", children: [
                            /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 text-slate-500" }),
                            action
                          ] }, idx)) })
                        ]
                      },
                      workflow.step
                    );
                  }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Portal Benefits" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Reduction of redundant assessments",
                      "Faster supplier onboarding processes",
                      "Increased transparency in supply chain",
                      "Standardized security validation",
                      "Cost optimization through sharing",
                      "Enhanced automotive industry collaboration"
                    ].map((benefit, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: benefit })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Access Requirements" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Valid TISAX assessment (any level)",
                      "Automotive industry participation",
                      "Signed TISAX participation agreement",
                      "Verified company and contact information",
                      "Compliance with portal terms of use",
                      "Regular assessment renewal"
                    ].map((requirement, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: requirement })
                    ] }, idx)) })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "automotive-specifics", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Automotive-spezifische Aspekte" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("automotive-specifics"),
                    variant: completedSections.includes("automotive-specifics") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("automotive-specifics") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-car-500/10 to-truck-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-300 mb-4", children: "Warum TISAX in der Automotive Industry?" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Die Automobilindustrie hat einzigartige Sicherheitsanforderungen, die durch Standardframeworks wie ISO 27001 nicht vollständig abgedeckt werden. TISAX addressiert diese branchenspezifischen Herausforderungen systematisch." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-500/20 rounded-lg", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "Unique Industry Challenges" })
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Long development cycles (5-7 years)",
                      "Highly competitive market environment",
                      "Complex multi-tier supply chains",
                      "Massive investment in R&D projects",
                      "Regulatory and safety requirements",
                      "Global collaboration networks"
                    ].map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: challenge })
                    ] }, idx)) })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500/20 rounded-lg", children: /* @__PURE__ */ jsx(Car, { className: "h-6 w-6 text-emerald-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "TISAX Solutions" })
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Automotive-specific data classification",
                      "Supply chain security framework",
                      "OEM-validated assessment methodology",
                      "Industry-recognized certification",
                      "Exchange portal for collaboration",
                      "Cost-effective mutual recognition"
                    ].map((solution, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: solution })
                    ] }, idx)) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Automotive Data Types & Protection Requirements" }),
                  /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-6", children: [
                    {
                      category: "Vehicle Development Data",
                      icon: Cpu,
                      color: "from-blue-500 to-indigo-600",
                      types: [
                        "CAD/CAM files and designs",
                        "Engine and powertrain specs",
                        "Safety and crash test data",
                        "Aerodynamics and styling",
                        "Electronic control unit code",
                        "Performance benchmarks"
                      ],
                      protection: "Typically AL2/AL3",
                      impact: "Competitive advantage loss, delayed market entry"
                    },
                    {
                      category: "Supply Chain Data",
                      icon: Truck,
                      color: "from-emerald-500 to-teal-600",
                      types: [
                        "Supplier contracts and pricing",
                        "Manufacturing processes",
                        "Quality management data",
                        "Logistics and delivery schedules",
                        "Supplier financial information",
                        "Production planning data"
                      ],
                      protection: "Typically AL1/AL2",
                      impact: "Supply chain disruption, cost increases"
                    },
                    {
                      category: "Strategic Business Data",
                      icon: Target,
                      color: "from-purple-500 to-pink-600",
                      types: [
                        "Market research and analysis",
                        "M&A information",
                        "Partnership agreements",
                        "Financial performance data",
                        "Strategic roadmaps",
                        "Regulatory submissions"
                      ],
                      protection: "Typically AL2/AL3",
                      impact: "Financial losses, regulatory issues"
                    }
                  ].map((dataType, index) => {
                    const IconComponent = dataType.icon;
                    return /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: "bg-slate-900/50 rounded-lg p-4 border border-slate-700",
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                            /* @__PURE__ */ jsx("div", { className: cn(
                              "p-2 rounded-lg bg-gradient-to-r",
                              dataType.color
                            ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5 text-white" }) }),
                            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: dataType.category })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "text-xs font-semibold text-slate-400 mb-2", children: "Data Types:" }),
                              /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                                dataType.types.slice(0, 3).map((type, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-1", children: [
                                  /* @__PURE__ */ jsx(Circle, { className: "h-1.5 w-1.5 text-slate-500" }),
                                  type
                                ] }, idx)),
                                /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400", children: [
                                  "+",
                                  dataType.types.length - 3,
                                  " weitere"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t border-slate-700", children: [
                              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs mb-2", children: dataType.protection }),
                              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: dataType.impact })
                            ] })
                          ] })
                        ]
                      },
                      dataType.category
                    );
                  }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-blue-400" }),
                      "OEM-Specific Requirements"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                      {
                        oem: "BMW Group",
                        requirements: ["TISAX AL2+ for all Tier-1", "Specific network security standards", "Incident reporting within 4h"]
                      },
                      {
                        oem: "Mercedes-Benz",
                        requirements: ["AL3 for strategic projects", "Enhanced physical security", "Regular penetration testing"]
                      },
                      {
                        oem: "Volkswagen Group",
                        requirements: ["Multi-brand compliance", "Data localization requirements", "Supplier security training"]
                      },
                      {
                        oem: "Audi AG",
                        requirements: ["Premium vehicle data protection", "Luxury segment specific controls", "Advanced threat monitoring"]
                      }
                    ].map((oem, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-3", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-300 text-sm mb-2", children: oem.oem }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: oem.requirements.map((req, reqIdx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-emerald-400" }),
                        req
                      ] }, reqIdx)) })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Network, { className: "h-5 w-5 text-purple-400" }),
                      "Supply Chain Integration"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-4", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-300 text-sm mb-2", children: "Multi-Tier Structure" }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: "OEM → Tier 1" }),
                            /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300 text-xs", children: "AL3" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: "Tier 1 → Tier 2" }),
                            /* @__PURE__ */ jsx(Badge, { className: "bg-orange-500/20 text-orange-300 text-xs", children: "AL2" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: "Tier 2 → Tier 3" }),
                            /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300 text-xs", children: "AL1" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-4", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-300 text-sm mb-2", children: "Integration Challenges" }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: [
                          "Cascading security requirements",
                          "Multiple OEM relationships",
                          "Cross-border data transfers",
                          "Legacy system integration"
                        ].map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-1", children: [
                          /* @__PURE__ */ jsx(AlertCircle, { className: "h-2 w-2 text-orange-400" }),
                          challenge
                        ] }, idx)) })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "evidence-collection", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Evidence Collection" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("evidence-collection"),
                    variant: completedSections.includes("evidence-collection") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("evidence-collection") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-filesearch-500/10 to-document-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-300 mb-4", children: "Systematische Nachweisführung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Eine erfolgreiche TISAX Zertifizierung steht und fällt mit der Qualität der Evidence Collection. Automotive-spezifische Nachweise erfordern besondere Aufmerksamkeit für technische Details und Branchenstandards." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Evidence Portfolio Structure" }),
                  /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-4 gap-6", children: [
                    {
                      category: "Policy & Governance",
                      icon: FileText,
                      count: "15-20 Documents",
                      color: "blue",
                      examples: [
                        "Information Security Policy",
                        "ISMS Manual",
                        "Risk Management Procedures",
                        "Incident Response Plans",
                        "Business Continuity Plans"
                      ]
                    },
                    {
                      category: "Technical Controls",
                      icon: Settings,
                      count: "25-35 Evidence",
                      color: "emerald",
                      examples: [
                        "Network architecture diagrams",
                        "Access control configurations",
                        "Encryption implementations",
                        "System monitoring setup",
                        "Backup and recovery procedures"
                      ]
                    },
                    {
                      category: "Process Evidence",
                      icon: Workflow,
                      count: "20-30 Records",
                      color: "purple",
                      examples: [
                        "Security awareness training records",
                        "Audit and review reports",
                        "Supplier assessment results",
                        "Change management logs",
                        "Performance monitoring data"
                      ]
                    },
                    {
                      category: "Automotive Specific",
                      icon: Car,
                      count: "10-15 Items",
                      color: "orange",
                      examples: [
                        "Vehicle data classification",
                        "OEM integration procedures",
                        "Supply chain security measures",
                        "Automotive testing protocols",
                        "Industry compliance certificates"
                      ]
                    }
                  ].map((portfolio, index) => {
                    const IconComponent = portfolio.icon;
                    return /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: "bg-slate-900/50 rounded-lg p-4 border border-slate-700",
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                            /* @__PURE__ */ jsx("div", { className: cn(
                              "inline-flex p-3 rounded-full mb-3",
                              portfolio.color === "blue" ? "bg-blue-500/20" : portfolio.color === "emerald" ? "bg-emerald-500/20" : portfolio.color === "purple" ? "bg-purple-500/20" : "bg-orange-500/20"
                            ), children: /* @__PURE__ */ jsx(IconComponent, { className: cn(
                              "h-6 w-6",
                              portfolio.color === "blue" ? "text-blue-400" : portfolio.color === "emerald" ? "text-emerald-400" : portfolio.color === "purple" ? "text-purple-400" : "text-orange-400"
                            ) }) }),
                            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: portfolio.category }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: portfolio.count })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                            portfolio.examples.slice(0, 3).map((example, idx) => /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center gap-1", children: [
                              /* @__PURE__ */ jsx(Circle, { className: "h-1.5 w-1.5 text-slate-500" }),
                              example
                            ] }, idx)),
                            /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 text-center pt-1", children: [
                              "+",
                              portfolio.examples.length - 3,
                              " weitere"
                            ] })
                          ] })
                        ]
                      },
                      portfolio.category
                    );
                  }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-emerald-400" }),
                      "Evidence Quality Criteria"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      {
                        criteria: "Completeness",
                        description: "All required evidence for each control objective"
                      },
                      {
                        criteria: "Currency",
                        description: "Documents dated within assessment period"
                      },
                      {
                        criteria: "Authenticity",
                        description: "Verifiable and attributable to responsible parties"
                      },
                      {
                        criteria: "Relevance",
                        description: "Directly supports the control implementation"
                      },
                      {
                        criteria: "Clarity",
                        description: "Clearly documented and understandable"
                      }
                    ].map((quality, idx) => /* @__PURE__ */ jsxs("li", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 text-emerald-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: quality.criteria })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 ml-5", children: quality.description })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-400" }),
                      "Common Evidence Gaps"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      {
                        gap: "Inadequate Documentation",
                        solution: "Implement systematic documentation processes"
                      },
                      {
                        gap: "Missing Automotive Context",
                        solution: "Include industry-specific references and standards"
                      },
                      {
                        gap: "Outdated Evidence",
                        solution: "Establish regular review and update cycles"
                      },
                      {
                        gap: "Incomplete Process Coverage",
                        solution: "Map all business processes to controls"
                      },
                      {
                        gap: "Poor Evidence Organization",
                        solution: "Create structured evidence management system"
                      }
                    ].map((gap, idx) => /* @__PURE__ */ jsxs("li", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-orange-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: gap.gap })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 ml-5", children: gap.solution })
                    ] }, idx)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Evidence Collection Timeline" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-0 bottom-0 w-0.5 bg-slate-600" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                      {
                        phase: "Preparation Phase",
                        duration: "8-12 weeks before assessment",
                        activities: [
                          "Evidence gap analysis",
                          "Documentation template creation",
                          "Evidence collection team assignment"
                        ]
                      },
                      {
                        phase: "Collection Phase",
                        duration: "4-8 weeks before assessment",
                        activities: [
                          "Document gathering and review",
                          "Technical evidence compilation",
                          "Automotive-specific documentation"
                        ]
                      },
                      {
                        phase: "Review Phase",
                        duration: "2-4 weeks before assessment",
                        activities: [
                          "Evidence quality review",
                          "Gap remediation",
                          "Final evidence portfolio assembly"
                        ]
                      },
                      {
                        phase: "Validation Phase",
                        duration: "1 week before assessment",
                        activities: [
                          "Internal evidence validation",
                          "Cross-reference verification",
                          "Assessment readiness confirmation"
                        ]
                      }
                    ].map((timeline, index) => /* @__PURE__ */ jsxs("div", { className: "relative pl-10", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute left-2 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-slate-800" }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white", children: timeline.phase }),
                          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: timeline.duration })
                        ] }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: timeline.activities.map((activity, idx) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-slate-300 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400" }),
                          activity
                        ] }, idx)) })
                      ] })
                    ] }, index)) })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "certification", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "TISAX Zertifizierung" }),
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
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-badgecheck-500/10 to-award-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-300 mb-4", children: "Der Weg zum TISAX Label" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Das TISAX Label ist mehr als nur eine Zertifizierung - es ist der Schlüssel zur Teilnahme an der automotive supply chain und ein Nachweis für vertrauensvolle Geschäftsbeziehungen in der Branche." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-4 text-center", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(BadgeCheck, { className: "h-8 w-8 text-blue-400 mx-auto mb-2" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "Assessment" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "VDA ISM based" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(Award, { className: "h-8 w-8 text-emerald-400 mx-auto mb-2" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "Label" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Industry recognized" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(Network, { className: "h-8 w-8 text-purple-400 mx-auto mb-2" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "Exchange" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Portal access" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "h-8 w-8 text-orange-400 mx-auto mb-2" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "Business" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Growth opportunities" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-500/20 rounded-lg", children: /* @__PURE__ */ jsx(Calendar, { className: "h-6 w-6 text-blue-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "Label Validity" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400 text-center", children: "3 Jahre" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 text-center", children: "Gültigkeit" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Automatic renewal available" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Surveillance assessments possible" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Exchange portal registration included" })
                        ] })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500/20 rounded-lg", children: /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6 text-emerald-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "Global Recognition" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-emerald-400 text-center", children: "50+" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 text-center", children: "Countries" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-emerald-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Worldwide OEM acceptance" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-emerald-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Cross-border collaboration enabled" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-emerald-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Industry standard compliance" })
                        ] })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-500/20 rounded-lg", children: /* @__PURE__ */ jsx(DollarSign, { className: "h-6 w-6 text-purple-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "Investment & ROI" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400 text-center", children: "€15k-200k" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 text-center", children: "Investment Range" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3 text-purple-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Faster supplier onboarding" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3 text-purple-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Reduced audit costs" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3 text-purple-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Competitive advantage" })
                        ] })
                      ] })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Post-Certification Management" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-emerald-300 mb-4", children: "Maintenance Activities" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                        {
                          activity: "Continuous Monitoring",
                          frequency: "Ongoing",
                          description: "Regular monitoring of security controls effectiveness"
                        },
                        {
                          activity: "Annual Self-Assessment",
                          frequency: "Yearly",
                          description: "Internal review of control implementation status"
                        },
                        {
                          activity: "Incident Management",
                          frequency: "As needed",
                          description: "Security incident response and reporting"
                        },
                        {
                          activity: "Exchange Portal Updates",
                          frequency: "Quarterly",
                          description: "Profile and scope updates in the portal"
                        }
                      ].map((maintenance, idx) => /* @__PURE__ */ jsxs("li", { className: "bg-slate-900/50 rounded p-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                          /* @__PURE__ */ jsx("span", { className: "font-medium text-white text-sm", children: maintenance.activity }),
                          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: maintenance.frequency })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: maintenance.description })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-orange-300 mb-4", children: "Renewal Process" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-300 text-sm mb-2", children: "Renewal Timeline" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: "Planning starts" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: "12 months before expiry" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: "Assessment scheduling" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: "6 months before expiry" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: "Renewal assessment" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: "3 months before expiry" })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-300 text-sm mb-2", children: "Renewal Options" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                            /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-1", children: [
                              /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 text-orange-400" }),
                              "Full re-assessment"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-1", children: [
                              /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 text-orange-400" }),
                              "Surveillance assessment"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-1", children: [
                              /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 text-orange-400" }),
                              "Scope changes"
                            ] })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "supply-chain", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Supply Chain Security" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("supply-chain"),
                    variant: completedSections.includes("supply-chain") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("supply-chain") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-truck-500/10 to-network-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-300 mb-4", children: "Automotive Supply Chain Complexity" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Die automotive supply chain ist eine der komplexesten in der modernen Industrie. TISAX bietet einen strukturierten Ansatz für End-to-End Security Management über alle Ebenen der Lieferanten- und Partnerbeziehungen." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-4 text-center", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: "5-7" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Tier Levels" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-emerald-400", children: "10,000+" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Parts per Vehicle" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "50+" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Countries" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-orange-400", children: "€200B+" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Annual Volume" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-500/20 rounded-lg", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "Supply Chain Risks" })
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      {
                        risk: "IP Theft",
                        impact: "Loss of competitive advantage"
                      },
                      {
                        risk: "Data Breaches",
                        impact: "Customer trust and legal issues"
                      },
                      {
                        risk: "Supplier Incidents",
                        impact: "Production delays and quality issues"
                      },
                      {
                        risk: "Cyber Attacks",
                        impact: "Operational disruption"
                      },
                      {
                        risk: "Compliance Failures",
                        impact: "Regulatory penalties"
                      }
                    ].map((risk, idx) => /* @__PURE__ */ jsxs("li", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-red-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: risk.risk })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 ml-5", children: risk.impact })
                    ] }, idx)) })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500/20 rounded-lg", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-emerald-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "TISAX Controls" })
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      {
                        control: "Supplier Assessment",
                        benefit: "Verified security posture"
                      },
                      {
                        control: "Mutual Recognition",
                        benefit: "Reduced assessment overhead"
                      },
                      {
                        control: "Exchange Portal",
                        benefit: "Centralized trust network"
                      },
                      {
                        control: "Incident Sharing",
                        benefit: "Industry-wide threat intelligence"
                      },
                      {
                        control: "Continuous Monitoring",
                        benefit: "Real-time risk visibility"
                      }
                    ].map((control, idx) => /* @__PURE__ */ jsxs("li", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 text-emerald-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: control.control })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 ml-5", children: control.benefit })
                    ] }, idx)) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Multi-Tier Supply Chain Model" }),
                  /* @__PURE__ */ jsx("div", { className: "relative overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "min-w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-6 gap-4 text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-400", children: "Tier" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-400", children: "Role" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-400", children: "Examples" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-400", children: "TISAX AL" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-400", children: "Data Types" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-400", children: "Security Focus" }),
                    /* @__PURE__ */ jsx("div", { className: "bg-blue-500/20 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-blue-300", children: "OEM" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "Vehicle Manufacturer" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "BMW, Mercedes, Audi, VW" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300 text-xs", children: "AL3" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "Vehicle concepts, strategic data" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "IP protection, strategic security" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-emerald-500/20 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-emerald-300", children: "Tier 1" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "System Suppliers" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "Bosch, Continental, ZF" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx(Badge, { className: "bg-orange-500/20 text-orange-300 text-xs", children: "AL2/AL3" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "System designs, integration specs" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "System security, integration" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-purple-500/20 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-purple-300", children: "Tier 2" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "Component Suppliers" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "Specialized manufacturers" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300 text-xs", children: "AL1/AL2" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "Component specs, processes" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "Manufacturing security" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-orange-500/20 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-orange-300", children: "Tier 3+" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "Raw Materials" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "Material suppliers" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300 text-xs", children: "AL1" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "Material specs, logistics" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded p-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "Basic compliance" }) })
                  ] }) }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Supply Chain Security Implementation" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    {
                      phase: "Assessment Phase",
                      icon: Search,
                      color: "from-blue-500 to-indigo-600",
                      activities: [
                        "Supplier risk assessment",
                        "TISAX label verification",
                        "Security capability evaluation",
                        "Gap analysis and remediation planning"
                      ]
                    },
                    {
                      phase: "Integration Phase",
                      icon: Network,
                      color: "from-emerald-500 to-teal-600",
                      activities: [
                        "Contract security clauses",
                        "Information sharing agreements",
                        "Technical integration requirements",
                        "Incident response coordination"
                      ]
                    },
                    {
                      phase: "Monitoring Phase",
                      icon: Activity,
                      color: "from-purple-500 to-pink-600",
                      activities: [
                        "Continuous risk monitoring",
                        "Label validity tracking",
                        "Performance metrics collection",
                        "Regular compliance reviews"
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
                        className: "bg-slate-900/50 rounded-lg p-4 border border-slate-700",
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                            /* @__PURE__ */ jsx("div", { className: cn(
                              "inline-flex p-3 rounded-full mb-3 bg-gradient-to-r",
                              phase.color
                            ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white", children: phase.phase })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.activities.map((activity, idx) => /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-300 flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                            activity
                          ] }, idx)) })
                        ]
                      },
                      phase.phase
                    );
                  }) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "continuous-improvement", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Kontinuierliche Verbesserung" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("continuous-improvement"),
                    variant: completedSections.includes("continuous-improvement") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("continuous-improvement") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-green-300 mb-4", children: "Kontinuierliche Verbesserung in TISAX" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "TISAX ist kein einmaliger Zertifizierungsprozess, sondern ein kontinuierlicher Verbesserungsansatz für die Informationssicherheit in der Automobilindustrie. Die kontinuierliche Verbesserung gewährleistet, dass Sicherheitsmaßnahmen mit den sich entwickelnden Bedrohungen und technologischen Fortschritten Schritt halten." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "h-6 w-6 text-green-400 mb-2" }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Fortlaufende Optimierung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Regelmäßige Bewertung und Anpassung der Sicherheitsmaßnahmen basierend auf neuen Erkenntnissen und sich ändernden Anforderungen." })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-blue-400 mb-2" }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Proaktive Anpassung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Vorausschauende Identifikation von Verbesserungsmöglichkeiten und zeitnahe Implementierung von Sicherheitsupdates." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                      /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-purple-400 mr-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Monitoring & Messung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-2", children: "Key Performance Indicators (KPIs)" }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Anzahl der entdeckten Sicherheitsvorfälle"
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Durchschnittliche Reaktionszeit bei Incidents"
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Compliance-Rate der implementierten Controls"
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Mitarbeiterschulungsabschlussrate"
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-2", children: "Monitoring-Tools" }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(Monitor, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                            "Security Information and Event Management (SIEM)"
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(Monitor, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                            "Vulnerability Assessment Tools"
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(Monitor, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                            "Compliance Dashboard und Reporting"
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                      /* @__PURE__ */ jsx(RotateCcw, { className: "h-6 w-6 text-orange-400 mr-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Verbesserungszyklus" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                      {
                        phase: "Plan",
                        description: "Identifikation von Verbesserungsmöglichkeiten",
                        color: "text-blue-300",
                        icon: Target
                      },
                      {
                        phase: "Do",
                        description: "Implementierung der geplanten Maßnahmen",
                        color: "text-green-300",
                        icon: Zap
                      },
                      {
                        phase: "Check",
                        description: "Überprüfung der Wirksamkeit",
                        color: "text-yellow-300",
                        icon: Eye
                      },
                      {
                        phase: "Act",
                        description: "Standardisierung erfolgreicher Änderungen",
                        color: "text-purple-300",
                        icon: CheckCircle
                      }
                    ].map((step, index) => {
                      const IconComponent = step.icon;
                      return /* @__PURE__ */ jsx("div", { className: "bg-slate-800/50 rounded-lg p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 bg-slate-700 rounded-full", children: /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4 text-white" }) }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h4", { className: `font-semibold ${step.color}`, children: step.phase }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: step.description })
                        ] })
                      ] }) }, step.phase);
                    }) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "h-6 w-6 text-cyan-400 mr-3" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Lessons Learned & Best Practices" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-cyan-300 mb-3", children: "Dokumentation von Erkenntnissen" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "Systematische Erfassung und Analyse von Erfahrungen aus Sicherheitsvorfällen, Assessments und täglichen Betriebsabläufen." }),
                      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400 mb-2" }),
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-300 text-sm", children: "Incident Analysis" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Detaillierte Untersuchung von Sicherheitsvorfällen" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400 mb-2" }),
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-300 text-sm", children: "Process Optimization" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Verbesserung bestehender Sicherheitsprozesse" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-green-400 mb-2" }),
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-300 text-sm", children: "Success Stories" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Erfolgreiche Implementierungsansätze" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-cyan-300 mb-3", children: "Knowledge Management" }),
                      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-2", children: "Wissensverteilung" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Regelmäßige Team-Workshops"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Interne Wissensdatenbank"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Cross-funktionale Zusammenarbeit"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-2", children: "Externe Vernetzung" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "TISAX Community Teilnahme"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "Branchenveranstaltungen"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "Peer-Austausch Programme"
                            ] })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "h-6 w-6 text-emerald-400 mr-3" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Implementierungsroadmap" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-3", children: "Quartalweise Verbesserungsplanung" }),
                    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-4", children: [
                      {
                        quarter: "Q1",
                        focus: "Assessment & Gap Analysis",
                        activities: ["Baseline Assessment", "Risk Review", "Priority Setting"],
                        color: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
                      },
                      {
                        quarter: "Q2",
                        focus: "Process Optimization",
                        activities: ["Process Redesign", "Tool Integration", "Training Updates"],
                        color: "from-green-500/20 to-green-600/20 border-green-500/30"
                      },
                      {
                        quarter: "Q3",
                        focus: "Technology Enhancement",
                        activities: ["System Upgrades", "Automation Implementation", "Security Tooling"],
                        color: "from-purple-500/20 to-purple-600/20 border-purple-500/30"
                      },
                      {
                        quarter: "Q4",
                        focus: "Review & Planning",
                        activities: ["Annual Review", "Compliance Check", "Next Year Planning"],
                        color: "from-orange-500/20 to-orange-600/20 border-orange-500/30"
                      }
                    ].map((quarter, index) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: `bg-gradient-to-br ${quarter.color} rounded-lg p-4 border`,
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center mb-3", children: [
                            /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-8 h-8 bg-slate-700 rounded-full mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-white", children: quarter.quarter }) }),
                            /* @__PURE__ */ jsx("h5", { className: "font-bold text-white text-sm", children: quarter.focus })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: quarter.activities.map((activity, idx) => /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-start gap-1", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-green-400 mt-1 flex-shrink-0" }),
                            activity
                          ] }, idx)) })
                        ]
                      },
                      quarter.quarter
                    )) })
                  ] }) })
                ] }) })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "integration", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Integration Standards" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("integration"),
                    variant: completedSections.includes("integration") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("integration") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-purple-300 mb-4", children: "TISAX Integration in bestehende Standards" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "TISAX wurde entwickelt, um nahtlos mit anderen Sicherheits- und Qualitätsstandards der Automobilindustrie zu harmonieren. Diese Integration gewährleistet Effizienz bei der Compliance-Verwaltung und vermeidet Redundanzen bei mehrfachen Zertifizierungen." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(GitMerge, { className: "h-6 w-6 text-purple-400 mb-2" }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Standard-Harmonisierung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Systematische Abstimmung von TISAX-Anforderungen mit ISO/IEC 27001, IATF 16949 und anderen relevanten Standards." })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(Layers, { className: "h-6 w-6 text-pink-400 mb-2" }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Integrierte Governance" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Gemeinsame Governance-Strukturen für überlappende Anforderungen verschiedener Standards und Frameworks." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                      /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-blue-400 mr-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "ISO/IEC 27001 Mapping" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: "Control-Überschneidungen" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "Detaillierte Zuordnung von TISAX-Controls zu ISO 27001-Anhang A Controls für effiziente Compliance-Verwaltung." }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
                          { tisax: "VDA ISM 1.1.1", iso: "A.5.1.1", overlap: "95%" },
                          { tisax: "VDA ISM 2.3.1", iso: "A.8.1.1", overlap: "88%" },
                          { tisax: "VDA ISM 3.2.4", iso: "A.12.6.1", overlap: "92%" },
                          { tisax: "VDA ISM 4.1.2", iso: "A.16.1.2", overlap: "85%" }
                        ].map((mapping, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-slate-300", children: [
                            mapping.tisax,
                            " ↔ ",
                            mapping.iso
                          ] }),
                          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: mapping.overlap })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: "Gap-Analysis" }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Automotive-spezifische Erweiterungen"
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Supply Chain Security Fokus"
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Prototype Protection Requirements"
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-green-400 mr-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "IATF 16949 Integration" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-300 mb-2", children: "Qualitätsmanagement-Synergien" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "Integration von TISAX-Informationssicherheitsanforderungen in bestehende IATF 16949-Qualitätsmanagementsysteme." }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-1", children: "Dokumentenmanagement" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Gemeinsame Dokumentenlenkung für Qualitäts- und Sicherheitsdokumentation" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-1", children: "Risikomanagement" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Integrierte Betrachtung von Qualitäts- und Informationssicherheitsrisiken" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-1", children: "Lieferantenbewertung" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Kombinierte Qualitäts- und Sicherheitsbewertung von Zulieferern" })
                        ] })
                      ] })
                    ] }) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                    /* @__PURE__ */ jsx(Network, { className: "h-6 w-6 text-cyan-400 mr-3" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Framework-Integration Strategien" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4", children: [
                      {
                        framework: "NIST Cybersecurity Framework",
                        integration: "Core Functions Mapping",
                        benefits: ["Identify", "Protect", "Detect", "Respond", "Recover"],
                        color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
                        icon: Shield
                      },
                      {
                        framework: "COBIT 2019",
                        integration: "Governance Alignment",
                        benefits: ["IT Governance", "Enterprise Risk", "Resource Optimization"],
                        color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
                        icon: Settings
                      },
                      {
                        framework: "ISO 31000",
                        integration: "Risk Management",
                        benefits: ["Risk Assessment", "Risk Treatment", "Risk Monitoring"],
                        color: "from-orange-500/20 to-red-500/20 border-orange-500/30",
                        icon: AlertTriangle
                      }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5, delay: index * 0.1 },
                          className: `bg-gradient-to-br ${item.color} rounded-lg p-4 border`,
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-full bg-slate-700 mb-3", children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                              /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: item.framework }),
                              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: item.integration })
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: item.benefits.map((benefit, idx) => /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" }),
                              benefit
                            ] }, idx)) })
                          ]
                        },
                        item.framework
                      );
                    }) }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-cyan-300 mb-3", children: "Integration Best Practices" }),
                      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-2", children: "Technische Integration" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Einheitliche GRC-Plattform"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Automatisierte Compliance-Checks"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Integriertes Dashboard"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Cross-Standard Reporting"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-2", children: "Organisatorische Integration" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "Gemeinsame Governance-Gremien"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "Integrierte Auditplanung"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "Cross-funktionale Teams"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "Einheitliche Schulungsprogramme"
                            ] })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "industry-practices", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Industry Best Practices" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("industry-practices"),
                    variant: completedSections.includes("industry-practices") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("industry-practices") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-amber-300 mb-4", children: "Bewährte Praktiken der Automobilindustrie" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Die Automobilindustrie hat über Jahre hinweg bewährte Praktiken für die TISAX-Implementierung entwickelt. Diese Erkenntnisse basieren auf den Erfahrungen führender OEMs und Tier-1-Zulieferer und bieten praxiserprobte Lösungsansätze für typische Herausforderungen." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(Factory, { className: "h-6 w-6 text-amber-400 mb-2" }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "OEM-Anforderungen" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Spezifische Sicherheitsanforderungen und Erwartungen der großen Automobilhersteller an ihre Zulieferkette." })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(Briefcase, { className: "h-6 w-6 text-orange-400 mb-2" }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Tier-1 Strategien" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Erprobte Implementierungsstrategien von führenden Tier-1-Zulieferern für effiziente TISAX-Compliance." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                      /* @__PURE__ */ jsx(Building, { className: "h-6 w-6 text-blue-400 mr-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "OEM Best Practices" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: "Supplier Requirements" }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                          {
                            oem: "Volkswagen Group",
                            requirement: "AL3 für alle strategischen Zulieferer",
                            timeline: "24 Monate Umsetzungsfrist",
                            support: "Dedicated Support Team"
                          },
                          {
                            oem: "BMW Group",
                            requirement: "AL2 minimum, AL3 für Premium-Projekte",
                            timeline: "18 Monate Standard",
                            support: "Supplier Development Program"
                          },
                          {
                            oem: "Mercedes-Benz",
                            requirement: "Risiko-basierte AL-Zuordnung",
                            timeline: "Projektspezifisch",
                            support: "Joint Implementation Workshops"
                          }
                        ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm", children: item.oem }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: item.timeline })
                          ] }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mb-1", children: item.requirement }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: item.support })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: "Compliance Monitoring" }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Quartalsweise Supplier-Assessments"
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Automatisierte Compliance-Dashboards"
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                            "Risk-based Audit-Programme"
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                      /* @__PURE__ */ jsx(Truck, { className: "h-6 w-6 text-green-400 mr-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Tier-1 Supplier Strategien" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-300 mb-2", children: "Implementierungsansätze" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-1", children: "Phased Implementation" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mb-2", children: "Stufenweise Einführung beginnend mit kritischen Geschäftsbereichen" }),
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1", children: [
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Phase 1: Core IT" }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Phase 2: R&D" }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Phase 3: Production" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-1", children: "Center of Excellence" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mb-2", children: "Zentrale Expertise-Teams für konzernweite TISAX-Implementierung" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-xs text-slate-400", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Security Architecture Team" }),
                            /* @__PURE__ */ jsx("li", { children: "• Compliance Management Office" }),
                            /* @__PURE__ */ jsx("li", { children: "• Training & Awareness Center" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-1", children: "Cross-Site Harmonization" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300", children: "Einheitliche Sicherheitsstandards über alle Produktionsstandorte hinweg" })
                        ] })
                      ] })
                    ] }) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-purple-400 mr-3" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Success Stories & Lessons Learned" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
                      {
                        company: "Continental AG",
                        challenge: "Global rollout across 200+ sites",
                        solution: "Standardized security architecture with local adaptations",
                        result: "98% compliance rate within 18 months",
                        key_learnings: [
                          "Early stakeholder engagement critical",
                          "Local champions accelerate adoption",
                          "Automation reduces compliance costs"
                        ],
                        color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30"
                      },
                      {
                        company: "Bosch Group",
                        challenge: "Integration with existing ISO 27001",
                        solution: "Unified security management system",
                        result: "25% reduction in audit overhead",
                        key_learnings: [
                          "Leverage existing ISO controls",
                          "Focus on automotive-specific gaps",
                          "Integrated training programs effective"
                        ],
                        color: "from-green-500/20 to-teal-500/20 border-green-500/30"
                      }
                    ].map((story, index) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: `bg-gradient-to-br ${story.color} rounded-lg p-4 border`,
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-1", children: story.company }),
                            /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-300 mb-2", children: [
                              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Challenge:" }),
                              " ",
                              story.challenge
                            ] }),
                            /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-300 mb-2", children: [
                              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Solution:" }),
                              " ",
                              story.solution
                            ] }),
                            /* @__PURE__ */ jsxs("p", { className: "text-sm text-green-300 mb-3", children: [
                              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Result:" }),
                              " ",
                              story.result
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-2", children: "Key Learnings:" }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: story.key_learnings.map((learning, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(Lightbulb, { className: "h-3 w-3 text-yellow-400 mt-0.5 flex-shrink-0" }),
                              learning
                            ] }, idx)) })
                          ] })
                        ]
                      },
                      story.company
                    )) }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-3", children: "Common Pitfalls & Mitigation Strategies" }),
                      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4", children: [
                        {
                          pitfall: "Underestimating Implementation Effort",
                          impact: "Project delays and budget overruns",
                          mitigation: "Comprehensive gap analysis and realistic timeline planning",
                          icon: Clock
                        },
                        {
                          pitfall: "Insufficient Change Management",
                          impact: "Employee resistance and poor adoption",
                          mitigation: "Early stakeholder engagement and comprehensive training",
                          icon: Users
                        },
                        {
                          pitfall: "Overcomplicating Technical Solutions",
                          impact: "High costs and maintenance overhead",
                          mitigation: "Focus on business needs and leverage existing infrastructure",
                          icon: Settings
                        }
                      ].map((item, idx) => {
                        const IconComponent = item.icon;
                        return /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                            /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4 text-red-400 mr-2" }),
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-300 text-sm", children: item.pitfall })
                          ] }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mb-2", children: item.impact }),
                          /* @__PURE__ */ jsxs("p", { className: "text-xs text-green-300", children: [
                            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Mitigation:" }),
                            " ",
                            item.mitigation
                          ] })
                        ] }, idx);
                      }) })
                    ] })
                  ] })
                ] }) })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "tools-automation", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Tools & Automation" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("tools-automation"),
                    variant: completedSections.includes("tools-automation") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("tools-automation") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-cyan-300 mb-4", children: "TISAX Automation & Tooling" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Moderne TISAX-Implementierungen nutzen umfassende Automatisierung und spezialisierte Tools zur Effizienzsteigerung, Kostenreduzierung und Verbesserung der Compliance-Qualität. Diese technologiegestützte Herangehensweise ermöglicht kontinuierliche Überwachung und proaktive Sicherheitsmaßnahmen." }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(Zap, { className: "h-6 w-6 text-cyan-400 mb-2" }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Automatisierte Compliance" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Kontinuierliche Überwachung und automatische Bewertung der TISAX-Kontrollanforderungen in Echtzeit." })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx(Server, { className: "h-6 w-6 text-blue-400 mb-2" }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Integrierte Toolchain" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Nahtlose Integration von Sicherheitstools in bestehende IT-Landschaften und Entwicklungsprozesse." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                      /* @__PURE__ */ jsx(Database, { className: "h-6 w-6 text-emerald-400 mr-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "GRC-Plattformen" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-2", children: "Enterprise GRC Solutions" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        {
                          platform: "ServiceNow GRC",
                          features: ["Integrated Risk Management", "Automated Assessments", "Policy Management"],
                          tisax_support: "Dedicated TISAX modules available",
                          rating: "5/5"
                        },
                        {
                          platform: "RSA Archer",
                          features: ["Risk Register", "Control Testing", "Vendor Risk Management"],
                          tisax_support: "Custom TISAX frameworks",
                          rating: "4/5"
                        },
                        {
                          platform: "MetricStream",
                          features: ["Compliance Management", "Audit Management", "Document Control"],
                          tisax_support: "VDA ISM integration",
                          rating: "4/5"
                        }
                      ].map((platform, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm", children: platform.platform }),
                          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                            Star,
                            {
                              className: `h-3 w-3 ${i < parseInt(platform.rating) ? "text-yellow-400 fill-current" : "text-slate-600"}`
                            },
                            i
                          )) })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-1 mb-2", children: platform.features.map((feature, fidx) => /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-start gap-1", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-green-400 mt-1 flex-shrink-0" }),
                          feature
                        ] }, fidx)) }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-cyan-300", children: platform.tisax_support })
                      ] }, idx)) })
                    ] }) })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-orange-400 mr-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Security Automation Tools" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-300 mb-2", children: "Vulnerability Management" }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
                          { tool: "Nessus Professional", category: "Vulnerability Scanning", automation: "Scheduled scans, auto-remediation" },
                          { tool: "Qualys VMDR", category: "Threat Detection", automation: "Continuous monitoring, risk scoring" },
                          { tool: "Rapid7 InsightVM", category: "Asset Discovery", automation: "Real-time asset tracking" }
                        ].map((tool, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-2", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-xs", children: tool.tool }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: tool.category })
                          ] }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: tool.automation })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-300 mb-2", children: "SIEM & Security Analytics" }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
                          { tool: "Splunk Enterprise Security", use_case: "Log analysis, incident correlation" },
                          { tool: "IBM QRadar", use_case: "Threat intelligence, behavioral analytics" },
                          { tool: "Microsoft Sentinel", use_case: "Cloud-native SIEM, automation workflows" }
                        ].map((tool, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-2", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-xs mb-1", children: tool.tool }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: tool.use_case })
                        ] }, idx)) })
                      ] })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                    /* @__PURE__ */ jsx(Code, { className: "h-6 w-6 text-purple-400 mr-3" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "DevSecOps Integration" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-3", children: "CI/CD Security Pipeline" }),
                      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4", children: [
                        {
                          stage: "Code Analysis",
                          tools: ["SonarQube", "Checkmarx", "Veracode"],
                          automation: "Pre-commit hooks, automated scanning",
                          icon: Code,
                          color: "text-blue-400"
                        },
                        {
                          stage: "Container Security",
                          tools: ["Twistlock", "Aqua Security", "Clair"],
                          automation: "Image scanning, compliance checks",
                          icon: Package,
                          color: "text-green-400"
                        },
                        {
                          stage: "Infrastructure Security",
                          tools: ["Terraform Compliance", "Chef InSpec", "AWS Config"],
                          automation: "Infrastructure as Code validation",
                          icon: Cloud,
                          color: "text-orange-400"
                        }
                      ].map((stage, index) => {
                        const IconComponent = stage.icon;
                        return /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.5, delay: index * 0.1 },
                            className: "bg-slate-700/50 rounded-lg p-3",
                            children: [
                              /* @__PURE__ */ jsxs("div", { className: "text-center mb-3", children: [
                                /* @__PURE__ */ jsx(IconComponent, { className: `h-6 w-6 ${stage.color} mx-auto mb-2` }),
                                /* @__PURE__ */ jsx("h5", { className: "font-bold text-white text-sm", children: stage.stage })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-slate-300 text-xs mb-1", children: "Tools:" }),
                                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: stage.tools.map((tool, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: tool }, idx)) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-slate-300 text-xs mb-1", children: "Automation:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: stage.automation })
                                ] })
                              ] })
                            ]
                          },
                          stage.stage
                        );
                      }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-3", children: "Compliance as Code" }),
                      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-2", children: "Policy Automation" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "TISAX control validation scripts"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "Automated evidence collection"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                              "Configuration drift detection"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-2", children: "Reporting Automation" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-slate-300", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Automated compliance dashboards"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Real-time violation alerts"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                              "Audit-ready documentation"
                            ] })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { className: "bg-slate-900/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                    /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-cyan-400 mr-3" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "ROI & Efficiency Metrics" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-cyan-300 mb-3", children: "Automation Benefits" }),
                      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3 text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-400 mb-1", children: "75%" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "Reduzierung manueller Arbeit" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3 text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400 mb-1", children: "60%" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "Schnellere Incident Response" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded p-3 text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400 mb-1", children: "45%" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "Kostenreduktion bei Audits" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-cyan-300 mb-3", children: "Implementation Timeline" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
                        { phase: "Tool Evaluation & Selection", duration: "4-6 Wochen", effort: "Low" },
                        { phase: "Pilot Implementation", duration: "8-12 Wochen", effort: "Medium" },
                        { phase: "Enterprise Rollout", duration: "16-24 Wochen", effort: "High" },
                        { phase: "Optimization & Tuning", duration: "Ongoing", effort: "Low" }
                      ].map((phase, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-slate-700/50 rounded p-3", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm", children: phase.phase }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: phase.duration })
                        ] }),
                        /* @__PURE__ */ jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: `text-xs ${phase.effort === "High" ? "border-red-400 text-red-400" : phase.effort === "Medium" ? "border-yellow-400 text-yellow-400" : "border-green-400 text-green-400"}`,
                            children: phase.effort
                          }
                        )
                      ] }, idx)) })
                    ] })
                  ] })
                ] }) })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "resources", className: "space-y-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "TISAX Ressourcen" }),
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
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-download-500/10 to-book-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-300 mb-4", children: "Umfassende TISAX Ressourcen" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Nutzen Sie diese kuratierte Sammlung von offiziellen Dokumenten, Tools und Ressourcen für eine erfolgreiche TISAX Implementation und Zertifizierung." })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                  {
                    category: "Official Documents",
                    icon: FileText,
                    color: "from-blue-500 to-indigo-600",
                    resources: [
                      {
                        title: "VDA ISM Catalogue",
                        type: "PDF",
                        version: "5.0.1",
                        size: "200+ pages",
                        description: "Complete control objectives catalog"
                      },
                      {
                        title: "TISAX Handbook",
                        type: "PDF",
                        version: "2.3",
                        size: "150 pages",
                        description: "Assessment methodology guide"
                      },
                      {
                        title: "ENX Association Guidelines",
                        type: "PDF",
                        version: "Current",
                        size: "80 pages",
                        description: "Participant guidelines and procedures"
                      }
                    ]
                  },
                  {
                    category: "Implementation Tools",
                    icon: Wrench,
                    color: "from-emerald-500 to-teal-600",
                    resources: [
                      {
                        title: "Assessment Readiness Tool",
                        type: "Excel",
                        version: "3.1",
                        size: "5 MB",
                        description: "Self-assessment and gap analysis"
                      },
                      {
                        title: "Evidence Collection Template",
                        type: "Word",
                        version: "2.0",
                        size: "2 MB",
                        description: "Structured evidence documentation"
                      },
                      {
                        title: "Risk Assessment Framework",
                        type: "Excel",
                        version: "4.2",
                        size: "8 MB",
                        description: "Automotive risk evaluation tool"
                      }
                    ]
                  },
                  {
                    category: "Training Materials",
                    icon: GraduationCap,
                    color: "from-purple-500 to-pink-600",
                    resources: [
                      {
                        title: "TISAX Foundation Course",
                        type: "Online",
                        version: "Current",
                        size: "8 hours",
                        description: "Comprehensive introduction to TISAX"
                      },
                      {
                        title: "VDA ISM Training Slides",
                        type: "PowerPoint",
                        version: "5.0",
                        size: "120 slides",
                        description: "Technical training materials"
                      },
                      {
                        title: "Automotive Security Awareness",
                        type: "Video",
                        version: "2024",
                        size: "45 min",
                        description: "Industry-specific security training"
                      }
                    ]
                  }
                ].map((category, index) => {
                  const IconComponent = category.icon;
                  return /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: index * 0.1 },
                      className: "bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden",
                      children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                          /* @__PURE__ */ jsx("div", { className: cn(
                            "p-3 rounded-xl bg-gradient-to-r",
                            category.color
                          ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: category.category })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: category.resources.map((resource, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm", children: resource.title }),
                            /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: resource.type }),
                              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: resource.version })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mb-2", children: resource.description }),
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500", children: resource.size }),
                            /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "ghost", className: "h-6 px-2 text-xs", children: [
                              /* @__PURE__ */ jsx(Download, { className: "h-3 w-3 mr-1" }),
                              "Download"
                            ] })
                          ] })
                        ] }, idx)) })
                      ] })
                    },
                    category.category
                  );
                }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5 text-blue-400" }),
                      "Important Links"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                      {
                        title: "VDA QMC Website",
                        url: "https://www.vda-qmc.de",
                        description: "Official VDA Quality Management Center"
                      },
                      {
                        title: "ENX Association",
                        url: "https://www.enx.com",
                        description: "TISAX operator and portal provider"
                      },
                      {
                        title: "TISAX Exchange Portal",
                        url: "https://portal.enx.com",
                        description: "Participant registration and management"
                      },
                      {
                        title: "Accredited Assessment Providers",
                        url: "https://www.enx.com/assessors",
                        description: "List of qualified TISAX assessors"
                      }
                    ].map((link, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-300 text-sm", children: link.title }),
                        /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 text-slate-400" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mb-2", children: link.description }),
                      /* @__PURE__ */ jsx("code", { className: "text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded", children: link.url })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-emerald-400" }),
                      "Community & Support"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                      {
                        resource: "VDA Working Group ISM",
                        type: "Industry Forum",
                        access: "Member companies only"
                      },
                      {
                        resource: "TISAX User Conference",
                        type: "Annual Event",
                        access: "Registration required"
                      },
                      {
                        resource: "Automotive Security Forum",
                        type: "Professional Network",
                        access: "Industry professionals"
                      },
                      {
                        resource: "ENX Support Portal",
                        type: "Technical Support",
                        access: "Registered participants"
                      }
                    ].map((support, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded p-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-300 text-sm", children: support.resource }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: support.type })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: support.access })
                    ] }, idx)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Quick Reference" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-blue-300 mb-3", children: "Assessment Levels" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "AL1 (Prototype)" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "45 Controls" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "AL2 (Development)" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "67 Controls" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "AL3 (High Protection)" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "103 Controls" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-emerald-300 mb-3", children: "Implementation Timeline" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "AL1 Implementation" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "2-4 Monate" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "AL2 Implementation" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "4-8 Monate" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "AL3 Implementation" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "8-18 Monate" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-purple-300 mb-3", children: "Investment Range" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "AL1 Costs" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "€15k - €30k" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "AL2 Costs" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "€30k - €75k" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "AL3 Costs" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "€75k - €200k" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  TisaxGuide as default
};
