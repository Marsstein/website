import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Cookie, Star, Calendar, Globe, Download, Shield, Settings, BarChart3, Target, CheckCircle2, X, Code, Check, Copy, Search, SquareCheck, FileText, Activity, Building2, Monitor, AlertTriangle, Eye, Scale, TrendingUp, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
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
const Planet49CookieCase = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [bannerExample, setBannerExample] = useState("compliant");
  const [copySuccess, setCopySuccess] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      h2, h3, h4 { scroll-margin-top: 96px; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(""), 2e3);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const keyRulings = [
    {
      title: "Aktive Einwilligung erforderlich",
      description: "Voreingestellte Checkboxen sind nicht DSGVO-konform",
      impact: "KRITISCH",
      details: "Nutzer müssen aktiv zustimmen - keine Opt-Out Systeme oder vorausgewählte Häkchen"
    },
    {
      title: "Klare und verständliche Information",
      description: "Vollständige Aufklärung über alle Cookie-Zwecke vor Einwilligung",
      impact: "HOCH",
      details: "Zweck, Speicherdauer und verantwortliche Stellen müssen vor Consent benannt werden"
    },
    {
      title: "Granulare Einwilligungsmöglichkeit",
      description: "Separate Einwilligung für verschiedene Cookie-Kategorien",
      impact: "HOCH",
      details: "Nutzer müssen zwischen essentiellen und nicht-essentiellen Cookies unterscheiden können"
    },
    {
      title: "Widerruf muss möglich sein",
      description: "Einwilligung muss jederzeit widerrufbar sein",
      impact: "MITTEL",
      details: "Gleich einfacher Zugang zum Widerruf wie zur ursprünglichen Einwilligung"
    }
  ];
  const cookieCategories = [
    {
      id: "essential",
      name: "Erforderliche Cookies",
      description: "Technisch notwendig für Website-Funktionalität",
      icon: Shield,
      color: "from-cyan-500 to-blue-500",
      consent: "Keine Einwilligung erforderlich",
      examples: [
        "Session-Management",
        "Sicherheits-Tokens",
        "Load Balancer",
        "Cookie-Consent Status"
      ],
      legalBasis: "Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)",
      implementation: "Automatisch aktiv, nicht deaktivierbar"
    },
    {
      id: "functional",
      name: "Funktionale Cookies",
      description: "Verbessern Nutzererfahrung und Website-Funktionen",
      icon: Settings,
      color: "from-blue-500 to-indigo-500",
      consent: "Einwilligung erforderlich",
      examples: [
        "Spracheinstellungen",
        "Formular-Daten",
        "Chat-Widgets",
        "Video-Player Präferenzen"
      ],
      legalBasis: "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
      implementation: "Opt-in erforderlich, granular steuerbar"
    },
    {
      id: "analytics",
      name: "Analyse-Cookies",
      description: "Sammeln Daten über Website-Nutzung und Performance",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      consent: "Einwilligung erforderlich",
      examples: [
        "Google Analytics",
        "Matomo/Piwik",
        "Adobe Analytics",
        "Hotjar/Heatmaps"
      ],
      legalBasis: "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
      implementation: "Opt-in erforderlich, IP-Anonymisierung"
    },
    {
      id: "marketing",
      name: "Marketing-Cookies",
      description: "Ermöglichen personalisierte Werbung und Tracking",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      consent: "Einwilligung erforderlich",
      examples: [
        "Google Ads",
        "Facebook Pixel",
        "Affiliate Tracking",
        "Retargeting-Pixel"
      ],
      legalBasis: "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
      implementation: "Strenge Opt-in Pflicht, granular steuerbar"
    }
  ];
  const consentMechanisms = [
    {
      type: "Rechtskonform",
      description: "Planet49-konforme Implementierung",
      icon: CheckCircle2,
      color: "from-green-500 to-emerald-500",
      features: [
        "Keine vorausgewählten Checkboxen",
        "Granulare Kontrollmöglichkeiten",
        "Klare Zweckbeschreibung",
        "Einfacher Widerruf möglich"
      ],
      code: `<!-- Planet49-konforme Cookie-Banner -->
<div class="cookie-banner">
  <h3>Cookie-Einstellungen</h3>
  <p>Wir verwenden Cookies für verschiedene Zwecke...</p>
  
  <div class="cookie-categories">
    <div class="category essential">
      <label>
        <input type="checkbox" checked disabled>
        Erforderliche Cookies (immer aktiv)
      </label>
    </div>
    
    <div class="category functional">
      <label>
        <input type="checkbox" name="functional">
        Funktionale Cookies
      </label>
      <p>Verbesserung der Nutzererfahrung</p>
    </div>
    
    <div class="category analytics">
      <label>
        <input type="checkbox" name="analytics">
        Analyse-Cookies
      </label>
      <p>Anonyme Nutzungsstatistiken</p>
    </div>
    
    <div class="category marketing">
      <label>
        <input type="checkbox" name="marketing">
        Marketing-Cookies
      </label>
      <p>Personalisierte Werbung</p>
    </div>
  </div>
  
  <div class="actions">
    <button onclick="acceptSelected()">Auswahl bestätigen</button>
    <button onclick="acceptAll()">Alle akzeptieren</button>
    <button onclick="rejectAll()">Alle ablehnen</button>
  </div>
</div>`
    },
    {
      type: "Nicht-konform",
      description: "Veraltete, Planet49-widrige Ansätze",
      icon: X,
      color: "from-red-500 to-pink-500",
      features: [
        "Vorausgewählte Checkboxen",
        "Unklar formulierte Zwecke",
        "Versteckte Opt-out Optionen",
        "Erschwerte Ablehnungsmöglichkeit"
      ],
      code: `<!-- NICHT Planet49-konform! -->
<div class="cookie-banner-old">
  <p>Diese Website verwendet Cookies.</p>
  
  <!-- FALSCH: Vorausgewählt -->
  <label>
    <input type="checkbox" checked>
    Ich akzeptiere alle Cookies
  </label>
  
  <!-- FALSCH: Keine granulare Kontrolle -->
  <button onclick="acceptAll()">OK</button>
  
  <!-- FALSCH: Versteckte Ablehnungsoption -->
  <a href="/cookie-settings" style="font-size:10px">
    Einstellungen ändern
  </a>
</div>`
    }
  ];
  const industryStrategies = [
    {
      industry: "E-Commerce",
      icon: Building2,
      color: "from-cyan-500 to-blue-500",
      challenges: [
        "Warenkorb-Funktionalität sicherstellen",
        "Personalisierte Produktempfehlungen",
        "Retargeting-Campaigns",
        "Affiliate-Tracking"
      ],
      solutions: [
        "Session-Cookies als essential klassifizieren",
        "Personalisierung opt-in basiert implementieren",
        "Transparente Zweckbindung für Marketing-Cookies",
        "Cookie-lose Alternativen evaluieren"
      ]
    },
    {
      industry: "Medien & Publishing",
      icon: FileText,
      color: "from-blue-500 to-indigo-500",
      challenges: [
        "Paywall-Funktionalität",
        "Lesefortschritt tracking",
        "Werbeeinnahmen sichern",
        "Content-Personalisierung"
      ],
      solutions: [
        "Login-basierte Paywalls bevorzugen",
        "Lokale Storage für Lesefortschritt",
        "Consent-basierte Werbung implementieren",
        "First-Party Data Strategien"
      ]
    },
    {
      industry: "SaaS & Tech",
      icon: Monitor,
      color: "from-indigo-500 to-purple-500",
      challenges: [
        "Produkt-Analytics",
        "A/B Testing",
        "Performance Monitoring",
        "User Onboarding Tracking"
      ],
      solutions: [
        "Anonymisierte Analytics priorisieren",
        "Einwilligungsbasierte Detailtracking",
        "Server-side Analytics implementieren",
        "Privacy-by-Design Architektur"
      ]
    },
    {
      industry: "Healthcare & Finance",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      challenges: [
        "Höchste Compliance-Anforderungen",
        "Sensible Datenverarbeitung",
        "Regulatorische Oversight",
        "Patient/Kunden-Vertrauen"
      ],
      solutions: [
        "Minimaler Cookie-Einsatz",
        "Strenge Zweckbindung",
        "Regelmäßige Compliance-Audits",
        "Zero-Party Data Konzepte"
      ]
    }
  ];
  const bestPractices = [
    {
      category: "Design & UX",
      icon: Eye,
      practices: [
        "Banner nicht die gesamte Seite blockieren",
        "Klare, verständliche Sprache verwenden",
        "Gleich prominente Akzeptieren/Ablehnen Buttons",
        "Mobile-optimierte Darstellung sicherstellen"
      ]
    },
    {
      category: "Technische Implementierung",
      icon: Code,
      practices: [
        "Cookies erst nach Einwilligung setzen",
        "Consent Management Platform (CMP) verwenden",
        "Cookie-Status persistent speichern",
        "Automatische Cookie-Löschung bei Widerruf"
      ]
    },
    {
      category: "Rechtliche Absicherung",
      icon: Scale,
      practices: [
        "Detaillierte Cookie-Policy bereitstellen",
        "Regelmäßige Rechtskonformitätsprüfung",
        "Dokumentation aller Cookie-Zwecke",
        "Widerrufsmöglichkeiten prominent platzieren"
      ]
    },
    {
      category: "Performance & Analytics",
      icon: TrendingUp,
      practices: [
        "Consent-Raten kontinuierlich monitoren",
        "A/B Testing für Banner-Varianten",
        "First-Party Data Strategien entwickeln",
        "Cookie-lose Alternativen implementieren"
      ]
    }
  ];
  const implementationGuide = [
    {
      step: "1. Audit & Kategorisierung",
      description: "Alle vorhandenen Cookies identifizieren und kategorisieren",
      icon: Search,
      tasks: [
        "Cookie-Inventory erstellen",
        "Zwecke und Rechtsgrundlagen dokumentieren",
        "Drittanbieter-Cookies identifizieren",
        "Speicherdauer und Übertragung bewerten"
      ]
    },
    {
      step: "2. Consent Management",
      description: "Planet49-konforme Einwilligungsmechanismen implementieren",
      icon: SquareCheck,
      tasks: [
        "CMP auswählen und konfigurieren",
        "Granulare Consent-Optionen einrichten",
        "Banner-Design und -Text optimieren",
        "Widerrufsmöglichkeiten implementieren"
      ]
    },
    {
      step: "3. Cookie-Policy & Dokumentation",
      description: "Rechtssichere Dokumentation und Information",
      icon: FileText,
      tasks: [
        "Detaillierte Cookie-Policy erstellen",
        "Datenschutzerklärung aktualisieren",
        "Zweckbindung transparent kommunizieren",
        "Kontaktmöglichkeiten bereitstellen"
      ]
    },
    {
      step: "4. Testing & Monitoring",
      description: "Funktionalität testen und kontinuierlich überwachen",
      icon: Activity,
      tasks: [
        "Cross-Browser und Mobile Testing",
        "Consent-Flow Usability testen",
        "Cookie-Setzung nach Einwilligung verifizieren",
        "Compliance-Monitoring einrichten"
      ]
    }
  ];
  const codeExamples = {
    compliant: {
      title: "Planet49-konformer Cookie Banner",
      description: "Rechtssichere Implementierung mit granularer Kontrolle",
      code: `// Planet49-konforme Cookie Banner Implementierung
class CookieConsentManager {
  constructor() {
    this.consentData = this.loadConsent();
    this.initializeBanner();
  }

  // Banner nur anzeigen wenn noch keine Einwilligung vorliegt
  initializeBanner() {
    if (!this.consentData.timestamp) {
      this.showConsentBanner();
    } else {
      this.loadConsentedCookies();
    }
  }

  showConsentBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-consent-banner';
    banner.innerHTML = \`
      <div class="consent-content">
        <h3>Cookie-Einstellungen</h3>
        <p>Wir verwenden Cookies um Ihnen die bestmögliche Nutzung zu ermöglichen.</p>
        
        <div class="cookie-categories">
          \${this.renderCookieCategories()}
        </div>
        
        <div class="consent-actions">
          <button onclick="cookieManager.savePreferences()" class="btn-primary">
            Auswahl speichern
          </button>
          <button onclick="cookieManager.acceptAll()" class="btn-secondary">
            Alle akzeptieren
          </button>
          <button onclick="cookieManager.rejectOptional()" class="btn-tertiary">
            Nur erforderliche
          </button>
        </div>
        
        <a href="/datenschutz" class="privacy-link">Mehr Informationen</a>
      </div>
    \`;
    
    document.body.appendChild(banner);
  }

  renderCookieCategories() {
    const categories = [
      {
        id: 'essential',
        name: 'Erforderlich',
        description: 'Für die Grundfunktionen der Website',
        required: true
      },
      {
        id: 'functional', 
        name: 'Funktional',
        description: 'Verbessern die Nutzererfahrung',
        required: false
      },
      {
        id: 'analytics',
        name: 'Analyse',
        description: 'Helfen uns die Website zu verbessern',
        required: false
      },
      {
        id: 'marketing',
        name: 'Marketing',
        description: 'Für personalisierte Werbung',
        required: false
      }
    ];

    return categories.map(cat => \`
      <div class="cookie-category">
        <label class="category-toggle">
          <input 
            type="checkbox" 
            id="\${cat.id}"
            \${cat.required ? 'checked disabled' : ''}
            data-category="\${cat.id}"
          >
          <span class="category-name">\${cat.name}</span>
          \${cat.required ? '<span class="required-badge">Erforderlich</span>' : ''}
        </label>
        <p class="category-description">\${cat.description}</p>
      </div>
    \`).join('');
  }

  savePreferences() {
    const preferences = {};
    document.querySelectorAll('[data-category]').forEach(checkbox => {
      preferences[checkbox.dataset.category] = checkbox.checked;
    });
    
    this.saveConsent(preferences);
    this.loadConsentedCookies();
    this.hideBanner();
  }

  acceptAll() {
    const allCategories = ['essential', 'functional', 'analytics', 'marketing'];
    const preferences = {};
    allCategories.forEach(cat => preferences[cat] = true);
    
    this.saveConsent(preferences);
    this.loadConsentedCookies();
    this.hideBanner();
  }

  rejectOptional() {
    const preferences = {
      essential: true,
      functional: false,
      analytics: false, 
      marketing: false
    };
    
    this.saveConsent(preferences);
    this.loadConsentedCookies();
    this.hideBanner();
  }

  saveConsent(preferences) {
    const consentData = {
      preferences,
      timestamp: Date.now(),
      version: '1.0'
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    this.consentData = consentData;
  }

  loadConsent() {
    const stored = localStorage.getItem('cookie-consent');
    return stored ? JSON.parse(stored) : {};
  }

  loadConsentedCookies() {
    const { preferences } = this.consentData;
    
    if (preferences.functional) {
      this.loadFunctionalCookies();
    }
    
    if (preferences.analytics) {
      this.loadAnalyticsCookies();
    }
    
    if (preferences.marketing) {
      this.loadMarketingCookies();
    }
  }

  // Widerruf-Funktionalität
  revokeConsent() {
    localStorage.removeItem('cookie-consent');
    // Alle nicht-essentiellen Cookies löschen
    this.clearOptionalCookies();
    this.showConsentBanner();
  }

  clearOptionalCookies() {
    // Implementation zum Löschen nicht-essentieller Cookies
    const nonEssentialCookies = [
      '_ga', '_gid', '_gat', '_gtag', 
      'fbp', '_fbp', 'fr', 'tr',
      // Weitere nicht-essentielle Cookies...
    ];
    
    nonEssentialCookies.forEach(name => {
      document.cookie = \`\${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/\`;
    });
  }
}

// Initialisierung
const cookieManager = new CookieConsentManager();

// Globale Funktionen für Widerruf
window.showCookieSettings = () => cookieManager.showConsentBanner();
window.revokeCookieConsent = () => cookieManager.revokeConsent();`
    },
    nonCompliant: {
      title: "Nicht-konforme Implementierung (VERMEIDEN!)",
      description: "Typische Fehler die gegen Planet49 verstoßen",
      code: `// ❌ NICHT Planet49-konform - NICHT verwenden!

// FEHLER 1: Vorausgewählte Checkboxen
function showBadCookieBanner() {
  const banner = \`
    <div class="cookie-banner">
      <p>Diese Website verwendet Cookies.</p>
      <!-- ❌ FALSCH: Vorausgewählt -->
      <input type="checkbox" checked> Marketing Cookies
      <input type="checkbox" checked> Analytics Cookies
      <button onclick="acceptCookies()">OK</button>
    </div>
  \`;
  document.body.innerHTML += banner;
}

// FEHLER 2: Implied Consent / Fortsetzung der Nutzung
function impliedConsentApproach() {
  const banner = \`
    <div class="cookie-notice">
      <p>Durch die weitere Nutzung stimmen Sie Cookies zu.</p>
      <!-- ❌ FALSCH: Keine aktive Einwilligung -->
      <button onclick="hideBanner()">X</button>
    </div>
  \`;
}

// FEHLER 3: Alle-oder-nichts Ansatz
function binaryChoice() {
  const banner = \`
    <div class="cookie-banner">
      <p>Akzeptieren Sie alle Cookies?</p>
      <!-- ❌ FALSCH: Keine granulare Kontrolle -->
      <button onclick="acceptAll()">Ja</button>
      <button onclick="rejectAll()">Nein</button>
    </div>
  \`;
}

// FEHLER 4: Vorab-Laden von Tracking-Skripten
// ❌ FALSCH: Lädt Tracking vor Einwilligung
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// FEHLER 5: Schwer zu findender Widerruf
function hideWithdrawalOption() {
  // ❌ FALSCH: Widerruf versteckt oder erschwert
  const link = '<a href="/privacy#cookies" style="font-size:8px;">Einstellungen</a>';
}

// FEHLER 6: Unklare Zweckbindung
function vagueDescription() {
  return \`
    <p>Wir verwenden Cookies zur Verbesserung der Nutzererfahrung.</p>
    <!-- ❌ FALSCH: Zu unspezifisch, keine klare Zweckbindung -->
  \`;
}`
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Planet49 EuGH Cookie Urteil C-673/17 – Consent Banner DSGVO-konform" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Planet49 Cookie Urteil EuGH: Keine voreingestellten Checkboxen! DSGVO-konforme Cookie Banner & Consent-Mechanismen implementieren."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Planet49 EuGH Cookie Urteil C-673/17 – Consent Banner DSGVO-konform" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Planet49 Cookie Urteil EuGH: Keine voreingestellten Checkboxen! DSGVO-konforme Cookie Banner & Consent-Mechanismen implementieren." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsjonas.de/wissen/rechtsprechung/planet49-cookie" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow" })
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
              children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/rechtsprechung", className: "flex items-center gap-2", children: [
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
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/10 backdrop-blur-sm rounded-full mb-8 border border-cyan-500/20",
                    children: [
                      /* @__PURE__ */ jsx(Cookie, { className: "h-5 w-5 text-cyan-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-cyan-300", children: "Cookie Consent Urteil" }),
                      /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 text-blue-400 animate-pulse" })
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
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Planet49" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent", children: "Cookie Urteil" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent", children: "EuGH C-673/17" })
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
                      "Das wegweisende Urteil zu Cookie-Consent und",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-cyan-300", children: " voreingestellten Checkboxen" })
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
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Cookie, { className: "h-4 w-4 mr-2" }),
                        "Cookie-Consent Revolution"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                        "1. Oktober 2019"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 mr-2" }),
                        "EU-weit bindend"
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
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-12",
          children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-6 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", className: "data-[state=active]:bg-cyan-500 data-[state=active]:text-white", children: "Überblick" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "ruling", className: "data-[state=active]:bg-cyan-500 data-[state=active]:text-white", children: "Urteil-Details" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "categories", className: "data-[state=active]:bg-cyan-500 data-[state=active]:text-white", children: "Cookie-Kategorien" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "consent", className: "data-[state=active]:bg-cyan-500 data-[state=active]:text-white", children: "Consent-Mechanismen" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", className: "data-[state=active]:bg-cyan-500 data-[state=active]:text-white", children: "Implementation" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "practices", className: "data-[state=active]:bg-cyan-500 data-[state=active]:text-white", children: "Best Practices" })
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
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-cyan-500/30 mb-8", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", children: [
              /* @__PURE__ */ jsx("h2", { id: "inhaltsverzeichnis", className: "text-xl font-bold text-white mb-4", children: "Inhaltsverzeichnis" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#urteilsuebersicht", className: "text-cyan-400 hover:text-cyan-300 transition-colors", children: "1. Urteilsübersicht" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#urteil-details", className: "text-cyan-400 hover:text-cyan-300 transition-colors", children: "2. Urteil-Details" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#cookie-kategorien", className: "text-cyan-400 hover:text-cyan-300 transition-colors", children: "3. Cookie-Kategorien" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#consent-mechanismen", className: "text-cyan-400 hover:text-cyan-300 transition-colors", children: "4. Consent-Mechanismen" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#implementation-guide", className: "text-cyan-400 hover:text-cyan-300 transition-colors", children: "5. Implementation" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#best-practices", className: "text-cyan-400 hover:text-cyan-300 transition-colors", children: "6. Best Practices" }) })
              ] })
            ] }) }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-cyan-500/30", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsx("h2", { id: "urteilsuebersicht", className: "text-2xl font-bold text-white mb-6", children: "Urteilsübersicht" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 leading-relaxed", children: [
                  /* @__PURE__ */ jsx("p", { children: "Am 1. Oktober 2019 fällte der Europäische Gerichtshof (EuGH) ein bahnbrechendes Urteil in der Rechtssache C-673/17 (Planet49 GmbH gegen Bundesverband der Verbraucherzentralen), das die Landschaft für Cookie-Consent grundlegend veränderte." }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "Das Gericht entschied eindeutig, dass ",
                    /* @__PURE__ */ jsx("strong", { children: "voreingestellte Checkboxen" }),
                    " für die Einwilligung in Cookie-Setzung nicht DSGVO-konform sind. Nutzer müssen aktiv und bewusst zustimmen - ein passives Verhalten reicht nicht aus."
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "Diese Entscheidung revolutionierte Cookie-Banner weltweit und zwang Unternehmen zur vollständigen Überarbeitung ihrer Consent-Mechanismen. Der Fokus liegt auf",
                    /* @__PURE__ */ jsx("strong", { children: " aktiver, informierter und granularer Einwilligung" }),
                    ". Ähnlich wie bei",
                    /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung/whatsapp-irland-2021", className: "text-cyan-400 hover:text-cyan-300", children: "Transparenz-Verstößen bei Messaging-Apps" }),
                    "zeigt sich die Bedeutung klarer Nutzerinformation."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Urteilsfakten" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Aktenzeichen:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "C-673/17" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Datum:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "01.10.2019" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Gericht:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "EuGH" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Kläger:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Verbraucherzentrale" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Beklagte:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Planet49 GmbH" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white", children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                  "Volltext herunterladen"
                ] }) })
              ] })
            ] }) }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "ruling", className: "space-y-8", children: [
        /* @__PURE__ */ jsx("h2", { id: "urteil-details", className: "text-3xl font-bold text-white mb-8 text-center", children: "Planet49 Urteil-Details" }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: keyRulings.map((ruling, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-colors", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "px-3 py-1 rounded-full text-xs font-bold",
                ruling.impact === "KRITISCH" ? "bg-red-500/20 text-red-300" : ruling.impact === "HOCH" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"
              ), children: ruling.impact }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: ruling.title }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-3", children: ruling.description }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: ruling.details })
              ] })
            ] }) }) })
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "categories", className: "space-y-8", children: [
        /* @__PURE__ */ jsx("h2", { id: "cookie-kategorien", className: "text-3xl font-bold text-white mb-8 text-center", children: "Cookie-Kategorien nach Planet49" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: cookieCategories.map((category, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            className: "group",
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                  category.color
                ), children: /* @__PURE__ */ jsx(category.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: category.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: category.description })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-700/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Einwilligung:" }),
                  /* @__PURE__ */ jsx("div", { className: "text-white font-semibold", children: category.consent })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-700/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Rechtsgrundlage:" }),
                  /* @__PURE__ */ jsx("div", { className: "text-white text-sm", children: category.legalBasis })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-700/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-2", children: "Beispiele:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-1", children: category.examples.map((example, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-cyan-400" }),
                    /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: example })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-700/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Implementation:" }),
                  /* @__PURE__ */ jsx("div", { className: "text-white text-sm", children: category.implementation })
                ] })
              ] })
            ] }) })
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "consent", className: "space-y-8", children: [
        /* @__PURE__ */ jsx("h2", { id: "consent-mechanismen", className: "text-3xl font-bold text-white mb-8 text-center", children: "DSGVO-konforme Consent-Mechanismen" }),
        /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-8", children: consentMechanisms.map((mechanism, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                  mechanism.color
                ), children: /* @__PURE__ */ jsx(mechanism.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: mechanism.type }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: mechanism.description })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-6", children: mechanism.features.map((feature, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                mechanism.type === "Rechtskonform" ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }) : /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: feature })
              ] }, idx)) }),
              /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4 overflow-auto", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsx(Code, { className: "h-4 w-4 text-cyan-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-cyan-300", children: "Code Beispiel" }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      onClick: () => handleCopy(mechanism.code, mechanism.type),
                      className: "ml-auto",
                      children: copySuccess === mechanism.type ? /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("pre", { className: "text-xs text-slate-300 overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: mechanism.code }) })
              ] }) })
            ] }) })
          },
          index
        )) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mt-12",
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-cyan-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6 text-center", children: "Interactive Cookie Banner Examples" }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-1", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: bannerExample === "compliant" ? "default" : "ghost",
                    onClick: () => setBannerExample("compliant"),
                    className: bannerExample === "compliant" ? "bg-cyan-500" : "",
                    children: "Planet49-konform"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: bannerExample === "nonCompliant" ? "default" : "ghost",
                    onClick: () => setBannerExample("nonCompliant"),
                    className: bannerExample === "nonCompliant" ? "bg-red-500" : "",
                    children: "Nicht-konform"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx(Code, { className: "h-5 w-5 text-cyan-400" }),
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: codeExamples[bannerExample].title }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      onClick: () => handleCopy(codeExamples[bannerExample].code, "interactive"),
                      className: "ml-auto",
                      children: copySuccess === "interactive" ? /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-4", children: codeExamples[bannerExample].description }),
                /* @__PURE__ */ jsx("div", { className: "bg-slate-800 rounded-lg p-4 overflow-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-xs text-slate-300", children: /* @__PURE__ */ jsx("code", { children: codeExamples[bannerExample].code }) }) })
              ] }) })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-8", children: [
        /* @__PURE__ */ jsx("h2", { id: "implementation-guide", className: "text-3xl font-bold text-white mb-8 text-center", children: "Planet49-konforme Cookie Implementation" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: implementationGuide.map((step, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500", children: /* @__PURE__ */ jsx(step.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: step.step }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: step.description })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: step.tasks.map((task, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: task })
              ] }, idx)) })
            ] }) })
          },
          index
        )) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mt-16",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-8 text-center", children: "Branchenspezifische Cookie-Strategien" }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: industryStrategies.map((industry, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: index * 0.1, duration: 0.6 },
                  children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                      /* @__PURE__ */ jsx("div", { className: cn(
                        "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                        industry.color
                      ), children: /* @__PURE__ */ jsx(industry.icon, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-white", children: industry.industry })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-cyan-300 mb-3", children: "Herausforderungen:" }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: industry.challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-orange-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: challenge })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-green-300 mb-3", children: "Lösungsansätze:" }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: industry.solutions.map((solution, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: solution })
                        ] }, idx)) })
                      ] })
                    ] })
                  ] }) })
                },
                index
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "practices", className: "space-y-8", children: [
        /* @__PURE__ */ jsx("h2", { id: "best-practices", className: "text-3xl font-bold text-white mb-8 text-center", children: "Cookie-Compliance Best Practices" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: bestPractices.map((category, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500", children: /* @__PURE__ */ jsx(category.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-white", children: category.category })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: category.practices.map((practice, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: practice })
              ] }, idx)) })
            ] }) })
          },
          index
        )) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-cyan-900/30 to-slate-800/50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent", children: "Planet49-konforme Cookie-Compliance" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300 mb-8 max-w-3xl mx-auto", children: "Implementieren Sie rechtssichere Cookie-Banner und vermeiden Sie kostspielige Abmahnungen. Unsere Experten helfen bei der vollständigen DSGVO-Compliance." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 mr-2" }),
              "Cookie-Compliance Audit"
            ] }),
            /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-8 py-3", children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5 mr-2" }),
              "Kostenlose Beratung"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 grid md:grid-cols-3 gap-6 text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/60 backdrop-blur-sm rounded-xl p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-cyan-400 mb-2", children: "24h" }),
              /* @__PURE__ */ jsx("div", { className: "text-slate-300", children: "Schnelle Umsetzung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/60 backdrop-blur-sm rounded-xl p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-400 mb-2", children: "100%" }),
              /* @__PURE__ */ jsx("div", { className: "text-slate-300", children: "Planet49-konform" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/60 backdrop-blur-sm rounded-xl p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-indigo-400 mb-2", children: "€0" }),
              /* @__PURE__ */ jsx("div", { className: "text-slate-300", children: "Erstberatung kostenfrei" })
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent", children: "Verwandte Ressourcen" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Weitere wichtige Urteile und praktische Cookie-Leitfäden" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          title: "Cookie-Law Guide",
          description: "Vollständiger Leitfaden zur DSGVO-konformen Cookie-Nutzung",
          icon: Cookie,
          link: "/wissen/leitfaden/cookie-law",
          color: "from-cyan-500 to-blue-500"
        },
        {
          title: "Google Analytics Austria",
          description: "Österreichisches Urteil zu Analytics ohne Einwilligung",
          icon: BarChart3,
          link: "/wissen/rechtsprechung/google-analytics-austria",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "Meta Ireland 2024",
          description: "Aktuelles Urteil zu Social Media Tracking",
          icon: Scale,
          link: "/wissen/rechtsprechung/meta-irland-2024",
          color: "from-indigo-500 to-purple-500"
        }
      ].map((resource, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -5 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
              resource.color
            ), children: /* @__PURE__ */ jsx(resource.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors", children: resource.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: resource.description }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
              "w-full bg-gradient-to-r text-white",
              resource.color
            ), children: /* @__PURE__ */ jsxs(Link, { to: resource.link, className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Mehr erfahren" }),
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
  Planet49CookieCase as default
};
