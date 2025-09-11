import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
// PageLoader component for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

// Lazy loaded page components
const Index = lazy(() => import("./pages/Index"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Academy = lazy(() => import("./pages/Academy"));
const AcademyPage = lazy(() => import("./pages/AcademyPage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));

const Resources = lazy(() => import("./pages/Resources").then(module => ({ default: module.Resources })));
const DSGVOComplianceChecklist = lazy(() => import("./pages/resources/DSGVOComplianceChecklist").then(module => ({ default: module.DSGVOComplianceChecklist })));
const DataPrivacyReadinessAssessment = lazy(() => import("./pages/resources/DataPrivacyReadinessAssessment").then(module => ({ default: module.DataPrivacyReadinessAssessment })));
const BreachResponseChecklist = lazy(() => import("./pages/resources/BreachResponseChecklist").then(module => ({ default: module.BreachResponseChecklist })));
const CookieComplianceAudit = lazy(() => import("./pages/resources/CookieComplianceAudit").then(module => ({ default: module.CookieComplianceAudit })));
const VendorAssessmentTemplate = lazy(() => import("./pages/resources/VendorAssessmentTemplate").then(module => ({ default: module.VendorAssessmentTemplate })));

// EU AI Act Assessment Tools
const AIRiskAssessment = lazy(() => import("./pages/assessment-center/AIRiskAssessment"));
const AlgorithmicImpactAssessment = lazy(() => import("./pages/assessment-center/AlgorithmicImpactAssessment"));
const AIGovernanceCheck = lazy(() => import("./pages/assessment-center/AIGovernanceCheck"));
const DsgvoCompliance = lazy(() => import("./pages/DsgvoCompliance"));
const Iso27001Compliance = lazy(() => import("./pages/Iso27001Compliance"));
const EuAiActCompliance = lazy(() => import("./pages/EuAiActCompliance"));
const Soc2Compliance = lazy(() => import("./pages/Soc2Compliance"));
const Iso27017Compliance = lazy(() => import("./pages/Iso27017Compliance"));
const Iso27018Compliance = lazy(() => import("./pages/Iso27018Compliance"));
const TisaxCompliance = lazy(() => import("./pages/TisaxCompliance"));
const Nis2Compliance = lazy(() => import("./pages/Nis2Compliance"));
const HinweisgeberschutzCompliance = lazy(() => import("./pages/HinweisgeberschutzCompliance"));
const GeldwaeschegesetzCompliance = lazy(() => import("./pages/GeldwaeschegesetzCompliance"));
const Tools = lazy(() => import("./pages/Tools"));
const CookieManagementTool = lazy(() => import("./pages/CookieManagementTool"));
const WhistleblowerSystemTool = lazy(() => import("./pages/WhistleblowerSystemTool"));
const CookieManagementToolProduct = lazy(() => import("./pages/CookieManagementToolProduct"));
const WhistleblowerSystemToolProduct = lazy(() => import("./pages/WhistleblowerSystemToolProduct"));
const DsgvoEmailTemplateGenerator = lazy(() => import("./pages/DsgvoEmailTemplateGenerator"));
const DsgvoComplianceScorecard = lazy(() => import("./pages/DsgvoComplianceScorecard"));
const ComplianceAIAssistant = lazy(() => import("./pages/ComplianceAIAssistant"));
const Knowledge = lazy(() => import("./pages/Knowledge"));
const DsgvoGuides = lazy(() => import("./pages/DsgvoGuides"));
const ComplianceFrameworks = lazy(() => import("./pages/ComplianceFrameworks"));
const RiskManagement = lazy(() => import("./pages/RiskManagement"));
const Iso27001Guide = lazy(() => import("./pages/compliance/Iso27001Guide"));
const Soc2Guide = lazy(() => import("./pages/compliance/Soc2Guide"));
const EuAiActGuide = lazy(() => import("./pages/compliance/EuAiActGuide"));
const Nis2Guide = lazy(() => import("./pages/compliance/Nis2Guide"));
const Iso27017Guide = lazy(() => import("./pages/compliance/Iso27017Guide"));
const Iso27018Guide = lazy(() => import("./pages/compliance/Iso27018Guide"));
const HinweisgeberschutzgesetzGuide = lazy(() => import("./pages/compliance/HinweisgeberschutzgesetzGuide"));
const TisaxGuide = lazy(() => import("./pages/compliance/TisaxGuide"));
const GeldwaeschegesetzGuide = lazy(() => import("./pages/compliance/GeldwaeschegesetzGuide"));
const DsgvoGuide = lazy(() => import("./pages/compliance/DsgvoGuide"));
const DsgEkdCompliance = lazy(() => import("./pages/compliance/DsgEkdCompliance"));
const DsgEkdGuide = lazy(() => import("./pages/compliance/DsgEkdGuide"));
const KdgCompliance = lazy(() => import("./pages/compliance/KdgCompliance"));
const KdgGuide = lazy(() => import("./pages/compliance/KdgGuide"));
const DsgvoBasicsGuide = lazy(() => import("./pages/guides/DsgvoBasicsGuide"));
const WebsiteDsgvoGuide = lazy(() => import("./pages/guides/WebsiteDsgvoGuide"));
const Dsgvo30TageGuide = lazy(() => import("./pages/guides/Dsgvo30TageGuide"));
const DataBreachNotfallGuide = lazy(() => import("./pages/guides/DataBreachNotfallGuide"));
const VerarbeitungsverzeichnisGuide = lazy(() => import("./pages/guides/VerarbeitungsverzeichnisGuide"));
const BetroffenenrechteGuide = lazy(() => import("./pages/guides/BetroffenenrechteGuide"));
const TomMassnahmenGuide = lazy(() => import("./pages/guides/TomMassnahmenGuide"));
const DsfaDurchfuehrungGuide = lazy(() => import("./pages/guides/DsfaDurchfuehrungGuide"));
const CrisisManagement = lazy(() => import("./pages/CrisisManagement"));
const DataBreach72hGuide = lazy(() => import("./pages/crisis/DataBreach72hGuide"));
const SecurityIncidentGuide = lazy(() => import("./pages/crisis/SecurityIncidentGuide"));
const CommunicationTemplatesGuide = lazy(() => import("./pages/crisis/CommunicationTemplatesGuide"));
const ComplianceAuditEmergencyGuide = lazy(() => import("./pages/crisis/ComplianceAuditEmergencyGuide"));
const MediaCrisisGuide = lazy(() => import("./pages/crisis/MediaCrisisGuide"));
const VendorDataBreachGuide = lazy(() => import("./pages/crisis/VendorDataBreachGuide"));
const GdprFineResponseGuide = lazy(() => import("./pages/crisis/GdprFineResponseGuide"));
const BusinessContinuityGuide = lazy(() => import("./pages/crisis/BusinessContinuityGuide"));
const Rechtsprechung = lazy(() => import("./pages/Rechtsprechung"));
const SchremsIICase = lazy(() => import("./pages/legal/SchremsIICase"));
const MetaIrlandCase = lazy(() => import("./pages/legal/MetaIrlandCase"));
const CookieLawGuide = lazy(() => import("./pages/legal/CookieLawGuide"));
const FacebookFanpageCase = lazy(() => import("./pages/legal/FacebookFanpageCase"));
const GoogleAnalyticsAustriaCase = lazy(() => import("./pages/legal/GoogleAnalyticsAustriaCase"));
const AmazonLuxembourgCase = lazy(() => import("./pages/legal/AmazonLuxembourgCase"));
const WhatsAppIrelandCase = lazy(() => import("./pages/legal/WhatsAppIrelandCase"));
const Planet49CookieCase = lazy(() => import("./pages/legal/Planet49CookieCase"));
const GoogleFontsMunichCase = lazy(() => import("./pages/legal/GoogleFontsMunichCase"));

// Branchen Wissen Pages
const BranchenWissen = lazy(() => import("./pages/BranchenWissen"));
const HealthcareDsgvoGuide = lazy(() => import("./pages/branchen/HealthcareDsgvoGuide"));
const HealthcareAiComplianceGuide = lazy(() => import("./pages/branchen/HealthcareAiComplianceGuide"));
const EdtechPrivacyGuide = lazy(() => import("./pages/branchen/EdtechPrivacyGuide"));
const FintechComplianceGuide = lazy(() => import("./pages/branchen/FintechComplianceGuide"));
const EcommercePrivacyGuide = lazy(() => import("./pages/branchen/EcommercePrivacyGuide"));
const SaasPrivacyDesignGuide = lazy(() => import("./pages/branchen/SaasPrivacyDesignGuide"));
const Industrie40DatenschutzGuide = lazy(() => import("./pages/branchen/Industrie40DatenschutzGuide"));
const AutomotiveDatenschutz = lazy(() => import("./pages/branchen/AutomotiveDatenschutz"));
const SmartGridComplianceGuide = lazy(() => import("./pages/branchen/SmartGridComplianceGuide"));
const PharmaComplianceGuide = lazy(() => import("./pages/branchen/PharmaComplianceGuide"));
const ProduktionDatenschutzGuide = lazy(() => import("./pages/branchen/ProduktionDatenschutzGuide"));
const TravelComplianceGuide = lazy(() => import("./pages/branchen/TravelComplianceGuide"));
const InsurtechComplianceGuide = lazy(() => import("./pages/branchen/InsurtechComplianceGuide"));
const PropTechCompliance = lazy(() => import("./pages/branchen/PropTechCompliance"));
const LogisticsCompliance = lazy(() => import("./pages/branchen/LogisticsCompliance"));
const DatenschutzPflege = lazy(() => import("./pages/branchen/DatenschutzPflege"));
const DatenschutzArztpraxis = lazy(() => import("./pages/branchen/DatenschutzArztpraxis"));
const DatenschutzKindergarten = lazy(() => import("./pages/branchen/DatenschutzKindergarten"));
const DsgvoVermieter = lazy(() => import("./pages/branchen/DsgvoVermieter"));
const DsgvoVereineComprehensive = lazy(() => import("./pages/wissen/branchen/DsgvoVereineComprehensive"));
const DatenschutzBetriebsrat = lazy(() => import("./pages/branchen/DatenschutzBetriebsrat"));
const DatenschutzHomeofficeComprehensive = lazy(() => import("./pages/wissen/branchen/DatenschutzHomeofficeComprehensive"));

// KI Datenschutz Pages
const KiDatenschutz = lazy(() => import("./pages/KiDatenschutz"));
const KiRisikoklassifizierung = lazy(() => import("./pages/ki/KiRisikoklassifizierung"));
const KiAlgorithmicImpactAssessment = lazy(() => import("./pages/ki/AlgorithmicImpactAssessment"));
const PrivacyPreservingAI = lazy(() => import("./pages/ki/PrivacyPreservingAI"));
const FederatedLearningGuide = lazy(() => import("./pages/ki/FederatedLearningGuide"));
const FinancialAICompliance = lazy(() => import("./pages/ki/FinancialAICompliance"));
const HRAICompliance = lazy(() => import("./pages/ki/HRAICompliance"));
const ModelPrivacyAttacks = lazy(() => import("./pages/ki/ModelPrivacyAttacks"));
const DataMinimizationGuide = lazy(() => import("./pages/ki/DataMinimizationGuide"));
const ExplainableAIGuide = lazy(() => import("./pages/ki/ExplainableAIGuide"));
const PrivacyByDesignAI = lazy(() => import("./pages/ki/PrivacyByDesignAI"));
const KiEinwilligungsmanagement = lazy(() => import("./pages/ki/KiEinwilligungsmanagement"));
const AutomatedDecisionMaking = lazy(() => import("./pages/ki/AutomatedDecisionMaking"));

// Industry Pages
const Industries = lazy(() => import("./pages/Industries"));
const Healthcare = lazy(() => import("./pages/industries/Healthcare"));
const FinancialServices = lazy(() => import("./pages/industries/FinancialServices"));
const ECommerce = lazy(() => import("./pages/industries/ECommerce"));
const SaaS = lazy(() => import("./pages/industries/SaaS"));
const Manufacturing = lazy(() => import("./pages/industries/Manufacturing"));
const Automotive = lazy(() => import("./pages/industries/Automotive"));
const Energy = lazy(() => import("./pages/industries/Energy"));
const Food = lazy(() => import("./pages/industries/Food"));
const Logistics = lazy(() => import("./pages/industries/Logistics"));
const SitemapSEO = lazy(() => import("./pages/SitemapSEO"));
const FinalChecks = lazy(() => import("./pages/FinalChecks"));
const About = lazy(() => import("./pages/About"));

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
            <BrowserRouter>
              <ScrollToTop />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/academy" element={<AcademyPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/ueber-uns" element={<About />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/sitemap-seo" element={<SitemapSEO />} />
                <Route path="/final-checks" element={<FinalChecks />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                
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
                <Route path="/wissen/ki-datenschutz" element={<KiDatenschutz />} />
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
                <Route path="/dsg-ekd" element={<DsgEkdCompliance />} />
                <Route path="/compliance/dsg-ekd" element={<DsgEkdGuide />} />
                <Route path="/kdg" element={<KdgCompliance />} />
                <Route path="/compliance/kdg" element={<KdgGuide />} />
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
                <Route path="/wissen/branchen/healthcare-ai-compliance" element={<HealthcareAiComplianceGuide />} />
                <Route path="/wissen/branchen/edtech-privacy" element={<EdtechPrivacyGuide />} />
                <Route path="/wissen/branchen/fintech-compliance" element={<FintechComplianceGuide />} />
                <Route path="/wissen/branchen/ecommerce-privacy" element={<EcommercePrivacyGuide />} />
                <Route path="/wissen/branchen/saas-privacy-design" element={<SaasPrivacyDesignGuide />} />
                <Route path="/wissen/branchen/industrie-40-datenschutz" element={<Industrie40DatenschutzGuide />} />
                <Route path="/wissen/branchen/automotive-datenschutz" element={<AutomotiveDatenschutz />} />
                <Route path="/wissen/branchen/smart-grid-compliance" element={<SmartGridComplianceGuide />} />
                <Route path="/wissen/branchen/pharma-compliance" element={<PharmaComplianceGuide />} />
                <Route path="/wissen/branchen/produktion" element={<ProduktionDatenschutzGuide />} />
                <Route path="/wissen/branchen/travel-compliance" element={<TravelComplianceGuide />} />
                <Route path="/wissen/branchen/insurtech-compliance" element={<InsurtechComplianceGuide />} />
                <Route path="/wissen/branchen/proptech-compliance" element={<PropTechCompliance />} />
                <Route path="/wissen/branchen/logistics-compliance" element={<LogisticsCompliance />} />
                <Route path="/wissen/branchen/datenschutz-pflege" element={<DatenschutzPflege />} />
                <Route path="/wissen/branchen/datenschutz-arztpraxis" element={<DatenschutzArztpraxis />} />
                <Route path="/wissen/branchen/datenschutz-kindergarten" element={<DatenschutzKindergarten />} />
                <Route path="/wissen/branchen/dsgvo-vermieter" element={<DsgvoVermieter />} />
                <Route path="/wissen/branchen/dsgvo-vereine" element={<DsgvoVereineComprehensive />} />
                <Route path="/wissen/branchen/datenschutz-betriebsrat" element={<DatenschutzBetriebsrat />} />
                <Route path="/wissen/branchen/datenschutz-homeoffice" element={<DatenschutzHomeofficeComprehensive />} />
                
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
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
