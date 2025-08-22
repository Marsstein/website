import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-BRnNKcuh.js";
import { ChevronRight, Check, Circle, Menu } from "lucide-react";
import { S as Sheet, b as SheetTrigger, a as SheetContent } from "./sheet-CZUPRhKH.js";
import { useLocation, useNavigate, Link } from "react-router-dom";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { c as cn } from "../main.mjs";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const Header = () => {
  useLocation();
  useNavigate();
  const navItems = [
    { key: "nav_regulations", href: "#" },
    { key: "nav_certifications", href: "#" },
    { key: "nav_knowledge", href: "#" },
    { key: "nav_industries", href: "/branchen" },
    { key: "nav_about", href: "/ueber-uns" },
    { key: "nav_contact", href: "/contact" }
  ];
  const regulationsDropdown = /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "Regulierungen" }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/eu-ai-act", className: "block w-full", children: "EU AI Act" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/dsgvo", className: "block w-full", children: "DSGVO" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/nis2-compliance", className: "block w-full", children: "NIS2-Richtlinie" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/hinweisgeberschutzgesetz", className: "block w-full", children: "Hinweisgeberschutzgesetz" }) })
    ] })
  ] });
  const certificationsDropdown = /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "Zertifizierungen" }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/iso-27001-zertifizierung", className: "block w-full", children: "ISO 27001" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/soc2-zertifizierung", className: "block w-full", children: "SOC 2" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/iso-27017-zertifizierung", className: "block w-full", children: "ISO 27017 Cloud Security" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/iso-27018-zertifizierung", className: "block w-full", children: "ISO 27018 Cloud Privacy" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tisax-zertifizierung", className: "block w-full", children: "TISAX® Automotive Security" }) })
    ] })
  ] });
  const toolsDropdown = /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "Tools" }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools", className: "block w-full", children: "Tools Übersicht" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/cookie-management", className: "block w-full", children: "Cookie Management" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/whistleblower-system", className: "block w-full", children: "Hinweisgebersystem" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/dsgvo-email-template-generator", className: "block w-full", children: "DSGVO Email Templates" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/compliance-ai-assistant", className: "block w-full", children: "Compliance AI Assistant" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/dsgvo-compliance-scorecard", className: "block w-full", children: "DSGVO Compliance Scorecard" }) })
    ] })
  ] });
  const knowledgeDropdown = /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "Wissen" }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen", className: "block w-full", children: "Übersicht" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo", className: "block w-full", children: "DSGVO" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance-frameworks", className: "block w-full", children: "Frameworks" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung", className: "block w-full", children: "Rechtsprechungen" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/risk-management", className: "block w-full", children: "Risk Management" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen", className: "block w-full", children: "Branchen" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement", className: "block w-full", children: "Krisenmanagement" }) })
    ] })
  ] });
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: /* @__PURE__ */ jsxs("div", { className: "container flex h-16 items-center justify-between px-4", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/JLogoMarsstein.svg",
        alt: "Marsstein Logo",
        className: "h-8 w-auto"
      }
    ) }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center space-x-8", children: navItems.map((item) => item.key === "nav_regulations" ? /* @__PURE__ */ jsx("div", { children: regulationsDropdown }, item.key) : item.key === "nav_certifications" ? /* @__PURE__ */ jsx("div", { children: certificationsDropdown }, item.key) : item.key === "nav_tools" ? /* @__PURE__ */ jsx("div", { children: toolsDropdown }, item.key) : item.key === "nav_knowledge" ? /* @__PURE__ */ jsx("div", { children: knowledgeDropdown }, item.key) : /* @__PURE__ */ jsx(
      Link,
      {
        to: item.href,
        className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
        children: item.key === "nav_industries" ? "Branchen" : item.key === "nav_about" ? "Über uns" : item.key === "nav_contact" ? "Kontakt" : item.key
      },
      item.key
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-4", children: [
      /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", children: "Anmelden" }),
      /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsx(Button, { size: "sm", className: "bg-primary hover:bg-primary/90 text-primary-foreground", children: "Demo anfordern" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxs(Sheet, { children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) }) }),
      /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "w-80", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-4 mt-8", children: [
        navItems.map((item) => item.key === "nav_regulations" ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "Regulierungen" }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/eu-ai-act", className: "block w-full", children: "EU AI Act" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/dsgvo", className: "block w-full", children: "DSGVO" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/nis2-compliance", className: "block w-full", children: "NIS2-Richtlinie" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/hinweisgeberschutzgesetz", className: "block w-full", children: "Hinweisgeberschutzgesetz" }) })
          ] })
        ] }, item.key) : item.key === "nav_certifications" ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "Zertifizierungen" }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/iso-27001-zertifizierung", className: "block w-full", children: "ISO 27001" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/soc2-zertifizierung", className: "block w-full", children: "SOC 2" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/iso-27017-zertifizierung", className: "block w-full", children: "ISO 27017 Cloud Security" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/iso-27018-zertifizierung", className: "block w-full", children: "ISO 27018 Cloud Privacy" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tisax-zertifizierung", className: "block w-full", children: "TISAX® Automotive Security" }) })
          ] })
        ] }, item.key) : item.key === "nav_tools" ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "Tools" }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools", className: "block w-full", children: "Alle Tools" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/cookie-management", className: "block w-full", children: "Cookie Management" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/whistleblower-system", className: "block w-full", children: "Hinweisgebersystem" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/dsgvo-email-template-generator", className: "block w-full", children: "DSGVO Email Templates" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/dsgvo-compliance-scorecard", className: "block w-full", children: "DSGVO Compliance Scorecard" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/tools/compliance-ai-assistant", className: "block w-full", children: "Compliance AI Assistant" }) })
          ] })
        ] }, item.key) : item.key === "nav_knowledge" ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "Wissen" }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen", className: "block w-full", children: "Übersicht" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo", className: "block w-full", children: "DSGVO" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance-frameworks", className: "block w-full", children: "Frameworks" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung", className: "block w-full", children: "Rechtsprechungen" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/risk-management", className: "block w-full", children: "Risk Management" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen", className: "block w-full", children: "Branchen" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement", className: "block w-full", children: "Krisenmanagement" }) })
          ] })
        ] }, item.key) : /* @__PURE__ */ jsx(
          Link,
          {
            to: item.href,
            className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left",
            children: item.key === "nav_industries" ? "Branchen" : item.key === "nav_about" ? "Über uns" : item.key === "nav_contact" ? "Kontakt" : item.key
          },
          item.key
        )),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 space-y-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "w-full justify-start", children: "Anmelden" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", className: "block", children: /* @__PURE__ */ jsx(Button, { className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground", children: "Demo anfordern" }) })
        ] })
      ] }) })
    ] }) })
  ] }) });
};
export {
  Header as H
};
