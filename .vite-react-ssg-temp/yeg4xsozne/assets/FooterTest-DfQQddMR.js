import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { S as Separator } from "./separator-BB_QW9VA.js";
import { FileText, ShieldCheck, Wrench, BookOpen, Mail, Shield, Award, CheckCircle, Building2 } from "lucide-react";
import "react";
import "@radix-ui/react-separator";
import "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const sharedData = {
  regulierungLinks: [
    { label: "EU AI Act", href: "/eu-ai-act" },
    { label: "DSGVO", href: "/dsgvo" },
    { label: "NIS2 Compliance", href: "/nis2-compliance" }
  ],
  zertifizierungLinks: [
    { label: "ISO 27001", href: "/iso-27001-zertifizierung" },
    { label: "SOC2", href: "/soc2-zertifizierung" },
    { label: "TISAX", href: "/tisax-zertifizierung" }
  ],
  toolsLinks: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "AI Check", href: "/dashboard/ai-check" },
    { label: "Cookie Management", href: "/tools/cookie-management" },
    { label: "Assessment Center", href: "/assessment-center" }
  ],
  wissenLinks: [
    { label: "DSGVO Leitfäden", href: "/wissen/dsgvo" },
    { label: "KI Compliance", href: "/wissen/ki-datenschutz" },
    { label: "Krisenmanagement", href: "/wissen/krisenmanagement" }
  ],
  branchenLinks: [
    { label: "Gesundheitswesen", href: "/branchen/gesundheitswesen" },
    { label: "Finanzdienstleister", href: "/branchen/finanzdienstleister" },
    { label: "E-Commerce", href: "/branchen/e-commerce" }
  ],
  unternehmenLinks: [
    { label: "Academy", href: "/academy" },
    { label: "Pricing", href: "/pricing" }
  ],
  trustBadges: [
    { icon: Shield, label: "GDPR Compliant" },
    { icon: Award, label: "ISO 27001 Certified" },
    { icon: CheckCircle, label: "EU AI Act Approved" }
  ]
};
const FooterVariantA1 = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-gradient-to-br from-white to-[#F5F6F8] overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-20", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-32 h-32 border border-[#e24e1b]/20 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-32 right-20 w-16 h-16 bg-[#e24e1b]/10 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-1/3 w-24 h-24 border border-[#e24e1b]/15 rounded-full" })
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
          { title: "REGULIERUNGEN", links: sharedData.regulierungLinks, icon: FileText },
          { title: "ZERTIFIZIERUNGEN", links: sharedData.zertifizierungLinks, icon: ShieldCheck },
          { title: "TOOLS & SERVICES", links: sharedData.toolsLinks, icon: Wrench },
          { title: "WISSEN & GUIDES", links: sharedData.wissenLinks, icon: BookOpen }
        ].map((section, index) => /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-sm bg-white/70 border border-[#e24e1b]/20 rounded-xl p-6 hover:bg-white/80 hover:backdrop-blur-md transition-all duration-300 hover:border-[#e24e1b]/40 shadow-lg hover:shadow-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 bg-[#e24e1b]/10 rounded-lg", children: /* @__PURE__ */ jsx(section.icon, { className: "h-5 w-5 text-[#e24e1b]" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm tracking-wider text-[#232323]", children: section.title })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: section.links.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: link.href,
              className: "text-sm text-[#474747] hover:text-[#e24e1b] transition-colors block py-1",
              children: link.label
            }
          ) }, linkIndex)) })
        ] }, index)) }),
        /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-sm bg-white/70 border border-[#e24e1b]/20 rounded-xl p-6 text-center shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[#232323] mb-4", children: "KONTAKT & SUPPORT" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-[#e24e1b]" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:jayson.chen@marsstein.com", className: "text-[#474747] hover:text-[#e24e1b] transition-colors text-sm", children: "jayson.chen@marsstein.com" })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "bg-[#e24e1b] hover:bg-[#f97316] px-6 py-2 rounded-lg text-white font-medium transition-colors text-sm shadow-md hover:shadow-lg",
                children: "Kontakt"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-[#e24e1b]/20 py-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#474747]", children: "© 2025 Marsstein • Compliance made simple" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: sharedData.trustBadges.map((badge, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(badge.icon, { className: "h-3 w-3 text-[#e24e1b]" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#474747] text-xs", children: badge.label })
        ] }, index)) })
      ] }) })
    ] })
  ] });
};
const FooterVariantA2 = () => {
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
              className: "h-10 w-auto hover:scale-105 transition-transform duration-300"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-light tracking-wide text-[#232323]", children: "Compliance made simple" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
          { title: "REGULIERUNGEN", links: sharedData.regulierungLinks, icon: FileText },
          { title: "ZERTIFIZIERUNGEN", links: sharedData.zertifizierungLinks, icon: ShieldCheck },
          { title: "TOOLS & SERVICES", links: sharedData.toolsLinks, icon: Wrench },
          { title: "WISSEN & GUIDES", links: sharedData.wissenLinks, icon: BookOpen }
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
              /* @__PURE__ */ jsx("a", { href: "mailto:jayson.chen@marsstein.com", className: "text-[#474747] hover:text-[#e24e1b] transition-colors", children: "jayson.chen@marsstein.com" })
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
      /* @__PURE__ */ jsx("div", { className: "border-t border-[#e24e1b]/10 py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#474747]", children: "© 2025 Marsstein • Compliance made simple" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6", children: sharedData.trustBadges.map((badge, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsx(badge.icon, { className: "h-4 w-4 text-[#e24e1b]" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#474747] text-xs", children: badge.label })
        ] }, index)) })
      ] }) })
    ] })
  ] });
};
const FooterVariantA3 = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-gradient-to-b from-white via-[#FAFBFC] to-[#F5F6F8] overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-12 right-12 w-2 h-2 bg-[#e24e1b] rounded-full opacity-60" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-32 left-20 w-1 h-1 bg-[#f97316] rounded-full opacity-40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-32 right-32 w-1.5 h-1.5 bg-[#e24e1b] rounded-full opacity-50" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-16 left-16 w-1 h-1 bg-[#f97316] rounded-full opacity-30" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block mb-6", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/JLogoMarsstein.svg",
              alt: "Marsstein Logo",
              className: "h-12 w-auto hover:scale-105 transition-transform duration-300"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-light tracking-wide text-[#232323] mb-2", children: "Compliance made simple" }),
          /* @__PURE__ */ jsx("div", { className: "w-16 h-px bg-gradient-to-r from-transparent via-[#e24e1b] to-transparent mx-auto" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12", children: [
          { title: "Regulierungen", links: sharedData.regulierungLinks, icon: FileText, gradient: "from-[#e24e1b]/5 to-[#f97316]/5" },
          { title: "Zertifizierungen", links: sharedData.zertifizierungLinks, icon: ShieldCheck, gradient: "from-[#f97316]/5 to-[#ea580c]/5" },
          { title: "Tools & Services", links: sharedData.toolsLinks, icon: Wrench, gradient: "from-[#ea580c]/5 to-[#e24e1b]/5" },
          { title: "Wissen & Guides", links: sharedData.wissenLinks, icon: BookOpen, gradient: "from-[#e24e1b]/5 to-[#f97316]/5" }
        ].map((section, index) => /* @__PURE__ */ jsxs("div", { className: `group relative overflow-hidden backdrop-blur-2xl bg-gradient-to-br ${section.gradient} border border-white/30 rounded-3xl p-8 hover:bg-white/50 transition-all duration-700 shadow-[0_4px_24px_rgba(228,78,27,0.05)] hover:shadow-[0_12px_40px_rgba(228,78,27,0.1)] hover:-translate-y-2`, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 w-4 h-4 bg-[#e24e1b]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 bg-white/60 rounded-2xl mb-4 group-hover:bg-white/80 transition-all duration-300", children: /* @__PURE__ */ jsx(section.icon, { className: "h-6 w-6 text-[#e24e1b]" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-light text-lg text-[#232323] tracking-wide", children: section.title })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: section.links.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: link.href,
              className: "text-sm text-[#474747] hover:text-[#e24e1b] transition-all duration-300 block py-1 font-light hover:font-normal group-hover:translate-x-2",
              children: link.label
            }
          ) }, linkIndex)) })
        ] }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("div", { className: "inline-block relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#e24e1b]/10 to-[#f97316]/10 rounded-3xl blur-xl transform scale-110" }),
          /* @__PURE__ */ jsxs("div", { className: "relative backdrop-blur-2xl bg-white/60 border border-white/40 rounded-3xl p-10 shadow-[0_8px_32px_rgba(228,78,27,0.08)]", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-light text-2xl text-[#232323] mb-8 tracking-wide", children: "Lassen Sie uns sprechen" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-8", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "mailto:jayson.chen@marsstein.com",
                  className: "flex items-center gap-3 text-[#474747] hover:text-[#e24e1b] transition-all duration-300 font-light hover:font-normal",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 bg-[#e24e1b]/10 rounded-xl", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-[#e24e1b]" }) }),
                    "jayson.chen@marsstein.com"
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-px h-8 bg-[#e24e1b]/20 hidden sm:block" }),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/contact",
                  className: "group relative overflow-hidden bg-gradient-to-r from-[#e24e1b] to-[#f97316] px-10 py-4 rounded-2xl text-white font-light tracking-wide hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Beratung starten" }),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#f97316] to-[#ea580c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" })
                  ]
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-2xl bg-white/40 border border-white/30 rounded-3xl p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-light text-lg text-[#232323] mb-6 tracking-wide", children: "Branchen" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: sharedData.branchenLinks.map((link, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: link.href,
                className: "text-sm text-[#474747] hover:text-[#e24e1b] transition-colors font-light hover:font-normal",
                children: link.label
              }
            ) }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-2xl bg-white/40 border border-white/30 rounded-3xl p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-light text-lg text-[#232323] mb-6 tracking-wide", children: "Unternehmen" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: sharedData.unternehmenLinks.map((link, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: link.href,
                className: "text-sm text-[#474747] hover:text-[#e24e1b] transition-colors font-light hover:font-normal",
                children: link.label
              }
            ) }, index)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-[#e24e1b]/10 py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-light", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#474747]", children: "© 2025 Marsstein • Compliance made simple" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-8", children: sharedData.trustBadges.map((badge, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsx(badge.icon, { className: "h-3 w-3 text-[#e24e1b]" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#474747] text-xs", children: badge.label })
        ] }, index)) })
      ] }) })
    ] })
  ] });
};
const FooterVariantA5 = () => {
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
          { title: "REGULIERUNGEN", links: sharedData.regulierungLinks, icon: FileText },
          { title: "ZERTIFIZIERUNGEN", links: sharedData.zertifizierungLinks, icon: ShieldCheck },
          { title: "TOOLS & SERVICES", links: sharedData.toolsLinks, icon: Wrench },
          { title: "WISSEN & GUIDES", links: sharedData.wissenLinks, icon: BookOpen }
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
              /* @__PURE__ */ jsx("a", { href: "mailto:jayson.chen@marsstein.com", className: "text-[#474747] hover:text-[#e24e1b] transition-colors", children: "jayson.chen@marsstein.com" })
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
      /* @__PURE__ */ jsx("div", { className: "border-t border-[#e24e1b]/10 py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[#474747]", children: "© 2025 Marsstein • Compliance made simple" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6", children: sharedData.trustBadges.map((badge, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsx(badge.icon, { className: "h-4 w-4 text-[#e24e1b]" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#474747] text-xs", children: badge.label })
        ] }, index)) })
      ] }) })
    ] })
  ] });
};
const FooterVariantA4 = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-gradient-to-br from-[#232323] to-[#474747] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-32 h-32 border border-[#e24e1b]/30 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-32 right-20 w-16 h-16 bg-[#e24e1b]/20 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-1/3 w-24 h-24 border border-[#e24e1b]/20 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block mb-4", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/JLogoMarsstein.svg",
              alt: "Marsstein Logo",
              className: "h-10 w-auto filter drop-shadow-[0_0_20px_rgba(228,78,27,0.4)] hover:drop-shadow-[0_0_30px_rgba(228,78,27,0.6)] transition-all duration-300"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-light tracking-wide text-white/90", children: "Compliance made simple" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
          { title: "REGULIERUNGEN", links: sharedData.regulierungLinks, icon: FileText },
          { title: "ZERTIFIZIERUNGEN", links: sharedData.zertifizierungLinks, icon: ShieldCheck },
          { title: "TOOLS & SERVICES", links: sharedData.toolsLinks, icon: Wrench },
          { title: "WISSEN & GUIDES", links: sharedData.wissenLinks, icon: BookOpen }
        ].map((section, index) => /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-lg bg-white/10 border border-[#e24e1b]/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:border-[#e24e1b]/50", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 bg-[#e24e1b]/20 rounded-lg", children: /* @__PURE__ */ jsx(section.icon, { className: "h-5 w-5 text-[#e24e1b]" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm tracking-wider text-white/90", children: section.title })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: section.links.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: link.href,
              className: "text-sm text-white/70 hover:text-[#e24e1b] transition-colors block py-1",
              children: link.label
            }
          ) }, linkIndex)) })
        ] }, index)) }),
        /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-lg bg-white/10 border border-[#e24e1b]/30 rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white mb-4", children: "KONTAKT & SUPPORT" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-[#e24e1b]" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:jayson.chen@marsstein.com", className: "text-white/70 hover:text-[#e24e1b] transition-colors text-sm", children: "jayson.chen@marsstein.com" })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "bg-[#e24e1b] hover:bg-[#f97316] px-6 py-2 rounded-lg text-white font-medium transition-colors text-sm",
                children: "Kontakt"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-white/20 py-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white/60", children: "© 2025 Marsstein • Compliance made simple" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: sharedData.trustBadges.map((badge, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(badge.icon, { className: "h-3 w-3 text-[#e24e1b]" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/60 text-xs", children: badge.label })
        ] }, index)) })
      ] }) })
    ] })
  ] });
};
const FooterVariantB = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#F5F6F8] py-16", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block mb-4", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/JLogoMarsstein.svg",
          alt: "Marsstein Logo",
          className: "h-8 w-auto hover:scale-105 transition-transform duration-300"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-[#232323]", children: "Compliance made simple" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: [
      { title: "Regulierungen", links: sharedData.regulierungLinks, icon: FileText, color: "bg-gradient-to-br from-[#e24e1b] to-[#f97316]" },
      { title: "Zertifizierungen", links: sharedData.zertifizierungLinks, icon: ShieldCheck, color: "bg-gradient-to-br from-[#e24e1b] to-[#ea580c]" },
      { title: "Tools & Services", links: sharedData.toolsLinks, icon: Wrench, color: "bg-gradient-to-br from-[#f97316] to-[#e24e1b]" },
      { title: "Wissen & Guides", links: sharedData.wissenLinks, icon: BookOpen, color: "bg-gradient-to-br from-[#ea580c] to-[#e24e1b]" },
      { title: "Branchen", links: sharedData.branchenLinks, icon: Building2, color: "bg-gradient-to-br from-[#e24e1b] to-[#f97316]" },
      { title: "Unternehmen", links: sharedData.unternehmenLinks, icon: Award, color: "bg-gradient-to-br from-[#f97316] to-[#ea580c]" }
    ].map((section, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border-t-4 border-[#e24e1b]",
        children: [
          /* @__PURE__ */ jsx("div", { className: `${section.color} p-6 text-white`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(section.icon, { className: "h-6 w-6" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: section.title })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: section.links.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: link.href,
              className: "text-[#474747] hover:text-[#e24e1b] transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300",
              children: [
                /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-[#e24e1b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" }),
                link.label
              ]
            }
          ) }, linkIndex)) }) })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-[#232323] to-[#474747] rounded-xl p-8 text-white text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Bereit für Compliance Excellence?" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-6", children: "Lassen Sie uns gemeinsam Ihre Compliance-Herausforderungen lösen." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "mailto:jayson.chen@marsstein.com", className: "flex items-center gap-2 text-white/80 hover:text-white transition-colors", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
          "jayson.chen@marsstein.com"
        ] }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            className: "bg-[#e24e1b] hover:bg-[#f97316] px-8 py-3 rounded-lg font-semibold transition-colors hover:scale-105 duration-200",
            children: "Kontakt aufnehmen"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-8" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#474747]", children: [
      /* @__PURE__ */ jsx("div", { children: "© 2025 Marsstein • Impressum • Datenschutz • AGB" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: sharedData.trustBadges.map((badge, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(badge.icon, { className: "h-3 w-3 text-[#e24e1b]" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs", children: badge.label })
      ] }, index)) })
    ] })
  ] }) });
};
const FooterVariantC = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-[#232323] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxs("svg", { className: "absolute top-0 left-0 w-full h-full opacity-10", viewBox: "0 0 1000 400", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "marsGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", style: { stopColor: "#e24e1b", stopOpacity: 0.3 } }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", style: { stopColor: "#f97316", stopOpacity: 0.1 } })
      ] }) }),
      /* @__PURE__ */ jsx("polygon", { points: "0,0 300,0 250,400 0,400", fill: "url(#marsGradient)" }),
      /* @__PURE__ */ jsx("polygon", { points: "700,0 1000,0 1000,400 750,400", fill: "url(#marsGradient)" }),
      /* @__PURE__ */ jsx("polygon", { points: "400,100 600,100 580,300 420,300", fill: "url(#marsGradient)" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-8 bg-gradient-to-r from-[#e24e1b]/20 to-[#f97316]/20 rounded-full blur-xl" }),
            /* @__PURE__ */ jsx(Link, { to: "/", className: "relative block", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/JLogoMarsstein.svg",
                alt: "Marsstein Logo",
                className: "h-12 w-auto mx-auto mb-4"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-[#e24e1b] to-[#f97316] bg-clip-text text-transparent mb-2", children: "Marsstein" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-white/80 font-light", children: "Compliance made simple" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16", children: [
          {
            title: "Compliance Solutions",
            sections: [
              { name: "Regulierungen", links: sharedData.regulierungLinks, icon: FileText },
              { name: "Zertifizierungen", links: sharedData.zertifizierungLinks, icon: ShieldCheck }
            ]
          },
          {
            title: "Tools & Knowledge",
            sections: [
              { name: "Tools & Services", links: sharedData.toolsLinks, icon: Wrench },
              { name: "Wissen & Guides", links: sharedData.wissenLinks, icon: BookOpen }
            ]
          }
        ].map((group, groupIndex) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -left-2 w-4 h-4 bg-[#e24e1b] transform rotate-45" }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-[#e24e1b] pl-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-8 text-white", children: group.title }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: group.sections.map((section, sectionIndex) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-lg", children: /* @__PURE__ */ jsx(section.icon, { className: "h-4 w-4 text-white" }) }),
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white/90 uppercase tracking-wide text-sm", children: section.name })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2 ml-6", children: section.links.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: link.href,
                  className: "text-sm text-white/70 hover:text-[#e24e1b] transition-colors block py-1 hover:translate-x-1 duration-200",
                  children: [
                    "▸ ",
                    link.label
                  ]
                }
              ) }, linkIndex)) })
            ] }, sectionIndex)) })
          ] })
        ] }, groupIndex)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-block relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-lg transform -rotate-1" }),
          /* @__PURE__ */ jsx("div", { className: "relative bg-[#232323] border-2 border-[#e24e1b] rounded-lg p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-[#e24e1b]" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:jayson.chen@marsstein.com", className: "text-white hover:text-[#e24e1b] transition-colors", children: "jayson.chen@marsstein.com" })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "bg-gradient-to-r from-[#e24e1b] to-[#f97316] px-6 py-3 rounded-lg text-white font-semibold hover:from-[#f97316] hover:to-[#e24e1b] transition-all duration-300 transform hover:scale-105",
                children: "Mission starten"
              }
            )
          ] }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-[#e24e1b]/30 py-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white/60", children: "© 2025 Marsstein • Securing the digital frontier" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6", children: sharedData.trustBadges.map((badge, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/60", children: [
          /* @__PURE__ */ jsx(badge.icon, { className: "h-4 w-4 text-[#e24e1b]" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs", children: badge.label })
        ] }, index)) })
      ] }) })
    ] })
  ] });
};
const FooterVariantD = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gradient-to-b from-white to-[#F5F6F8]", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block mb-6", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/JLogoMarsstein.svg",
            alt: "Marsstein Logo",
            className: "h-10 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
          }
        ) }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-light text-[#232323] mb-4 tracking-wide", children: "Compliance made simple" }),
        /* @__PURE__ */ jsx("div", { className: "w-24 h-px bg-gradient-to-r from-transparent via-[#e24e1b] to-transparent mx-auto" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16", children: [
          { title: "Regulierungen", links: sharedData.regulierungLinks },
          { title: "Zertifizierungen", links: sharedData.zertifizierungLinks },
          { title: "Tools & Services", links: sharedData.toolsLinks },
          { title: "Wissen & Guides", links: sharedData.wissenLinks }
        ].map((section, index) => /* @__PURE__ */ jsxs("div", { className: "group", children: [
          /* @__PURE__ */ jsx("div", { className: "border-l-2 border-[#e24e1b] pl-6 mb-6", children: /* @__PURE__ */ jsx("h3", { className: "text-[#232323] font-light text-lg tracking-[2px] uppercase", children: section.title }) }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: section.links.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: link.href,
              className: "text-[#474747] hover:text-[#e24e1b] transition-colors duration-300 text-sm font-light hover:font-normal leading-relaxed block",
              children: link.label
            }
          ) }, linkIndex)) })
        ] }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-light text-[#232323] mb-8 tracking-wide", children: "Lassen Sie uns sprechen" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-8", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:jayson.chen@marsstein.com",
                className: "flex items-center gap-3 text-[#474747] hover:text-[#e24e1b] transition-colors duration-300 font-light",
                children: [
                  /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }),
                  "jayson.chen@marsstein.com"
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "w-px h-6 bg-[#e24e1b]/30 hidden sm:block" }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/contact",
                className: "group relative overflow-hidden bg-[#e24e1b] text-white px-8 py-3 font-light tracking-wide hover:bg-[#232323] transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Beratung starten" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#232323] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 mb-16", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "border-l-2 border-[#e24e1b]/50 pl-6 mb-6", children: /* @__PURE__ */ jsx("h3", { className: "text-[#232323] font-light text-lg tracking-[2px] uppercase", children: "Branchen" }) }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: sharedData.branchenLinks.map((link, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: link.href,
                className: "text-[#474747] hover:text-[#e24e1b] transition-colors duration-300 text-sm font-light hover:font-normal leading-relaxed",
                children: link.label
              }
            ) }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "border-l-2 border-[#e24e1b]/50 pl-6 mb-6", children: /* @__PURE__ */ jsx("h3", { className: "text-[#232323] font-light text-lg tracking-[2px] uppercase", children: "Unternehmen" }) }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: sharedData.unternehmenLinks.map((link, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: link.href,
                className: "text-[#474747] hover:text-[#e24e1b] transition-colors duration-300 text-sm font-light hover:font-normal leading-relaxed",
                children: link.label
              }
            ) }, index)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-[#e24e1b]/20 py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#474747] font-light", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("span", { children: "© 2025 Marsstein" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "#", className: "hover:text-[#e24e1b] transition-colors", children: "Impressum" }),
          /* @__PURE__ */ jsx("span", { children: "•" }),
          /* @__PURE__ */ jsx(Link, { to: "#", className: "hover:text-[#e24e1b] transition-colors", children: "Datenschutz" }),
          /* @__PURE__ */ jsx("span", { children: "•" }),
          /* @__PURE__ */ jsx(Link, { to: "#", className: "hover:text-[#e24e1b] transition-colors", children: "AGB" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6", children: sharedData.trustBadges.map((badge, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity", children: [
        /* @__PURE__ */ jsx(badge.icon, { className: "h-3 w-3 text-[#e24e1b]" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs", children: badge.label })
      ] }, index)) })
    ] }) })
  ] }) });
};
const FooterTest = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#232323] text-white py-8 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-4", children: "Footer Design Varianten" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/80", children: "Verschiedene Design-Ansätze für den Marsstein Footer" })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "variant-a1", className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#F5F6F8] py-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#232323] mb-2", children: "Variante A1: Light Glassmorphism" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: "Weißer Hintergrund mit subtilen Glassmorphism-Karten und sanften Schatten" })
      ] }),
      /* @__PURE__ */ jsx(FooterVariantA1, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "variant-a2", className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#232323] text-white py-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Variante A2: White Frosted Glass" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80", children: "Premium Glassmorphism mit stärkeren Blur-Effekten und Hover-Animationen" })
      ] }),
      /* @__PURE__ */ jsx(FooterVariantA2, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "variant-a3", className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#F5F6F8] py-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#232323] mb-2", children: "Variante A3: Minimal Glass Premium" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: "Ultra-minimalistisch mit floating Orange-Elementen und Premium-Ästhetik" })
      ] }),
      /* @__PURE__ */ jsx(FooterVariantA3, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "variant-a4", className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#232323] text-white py-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Variante A4: Original Dark Glassmorphism" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80", children: "Dunkler Hintergrund mit Glassmorphism-Effekten (Original-Variante)" })
      ] }),
      /* @__PURE__ */ jsx(FooterVariantA4, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "variant-a5", className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white py-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "✨ Variante A5: Hybrid (A1 Logo + A2 Design)" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/90", children: "Perfekte Kombination: A1 Logo-Bereich mit A2 Premium Glassmorphism" })
      ] }),
      /* @__PURE__ */ jsx(FooterVariantA5, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "variant-b", className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#232323] text-white py-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Variante B: Interactive Card System" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80", children: "Interaktive Karten mit Hover-Animationen und Gradient-Headern" })
      ] }),
      /* @__PURE__ */ jsx(FooterVariantB, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "variant-c", className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#F5F6F8] py-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#232323] mb-2", children: "Variante C: Geometric Mars-Shield" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: "Mars-inspiriertes Design mit geometrischen Elementen und Shield-Motiven" })
      ] }),
      /* @__PURE__ */ jsx(FooterVariantC, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "variant-d", className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#232323] text-white py-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Variante D: Minimalist Premium" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80", children: "Clean, spacious Design mit subtilen Akzenten und Premium-Look" })
      ] }),
      /* @__PURE__ */ jsx(FooterVariantD, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: "fixed top-4 right-4 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white shadow-lg rounded-lg p-4 text-sm max-w-48", children: [
      /* @__PURE__ */ jsx("div", { className: "font-semibold text-[#232323] mb-3", children: "Design-Varianten:" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("a", { href: "#variant-a1", className: "block text-[#474747] hover:text-[#e24e1b] transition-colors", children: "A1: Light Glass" }),
        /* @__PURE__ */ jsx("a", { href: "#variant-a2", className: "block text-[#474747] hover:text-[#e24e1b] transition-colors", children: "A2: Frosted Glass" }),
        /* @__PURE__ */ jsx("a", { href: "#variant-a3", className: "block text-[#474747] hover:text-[#e24e1b] transition-colors", children: "A3: Minimal Premium" }),
        /* @__PURE__ */ jsx("a", { href: "#variant-a4", className: "block text-[#474747] hover:text-[#e24e1b] transition-colors", children: "A4: Dark Glass" }),
        /* @__PURE__ */ jsx("a", { href: "#variant-a5", className: "block text-[#e24e1b] font-semibold hover:text-[#f97316] transition-colors", children: "✨ A5: Hybrid" }),
        /* @__PURE__ */ jsxs("div", { className: "border-t pt-2 mt-2", children: [
          /* @__PURE__ */ jsx("a", { href: "#variant-b", className: "block text-[#474747] hover:text-[#e24e1b] transition-colors", children: "B: Card System" }),
          /* @__PURE__ */ jsx("a", { href: "#variant-c", className: "block text-[#474747] hover:text-[#e24e1b] transition-colors", children: "C: Geometric" }),
          /* @__PURE__ */ jsx("a", { href: "#variant-d", className: "block text-[#474747] hover:text-[#e24e1b] transition-colors", children: "D: Minimalist" })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  FooterTest as default
};
