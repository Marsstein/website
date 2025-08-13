import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ContactPage from "./pages/ContactPage";
import Academy from "./pages/Academy";
import AcademyPage from "./pages/AcademyPage";
import Pricing from "./pages/Pricing";
import PricingPage from "./pages/PricingPage";
import Dashboard from "./pages/Dashboard";
import DashboardPage from "./pages/DashboardPage";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

import { Resources } from "./pages/Resources";
import { DSGVOComplianceChecklist } from "./pages/resources/DSGVOComplianceChecklist";
import { DataPrivacyReadinessAssessment } from "./pages/resources/DataPrivacyReadinessAssessment";
import { BreachResponseChecklist } from "./pages/resources/BreachResponseChecklist";
import { CookieComplianceAudit } from "./pages/resources/CookieComplianceAudit";
import { VendorAssessmentTemplate } from "./pages/resources/VendorAssessmentTemplate";

// EU AI Act Assessment Tools
import AIRiskAssessment from "./pages/assessment-center/AIRiskAssessment";
import AlgorithmicImpactAssessment from "./pages/assessment-center/AlgorithmicImpactAssessment";
import AIGovernanceCheck from "./pages/assessment-center/AIGovernanceCheck";
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
import Tools from "./pages/Tools";
import CookieManagementTool from "./pages/CookieManagementTool";
import WhistleblowerSystemTool from "./pages/WhistleblowerSystemTool";
import CookieManagementToolProduct from "./pages/CookieManagementToolProduct";
import WhistleblowerSystemToolProduct from "./pages/WhistleblowerSystemToolProduct";
import DsgvoEmailTemplateGenerator from "./pages/DsgvoEmailTemplateGenerator";
import DsgvoComplianceScorecard from "./pages/DsgvoComplianceScorecard";
import ComplianceAIAssistant from "./pages/ComplianceAIAssistant";
import Knowledge from "./pages/Knowledge";
import DsgvoGuides from "./pages/DsgvoGuides";
import ComplianceFrameworks from "./pages/ComplianceFrameworks";
import RiskManagement from "./pages/RiskManagement";
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
import VerarbeitungsverzeichnisGuide from "./pages/guides/VerarbeitungsverzeichnisGuide";
import BetroffenenrechteGuide from "./pages/guides/BetroffenenrechteGuide";
import TomMassnahmenGuide from "./pages/guides/TomMassnahmenGuide";
import DsfaDurchfuehrungGuide from "./pages/guides/DsfaDurchfuehrungGuide";
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
import PrivacyByDesignAI from "./pages/ki/PrivacyByDesignAI";
import KiEinwilligungsmanagement from "./pages/ki/KiEinwilligungsmanagement";
import AutomatedDecisionMaking from "./pages/ki/AutomatedDecisionMaking";

