import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { Gavel, Timer, Lock, Euro, PlayCircle, Calendar, Monitor, Smartphone, PhoneCall, Mail, CheckCircle2, MessageCircle, Workflow, BarChart3, Eye, BadgeCheck, Server, Zap, Clock, TrendingUp, HardDrive, ShieldCheck, FileText, Network, Key, Bell, Download, ArrowRight, Rocket, Shield, Award } from "lucide-react";
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
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
const WhistleblowerSystemToolProduct = () => {
  const [caseResolutionRate, setCaseResolutionRate] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setCaseResolutionRate((prev) => {
          if (prev >= 94) {
            clearInterval(interval);
            return 94;
          }
          return prev + 1;
        });
      }, 20);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const benefits = [
    {
      icon: Gavel,
      title: "EU-Richtlinien-konform",
      description: "Erfüllt alle Anforderungen der EU-Whistleblower-Richtlinie",
      stat: "100% Compliance"
    },
    {
      icon: Timer,
      title: "< 24h Einsatzbereit",
      description: "Von der Bestellung bis zum ersten Meldekanal",
      stat: "Plug-and-Play"
    },
    {
      icon: Lock,
      title: "Ende-zu-Ende verschlüsselt",
      description: "Höchste Sicherheitsstandards für Anonymität",
      stat: "Zero-Knowledge"
    },
    {
      icon: Euro,
      title: "90% Kosteneinsparung",
      description: "vs. interne Entwicklung und Rechtsberatung",
      stat: "ROI in 30 Tagen"
    }
  ];
  const technicalSpecs = [
    {
      category: "Sicherheit",
      specs: [
        { label: "Verschlüsselung", value: "AES-256 Ende-zu-Ende", icon: Lock },
        { label: "Anonymisierung", value: "Zero-Knowledge Architektur", icon: Eye },
        { label: "ISO Zertifizierung", value: "27001, 27017, 27018", icon: BadgeCheck },
        { label: "Hosting", value: "EU-DSGVO konforme Rechenzentren", icon: Server }
      ]
    },
    {
      category: "Performance",
      specs: [
        { label: "Verfügbarkeit", value: "99.9% SLA Garantie", icon: Zap },
        { label: "Response Time", value: "< 200ms global", icon: Clock },
        { label: "Skalierung", value: "Auto-Scaling unbegrenzt", icon: TrendingUp },
        { label: "Backup", value: "3x täglich, 7 Jahre Aufbewahrung", icon: HardDrive }
      ]
    },
    {
      category: "Compliance",
      specs: [
        { label: "EU-Richtlinie", value: "2019/1937 vollständig erfüllt", icon: Gavel },
        { label: "DSGVO", value: "Art. 6, 7, 32 compliance", icon: ShieldCheck },
        { label: "Dokumentation", value: "Vollständiger Audit-Trail", icon: FileText },
        { label: "Fristen", value: "Automatisches Fristenmanagement", icon: Calendar }
      ]
    },
    {
      category: "Integration",
      specs: [
        { label: "API", value: "REST API v2.0", icon: Network },
        { label: "SSO", value: "SAML, OAuth 2.0, OIDC", icon: Key },
        { label: "Webhooks", value: "Real-time Benachrichtigungen", icon: Bell },
        { label: "Export", value: "PDF, Excel, JSON, XML", icon: Download }
      ]
    }
  ];
  const features = [
    {
      icon: MessageCircle,
      title: "Multi-Channel Meldesystem",
      description: "Verschiedene Wege für Hinweisgeber - maximale Zugänglichkeit",
      details: [
        "Webportal mit intuitiver Benutzerführung",
        "Mobile App für iOS und Android",
        "24/7 Telefon-Hotline mit Live-Agenten",
        "E-Mail-Gateway mit Verschlüsselung",
        "Briefkasten für analoge Meldungen"
      ],
      highlight: "5 Meldekanäle"
    },
    {
      icon: Lock,
      title: "Maximale Anonymität",
      description: "Schutz der Identität mit modernster Kryptographie",
      details: [
        "Tor-Integration für IP-Anonymisierung",
        "Zero-Knowledge Verschlüsselung",
        "Pseudonyme Kommunikation möglich",
        "Sichere Dateiübertragung bis 100MB",
        "Automatische Metadaten-Entfernung"
      ],
      highlight: "NSA-sicher"
    },
    {
      icon: Workflow,
      title: "Intelligentes Case Management",
      description: "KI-gestützte Workflows für effiziente Bearbeitung",
      details: [
        "Automatische Kategorisierung von Meldungen",
        "Smart-Routing an zuständige Personen",
        "Eskalations-Management mit Fristen",
        "Statusverfolgung für Hinweisgeber",
        "Vollständige Dokumentation aller Schritte"
      ],
      highlight: "7 Tage Ø Bearbeitung"
    },
    {
      icon: BarChart3,
      title: "Compliance Analytics",
      description: "Detaillierte Auswertungen für Management und Behörden",
      details: [
        "Real-time Compliance-Dashboard",
        "Trend-Analysen und Muster-Erkennung",
        "Anonymisierte Berichterstattung",
        "Regulatorische Reports auf Knopfdruck",
        "KPI-Tracking und Benchmarking"
      ],
      highlight: "Audit-ready"
    }
  ];
  const testimonials = [];
  const complianceFeatures = [
    {
      title: "Sichere Meldekanäle",
      description: "Mindestens ein Kanal muss verfügbar sein",
      status: "compliant",
      details: ["Webportal 24/7", "Telefon-Hotline", "E-Mail verschlüsselt", "Mobile App", "Postweg"]
    },
    {
      title: "Anonymität gewährleisten",
      description: "Schutz der Identität des Hinweisgebers",
      status: "compliant",
      details: ["Anonyme Meldungen", "Pseudonymisierung", "IP-Anonymisierung", "Metadaten-Schutz"]
    },
    {
      title: "Fristgerechte Bearbeitung",
      description: "7 Tage Bestätigung, 3 Monate Bearbeitung",
      status: "compliant",
      details: ["Auto-Bestätigung", "Fristen-Tracking", "Eskalation", "Status-Updates"]
    },
    {
      title: "Vertraulichkeit sicherstellen",
      description: "Need-to-know Prinzip und Zugriffskontrollen",
      status: "compliant",
      details: ["Rollenbasierte Zugriffe", "Audit-Logs", "Verschlüsselung", "Datenschutz"]
    },
    {
      title: "Dokumentation führen",
      description: "Nachweis ordnungsgemäßer Bearbeitung",
      status: "compliant",
      details: ["Vollständiger Audit-Trail", "Compliance-Reports", "Behörden-Export"]
    },
    {
      title: "Schutz vor Vergeltung",
      description: "Verbot von Benachteiligungen überwachen",
      status: "compliant",
      details: ["Monitoring-Tools", "Eskalation", "Legal Support", "Beweissicherung"]
    }
  ];
  const faqs = [
    {
      question: "Wie schnell ist das Hinweisgebersystem einsatzbereit?",
      answer: "Das System ist innerhalb von 24 Stunden vollständig konfiguriert und einsatzbereit. Wir übernehmen die komplette Einrichtung und Schulung Ihrer Mitarbeiter. Die meisten Kunden können bereits am nächsten Tag erste Meldungen entgegennehmen."
    },
    {
      question: "Ist das System wirklich EU-Richtlinien-konform?",
      answer: "Ja, unser System erfüllt 100% der EU-Whistleblower-Richtlinie 2019/1937. Es wurde von spezialisierten Compliance-Anwälten entwickelt und wird regelmäßig auf Rechtskonformität geprüft. Wir übernehmen die rechtliche Haftung für die Compliance."
    },
    {
      question: "Wie wird die Anonymität der Hinweisgeber geschützt?",
      answer: "Wir verwenden Zero-Knowledge-Verschlüsselung und können technisch nicht auf die Identität der Hinweisgeber zugreifen. Optional ist Tor-Integration verfügbar. Selbst wir als Anbieter können Hinweisgeber nicht identifizieren - maximaler Schutz durch Design."
    },
    {
      question: "Welche Meldekanäle werden unterstützt?",
      answer: "Das System bietet 5 verschiedene Meldekanäle: Webportal, mobile App, 24/7-Telefon-Hotline, verschlüsselte E-Mail und traditioneller Postweg. Alle Kanäle sind vollständig in das Case-Management integriert."
    },
    {
      question: "Wie funktioniert die automatische Fallbearbeitung?",
      answer: "KI kategorisiert eingehende Meldungen automatisch und weist sie den zuständigen Personen zu. Fristen werden automatisch überwacht, Eskalationen ausgelöst und Status-Updates an Hinweisgeber versandt. Der gesamte Prozess ist auditierbar dokumentiert."
    },
    {
      question: "Wie schnell ist die Implementierung?",
      answer: "Die Implementierung dauert typischerweise 1-2 Wochen. Wir garantieren die erfolgreiche Einrichtung und Compliance-Konformität Ihres Systems."
    }
  ];
  const integrations = [
    { name: "Microsoft Teams", logo: "💼", category: "Communication" },
    { name: "Slack", logo: "💬", category: "Communication" },
    { name: "SAP SuccessFactors", logo: "📊", category: "HR" },
    { name: "Workday", logo: "🏢", category: "HR" },
    { name: "Azure AD", logo: "🔵", category: "Identity" },
    { name: "Okta", logo: "🆔", category: "Identity" },
    { name: "ServiceNow", logo: "🛠️", category: "ITSM" },
    { name: "Jira", logo: "🎯", category: "Project Management" },
    { name: "Salesforce", logo: "☁️", category: "CRM" },
    { name: "Zapier", logo: "⚡", category: "Automation" },
    { name: "Power BI", logo: "📈", category: "Analytics" },
    { name: "Tableau", logo: "📊", category: "Analytics" }
  ];
  const channels = [
    {
      icon: Monitor,
      name: "Webportal",
      description: "Responsive Web-Interface",
      features: ["24/7 verfügbar", "Multi-Sprachen", "Datei-Upload bis 100MB", "Anonymer Chat"]
    },
    {
      icon: Smartphone,
      name: "Mobile App",
      description: "iOS & Android Apps",
      features: ["Offline-Modus", "Push-Benachrichtigungen", "Biometrische Sicherheit", "Voice-to-Text"]
    },
    {
      icon: PhoneCall,
      name: "24/7 Hotline",
      description: "Telefon-Support",
      features: ["Mehrsprachig", "Live-Agenten", "Aufzeichnung optional", "Sofort-Weiterleitung"]
    },
    {
      icon: Mail,
      name: "E-Mail Gateway",
      description: "Verschlüsselte E-Mails",
      features: ["PGP-Verschlüsselung", "Auto-Anonymisierung", "Spam-Schutz", "Delivery-Bestätigung"]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 opacity-5", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    } }) }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        className: "relative pt-32 pb-20 px-6 overflow-hidden",
        style: { opacity, scale },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10" }),
          /* @__PURE__ */ jsx("div", { className: "container mx-auto relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full mb-6", children: [
                    /* @__PURE__ */ jsx(Gavel, { className: "w-4 h-4 text-emerald-600" }),
                    /* @__PURE__ */ jsx("span", { className: "text-emerald-800 font-medium text-sm", children: "EU-Richtlinien-konform seit Dez 2023" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight", children: [
                    "Hinweisgebersystem",
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600", children: "das schützt" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed", children: "Das sicherste Hinweisgebersystem Europas. Ende-zu-Ende verschlüsselt, EU-Richtlinien-konform, in unter 24 Stunden einsatzbereit." }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "text-center",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: index * 0.1 },
                      children: [
                        /* @__PURE__ */ jsx(benefit.icon, { className: "w-8 h-8 text-emerald-600 mx-auto mb-2" }),
                        /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-gray-900", children: benefit.title }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: benefit.stat })
                      ]
                    },
                    index
                  )) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                    /* @__PURE__ */ jsxs(
                      motion.button,
                      {
                        className: "px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: [
                          /* @__PURE__ */ jsx(PlayCircle, { className: "w-5 h-5" }),
                          /* @__PURE__ */ jsx("span", { children: "Jetzt starten" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      motion.button,
                      {
                        className: "px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: [
                          /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5" }),
                          /* @__PURE__ */ jsx("span", { children: "Demo buchen" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-6 text-sm text-gray-500", children: "✓ Keine Kreditkarte erforderlich • ✓ EU-Haftungsübernahme • ✓ 24h Setup-Garantie" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "relative",
                initial: { opacity: 0, x: 50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-2xl", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900", children: "Case Resolution Rate" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-500 rounded-full animate-pulse" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Live" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "relative w-64 h-64 mx-auto mb-6", children: [
                    /* @__PURE__ */ jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          cx: "128",
                          cy: "128",
                          r: "100",
                          stroke: "#f3f4f6",
                          strokeWidth: "16",
                          fill: "none"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        motion.circle,
                        {
                          cx: "128",
                          cy: "128",
                          r: "100",
                          stroke: "url(#gradient-emerald)",
                          strokeWidth: "16",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeDasharray: `${2 * Math.PI * 100}`,
                          initial: { strokeDashoffset: 2 * Math.PI * 100 },
                          animate: { strokeDashoffset: 2 * Math.PI * 100 * (1 - caseResolutionRate / 100) },
                          transition: { duration: 2, ease: "easeOut" }
                        }
                      ),
                      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "gradient-emerald", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#10b981" }),
                        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#059669" }),
                        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#047857" })
                      ] }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                      /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: "text-4xl font-bold text-gray-900",
                          initial: { opacity: 0, scale: 0.5 },
                          animate: { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 },
                          transition: { delay: 0.5 },
                          children: [
                            caseResolutionRate,
                            "%"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: "Erfolgsrate" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 text-center" })
                ] })
              }
            )
          ] }) })
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
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Vier sichere Meldekanäle" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Hinweisgeber können den für sie passenden Kanal wählen" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: channels.map((channel, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          whileHover: { y: -5 },
          children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-100 rounded-xl mb-4 w-fit", children: /* @__PURE__ */ jsx(channel.icon, { className: "w-8 h-8 text-emerald-600" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: channel.name }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: channel.description }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: channel.features.map((feature, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 text-sm", children: feature })
            ] }, idx)) })
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
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Enterprise-Grade Funktionen" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Alles was Sie für professionellen Hinweisgeberschutz benötigen" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-12", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-100 rounded-xl", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-8 h-8 text-emerald-600" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: feature.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: feature.description })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx("div", { className: "px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold", children: feature.highlight }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: feature.details.map((detail, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-600 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: detail })
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
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "100% EU-Richtlinien-konform" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Alle Anforderungen der EU-Whistleblower-Richtlinie erfüllt" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: complianceFeatures.map((requirement, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-green-200",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: requirement.title }),
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-green-600 flex-shrink-0" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: requirement.description }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: requirement.details.map((detail, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 text-sm", children: detail })
            ] }, idx)) })
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
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Technische Spezifikationen" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Enterprise-Grade Security und Performance" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: technicalSpecs.map((category, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-white rounded-2xl p-6 shadow-lg",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-6", children: category.category }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: category.specs.map((spec, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(spec.icon, { className: "w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: spec.label }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: spec.value })
              ] })
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
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Bewährte Ergebnisse" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Echte Verbesserungen bei echten Unternehmen" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-12", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.2 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-100 rounded-full", children: /* @__PURE__ */ jsx(testimonial.avatar, { className: "w-8 h-8 text-emerald-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: testimonial.company }),
                /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
                  testimonial.industry,
                  " • ",
                  testimonial.size
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("blockquote", { className: "text-lg text-gray-700 mb-6 italic", children: [
              '"',
              testimonial.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: testimonial.results.map((result, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-4 border border-gray-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: result.metric }),
                /* @__PURE__ */ jsx("span", { className: "text-emerald-600 font-bold", children: result.improvement })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-red-600", children: [
                  "Vorher: ",
                  result.before
                ] }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-gray-400" }),
                /* @__PURE__ */ jsxs("span", { className: "text-emerald-600", children: [
                  "Nachher: ",
                  result.after
                ] })
              ] })
            ] }, idx)) })
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
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Nahtlose Integrationen" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Funktioniert mit allen Enterprise-Tools, die Sie bereits nutzen" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6", children: integrations.map((integration, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center",
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: index * 0.05 },
          whileHover: { y: -5 },
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl mb-3", children: integration.logo }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 text-sm", children: integration.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: integration.category })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-16",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Häufige Fragen" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Alles was Sie über unser Hinweisgebersystem wissen müssen" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-white rounded-2xl p-6 shadow-lg",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: faq.question }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gradient-to-br from-emerald-500 to-teal-600", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center max-w-4xl mx-auto",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Starten Sie heute mit professionellem Hinweisgeberschutz" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-emerald-100 mb-12", children: "Erfüllen Sie die EU-Richtlinien und schaffen Sie Vertrauen mit einem professionellen System - in unter 24 Stunden." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6 mb-12", children: [
            /* @__PURE__ */ jsxs(
              motion.button,
              {
                className: "px-12 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-3",
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                children: [
                  /* @__PURE__ */ jsx(Rocket, { className: "w-6 h-6" }),
                  /* @__PURE__ */ jsx("span", { children: "Jetzt starten" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.button,
              {
                className: "px-8 py-4 bg-emerald-600/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-emerald-600/30 transition-all duration-300 flex items-center space-x-2 border border-white/20",
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsx("span", { children: "Beratung vereinbaren" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-emerald-100", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsx("span", { children: "30 Tage Geld-zurück-Garantie" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsx("span", { children: "24h Setup-Garantie" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
              /* @__PURE__ */ jsx(Award, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsx("span", { children: "EU-Haftungsübernahme" })
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  WhistleblowerSystemToolProduct as default
};
