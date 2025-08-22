import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { Link } from "react-router-dom";
import "react-helmet-async";
const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "99€",
      period: "/Monat",
      description: "Perfekt für kleine Unternehmen",
      features: [
        "DSGVO Basis-Compliance",
        "Bis zu 5 Nutzer",
        "Cookie Management Tool",
        "E-Mail Support",
        "Basis-Vorlagen"
      ],
      cta: "Jetzt starten",
      highlighted: false
    },
    {
      name: "Professional",
      price: "299€",
      period: "/Monat",
      description: "Für wachsende Unternehmen",
      features: [
        "Alles aus Starter",
        "Bis zu 25 Nutzer",
        "ISO 27001 Module",
        "Whistleblower System",
        "Priority Support",
        "API-Zugang",
        "Custom Branding"
      ],
      cta: "Jetzt starten",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Maßgeschneiderte Lösungen",
      features: [
        "Alles aus Professional",
        "Unbegrenzte Nutzer",
        "EU AI Act Compliance",
        "Dedizierter Account Manager",
        "SLA Garantie",
        "On-Premise Option",
        "Custom Integrationen"
      ],
      cta: "Kontakt aufnehmen",
      highlighted: false
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Preise & Pakete – Compliance Software ab 99€/Monat",
        description: "Transparente Preise für Marsstein Compliance Software. Starter ab 99€, Professional 299€, Enterprise auf Anfrage. Jetzt 30 Tage testen!",
        canonical: "/pricing",
        keywords: "Compliance Software Preise, DSGVO Software Kosten, ISO 27001 Tool Preise"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Transparente Preise für jeden Bedarf" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Wählen Sie das passende Paket für Ihre Compliance-Anforderungen. Alle Preise verstehen sich zzgl. MwSt. 30 Tage kostenlos testen." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: plans.map((plan, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative rounded-lg ${plan.highlighted ? "ring-2 ring-blue-600 shadow-xl" : "border border-gray-200"} bg-white p-8`,
          children: [
            plan.highlighted && /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx("span", { className: "bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium", children: "Beliebt" }) }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: plan.name }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: plan.description }),
              /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold text-gray-900", children: [
                plan.price,
                /* @__PURE__ */ jsx("span", { className: "text-lg text-gray-600 font-normal", children: plan.period })
              ] })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: plan.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                      clipRule: "evenodd"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
            ] }, idx)) }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: plan.name === "Enterprise" ? "/contact" : "/signup",
                className: `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${plan.highlighted ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`,
                children: plan.cta
              }
            )
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-8 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6 text-center", children: "Häufig gestellte Fragen" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: "Kann ich das Paket später wechseln?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Ja, Sie können jederzeit upgraden oder downgraden. Die Abrechnung erfolgt anteilig." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: "Gibt es eine Mindestlaufzeit?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Nein, alle Pakete sind monatlich kündbar. Bei Jahreszahlung gewähren wir 20% Rabatt." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: "Sind Schulungen enthalten?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Professional und Enterprise Pakete enthalten Onboarding-Schulungen. Weitere Trainings auf Anfrage." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: "Wie sicher sind meine Daten?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Wir hosten in deutschen Rechenzentren und sind ISO 27001 zertifiziert. Ihre Daten sind sicher." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mt-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Noch unsicher? Testen Sie kostenlos!" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8", children: "30 Tage unverbindlich alle Features testen. Keine Kreditkarte erforderlich." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/signup",
            className: "inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",
            children: "Kostenlos testen"
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  PricingPage as default
};
