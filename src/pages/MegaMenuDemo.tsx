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
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const MegaMenuDemo = () => {
  const [activeExample, setActiveExample] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mega Menu Beispiele
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verschiedene Mega Menu Stile zum Vergleich. Hover über die Navigation, um die unterschiedlichen Designs zu sehen.
          </p>
        </div>

        <div className="space-y-24">
          {/* Example 1: Vanta-Style Full Width */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Beispiel 1: Vanta-Style (Full Width)</h2>
              <p className="text-muted-foreground">Großes, visuelles Mega Menu mit Featured Card</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem1
                    label="Lösungen"
                    isActive={activeExample === 'vanta-solutions'}
                    onHover={() => setActiveExample('vanta-solutions')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Branchen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'vanta-solutions' && (
                <VantaStyleMegaMenu />
              )}
            </div>
          </section>

          {/* Example 2: Contained Multi-Column */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Beispiel 2: Contained Multi-Column</h2>
              <p className="text-muted-foreground">Kompakteres Design mit 3 Spalten</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <Link to="/" className="text-sm font-medium hover:text-primary">Produkt</Link>
                  <MegaMenuItem2
                    label="Wissen"
                    isActive={activeExample === 'contained-wissen'}
                    onHover={() => setActiveExample('contained-wissen')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Branchen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'contained-wissen' && (
                <ContainedMegaMenu />
              )}
            </div>
          </section>

          {/* Example 3: Visual Grid with Images */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Beispiel 3: Visual Grid (mit Icons)</h2>
              <p className="text-muted-foreground">Grid-Layout mit großen Icons und Beschreibungen</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <Link to="/" className="text-sm font-medium hover:text-primary">Produkt</Link>
                  <MegaMenuItem3
                    label="Lösungen"
                    isActive={activeExample === 'visual-solutions'}
                    onHover={() => setActiveExample('visual-solutions')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'visual-solutions' && (
                <VisualGridMegaMenu />
              )}
            </div>
          </section>

          {/* Example 4: Minimalist with Categories */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Beispiel 4: Minimalist (Clean)</h2>
              <p className="text-muted-foreground">Cleanes Design mit klaren Kategorien</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem4
                    label="Lösungen"
                    isActive={activeExample === 'minimal-solutions'}
                    onHover={() => setActiveExample('minimal-solutions')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Branchen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'minimal-solutions' && (
                <MinimalistMegaMenu />
              )}
            </div>
          </section>

          {/* Example 5: Business Professional */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Beispiel 5: Business Professional</h2>
              <p className="text-muted-foreground">Professionell mit Featured Highlights und Metrics</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem5
                    label="Lösungen"
                    isActive={activeExample === 'business-solutions'}
                    onHover={() => setActiveExample('business-solutions')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Branchen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'business-solutions' && (
                <BusinessProfessionalMegaMenu />
              )}
            </div>
          </section>

          {/* Example 6: Split Featured */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Beispiel 6: Split Featured (Links + Rechts)</h2>
              <p className="text-muted-foreground">Navigation links, Featured Content rechts mit Tabs</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem6
                    label="Lösungen"
                    isActive={activeExample === 'split-solutions'}
                    onHover={() => setActiveExample('split-solutions')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Branchen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'split-solutions' && (
                <SplitFeaturedMegaMenu />
              )}
            </div>
          </section>

          {/* Example 7: Compact Dense */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Beispiel 7: Compact Dense</h2>
              <p className="text-muted-foreground">Maximaler Content in kompaktem Layout</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem7
                    label="Lösungen"
                    isActive={activeExample === 'compact-solutions'}
                    onHover={() => setActiveExample('compact-solutions')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Branchen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'compact-solutions' && (
                <CompactDenseMegaMenu />
              )}
            </div>
          </section>

          {/* Example 8: Sidebar Navigation */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Beispiel 8: Sidebar Navigation</h2>
              <p className="text-muted-foreground">Kategorie-Sidebar links, Content dynamisch rechts</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/30 border-b p-4">
                <nav className="flex items-center justify-center gap-8">
                  <MegaMenuItem8
                    label="Lösungen"
                    isActive={activeExample === 'sidebar-solutions'}
                    onHover={() => setActiveExample('sidebar-solutions')}
                    onLeave={() => setActiveExample(null)}
                  />
                  <Link to="/" className="text-sm font-medium hover:text-primary">Branchen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Wissen</Link>
                  <Link to="/" className="text-sm font-medium hover:text-primary">Kontakt</Link>
                </nav>
              </div>

              {activeExample === 'sidebar-solutions' && (
                <SidebarNavigationMegaMenu />
              )}
            </div>
          </section>
        </div>

        <div className="mt-24 text-center">
          <Card className="p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Welcher Stil gefällt dir am besten?</h3>
            <p className="text-muted-foreground mb-6">
              Jeder Stil hat seine Vor- und Nachteile. Wähle den, der am besten zu eurer Marke und den User Needs passt.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Beispiel 1</span>
                <span className="text-xs text-muted-foreground">Vanta-Style</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Beispiel 2</span>
                <span className="text-xs text-muted-foreground">Contained</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Beispiel 3</span>
                <span className="text-xs text-muted-foreground">Visual Grid</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Beispiel 4</span>
                <span className="text-xs text-muted-foreground">Minimalist</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Beispiel 5</span>
                <span className="text-xs text-muted-foreground">Business Pro</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Beispiel 6</span>
                <span className="text-xs text-muted-foreground">Split Featured</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Beispiel 7</span>
                <span className="text-xs text-muted-foreground">Compact Dense</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 px-4 flex-col items-start">
                <span className="font-bold text-sm">Beispiel 8</span>
                <span className="text-xs text-muted-foreground">Sidebar Nav</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const MegaMenuItem1 = ({ label, isActive, onHover, onLeave }: any) => (
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

const MegaMenuItem2 = MegaMenuItem1;
const MegaMenuItem3 = MegaMenuItem1;
const MegaMenuItem4 = MegaMenuItem1;
const MegaMenuItem5 = MegaMenuItem1;
const MegaMenuItem6 = MegaMenuItem1;
const MegaMenuItem7 = MegaMenuItem1;
const MegaMenuItem8 = MegaMenuItem1;

const VantaStyleMegaMenu = () => (
  <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FileCheck className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-sm">Regulierungen</h3>
          </div>
          <div className="space-y-2">
            <MenuLink icon={Shield} label="DSGVO" badge="Beliebt" href="/dsgvo" />
            <MenuLink icon={Bot} label="EU AI Act" href="/eu-ai-act" />
            <MenuLink icon={AlertTriangle} label="NIS2-Richtlinie" href="/nis2-compliance" />
            <MenuLink icon={Bell} label="Hinweisgeberschutzgesetz" href="/hinweisgeberschutzgesetz" />
            <MenuLink icon={Database} label="EU Data Act" href="/eu-data-act" />
          </div>
          <Link to="/wissen/dsgvo" className="flex items-center gap-1 text-sm text-primary mt-4 hover:gap-2 transition-all">
            Alle Regulierungen <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-sm">Zertifizierungen</h3>
          </div>
          <div className="space-y-2">
            <MenuLink icon={Award} label="ISO 27001" href="/iso-27001-zertifizierung" />
            <MenuLink icon={Award} label="SOC 2" href="/soc2-zertifizierung" />
            <MenuLink icon={Award} label="ISO 27017" href="/iso-27017-zertifizierung" />
            <MenuLink icon={Award} label="ISO 27018" href="/iso-27018-zertifizierung" />
            <MenuLink icon={Award} label="TISAX®" href="/tisax-zertifizierung" />
          </div>
          <Link to="/wissen/zertifizierungen" className="flex items-center gap-1 text-sm text-primary mt-4 hover:gap-2 transition-all">
            Alle Zertifizierungen <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-sm">Branchen</h3>
          </div>
          <div className="space-y-2">
            <MenuLink icon={Building2} label="Gesundheitswesen" href="/branchen/gesundheitswesen" />
            <MenuLink icon={Building2} label="Finanzdienstleister" href="/branchen/finanzdienstleister" />
            <MenuLink icon={Building2} label="E-Commerce" href="/branchen/e-commerce" />
            <MenuLink icon={Building2} label="SaaS Unternehmen" href="/branchen/saas-unternehmen" />
            <MenuLink icon={Building2} label="Produktion" href="/branchen/produktion" />
          </div>
          <Link to="/branchen" className="flex items-center gap-1 text-sm text-primary mt-4 hover:gap-2 transition-all">
            Alle Branchen <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        <div>
          <Card className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
            <Sparkles className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold text-lg mb-2">DSGVO Audit</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Compliance-Status in 10 Minuten prüfen
            </p>
            <Button className="w-full" size="sm">
              Jetzt starten <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3 w-3 text-green-500" />
              <span>Kostenlos & unverbindlich</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

const ContainedMegaMenu = () => (
  <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-sm mb-4 text-primary">Leitfäden</h3>
          <div className="space-y-2">
            <SimpleMenuLink label="DSGVO Grundlagen" href="/wissen/leitfaden/dsgvo-grundlagen" />
            <SimpleMenuLink label="Website DSGVO" href="/wissen/leitfaden/website-dsgvo" />
            <SimpleMenuLink label="30-Tage DSGVO Plan" href="/wissen/leitfaden/dsgvo-30-tage" />
            <SimpleMenuLink label="Verarbeitungsverzeichnis" href="/wissen/leitfaden/verarbeitungsverzeichnis" />
            <SimpleMenuLink label="TOM-Maßnahmen" href="/wissen/leitfaden/tom-massnahmen" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-4 text-primary">Branchen</h3>
          <div className="space-y-2">
            <SimpleMenuLink label="Gesundheitswesen" href="/wissen/branchen/gesundheitswesen-dsgvo" />
            <SimpleMenuLink label="Fintech Compliance" href="/wissen/branchen/fintech-compliance" />
            <SimpleMenuLink label="E-Commerce Privacy" href="/wissen/branchen/ecommerce-privacy" />
            <SimpleMenuLink label="SaaS Privacy Design" href="/wissen/branchen/saas-privacy-design" />
            <SimpleMenuLink label="Mehr anzeigen..." href="/wissen/branchen" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-4 text-primary">Rechtsprechung</h3>
          <div className="space-y-2">
            <SimpleMenuLink label="Schrems II" href="/wissen/rechtsprechung/schrems-ii" />
            <SimpleMenuLink label="Meta Irland 2024" href="/wissen/rechtsprechung/meta-irland-2024" />
            <SimpleMenuLink label="Cookie Law" href="/wissen/rechtsprechung/cookie-law" />
            <SimpleMenuLink label="Google Fonts München" href="/wissen/rechtsprechung/google-fonts-muenchen" />
            <SimpleMenuLink label="Alle Urteile" href="/wissen/rechtsprechung" />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <Globe className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-sm mb-1">China & DSGVO</h4>
              <p className="text-xs text-muted-foreground">Compliance für China-Geschäft</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <Bot className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-sm mb-1">KI & Datenschutz</h4>
              <p className="text-xs text-muted-foreground">AI Compliance Guides</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VisualGridMegaMenu = () => (
  <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <VisualCard
          icon={Shield}
          title="DSGVO"
          description="Datenschutz-Grundverordnung"
          href="/dsgvo"
          iconColor="text-blue-500"
          bgColor="bg-blue-500/10"
        />
        <VisualCard
          icon={Bot}
          title="EU AI Act"
          description="KI-Verordnung der EU"
          href="/eu-ai-act"
          iconColor="text-purple-500"
          bgColor="bg-purple-500/10"
        />
        <VisualCard
          icon={Award}
          title="ISO 27001"
          description="Informationssicherheit"
          href="/iso-27001-zertifizierung"
          iconColor="text-green-500"
          bgColor="bg-green-500/10"
        />
        <VisualCard
          icon={AlertTriangle}
          title="NIS2"
          description="Cybersecurity-Richtlinie"
          href="/nis2-compliance"
          iconColor="text-orange-500"
          bgColor="bg-orange-500/10"
        />
        <VisualCard
          icon={Award}
          title="SOC 2"
          description="Security & Compliance"
          href="/soc2-zertifizierung"
          iconColor="text-cyan-500"
          bgColor="bg-cyan-500/10"
        />
        <VisualCard
          icon={Bell}
          title="HinSchG"
          description="Hinweisgeberschutz"
          href="/hinweisgeberschutzgesetz"
          iconColor="text-pink-500"
          bgColor="bg-pink-500/10"
        />
        <VisualCard
          icon={Award}
          title="TISAX®"
          description="Automotive Security"
          href="/tisax-zertifizierung"
          iconColor="text-indigo-500"
          bgColor="bg-indigo-500/10"
        />
        <VisualCard
          icon={Wrench}
          title="Tools"
          description="Compliance Tools"
          href="/tools"
          iconColor="text-amber-500"
          bgColor="bg-amber-500/10"
        />
      </div>
    </div>
  </div>
);

const MinimalistMegaMenu = () => (
  <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
    <div className="max-w-5xl mx-auto px-8 py-8">
      <div className="grid grid-cols-4 gap-12">
        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
            Regulierungen
          </h3>
          <div className="space-y-3">
            <MinimalLink label="DSGVO" href="/dsgvo" />
            <MinimalLink label="EU AI Act" href="/eu-ai-act" />
            <MinimalLink label="NIS2" href="/nis2-compliance" />
            <MinimalLink label="HinSchG" href="/hinweisgeberschutzgesetz" />
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
            Zertifizierungen
          </h3>
          <div className="space-y-3">
            <MinimalLink label="ISO 27001" href="/iso-27001-zertifizierung" />
            <MinimalLink label="SOC 2" href="/soc2-zertifizierung" />
            <MinimalLink label="ISO 27017" href="/iso-27017-zertifizierung" />
            <MinimalLink label="TISAX®" href="/tisax-zertifizierung" />
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
            Branchen
          </h3>
          <div className="space-y-3">
            <MinimalLink label="Gesundheitswesen" href="/branchen/gesundheitswesen" />
            <MinimalLink label="Finanzdienstleister" href="/branchen/finanzdienstleister" />
            <MinimalLink label="E-Commerce" href="/branchen/e-commerce" />
            <MinimalLink label="SaaS" href="/branchen/saas-unternehmen" />
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
            Tools
          </h3>
          <div className="space-y-3">
            <MinimalLink label="Cookie Management" href="/tools/cookie-management" />
            <MinimalLink label="Hinweisgebersystem" href="/tools/whistleblower-system" />
            <MinimalLink label="AI Assistant" href="/tools/compliance-ai-assistant" />
            <MinimalLink label="Alle Tools" href="/tools" />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium mb-1">DSGVO Audit starten</p>
            <p className="text-xs text-muted-foreground">In 10 Minuten Compliance prüfen</p>
          </div>
          <Button size="sm" variant="outline">
            Jetzt starten <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const MenuLink = ({ icon: Icon, label, badge, href }: any) => (
  <Link
    to={href}
    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors group"
  >
    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
    <span className="text-sm group-hover:text-foreground">{label}</span>
    {badge && (
      <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
  </Link>
);

const SimpleMenuLink = ({ label, href }: any) => (
  <Link
    to={href}
    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1 hover:translate-x-1 duration-150"
  >
    {label}
  </Link>
);

const VisualCard = ({ icon: Icon, title, description, href, iconColor, bgColor }: any) => (
  <Link
    to={href}
    className="group p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all duration-200"
  >
    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-3", bgColor)}>
      <Icon className={cn("h-6 w-6", iconColor)} />
    </div>
    <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
      {title}
    </h4>
    <p className="text-xs text-muted-foreground">
      {description}
    </p>
  </Link>
);

const MinimalLink = ({ label, href }: any) => (
  <Link
    to={href}
    className="block text-sm hover:text-primary transition-colors"
  >
    {label}
  </Link>
);

const BusinessProfessionalMegaMenu = () => (
  <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b">
                <FileCheck className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">Regulierungen</h3>
              </div>
              <div className="space-y-2.5">
                <MenuLink icon={Shield} label="DSGVO" href="/dsgvo" />
                <MenuLink icon={Bot} label="EU AI Act" href="/eu-ai-act" />
                <MenuLink icon={AlertTriangle} label="NIS2-Richtlinie" href="/nis2-compliance" />
                <MenuLink icon={Bell} label="Hinweisgeberschutzgesetz" href="/hinweisgeberschutzgesetz" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b">
                <Award className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">Zertifizierungen</h3>
              </div>
              <div className="space-y-2.5">
                <MenuLink icon={Award} label="ISO 27001" href="/iso-27001-zertifizierung" />
                <MenuLink icon={Award} label="SOC 2" href="/soc2-zertifizierung" />
                <MenuLink icon={Award} label="ISO 27017" href="/iso-27017-zertifizierung" />
                <MenuLink icon={Award} label="TISAX®" href="/tisax-zertifizierung" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b">
                <Wrench className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">Tools</h3>
              </div>
              <div className="space-y-2.5">
                <MenuLink icon={Wrench} label="Cookie Management" href="/tools/cookie-management" />
                <MenuLink icon={Bell} label="Hinweisgebersystem" href="/tools/whistleblower-system" />
                <MenuLink icon={Bot} label="AI Assistant" href="/tools/compliance-ai-assistant" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t grid grid-cols-3 gap-4">
            <Link to="/assessment-center" className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">Assessment Center</div>
                <div className="text-xs text-muted-foreground">Kostenlose Compliance-Tests</div>
              </div>
            </Link>
            <Link to="/wissen" className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group">
              <BookOpen className="h-5 w-5 text-blue-500" />
              <div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">Knowledge Hub</div>
                <div className="text-xs text-muted-foreground">150+ Compliance Guides</div>
              </div>
            </Link>
            <Link to="/branchen" className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group">
              <Building2 className="h-5 w-5 text-purple-500" />
              <div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">Branchen</div>
                <div className="text-xs text-muted-foreground">Spezifische Lösungen</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-5 bg-gradient-to-br from-primary/10 to-background border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold text-primary">BELIEBT</span>
            </div>
            <h4 className="font-bold text-base mb-2">DSGVO Audit</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Vollständiger Compliance-Check in 10 Minuten
            </p>
            <Button className="w-full mb-3" size="sm">
              Jetzt starten
            </Button>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                <span>100% kostenlos</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                <span>Sofortige Ergebnisse</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                <span>Mit Handlungsempfehlungen</span>
              </div>
            </div>
          </Card>

          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="text-xs font-semibold text-muted-foreground mb-3">ERFOLGSMETRIKEN</div>
            <div className="space-y-2">
              <div>
                <div className="text-2xl font-bold">2.500+</div>
                <div className="text-xs text-muted-foreground">Zertifizierte Unternehmen</div>
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-xs text-muted-foreground">Audit-Erfolgsrate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SplitFeaturedMegaMenu = () => {
  const [activeTab, setActiveTab] = useState('compliance');

  return (
    <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2 space-y-6">
            <div>
              <h3 className="font-semibold text-sm mb-3 text-primary">Regulierungen</h3>
              <div className="space-y-1.5">
                <SimpleMenuLink label="DSGVO" href="/dsgvo" />
                <SimpleMenuLink label="EU AI Act" href="/eu-ai-act" />
                <SimpleMenuLink label="NIS2-Richtlinie" href="/nis2-compliance" />
                <SimpleMenuLink label="Hinweisgeberschutzgesetz" href="/hinweisgeberschutzgesetz" />
                <SimpleMenuLink label="EU Data Act" href="/eu-data-act" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3 text-primary">Zertifizierungen</h3>
              <div className="space-y-1.5">
                <SimpleMenuLink label="ISO 27001" href="/iso-27001-zertifizierung" />
                <SimpleMenuLink label="SOC 2" href="/soc2-zertifizierung" />
                <SimpleMenuLink label="ISO 27017" href="/iso-27017-zertifizierung" />
                <SimpleMenuLink label="ISO 27018" href="/iso-27018-zertifizierung" />
                <SimpleMenuLink label="TISAX®" href="/tisax-zertifizierung" />
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="flex gap-2 mb-4 border-b pb-3">
              <button
                onClick={() => setActiveTab('compliance')}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  activeTab === 'compliance'
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                Compliance Starten
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  activeTab === 'resources'
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                Ressourcen
              </button>
              <button
                onClick={() => setActiveTab('industries')}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  activeTab === 'industries'
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                Branchen
              </button>
            </div>

            {activeTab === 'compliance' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <Card className="p-5 bg-gradient-to-br from-primary/5 to-background">
                  <h4 className="font-bold text-lg mb-2">DSGVO in 30 Tagen</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schritt-für-Schritt zur vollständigen DSGVO-Compliance
                  </p>
                  <Button className="w-full">
                    Plan anzeigen <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/assessment-center" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
                    <FileCheck className="h-5 w-5 text-primary mb-2" />
                    <div className="font-medium text-sm mb-1">Quick Assessment</div>
                    <div className="text-xs text-muted-foreground">5-Min. Compliance-Check</div>
                  </Link>
                  <Link to="/dsgvo-audit" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
                    <Award className="h-5 w-5 text-primary mb-2" />
                    <div className="font-medium text-sm mb-1">Full Audit</div>
                    <div className="text-xs text-muted-foreground">Komplette Prüfung</div>
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <Link to="/wissen" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm mb-1">Knowledge Hub</div>
                    <div className="text-xs text-muted-foreground">150+ Compliance Guides und Artikel</div>
                  </div>
                </Link>
                <Link to="/wissen/rechtsprechung" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm mb-1">Rechtsprechung</div>
                    <div className="text-xs text-muted-foreground">Aktuelle Urteile und Analysen</div>
                  </div>
                </Link>
                <Link to="/tools" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <Wrench className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm mb-1">Compliance Tools</div>
                    <div className="text-xs text-muted-foreground">Kostenlose Tools für die Praxis</div>
                  </div>
                </Link>
              </div>
            )}

            {activeTab === 'industries' && (
              <div className="grid grid-cols-2 gap-3 animate-in fade-in duration-200">
                <Link to="/branchen/gesundheitswesen" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
                  <Building2 className="h-5 w-5 text-primary mb-2" />
                  <div className="font-medium text-sm">Gesundheitswesen</div>
                </Link>
                <Link to="/branchen/finanzdienstleister" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
                  <Building2 className="h-5 w-5 text-primary mb-2" />
                  <div className="font-medium text-sm">Finanzdienstleister</div>
                </Link>
                <Link to="/branchen/e-commerce" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
                  <Building2 className="h-5 w-5 text-primary mb-2" />
                  <div className="font-medium text-sm">E-Commerce</div>
                </Link>
                <Link to="/branchen/saas-unternehmen" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
                  <Building2 className="h-5 w-5 text-primary mb-2" />
                  <div className="font-medium text-sm">SaaS</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CompactDenseMegaMenu = () => (
  <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
    <div className="container mx-auto px-6 py-6">
      <div className="grid grid-cols-5 gap-6">
        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Regulierungen</h3>
          <div className="space-y-1">
            <Link to="/dsgvo" className="block text-sm py-1 hover:text-primary transition-colors">DSGVO</Link>
            <Link to="/eu-ai-act" className="block text-sm py-1 hover:text-primary transition-colors">EU AI Act</Link>
            <Link to="/nis2-compliance" className="block text-sm py-1 hover:text-primary transition-colors">NIS2</Link>
            <Link to="/hinweisgeberschutzgesetz" className="block text-sm py-1 hover:text-primary transition-colors">HinSchG</Link>
            <Link to="/eu-data-act" className="block text-sm py-1 hover:text-primary transition-colors">Data Act</Link>
            <Link to="/geldwaeschegesetz" className="block text-sm py-1 hover:text-primary transition-colors">GwG</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Zertifizierungen</h3>
          <div className="space-y-1">
            <Link to="/iso-27001-zertifizierung" className="block text-sm py-1 hover:text-primary transition-colors">ISO 27001</Link>
            <Link to="/soc2-zertifizierung" className="block text-sm py-1 hover:text-primary transition-colors">SOC 2</Link>
            <Link to="/iso-27017-zertifizierung" className="block text-sm py-1 hover:text-primary transition-colors">ISO 27017</Link>
            <Link to="/iso-27018-zertifizierung" className="block text-sm py-1 hover:text-primary transition-colors">ISO 27018</Link>
            <Link to="/tisax-zertifizierung" className="block text-sm py-1 hover:text-primary transition-colors">TISAX®</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Branchen</h3>
          <div className="space-y-1">
            <Link to="/branchen/gesundheitswesen" className="block text-sm py-1 hover:text-primary transition-colors">Gesundheitswesen</Link>
            <Link to="/branchen/finanzdienstleister" className="block text-sm py-1 hover:text-primary transition-colors">Finanzdienstleister</Link>
            <Link to="/branchen/e-commerce" className="block text-sm py-1 hover:text-primary transition-colors">E-Commerce</Link>
            <Link to="/branchen/saas-unternehmen" className="block text-sm py-1 hover:text-primary transition-colors">SaaS</Link>
            <Link to="/branchen/produktion" className="block text-sm py-1 hover:text-primary transition-colors">Produktion</Link>
            <Link to="/branchen" className="block text-sm py-1 text-primary font-medium">Alle anzeigen →</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Tools & Ressourcen</h3>
          <div className="space-y-1">
            <Link to="/tools/cookie-management" className="block text-sm py-1 hover:text-primary transition-colors">Cookie Management</Link>
            <Link to="/tools/whistleblower-system" className="block text-sm py-1 hover:text-primary transition-colors">Hinweisgebersystem</Link>
            <Link to="/tools/compliance-ai-assistant" className="block text-sm py-1 hover:text-primary transition-colors">AI Assistant</Link>
            <Link to="/assessment-center" className="block text-sm py-1 hover:text-primary transition-colors">Assessment Center</Link>
            <Link to="/wissen" className="block text-sm py-1 hover:text-primary transition-colors">Knowledge Hub</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Schnellstart</h3>
          <div className="space-y-2">
            <Link to="/dsgvo-audit" className="block p-2.5 rounded-md bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-colors">
              <div className="text-sm font-medium mb-0.5">DSGVO Audit</div>
              <div className="text-xs text-muted-foreground">10 Min. Check</div>
            </Link>
            <Link to="/preise" className="block p-2.5 rounded-md bg-muted/50 hover:bg-muted transition-colors">
              <div className="text-sm font-medium mb-0.5">Preise ansehen</div>
              <div className="text-xs text-muted-foreground">Transparente Kosten</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SidebarNavigationMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState('regulations');

  const categories = [
    { id: 'regulations', label: 'Regulierungen', icon: FileCheck },
    { id: 'certifications', label: 'Zertifizierungen', icon: Award },
    { id: 'industries', label: 'Branchen', icon: Building2 },
    { id: 'tools', label: 'Tools', icon: Wrench },
  ];

  return (
    <div className="bg-background border-t animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-1 space-y-1 border-r pr-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="col-span-4">
            {activeCategory === 'regulations' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold mb-4">Alle Regulierungen</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/dsgvo" className="group p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">DSGVO</h4>
                        <p className="text-sm text-muted-foreground">Datenschutz-Grundverordnung für EU-Unternehmen</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/eu-ai-act" className="group p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <Bot className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">EU AI Act</h4>
                        <p className="text-sm text-muted-foreground">KI-Verordnung der Europäischen Union</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/nis2-compliance" className="group p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">NIS2-Richtlinie</h4>
                        <p className="text-sm text-muted-foreground">Netzwerk- und Informationssicherheit</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/hinweisgeberschutzgesetz" className="group p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <Bell className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">Hinweisgeberschutzgesetz</h4>
                        <p className="text-sm text-muted-foreground">Whistleblower-Schutz und Meldesysteme</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}

            {activeCategory === 'certifications' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold mb-4">Sicherheitszertifizierungen</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/iso-27001-zertifizierung" className="group p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <Award className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">ISO 27001</h4>
                    <p className="text-sm text-muted-foreground">Informationssicherheits-Managementsystem</p>
                  </Link>
                  <Link to="/soc2-zertifizierung" className="group p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <Award className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">SOC 2</h4>
                    <p className="text-sm text-muted-foreground">Security & Compliance für SaaS</p>
                  </Link>
                  <Link to="/iso-27017-zertifizierung" className="group p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <Award className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">ISO 27017</h4>
                    <p className="text-sm text-muted-foreground">Cloud Security Controls</p>
                  </Link>
                  <Link to="/tisax-zertifizierung" className="group p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <Award className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">TISAX®</h4>
                    <p className="text-sm text-muted-foreground">Automotive Security Standard</p>
                  </Link>
                </div>
              </div>
            )}

            {activeCategory === 'industries' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold mb-4">Branchenspezifische Lösungen</h3>
                <div className="grid grid-cols-3 gap-3">
                  <Link to="/branchen/gesundheitswesen" className="p-3 rounded-lg border hover:border-primary/50 transition-all text-center">
                    <Building2 className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Gesundheitswesen</div>
                  </Link>
                  <Link to="/branchen/finanzdienstleister" className="p-3 rounded-lg border hover:border-primary/50 transition-all text-center">
                    <Building2 className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Finanzdienstleister</div>
                  </Link>
                  <Link to="/branchen/e-commerce" className="p-3 rounded-lg border hover:border-primary/50 transition-all text-center">
                    <Building2 className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">E-Commerce</div>
                  </Link>
                  <Link to="/branchen/saas-unternehmen" className="p-3 rounded-lg border hover:border-primary/50 transition-all text-center">
                    <Building2 className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">SaaS</div>
                  </Link>
                  <Link to="/branchen/produktion" className="p-3 rounded-lg border hover:border-primary/50 transition-all text-center">
                    <Building2 className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Produktion</div>
                  </Link>
                  <Link to="/branchen/automotive" className="p-3 rounded-lg border hover:border-primary/50 transition-all text-center">
                    <Building2 className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Automotive</div>
                  </Link>
                </div>
              </div>
            )}

            {activeCategory === 'tools' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold mb-4">Compliance Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/tools/cookie-management" className="p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <Wrench className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Cookie Management</h4>
                    <p className="text-sm text-muted-foreground">DSGVO-konforme Cookie-Verwaltung</p>
                  </Link>
                  <Link to="/tools/whistleblower-system" className="p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <Bell className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Hinweisgebersystem</h4>
                    <p className="text-sm text-muted-foreground">Compliant Whistleblowing Platform</p>
                  </Link>
                  <Link to="/tools/compliance-ai-assistant" className="p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <Bot className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">AI Assistant</h4>
                    <p className="text-sm text-muted-foreground">KI-gestützte Compliance-Hilfe</p>
                  </Link>
                  <Link to="/assessment-center" className="p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Assessment Center</h4>
                    <p className="text-sm text-muted-foreground">Kostenlose Compliance-Tests</p>
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

export default MegaMenuDemo;
