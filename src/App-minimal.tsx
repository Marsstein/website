import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Import nur die Haupt-Seiten
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Academy from "./pages/Academy";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

// Compliance pages
import DsgvoCompliance from "./pages/DsgvoCompliance";
import Iso27001Compliance from "./pages/Iso27001Compliance";
import EuAiActCompliance from "./pages/EuAiActCompliance";
import Soc2Compliance from "./pages/Soc2Compliance";
import Iso27017Compliance from "./pages/Iso27017Compliance";
import Iso27018Compliance from "./pages/Iso27018Compliance";
import TisaxCompliance from "./pages/TisaxCompliance";
import Nis2Compliance from "./pages/Nis2Compliance";
import HinweisgeberschutzCompliance from "./pages/HinweisgeberschutzCompliance";
import GeldwaeschegesetzCompliance from "./pages/GeldwaeschegesetzCompliance";

// Tools and Resources
import { Resources } from "./pages/Resources";
import { DSGVOComplianceChecklist } from "./pages/resources/DSGVOComplianceChecklist";
import { DataPrivacyReadinessAssessment } from "./pages/resources/DataPrivacyReadinessAssessment";
import { BreachResponseChecklist } from "./pages/resources/BreachResponseChecklist";
import { CookieComplianceAudit } from "./pages/resources/CookieComplianceAudit";
import { VendorAssessmentTemplate } from "./pages/resources/VendorAssessmentTemplate";

// Assessment Tools
import AIRiskAssessment from "./pages/assessment-center/AIRiskAssessment";
import AlgorithmicImpactAssessment from "./pages/assessment-center/AlgorithmicImpactAssessment";
import AIGovernanceCheck from "./pages/assessment-center/AIGovernanceCheck";

// Tools
import Tools from "./pages/Tools";
import CookieManagementTool from "./pages/CookieManagementTool";
import WhistleblowerSystemTool from "./pages/WhistleblowerSystemTool";
import CookieManagementToolProduct from "./pages/CookieManagementToolProduct";
import WhistleblowerSystemToolProduct from "./pages/WhistleblowerSystemToolProduct";
import DsgvoEmailTemplateGenerator from "./pages/DsgvoEmailTemplateGenerator";
import DsgvoComplianceScorecard from "./pages/DsgvoComplianceScorecard";
import ComplianceAIAssistant from "./pages/ComplianceAIAssistant";

// Knowledge and Guides
import Knowledge from "./pages/Knowledge";
import DsgvoGuides from "./pages/DsgvoGuides";
import ComplianceFrameworks from "./pages/ComplianceFrameworks";
import Iso27001Guide from "./pages/compliance/Iso27001Guide";
import Soc2Guide from "./pages/compliance/Soc2Guide";
import EuAiActGuide from "./pages/compliance/EuAiActGuide";
import Nis2Guide from "./pages/compliance/Nis2Guide";
import Iso27017Guide from "./pages/compliance/Iso27017Guide";
import Iso27018Guide from "./pages/compliance/Iso27018Guide";
import HinweisgeberschutzgesetzGuide from "./pages/compliance/HinweisgeberschutzgesetzGuide";
import TisaxGuide from "./pages/compliance/TisaxGuide";
import GeldwaeschegesetzGuide from "./pages/compliance/GeldwaeschegesetzGuide";
import DsgvoGuide from "./pages/compliance/DsgvoGuide";
import DsgvoBasicsGuide from "./pages/guides/DsgvoBasicsGuide";
import WebsiteDsgvoGuide from "./pages/guides/WebsiteDsgvoGuide";
import Dsgvo30TageGuide from "./pages/guides/Dsgvo30TageGuide";
import DataBreachNotfallGuide from "./pages/guides/DataBreachNotfallGuide";
import CrisisManagement from "./pages/CrisisManagement";
import DataBreach72hGuide from "./pages/crisis/DataBreach72hGuide";
import SecurityIncidentGuide from "./pages/crisis/SecurityIncidentGuide";
import CommunicationTemplatesGuide from "./pages/crisis/CommunicationTemplatesGuide";
import ComplianceAuditEmergencyGuide from "./pages/crisis/ComplianceAuditEmergencyGuide";
import MediaCrisisGuide from "./pages/crisis/MediaCrisisGuide";
import VendorDataBreachGuide from "./pages/crisis/VendorDataBreachGuide";
import GdprFineResponseGuide from "./pages/crisis/GdprFineResponseGuide";
import BusinessContinuityGuide from "./pages/crisis/BusinessContinuityGuide";
import Rechtsprechung from "./pages/Rechtsprechung";
import SchremsIICase from "./pages/legal/SchremsIICase";
import MetaIrlandCase from "./pages/legal/MetaIrlandCase";
import CookieLawGuide from "./pages/legal/CookieLawGuide";
import FacebookFanpageCase from "./pages/legal/FacebookFanpageCase";
import GoogleAnalyticsAustriaCase from "./pages/legal/GoogleAnalyticsAustriaCase";
import AmazonLuxembourgCase from "./pages/legal/AmazonLuxembourgCase";
import WhatsAppIrelandCase from "./pages/legal/WhatsAppIrelandCase";
import Planet49CookieCase from "./pages/legal/Planet49CookieCase";
import GoogleFontsMunichCase from "./pages/legal/GoogleFontsMunichCase";

