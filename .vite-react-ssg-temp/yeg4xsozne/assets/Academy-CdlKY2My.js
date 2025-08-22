import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { u as useLanguage } from "./useLanguage-BAIZ-FA5.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { BookOpen, Users, Award, Clock } from "lucide-react";
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
const AcademyContent = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: BookOpen,
      titleKey: "academy_feature_1_title",
      descKey: "academy_feature_1_desc"
    },
    {
      icon: Users,
      titleKey: "academy_feature_2_title",
      descKey: "academy_feature_2_desc"
    },
    {
      icon: Award,
      titleKey: "academy_feature_3_title",
      descKey: "academy_feature_3_desc"
    },
    {
      icon: Clock,
      titleKey: "academy_feature_4_title",
      descKey: "academy_feature_4_desc"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-foreground mb-6", children: t("academy_title") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8 max-w-3xl mx-auto", children: t("academy_subtitle") }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-gradient-primary hover:opacity-90", children: t("academy_cta") }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: features.map((feature, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center border-muted", children: [
      /* @__PURE__ */ jsx(feature.icon, { className: "h-12 w-12 text-primary mx-auto mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: t(feature.titleKey) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: t(feature.descKey) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center bg-muted/50 rounded-lg p-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: t("academy_coming_soon") }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: t("academy_coming_soon_desc") }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("academy_notify_me") }) })
    ] })
  ] });
};
const Academy = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(AcademyContent, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Academy as default
};
