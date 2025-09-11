import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import Layout from './Layout';

// Lazy load all pages
const Index = lazy(() => import('./pages/Index'));
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Academy = lazy(() => import('./pages/Academy'));
const AcademyPage = lazy(() => import('./pages/AcademyPage'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));

// Resources
const Resources = lazy(() => import('./pages/Resources').then(m => ({ default: m.Resources })));
const DSGVOComplianceChecklist = lazy(() => import('./pages/resources/DSGVOComplianceChecklist').then(m => ({ default: m.DSGVOComplianceChecklist })));
const DataPrivacyReadinessAssessment = lazy(() => import('./pages/resources/DataPrivacyReadinessAssessment').then(m => ({ default: m.DataPrivacyReadinessAssessment })));
const BreachResponseChecklist = lazy(() => import('./pages/resources/BreachResponseChecklist').then(m => ({ default: m.BreachResponseChecklist })));
const CookieComplianceAudit = lazy(() => import('./pages/resources/CookieComplianceAudit').then(m => ({ default: m.CookieComplianceAudit })));
const VendorAssessmentTemplate = lazy(() => import('./pages/resources/VendorAssessmentTemplate').then(m => ({ default: m.VendorAssessmentTemplate })));

// Assessment Tools
const AIRiskAssessment = lazy(() => import('./pages/assessment-center/AIRiskAssessment'));
const AlgorithmicImpactAssessment = lazy(() => import('./pages/assessment-center/AlgorithmicImpactAssessment'));
const AIGovernanceCheck = lazy(() => import('./pages/assessment-center/AIGovernanceCheck'));

// Compliance Pages
const DsgvoCompliance = lazy(() => import('./pages/DsgvoCompliance'));
const Iso27001Compliance = lazy(() => import('./pages/Iso27001Compliance'));
const EuAiActCompliance = lazy(() => import('./pages/EuAiActCompliance'));
const Soc2Compliance = lazy(() => import('./pages/Soc2Compliance'));
const Iso27017Compliance = lazy(() => import('./pages/Iso27017Compliance'));
const Iso27018Compliance = lazy(() => import('./pages/Iso27018Compliance'));
const TisaxCompliance = lazy(() => import('./pages/TisaxCompliance'));
const Nis2Compliance = lazy(() => import('./pages/Nis2Compliance'));
const HinweisgeberschutzCompliance = lazy(() => import('./pages/HinweisgeberschutzCompliance'));
const GeldwaeschegesetzCompliance = lazy(() => import('./pages/GeldwaeschegesetzCompliance'));

// Tools
const Tools = lazy(() => import('./pages/Tools'));
const CookieManagementTool = lazy(() => import('./pages/CookieManagementTool'));
const WhistleblowerSystemTool = lazy(() => import('./pages/WhistleblowerSystemTool'));
const CookieManagementToolProduct = lazy(() => import('./pages/CookieManagementToolProduct'));
const WhistleblowerSystemToolProduct = lazy(() => import('./pages/WhistleblowerSystemToolProduct'));
const DsgvoEmailTemplateGenerator = lazy(() => import('./pages/DsgvoEmailTemplateGenerator'));
const DsgvoComplianceScorecard = lazy(() => import('./pages/DsgvoComplianceScorecard'));
const ComplianceAIAssistant = lazy(() => import('./pages/ComplianceAIAssistant'));

// Knowledge
const Knowledge = lazy(() => import('./pages/Knowledge'));
const DsgvoGuides = lazy(() => import('./pages/DsgvoGuides'));
const ComplianceFrameworks = lazy(() => import('./pages/ComplianceFrameworks'));
const RiskManagement = lazy(() => import('./pages/RiskManagement'));

