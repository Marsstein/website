import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { Cookie, PlayCircle, Download, Globe, Shield, Zap, Settings, Euro, TrendingDown, Clock, AlertOctagon, Brain, MousePointer, Code, ShieldCheck, BarChart3, CheckCircle2, Building2, Rocket, ArrowRight, Layers, Calendar, Award } from "lucide-react";
import "react-helmet-async";
import "./button-BRnNKcuh.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
const CookieManagementTool = () => {
  const [consentRate, setConsentRate] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cookie Management Tool",
    "description": "DSGVO-konformes Cookie-Consent Management Tool mit granularer Einwilligungsverwaltung",
    "applicationCategory": "Privacy Tool",
    "url": "https://marsstein.com/tools/cookie-management"
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setConsentRate((prev) => {
          if (prev >= 73) {
            clearInterval(interval);
            return 73;
          }
          return prev + 1;
        });
      }, 30);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const painPoints = [
    {
      icon: Euro,
      title: "DSGVO-Bußgelder vermeiden",
      stat: "bis zu 20 Mio. €",
      description: "oder 4% des Jahresumsatzes",
      severity: "critical",
      details: "Fehlende oder unvollständige Cookie-Einwilligungen können zu existenzbedrohenden Strafen führen"
    },
    {
      icon: TrendingDown,
      title: "Conversion-Verluste minimieren",
      stat: "-47% Traffic",
      description: "durch schlechte Cookie-Banner",
      severity: "high",
      details: "Störende oder komplizierte Cookie-Banner vergraulen Besucher und reduzieren Conversions massiv"
    },
    {
      icon: Clock,
      title: "Implementierungsaufwand reduzieren",
      stat: "200+ Stunden",
      description: "für manuelle Implementierung",
      severity: "medium",
      details: "Technische Umsetzung, Rechtsberatung und laufende Updates verschlingen wertvolle Ressourcen"
    },
    {
      icon: AlertOctagon,
      title: "Rechtsunsicherheit eliminieren",
      stat: "89% Unternehmen",
      description: "sind nicht vollständig compliant",
      severity: "critical",
      details: "Sich ändernde Rechtslage und komplexe Anforderungen überfordern viele Unternehmen"
    }
  ];
  const features = [
    {
      icon: Brain,
      title: "KI-gestützte Cookie-Erkennung",
      description: "Automatische Kategorisierung aller Cookies auf Ihrer Website",
      details: ["Scanning aller Subdomains", "Kategorisierung nach DSGVO", "Echtzeit-Updates", "Vendor-Mapping"]
    },
    {
      icon: MousePointer,
      title: "Smart Consent Management",
      description: "Granulare Einwilligungsverwaltung mit höchsten Consent-Raten",
      details: ["Granulare Kategorien", "IAB TCF 2.2 Standard", "Google Consent Mode v2", "Custom Templates"]
    },
    {
      icon: Code,
      title: "One-Click Integration",
      description: "Plug-and-Play für alle gängigen CMS und Frameworks",
      details: ["WordPress Plugin", "JavaScript SDK", "React/Vue Components", "API-Integration"]
    },
    {
      icon: ShieldCheck,
      title: "Rechtssichere Templates",
      description: "Von Anwälten geprüfte Banner-Texte in 25+ Sprachen",
      details: ["DSGVO-konform", "ePrivacy-Richtlinie", "Länderspezifisch", "Automatische Updates"]
    },
    {
      icon: BarChart3,
      title: "Compliance Analytics",
      description: "Detaillierte Insights zu Consent-Raten und Compliance-Status",
      details: ["Real-time Dashboard", "Consent-Rate Tracking", "A/B-Testing", "Audit-Reports"]
    },
    {
      icon: Globe,
      title: "Multi-Domain Support",
      description: "Zentrale Verwaltung für alle Ihre Websites und Domains",
      details: ["Cross-Domain Sync", "Bulk-Management", "White-Label Option", "Multi-Tenant Architecture"]
    }
  ];
  const useCases = [
    {
      title: "E-Commerce: 35% höhere Consent-Raten",
      scenario: "Online-Shop mit 2 Mio. monatlichen Besuchern",
      challenge: "Standard Cookie-Banner mit nur 38% Akzeptanzrate",
      solution: "Smart Banner mit A/B-Testing und optimierter UX",
      results: [
        { metric: "Consent-Rate", before: "38%", after: "73%", improvement: "+92%" },
        { metric: "Bounce-Rate", before: "67%", after: "52%", improvement: "-22%" },
        { metric: "Conversion-Rate", before: "2.1%", after: "2.8%", improvement: "+33%" },
        { metric: "Setup-Zeit", before: "3 Wochen", after: "15 Min", improvement: "-99%" }
      ],
      icon: Building2,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "SaaS-Plattform: Compliance-Automatisierung",
      scenario: "B2B-Software mit internationalen Kunden",
      challenge: "Komplexe Compliance-Anforderungen in verschiedenen Ländern",
      solution: "Automatische Geo-Lokalisierung und länderspezifische Banner",
      results: [
        { metric: "Compliance-Score", before: "67%", after: "99%", improvement: "+48%" },
        { metric: "Legal-Aufwand", before: "40h", after: "2h", improvement: "-95%" },
        { metric: "Audit-Bereitschaft", before: "3 Tage", after: "Sofort", improvement: "100%" },
        { metric: "Bußgeld-Risiko", before: "Hoch", after: "Minimal", improvement: "-90%" }
      ],
      icon: Rocket,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Medien-Website: Performance-Optimierung",
      scenario: "News-Portal mit hoher Werbe-Dichte",
      challenge: "Cookie-Banner verlangsamte Ladezeiten um 2,3 Sekunden",
      solution: "Asynchrone Lazy-Loading und CDN-Optimierung",
      results: [
        { metric: "Ladezeit", before: "4.8s", after: "2.1s", improvement: "-56%" },
        { metric: "Core Web Vitals", before: "Rot", after: "Grün", improvement: "100%" },
        { metric: "Ad-Revenue", before: "-23%", after: "+12%", improvement: "+45%" },
        { metric: "SEO-Ranking", before: "Position 15", after: "Position 8", improvement: "+87%" }
      ],
      icon: Globe,
      gradient: "from-green-500 to-emerald-600"
    }
  ];
  const technologies = [
    {
      category: "Frontend Frameworks",
      items: ["React", "Vue.js", "Angular", "Svelte", "Next.js", "Nuxt.js"],
      icon: Code
    },
    {
      category: "CMS Systeme",
      items: ["WordPress", "Drupal", "Joomla", "TYPO3", "Shopify", "Magento"],
      icon: Layers
    },
    {
      category: "E-Commerce",
      items: ["WooCommerce", "Shopware", "PrestaShop", "OpenCart", "BigCommerce", "Salesforce"],
      icon: Building2
    },
    {
      category: "Tag Manager",
      items: ["Google Tag Manager", "Adobe Launch", "Tealium", "Segment", "Matomo", "Custom Scripts"],
      icon: Settings
    }
  ];
  const complianceFeatures = [
    {
      title: "DSGVO Art. 7 Compliance",
      description: "Freiwillige, eindeutige und informierte Einwilligung",
      status: "compliant",
      details: ["Klare Sprache", "Granulare Kontrolle", "Widerrufsmöglichkeit", "Dokumentation"]
    },
    {
      title: "ePrivacy Directive",
      description: "Strikte Cookie-Richtlinien für EU-Länder",
      status: "compliant",
      details: ["Opt-in vor Cookie-Setzung", "Funktionale Cookie-Ausnahmen", "Transparente Information"]
    },
    {
      title: "IAB Transparency Framework",
      description: "Standardisierte Einwilligungsverwaltung für Werbung",
      status: "compliant",
      details: ["TCF 2.2 zertifiziert", "Vendor-Listen Integration", "Global Privacy Platform"]
    },
    {
      title: "Google Consent Mode v2",
      description: "Optimierte Datenerfassung bei verweigerten Cookies",
      status: "compliant",
      details: ["Advanced Implementation", "Analytics Modeling", "Conversion Tracking"]
    }
  ];
  const stats = [
    { value: "50,000+", label: "Websites", icon: Globe },
    { value: "99.8%", label: "Uptime", icon: Shield },
    { value: "< 100ms", label: "Load Time", icon: Zap },
    { value: "24/7", label: "Support", icon: Settings }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Cookie Management – DSGVO-konforme Cookie-Banner",
        description: "Cookie Management Tool: DSGVO-konforme Cookie-Banner, Consent-Verwaltung, TCF 2.2, Google Consent Mode v2. ✓ Rechtssicher ✓ Conversion-optimiert. Jetzt testen!",
        canonical: "/tools/cookie-management",
        keywords: "Cookie Management, DSGVO Cookie Banner, Cookie Consent Tool, TCF 2.2, Google Consent Mode",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 opacity-5", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      } }) }),
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          className: "relative pt-32 pb-20 px-6 overflow-hidden",
          style: { opacity, scale },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10" }),
            /* @__PURE__ */ jsx("div", { className: "container mx-auto relative z-10", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "text-center max-w-5xl mx-auto",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-6 py-3 bg-orange-100 rounded-full mb-6", children: [
                    /* @__PURE__ */ jsx(Cookie, { className: "w-5 h-5 text-orange-600" }),
                    /* @__PURE__ */ jsx("span", { className: "text-orange-800 font-medium", children: "DSGVO-konformes Cookie Management" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight", children: [
                    "Cookie-Banner",
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600", children: "neu gedacht" })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed", children: [
                    "Rechtssichere Cookie-Verwaltung mit höchsten Consent-Raten.",
                    /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
                    "KI-gestützt, DSGVO-konform, in unter 5 Minuten implementiert."
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12", children: [
                    /* @__PURE__ */ jsxs(
                      motion.button,
                      {
                        className: "px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: [
                          /* @__PURE__ */ jsx(PlayCircle, { className: "w-5 h-5" }),
                          /* @__PURE__ */ jsx("span", { children: "Live Demo" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      motion.button,
                      {
                        className: "px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: [
                          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
                          /* @__PURE__ */ jsx("span", { children: "Cookie-Audit (kostenlos)" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: index * 0.1 },
                      children: [
                        /* @__PURE__ */ jsx(stat.icon, { className: "w-8 h-8 text-orange-600 mx-auto mb-2" }),
                        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900", children: stat.value }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: stat.label })
                      ]
                    },
                    index
                  )) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-3xl",
                animate: {
                  x: [0, 50, 0],
                  y: [0, -30, 0]
                },
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-3xl",
                animate: {
                  x: [0, -50, 0],
                  y: [0, 30, 0]
                },
                transition: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-16",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Cookie-Compliance ist komplex" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Diese Herausforderungen kennen Sie sicher auch" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: painPoints.map((point, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: `bg-white rounded-2xl p-6 shadow-xl border-2 ${point.severity === "critical" ? "border-red-200 hover:border-red-400" : point.severity === "high" ? "border-orange-200 hover:border-orange-400" : "border-yellow-200 hover:border-yellow-400"}`,
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            whileHover: { scale: 1.02, y: -5 },
            children: [
              /* @__PURE__ */ jsx("div", { className: `inline-flex p-3 rounded-full mb-4 ${point.severity === "critical" ? "bg-red-100" : point.severity === "high" ? "bg-orange-100" : "bg-yellow-100"}`, children: /* @__PURE__ */ jsx(point.icon, { className: `w-8 h-8 ${point.severity === "critical" ? "text-red-600" : point.severity === "high" ? "text-orange-600" : "text-yellow-600"}` }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: point.title }),
              /* @__PURE__ */ jsx("div", { className: `text-3xl font-bold mb-2 ${point.severity === "critical" ? "text-red-600" : point.severity === "high" ? "text-orange-600" : "text-yellow-600"}`, children: point.stat }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: point.description }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: point.details })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-16",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Die smarteste Cookie-Lösung" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "KI-gestützt, rechtssicher und conversion-optimiert" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            whileHover: { y: -5 },
            children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-4 bg-orange-100 rounded-xl mb-6", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-8 h-8 text-orange-600" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: feature.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: feature.description }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: feature.details.map((detail, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700 text-sm", children: detail })
              ] }, idx)) })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-16",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Messbare Erfolge unserer Kunden" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Wie Unternehmen ihre Cookie-Compliance optimiert haben" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "space-y-12", children: useCases.map((useCase, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.2 },
            children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: `inline-flex p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} mb-6`, children: /* @__PURE__ */ jsx(useCase.icon, { className: "w-10 h-10 text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: useCase.title }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-500 uppercase", children: "Szenario" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-700 mt-1", children: useCase.scenario })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-500 uppercase", children: "Herausforderung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-700 mt-1", children: useCase.challenge })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-500 uppercase", children: "Lösung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-700 mt-1", children: useCase.solution })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "Vorher vs. Nachher" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: useCase.results.map((result, idx) => /* @__PURE__ */ jsxs("div", { className: "border border-gray-200 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: result.metric }),
                    /* @__PURE__ */ jsx("span", { className: "text-green-600 font-bold text-sm", children: result.improvement })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-red-600", children: [
                      "Vorher: ",
                      result.before
                    ] }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-gray-400" }),
                    /* @__PURE__ */ jsxs("span", { className: "text-green-600", children: [
                      "Nachher: ",
                      result.after
                    ] })
                  ] })
                ] }, idx)) })
              ] })
            ] })
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl",
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Live Consent-Rate Dashboard" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-8", children: "Verfolgen Sie in Echtzeit, wie sich Ihre Cookie-Banner-Optimierungen auf die Consent-Raten auswirken." }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: complianceFeatures.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-green-500" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-1", children: feature.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-2", children: feature.description }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: feature.details.map((detail, idx) => /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded", children: detail }, idx)) })
                ] })
              ] }, index)) }),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  className: "mt-8 px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: [
                    /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5" }),
                    /* @__PURE__ */ jsx("span", { children: "Live Dashboard öffnen" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative w-80 h-80 mx-auto", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [
                  /* @__PURE__ */ jsx(
                    "circle",
                    {
                      cx: "160",
                      cy: "160",
                      r: "140",
                      stroke: "#374151",
                      strokeWidth: "20",
                      fill: "none"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.circle,
                    {
                      cx: "160",
                      cy: "160",
                      r: "140",
                      stroke: "url(#gradient-orange)",
                      strokeWidth: "20",
                      fill: "none",
                      strokeLinecap: "round",
                      strokeDasharray: `${2 * Math.PI * 140}`,
                      initial: { strokeDashoffset: 2 * Math.PI * 140 },
                      animate: { strokeDashoffset: 2 * Math.PI * 140 * (1 - consentRate / 100) },
                      transition: { duration: 2, ease: "easeOut" }
                    }
                  ),
                  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "gradient-orange", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#f97316" }),
                    /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#ea580c" }),
                    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#dc2626" })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "text-6xl font-bold text-white",
                      initial: { opacity: 0, scale: 0.5 },
                      animate: { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 },
                      transition: { delay: 0.5 },
                      children: [
                        consentRate,
                        "%"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-400 mt-2", children: "Consent-Rate" }),
                  /* @__PURE__ */ jsx("div", { className: "text-green-400 text-sm mt-1", children: "+35% vs. Standard" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mt-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-orange-500", children: "2.1s" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Ladezeit" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-500", children: "99.8%" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Compliance" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-500", children: "47" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "A/B-Tests" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-500", children: "25" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Sprachen" })
                ] })
              ] })
            ] })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-16",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Integriert in Minuten" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Kompatibel mit allen gängigen Technologien und Plattformen" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: technologies.map((tech, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 bg-orange-100 rounded-full mb-4", children: /* @__PURE__ */ jsx(tech.icon, { className: "w-8 h-8 text-orange-600" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: tech.category }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tech.items.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-600 text-sm", children: item })
              ] }, idx)) })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gradient-to-br from-orange-500 to-red-600", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center max-w-4xl mx-auto",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Bereit für rechtssichere Cookies?" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-orange-100 mb-12", children: "Starten Sie noch heute mit unserem Cookie Management Tool und erhöhen Sie Ihre Consent-Raten um bis zu 73%." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6", children: [
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  className: "px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: [
                    /* @__PURE__ */ jsx(Rocket, { className: "w-5 h-5" }),
                    /* @__PURE__ */ jsx("span", { children: "Jetzt starten" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  className: "px-8 py-4 bg-orange-600/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-orange-600/30 transition-all duration-300 flex items-center space-x-2 border border-white/20",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5" }),
                    /* @__PURE__ */ jsx("span", { children: "Demo vereinbaren" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center justify-center space-x-8 text-orange-100", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsx("span", { children: "DSGVO-konform" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsx("span", { children: "5 Min Setup" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(Award, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsx("span", { children: "IAB TCF 2.2" })
              ] })
            ] })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  CookieManagementTool as default
};
