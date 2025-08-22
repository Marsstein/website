import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowRight, Shield, CreditCard, Globe, Users, Database, Code, FileText, CheckCircle, AlertTriangle, TrendingUp, Zap, BarChart3, Lock } from "lucide-react";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { motion } from "framer-motion";
import { c as cn } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import "./button-BRnNKcuh.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "react-router-dom";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const FintechComplianceGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "pci-dss", label: "PCI DSS", icon: CreditCard },
    { id: "open-banking", label: "Open Banking Security", icon: Globe },
    { id: "kyc-aml", label: "KYC/AML Data", icon: Users },
    { id: "crypto", label: "Crypto Assets", icon: Database },
    { id: "implementation", label: "Implementation", icon: Code }
  ];
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
      const sections = navigationItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const complianceFrameworks = [
    {
      name: "PSD2 (Payment Services Directive 2)",
      category: "Payment Services",
      requirements: [
        "Strong Customer Authentication (SCA)",
        "Secure Communication (TLS 1.2+)",
        "API Security Standards",
        "Transaction Monitoring"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "MiCA (Markets in Crypto-Assets)",
      category: "Crypto Assets",
      requirements: [
        "Wallet Security Standards",
        "Private Key Management",
        "Transaction Transparency",
        "AML Compliance for Crypto"
      ],
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      name: "DORA (Digital Operational Resilience Act)",
      category: "Operational Resilience",
      requirements: [
        "ICT Risk Management",
        "Incident Reporting",
        "Digital Resilience Testing",
        "Third-party Risk Management"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];
  const securityGuidelines = [
    {
      category: "Payment Processing",
      icon: CreditCard,
      guidelines: [
        "Tokenization für Kartendaten",
        "End-to-End Verschlüsselung",
        "3D Secure 2.0 Implementation",
        "PCI DSS Level 1 Compliance"
      ]
    },
    {
      category: "API Security",
      icon: Globe,
      guidelines: [
        "OAuth 2.0 / OpenID Connect",
        "API Rate Limiting",
        "Certificate Pinning",
        "API Gateway Security"
      ]
    },
    {
      category: "Data Protection",
      icon: Database,
      guidelines: [
        "Encryption at Rest & Transit",
        "Key Management Systems",
        "Data Minimization",
        "Secure Data Deletion"
      ]
    }
  ];
  const renderOverview = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-blue-600" }),
        "FinTech Compliance Excellence"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: "Implementieren Sie erstklassige Sicherheits- und Compliance-Standards für Ihre FinTech-Lösungen. Von Payment Processing über Open Banking bis zu Crypto Assets - wir bieten umfassende Leitlinien für regulatorische Anforderungen und Security-Best-Practices." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: ["99.9% Compliance Rate", "PCI DSS Level 1", "ISO 27001 zertifiziert"].map((stat, index) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg p-4 text-center border border-blue-200", children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: stat }) }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border border-gray-100", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "Compliance Frameworks" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: complianceFrameworks.map((framework, index) => /* @__PURE__ */ jsxs("div", { className: `rounded-lg p-6 border-2 ${framework.color}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900", children: framework.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: framework.category })
          ] }),
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-green-600" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: framework.requirements.map((req, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: req })
        ] }, idx)) })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "Security-First Development" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: securityGuidelines.map((guide, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-100 rounded-lg", children: /* @__PURE__ */ jsx(guide.icon, { className: "w-6 h-6 text-blue-600" }) }),
          /* @__PURE__ */ jsx("h5", { className: "font-bold text-gray-900", children: guide.category })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: guide.guidelines.map((guideline, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-600 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: guideline })
        ] }, idx)) })
      ] }, index)) })
    ] })
  ] });
  const renderPCIDSS = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 rounded-xl p-8 border border-blue-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "PCI DSS Compliance" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6", children: "Payment Card Industry Data Security Standard (PCI DSS) ist der wichtigste Standard für die sichere Verarbeitung von Kreditkartendaten." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border border-gray-100", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "💳 Praxis-Szenario: Online-Payment bei E-Commerce Startup" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-900 mb-2", children: "🚀 Startup-Challenge: Von 0 auf PCI DSS Level 1" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Ein E-Commerce Startup verarbeitet plötzlich über 6 Millionen Transaktionen jährlich und muss binnen 90 Tagen PCI DSS Level 1 Compliance erreichen, um nicht den Payment Processor zu verlieren." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-4 rounded-lg border border-amber-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-amber-800 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
            "Die Herausforderung"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700", children: "Kartendaten werden aktuell unverschlüsselt in der Hauptdatenbank gespeichert. Ein Data Breach würde das Unternehmen vernichten und Millionen von Kunden gefährden." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
            "Die 90-Tage-Transformation"
          ] }),
          [
            {
              week: "Woche 1-2: Sofortmaßnahmen",
              title: "🛑 Schadensbegrenzung",
              description: "Kartendaten werden nicht mehr in der Hauptdatenbank gespeichert",
              actions: [
                "Tokenization-Service implementiert: Echte Kartennummern durch sichere Tokens ersetzt",
                "Sofortige Segmentierung: Zahlungsverarbeitung in isolierte Umgebung verschoben",
                "Notfall-Monitoring: Echtzeit-Alerts bei verdächtigen Datenzugriffen"
              ],
              result: "Akutes Risiko eliminiert - keine Vollkartennummern mehr im Hauptsystem"
            },
            {
              week: "Woche 3-6: Infrastruktur-Hardening",
              title: "🏰 Festung errichten",
              description: "Aufbau einer PCI DSS-konformen Cardholder Data Environment (CDE)",
              actions: [
                "Dedizierte Hardware: Isolierte Server nur für Zahlungsverarbeitung",
                "Netzwerk-Segmentierung: Firewalls trennen CDE vom Rest der Infrastruktur",
                "Verschlüsselung: Alle Daten at-rest und in-transit mit militärischen Standards"
              ],
              result: "Sichere Zahlungsinfrastruktur - CDE vollständig isoliert und geschützt"
            },
            {
              week: "Woche 7-10: Prozess-Optimierung",
              title: "🔄 Workflows perfektionieren",
              description: "Automatisierung und Mitarbeiterschulung für dauerhafte Security",
              actions: [
                "Zero-Touch-Processing: Mitarbeiter haben nie direkten Zugang zu Kartendaten",
                "Automatische Compliance-Checks: System erkennt und verhindert Policy-Verstöße",
                "Schulung aller Teams: Jeder Mitarbeiter versteht PCI DSS Grundlagen"
              ],
              result: "Nachhaltige Sicherheitskultur - Compliance wird zum Autopilot"
            },
            {
              week: "Woche 11-12: Zertifizierung",
              title: "🏆 Der finale Durchbruch",
              description: "Erfolgreiche PCI DSS Assessment und Go-Live",
              actions: [
                "QSA Assessment: Qualified Security Assessor bestätigt Level 1 Compliance",
                "Penetration Testing: Externe Hacker finden keine Schwachstellen",
                "Compliance-Zertifikat: Offizielle Bestätigung der PCI DSS Konformität"
              ],
              result: "🎉 Mission accomplished: PCI DSS Level 1 zertifiziert"
            }
          ].map((phase, phaseIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-gray-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600", children: phaseIndex + 1 }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-600", children: phase.week }),
                /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-900", children: phase.title })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: phase.description }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-3", children: phase.actions.map((action, actionIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: action })
            ] }, actionIndex)) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-2 rounded text-sm text-green-700 font-medium", children: [
              "✓ ",
              phase.result
            ] })
          ] }, phaseIndex))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
            "Business Impact & ROI"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "$2.8M" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Verhinderte Schadenssumme bei Data Breach" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "15%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Reduktion der Payment Processing Fees" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "99.99%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Payment Uptime nach Implementierung" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "🎯 3D Secure 2.0: Intelligente Fraud Prevention" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-purple-900 mb-2", children: "🧠 Smart Authentication: 94% weniger Kaufabbrüche" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700", children: "Wie ein Online-Fashion-Retailer mit intelligenter 3DS 2.0 Implementierung die Conversion Rate um 23% steigerte und gleichzeitig Betrug um 87% reduzierte." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-purple-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }),
            "Der intelligente Authentifizierungsflow"
          ] }),
          [
            {
              step: "Schritt 1: Risiko-Analyse in Echtzeit",
              icon: "🔍",
              description: "Sofortige Bewertung jeder Transaktion",
              details: [
                "Geräte-Fingerprinting: Wiederkehrende Kunden werden erkannt",
                "Verhaltensanalyse: Normale vs. verdächtige Kaufmuster",
                "Geo-Location: Plausibilitätsprüfung der Kaufort",
                "ML-Algorithmen: 200+ Risikofaktoren in 50ms analysiert"
              ],
              outcome: "Risiko-Score: 0-100 (niedrig bis hoch)"
            },
            {
              step: "Schritt 2: Adaptive Authentifizierung",
              icon: "⚙️",
              description: "Maßgeschneiderte User Experience je nach Risiko",
              details: [
                "Niedriges Risiko (0-30): Frictionless - keine Unterbrechung",
                "Mittleres Risiko (31-70): Soft Challenge - SMS oder App-Push",
                "Hohes Risiko (71-100): Strong Challenge - Biometrie oder komplexe Verifizierung",
                "Bekannte Geräte: Vereinfachte Authentifizierung für Stammkunden"
              ],
              outcome: "Optimale Balance zwischen Sicherheit und User Experience"
            },
            {
              step: "Schritt 3: Nahtlose Integration",
              icon: "🔗",
              description: "Unsichtbare Sicherheit für den Endkunden",
              details: [
                "Single-Click für 73% aller Transaktionen (Frictionless)",
                "Mobile-first: Biometrische Authentifizierung auf Smartphones",
                "Fallback-Strategien: Alternative Methoden bei technischen Problemen",
                "Real-time Feedback: Sofortige Bestätigung für Kunden"
              ],
              outcome: "Kaufprozess wird beschleunigt statt verlangsamt"
            }
          ].map((step, stepIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-purple-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl", children: step.icon }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-900 mb-1", children: step.step }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-3", children: step.description })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-3", children: step.details.map((detail, detailIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: detail })
            ] }, detailIndex)) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-2 rounded text-sm text-purple-700 font-medium", children: [
              "✓ ",
              step.outcome
            ] })
          ] }, stepIndex))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4" }),
            "Messbare Erfolge nach 6 Monaten"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "-87%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Fraud Rate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "+23%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Conversion Rate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "73%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Frictionless Auth" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "1.2s" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Avg. Auth Time" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 border border-gray-200", children: [
        /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900 mb-4", children: "PCI DSS Requirements" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          "Firewall-Konfiguration zum Schutz von Kartendaten",
          "Keine Vendor-Standardpasswörter",
          "Verschlüsselung gespeicherter Kartendaten",
          "Verschlüsselung bei Übertragung",
          "Antivirensoftware und Updates",
          "Sichere Systeme und Anwendungen"
        ].map((req, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5 text-blue-600 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: req })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 border border-gray-200", children: [
        /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900 mb-4", children: "Network Segmentation" }),
        /* @__PURE__ */ jsx("div", { className: "bg-gray-100 rounded-lg p-4", children: /* @__PURE__ */ jsx("img", { src: "/api/placeholder/400/300", alt: "Network Segmentation Diagram", className: "w-full rounded" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-red-500 rounded-full" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "CDE (Cardholder Data Environment)" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-yellow-500 rounded-full" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "DMZ" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-500 rounded-full" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Trusted Network" })
          ] })
        ] })
      ] })
    ] })
  ] });
  const renderOpenBanking = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 rounded-xl p-8 border border-indigo-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Open Banking Security" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6", children: "Sichere API-Integration für Open Banking gemäß PSD2-Richtlinien mit starker Kundenauthentifizierung und sicherer Kommunikation." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border border-gray-100", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "🏦 Praxis-Szenario: FinTech Bank API Integration" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-indigo-900 mb-2", children: "🔗 PSD2-konforme Multi-Bank Integration in 30 Tagen" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-indigo-700", children: "Ein FinTech-Startup muss 47 europäische Banken über Open Banking APIs anbinden, um Kunden eine einheitliche Kontoverwaltung zu bieten - mit höchsten Sicherheitsstandards." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-4 rounded-lg border border-amber-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-amber-800 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
            "Die Komplexität"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700", children: "Jede Bank hat unterschiedliche API-Standards, Sicherheitsanforderungen und Zertifikate. Ein einziger Fehler kann zur Sperrung des Zugangs oder zu regulatorischen Problemen führen." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-indigo-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
            "Die elegante Lösung: Unified Security Layer"
          ] }),
          [
            {
              layer: "Layer 1: Zertifikat-Management",
              icon: "🛡️",
              description: "Automatisierte Verwaltung von 94 verschiedenen Zertifikaten",
              challenge: "Jede Bank benötigt spezielle QWAC und QSEAL Zertifikate",
              solution: [
                "Centralized Certificate Store: Ein Vault für alle 94 Zertifikate",
                "Auto-Renewal: 90 Tage vor Ablauf automatische Verlängerung",
                "Health Monitoring: Tägliche Überprüfung aller Zertifikatsstatus",
                "Fallback-Strategien: Backup-Zertifikate für kritische Verbindungen"
              ],
              result: "99.97% API Verfügbarkeit trotz komplexer Zertifikat-Landschaft"
            },
            {
              layer: "Layer 2: Strong Customer Authentication",
              icon: "🔐",
              description: "Intelligente SCA-Implementierung für optimale User Experience",
              challenge: "Balance zwischen Sicherheit und Benutzerfreundlichkeit",
              solution: [
                "Multi-Modal Auth: Biometrie, SMS, App-Push je nach Kontext",
                "Risk-Based Decisions: Häufige Operationen brauchen weniger Auth",
                "Device Binding: Bekannte Geräte erhalten vereinfachten Zugang",
                "Seamless Fallbacks: Alternative Methoden bei tech. Problemen"
              ],
              result: "89% der Transaktionen benötigen nur einen Auth-Faktor"
            },
            {
              layer: "Layer 3: API Orchestration",
              icon: "⚙️",
              description: "Einheitliche Schnittstelle für 47 verschiedene Bank-APIs",
              challenge: "Jede Bank hat unterschiedliche Datenstrukturen und Workflows",
              solution: [
                "Smart Mapping: Automatische Übersetzung zwischen API-Formaten",
                "Error Handling: Intelligente Retry-Logik für jede Bank",
                "Rate Limiting: Optimierte Anfrage-Verteilung pro Bank",
                "Real-time Monitoring: Sofortige Erkennung von API-Änderungen"
              ],
              result: "Eine einzige API für Kunden - 47 Bank-APIs im Hintergrund"
            },
            {
              layer: "Layer 4: Compliance Automation",
              icon: "📊",
              description: "Automatische Einhaltung aller PSD2 und GDPR Anforderungen",
              challenge: "Kontinuierliche Überwachung und Dokumentation der Compliance",
              solution: [
                "Audit Trail: Lückenlose Protokollierung aller API-Interaktionen",
                "Consent Management: Automatische Verwaltung aller Einwilligungen",
                "Data Minimization: Nur notwendige Daten werden angefragt",
                "Regulatory Reporting: Automatische Berichte für Aufsichtsbehörden"
              ],
              result: "100% Compliance ohne manuellen Aufwand"
            }
          ].map((layer, layerIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-indigo-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl", children: layer.icon }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-900 mb-1", children: layer.layer }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-2", children: layer.description }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-red-600 bg-red-50 p-2 rounded mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Challenge:" }),
                  " ",
                  layer.challenge
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-3", children: layer.solution.map((solution, solutionIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: solution })
            ] }, solutionIndex)) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-2 rounded text-sm text-indigo-700 font-medium", children: [
              "✓ ",
              layer.result
            ] })
          ] }, layerIndex))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
            "Transformation in Zahlen"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "47" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Connected Banks" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "99.97%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "API Uptime" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "89%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Single-Factor Auth" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "30 Tage" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Integration Time" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900 mb-4", children: "API Security Standards" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
          {
            title: "OAuth 2.0 + FAPI",
            description: "Financial-grade API Security Profile",
            requirements: ["PKCE", "PAR", "RAR", "JARM"]
          },
          {
            title: "mTLS",
            description: "Mutual TLS Authentication",
            requirements: ["QWAC Certificate", "Certificate Pinning", "OCSP Stapling"]
          },
          {
            title: "JWS/JWE",
            description: "Message-level Security",
            requirements: ["Request Signing", "Response Encryption", "Non-Repudiation"]
          }
        ].map((standard, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-gray-200", children: [
          /* @__PURE__ */ jsx("h6", { className: "font-bold text-gray-900", children: standard.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: standard.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: standard.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-gray-700 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-3 h-3 text-green-600" }),
            req
          ] }, idx)) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900 mb-4", children: "📋 Smart Consent Management" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-md font-bold text-green-900 mb-2", children: "🧠 Intelligente Einwilligungsverwaltung" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700", children: "Automatisierte Verwaltung von Kundenerläubnissen mit KI-gestützter Optimierung" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 text-sm mb-2", children: "📅 Dynamische Laufzeiten" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-2", children: "KI analysiert Nutzungsverhalten und schlägt optimale Consent-Dauer vor" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 font-medium", children: "+34% längere Consent-Perioden durch bessere UX" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 text-sm mb-2", children: "🔄 Auto-Renewal" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-2", children: "Proaktive Erneuerung vor Ablauf mit benutzerfreundlichen Benachrichtigungen" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 font-medium", children: "87% Renewal-Rate durch rechtzeitige Kommunikation" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 text-sm mb-2", children: "📊 Granulare Kontrolle" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-2", children: 'Kunden wählen spezifische Berechtigungen statt "Alles-oder-Nichts"' }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 font-medium", children: "92% Zufriedenheit durch individuelle Anpassung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 text-sm mb-2", children: "🛡️ Compliance-Check" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-2", children: "Automatische Überprüfung aller Consents auf regulatorische Konformität" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 font-medium", children: "100% Compliance durch automatisierte Validierung" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
  const renderKYCAML = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 rounded-xl p-8 border border-purple-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "KYC/AML Data Protection" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6", children: "Sichere Verarbeitung und Speicherung von KYC/AML-Daten unter Einhaltung von Datenschutzbestimmungen und regulatorischen Anforderungen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border border-gray-100", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "🔍 Praxis-Szenario: KYC-Revolution bei Neo-Bank" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-purple-900 mb-2", children: "🏦 Privacy-First KYC: 90% weniger Datensammlung, 100% Compliance" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700", children: "Eine Neo-Bank implementiert revolutionary Privacy-Preserving KYC und reduziert Datenspeicherung um 90% bei gleichzeitiger Erhöhung der Compliance-Rate auf 99.8%." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-4 rounded-lg border border-amber-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-amber-800 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
            "Das Problem"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700", children: "Traditionelle KYC sammelt massive Datenmengen, schafft Datenschutzrisiken und führt zu 15-20% Kundenabbruch während der langwierigen Verifizierung." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-purple-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
            "Die Privacy-First Transformation"
          ] }),
          [
            {
              phase: "Phase 1: Smart Data Minimization",
              icon: "🧪",
              description: "Nur sammeln was wirklich nötig ist - mit KI-Unterstützung",
              innovations: [
                "Risiko-basierte Datenerfassung: Niedriges Risiko = minimale Daten",
                "Progressive Verifizierung: Stufen-KYC statt Alles-auf-einmal",
                "Dokumenten-KI: Automatische Extraktion nur relevanter Informationen",
                "Anonymisierung in Echtzeit: PII sofort nach Verarbeitung pseudonymisiert"
              ],
              result: "85% weniger gespeicherte personenbezogene Daten",
              metrics: { reduction: "85%", time: "3 Min", satisfaction: "94%" }
            },
            {
              phase: "Phase 2: Zero-Knowledge Verification",
              icon: "🔐",
              description: "Identitätsprüfung ohne Preisgabe sensibler Daten",
              innovations: [
                "Homomorphic Encryption: Berechnungen auf verschlüsselten Daten",
                "Zero-Knowledge Proofs: Alter bestätigen ohne Geburtsdatum zu zeigen",
                "Secure Multi-Party Computation: Sanctions-Check ohne Datenaustausch",
                "Biometrische Hashes: Gesichtserkennung ohne Gesichtsspeicherung"
              ],
              result: "Vollständige Identitätsprüfung mit minimaler Datenspeicherung",
              metrics: { privacy: "99%", accuracy: "97.8%", speed: "45s" }
            },
            {
              phase: "Phase 3: Intelligente Risikobewertung",
              icon: "🤖",
              description: "KI erkennt verdachtige Muster ohne individuelle Profilerstellung",
              innovations: [
                "Federated Learning: ML-Modelle lernen ohne zentrale Datenspeicherung",
                "Differential Privacy: Statistische Analysen ohne Einzelperson-Identifikation",
                "Behavioral Analytics: Muster erkennen ohne Nutzerverhalten zu speichern",
                "Real-time Anomaly Detection: Sofortige Erkennung ohne Datensammlung"
              ],
              result: "Höhere Erkennungsrate bei niedrigerem Datenschutzrisiko",
              metrics: { detection: "+34%", falsePositives: "-67%", privacy: "100%" }
            },
            {
              phase: "Phase 4: Adaptive Compliance",
              icon: "📈",
              description: "Selbstlernende Compliance-Engine passt sich an Regulatorik an",
              innovations: [
                "Regulatory Mapping: Automatische Anpassung an lokale Gesetze",
                "Audit Automation: Kontinuierliche Selbstüberprüfung und -dokumentation",
                "Proactive Alerts: Frühwarnsystem für neue regulatorische Anforderungen",
                "Evidence Generation: Automatische Compliance-Nachweise für Behörden"
              ],
              result: "Immer aktuelle Compliance ohne manuellen Aufwand",
              metrics: { automation: "96%", auditTime: "-89%", compliance: "99.8%" }
            }
          ].map((phase, phaseIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-purple-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl", children: phase.icon }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-900 mb-1", children: phase.phase }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-3", children: phase.description })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-3", children: phase.innovations.map((innovation, innovationIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: innovation })
            ] }, innovationIndex)) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded mb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-sm text-purple-700 font-medium mb-2", children: [
                "✓ ",
                phase.result
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 text-center", children: Object.entries(phase.metrics).map(([key, value]) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-purple-600", children: value }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-500 capitalize", children: key.replace(/([A-Z])/g, " $1").trim() })
              ] }, key)) })
            ] })
          ] }, phaseIndex))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
            "Revolution in Zahlen: Nach 12 Monaten"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "-90%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Datenspeicherung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "+73%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Conversion Rate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "99.8%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Compliance Score" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "3 Min" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Avg. KYC Time" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "🎯 AML Transaction Monitoring: KI erkennt was Menschen übersehen" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-red-900 mb-2", children: "🚨 Real-time Fraud Detection: 99.7% Accuracy bei 0.1% False Positives" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700", children: "Intelligente Transaction Monitoring Engine erkennt Geldwäsche-Muster in Echtzeit und reduziert manuelle Prüfungen um 94%." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-red-200", children: [
            /* @__PURE__ */ jsxs("h5", { className: "font-bold text-red-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
              "Privacy-First Detection"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-red-500 pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "Zero-Knowledge Analysis" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Muster erkennen ohne Einzeldaten zu sehen" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-red-400 pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "Federated Learning" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Branchenweites Lernen ohne Datenaustausch" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-red-300 pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "Differential Privacy" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Statistische Erkenntnisse ohne Risiko" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-orange-200", children: [
            /* @__PURE__ */ jsxs("h5", { className: "font-bold text-orange-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
              "Smart Risk Scoring"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
              { risk: "High Risk", score: "85-100", color: "text-red-600", action: "Immediate Review" },
              { risk: "Medium Risk", score: "50-84", color: "text-yellow-600", action: "Enhanced Monitoring" },
              { risk: "Low Risk", score: "0-49", color: "text-green-600", action: "Standard Processing" }
            ].map((level, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsx("div", { className: `font-bold ${level.color}`, children: level.risk }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: level.score })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-green-200", children: [
            /* @__PURE__ */ jsxs("h5", { className: "font-bold text-green-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
              "Automation Status"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
              { feature: "Sanctions Screening", status: "99.9%", uptime: "Active" },
              { feature: "PEP Monitoring", status: "99.7%", uptime: "Active" },
              { feature: "Pattern Detection", status: "99.8%", uptime: "Active" },
              { feature: "SAR Generation", status: "Auto", uptime: "Active" }
            ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item.feature }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: item.status }),
                /* @__PURE__ */ jsx("span", { className: "text-green-600 font-bold text-xs", children: item.uptime })
              ] })
            ] }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-blue-800 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4" }),
            "Performance Metriken: Revolution der AML-Compliance"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: "99.7%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700", children: "Detection Rate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: "0.1%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700", children: "False Positives" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: "-94%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700", children: "Manual Reviews" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: "15ms" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700", children: "Response Time" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
  const renderCrypto = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 rounded-xl p-8 border border-indigo-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Crypto Asset Security" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6", children: "Implementierung von Best Practices für die sichere Verwaltung von Kryptowährungen und digitalen Assets gemäß MiCA-Regularien." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border border-gray-100", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "🪙 Praxis-Szenario: Crypto Exchange Launch" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-indigo-900 mb-2", children: "🚀 MiCA-Ready: Von 0 auf Crypto Exchange in 6 Monaten" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-indigo-700", children: "Ein FinTech startet eine MiCA-konforme Kryptowährungs-Exchange mit institutioneller Sicherheit und verwaltet nach 12 Monaten Assets im Wert von 500M EUR ohne Sicherheitsvorfalle." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-4 rounded-lg border border-amber-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-amber-800 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
            "Die Herausforderung"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700", children: "98% aller Crypto-Verluste entstehen durch Sicherheitslücken, schlechtes Key Management oder unzureichende MiCA-Compliance. Ein Fehler kann Millionen kosten und das Vertrauen zerstören." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-indigo-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
            "Die Fort Knox-Strategie für Crypto Assets"
          ] }),
          [
            {
              layer: "Layer 1: Unbreakable Wallet Architecture",
              icon: "🏰",
              description: "Multi-Signature Cold Storage mit Hardware-Security-Modules",
              challenge: "Private Keys sind der wertvollste und gefährdetste Asset",
              approach: [
                "Air-Gapped Key Generation: Private Keys nie online erstellt oder gespeichert",
                "2-of-3 Multi-Sig: Drei Hardware-Wallets, zwei für Transaktionen erforderlich",
                "Geographische Verteilung: Keys in verschiedenen Hochsicherheitstresoren",
                "Quantum-Resistant Backup: Zukünftige Sicherheit bereits heute implementiert"
              ],
              result: "Selbst bei Kompromittierung von 50% der Infrastruktur bleiben Assets sicher",
              metrics: { security: "99.999%", recovery: "15 Min", locations: "3 Countries" }
            },
            {
              layer: "Layer 2: Intelligent Transaction Screening",
              icon: "🧪",
              description: "KI-powered AML für Blockchain-Transaktionen",
              challenge: "Compliance bei pseudonymen Blockchain-Transaktionen",
              approach: [
                "Address Intelligence: Risiko-Scoring für 50M+ Wallet-Adressen",
                "Transaction Graph Analysis: Geldfluss-Verfolgung über mehrere Hops",
                "Real-time Sanctions Screening: Sofortige Erkennung gelisteter Adressen",
                "Privacy-Coin Monitoring: Spezielle Überwachung für Monero, Zcash etc."
              ],
              result: "99.9% Accuracy bei Compliance-Screening ohne False Positives",
              metrics: { detection: "99.9%", speed: "50ms", coverage: "15 Blockchains" }
            },
            {
              layer: "Layer 3: MiCA-Compliance Automation",
              icon: "🏡",
              description: "Vollautomatische Einhaltung aller MiCA-Anforderungen",
              challenge: "Komplexe und sich ändernde Regularien in 27 EU-Ländern",
              approach: [
                "Dynamic Compliance Engine: Automatische Anpassung an neue Regularien",
                "Real-time Risk Assessment: Kontinuierliche Bewertung aller Asset-Klassen",
                "Automated Reporting: Tägliche Berichte an alle relevanten Behörden",
                "Customer Due Diligence: KI-gestütztes Enhanced KYC für Crypto"
              ],
              result: "Vollständige MiCA-Compliance ohne manuellen Compliance-Aufwand",
              metrics: { automation: "98%", reporting: "Real-time", jurisdictions: "27 EU" }
            },
            {
              layer: "Layer 4: Institutional-Grade Operations",
              icon: "🏦",
              description: "Banken-ähnliche Sicherheits- und Betriebsstandards",
              challenge: "Crypto-Volatiliät mit institutioneller Zuverlässigkeit verbinden",
              approach: [
                "24/7 SOC: Dedicated Security Operations Center mit Crypto-Spezialisten",
                "Disaster Recovery: 15-Sekunden Failover zwischen Rechenzentren",
                "Insurance Coverage: 100% Asset-Versicherung durch Lloyd's of London",
                "Regulatory Liaison: Direkter Draht zu BaFin und anderen Aufsichtsbehörden"
              ],
              result: "Banken-ähnliche Sicherheit und Verfügbarkeit für Crypto Assets",
              metrics: { uptime: "99.99%", insurance: "100%", response: "15s" }
            }
          ].map((layer, layerIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-indigo-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl", children: layer.icon }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-900 mb-1", children: layer.layer }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-2", children: layer.description }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-red-600 bg-red-50 p-2 rounded mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Challenge:" }),
                  " ",
                  layer.challenge
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-3", children: layer.approach.map((approach, approachIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: approach })
            ] }, approachIndex)) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-3 rounded mb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-sm text-indigo-700 font-medium mb-2", children: [
                "✓ ",
                layer.result
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 text-center", children: Object.entries(layer.metrics).map(([key, value]) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-indigo-600", children: value }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-indigo-500 capitalize", children: key.replace(/([A-Z])/g, " $1").trim() })
              ] }, key)) })
            ] })
          ] }, layerIndex))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
            "Mission Accomplished: Nach 12 Monaten"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "500M EUR" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Assets under Management" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "0" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Security Incidents" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "99.99%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Platform Uptime" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "100%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "MiCA Compliance" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "🔍 Travel Rule & Blockchain Compliance" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-yellow-900 mb-2", children: "🌍 Globale Compliance: Travel Rule für 40+ Länder automatisiert" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700", children: "Automatische Einhaltung der Travel Rule (FATF) für grenzüberschreitende Crypto-Transaktionen über 1.000 EUR mit 99.9% Accuracy." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-yellow-200", children: [
            /* @__PURE__ */ jsxs("h5", { className: "font-bold text-yellow-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
              "Intelligente Adress-Identifikation"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-yellow-500 pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "VASP-Erkennung" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "97% aller Exchange-Adressen identifiziert" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-yellow-400 pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "Jurisdiktions-Mapping" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Automatische Länder-Zuordnung für Compliance" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-yellow-300 pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "Risk-Scoring" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Echtzeit-Bewertung aller Counterparties" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 border border-orange-200", children: [
            /* @__PURE__ */ jsxs("h5", { className: "font-bold text-orange-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
              "Automatische Datensammlung"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "KYC-Integration" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Automatische Sender/Empfänger-Daten" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-400 pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "Message Standards" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "SWIFT, TRP, OpenVASP Kompatibilität" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-300 pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "Encrypted Transfer" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Ende-zu-Ende verschlüsselte Übertragung" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-blue-800 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4" }),
            "Travel Rule Performance: Branchenführende Automation"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: "99.9%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700", children: "Compliance Rate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: "40+" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700", children: "Jurisdictions" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: "2.3s" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700", children: "Avg. Processing" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: "24/7" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700", children: "Automated" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 border border-gray-200", children: [
        /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900 mb-4", children: "MiCA Compliance Checklist" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          "Whitepaper-Anforderungen erfüllt",
          "Reserve Asset Management implementiert",
          "Marktmissbrauchsüberwachung aktiv",
          "Kundenvermögensschutz gewährleistet",
          "Governance-Struktur dokumentiert",
          "Risikomanagement-Framework etabliert"
        ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-600" }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 border border-gray-200", children: [
        /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900 mb-4", children: "Crypto Security Best Practices" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-indigo-500 pl-4", children: [
            /* @__PURE__ */ jsx("h6", { className: "font-bold text-gray-900", children: "Key Management" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Multi-sig, HSM Integration, Cold Storage" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-indigo-500 pl-4", children: [
            /* @__PURE__ */ jsx("h6", { className: "font-bold text-gray-900", children: "Transaction Security" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Whitelisting, Time-locks, Multi-approval" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-indigo-500 pl-4", children: [
            /* @__PURE__ */ jsx("h6", { className: "font-bold text-gray-900", children: "Audit & Monitoring" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Real-time monitoring, Anomaly detection" })
          ] })
        ] })
      ] })
    ] })
  ] });
  const renderImplementation = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 rounded-xl p-8 border border-blue-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Implementation Guide" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6", children: "Schritt-für-Schritt Anleitung zur Implementierung einer sicheren und compliance-konformen FinTech-Architektur." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border border-gray-100", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "🏢 Praxis-Szenario: Enterprise FinTech Transformation" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-900 mb-2", children: "🚀 Zero-to-Hero: Von Legacy Banking zu FinTech Leader in 18 Monaten" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Eine traditionelle Bank transformiert ihre gesamte IT-Infrastruktur zu einer cloud-nativen, API-first FinTech-Plattform mit höchsten Sicherheits- und Compliance-Standards." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-4 rounded-lg border border-amber-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-amber-800 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
            "Die Ausgangslage"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700", children: "35 Jahre alte Mainframe-Systeme, monolithische Architektur, 3-Wochen Deployment-Zyklen und Compliance-Prüfungen die 6 Monate dauern. Kunden wandern zu Neobanken ab." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-blue-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
            "Die 4-Layer Security-First Transformation"
          ] }),
          [
            {
              layer: "Layer 1: Cloud-Native Foundation",
              icon: "☁️",
              timeline: "Monate 1-4",
              description: "Aufbau einer sicheren, skalierbaren Cloud-Infrastruktur",
              challenges: "Legacy-Integration ohne Betriebsunterbrechung",
              solutions: [
                "Hybrid Cloud Setup: Schrittweise Migration ohne Downtime",
                "Infrastructure as Code: 100% automatisierte, wiederholbare Deployments",
                "Zero Trust Network: Jede Verbindung wird verifiziert und verschlüsselt",
                "Multi-Region Setup: Disaster Recovery und 99.99% SLA"
              ],
              outcome: "Moderne Infrastruktur bereit für FinTech-Services",
              metrics: { uptime: "99.99%", deployTime: "-95%", costs: "-40%" }
            },
            {
              layer: "Layer 2: API-First Architecture",
              icon: "🔗",
              timeline: "Monate 5-8",
              description: "Microservices mit Banking-grade Security und Performance",
              challenges: "Granulare Services ohne Komplexitäts-Explosion",
              solutions: [
                "Domain-Driven Design: Fachlich abgeschnittene, autonome Services",
                "API Gateway: Zentrale Sicherheit, Rate Limiting und Monitoring",
                "Service Mesh: Sichere Inter-Service Kommunikation",
                "Event-Driven Architecture: Lose gekoppelte, resiliente Services"
              ],
              outcome: "Flexible, skalierbare Service-Landschaft",
              metrics: { services: "47", responseTime: "< 100ms", availability: "99.9%" }
            },
            {
              layer: "Layer 3: Compliance Automation",
              icon: "📈",
              timeline: "Monate 9-12",
              description: "Vollständig automatisierte Compliance für alle Regularien",
              challenges: "Kontinuierliche Compliance ohne manuelle Prozesse",
              solutions: [
                "Policy as Code: Alle Compliance-Regeln in versioniertem Code",
                "Continuous Compliance: Automatische Prüfung bei jedem Deployment",
                "Real-time Monitoring: Sofortige Erkennung von Compliance-Verstößen",
                "Automated Reporting: Tägliche Berichte an alle Aufsichtsbehörden"
              ],
              outcome: "Selbstüberwachende, immer konforme Plattform",
              metrics: { automation: "94%", auditTime: "-87%", violations: "0" }
            },
            {
              layer: "Layer 4: Advanced Security & AI",
              icon: "🤖",
              timeline: "Monate 13-18",
              description: "KI-gestützte Sicherheit und Fraud Prevention",
              challenges: "Proaktive Bedrohungserkennung ohne False Positives",
              solutions: [
                "ML-Fraud Detection: 99.7% Accuracy bei 0.1% False Positive Rate",
                "Behavioral Analytics: Anomalie-Erkennung für User und System-Verhalten",
                "Threat Intelligence: Integration globaler Bedrohungsdaten",
                "Automated Response: Selbstheilende Systeme mit Incident Automation"
              ],
              outcome: "Predictive Security mit minimalen manuellen Eingriffen",
              metrics: { detection: "99.7%", responseTime: "< 5s", automation: "89%" }
            }
          ].map((layer, layerIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl", children: layer.icon }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-900", children: layer.layer }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded", children: layer.timeline })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-2", children: layer.description }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-red-600 bg-red-50 p-2 rounded mb-3", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Challenge:" }),
                  " ",
                  layer.challenges
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-3", children: layer.solutions.map((solution, solutionIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: solution })
            ] }, solutionIndex)) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded mb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-sm text-blue-700 font-medium mb-2", children: [
                "✓ ",
                layer.outcome
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 text-center", children: Object.entries(layer.metrics).map(([key, value]) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-blue-600", children: value }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-500 capitalize", children: key.replace(/([A-Z])/g, " $1").trim() })
              ] }, key)) })
            ] })
          ] }, layerIndex))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
            "Transformation erfolgreich: Die Zahlen nach 18 Monaten"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "-73%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Time to Market" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "+245%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "API Requests/s" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "99.99%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Platform Uptime" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: "0" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Compliance Issues" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "Risk Assessment Framework" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 border border-gray-200", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900 mb-4", children: "Technical Risks" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
            { risk: "API Security", mitigation: "OAuth 2.0, Rate Limiting, WAF" },
            { risk: "Data Breaches", mitigation: "Encryption, Access Control, DLP" },
            { risk: "DDoS Attacks", mitigation: "CDN, Rate Limiting, Geo-blocking" },
            { risk: "Insider Threats", mitigation: "Least Privilege, Audit Logs, SIEM" }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: item.risk }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: item.mitigation })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 border border-gray-200", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900 mb-4", children: "Compliance Risks" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
            { risk: "Regulatory Fines", mitigation: "Automated Compliance Checks" },
            { risk: "License Revocation", mitigation: "Continuous Monitoring" },
            { risk: "Reputational Damage", mitigation: "Incident Response Plan" },
            { risk: "Legal Actions", mitigation: "Legal Review Process" }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-indigo-500 pl-4", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: item.risk }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: item.mitigation })
          ] }, index)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border border-gray-100", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "Implementation Roadmap" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
        {
          phase: "Phase 1: Foundation (Wochen 1-4)",
          tasks: [
            "Security Architecture Design",
            "Compliance Gap Analysis",
            "Tool Selection & Procurement",
            "Team Training"
          ]
        },
        {
          phase: "Phase 2: Core Security (Wochen 5-12)",
          tasks: [
            "Authentication & Authorization",
            "Encryption Implementation",
            "API Security Layer",
            "Monitoring Setup"
          ]
        },
        {
          phase: "Phase 3: Compliance (Wochen 13-20)",
          tasks: [
            "PCI DSS Certification",
            "PSD2 Implementation",
            "Audit Trail System",
            "Reporting Automation"
          ]
        },
        {
          phase: "Phase 4: Advanced Features (Wochen 21-24)",
          tasks: [
            "ML-based Fraud Detection",
            "Advanced Threat Protection",
            "Disaster Recovery",
            "Performance Optimization"
          ]
        }
      ].map((phase, index) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-6", children: [
        /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg text-gray-900 mb-3", children: phase.phase }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: phase.tasks.map((task, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-600" }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: task })
        ] }, idx)) })
      ] }, index)) })
    ] })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "FinTech Compliance – PCI DSS, PSD2 & Crypto Assets" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Komplette FinTech Compliance-Lösungen: PCI DSS Level 1, PSD2-konforme APIs & sichere Crypto-Asset-Verwaltung. 99.99% Uptime, < 15 Min Incident Response." }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://datenschutz-assistent.de/wissen/branchen/fintech-compliance" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-blue-900 to-indigo-900 text-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-6", children: "FinTech Compliance Guide" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl max-w-3xl mx-auto text-blue-100", children: "Umfassende Sicherheits- und Compliance-Lösungen für Payment Processing, Open Banking und Crypto Assets" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex justify-center gap-4", children: [
        /* @__PURE__ */ jsxs("button", { className: "bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2", children: [
          "Compliance-Beratung anfordern",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition", children: "Download Whitepaper" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          scrollToSection(item.id);
          setActiveSection(item.id);
        },
        className: cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
          activeSection === item.id ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800" : "hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-700 dark:hover:text-blue-400",
          "border",
          activeSection === item.id ? "border-blue-200 dark:border-blue-800" : "border-transparent hover:border-blue-200 dark:hover:border-blue-800"
        ),
        children: [
          /* @__PURE__ */ jsx(item.icon, { className: cn(
            "h-4 w-4",
            activeSection === item.id && "text-blue-600 dark:text-blue-500"
          ) }),
          /* @__PURE__ */ jsx("span", { className: cn(
            "text-sm font-medium",
            activeSection === item.id && "text-blue-700 dark:text-blue-400"
          ), children: item.label })
        ]
      },
      item.id
    )) }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-gray-600" }),
          "Inhaltsverzeichnis"
        ] }),
        /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: navigationItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToSection(item.id),
            className: "text-left w-full px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-3 group",
            children: [
              /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400", children: item.label })
            ]
          }
        ) }, item.id)) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-20", children: [
        /* @__PURE__ */ jsxs("section", { id: "overview", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "FinTech Compliance Überblick"
            }
          ),
          renderOverview()
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "pci-dss", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "PCI DSS Compliance"
            }
          ),
          renderPCIDSS()
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "open-banking", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Open Banking Security"
            }
          ),
          renderOpenBanking()
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "kyc-aml", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "KYC/AML Data Protection"
            }
          ),
          renderKYCAML()
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "crypto", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Crypto Assets Compliance"
            }
          ),
          renderCrypto()
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "implementation", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Implementation Roadmap"
            }
          ),
          renderImplementation()
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 mt-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Bereit für erstklassige FinTech Compliance?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Lassen Sie uns gemeinsam Ihre FinTech-Lösung sicher und compliant gestalten" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs("button", { className: "bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2 justify-center", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5" }),
          "Kostenlose Compliance-Analyse"
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition flex items-center gap-2 justify-center", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5" }),
          "Regulatory Mapping anfordern"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-4 gap-8", children: [
        { label: "PCI DSS Level 1", value: "Zertifiziert" },
        { label: "PSD2 Compliant", value: "100%" },
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Incident Response", value: "< 15 Min" }
      ].map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold", children: stat.value }),
        /* @__PURE__ */ jsx("div", { className: "text-blue-100", children: stat.label })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all opacity-90 hover:opacity-100",
        "aria-label": "Zurück nach oben",
        children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 rotate-[-90deg]" })
      }
    )
  ] });
};
export {
  FintechComplianceGuide as default
};
