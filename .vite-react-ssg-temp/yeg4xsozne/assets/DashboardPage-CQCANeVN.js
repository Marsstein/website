import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "react-helmet-async";
const DashboardPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Dashboard – Ihr Compliance-Cockpit in Echtzeit",
        description: "Marsstein Dashboard: Alle Compliance-KPIs im Blick. ✓ Echtzeit-Monitoring ✓ Automatische Reports ✓ Risiko-Tracking. Jetzt einloggen!",
        canonical: "/dashboard",
        keywords: "Compliance Dashboard, DSGVO Monitoring, ISO 27001 Dashboard, Compliance KPIs"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Compliance Dashboard" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Letztes Update: vor 5 Minuten" }),
          /* @__PURE__ */ jsx("button", { className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium", children: "Bericht erstellen" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-600", children: "Compliance Score" }),
              /* @__PURE__ */ jsx("span", { className: "text-green-600 text-sm font-medium", children: "+5%" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gray-900", children: "92%" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: "92%" } }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-600", children: "Offene Aufgaben" }),
              /* @__PURE__ */ jsx("span", { className: "text-red-600 text-sm font-medium", children: "3 kritisch" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gray-900", children: "24" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-1", children: "12 diese Woche fällig" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-600", children: "Aktive Risiken" }),
              /* @__PURE__ */ jsx("span", { className: "text-yellow-600 text-sm font-medium", children: "Mittel" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gray-900", children: "7" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-1", children: "2 neue diese Woche" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-600", children: "Audits" }),
              /* @__PURE__ */ jsx("span", { className: "text-blue-600 text-sm font-medium", children: "Geplant" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gray-900", children: "3" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Nächstes in 14 Tagen" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Compliance-Trend" }),
            /* @__PURE__ */ jsx("div", { className: "h-64 flex items-center justify-center bg-gray-50 rounded", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Chart: Compliance Score über Zeit" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Letzte Aktivitäten" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: "DSGVO-Audit abgeschlossen" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "vor 2 Stunden" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: "Neue Richtlinie veröffentlicht" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "vor 5 Stunden" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: "Risikobewertung aktualisiert" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "gestern" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full mt-2 mr-3" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: "Kritisches Update erforderlich" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "vor 2 Tagen" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-white rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Anstehende Aufgaben" }) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Aufgabe" }),
              /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Kategorie" }),
              /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Priorität" }),
              /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Fällig" }),
              /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-gray-200", children: [
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50", children: [
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-gray-900", children: "Datenschutzerklärung aktualisieren" }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: "DSGVO" }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full", children: "Hoch" }) }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: "Morgen" }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full", children: "In Arbeit" }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50", children: [
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-gray-900", children: "ISO 27001 Kontrollen überprüfen" }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: "ISO 27001" }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full", children: "Mittel" }) }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: "In 3 Tagen" }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full", children: "Geplant" }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50", children: [
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-gray-900", children: "KI-Risikoanalyse durchführen" }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: "EU AI Act" }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full", children: "Niedrig" }) }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: "Nächste Woche" }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full", children: "Offen" }) })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
};
export {
  DashboardPage as default
};
