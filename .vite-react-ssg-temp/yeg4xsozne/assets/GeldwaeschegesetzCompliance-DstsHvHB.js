import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { useScroll, useTransform, motion } from "framer-motion";
import { Shield, AlertCircle, PlayCircle, Download, Bot, Timer, Eye, HandCoins, UserX, Clock, AlertTriangle, Landmark, Building2, Scale, Briefcase, CheckCircle2, UserCheck, ShieldAlert, AlertOctagon, Rocket, GitBranch, Fingerprint, Brain, FileCheck, BarChart3, ArrowRight, TrendingDown, ShieldCheck, Star, TrendingUp, Calendar, Phone, Lock, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "react-helmet-async";
const GeldwaeschegesetzCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setComplianceScore((prev) => {
          if (prev >= 87) {
            clearInterval(interval);
            return 87;
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Geldwäschegesetz Compliance Service",
    "description": "GwG-Compliance automatisiert: KYC, Risikomanagement und Verdachtsmeldungen",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Anti-Money Laundering Compliance",
    "areaServed": "DE"
  };
  const painPoints = [
    {
      icon: HandCoins,
      title: "Millionen-Bußgelder vermeiden",
      stat: "bis zu 5 Mio. €",
      description: "oder 10% des Jahresumsatzes",
      severity: "critical"
    },
    {
      icon: UserX,
      title: "Kundenverlust durch manuelle Prozesse",
      stat: "23% Abbruchrate",
      description: "bei langwierigen KYC-Verfahren",
      severity: "high"
    },
    {
      icon: Clock,
      title: "Zeitintensive Compliance-Prüfungen",
      stat: "40+ Stunden/Woche",
      description: "für manuelle Transaktionsüberwachung",
      severity: "medium"
    },
    {
      icon: AlertTriangle,
      title: "Reputationsschäden",
      stat: "67% Kundenverlust",
      description: "nach Geldwäsche-Skandalen",
      severity: "critical"
    }
  ];
  const requirements = [
    {
      id: 1,
      title: "Sorgfaltspflichten",
      items: [
        "Kundenidentifizierung (KYC)",
        "Wirtschaftlich Berechtigte ermitteln",
        "Geschäftszweck dokumentieren",
        "Laufende Überwachung"
      ],
      coverage: 95,
      icon: UserCheck
    },
    {
      id: 2,
      title: "Risikomanagement",
      items: [
        "Risikobewertung erstellen",
        "Angemessene Sicherungsmaßnahmen",
        "Risikoorientierte Überwachung",
        "Regelmäßige Aktualisierung"
      ],
      coverage: 92,
      icon: ShieldAlert
    },
    {
      id: 3,
      title: "Verdachtsmeldungen",
      items: [
        "Unverzügliche Meldepflicht",
        "Dokumentation verdächtiger Transaktionen",
        "Keine Informationsweitergabe",
        "Schutz vor Haftung"
      ],
      coverage: 88,
      icon: AlertOctagon
    },
    {
      id: 4,
      title: "Organisation & Schulung",
      items: [
        "Geldwäschebeauftragter",
        "Regelmäßige Mitarbeiterschulungen",
        "Interne Sicherungsmaßnahmen",
        "Dokumentationspflichten"
      ],
      coverage: 90,
      icon: Briefcase
    }
  ];
  const verpflichtete = [
    {
      category: "Finanzsektor",
      entities: ["Banken", "Versicherungen", "Zahlungsdienstleister", "Krypto-Verwahrstellen"],
      riskLevel: "high",
      icon: Landmark
    },
    {
      category: "Immobiliensektor",
      entities: ["Makler", "Verwalter", "Bauträger", "Immobilienfinanzierer"],
      riskLevel: "medium",
      icon: Building2
    },
    {
      category: "Rechts- & Steuerberatung",
      entities: ["Rechtsanwälte", "Notare", "Steuerberater", "Wirtschaftsprüfer"],
      riskLevel: "medium",
      icon: Scale
    },
    {
      category: "Handel & Dienstleistung",
      entities: ["Güterhändler (>10.000€ bar)", "Kunsthändler", "Glücksspielanbieter", "Factoring-Unternehmen"],
      riskLevel: "varies",
      icon: Briefcase
    }
  ];
  const useCases = [
    {
      title: "FinTech-Startup: 95% schnellere KYC-Prozesse",
      scenario: "Digitale Bank mit 50.000+ Neukunden/Monat",
      challenge: "Manuelle Identitätsprüfung dauerte 2-3 Tage",
      solution: "KI-basierte Dokumentenverifikation in Echtzeit",
      results: [
        { metric: "Onboarding-Zeit", value: "3 Minuten", change: "-95%" },
        { metric: "Betrugsfälle", value: "-78%", change: "reduction" },
        { metric: "Compliance-Kosten", value: "-65%", change: "savings" }
      ],
      icon: Rocket,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Immobilienmakler: Automatisierte Risikobewertung",
      scenario: "Luxusimmobilien-Vermittlung mit internationalen Kunden",
      challenge: "Komplexe Eigentümerstrukturen und PEP-Prüfungen",
      solution: "Automatische Sanktionslisten-Abgleiche und UBO-Ermittlung",
      results: [
        { metric: "Prüfungsdauer", value: "30 Min", change: "-90%" },
        { metric: "False Positives", value: "-82%", change: "reduction" },
        { metric: "Audit-Bereitschaft", value: "100%", change: "compliant" }
      ],
      icon: Building2,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Krypto-Exchange: Echtzeit Transaction Monitoring",
      scenario: "10+ Millionen Transaktionen täglich",
      challenge: "Erkennung von Mixing-Services und verdächtigen Mustern",
      solution: "ML-basierte Mustererkennung und Blockchain-Analyse",
      results: [
        { metric: "Erkennungsrate", value: "99.2%", change: "+45%" },
        { metric: "SAR-Qualität", value: "+89%", change: "improvement" },
        { metric: "Regulatorische Strafen", value: "0€", change: "avoided" }
      ],
      icon: GitBranch,
      gradient: "from-green-500 to-emerald-600"
    }
  ];
  const solutions = [
    {
      title: "KI-gestützte Identitätsprüfung",
      description: "Biometrische Verifikation und Dokumentenprüfung in Sekunden",
      features: [
        "Liveness-Detection",
        "OCR-Dokumentenextraktion",
        "Sanktionslisten-Abgleich",
        "PEP-Screening"
      ],
      icon: Fingerprint,
      color: "blue"
    },
    {
      title: "Intelligentes Transaction Monitoring",
      description: "Machine Learning erkennt verdächtige Muster in Echtzeit",
      features: [
        "Anomalie-Erkennung",
        "Netzwerk-Analyse",
        "Risiko-Scoring",
        "Automatische Alerts"
      ],
      icon: Brain,
      color: "purple"
    },
    {
      title: "Automatisierte Verdachtsmeldungen",
      description: "SAR-Generierung mit vorausgefüllten Formularen",
      features: [
        "BaFin-konforme Templates",
        "Automatische Dokumentation",
        "Verschlüsselte Übermittlung",
        "Audit-Trail"
      ],
      icon: FileCheck,
      color: "green"
    },
    {
      title: "Compliance-Management-Dashboard",
      description: "Zentrale Übersicht über alle GwG-relevanten Prozesse",
      features: [
        "Risiko-Heatmaps",
        "Compliance-Score",
        "Schulungsverwaltung",
        "Reporting-Tools"
      ],
      icon: BarChart3,
      color: "orange"
    }
  ];
  const stats = [
    { value: "98%", label: "Automatisierungsgrad", icon: Bot },
    { value: "<5 Min", label: "KYC-Prozess", icon: Timer },
    { value: "0", label: "Compliance-Verstöße", icon: Shield },
    { value: "24/7", label: "Monitoring", icon: Eye }
  ];
  const benefits = [
    {
      title: "Kosten senken",
      items: ["80% weniger manuelle Prüfungen", "Keine Bußgelder", "Effizientere Prozesse"],
      value: "-75%",
      icon: TrendingDown
    },
    {
      title: "Risiken minimieren",
      items: ["Lückenlose Dokumentation", "Automatische Warnungen", "Präventive Maßnahmen"],
      value: "99.9%",
      icon: ShieldCheck
    },
    {
      title: "Kunden begeistern",
      items: ["Schnelles Onboarding", "Weniger Rückfragen", "Digitale Prozesse"],
      value: "+92%",
      icon: Star
    },
    {
      title: "Wachstum fördern",
      items: ["Skalierbare Compliance", "Neue Märkte erschließen", "Wettbewerbsvorteil"],
      value: "+45%",
      icon: TrendingUp
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Geldwäschegesetz (GwG) – AML-Compliance automatisiert",
        description: "GwG-Compliance leicht gemacht: KYC-Prüfung, Risikomanagement & Verdachtsmeldungen. ✓ KI-gestützt ✓ BaFin-konform. Jetzt digitalisieren!",
        canonical: "/geldwaeschegesetz",
        keywords: "Geldwäschegesetz, GwG, AML Compliance, Anti-Geldwäsche, KYC Prüfung",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 opacity-5", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      } }) }),
      /* @__PURE__ */ jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-marsstein to-red-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gray-900", children: "MarsStein Compliance" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/solutions", className: "text-gray-600 hover:text-gray-900 transition-colors", children: "Lösungen" }),
          /* @__PURE__ */ jsx(Link, { to: "/regulations", className: "text-gray-600 hover:text-gray-900 transition-colors", children: "Regulierungen" }),
          /* @__PURE__ */ jsx(Link, { to: "/resources", className: "text-gray-600 hover:text-gray-900 transition-colors", children: "Ressourcen" }),
          /* @__PURE__ */ jsx(Link, { to: "/demo", className: "px-6 py-2 bg-gradient-to-r from-marsstein to-red-600 text-white rounded-full hover:shadow-lg transition-all duration-300", children: "Demo anfordern" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          className: "relative pt-32 pb-20 px-6 overflow-hidden",
          style: { opacity, scale },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" }),
            /* @__PURE__ */ jsx("div", { className: "container mx-auto relative z-10", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "text-center max-w-5xl mx-auto",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-6 py-3 bg-red-100 rounded-full mb-6", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-red-600" }),
                    /* @__PURE__ */ jsx("span", { className: "text-red-800 font-medium", children: "BaFin verschärft Kontrollen ab 2025" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight", children: [
                    "Geldwäschegesetz-",
                    /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600", children: "Compliance" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "text-4xl md:text-5xl", children: "mit KI automatisiert" })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed", children: [
                    "Schützen Sie Ihr Unternehmen vor Millionen-Bußgeldern mit unserer",
                    /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
                    "KI-gestützten GwG-Compliance-Plattform. Von KYC bis SAR – alles automatisiert."
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12", children: [
                    /* @__PURE__ */ jsxs(
                      motion.button,
                      {
                        className: "px-8 py-4 bg-gradient-to-r from-marsstein to-red-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: [
                          /* @__PURE__ */ jsx(PlayCircle, { className: "w-5 h-5" }),
                          /* @__PURE__ */ jsx("span", { children: "Kostenlose Demo" })
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
                          /* @__PURE__ */ jsx("span", { children: "GwG-Leitfaden 2025" })
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
                        /* @__PURE__ */ jsx(stat.icon, { className: "w-8 h-8 text-marsstein mx-auto mb-2" }),
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
                className: "absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl",
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
                className: "absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20 blur-3xl",
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
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-16",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Die Kosten der Nicht-Compliance" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Geldwäscheverstöße können existenzbedrohend sein" })
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
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: point.description })
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
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Sind Sie GwG-verpflichtet?" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Diese Branchen und Unternehmen müssen das Geldwäschegesetz beachten" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: verpflichtete.map((group, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsx(group.icon, { className: "w-12 h-12 text-marsstein" }),
                /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-xs font-semibold ${group.riskLevel === "high" ? "bg-red-100 text-red-700" : group.riskLevel === "medium" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`, children: group.riskLevel === "high" ? "Hohes Risiko" : group.riskLevel === "medium" ? "Mittleres Risiko" : "Variiert" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: group.category }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: group.entities.map((entity, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-600 text-sm", children: entity })
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
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "GwG-Anforderungen im Überblick" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Diese Pflichten müssen Sie erfüllen – wir automatisieren sie für Sie" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: requirements.map((req, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-white rounded-2xl p-8 shadow-xl",
            initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl", children: /* @__PURE__ */ jsx(req.icon, { className: "w-8 h-8 text-purple-600" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900", children: req.title })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600", children: [
                    req.coverage,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: "Abdeckung" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: req.items.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-600 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item })
              ] }, idx)) }),
              /* @__PURE__ */ jsx("div", { className: "relative h-3 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500",
                  initial: { width: 0 },
                  whileInView: { width: `${req.coverage}%` },
                  viewport: { once: true },
                  transition: { duration: 1, delay: 0.5 }
                }
              ) })
            ]
          },
          req.id
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
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Erfolgsgeschichten unserer Kunden" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "So profitieren Unternehmen von automatisierter GwG-Compliance" })
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
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-gray-900 mb-6", children: "Ergebnisse" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: useCase.results.map((result, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: result.metric }),
                  /* @__PURE__ */ jsx("span", { className: `text-2xl font-bold ${result.change === "reduction" || result.change === "savings" ? "text-green-600" : result.change === "improvement" || result.change === "compliant" ? "text-blue-600" : result.change.startsWith("-") ? "text-green-600" : "text-purple-600"}`, children: result.value })
                ] }, idx)) })
              ] })
            ] })
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
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Unsere GwG-Compliance-Lösungen" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Modernste Technologie trifft auf Compliance-Expertise" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            whileHover: { y: -5 },
            children: [
              /* @__PURE__ */ jsx("div", { className: `inline-flex p-4 rounded-xl mb-6 ${solution.color === "blue" ? "bg-blue-100" : solution.color === "purple" ? "bg-purple-100" : solution.color === "green" ? "bg-green-100" : "bg-orange-100"}`, children: /* @__PURE__ */ jsx(solution.icon, { className: `w-8 h-8 ${solution.color === "blue" ? "text-blue-600" : solution.color === "purple" ? "text-purple-600" : solution.color === "green" ? "text-green-600" : "text-orange-600"}` }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: solution.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: solution.description }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: solution.features.map((feature, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: `w-2 h-2 rounded-full ${solution.color === "blue" ? "bg-blue-500" : solution.color === "purple" ? "bg-purple-500" : solution.color === "green" ? "bg-green-500" : "bg-orange-500"}` }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
              ] }, idx)) }),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  className: "mt-6 flex items-center space-x-2 text-marsstein font-semibold hover:text-red-700 transition-colors",
                  whileHover: { x: 5 },
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "Mehr erfahren" }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl",
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Ihr GwG-Compliance-Score" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-8", children: "Erhalten Sie in Echtzeit einen Überblick über Ihren Compliance-Status und identifizieren Sie Verbesserungspotenziale." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-green-500 rounded-full" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Vollständig erfüllt" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-yellow-500 rounded-full" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Teilweise erfüllt" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-red-500 rounded-full" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Handlungsbedarf" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  className: "mt-8 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: [
                    /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5" }),
                    /* @__PURE__ */ jsx("span", { children: "Compliance-Check starten" })
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
                      stroke: "url(#gradient)",
                      strokeWidth: "20",
                      fill: "none",
                      strokeLinecap: "round",
                      strokeDasharray: `${2 * Math.PI * 140}`,
                      initial: { strokeDashoffset: 2 * Math.PI * 140 },
                      animate: { strokeDashoffset: 2 * Math.PI * 140 * (1 - complianceScore / 100) },
                      transition: { duration: 2, ease: "easeOut" }
                    }
                  ),
                  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#10b981" }),
                    /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#3b82f6" }),
                    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#8b5cf6" })
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
                        complianceScore,
                        "%"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-400 mt-2", children: "Compliance-Score" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mt-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-500", children: "95%" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "KYC-Prozesse" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-500", children: "88%" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Risikobewertung" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-500", children: "92%" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Monitoring" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-500", children: "79%" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Schulungen" })
                ] })
              ] })
            ] })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-16",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Ihr Nutzen mit MarsStein" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Messbare Ergebnisse für Ihr Unternehmen" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            whileHover: { y: -5 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsx(benefit.icon, { className: "w-12 h-12 text-marsstein" }),
                /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-marsstein to-red-600", children: benefit.value })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: benefit.title }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: benefit.items.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-600 text-sm", children: item })
              ] }, idx)) })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gradient-to-br from-gray-900 to-black", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center max-w-4xl mx-auto",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Bereit für automatisierte GwG-Compliance?" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-12", children: "Schützen Sie Ihr Unternehmen vor Millionen-Bußgeldern und starten Sie noch heute mit unserer KI-gestützten Compliance-Lösung." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6", children: [
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  className: "px-8 py-4 bg-gradient-to-r from-marsstein to-red-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5" }),
                    /* @__PURE__ */ jsx("span", { children: "Beratungstermin vereinbaren" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  className: "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 border border-white/20",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: [
                    /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" }),
                    /* @__PURE__ */ jsx("span", { children: "+49 30 12345678" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center justify-center space-x-8 text-gray-400", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsx("span", { children: "BaFin-konform" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsx("span", { children: "ISO 27001 zertifiziert" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(BadgeCheck, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsx("span", { children: "GDPR-compliant" })
              ] })
            ] })
          ]
        }
      ) }) })
    ] })
  ] });
};
export {
  GeldwaeschegesetzCompliance as default
};
