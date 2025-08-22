import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { Helmet } from "react-helmet-async";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { ArrowLeft, Euro, MessageSquare, Calendar, Building2, Eye, CheckCircle2, Download, Users, Shield, AlertTriangle, Info, Copy, Smartphone, MessageCircle, Video, Lightbulb, Search, Monitor, ArrowRight } from "lucide-react";
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
const WhatsAppIrelandCase = () => {
  const [activeTab, setActiveTab] = useState("overview");
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
  const violationBreakdown = [
    {
      violation: "Mangelnde Transparenz bei Datenverarbeitung",
      amount: "€90 Millionen",
      percentage: 40,
      description: "Unklare Informationen über Verarbeitungszwecke und Datennutzung",
      severity: "KRITISCH",
      articles: ["Art. 12 DSGVO", "Art. 13 DSGVO"]
    },
    {
      violation: "Unzureichende Datenschutzerklärung",
      amount: "€67.5 Millionen",
      percentage: 30,
      description: "Fehlende und unverständliche Informationen für Betroffene",
      severity: "HOCH",
      articles: ["Art. 14 DSGVO", "Art. 12 DSGVO"]
    },
    {
      violation: "Verletzung der Informationspflichten",
      amount: "€45 Millionen",
      percentage: 20,
      description: "Mangelhafte Aufklärung über Betroffenenrechte",
      severity: "HOCH",
      articles: ["Art. 13 DSGVO", "Art. 14 DSGVO"]
    },
    {
      violation: "Unklare Rechtsgrundlagen-Kommunikation",
      amount: "€22.5 Millionen",
      percentage: 10,
      description: "Fehlende Klarstellung der rechtlichen Basis für Datenverarbeitung",
      severity: "MITTEL",
      articles: ["Art. 6 DSGVO", "Art. 12 DSGVO"]
    }
  ];
  const transparencyRequirements = [
    {
      area: "Informationspflichten",
      icon: Info,
      color: "from-emerald-500 to-teal-500",
      requirements: [
        "Klare Identität des Verantwortlichen (Art. 13 Abs. 1 lit. a)",
        "Kontaktdaten des Datenschutzbeauftragten (Art. 13 Abs. 1 lit. b)",
        "Zwecke und Rechtsgrundlagen der Verarbeitung (Art. 13 Abs. 1 lit. c)",
        "Kategorien personenbezogener Daten (Art. 14 Abs. 1 lit. d)"
      ]
    },
    {
      area: "Verständlichkeit",
      icon: Eye,
      color: "from-teal-500 to-cyan-500",
      requirements: [
        "Präzise, transparente und verständliche Sprache (Art. 12 Abs. 1)",
        "Leicht zugängliche Informationen (Art. 12 Abs. 1)",
        "Angemessene Darstellung für Zielgruppe",
        "Strukturierte und übersichtliche Präsentation"
      ]
    },
    {
      area: "Betroffenenrechte",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      requirements: [
        "Recht auf Auskunft (Art. 15 DSGVO)",
        "Recht auf Berichtigung (Art. 16 DSGVO)",
        "Recht auf Löschung (Art. 17 DSGVO)",
        "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)"
      ]
    },
    {
      area: "Messaging-spezifische Anforderungen",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-500",
      requirements: [
        "Aufklärung über End-to-End-Verschlüsselung",
        "Transparenz bei Metadaten-Verarbeitung",
        "Klarstellung zu Backup- und Sync-Funktionen",
        "Information über Gruppenchat-Datenverarbeitung"
      ]
    }
  ];
  const messagingCompliance = [
    {
      category: "Messaging Apps",
      icon: Smartphone,
      urgency: "KRITISCH",
      impacts: [
        "Transparenz-Dashboard für Nutzer implementieren",
        "Klare Aufklärung über Metadaten-Sammlung",
        "Granulare Einstellungen für Datenverarbeitung",
        "Verständliche Erklärung der Verschlüsselung"
      ]
    },
    {
      category: "Kommunikationsplattformen",
      icon: MessageCircle,
      urgency: "HOCH",
      impacts: [
        "Detaillierte Datenschutzerklärungen erstellen",
        "Benutzerfreundliche Privacy Center einrichten",
        "Proaktive Kommunikation bei Änderungen",
        "Einfache Opt-out Mechanismen implementieren"
      ]
    },
    {
      category: "Business Communications",
      icon: Building2,
      urgency: "HOCH",
      impacts: [
        "B2B Messaging DSGVO-konform gestalten",
        "Kundenkommunikation rechtssicher aufsetzen",
        "CRM-Integration datenschutzkonform konfigurieren",
        "Marketing-Nachrichten compliance-konform senden"
      ]
    },
    {
      category: "Video & Voice Calls",
      icon: Video,
      urgency: "MITTEL",
      impacts: [
        "Aufzeichnungs-Features transparent kommunizieren",
        "Teilnehmer-Daten minimieren und schützen",
        "Anruf-Metadaten DSGVO-konform verarbeiten",
        "Cloud-Speicherung rechtssicher gestalten"
      ]
    }
  ];
  const implementationSteps = [
    {
      phase: "Sofortmaßnahmen (0-30 Tage)",
      priority: "KRITISCH",
      color: "from-red-500 to-pink-500",
      steps: [
        "Audit der aktuellen Datenschutzerklärung durchführen",
        "Transparenz-Gaps in Messaging-Features identifizieren",
        "Rechtliche Risikobewertung für ähnliche Verstöße",
        "Nutzer-Informationen auf Verständlichkeit prüfen"
      ]
    },
    {
      phase: "Kurzzeitmaßnahmen (1-3 Monate)",
      priority: "HOCH",
      color: "from-orange-500 to-red-500",
      steps: [
        "Überarbeitung aller Datenschutz-Texte",
        "Implementation von Privacy Dashboards",
        "Benutzerfreundliche Einstellungen entwickeln",
        "Compliance-konforme Messaging-Features umsetzen"
      ]
    },
    {
      phase: "Langfristige Strategie (3-12 Monate)",
      priority: "MITTEL",
      color: "from-emerald-500 to-teal-500",
      steps: [
        "Privacy-by-Design in alle Messaging-Features",
        "Kontinuierliches Transparenz-Monitoring",
        "Nutzer-Feedback zur Verständlichkeit sammeln",
        "Regelmäßige Compliance-Audits etablieren"
      ]
    }
  ];
  const codeExamples = [
    {
      title: "DSGVO-konforme Einwilligungsabfrage",
      language: "TypeScript",
      code: `// Granulare Einwilligung für Messaging-Features
interface ConsentRequest {
  messageData: boolean;
  metadata: boolean;
  analytics: boolean;
  backup: boolean;
}

const requestMessagingConsent = async (): Promise<ConsentRequest> => {
  return await showConsentDialog({
    title: "Messaging-Datenverarbeitung",
    sections: [
      {
        type: "messageData",
        title: "Nachrichten-Inhalte",
        description: "Zur Übermittlung und Anzeige Ihrer Nachrichten",
        required: true,
        legalBasis: "Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)"
      },
      {
        type: "metadata", 
        title: "Nachrichten-Metadaten",
        description: "Zeitstempel, Empfänger, Zustellstatus",
        required: false,
        legalBasis: "Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)"
      }
    ]
  });
};`
    },
    {
      title: "Transparenz-Dashboard Component",
      language: "React",
      code: `const PrivacyDashboard: React.FC = () => {
  const [dataUsage, setDataUsage] = useState<DataUsageInfo>();
  
  return (
    <div className="privacy-dashboard">
      <section className="data-collection">
        <h3>Welche Daten sammeln wir?</h3>
        <ul>
          <li>✓ Nachrichten-Inhalte (Ende-zu-Ende verschlüsselt)</li>
          <li>✓ Metadaten (Zeitstempel, Empfänger)</li>
          <li>✗ Standortdaten (deaktiviert)</li>
        </ul>
      </section>
      
      <section className="data-rights">
        <h3>Ihre Rechte</h3>
        <Button onClick={exportData}>Daten herunterladen</Button>
        <Button onClick={deleteAccount}>Account löschen</Button>
        <Button onClick={manageConsent}>Einstellungen ändern</Button>
      </section>
    </div>
  );
};`
    },
    {
      title: "DSGVO-konforme Datenminimierung",
      language: "TypeScript",
      code: `class MessagingDataProcessor {
  // Automatische Löschung nach DSGVO-Prinzipien
  async processMessage(message: Message) {
    // Nur notwendige Metadaten speichern
    const minimalMetadata = {
      timestamp: message.timestamp,
      messageId: message.id,
      // Sender/Empfänger nur wenn rechtlich erforderlich
      ...(this.isGroupChat(message) && { 
        participants: message.participants 
      })
    };
    
    // Automatische Löschung nach Zweckerfüllung
    this.scheduleDataDeletion(minimalMetadata, {
      retention: "30_DAYS",
      reason: "MESSAGE_DELIVERY_COMPLETED"
    });
  }
  
  // Transparente Datenverarbeitung
  async getDataProcessingInfo(userId: string) {
    return {
      collectedData: await this.getUserDataCategories(userId),
      purposes: this.getProcessingPurposes(),
      legalBasis: this.getLegalBasisPerPurpose(),
      retentionPeriods: this.getRetentionSchedule(),
      thirdParties: this.getThirdPartyProcessors()
    };
  }
}`
    }
  ];
  const industryGuidelines = [
    {
      industry: "Messaging Apps",
      guidelines: [
        "End-to-End-Verschlüsselung transparent kommunizieren",
        "Metadaten-Verarbeitung detailliert erklären",
        "Backup- und Sync-Funktionen klar beschreiben",
        "Gruppenchat-Datenschutz verständlich darstellen"
      ]
    },
    {
      industry: "Business Communication",
      guidelines: [
        "B2B-Messaging rechtssicher implementieren",
        "Kundenkommunikation DSGVO-konform gestalten",
        "CRM-Integration datenschutzkonform konfigurieren",
        "Marketing-Automation compliance-ready aufsetzen"
      ]
    },
    {
      industry: "Social Platforms",
      guidelines: [
        "Direct Messages transparent verarbeiten",
        "Story/Status-Features datenschutzkonform entwickeln",
        "Freundschafts-/Kontakt-Daten minimieren",
        "Content-Moderation rechtssicher gestalten"
      ]
    },
    {
      industry: "Enterprise Solutions",
      guidelines: [
        "Workplace-Kommunikation DSGVO-ready implementieren",
        "Team-Messaging rechtssicher aufsetzen",
        "File-Sharing datenschutzkonform gestalten",
        "Admin-Controls für Compliance bereitstellen"
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "WhatsApp Irland DSGVO Bußgeld €225 Mio – Messaging Compliance" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "WhatsApp Ireland €225 Mio Bußgeld wegen Transparenz-Verstößen. Messaging-Apps DSGVO-konform gestalten & Compliance umsetzen."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "WhatsApp Irland DSGVO Bußgeld €225 Mio – Messaging Compliance" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "WhatsApp Ireland €225 Mio Bußgeld wegen Transparenz-Verstößen. Messaging-Apps DSGVO-konform gestalten & Compliance umsetzen." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsjonas.de/wissen/rechtsprechung/whatsapp-irland-2021" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-spin-slow" })
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
              children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/rechtsprechung", className: "flex items-center gap-2", children: [
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
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20",
                    children: [
                      /* @__PURE__ */ jsx(Euro, { className: "h-5 w-5 text-emerald-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-emerald-300", children: "€225 Millionen Bußgeld" }),
                      /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 text-teal-400 animate-pulse" })
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
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "WhatsApp Ireland" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent", children: "€225 Mio Bußgeld" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent", children: "Messaging Compliance" })
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
                      "€225 Millionen Bußgeld gegen",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-emerald-300", children: " WhatsApp Ireland" }),
                      " wegen Transparenz-Verstößen und ihre Auswirkungen auf Messaging-Compliance"
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
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4 mr-2" }),
                        "€225 Mio. Strafe"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                        "2. September 2021"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 mr-2" }),
                        "Irish DPC"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 mr-2" }),
                        "Transparenz-Verstöße"
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
          children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-5 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", className: "data-[state=active]:bg-emerald-500 data-[state=active]:text-white", children: "Überblick" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "violations", className: "data-[state=active]:bg-emerald-500 data-[state=active]:text-white", children: "Verstöße" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "transparency", className: "data-[state=active]:bg-emerald-500 data-[state=active]:text-white", children: "Transparenz" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "messaging", className: "data-[state=active]:bg-emerald-500 data-[state=active]:text-white", children: "Messaging-Compliance" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", className: "data-[state=active]:bg-emerald-500 data-[state=active]:text-white", children: "Implementation" })
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
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-emerald-500/30 mb-8", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", children: [
              /* @__PURE__ */ jsx("h2", { id: "inhaltsverzeichnis", className: "text-xl font-bold text-white mb-4", children: "Inhaltsverzeichnis" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#whatsapp-verfahren", className: "text-emerald-400 hover:text-emerald-300 transition-colors", children: "1. Das WhatsApp Ireland Verfahren" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#zentrale-erkenntnisse", className: "text-emerald-400 hover:text-emerald-300 transition-colors", children: "2. Zentrale Erkenntnisse" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#verstoesse-details", className: "text-emerald-400 hover:text-emerald-300 transition-colors", children: "3. Verstöße-Details" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#transparenz-anforderungen", className: "text-emerald-400 hover:text-emerald-300 transition-colors", children: "4. Transparenz-Anforderungen" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#messaging-compliance", className: "text-emerald-400 hover:text-emerald-300 transition-colors", children: "5. Messaging-Compliance" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#implementation", className: "text-emerald-400 hover:text-emerald-300 transition-colors", children: "6. Implementation" }) })
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
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-emerald-500/30", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsx("h2", { id: "whatsapp-verfahren", className: "text-2xl font-bold text-white mb-6", children: "Das WhatsApp Ireland Verfahren" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 leading-relaxed", children: [
                  /* @__PURE__ */ jsx("p", { children: "Am 2. September 2021 verhängte die irische Datenschutzkommission (DPC) eine Geldbuße von 225 Millionen Euro gegen WhatsApp Ireland Limited wegen schwerwiegender Verstöße gegen die Transparenz-Anforderungen der DSGVO." }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "Das Verfahren konzentrierte sich auf die mangelnde Transparenz bei der Datenverarbeitung, insbesondere auf die unzureichende Information der Nutzer über die Verarbeitungszwecke, Rechtsgrundlagen und Betroffenenrechte gemäß den Artikeln 12-14 DSGVO. Ähnlich wie bei ",
                    /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung/planet49-cookie", className: "text-emerald-400 hover:text-emerald-300", children: "Cookie-Consent-Verstößen" }),
                    "zeigt sich auch hier die Bedeutung klarer Nutzerinformation."
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "Diese Entscheidung markiert einen Wendepunkt für Messaging-Apps und Kommunikationsplattformen und etabliert neue Standards für die Transparenz-Kommunikation in der Branche. Weitere relevante Urteile finden Sie in unserer",
                    /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung", className: "text-emerald-400 hover:text-emerald-300", children: "Rechtsprechungs-Übersicht" }),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Die DPC bemängelte insbesondere die Komplexität und Unverständlichkeit der Datenschutzerklärung sowie die fehlende Klarheit über die verschiedenen Verarbeitungszwecke und deren rechtliche Grundlagen." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Verfahren Details" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Behörde:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Irish DPC" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Datum:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "2. September 2021" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Betroffene:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "WhatsApp Ireland Ltd." })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Bußgeld:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "€225 Mio." })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Schwerpunkt:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Transparenz" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Status:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Rechtskräftig" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Betroffene DSGVO-Artikel" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Art. 12 - Transparente Information" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Art. 13 - Informationspflichten" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Art. 14 - Informationen bei Dritterhebung" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white", children: [
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
            transition: { duration: 0.6, delay: 0.2 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h2", { id: "zentrale-erkenntnisse", className: "text-2xl font-bold text-white mb-8 text-center", children: "Zentrale Erkenntnisse des Falls" }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                {
                  icon: Eye,
                  title: "Transparenz-Revolution",
                  description: "Neue Standards für verständliche Datenschutzkommunikation in Messaging-Apps",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: Users,
                  title: "Nutzer-Empowerment",
                  description: "Stärkung der Betroffenenrechte durch bessere Information und Kontrolle",
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  icon: Shield,
                  title: "Industry Impact",
                  description: "Weitreichende Auswirkungen auf das gesamte Messaging- und Communication-Ökosystem",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((insight, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "inline-flex p-4 rounded-full bg-gradient-to-r mb-4",
                  insight.color
                ), children: /* @__PURE__ */ jsx(insight.icon, { className: "h-8 w-8 text-white" }) }),
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-3", children: insight.title }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm", children: insight.description })
              ] }, index)) })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "violations", className: "space-y-8", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-emerald-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h2", { id: "verstoesse-details", className: "text-2xl font-bold text-white mb-8 text-center", children: "Verstöße-Aufschlüsselung: €225 Millionen" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: violationBreakdown.map((item, index) => /* @__PURE__ */ jsxs(
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
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: item.violation }),
                          /* @__PURE__ */ jsx(Badge, { className: cn(
                            "text-xs",
                            item.severity === "KRITISCH" ? "bg-red-500/20 text-red-300" : item.severity === "HOCH" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"
                          ), children: item.severity })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm mb-3", children: item.description }),
                        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: item.articles.map((article, idx) => /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-500/20 text-emerald-300 text-xs", children: article }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-right ml-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-emerald-400", children: item.amount }),
                        /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
                          item.percentage,
                          "% der Gesamtsumme"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-600 rounded-full h-2", children: /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full",
                        style: { width: `${item.percentage}%` }
                      }
                    ) })
                  ]
                },
                index
              )) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Was ist schiefgelaufen?" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-emerald-400 mb-4", children: "Hauptkritikpunkte der DPC:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                    "Unklare und komplexe Datenschutzerklärung",
                    "Fehlende Transparenz über Verarbeitungszwecke",
                    "Unzureichende Information über Betroffenenrechte",
                    "Mangelnde Klarheit bei Rechtsgrundlagen",
                    "Schwer verständliche Sprache für Durchschnittsnutzer"
                  ].map((point, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: point })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-emerald-400 mb-4", children: "Besondere Messaging-Probleme:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                    "Unklare Kommunikation über Metadaten-Sammlung",
                    "Fehlende Transparenz bei Business-Features",
                    "Unverständliche Erklärung der Verschlüsselung",
                    "Mangelnde Information über Gruppenchat-Datenverarbeitung",
                    "Komplizierte Opt-out Mechanismen"
                  ].map((point, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: point })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "transparency", className: "space-y-8", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-emerald-500/30 mb-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h2", { id: "transparenz-anforderungen", className: "text-2xl font-bold text-white mb-6 text-center", children: "DSGVO Transparenz-Anforderungen für Messaging-Apps" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-center mb-8", children: "Die Artikel 12-14 DSGVO definieren klare Anforderungen an die Transparenz der Datenverarbeitung. Hier sind die wichtigsten Compliance-Bereiche für Messaging-Plattformen:" })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: transparencyRequirements.map((area, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            className: "group",
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                  area.color
                ), children: /* @__PURE__ */ jsx(area.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: area.area })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: area.requirements.map((requirement, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: requirement })
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
            transition: { duration: 0.6, delay: 0.4 },
            className: "mt-12",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-8 text-center", children: "DSGVO-konforme Code-Beispiele" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: codeExamples.map((example, index) => /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-white", children: example.title }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-500/20 text-emerald-300", children: example.language }),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        onClick: () => handleCopy(example.code, example.title),
                        className: "border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10",
                        children: [
                          /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }),
                          copySuccess === example.title ? "Kopiert!" : "Kopieren"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsx("pre", { className: "bg-slate-900/80 rounded-lg p-6 overflow-x-auto text-sm", children: /* @__PURE__ */ jsx("code", { className: "text-slate-300", children: example.code }) })
              ] }) }, index)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "messaging", className: "space-y-8", children: [
        /* @__PURE__ */ jsx("h2", { id: "messaging-compliance", className: "text-3xl font-bold text-white mb-8 text-center", children: "Messaging-Compliance nach WhatsApp Ireland" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: messagingCompliance.map((category, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500", children: /* @__PURE__ */ jsx(category.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: category.category }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "px-3 py-1",
                  category.urgency === "KRITISCH" ? "bg-red-500/20 text-red-300" : category.urgency === "HOCH" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"
                ), children: category.urgency })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: category.impacts.map((impact, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: impact })
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
            transition: { duration: 0.6, delay: 0.4 },
            className: "mt-12",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-8 text-center", children: "Branchenspezifische Compliance-Leitfäden" }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: industryGuidelines.map((industry, index) => /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500", children: /* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-white" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: industry.industry })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industry.guidelines.map((guideline, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: guideline })
                ] }, idx)) })
              ] }) }, index)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mb-12",
            children: [
              /* @__PURE__ */ jsx("h2", { id: "implementation", className: "text-3xl font-bold text-white mb-8 text-center", children: "Messaging-Compliance Implementation Roadmap" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: implementationSteps.map((phase, index) => /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                    phase.color
                  ), children: phase.priority }),
                  /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-white", children: phase.phase })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: phase.steps.map((step, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: step })
                ] }, idx)) })
              ] }) }, index)) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-emerald-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6 text-center", children: "Best Practices für Messaging-Transparenz" }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                {
                  icon: Eye,
                  title: "Privacy by Design",
                  practices: [
                    "Transparenz von Anfang an mitdenken",
                    "Nutzer-zentrierte Datenschutz-UX",
                    "Proaktive Kommunikation implementieren"
                  ]
                },
                {
                  icon: Users,
                  title: "User Empowerment",
                  practices: [
                    "Granulare Privatsphäre-Einstellungen",
                    "Einfache Datenexport-Funktionen",
                    "Verständliche Recht-Ausübung"
                  ]
                },
                {
                  icon: Shield,
                  title: "Continuous Compliance",
                  practices: [
                    "Regelmäßige Transparenz-Audits",
                    "Nutzer-Feedback Integration",
                    "Rechtsprechungs-Monitoring"
                  ]
                }
              ].map((practice, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "inline-flex p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-4", children: /* @__PURE__ */ jsx(practice.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: practice.title }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: practice.practices.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm text-left", children: item })
                ] }, idx)) })
              ] }, index)) })
            ] }) })
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-emerald-900/30 to-slate-800/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent", children: "Messaging-Compliance Services" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Vermeiden Sie teure Transparenz-Verstöße mit unseren spezialisierten Services" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          title: "Messaging Audit",
          description: "Umfassende Prüfung Ihrer Messaging-App auf Transparenz-Compliance",
          icon: Search,
          link: "/services/messaging-audit",
          color: "from-emerald-500 to-teal-500"
        },
        {
          title: "Transparenz-Optimierung",
          description: "Entwicklung DSGVO-konformer Datenschutzkommunikation für Messaging-Plattformen",
          icon: Eye,
          link: "/services/transparency-optimization",
          color: "from-teal-500 to-cyan-500"
        },
        {
          title: "Compliance Monitoring",
          description: "Kontinuierliche Überwachung und Updates für Messaging-Compliance",
          icon: Monitor,
          link: "/services/compliance-monitoring",
          color: "from-cyan-500 to-blue-500"
        }
      ].map((cta, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -5 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
              cta.color
            ), children: /* @__PURE__ */ jsx(cta.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors", children: cta.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: cta.description }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
              "w-full bg-gradient-to-r text-white",
              cta.color
            ), children: /* @__PURE__ */ jsxs(Link, { to: cta.link, className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Mehr erfahren" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
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
          transition: { duration: 0.8, delay: 0.4 },
          className: "text-center mt-16",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Brauchen Sie sofortige Hilfe bei Messaging-Compliance?" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: "Unsere Experten unterstützen Sie bei der DSGVO-konformen Gestaltung Ihrer Messaging-Plattform" }),
            /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3", children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 mr-2" }),
              "Kostenlose Beratung anfordern"
            ] })
          ] }) })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  WhatsAppIrelandCase as default
};