// Branchen Wissen Pages
import BranchenWissen from "./pages/BranchenWissen";
import HealthcareDsgvoGuide from "./pages/branchen/HealthcareDsgvoGuide";
import FintechComplianceGuide from "./pages/branchen/FintechComplianceGuide";
import EcommercePrivacyGuide from "./pages/branchen/EcommercePrivacyGuide";
import SaasPrivacyDesignGuide from "./pages/branchen/SaasPrivacyDesignGuide";
import Industrie40DatenschutzGuide from "./pages/branchen/Industrie40DatenschutzGuide";

// KI Datenschutz Pages
import KiDatenschutz from "./pages/KiDatenschutz";
import KiRisikoklassifizierung from "./pages/ki/KiRisikoklassifizierung";
import KiAlgorithmicImpactAssessment from "./pages/ki/AlgorithmicImpactAssessment";
import PrivacyPreservingAI from "./pages/ki/PrivacyPreservingAI";
import FederatedLearningGuide from "./pages/ki/FederatedLearningGuide";
import FinancialAICompliance from "./pages/ki/FinancialAICompliance";
import HRAICompliance from "./pages/ki/HRAICompliance";
import ModelPrivacyAttacks from "./pages/ki/ModelPrivacyAttacks";
import DataMinimizationGuide from "./pages/ki/DataMinimizationGuide";
import ExplainableAIGuide from "./pages/ki/ExplainableAIGuide";

// Industries - Using full featured version
import Industries from "./pages/Industries";

