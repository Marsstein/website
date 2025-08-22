import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { u as useLanguage } from "./useLanguage-BAIZ-FA5.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react";
import "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-slot";
const PricingContent = () => {
  const { t } = useLanguage();
  const plans = [
    {
      name: "Starter",
      popular: false,
      features: [
        "pricing_starter_feature_1",
        "pricing_starter_feature_2",
        "pricing_starter_feature_3"
      ]
    },
    {
      name: "Professional",
      popular: true,
      features: [
        "pricing_pro_feature_1",
        "pricing_pro_feature_2",
        "pricing_pro_feature_3",
        "pricing_pro_feature_4"
      ]
    },
    {
      name: "Enterprise",
      popular: false,
      features: [
        "pricing_enterprise_feature_1",
        "pricing_enterprise_feature_2",
        "pricing_enterprise_feature_3",
        "pricing_enterprise_feature_4",
        "pricing_enterprise_feature_5"
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-foreground mb-6", children: t("pricing_title") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8 max-w-3xl mx-auto", children: t("pricing_subtitle") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-16", children: plans.map((plan, index) => /* @__PURE__ */ jsxs(Card, { className: `relative p-8 ${plan.popular ? "border-primary shadow-lg" : "border-muted"}`, children: [
      plan.popular && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsxs("div", { className: "bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Star, { className: "h-4 w-4" }),
        t("pricing_popular")
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-primary mb-2", children: plan.name }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-foreground mb-2", children: t("pricing_coming_soon_price") }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: t("pricing_coming_soon_desc") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-8", children: plan.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: t(feature) })
      ] }, featureIndex)) }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "block", children: /* @__PURE__ */ jsx(
        Button,
        {
          className: `w-full ${plan.popular ? "bg-gradient-primary hover:opacity-90" : ""}`,
          variant: plan.popular ? "default" : "outline",
          children: t("pricing_request_info")
        }
      ) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center bg-muted/50 rounded-lg p-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: t("pricing_custom_title") }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: t("pricing_custom_desc") }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-gradient-primary hover:opacity-90", children: t("pricing_contact_sales") }) })
    ] })
  ] });
};
const Pricing = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(PricingContent, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Pricing as default
};
