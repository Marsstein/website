import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { B as Breadcrumb, a as BreadcrumbList, b as BreadcrumbItem, c as BreadcrumbLink, d as BreadcrumbSeparator, e as BreadcrumbPage } from "./breadcrumb-DSl7nM0Z.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Link } from "react-router-dom";
import { Shield, Scale, Lock, Brain, Users, Code, Sparkles, ArrowRight, Download, Euro, CheckCircle2, TrendingUp, Timer, FileText, Car, Heart, Home, Umbrella, Briefcase, Database, Globe, FileCheck, Clock, AlertCircle, FileSignature, AlertTriangle, CreditCard, Activity, Settings, Workflow, UserCheck, CheckSquare, Square, FileX, Bot, Info, Search, MessageSquare, Headphones, Smartphone, Eye, Ban, UserX, RefreshCw, BarChart3, Award, X, ShieldCheck, Rocket, Calendar, Landmark, BookOpen, Building2, ChevronDown } from "lucide-react";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "react-helmet-async";
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
const InsurtechComplianceGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedInsuranceType, setSelectedInsuranceType] = useState("auto");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [complianceScore, setComplianceScore] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Shield },
    { id: "regulatorik", label: "Regulatorik", icon: Scale },
    { id: "datenschutz", label: "Datenschutz", icon: Lock },
    { id: "ki-compliance", label: "KI & Automatisierung", icon: Brain },
    { id: "kundenreise", label: "Customer Journey", icon: Users },
    { id: "implementierung", label: "Implementierung", icon: Code }
  ];
  const scrollToSection = (sectionId) => {
    window.history.pushState(null, "", `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y2 = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y2, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 150;
      setShowScrollTop(window.scrollY > 500);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = window.scrollY + top;
          const elementBottom = window.scrollY + bottom;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    const hash = window.location.hash.replace("#", "");
    if (hash && navigationItems.some((item) => item.id === hash)) {
      setTimeout(() => scrollToSection(hash), 100);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleCheckedItem = (itemId) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };
  useEffect(() => {
    const totalItems = 24;
    const score = Math.round(checkedItems.size / totalItems * 100);
    setComplianceScore(score);
  }, [checkedItems]);
  const insuranceTypes = [
    { id: "auto", label: "KFZ-Versicherung", icon: Car, color: "blue" },
    { id: "health", label: "Krankenversicherung", icon: Heart, color: "red" },
    { id: "life", label: "Lebensversicherung", icon: Users, color: "green" },
    { id: "property", label: "Sachversicherung", icon: Home, color: "orange" },
    { id: "liability", label: "Haftpflicht", icon: Umbrella, color: "purple" },
    { id: "business", label: "Gewerbeversicherung", icon: Briefcase, color: "indigo" }
  ];
  const regulatoryFrameworks = [
    { name: "DSGVO/GDPR", compliance: 95, trend: "+5%" },
    { name: "IDD (Insurance Distribution Directive)", compliance: 88, trend: "+3%" },
    { name: "Solvency II", compliance: 92, trend: "+2%" },
    { name: "AI Act", compliance: 78, trend: "+12%" },
    { name: "DORA", compliance: 85, trend: "+8%" },
    { name: "ESG-Compliance", compliance: 82, trend: "+10%" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-950", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "InsurTech Compliance DSGVO - KI & Digitale Versicherung",
        description: "InsurTech DSGVO Guide: ✓ KI-Compliance ✓ IDD-Konformität ✓ AI Act. Praxisleitfaden für digitale Versicherer. Jetzt lesen!",
        canonical: "/wissen/branchen/insurtech-compliance",
        keywords: "InsurTech Compliance, DSGVO Versicherung, IDD Richtlinie, AI Act InsurTech, Solvency II, DORA Compliance, digitale Versicherung Datenschutz",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Guide",
          "name": "InsurTech Compliance Guide: Innovation trifft Regulatorik",
          "description": "Umfassender Compliance-Leitfaden für InsurTech-Unternehmen mit Fokus auf DSGVO, IDD, AI Act und praktische Implementierung.",
          "audience": {
            "@type": "Audience",
            "audienceType": "InsurTech Companies, Digital Insurance Providers, Insurance Innovators"
          },
          "keywords": "InsurTech, Compliance, DSGVO, IDD, AI Act, Versicherung, Digitalisierung",
          "publisher": {
            "@type": "Organization",
            "name": "Marsstein",
            "url": "https://marsstein.com"
          },
          "datePublished": "2024-01-20",
          "dateModified": (/* @__PURE__ */ new Date()).toISOString()
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "container px-4 py-4", children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/wissen", children: "Wissen" }) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/wissen/branchen", children: "Branchen" }) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "InsurTech Compliance" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" })
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          style: { y, opacity },
          className: "container px-4",
          children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-6", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxs(Badge, { className: "mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0", children: [
                    /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3 mr-1" }),
                    "InsurTech Compliance Excellence"
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight", children: [
                    "InsurTech Compliance:",
                    /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Innovation trifft Regulatorik" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",
                children: "Der umfassende Leitfaden für rechtskonforme Digitalisierung in der Versicherungsbranche. Von DSGVO über IDD bis zum AI Act – alle Compliance-Anforderungen für moderne InsurTech-Lösungen."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "flex flex-col sm:flex-row gap-4 justify-center pt-8",
                children: [
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white group min-h-[48px] px-6",
                      onClick: () => scrollToSection("ueberblick"),
                      children: [
                        /* @__PURE__ */ jsx(Shield, { className: "mr-2 h-5 w-5" }),
                        "Compliance-Check starten",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "border-gray-300 dark:border-gray-700 min-h-[48px] px-6",
                      children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "Whitepaper herunterladen"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.6 },
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-12",
                children: [
                  { label: "Bußgelder vermieden", value: "€2.8M+", icon: Euro, color: "text-green-600" },
                  { label: "Compliance-Rate", value: "98.5%", icon: CheckCircle2, color: "text-blue-600" },
                  { label: "Prozesse optimiert", value: "150+", icon: TrendingUp, color: "text-purple-600" },
                  { label: "ROI in Monaten", value: "< 6", icon: Timer, color: "text-orange-600" }
                ].map((stat, index) => /* @__PURE__ */ jsxs(Card, { className: "p-4 hover:shadow-md transition-shadow", children: [
                  /* @__PURE__ */ jsx(stat.icon, { className: `h-8 w-8 ${stat.color} mb-2` }),
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: stat.value }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: stat.label })
                ] }, index))
              }
            )
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-3 scrollbar-thin", children: navigationItems.map((item) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => scrollToSection(item.id),
          className: cn(
            "flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all min-h-[48px]",
            activeSection === item.id ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-medium" : "hover:bg-blue-50 dark:hover:bg-blue-950/30 text-gray-600 dark:text-gray-400"
          ),
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: item.label })
          ]
        },
        item.id
      );
    }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
      /* @__PURE__ */ jsx("section", { className: "mb-12", children: /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-600" }),
          "Inhaltsverzeichnis"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: navigationItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToSection(item.id),
            className: "flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors py-2 w-full text-left min-h-[44px]",
            children: [
              /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: item.label })
            ]
          }
        ) }, item.id)) }) }) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { id: "ueberblick", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "InsurTech Compliance-Landschaft 2024" }),
              /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed", children: [
                "Die Versicherungsbranche durchläuft eine digitale Revolution. Mit neuen Technologien kommen neue regulatorische Herausforderungen – von ",
                /* @__PURE__ */ jsx(Link, { to: "/dsgvo-compliance", className: "text-blue-600 hover:underline", children: "Datenschutz" }),
                " über KI-Ethik bis zur digitalen Resilienz. Nutzen Sie unseren ",
                /* @__PURE__ */ jsx(Link, { to: "/tools/consent-generator", className: "text-blue-600 hover:underline", children: "Consent Generator" }),
                " für rechtssichere Einwilligungen. Erfahren Sie mehr über ",
                /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/travel-compliance", className: "text-blue-600 hover:underline", children: "Travel Compliance" }),
                " oder ",
                /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/proptech-compliance", className: "text-blue-600 hover:underline", children: "PropTech Compliance" }),
                "."
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold text-gray-900 dark:text-white", children: "Ihr Compliance-Score" }),
            /* @__PURE__ */ jsxs(
              Badge,
              {
                variant: complianceScore > 80 ? "default" : complianceScore > 60 ? "secondary" : "destructive",
                className: "text-lg px-3 py-1",
                children: [
                  complianceScore,
                  "%"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Progress,
            {
              value: complianceScore,
              className: "h-4 mb-6"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: regulatoryFrameworks.map((framework, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              whileHover: { scale: 1.05 },
              className: "p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: framework.name }),
                /* @__PURE__ */ jsxs("div", { className: "text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400", children: [
                  framework.compliance,
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: framework.trend })
              ]
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-4", children: "Wählen Sie Ihren Versicherungsbereich" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3", children: insuranceTypes.map((type) => {
            const Icon = type.icon;
            return /* @__PURE__ */ jsxs(
              motion.button,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                onClick: () => setSelectedInsuranceType(type.id),
                className: cn(
                  "p-4 rounded-lg border-2 transition-all",
                  selectedInsuranceType === type.id ? `border-${type.color}-500 bg-${type.color}-50 dark:bg-${type.color}-950/20` : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                ),
                children: [
                  /* @__PURE__ */ jsx(Icon, { className: cn(
                    "h-8 w-8 mx-auto mb-2",
                    selectedInsuranceType === type.id ? `text-${type.color}-600` : "text-gray-500"
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "text-sm font-medium",
                    selectedInsuranceType === type.id ? `text-${type.color}-700 dark:text-${type.color}-400` : "text-gray-700 dark:text-gray-300"
                  ), children: type.label })
                ]
              },
              type.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          {
            icon: Database,
            title: "Datenintensive Prozesse",
            description: "Gesundheitsdaten, Telematik, IoT-Sensoren – massive Datenmengen rechtskonform verarbeiten",
            risk: "Hoch",
            color: "red"
          },
          {
            icon: Brain,
            title: "KI & Automatisierung",
            description: "Risikobewertung, Schadensregulierung und Betrugserkennung mit AI Act-konformer KI",
            risk: "Mittel",
            color: "yellow"
          },
          {
            icon: Globe,
            title: "Cross-Border Compliance",
            description: "Internationale Datentransfers und unterschiedliche Regulierungen in EU-Märkten",
            risk: "Hoch",
            color: "red"
          },
          {
            icon: Users,
            title: "Kundenrechte",
            description: "Transparenz, Auskunftsrechte und Datenportabilität in digitalen Kanälen",
            risk: "Mittel",
            color: "yellow"
          },
          {
            icon: Shield,
            title: "Cyber-Resilienz",
            description: "DORA-Anforderungen und Schutz sensibler Versicherungsdaten",
            risk: "Kritisch",
            color: "red"
          },
          {
            icon: FileCheck,
            title: "Dokumentationspflichten",
            description: "Audit-Trails, Verarbeitungsverzeichnisse und Compliance-Nachweise",
            risk: "Mittel",
            color: "yellow"
          }
        ].map((challenge, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: index * 0.1 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: cn(
              "h-full border-l-4",
              challenge.color === "red" ? "border-red-500" : "border-yellow-500"
            ), children: [
              /* @__PURE__ */ jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsx(challenge.icon, { className: "h-8 w-8 text-blue-600 dark:text-blue-400" }),
                  /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      variant: challenge.risk === "Kritisch" || challenge.risk === "Hoch" ? "destructive" : "secondary",
                      children: [
                        challenge.risk,
                        " Risiko"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg mt-3", children: challenge.title })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-600 dark:text-gray-400", children: challenge.description }) })
            ] })
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "regulatorik", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Regulatorisches Framework für InsurTech" }),
              /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed", children: "Ein komplexes Geflecht aus Datenschutz, Finanzaufsicht und Tech-Regulierung prägt die Compliance-Landschaft für digitale Versicherungslösungen." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-6", children: "Regulatorische Meilensteine" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            { date: "2018", title: "DSGVO", description: "Datenschutz-Grundverordnung tritt in Kraft", status: "active" },
            { date: "2018", title: "IDD", description: "Insurance Distribution Directive wird wirksam", status: "active" },
            { date: "2023", title: "DORA", description: "Digital Operational Resilience Act verabschiedet", status: "active" },
            { date: "2024", title: "AI Act", description: "KI-Verordnung tritt schrittweise in Kraft", status: "upcoming" },
            { date: "2025", title: "DORA", description: "Vollständige Anwendung ab Januar 2025", status: "upcoming" },
            { date: "2026", title: "AI Act", description: "Vollständige Compliance-Anforderungen", status: "future" }
          ].map((milestone, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              className: "flex items-center gap-4",
              children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "w-16 h-16 rounded-full flex items-center justify-center font-bold",
                  milestone.status === "active" ? "bg-green-100 text-green-700" : milestone.status === "upcoming" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"
                ), children: milestone.date }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white", children: milestone.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: milestone.description })
                ] }),
                milestone.status === "active" && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600" }),
                milestone.status === "upcoming" && /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-yellow-600" })
              ]
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx(Lock, { className: "h-8 w-8 text-blue-600" }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold", children: "DSGVO in der Versicherung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Besondere Herausforderungen" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm md:text-base", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Gesundheitsdaten nach Art. 9 DSGVO (Krankenversicherung)" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Telematik-Daten und Fahrerprofile (KFZ-Versicherung)" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Profiling für Risikobewertung und Pricing" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Datenübermittlung an Rückversicherer" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Rechtsgrundlagen" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
                  { base: "Art. 6 Abs. 1 lit. b", desc: "Vertragserfüllung" },
                  { base: "Art. 6 Abs. 1 lit. f", desc: "Berechtigte Interessen" },
                  { base: "Art. 9 Abs. 2 lit. a", desc: "Einwilligung (Gesundheit)" },
                  { base: "Art. 22", desc: "Automatisierte Entscheidungen" }
                ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 rounded p-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-blue-600", children: item.base }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: item.desc })
                ] }, idx)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx(FileSignature, { className: "h-8 w-8 text-purple-600" }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold", children: "IDD-Compliance" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Digitale Beratungspflichten" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm md:text-base", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Anforderungsgerechte Beratung auch in Apps" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Dokumentation der Kundenberatung" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Produktinformationsblätter (IPID) digital bereitstellen" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Interessenkonflikte bei Robo-Advisory" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Beratungsprotokoll" }),
                  /* @__PURE__ */ jsx(Badge, { children: "Pflicht" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Geeignetheitsprüfung" }),
                  /* @__PURE__ */ jsx(Badge, { children: "Automatisierbar" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Fortbildungsnachweis" }),
                  /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "15h/Jahr" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-100 dark:bg-red-900/50 rounded-full", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-600" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold text-red-900 dark:text-red-100 mb-2", children: "Bußgeldrisiken im InsurTech-Bereich" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-red-700 dark:text-red-300", children: "DSGVO-Verstöße" }),
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-red-900 dark:text-red-100", children: "bis zu 20 Mio. €" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-red-600 dark:text-red-400", children: "oder 4% des weltweiten Jahresumsatzes" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-red-700 dark:text-red-300", children: "IDD-Verstöße" }),
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-red-900 dark:text-red-100", children: "bis zu 5 Mio. €" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-red-600 dark:text-red-400", children: "plus Geschäftsverbot möglich" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-800 dark:text-red-200", children: [
              /* @__PURE__ */ jsx("strong", { children: "Aktuelle Entwicklung:" }),
              " BaFin verstärkt Prüfungen bei digitalen Versicherungsvermittlern und InsurTech-Startups. Fokus auf Datenschutz und ordnungsgemäße Beratungsdokumentation."
            ] }) })
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "datenschutz", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4", id: "datenschutz", children: "Datenschutz in InsurTech-Anwendungen" }),
              /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed", children: "Von der Risikobewertung bis zur Schadensregulierung – Datenschutz durchzieht jeden Aspekt moderner Versicherungslösungen." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          {
            icon: Heart,
            title: "Gesundheitsdaten",
            category: "Besondere Kategorien (Art. 9)",
            examples: ["Diagnosen", "Behandlungsverläufe", "Fitness-Tracker", "Medikation"],
            requirements: ["Explizite Einwilligung", "Erhöhte Sicherheit", "Zweckbindung", "Minimale Speicherdauer"]
          },
          {
            icon: Car,
            title: "Telematik-Daten",
            category: "Verhaltens- und Standortdaten",
            examples: ["Fahrverhalten", "GPS-Standorte", "Geschwindigkeit", "Bremsverhalten"],
            requirements: ["Transparente Information", "Opt-in Modelle", "Anonymisierung", "Löschkonzepte"]
          },
          {
            icon: Home,
            title: "Smart Home Daten",
            category: "IoT-Sensordaten",
            examples: ["Raumtemperatur", "Bewegungsmelder", "Wassermelder", "Einbruchsensoren"],
            requirements: ["Privacy by Design", "Edge Computing", "Verschlüsselung", "Zugriffskontrolle"]
          },
          {
            icon: CreditCard,
            title: "Finanzdaten",
            category: "Zahlungs- und Bonitätsdaten",
            examples: ["Einkommen", "Schufa-Score", "Zahlungshistorie", "Kontodaten"],
            requirements: ["PSD2-Konformität", "Sichere APIs", "Minimale Abfragen", "Audit-Logs"]
          },
          {
            icon: Users,
            title: "Familiendaten",
            category: "Personenbezogene Drittdaten",
            examples: ["Mitversicherte", "Begünstigte", "Familienstand", "Kinder"],
            requirements: ["Informationspflichten", "Separate Einwilligungen", "Betroffenenrechte", "Datentrennung"]
          },
          {
            icon: Activity,
            title: "Verhaltensdaten",
            category: "Profiling und Scoring",
            examples: ["App-Nutzung", "Kommunikation", "Schadensmeldungen", "Präferenzen"],
            requirements: ["Art. 22 DSGVO", "Erklärbarkeit", "Widerspruchsrecht", "Human Oversight"]
          }
        ].map((dataType, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: index * 0.1 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-100 dark:bg-blue-950 rounded-lg", children: /* @__PURE__ */ jsx(dataType.icon, { className: "h-6 w-6 text-blue-600 dark:text-blue-400" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: dataType.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: dataType.category })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-2", children: "Beispieldaten:" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: dataType.examples.map((example, idx) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: example }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-2", children: "Anforderungen:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: dataType.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-500" }),
                    req
                  ] }, idx)) })
                ] })
              ] })
            ] })
          },
          index
        )) }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-6", children: "Privacy by Design für InsurTech" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-blue-600" }),
                "Technische Maßnahmen"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                {
                  title: "Ende-zu-Ende Verschlüsselung",
                  desc: "Alle Gesundheits- und Finanzdaten verschlüsselt übertragen und speichern"
                },
                {
                  title: "Pseudonymisierung",
                  desc: "Trennung von Identitäts- und Verhaltensdaten in der Risikobewertung"
                },
                {
                  title: "Differential Privacy",
                  desc: "Statistische Analysen ohne Rückschlüsse auf Einzelpersonen"
                },
                {
                  title: "Zero-Knowledge Proofs",
                  desc: "Altersverifikation ohne Geburtsdatum-Übermittlung"
                }
              ].map((measure, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-3", children: [
                /* @__PURE__ */ jsx("h5", { className: "font-medium text-sm", children: measure.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 mt-1", children: measure.desc })
              ] }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Workflow, { className: "h-5 w-5 text-indigo-600" }),
                "Organisatorische Maßnahmen"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                {
                  title: "Datenschutz-Folgenabschätzung",
                  desc: "DSFA für alle KI-basierten Risikobewertungen und Profiling-Prozesse"
                },
                {
                  title: "Privacy Engineering Team",
                  desc: "Dedizierte Experten für datenschutzfreundliche Systemarchitektur"
                },
                {
                  title: "Consent Management Platform",
                  desc: "Granulare Einwilligungsverwaltung über alle Touchpoints"
                },
                {
                  title: "Automated Compliance Checks",
                  desc: "Kontinuierliche Überprüfung der Datenverarbeitungsprozesse"
                }
              ].map((measure, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-3", children: [
                /* @__PURE__ */ jsx("h5", { className: "font-medium text-sm", children: measure.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 mt-1", children: measure.desc })
              ] }, idx)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg md:text-xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6 text-green-600" }),
            "Einwilligungsmanagement für Versicherungen"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxs(Card, { className: "p-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Granulare Einwilligungen" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
                "Telematik-Datenerfassung",
                "Gesundheitsdaten-Verarbeitung",
                "Marketing-Kommunikation",
                "Datenübermittlung an Partner",
                "KI-basierte Risikobewertung"
              ].map((consent, idx) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded cursor-pointer hover:bg-gray-50",
                  onClick: () => toggleCheckedItem(`consent-${idx}`),
                  children: [
                    checkedItems.has(`consent-${idx}`) ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-green-600" }) : /* @__PURE__ */ jsx(Square, { className: "h-4 w-4 text-gray-400" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: consent })
                  ]
                },
                idx
              )) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Best Practices" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: "Eindeutige Zweckbestimmung" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: "Einfacher Widerruf möglich" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: "Keine Kopplung an Vertragsschluss" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: "Verständliche Sprache" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: "Dokumentation & Nachweis" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Widerrufsprozess" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "In-App Widerruf" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Aktiv" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "E-Mail Widerruf" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Aktiv" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Automatische Löschung" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "24h" })
                ] }),
                /* @__PURE__ */ jsxs(Button, { className: "w-full", variant: "outline", size: "sm", children: [
                  /* @__PURE__ */ jsx(FileX, { className: "h-4 w-4 mr-2" }),
                  "Widerruf testen"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "ki-compliance", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4", id: "ki-compliance", children: "KI & Automatisierung im Versicherungswesen" }),
              /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed", children: "Von der Risikobewertung bis zur automatisierten Schadensregulierung – KI revolutioniert die Versicherungsbranche. Mit dem AI Act kommen neue Compliance-Anforderungen." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 border-2 border-purple-200 dark:border-purple-800", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg md:text-xl font-bold mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Brain, { className: "h-6 w-6 text-purple-600" }),
            "KI-Risikostufen nach AI Act"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            {
              level: "Hochrisiko",
              color: "red",
              applications: [
                "Automatisierte Versicherungsentscheidungen",
                "Gesundheitsrisiko-Bewertung",
                "Betrugserkennung mit Konsequenzen"
              ],
              requirements: [
                "Konformitätsbewertung",
                "CE-Kennzeichnung",
                "Risikomanagementsystem",
                "Menschliche Aufsicht"
              ]
            },
            {
              level: "Begrenztes Risiko",
              color: "yellow",
              applications: [
                "Chatbots für Kundenservice",
                "Emotionserkennung bei Claims",
                "Personalisierte Angebote"
              ],
              requirements: [
                "Transparenzpflichten",
                "Kennzeichnung als KI",
                "Opt-out Möglichkeit",
                "Informationspflichten"
              ]
            },
            {
              level: "Minimales Risiko",
              color: "green",
              applications: [
                "Interne Prozessoptimierung",
                "Dokumentenanalyse",
                "Spam-Filter"
              ],
              requirements: [
                "Freiwillige Verhaltenskodizes",
                "Best Practices",
                "Ethik-Guidelines",
                "Keine spezifischen Pflichten"
              ]
            }
          ].map((risk, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "rounded-lg border-2 p-4",
                risk.color === "red" ? "border-red-300 bg-red-50 dark:bg-red-950/20" : risk.color === "yellow" ? "border-yellow-300 bg-yellow-50 dark:bg-yellow-950/20" : "border-green-300 bg-green-50 dark:bg-green-950/20"
              ),
              children: [
                /* @__PURE__ */ jsx(
                  Badge,
                  {
                    variant: risk.color === "red" ? "destructive" : risk.color === "yellow" ? "secondary" : "default",
                    className: "mb-3",
                    children: risk.level
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Anwendungen:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: risk.applications.map((app, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs flex items-start gap-1", children: [
                      /* @__PURE__ */ jsx(Bot, { className: "h-3 w-3 mt-0.5" }),
                      app
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Anforderungen:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: risk.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs flex items-start gap-1", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 mt-0.5 text-green-600" }),
                      req
                    ] }, idx)) })
                  ] })
                ] })
              ]
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: "KI im Underwriting" }),
              /* @__PURE__ */ jsx(Badge, { variant: "destructive", children: "Hochrisiko" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-2", children: "Compliance-Anforderungen:" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Erklärbarkeit der Entscheidungen (Art. 13 AI Act)" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Diskriminierungsfreie Algorithmen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Human-in-the-Loop für finale Entscheidungen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Kontinuierliche Überwachung auf Bias" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-2", children: "Best Practice Beispiel:" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Zweistufiges Modell: KI erstellt Risikobewertung mit Erklärung, qualifizierter Underwriter trifft finale Entscheidung. Alle KI-Vorschläge werden geloggt und regelmäßig auf Fairness geprüft." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: "KI in der Schadensregulierung" }),
              /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Begrenztes Risiko" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-2", children: "Anwendungsfälle:" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
                  { use: "Bilderkennung", desc: "Schadensausmaß bewerten" },
                  { use: "NLP", desc: "Schadensmeldungen kategorisieren" },
                  { use: "Predictive Analytics", desc: "Betrugswahrscheinlichkeit" },
                  { use: "Automation", desc: "Kleinschäden automatisiert" }
                ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-700 rounded p-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold", children: item.use }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: item.desc })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-950/30 rounded-lg p-4", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-2", children: "Transparenzpflichten:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-yellow-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Kunde über KI-Nutzung informieren" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-yellow-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Möglichkeit menschlicher Überprüfung" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-yellow-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Erklärung der automatisierten Entscheidung" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-6", children: "Algorithmic Fairness & Bias Prevention" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            {
              metric: "Gender Parity",
              score: 94,
              trend: "stable",
              description: "Gleichbehandlung der Geschlechter"
            },
            {
              metric: "Age Fairness",
              score: 87,
              trend: "improving",
              description: "Keine Altersdiskriminierung"
            },
            {
              metric: "Geographic Equity",
              score: 91,
              trend: "stable",
              description: "Regionale Gleichbehandlung"
            },
            {
              metric: "Income Neutrality",
              score: 82,
              trend: "needs attention",
              description: "Einkommensunabhängige Bewertung"
            }
          ].map((metric, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm", children: metric.metric }),
              metric.trend === "improving" && /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-600" }),
              metric.trend === "stable" && /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-blue-600" }),
              metric.trend === "needs attention" && /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-600" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative pt-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex mb-2 items-center justify-between", children: [
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200", children: "Score" }) }),
                /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold inline-block text-purple-600", children: [
                  metric.score,
                  "%"
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: metric.score, className: "h-2" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 mt-2", children: metric.description })
          ] }, idx)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "kundenreise", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4", id: "kundenreise", children: "Compliance-konforme Customer Journey" }),
              /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed", children: "Jeder Touchpoint der digitalen Kundenreise muss Datenschutz, Transparenz und regulatorische Anforderungen erfüllen." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
          {
            stage: "1. Awareness & Research",
            icon: Search,
            color: "blue",
            touchpoints: ["Website", "Social Media", "Vergleichsportale", "Apps"],
            compliance: [
              { req: "Cookie-Consent (ePrivacy)", status: "critical" },
              { req: "Transparente Datenverarbeitung", status: "required" },
              { req: "Opt-out für Tracking", status: "required" },
              { req: "Keine Dark Patterns", status: "required" }
            ]
          },
          {
            stage: "2. Beratung & Angebot",
            icon: MessageSquare,
            color: "indigo",
            touchpoints: ["Chatbot", "Video-Beratung", "Robo-Advisor", "Kalkulator"],
            compliance: [
              { req: "IDD-konforme Beratung", status: "critical" },
              { req: "Bedarfsanalyse dokumentiert", status: "critical" },
              { req: "KI-Kennzeichnung", status: "required" },
              { req: "Aufzeichnung mit Einwilligung", status: "required" }
            ]
          },
          {
            stage: "3. Abschluss & Onboarding",
            icon: FileSignature,
            color: "purple",
            touchpoints: ["E-Signature", "Video-Ident", "App-Onboarding", "Welcome-Journey"],
            compliance: [
              { req: "eIDAS-konforme Signatur", status: "critical" },
              { req: "GwG-konforme Identifikation", status: "critical" },
              { req: "Widerrufsbelehrung", status: "critical" },
              { req: "Datenschutzerklärung akzeptiert", status: "required" }
            ]
          },
          {
            stage: "4. Nutzung & Service",
            icon: Headphones,
            color: "green",
            touchpoints: ["Self-Service Portal", "App", "Chatbot", "Hotline"],
            compliance: [
              { req: "Sichere Authentifizierung", status: "critical" },
              { req: "Verschlüsselte Kommunikation", status: "critical" },
              { req: "Auskunftsrecht gewährleistet", status: "required" },
              { req: "Änderungen nachvollziehbar", status: "required" }
            ]
          },
          {
            stage: "5. Schadensmeldung",
            icon: AlertTriangle,
            color: "orange",
            touchpoints: ["Schaden-App", "Foto-Upload", "KI-Bewertung", "Status-Tracking"],
            compliance: [
              { req: "Datensparsamkeit", status: "critical" },
              { req: "Zweckbindung der Daten", status: "critical" },
              { req: "Löschfristen definiert", status: "required" },
              { req: "Transparente KI-Nutzung", status: "required" }
            ]
          }
        ].map((journey, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: index * 0.1 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: `border-l-4 border-${journey.color}-500`, children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: `p-3 bg-${journey.color}-100 dark:bg-${journey.color}-950 rounded-lg`, children: /* @__PURE__ */ jsx(journey.icon, { className: `h-6 w-6 text-${journey.color}-600` }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold", children: journey.stage })
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Digital Touchpoints" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: journey.touchpoints.map((touchpoint, idx) => /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-3 py-1", children: [
                    /* @__PURE__ */ jsx(Smartphone, { className: "h-3 w-3 mr-1" }),
                    touchpoint
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Compliance-Anforderungen" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: journey.compliance.map((comp, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: comp.req }),
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: comp.status === "critical" ? "destructive" : "secondary",
                        className: "text-xs",
                        children: comp.status === "critical" ? "Kritisch" : "Erforderlich"
                      }
                    )
                  ] }, idx)) })
                ] })
              ] }) })
            ] })
          },
          index
        )) }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-6", children: "Kundenrechte-Dashboard" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            {
              right: "Auskunft",
              icon: Eye,
              timeframe: "30 Tage",
              automated: true,
              description: "Vollständige Datenübersicht"
            },
            {
              right: "Berichtigung",
              icon: FileCheck,
              timeframe: "Unverzüglich",
              automated: true,
              description: "Fehlerhafte Daten korrigieren"
            },
            {
              right: "Löschung",
              icon: FileX,
              timeframe: "Unverzüglich",
              automated: false,
              description: "Recht auf Vergessenwerden"
            },
            {
              right: "Datenportabilität",
              icon: Download,
              timeframe: "30 Tage",
              automated: true,
              description: "Daten in strukturiertem Format"
            },
            {
              right: "Widerspruch",
              icon: Ban,
              timeframe: "Unverzüglich",
              automated: true,
              description: "Verarbeitung widersprechen"
            },
            {
              right: "Einschränkung",
              icon: Lock,
              timeframe: "Unverzüglich",
              automated: false,
              description: "Verarbeitung einschränken"
            },
            {
              right: "Keine Automation",
              icon: UserX,
              timeframe: "Sofort",
              automated: true,
              description: "Menschliche Entscheidung"
            },
            {
              right: "Widerruf",
              icon: RefreshCw,
              timeframe: "Sofort",
              automated: true,
              description: "Einwilligung zurückziehen"
            }
          ].map((right, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsx(right.icon, { className: "h-5 w-5 text-blue-600" }),
              right.automated ? /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Automatisiert" }) : /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Manuell" })
            ] }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm", children: right.right }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 mt-1", children: right.description }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 text-xs text-gray-500", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 inline mr-1" }),
              right.timeframe
            ] })
          ] }, idx)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "implementierung", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4", id: "implementierung", children: "Praktische Implementierung" }),
              /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed", children: "Von der Strategie zur Umsetzung – so implementieren Sie Compliance in Ihre InsurTech-Lösung." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-6", children: "Compliance Implementation Roadmap" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            {
              phase: "Phase 1: Assessment & Gap-Analyse",
              duration: "4-6 Wochen",
              tasks: [
                "Bestandsaufnahme aller Datenverarbeitungen",
                "Risikobewertung der KI-Systeme",
                "Regulatorische Gap-Analyse",
                "Stakeholder-Mapping"
              ],
              completion: 100
            },
            {
              phase: "Phase 2: Design & Architektur",
              duration: "6-8 Wochen",
              tasks: [
                "Privacy by Design Architektur",
                "Consent Management Design",
                "Datenschutz-Folgenabschätzungen",
                "Technische Konzepte"
              ],
              completion: 85
            },
            {
              phase: "Phase 3: Implementierung",
              duration: "12-16 Wochen",
              tasks: [
                "Technische Umsetzung der TOM",
                "Integration Consent Management",
                "KI-Governance implementieren",
                "Prozesse automatisieren"
              ],
              completion: 60
            },
            {
              phase: "Phase 4: Testing & Validation",
              duration: "4-6 Wochen",
              tasks: [
                "Penetration Testing",
                "Compliance-Audits",
                "KI-Fairness Testing",
                "Betroffenenrechte testen"
              ],
              completion: 30
            },
            {
              phase: "Phase 5: Go-Live & Monitoring",
              duration: "Ongoing",
              tasks: [
                "Schrittweiser Rollout",
                "Continuous Monitoring",
                "Incident Response Setup",
                "Regular Compliance Reviews"
              ],
              completion: 0
            }
          ].map((phase, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: phase.phase }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                  "Dauer: ",
                  phase.duration
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: phase.completion === 100 ? "default" : "secondary", children: [
                phase.completion,
                "% abgeschlossen"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Progress, { value: phase.completion, className: "h-2" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2", children: phase.tasks.map((task, idx) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded",
                onClick: () => toggleCheckedItem(`task-${index}-${idx}`),
                children: [
                  checkedItems.has(`task-${index}-${idx}`) || phase.completion === 100 ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-green-600" }) : /* @__PURE__ */ jsx(Square, { className: "h-4 w-4 text-gray-400" }),
                  /* @__PURE__ */ jsx("span", { className: cn(
                    checkedItems.has(`task-${index}-${idx}`) || phase.completion === 100 ? "line-through text-gray-500" : ""
                  ), children: task })
                ]
              },
              idx
            )) })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-4", children: "Compliance-First Architecture" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// Privacy-by-Design API Gateway
const insuranceAPI = {
  middleware: [
    consentValidator(),
    dataMinimizer(),
    purposeLimiter(),
    auditLogger()
  ],
  
  endpoints: {
    '/quote': {
      requiredConsents: ['marketing', 'profiling'],
      dataRetention: '90 days',
      allowedPurposes: ['quote_generation']
    },
    
    '/claim': {
      requiredConsents: ['claims_processing'],
      dataRetention: '7 years',
      encryption: 'AES-256',
      aiDisclosure: true
    }
  }
};

// Automated Compliance Checks
async function processInsuranceData(data) {
  // 1. Consent verification
  await verifyConsents(data.userId, data.purpose);
  
  // 2. Data minimization
  const minimizedData = minimizeData(data, purpose);
  
  // 3. Purpose limitation
  validatePurpose(data.purpose);
  
  // 4. Audit trail
  await logProcessing(data.userId, purpose);
  
  return processedData;
}` }) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-4", children: "Compliance Tech-Stack" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
              {
                category: "Consent Management",
                tools: ["OneTrust", "Usercentrics", "Cookiebot", "Custom CMP"],
                icon: UserCheck
              },
              {
                category: "Privacy Engineering",
                tools: ["Privacera", "Immuta", "DataGrail", "BigID"],
                icon: Shield
              },
              {
                category: "AI Governance",
                tools: ["IBM Watson OpenScale", "Google Model Cards", "Fiddler AI", "Arthur AI"],
                icon: Brain
              },
              {
                category: "Security & Encryption",
                tools: ["HashiCorp Vault", "AWS KMS", "Azure Key Vault", "HSM Solutions"],
                icon: Lock
              },
              {
                category: "Audit & Monitoring",
                tools: ["Splunk", "Datadog", "Elastic SIEM", "Custom Dashboards"],
                icon: BarChart3
              }
            ].map((stack, idx) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsx(stack.icon, { className: "h-5 w-5 text-blue-600" }),
                /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: stack.category })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: stack.tools.map((tool, toolIdx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: tool }, toolIdx)) })
            ] }, idx)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 border-2 border-green-200 dark:border-green-800", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg md:text-xl font-bold mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-green-600" }),
            "InsurTech Compliance Best Practices"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-700 dark:text-green-300", children: "Do's ✓" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                "Privacy by Design von Anfang an",
                "Transparente KI-Entscheidungen",
                "Granulare Einwilligungen",
                "Regelmäßige Compliance-Audits",
                "Automatisierte Betroffenenrechte",
                "Verschlüsselung für alle Daten",
                "Dokumentierte Verfahren",
                "Schulungen für alle Mitarbeiter"
              ].map((practice, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: practice })
              ] }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-700 dark:text-red-300", children: "Don'ts ✗" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                "Compliance als nachträgliches Add-on",
                "Black-Box KI ohne Erklärbarkeit",
                "Versteckte Datenverarbeitung",
                "Übermäßige Datensammlung",
                "Fehlende Löschkonzepte",
                "Unverschlüsselte Kommunikation",
                "Manuelle Compliance-Prozesse",
                "Ignorieren von Kundenrechten"
              ].map((practice, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: practice })
              ] }, idx)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-6", children: "Compliance Success Metrics" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            { metric: "DSGVO-Anfragen", value: "< 48h", target: "Response Time", icon: Clock },
            { metric: "Consent Rate", value: "87%", target: "Active Consents", icon: UserCheck },
            { metric: "Data Breaches", value: "0", target: "Last 12 Months", icon: ShieldCheck },
            { metric: "Audit Score", value: "96%", target: "Latest Review", icon: Award },
            { metric: "KI Transparenz", value: "100%", target: "Erklärt", icon: Brain },
            { metric: "Verschlüsselung", value: "100%", target: "Coverage", icon: Lock },
            { metric: "Löschanfragen", value: "99%", target: "Automatisiert", icon: FileX },
            { metric: "Compliance ROI", value: "320%", target: "Savings vs Fines", icon: TrendingUp }
          ].map((kpi, idx) => /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
            /* @__PURE__ */ jsx(kpi.icon, { className: "h-8 w-8 mx-auto mb-2 text-blue-600" }),
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: kpi.value }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: kpi.metric }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: kpi.target })
          ] }, idx)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "py-12",
          children: /* @__PURE__ */ jsxs(Card, { className: "relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-white/10" }),
            /* @__PURE__ */ jsxs(CardContent, { className: "relative p-8 md:p-12 text-center", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 2, repeat: Infinity },
                  className: "inline-block mb-6",
                  children: /* @__PURE__ */ jsx(Shield, { className: "h-16 w-16 mx-auto" })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Starten Sie Ihre InsurTech Compliance Journey" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 max-w-2xl mx-auto opacity-90", children: "Nutzen Sie unsere Expertise für rechtskonforme Innovation. Von der Strategie bis zur Implementierung – wir begleiten Sie auf dem Weg zur compliant InsurTech-Lösung." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-blue-600 hover:bg-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-5 w-5" }),
                      "InsurTech Compliance Check",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-white text-white hover:bg-white/10",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                      "Beratungstermin vereinbaren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-8 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
                  /* @__PURE__ */ jsx("span", { children: "DSGVO-konform" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
                  /* @__PURE__ */ jsx("span", { children: "AI Act ready" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
                  /* @__PURE__ */ jsx("span", { children: "IDD-compliant" })
                ] })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Weiterführende Ressourcen" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          {
            title: "FinTech Compliance Guide",
            description: "Regulatorische Anforderungen für digitale Finanzdienstleistungen",
            link: "/wissen/branchen/fintech-compliance",
            icon: Landmark
          },
          {
            title: "Healthcare AI Compliance",
            description: "KI-Einsatz im Gesundheitswesen rechtskonform gestalten",
            link: "/wissen/branchen/healthcare-ai-compliance",
            icon: Brain
          },
          {
            title: "DSGVO Grundlagen",
            description: "Die wichtigsten Datenschutz-Anforderungen im Überblick",
            link: "/wissen/dsgvo-grundlagen",
            icon: BookOpen
          }
        ].map((resource, index) => /* @__PURE__ */ jsx(Link, { to: resource.link, children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-md transition-all hover:border-blue-300 dark:hover:border-blue-700", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(resource.icon, { className: "h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" }),
            /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: resource.title })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: resource.description }) })
        ] }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Verwandte Compliance-Guides" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Plane, { className: "h-5 w-5 text-blue-600" }),
              "Travel Compliance"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "DSGVO-Compliance für die Reisebranche." }),
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/travel-compliance", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
                "Zum Guide ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-blue-600" }),
              "PropTech Compliance"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "DSGVO-Compliance für Immobilientechnologie." }),
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/proptech-compliance", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
                "Zum Guide ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600" }),
              "DSGVO Compliance Guide"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "Umfassender DSGVO-Leitfaden für alle Branchen." }),
              /* @__PURE__ */ jsx(Link, { to: "/dsgvo-compliance", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
                "Zum Guide ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    showScrollTop && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50",
        "aria-label": "Nach oben scrollen",
        children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 rotate-180" })
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  InsurtechComplianceGuide as default
};
