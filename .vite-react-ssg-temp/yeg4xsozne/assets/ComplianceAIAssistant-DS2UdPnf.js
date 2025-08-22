import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { useInView, useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Bot, MicOff, Mic, Download, MessageCircle, Target, Zap, Users, Brain, FileCheck, CheckCircle, PlayCircle, Send, Volume2, Settings, Smartphone, Shield, Globe, Clock, Phone } from "lucide-react";
import { c as cn } from "../main.mjs";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react-router-dom";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const ComplianceAIAssistant = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Compliance AI Assistant",
    "description": "KI-gestützter Compliance-Berater für DSGVO, ISO 27001 und EU AI Act Fragen",
    "applicationCategory": "AI Assistant",
    "url": "https://marsstein.com/tools/compliance-ai-assistant"
  };
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [responseTime, setResponseTime] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  useEffect(() => {
    if (isHeroInView) {
      const timer = setTimeout(() => {
        const interval1 = setInterval(() => {
          setQuestionsAnswered((prev) => {
            if (prev >= 284752) {
              clearInterval(interval1);
              return 284752;
            }
            return prev + 5600;
          });
        }, 30);
        const interval2 = setInterval(() => {
          setAccuracy((prev) => {
            if (prev >= 97.8) {
              clearInterval(interval2);
              return 97.8;
            }
            return prev + 0.2;
          });
        }, 50);
        const interval3 = setInterval(() => {
          setResponseTime((prev) => {
            if (prev >= 1.3) {
              clearInterval(interval3);
              return 1.3;
            }
            return prev + 0.03;
          });
        }, 40);
        const interval4 = setInterval(() => {
          setActiveUsers((prev) => {
            if (prev >= 12847) {
              clearInterval(interval4);
              return 12847;
            }
            return prev + 250;
          });
        }, 30);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isHeroInView]);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const aiCapabilities = [
    {
      icon: MessageCircle,
      title: "Natural Language Understanding",
      description: "Verstehe komplexe DSGVO-Fragen in natürlicher Sprache",
      accuracy: "97.8%",
      examples: [
        "Darf ich Kundendaten nach USA übertragen?",
        "Wie lange darf ich Bewerberdaten speichern?",
        "Benötige ich ein Verarbeitungsverzeichnis?"
      ]
    },
    {
      icon: Brain,
      title: "Contextual Analysis",
      description: "Analysiert Kontext und Branche für präzise Antworten",
      accuracy: "94.2%",
      examples: [
        "Branchenspezifische Compliance-Anforderungen",
        "Risikobewertung basierend auf Unternehmensgröße",
        "Relevante Rechtsgrundlagen identifizieren"
      ]
    },
    {
      icon: FileCheck,
      title: "Document Processing",
      description: "Scannt und analysiert Dokumente auf DSGVO-Compliance",
      accuracy: "96.1%",
      examples: [
        "Datenschutzerklärungen prüfen",
        "Verträge auf AVV-Klauseln scannen",
        "Cookie-Banner Compliance checken"
      ]
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Immer aktuell mit neuesten Gesetzen und Urteilen",
      accuracy: "99.9%",
      examples: [
        "EuGH Urteile automatisch einarbeiten",
        "Neue Aufsichtsbehörden-Leitlinien",
        "Aktuelle Bußgeld-Entwicklungen"
      ]
    }
  ];
  const conversationExamples = [
    {
      user: "Alexa, darf ich Kundendaten für Marketing nutzen?",
      ai: "Das hängt von der Rechtsgrundlage ab. Für Marketing benötigen Sie in der Regel eine ausdrückliche Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Bei bestehenden Kunden können Sie auch das berechtigte Interesse nach Art. 6 Abs. 1 lit. f DSGVO prüfen, müssen dann aber eine Interessenabwägung durchführen.",
      followUp: "Möchten Sie eine Vorlage für die Interessenabwägung?"
    },
    {
      user: "Hey Google, wie lange Bewerberdaten aufbewahren?",
      ai: "Nach einer Absage sollten Bewerberdaten grundsätzlich nach 6 Monaten gelöscht werden, es sei denn der Bewerber stimmt einer längeren Speicherung zu. Bei erfolgreichen Bewerbern beginnt die reguläre Aufbewahrungsfrist als Personaldaten.",
      followUp: "Soll ich Ihnen ein Löschkonzept für Bewerberdaten erstellen?"
    },
    {
      user: "Siri, ist unser Cookie-Banner DSGVO-konform?",
      ai: "Ich kann Ihren Cookie-Banner analysieren. Dafür benötige ich die URL oder einen Screenshot. Wichtige Punkte: Opt-in vor Tracking, granulare Auswahl, einfacher Widerruf und keine Benachteiligung bei Ablehnung.",
      followUp: "Möchten Sie mir die URL Ihrer Website mitteilen?"
    }
  ];
  const voicePlatforms = [
    { name: "Amazon Alexa", icon: "🔊", users: "45.2M", feature: "DSGVO Skill verfügbar" },
    { name: "Google Assistant", icon: "🎤", users: "38.7M", feature: "Compliance Action" },
    { name: "Apple Siri", icon: "📱", users: "28.3M", feature: "Shortcuts Integration" },
    { name: "Microsoft Cortana", icon: "💻", users: "12.1M", feature: "Business Integration" }
  ];
  const [chatMessages, setChatMessages] = useState([
    {
      type: "ai",
      message: "Hallo! Ich bin Ihr DSGVO AI Assistant. Fragen Sie mich alles zum Datenschutz.",
      timestamp: new Date(Date.now() - 6e4).toLocaleTimeString()
    }
  ]);
  const demoQuestions = [
    "Darf ich Newsletter ohne Opt-in versenden?",
    "Wie erstelle ich ein Verarbeitungsverzeichnis?",
    "Welche Bußgelder drohen bei Verstößen?",
    "Brauche ich einen Datenschutzbeauftragten?"
  ];
  const handleSendMessage = (message) => {
    if (!message.trim()) return;
    setChatMessages((prev) => [...prev, {
      type: "user",
      message,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString()
    }]);
    setTimeout(() => {
      const responses = {
        "Darf ich Newsletter ohne Opt-in versenden?": "Nein, für Newsletter benötigen Sie eine ausdrückliche Einwilligung (Double-Opt-In) nach Art. 6 Abs. 1 lit. a DSGVO. Ausnahme: Bei bestehenden Kunden für ähnliche Produkte nach § 7 Abs. 3 UWG.",
        "Wie erstelle ich ein Verarbeitungsverzeichnis?": "Ein Verarbeitungsverzeichnis nach Art. 30 DSGVO muss folgende Angaben enthalten: Zwecke, Kategorien personenbezogener Daten, Kategorien von Empfängern, Übermittlungen in Drittländer und Löschfristen. Ich kann Ihnen eine Vorlage erstellen.",
        "Welche Bußgelder drohen bei Verstößen?": "DSGVO-Bußgelder können bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes betragen. Die Höhe hängt von Schwere, Vorsatz, Unternehmensgröße und Kooperationsbereitschaft ab.",
        "Brauche ich einen Datenschutzbeauftragten?": "Ja, wenn Sie regelmäßig personenbezogene Daten verarbeiten und mind. 20 Personen damit beschäftigt sind, oder wenn Kerntätigkeit in umfangreicher Verarbeitung besonderer Kategorien besteht (Art. 37 DSGVO)."
      };
      setChatMessages((prev) => [...prev, {
        type: "ai",
        message: responses[message] || "Das ist eine interessante Frage! Lassen Sie mich das für Sie recherchieren und Ihnen eine präzise, rechtssichere Antwort geben basierend auf aktueller DSGVO-Rechtsprechung.",
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString()
      }]);
    }, 1500);
    setCurrentMessage("");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "AI Assistant – Compliance-Berater mit KI-Power",
        description: "Compliance AI Assistant: KI-gestützter Berater für DSGVO, ISO 27001, EU AI Act. ✓ 24/7 verfügbar ✓ Voice AI ✓ Instant Antworten. Jetzt kostenlos testen!",
        canonical: "/tools/compliance-ai-assistant",
        keywords: "Compliance AI Assistant, KI Compliance Berater, DSGVO AI, Voice AI, Compliance Automation",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          ref: heroRef,
          className: "relative pt-32 pb-20 px-6 overflow-hidden",
          style: { opacity: heroOpacity, scale: heroScale },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full opacity-20 blur-3xl",
                  animate: {
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                  },
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 30a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM6 6h12v12H6V6zm24 24h12v12H30V30zM6 30h12v12H6V30zm24-24h12v12H30V6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              } }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "container mx-auto relative z-10", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "text-center max-w-6xl mx-auto",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8",
                      initial: { scale: 0 },
                      animate: { scale: 1 },
                      transition: { delay: 0.2, type: "spring" },
                      children: [
                        /* @__PURE__ */ jsx(Bot, { className: "w-6 h-6 text-blue-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-blue-100 font-medium", children: "AI-Powered Legal Assistant" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-200 border-blue-400/30", children: "VOICE" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.h1,
                    {
                      className: "text-6xl md:text-8xl font-bold text-white mb-8 leading-tight",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.3 },
                      children: [
                        "Compliance",
                        /* @__PURE__ */ jsx("br", {}),
                        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400", children: "AI Assistant" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.p,
                    {
                      className: "text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.4 },
                      children: [
                        '"Alexa, darf ich diese Kundendaten nach USA senden?"',
                        /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
                        "Instant Compliance-Beratung durch Voice AI. 24/7 verfügbar."
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "flex flex-col sm:flex-row items-center justify-center gap-6 mb-16",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.5 },
                      children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            size: "lg",
                            className: "px-8 py-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-lg group",
                            onClick: () => setIsListening(!isListening),
                            children: [
                              isListening ? /* @__PURE__ */ jsx(MicOff, { className: "w-6 h-6 mr-3" }) : /* @__PURE__ */ jsx(Mic, { className: "w-6 h-6 mr-3" }),
                              isListening ? "Stop Listening" : "Try Voice Demo"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            size: "lg",
                            variant: "outline",
                            className: "px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 text-lg",
                            children: [
                              /* @__PURE__ */ jsx(Download, { className: "w-6 h-6 mr-3" }),
                              "Alexa Skill installieren"
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { delay: 0.6 },
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6", children: [
                          /* @__PURE__ */ jsx(MessageCircle, { className: "w-8 h-8 text-green-400 mx-auto mb-2" }),
                          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white", children: questionsAnswered.toLocaleString() }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Fragen beantwortet" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6", children: [
                          /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-blue-400 mx-auto mb-2" }),
                          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-white", children: [
                            accuracy,
                            "%"
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Genauigkeit" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6", children: [
                          /* @__PURE__ */ jsx(Zap, { className: "w-8 h-8 text-yellow-400 mx-auto mb-2" }),
                          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-white", children: [
                            responseTime,
                            "s"
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Antwortzeit" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6", children: [
                          /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-purple-400 mx-auto mb-2" }),
                          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white", children: activeUsers.toLocaleString() }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Active Users" })
                        ] })
                      ]
                    }
                  )
                ]
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-black/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-16",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs(Badge, { className: "mb-4 bg-blue-100 text-blue-700 px-4 py-2", children: [
                /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4 mr-2" }),
                "AI Capabilities"
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Künstliche Intelligenz trifft Rechtsexpertise" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "Unser AI-System wurde mit 50.000+ DSGVO-Fällen und aktueller Rechtsprechung trainiert" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 mb-16", children: aiCapabilities.map((capability, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 p-8",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl", children: /* @__PURE__ */ jsx(capability.icon, { className: "w-8 h-8 text-blue-400" }) }),
                /* @__PURE__ */ jsxs(Badge, { className: "bg-green-500/20 text-green-400 border-green-500/30", children: [
                  capability.accuracy,
                  " Accuracy"
                ] })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: capability.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6", children: capability.description }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-300 mb-3", children: "Beispiele:" }),
                capability.examples.map((example, idx) => /* @__PURE__ */ jsxs("div", { lass: "flex items-start gap-2 text-sm text-gray-400", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: example })
                ] }, idx))
              ] })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-16",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs(Badge, { className: "mb-4 bg-green-100 text-green-700 px-4 py-2", children: [
                /* @__PURE__ */ jsx(PlayCircle, { className: "w-4 h-4 mr-2" }),
                "Live Demo"
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Testen Sie den AI Assistant" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "Probieren Sie echte DSGVO-Fragen aus und erleben Sie die Antwort-Qualität" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8",
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-500 rounded-full", children: /* @__PURE__ */ jsx(Bot, { className: "w-6 h-6 text-white" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "DSGVO AI Assistant" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 ml-auto", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Online" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "h-96 overflow-y-auto mb-4 space-y-4 bg-gray-900/30 rounded-xl p-4", children: chatMessages.map((msg, index) => /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: cn(
                      "flex",
                      msg.type === "user" ? "justify-end" : "justify-start"
                    ),
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    children: /* @__PURE__ */ jsxs("div", { className: cn(
                      "max-w-xs lg:max-w-md px-4 py-2 rounded-2xl",
                      msg.type === "user" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-100"
                    ), children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm", children: msg.message }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs opacity-70 mt-1", children: msg.timestamp })
                    ] })
                  },
                  index
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 mb-2", children: "Häufige Fragen:" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: demoQuestions.map((question, index) => /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "text-xs border-gray-600 text-gray-300 hover:bg-gray-700",
                      onClick: () => handleSendMessage(question),
                      children: question
                    },
                    index
                  )) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Stellen Sie Ihre DSGVO-Frage...",
                      value: currentMessage,
                      onChange: (e) => setCurrentMessage(e.target.value),
                      onKeyPress: (e) => e.key === "Enter" && handleSendMessage(currentMessage),
                      className: "flex-1 px-4 py-3 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-blue-500 focus:outline-none"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: () => setIsListening(!isListening),
                      className: cn(
                        "px-4 py-3 rounded-xl",
                        isListening ? "bg-red-500 hover:bg-red-600" : "bg-gray-600 hover:bg-gray-500"
                      ),
                      children: isListening ? /* @__PURE__ */ jsx(MicOff, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Mic, { className: "w-5 h-5" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: () => handleSendMessage(currentMessage),
                      className: "px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl",
                      children: /* @__PURE__ */ jsx(Send, { className: "w-5 h-5" })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "space-y-8",
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxs(Card, { className: "bg-gray-800/50 border-gray-700 p-8", children: [
                  /* @__PURE__ */ jsx(CardHeader, { className: "pb-6", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl text-white flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(Volume2, { className: "w-8 h-8 text-green-400" }),
                    "Voice Platforms"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: voicePlatforms.map((platform, index) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "flex items-center justify-between p-4 bg-gray-900/50 rounded-xl",
                      initial: { opacity: 0, y: 10 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: index * 0.1 },
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-2xl", children: platform.icon }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: platform.name }),
                            /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-400", children: [
                              platform.users,
                              " Users"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-400 border-blue-500/30", children: platform.feature })
                      ]
                    },
                    index
                  )) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-500/30 p-8", children: [
                  /* @__PURE__ */ jsx(CardHeader, { className: "pb-6", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl text-white flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(MessageCircle, { className: "w-8 h-8 text-blue-400" }),
                    "Conversation Preview"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: conversationExamples.slice(0, 1).map((conv, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-2 bg-white/10 rounded-full", children: /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-white" }) }),
                      /* @__PURE__ */ jsx("div", { className: "flex-1 p-3 bg-white/10 rounded-xl", children: /* @__PURE__ */ jsx("p", { className: "text-white text-sm", children: conv.user }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-500 rounded-full", children: /* @__PURE__ */ jsx(Bot, { className: "w-4 h-4 text-white" }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 p-3 bg-blue-900/30 rounded-xl border border-blue-500/30", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-gray-200 text-sm mb-2", children: conv.ai }),
                        /* @__PURE__ */ jsx("p", { className: "text-blue-300 text-xs italic", children: conv.followUp })
                      ] })
                    ] })
                  ] }, index)) }) })
                ] })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-black/40", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-16",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs(Badge, { className: "mb-4 bg-purple-100 text-purple-700 px-4 py-2", children: [
                /* @__PURE__ */ jsx(Settings, { className: "w-4 h-4 mr-2" }),
                "Features"
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Mehr als nur Fragen & Antworten" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16", children: [
          { icon: Smartphone, title: "Multi-Platform", desc: "Verfügbar auf allen Geräten und Plattformen" },
          { icon: Shield, title: "Datenschutz by Design", desc: "Ihre Fragen werden nicht gespeichert oder analysiert" },
          { icon: Globe, title: "Mehrsprachig", desc: "Deutsch, Englisch, Französisch und weitere Sprachen" },
          { icon: Clock, title: "24/7 Verfügbar", desc: "Rund um die Uhr verfügbar, keine Wartezeiten" },
          { icon: FileCheck, title: "Document Review", desc: "Automatische Analyse von Verträgen und Dokumenten" },
          { icon: Users, title: "Team Integration", desc: "Für ganze Teams und Abteilungen verfügbar" }
        ].map((feature, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsx(feature.icon, { className: "w-10 h-10 text-blue-400 mb-4" }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: feature.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: feature.desc })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto text-center max-w-4xl", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Starten Sie noch heute" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-12", children: '"Alexa, installiere DSGVO Assistant" - In 2 Minuten einsatzbereit. Keine Verträge, keine Verpflichtungen, 14 Tage kostenlos.' }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6 mb-8", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  className: "px-8 py-6 bg-white text-indigo-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-lg",
                  children: [
                    /* @__PURE__ */ jsx(Bot, { className: "w-6 h-6 mr-3" }),
                    "14 Tage kostenlos testen"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "px-8 py-6 bg-indigo-600/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-indigo-600/30 transition-all duration-300 border-white/30 text-lg",
                  children: [
                    /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 mr-3" }),
                    "Demo Call buchen"
                  ]
                }
              )
            ] })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  ComplianceAIAssistant as default
};
