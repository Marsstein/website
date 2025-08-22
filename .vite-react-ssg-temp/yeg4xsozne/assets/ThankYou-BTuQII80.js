import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useLanguage } from "./useLanguage-BAIZ-FA5.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { CheckCircle, Monitor, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "react";
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
import "@radix-ui/react-slot";
const ThankYou = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Danke – Ihre Anfrage wurde erfolgreich übermittelt",
        description: "Vielen Dank für Ihre Anfrage. Unser Compliance-Team meldet sich innerhalb von 24 Stunden bei Ihnen. Entdecken Sie jetzt unsere Demo oder weitere Ressourcen.",
        canonical: "/thank-you",
        keywords: "danke, anfrage bestätigung, marsstein kontakt, compliance demo"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto text-center", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-lg", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-8 h-8 text-green-600" }) }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-3xl font-bold text-foreground mb-2", children: t("thank_you_title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: t("thank_you_subtitle") })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/50 rounded-lg p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: t("thank_you_next_steps") }),
          /* @__PURE__ */ jsxs("ul", { className: "text-left space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-600 flex-shrink-0" }),
              t("thank_you_step_1")
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-600 flex-shrink-0" }),
              t("thank_you_step_2")
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-600 flex-shrink-0" }),
              t("thank_you_step_3")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t pt-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground mb-4", children: t("thank_you_demo_question") }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: t("thank_you_demo_description") }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "flex-1 sm:flex-initial", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "w-full bg-gradient-primary hover:opacity-90 text-white", children: [
              /* @__PURE__ */ jsx(Monitor, { className: "w-5 h-5 mr-2" }),
              t("thank_you_view_demo"),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/", className: "flex-1 sm:flex-initial", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "lg", className: "w-full", children: [
              /* @__PURE__ */ jsx(Home, { className: "w-5 h-5 mr-2" }),
              t("thank_you_back_home")
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-primary/5 rounded-lg p-4 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            t("thank_you_contact_info"),
            ":"
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          "📧 contact@marsstein.com",
          /* @__PURE__ */ jsx("br", {}),
          "📞 +41 44 123 45 67",
          /* @__PURE__ */ jsx("br", {}),
          "🕒 ",
          t("thank_you_response_time")
        ] }) })
      ] })
    ] }) }) })
  ] });
};
export {
  ThankYou,
  ThankYou as default
};
