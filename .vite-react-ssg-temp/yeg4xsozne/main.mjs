import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { createContext, useState, useEffect, Component, lazy } from "react";
import { useLocation, Outlet } from "react-router-dom";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const LanguageContext = createContext(void 0);
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_frameworks: "Frameworks",
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_academy: "Academy",
    nav_dsgvo: "GDPR Compliance",
    nav_iso27001: "ISO 27001",
    nav_ai_act: "EU AI Act",
    nav_tools: "Tools",
    nav_resources: "Assessment Center",
    nav_industries: "Industries",
    nav_login: "Login",
    nav_contact: "Contact",
    nav_demo: "Request Demo",
    // Contact Page
    contact_title: "Your reliable partner for Compliance and Cybersecurity",
    contact_subtitle: "Thank you for considering Marsstein - the comprehensive compliance solution trusted by over 1,500 companies across Europe.",
    contact_form_title: "Contact Information",
    contact_first_name: "First Name",
    contact_last_name: "Last Name",
    contact_email: "Business Email",
    contact_phone: "Phone",
    contact_company_info: "Company Information",
    contact_company: "Company",
    contact_job_title: "Job Title",
    contact_employees: "Number of Employees",
    contact_employees_placeholder: "Please select",
    contact_message: "Message",
    contact_message_placeholder: "Tell us more about your compliance challenges...",
    contact_newsletter: "I would like to receive the Marsstein newsletter with compliance news, new blog articles and updates about Marsstein and its products. I can unsubscribe at any time.",
    contact_privacy: "Marsstein contacts me to provide me with an offer. Our privacy policy applies.",
    contact_submit: "Send Request",
    contact_success: "Successfully sent!",
    contact_success_message: "Thank you for your inquiry. We will get back to you shortly.",
    contact_error: "Error",
    contact_privacy_required: "Please agree to the privacy policy.",
    contact_why_marsstein: "Why Marsstein?",
    contact_benefit_1_title: "All-in-One Compliance Solutions for GDPR, NIS2, ISO 27001 and more",
    contact_benefit_1_desc: "Comprehensive compliance coverage in a single platform",
    contact_benefit_2_title: "Save Time and Money",
    contact_benefit_2_desc: "With modern, efficient compliance management tools",
    contact_benefit_3_title: "Avoid Penalties and Build Trust",
    contact_benefit_3_desc: "By getting expert advice and acting legally compliant",
    contact_address: "Konstanz, Germany",
    contact_hours: "Mon-Fri 9:00-18:00",
    // Academy Page
    academy_title: "Marsstein Academy",
    academy_subtitle: "Expand your knowledge of data protection, compliance and cybersecurity with our expert courses and certifications.",
    academy_cta: "Request Early Access",
    academy_feature_1_title: "Expert Courses",
    academy_feature_1_desc: "Courses developed by industry experts",
    academy_feature_2_title: "Team Training",
    academy_feature_2_desc: "Training for entire teams and organizations",
    academy_feature_3_title: "Certifications",
    academy_feature_3_desc: "Recognized compliance certifications",
    academy_feature_4_title: "Flexible Learning",
    academy_feature_4_desc: "Learn at your own pace",
    academy_coming_soon: "Coming Soon",
    academy_coming_soon_desc: "Our Academy is under development. Sign up to be notified first.",
    academy_notify_me: "Notify Me",
    // Pricing Page
    pricing_title: "Transparent pricing, flexible plans",
    pricing_subtitle: "Choose the plan that best fits your business. All plans include our world-class support.",
    pricing_popular: "Popular",
    pricing_coming_soon_price: "Coming Soon",
    pricing_coming_soon_desc: "Pricing will be announced shortly",
    pricing_request_info: "Request Information",
    pricing_starter_feature_1: "Basic features to get started with compliance",
    pricing_starter_feature_2: "Limited legal support",
    pricing_starter_feature_3: "Creation of initial documents",
    pricing_pro_feature_1: "Everything in Starter plus data protection training",
    pricing_pro_feature_2: "Fast legal support",
    pricing_pro_feature_3: "Documentation always up to date",
    pricing_pro_feature_4: "Advanced compliance tools",
    pricing_enterprise_feature_1: "All Professional features plus Vendor Risk Management",
    pricing_enterprise_feature_2: "Unlimited top-tier legal support",
    pricing_enterprise_feature_3: "All administrative features",
    pricing_enterprise_feature_4: "Dedicated account manager",
    pricing_enterprise_feature_5: "Custom SLAs and agreements",
    pricing_custom_title: "Need a custom solution?",
    pricing_custom_desc: "Contact our sales team for a tailored enterprise solution.",
    pricing_contact_sales: "Contact Sales",
    // Hero Section
    hero_headline: "GDPR & ISO27001 Compliance Made Simple",
    hero_subheadline: "Automated privacy audits, secure document management, and continuous compliance monitoring for Germany, Switzerland, and Europe.",
    hero_cta: "Start Free Audit",
    hero_cta_secondary: "Book Demo",
    hero_trust: "Professional compliance solutions for Europe",
    // Features
    features_title: "Everything you need for compliance",
    feature_audit_title: "AI-Powered Privacy Audit",
    feature_audit_desc: "Upload your policies and get instant GDPR compliance analysis with actionable recommendations.",
    feature_vault_title: "Secure Document Vault",
    feature_vault_desc: "EU/CH-hosted encrypted storage for all your compliance documents with role-based access control.",
    feature_academy_title: "Compliance Academy",
    feature_academy_desc: "Interactive learning platform to keep your team updated on privacy laws and best practices.",
    feature_reports_title: "Expert-Reviewed Reports",
    feature_reports_desc: "AI analysis backed by legal experts for comprehensive compliance reporting.",
    feature_teams_title: "Team Collaboration",
    feature_teams_desc: "Role-based access, multi-tenancy, and team workflows for enterprise compliance management.",
    feature_pricing_title: "Transparent Pricing",
    feature_pricing_desc: "Flexible plans with no hidden costs and no vendor lock-in. Scale as you grow.",
    // Benefits
    benefits_title: "Why choose Marsstein?",
    benefit_risk_title: "Minimize Risk",
    benefit_risk_desc: "Proactive compliance monitoring reduces legal risks and potential fines.",
    benefit_certainty_title: "Legal Certainty",
    benefit_certainty_desc: "Expert-backed recommendations ensure compliance with current regulations.",
    benefit_consulting_title: "Expert Consulting",
    benefit_consulting_desc: "Access to certified privacy professionals when you need them most.",
    benefit_logs_title: "Audit Trails",
    benefit_logs_desc: "Complete audit logs for compliance documentation and regulatory reporting.",
    benefit_freedom_title: "No Lock-in",
    benefit_freedom_desc: "Export your data anytime. Your compliance journey, your control.",
    benefit_future_title: "Future-Proof",
    benefit_future_desc: "Stay ahead of evolving privacy regulations with automatic updates.",
    // How it works
    how_title: "How it works",
    how_step1_title: "Get to Know Us",
    how_step1_desc: "Schedule a consultation to understand your specific compliance needs.",
    how_step2_title: "Quick Website Check",
    how_step2_desc: "Free initial scan of your website and privacy policies.",
    how_step3_title: "AI Audit",
    how_step3_desc: "Comprehensive AI-powered analysis of your compliance posture.",
    how_step4_title: "Continuous Monitoring",
    how_step4_desc: "Ongoing compliance monitoring and automatic updates.",
    // Testimonials
    testimonials_title: "What our customers say",
    // FAQ
    faq_title: "Frequently Asked Questions",
    faq_q1: "What regulations does Marsstein cover?",
    faq_a1: "We specialize in GDPR, ISO27001 and EU AI Act compliance across Germany, Switzerland, and Europe.",
    faq_q2: "How secure is the document vault?",
    faq_a2: "All documents are encrypted and stored exclusively in EU/CH data centers with enterprise-grade security measures.",
    faq_q3: "Can I integrate with existing systems?",
    faq_a3: "Yes, we offer APIs and integrations with popular business tools and document management systems.",
    faq_q4: "What support do you provide?",
    faq_a4: "We provide 24/7 technical support and access to certified privacy professionals for legal guidance.",
    // Newsletter
    newsletter_title: "Stay Updated on Compliance",
    newsletter_desc: "Get the latest updates on privacy regulations and compliance best practices.",
    newsletter_placeholder: "Your email address",
    newsletter_cta: "Subscribe",
    // Footer
    footer_product: "Product",
    footer_company: "Company",
    footer_support: "Support",
    footer_legal: "Legal",
    // Thank You Page
    thank_you_title: "Thank You for Your Interest!",
    thank_you_subtitle: "We have received your request and will contact you within 24 hours.",
    thank_you_next_steps: "What happens next?",
    thank_you_step_1: "Our compliance experts will review your request",
    thank_you_step_2: "We will contact you within 24 hours to schedule a consultation",
    thank_you_step_3: "You will receive a personalized compliance assessment proposal",
    thank_you_demo_question: "Would you like to see a demo of our dashboard?",
    thank_you_demo_description: "Experience our compliance management platform with interactive demo featuring real compliance scenarios.",
    thank_you_view_demo: "View Interactive Demo",
    thank_you_back_home: "Back to Home",
    thank_you_contact_info: "Need immediate assistance?",
    thank_you_response_time: "Response time: Within 24 hours",
    // Dashboard Navigation
    dashboard_nav_dashboard: "Dashboard",
    dashboard_nav_documents: "Documents",
    dashboard_nav_ai_check: "AI Compliance Check",
    dashboard_nav_audits: "Audits & Reports",
    dashboard_nav_policies: "Policies",
    dashboard_nav_frameworks: "Frameworks",
    dashboard_nav_integrations: "Integrations",
    dashboard_nav_teams: "Teams",
    dashboard_nav_settings: "Settings",
    dashboard_nav_help: "Help",
    // Dashboard Main
    dashboard_compliance_score: "Overall Compliance Score",
    dashboard_compliant: "Compliant",
    dashboard_at_risk: "At Risk",
    dashboard_warning: "Warning",
    dashboard_framework_compliance: "Framework Compliance",
    dashboard_ai_compliance_check: "AI Compliance Check",
    dashboard_no_critical_issues: "No critical issues found",
    dashboard_run_check: "Run Check",
    dashboard_documents_evidence: "Documents & Evidence",
    dashboard_recent_uploads: "Recent Uploads",
    dashboard_quick_upload: "Quick Upload",
    dashboard_upcoming_audits: "Upcoming Audits & Tasks",
    dashboard_next_audit: "Next Audit",
    dashboard_risk_monitoring: "Risk Monitoring",
    dashboard_open_risks: "Open Risks by Severity",
    dashboard_integrations_health: "Integrations Health",
    dashboard_user_team_overview: "User/Team Overview",
    dashboard_active_users: "Active Users",
    dashboard_recent_activity: "Recent Activity",
    dashboard_approved: "Approved",
    dashboard_pending: "Pending",
    dashboard_missing: "Missing",
    dashboard_download_dpia: "Download DPIA",
    dashboard_export_report: "Export Compliance Report",
    dashboard_legal_basis: "Legal Basis Overview",
    dashboard_critical: "Critical",
    dashboard_high: "High",
    dashboard_medium: "Medium",
    dashboard_low: "Low",
    dashboard_controls_passed: "controls passed",
    dashboard_warnings: "warnings",
    dashboard_issues: "issues"
  },
  de: {
    // Navigation
    nav_home: "Startseite",
    nav_frameworks: "Rahmenwerke",
    nav_features: "Funktionen",
    nav_pricing: "Preise",
    nav_academy: "Akademie",
    nav_dsgvo: "DSGVO Compliance",
    nav_iso27001: "ISO 27001",
    nav_ai_act: "EU AI Act",
    nav_tools: "Tools",
    nav_resources: "Assessment-Center",
    nav_industries: "Branchen",
    nav_login: "Anmelden",
    nav_contact: "Kontakt",
    nav_demo: "Demo anfordern",
    // Contact Page
    contact_title: "Dein zuverlässiger Partner für Compliance und Cybersicherheit",
    contact_subtitle: "Vielen Dank, dass du dich mit Marsstein auseinandersetzen möchtest - der umfassenden Compliance-Lösung für professionelle Unternehmen in Europa.",
    contact_form_title: "Kontaktinfos",
    contact_first_name: "Vorname",
    contact_last_name: "Nachname",
    contact_email: "Geschäftliche E-Mail",
    contact_phone: "Telefon",
    contact_company_info: "Firmeninformationen",
    contact_company: "Firma",
    contact_job_title: "Jobtitel",
    contact_employees: "Anzahl der Mitarbeiter",
    contact_employees_placeholder: "Bitte auswählen",
    contact_message: "Nachricht",
    contact_message_placeholder: "Erzählen Sie uns mehr über Ihre Compliance-Herausforderungen...",
    contact_newsletter: "Ich möchte den Newsletter von Marsstein mit Compliance-News, neuen Blog-Artikeln und Neuigkeiten über Marsstein und seine Produkte erhalten. Ich kann mich jederzeit wieder abmelden.",
    contact_privacy: "Marsstein kontaktiert mich, um mir ein Angebot zu unterbreiten. Unsere Datenschutzbestimmungen finden Anwendung.",
    contact_submit: "Anfrage senden",
    contact_success: "Erfolgreich gesendet!",
    contact_success_message: "Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.",
    contact_error: "Fehler",
    contact_privacy_required: "Bitte stimmen Sie den Datenschutzbestimmungen zu.",
    contact_why_marsstein: "Warum Marsstein?",
    contact_benefit_1_title: "All-in-One-Compliance-Lösungen für DSGVO, NIS2, ISO 27001 und mehr",
    contact_benefit_1_desc: "Umfassende Compliance-Abdeckung in einer einzigen Plattform",
    contact_benefit_2_title: "Spare Zeit und Geld",
    contact_benefit_2_desc: "Mit modernen, effizienten Tools zur Compliance-Verwaltung",
    contact_benefit_3_title: "Vermeide Strafen und baue Vertrauen auf",
    contact_benefit_3_desc: "Indem du dich von Experten beraten lässt und rechtssicher agierst",
    contact_address: "Bodensee, Deutschland",
    contact_hours: "Mo-Fr 9:00-18:00",
    // Academy Page
    academy_title: "Marsstein Akademie",
    academy_subtitle: "Erweitere dein Wissen über Datenschutz, Compliance und Cybersicherheit mit unseren Expertenkursen und Zertifizierungen.",
    academy_cta: "Frühzugang anfordern",
    academy_feature_1_title: "Expertenkurse",
    academy_feature_1_desc: "Von Branchenexperten entwickelte Kurse",
    academy_feature_2_title: "Team-Training",
    academy_feature_2_desc: "Schulungen für ganze Teams und Organisationen",
    academy_feature_3_title: "Zertifizierungen",
    academy_feature_3_desc: "Anerkannte Compliance-Zertifizierungen",
    academy_feature_4_title: "Flexibles Lernen",
    academy_feature_4_desc: "Lerne in deinem eigenen Tempo",
    academy_coming_soon: "Bald verfügbar",
    academy_coming_soon_desc: "Unsere Academy befindet sich in der Entwicklung. Melde dich an, um als Erster benachrichtigt zu werden.",
    academy_notify_me: "Benachrichtigen",
    // Pricing Page
    pricing_title: "Flexible Pläne für jedes Unternehmen",
    pricing_subtitle: "Wähle den Plan, der am besten zu deinem Unternehmen passt. Alle Pläne beinhalten unseren erstklassigen Support.",
    pricing_popular: "Beliebt",
    pricing_coming_soon_price: "Bald verfügbar",
    pricing_coming_soon_desc: "Preise werden in Kürze bekannt gegeben",
    pricing_request_info: "Informationen anfordern",
    pricing_starter_feature_1: "Grundlegende Features, um mit Compliance zu starten",
    pricing_starter_feature_2: "Begrenzte rechtliche Unterstützung",
    pricing_starter_feature_3: "Erstellung initialer Dokumente",
    pricing_pro_feature_1: "Alles aus Starter plus Datenschutz-Schulungen",
    pricing_pro_feature_2: "Schnelle rechtliche Unterstützung",
    pricing_pro_feature_3: "Dokumentation stets auf dem neuesten Stand",
    pricing_pro_feature_4: "Erweiterte Compliance-Tools",
    pricing_enterprise_feature_1: "Alle Features aus Professional plus Vendor Risk Management",
    pricing_enterprise_feature_2: "Unbegrenzter rechtlicher Support auf Spitzenniveau",
    pricing_enterprise_feature_3: "Alle administrativen Features",
    pricing_enterprise_feature_4: "Dedizierter Account Manager",
    pricing_enterprise_feature_5: "Individuelle SLAs und Vereinbarungen",
    pricing_custom_title: "Individuelle Lösung benötigt?",
    pricing_custom_desc: "Kontaktiere unser Sales-Team für eine maßgeschneiderte Enterprise-Lösung.",
    pricing_contact_sales: "Sales kontaktieren",
    // Hero Section
    hero_headline: "DSGVO & ISO27001 Compliance leicht gemacht",
    hero_subheadline: "Automatisierte Datenschutz-Audits, sichere Dokumentenverwaltung und kontinuierliche Compliance-Überwachung für Deutschland, Schweiz und Europa.",
    hero_cta: "Kostenloses Audit starten",
    hero_cta_secondary: "Demo buchen",
    hero_trust: "Professionelle Compliance-Lösungen für Europa",
    // Features
    features_title: "Alles was Sie für Compliance brauchen",
    feature_audit_title: "KI-gestütztes Datenschutz-Audit",
    feature_audit_desc: "Laden Sie Ihre Richtlinien hoch und erhalten Sie sofort eine DSGVO-Compliance-Analyse mit umsetzbaren Empfehlungen.",
    feature_vault_title: "Sichere Dokumententresor",
    feature_vault_desc: "EU/CH-gehostete verschlüsselte Speicherung für alle Compliance-Dokumente mit rollenbasierter Zugriffskontrolle.",
    feature_academy_title: "Compliance-Akademie",
    feature_academy_desc: "Interaktive Lernplattform, um Ihr Team über Datenschutzgesetze und Best Practices auf dem Laufenden zu halten.",
    feature_reports_title: "Expertengeprüfte Berichte",
    feature_reports_desc: "KI-Analyse unterstützt durch Rechtsexperten für umfassende Compliance-Berichterstattung.",
    feature_teams_title: "Team-Zusammenarbeit",
    feature_teams_desc: "Rollenbasierter Zugriff, Mandantenfähigkeit und Team-Workflows für Enterprise-Compliance-Management.",
    feature_pricing_title: "Flexible Lösungen",
    feature_pricing_desc: "Flexible Pläne ohne versteckte Kosten und ohne Vendor-Lock-in. Skalieren Sie nach Bedarf.",
    // Benefits
    benefits_title: "Warum Marsstein wählen?",
    benefit_risk_title: "Risiko minimieren",
    benefit_risk_desc: "Proaktive Compliance-Überwachung reduziert Rechtsrisiken und potenzielle Bußgelder.",
    benefit_certainty_title: "Rechtssicherheit",
    benefit_certainty_desc: "Expertengestützte Empfehlungen gewährleisten Compliance mit aktuellen Vorschriften.",
    benefit_consulting_title: "Expertenberatung",
    benefit_consulting_desc: "Zugang zu zertifizierten Datenschutzfachleuten, wenn Sie sie am meisten brauchen.",
    benefit_logs_title: "Audit-Protokolle",
    benefit_logs_desc: "Vollständige Audit-Protokolle für Compliance-Dokumentation und behördliche Berichterstattung.",
    benefit_freedom_title: "Keine Bindung",
    benefit_freedom_desc: "Exportieren Sie Ihre Daten jederzeit. Ihre Compliance-Reise, Ihre Kontrolle.",
    benefit_future_title: "Zukunftssicher",
    benefit_future_desc: "Bleiben Sie den sich entwickelnden Datenschutzbestimmungen voraus mit automatischen Updates.",
    // How it works
    how_title: "So funktioniert es",
    how_step1_title: "Lernen Sie uns kennen",
    how_step1_desc: "Terminieren Sie eine Beratung, um Ihre spezifischen Compliance-Anforderungen zu verstehen.",
    how_step2_title: "Schneller Website-Check",
    how_step2_desc: "Kostenloser Erstcheck Ihrer Website und Datenschutzrichtlinien.",
    how_step3_title: "KI-Audit",
    how_step3_desc: "Umfassende KI-gestützte Analyse Ihrer Compliance-Situation.",
    how_step4_title: "Kontinuierliche Überwachung",
    how_step4_desc: "Laufende Compliance-Überwachung und automatische Updates.",
    // Testimonials
    testimonials_title: "Das sagen unsere Kunden",
    // FAQ
    faq_title: "Häufig gestellte Fragen",
    faq_q1: "Welche Vorschriften deckt Marsstein ab?",
    faq_a1: "Wir spezialisieren uns auf DSGVO, ISO27001 und EU AI Act Compliance in Deutschland, der Schweiz und Europa.",
    faq_q2: "Wie sicher ist der Dokumententresor?",
    faq_a2: "Alle Dokumente sind verschlüsselt und werden ausschließlich in EU/CH-Rechenzentren mit Enterprise-Sicherheitsmaßnahmen gespeichert.",
    faq_q3: "Kann ich mit bestehenden Systemen integrieren?",
    faq_a3: "Ja, wir bieten APIs und Integrationen mit beliebten Business-Tools und Dokumentenmanagementsystemen.",
    faq_q4: "Welchen Support bieten Sie?",
    faq_a4: "Wir bieten 24/7 technischen Support und Zugang zu zertifizierten Datenschutzfachleuten für rechtliche Beratung.",
    // Newsletter
    newsletter_title: "Bleiben Sie über Compliance informiert",
    newsletter_desc: "Erhalten Sie die neuesten Updates zu Datenschutzbestimmungen und Compliance-Best-Practices.",
    newsletter_placeholder: "Ihre E-Mail-Adresse",
    newsletter_cta: "Abonnieren",
    // Footer
    footer_product: "Produkt",
    footer_company: "Unternehmen",
    footer_support: "Support",
    footer_legal: "Rechtliches",
    // Thank You Page
    thank_you_title: "Vielen Dank für Ihr Interesse!",
    thank_you_subtitle: "Wir haben Ihre Anfrage erhalten und werden Sie innerhalb von 24 Stunden kontaktieren.",
    thank_you_next_steps: "Was passiert als nächstes?",
    thank_you_step_1: "Unsere Compliance-Experten werden Ihre Anfrage prüfen",
    thank_you_step_2: "Wir kontaktieren Sie innerhalb von 24 Stunden, um eine Beratung zu vereinbaren",
    thank_you_step_3: "Sie erhalten einen personalisierten Compliance-Assessment-Vorschlag",
    thank_you_demo_question: "Möchten Sie eine Demo unseres Dashboards sehen?",
    thank_you_demo_description: "Erleben Sie unsere Compliance-Management-Plattform mit einer interaktiven Demo mit echten Compliance-Szenarien.",
    thank_you_view_demo: "Interaktive Demo ansehen",
    thank_you_back_home: "Zurück zur Startseite",
    thank_you_contact_info: "Benötigen Sie sofortige Hilfe?",
    thank_you_response_time: "Antwortzeit: Innerhalb von 24 Stunden",
    // Dashboard Navigation
    dashboard_nav_dashboard: "Dashboard",
    dashboard_nav_documents: "Dokumente",
    dashboard_nav_ai_check: "KI Compliance Prüfung",
    dashboard_nav_audits: "Audits & Berichte",
    dashboard_nav_policies: "Richtlinien",
    dashboard_nav_frameworks: "Frameworks",
    dashboard_nav_integrations: "Integrationen",
    dashboard_nav_teams: "Teams",
    dashboard_nav_settings: "Einstellungen",
    dashboard_nav_help: "Hilfe",
    // Dashboard Main
    dashboard_compliance_score: "Gesamt Compliance Score",
    dashboard_compliant: "Konform",
    dashboard_at_risk: "Risiko",
    dashboard_warning: "Warnung",
    dashboard_framework_compliance: "Framework Compliance",
    dashboard_ai_compliance_check: "KI Compliance Prüfung",
    dashboard_no_critical_issues: "Keine kritischen Probleme gefunden",
    dashboard_run_check: "Prüfung starten",
    dashboard_documents_evidence: "Dokumente & Nachweise",
    dashboard_recent_uploads: "Aktuelle Uploads",
    dashboard_quick_upload: "Schnell-Upload",
    dashboard_upcoming_audits: "Anstehende Audits & Aufgaben",
    dashboard_next_audit: "Nächstes Audit",
    dashboard_risk_monitoring: "Risiko-Überwachung",
    dashboard_open_risks: "Offene Risiken nach Schweregrad",
    dashboard_integrations_health: "Integration Status",
    dashboard_user_team_overview: "Benutzer/Team Übersicht",
    dashboard_active_users: "Aktive Benutzer",
    dashboard_recent_activity: "Letzte Aktivitäten",
    dashboard_approved: "Genehmigt",
    dashboard_pending: "Ausstehend",
    dashboard_missing: "Fehlend",
    dashboard_download_dpia: "DSFA herunterladen",
    dashboard_export_report: "Compliance-Bericht exportieren",
    dashboard_legal_basis: "Rechtsgrundlagen Übersicht",
    dashboard_critical: "Kritisch",
    dashboard_high: "Hoch",
    dashboard_medium: "Mittel",
    dashboard_low: "Niedrig",
    dashboard_controls_passed: "Kontrollen bestanden",
    dashboard_warnings: "Warnungen",
    dashboard_issues: "Probleme"
  }
};
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("marsstein-language");
      return saved === "en" || saved === "de" ? saved : "en";
    }
    return "en";
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("marsstein-language", language);
    }
  }, [language]);
  const t = (key) => {
    return translations[language][key] || key;
  };
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { language, setLanguage, t }, children });
};
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Something went wrong" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "We apologize for the inconvenience. Please try refreshing the page." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => window.location.reload(),
            className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
            children: "Refresh Page"
          }
        )
      ] }) });
    }
    return this.props.children;
  }
}
const queryClient = new QueryClient();
function Layout() {
  return /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(ErrorBoundary, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Toaster$1, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] }) }) }) }) });
}
const Index = lazy(() => import("./assets/Index-DwPNHuP3.js"));
const Home = lazy(() => import("./assets/Home-DdvmHMDo.js"));
const Contact = lazy(() => import("./assets/Contact-B903yWck.js"));
const ContactPage = lazy(() => import("./assets/ContactPage-Cg7tPnC9.js"));
const Academy = lazy(() => import("./assets/Academy-CdlKY2My.js"));
const AcademyPage = lazy(() => import("./assets/AcademyPage-CECZadiN.js"));
const Pricing = lazy(() => import("./assets/Pricing-AnsTdaJr.js"));
const PricingPage = lazy(() => import("./assets/PricingPage-Drm1Rje0.js"));
const Dashboard = lazy(() => import("./assets/Dashboard-CupumA6p.js"));
const DashboardPage = lazy(() => import("./assets/DashboardPage-CQCANeVN.js"));
const ThankYou = lazy(() => import("./assets/ThankYou-BTuQII80.js"));
const NotFound = lazy(() => import("./assets/NotFound-7OFxWZTj.js"));
const Impressum = lazy(() => import("./assets/Impressum-B8Pb8dY5.js"));
const Datenschutz = lazy(() => import("./assets/Datenschutz-BDsukf4U.js"));
const Resources = lazy(() => import("./assets/Resources-CJY2m3qV.js").then((m) => ({ default: m.Resources })));
const DSGVOComplianceChecklist = lazy(() => import("./assets/DSGVOComplianceChecklist-3BzUDeIh.js").then((m) => ({ default: m.DSGVOComplianceChecklist })));
const DataPrivacyReadinessAssessment = lazy(() => import("./assets/DataPrivacyReadinessAssessment-CRrvg2RG.js").then((m) => ({ default: m.DataPrivacyReadinessAssessment })));
const BreachResponseChecklist = lazy(() => import("./assets/BreachResponseChecklist-BRPGwcu2.js").then((m) => ({ default: m.BreachResponseChecklist })));
const CookieComplianceAudit = lazy(() => import("./assets/CookieComplianceAudit-BEhIzF3u.js").then((m) => ({ default: m.CookieComplianceAudit })));
const VendorAssessmentTemplate = lazy(() => import("./assets/VendorAssessmentTemplate-CKsqcZyr.js").then((m) => ({ default: m.VendorAssessmentTemplate })));
const AIRiskAssessment = lazy(() => import("./assets/AIRiskAssessment-FDaT9nXU.js"));
const AlgorithmicImpactAssessment = lazy(() => import("./assets/AlgorithmicImpactAssessment-5-sKQ0RV.js"));
const AIGovernanceCheck = lazy(() => import("./assets/AIGovernanceCheck-Ck3mWG5M.js"));
const DsgvoCompliance = lazy(() => import("./assets/DsgvoCompliance-e1ffZmor.js"));
const Iso27001Compliance = lazy(() => import("./assets/Iso27001Compliance-DiISmFAO.js"));
const EuAiActCompliance = lazy(() => import("./assets/EuAiActCompliance-CnNeEgWa.js"));
const Soc2Compliance = lazy(() => import("./assets/Soc2Compliance-DaIOLsiF.js"));
const Iso27017Compliance = lazy(() => import("./assets/Iso27017Compliance-CmmbW-4D.js"));
const Iso27018Compliance = lazy(() => import("./assets/Iso27018Compliance-tL2eLhI-.js"));
const TisaxCompliance = lazy(() => import("./assets/TisaxCompliance-BtMousnx.js"));
const Nis2Compliance = lazy(() => import("./assets/Nis2Compliance-vNQ2L8PG.js"));
const HinweisgeberschutzCompliance = lazy(() => import("./assets/HinweisgeberschutzCompliance-BHI9BSDl.js"));
const GeldwaeschegesetzCompliance = lazy(() => import("./assets/GeldwaeschegesetzCompliance-DstsHvHB.js"));
const Tools = lazy(() => import("./assets/Tools-Dk80cEd_.js"));
const CookieManagementTool = lazy(() => import("./assets/CookieManagementTool-DrNKVQBg.js"));
const WhistleblowerSystemTool = lazy(() => import("./assets/WhistleblowerSystemTool-js5cTQqL.js"));
const CookieManagementToolProduct = lazy(() => import("./assets/CookieManagementToolProduct-DSaBsCMs.js"));
const WhistleblowerSystemToolProduct = lazy(() => import("./assets/WhistleblowerSystemToolProduct-LV0XDOAF.js"));
const DsgvoEmailTemplateGenerator = lazy(() => import("./assets/DsgvoEmailTemplateGenerator-B8MnE2L8.js"));
const DsgvoComplianceScorecard = lazy(() => import("./assets/DsgvoComplianceScorecard-gLBju-Zz.js"));
const ComplianceAIAssistant = lazy(() => import("./assets/ComplianceAIAssistant-DS2UdPnf.js"));
const Knowledge = lazy(() => import("./assets/Knowledge-B8vX6XbV.js"));
const DsgvoGuides = lazy(() => import("./assets/DsgvoGuides-Byrvo6LP.js"));
const ComplianceFrameworks = lazy(() => import("./assets/ComplianceFrameworks-C75WwyXK.js"));
const RiskManagement = lazy(() => import("./assets/RiskManagement-Dsgh-x4o.js"));
const Iso27001Guide = lazy(() => import("./assets/Iso27001Guide-N678ahM-.js"));
const Soc2Guide = lazy(() => import("./assets/Soc2Guide-BEBpnTSk.js"));
const EuAiActGuide = lazy(() => import("./assets/EuAiActGuide-DzehkQM5.js"));
const Nis2Guide = lazy(() => import("./assets/Nis2Guide-To0yxhwq.js"));
const Iso27017Guide = lazy(() => import("./assets/Iso27017Guide-Dvbn3V2v.js"));
const Iso27018Guide = lazy(() => import("./assets/Iso27018Guide-pS-4V2Kn.js"));
const HinweisgeberschutzgesetzGuide = lazy(() => import("./assets/HinweisgeberschutzgesetzGuide-BmWhhE2-.js"));
const TisaxGuide = lazy(() => import("./assets/TisaxGuide-C-s2NvDS.js"));
const GeldwaeschegesetzGuide = lazy(() => import("./assets/GeldwaeschegesetzGuide-D6DgQKjq.js"));
const DsgvoGuide = lazy(() => import("./assets/DsgvoGuide-D6Z8usDU.js"));
const DsgEkdCompliance = lazy(() => import("./assets/DsgEkdCompliance-BUWqufyD.js"));
const DsgEkdGuide = lazy(() => import("./assets/DsgEkdGuide-Bnt_WEiO.js"));
const KdgCompliance = lazy(() => import("./assets/KdgCompliance-BW9cVkbk.js"));
const KdgGuide = lazy(() => import("./assets/KdgGuide-jczZ4Vhc.js"));
const DsgvoBasicsGuide = lazy(() => import("./assets/DsgvoBasicsGuide-BbUH93u_.js"));
const WebsiteDsgvoGuide = lazy(() => import("./assets/WebsiteDsgvoGuide-CvQBBDWJ.js"));
const Dsgvo30TageGuide = lazy(() => import("./assets/Dsgvo30TageGuide-DmsRwZct.js"));
const DataBreachNotfallGuide = lazy(() => import("./assets/DataBreachNotfallGuide-5iMYHeAy.js"));
const VerarbeitungsverzeichnisGuide = lazy(() => import("./assets/VerarbeitungsverzeichnisGuide-Dv5oi4nD.js"));
const BetroffenenrechteGuide = lazy(() => import("./assets/BetroffenenrechteGuide-Dg9h-1eX.js"));
const TomMassnahmenGuide = lazy(() => import("./assets/TomMassnahmenGuide-CrDrU8QH.js"));
const DsfaDurchfuehrungGuide = lazy(() => import("./assets/DsfaDurchfuehrungGuide-BskeNDrd.js"));
const CrisisManagement = lazy(() => import("./assets/CrisisManagement-BVV34PAj.js"));
const DataBreach72hGuide = lazy(() => import("./assets/DataBreach72hGuide-6xu1HR9f.js"));
const SecurityIncidentGuide = lazy(() => import("./assets/SecurityIncidentGuide-ChhuhKXd.js"));
const CommunicationTemplatesGuide = lazy(() => import("./assets/CommunicationTemplatesGuide-DPlvWUaZ.js"));
const ComplianceAuditEmergencyGuide = lazy(() => import("./assets/ComplianceAuditEmergencyGuide-DDD00gn9.js"));
const MediaCrisisGuide = lazy(() => import("./assets/MediaCrisisGuide-BHx-mT9Y.js"));
const VendorDataBreachGuide = lazy(() => import("./assets/VendorDataBreachGuide-DfTvc11L.js"));
const GdprFineResponseGuide = lazy(() => import("./assets/GdprFineResponseGuide-Db6fVCzu.js"));
const BusinessContinuityGuide = lazy(() => import("./assets/BusinessContinuityGuide-CsYLXnkl.js"));
const Rechtsprechung = lazy(() => import("./assets/Rechtsprechung-BS8ujN0Y.js"));
const SchremsIICase = lazy(() => import("./assets/SchremsIICase-CCx1NNK0.js"));
const MetaIrlandCase = lazy(() => import("./assets/MetaIrlandCase-D7RgWz_A.js"));
const CookieLawGuide = lazy(() => import("./assets/CookieLawGuide-5RG3yuCj.js"));
const FacebookFanpageCase = lazy(() => import("./assets/FacebookFanpageCase-JwLKd9mu.js"));
const GoogleAnalyticsAustriaCase = lazy(() => import("./assets/GoogleAnalyticsAustriaCase-jh9N8dga.js"));
const AmazonLuxembourgCase = lazy(() => import("./assets/AmazonLuxembourgCase-CJJWFGBH.js"));
const WhatsAppIrelandCase = lazy(() => import("./assets/WhatsAppIrelandCase-BiQkzrT5.js"));
const Planet49CookieCase = lazy(() => import("./assets/Planet49CookieCase-AN_-IF6V.js"));
const GoogleFontsMunichCase = lazy(() => import("./assets/GoogleFontsMunichCase-PeMDkll1.js"));
const BranchenWissen = lazy(() => import("./assets/BranchenWissen-NpazuhJA.js"));
const HealthcareDsgvoGuide = lazy(() => import("./assets/HealthcareDsgvoGuide-vTTP0sAQ.js"));
const HealthcareAiComplianceGuide = lazy(() => import("./assets/HealthcareAiComplianceGuide-DP9lQ9wZ.js"));
const EdtechPrivacyGuide = lazy(() => import("./assets/EdtechPrivacyGuide-DQ-capzj.js"));
const FintechComplianceGuide = lazy(() => import("./assets/FintechComplianceGuide-Bgb-BiQv.js"));
const EcommercePrivacyGuide = lazy(() => import("./assets/EcommercePrivacyGuide-BFKmv4QU.js"));
const SaasPrivacyDesignGuide = lazy(() => import("./assets/SaasPrivacyDesignGuide-KJHx_86B.js"));
const Industrie40DatenschutzGuide = lazy(() => import("./assets/Industrie40DatenschutzGuide-CATIQS8d.js"));
const AutomotiveDatenschutz = lazy(() => import("./assets/AutomotiveDatenschutz-CXbyMsPR.js"));
const SmartGridComplianceGuide = lazy(() => import("./assets/SmartGridComplianceGuide-CQnnSMi4.js"));
const PharmaComplianceGuide = lazy(() => import("./assets/PharmaComplianceGuide-CHzJ2iCy.js"));
const ProduktionDatenschutzGuide = lazy(() => import("./assets/ProduktionDatenschutzGuide-BmeK7ypi.js"));
const TravelComplianceGuide = lazy(() => import("./assets/TravelComplianceGuide-B0Sp5JnC.js"));
const InsurtechComplianceGuide = lazy(() => import("./assets/InsurtechComplianceGuide-DU29eVCR.js"));
const PropTechCompliance = lazy(() => import("./assets/PropTechCompliance-BDJoxh-p.js"));
const LogisticsCompliance = lazy(() => import("./assets/LogisticsCompliance-D88U6pDB.js"));
const DatenschutzPflege = lazy(() => import("./assets/DatenschutzPflege-CPuBzKBy.js"));
const DatenschutzArztpraxis = lazy(() => import("./assets/DatenschutzArztpraxis-D2jBz_OQ.js"));
const DatenschutzKindergarten = lazy(() => import("./assets/DatenschutzKindergarten-Di9nxMgZ.js"));
const DsgvoVermieter = lazy(() => import("./assets/DsgvoVermieter-DfGLHMFd.js"));
const DsgvoVereineComprehensive = lazy(() => import("./assets/DsgvoVereineComprehensive-C95HtSo1.js"));
const DatenschutzBetriebsrat = lazy(() => import("./assets/DatenschutzBetriebsrat-BbgQk4sx.js"));
const DatenschutzHomeofficeComprehensive = lazy(() => import("./assets/DatenschutzHomeofficeComprehensive-BiYn9BdB.js"));
const KiDatenschutz = lazy(() => import("./assets/KiDatenschutz-DOOwj1fz.js"));
const KiRisikoklassifizierung = lazy(() => import("./assets/KiRisikoklassifizierung-DIPGev09.js"));
const KiAlgorithmicImpactAssessment = lazy(() => import("./assets/AlgorithmicImpactAssessment-bgghvcCc.js"));
const PrivacyPreservingAI = lazy(() => import("./assets/PrivacyPreservingAI-DGYBu2aX.js"));
const FederatedLearningGuide = lazy(() => import("./assets/FederatedLearningGuide-CEXIXGEU.js"));
const FinancialAICompliance = lazy(() => import("./assets/FinancialAICompliance-Buq6tkJJ.js"));
const HRAICompliance = lazy(() => import("./assets/HRAICompliance-OaXLTFz9.js"));
const ModelPrivacyAttacks = lazy(() => import("./assets/ModelPrivacyAttacks-DnEycSsR.js"));
const DataMinimizationGuide = lazy(() => import("./assets/DataMinimizationGuide-dPy3ANv3.js"));
const ExplainableAIGuide = lazy(() => import("./assets/ExplainableAIGuide-nnZc5n9a.js"));
const PrivacyByDesignAI = lazy(() => import("./assets/PrivacyByDesignAI-Dh3zfFSs.js"));
const KiEinwilligungsmanagement = lazy(() => import("./assets/KiEinwilligungsmanagement-CEMu3727.js"));
const AutomatedDecisionMaking = lazy(() => import("./assets/AutomatedDecisionMaking-BWGklPcA.js"));
const Industries = lazy(() => import("./assets/Industries-BjHu9zOs.js"));
const Healthcare = lazy(() => import("./assets/Healthcare-BeRRmGSc.js"));
const FinancialServices = lazy(() => import("./assets/FinancialServices-CfGdDpoO.js"));
const ECommerce = lazy(() => import("./assets/ECommerce-YIqLtqmQ.js"));
const SaaS = lazy(() => import("./assets/SaaS-_VM2ub2h.js"));
const Manufacturing = lazy(() => import("./assets/Manufacturing-BNGct5zp.js"));
const Automotive = lazy(() => import("./assets/Automotive-CeXZN0sw.js"));
const Energy = lazy(() => import("./assets/Energy-DeAekuj1.js"));
const Food = lazy(() => import("./assets/Food-BLrUGtgc.js"));
const Logistics = lazy(() => import("./assets/Logistics-B2Zii50p.js"));
const About = lazy(() => import("./assets/About-BTUpt6oa.js"));
const SitemapSEO = lazy(() => import("./assets/SitemapSEO-CCvw-Cx1.js"));
const FinalChecks = lazy(() => import("./assets/FinalChecks-C522Oa8L.js"));
const Test1 = lazy(() => import("./assets/Test1-Dj9bnnOf.js"));
const Test2 = lazy(() => import("./assets/Test2-CGQWAa0x.js"));
const Test3 = lazy(() => import("./assets/Test3-CYDZulvA.js"));
const TestFixed = lazy(() => import("./assets/TestFixed-CUHK7Lvv.js"));
const TestPerfect = lazy(() => import("./assets/TestPerfect-BefcOIed.js"));
const TestBidirectional = lazy(() => import("./assets/TestBidirectional-CjAEHLzg.js"));
const TestFinal = lazy(() => import("./assets/TestFinal-CQMA3c_m.js"));
const TestPerfected = lazy(() => import("./assets/TestPerfected-DYpLIaCO.js"));
const TestApproach1 = lazy(() => import("./assets/TestApproach1-DsCm9f5b.js"));
const TestApproach2 = lazy(() => import("./assets/TestApproach2-CuM4XHL7.js"));
const TestApproach3 = lazy(() => import("./assets/TestApproach3-Fg4Sl1rE.js"));
const TestDiagnostic = lazy(() => import("./assets/TestDiagnostic-BhL9WWBn.js"));
const TestUltimateDiagnostic = lazy(() => import("./assets/TestUltimateDiagnostic-BYx0SnLE.js"));
const TestRobust = lazy(() => import("./assets/TestRobust-CE0nYl_B.js"));
const TestSimpleFinal = lazy(() => import("./assets/TestSimpleFinal-sqYrx3Y5.js"));
const TestOptimized = lazy(() => import("./assets/TestOptimized-J9Blq78z.js"));
const TestIndex = lazy(() => import("./assets/TestIndex--pbg7xgz.js"));
const SimpleTest = lazy(() => import("./assets/SimpleTest-CrRjDYXC.js"));
const DesignSeparatorTest = lazy(() => import("./assets/DesignSeparatorTest-C0CxfrrT.js"));
const FooterTest = lazy(() => import("./assets/FooterTest-DfQQddMR.js"));
const TestUns = lazy(() => import("./assets/TestUns-hss5aQM0.js"));
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(Layout, {}),
    children: [
      { index: true, element: /* @__PURE__ */ jsx(Index, {}) },
      { path: "home", element: /* @__PURE__ */ jsx(Home, {}) },
      { path: "contact", element: /* @__PURE__ */ jsx(Contact, {}) },
      { path: "contact-page", element: /* @__PURE__ */ jsx(ContactPage, {}) },
      { path: "academy", element: /* @__PURE__ */ jsx(Academy, {}) },
      { path: "academy-page", element: /* @__PURE__ */ jsx(AcademyPage, {}) },
      { path: "pricing", element: /* @__PURE__ */ jsx(Pricing, {}) },
      { path: "pricing-page", element: /* @__PURE__ */ jsx(PricingPage, {}) },
      { path: "dashboard", element: /* @__PURE__ */ jsx(Dashboard, {}) },
      { path: "dashboard-page", element: /* @__PURE__ */ jsx(DashboardPage, {}) },
      { path: "thank-you", element: /* @__PURE__ */ jsx(ThankYou, {}) },
      { path: "impressum", element: /* @__PURE__ */ jsx(Impressum, {}) },
      { path: "datenschutz", element: /* @__PURE__ */ jsx(Datenschutz, {}) },
      // Resources
      { path: "resources", element: /* @__PURE__ */ jsx(Resources, {}) },
      { path: "resources/dsgvo-compliance-checklist", element: /* @__PURE__ */ jsx(DSGVOComplianceChecklist, {}) },
      { path: "resources/data-privacy-readiness-assessment", element: /* @__PURE__ */ jsx(DataPrivacyReadinessAssessment, {}) },
      { path: "resources/breach-response-checklist", element: /* @__PURE__ */ jsx(BreachResponseChecklist, {}) },
      { path: "resources/cookie-compliance-audit", element: /* @__PURE__ */ jsx(CookieComplianceAudit, {}) },
      { path: "resources/vendor-assessment-template", element: /* @__PURE__ */ jsx(VendorAssessmentTemplate, {}) },
      // Assessment Tools
      { path: "assessment-center/ai-risk-assessment", element: /* @__PURE__ */ jsx(AIRiskAssessment, {}) },
      { path: "assessment-center/algorithmic-impact-assessment", element: /* @__PURE__ */ jsx(AlgorithmicImpactAssessment, {}) },
      { path: "assessment-center/ai-governance-check", element: /* @__PURE__ */ jsx(AIGovernanceCheck, {}) },
      // Compliance
      { path: "compliance/dsgvo", element: /* @__PURE__ */ jsx(DsgvoCompliance, {}) },
      { path: "compliance/iso-27001", element: /* @__PURE__ */ jsx(Iso27001Compliance, {}) },
      { path: "compliance/eu-ai-act", element: /* @__PURE__ */ jsx(EuAiActCompliance, {}) },
      { path: "compliance/soc-2", element: /* @__PURE__ */ jsx(Soc2Compliance, {}) },
      { path: "compliance/iso-27017", element: /* @__PURE__ */ jsx(Iso27017Compliance, {}) },
      { path: "compliance/iso-27018", element: /* @__PURE__ */ jsx(Iso27018Compliance, {}) },
      { path: "compliance/tisax", element: /* @__PURE__ */ jsx(TisaxCompliance, {}) },
      { path: "compliance/nis-2", element: /* @__PURE__ */ jsx(Nis2Compliance, {}) },
      { path: "compliance/hinweisgeberschutz", element: /* @__PURE__ */ jsx(HinweisgeberschutzCompliance, {}) },
      { path: "compliance/geldwaeschegesetz", element: /* @__PURE__ */ jsx(GeldwaeschegesetzCompliance, {}) },
      { path: "compliance/dsg-ekd", element: /* @__PURE__ */ jsx(DsgEkdCompliance, {}) },
      { path: "compliance/kdg", element: /* @__PURE__ */ jsx(KdgCompliance, {}) },
      // Tools
      { path: "tools", element: /* @__PURE__ */ jsx(Tools, {}) },
      { path: "tools/cookie-management", element: /* @__PURE__ */ jsx(CookieManagementTool, {}) },
      { path: "tools/whistleblower-system", element: /* @__PURE__ */ jsx(WhistleblowerSystemTool, {}) },
      { path: "products/cookie-management", element: /* @__PURE__ */ jsx(CookieManagementToolProduct, {}) },
      { path: "products/whistleblower-system", element: /* @__PURE__ */ jsx(WhistleblowerSystemToolProduct, {}) },
      { path: "tools/dsgvo-email-generator", element: /* @__PURE__ */ jsx(DsgvoEmailTemplateGenerator, {}) },
      { path: "tools/compliance-scorecard", element: /* @__PURE__ */ jsx(DsgvoComplianceScorecard, {}) },
      { path: "tools/compliance-ai-assistant", element: /* @__PURE__ */ jsx(ComplianceAIAssistant, {}) },
      // Knowledge
      { path: "wissen", element: /* @__PURE__ */ jsx(Knowledge, {}) },
      { path: "wissen/dsgvo-guides", element: /* @__PURE__ */ jsx(DsgvoGuides, {}) },
      { path: "wissen/compliance-frameworks", element: /* @__PURE__ */ jsx(ComplianceFrameworks, {}) },
      { path: "wissen/risk-management", element: /* @__PURE__ */ jsx(RiskManagement, {}) },
      { path: "wissen/compliance/iso-27001", element: /* @__PURE__ */ jsx(Iso27001Guide, {}) },
      { path: "wissen/compliance/soc-2", element: /* @__PURE__ */ jsx(Soc2Guide, {}) },
      { path: "wissen/compliance/eu-ai-act", element: /* @__PURE__ */ jsx(EuAiActGuide, {}) },
      { path: "wissen/compliance/nis-2", element: /* @__PURE__ */ jsx(Nis2Guide, {}) },
      { path: "wissen/compliance/iso-27017", element: /* @__PURE__ */ jsx(Iso27017Guide, {}) },
      { path: "wissen/compliance/iso-27018", element: /* @__PURE__ */ jsx(Iso27018Guide, {}) },
      { path: "wissen/compliance/hinweisgeberschutz", element: /* @__PURE__ */ jsx(HinweisgeberschutzgesetzGuide, {}) },
      { path: "wissen/compliance/tisax", element: /* @__PURE__ */ jsx(TisaxGuide, {}) },
      { path: "wissen/compliance/geldwaeschegesetz", element: /* @__PURE__ */ jsx(GeldwaeschegesetzGuide, {}) },
      { path: "wissen/compliance/dsgvo", element: /* @__PURE__ */ jsx(DsgvoGuide, {}) },
      { path: "wissen/compliance/dsg-ekd", element: /* @__PURE__ */ jsx(DsgEkdGuide, {}) },
      { path: "wissen/compliance/kdg", element: /* @__PURE__ */ jsx(KdgGuide, {}) },
      // DSGVO Guides
      { path: "wissen/dsgvo/grundlagen", element: /* @__PURE__ */ jsx(DsgvoBasicsGuide, {}) },
      { path: "wissen/dsgvo/website-konform", element: /* @__PURE__ */ jsx(WebsiteDsgvoGuide, {}) },
      { path: "wissen/dsgvo/30-tage", element: /* @__PURE__ */ jsx(Dsgvo30TageGuide, {}) },
      { path: "wissen/dsgvo/datenpanne-notfall", element: /* @__PURE__ */ jsx(DataBreachNotfallGuide, {}) },
      { path: "wissen/dsgvo/verarbeitungsverzeichnis", element: /* @__PURE__ */ jsx(VerarbeitungsverzeichnisGuide, {}) },
      { path: "wissen/dsgvo/betroffenenrechte", element: /* @__PURE__ */ jsx(BetroffenenrechteGuide, {}) },
      { path: "wissen/dsgvo/tom-massnahmen", element: /* @__PURE__ */ jsx(TomMassnahmenGuide, {}) },
      { path: "wissen/dsgvo/dsfa-durchfuehrung", element: /* @__PURE__ */ jsx(DsfaDurchfuehrungGuide, {}) },
      // Crisis Management
      { path: "wissen/krisenbewaltigung", element: /* @__PURE__ */ jsx(CrisisManagement, {}) },
      { path: "wissen/krisenbewaltigung/datenpanne-72h", element: /* @__PURE__ */ jsx(DataBreach72hGuide, {}) },
      { path: "wissen/krisenbewaltigung/sicherheitsvorfall", element: /* @__PURE__ */ jsx(SecurityIncidentGuide, {}) },
      { path: "wissen/krisenbewaltigung/kommunikations-vorlagen", element: /* @__PURE__ */ jsx(CommunicationTemplatesGuide, {}) },
      { path: "wissen/krisenbewaltigung/compliance-audit-notfall", element: /* @__PURE__ */ jsx(ComplianceAuditEmergencyGuide, {}) },
      { path: "wissen/krisenbewaltigung/medienkrise", element: /* @__PURE__ */ jsx(MediaCrisisGuide, {}) },
      { path: "wissen/krisenbewaltigung/lieferanten-datenpanne", element: /* @__PURE__ */ jsx(VendorDataBreachGuide, {}) },
      { path: "wissen/krisenbewaltigung/bussgeld-reaktion", element: /* @__PURE__ */ jsx(GdprFineResponseGuide, {}) },
      { path: "wissen/krisenbewaltigung/business-continuity", element: /* @__PURE__ */ jsx(BusinessContinuityGuide, {}) },
      // Legal
      { path: "wissen/rechtsprechung", element: /* @__PURE__ */ jsx(Rechtsprechung, {}) },
      { path: "wissen/rechtsprechung/schrems-ii", element: /* @__PURE__ */ jsx(SchremsIICase, {}) },
      { path: "wissen/rechtsprechung/meta-irland-2023", element: /* @__PURE__ */ jsx(MetaIrlandCase, {}) },
      { path: "wissen/rechtsprechung/cookie-richtlinie", element: /* @__PURE__ */ jsx(CookieLawGuide, {}) },
      { path: "wissen/rechtsprechung/facebook-fanpage", element: /* @__PURE__ */ jsx(FacebookFanpageCase, {}) },
      { path: "wissen/rechtsprechung/google-analytics-oesterreich", element: /* @__PURE__ */ jsx(GoogleAnalyticsAustriaCase, {}) },
      { path: "wissen/rechtsprechung/amazon-luxemburg-2021", element: /* @__PURE__ */ jsx(AmazonLuxembourgCase, {}) },
      { path: "wissen/rechtsprechung/whatsapp-irland-2021", element: /* @__PURE__ */ jsx(WhatsAppIrelandCase, {}) },
      { path: "wissen/rechtsprechung/planet49-cookie", element: /* @__PURE__ */ jsx(Planet49CookieCase, {}) },
      { path: "wissen/rechtsprechung/google-fonts-muenchen", element: /* @__PURE__ */ jsx(GoogleFontsMunichCase, {}) },
      // Branchen Wissen
      { path: "wissen/branchen", element: /* @__PURE__ */ jsx(BranchenWissen, {}) },
      { path: "wissen/branchen/healthcare-dsgvo", element: /* @__PURE__ */ jsx(HealthcareDsgvoGuide, {}) },
      { path: "wissen/branchen/healthcare-ai-compliance", element: /* @__PURE__ */ jsx(HealthcareAiComplianceGuide, {}) },
      { path: "wissen/branchen/edtech-privacy", element: /* @__PURE__ */ jsx(EdtechPrivacyGuide, {}) },
      { path: "wissen/branchen/fintech-compliance", element: /* @__PURE__ */ jsx(FintechComplianceGuide, {}) },
      { path: "wissen/branchen/ecommerce-privacy", element: /* @__PURE__ */ jsx(EcommercePrivacyGuide, {}) },
      { path: "wissen/branchen/saas-privacy-design", element: /* @__PURE__ */ jsx(SaasPrivacyDesignGuide, {}) },
      { path: "wissen/branchen/industrie-4-0-datenschutz", element: /* @__PURE__ */ jsx(Industrie40DatenschutzGuide, {}) },
      { path: "wissen/branchen/automotive-datenschutz", element: /* @__PURE__ */ jsx(AutomotiveDatenschutz, {}) },
      { path: "wissen/branchen/smart-grid-compliance", element: /* @__PURE__ */ jsx(SmartGridComplianceGuide, {}) },
      { path: "wissen/branchen/pharma-compliance", element: /* @__PURE__ */ jsx(PharmaComplianceGuide, {}) },
      { path: "wissen/branchen/produktion-datenschutz", element: /* @__PURE__ */ jsx(ProduktionDatenschutzGuide, {}) },
      { path: "wissen/branchen/travel-compliance", element: /* @__PURE__ */ jsx(TravelComplianceGuide, {}) },
      { path: "wissen/branchen/insurtech-compliance", element: /* @__PURE__ */ jsx(InsurtechComplianceGuide, {}) },
      { path: "wissen/branchen/proptech-compliance", element: /* @__PURE__ */ jsx(PropTechCompliance, {}) },
      { path: "wissen/branchen/logistics-compliance", element: /* @__PURE__ */ jsx(LogisticsCompliance, {}) },
      { path: "wissen/branchen/datenschutz-pflege", element: /* @__PURE__ */ jsx(DatenschutzPflege, {}) },
      { path: "wissen/branchen/datenschutz-arztpraxis", element: /* @__PURE__ */ jsx(DatenschutzArztpraxis, {}) },
      { path: "wissen/branchen/datenschutz-kindergarten", element: /* @__PURE__ */ jsx(DatenschutzKindergarten, {}) },
      { path: "wissen/branchen/dsgvo-vermieter", element: /* @__PURE__ */ jsx(DsgvoVermieter, {}) },
      { path: "wissen/branchen/dsgvo-vereine", element: /* @__PURE__ */ jsx(DsgvoVereineComprehensive, {}) },
      { path: "wissen/branchen/datenschutz-betriebsrat", element: /* @__PURE__ */ jsx(DatenschutzBetriebsrat, {}) },
      { path: "wissen/branchen/datenschutz-homeoffice", element: /* @__PURE__ */ jsx(DatenschutzHomeofficeComprehensive, {}) },
      // KI Datenschutz
      { path: "ki-datenschutz", element: /* @__PURE__ */ jsx(KiDatenschutz, {}) },
      { path: "ki-datenschutz/risikoklassifizierung", element: /* @__PURE__ */ jsx(KiRisikoklassifizierung, {}) },
      { path: "ki-datenschutz/algorithmic-impact-assessment", element: /* @__PURE__ */ jsx(KiAlgorithmicImpactAssessment, {}) },
      { path: "ki-datenschutz/privacy-preserving-ai", element: /* @__PURE__ */ jsx(PrivacyPreservingAI, {}) },
      { path: "ki-datenschutz/federated-learning", element: /* @__PURE__ */ jsx(FederatedLearningGuide, {}) },
      { path: "ki-datenschutz/financial-ai-compliance", element: /* @__PURE__ */ jsx(FinancialAICompliance, {}) },
      { path: "ki-datenschutz/hr-ai-compliance", element: /* @__PURE__ */ jsx(HRAICompliance, {}) },
      { path: "ki-datenschutz/model-privacy-attacks", element: /* @__PURE__ */ jsx(ModelPrivacyAttacks, {}) },
      { path: "ki-datenschutz/data-minimization", element: /* @__PURE__ */ jsx(DataMinimizationGuide, {}) },
      { path: "ki-datenschutz/explainable-ai", element: /* @__PURE__ */ jsx(ExplainableAIGuide, {}) },
      { path: "ki-datenschutz/privacy-by-design", element: /* @__PURE__ */ jsx(PrivacyByDesignAI, {}) },
      { path: "ki-datenschutz/einwilligungsmanagement", element: /* @__PURE__ */ jsx(KiEinwilligungsmanagement, {}) },
      { path: "ki-datenschutz/automated-decision-making", element: /* @__PURE__ */ jsx(AutomatedDecisionMaking, {}) },
      // Industries
      { path: "industries", element: /* @__PURE__ */ jsx(Industries, {}) },
      { path: "industries/healthcare", element: /* @__PURE__ */ jsx(Healthcare, {}) },
      { path: "industries/financial-services", element: /* @__PURE__ */ jsx(FinancialServices, {}) },
      { path: "industries/e-commerce", element: /* @__PURE__ */ jsx(ECommerce, {}) },
      { path: "industries/saas", element: /* @__PURE__ */ jsx(SaaS, {}) },
      { path: "industries/manufacturing", element: /* @__PURE__ */ jsx(Manufacturing, {}) },
      { path: "industries/automotive", element: /* @__PURE__ */ jsx(Automotive, {}) },
      { path: "industries/energy", element: /* @__PURE__ */ jsx(Energy, {}) },
      { path: "industries/food", element: /* @__PURE__ */ jsx(Food, {}) },
      { path: "industries/logistics", element: /* @__PURE__ */ jsx(Logistics, {}) },
      // Other Pages
      { path: "about", element: /* @__PURE__ */ jsx(About, {}) },
      { path: "sitemap-seo", element: /* @__PURE__ */ jsx(SitemapSEO, {}) },
      { path: "final-checks", element: /* @__PURE__ */ jsx(FinalChecks, {}) },
      // Test Pages
      { path: "test1", element: /* @__PURE__ */ jsx(Test1, {}) },
      { path: "test2", element: /* @__PURE__ */ jsx(Test2, {}) },
      { path: "test3", element: /* @__PURE__ */ jsx(Test3, {}) },
      { path: "test-fixed", element: /* @__PURE__ */ jsx(TestFixed, {}) },
      { path: "test-perfect", element: /* @__PURE__ */ jsx(TestPerfect, {}) },
      { path: "test-bidirectional", element: /* @__PURE__ */ jsx(TestBidirectional, {}) },
      { path: "test-final", element: /* @__PURE__ */ jsx(TestFinal, {}) },
      { path: "test-perfected", element: /* @__PURE__ */ jsx(TestPerfected, {}) },
      { path: "test-approach-1", element: /* @__PURE__ */ jsx(TestApproach1, {}) },
      { path: "test-approach-2", element: /* @__PURE__ */ jsx(TestApproach2, {}) },
      { path: "test-approach-3", element: /* @__PURE__ */ jsx(TestApproach3, {}) },
      { path: "test-diagnostic", element: /* @__PURE__ */ jsx(TestDiagnostic, {}) },
      { path: "test-ultimate-diagnostic", element: /* @__PURE__ */ jsx(TestUltimateDiagnostic, {}) },
      { path: "test-robust", element: /* @__PURE__ */ jsx(TestRobust, {}) },
      { path: "test-simple-final", element: /* @__PURE__ */ jsx(TestSimpleFinal, {}) },
      { path: "test-optimized", element: /* @__PURE__ */ jsx(TestOptimized, {}) },
      { path: "test-index", element: /* @__PURE__ */ jsx(TestIndex, {}) },
      { path: "simple-test", element: /* @__PURE__ */ jsx(SimpleTest, {}) },
      { path: "design-separator-test", element: /* @__PURE__ */ jsx(DesignSeparatorTest, {}) },
      { path: "footer-test", element: /* @__PURE__ */ jsx(FooterTest, {}) },
      { path: "test-uns", element: /* @__PURE__ */ jsx(TestUns, {}) },
      // 404
      { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) }
    ]
  }
];
const createRoot = ViteReactSSG(
  { routes },
  ({ router, routes: routes2, isClient, initialState }) => {
  }
);
export {
  LanguageContext as L,
  TooltipProvider as T,
  Tooltip as a,
  TooltipTrigger as b,
  cn as c,
  createRoot,
  TooltipContent as d,
  useToast as u
};
