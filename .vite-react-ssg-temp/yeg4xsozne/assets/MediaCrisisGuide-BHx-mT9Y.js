import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { ChevronDown, MessageSquare, X, Wifi, Globe, Megaphone, Download, Activity, Hash, Heart, MessageCircle, Newspaper, Twitter, Linkedin, Facebook, Instagram, AlertCircle, Users, TrendingUp, Clock, Zap, CheckCircle2, AlertOctagon, FileText, Copy, Share2, ChevronRight, CheckCircle, BarChart3, Settings, Target, Brain, BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
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
const MediaCrisisGuide = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      h2, h3, h4 { scroll-margin-top: 96px; }
      section[id] { scroll-margin-top: 80px; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [selectedChannel, setSelectedChannel] = useState("all");
  const [expandedSections, setExpandedSections] = useState([]);
  const [sentimentScore, setSentimentScore] = useState(0);
  const [responsesSent, setResponsesSent] = useState(0);
  const [monitoringActive, setMonitoringActive] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const crisisPhases = [
    {
      id: 0,
      title: "Crisis Detection & Assessment",
      timeframe: "0-30 Minuten",
      priority: "KRITISCH",
      icon: AlertCircle,
      color: "from-red-500 to-orange-500",
      description: "Erkennung der medialen Krise und erste Bewertung der Situation",
      keyActions: [
        "Social Media Monitoring aktivieren",
        "Sentiment-Analyse durchführen",
        "Reichweite und Virality bewerten",
        "Key Influencer identifizieren",
        "Krisentyp klassifizieren"
      ],
      monitoringMetrics: {
        volume: "Anzahl der Erwähnungen pro Stunde",
        sentiment: "Positiv/Neutral/Negativ Verhältnis",
        reach: "Potentielle Reichweite in Millionen",
        velocity: "Verbreitungsgeschwindigkeit",
        influencers: "Top 10 Accounts nach Reichweite"
      },
      escalationTriggers: [
        {
          metric: "Erwähnungen/Stunde",
          threshold: ">1000",
          action: "Crisis Team aktivieren"
        },
        {
          metric: "Negative Sentiment",
          threshold: ">70%",
          action: "CEO einbeziehen"
        },
        {
          metric: "Mainstream Media",
          threshold: "Aufgegriffen",
          action: "PR-Agentur aktivieren"
        }
      ]
    },
    {
      id: 1,
      title: "Holding Statement & First Response",
      timeframe: "30 Min - 2 Stunden",
      priority: "KRITISCH",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      description: "Erste offizielle Reaktion und Kommunikation nach außen",
      responseStrategy: {
        timing: {
          social: "Innerhalb 1 Stunde",
          media: "Innerhalb 2 Stunden",
          stakeholder: "Innerhalb 3 Stunden"
        },
        tone: {
          empathetic: "Verständnis zeigen",
          factual: "Sachlich bleiben",
          accountable: "Verantwortung übernehmen",
          actionOriented: "Lösungen aufzeigen"
        },
        channels: [
          {
            platform: "Twitter/X",
            format: "Thread mit 3-5 Tweets",
            frequency: "Alle 2-3 Stunden"
          },
          {
            platform: "LinkedIn",
            format: "Offizielles Statement",
            frequency: "1x täglich Update"
          },
          {
            platform: "Website",
            format: "Dedicated Crisis Page",
            frequency: "Real-time Updates"
          },
          {
            platform: "Email",
            format: "Stakeholder Updates",
            frequency: "2x täglich"
          }
        ]
      },
      holdingStatements: [
        {
          scenario: "Datenschutzverletzung",
          template: "Wir sind uns der Berichte über [INCIDENT] bewusst und nehmen diese sehr ernst. Unser Team untersucht die Situation umfassend. Die Sicherheit unserer Kunden hat oberste Priorität. Updates folgen."
        },
        {
          scenario: "Systemausfall",
          template: "Wir arbeiten mit Hochdruck an der Lösung der aktuellen [SERVICE]-Probleme. Unsere Teams sind vollständig mobilisiert. Wir entschuldigen uns für die Unannehmlichkeiten. Status: [LINK]"
        },
        {
          scenario: "Compliance-Verstoß",
          template: "Wir haben Kenntnis von den Vorwürfen bezüglich [ISSUE]. Wir kooperieren vollständig mit den Behörden und führen eine interne Untersuchung durch. Weitere Informationen folgen."
        }
      ]
    },
    {
      id: 2,
      title: "Multi-Channel Response Management",
      timeframe: "2-12 Stunden",
      priority: "HOCH",
      icon: Globe,
      color: "from-yellow-500 to-orange-500",
      description: "Koordinierte Kommunikation über alle Kanäle hinweg",
      channelStrategies: {
        socialMedia: {
          platforms: ["Twitter/X", "LinkedIn", "Facebook", "Instagram"],
          tactics: [
            "Proaktive Antworten auf Mentions",
            "Community Management verstärken",
            "Influencer Outreach",
            "Hashtag-Monitoring",
            "Visual Content Creation"
          ],
          donts: [
            "Automatische Antworten",
            "Löschen von kritischen Kommentaren",
            "Aggressive Verteidigung",
            "Ignorieren von Fragen"
          ]
        },
        traditionalMedia: {
          channels: ["TV", "Radio", "Print", "Online News"],
          approach: [
            "Pressemitteilung vorbereiten",
            "Spokesperson briefen",
            "Interview-Anfragen priorisieren",
            "Fact Sheet erstellen",
            "B-Roll Material bereitstellen"
          ],
          keyMessages: [
            "Hauptbotschaft (30 Sekunden)",
            "Supporting Points (3-5)",
            "Proof Points",
            "Call to Action"
          ]
        },
        internal: {
          audiences: ["Mitarbeiter", "Management", "Investoren"],
          channels: [
            "All-Hands Meeting",
            "Intranet Updates",
            "Manager Briefings",
            "Q&A Sessions"
          ],
          frequency: "Minimum 2x täglich"
        }
      },
      responseMetrics: {
        responseTime: "Durchschnittliche Antwortzeit",
        coverage: "% der Anfragen beantwortet",
        sentiment: "Sentiment-Shift nach Response",
        engagement: "Positive Interaktionen",
        reach: "Erreichte Personen"
      }
    },
    {
      id: 3,
      title: "Stakeholder Management & Coordination",
      timeframe: "Ongoing",
      priority: "HOCH",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      description: "Gezielte Kommunikation mit Schlüssel-Stakeholdern",
      stakeholderMatrix: [
        {
          group: "Kunden",
          priority: "KRITISCH",
          channels: ["Email", "In-App", "Support"],
          messaging: "Persönlich, lösungsorientiert",
          frequency: "Stündlich bei aktiver Krise"
        },
        {
          group: "Mitarbeiter",
          priority: "KRITISCH",
          channels: ["Intranet", "Slack", "Email"],
          messaging: "Transparent, unterstützend",
          frequency: "2x täglich minimum"
        },
        {
          group: "Investoren",
          priority: "HOCH",
          channels: ["Direct Call", "Email", "IR Portal"],
          messaging: "Faktisch, zukunftsorientiert",
          frequency: "Täglich während Krise"
        },
        {
          group: "Partner",
          priority: "HOCH",
          channels: ["Email", "Portal", "Account Manager"],
          messaging: "Kooperativ, lösungsorientiert",
          frequency: "Täglich Updates"
        },
        {
          group: "Regulatoren",
          priority: "HOCH",
          channels: ["Offizielle Kanäle", "Direct Contact"],
          messaging: "Formal, compliant",
          frequency: "Nach Anforderung"
        }
      ],
      coordinationTools: {
        warRoom: {
          physical: "Dedizierter Krisenraum",
          virtual: "24/7 Video-Bridge",
          participants: "Core Crisis Team",
          cadence: "Alle 2 Stunden"
        },
        documentation: {
          decisionLog: "Alle Entscheidungen dokumentieren",
          approvalMatrix: "Clear Sign-off Prozess",
          versionControl: "Single Source of Truth",
          audit: "Compliance Trail"
        }
      }
    },
    {
      id: 4,
      title: "Media Monitoring & Sentiment Analysis",
      timeframe: "Kontinuierlich",
      priority: "MITTEL",
      icon: Activity,
      color: "from-indigo-500 to-purple-500",
      description: "Echtzeit-Überwachung und Analyse der Medienlandschaft",
      monitoringDashboard: {
        realTime: [
          "Social Media Mentions",
          "News Coverage",
          "Sentiment Trends",
          "Geographic Spread",
          "Influencer Activity"
        ],
        analytics: [
          {
            metric: "Share of Voice",
            calculation: "% der Diskussion über uns",
            target: "Reduzierung auf <30%"
          },
          {
            metric: "Message Penetration",
            calculation: "% mit unseren Key Messages",
            target: "Erhöhung auf >50%"
          },
          {
            metric: "Crisis Lifecycle",
            calculation: "Phase der Krise",
            target: "De-escalation erreichen"
          }
        ],
        alerts: [
          "Neue Influencer involviert",
          "Mainstream Media Pickup",
          "Sentiment Shift >10%",
          "Legal Threats erwähnt",
          "Boycott Calls"
        ]
      },
      sentimentCategories: {
        supportive: {
          indicators: ["Verständnis", "Unterstützung", "Positive Lösungen"],
          response: "Verstärken und danken"
        },
        neutral: {
          indicators: ["Faktische Fragen", "Information seeking"],
          response: "Informieren und aufklären"
        },
        critical: {
          indicators: ["Beschwerden", "Enttäuschung", "Forderungen"],
          response: "Empathie und Lösungen"
        },
        hostile: {
          indicators: ["Beleidigungen", "Drohungen", "Falschinformationen"],
          response: "Professionell, ggf. eskalieren"
        }
      }
    },
    {
      id: 5,
      title: "Recovery & Reputation Rebuild",
      timeframe: "1-4 Wochen",
      priority: "WICHTIG",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Strategische Maßnahmen zur Wiederherstellung der Reputation",
      recoveryStrategy: {
        immediate: [
          "Success Stories kommunizieren",
          "Positive Customer Testimonials",
          "Transparenz-Initiative starten",
          "Community Engagement verstärken",
          "Thought Leadership Content"
        ],
        shortTerm: [
          "Media Tour mit Leadership",
          "Podcast Appearances",
          "Industry Event Speaking",
          "Partnership Announcements",
          "Product Improvements"
        ],
        longTerm: [
          "Brand Campaign Launch",
          "CSR Initiatives",
          "Industry Awards",
          "Research Publications",
          "Documentary/Behind-the-scenes"
        ]
      },
      kpis: [
        {
          metric: "Brand Sentiment Score",
          baseline: "Pre-Crisis Level",
          target: "+10% über Baseline",
          timeline: "6 Monate"
        },
        {
          metric: "Media Coverage Tone",
          baseline: "% Positive Coverage",
          target: ">70% positiv",
          timeline: "3 Monate"
        },
        {
          metric: "Customer Trust Index",
          baseline: "Survey Score",
          target: "Baseline wiederherstellen",
          timeline: "12 Monate"
        }
      ],
      lessonsLearned: {
        process: [
          "Crisis Response Zeit analysieren",
          "Kommunikations-Effektivität bewerten",
          "Stakeholder Feedback sammeln",
          "Media Coverage Review",
          "Social Media Performance"
        ],
        improvements: [
          "Playbook Updates",
          "Training Programme",
          "Tool Enhancements",
          "Relationship Building",
          "Monitoring Upgrades"
        ]
      }
    }
  ];
  const socialChannels = [
    { id: "twitter", name: "Twitter/X", icon: Twitter, color: "text-blue-400" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, color: "text-blue-600" },
    { id: "facebook", name: "Facebook", icon: Facebook, color: "text-blue-500" },
    { id: "instagram", name: "Instagram", icon: Instagram, color: "text-pink-500" },
    { id: "news", name: "News Media", icon: Newspaper, color: "text-gray-400" }
  ];
  const sampleResponses = {
    twitter: [
      {
        type: "Acknowledgment",
        text: "We're aware of the concerns raised about [issue]. Your trust is paramount to us, and we're investigating thoroughly. Updates to follow. 🧵",
        tone: "Professional, Empathetic"
      },
      {
        type: "Update",
        text: "UPDATE: We've identified the root cause and are implementing fixes. Expected resolution: [time]. We appreciate your patience during this time.",
        tone: "Informative, Solution-focused"
      },
      {
        type: "Apology",
        text: "We sincerely apologize for [issue] and the impact on our community. We take full responsibility and are taking these steps: [link]",
        tone: "Accountable, Action-oriented"
      }
    ],
    media: [
      {
        type: "Press Statement",
        text: "[Company] is committed to addressing the recent [issue]. We have initiated a comprehensive review and are working with [stakeholders] to ensure [outcome]. Our priority remains [value proposition].",
        tone: "Formal, Corporate"
      }
    ]
  };
  useEffect(() => {
    if (monitoringActive) {
      const interval = setInterval(() => {
        setSentimentScore((prev) => Math.min(100, prev + Math.random() * 5));
        setResponsesSent((prev) => prev + Math.floor(Math.random() * 3));
      }, 2e3);
      return () => clearInterval(interval);
    }
  }, [monitoringActive]);
  const toggleSection = (sectionId) => {
    setExpandedSections(
      (prev) => prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "KRITISCH":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse";
      case "HOCH":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
      case "MITTEL":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      case "WICHTIG":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };
  const getSentimentColor = (score) => {
    if (score < 30) return "text-red-500";
    if (score < 70) return "text-yellow-500";
    return "text-green-500";
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Media Crisis – Medien-Krisenkommunikation Guide" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Media Crisis Management: Pressestrategie, Social Media Response, Reputationsmanagement, Thought Leadership. ✓ PR Strategy ✓ Crisis Communication ✓ Brand Protection." }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsstein.ai/wissen/krisenmanagement/media-crisis" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Media Crisis – Medien-Krisenkommunikation Guide" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Media Crisis Management: Pressestrategie, Social Media Response, Reputationsmanagement, Thought Leadership. ✓ PR Strategy ✓ Crisis Communication ✓ Brand Protection." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://marsstein.ai/wissen/krisenmanagement/media-crisis" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Media Crisis Management Guide",
        "description": "Strukturierte Anleitung für professionelle Medien-Krisenkommunikation",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Crisis Detection & Assessment",
            "text": "Erkennung der medialen Krise und erste Bewertung der Situation"
          },
          {
            "@type": "HowToStep",
            "name": "Holding Statement & First Response",
            "text": "Erste offizielle Reaktion und Kommunikation nach außen"
          },
          {
            "@type": "HowToStep",
            "name": "Multi-Channel Response Strategy",
            "text": "Koordinierte Antwort über alle Kommunikationskanäle"
          },
          {
            "@type": "HowToStep",
            "name": "Stakeholder Management",
            "text": "Gezielte Kommunikation mit allen Interessengruppen"
          },
          {
            "@type": "HowToStep",
            "name": "Recovery & Reputation Rebuild",
            "text": "Wiederherstellung des Vertrauens und der Reputation"
          }
        ],
        "author": {
          "@type": "Organization",
          "name": "Marsstein"
        }
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", className: "lg:hidden sticky top-16 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsxs("details", { className: "container mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxs("summary", { className: "py-3 cursor-pointer font-semibold text-purple-400 flex items-center justify-between", children: [
        "Inhaltsverzeichnis",
        /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pb-4 space-y-2", children: [
        /* @__PURE__ */ jsx("a", { href: "#crisis-phases", className: "block text-sm text-slate-300 hover:text-purple-400 pl-4", children: "Crisis Response Phasen" }),
        /* @__PURE__ */ jsx("a", { href: "#detection", className: "block text-sm text-slate-300 hover:text-purple-400 pl-4", children: "1. Crisis Detection" }),
        /* @__PURE__ */ jsx("a", { href: "#first-response", className: "block text-sm text-slate-300 hover:text-purple-400 pl-4", children: "2. First Response" }),
        /* @__PURE__ */ jsx("a", { href: "#multi-channel", className: "block text-sm text-slate-300 hover:text-purple-400 pl-4", children: "3. Multi-Channel Strategy" }),
        /* @__PURE__ */ jsx("a", { href: "#stakeholder", className: "block text-sm text-slate-300 hover:text-purple-400 pl-4", children: "4. Stakeholder Management" }),
        /* @__PURE__ */ jsx("a", { href: "#recovery", className: "block text-sm text-slate-300 hover:text-purple-400 pl-4", children: "5. Recovery & Rebuild" }),
        /* @__PURE__ */ jsx("a", { href: "#ressourcen", className: "block text-sm text-slate-300 hover:text-purple-400 pl-4", children: "Crisis Tools & Templates" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 text-purple-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-slate-300", children: "Media Crisis Response Center" }),
        /* @__PURE__ */ jsx(Badge, { className: cn(
          "text-xs",
          monitoringActive ? "bg-green-500/20 text-green-300 border-green-500/30 animate-pulse" : "bg-gray-500/20 text-gray-300 border-gray-500/30"
        ), children: monitoringActive ? "Monitoring Active" : "Monitoring Paused" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: "Sentiment:" }),
          /* @__PURE__ */ jsxs("span", { className: cn("text-sm font-semibold", getSentimentColor(sentimentScore)), children: [
            sentimentScore.toFixed(0),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: "Responses:" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-slate-300", children: responsesSent })
        ] }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            size: "sm",
            onClick: () => setMonitoringActive(!monitoringActive),
            variant: monitoringActive ? "destructive" : "default",
            children: [
              monitoringActive ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Wifi, { className: "h-4 w-4" }),
              monitoringActive ? "Stop" : "Start"
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y },
        className: "relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl relative z-10", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.2, type: "spring", stiffness: 200 },
                  className: "inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20",
                  children: [
                    /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 text-purple-400" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-purple-300", children: "Crisis Communication" }),
                    /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-pink-400" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.8 },
                  className: "text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Media" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "Crisis" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Management" })
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
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-300", children: "Professionelle Krisenkommunikation" }),
                    " für Social Media, Presse und alle Stakeholder-Gruppen. Teil unserer ",
                    /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement", className: "text-purple-400 hover:text-purple-300 underline", children: "Krisenmanagement-Sammlung" }),
                    "."
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.8, duration: 0.8 },
                  className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                  children: [
                    /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
                      /* @__PURE__ */ jsx(Megaphone, { className: "mr-2 h-5 w-5" }),
                      "Crisis Response aktivieren"
                    ] }) }),
                    /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: /* @__PURE__ */ jsxs(Link, { to: "/tools/media-templates", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "Response Templates"
                    ] }) })
                  ]
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm",
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-white mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-purple-400" }),
            "Real-time Crisis Dashboard"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-4 gap-6 mb-6", children: [
            {
              label: "Mentions/Hour",
              value: "2,847",
              trend: "+23%",
              icon: Hash,
              color: "text-red-400"
            },
            {
              label: "Sentiment Score",
              value: `${sentimentScore.toFixed(0)}%`,
              trend: "+5%",
              icon: Heart,
              color: getSentimentColor(sentimentScore)
            },
            {
              label: "Response Rate",
              value: "87%",
              trend: "+12%",
              icon: MessageCircle,
              color: "text-green-400"
            },
            {
              label: "Media Pickups",
              value: "34",
              trend: "+8",
              icon: Newspaper,
              color: "text-yellow-400"
            }
          ].map((metric, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { delay: index * 0.1 },
              className: "bg-slate-800/60 rounded-xl p-6 border border-slate-700",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsx(metric.icon, { className: cn("h-6 w-6", metric.color) }),
                  /* @__PURE__ */ jsx(Badge, { className: cn(
                    "text-xs",
                    metric.trend.startsWith("+") ? "bg-green-500/20 text-green-300 border-green-500/30" : "bg-red-500/20 text-red-300 border-red-500/30"
                  ), children: metric.trend })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white mb-1", children: metric.value }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: metric.label })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-5 gap-4", children: socialChannels.map((channel) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setSelectedChannel(channel.id),
              className: cn(
                "p-4 rounded-xl border-2 transition-all duration-300",
                selectedChannel === channel.id ? "bg-slate-700/60 border-purple-500/50" : "bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50"
              ),
              children: [
                /* @__PURE__ */ jsx(channel.icon, { className: cn("h-6 w-6 mb-2", channel.color) }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-white", children: channel.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mt-1", children: [
                  Math.floor(Math.random() * 1e3),
                  " active"
                ] })
              ]
            },
            channel.id
          )) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "0", value: currentPhase.toString(), onValueChange: (v) => setCurrentPhase(parseInt(v)), children: [
      /* @__PURE__ */ jsx(TabsList, { className: "grid grid-cols-3 lg:grid-cols-6 mb-8 bg-slate-800/60 p-1 rounded-xl", children: crisisPhases.map((phase) => /* @__PURE__ */ jsxs(
        TabsTrigger,
        {
          value: phase.id.toString(),
          className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500",
          children: [
            /* @__PURE__ */ jsx(phase.icon, { className: "h-4 w-4 mr-2" }),
            /* @__PURE__ */ jsxs("span", { className: "hidden lg:inline", children: [
              "Phase ",
              phase.id + 1
            ] })
          ]
        },
        phase.id
      )) }),
      crisisPhases.map((phase) => /* @__PURE__ */ jsx(TabsContent, { value: phase.id.toString(), className: "space-y-8", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "border-2 border-slate-700/50 bg-slate-800/80 overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  whileHover: { scale: 1.1 },
                  className: cn(
                    "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                    phase.color
                  ),
                  children: /* @__PURE__ */ jsx(phase.icon, { className: "h-8 w-8 text-white" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: phase.title }),
                  /* @__PURE__ */ jsx(Badge, { className: getPriorityColor(phase.priority), children: phase.priority })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-2", children: phase.description }),
                /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-sm text-slate-400", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                  phase.timeframe
                ] }) })
              ] })
            ] }),
            phase.id === 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-yellow-400" }),
                  "Sofortmaßnahmen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: phase.keyActions.map((action, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-yellow-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: action })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(AlertOctagon, { className: "h-5 w-5 text-red-400" }),
                  "Eskalations-Trigger"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: phase.escalationTriggers.map((trigger, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-red-500/10 border border-red-500/30 rounded-xl", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: trigger.metric }),
                    /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-300", children: [
                      "Schwellwert: ",
                      trigger.threshold
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30", children: trigger.action }) })
                ] }, idx)) })
              ] })
            ] }),
            phase.id === 1 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }),
                  "Response Templates"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: phase.holdingStatements.map((statement, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white", children: statement.scenario }),
                    /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", onClick: () => navigator.clipboard.writeText(statement.template), children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }) })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 italic", children: statement.template })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-purple-400" }),
                  "Kanal-Strategie"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: phase.responseStrategy.channels.map((channel, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-2", children: channel.platform }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-300 mb-1", children: [
                    "Format: ",
                    channel.format
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
                    "Frequenz: ",
                    channel.frequency
                  ] })
                ] }, idx)) })
              ] })
            ] }),
            phase.id === 2 && phase.channelStrategies && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => toggleSection("social-strategy"),
                    variant: "ghost",
                    className: "w-full justify-between p-0 h-auto hover:bg-transparent mb-4",
                    children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Share2, { className: "h-5 w-5 text-pink-400" }),
                        "Social Media Strategie"
                      ] }),
                      expandedSections.includes("social-strategy") ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-slate-400" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-slate-400" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(AnimatePresence, { children: expandedSections.includes("social-strategy") && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "space-y-4",
                    children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-green-500/10 border border-green-500/30 rounded-xl p-4", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-300 mb-3", children: "Tactics" }),
                        phase.channelStrategies.socialMedia.tactics.map((tactic, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 mb-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: tactic })
                        ] }, idx))
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-red-500/10 border border-red-500/30 rounded-xl p-4", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-300 mb-3", children: "Don'ts" }),
                        phase.channelStrategies.socialMedia.donts.map((dont, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 mb-2", children: [
                          /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: dont })
                        ] }, idx))
                      ] })
                    ] })
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-green-400" }),
                  "Response Metriken"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4", children: Object.entries(phase.responseMetrics).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-white capitalize mb-1", children: key.replace(/([A-Z])/g, " $1").trim() }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: value })
                ] }, key)) })
              ] })
            ] }),
            phase.id === 3 && phase.stakeholderMatrix && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-blue-400" }),
                  "Stakeholder Kommunikation"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: phase.stakeholderMatrix.map((stakeholder, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white", children: stakeholder.group }),
                    /* @__PURE__ */ jsx(Badge, { className: cn(
                      "text-xs",
                      stakeholder.priority === "KRITISCH" ? "bg-red-500/20 text-red-300 border-red-500/30" : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                    ), children: stakeholder.priority })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-3 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: "Kanäle:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: stakeholder.channels.join(", ") })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: "Messaging:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: stakeholder.messaging })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: "Frequenz:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: stakeholder.frequency })
                    ] })
                  ] })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-purple-400" }),
                  "Koordinations-Tools"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-3", children: "War Room Setup" }),
                    Object.entries(phase.coordinationTools.warRoom).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
                      /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-400 capitalize", children: [
                        key,
                        ":"
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: value })
                    ] }, key))
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-3", children: "Documentation" }),
                    Object.entries(phase.coordinationTools.documentation).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
                      /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-400 capitalize", children: [
                        key,
                        ":"
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: value })
                    ] }, key))
                  ] })
                ] })
              ] })
            ] }),
            phase.id === 4 && phase.monitoringDashboard && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5 text-green-400" }),
                  "Real-time Monitoring"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-3", children: phase.monitoringDashboard.realTime.map((metric, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg", children: [
                  /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-green-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: metric })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5 text-pink-400" }),
                  "Sentiment Response Guide"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: Object.entries(phase.sentimentCategories).map(([category, data]) => /* @__PURE__ */ jsxs("div", { className: cn(
                  "rounded-xl p-4 border",
                  category === "supportive" ? "bg-green-500/10 border-green-500/30" : category === "neutral" ? "bg-blue-500/10 border-blue-500/30" : category === "critical" ? "bg-yellow-500/10 border-yellow-500/30" : "bg-red-500/10 border-red-500/30"
                ), children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white capitalize mb-2", children: category }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mb-2", children: [
                    "Indicators: ",
                    data.indicators.join(", ")
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-300", children: [
                    "Response: ",
                    data.response
                  ] })
                ] }, category)) })
              ] })
            ] }),
            phase.id === 5 && phase.recoveryStrategy && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-green-400" }),
                  "Recovery Strategie"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: Object.entries(phase.recoveryStrategy).map(([timing, actions]) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-3 capitalize", children: timing === "immediate" ? "Sofort (0-7 Tage)" : timing === "shortTerm" ? "Kurzfristig (1-4 Wochen)" : "Langfristig (1-6 Monate)" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-2", children: actions.map((action, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: action })
                  ] }, idx)) })
                ] }, timing)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-purple-400" }),
                  "Recovery KPIs"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-4", children: phase.kpis.map((kpi, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-2", children: kpi.metric }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsxs("p", { className: "text-slate-400", children: [
                      "Baseline: ",
                      kpi.baseline
                    ] }),
                    /* @__PURE__ */ jsxs("p", { className: "text-green-400", children: [
                      "Target: ",
                      kpi.target
                    ] }),
                    /* @__PURE__ */ jsxs("p", { className: "text-slate-400", children: [
                      "Timeline: ",
                      kpi.timeline
                    ] })
                  ] })
                ] }, idx)) })
              ] })
            ] })
          ] }) })
        }
      ) }, phase.id))
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "Response Templates" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Getestete Vorlagen für verschiedene Krisensituationen" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Twitter, { className: "h-5 w-5 text-blue-400" }),
            "Twitter/X Templates"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: sampleResponses.twitter.map((template, idx) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { delay: idx * 0.1 },
              className: "bg-slate-800/60 rounded-xl p-4 border border-slate-700/50",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs", children: template.type }),
                  /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", onClick: () => navigator.clipboard.writeText(template.text), children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }) })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-2", children: template.text }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500", children: [
                  "Tone: ",
                  template.tone
                ] })
              ]
            },
            idx
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Newspaper, { className: "h-5 w-5 text-gray-400" }),
            "Media Statements"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: sampleResponses.media.map((template, idx) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { delay: idx * 0.1 },
              className: "bg-slate-800/60 rounded-xl p-4 border border-slate-700/50",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsx(Badge, { className: "bg-gray-500/20 text-gray-300 border-gray-500/30 text-xs", children: template.type }),
                  /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", onClick: () => navigator.clipboard.writeText(template.text), children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }) })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-2", children: template.text }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500", children: [
                  "Tone: ",
                  template.tone
                ] })
              ]
            },
            idx
          )) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "Crisis Tools" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300", children: "Werkzeuge für effektive Krisenkommunikation" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-4 gap-6", children: [
          {
            title: "Response Generator",
            description: "KI-gestützte Response-Erstellung",
            icon: Brain,
            action: "Generator starten",
            color: "from-purple-500 to-pink-500"
          },
          {
            title: "Sentiment Analyzer",
            description: "Echtzeit Stimmungsanalyse",
            icon: Heart,
            action: "Analyse starten",
            color: "from-pink-500 to-red-500"
          },
          {
            title: "Channel Dashboard",
            description: "Multi-Channel Monitoring",
            icon: Activity,
            action: "Dashboard öffnen",
            color: "from-red-500 to-orange-500"
          },
          {
            title: "Crisis Playbook",
            description: "Schritt-für-Schritt Anleitungen",
            icon: BookOpen,
            action: "Playbook laden",
            color: "from-orange-500 to-yellow-500"
          }
        ].map((tool, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "inline-flex p-3 rounded-2xl bg-gradient-to-r mb-4 shadow-lg",
                tool.color
              ), children: /* @__PURE__ */ jsx(tool.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2 text-white", children: tool.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-4", children: tool.description }),
              /* @__PURE__ */ jsxs(Button, { className: cn(
                "w-full bg-gradient-to-r text-white text-sm",
                tool.color
              ), children: [
                tool.action,
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] })
            ] }) })
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-slate-700 text-slate-300 hover:bg-slate-800", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/compliance-audit-emergency", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        "Compliance Audit Emergency"
      ] }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/vendor-data-breach", children: [
        "Vendor Data Breach Response",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  MediaCrisisGuide as default
};
