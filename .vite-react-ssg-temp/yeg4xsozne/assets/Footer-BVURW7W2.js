import { jsxs, jsx } from "react/jsx-runtime";
import { u as useLanguage } from "./useLanguage-BAIZ-FA5.js";
import { FileText, ShieldCheck, Wrench, BookOpen, Mail, Shield, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const { t } = useLanguage();
  const regulierungLinks = [
    { label: "EU AI Act", href: "/eu-ai-act" },
    { label: "DSGVO", href: "/dsgvo" },
    { label: "NIS2 Compliance", href: "/nis2-compliance" }
  ];
  const zertifizierungLinks = [
    { label: "ISO 27001", href: "/iso-27001-zertifizierung" },
    { label: "SOC2", href: "/soc2-zertifizierung" },
    { label: "TISAX", href: "/tisax-zertifizierung" }
  ];
  const toolsLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "AI Check", href: "/dashboard/ai-check" },
    { label: "Cookie Management", href: "/tools/cookie-management" },
    { label: "Assessment Center", href: "/assessment-center" }
  ];
  const wissenLinks = [
    { label: "DSGVO Leitfäden", href: "/wissen/dsgvo" },
    { label: "KI Compliance", href: "/wissen/ki-datenschutz" },
    { label: "Krisenmanagement", href: "/wissen/krisenmanagement" }
  ];
  const trustBadges = [
    { icon: Shield, label: "GDPR Compliant" },
    { icon: Award, label: "ISO 27001 Certified" },
    { icon: CheckCircle, label: "EU AI Act Approved" }
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-white overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-30", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-[#e24e1b]/5 to-transparent rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-24 w-24 h-24 bg-gradient-to-br from-[#f97316]/5 to-transparent rounded-full blur-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-24 left-1/4 w-32 h-32 bg-gradient-to-br from-[#e24e1b]/5 to-transparent rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12 text-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block mb-4", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/JLogoMarsstein.svg",
              alt: "Marsstein Logo",
              className: "h-10 w-auto filter drop-shadow-[0_4px_20px_rgba(228,78,27,0.3)] hover:drop-shadow-[0_6px_30px_rgba(228,78,27,0.4)] transition-all duration-300"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-light tracking-wide text-[#232323]", children: "Compliance made simple" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
          { title: "REGULIERUNGEN", links: regulierungLinks, icon: FileText },
          { title: "ZERTIFIZIERUNGEN", links: zertifizierungLinks, icon: ShieldCheck },
          { title: "TOOLS & SERVICES", links: toolsLinks, icon: Wrench },
          { title: "WISSEN & GUIDES", links: wissenLinks, icon: BookOpen }
        ].map((section, index) => /* @__PURE__ */ jsxs("div", { className: "group backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-6 hover:bg-white/80 transition-all duration-500 shadow-[0_8px_32px_rgba(228,78,27,0.1)] hover:shadow-[0_16px_48px_rgba(228,78,27,0.15)] hover:-translate-y-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-[#e24e1b]/20 to-[#f97316]/10 rounded-xl group-hover:from-[#e24e1b]/30 group-hover:to-[#f97316]/20 transition-all duration-300", children: /* @__PURE__ */ jsx(section.icon, { className: "h-5 w-5 text-[#e24e1b]" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm tracking-wider text-[#232323]", children: section.title })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: section.links.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: link.href,
              className: "text-sm text-[#474747] hover:text-[#e24e1b] transition-all duration-200 block py-1 hover:translate-x-1",
              children: link.label
            }
          ) }, linkIndex)) })
        ] }, index)) }),
        /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 text-center shadow-[0_8px_32px_rgba(228,78,27,0.1)]", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[#232323] mb-6 text-lg", children: "KONTAKT & SUPPORT" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-[#e24e1b]/10 rounded-lg", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-[#e24e1b]" }) }),
              /* @__PURE__ */ jsx("a", { href: "mailto:info@marsstein.ai", className: "text-[#474747] hover:text-[#e24e1b] transition-colors", children: "info@marsstein.ai" })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:from-[#f97316] hover:to-[#e24e1b] px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                children: "Kontakt aufnehmen"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-[#e24e1b]/10 py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[#474747]", children: "© 2025 Marsstein • Compliance made simple" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Link, { to: "/agb", className: "text-[#474747] hover:text-[#e24e1b] transition-colors", children: "AGB" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "•" }),
            /* @__PURE__ */ jsx(Link, { to: "/impressum", className: "text-[#474747] hover:text-[#e24e1b] transition-colors", children: "Impressum" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "•" }),
            /* @__PURE__ */ jsx(Link, { to: "/datenschutz", className: "text-[#474747] hover:text-[#e24e1b] transition-colors", children: "Datenschutz" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: trustBadges.map((badge, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsx(badge.icon, { className: "h-4 w-4 text-[#e24e1b]" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#474747] text-xs", children: badge.label })
        ] }, index)) })
      ] }) })
    ] })
  ] });
};
export {
  Footer as F
};
