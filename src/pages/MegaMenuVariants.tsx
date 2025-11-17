import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  Building2,
  FileCheck,
  Bot,
  AlertTriangle,
  Bell,
  Shield,
  ChevronRight,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  FileText,
  Wrench,
  Database,
  CheckCircle2,
  Zap,
  Target,
  Rocket,
  Star,
  Crown,
  BarChart3,
  Video,
  Download,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const MegaMenuVariants = () => {
  const [activeExample, setActiveExample] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Split Featured Mega Menu Varianten
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 Varianten basierend auf Beispiel 6 – Interaktive Tabs mit dynamischem Content
          </p>
        </div>

        <div className="space-y-24">
          {/* Variant 1: Product Focus with Tabs */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Variante 1: Product-Focused</h2>
              <p className="text-muted-foreground">Produkt-Features links, interaktive Demo-CTAs rechts</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem
                    label="Produkt"
                    isActive={activeExample === 'product-v1'}
                    onHover={() => setActiveExample('product-v1')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Lösungen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'product-v1' && (
                <ProductFocusedMegaMenu />
              )}
            </div>
          </section>

          {/* Variant 2: Solutions with Dynamic Sidebar */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Variante 2: Solutions Explorer</h2>
              <p className="text-muted-foreground">Kompakte Navigation links, großer Featured-Bereich mit Tabs</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem
                    label="Lösungen"
                    isActive={activeExample === 'solutions-v2'}
                    onHover={() => setActiveExample('solutions-v2')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Produkt</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'solutions-v2' && (
                <SolutionsExplorerMegaMenu />
              )}
            </div>
          </section>

          {/* Variant 3: Visual Cards with Tabs */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Variante 3: Visual Cards</h2>
              <p className="text-muted-foreground">Grid von visuellen Cards mit Tab-gesteuertem Content</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem
                    label="Lösungen"
                    isActive={activeExample === 'visual-v3'}
                    onHover={() => setActiveExample('visual-v3')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Produkt</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Branchen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'visual-v3' && (
                <VisualCardsMegaMenu />
              )}
            </div>
          </section>

          {/* Variant 4: Compact with Quick Actions */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Variante 4: Quick Actions Hub</h2>
              <p className="text-muted-foreground">Kompakte Links links, Action-orientierter Tab-Content rechts</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem
                    label="Produkt"
                    isActive={activeExample === 'quickactions-v4'}
                    onHover={() => setActiveExample('quickactions-v4')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Lösungen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'quickactions-v4' && (
                <QuickActionsHubMegaMenu />
              )}
            </div>
          </section>
        </div>

        <div className="mt-24 text-center">
          <Card className="p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Welche Variante passt am besten?</h3>
            <p className="text-muted-foreground mb-6">
              Alle Varianten basieren auf dem Split-Featured Konzept mit interaktiven Tabs. Wähle die Variante, die am besten zu euren Conversion-Zielen passt.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Variante 1</span>
                <span className="text-xs text-muted-foreground">Product-Focused</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Variante 2</span>
                <span className="text-xs text-muted-foreground">Solutions Explorer</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Variante 3</span>
                <span className="text-xs text-muted-foreground">Visual Cards</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Variante 4</span>
                <span className="text-xs text-muted-foreground">Quick Actions</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const MegaMenuItem = ({ label, isActive, onHover, onLeave }: any) => (
  <div
    className="relative"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <button className={cn(
      "text-sm font-medium transition-colors",
      isActive ? "text-primary" : "hover:text-primary"
    )}>
      {label}
    </button>
  </div>
);

const SimpleLink = ({ label, href, badge }: any) => (
  <Link
    to={href}
    className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 hover:translate-x-1 duration-150 group"
  >
    <span>{label}</span>
    {badge && (
      <Badge variant="secondary" className="text-xs">{badge}</Badge>
    )}
  </Link>
);

const ProductFocusedMegaMenu = () => {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2 space-y-6">
            <div>
              <h3 className="font-semibold text-sm mb-3 text-primary flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Software Features
              </h3>
              <div className="space-y-1.5">
                <SimpleLink label="Alle Features" href="/features" badge="Neu" />
                <SimpleLink label="Software testen" href="/dsgvo-compliance-software" />
                <SimpleLink label="DSGVO Audit" href="/dsgvo-audit" />
                <SimpleLink label="Externer DSB" href="/externer-datenschutzbeauftragter" />
                <SimpleLink label="Preise" href="/preise" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3 text-primary flex items-center gap-2">
                <Target className="h-4 w-4" />
                Use Cases
              </h3>
              <div className="space-y-1.5">
                <SimpleLink label="Für Startups" href="/branchen/saas-unternehmen" />
                <SimpleLink label="Für Enterprise" href="/branchen" />
                <SimpleLink label="Für Agenturen" href="/branchen" />
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="flex gap-2 mb-4 border-b pb-3">
              <button
                onClick={() => setActiveTab('features')}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2",
                  activeTab === 'features'
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted"
                )}
              >
                <Sparkles className="h-4 w-4" />
                Top Features
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2",
                  activeTab === 'demo'
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted"
                )}
              >
                <Play className="h-4 w-4" />
                Live Demo
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2",
                  activeTab === 'pricing'
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted"
                )}
              >
                <BarChart3 className="h-4 w-4" />
                Pricing
              </button>
            </div>

            {activeTab === 'features' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <Zap className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Automatisierte Compliance</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      KI-gestützte DSGVO-Workflows
                    </p>
                    <Link to="/features" className="text-sm text-primary hover:underline flex items-center gap-1">
                      Mehr erfahren <ChevronRight className="h-3 w-3" />
                    </Link>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <Shield className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Real-time Monitoring</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      24/7 Compliance-Überwachung
                    </p>
                    <Link to="/features" className="text-sm text-primary hover:underline flex items-center gap-1">
                      Mehr erfahren <ChevronRight className="h-3 w-3" />
                    </Link>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <Users className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Human-in-the-Loop</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Experten-Support inklusive
                    </p>
                    <Link to="/features/human-in-the-loop" className="text-sm text-primary hover:underline flex items-center gap-1">
                      Mehr erfahren <ChevronRight className="h-3 w-3" />
                    </Link>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <FileCheck className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Audit-Ready Reports</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Compliance-Nachweise auf Knopfdruck
                    </p>
                    <Link to="/features" className="text-sm text-primary hover:underline flex items-center gap-1">
                      Mehr erfahren <ChevronRight className="h-3 w-3" />
                    </Link>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'demo' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-background">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Video className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">Kostenlose Live-Demo buchen</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Sehen Sie, wie Marsstein Ihre DSGVO-Compliance in unter 30 Tagen erreicht
                      </p>
                      <div className="flex gap-3">
                        <Button>
                          <Play className="mr-2 h-4 w-4" />
                          Demo buchen
                        </Button>
                        <Button variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Produkt-Tour (PDF)
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg border bg-muted/30 text-center">
                    <div className="text-2xl font-bold text-primary">10 Min</div>
                    <div className="text-xs text-muted-foreground">Setup-Zeit</div>
                  </div>
                  <div className="p-3 rounded-lg border bg-muted/30 text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">Erfolgsrate</div>
                  </div>
                  <div className="p-3 rounded-lg border bg-muted/30 text-center">
                    <div className="text-2xl font-bold text-primary">2.500+</div>
                    <div className="text-xs text-muted-foreground">Kunden</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-5 text-center hover:shadow-lg transition-shadow">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">STARTER</div>
                    <div className="text-3xl font-bold mb-1">€299</div>
                    <div className="text-xs text-muted-foreground mb-4">/Monat</div>
                    <Button variant="outline" className="w-full" size="sm">Mehr erfahren</Button>
                  </Card>
                  <Card className="p-5 text-center border-primary border-2 hover:shadow-lg transition-shadow relative">
                    <Badge className="absolute -top-2 left-1/2 -translate-x-1/2">Beliebt</Badge>
                    <div className="text-sm font-semibold text-primary mb-2">BUSINESS</div>
                    <div className="text-3xl font-bold mb-1">€599</div>
                    <div className="text-xs text-muted-foreground mb-4">/Monat</div>
                    <Button className="w-full" size="sm">Jetzt starten</Button>
                  </Card>
                  <Card className="p-5 text-center hover:shadow-lg transition-shadow">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">ENTERPRISE</div>
                    <div className="text-3xl font-bold mb-1">Custom</div>
                    <div className="text-xs text-muted-foreground mb-4">Auf Anfrage</div>
                    <Button variant="outline" className="w-full" size="sm">Kontakt</Button>
                  </Card>
                </div>
                <Link to="/preise" className="block text-center text-sm text-primary hover:underline">
                  Vollständige Preisübersicht anzeigen →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionsExplorerMegaMenu = () => {
  const [activeTab, setActiveTab] = useState('regulations');

  return (
    <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-1 space-y-4">
            <div className="space-y-1">
              <SimpleLink label="DSGVO" href="/dsgvo" />
              <SimpleLink label="EU AI Act" href="/eu-ai-act" />
              <SimpleLink label="NIS2" href="/nis2-compliance" />
              <SimpleLink label="HinSchG" href="/hinweisgeberschutzgesetz" />
              <SimpleLink label="ISO 27001" href="/iso-27001-zertifizierung" />
              <SimpleLink label="SOC 2" href="/soc2-zertifizierung" />
            </div>
            <div className="pt-4 border-t">
              <Link to="/tools" className="text-sm text-primary hover:underline flex items-center gap-1">
                Alle Tools <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="col-span-4">
            <div className="flex gap-2 mb-5 pb-4 border-b">
              <button
                onClick={() => setActiveTab('regulations')}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                  activeTab === 'regulations'
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                Regulierungen
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                  activeTab === 'certifications'
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                Zertifizierungen
              </button>
              <button
                onClick={() => setActiveTab('quickstart')}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2",
                  activeTab === 'quickstart'
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <Rocket className="h-4 w-4" />
                Quickstart
              </button>
            </div>

            {activeTab === 'regulations' && (
              <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-200">
                <Link to="/dsgvo" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">DSGVO</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Datenschutz-Grundverordnung für EU-Unternehmen
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">Beliebt</Badge>
                        <span className="text-xs text-muted-foreground">2.500+ Kunden</span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/eu-ai-act" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">EU AI Act</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        KI-Verordnung der Europäischen Union
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">Neu</Badge>
                        <span className="text-xs text-muted-foreground">Ab 2025</span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/nis2-compliance" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">NIS2-Richtlinie</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Cybersecurity für kritische Infrastrukturen
                      </p>
                      <span className="text-xs text-muted-foreground">Frist: Okt 2024</span>
                    </div>
                  </div>
                </Link>

                <Link to="/hinweisgeberschutzgesetz" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center">
                      <Bell className="h-6 w-6 text-pink-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">Hinweisgeberschutzgesetz</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Whistleblower-Schutz und Meldesysteme
                      </p>
                      <span className="text-xs text-muted-foreground">Ab 50 MA</span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="grid grid-cols-3 gap-4 animate-in fade-in duration-200">
                <Link to="/iso-27001-zertifizierung" className="p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-1">ISO 27001</h4>
                  <p className="text-xs text-muted-foreground">ISMS Zertifizierung</p>
                </Link>
                <Link to="/soc2-zertifizierung" className="p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-1">SOC 2</h4>
                  <p className="text-xs text-muted-foreground">Security Compliance</p>
                </Link>
                <Link to="/iso-27017-zertifizierung" className="p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-1">ISO 27017</h4>
                  <p className="text-xs text-muted-foreground">Cloud Security</p>
                </Link>
                <Link to="/iso-27018-zertifizierung" className="p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-1">ISO 27018</h4>
                  <p className="text-xs text-muted-foreground">Cloud Privacy</p>
                </Link>
                <Link to="/tisax-zertifizierung" className="p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-1">TISAX®</h4>
                  <p className="text-xs text-muted-foreground">Automotive Security</p>
                </Link>
                <Link to="/wissen/zertifizierungen" className="p-4 rounded-lg border border-dashed hover:border-primary/50 transition-all text-center flex items-center justify-center">
                  <div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">Alle anzeigen</span>
                  </div>
                </Link>
              </div>
            )}

            {activeTab === 'quickstart' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-background border-primary/20">
                  <div className="flex items-start gap-4">
                    <Rocket className="h-10 w-10 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-2">DSGVO in 30 Tagen</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Schritt-für-Schritt zur vollständigen DSGVO-Compliance – mit Expertenunterstützung
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Automatisierte Workflows</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Experten-Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Audit-ready Reports</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Templates inklusive</span>
                        </div>
                      </div>
                      <Button className="w-full">
                        Jetzt starten <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Link to="/assessment-center" className="p-4 rounded-lg border hover:border-primary/50 transition-all">
                    <Target className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Quick Assessment</h4>
                    <p className="text-xs text-muted-foreground">5-Min. Compliance-Check</p>
                  </Link>
                  <Link to="/dsgvo-audit" className="p-4 rounded-lg border hover:border-primary/50 transition-all">
                    <FileCheck className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Full Audit</h4>
                    <p className="text-xs text-muted-foreground">Komplette Prüfung in 10 Min</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const VisualCardsMegaMenu = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="container mx-auto px-8 py-8">
        <div className="flex gap-3 mb-6 pb-4 border-b justify-center">
          <button
            onClick={() => setActiveTab('overview')}
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-lg transition-all",
              activeTab === 'overview'
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted"
            )}
          >
            Übersicht
          </button>
          <button
            onClick={() => setActiveTab('byindustry')}
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-lg transition-all",
              activeTab === 'byindustry'
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted"
            )}
          >
            Nach Branche
          </button>
          <button
            onClick={() => setActiveTab('byuse')}
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-lg transition-all",
              activeTab === 'byuse'
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted"
            )}
          >
            Nach Anwendung
          </button>
          <button
            onClick={() => setActiveTab('popular')}
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-lg transition-all flex items-center gap-2",
              activeTab === 'popular'
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted"
            )}
          >
            <Star className="h-4 w-4" />
            Beliebteste
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-4 gap-4 animate-in fade-in duration-200">
            <Link to="/dsgvo" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all bg-gradient-to-br from-blue-500/5 to-background">
              <Shield className="h-8 w-8 text-blue-500 mb-3" />
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">DSGVO</h4>
              <p className="text-xs text-muted-foreground mb-3">Datenschutz-Grundverordnung</p>
              <Badge variant="secondary" className="text-xs">2.500+ Kunden</Badge>
            </Link>

            <Link to="/eu-ai-act" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all bg-gradient-to-br from-purple-500/5 to-background">
              <Bot className="h-8 w-8 text-purple-500 mb-3" />
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">EU AI Act</h4>
              <p className="text-xs text-muted-foreground mb-3">KI-Verordnung</p>
              <Badge variant="secondary" className="text-xs">Neu</Badge>
            </Link>

            <Link to="/iso-27001-zertifizierung" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all bg-gradient-to-br from-green-500/5 to-background">
              <Award className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">ISO 27001</h4>
              <p className="text-xs text-muted-foreground mb-3">ISMS Zertifizierung</p>
              <Badge variant="secondary" className="text-xs">Beliebt</Badge>
            </Link>

            <Link to="/nis2-compliance" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all bg-gradient-to-br from-orange-500/5 to-background">
              <AlertTriangle className="h-8 w-8 text-orange-500 mb-3" />
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">NIS2</h4>
              <p className="text-xs text-muted-foreground mb-3">Cybersecurity</p>
              <Badge variant="secondary" className="text-xs">Dringend</Badge>
            </Link>

            <Link to="/soc2-zertifizierung" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all bg-gradient-to-br from-cyan-500/5 to-background">
              <Award className="h-8 w-8 text-cyan-500 mb-3" />
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">SOC 2</h4>
              <p className="text-xs text-muted-foreground mb-3">Security Compliance</p>
              <Badge variant="secondary" className="text-xs">SaaS</Badge>
            </Link>

            <Link to="/hinweisgeberschutzgesetz" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all bg-gradient-to-br from-pink-500/5 to-background">
              <Bell className="h-8 w-8 text-pink-500 mb-3" />
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">HinSchG</h4>
              <p className="text-xs text-muted-foreground mb-3">Whistleblowing</p>
              <Badge variant="secondary" className="text-xs">Ab 50 MA</Badge>
            </Link>

            <Link to="/tisax-zertifizierung" className="group p-5 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all bg-gradient-to-br from-indigo-500/5 to-background">
              <Award className="h-8 w-8 text-indigo-500 mb-3" />
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">TISAX®</h4>
              <p className="text-xs text-muted-foreground mb-3">Automotive</p>
              <Badge variant="secondary" className="text-xs">Industrie</Badge>
            </Link>

            <Link to="/tools" className="group p-5 rounded-lg border border-dashed hover:border-primary/50 transition-all flex flex-col items-center justify-center text-center">
              <ChevronRight className="h-8 w-8 text-muted-foreground mb-3" />
              <span className="font-medium text-sm">Alle Lösungen</span>
              <span className="text-xs text-muted-foreground">12+ Standards</span>
            </Link>
          </div>
        )}

        {activeTab === 'byindustry' && (
          <div className="grid grid-cols-3 gap-4 animate-in fade-in duration-200">
            <Link to="/branchen/gesundheitswesen" className="p-5 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
              <Building2 className="h-7 w-7 text-primary mb-3" />
              <h4 className="font-bold mb-2">Gesundheitswesen</h4>
              <p className="text-sm text-muted-foreground mb-3">DSGVO + MDR Compliance</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">DSGVO</Badge>
                <Badge variant="outline" className="text-xs">ISO 27001</Badge>
              </div>
            </Link>
            <Link to="/branchen/finanzdienstleister" className="p-5 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
              <Building2 className="h-7 w-7 text-primary mb-3" />
              <h4 className="font-bold mb-2">Finanzdienstleister</h4>
              <p className="text-sm text-muted-foreground mb-3">DSGVO + NIS2 + DORA</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">DSGVO</Badge>
                <Badge variant="outline" className="text-xs">NIS2</Badge>
              </div>
            </Link>
            <Link to="/branchen/saas-unternehmen" className="p-5 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
              <Building2 className="h-7 w-7 text-primary mb-3" />
              <h4 className="font-bold mb-2">SaaS</h4>
              <p className="text-sm text-muted-foreground mb-3">DSGVO + SOC 2 + ISO 27001</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">SOC 2</Badge>
                <Badge variant="outline" className="text-xs">ISO 27001</Badge>
              </div>
            </Link>
          </div>
        )}

        {activeTab === 'byuse' && (
          <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-200">
            <Card className="p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Datenschutz
              </h4>
              <div className="space-y-2">
                <Link to="/dsgvo" className="block text-sm hover:text-primary transition-colors">→ DSGVO Compliance</Link>
                <Link to="/tools/cookie-management" className="block text-sm hover:text-primary transition-colors">→ Cookie Management</Link>
                <Link to="/tools/whistleblower-system" className="block text-sm hover:text-primary transition-colors">→ Hinweisgebersystem</Link>
              </div>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Informationssicherheit
              </h4>
              <div className="space-y-2">
                <Link to="/iso-27001-zertifizierung" className="block text-sm hover:text-primary transition-colors">→ ISO 27001</Link>
                <Link to="/soc2-zertifizierung" className="block text-sm hover:text-primary transition-colors">→ SOC 2</Link>
                <Link to="/nis2-compliance" className="block text-sm hover:text-primary transition-colors">→ NIS2</Link>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'popular' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: 'DSGVO Compliance', href: '/dsgvo', count: '2.500+', icon: Shield, color: 'blue' },
                { title: 'ISO 27001', href: '/iso-27001-zertifizierung', count: '1.200+', icon: Award, color: 'green' },
                { title: 'EU AI Act', href: '/eu-ai-act', count: '800+', icon: Bot, color: 'purple' },
              ].map((item, idx) => (
                <Link key={idx} to={item.href} className="relative p-6 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all group">
                  <div className="absolute top-3 right-3">
                    <Crown className="h-5 w-5 text-yellow-500" />
                  </div>
                  <item.icon className={`h-10 w-10 text-${item.color}-500 mb-3`} />
                  <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  <div className="text-sm text-muted-foreground">{item.count} Kunden</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const QuickActionsHubMegaMenu = () => {
  const [activeTab, setActiveTab] = useState('getstarted');

  return (
    <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="container mx-auto px-6 py-7">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
              Produkt
            </div>
            <div className="space-y-1">
              <SimpleLink label="Alle Features" href="/features" badge="Neu" />
              <SimpleLink label="Software testen" href="/dsgvo-compliance-software" />
              <SimpleLink label="DSGVO Audit" href="/dsgvo-audit" />
              <SimpleLink label="Externer DSB" href="/externer-datenschutzbeauftragter" />
              <SimpleLink label="Preise" href="/preise" />
            </div>
          </div>

          <div className="col-span-4">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab('getstarted')}
                className={cn(
                  "flex-1 py-2.5 text-sm font-medium rounded-lg transition-all",
                  activeTab === 'getstarted'
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 hover:bg-muted"
                )}
              >
                Jetzt starten
              </button>
              <button
                onClick={() => setActiveTab('learn')}
                className={cn(
                  "flex-1 py-2.5 text-sm font-medium rounded-lg transition-all",
                  activeTab === 'learn'
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 hover:bg-muted"
                )}
              >
                Mehr erfahren
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={cn(
                  "flex-1 py-2.5 text-sm font-medium rounded-lg transition-all",
                  activeTab === 'support'
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 hover:bg-muted"
                )}
              >
                Support
              </button>
            </div>

            {activeTab === 'getstarted' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <Card className="p-5 bg-gradient-to-br from-primary/5 to-background hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">Kostenlos testen</h4>
                      <p className="text-sm text-muted-foreground">14 Tage ohne Kreditkarte</p>
                    </div>
                    <Button>Starten</Button>
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-3">
                  <Link to="/dsgvo-audit" className="p-4 rounded-lg border hover:border-primary/50 transition-all">
                    <FileCheck className="h-5 w-5 text-primary mb-2" />
                    <div className="font-semibold text-sm mb-1">Quick Audit</div>
                    <div className="text-xs text-muted-foreground">10 Min. Compliance-Check</div>
                  </Link>
                  <Link to="/assessment-center" className="p-4 rounded-lg border hover:border-primary/50 transition-all">
                    <Target className="h-5 w-5 text-primary mb-2" />
                    <div className="font-semibold text-sm mb-1">Assessment</div>
                    <div className="text-xs text-muted-foreground">Kostenlose Tests</div>
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'learn' && (
              <div className="grid grid-cols-2 gap-3 animate-in fade-in duration-200">
                <Link to="/wissen" className="p-4 rounded-lg border hover:border-primary/50 transition-all">
                  <BookOpen className="h-5 w-5 text-primary mb-2" />
                  <div className="font-semibold text-sm mb-1">Knowledge Hub</div>
                  <div className="text-xs text-muted-foreground">150+ Guides</div>
                </Link>
                <Link to="/wissen/rechtsprechung" className="p-4 rounded-lg border hover:border-primary/50 transition-all">
                  <FileText className="h-5 w-5 text-primary mb-2" />
                  <div className="font-semibold text-sm mb-1">Rechtsprechung</div>
                  <div className="text-xs text-muted-foreground">Aktuelle Urteile</div>
                </Link>
                <Link to="/branchen" className="p-4 rounded-lg border hover:border-primary/50 transition-all">
                  <Building2 className="h-5 w-5 text-primary mb-2" />
                  <div className="font-semibold text-sm mb-1">Branchen</div>
                  <div className="text-xs text-muted-foreground">Spezifische Lösungen</div>
                </Link>
                <Link to="/features" className="p-4 rounded-lg border hover:border-primary/50 transition-all">
                  <Sparkles className="h-5 w-5 text-primary mb-2" />
                  <div className="font-semibold text-sm mb-1">Features</div>
                  <div className="text-xs text-muted-foreground">Alle Funktionen</div>
                </Link>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <Card className="p-5">
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold mb-2">Persönlicher Support</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Unser Expertenteam hilft Ihnen bei allen Fragen rund um Compliance
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Chat starten</Button>
                        <Button size="sm" variant="outline">Demo buchen</Button>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 rounded-lg bg-muted/30 text-center">
                    <div className="text-lg font-bold">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30 text-center">
                    <div className="text-lg font-bold">&lt;2h</div>
                    <div className="text-xs text-muted-foreground">Response</div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30 text-center">
                    <div className="text-lg font-bold">98%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuVariants;
