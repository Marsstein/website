import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Academy from "./pages/Academy";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import { Resources } from "./pages/Resources";
import { DSGVOComplianceChecklist } from "./pages/resources/DSGVOComplianceChecklist";
import { DataPrivacyReadinessAssessment } from "./pages/resources/DataPrivacyReadinessAssessment";
import { BreachResponseChecklist } from "./pages/resources/BreachResponseChecklist";
import { CookieComplianceAudit } from "./pages/resources/CookieComplianceAudit";
import { VendorAssessmentTemplate } from "./pages/resources/VendorAssessmentTemplate";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/thank-you" element={<ThankYou />} />
                
                {/* Resources Routes */}
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/dsgvo-compliance-checklist" element={<DSGVOComplianceChecklist />} />
                <Route path="/resources/datenschutz-readiness-assessment" element={<DataPrivacyReadinessAssessment />} />
                <Route path="/resources/breach-response-checklist" element={<BreachResponseChecklist />} />
                <Route path="/resources/cookie-compliance-audit" element={<CookieComplianceAudit />} />
                <Route path="/resources/vendor-assessment-template" element={<VendorAssessmentTemplate />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
