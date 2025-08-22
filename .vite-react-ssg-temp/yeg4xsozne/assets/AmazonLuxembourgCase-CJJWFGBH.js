import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { ArrowLeft, Building2, Euro, Calendar, MapPin, Download, Clock, AlertTriangle, Target, Database, UserCheck, Eye, X, CheckCircle2, ShoppingCart, MessageCircle, Shield, Scale, Settings, Copy, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
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
const AmazonLuxembourgCase = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [copySuccess, setCopySuccess] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(""), 2e3);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const violationBreakdown = [
    {
      article: "Art. 6 DSGVO",
      violation: "Fehlende Rechtsgrundlage für Werbung",
      amount: "€290 Millionen",
      percentage: 38.9,
      description: "Personalisierte Werbung ohne gültige Einwilligung oder berechtigtes Interesse",
      examples: [
        "Targeted Advertising ohne Consent",
        "Cross-Device Tracking für Werbezwecke",
        "Profiling für Produktempfehlungen",
        "Behavioral Advertising auf Basis von Kaufhistorie"
      ]
    },
    {
      article: "Art. 5 DSGVO",
      violation: "Verstoß gegen Grundsätze der Datenverarbeitung",
      amount: "€185 Millionen",
      percentage: 24.8,
      description: "Mangelnde Transparenz und übermäßige Datensammlung",
      examples: [
        "Intransparente Datenverarbeitungszwecke",
        "Sammlung nicht erforderlicher Daten",
        "Fehlende Datenminimierung",
        "Unklare Aufbewahrungsfristen"
      ]
    },
    {
      article: "Art. 12-14 DSGVO",
      violation: "Unzureichende Informationspflichten",
      amount: "€150 Millionen",
      percentage: 20.1,
      description: "Mangelhafte Aufklärung der Betroffenen über Datenverarbeitung",
      examples: [
        "Unverständliche Datenschutzerklärungen",
        "Versteckte Informationen über Tracking",
        "Fehlende Details zu Verarbeitungszwecken",
        "Unklare Widerspruchsmöglichkeiten"
      ]
    },
    {
      article: "Art. 25 DSGVO",
      violation: "Privacy by Design Verstöße",
      amount: "€121 Millionen",
      percentage: 16.2,
      description: "Mangelhafte Implementierung datenschutzfreundlicher Voreinstellungen",
      examples: [
        "Tracking-Standards aktiviert",
        "Opt-out statt Opt-in Design",
        "Dark Patterns in der Nutzeroberfläche",
        "Komplizierte Datenschutz-Einstellungen"
      ]
    }
  ];
  const advertisingAnalysis = [
    {
      category: "Personalisierte Werbung",
      icon: Target,
      color: "from-red-500 to-orange-500",
      currentPractice: [
        "Automatische Profilierung basierend auf Kaufverhalten",
        "Cross-Platform Tracking ohne explizite Einwilligung",
        "Verwendung von Third-Party Daten für Targeting",
        "Algorithmic Decision Making für Ad Delivery"
      ],
      requiredChanges: [
        "Explizite Einwilligung für jede Form von Targeting",
        "Granulare Kontrolle über Werbeeinstellungen",
        "Opt-in für Cross-Device Tracking",
        "Transparente Algorithmus-Erklärungen"
      ],
      complianceLevel: "KRITISCH"
    },
    {
      category: "Datensammlung für Marketing",
      icon: Database,
      color: "from-blue-500 to-indigo-500",
      currentPractice: [
        "Umfangreiche Sammlung von Verhaltensdaten",
        "Speicherung detaillierter Shopping-Patterns",
        "Analyse von Browsing-Verhalten",
        "Verknüpfung verschiedener Nutzerkonten"
      ],
      requiredChanges: [
        "Datenminimierung auf erforderliche Parameter",
        "Separate Einwilligung für verschiedene Zwecke",
        "Regelmäßige Löschung nicht mehr benötigter Daten",
        "Isolierte Verarbeitung verschiedener Services"
      ],
      complianceLevel: "HOCH"
    },
    {
      category: "Consent Management",
      icon: UserCheck,
      color: "from-purple-500 to-pink-500",
      currentPractice: [
        "Komplexe und unübersichtliche Einstellungen",
        "Standard-Aktivierung von Marketing-Features",
        "Erschwerte Widerrufsmöglichkeiten",
        "Versteckte Opt-out Optionen"
      ],
      requiredChanges: [
        "Einfache und zugängliche Consent-Verwaltung",
        "Privacy-friendly Defaults",
        "Ein-Klick Widerruf aller Einwilligungen",
        "Proaktive Consent-Auffrischung"
      ],
      complianceLevel: "HOCH"
    },
    {
      category: "Transparenz & Information",
      icon: Eye,
      color: "from-emerald-500 to-teal-500",
      currentPractice: [
        "Technische und schwer verständliche Datenschutztexte",
        "Versteckte Informationen über Datennutzung",
        "Unklare Zweckbindung der Datenverarbeitung",
        "Fehlende Informationen über Algorithmen"
      ],
      requiredChanges: [
        "Verständliche Erklärungen in einfacher Sprache",
        "Dashboard mit aktueller Datennutzung",
        "Detaillierte Zweckbeschreibungen",
        "Transparenz über Entscheidungsalgorithmen"
      ],
      complianceLevel: "MITTEL"
    }
  ];
  const industryImpacts = [
    {
      sector: "E-Commerce Plattformen",
      icon: ShoppingCart,
      challenges: [
        "Personalisierte Produktempfehlungen rechtlich absichern",
        "Cross-Selling und Up-Selling DSGVO-konform gestalten",
        "Behavioral Analytics für UX-Optimierung",
        "Dynamic Pricing und Personalisierung"
      ],
      solutions: [
        "Explizite Einwilligung für Recommendation Engines",
        "Transparente Preisgestaltung ohne Diskriminierung",
        "Anonymisierte A/B Tests und UX Analytics",
        "Pseudonymisierte Conversion-Optimierung"
      ],
      complianceActions: [
        "Consent Management für alle Marketing-Features",
        "Regular Audits der Recommendation Algorithms",
        "Implementierung von Privacy-by-Design",
        "Customer Data Platform DSGVO-Compliance"
      ]
    },
    {
      sector: "Digital Marketing Agencies",
      icon: MessageCircle,
      challenges: [
        "Cross-Client Data Sharing und Insights",
        "Attribution Modeling und Customer Journey",
        "Programmatic Advertising und Real-Time Bidding",
        "Performance Marketing ohne Tracking"
      ],
      solutions: [
        "Isolated Data Processing per Client",
        "First-Party Data Strategies entwickeln",
        "Contextual Advertising statt Behavioral",
        "Privacy-Preserving Attribution Models"
      ],
      complianceActions: [
        "Data Processing Agreements mit allen Clients",
        "Consent Management Platform Integration",
        "Regular Training für Marketing Teams",
        "Legal Review aller Campaign Setups"
      ]
    },
    {
      sector: "AdTech & MarTech",
      icon: Target,
      challenges: [
        "Real-Time Bidding ohne Third-Party Cookies",
        "Cross-Device Identity Resolution",
        "Audience Segmentation und Profiling",
        "Attribution ohne umfassendes Tracking"
      ],
      solutions: [
        "Privacy-Preserving Technologies (Differential Privacy)",
        "Cohort-based Targeting statt Individual Profiling",
        "Contextual Signals für Ad Targeting",
        "Statistical Attribution Models"
      ],
      complianceActions: [
        "Complete Platform Architecture Review",
        "Implementation von Privacy-Enhancing Technologies",
        "Transparency Reports für Data Usage",
        "Regular Compliance Audits und Zertifizierungen"
      ]
    }
  ];
  const complianceFramework = [
    {
      phase: "Immediate Response (0-30 Tage)",
      urgency: "KRITISCH",
      color: "from-red-500 to-pink-500",
      legalActions: [
        "Rechtsberatung für ähnliche Compliance-Risiken",
        "Internal Investigation der eigenen Werbepraktiken",
        "Risk Assessment für alle Marketing-Aktivitäten",
        "Stakeholder Communication über potentielle Auswirkungen"
      ],
      technicalActions: [
        "Audit aller Targeting und Profiling-Systeme",
        "Review der Consent Management Implementation",
        "Analysis der Data Collection und Processing",
        "Documentation aller Advertising-Datenflüsse"
      ]
    },
    {
      phase: "Compliance Implementation (1-6 Monate)",
      urgency: "HOCH",
      color: "from-orange-500 to-red-500",
      legalActions: [
        "Update aller Datenschutzerklärungen",
        "Revision der Terms of Service",
        "New Consent Mechanisms für Marketing",
        "Legal Basis Review für alle Processing Activities"
      ],
      technicalActions: [
        "Implementation granularer Consent Controls",
        "Rebuild von Recommendation Engines",
        "Privacy-by-Design für neue Features",
        "Data Minimization in bestehenden Systemen"
      ]
    },
    {
      phase: "Long-term Strategy (6-24 Monate)",
      urgency: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      legalActions: [
        "Continuous Compliance Monitoring",
        "Regular Legal Reviews und Updates",
        "Industry Best Practice Benchmarking",
        "Regulatory Relationship Management"
      ],
      technicalActions: [
        "Advanced Privacy-Enhancing Technologies",
        "Machine Learning für Privacy-Preserving Analytics",
        "Zero-Party Data Strategies",
        "Federated Learning für Insights ohne Data Sharing"
      ]
    }
  ];
  const technicalSolutions = `// Privacy-First E-Commerce Analytics
// 1. Consent-Aware Tracking

class PrivacyFirstAnalytics {
  constructor() {
    this.consentManager = new ConsentManager();
    this.analytics = new AnalyticsEngine();
  }
  
  // Granular consent checking
  canTrack(purpose) {
    return this.consentManager.hasConsent(purpose);
  }
  
  // Product recommendations with privacy
  getRecommendations(userId, consentLevel) {
    if (consentLevel === 'full') {
      return this.analytics.personalizedRecommendations(userId);
    } else if (consentLevel === 'contextual') {
      return this.analytics.contextualRecommendations();
    } else {
      return this.analytics.popularProducts();
    }
  }
  
  // Privacy-preserving conversion tracking
  trackConversion(eventData) {
    if (this.canTrack('analytics')) {
      // Full tracking with user consent
      this.analytics.trackEvent(eventData);
    } else {
      // Aggregated tracking only
      this.analytics.trackAggregated({
        type: eventData.type,
        value: eventData.value,
        timestamp: eventData.timestamp
        // No user identification
      });
    }
  }
}

// 2. GDPR-Compliant Marketing Automation

class ComplianceFirstMarketing {
  constructor() {
    this.segments = new SegmentEngine();
    this.campaigns = new CampaignManager();
  }
  
  // Cohort-based targeting (no individual profiling)
  createCohorts(criteria) {
    return this.segments.createAnonymousCohorts({
      minCohortSize: 1000, // k-anonymity
      criteria: criteria,
      retentionPeriod: '6months'
    });
  }
  
  // Contextual advertising
  getContextualAds(pageContext, userPreferences = null) {
    const baseAds = this.campaigns.getContextualMatch(pageContext);
    
    if (userPreferences && this.hasMarketingConsent()) {
      return this.campaigns.personalizeAds(baseAds, userPreferences);
    }
    
    return baseAds;
  }
  
  // Privacy-preserving A/B testing
  runPrivateABTest(testConfig) {
    return {
      assignment: this.getRandomAssignment(),
      // No user tracking, statistical inference only
      results: this.analytics.statisticalInference(testConfig)
    };
  }
}

// 3. Enhanced Consent Management

class GDPRConsentManager {
  constructor() {
    this.purposes = [
      'essential',
      'analytics', 
      'marketing',
      'personalization'
    ];
  }
  
  // Granular consent collection
  requestConsent(purposes) {
    return this.showConsentDialog({
      purposes: purposes,
      design: 'privacy-friendly', // No dark patterns
      defaultState: 'denied', // Privacy by default
      easyWithdraw: true
    });
  }
  
  // Consent refresh mechanism
  checkConsentExpiry() {
    const consents = this.getAllConsents();
    const expiredConsents = consents.filter(
      consent => consent.timestamp < Date.now() - (6 * 30 * 24 * 60 * 60 * 1000)
    );
    
    if (expiredConsents.length > 0) {
      this.requestConsentRefresh(expiredConsents);
    }
  }
  
  // Consent dashboard for users
  renderConsentDashboard() {
    return {
      currentConsents: this.getAllConsents(),
      dataUsage: this.getDataUsageReport(),
      withdrawOptions: this.getWithdrawOptions(),
      downloadData: this.getDataExportOptions()
    };
  }
}`;
  const timeline = [
    {
      date: "30. Juli 2021",
      event: "CNPD verhängt Rekord-Bußgeld",
      description: "€746 Millionen gegen Amazon wegen DSGVO-Verstößen",
      type: "critical"
    },
    {
      date: "August 2021",
      event: "Amazon kündigt Berufung an",
      description: "Rechtsmittel gegen die Entscheidung eingelegt",
      type: "response"
    },
    {
      date: "September 2021",
      event: "Branchenweite Unsicherheit",
      description: "Andere E-Commerce Unternehmen überprüfen ihre Praktiken",
      type: "impact"
    },
    {
      date: "2022",
      event: "Verstärkte Kontrollen",
      description: "EU-Behörden fokussieren auf Advertising Compliance",
      type: "enforcement"
    },
    {
      date: "2023-2024",
      event: "Neue Standards etabliert",
      description: "Branchenweite Anpassung der Marketing Praktiken",
      type: "ongoing"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Amazon Luxemburg 2021 – CNPD Bußgeld-Entscheidung 746M€",
        description: "Amazon Luxemburg 2021 CNPD-Bußgeld: Datenverarbeitungs-Verletzungen, E-Commerce Compliance, DSGVO-Enforcement. ✓ Fine Analysis ✓ Compliance Lessons ✓ Enforcement Trends.",
        canonical: "/wissen/rechtsprechung/amazon-luxemburg-2021",
        keywords: "Amazon, Luxemburg, CNPD, Bußgeld, DSGVO, E-Commerce, Compliance, Datenverarbeitung, 746 Millionen",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Amazon Luxemburg 2021 – CNPD Bußgeld-Entscheidung 746M€",
          "description": "Analyse des €746 Millionen DSGVO-Bußgelds gegen Amazon durch die luxemburgische CNPD",
          "author": {
            "@type": "Organization",
            "name": "Marsstein"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Marsstein",
            "logo": {
              "@type": "ImageObject",
              "url": "https://marsstein.com/logo.png"
            }
          },
          "datePublished": "2021-07-30",
          "dateModified": "2024-01-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://marsstein.com/wissen/rechtsprechung/amazon-luxemburg-2021"
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y, opacity },
        className: "relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "mb-8",
              children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/rechtsprechung", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                "Zurück zur Rechtsprechung"
              ] }) })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center mb-20",
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.2, type: "spring", stiffness: 200 },
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-indigo-500/10 backdrop-blur-sm rounded-full mb-8 border border-indigo-500/20",
                    children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-indigo-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-indigo-300", children: "E-Commerce Compliance" }),
                      /* @__PURE__ */ jsx(Euro, { className: "h-5 w-5 text-yellow-400 animate-pulse" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4, duration: 0.8 },
                    className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Amazon" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent", children: "Luxembourg" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent", children: "€746 Millionen" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.6, duration: 0.8 },
                    className: "text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12",
                    children: [
                      "Das zweitgrößte DSGVO-Bußgeld der Geschichte für",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-indigo-300", children: " rechtswidrige Werbepraktiken" }),
                      " und dessen Auswirkungen auf E-Commerce"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.8, duration: 0.8 },
                    className: "flex flex-wrap justify-center gap-4 mb-12",
                    children: [
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4 mr-2" }),
                        "€746 Mio. Bußgeld"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                        "30. Juli 2021"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mr-2" }),
                        "CNPD Luxembourg"
                      ] })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsx("h2", { id: "inhaltsverzeichnis", className: "text-3xl font-bold text-white mb-6", style: { scrollMarginTop: "100px" }, children: "Inhaltsverzeichnis" }),
          /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-left", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("a", { href: "#bussgeld-uebersicht", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: "1." }),
                " Bußgeld-Übersicht"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#violation-analysis", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: "2." }),
                " Verletzungsanalyse"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#compliance-solutions", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: "3." }),
                " Compliance-Lösungen"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("a", { href: "#ecommerce-impact", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: "4." }),
                " E-Commerce Impact"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#branchen-guidance", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: "5." }),
                " Branchen-Guidance"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#enforcement-trends", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: "6." }),
                " Enforcement-Trends"
              ] })
            ] })
          ] }) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-12",
          children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 md:grid-cols-6 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl gap-2 md:gap-0", children: [
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "overview", className: "data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Überblick" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Info" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "violations", className: "data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Verstöße" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Fälle" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "advertising", className: "data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Werbepraktiken" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Ads" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "industry", className: "data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Branchenimpact" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Sektor" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "compliance", className: "data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Compliance" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Guide" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "technical", className: "data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Lösungen" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Tech" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(TabsContent, { value: "overview", className: "space-y-8", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-indigo-500/30", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsx("h3", { id: "bussgeld-uebersicht", className: "text-2xl font-bold text-white mb-6", style: { scrollMarginTop: "100px" }, children: "Verfahrensübersicht" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 leading-relaxed", children: [
                  /* @__PURE__ */ jsx("p", { children: "Am 30. Juli 2021 verhängte die luxemburgische Datenschutzbehörde (CNPD) ein Bußgeld von 746 Millionen Euro gegen Amazon Europe Core S.à r.l. Das war zu diesem Zeitpunkt das höchste DSGVO-Bußgeld der Geschichte." }),
                  /* @__PURE__ */ jsx("p", { children: "Der Hauptvorwurf bezog sich auf rechtswidrige Verarbeitung personenbezogener Daten für Werbezwecke ohne angemessene Rechtsgrundlage. Amazon sammelte und nutzte umfangreiche Nutzerdaten für personalisierte Werbung und Produktempfehlungen ohne ausreichende Einwilligung." }),
                  /* @__PURE__ */ jsx("p", { children: "Diese Entscheidung setzte neue Standards für E-Commerce Unternehmen und führte zu einer branchenweiten Überprüfung von Advertising-Praktiken und Consent-Management-Systemen." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Verfahren Details" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Behörde:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "CNPD Luxembourg" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Datum:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "30.07.2021" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Betroffenes Unternehmen:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Amazon Europe" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Bußgeld:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-yellow-300 font-semibold", children: "€746 Millionen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Hauptvorwurf:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-red-300 font-semibold", children: "Illegale Werbung" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white", children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                  "Entscheidung herunterladen"
                ] }) })
              ] })
            ] }) }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.2, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-indigo-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Verfahrens-Timeline" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: timeline.map((event, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -30 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { delay: index * 0.1, duration: 0.6 },
                  className: "flex gap-6 relative",
                  children: [
                    index < timeline.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-indigo-500 to-transparent" }),
                    /* @__PURE__ */ jsx("div", { className: cn(
                      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                      event.type === "critical" ? "bg-red-500" : event.type === "response" ? "bg-blue-500" : event.type === "impact" ? "bg-orange-500" : event.type === "enforcement" ? "bg-purple-500" : "bg-green-500"
                    ), children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-white" }) }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                        /* @__PURE__ */ jsx(Badge, { className: "bg-slate-600 text-slate-200", children: event.date }),
                        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: event.event })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: event.description })
                    ] }) })
                  ]
                },
                index
              )) })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "violations", className: "space-y-8", id: "violation-analysis", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-indigo-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Bußgeld-Aufschlüsselung: €746 Millionen" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-6", children: violationBreakdown.map((violation, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                transition: { delay: index * 0.1, duration: 0.6 },
                className: "bg-slate-700/50 rounded-lg p-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                        /* @__PURE__ */ jsx(Badge, { className: "bg-indigo-500/20 text-indigo-300 text-xs", children: violation.article }),
                        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: violation.violation })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm mb-3", children: violation.description })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-right ml-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-400", children: violation.amount }),
                      /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
                        violation.percentage,
                        "% der Gesamtsumme"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                    /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-orange-300 mb-2", children: "Konkrete Beispiele:" }),
                    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-2", children: violation.examples.map((example, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: example })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-600 rounded-full h-2", children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full",
                      style: { width: `${violation.percentage}%` }
                    }
                  ) })
                ]
              },
              index
            )) })
          ] }) })
        }
      ) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "advertising", className: "space-y-8", id: "compliance-solutions", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: advertisingAnalysis.map((practice, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                practice.color
              ), children: /* @__PURE__ */ jsx(practice.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: practice.category }),
                /* @__PURE__ */ jsxs(Badge, { className: cn(
                  "text-xs mt-1",
                  practice.complianceLevel === "KRITISCH" ? "bg-red-500/20 text-red-300" : practice.complianceLevel === "HOCH" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"
                ), children: [
                  "Risiko: ",
                  practice.complianceLevel
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-red-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
                  "Problematische Praxis"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: practice.currentPractice.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-red-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: item })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-green-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
                  "DSGVO-konforme Lösung"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: practice.requiredChanges.map((change, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-green-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: change })
                ] }, idx)) })
              ] })
            ] })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "industry", className: "space-y-8", id: "ecommerce-impact", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: industryImpacts.map((industry, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500", children: /* @__PURE__ */ jsx(industry.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: industry.sector })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-300 mb-4", children: "Herausforderungen:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industry.challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-orange-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: challenge })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-300 mb-4", children: "Lösungsansätze:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industry.solutions.map((solution, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-green-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: solution })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-300 mb-4", children: "Compliance-Maßnahmen:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industry.complianceActions.map((action, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: action })
                ] }, idx)) })
              ] })
            ] })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "compliance", className: "space-y-8", id: "branchen-guidance", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: complianceFramework.map((phase, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                phase.color
              ), children: phase.urgency }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: phase.phase })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5" }),
                  "Rechtliche Maßnahmen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: phase.legalActions.map((action, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: action })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5" }),
                  "Technische Maßnahmen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: phase.technicalActions.map((action, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-purple-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: action })
                ] }, idx)) })
              ] })
            ] })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "technical", className: "space-y-8", id: "enforcement-trends", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-indigo-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
            /* @__PURE__ */ jsx("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "DSGVO-konforme E-Commerce Implementation" }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  onClick: () => handleCopy(technicalSolutions, "ecommerce"),
                  className: "bg-indigo-500 hover:bg-indigo-600",
                  children: [
                    /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4 mr-2" }),
                    copySuccess === "ecommerce" ? "Kopiert!" : "Kopieren"
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("pre", { className: "bg-slate-900 rounded-lg p-6 overflow-x-auto", children: /* @__PURE__ */ jsx("code", { className: "text-slate-300 text-sm", children: technicalSolutions }) }) })
          ] }) })
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-indigo-900/30 to-slate-800/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent", children: "E-Commerce Compliance optimieren" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Vermeiden Sie ähnliche Bußgelder durch proaktive Advertising-Compliance" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          title: "E-Commerce Audit",
          description: "Umfassende Prüfung Ihrer Marketing- und Werbepraktiken",
          icon: Search,
          link: "/services/ecommerce-audit",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "Consent Management",
          description: "Rechtssichere Einwilligungslösungen für Marketing",
          icon: UserCheck,
          link: "/services/consent-management",
          color: "from-emerald-500 to-teal-500"
        },
        {
          title: "Advertising Compliance",
          description: "DSGVO-konforme Werbestrategien und Implementierung",
          icon: Target,
          link: "/services/advertising-compliance",
          color: "from-orange-500 to-red-500"
        }
      ].map((cta, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -5 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
              cta.color
            ), children: /* @__PURE__ */ jsx(cta.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors", children: cta.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: cta.description }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
              "w-full bg-gradient-to-r text-white",
              cta.color
            ), children: /* @__PURE__ */ jsxs(Link, { to: cta.link, className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Jetzt prüfen" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) })
          ] }) })
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  AmazonLuxembourgCase as default
};
