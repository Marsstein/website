import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import "react-helmet-async";
import "./button-BRnNKcuh.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
const ContactPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Kontakt – Compliance-Experten erreichen",
        description: "Kontaktieren Sie Marsstein für Compliance-Beratung. ✓ Kostenlose Erstberatung ✓ 24h Antwortzeit ✓ Experten für DSGVO & ISO 27001.",
        canonical: "/contact",
        keywords: "Compliance Beratung, DSGVO Experten, ISO 27001 Beratung, Kontakt"
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-b from-white to-[#F5F6F8] pt-32 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-6xl font-bold text-[#232323] mb-6 animate-fade-in", children: [
          "Sprechen Sie mit unseren ",
          /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "Experten" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl text-[#474747] max-w-3xl mx-auto leading-relaxed", children: [
          "Wir helfen Ihnen bei allen Fragen rund um Compliance, Datenschutz und Informationssicherheit.",
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Kostenlose Erstberatung inklusive." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-10 transition-all duration-300 hover:shadow-xl border border-gray-100", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#232323] mb-8", children: "Senden Sie uns eine Nachricht" }),
          /* @__PURE__ */ jsxs("form", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "firstName", className: "block text-sm font-medium text-[#474747] mb-2", children: "Vorname *" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "firstName",
                    name: "firstName",
                    required: true,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "lastName", className: "block text-sm font-medium text-[#474747] mb-2", children: "Nachname *" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "lastName",
                    name: "lastName",
                    required: true,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-[#474747] mb-2", children: "E-Mail *" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: true,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-[#474747] mb-2", children: "Unternehmen" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "company",
                  name: "company",
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "topic", className: "block text-sm font-medium text-[#474747] mb-2", children: "Thema *" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "topic",
                  name: "topic",
                  required: true,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Bitte wählen" }),
                    /* @__PURE__ */ jsx("option", { value: "dsgvo", children: "DSGVO Compliance" }),
                    /* @__PURE__ */ jsx("option", { value: "iso27001", children: "ISO 27001 Zertifizierung" }),
                    /* @__PURE__ */ jsx("option", { value: "ai-act", children: "EU AI Act" }),
                    /* @__PURE__ */ jsx("option", { value: "demo", children: "Produkt Demo" }),
                    /* @__PURE__ */ jsx("option", { value: "other", children: "Sonstiges" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-[#474747] mb-2", children: "Nachricht *" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  rows: 5,
                  required: true,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "privacy",
                  name: "privacy",
                  type: "checkbox",
                  required: true,
                  className: "h-4 w-4 text-[#e24e1b] border-gray-300 rounded focus:ring-[#e24e1b] mt-1"
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "privacy", className: "ml-3 text-sm text-[#474747]", children: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu. *" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "w-full px-8 py-4 text-white bg-[#e24e1b] rounded-lg hover:bg-[#f97316] transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-inter",
                children: "Nachricht senden"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-10 mb-8 transition-all duration-300 hover:shadow-xl border border-gray-100", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#232323] mb-8", children: "Direkter Kontakt" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start group", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-[#e24e1b]/10 rounded-lg group-hover:bg-[#e24e1b]/20 transition-all duration-300", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-[#e24e1b]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
                /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[#232323] text-lg", children: "E-Mail" }),
                  /* @__PURE__ */ jsx("p", { className: "text-[#474747] font-medium", children: "info@marsstein.ai" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] opacity-80", children: "Antwort innerhalb von 24 Stunden" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start group", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-[#e24e1b]/10 rounded-lg group-hover:bg-[#e24e1b]/20 transition-all duration-300", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-[#e24e1b]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }) }),
                /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[#232323] text-lg", children: "Telefon" }),
                  /* @__PURE__ */ jsx("p", { className: "text-[#474747] font-medium", children: "+4917670560292" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] opacity-80", children: "Mo-Fr 9:00-18:00 Uhr" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start group", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-[#e24e1b]/10 rounded-lg group-hover:bg-[#e24e1b]/20 transition-all duration-300", children: /* @__PURE__ */ jsxs("svg", { className: "w-6 h-6 text-[#e24e1b]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
                  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[#232323] text-lg", children: "Adresse" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-[#474747] font-medium", children: [
                    "Marsstein GmbH i.G.",
                    /* @__PURE__ */ jsx("br", {}),
                    "Bücklestraße 3",
                    /* @__PURE__ */ jsx("br", {}),
                    "78467 Konstanz"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-[#e24e1b]/10 to-[#f97316]/10 rounded-2xl p-10 border border-[#e24e1b]/20", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-[#e24e1b] rounded-full", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#232323] ml-4", children: "Kostenlose Erstberatung" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[#474747] mb-6 text-lg", children: "Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unseren Compliance-Experten." }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-[#474747]", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#39B37B] mr-3 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "30 Minuten Expertengespräch" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#39B37B] mr-3 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Individuelle Lösungsvorschläge" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#39B37B] mr-3 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Unverbindlich & kostenlos" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("button", { className: "mt-8 w-full px-6 py-3 bg-[#e24e1b] text-white font-semibold rounded-lg hover:bg-[#f97316] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5", children: "Termin vereinbaren" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  ContactPage as default
};