// Add back all other industry pages
import Healthcare from "./pages/industries/Healthcare";
import FinancialServices from "./pages/industries/FinancialServices";
import ECommerce from "./pages/industries/ECommerce";
import SaaS from "./pages/industries/SaaS";
import Manufacturing from "./pages/industries/Manufacturing";
import Automotive from "./pages/industries/Automotive";
import Energy from "./pages/industries/Energy";
import Food from "./pages/industries/Food";
import Logistics from "./pages/industries/Logistics";

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
                
                {/* Legacy routes */}
                <Route path="/dsgvo-compliance" element={<DsgvoCompliance />} />
                <Route path="/iso-27001-compliance" element={<Iso27001Compliance />} />
                <Route path="/eu-ai-act-compliance" element={<EuAiActCompliance />} />
                <Route path="/soc2-compliance" element={<Soc2Compliance />} />
                <Route path="/iso-27017-compliance" element={<Iso27017Compliance />} />
                <Route path="/iso-27018-compliance" element={<Iso27018Compliance />} />
                <Route path="/tisax-compliance" element={<TisaxCompliance />} />
                
                {/* New structured routes */}
                <Route path="/regulierung/dsgvo" element={<DsgvoCompliance />} />
                <Route path="/regulierung/eu-ai-act" element={<EuAiActCompliance />} />
                <Route path="/regulierung/nis2" element={<Nis2Compliance />} />
                <Route path="/regulierung/hinweisgeberschutzgesetz" element={<HinweisgeberschutzCompliance />} />
                <Route path="/regulierung/geldwaeschegesetz" element={<GeldwaeschegesetzCompliance />} />
                
                {/* Zertifizierungen */}
                <Route path="/zertifizierung/iso-27001" element={<Iso27001Compliance />} />
                <Route path="/zertifizierung/soc2" element={<Soc2Compliance />} />
                <Route path="/zertifizierung/iso-27017" element={<Iso27017Compliance />} />
                <Route path="/zertifizierung/iso-27018" element={<Iso27018Compliance />} />
                <Route path="/zertifizierung/tisax" element={<TisaxCompliance />} />
                
                {/* Assessment Center Routes */}
                <Route path="/assessment-center" element={<Resources />} />
                <Route path="/assessment-center/dsgvo-compliance-checklist" element={<DSGVOComplianceChecklist />} />
                <Route path="/assessment-center/datenschutz-readiness-assessment" element={<DataPrivacyReadinessAssessment />} />
                <Route path="/assessment-center/breach-response-checklist" element={<BreachResponseChecklist />} />
                <Route path="/assessment-center/cookie-compliance-audit" element={<CookieComplianceAudit />} />
                <Route path="/assessment-center/vendor-assessment-template" element={<VendorAssessmentTemplate />} />
                
                {/* EU AI Act Assessment Tools */}
                <Route path="/assessment-center/ai-risk-assessment" element={<AIRiskAssessment />} />
                <Route path="/assessment-center/algorithmic-impact-assessment" element={<AlgorithmicImpactAssessment />} />
                <Route path="/assessment-center/ai-governance-check" element={<AIGovernanceCheck />} />
                
                {/* Tools Routes */}
                <Route path="/tools" element={<Tools />} />
                <Route path="/tools/cookie-management" element={<CookieManagementTool />} />
                <Route path="/tools/whistleblower-system" element={<WhistleblowerSystemTool />} />
                <Route path="/tools/cookie-management-tool" element={<CookieManagementToolProduct />} />
                <Route path="/tools/whistleblower-system-tool" element={<WhistleblowerSystemToolProduct />} />
                <Route path="/tools/dsgvo-email-template-generator" element={<DsgvoEmailTemplateGenerator />} />
                <Route path="/tools/dsgvo-compliance-scorecard" element={<DsgvoComplianceScorecard />} />
                <Route path="/tools/compliance-ai-assistant" element={<ComplianceAIAssistant />} />
                
                {/* Knowledge Routes */}
                <Route path="/wissen" element={<Knowledge />} />
                <Route path="/wissen/dsgvo" element={<DsgvoGuides />} />
                <Route path="/wissen/ki-compliance" element={<KiDatenschutz />} />
                <Route path="/wissen/cybersecurity" element={<CrisisManagement />} />
                <Route path="/wissen/zertifizierungen" element={<ComplianceFrameworks />} />
                <Route path="/wissen/branchen" element={<BranchenWissen />} />
                <Route path="/wissen/compliance-frameworks" element={<ComplianceFrameworks />} />
                <Route path="/compliance/iso-27001" element={<Iso27001Guide />} />
                <Route path="/compliance/soc-2" element={<Soc2Guide />} />
                <Route path="/compliance/eu-ai-act" element={<EuAiActGuide />} />
                <Route path="/compliance/nis2" element={<Nis2Guide />} />
                <Route path="/compliance/iso-27017" element={<Iso27017Guide />} />
                <Route path="/compliance/iso-27018" element={<Iso27018Guide />} />
                <Route path="/compliance/hinweisgeberschutzgesetz" element={<HinweisgeberschutzgesetzGuide />} />
                <Route path="/compliance/tisax" element={<TisaxGuide />} />
                <Route path="/compliance/geldwaeschegesetz" element={<GeldwaeschegesetzGuide />} />
                <Route path="/compliance/dsgvo" element={<DsgvoGuide />} />
                <Route path="/wissen/leitfaden/dsgvo-grundlagen" element={<DsgvoBasicsGuide />} />
                <Route path="/wissen/leitfaden/website-dsgvo" element={<WebsiteDsgvoGuide />} />
                <Route path="/wissen/leitfaden/dsgvo-30-tage" element={<Dsgvo30TageGuide />} />
                <Route path="/wissen/leitfaden/data-breach-notfall" element={<DataBreachNotfallGuide />} />
                
                {/* Industry Routes */}
                <Route path="/branchen" element={<Industries />} />
                <Route path="/branchen/gesundheitswesen" element={<Healthcare />} />
                <Route path="/branchen/finanzdienstleister" element={<FinancialServices />} />
                <Route path="/branchen/e-commerce" element={<ECommerce />} />
                <Route path="/branchen/saas-unternehmen" element={<SaaS />} />
                <Route path="/branchen/produktion" element={<Manufacturing />} />
                <Route path="/branchen/automotive" element={<Automotive />} />
                <Route path="/branchen/energie" element={<Energy />} />
                <Route path="/branchen/lebensmittel" element={<Food />} />
                <Route path="/branchen/logistik" element={<Logistics />} />
                
                {/* Crisis Management Routes */}
                <Route path="/wissen/krisenmanagement" element={<CrisisManagement />} />
                <Route path="/wissen/krisenmanagement/data-breach-72h" element={<DataBreach72hGuide />} />
                <Route path="/wissen/krisenmanagement/security-incident" element={<SecurityIncidentGuide />} />
                <Route path="/wissen/krisenmanagement/communication-templates" element={<CommunicationTemplatesGuide />} />
                <Route path="/wissen/krisenmanagement/compliance-audit-emergency" element={<ComplianceAuditEmergencyGuide />} />
                <Route path="/wissen/krisenmanagement/media-crisis" element={<MediaCrisisGuide />} />
                <Route path="/wissen/krisenmanagement/vendor-data-breach" element={<VendorDataBreachGuide />} />
                <Route path="/wissen/krisenmanagement/gdpr-fine-response" element={<GdprFineResponseGuide />} />
                <Route path="/wissen/krisenmanagement/business-continuity" element={<BusinessContinuityGuide />} />
                
                {/* Legal/Rechtsprechung Routes */}
                <Route path="/wissen/rechtsprechung" element={<Rechtsprechung />} />
                <Route path="/wissen/rechtsprechung/schrems-ii" element={<SchremsIICase />} />
                <Route path="/wissen/rechtsprechung/meta-irland-2024" element={<MetaIrlandCase />} />
                <Route path="/wissen/rechtsprechung/cookie-law" element={<CookieLawGuide />} />
                <Route path="/wissen/rechtsprechung/facebook-fanpage" element={<FacebookFanpageCase />} />
                <Route path="/wissen/rechtsprechung/google-analytics-austria" element={<GoogleAnalyticsAustriaCase />} />
                <Route path="/wissen/rechtsprechung/amazon-luxemburg-2021" element={<AmazonLuxembourgCase />} />
                <Route path="/wissen/rechtsprechung/whatsapp-irland-2021" element={<WhatsAppIrelandCase />} />
                <Route path="/wissen/rechtsprechung/planet49-cookie" element={<Planet49CookieCase />} />
                <Route path="/wissen/rechtsprechung/google-fonts-muenchen" element={<GoogleFontsMunichCase />} />
                
                {/* Branchen Wissen Routes */}
                <Route path="/wissen/branchen/gesundheitswesen-dsgvo" element={<HealthcareDsgvoGuide />} />
                <Route path="/wissen/branchen/fintech-compliance" element={<FintechComplianceGuide />} />
                <Route path="/wissen/branchen/ecommerce-privacy" element={<EcommercePrivacyGuide />} />
                <Route path="/wissen/branchen/saas-privacy-design" element={<SaasPrivacyDesignGuide />} />
                <Route path="/wissen/branchen/industrie-40-datenschutz" element={<Industrie40DatenschutzGuide />} />
                
                {/* KI Compliance Routes */}
                <Route path="/wissen/ki-datenschutz/risikoklassifizierung" element={<KiRisikoklassifizierung />} />
                <Route path="/wissen/ki-datenschutz/algorithmic-impact-assessment" element={<KiAlgorithmicImpactAssessment />} />
                <Route path="/wissen/ki-datenschutz/privacy-preserving-ai" element={<PrivacyPreservingAI />} />
                <Route path="/wissen/ki-datenschutz/federated-learning" element={<FederatedLearningGuide />} />
                <Route path="/wissen/ki-datenschutz/financial-ai-compliance" element={<FinancialAICompliance />} />
                <Route path="/wissen/ki-datenschutz/hr-ai-compliance" element={<HRAICompliance />} />
                <Route path="/wissen/ki-datenschutz/model-privacy-attacks" element={<ModelPrivacyAttacks />} />
                <Route path="/wissen/ki-datenschutz/data-minimization" element={<DataMinimizationGuide />} />
                <Route path="/wissen/ki-datenschutz/explainable-ai" element={<ExplainableAIGuide />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;