// Compliance Guides
const Iso27001Guide = lazy(() => import('./pages/compliance/Iso27001Guide'));
const Soc2Guide = lazy(() => import('./pages/compliance/Soc2Guide'));
const EuAiActGuide = lazy(() => import('./pages/compliance/EuAiActGuide'));
const Nis2Guide = lazy(() => import('./pages/compliance/Nis2Guide'));
const Iso27017Guide = lazy(() => import('./pages/compliance/Iso27017Guide'));
const Iso27018Guide = lazy(() => import('./pages/compliance/Iso27018Guide'));
const HinweisgeberschutzgesetzGuide = lazy(() => import('./pages/compliance/HinweisgeberschutzgesetzGuide'));
const TisaxGuide = lazy(() => import('./pages/compliance/TisaxGuide'));
const GeldwaeschegesetzGuide = lazy(() => import('./pages/compliance/GeldwaeschegesetzGuide'));
const DsgvoGuide = lazy(() => import('./pages/compliance/DsgvoGuide'));
const DsgEkdCompliance = lazy(() => import('./pages/compliance/DsgEkdCompliance'));
const DsgEkdGuide = lazy(() => import('./pages/compliance/DsgEkdGuide'));
const KdgCompliance = lazy(() => import('./pages/compliance/KdgCompliance'));
const KdgGuide = lazy(() => import('./pages/compliance/KdgGuide'));

// DSGVO Guides
const DsgvoBasicsGuide = lazy(() => import('./pages/guides/DsgvoBasicsGuide'));
const WebsiteDsgvoGuide = lazy(() => import('./pages/guides/WebsiteDsgvoGuide'));
const Dsgvo30TageGuide = lazy(() => import('./pages/guides/Dsgvo30TageGuide'));
const DataBreachNotfallGuide = lazy(() => import('./pages/guides/DataBreachNotfallGuide'));
const VerarbeitungsverzeichnisGuide = lazy(() => import('./pages/guides/VerarbeitungsverzeichnisGuide'));
const BetroffenenrechteGuide = lazy(() => import('./pages/guides/BetroffenenrechteGuide'));
const TomMassnahmenGuide = lazy(() => import('./pages/guides/TomMassnahmenGuide'));
const DsfaDurchfuehrungGuide = lazy(() => import('./pages/guides/DsfaDurchfuehrungGuide'));

// Crisis Management
const CrisisManagement = lazy(() => import('./pages/CrisisManagement'));
const DataBreach72hGuide = lazy(() => import('./pages/crisis/DataBreach72hGuide'));
const SecurityIncidentGuide = lazy(() => import('./pages/crisis/SecurityIncidentGuide'));
const CommunicationTemplatesGuide = lazy(() => import('./pages/crisis/CommunicationTemplatesGuide'));
const ComplianceAuditEmergencyGuide = lazy(() => import('./pages/crisis/ComplianceAuditEmergencyGuide'));
const MediaCrisisGuide = lazy(() => import('./pages/crisis/MediaCrisisGuide'));
const VendorDataBreachGuide = lazy(() => import('./pages/crisis/VendorDataBreachGuide'));
const GdprFineResponseGuide = lazy(() => import('./pages/crisis/GdprFineResponseGuide'));
const BusinessContinuityGuide = lazy(() => import('./pages/crisis/BusinessContinuityGuide'));

// Legal
const Rechtsprechung = lazy(() => import('./pages/Rechtsprechung'));
const SchremsIICase = lazy(() => import('./pages/legal/SchremsIICase'));
const MetaIrlandCase = lazy(() => import('./pages/legal/MetaIrlandCase'));
const CookieLawGuide = lazy(() => import('./pages/legal/CookieLawGuide'));
const FacebookFanpageCase = lazy(() => import('./pages/legal/FacebookFanpageCase'));
const GoogleAnalyticsAustriaCase = lazy(() => import('./pages/legal/GoogleAnalyticsAustriaCase'));
const AmazonLuxembourgCase = lazy(() => import('./pages/legal/AmazonLuxembourgCase'));
const WhatsAppIrelandCase = lazy(() => import('./pages/legal/WhatsAppIrelandCase'));
const Planet49CookieCase = lazy(() => import('./pages/legal/Planet49CookieCase'));
const GoogleFontsMunichCase = lazy(() => import('./pages/legal/GoogleFontsMunichCase'));

