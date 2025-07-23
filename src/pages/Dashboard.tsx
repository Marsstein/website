import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
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
  Play,
  Mail,
  Phone,
  MapPin
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
import { NavLink, useLocation, Routes, Route, Navigate, useNavigate } from "react-router-dom";

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
  { titleKey: "dashboard_nav_help", url: "/dashboard/help", icon: HelpCircle },
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
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeFramework, setActiveFramework] = useState("GDPR");

  // Button handlers
  const handleDownloadDPIA = () => {
    toast({
      title: "DSFA Download",
      description: language === 'de' ? "Die Datenschutz-Folgenabschätzung wird heruntergeladen..." : "Data Protection Impact Assessment is being downloaded...",
    });
  };

  const handleExportReport = () => {
    toast({
      title: "Report Export",
      description: language === 'de' ? "Der Compliance-Bericht wird exportiert..." : "Compliance report is being exported...",
    });
  };

  const handleQuickUpload = () => {
    navigate('/dashboard/documents');
    toast({
      title: "Navigation",
      description: language === 'de' ? "Weiterleitung zur Dokumentenverwaltung..." : "Redirecting to document management...",
    });
  };

  const handleRunCheck = () => {
    navigate('/dashboard/ai-check');
    toast({
      title: "Navigation",
      description: language === 'de' ? "KI Compliance Prüfung wird geöffnet..." : "Opening AI Compliance Check...",
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
              {t('dashboard_compliance_score')}
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
                  {t('dashboard_warning')}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Compliance Check */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('dashboard_ai_compliance_check')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span className="text-sm">15 {t('dashboard_controls_passed')}</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-warning" />
                <span className="text-sm">3 {t('dashboard_warnings')}</span>
              </div>
              <Button size="sm" onClick={handleRunCheck} className="w-full mt-2">
                <Play className="h-3 w-3 mr-1" />
                {t('dashboard_run_check')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => navigate('/dashboard/documents')}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('dashboard_nav_documents')}
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
        <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => navigate('/dashboard/teams')}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('dashboard_active_users')}
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
        <Card className="lg:col-span-2 cursor-pointer transition-colors hover:bg-muted/50" onClick={() => navigate('/dashboard/frameworks')}>
          <CardHeader>
            <CardTitle>{t('dashboard_framework_compliance')}</CardTitle>
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
              <Button variant="outline" className="flex items-center gap-2" onClick={(e) => {
                e.stopPropagation();
                handleDownloadDPIA();
              }}>
                <Download className="h-4 w-4" />
                {t('dashboard_download_dpia')}
              </Button>
              <Button variant="outline" className="flex items-center gap-2" onClick={(e) => {
                e.stopPropagation();
                handleExportReport();
              }}>
                <FileText className="h-4 w-4" />
                {t('dashboard_export_report')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Risk Monitoring */}
        <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => navigate('/dashboard/audits')}>
          <CardHeader>
            <CardTitle>{t('dashboard_risk_monitoring')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskData.map((risk) => (
                <div key={risk.severity} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${risk.color}`} />
                    <span className="text-sm font-medium">{t(`dashboard_${risk.severity.toLowerCase()}`)}</span>
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
            <CardTitle>{t('dashboard_documents_evidence')}</CardTitle>
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
                    {t(`dashboard_${doc.status}`)}
                  </Badge>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline" onClick={handleQuickUpload}>
              <Upload className="h-4 w-4 mr-2" />
              {t('dashboard_quick_upload')}
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Audits */}
        <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => navigate('/dashboard/audits')}>
          <CardHeader>
            <CardTitle>{t('dashboard_upcoming_audits')}</CardTitle>
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
        <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => navigate('/dashboard/integrations')}>
          <CardHeader>
            <CardTitle>{t('dashboard_integrations_health')}</CardTitle>
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
  const { language, t } = useLanguage();
  
  const [documents, setDocuments] = useState([
    { id: 1, name: "GDPR Privacy Policy", type: "Policy", status: "approved", date: "2024-01-15", size: "2.3 MB" },
    { id: 2, name: "Data Processing Agreement", type: "Legal", status: "pending", date: "2024-01-14", size: "1.8 MB" },
    { id: 3, name: "Cookie Policy", type: "Policy", status: "missing", date: "2024-01-12", size: "0.5 MB" },
    { id: 4, name: "ISO 27001 Certificate", type: "Certificate", status: "approved", date: "2024-01-10", size: "3.2 MB" },
    { id: 5, name: "Risk Assessment Report", type: "Report", status: "pending", date: "2024-01-08", size: "4.1 MB" },
  ]);

  const handleUpload = () => {
    toast({ 
      title: "File Upload", 
      description: "File upload feature activated - ready for document upload" 
    });
    
    // Simulate adding a new document
    const newDoc = {
      id: documents.length + 1,
      name: "New Compliance Document.pdf",
      type: "Report",
      status: "pending",
      date: new Date().toISOString().split('T')[0],
      size: "2.1 MB"
    };
    setDocuments([newDoc, ...documents]);
  };

  const handleViewDocument = (docName: string) => {
    toast({ 
      title: "Document Viewer", 
      description: `Opening ${docName} in document viewer` 
    });
  };

  const handleDownload = (docName: string) => {
    toast({ 
      title: "Download Started", 
      description: `Downloading ${docName}...` 
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "text-green-600 bg-green-50";
      case "pending": return "text-yellow-600 bg-yellow-50";
      case "missing": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Document Management</h1>
        <Button onClick={handleUpload} className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload Document
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{documents.filter(d => d.status === 'approved').length}</div>
            <div className="text-sm text-muted-foreground">Approved Documents</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{documents.filter(d => d.status === 'pending').length}</div>
            <div className="text-sm text-muted-foreground">Pending Review</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{documents.filter(d => d.status === 'missing').length}</div>
            <div className="text-sm text-muted-foreground">Missing Documents</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-muted-foreground">{doc.type} • {doc.size} • {doc.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(doc.status)}>
                    {doc.status}
                  </Badge>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleViewDocument(doc.name)}
                  >
                    View
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDownload(doc.name)}
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
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
    
    // Simulate scan progress
    setTimeout(() => {
      setResults({
        passed: Math.floor(Math.random() * 20) + 10,
        warnings: Math.floor(Math.random() * 5) + 1,
        critical: Math.floor(Math.random() * 3),
        score: Math.floor(Math.random() * 20) + 70
      });
      setLastScan(new Date().toLocaleString());
      setIsRunning(false);
      toast({ title: "Scan Complete", description: "AI compliance analysis finished successfully" });
    }, 3000);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Compliance Check</h1>
        <Button onClick={handleRunScan} disabled={isRunning} className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          {isRunning ? "Scanning..." : "Run AI Scan"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{results.passed}</div>
            <div className="text-sm text-muted-foreground">Controls Passed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{results.warnings}</div>
            <div className="text-sm text-muted-foreground">Warnings</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{results.critical}</div>
            <div className="text-sm text-muted-foreground">Critical Issues</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">{results.score}%</div>
            <div className="text-sm text-muted-foreground">Overall Score</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Last Scan Results</CardTitle>
          <p className="text-sm text-muted-foreground">Last updated: {lastScan}</p>
        </CardHeader>
        <CardContent>
          {isRunning ? (
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p>Running AI compliance analysis...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>GDPR Compliance</span>
                  <span className="font-bold">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Data Security</span>
                  <span className="font-bold">87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Access Controls</span>
                  <span className="font-bold">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function AuditsPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  
  const audits = [
    { id: 1, name: "ISO 27001 Review", status: "scheduled", date: "2024-03-15", auditor: "TÜV SÜD" },
    { id: 2, name: "GDPR Assessment", status: "in-progress", date: "2024-02-20", auditor: "Internal Team" },
    { id: 3, name: "Annual Security Audit", status: "completed", date: "2024-01-10", auditor: "PwC" },
  ];

  const handleScheduleAudit = () => {
    toast({ title: "Schedule Audit", description: "Audit scheduling form would open here" });
  };

  const handleGenerateReport = () => {
    toast({ title: "Report Generation", description: "Generating comprehensive audit report..." });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Audits & Reports</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleGenerateReport}>
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Button onClick={handleScheduleAudit}>
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Audit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {audits.map((audit) => (
          <Card key={audit.id}>
            <CardHeader>
              <CardTitle className="text-lg">{audit.name}</CardTitle>
              <Badge className={
                audit.status === 'completed' ? 'bg-green-100 text-green-800' :
                audit.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }>
                {audit.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Date: {audit.date}</p>
              <p className="text-sm text-muted-foreground mb-4">Auditor: {audit.auditor}</p>
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PoliciesPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  
  const policies = [
    { name: "Privacy Policy", status: "active", lastUpdated: "2024-01-15", version: "2.1" },
    { name: "Data Retention Policy", status: "draft", lastUpdated: "2024-01-10", version: "1.3" },
    { name: "Access Control Policy", status: "active", lastUpdated: "2024-01-05", version: "3.0" },
    { name: "Incident Response Policy", status: "review", lastUpdated: "2023-12-20", version: "1.8" },
  ];

  const handleCreatePolicy = () => {
    toast({ title: "Create Policy", description: "Policy creation wizard would open here" });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Policies</h1>
        <Button onClick={handleCreatePolicy}>
          <FileCheck className="h-4 w-4 mr-2" />
          Create Policy
        </Button>
      </div>

      <div className="grid gap-4">
        {policies.map((policy, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{policy.name}</h3>
                  <p className="text-sm text-muted-foreground">Version {policy.version} • Updated {policy.lastUpdated}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={
                    policy.status === 'active' ? 'secondary' :
                    policy.status === 'draft' ? 'outline' : 'destructive'
                  }>
                    {policy.status}
                  </Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function FrameworksPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Compliance Frameworks</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {frameworks.map((framework) => (
          <Card key={framework.name}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                {framework.name}
                <span className="text-2xl font-bold">{framework.progress}%</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={framework.progress} className="mb-4" />
              <div className="flex justify-between items-center">
                <Badge variant={
                  framework.status === 'compliant' ? 'secondary' :
                  framework.status === 'warning' ? 'outline' : 'destructive'
                }>
                  {framework.status}
                </Badge>
                <Button variant="outline" size="sm" onClick={() => 
                  toast({ title: framework.name, description: `Opening ${framework.name} compliance details` })
                }>
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
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
    { name: "Jira", status: "connected", icon: "🎯" },
  ];

  const handleConnect = (name: string) => {
    toast({ title: "Integration", description: `Connecting to ${name}...` });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Integrations</h1>
        <Button onClick={() => toast({ title: "Add Integration", description: "Integration marketplace would open here" })}>
          Add Integration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <Card key={integration.name}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{integration.icon}</span>
                  <div>
                    <h3 className="font-medium">{integration.name}</h3>
                    <Badge variant={
                      integration.status === 'connected' ? 'secondary' :
                      integration.status === 'pending' ? 'outline' : 
                      integration.status === 'error' ? 'destructive' : 'outline'
                    }>
                      {integration.status}
                    </Badge>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleConnect(integration.name)}
                >
                  {integration.status === 'connected' ? 'Configure' : 'Connect'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TeamsPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  
  const team = [
    { name: "John Doe", role: "Compliance Manager", email: "john@marsstein.com", status: "active" },
    { name: "Jane Smith", role: "Data Protection Officer", email: "jane@marsstein.com", status: "active" },
    { name: "Mike Johnson", role: "Security Analyst", email: "mike@marsstein.com", status: "pending" },
    { name: "Sarah Wilson", role: "Auditor", email: "sarah@marsstein.com", status: "active" },
  ];

  const handleInviteUser = () => {
    toast({ title: "Invite User", description: "User invitation form would open here" });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team Management</h1>
        <Button onClick={handleInviteUser}>
          <Users className="h-4 w-4 mr-2" />
          Invite User
        </Button>
      </div>

      <div className="grid gap-4">
        {team.map((member, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={member.status === 'active' ? 'secondary' : 'outline'}>
                    {member.status}
                  </Badge>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SettingsPage() {
  const { toast } = useToast();
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  
  const handleSaveSettings = () => {
    toast({ title: "Settings Saved", description: "Your preferences have been updated successfully" });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Language</h3>
                <p className="text-sm text-muted-foreground">Choose your preferred language</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={language === 'en' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setLanguage('en')}
                >
                  English
                </Button>
                <Button 
                  variant={language === 'de' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setLanguage('de')}
                >
                  Deutsch
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Theme</h3>
                <p className="text-sm text-muted-foreground">Choose light or dark mode</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={theme === 'light' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setTheme('light')}
                >
                  <Sun className="h-4 w-4 mr-1" />
                  Light
                </Button>
                <Button 
                  variant={theme === 'dark' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setTheme('dark')}
                >
                  <Moon className="h-4 w-4 mr-1" />
                  Dark
                </Button>
              </div>
            </div>
            <Button onClick={handleSaveSettings}>Save Settings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-muted-foreground">Receive email updates for compliance alerts</p>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Audit Reminders</h3>
                <p className="text-sm text-muted-foreground">Get notified about upcoming audits</p>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function HelpPage() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  
  const faqs = [
    { question: "How do I upload documents?", answer: "Go to Documents section and click 'Upload Document' button" },
    { question: "How often should I run compliance checks?", answer: "We recommend running checks weekly or after any system changes" },
    { question: "How do I schedule an audit?", answer: "Visit the Audits & Reports section and click 'Schedule Audit'" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Help & Support</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>support@marsstein.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+41 44 123 45 67</span>
            </div>
            <Button onClick={() => toast({ title: "Support", description: "Support chat would open here" })}>
              Start Live Chat
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                User Guide
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                API Documentation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Compliance Templates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Dashboard Layout Component
export default function Dashboard() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

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
                    <SidebarMenuItem key={item.titleKey}>
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
                            {t(item.titleKey)}
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
                <h2 className="text-2xl font-bold text-foreground">{t('dashboard_nav_dashboard')}</h2>
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
            <Route path="ai-check" element={<AICheckPage />} />
            <Route path="audits" element={<AuditsPage />} />
            <Route path="policies" element={<PoliciesPage />} />
            <Route path="frameworks" element={<FrameworksPage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="*" element={<DashboardMain />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
}