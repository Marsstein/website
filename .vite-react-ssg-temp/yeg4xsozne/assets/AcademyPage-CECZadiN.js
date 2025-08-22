import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { Link } from "react-router-dom";
import "react-helmet-async";
const AcademyPage = () => {
  const courses = [
    {
      category: "DSGVO Grundlagen",
      level: "Einsteiger",
      duration: "4 Stunden",
      modules: [
        "Einführung in die DSGVO",
        "Betroffenenrechte verstehen",
        "Rechtsgrundlagen der Verarbeitung",
        "Dokumentationspflichten"
      ]
    },
    {
      category: "ISO 27001 Implementierung",
      level: "Fortgeschritten",
      duration: "8 Stunden",
      modules: [
        "ISMS Grundlagen",
        "Risikoanalyse durchführen",
        "Controls implementieren",
        "Audit-Vorbereitung"
      ]
    },
    {
      category: "EU AI Act Compliance",
      level: "Experte",
      duration: "6 Stunden",
      modules: [
        "KI-Risikoklassifizierung",
        "Transparenzpflichten",
        "Technische Dokumentation",
        "Konformitätsbewertung"
      ]
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Academy – Compliance-Schulungen & Zertifizierungen",
        description: "Marsstein Academy: Online-Kurse zu DSGVO, ISO 27001 & EU AI Act. ✓ Zertifikate ✓ Praxisnah ✓ Von Experten. Jetzt weiterbilden!",
        canonical: "/academy",
        keywords: "Compliance Schulung, DSGVO Kurs, ISO 27001 Training, Datenschutz Weiterbildung"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-blue-600 to-blue-800 py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "text-center text-white", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "Marsstein Academy" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 max-w-3xl mx-auto", children: "Werden Sie zum Compliance-Experten mit unseren praxisnahen Online-Kursen. Von Grundlagen bis zur Expertenzertifizierung." })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 text-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-600", children: "500+" }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "Lernmodule" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-600", children: "10.000+" }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "Absolventen" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-600", children: "95%" }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "Erfolgsquote" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-600", children: "24/7" }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "Verfügbar" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-gray-900 mb-12", children: "Unsere Kurskategorien" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: courses.map((course, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900", children: course.category }),
            /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-sm font-medium ${course.level === "Einsteiger" ? "bg-green-100 text-green-800" : course.level === "Fortgeschritten" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`, children: course.level })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-4", children: [
            "Kursdauer: ",
            course.duration
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Kursmodule:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-6", children: course.modules.map((module, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-600", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-green-500 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
            module
          ] }, idx)) }),
          /* @__PURE__ */ jsx("button", { className: "w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium", children: "Kurs starten" })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-gray-900 mb-12", children: "Warum Marsstein Academy?" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }) }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Praxisnahe Inhalte" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Von Experten entwickelt mit echten Fallbeispielen aus der Praxis" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }) }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Zertifikate" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Erhalten Sie anerkannte Zertifikate nach erfolgreichem Abschluss" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Flexibles Lernen" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Lernen Sie in Ihrem eigenen Tempo, wann und wo Sie wollen" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-blue-600", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Starten Sie Ihre Compliance-Karriere" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-8", children: "Melden Sie sich jetzt an und erhalten Sie Zugang zu allen Kursen" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/signup",
              className: "inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors",
              children: "Kostenlos starten"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-blue-700 transition-colors",
              children: "Beratung anfragen"
            }
          )
        ] })
      ] }) })
    ] })
  ] });
};
export {
  AcademyPage as default
};