// Branchen Wissen
const BranchenWissen = lazy(() => import('./pages/BranchenWissen'));
const HealthcareDsgvoGuide = lazy(() => import('./pages/branchen/HealthcareDsgvoGuide'));
const HealthcareAiComplianceGuide = lazy(() => import('./pages/branchen/HealthcareAiComplianceGuide'));
const EdtechPrivacyGuide = lazy(() => import('./pages/branchen/EdtechPrivacyGuide'));
const FintechComplianceGuide = lazy(() => import('./pages/branchen/FintechComplianceGuide'));
const EcommercePrivacyGuide = lazy(() => import('./pages/branchen/EcommercePrivacyGuide'));
const SaasPrivacyDesignGuide = lazy(() => import('./pages/branchen/SaasPrivacyDesignGuide'));
const Industrie40DatenschutzGuide = lazy(() => import('./pages/branchen/Industrie40DatenschutzGuide'));
const AutomotiveDatenschutz = lazy(() => import('./pages/branchen/AutomotiveDatenschutz'));
const SmartGridComplianceGuide = lazy(() => import('./pages/branchen/SmartGridComplianceGuide'));
const PharmaComplianceGuide = lazy(() => import('./pages/branchen/PharmaComplianceGuide'));
const ProduktionDatenschutzGuide = lazy(() => import('./pages/branchen/ProduktionDatenschutzGuide'));
const TravelComplianceGuide = lazy(() => import('./pages/branchen/TravelComplianceGuide'));
const InsurtechComplianceGuide = lazy(() => import('./pages/branchen/InsurtechComplianceGuide'));
const PropTechCompliance = lazy(() => import('./pages/branchen/PropTechCompliance'));
const LogisticsCompliance = lazy(() => import('./pages/branchen/LogisticsCompliance'));
const DatenschutzPflege = lazy(() => import('./pages/branchen/DatenschutzPflege'));
const DatenschutzArztpraxis = lazy(() => import('./pages/branchen/DatenschutzArztpraxis'));
const DatenschutzKindergarten = lazy(() => import('./pages/branchen/DatenschutzKindergarten'));
const DsgvoVermieter = lazy(() => import('./pages/branchen/DsgvoVermieter'));
const DsgvoVereineComprehensive = lazy(() => import('./pages/wissen/branchen/DsgvoVereineComprehensive'));
const DatenschutzBetriebsrat = lazy(() => import('./pages/branchen/DatenschutzBetriebsrat'));
const DatenschutzHomeofficeComprehensive = lazy(() => import('./pages/wissen/branchen/DatenschutzHomeofficeComprehensive'));

// KI Datenschutz
const KiDatenschutz = lazy(() => import('./pages/KiDatenschutz'));
const KiRisikoklassifizierung = lazy(() => import('./pages/ki/KiRisikoklassifizierung'));
const KiAlgorithmicImpactAssessment = lazy(() => import('./pages/ki/AlgorithmicImpactAssessment'));
const PrivacyPreservingAI = lazy(() => import('./pages/ki/PrivacyPreservingAI'));
const FederatedLearningGuide = lazy(() => import('./pages/ki/FederatedLearningGuide'));
const FinancialAICompliance = lazy(() => import('./pages/ki/FinancialAICompliance'));
const HRAICompliance = lazy(() => import('./pages/ki/HRAICompliance'));
const ModelPrivacyAttacks = lazy(() => import('./pages/ki/ModelPrivacyAttacks'));
const DataMinimizationGuide = lazy(() => import('./pages/ki/DataMinimizationGuide'));
const ExplainableAIGuide = lazy(() => import('./pages/ki/ExplainableAIGuide'));
const PrivacyByDesignAI = lazy(() => import('./pages/ki/PrivacyByDesignAI'));
const KiEinwilligungsmanagement = lazy(() => import('./pages/ki/KiEinwilligungsmanagement'));
const AutomatedDecisionMaking = lazy(() => import('./pages/ki/AutomatedDecisionMaking'));

// Industry Pages
const Industries = lazy(() => import('./pages/Industries'));
const Healthcare = lazy(() => import('./pages/industries/Healthcare'));
const FinancialServices = lazy(() => import('./pages/industries/FinancialServices'));
const ECommerce = lazy(() => import('./pages/industries/ECommerce'));
const SaaS = lazy(() => import('./pages/industries/SaaS'));
const Manufacturing = lazy(() => import('./pages/industries/Manufacturing'));
const Automotive = lazy(() => import('./pages/industries/Automotive'));
const Energy = lazy(() => import('./pages/industries/Energy'));
const Food = lazy(() => import('./pages/industries/Food'));
const Logistics = lazy(() => import('./pages/industries/Logistics'));

