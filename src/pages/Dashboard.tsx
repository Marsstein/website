import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { 
  LayoutDashboard, 
  FileText, 
  Brain, 
  ClipboardCheck, 
  FileCheck, 
  Settings, 
  Users, 
  HelpCircle,
  Upload,
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Globe,
  Sun,
  Moon,
  Languages,
  Download,
  BarChart3,
  PieChart,
  Activity,
  GitBranch,
  Calendar,
  Target,
  Play
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink, useLocation, Routes, Route, Navigate } from "react-router-dom";

const sidebarItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Documents", url: "/dashboard", icon: FileText },
  { title: "AI Compliance Check", url: "/dashboard", icon: Brain },
  { title: "Audits & Reports", url: "/dashboard", icon: ClipboardCheck },
  { title: "Policies", url: "/dashboard", icon: FileCheck },
  { title: "Frameworks", url: "/dashboard", icon: Target },
  { title: "Integrations", url: "/dashboard", icon: GitBranch },
  { title: "Teams", url: "/dashboard", icon: Users },
  { title: "Settings", url: "/dashboard", icon: Settings },
  { title: "Help", url: "/dashboard", icon: HelpCircle },
];

const frameworks = [
  { name: "GDPR", progress: 92, status: "compliant" },
  { name: "ISO 27001", progress: 78, status: "warning" },
  { name: "EU AI Act", progress: 65, status: "progress" },
  { name: "NIS2", progress: 45, status: "risk" },
];

const recentDocuments = [
  { name: "GDPR Privacy Policy", status: "approved", date: "2024-01-15" },
  { name: "Data Processing Agreement", status: "pending", date: "2024-01-14" },
  { name: "Cookie Policy", status: "missing", date: "2024-01-12" },
];

const riskData = [
  { severity: "Critical", count: 2, color: "bg-primary" },
  { severity: "High", count: 5, color: "bg-warning" },
  { severity: "Medium", count: 12, color: "bg-secondary" },
  { severity: "Low", count: 8, color: "bg-muted" },
];

