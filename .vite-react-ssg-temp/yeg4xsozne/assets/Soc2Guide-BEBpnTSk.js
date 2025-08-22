import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, motion, useInView } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Shield, Eye, GitBranch, Target, Lock, Activity, Cpu, UserCheck, Settings, FileText, Search, Rocket, Code, Award, TrendingUp, Download, Bookmark, Globe, Clock, Play, ExternalLink, CheckCircle, CheckCircle2, Share2, Circle, Building2, ChevronDown, CircleDot, AlertCircle, Lightbulb, AlertTriangle, BarChart3, ChevronRight, Monitor, Zap } from "lucide-react";
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
const Soc2Guide = () => {
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [completedSections, setCompletedSections] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedCriteria, setExpandedCriteria] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });
  const sections = [
    { id: "ueberblick", title: "Überblick", icon: Eye, readTime: "10 Min" },
    { id: "trust-prinzipien", title: "Trust Services Criteria", icon: Shield, readTime: "20 Min" },
    { id: "typen", title: "Type I vs Type II", icon: GitBranch, readTime: "12 Min" },
    { id: "umfang", title: "Scope Definition", icon: Target, readTime: "15 Min" },
    { id: "sicherheit", title: "Security Criteria", icon: Lock, readTime: "30 Min" },
    { id: "verfuegbarkeit", title: "Availability Criteria", icon: Activity, readTime: "18 Min" },
    { id: "verarbeitung", title: "Processing Integrity", icon: Cpu, readTime: "18 Min" },
    { id: "vertraulichkeit", title: "Confidentiality", icon: Eye, readTime: "15 Min" },
    { id: "datenschutz", title: "Privacy Criteria", icon: UserCheck, readTime: "20 Min" },
    { id: "kontrollen", title: "Common Controls", icon: Settings, readTime: "35 Min" },
    { id: "beweise", title: "Evidence Collection", icon: FileText, readTime: "25 Min" },
    { id: "audit-prozess", title: "Audit Process", icon: Search, readTime: "22 Min" },
    { id: "implementierung", title: "Implementation Guide", icon: Rocket, readTime: "30 Min" },
    { id: "ueberwachung", title: "Continuous Monitoring", icon: Activity, readTime: "18 Min" },
    { id: "tools", title: "Tools & Automation", icon: Code, readTime: "15 Min" },
    { id: "zertifizierung", title: "Certification Path", icon: Award, readTime: "12 Min" },
    { id: "vorteile", title: "Business Benefits", icon: TrendingUp, readTime: "10 Min" },
    { id: "ressourcen", title: "Resources & Templates", icon: Download, readTime: "8 Min" }
  ];
  const trustServicesCriteria = [
    {
      category: "Security (Common Criteria)",
      code: "CC",
      icon: Shield,
      color: "from-blue-500 to-indigo-600",
      description: "The system is protected against unauthorized access, both physical and logical",
      required: true,
      controlCategories: [
        {
          name: "CC1: Control Environment",
          controls: [
            "CC1.1 - COSO Principle 1: Demonstrates commitment to integrity and ethical values",
            "CC1.2 - COSO Principle 2: Board demonstrates independence and oversight",
            "CC1.3 - COSO Principle 3: Management establishes structures and reporting",
            "CC1.4 - COSO Principle 4: Demonstrates commitment to competence",
            "CC1.5 - COSO Principle 5: Enforces accountability"
          ]
        },
        {
          name: "CC2: Communication and Information",
          controls: [
            "CC2.1 - COSO Principle 13: Uses relevant, quality information",
            "CC2.2 - COSO Principle 14: Communicates internally",
            "CC2.3 - COSO Principle 15: Communicates externally"
          ]
        },
        {
          name: "CC3: Risk Assessment",
          controls: [
            "CC3.1 - COSO Principle 6: Specifies suitable objectives",
            "CC3.2 - COSO Principle 7: Identifies and analyzes risk",
            "CC3.3 - COSO Principle 8: Assesses fraud risk",
            "CC3.4 - COSO Principle 9: Identifies significant changes"
          ]
        },
        {
          name: "CC4: Monitoring Activities",
          controls: [
            "CC4.1 - COSO Principle 16: Conducts ongoing evaluations",
            "CC4.2 - COSO Principle 17: Evaluates and communicates deficiencies"
          ]
        },
        {
          name: "CC5: Control Activities",
          controls: [
            "CC5.1 - COSO Principle 10: Selects and develops control activities",
            "CC5.2 - COSO Principle 11: Technology general controls",
            "CC5.3 - COSO Principle 12: Deploys through policies and procedures"
          ]
        },
        {
          name: "CC6: Logical and Physical Access Controls",
          controls: [
            "CC6.1 - Logical access security software and infrastructure",
            "CC6.2 - Prior to issuing system credentials",
            "CC6.3 - Considers network and infrastructure management",
            "CC6.4 - Restricts physical access",
            "CC6.5 - Authenticates individual users",
            "CC6.6 - Prevents or detects unauthorized access",
            "CC6.7 - Restricts data transmission",
            "CC6.8 - Prevents or detects malicious software"
          ]
        },
        {
          name: "CC7: System Operations",
          controls: [
            "CC7.1 - Detects and monitors capacity demands",
            "CC7.2 - Monitors system components",
            "CC7.3 - Evaluates security events",
            "CC7.4 - Responds to security incidents",
            "CC7.5 - Identifies and manages vulnerabilities"
          ]
        },
        {
          name: "CC8: Change Management",
          controls: [
            "CC8.1 - Authorizes changes",
            "CC8.2 - Tests system changes",
            "CC8.3 - Prevents unauthorized changes",
            "CC8.4 - Uses configuration management software"
          ]
        },
        {
          name: "CC9: Risk Mitigation",
          controls: [
            "CC9.1 - Identifies and manages risk",
            "CC9.2 - Assesses vendor and third-party risk"
          ]
        }
      ]
    },
    {
      category: "Availability",
      code: "A",
      icon: Activity,
      color: "from-green-500 to-emerald-600",
      description: "The system is available for operation and use as committed or agreed",
      required: false,
      controlCategories: [
        {
          name: "A1: Availability Commitments",
          controls: [
            "A1.1 - Maintains commitments and system requirements",
            "A1.2 - Monitors system availability",
            "A1.3 - Tests recovery plan procedures"
          ]
        }
      ]
    },
    {
      category: "Processing Integrity",
      code: "PI",
      icon: Cpu,
      color: "from-purple-500 to-pink-600",
      description: "System processing is complete, valid, accurate, timely, and authorized",
      required: false,
      controlCategories: [
        {
          name: "PI1: Processing Integrity",
          controls: [
            "PI1.1 - Uses defined processing integrity criteria",
            "PI1.2 - Detects and corrects processing errors",
            "PI1.3 - Validates inputs",
            "PI1.4 - Monitors processing",
            "PI1.5 - Implements output controls"
          ]
        }
      ]
    },
    {
      category: "Confidentiality",
      code: "C",
      icon: Lock,
      color: "from-orange-500 to-red-600",
      description: "Information designated as confidential is protected as committed or agreed",
      required: false,
      controlCategories: [
        {
          name: "C1: Confidential Information",
          controls: [
            "C1.1 - Identifies and maintains confidential information",
            "C1.2 - Disposes of confidential information"
          ]
        }
      ]
    },
    {
      category: "Privacy",
      code: "P",
      icon: UserCheck,
      color: "from-cyan-500 to-blue-600",
      description: "Personal information is collected, used, retained, disclosed, and disposed in conformity with commitments",
      required: false,
      controlCategories: [
        {
          name: "P1-P8: Privacy Criteria",
          controls: [
            "P1.1 - Notice and communication of objectives",
            "P2.1 - Choice and consent",
            "P3.1 - Collection of personal information",
            "P4.1 - Use of personal information",
            "P5.1 - Retention of personal information",
            "P6.1 - Disclosure to third parties",
            "P7.1 - Access to personal information",
            "P8.1 - Quality of personal information"
          ]
        }
      ]
    }
  ];
  const implementationPhases = [
    {
      phase: "Phase 1: Readiness Assessment",
      duration: "2-4 Wochen",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      tasks: [
        "Gap-Analyse gegen TSC durchführen",
        "Scope und Systemgrenzen definieren",
        "Stakeholder identifizieren und einbinden",
        "Budget und Ressourcenplanung",
        "Projektteam zusammenstellen",
        "Risk Assessment initialisieren"
      ],
      deliverables: ["Gap Analysis Report", "Project Charter", "Scope Statement"]
    },
    {
      phase: "Phase 2: Control Design",
      duration: "4-6 Wochen",
      icon: Settings,
      color: "from-emerald-500 to-teal-600",
      tasks: [
        "Control Framework entwickeln",
        "Policies und Procedures erstellen",
        "RACI Matrix definieren",
        "Control Testing Procedures entwickeln",
        "Evidence Collection Plan erstellen",
        "Automation Opportunities identifizieren"
      ],
      deliverables: ["Control Matrix", "Policy Suite", "Process Documentation"]
    },
    {
      phase: "Phase 3: Implementation",
      duration: "8-12 Wochen",
      icon: Rocket,
      color: "from-purple-500 to-pink-600",
      tasks: [
        "Controls implementieren",
        "Monitoring-Systeme aufsetzen",
        "Mitarbeiter schulen",
        "Evidence Collection starten",
        "Incident Response etablieren",
        "Change Management Prozess einführen"
      ],
      deliverables: ["Implemented Controls", "Training Records", "Monitoring Dashboard"]
    },
    {
      phase: "Phase 4: Testing & Remediation",
      duration: "4-6 Wochen",
      icon: CheckCircle,
      color: "from-orange-500 to-red-600",
      tasks: [
        "Control Effectiveness Testing",
        "Deficiency Identification",
        "Remediation Planning",
        "Re-testing durchführen",
        "Evidence Review",
        "Management Assertions vorbereiten"
      ],
      deliverables: ["Test Results", "Remediation Plan", "Evidence Package"]
    },
    {
      phase: "Phase 5: Audit Preparation",
      duration: "2-3 Wochen",
      icon: FileText,
      color: "from-cyan-500 to-blue-600",
      tasks: [
        "Auditor Selection und Beauftragung",
        "System Description finalisieren",
        "Evidence Package kompilieren",
        "Walkthrough Sessions planen",
        "Management Representation Letter",
        "Audit Kickoff vorbereiten"
      ],
      deliverables: ["System Description", "Complete Evidence", "Audit Schedule"]
    },
    {
      phase: "Phase 6: Audit & Report",
      duration: "6-8 Wochen",
      icon: Award,
      color: "from-yellow-500 to-orange-600",
      tasks: [
        "Audit Fieldwork Support",
        "Auditor Inquiries beantworten",
        "Additional Evidence bereitstellen",
        "Draft Report Review",
        "Management Response erstellen",
        "Final Report Distribution"
      ],
      deliverables: ["SOC 2 Type II Report", "Management Letter", "Improvement Plan"]
    }
  ];
  const handleSectionComplete = (sectionId) => {
    setCompletedSections(
      (prev) => prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };
  const toggleCriteriaExpansion = (criteriaCode) => {
    setExpandedCriteria((prev) => ({
      ...prev,
      [criteriaCode]: !prev[criteriaCode]
    }));
  };
  const handleItemCheck = (itemId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };
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
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections2 = [
        { id: "ueberblick", title: "Überblick", icon: Eye, readTime: "10 Min" },
        { id: "trust-prinzipien", title: "Trust Services Criteria", icon: Shield, readTime: "20 Min" },
        { id: "typen", title: "Type I vs Type II", icon: GitBranch, readTime: "12 Min" },
        { id: "umfang", title: "Scope Definition", icon: Target, readTime: "15 Min" },
        { id: "sicherheit", title: "Security Criteria", icon: Lock, readTime: "30 Min" },
        { id: "verfuegbarkeit", title: "Availability Criteria", icon: Activity, readTime: "18 Min" },
        { id: "verarbeitung", title: "Processing Integrity", icon: Cpu, readTime: "18 Min" },
        { id: "vertraulichkeit", title: "Confidentiality", icon: Eye, readTime: "15 Min" },
        { id: "datenschutz", title: "Privacy Criteria", icon: UserCheck, readTime: "20 Min" },
        { id: "kontrollen", title: "Common Controls", icon: Settings, readTime: "35 Min" },
        { id: "beweise", title: "Evidence Collection", icon: FileText, readTime: "25 Min" },
        { id: "audit-prozess", title: "Audit Process", icon: Search, readTime: "22 Min" },
        { id: "implementierung", title: "Implementation Guide", icon: Rocket, readTime: "30 Min" },
        { id: "ueberwachung", title: "Continuous Monitoring", icon: Activity, readTime: "18 Min" },
        { id: "tools", title: "Tools & Automation", icon: Code, readTime: "15 Min" },
        { id: "zertifizierung", title: "Certification Path", icon: Award, readTime: "12 Min" },
        { id: "vorteile", title: "Business Benefits", icon: TrendingUp, readTime: "10 Min" },
        { id: "ressourcen", title: "Resources & Templates", icon: Download, readTime: "8 Min" }
      ].map((item) => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      const scrollPosition = window.scrollY + 150;
      for (let i = sections2.length - 1; i >= 0; i--) {
        const section = sections2[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 mr-1" }),
            "SOC 2 Type II Guide"
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
                    /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl", children: /* @__PURE__ */ jsx(Shield, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white", children: "SOC 2 Type II" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-400", children: "Trust Services Criteria" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300 mb-8 leading-relaxed", children: "Der Goldstandard für SaaS-Unternehmen und Service Provider. Demonstrieren Sie die Wirksamkeit Ihrer Sicherheitskontrollen über einen Zeitraum von mindestens 6 Monaten." }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-8", children: [
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-blue-500/10 border-blue-500/20 text-blue-300", children: [
                      /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 mr-2" }),
                      "AICPA Standard"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", children: [
                      /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 mr-2" }),
                      "USA & International"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-purple-500/10 border-purple-500/20 text-purple-300", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 mr-2" }),
                      "6-12 Monate Audit"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => setActiveSection("trust-principles"),
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
                    ] }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        asChild: true,
                        variant: "ghost",
                        className: "text-slate-400 hover:text-slate-200",
                        children: /* @__PURE__ */ jsxs("a", { href: "/zertifizierung/soc2", children: [
                          /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 mr-2" }),
                          "SOC 2 Produktseite"
                        ] })
                      }
                    )
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
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 5 }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Trust Services Criteria" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-emerald-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 64 }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Control Points" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-purple-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 6, suffix: "+" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Monate Audit" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-orange-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 90, suffix: "%" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Enterprise Adoption" })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-4", children: "Was Sie in diesem Guide lernen" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                      "Trust Services Criteria im Detail",
                      "Type I vs Type II Unterschiede",
                      "Common Controls (CC) Implementation",
                      "Evidence Collection Best Practices",
                      "Audit-Prozess und Timeline",
                      "Continuous Monitoring Setup"
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
    /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: sections.map((item, index) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          scrollToSection(item.id);
          setActiveSection(item.id);
        },
        className: cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
          activeSection === item.id ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800" : "hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400",
          "border",
          activeSection === item.id ? "border-red-200 dark:border-red-800" : "border-transparent hover:border-red-200 dark:hover:border-red-800"
        ),
        children: [
          /* @__PURE__ */ jsx(item.icon, { className: cn(
            "h-4 w-4",
            activeSection === item.id && "text-red-600 dark:text-red-500"
          ) }),
          /* @__PURE__ */ jsx("span", { className: cn(
            "text-sm font-medium",
            activeSection === item.id && "text-red-700 dark:text-red-400"
          ), children: item.title })
        ]
      },
      item.id
    )) }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 py-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-6 lg:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-32 space-y-6", children: [
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Inhaltsverzeichnis" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: sections.map((section, index) => {
            const IconComponent = section.icon;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  scrollToSection(section.id);
                  setActiveSection(section.id);
                },
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
              "Control Matrix Template"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
              "Evidence Checklist"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 mr-2" }),
              "Guide teilen"
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { ref: contentRef, className: "space-y-20", children: [
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
                    onClick: () => handleSectionComplete("ueberblick"),
                    variant: completedSections.includes("ueberblick") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("ueberblick") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "prose prose-invert prose-slate max-w-none", children: [
                /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300 leading-relaxed mb-6", children: "SOC 2 (Service Organization Control 2) ist ein Prüfungsstandard, der vom American Institute of CPAs (AICPA) entwickelt wurde. Er bewertet, wie gut ein Service Provider personenbezogene Daten verwaltet und schützt, basierend auf fünf Trust Services Criteria." }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-blue-300 mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Target, { className: "h-5 w-5" }),
                      "Was ist SOC 2?"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Unabhängige Prüfung von Sicherheitskontrollen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Fokus auf Cloud- und SaaS-Anbieter" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Kundenvertrauen durch externe Validierung" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Jährliche Wiederholung erforderlich" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" }),
                      "Für wen relevant?"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "SaaS-Unternehmen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Cloud Service Provider" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Managed Service Provider" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Data Processing Services" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "SOC 2 vs. andere Standards" }),
                  /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-600", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Aspekt" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-blue-300 text-center", children: "SOC 2" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-emerald-300 text-center", children: "ISO 27001" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-purple-300 text-center", children: "PCI DSS" })
                    ] }) }),
                    /* @__PURE__ */ jsxs("tbody", { children: [
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: "Fokus" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Service Provider" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Alle Organisationen" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Zahlungskarten" })
                      ] }),
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: "Flexibilität" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Hoch (Custom)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Mittel (Framework)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Niedrig (Prescriptive)" })
                      ] }),
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: "Audit-Periode" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "6-12 Monate" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Punkt-in-Zeit" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "Jährlich" })
                      ] }),
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: "Kosten" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "$30k-100k" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "$50k-150k" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: "$20k-80k" })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "trust-prinzipien", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Trust Services Criteria" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("trust-principles"),
                    variant: completedSections.includes("trust-principles") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("trust-principles") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-300 mb-3", children: "Die 5 Trust Services Criteria" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "SOC 2 basiert auf fünf Trust Services Criteria (TSC), die vom AICPA definiert wurden. Security ist immer erforderlich, die anderen vier sind optional je nach Service." }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-5 gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3 text-center", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-blue-400 mx-auto mb-2" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-blue-300", children: "Security" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300 text-xs mt-1", children: "Required" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3 text-center", children: [
                    /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-green-400 mx-auto mb-2" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-green-300", children: "Availability" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs mt-1", children: "Optional" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3 text-center", children: [
                    /* @__PURE__ */ jsx(Cpu, { className: "h-6 w-6 text-purple-400 mx-auto mb-2" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-purple-300", children: "Processing" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs mt-1", children: "Optional" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3 text-center", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-orange-400 mx-auto mb-2" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-orange-300", children: "Confidentiality" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs mt-1", children: "Optional" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3 text-center", children: [
                    /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6 text-cyan-400 mx-auto mb-2" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-cyan-300", children: "Privacy" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs mt-1", children: "Optional" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: trustServicesCriteria.map((criteria, index) => {
                const IconComponent = criteria.icon;
                const isExpanded = expandedCriteria[criteria.code];
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
                          onClick: () => toggleCriteriaExpansion(criteria.code),
                          className: "w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between",
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                              /* @__PURE__ */ jsx("div", { className: cn(
                                "p-3 rounded-xl bg-gradient-to-r",
                                criteria.color
                              ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                              /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: criteria.category }),
                                /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: criteria.description })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                              criteria.required && /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "Required" }),
                              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                                criteria.controlCategories.reduce((acc, cat) => acc + cat.controls.length, 0),
                                " Controls"
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
                          children: /* @__PURE__ */ jsx("div", { className: "p-6 space-y-6", children: criteria.controlCategories.map((category) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "text-md font-semibold text-white flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(CircleDot, { className: "h-4 w-4 text-blue-400" }),
                              category.name
                            ] }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-2 ml-6", children: category.controls.map((control, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: control })
                            ] }, idx)) })
                          ] }, category.name)) })
                        }
                      )
                    ]
                  },
                  criteria.code
                );
              }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "typen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Type I vs Type II" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("types"),
                    variant: completedSections.includes("types") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("types") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-blue-300 mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }),
                    "SOC 2 Type I"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: "Punkt-in-Zeit-Bewertung der Kontrollengestaltung" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Design der Kontrollen zu einem Stichtag" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Schnellere Durchführung (1-2 Monate)" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Kostengünstiger (~$20k-40k)" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Keine Aussage über Wirksamkeit" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5" }),
                    "SOC 2 Type II"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: "Bewertung der Kontrollenwirksamkeit über einen Zeitraum" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Operating Effectiveness über 6-12 Monate" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Höheres Kundenvertrauen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Detaillierte Testergebnisse" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Höhere Kosten (~$40k-100k)" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Entscheidungshilfe: Type I oder Type II?" }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-500 rounded-xl w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Rocket, { className: "h-6 w-6 text-white" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Startups" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-3", children: "Oft Type I als erster Schritt, dann Upgrade zu Type II" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "Type I → Type II" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500 rounded-xl w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-white" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Etablierte SaaS" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-3", children: "Direkt Type II für maximales Kundenvertrauen" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-500/20 text-emerald-300", children: "Type II" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-500 rounded-xl w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-white" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Enterprise Vendors" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-3", children: "Type II ist oft Mindestanforderung für RFPs" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-purple-500/20 text-purple-300", children: "Type II Required" })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "implementierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Implementation Guide" }),
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
              /* @__PURE__ */ jsxs("div", { className: "mb-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-indigo-300 mb-4", children: "SOC 2 Implementation Roadmap" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Eine erfolgreiche SOC 2 Type II Implementierung dauert typischerweise 9-12 Monate vom Start bis zum finalen Report." }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-center", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-indigo-400", children: "3-4 Monate" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Preparation & Design" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "6-12 Monate" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Audit Period" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-pink-400", children: "2-3 Monate" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Report Finalization" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: implementationPhases.map((phase, index) => {
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
                        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Hauptaufgaben:" }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.tasks.map((task, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
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
                                    "text-sm text-slate-300 cursor-pointer",
                                    checkedItems[`task-${index}-${idx}`] && "line-through opacity-60"
                                  ),
                                  children: task
                                }
                              )
                            ] }, idx)) })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Deliverables:" }),
                            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.deliverables.map((deliverable) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: deliverable }, deliverable)) })
                          ] })
                        ] })
                      ] })
                    ] })
                  },
                  phase.phase
                );
              }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400" }),
                    "Best Practices"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                    "Early Auditor Engagement - Wählen Sie Ihren Auditor 2-3 Monate vor dem Audit-Start",
                    "Automation First - Automatisieren Sie Evidence Collection wo möglich",
                    "Continuous Monitoring - Implementieren Sie Monitoring vom ersten Tag",
                    "Documentation Culture - Dokumentieren Sie alles von Anfang an",
                    "Regular Internal Reviews - Monatliche interne Control Reviews",
                    "Stakeholder Buy-in - Involvieren Sie alle Teams frühzeitig"
                  ].map((practice, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: practice })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400" }),
                    "Common Pitfalls"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                    "Zu später Start - Unterschätzen der Vorbereitungszeit",
                    "Scope Creep - Unkontrollierte Scope-Erweiterung",
                    "Manual Evidence - Zu viel manuelle Evidence Collection",
                    "Fehlende Ownership - Keine klaren Verantwortlichkeiten",
                    "Audit Fatigue - Teams werden müde von ständigen Requests",
                    "Budget-Überschreitung - Versteckte Kosten nicht eingeplant"
                  ].map((pitfall, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: pitfall })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "umfang", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Scope Definition" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("scope"),
                    variant: completedSections.includes("scope") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("scope") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6 text-center", children: "SOC 2 Scope Considerations" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-blue-400" }),
                        "System Boundary Definition"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                        "Applications in scope (SaaS platform, APIs, mobile apps)",
                        "Infrastructure components (cloud services, databases, networks)",
                        "Third-party services und integrations",
                        "Data flows und processing activities",
                        "Geographic locations und data centers",
                        "Organizational boundaries (subsidiaries, divisions)",
                        "Time periods für Type II audits (minimum 6 months)"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: item })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-emerald-400" }),
                        "Service Organization Types"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                        {
                          type: "Type A: Direct Services",
                          description: "Services die direkt an User Entities bereitgestellt werden",
                          examples: ["SaaS Applications", "Cloud Infrastructure", "Managed IT Services"]
                        },
                        {
                          type: "Type B: Subservice Organizations",
                          description: "Services für andere Service Organizations",
                          examples: ["Cloud Hosting Provider", "Payment Processors", "Identity Providers"]
                        }
                      ].map((serviceType) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-2", children: serviceType.type }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-2", children: serviceType.description }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: serviceType.examples.map((example) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: example }, example)) })
                      ] }, serviceType.type)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Scoping Workshop Methodology" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    {
                      phase: "Discovery Phase",
                      duration: "2-4 Wochen",
                      icon: Search,
                      activities: [
                        "Current State Assessment",
                        "Technology Stack Mapping",
                        "Data Flow Analysis",
                        "Risk Assessment",
                        "Stakeholder Interviews",
                        "Compliance Gap Analysis"
                      ]
                    },
                    {
                      phase: "Analysis Phase",
                      duration: "1-2 Wochen",
                      icon: BarChart3,
                      activities: [
                        "Trust Services Criteria Mapping",
                        "Control Objectives Identification",
                        "Materiality Assessment",
                        "Complementary User Entity Controls",
                        "Subservice Organization Analysis",
                        "Cost-Benefit Analysis"
                      ]
                    },
                    {
                      phase: "Definition Phase",
                      duration: "1 Woche",
                      icon: FileText,
                      activities: [
                        "Scope Statement Drafting",
                        "System Description Creation",
                        "Control Matrix Development",
                        "Stakeholder Review",
                        "Auditor Pre-engagement",
                        "Final Scope Approval"
                      ]
                    }
                  ].map((phase) => {
                    const IconComponent = phase.icon;
                    return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                        /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5 text-blue-400" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: phase.phase }),
                          /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: phase.duration })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.activities.map((activity, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }),
                        activity
                      ] }, idx)) })
                    ] }, phase.phase);
                  }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Scoping Decision Matrix" }),
                  /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-600", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Component" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-center text-green-400", children: "Include" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-center text-yellow-400", children: "Consider" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-center text-red-400", children: "Exclude" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Rationale" })
                    ] }) }),
                    /* @__PURE__ */ jsx("tbody", { children: [
                      {
                        component: "Production Applications",
                        include: "✓",
                        consider: "",
                        exclude: "",
                        rationale: "Core service delivery"
                      },
                      {
                        component: "Development Environment",
                        include: "",
                        consider: "△",
                        exclude: "",
                        rationale: "If contains production data"
                      },
                      {
                        component: "Third-party APIs",
                        include: "✓",
                        consider: "",
                        exclude: "",
                        rationale: "Material to service delivery"
                      },
                      {
                        component: "Internal HR Systems",
                        include: "",
                        consider: "",
                        exclude: "✗",
                        rationale: "Not part of customer service"
                      },
                      {
                        component: "Backup Systems",
                        include: "✓",
                        consider: "",
                        exclude: "",
                        rationale: "Critical for availability"
                      },
                      {
                        component: "Legacy Systems",
                        include: "",
                        consider: "△",
                        exclude: "",
                        rationale: "Depends on usage and data"
                      }
                    ].map((row) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: row.component }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-green-400", children: row.include }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-yellow-400", children: row.consider }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-center text-red-400", children: row.exclude }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-sm text-slate-400", children: row.rationale })
                    ] }, row.component)) })
                  ] }) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "sicherheit", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Security Criteria - Detailed Implementation" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("security"),
                    variant: completedSections.includes("security") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("security") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6", children: "CC6 - Logical and Physical Access Controls" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                    {
                      control: "CC6.1",
                      title: "Logical Access Security Software",
                      description: "The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events.",
                      implementations: [
                        "Multi-factor authentication für alle privilegierten Accounts",
                        "Identity and Access Management (IAM) System",
                        "Single Sign-On (SSO) mit SAML/OIDC",
                        "Privileged Access Management (PAM)",
                        "Network segmentation und micro-segmentation",
                        "VPN für remote access mit certificate-based authentication"
                      ],
                      evidence: [
                        "IAM system configuration screenshots",
                        "MFA enrollment reports",
                        "Network architecture diagrams",
                        "PAM system access logs",
                        "SSO configuration documentation",
                        "VPN access policies und logs"
                      ],
                      testingProcedures: [
                        "Review IAM system configuration",
                        "Test MFA enforcement on sample accounts",
                        "Validate network segmentation controls",
                        "Inspect privileged access management logs",
                        "Verify SSO token validation",
                        "Test VPN access controls"
                      ]
                    },
                    {
                      control: "CC6.2",
                      title: "Prior to Issuing System Credentials",
                      description: "Prior to issuing system credentials and granting system access, the entity registers and authorizes new internal and external users.",
                      implementations: [
                        "Formal user provisioning workflow",
                        "Manager approval für access requests",
                        "Role-based access control (RBAC) matrix",
                        "Automated provisioning durch HR systems",
                        "Guest account management procedures",
                        "Vendor access request und approval process"
                      ],
                      evidence: [
                        "User provisioning workflow documentation",
                        "Sample access request approvals",
                        "RBAC matrix und role definitions",
                        "HR system integration logs",
                        "Guest account provisioning records",
                        "Vendor access agreements"
                      ],
                      testingProcedures: [
                        "Review sample user provisioning requests",
                        "Test manager approval workflow",
                        "Validate RBAC implementation",
                        "Inspect automated provisioning logs",
                        "Review guest account procedures",
                        "Test vendor access controls"
                      ]
                    },
                    {
                      control: "CC6.3",
                      title: "Network and Infrastructure Management",
                      description: "The entity authorizes, designs, develops or acquires, configures, documents, tests, approves, and implements changes to network and infrastructure.",
                      implementations: [
                        "Network change management process",
                        "Infrastructure as Code (IaC) practices",
                        "Change approval board (CAB)",
                        "Network configuration management database (CMDB)",
                        "Automated deployment pipelines",
                        "Network monitoring und alerting"
                      ],
                      evidence: [
                        "Change management policy",
                        "Infrastructure as Code templates",
                        "CAB meeting minutes",
                        "CMDB configuration records",
                        "Deployment pipeline logs",
                        "Network monitoring dashboards"
                      ],
                      testingProcedures: [
                        "Review network change procedures",
                        "Test IaC deployment process",
                        "Inspect CAB approval records",
                        "Validate CMDB accuracy",
                        "Review deployment logs",
                        "Test network monitoring alerts"
                      ]
                    }
                  ].map((controlDetail) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: controlDetail.control }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: controlDetail.title })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6 text-sm italic", children: controlDetail.description }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-blue-300 mb-3", children: "Implementation Examples:" }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: controlDetail.implementations.map((impl, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: impl })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-emerald-300 mb-3", children: "Evidence Requirements:" }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: controlDetail.evidence.map((evidence, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: evidence })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-purple-300 mb-3", children: "Testing Procedures:" }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: controlDetail.testingProcedures.map((test, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Search, { className: "h-3 w-3 text-purple-400 mt-1 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: test })
                        ] }, idx)) })
                      ] })
                    ] })
                  ] }, controlDetail.control)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "CC7 - System Operations Detailed Controls" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    {
                      control: "CC7.1 - Capacity Management",
                      implementations: [
                        "Auto-scaling policies in cloud environments",
                        "Performance monitoring und capacity planning",
                        "Load testing und stress testing",
                        "Resource utilization dashboards",
                        "Capacity thresholds und alerting"
                      ],
                      tools: ["CloudWatch", "Datadog", "New Relic", "Kubernetes HPA", "Terraform"]
                    },
                    {
                      control: "CC7.2 - System Monitoring",
                      implementations: [
                        "Infrastructure monitoring (CPU, memory, disk)",
                        "Application performance monitoring (APM)",
                        "Log aggregation und analysis",
                        "Synthetic monitoring und uptime checks",
                        "Real user monitoring (RUM)"
                      ],
                      tools: ["Prometheus", "Grafana", "ELK Stack", "Splunk", "PingDOM"]
                    },
                    {
                      control: "CC7.3 - Security Event Monitoring",
                      implementations: [
                        "Security Information Event Management (SIEM)",
                        "Intrusion Detection Systems (IDS)",
                        "User Behavior Analytics (UBA)",
                        "Threat intelligence integration",
                        "Security orchestration und automated response"
                      ],
                      tools: ["Splunk", "QRadar", "Sentinel", "CrowdStrike", "Phantom"]
                    },
                    {
                      control: "CC7.4 - Incident Response",
                      implementations: [
                        "Incident response playbooks",
                        "On-call escalation procedures",
                        "Communication templates",
                        "Post-incident reviews",
                        "Lessons learned documentation"
                      ],
                      tools: ["PagerDuty", "ServiceNow", "Slack", "JIRA", "Confluence"]
                    }
                  ].map((controlArea) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: controlArea.control }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-xs font-semibold text-slate-300 mb-2", children: "Implementations:" }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: controlArea.implementations.map((impl, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }),
                          impl
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-xs font-semibold text-slate-300 mb-2", children: "Common Tools:" }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: controlArea.tools.map((tool) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: tool }, tool)) })
                      ] })
                    ] })
                  ] }, controlArea.control)) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "beweise", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Evidence Collection Framework" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("evidence"),
                    variant: completedSections.includes("evidence") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("evidence") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-emerald-300 mb-6", children: "Evidence Types & Collection Methods" }),
                  /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-600", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Evidence Type" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Collection Method" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Frequency" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Automation Level" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Sample Controls" })
                    ] }) }),
                    /* @__PURE__ */ jsx("tbody", { children: [
                      {
                        type: "System Screenshots",
                        method: "Manual capture with metadata",
                        frequency: "Quarterly",
                        automation: "Low",
                        controls: "CC6.1, CC6.2, CC8.1"
                      },
                      {
                        type: "Configuration Exports",
                        method: "API/CLI automation",
                        frequency: "Monthly",
                        automation: "High",
                        controls: "CC6.3, CC8.4, CC7.1"
                      },
                      {
                        type: "Log Files",
                        method: "SIEM/Log aggregation",
                        frequency: "Continuous",
                        automation: "High",
                        controls: "CC7.2, CC7.3, CC6.6"
                      },
                      {
                        type: "Policy Documents",
                        method: "Document management system",
                        frequency: "Annual/As changed",
                        automation: "Medium",
                        controls: "CC1.1, CC2.1, CC5.3"
                      },
                      {
                        type: "Training Records",
                        method: "LMS reporting",
                        frequency: "Quarterly",
                        automation: "Medium",
                        controls: "CC1.4, CC2.2"
                      },
                      {
                        type: "Vulnerability Scans",
                        method: "Automated scanning tools",
                        frequency: "Weekly/Monthly",
                        automation: "High",
                        controls: "CC7.5, CC6.8"
                      },
                      {
                        type: "Access Reviews",
                        method: "IAM system reports",
                        frequency: "Quarterly",
                        automation: "Medium",
                        controls: "CC6.2, CC6.4"
                      },
                      {
                        type: "Change Tickets",
                        method: "ITSM system exports",
                        frequency: "Continuous",
                        automation: "High",
                        controls: "CC8.1, CC8.2"
                      }
                    ].map((row) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: row.type }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: row.method }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300", children: row.frequency }),
                      /* @__PURE__ */ jsx("td", { className: "p-3", children: /* @__PURE__ */ jsx(
                        Badge,
                        {
                          className: cn(
                            row.automation === "High" && "bg-green-500/20 text-green-300",
                            row.automation === "Medium" && "bg-yellow-500/20 text-yellow-300",
                            row.automation === "Low" && "bg-red-500/20 text-red-300"
                          ),
                          children: row.automation
                        }
                      ) }),
                      /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-300 text-sm", children: row.controls })
                    ] }, row.type)) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-5 w-5 text-blue-400" }),
                      "Automation Tools & Scripts"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                      {
                        tool: "AWS Config",
                        purpose: "Infrastructure compliance monitoring",
                        evidence: "Configuration snapshots, compliance reports"
                      },
                      {
                        tool: "Terraform Cloud",
                        purpose: "Infrastructure as Code audit trail",
                        evidence: "Plan/apply logs, state file changes"
                      },
                      {
                        tool: "GitHub Actions",
                        purpose: "CI/CD pipeline evidence",
                        evidence: "Build logs, deployment approvals"
                      },
                      {
                        tool: "Okta API",
                        purpose: "User access und authentication logs",
                        evidence: "Login events, MFA usage, access reviews"
                      },
                      {
                        tool: "Splunk/ELK",
                        purpose: "Centralized logging und monitoring",
                        evidence: "Security events, system logs, alerts"
                      }
                    ].map((automation) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: automation.tool }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-2", children: automation.purpose }),
                      /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
                        "Evidence: ",
                        automation.evidence
                      ] })
                    ] }, automation.tool)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-emerald-400" }),
                      "Evidence Management Best Practices"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Implement centralized evidence repository with version control",
                      "Establish automated evidence collection workflows",
                      "Maintain audit trail für alle evidence modifications",
                      "Use immutable storage für critical evidence",
                      "Implement role-based access controls für evidence",
                      "Create standardized naming conventions",
                      "Establish retention policies aligned with audit requirements",
                      "Implement evidence integrity verification (checksums)",
                      "Maintain metadata für searchability und context",
                      "Regular backup und disaster recovery testing"
                    ].map((practice, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: practice })
                    ] }, idx)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Evidence Templates & Checklists" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    {
                      template: "Access Review Template",
                      purpose: "Quarterly user access reviews",
                      fields: [
                        "User ID und Name",
                        "Role assignments",
                        "Last login date",
                        "Manager approval",
                        "Review date",
                        "Actions taken"
                      ]
                    },
                    {
                      template: "Change Management Record",
                      purpose: "System change documentation",
                      fields: [
                        "Change ID",
                        "Requestor und approver",
                        "Change description",
                        "Risk assessment",
                        "Test results",
                        "Rollback plan"
                      ]
                    },
                    {
                      template: "Incident Response Log",
                      purpose: "Security incident tracking",
                      fields: [
                        "Incident ID",
                        "Discovery method",
                        "Impact assessment",
                        "Response actions",
                        "Resolution time",
                        "Lessons learned"
                      ]
                    }
                  ].map((template) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: template.template }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: template.purpose }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: template.fields.map((field, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }),
                      field
                    ] }, idx)) })
                  ] }, template.template)) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "verfuegbarkeit", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Availability Criteria (A1)" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("availability"),
                    variant: completedSections.includes("availability") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("availability") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-green-300 mb-4", children: "Verfügbarkeits-Anforderungen" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: "Das System ist für den Betrieb und die Nutzung verfügbar, wie zugesagt oder vereinbart." }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: "A1.1 - Availability Commitments" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [
                      /* @__PURE__ */ jsx("li", { children: "• System availability commitments dokumentieren" }),
                      /* @__PURE__ */ jsx("li", { children: "• Service Level Agreements (SLAs) definieren" }),
                      /* @__PURE__ */ jsx("li", { children: "• Uptime monitoring implementieren" }),
                      /* @__PURE__ */ jsx("li", { children: "• Performance benchmarks etablieren" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: "A1.2 - System Monitoring" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Verfügbarkeitsüberwachung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Automatische Alerting-Systeme" }),
                      /* @__PURE__ */ jsx("li", { children: "• Incident Response Procedures" }),
                      /* @__PURE__ */ jsx("li", { children: "• Capacity Management" })
                    ] })
                  ] })
                ] })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "verarbeitung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Processing Integrity (PI1)" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("processing"),
                    variant: completedSections.includes("processing") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("processing") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-purple-300 mb-4", children: "Verarbeitungsintegrität" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: "Die Systemverarbeitung ist vollständig, gültig, genau, zeitgerecht und autorisiert." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: ["PI1.1 - Processing Criteria", "PI1.2 - Error Detection", "PI1.3 - Input Validation", "PI1.4 - Processing Monitoring"].map((control, index) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: control }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-300", children: [
                    control.includes("PI1.1") && "Definierte Verarbeitungsintegritätskriterien anwenden",
                    control.includes("PI1.2") && "Verarbeitungsfehler erkennen und korrigieren",
                    control.includes("PI1.3") && "Eingaben validieren und autorisieren",
                    control.includes("PI1.4") && "Verarbeitungsaktivitäten überwachen"
                  ] })
                ] }, index)) })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "vertraulichkeit", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Confidentiality (C1)" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("confidentiality"),
                    variant: completedSections.includes("confidentiality") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("confidentiality") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-cyan-300 mb-4", children: "Vertraulichkeitsanforderungen" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: "Als vertraulich bezeichnete Informationen werden wie vereinbart oder zugesagt geschützt." }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: "C1.1 - Information Classification" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Datenklassifizierungsrichtlinien" }),
                      /* @__PURE__ */ jsx("li", { children: "• Vertraulichkeitskennzeichnung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Handling Instructions" }),
                      /* @__PURE__ */ jsx("li", { children: "• Retention Policies" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: "C1.2 - Access Controls" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Role-based Access Control" }),
                      /* @__PURE__ */ jsx("li", { children: "• Need-to-know Principle" }),
                      /* @__PURE__ */ jsx("li", { children: "• Encryption at Rest" }),
                      /* @__PURE__ */ jsx("li", { children: "• Encryption in Transit" })
                    ] })
                  ] })
                ] })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "datenschutz", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Privacy Criteria (P1-P8)" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("privacy"),
                    variant: completedSections.includes("privacy") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("privacy") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-indigo-300 mb-4", children: "Datenschutz-Framework" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: "Personenbezogene Daten werden im Einklang mit den Datenschutzbestimmungen gesammelt, verwendet, aufbewahrt, offengelegt und entsorgt." }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
                  { code: "P1", title: "Notice & Communication", desc: "Transparente Datenschutzerklärungen" },
                  { code: "P2", title: "Choice & Consent", desc: "Einwilligung und Wahlmöglichkeiten" },
                  { code: "P3", title: "Collection", desc: "Rechtmäßige Datenerhebung" },
                  { code: "P4", title: "Use & Retention", desc: "Zweckgebundene Nutzung" },
                  { code: "P5", title: "Access", desc: "Betroffenenrechte" },
                  { code: "P6", title: "Disclosure", desc: "Kontrollierte Weitergabe" },
                  { code: "P7", title: "Quality", desc: "Datenqualität & Richtigkeit" },
                  { code: "P8", title: "Monitoring", desc: "Compliance-Überwachung" }
                ].map((criterion, index) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-3", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-white text-sm mb-1", children: [
                    criterion.code,
                    " - ",
                    criterion.title
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300", children: criterion.desc })
                ] }, index)) })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "kontrollen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Common Controls Framework" }),
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
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-orange-300 mb-4", children: "Gemeinsame Kontrollen (CC1-CC9)" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: "Diese Kontrollen sind für alle SOC 2 Audits erforderlich und bilden das Fundament der Sicherheitsarchitektur." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                  { id: "CC1", title: "Control Environment", desc: "Governance, Integrität und ethische Werte" },
                  { id: "CC2", title: "Communication", desc: "Interne und externe Kommunikation" },
                  { id: "CC3", title: "Risk Assessment", desc: "Risikobewertung und -management" },
                  { id: "CC4", title: "Monitoring", desc: "Überwachung der Kontrollaktivitäten" },
                  { id: "CC5", title: "Control Activities", desc: "Implementierung von Kontrollen" },
                  { id: "CC6", title: "Logical Access", desc: "Zugriffskontrolle und Authentifizierung" },
                  { id: "CC7", title: "System Operations", desc: "Systembetrieb und Monitoring" },
                  { id: "CC8", title: "Change Management", desc: "Änderungsmanagement" },
                  { id: "CC9", title: "Risk Mitigation", desc: "Risikominderung und Vendor Management" }
                ].map((control, index) => /* @__PURE__ */ jsx("div", { className: "bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-white", children: [
                      control.id,
                      " - ",
                      control.title
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mt-1", children: control.desc })
                  ] }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-slate-400" })
                ] }) }, index)) })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "audit-prozess", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "SOC 2 Audit Process" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("audit-process"),
                    variant: completedSections.includes("audit-process") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("audit-process") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-yellow-300 mb-6", children: "Audit-Phasen Übersicht" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                  { phase: "1. Pre-Audit Phase", duration: "2-4 Wochen", tasks: ["Auditor Selection", "Scope Definition", "Timeline Planning", "Contract Negotiation"] },
                  { phase: "2. Planning Phase", duration: "1-2 Wochen", tasks: ["System Understanding", "Risk Assessment", "Control Testing Plan", "Sample Selection"] },
                  { phase: "3. Fieldwork Phase", duration: "3-6 Wochen", tasks: ["Control Testing", "Evidence Review", "Interviews", "Walkthroughs"] },
                  { phase: "4. Reporting Phase", duration: "2-3 Wochen", tasks: ["Draft Report", "Management Response", "Final Report", "Report Distribution"] }
                ].map((phase, index) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: phase.phase }),
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-yellow-300 border-yellow-500/30", children: phase.duration })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-2", children: phase.tasks.map((task, taskIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-slate-300", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mr-2 flex-shrink-0" }),
                    task
                  ] }, taskIndex)) })
                ] }, index)) })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "ueberwachung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Continuous Monitoring" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("continuous"),
                    variant: completedSections.includes("continuous") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("continuous") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-teal-300 mb-4", children: "Kontinuierliche Überwachung" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: "Implementierung von kontinuierlichen Monitoring-Prozessen zur Aufrechterhaltung der SOC 2 Compliance." }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: "Monitoring-Bereiche" }),
                    ["Security Controls", "Access Management", "Change Management", "Incident Response", "Vendor Management"].map((area, index) => /* @__PURE__ */ jsx("div", { className: "bg-slate-800/50 rounded-lg p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-slate-300", children: [
                      /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-teal-400 mr-2" }),
                      area
                    ] }) }, index))
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: "Automation Tools" }),
                    ["SIEM Systems", "GRC Platforms", "Identity Management", "Vulnerability Scanners", "Log Analytics"].map((tool, index) => /* @__PURE__ */ jsx("div", { className: "bg-slate-800/50 rounded-lg p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-slate-300", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-teal-400 mr-2" }),
                      tool
                    ] }) }, index))
                  ] })
                ] })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "tools", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
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
                    onClick: () => handleSectionComplete("tools"),
                    variant: completedSections.includes("tools") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("tools") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-violet-300 mb-6", children: "SOC 2 Automation Stack" }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                  {
                    category: "GRC Platforms",
                    tools: ["Vanta", "Drata", "Strike Graph", "A-LIGN"],
                    icon: Shield
                  },
                  {
                    category: "Security Tools",
                    tools: ["Okta", "AWS CloudTrail", "Splunk", "CrowdStrike"],
                    icon: Lock
                  },
                  {
                    category: "Monitoring",
                    tools: ["DataDog", "New Relic", "PagerDuty", "Prometheus"],
                    icon: Monitor
                  }
                ].map((stack, index) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-3", children: [
                    /* @__PURE__ */ jsx(stack.icon, { className: "h-5 w-5 text-violet-400 mr-2" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: stack.category })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: stack.tools.map((tool, toolIndex) => /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-300 flex items-center", children: [
                    /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3 text-violet-400 mr-2" }),
                    tool
                  ] }, toolIndex)) })
                ] }, index)) })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "zertifizierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Certification Path" }),
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
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-amber-300 mb-6", children: "Zertifizierungsweg" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                  { step: "Type I Readiness", timeline: "3-6 Monate", desc: "Kontroll-Design und Implementierung" },
                  { step: "Type I Audit", timeline: "4-6 Wochen", desc: "Design-Effektivitäts-Assessment" },
                  { step: "Operating Period", timeline: "6-12 Monate", desc: "Kontinuierlicher Betrieb der Kontrollen" },
                  { step: "Type II Audit", timeline: "6-8 Wochen", desc: "Betriebs-Effektivitäts-Prüfung" },
                  { step: "Certification", timeline: "2-3 Wochen", desc: "Finale Berichtserstellung" }
                ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm", children: index + 1 }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: step.step }),
                      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-amber-300 border-amber-500/30", children: step.timeline })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mt-1", children: step.desc })
                  ] })
                ] }, index)) })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "vorteile", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Business Benefits" }),
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
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-emerald-300 mb-6", children: "ROI und Business Value" }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                  { benefit: "Sales Enablement", impact: "+40% Deal Velocity", desc: "Schnellere Sales-Zyklen durch vertrauen" },
                  { benefit: "Risk Reduction", impact: "-75% Security Incidents", desc: "Proaktive Risikominimierung" },
                  { benefit: "Competitive Advantage", impact: "95% RFP Requirements", desc: "Marktvorteile bei Ausschreibungen" },
                  { benefit: "Operational Excellence", impact: "+60% Process Efficiency", desc: "Verbesserte interne Prozesse" },
                  { benefit: "Customer Trust", impact: "+85% Retention Rate", desc: "Erhöhte Kundenbindung" },
                  { benefit: "Insurance Benefits", impact: "-30% Premium Costs", desc: "Reduzierte Versicherungskosten" }
                ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: item.benefit }),
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-emerald-400 mb-2", children: item.impact }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: item.desc })
                ] }, index)) })
              ] }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "ressourcen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Resources & Templates" }),
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
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6", children: "Download-Center" }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  { title: "SOC 2 Readiness Checklist", type: "PDF", desc: "Vollständige Checkliste für SOC 2 Vorbereitung" },
                  { title: "Control Matrix Template", type: "Excel", desc: "Vorkonfigurierte Kontroll-Matrix" },
                  { title: "Evidence Collection Guide", type: "PDF", desc: "Leitfaden für Evidence-Sammlung" },
                  { title: "System Description Template", type: "Word", desc: "Vorlage für System-Beschreibung" },
                  { title: "Risk Assessment Framework", type: "Excel", desc: "Framework für Risikobewertung" },
                  { title: "Incident Response Playbook", type: "PDF", desc: "Vordefinierte Incident-Prozesse" }
                ].map((resource, index) => /* @__PURE__ */ jsx("div", { className: "bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors group", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white group-hover:text-blue-300 transition-colors", children: resource.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mt-1", children: resource.desc }),
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-blue-300 border-blue-500/30 mt-2", children: resource.type })
                  ] }),
                  /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" })
                ] }) }, index)) })
              ] }) })
            ] }) })
          }
        ) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Soc2Guide as default
};