// Other Pages
const About = lazy(() => import('./pages/About'));
const SitemapSEO = lazy(() => import('./pages/SitemapSEO'));
const FinalChecks = lazy(() => import('./pages/FinalChecks'));


export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: 'home', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'contact-page', element: <ContactPage /> },
      { path: 'academy', element: <Academy /> },
      { path: 'academy-page', element: <AcademyPage /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'pricing-page', element: <PricingPage /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'dashboard-page', element: <DashboardPage /> },
      { path: 'thank-you', element: <ThankYou /> },
      { path: 'impressum', element: <Impressum /> },
      { path: 'datenschutz', element: <Datenschutz /> },
      
      // Resources
      { path: 'resources', element: <Resources /> },
      { path: 'resources/dsgvo-compliance-checklist', element: <DSGVOComplianceChecklist /> },
      { path: 'resources/data-privacy-readiness-assessment', element: <DataPrivacyReadinessAssessment /> },
      { path: 'resources/breach-response-checklist', element: <BreachResponseChecklist /> },
      { path: 'resources/cookie-compliance-audit', element: <CookieComplianceAudit /> },
      { path: 'resources/vendor-assessment-template', element: <VendorAssessmentTemplate /> },
      
      // Assessment Tools
      { path: 'assessment-center/ai-risk-assessment', element: <AIRiskAssessment /> },
      { path: 'assessment-center/algorithmic-impact-assessment', element: <AlgorithmicImpactAssessment /> },
      { path: 'assessment-center/ai-governance-check', element: <AIGovernanceCheck /> },
      
      // Compliance
      { path: 'compliance/dsgvo', element: <DsgvoCompliance /> },
      { path: 'compliance/iso-27001', element: <Iso27001Compliance /> },
      { path: 'compliance/eu-ai-act', element: <EuAiActCompliance /> },
      { path: 'compliance/soc-2', element: <Soc2Compliance /> },
      { path: 'compliance/iso-27017', element: <Iso27017Compliance /> },
      { path: 'compliance/iso-27018', element: <Iso27018Compliance /> },
      { path: 'compliance/tisax', element: <TisaxCompliance /> },
      { path: 'compliance/nis-2', element: <Nis2Compliance /> },
      { path: 'compliance/hinweisgeberschutz', element: <HinweisgeberschutzCompliance /> },
      { path: 'compliance/geldwaeschegesetz', element: <GeldwaeschegesetzCompliance /> },
      { path: 'compliance/dsg-ekd', element: <DsgEkdCompliance /> },
      { path: 'compliance/kdg', element: <KdgCompliance /> },
      
      // Tools
      { path: 'tools', element: <Tools /> },
      { path: 'tools/cookie-management', element: <CookieManagementTool /> },
      { path: 'tools/whistleblower-system', element: <WhistleblowerSystemTool /> },
      { path: 'products/cookie-management', element: <CookieManagementToolProduct /> },
      { path: 'products/whistleblower-system', element: <WhistleblowerSystemToolProduct /> },
      { path: 'tools/dsgvo-email-generator', element: <DsgvoEmailTemplateGenerator /> },
      { path: 'tools/compliance-scorecard', element: <DsgvoComplianceScorecard /> },
      { path: 'tools/compliance-ai-assistant', element: <ComplianceAIAssistant /> },
      
      // Knowledge
      { path: 'wissen', element: <Knowledge /> },
      { path: 'wissen/dsgvo-guides', element: <DsgvoGuides /> },
      { path: 'wissen/compliance-frameworks', element: <ComplianceFrameworks /> },
      { path: 'wissen/risk-management', element: <RiskManagement /> },
      { path: 'wissen/compliance/iso-27001', element: <Iso27001Guide /> },
      { path: 'wissen/compliance/soc-2', element: <Soc2Guide /> },
      { path: 'wissen/compliance/eu-ai-act', element: <EuAiActGuide /> },
      { path: 'wissen/compliance/nis-2', element: <Nis2Guide /> },
      { path: 'wissen/compliance/iso-27017', element: <Iso27017Guide /> },
      { path: 'wissen/compliance/iso-27018', element: <Iso27018Guide /> },
      { path: 'wissen/compliance/hinweisgeberschutz', element: <HinweisgeberschutzgesetzGuide /> },
      { path: 'wissen/compliance/tisax', element: <TisaxGuide /> },
      { path: 'wissen/compliance/geldwaeschegesetz', element: <GeldwaeschegesetzGuide /> },
      { path: 'wissen/compliance/dsgvo', element: <DsgvoGuide /> },
      { path: 'wissen/compliance/dsg-ekd', element: <DsgEkdGuide /> },
      { path: 'wissen/compliance/kdg', element: <KdgGuide /> },
      
      // DSGVO Guides
      { path: 'wissen/dsgvo/grundlagen', element: <DsgvoBasicsGuide /> },
      { path: 'wissen/dsgvo/website-konform', element: <WebsiteDsgvoGuide /> },
      { path: 'wissen/dsgvo/30-tage', element: <Dsgvo30TageGuide /> },
      { path: 'wissen/dsgvo/datenpanne-notfall', element: <DataBreachNotfallGuide /> },
      { path: 'wissen/dsgvo/verarbeitungsverzeichnis', element: <VerarbeitungsverzeichnisGuide /> },
      { path: 'wissen/dsgvo/betroffenenrechte', element: <BetroffenenrechteGuide /> },
      { path: 'wissen/dsgvo/tom-massnahmen', element: <TomMassnahmenGuide /> },
      { path: 'wissen/dsgvo/dsfa-durchfuehrung', element: <DsfaDurchfuehrungGuide /> },
      
      // Crisis Management
      { path: 'wissen/krisenbewaltigung', element: <CrisisManagement /> },
      { path: 'wissen/krisenbewaltigung/datenpanne-72h', element: <DataBreach72hGuide /> },
      { path: 'wissen/krisenbewaltigung/sicherheitsvorfall', element: <SecurityIncidentGuide /> },
      { path: 'wissen/krisenbewaltigung/kommunikations-vorlagen', element: <CommunicationTemplatesGuide /> },
      { path: 'wissen/krisenbewaltigung/compliance-audit-notfall', element: <ComplianceAuditEmergencyGuide /> },
      { path: 'wissen/krisenbewaltigung/medienkrise', element: <MediaCrisisGuide /> },
      { path: 'wissen/krisenbewaltigung/lieferanten-datenpanne', element: <VendorDataBreachGuide /> },
      { path: 'wissen/krisenbewaltigung/bussgeld-reaktion', element: <GdprFineResponseGuide /> },
      { path: 'wissen/krisenbewaltigung/business-continuity', element: <BusinessContinuityGuide /> },
      
      // Legal
      { path: 'wissen/rechtsprechung', element: <Rechtsprechung /> },
      { path: 'wissen/rechtsprechung/schrems-ii', element: <SchremsIICase /> },
      { path: 'wissen/rechtsprechung/meta-irland-2023', element: <MetaIrlandCase /> },
      { path: 'wissen/rechtsprechung/cookie-richtlinie', element: <CookieLawGuide /> },
      { path: 'wissen/rechtsprechung/facebook-fanpage', element: <FacebookFanpageCase /> },
      { path: 'wissen/rechtsprechung/google-analytics-oesterreich', element: <GoogleAnalyticsAustriaCase /> },
      { path: 'wissen/rechtsprechung/amazon-luxemburg-2021', element: <AmazonLuxembourgCase /> },
      { path: 'wissen/rechtsprechung/whatsapp-irland-2021', element: <WhatsAppIrelandCase /> },
      { path: 'wissen/rechtsprechung/planet49-cookie', element: <Planet49CookieCase /> },
      { path: 'wissen/rechtsprechung/google-fonts-muenchen', element: <GoogleFontsMunichCase /> },
      
      // Branchen Wissen
      { path: 'wissen/branchen', element: <BranchenWissen /> },
      { path: 'wissen/branchen/healthcare-dsgvo', element: <HealthcareDsgvoGuide /> },
      { path: 'wissen/branchen/healthcare-ai-compliance', element: <HealthcareAiComplianceGuide /> },
      { path: 'wissen/branchen/edtech-privacy', element: <EdtechPrivacyGuide /> },
      { path: 'wissen/branchen/fintech-compliance', element: <FintechComplianceGuide /> },
      { path: 'wissen/branchen/ecommerce-privacy', element: <EcommercePrivacyGuide /> },
      { path: 'wissen/branchen/saas-privacy-design', element: <SaasPrivacyDesignGuide /> },
      { path: 'wissen/branchen/industrie-4-0-datenschutz', element: <Industrie40DatenschutzGuide /> },
      { path: 'wissen/branchen/automotive-datenschutz', element: <AutomotiveDatenschutz /> },
      { path: 'wissen/branchen/smart-grid-compliance', element: <SmartGridComplianceGuide /> },
      { path: 'wissen/branchen/pharma-compliance', element: <PharmaComplianceGuide /> },
      { path: 'wissen/branchen/produktion-datenschutz', element: <ProduktionDatenschutzGuide /> },
      { path: 'wissen/branchen/travel-compliance', element: <TravelComplianceGuide /> },
      { path: 'wissen/branchen/insurtech-compliance', element: <InsurtechComplianceGuide /> },
      { path: 'wissen/branchen/proptech-compliance', element: <PropTechCompliance /> },
      { path: 'wissen/branchen/logistics-compliance', element: <LogisticsCompliance /> },
      { path: 'wissen/branchen/datenschutz-pflege', element: <DatenschutzPflege /> },
      { path: 'wissen/branchen/datenschutz-arztpraxis', element: <DatenschutzArztpraxis /> },
      { path: 'wissen/branchen/datenschutz-kindergarten', element: <DatenschutzKindergarten /> },
      { path: 'wissen/branchen/dsgvo-vermieter', element: <DsgvoVermieter /> },
      { path: 'wissen/branchen/dsgvo-vereine', element: <DsgvoVereineComprehensive /> },
      { path: 'wissen/branchen/datenschutz-betriebsrat', element: <DatenschutzBetriebsrat /> },
      { path: 'wissen/branchen/datenschutz-homeoffice', element: <DatenschutzHomeofficeComprehensive /> },
      
      // KI Datenschutz
      { path: 'ki-datenschutz', element: <KiDatenschutz /> },
      { path: 'ki-datenschutz/risikoklassifizierung', element: <KiRisikoklassifizierung /> },
      { path: 'ki-datenschutz/algorithmic-impact-assessment', element: <KiAlgorithmicImpactAssessment /> },
      { path: 'ki-datenschutz/privacy-preserving-ai', element: <PrivacyPreservingAI /> },
      { path: 'ki-datenschutz/federated-learning', element: <FederatedLearningGuide /> },
      { path: 'ki-datenschutz/financial-ai-compliance', element: <FinancialAICompliance /> },
      { path: 'ki-datenschutz/hr-ai-compliance', element: <HRAICompliance /> },
      { path: 'ki-datenschutz/model-privacy-attacks', element: <ModelPrivacyAttacks /> },
      { path: 'ki-datenschutz/data-minimization', element: <DataMinimizationGuide /> },
      { path: 'ki-datenschutz/explainable-ai', element: <ExplainableAIGuide /> },
      { path: 'ki-datenschutz/privacy-by-design', element: <PrivacyByDesignAI /> },
      { path: 'ki-datenschutz/einwilligungsmanagement', element: <KiEinwilligungsmanagement /> },
      { path: 'ki-datenschutz/automated-decision-making', element: <AutomatedDecisionMaking /> },
      
      // Industries
      { path: 'industries', element: <Industries /> },
      { path: 'industries/healthcare', element: <Healthcare /> },
      { path: 'industries/financial-services', element: <FinancialServices /> },
      { path: 'industries/e-commerce', element: <ECommerce /> },
      { path: 'industries/saas', element: <SaaS /> },
      { path: 'industries/manufacturing', element: <Manufacturing /> },
      { path: 'industries/automotive', element: <Automotive /> },
      { path: 'industries/energy', element: <Energy /> },
      { path: 'industries/food', element: <Food /> },
      { path: 'industries/logistics', element: <Logistics /> },
      
      // Other Pages
      { path: 'about', element: <About /> },
      { path: 'sitemap-seo', element: <SitemapSEO /> },
      { path: 'final-checks', element: <FinalChecks /> },
      
      
      // 404
      { path: '*', element: <NotFound /> },
    ],
  },
];