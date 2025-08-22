import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useInView, useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Cookie, Rocket, PlayCircle, Zap, Brain, Award, Shield, BarChart3, Target, UserCheck, Share2, RefreshCw, Database, Layers, Palette, TrendingUp, MousePointer2, PieChart, Layout, Download, Archive, BarChart4, Globe, FileCheck, ChevronRight, CheckCircle2, Clock, Package, CloudLightning, FileText, Building2, Lock, Plug, CheckCircle, Calendar } from "lucide-react";
import { c as cn } from "../main.mjs";
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
import "react-helmet-async";
const CookieManagementToolProduct = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const heroRef = useRef(null);
  useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const cookieCategories = [
    { name: "Notwendige Cookies", icon: Shield, type: "Essential" },
    { name: "Analyse & Statistik", icon: BarChart3, type: "Analytics" },
    { name: "Marketing & Werbung", icon: Target, type: "Marketing" },
    { name: "Personalisierung", icon: UserCheck, type: "Preferences" },
    { name: "Social Media", icon: Share2, type: "Social" },
    { name: "Performance", icon: Zap, type: "Performance" }
  ];
  const keyBenefits = [
    {
      icon: TrendingUp,
      title: "Höhere Akzeptanz",
      description: "Intelligente Banner-Optimierung steigert Ihre Consent-Raten",
      benefit: "Durchschnittlich +40% mehr Zustimmungen",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Clock,
      title: "Schneller Setup",
      description: "Von null auf DSGVO-konform in unter 5 Minuten",
      benefit: "Ein JavaScript-Snippet genügt",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Rechtssicherheit",
      description: "Entwickelt von Datenschutz-Experten, kontinuierlich aktualisiert",
      benefit: "IAB TCF 2.2 zertifiziert",
      color: "from-green-500 to-emerald-600"
    }
  ];
  const features = [
    {
      id: "scanner",
      icon: Brain,
      title: "KI Cookie-Scanner",
      subtitle: "Automatische Erkennung aller Cookies",
      description: "Deep-Learning-Algorithmen scannen Ihre Website und kategorisieren automatisch alle Cookies nach DSGVO-Standards.",
      capabilities: [
        { name: "Cookie-Erkennung", value: "99.9%", icon: Target },
        { name: "Scan-Geschwindigkeit", value: "<60s", icon: Zap },
        { name: "Kategorisierung", value: "Automatisch", icon: Brain },
        { name: "Vendor-Zuordnung", value: "2000+", icon: Database }
      ],
      benefits: [
        "Findet auch versteckte Third-Party Cookies",
        "Erkennt dynamisch nachgeladene Scripts",
        "Kategorisiert nach IAB-Standards",
        "Kontinuierliches Monitoring"
      ]
    },
    {
      id: "optimization",
      icon: MousePointer2,
      title: "Consent-Optimierung",
      subtitle: "A/B-Testing für maximale Akzeptanz",
      description: "Machine Learning optimiert kontinuierlich Design, Text und Timing Ihrer Cookie-Banner für höchste Akzeptanzraten.",
      capabilities: [
        { name: "A/B Tests", value: "Unlimited", icon: Layers },
        { name: "Varianten", value: "50+", icon: Palette },
        { name: "ML-Modell", value: "Real-time", icon: Brain },
        { name: "Uplift", value: "+40%", icon: TrendingUp }
      ],
      benefits: [
        "Automatische Design-Optimierung",
        "Personalisierte User Experience",
        "Mobile-optimierte Varianten",
        "Geografische Anpassungen"
      ]
    },
    {
      id: "analytics",
      icon: BarChart4,
      title: "Advanced Analytics",
      subtitle: "Detaillierte Einblicke in Nutzerverhalten",
      description: "Verstehen Sie genau, wie Nutzer mit Ihren Cookie-Bannern interagieren und optimieren Sie basierend auf Daten.",
      capabilities: [
        { name: "Metriken", value: "25+", icon: PieChart },
        { name: "Dashboards", value: "Custom", icon: Layout },
        { name: "Export", value: "API & CSV", icon: Download },
        { name: "Retention", value: "2 Jahre", icon: Archive }
      ],
      benefits: [
        "Consent-Rate nach Gerät & Region",
        "Bounce-Rate-Analyse",
        "Revenue-Impact-Tracking",
        "Compliance-Score-Monitoring"
      ]
    },
    {
      id: "compliance",
      icon: Shield,
      title: "Auto-Compliance",
      subtitle: "Immer auf dem neuesten Stand",
      description: "Unser Legal-Team überwacht Rechtsänderungen und aktualisiert Ihr Setup automatisch - Sie müssen nichts tun.",
      capabilities: [
        { name: "Updates", value: "24/7", icon: RefreshCw },
        { name: "Jurisdiktionen", value: "EU+UK+CH", icon: Globe },
        { name: "Audit-Log", value: "Vollständig", icon: FileCheck },
        { name: "Zertifikate", value: "Auto-Renewal", icon: Award }
      ],
      benefits: [
        "Automatische Gesetzesanpassungen",
        "Proaktive Benachrichtigungen",
        "Rechtssichere Dokumentation",
        "Haftungsübernahme inklusive"
      ]
    }
  ];
  const technicalDetails = [
    {
      category: "Performance",
      icon: Zap,
      specs: [
        "Bundle Size: 18KB (gzipped)",
        "Load Time: <100ms",
        "Zero render-blocking",
        "CDN mit 99.99% Uptime"
      ]
    },
    {
      category: "Sicherheit",
      icon: Lock,
      specs: [
        "End-to-End Verschlüsselung",
        "ISO 27001 & SOC2 zertifiziert",
        "DSGVO-konforme Server (EU)",
        "Zero-Knowledge Architecture"
      ]
    },
    {
      category: "Integration",
      icon: Plug,
      specs: [
        "One-line JavaScript",
        "Native SDKs (React, Vue, Angular)",
        "Server-side Rendering Support",
        "Tag Manager kompatibel"
      ]
    },
    {
      category: "Standards",
      icon: Award,
      specs: [
        "IAB TCF 2.2 zertifiziert",
        "Google Consent Mode v2",
        "Facebook Limited Data Use",
        "Apple ATT kompatibel"
      ]
    }
  ];
  const useCases = [
    {
      industry: "E-Commerce",
      icon: ShoppingCart,
      challenge: "Conversion-Verluste durch aggressive Cookie-Banner",
      solution: "Optimierte Banner steigern Consent UND Conversion",
      results: [
        "+35% Consent-Rate",
        "+12% Checkout-Conversion",
        "-67% Bounce-Rate"
      ]
    },
    {
      industry: "SaaS & B2B",
      icon: Cloud,
      challenge: "Komplexe Tracking-Anforderungen für Lead-Scoring",
      solution: "Granulare Consent-Optionen ohne Friction",
      results: [
        "94% B2B Consent",
        "Vollständiges Lead-Tracking",
        "Enterprise-ready Compliance"
      ]
    },
    {
      industry: "Publisher & Media",
      icon: Newspaper,
      challenge: "Werbeeinnahmen vs. Datenschutz balancieren",
      solution: "Smart Consent maximiert Ad-Revenue",
      results: [
        "+52% Ad-Consent",
        "TCF 2.2 für Programmatic",
        "Reader-Revenue Protection"
      ]
    },
    {
      industry: "Finance & Insurance",
      icon: Building2,
      challenge: "Strenge Compliance-Anforderungen",
      solution: "Enterprise-Grade Security & Compliance",
      results: [
        "BaFin-konform",
        "Audit-ready Dokumentation",
        "Multi-tenant Architecture"
      ]
    }
  ];
  const comparisonFeatures = [
    { feature: "Setup-Zeit", us: "< 5 Min", others: "2-3 Stunden" },
    { feature: "Cookie-Scanner", us: "KI-automatisch", others: "Manuell" },
    { feature: "Consent-Optimierung", us: "ML-basiert", others: "Statisch" },
    { feature: "Rechts-Updates", us: "Automatisch", others: "Manuell" },
    { feature: "Performance Impact", us: "< 100ms", others: "300-500ms" },
    { feature: "Support", us: "24/7 Live-Chat", others: "E-Mail Support" }
  ];
  const [demoState, setDemoState] = useState({
    cookiesFound: 0,
    categorized: 0,
    consentRate: 0,
    scanning: false
  });
  const startDemo = () => {
    setDemoState({ ...demoState, scanning: true });
    let cookies = 0;
    const scanInterval = setInterval(() => {
      cookies += Math.floor(Math.random() * 5) + 3;
      if (cookies >= 47) {
        cookies = 47;
        clearInterval(scanInterval);
        let categorized = 0;
        const catInterval = setInterval(() => {
          categorized += 5;
          if (categorized >= 47) {
            categorized = 47;
            clearInterval(catInterval);
            let consent = 0;
            const consentInterval = setInterval(() => {
              consent += 2;
              if (consent >= 73) {
                consent = 73;
                clearInterval(consentInterval);
              }
              setDemoState((prev) => ({ ...prev, consentRate: consent }));
            }, 30);
          }
          setDemoState((prev) => ({ ...prev, categorized }));
        }, 50);
      }
      setDemoState((prev) => ({ ...prev, cookiesFound: cookies }));
    }, 100);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        ref: heroRef,
        className: "relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900",
        style: { opacity: heroOpacity, scale: heroScale },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20" }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute top-0 left-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl",
                animate: {
                  x: [0, 100, 0],
                  y: [0, -50, 0]
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
                className: "absolute bottom-0 right-0 w-96 h-96 bg-red-500/30 rounded-full blur-3xl",
                animate: {
                  x: [0, -100, 0],
                  y: [0, 50, 0]
                },
                transition: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl relative z-10", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "text-center",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full mb-8",
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { delay: 0.2 },
                    children: [
                      /* @__PURE__ */ jsx(Cookie, { className: "h-4 w-4 text-orange-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-orange-300", children: "DSGVO-Cookie-Management der nächsten Generation" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.h1,
                  {
                    className: "text-5xl md:text-7xl font-bold mb-6",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.3 },
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Cookie-Banner die" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "konvertieren" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "statt nerven" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.p,
                  {
                    className: "text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4 },
                    children: "KI-optimierte Cookie-Banner mit nachweislich höheren Akzeptanzraten. DSGVO-konform, blitzschnell implementiert, kontinuierlich optimiert."
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex flex-col sm:flex-row gap-4 justify-center mb-16",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5 },
                    children: [
                      /* @__PURE__ */ jsxs(
                        Button,
                        {
                          size: "lg",
                          className: "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300",
                          children: [
                            /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-5 w-5" }),
                            "Jetzt starten"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        Button,
                        {
                          size: "lg",
                          variant: "outline",
                          className: "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-xl",
                          onClick: () => setIsPlaying(true),
                          children: [
                            /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                            "Demo ansehen (2 Min)"
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.6 },
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "<100ms" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Ladezeit" }),
                        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center text-green-400 text-xs", children: [
                          /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3 mr-1" }),
                          "Zero Impact"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "KI" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Cookie-Scanner" }),
                        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center text-blue-400 text-xs", children: [
                          /* @__PURE__ */ jsx(Brain, { className: "h-3 w-3 mr-1" }),
                          "Auto-Kategorisierung"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "TCF 2.2" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Zertifiziert" }),
                        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center text-purple-400 text-xs", children: [
                          /* @__PURE__ */ jsx(Award, { className: "h-3 w-3 mr-1" }),
                          "IAB Standard"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "24/7" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Compliance" }),
                        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center text-yellow-400 text-xs", children: [
                          /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 mr-1" }),
                          "Auto-Updates"
                        ] })
                      ] })
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10 py-4 overflow-hidden",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.8 },
              children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-12 animate-scroll-x", children: [...cookieCategories, ...cookieCategories].map((category, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm whitespace-nowrap", children: [
                /* @__PURE__ */ jsx(category.icon, { className: "h-4 w-4 text-orange-400" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: category.name }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs border-gray-600 text-gray-300", children: category.type })
              ] }, index)) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: "So funktioniert's" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300", children: "Von der Installation bis zur Optimierung in 3 Schritten" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-white", children: "1" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Script einbinden" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "Ein Zeile JavaScript oder unser Plugin installieren" }),
              /* @__PURE__ */ jsx("div", { className: "bg-black/30 rounded-lg p-4 font-mono text-sm text-green-400", children: '<script src="https://cdn.cookietool.de/v2.js"><\/script>' })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-white", children: "2" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "KI scannt Cookies" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "Automatische Erkennung und Kategorisierung" }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: startDemo,
                  disabled: demoState.scanning,
                  className: "bg-orange-600 hover:bg-orange-700 text-white",
                  children: demoState.scanning ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(RefreshCw, { className: "mr-2 h-4 w-4 animate-spin" }),
                    "Scanning..."
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Brain, { className: "mr-2 h-4 w-4" }),
                    "Demo starten"
                  ] })
                }
              ),
              demoState.cookiesFound > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-400", children: [
                  "Cookies gefunden: ",
                  /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: demoState.cookiesFound })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-400", children: [
                  "Kategorisiert: ",
                  /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: demoState.categorized })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.2 },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-white", children: "3" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Fertig & Optimiert" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "ML optimiert kontinuierlich Ihre Consent-Rate" }),
              demoState.consentRate > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-green-500/20 border border-green-500/50 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-green-400", children: [
                  demoState.consentRate,
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Consent-Rate" })
              ] })
            ]
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Features im Detail" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Alles was Sie für erfolgreiches Cookie-Management brauchen" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: features.map((feature, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: /* @__PURE__ */ jsx(
              Card,
              {
                className: cn(
                  "cursor-pointer transition-all duration-300",
                  selectedFeature === index ? "ring-2 ring-orange-500 shadow-xl" : "hover:shadow-lg"
                ),
                onClick: () => setSelectedFeature(index),
                children: /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl", children: /* @__PURE__ */ jsx(feature.icon, { className: "h-6 w-6 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: feature.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: feature.subtitle })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: cn(
                    "h-5 w-5 transition-transform",
                    selectedFeature === index && "rotate-90"
                  ) })
                ] }) })
              }
            )
          },
          feature.id
        )) }),
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            className: "bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: features[selectedFeature].title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: features[selectedFeature].description }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 mb-6", children: features[selectedFeature].capabilities.map((cap, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 shadow", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsx(cap.icon, { className: "h-5 w-5 text-orange-600" }),
                  /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", children: cap.value })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: cap.name })
              ] }, idx)) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Ihre Vorteile:" }),
                features[selectedFeature].benefits.map((benefit, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700 dark:text-gray-300", children: benefit })
                ] }, idx))
              ] })
            ]
          },
          selectedFeature
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Der Marsstein Vorteil" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Warum führende Unternehmen auf unser Cookie-Tool setzen" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: keyBenefits.map((benefit, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20",
              "bg-gradient-to-br",
              benefit.color
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br",
                benefit.color
              ), children: /* @__PURE__ */ jsx(benefit.icon, { className: "h-8 w-8 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", children: benefit.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-4", children: benefit.description }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600" }),
                /* @__PURE__ */ jsx("span", { className: cn(
                  "bg-gradient-to-r bg-clip-text text-transparent",
                  benefit.color
                ), children: benefit.benefit })
              ] })
            ] })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Für jede Branche die richtige Lösung" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Branchenspezifische Optimierungen für maximalen Erfolg" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: useCases.map((useCase, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-orange-100 dark:bg-orange-900/20 rounded-xl", children: /* @__PURE__ */ jsx(useCase.icon, { className: "h-6 w-6 text-orange-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: useCase.industry }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: useCase.challenge })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsx("strong", { children: "Lösung:" }),
              " ",
              useCase.solution
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Ergebnisse" }),
              useCase.results.map((result, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: result })
              ] }, idx))
            ] })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: "Enterprise-ready Technologie" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300", children: "Höchste Standards für Performance, Sicherheit und Compliance" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: technicalDetails.map((detail, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx(detail.icon, { className: "h-6 w-6 text-orange-400" }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: detail.category })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: detail.specs.map((spec, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300", children: spec })
            ] }, idx)) })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Der Vergleich macht sicher" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Marsstein Cookie-Tool vs. Standard-Lösungen" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-50 dark:bg-gray-900", children: [
              /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-semibold", children: "Feature" }),
              /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-center font-semibold text-orange-600", children: "Marsstein" }),
              /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-center font-semibold text-gray-400", children: "Andere" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: comparisonFeatures.map((item, index) => /* @__PURE__ */ jsxs("tr", { className: "border-t border-gray-200 dark:border-gray-700", children: [
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 font-medium", children: item.feature }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-green-600 font-medium", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5" }),
                item.us
              ] }) }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-center text-gray-500", children: item.others })
            ] }, index)) })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Bereit für Cookie-Banner die konvertieren?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-orange-100 mb-12", children: "Steigern Sie Ihre Consent-Rate und bleiben Sie dabei 100% DSGVO-konform. Keine Kreditkarte erforderlich. Setup in unter 5 Minuten." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                size: "lg",
                className: "bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-5 w-5" }),
                  "Jetzt starten"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl",
                children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                  "Demo vereinbaren"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-white", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { children: "DSGVO-Haftungsübernahme" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { children: "Setup in 5 Minuten" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx(Award, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { children: "IAB TCF 2.2 zertifiziert" })
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const ShoppingCart = Package;
const Cloud = CloudLightning;
const Newspaper = FileText;
export {
  CookieManagementToolProduct as default
};