// Industry Pages
import Industries from "./pages/Industries";
import Healthcare from "./pages/industries/Healthcare";
import FinancialServices from "./pages/industries/FinancialServices";
import ECommerce from "./pages/industries/ECommerce";
import SaaS from "./pages/industries/SaaS";
import Manufacturing from "./pages/industries/Manufacturing";
import Automotive from "./pages/industries/Automotive";
import Energy from "./pages/industries/Energy";
import Food from "./pages/industries/Food";
import Logistics from "./pages/industries/Logistics";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";
import TestFixed from "./pages/TestFixed";
import TestPerfect from "./pages/TestPerfect";
import TestBidirectional from "./pages/TestBidirectional";
import TestFinal from "./pages/TestFinal";
import TestPerfected from "./pages/TestPerfected";
import TestApproach1 from "./pages/TestApproach1";
import TestApproach2 from "./pages/TestApproach2";
import TestApproach3 from "./pages/TestApproach3";
import TestDiagnostic from "./pages/TestDiagnostic";
import TestUltimateDiagnostic from "./pages/TestUltimateDiagnostic";
import TestRobust from "./pages/TestRobust";
import TestSimpleFinal from "./pages/TestSimpleFinal";
import TestOptimized from "./pages/TestOptimized";
import TestIndex from "./pages/TestIndex";
import SimpleTest from "./pages/SimpleTest";
import DesignSeparatorTest from "./pages/DesignSeparatorTest";
import FooterTest from "./pages/FooterTest";
import SitemapSEO from "./pages/SitemapSEO";
import FinalChecks from "./pages/FinalChecks";

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
      <HelmetProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/academy" element={<AcademyPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/sitemap-seo" element={<SitemapSEO />} />
                <Route path="/final-checks" element={<FinalChecks />} />
                
                {/* Test Routes for Scroll Animation Tests - moved up for priority */}
                <Route path="/design-separator-test" element={<DesignSeparatorTest />} />
                <Route path="/simple-test" element={<SimpleTest />} />
                <Route path="/test-footer" element={<FooterTest />} />
                <Route path="/tests" element={<TestIndex />} />
                <Route path="/test1" element={<Test1 />} />
                <Route path="/test2" element={<Test2 />} />
                <Route path="/test3" element={<Test3 />} />
                <Route path="/test-fixed" element={<TestFixed />} />
                <Route path="/test-perfect" element={<TestPerfect />} />
                <Route path="/test-bidirectional" element={<TestBidirectional />} />
                <Route path="/test-final" element={<TestFinal />} />
                <Route path="/test-perfected" element={<TestPerfected />} />
                <Route path="/approach1" element={<TestApproach1 />} />
                <Route path="/approach2" element={<TestApproach2 />} />
                <Route path="/approach3" element={<TestApproach3 />} />
                <Route path="/diagnostic" element={<TestDiagnostic />} />
                <Route path="/ultimate-diagnostic" element={<TestUltimateDiagnostic />} />
                <Route path="/robust" element={<TestRobust />} />
                <Route path="/simple-final" element={<TestSimpleFinal />} />
                <Route path="/optimized" element={<TestOptimized />} />
                {/* Legacy routes (keep for backwards compatibility) */}
                <Route path="/dsgvo-compliance" element={<DsgvoCompliance />} />
                <Route path="/iso-27001-compliance" element={<Iso27001Compliance />} />
                <Route path="/eu-ai-act-compliance" element={<EuAiActCompliance />} />
                <Route path="/soc2-compliance" element={<Soc2Compliance />} />
                <Route path="/iso-27017-compliance" element={<Iso27017Compliance />} />
                <Route path="/iso-27018-compliance" element={<Iso27018Compliance />} />
                <Route path="/tisax-compliance" element={<TisaxCompliance />} />

                {/* New structured routes */}
                {/* New Product URLs - Regulierungen */}
                <Route path="/dsgvo" element={<DsgvoCompliance />} />
                <Route path="/eu-ai-act" element={<EuAiActCompliance />} />
                <Route path="/nis2-compliance" element={<Nis2Compliance />} />
                <Route path="/hinweisgeberschutzgesetz" element={<HinweisgeberschutzCompliance />} />
                <Route path="/geldwaeschegesetz" element={<GeldwaeschegesetzCompliance />} />
                
                {/* Old Regulierungen URLs - Redirects will handle these */}
                <Route path="/regulierung/dsgvo" element={<DsgvoCompliance />} />
                <Route path="/regulierung/eu-ai-act" element={<EuAiActCompliance />} />
                <Route path="/regulierung/nis2" element={<Nis2Compliance />} />
                <Route path="/regulierung/hinweisgeberschutzgesetz" element={<HinweisgeberschutzCompliance />} />
                <Route path="/regulierung/geldwaeschegesetz" element={<GeldwaeschegesetzCompliance />} />
                
                {/* New Product URLs - Zertifizierungen */}
                <Route path="/iso-27001-zertifizierung" element={<Iso27001Compliance />} />
                <Route path="/soc2-zertifizierung" element={<Soc2Compliance />} />
                <Route path="/iso-27017-zertifizierung" element={<Iso27017Compliance />} />
                <Route path="/iso-27018-zertifizierung" element={<Iso27018Compliance />} />
                <Route path="/tisax-zertifizierung" element={<TisaxCompliance />} />
                
                {/* Old Zertifizierungen URLs - Redirects will handle these */}
                <Route path="/zertifizierung/iso-27001" element={<Iso27001Compliance />} />
                <Route path="/zertifizierung/soc2" element={<Soc2Compliance />} />
                <Route path="/zertifizierung/iso-27017" element={<Iso27017Compliance />} />
                <Route path="/zertifizierung/iso-27018" element={<Iso27018Compliance />} />
                <Route path="/zertifizierung/tisax" element={<TisaxCompliance />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/thank-you" element={<ThankYou />} />

                {/* Assessment Center Routes */}
                <Route path="/assessment-center" element={<Resources />} />
                
                {/* DSGVO Assessment Tools */}
                <Route path="/assessment-center/dsgvo-compliance-checklist" element={<DSGVOComplianceChecklist />} />
                <Route path="/assessment-center/datenschutz-readiness-assessment" element={<DataPrivacyReadinessAssessment />} />
                <Route path="/assessment-center/breach-response-checklist" element={<BreachResponseChecklist />} />
                <Route path="/assessment-center/cookie-compliance-audit" element={<CookieComplianceAudit />} />
                <Route path="/assessment-center/vendor-assessment-template" element={<VendorAssessmentTemplate />} />
                
                {/* EU AI Act Assessment Tools */}
                <Route path="/assessment-center/ai-risk-assessment" element={<AIRiskAssessment />} />
                <Route path="/assessment-center/algorithmic-impact-assessment" element={<AlgorithmicImpactAssessment />} />
                <Route path="/assessment-center/ai-governance-check" element={<AIGovernanceCheck />} />

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

                {/* Tools Routes */}
                <Route path="/tools" element={<Tools />} />
                <Route path="/tools/cookie-management" element={<CookieManagementTool />} />
                <Route path="/tools/whistleblower-system" element={<WhistleblowerSystemTool />} />
                <Route path="/tools/cookie-management-tool" element={<CookieManagementTool />} />
                <Route path="/tools/whistleblower-system-tool" element={<WhistleblowerSystemTool />} />
                <Route path="/tools/dsgvo-email-template-generator" element={<DsgvoEmailTemplateGenerator />} />
                <Route path="/tools/dsgvo-compliance-scorecard" element={<DsgvoComplianceScorecard />} />
                <Route path="/tools/compliance-ai-assistant" element={<ComplianceAIAssistant />} />

                {/* Knowledge/Wissen Routes */}
                <Route path="/wissen" element={<Knowledge />} />
                <Route path="/wissen/dsgvo" element={<DsgvoGuides />} />
                <Route path="/wissen/ki-compliance" element={<KiDatenschutz />} />
                <Route path="/wissen/cybersecurity" element={<CrisisManagement />} />
                <Route path="/wissen/zertifizierungen" element={<ComplianceFrameworks />} />
                <Route path="/wissen/branchen" element={<BranchenWissen />} />
                <Route path="/wissen/dsgvo-leitfaeden" element={<DsgvoGuides />} />
                <Route path="/wissen/risk-management" element={<RiskManagement />} />
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
                <Route path="/wissen/leitfaden/verarbeitungsverzeichnis" element={<VerarbeitungsverzeichnisGuide />} />
                <Route path="/wissen/leitfaden/betroffenenrechte" element={<BetroffenenrechteGuide />} />
                <Route path="/wissen/leitfaden/tom-massnahmen" element={<TomMassnahmenGuide />} />
                <Route path="/wissen/leitfaden/dsfa-durchfuehrung" element={<DsfaDurchfuehrungGuide />} />
                <Route path="/wissen/krisenmanagement" element={<CrisisManagement />} />
                <Route path="/wissen/krisenmanagement/data-breach-72h" element={<DataBreach72hGuide />} />
                <Route path="/wissen/krisenmanagement/security-incident" element={<SecurityIncidentGuide />} />
                <Route path="/wissen/krisenmanagement/communication-templates" element={<CommunicationTemplatesGuide />} />
                <Route path="/wissen/krisenmanagement/compliance-audit-emergency" element={<ComplianceAuditEmergencyGuide />} />
                <Route path="/wissen/krisenmanagement/media-crisis" element={<MediaCrisisGuide />} />
                <Route path="/wissen/krisenmanagement/vendor-data-breach" element={<VendorDataBreachGuide />} />
                <Route path="/wissen/krisenmanagement/gdpr-fine-response" element={<GdprFineResponseGuide />} />
                <Route path="/wissen/krisenmanagement/business-continuity" element={<BusinessContinuityGuide />} />
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
                
                {/* Branchen Wissen Routes - now part of main structure */}
                <Route path="/wissen/branchen/gesundheitswesen-dsgvo" element={<HealthcareDsgvoGuide />} />
                <Route path="/wissen/branchen/fintech-compliance" element={<FintechComplianceGuide />} />
                <Route path="/wissen/branchen/ecommerce-privacy" element={<EcommercePrivacyGuide />} />
                <Route path="/wissen/branchen/saas-privacy-design" element={<SaasPrivacyDesignGuide />} />
                <Route path="/wissen/branchen/industrie-40-datenschutz" element={<Industrie40DatenschutzGuide />} />
                
                {/* KI Compliance Routes - now part of main structure */}
                <Route path="/wissen/ki-datenschutz/risikoklassifizierung" element={<KiRisikoklassifizierung />} />
                <Route path="/wissen/ki-datenschutz/algorithmic-impact-assessment" element={<KiAlgorithmicImpactAssessment />} />
                <Route path="/wissen/ki-datenschutz/privacy-preserving-ai" element={<PrivacyPreservingAI />} />
                <Route path="/wissen/ki-datenschutz/federated-learning" element={<FederatedLearningGuide />} />
                <Route path="/wissen/ki-datenschutz/financial-ai-compliance" element={<FinancialAICompliance />} />
                <Route path="/wissen/ki-datenschutz/hr-ai-compliance" element={<HRAICompliance />} />
                <Route path="/wissen/ki-datenschutz/model-privacy-attacks" element={<ModelPrivacyAttacks />} />
                <Route path="/wissen/ki-datenschutz/data-minimization" element={<DataMinimizationGuide />} />
                <Route path="/wissen/ki-datenschutz/explainable-ai" element={<ExplainableAIGuide />} />
                <Route path="/wissen/ki-datenschutz/privacy-by-design-ai" element={<PrivacyByDesignAI />} />
                <Route path="/wissen/ki-datenschutz/ki-einwilligungsmanagement" element={<KiEinwilligungsmanagement />} />
                <Route path="/wissen/ki-datenschutz/automated-decision-making" element={<AutomatedDecisionMaking />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