// Dashboard Main Content Component
function DashboardMain() {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [activeFramework, setActiveFramework] = useState("GDPR");

  const texts = {
    en: {
      complianceScore: "Overall Compliance Score",
      compliant: "Compliant",
      atRisk: "At Risk",
      warning: "Warning",
      frameworkCompliance: "Framework Compliance",
      aiComplianceCheck: "AI Compliance Check",
      noCriticalIssues: "No critical issues found",
      runCheck: "Run Check",
      documentsEvidence: "Documents & Evidence",
      recentUploads: "Recent Uploads",
      quickUpload: "Quick Upload",
      upcomingAudits: "Upcoming Audits & Tasks",
      nextAudit: "Next Audit",
      riskMonitoring: "Risk Monitoring",
      openRisks: "Open Risks by Severity",
      integrationsHealth: "Integrations Health",
      userTeamOverview: "User/Team Overview",
      activeUsers: "Active Users",
      recentActivity: "Recent Activity",
      approved: "Approved",
      pending: "Pending",
      missing: "Missing",
      downloadDPIA: "Download DPIA",
      exportReport: "Export Compliance Report",
      legalBasis: "Legal Basis Overview",
      critical: "Critical",
      high: "High",
      medium: "Medium",
      low: "Low",
      controlsPassed: "controls passed",
      warnings: "warnings",
    },
    de: {
      complianceScore: "Gesamt Compliance Score",
      compliant: "Konform",
      atRisk: "Risiko",
      warning: "Warnung",
      frameworkCompliance: "Framework Compliance",
      aiComplianceCheck: "KI Compliance Check",
      noCriticalIssues: "Keine kritischen Probleme gefunden",
      runCheck: "Check ausführen",
      documentsEvidence: "Dokumente & Nachweise",
      recentUploads: "Aktuelle Uploads",
      quickUpload: "Schnell Upload",
      upcomingAudits: "Anstehende Audits & Aufgaben",
      nextAudit: "Nächstes Audit",
      riskMonitoring: "Risiko Monitoring",
      openRisks: "Offene Risiken nach Schweregrad",
      integrationsHealth: "Integration Status",
      userTeamOverview: "Benutzer/Team Übersicht",
      activeUsers: "Aktive Benutzer",
      recentActivity: "Letzte Aktivitäten",
      approved: "Genehmigt",
      pending: "Ausstehend",
      missing: "Fehlend",
      downloadDPIA: "DSFA herunterladen",
      exportReport: "Compliance Bericht exportieren",
      legalBasis: "Rechtsgrundlagen Übersicht",
      critical: "Kritisch",
      high: "Hoch",
      medium: "Mittel",
      low: "Niedrig",
      controlsPassed: "Kontrollen bestanden",
      warnings: "Warnungen",
      issues: "Probleme"
    }
  };

  const t = texts[language];

  // Button handlers
  const handleDownloadDPIA = () => {
    toast({
      title: "DSFA Download",
      description: "Die Datenschutz-Folgenabschätzung wird heruntergeladen...",
    });
  };

  const handleExportReport = () => {
    toast({
      title: "Report Export",
      description: "Der Compliance-Bericht wird exportiert...",
    });
  };

  const handleQuickUpload = () => {
    toast({
      title: "Upload",
      description: "Datei-Upload wird geöffnet...",
    });
  };

  const handleRunCheck = () => {
    toast({
      title: "AI Check",
      description: "KI Compliance Check wird ausgeführt...",
    });
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "approved": return "secondary";
      case "pending": return "outline";
      case "missing": return "destructive";
      default: return "outline";
    }
  };

  const getFrameworkColor = (status: string) => {
    switch (status) {
      case "compliant": return "text-secondary";
      case "warning": return "text-warning";
      case "progress": return "text-accent";
      case "risk": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Overall Compliance Score */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t.complianceScore}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Progress value={78} className="w-full h-2" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-warning">78%</span>
                </div>
              </div>
              <div>
                <Badge variant="outline" className="text-warning border-warning">
                  {t.warning}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Compliance Check */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t.aiComplianceCheck}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span className="text-sm">15 {t.controlsPassed}</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-warning" />
                <span className="text-sm">3 {t.warnings}</span>
              </div>
              <Button size="sm" onClick={handleRunCheck} className="w-full mt-2">
                <Play className="h-3 w-3 mr-1" />
                {t.runCheck}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-foreground">24</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                +12% from last month
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Users */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="h-3 w-3" />
                Online now
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Framework Compliance */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{t.frameworkCompliance}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {frameworks.map((framework) => (
                <div key={framework.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{framework.name}</span>
                    <span className={`font-bold ${getFrameworkColor(framework.status)}`}>
                      {framework.progress}%
                    </span>
                  </div>
                  <Progress value={framework.progress} className="h-2" />
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center gap-2" onClick={handleDownloadDPIA}>
                <Download className="h-4 w-4" />
                {t.downloadDPIA}
              </Button>
              <Button variant="outline" className="flex items-center gap-2" onClick={handleExportReport}>
                <FileText className="h-4 w-4" />
                {t.exportReport}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Risk Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle>{t.riskMonitoring}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskData.map((risk) => (
                <div key={risk.severity} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${risk.color}`} />
                    <span className="text-sm font-medium">{t[risk.severity.toLowerCase()]}</span>
                  </div>
                  <span className="text-sm font-bold">{risk.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Documents */}
        <Card>
          <CardHeader>
            <CardTitle>{t.documentsEvidence}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">{doc.date}</p>
                  </div>
                  <Badge variant={getStatusBadgeVariant(doc.status)}>
                    {t[doc.status]}
                  </Badge>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline" onClick={handleQuickUpload}>
              <Upload className="h-4 w-4 mr-2" />
              {t.quickUpload}
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Audits */}
        <Card>
          <CardHeader>
            <CardTitle>{t.upcomingAudits}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">ISO 27001 Review</p>
                  <p className="text-sm text-muted-foreground">March 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-warning" />
                <div>
                  <p className="font-medium">GDPR Assessment</p>
                  <p className="text-sm text-muted-foreground">April 2, 2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integrations Health */}
        <Card>
          <CardHeader>
            <CardTitle>{t.integrationsHealth}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">AWS</span>
                <Badge variant="secondary">Connected</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Google Cloud</span>
                <Badge variant="secondary">Connected</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">GitHub</span>
                <Badge variant="outline">Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Azure</span>
                <Badge variant="destructive">Error</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Simple placeholder components for navigation
function DocumentsPage() {
  const { toast } = useToast();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Documents</h1>
      <Card>
        <CardContent className="p-6">
          <p>Document management features coming soon...</p>
          <Button 
            className="mt-4" 
            onClick={() => toast({ title: "Documents", description: "Feature in development" })}
          >
            Upload Document
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Dashboard Layout Component
export default function Dashboard() {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const texts = {
    en: {
      dashboard: "Dashboard",
      documents: "Documents",
      aiCheck: "AI Compliance Check",
      audits: "Audits & Reports",
      policies: "Policies",
      frameworks: "Frameworks",
      integrations: "Integrations",
      teams: "Teams",
      settings: "Settings",
      help: "Help",
    },
    de: {
      dashboard: "Dashboard",
      documents: "Dokumente",
      aiCheck: "KI Compliance Check",
      audits: "Audits & Berichte",
      policies: "Richtlinien",
      frameworks: "Frameworks",
      integrations: "Integrationen",
      teams: "Teams",
      settings: "Einstellungen",
      help: "Hilfe",
    }
  };

  const t = texts[language];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r border-border">
          <SidebarContent>
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <h1 className="text-xl font-bold text-foreground">Marsstein</h1>
              </div>
            </div>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          end={item.url === "/dashboard"}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                            }`
                          }
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">
                            {language === 'de' ? 
                              (item.title === 'Dashboard' ? t.dashboard :
                               item.title === 'Documents' ? t.documents :
                               item.title === 'AI Compliance Check' ? t.aiCheck :
                               item.title === 'Audits & Reports' ? t.audits :
                               item.title === 'Policies' ? t.policies :
                               item.title === 'Frameworks' ? t.frameworks :
                               item.title === 'Integrations' ? t.integrations :
                               item.title === 'Teams' ? t.teams :
                               item.title === 'Settings' ? t.settings :
                               item.title === 'Help' ? t.help : item.title) 
                              : item.title
                            }
                          </span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <header className="border-b border-border bg-card px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h2 className="text-2xl font-bold text-foreground">{t.dashboard}</h2>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Language Toggle */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                  className="flex items-center gap-2"
                >
                  <Languages className="h-4 w-4" />
                  {language === 'en' ? 'Deutsch' : 'English'}
                </Button>

                {/* Theme Toggle */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                  {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>

                {/* Profile Avatar */}
                <Avatar>
                  <AvatarFallback>DU</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Dashboard Content Routes */}
          <Routes>
            <Route index element={<DashboardMain />} />
            <Route path="documents" element={<DocumentsPage />} />
            <Route path="*" element={<DashboardMain />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
}