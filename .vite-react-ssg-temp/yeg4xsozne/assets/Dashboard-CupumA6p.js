import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { u as useLanguage } from "./useLanguage-BAIZ-FA5.js";
import { useTheme } from "next-themes";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { c as cn, T as TooltipProvider, a as Tooltip, b as TooltipTrigger, d as TooltipContent, u as useToast } from "../main.mjs";
import { PanelLeft, Shield, LayoutDashboard, FileText, Brain, ClipboardCheck, FileCheck, Target, GitBranch, Users, Settings, HelpCircle, Languages, Moon, Sun, CheckCircle, AlertCircle, Play, TrendingUp, Activity, Download, Upload, Calendar, Clock, Mail } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { I as Input } from "./input-6XZgwDxx.js";
import { S as Separator } from "./separator-BB_QW9VA.js";
import { S as Sheet, a as SheetContent } from "./sheet-CZUPRhKH.js";
import { useLocation, NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
const SidebarProvider = React.forwardRef(
  ({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
  }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
    }, [isMobile, setOpen, setOpenMobile]);
    React.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = React.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );
    return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          className
        ),
        ref,
        ...props,
        children
      }
    ) }) });
  }
);
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = React.forwardRef(
  ({
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ...props
  }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          ),
          ref,
          ...props,
          children
        }
      );
    }
    if (isMobile) {
      return /* @__PURE__ */ jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsx(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
        }
      ) });
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: "group peer hidden md:block text-sidebar-foreground",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                className
              ),
              ...props,
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children
                }
              )
            }
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
const SidebarTrigger = React.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(PanelLeft, {}),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = React.forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "main",
    {
      ref,
      className: cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      ),
      ...props
    }
  );
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Input,
    {
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      ),
      ...props
    }
  );
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Separator,
    {
      ref,
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "group-content",
    className: cn("w-full text-sm", className),
    ...props
  }
));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu",
    className: cn("flex w-full min-w-0 flex-col gap-1", className),
    ...props
  }
));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    "data-sidebar": "menu-item",
    className: cn("group/menu-item relative", className),
    ...props
  }
));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const SidebarMenuButton = React.forwardRef(
  ({
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
        ...props
      }
    );
    if (!tooltip) {
      return button;
    }
    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip
      };
    }
    return /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsx(
        TooltipContent,
        {
          side: "right",
          align: "center",
          hidden: state !== "collapsed" || isMobile,
          ...tooltip
        }
      )
    ] });
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = React.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "menu-badge",
    className: cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = React.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("rounded-md h-8 flex gap-2 px-2 items-center", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "h-4 flex-1 max-w-[--skeleton-width]",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu-sub",
    className: cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = React.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
const sidebarItems = [
  { titleKey: "dashboard_nav_dashboard", url: "/dashboard", icon: LayoutDashboard },
  { titleKey: "dashboard_nav_documents", url: "/dashboard/documents", icon: FileText },
  { titleKey: "dashboard_nav_ai_check", url: "/dashboard/ai-check", icon: Brain },
  { titleKey: "dashboard_nav_audits", url: "/dashboard/audits", icon: ClipboardCheck },
  { titleKey: "dashboard_nav_policies", url: "/dashboard/policies", icon: FileCheck },
  { titleKey: "dashboard_nav_frameworks", url: "/dashboard/frameworks", icon: Target },
  { titleKey: "dashboard_nav_integrations", url: "/dashboard/integrations", icon: GitBranch },
  { titleKey: "dashboard_nav_teams", url: "/dashboard/teams", icon: Users },
  { titleKey: "dashboard_nav_settings", url: "/dashboard/settings", icon: Settings },
  { titleKey: "dashboard_nav_help", url: "/dashboard/help", icon: HelpCircle }
];
const frameworks = [
  { name: "GDPR", progress: 92, status: "compliant" },
  { name: "ISO 27001", progress: 78, status: "warning" },
  { name: "EU AI Act", progress: 65, status: "progress" },
  { name: "NIS2", progress: 45, status: "risk" }
];
const recentDocuments = [
  { name: "GDPR Privacy Policy", status: "approved", date: "2024-01-15" },
  { name: "Data Processing Agreement", status: "pending", date: "2024-01-14" },
  { name: "Cookie Policy", status: "missing", date: "2024-01-12" }
];
const riskData = [
  { severity: "Critical", count: 2, color: "bg-primary" },
  { severity: "High", count: 5, color: "bg-warning" },
  { severity: "Medium", count: 12, color: "bg-secondary" },
  { severity: "Low", count: 8, color: "bg-muted" }
];
function DashboardMain() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeFramework, setActiveFramework] = useState("GDPR");
  const handleDownloadDPIA = () => {
    toast({
      title: "DSFA Download",
      description: language === "de" ? "Die Datenschutz-Folgenabschätzung wird heruntergeladen..." : "Data Protection Impact Assessment is being downloaded..."
    });
  };
  const handleExportReport = () => {
    toast({
      title: "Report Export",
      description: language === "de" ? "Der Compliance-Bericht wird exportiert..." : "Compliance report is being exported..."
    });
  };
  const handleQuickUpload = () => {
    navigate("/dashboard/documents");
    toast({
      title: "Navigation",
      description: language === "de" ? "Weiterleitung zur Dokumentenverwaltung..." : "Redirecting to document management..."
    });
  };
  const handleRunCheck = () => {
    navigate("/dashboard/ai-check");
    toast({
      title: "Navigation",
      description: language === "de" ? "KI Compliance Prüfung wird geöffnet..." : "Opening AI Compliance Check..."
    });
  };
  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case "approved":
        return "secondary";
      case "pending":
        return "outline";
      case "missing":
        return "destructive";
      default:
        return "outline";
    }
  };
  const getFrameworkColor = (status) => {
    switch (status) {
      case "compliant":
        return "text-secondary";
      case "warning":
        return "text-warning";
      case "progress":
        return "text-accent";
      case "risk":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex-1 p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: t("dashboard_compliance_score") }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16", children: [
            /* @__PURE__ */ jsx(Progress, { value: 78, className: "w-full h-2" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-warning", children: "78%" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-warning border-warning", children: t("dashboard_warning") }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: t("dashboard_ai_compliance_check") }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-secondary" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
              "15 ",
              t("dashboard_controls_passed")
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-warning" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
              "3 ",
              t("dashboard_warnings")
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Button, { size: "sm", onClick: handleRunCheck, className: "w-full mt-2", children: [
            /* @__PURE__ */ jsx(Play, { className: "h-3 w-3 mr-1" }),
            t("dashboard_run_check")
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "cursor-pointer transition-colors hover:bg-muted/50", onClick: () => navigate("/dashboard/documents"), children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: t("dashboard_nav_documents") }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-foreground", children: "24" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }),
            "+12% from last month"
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "cursor-pointer transition-colors hover:bg-muted/50", onClick: () => navigate("/dashboard/teams"), children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: t("dashboard_active_users") }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-foreground", children: "12" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Activity, { className: "h-3 w-3" }),
            "Online now"
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2 cursor-pointer transition-colors hover:bg-muted/50", onClick: () => navigate("/dashboard/frameworks"), children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: t("dashboard_framework_compliance") }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: frameworks.map((framework) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: framework.name }),
              /* @__PURE__ */ jsxs("span", { className: `font-bold ${getFrameworkColor(framework.status)}`, children: [
                framework.progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Progress, { value: framework.progress, className: "h-2" })
          ] }, framework.name)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "flex items-center gap-2", onClick: (e) => {
              e.stopPropagation();
              handleDownloadDPIA();
            }, children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
              t("dashboard_download_dpia")
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "flex items-center gap-2", onClick: (e) => {
              e.stopPropagation();
              handleExportReport();
            }, children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
              t("dashboard_export_report")
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "cursor-pointer transition-colors hover:bg-muted/50", onClick: () => navigate("/dashboard/audits"), children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: t("dashboard_risk_monitoring") }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: riskData.map((risk) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${risk.color}` }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: t(`dashboard_${risk.severity.toLowerCase()}`) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold", children: risk.count })
        ] }, risk.severity)) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: t("dashboard_documents_evidence") }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: recentDocuments.map((doc, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: doc.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: doc.date })
            ] }),
            /* @__PURE__ */ jsx(Badge, { variant: getStatusBadgeVariant(doc.status), children: t(`dashboard_${doc.status}`) })
          ] }, index)) }),
          /* @__PURE__ */ jsxs(Button, { className: "w-full mt-4", variant: "outline", onClick: handleQuickUpload, children: [
            /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4 mr-2" }),
            t("dashboard_quick_upload")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "cursor-pointer transition-colors hover:bg-muted/50", onClick: () => navigate("/dashboard/audits"), children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: t("dashboard_upcoming_audits") }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "ISO 27001 Review" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "March 15, 2024" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-warning" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "GDPR Assessment" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "April 2, 2024" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "cursor-pointer transition-colors hover:bg-muted/50", onClick: () => navigate("/dashboard/integrations"), children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: t("dashboard_integrations_health") }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "AWS" }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Connected" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Google Cloud" }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Connected" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "GitHub" }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Pending" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Azure" }),
            /* @__PURE__ */ jsx(Badge, { variant: "destructive", children: "Error" })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function DocumentsPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const [documents, setDocuments] = useState([
    { id: 1, name: "GDPR Privacy Policy", type: "Policy", status: "approved", date: "2024-01-15", size: "2.3 MB" },
    { id: 2, name: "Data Processing Agreement", type: "Legal", status: "pending", date: "2024-01-14", size: "1.8 MB" },
    { id: 3, name: "Cookie Policy", type: "Policy", status: "missing", date: "2024-01-12", size: "0.5 MB" },
    { id: 4, name: "ISO 27001 Certificate", type: "Certificate", status: "approved", date: "2024-01-10", size: "3.2 MB" },
    { id: 5, name: "Risk Assessment Report", type: "Report", status: "pending", date: "2024-01-08", size: "4.1 MB" }
  ]);
  const handleUpload = () => {
    toast({
      title: "File Upload",
      description: "File upload feature activated - ready for document upload"
    });
    const newDoc = {
      id: documents.length + 1,
      name: "New Compliance Document.pdf",
      type: "Report",
      status: "pending",
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      size: "2.1 MB"
    };
    setDocuments([newDoc, ...documents]);
  };
  const handleViewDocument = (docName) => {
    toast({
      title: "Document Viewer",
      description: `Opening ${docName} in document viewer`
    });
  };
  const handleDownload = (docName) => {
    toast({
      title: "Download Started",
      description: `Downloading ${docName}...`
    });
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "text-green-600 bg-green-50";
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "missing":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Document Management" }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleUpload, className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" }),
        "Upload Document"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: documents.filter((d) => d.status === "approved").length }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Approved Documents" })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-600", children: documents.filter((d) => d.status === "pending").length }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Pending Review" })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-red-600", children: documents.filter((d) => d.status === "missing").length }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Missing Documents" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "All Documents" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: documents.map((doc) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: doc.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              doc.type,
              " • ",
              doc.size,
              " • ",
              doc.date
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Badge, { className: getStatusColor(doc.status), children: doc.status }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => handleViewDocument(doc.name),
              children: "View"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => handleDownload(doc.name),
              children: /* @__PURE__ */ jsx(Download, { className: "h-3 w-3" })
            }
          )
        ] })
      ] }, doc.id)) }) })
    ] })
  ] });
}
function AICheckPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const [isRunning, setIsRunning] = useState(false);
  const [lastScan, setLastScan] = useState("2024-01-15 14:30");
  const [results, setResults] = useState({
    passed: 15,
    warnings: 3,
    critical: 1,
    score: 78
  });
  const handleRunScan = async () => {
    setIsRunning(true);
    toast({ title: "AI Compliance Scan", description: "Starting comprehensive compliance analysis..." });
    setTimeout(() => {
      setResults({
        passed: Math.floor(Math.random() * 20) + 10,
        warnings: Math.floor(Math.random() * 5) + 1,
        critical: Math.floor(Math.random() * 3),
        score: Math.floor(Math.random() * 20) + 70
      });
      setLastScan((/* @__PURE__ */ new Date()).toLocaleString());
      setIsRunning(false);
      toast({ title: "Scan Complete", description: "AI compliance analysis finished successfully" });
    }, 3e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "AI Compliance Check" }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleRunScan, disabled: isRunning, className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4" }),
        isRunning ? "Scanning..." : "Run AI Scan"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600", children: results.passed }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Controls Passed" })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-600", children: results.warnings }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Warnings" })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-red-600", children: results.critical }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Critical Issues" })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-primary", children: [
          results.score,
          "%"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Overall Score" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Last Scan Results" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Last updated: ",
          lastScan
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: isRunning ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" }),
        /* @__PURE__ */ jsx("p", { children: "Running AI compliance analysis..." })
      ] }) }) : /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "GDPR Compliance" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "92%" })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: 92, className: "h-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Data Security" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "87%" })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: 87, className: "h-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Access Controls" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "95%" })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: 95, className: "h-2" })
        ] })
      ] }) })
    ] })
  ] });
}
function AuditsPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const audits = [
    { id: 1, name: "ISO 27001 Review", status: "scheduled", date: "2024-03-15", auditor: "TÜV SÜD" },
    { id: 2, name: "GDPR Assessment", status: "in-progress", date: "2024-02-20", auditor: "Internal Team" },
    { id: 3, name: "Annual Security Audit", status: "completed", date: "2024-01-10", auditor: "PwC" }
  ];
  const handleScheduleAudit = () => {
    toast({ title: "Schedule Audit", description: "Audit scheduling form would open here" });
  };
  const handleGenerateReport = () => {
    toast({ title: "Report Generation", description: "Generating comprehensive audit report..." });
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Audits & Reports" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: handleGenerateReport, children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
          "Generate Report"
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: handleScheduleAudit, children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
          "Schedule Audit"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: audits.map((audit) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: audit.name }),
        /* @__PURE__ */ jsx(Badge, { className: audit.status === "completed" ? "bg-green-100 text-green-800" : audit.status === "in-progress" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800", children: audit.status })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
          "Date: ",
          audit.date
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
          "Auditor: ",
          audit.auditor
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "w-full", children: "View Details" })
      ] })
    ] }, audit.id)) })
  ] });
}
function PoliciesPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const policies = [
    { name: "Privacy Policy", status: "active", lastUpdated: "2024-01-15", version: "2.1" },
    { name: "Data Retention Policy", status: "draft", lastUpdated: "2024-01-10", version: "1.3" },
    { name: "Access Control Policy", status: "active", lastUpdated: "2024-01-05", version: "3.0" },
    { name: "Incident Response Policy", status: "review", lastUpdated: "2023-12-20", version: "1.8" }
  ];
  const handleCreatePolicy = () => {
    toast({ title: "Create Policy", description: "Policy creation wizard would open here" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Policies" }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleCreatePolicy, children: [
        /* @__PURE__ */ jsx(FileCheck, { className: "h-4 w-4 mr-2" }),
        "Create Policy"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: policies.map((policy, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-medium", children: policy.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Version ",
          policy.version,
          " • Updated ",
          policy.lastUpdated
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Badge, { variant: policy.status === "active" ? "secondary" : policy.status === "draft" ? "outline" : "destructive", children: policy.status }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "Edit" })
      ] })
    ] }) }) }, index)) })
  ] });
}
function FrameworksPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Compliance Frameworks" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: frameworks.map((framework) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex justify-between", children: [
        framework.name,
        /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold", children: [
          framework.progress,
          "%"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx(Progress, { value: framework.progress, className: "mb-4" }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx(Badge, { variant: framework.status === "compliant" ? "secondary" : framework.status === "warning" ? "outline" : "destructive", children: framework.status }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: () => toast({ title: framework.name, description: `Opening ${framework.name} compliance details` }), children: "View Details" })
        ] })
      ] })
    ] }, framework.name)) })
  ] });
}
function IntegrationsPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const integrations = [
    { name: "AWS", status: "connected", icon: "☁️" },
    { name: "Google Cloud", status: "connected", icon: "🌩️" },
    { name: "GitHub", status: "pending", icon: "🐙" },
    { name: "Azure", status: "error", icon: "⚡" },
    { name: "Slack", status: "disconnected", icon: "💬" },
    { name: "Jira", status: "connected", icon: "🎯" }
  ];
  const handleConnect = (name) => {
    toast({ title: "Integration", description: `Connecting to ${name}...` });
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Integrations" }),
      /* @__PURE__ */ jsx(Button, { onClick: () => toast({ title: "Add Integration", description: "Integration marketplace would open here" }), children: "Add Integration" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: integrations.map((integration) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-2xl", children: integration.icon }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium", children: integration.name }),
          /* @__PURE__ */ jsx(Badge, { variant: integration.status === "connected" ? "secondary" : integration.status === "pending" ? "outline" : integration.status === "error" ? "destructive" : "outline", children: integration.status })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: () => handleConnect(integration.name),
          children: integration.status === "connected" ? "Configure" : "Connect"
        }
      )
    ] }) }) }, integration.name)) })
  ] });
}
function TeamsPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const team = [
    { name: "John Doe", role: "Compliance Manager", email: "john@marsstein.com", status: "active" },
    { name: "Jane Smith", role: "Data Protection Officer", email: "jane@marsstein.com", status: "active" },
    { name: "Mike Johnson", role: "Security Analyst", email: "mike@marsstein.com", status: "pending" },
    { name: "Sarah Wilson", role: "Auditor", email: "sarah@marsstein.com", status: "active" }
  ];
  const handleInviteUser = () => {
    toast({ title: "Invite User", description: "User invitation form would open here" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Team Management" }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleInviteUser, children: [
        /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 mr-2" }),
        "Invite User"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: team.map((member, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(AvatarFallback, { children: member.name.split(" ").map((n) => n[0]).join("") }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium", children: member.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: member.role }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: member.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Badge, { variant: member.status === "active" ? "secondary" : "outline", children: member.status }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "Manage" })
      ] })
    ] }) }) }, index)) })
  ] });
}
function SettingsPage() {
  const { toast } = useToast();
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const handleSaveSettings = () => {
    toast({ title: "Settings Saved", description: "Your preferences have been updated successfully" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Settings" }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "General Settings" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Language" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Choose your preferred language" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: language === "en" ? "default" : "outline",
                  size: "sm",
                  onClick: () => setLanguage("en"),
                  children: "English"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: language === "de" ? "default" : "outline",
                  size: "sm",
                  onClick: () => setLanguage("de"),
                  children: "Deutsch"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Theme" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Choose light or dark mode" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: theme === "light" ? "default" : "outline",
                  size: "sm",
                  onClick: () => setTheme("light"),
                  children: [
                    /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4 mr-1" }),
                    "Light"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: theme === "dark" ? "default" : "outline",
                  size: "sm",
                  onClick: () => setTheme("dark"),
                  children: [
                    /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4 mr-1" }),
                    "Dark"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { onClick: handleSaveSettings, children: "Save Settings" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Notifications" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Email Notifications" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Receive email updates for compliance alerts" })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "Configure" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Audit Reminders" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Get notified about upcoming audits" })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "Configure" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function HelpPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const faqs = [
    { question: "How do I upload documents?", answer: "Go to Documents section and click 'Upload Document' button" },
    { question: "How often should I run compliance checks?", answer: "We recommend running checks weekly or after any system changes" },
    { question: "How do I schedule an audit?", answer: "Visit the Audits & Reports section and click 'Schedule Audit'" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Help & Support" }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Contact Support" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: "info@marsstein.ai" })
          ] }),
          /* @__PURE__ */ jsx(Button, { onClick: () => toast({ title: "Support", description: "Support chat would open here" }), children: "Start Live Chat" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "border-b pb-4 last:border-b-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: faq.answer })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Documentation" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
            "User Guide"
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
            "API Documentation"
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
            "Compliance Templates"
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function Dashboard() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  useLocation();
  return /* @__PURE__ */ jsx(SidebarProvider, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex w-full bg-background", children: [
    /* @__PURE__ */ jsx(Sidebar, { className: "border-r border-border", children: /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx("div", { className: "p-6 border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Shield, { className: "h-8 w-8 text-primary" }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-foreground", children: "Marsstein" })
      ] }) }),
      /* @__PURE__ */ jsx(SidebarGroup, { children: /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: sidebarItems.map((item) => /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ jsxs(
        NavLink,
        {
          to: item.url,
          end: item.url === "/dashboard",
          className: ({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"}`,
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: t(item.titleKey) })
          ]
        }
      ) }) }, item.titleKey)) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsx("header", { className: "border-b border-border bg-card px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(SidebarTrigger, {}),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: t("dashboard_nav_dashboard") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setLanguage(language === "en" ? "de" : "en"),
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(Languages, { className: "h-4 w-4" }),
                language === "en" ? "Deutsch" : "English"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setTheme(theme === "light" ? "dark" : "light"),
              children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(AvatarFallback, { children: "DU" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(DashboardMain, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "documents", element: /* @__PURE__ */ jsx(DocumentsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "ai-check", element: /* @__PURE__ */ jsx(AICheckPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "audits", element: /* @__PURE__ */ jsx(AuditsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "policies", element: /* @__PURE__ */ jsx(PoliciesPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "frameworks", element: /* @__PURE__ */ jsx(FrameworksPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "integrations", element: /* @__PURE__ */ jsx(IntegrationsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "teams", element: /* @__PURE__ */ jsx(TeamsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "settings", element: /* @__PURE__ */ jsx(SettingsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "help", element: /* @__PURE__ */ jsx(HelpPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(DashboardMain, {}) })
      ] })
    ] })
  ] }) });
}
export {
  Dashboard as default
};
