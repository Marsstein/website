import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useSearchParams } from "react-router-dom";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import * as React from "react";
import { useState } from "react";
import { u as useLanguage } from "./useLanguage-BAIZ-FA5.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { I as Input } from "./input-6XZgwDxx.js";
import { c as cn, u as useToast } from "../main.mjs";
import { L as Label } from "./label-CtFE5ecu.js";
import { C as Checkbox } from "./checkbox-BNCkAJgi.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check, ChevronUp, Monitor, Mail, MapPin, Clock } from "lucide-react";
import { C as Card } from "./card-OzTRm1Ua.js";
import emailjs from "@emailjs/browser";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-slot";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const ContactForm = ({ isDemoRequest = false }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    employees: "",
    message: isDemoRequest ? "I would like to request a demo of your compliance management platform." : "",
    newsletter: false,
    privacy: false,
    isDemoRequest
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 3e4) {
      toast({
        title: t("contact_error"),
        description: "Please wait 30 seconds before submitting again.",
        variant: "destructive"
      });
      return;
    }
    if (!formData.privacy) {
      toast({
        title: t("contact_error"),
        description: t("contact_privacy_required"),
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      const serviceId = "service_qthrg91";
      const templateId = "template_t96lrxq";
      const publicKey = "Gep0zaciYt4iMYcbg";
      if (false) ;
      if (!serviceId || !templateId || !publicKey) ;
      emailjs.init(publicKey);
      const sanitizedData = {
        firstName: formData.firstName.trim().slice(0, 50),
        lastName: formData.lastName.trim().slice(0, 50),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim().slice(0, 20),
        company: formData.company.trim().slice(0, 100),
        jobTitle: formData.jobTitle.trim().slice(0, 100),
        employees: formData.employees,
        message: formData.message.trim().slice(0, 2e3),
        isDemoRequest: formData.isDemoRequest,
        newsletter: formData.newsletter
      };
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedData.email)) {
        toast({
          title: t("contact_error"),
          description: "Please enter a valid email address.",
          variant: "destructive"
        });
        return;
      }
      const templateParams = {
        name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        email: sanitizedData.email,
        message: `
Contact Details:
- Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
- Email: ${sanitizedData.email}
- Phone: ${sanitizedData.phone}
- Company: ${sanitizedData.company}
- Job Title: ${sanitizedData.jobTitle}
- Employees: ${sanitizedData.employees}
- Demo Request: ${sanitizedData.isDemoRequest ? "YES" : "NO"}
- Newsletter: ${sanitizedData.newsletter ? "YES" : "NO"}

Message:
${sanitizedData.message}
        `
      };
      if (false) ;
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      if (false) ;
      toast({
        title: t("contact_success"),
        description: t("contact_success_message")
      });
      setLastSubmissionTime(Date.now());
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        employees: "",
        message: "",
        newsletter: false,
        privacy: false,
        isDemoRequest: false
      });
      setTimeout(() => {
        navigate("/thank-you");
      }, 1500);
    } catch (error) {
      let errorMessage = "Failed to send message. Please try again or contact us directly.";
      if (error.status === 400) {
        errorMessage = "Invalid template parameters. Please check the form data.";
      } else if (error.status === 401) {
        errorMessage = "EmailJS authentication failed. Please check your public key.";
      } else if (error.status === 404) {
        errorMessage = "EmailJS service or template not found. Please check your service ID and template ID.";
      } else if (error.text) {
        errorMessage = `EmailJS error: ${error.text}`;
      }
      toast({
        title: t("contact_error"),
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      isDemoRequest && /* @__PURE__ */ jsx("div", { className: "mb-4 p-4 bg-primary/10 border border-primary/20 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-primary font-medium flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Monitor, { className: "h-5 w-5" }),
        "Demo Request - Get a personalized demonstration of our platform"
      ] }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-foreground mb-6", children: isDemoRequest ? "Request Your Personal Demo" : t("contact_title") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8", children: isDemoRequest ? "Fill out the form below and we'll schedule a personalized demo of our compliance management platform for you." : t("contact_subtitle") }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 mb-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-primary mb-4", children: t("contact_why_marsstein") }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-primary rounded-full mt-2 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: t("contact_benefit_1_title") }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: t("contact_benefit_1_desc") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-primary rounded-full mt-2 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: t("contact_benefit_2_title") }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: t("contact_benefit_2_desc") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-primary rounded-full mt-2 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: t("contact_benefit_3_title") }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: t("contact_benefit_3_desc") })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { children: "info@marsstein.ai" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { children: t("contact_address") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { children: t("contact_hours") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: t("contact_form_title") }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "firstName", className: "text-sm font-medium", children: [
              t("contact_first_name"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "firstName",
                value: formData.firstName,
                onChange: (e) => handleInputChange("firstName", e.target.value),
                placeholder: "Max",
                required: true,
                className: "mt-1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "lastName", className: "text-sm font-medium", children: [
              t("contact_last_name"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "lastName",
                value: formData.lastName,
                onChange: (e) => handleInputChange("lastName", e.target.value),
                placeholder: "Mustermann",
                required: true,
                className: "mt-1"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "email", className: "text-sm font-medium", children: [
              t("contact_email"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                type: "email",
                value: formData.email,
                onChange: (e) => handleInputChange("email", e.target.value),
                placeholder: "max@company.com",
                required: true,
                className: "mt-1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "phone", className: "text-sm font-medium", children: t("contact_phone") }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "phone",
                type: "tel",
                value: formData.phone,
                onChange: (e) => handleInputChange("phone", e.target.value),
                placeholder: "+49 XXX XXXXXXXX",
                className: "mt-1"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: t("contact_company_info") }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: "company", className: "text-sm font-medium", children: [
                t("contact_company"),
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "company",
                  value: formData.company,
                  onChange: (e) => handleInputChange("company", e.target.value),
                  placeholder: "Musterfirma GmbH",
                  required: true,
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "jobTitle", className: "text-sm font-medium", children: t("contact_job_title") }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "jobTitle",
                  value: formData.jobTitle,
                  onChange: (e) => handleInputChange("jobTitle", e.target.value),
                  placeholder: "Geschäftsführer",
                  className: "mt-1"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "employees", className: "text-sm font-medium", children: t("contact_employees") }),
            /* @__PURE__ */ jsxs(Select, { onValueChange: (value) => handleInputChange("employees", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("contact_employees_placeholder") }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "1-10", children: "1-10" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "11-50", children: "11-50" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "51-200", children: "51-200" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "201-500", children: "201-500" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "500+", children: "500+" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "message", className: "text-sm font-medium", children: t("contact_message") }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "message",
              value: formData.message,
              onChange: (e) => handleInputChange("message", e.target.value),
              placeholder: t("contact_message_placeholder"),
              className: "mt-1 min-h-[100px]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: "newsletter",
                checked: formData.newsletter,
                onCheckedChange: (checked) => handleInputChange("newsletter", checked)
              }
            ),
            /* @__PURE__ */ jsx(Label, { htmlFor: "newsletter", className: "text-sm leading-5", children: t("contact_newsletter") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: "privacy",
                checked: formData.privacy,
                onCheckedChange: (checked) => handleInputChange("privacy", checked),
                required: true
              }
            ),
            /* @__PURE__ */ jsxs(Label, { htmlFor: "privacy", className: "text-sm leading-5", children: [
              t("contact_privacy"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "*" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            size: "lg",
            className: "w-full bg-gradient-primary hover:opacity-90",
            disabled: isLoading,
            children: isLoading ? "Sending..." : t("contact_submit")
          }
        )
      ] })
    ] })
  ] }) });
};
const Contact = () => {
  const [searchParams] = useSearchParams();
  const isDemoRequest = searchParams.get("demo") === "true";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(ContactForm, { isDemoRequest }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Contact as default
};
