import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { AlertTriangle, Shield, Code, Server, Terminal, Zap, CheckCircle, XCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const GoogleFontsMunichCase = () => {
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      h2, h3, h4 { scroll-margin-top: 96px; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  const tabs = [
    { id: "overview", label: "Überblick", icon: AlertTriangle },
    { id: "verdict", label: "Urteil-Details", icon: Shield },
    { id: "technical", label: "Technische Analyse", icon: Code },
    { id: "solutions", label: "Lösungsansätze", icon: Server },
    { id: "implementation", label: "Implementation", icon: Terminal },
    { id: "webdev", label: "Webdev-Guide", icon: Zap }
  ];
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return /* @__PURE__ */ jsx(OverviewTab, {});
      case "verdict":
        return /* @__PURE__ */ jsx(VerdictTab, {});
      case "technical":
        return /* @__PURE__ */ jsx(TechnicalTab, {});
      case "solutions":
        return /* @__PURE__ */ jsx(SolutionsTab, {});
      case "implementation":
        return /* @__PURE__ */ jsx(ImplementationTab, {});
      case "webdev":
        return /* @__PURE__ */ jsx(WebdevGuideTab, {});
      default:
        return /* @__PURE__ */ jsx(OverviewTab, {});
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-orange-50 to-red-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Google Fonts DSGVO Urteil München €100 – Lokales Font Hosting" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Google Fonts DSGVO-Urteil München: IP-Übertragung illegal! Lokales Font-Hosting implementieren & €100 Schadensersatz vermeiden."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Google Fonts DSGVO Urteil München €100 – Lokales Font Hosting" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Google Fonts DSGVO-Urteil München: IP-Übertragung illegal! Lokales Font-Hosting implementieren & €100 Schadensersatz vermeiden." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsjonas.de/wissen/rechtsprechung/google-fonts-muenchen" })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "bg-gradient-to-r from-orange-600 to-red-600 text-white py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Google Fonts DSGVO-Urteil München" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl opacity-90", children: "LG München I, Urteil vom 20.01.2022 - 3 O 17493/20 • €100 Schadensersatz" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-white/20 px-4 py-2 rounded-full text-sm", children: "Technische Case Study" }),
        /* @__PURE__ */ jsx("span", { className: "bg-white/20 px-4 py-2 rounded-full text-sm", children: "Webentwickler-Guide" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 bg-white shadow-md z-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "flex overflow-x-auto scrollbar-hide", children: tabs.map((tab) => {
      const Icon = tab.icon;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTab(tab.id),
          className: `flex items-center space-x-2 px-6 py-4 border-b-4 transition-colors whitespace-nowrap ${activeTab === tab.id ? "border-orange-500 text-orange-600 bg-orange-50" : "border-transparent text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"}`,
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: tab.label })
          ]
        },
        tab.id
      );
    }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-8", children: renderTabContent() }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 mt-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Benötigen Sie Hilfe bei der DSGVO-konformen Umsetzung?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 opacity-90", children: "Wir unterstützen Sie bei der technischen Migration und Compliance-Optimierung" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx("button", { className: "bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors", children: "Kostenlose Beratung" }),
        /* @__PURE__ */ jsx("button", { className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors", children: "Compliance-Check" })
      ] })
    ] }) })
  ] });
};
const OverviewTab = () => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-lg p-6 mb-8", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", children: [
      /* @__PURE__ */ jsx("h2", { id: "inhaltsverzeichnis", className: "text-xl font-bold text-gray-800 mb-4", children: "Inhaltsverzeichnis" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-600", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#urteil-ueberblick", className: "text-orange-600 hover:text-orange-500 transition-colors", children: "1. Das Urteil im Überblick" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#timeline", className: "text-orange-600 hover:text-orange-500 transition-colors", children: "2. Timeline & Entwicklung" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#urteilsdetails", className: "text-orange-600 hover:text-orange-500 transition-colors", children: "3. Urteilsdetails & Rechtliche Grundlagen" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#technische-analyse", className: "text-orange-600 hover:text-orange-500 transition-colors", children: "4. Technische Analyse" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#loesungsansaetze", className: "text-orange-600 hover:text-orange-500 transition-colors", children: "5. DSGVO-konforme Lösungsansätze" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#migration-guide", className: "text-orange-600 hover:text-orange-500 transition-colors", children: "6. Migration Guide" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { id: "urteil-ueberblick", className: "text-2xl font-bold text-gray-800 mb-6", children: "Das Urteil im Überblick" }),
      /* @__PURE__ */ jsx("div", { className: "bg-red-50 border-l-4 border-red-500 p-6 mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-800 mb-2", children: "Kernaussage des Urteils" }),
          /* @__PURE__ */ jsx("p", { className: "text-red-700", children: "Die dynamische Einbindung von Google Fonts ohne Einwilligung verstößt gegen die DSGVO, da dabei die IP-Adresse des Nutzers an Google-Server in den USA übertragen wird." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-orange-800 mb-3", children: "Streitwert & Schadensersatz" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-orange-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 mr-2 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "100 € Schadensersatz zugesprochen" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 mr-2 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Unterlassungsanspruch bestätigt" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 mr-2 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Präzedenzfall für weitere Klagen" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-800 mb-3", children: "Technische Verstöße" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-red-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 mr-2 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "IP-Adresse an US-Server übertragen" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 mr-2 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Keine Rechtsgrundlage nach Art. 6 DSGVO" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 mr-2 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Fehlende Nutzereinwilligung" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-3", children: "Auswirkungen für Webseitenbetreiber" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-700 mb-4", children: [
          "Das Urteil hat weitreichende Konsequenzen für alle Webseitenbetreiber, die externe Dienste einbinden. Ähnlich wie bei ",
          /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung/planet49-cookie", className: "text-orange-600 hover:text-orange-500", children: "Cookie-Consent Verstößen" }),
          "zeigt sich auch hier die Notwendigkeit DSGVO-konformer Datenverarbeitung:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-700", children: [
          /* @__PURE__ */ jsx("li", { children: "• Sofortiger Handlungsbedarf bei Google Fonts-Nutzung" }),
          /* @__PURE__ */ jsx("li", { children: "• Überprüfung aller externen Ressourcen erforderlich" }),
          /* @__PURE__ */ jsx("li", { children: "• Lokales Hosting als sichere Alternative" }),
          /* @__PURE__ */ jsx("li", { children: "• Dokumentation der technischen Umsetzung notwendig" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { id: "timeline", className: "text-2xl font-bold text-gray-800 mb-6", children: "Timeline & Entwicklung" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-orange-500 w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800", children: "Januar 2022" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "LG München I fällt wegweisendes Urteil zu Google Fonts" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-orange-500 w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800", children: "Folgemonate" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Massenhafte Abmahnwellen gegen Webseitenbetreiber" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-orange-500 w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800", children: "Heute" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Lokales Font-Hosting als Standard etabliert" })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const VerdictTab = () => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { id: "urteilsdetails", className: "text-2xl font-bold text-gray-800 mb-6", children: "Urteilsdetails & Rechtliche Grundlagen" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Aktenzeichen & Gericht" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("p", { className: "font-mono text-gray-700", children: "LG München I - 3 O 17493/20" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "Urteil vom 20. Januar 2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Streitgegenstand" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: 'Der Kläger besuchte die Website des Beklagten, wobei beim Seitenaufruf automatisch eine Verbindung zu Google-Servern hergestellt wurde, um die Schriftart "Open Sans" zu laden. Dabei wurde die IP-Adresse des Klägers an Google Inc. in den USA übertragen.' })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Rechtliche Würdigung" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Art. 6 Abs. 1 DSGVO - Rechtsgrundlagen" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Das Gericht stellte fest, dass keine der in Art. 6 Abs. 1 DSGVO genannten Rechtsgrundlagen für die Datenübertragung vorlag:" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-gray-600", children: [
                /* @__PURE__ */ jsx("li", { children: "• Keine Einwilligung (lit. a)" }),
                /* @__PURE__ */ jsx("li", { children: "• Nicht zur Vertragserfüllung erforderlich (lit. b)" }),
                /* @__PURE__ */ jsx("li", { children: "• Keine rechtliche Verpflichtung (lit. c)" }),
                /* @__PURE__ */ jsx("li", { children: "• Keine berechtigten Interessen (lit. f)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-red-500 pl-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Art. 82 DSGVO - Schadensersatz" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Das Gericht erkannte einen immateriellen Schaden durch den Kontrollverlust über die personenbezogenen Daten an und sprach 100 € Schadensersatz zu." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Art. 44 ff. DSGVO - Drittlandtransfer" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Die Übertragung personenbezogener Daten in die USA ohne angemessene Garantien verstößt gegen die Vorschriften zum internationalen Datentransfer." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Urteilstenor" }),
          /* @__PURE__ */ jsx("div", { className: "bg-red-50 p-6 rounded-lg", children: /* @__PURE__ */ jsxs("ol", { className: "space-y-3 text-red-800", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "1." }),
              " Der Beklagte wird verurteilt, es zu unterlassen, beim Aufruf der Website personenbezogene Daten des Klägers an Google weiterzugeben."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "2." }),
              " Der Beklagte wird verurteilt, an den Kläger 100,00 € nebst Zinsen zu zahlen."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "3." }),
              " Der Beklagte trägt die Kosten des Rechtsstreits."
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Bedeutung für die Praxis" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-orange-800 mb-3", children: "Präzedenzwirkung" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-orange-700", children: [
            /* @__PURE__ */ jsx("li", { children: "• Erste gerichtliche Entscheidung zu Google Fonts" }),
            /* @__PURE__ */ jsx("li", { children: "• Signalwirkung für andere externe Dienste" }),
            /* @__PURE__ */ jsx("li", { children: "• Grundlage für Massenabmahnungen" }),
            /* @__PURE__ */ jsx("li", { children: "• Klarstellung der DSGVO-Anforderungen" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-800 mb-3", children: "Haftungsrisiken" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-red-700", children: [
            /* @__PURE__ */ jsx("li", { children: "• Schadensersatzansprüche möglich" }),
            /* @__PURE__ */ jsx("li", { children: "• Abmahnkosten bei Verstößen" }),
            /* @__PURE__ */ jsx("li", { children: "• Bußgelder durch Aufsichtsbehörden" }),
            /* @__PURE__ */ jsx("li", { children: "• Reputationsschäden" })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const TechnicalTab = () => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { id: "technische-analyse", className: "text-2xl font-bold text-gray-800 mb-6", children: "Technische Analyse der Google Fonts Problematik" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "So funktioniert die Google Fonts Einbindung" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `<!-- Problematische Einbindung -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">` }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 bg-red-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-800 mb-2", children: "Was passiert technisch?" }),
            /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-red-700", children: [
              /* @__PURE__ */ jsx("li", { children: "1. Browser lädt HTML und findet Google Fonts Link" }),
              /* @__PURE__ */ jsx("li", { children: "2. DNS-Anfrage an fonts.googleapis.com" }),
              /* @__PURE__ */ jsx("li", { children: "3. HTTPS-Verbindung zu Google-Server aufgebaut" }),
              /* @__PURE__ */ jsxs("li", { children: [
                "4. ",
                /* @__PURE__ */ jsx("strong", { children: "IP-Adresse des Nutzers wird übertragen" })
              ] }),
              /* @__PURE__ */ jsx("li", { children: "5. User-Agent und Referrer werden gesendet" }),
              /* @__PURE__ */ jsx("li", { children: "6. Google kann Nutzerprofile erstellen" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Übertragene Daten im Detail" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "HTTP Request Headers" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-xs", children: /* @__PURE__ */ jsx("code", { children: `GET /css2?family=Open+Sans:wght@400;700&display=swap HTTP/2
Host: fonts.googleapis.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
Accept: text/css,*/*;q=0.1
Accept-Language: de-DE,de;q=0.9,en;q=0.8
Accept-Encoding: gzip, deflate, br
Referer: https://example.com/
X-Forwarded-For: 192.0.2.1
X-Real-IP: 192.0.2.1` }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-800 mb-2", children: "Personenbezogene Daten" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-orange-700 text-sm", children: [
                /* @__PURE__ */ jsx("li", { children: "• IP-Adresse (Standort-Rückschlüsse)" }),
                /* @__PURE__ */ jsx("li", { children: "• Browser & OS (User-Agent)" }),
                /* @__PURE__ */ jsx("li", { children: "• Spracheinstellungen" }),
                /* @__PURE__ */ jsx("li", { children: "• Referrer (besuchte Seite)" }),
                /* @__PURE__ */ jsx("li", { children: "• Zeitstempel des Zugriffs" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-800 mb-2", children: "Tracking-Potential" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-red-700 text-sm", children: [
                /* @__PURE__ */ jsx("li", { children: "• Cross-Site Tracking möglich" }),
                /* @__PURE__ */ jsx("li", { children: "• Nutzerprofile über Websites" }),
                /* @__PURE__ */ jsx("li", { children: "• Verknüpfung mit Google-Account" }),
                /* @__PURE__ */ jsx("li", { children: "• Langzeit-Tracking via Cache" }),
                /* @__PURE__ */ jsx("li", { children: "• Browser-Fingerprinting" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Performance-Analyse" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Ladezeiten-Vergleich" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Google Fonts CDN" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "~150-300ms" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-red-500 h-2 rounded-full", style: { width: "60%" } }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Lokales Hosting" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "~20-50ms" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: "20%" } }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Mit Preload optimiert" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "~10-30ms" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-green-600 h-2 rounded-full", style: { width: "15%" } }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-4", children: "* Durchschnittswerte bei 4G-Verbindung, können je nach Standort und Netzwerk variieren" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Netzwerk-Analyse Tools" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-3", children: "Chrome DevTools Prüfung" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// 1. Chrome DevTools öffnen (F12)
// 2. Network Tab auswählen
// 3. Filter: "fonts" oder "googleapis"
// 4. Seite neu laden
// 5. Prüfen auf externe Font-Requests` }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-3", children: "Automatisierte Prüfung" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// Node.js Script zur Font-Prüfung
const puppeteer = require('puppeteer');

async function checkGoogleFonts(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const googleFontRequests = [];
  
  page.on('request', (request) => {
    if (request.url().includes('fonts.googleapis.com') || 
        request.url().includes('fonts.gstatic.com')) {
      googleFontRequests.push(request.url());
    }
  });
  
  await page.goto(url);
  await browser.close();
  
  return googleFontRequests;
}` }) }) })
        ] })
      ] })
    ] })
  ] });
};
const SolutionsTab = () => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { id: "loesungsansaetze", className: "text-2xl font-bold text-gray-800 mb-6", children: "DSGVO-konforme Lösungsansätze" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border-2 border-green-500 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-3", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-green-600 mr-2" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-green-800", children: "Empfohlen: Lokales Hosting" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-green-700", children: [
            /* @__PURE__ */ jsx("li", { children: "• Fonts auf eigenem Server hosten" }),
            /* @__PURE__ */ jsx("li", { children: "• Keine externe Datenübertragung" }),
            /* @__PURE__ */ jsx("li", { children: "• Volle Kontrolle über Caching" }),
            /* @__PURE__ */ jsx("li", { children: "• Bessere Performance möglich" }),
            /* @__PURE__ */ jsx("li", { children: "• DSGVO-konform ohne Einwilligung" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 border-2 border-orange-400 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-3", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6 text-orange-600 mr-2" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-orange-800", children: "Möglich: Mit Consent" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-orange-700", children: [
            /* @__PURE__ */ jsx("li", { children: "• Explizite Einwilligung einholen" }),
            /* @__PURE__ */ jsx("li", { children: "• Consent-Banner implementieren" }),
            /* @__PURE__ */ jsx("li", { children: "• Fonts erst nach Zustimmung laden" }),
            /* @__PURE__ */ jsx("li", { children: "• Fallback-Fonts definieren" }),
            /* @__PURE__ */ jsx("li", { children: "• Komplexere Implementierung" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Option 1: Google Fonts Helper" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: "Der Google Fonts Helper automatisiert den Download-Prozess:" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `# 1. Besuche: https://google-webfonts-helper.herokuapp.com
# 2. Wähle gewünschte Schriftart
# 3. Wähle Zeichensätze und Stile
# 4. Download als ZIP
# 5. CSS-Code kopieren` }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-2", children: "Generiertes CSS-Beispiel:" }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-xs", children: /* @__PURE__ */ jsx("code", { children: `@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/open-sans-v29-latin-regular.woff2') format('woff2'),
       url('/fonts/open-sans-v29-latin-regular.woff') format('woff');
}` }) }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Option 2: NPM Package Installation" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: "Für moderne Build-Prozesse mit Webpack/Vite:" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `# Installation via NPM
npm install @fontsource/open-sans

# In deiner CSS/JS Datei
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

# Oder in CSS
@import "~@fontsource/open-sans/400.css";
@import "~@fontsource/open-sans/700.css";` }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Option 3: Proxy-Lösung (Advanced)" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: "Server-seitiges Proxying für dynamische Font-Anfragen:" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// Node.js Express Proxy
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/fonts/css2', async (req, res) => {
  try {
    // Entferne sensible Header
    const { data } = await axios.get(\`https://fonts.googleapis.com/css2?\${req.query}\`, {
      headers: {
        'User-Agent': 'Mozilla/5.0' // Generic UA
      }
    });
    
    // Ersetze Google URLs mit lokalen
    const localizedCSS = data
      .replace(/https:\\/\\/fonts\\.gstatic\\.com/g, '/fonts/files');
    
    res.setHeader('Content-Type', 'text/css');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.send(localizedCSS);
  } catch (error) {
    res.status(500).send('Error fetching fonts');
  }
});` }) }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Alternative Font-Lösungen" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-2", children: "System Fonts" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-3", children: "Native Schriften ohne Downloads" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: `font-family: -apple-system, 
BlinkMacSystemFont, 
"Segoe UI", Roboto, 
Helvetica, Arial, 
sans-serif;` }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-2", children: "Variable Fonts" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-3", children: "Eine Datei, alle Stile" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: `@font-face {
  font-family: 'Inter';
  src: url('Inter.var.woff2');
  font-weight: 100 900;
}` }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-2", children: "Font Loading API" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-3", children: "Kontrolle über Ladeverhalten" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: `const font = new FontFace(
  'CustomFont',
  'url(/fonts/custom.woff2)'
);
await font.load();` }) })
        ] })
      ] })
    ] })
  ] });
};
const ImplementationTab = () => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { id: "migration-guide", className: "text-2xl font-bold text-gray-800 mb-6", children: "Schritt-für-Schritt Migration Guide" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Schritt 1: Aktuelle Fonts identifizieren" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-3", children: "Suche in deinem Projekt nach Google Fonts Einbindungen:" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `# Bash/Terminal
grep -r "fonts.googleapis.com" . --include="*.html" --include="*.css" --include="*.js"
grep -r "fonts.gstatic.com" . --include="*.html" --include="*.css" --include="*.js"

# Oder mit ripgrep (schneller)
rg "fonts.(googleapis|gstatic).com" -t html -t css -t js` }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Schritt 2: Fonts herunterladen" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-3", children: "Methode A: Google Fonts Helper" }),
            /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-gray-600 mb-4", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                "1. Öffne ",
                /* @__PURE__ */ jsx("a", { href: "https://google-webfonts-helper.herokuapp.com", className: "text-orange-600 underline", children: "Google Fonts Helper" })
              ] }),
              /* @__PURE__ */ jsx("li", { children: '2. Suche deine Schriftart (z.B. "Open Sans")' }),
              /* @__PURE__ */ jsx("li", { children: "3. Wähle benötigte Styles (Regular, Bold, etc.)" }),
              /* @__PURE__ */ jsx("li", { children: '4. Wähle "Modern Browsers" für WOFF2' }),
              /* @__PURE__ */ jsx("li", { children: "5. Download ZIP-Datei" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-3", children: "Methode B: Manueller Download" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `# Python Script zum automatischen Download
import requests
import os

def download_font(font_url, output_dir="./fonts"):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Google Fonts CSS abrufen
    css_response = requests.get(font_url)
    css_content = css_response.text
    
    # Font URLs extrahieren und downloaden
    import re
    font_urls = re.findall(r'url((https://[^)]+))', css_content)
    
    for url in font_urls:
        filename = url.split('/')[-1]
        font_response = requests.get(url)
        
        with open(f"{output_dir}/{filename}", 'wb') as f:
            f.write(font_response.content)
        
        print(f"Downloaded: {filename}")

# Verwendung
download_font("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700")` }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Schritt 3: Fonts in Projekt integrieren" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-3", children: "Ordnerstruktur erstellen:" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `project/
├── assets/
│   └── fonts/
│       ├── open-sans-v29-latin-regular.woff2
│       ├── open-sans-v29-latin-regular.woff
│       ├── open-sans-v29-latin-700.woff2
│       └── open-sans-v29-latin-700.woff
├── css/
│   └── fonts.css
└── index.html` }) }) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-3", children: "CSS-Datei erstellen (fonts.css):" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `/* fonts.css */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* Wichtig für Performance */
  src: local('Open Sans Regular'), /* Lokaler Fallback */
       url('/assets/fonts/open-sans-v29-latin-regular.woff2') format('woff2'),
       url('/assets/fonts/open-sans-v29-latin-regular.woff') format('woff');
}

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Open Sans Bold'),
       url('/assets/fonts/open-sans-v29-latin-700.woff2') format('woff2'),
       url('/assets/fonts/open-sans-v29-latin-700.woff') format('woff');
}

/* Verwendung */
body {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}` }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Schritt 4: Google Fonts Links entfernen" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-3", children: "Ersetze alle Google Fonts Referenzen:" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded mb-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-800 mb-2", children: "Entfernen:" }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-xs", children: /* @__PURE__ */ jsx("code", { children: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">` }) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-800 mb-2", children: "Ersetzen durch:" }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-xs", children: /* @__PURE__ */ jsx("code", { children: `<link rel="preload" href="/assets/fonts/open-sans-v29-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/open-sans-v29-latin-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/fonts.css">` }) }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Schritt 5: Performance optimieren" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-3", children: "Zusätzliche Optimierungen:" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `<!-- Preload kritische Fonts -->
<link rel="preload" 
      href="/assets/fonts/open-sans-v29-latin-regular.woff2" 
      as="font" 
      type="font/woff2" 
      crossorigin>

<!-- Font-Display Strategy -->
<style>
  @font-face {
    font-family: 'Open Sans';
    font-display: swap; /* oder 'optional' für noch bessere Performance */
  }
</style>

<!-- Resource Hints für schnelleres Laden -->
<link rel="dns-prefetch" href="/">
<link rel="preconnect" href="/">` }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-2", children: "Nginx Konfiguration für Caching:" }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-xs", children: /* @__PURE__ */ jsx("code", { children: `location ~* .(woff|woff2|ttf|otf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header Access-Control-Allow-Origin "*";
}` }) }) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Testing & Validierung" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-3", children: "Browser DevTools Test" }),
          /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsx("li", { children: "1. Öffne Chrome DevTools (F12)" }),
            /* @__PURE__ */ jsx("li", { children: "2. Gehe zum Network Tab" }),
            /* @__PURE__ */ jsx("li", { children: '3. Filter nach "Font" oder suche nach "googleapis"' }),
            /* @__PURE__ */ jsx("li", { children: "4. Lade die Seite neu (Ctrl+F5)" }),
            /* @__PURE__ */ jsx("li", { children: "5. Stelle sicher, dass keine Requests zu Google gehen" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 mb-3", children: "Automatisierter Test" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// Cypress Test
describe('Font Loading Test', () => {
  it('should not load fonts from Google', () => {
    cy.intercept('**/fonts.googleapis.com/**', { statusCode: 500 }).as('googleFonts');
    cy.intercept('**/fonts.gstatic.com/**', { statusCode: 500 }).as('gstaticFonts');
    
    cy.visit('/');
    
    // Test sollte ohne Fehler durchlaufen
    cy.get('body').should('have.css', 'font-family')
      .and('include', 'Open Sans');
  });
});` }) }) })
        ] })
      ] })
    ] })
  ] });
};
const WebdevGuideTab = () => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Webentwickler Best Practices" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-green-800 mb-3", children: "✅ Do's" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-green-700", children: [
            /* @__PURE__ */ jsx("li", { children: "• Fonts lokal hosten" }),
            /* @__PURE__ */ jsx("li", { children: "• Preload für kritische Fonts" }),
            /* @__PURE__ */ jsx("li", { children: "• Font-display: swap verwenden" }),
            /* @__PURE__ */ jsx("li", { children: "• WOFF2 Format priorisieren" }),
            /* @__PURE__ */ jsx("li", { children: "• Subset für benötigte Zeichen" }),
            /* @__PURE__ */ jsx("li", { children: "• Fallback-Fonts definieren" }),
            /* @__PURE__ */ jsx("li", { children: "• Caching-Header setzen" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-800 mb-3", children: "❌ Don'ts" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-red-700", children: [
            /* @__PURE__ */ jsx("li", { children: "• Keine externen Font-CDNs" }),
            /* @__PURE__ */ jsx("li", { children: "• Keine ungecachten Fonts" }),
            /* @__PURE__ */ jsx("li", { children: "• Kein font-display: block" }),
            /* @__PURE__ */ jsx("li", { children: "• Keine überdimensionierten Fonts" }),
            /* @__PURE__ */ jsx("li", { children: "• Keine unnötigen Font-Varianten" }),
            /* @__PURE__ */ jsx("li", { children: "• Kein synchrones Laden" }),
            /* @__PURE__ */ jsx("li", { children: "• Keine fehlenden Fallbacks" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Framework-spezifische Lösungen" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "React / Next.js" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// next.config.js
module.exports = {
  optimizeFonts: false, // Disable Google Fonts optimization
}

// pages/_app.js
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

// oder mit next/font (Next.js 13+)
import localFont from 'next/font/local'

const openSans = localFont({
  src: [
    {
      path: './fonts/OpenSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-open-sans',
})` }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Vue / Nuxt.js" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// nuxt.config.js
export default {
  css: [
    '@/assets/fonts/fonts.css'
  ],
  
  head: {
    link: [
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/open-sans-regular.woff2',
        crossorigin: 'anonymous'
      }
    ]
  },
  
  // Disable Google Fonts module if installed
  googleFonts: false
}` }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "WordPress" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// functions.php
// Google Fonts deaktivieren
add_filter('elementor/frontend/print_google_fonts', '__return_false');

// Lokale Fonts einbinden
function load_local_fonts() {
    wp_enqueue_style(
        'local-fonts',
        get_template_directory_uri() . '/assets/fonts/fonts.css',
        array(),
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'load_local_fonts');

// Preload hinzufügen
function add_font_preload() {
    echo '<link rel="preload" href="' . 
         get_template_directory_uri() . 
         '/assets/fonts/open-sans.woff2" as="font" type="font/woff2" crossorigin>';
}
add_action('wp_head', 'add_font_preload', 1);` }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Performance Monitoring" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Web Vitals Tracking" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// Font Loading Performance messen
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.name.includes('.woff')) {
      console.log(\`Font \${entry.name} loaded in \${entry.duration}ms\`);
      
      // An Analytics senden
      if (window.gtag) {
        gtag('event', 'font_performance', {
          'font_name': entry.name,
          'load_time': Math.round(entry.duration),
          'transfer_size': entry.transferSize
        });
      }
    }
  }
});

observer.observe({ entryTypes: ['resource'] });

// Font Loading API für bessere Kontrolle
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    console.log('All fonts loaded');
    document.body.classList.add('fonts-loaded');
  });
}` }) }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Checkliste für Entwickler" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Alle Google Fonts Links entfernt" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Suche nach fonts.googleapis.com und fonts.gstatic.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Fonts lokal gehostet" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "WOFF2 und WOFF Formate in /assets/fonts/" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "@font-face Regeln erstellt" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Mit font-display: swap für bessere Performance" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Preload für kritische Fonts" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: 'link rel="preload" für above-the-fold Fonts' })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Caching konfiguriert" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Cache-Control Header für Font-Dateien" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Fallback Fonts definiert" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "System-Fonts als Fallback in font-family" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Browser DevTools Test durchgeführt" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Keine externen Font-Requests im Network Tab" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Performance getestet" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "PageSpeed Insights zeigt keine Font-Probleme" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg mt-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "🚀 Pro-Tipp: Automatisierung" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: "Integriere die Font-Compliance-Prüfung in deine CI/CD Pipeline:" }),
      /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `# .github/workflows/font-check.yml
name: Font Compliance Check

on: [push, pull_request]

jobs:
  check-fonts:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Check for Google Fonts
        run: |
          if grep -r "fonts.googleapis.com|fonts.gstatic.com" .              --include="*.html" --include="*.css" --include="*.js"              --include="*.jsx" --include="*.tsx" --include="*.vue"; then
            echo "❌ Google Fonts found! Please use local hosting."
            exit 1
          else
            echo "✅ No Google Fonts detected"
          fi` }) }) }) })
    ] })
  ] });
};
export {
  GoogleFontsMunichCase as default
};
