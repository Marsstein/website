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
  ChevronDown,
  Sparkles,
  Users,
  FileText,
  Wrench,
  Database,
  CheckCircle2,
  Zap,
  Target,
  Clock,
  Star,
  Menu,
  X,
  Cookie
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const VantaStyleMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleMobileMenu = (menu: string) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-12">
                <Link to="/" className="flex items-center flex-shrink-0">
                  <img
                    src="/JLogoMarsstein.svg"
                    alt="Marsstein Logo"
                    className="h-8 w-auto"
                  />
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                  <NavButton
                    label="Produkt"
                    isActive={activeMenu === 'product'}
                    onClick={() => toggleMenu('product')}
                  />
                  <NavButton
                    label="Lösungen"
                    isActive={activeMenu === 'solutions'}
                    onClick={() => toggleMenu('solutions')}
                  />
                  <NavButton
                    label="Wissen"
                    isActive={activeMenu === 'knowledge'}
                    onClick={() => toggleMenu('knowledge')}
                  />
                  <Link
                    to="/branchen"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Branchen
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Kontakt
                  </Link>
                </nav>
              </div>

              <div className="flex items-center gap-3">
                <Link to="/dsgvo-compliance-software" className="hidden lg:block">
                  <Button size="sm">
                    Kostenlos testen
                  </Button>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {activeMenu === 'product' && (
          <ProductMegaMenu onClose={() => setActiveMenu(null)} />
        )}
        {activeMenu === 'solutions' && (
          <SolutionsMegaMenu onClose={() => setActiveMenu(null)} />
        )}
        {activeMenu === 'knowledge' && (
          <KnowledgeMegaMenu onClose={() => setActiveMenu(null)} />
        )}
      </header>

      {mobileMenuOpen && (
        <MobileMenu
          activeMobileMenu={activeMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="container mx-auto px-4 py-24 text-center max-w-4xl">
        <Badge className="mb-4" variant="secondary">
          Vanta-Style Mega Menu
        </Badge>
        <h1 className="text-5xl font-bold mb-6">
          Vanta-Inspired Navigation für Marsstein
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Klicke auf "Produkt", "Lösungen" oder "Wissen" um das Mega Menu zu sehen
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">
            <Sparkles className="mr-2 h-5 w-5" />
            Jetzt starten
          </Button>
          <Button size="lg" variant="outline">
            Demo ansehen
          </Button>
        </div>
      </div>
    </div>
  );
};

const NavButton = ({ label, isActive, onClick }: any) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-1 text-sm font-medium transition-colors",
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    )}
  >
    {label}
    <ChevronRight className={cn(
      "h-3 w-3 transition-transform",
      isActive && "rotate-90"
    )} />
  </button>
);

const ProductMegaMenu = ({ onClose }: any) => (
  <div className="absolute left-0 right-0 top-full bg-background border-t shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-5">
              Produkte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProductCard
                icon={Zap}
                title="DSGVO Compliance Software"
                description="All-in-One Lösung für automatisierte DSGVO-Compliance."
                href="/dsgvo-compliance-software"
                badge="Beliebt"
              />
              <ProductCard
                icon={Users}
                title="Externer Datenschutzbeauftragter"
                description="Professioneller DSB-Service auf Abruf."
                href="/externer-datenschutzbeauftragter"
              />
              <ProductCard
                icon={FileCheck}
                title="DSGVO Audit & Siegel"
                description="Compliance-Status prüfen und Siegel erhalten."
                href="/dsgvo-audit"
                badge="Kostenlos"
              />
            </div>
          </div>

          <div className="pt-6 border-t">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              Features & Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureLink
                icon={Database}
                title="Verarbeitungsverzeichnis (ROPA/VVT)"
                description="Automatisiert erstellen und pflegen"
                href="/features#verarbeitungsverzeichnis-ropa"
              />
              <FeatureLink
                icon={Users}
                title="Multi-Mandanten Verwaltung"
                description="Mehrere Unternehmen zentral verwalten"
                href="/features#multi-mandanten-verwaltung"
              />
              <FeatureLink
                icon={Sparkles}
                title="Expert in the Loop"
                description="KI mit Expertenvalidierung"
                href="/features/human-in-the-loop"
              />
              <FeatureLink
                icon={Target}
                title="Assessment Center"
                description="Kostenlose Compliance-Tests"
                href="/assessment-center"
              />
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-5"
            >
              Alle Features ansehen
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-4">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-background border-primary/20">
            <h4 className="font-bold text-lg mb-2">Kostenlos starten</h4>
            <p className="text-sm text-muted-foreground mb-5">
              DSGVO-Compliance in 30 Tagen erreichen
            </p>
            <Link to="/dsgvo-compliance-software" onClick={onClose}>
              <Button className="w-full mb-3">
                Demo starten
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/preise" onClick={onClose}>
              <Button variant="outline" className="w-full mb-4">
                Preise ansehen
              </Button>
            </Link>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                <span>Keine Kreditkarte erforderlich</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                <span>Setup in unter 10 Minuten</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

const SolutionsMegaMenu = ({ onClose }: any) => (
  <div className="absolute left-0 right-0 top-full bg-background border-t shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
            Regulierungen
          </h3>
          <div className="space-y-2">
            <SolutionLink
              title="DSGVO"
              description="Datenschutz-Grundverordnung"
              href="/dsgvo"
              onClick={onClose}
            />
            <SolutionLink
              title="EU AI Act"
              description="KI-Verordnung der EU"
              href="/eu-ai-act"
              onClick={onClose}
            />
            <SolutionLink
              title="NIS2-Richtlinie"
              description="Cybersecurity-Richtlinie"
              href="/nis2-compliance"
              onClick={onClose}
            />
            <SolutionLink
              title="Hinweisgeberschutzgesetz"
              description="Whistleblower-Schutz"
              href="/hinweisgeberschutzgesetz"
              onClick={onClose}
            />
            <SolutionLink
              title="EU Data Act"
              description="Daten-Governance"
              href="/eu-data-act"
              onClick={onClose}
            />
            <SolutionLink
              title="Geldwäschegesetz"
              description="AML Compliance"
              href="/geldwaeschegesetz"
              onClick={onClose}
            />
          </div>
        </div>

        <div className="lg:col-span-4">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
            Zertifizierungen
          </h3>
          <div className="space-y-2">
            <SolutionLink
              title="ISO 27001"
              description="Informationssicherheits-Management"
              href="/iso-27001-zertifizierung"
              onClick={onClose}
            />
            <SolutionLink
              title="SOC 2"
              description="Security & Compliance für SaaS"
              href="/soc2-zertifizierung"
              onClick={onClose}
            />
            <SolutionLink
              title="ISO 27017"
              description="Cloud Security Controls"
              href="/iso-27017-zertifizierung"
              onClick={onClose}
            />
            <SolutionLink
              title="ISO 27018"
              description="Cloud Privacy Controls"
              href="/iso-27018-zertifizierung"
              onClick={onClose}
            />
            <SolutionLink
              title="TISAX®"
              description="Automotive Security"
              href="/tisax-zertifizierung"
              onClick={onClose}
            />
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <Card className="p-5 bg-gradient-to-br from-primary/10 to-background border-primary/20">
            <h4 className="font-bold text-base mb-2">DSGVO Compliance Software</h4>
            <p className="text-xs text-muted-foreground mb-4">
              All-in-One Lösung für automatisierte Compliance
            </p>
            <Link to="/dsgvo-compliance-software" onClick={onClose}>
              <Button className="w-full" size="sm">
                Mehr erfahren
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-green-500/10 to-background border-green-500/20">
            <h4 className="font-bold text-base mb-2">DSGVO Audit & Siegel</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Compliance-Status prüfen und Siegel erhalten
            </p>
            <Link to="/dsgvo-audit" onClick={onClose}>
              <Button className="w-full" size="sm" variant="outline">
                Jetzt starten
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

const KnowledgeMegaMenu = ({ onClose }: any) => (
  <div className="absolute left-0 right-0 top-full bg-background border-t shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">Leitfäden</h3>
          <div className="space-y-2">
            <SimpleLink title="DSGVO Grundlagen" href="/wissen/leitfaden/dsgvo-grundlagen" onClick={onClose} />
            <SimpleLink title="Website DSGVO" href="/wissen/leitfaden/website-dsgvo" onClick={onClose} />
            <SimpleLink title="DSGVO in 30 Tagen" href="/wissen/leitfaden/dsgvo-30-tage" onClick={onClose} />
            <SimpleLink title="Verarbeitungsverzeichnis" href="/wissen/leitfaden/verarbeitungsverzeichnis" onClick={onClose} />
            <SimpleLink title="TOM-Maßnahmen" href="/wissen/leitfaden/tom-massnahmen" onClick={onClose} />
            <SimpleLink title="DSFA durchführen" href="/wissen/leitfaden/dsfa-durchfuehrung" onClick={onClose} />
            <SimpleLink title="Betroffenenrechte" href="/wissen/leitfaden/betroffenenrechte" onClick={onClose} />
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
            Branchen
          </h3>
          <div className="space-y-2">
            <SimpleLink title="Gesundheitswesen" href="/wissen/branchen/gesundheitswesen-dsgvo" onClick={onClose} />
            <SimpleLink title="Fintech" href="/wissen/branchen/fintech-compliance" onClick={onClose} />
            <SimpleLink title="E-Commerce" href="/wissen/branchen/ecommerce-privacy" onClick={onClose} />
            <SimpleLink title="SaaS" href="/wissen/branchen/saas-privacy-design" onClick={onClose} />
            <SimpleLink title="Industrie 4.0" href="/wissen/branchen/industrie-40-datenschutz" onClick={onClose} />
            <SimpleLink title="Automotive" href="/wissen/branchen/automotive-datenschutz" onClick={onClose} />
            <SimpleLink title="Alle Branchen →" href="/wissen/branchen" onClick={onClose} />
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
            Rechtsprechung
          </h3>
          <div className="space-y-2">
            <SimpleLink title="Schrems II" href="/wissen/rechtsprechung/schrems-ii" onClick={onClose} />
            <SimpleLink title="Meta Irland 2024" href="/wissen/rechtsprechung/meta-irland-2024" onClick={onClose} />
            <SimpleLink title="Cookie Law" href="/wissen/rechtsprechung/cookie-law" onClick={onClose} />
            <SimpleLink title="Google Fonts München" href="/wissen/rechtsprechung/google-fonts-muenchen" onClick={onClose} />
            <SimpleLink title="Alle Urteile →" href="/wissen/rechtsprechung" onClick={onClose} />
          </div>

          <div className="mt-6">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              Spezialthemen
            </h3>
            <div className="space-y-2">
              <SimpleLink title="China & DSGVO" href="/wissen/china" onClick={onClose} />
              <SimpleLink title="KI & Datenschutz" href="/wissen/ki-datenschutz" onClick={onClose} />
              <SimpleLink title="Krisenmanagement" href="/wissen/krisenmanagement" onClick={onClose} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-background border-blue-500/20">
            <Badge className="mb-3" variant="secondary">
              <Users className="h-3 w-3 mr-1" />
              Experten
            </Badge>
            <h4 className="font-bold text-base mb-2">Datenschutzexperten</h4>
            <p className="text-xs text-muted-foreground mb-3">
              Zertifizierte Datenschutzbeauftragte und Compliance-Experten
            </p>
            <Link to="/datenschutzexperten" className="text-sm text-primary hover:underline" onClick={onClose}>
              Team kennenlernen →
            </Link>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-primary/5 to-background border-primary/20">
            <Badge className="mb-3" variant="secondary">
              <Star className="h-3 w-3 mr-1" />
              Beliebt
            </Badge>
            <h4 className="font-bold text-base mb-2">Knowledge Hub</h4>
            <p className="text-xs text-muted-foreground mb-3">
              150+ Compliance Guides, Templates und Checklisten
            </p>
            <Link to="/wissen" className="text-sm text-primary hover:underline" onClick={onClose}>
              Jetzt entdecken →
            </Link>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

const ProductCard = ({ icon: Icon, title, description, href, badge }: any) => (
  <Link
    to={href}
    className="group block p-5 rounded-lg hover:bg-muted/50 transition-all border border-transparent hover:border-primary/20"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
            {title}
          </h4>
          {badge && (
            <Badge variant="secondary" className="text-xs">
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  </Link>
);

const SolutionLink = ({ title, description, href, onClick }: any) => (
  <Link
    to={href}
    onClick={onClick}
    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
  >
    <h4 className="font-medium text-sm mb-0.5 group-hover:text-primary transition-colors">
      {title}
    </h4>
    <p className="text-xs text-muted-foreground">
      {description}
    </p>
  </Link>
);

const SimpleLink = ({ title, href, onClick }: any) => {
  const isViewAll = title.includes('Alle') || title.includes('→');

  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "block py-2 text-sm transition-colors",
        isViewAll
          ? "text-primary hover:underline font-medium"
          : "text-muted-foreground hover:text-primary"
      )}
    >
      {title}
    </Link>
  );
};

const FeatureLink = ({ icon: Icon, title, description, href }: any) => (
  <Link
    to={href}
    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
  >
    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
      <Icon className="h-4 w-4 text-primary" />
    </div>
    <div>
      <h4 className="text-sm font-medium mb-0.5 group-hover:text-primary transition-colors">
        {title}
      </h4>
      {description && (
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  </Link>
);

const MobileMenu = ({ activeMobileMenu, toggleMobileMenu, onClose }: any) => (
  <>
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
      onClick={onClose}
    />
    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background border-l shadow-xl z-50 lg:hidden flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Menü</h2>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-4">
            <MobileAccordion
              label="Produkt"
              isActive={activeMobileMenu === 'product'}
              onClick={() => toggleMobileMenu('product')}
            >
              <MobileProductMenu onClose={onClose} />
            </MobileAccordion>

            <MobileAccordion
              label="Lösungen"
              isActive={activeMobileMenu === 'solutions'}
              onClick={() => toggleMobileMenu('solutions')}
            >
              <MobileSolutionsMenu onClose={onClose} />
            </MobileAccordion>

            <MobileAccordion
              label="Wissen"
              isActive={activeMobileMenu === 'knowledge'}
              onClick={() => toggleMobileMenu('knowledge')}
            >
              <MobileKnowledgeMenu onClose={onClose} />
            </MobileAccordion>

            <Link
              to="/branchen"
              className="block py-3 text-base font-medium text-foreground border-b"
              onClick={onClose}
            >
              Branchen
            </Link>

            <Link
              to="/contact"
              className="block py-3 text-base font-medium text-foreground border-b pb-3"
              onClick={onClose}
            >
              Kontakt
            </Link>
          </nav>

          <div className="mt-6">
            <Link to="/dsgvo-compliance-software" onClick={onClose}>
              <Button className="w-full text-base">
                Kostenlos testen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

const MobileAccordion = ({ label, isActive, onClick, children }: any) => (
  <div className="border-b pb-3">
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground"
    >
      {label}
      <ChevronDown
        className={cn(
          "h-5 w-5 transition-transform",
          isActive && "rotate-180"
        )}
      />
    </button>
    {isActive && (
      <div className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
        {children}
      </div>
    )}
  </div>
);

const MobileProductMenu = ({ onClose }: any) => (
  <div className="space-y-4">
    <div>
      <div className="space-y-2">
        <Link
          to="/dsgvo-compliance-software"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">DSGVO Compliance Software</div>
          <div className="text-xs text-muted-foreground">All-in-One Lösung für Datenschutz</div>
        </Link>
        <Link
          to="/externer-datenschutzbeauftragter"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">Externer Datenschutzbeauftragter</div>
          <div className="text-xs text-muted-foreground">Zertifizierte Experten auf Abruf</div>
        </Link>
        <Link
          to="/dsgvo-audit"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">DSGVO Audit & Siegel</div>
          <div className="text-xs text-muted-foreground">Kostenlose Compliance-Prüfung</div>
        </Link>
      </div>
    </div>

    <div className="pt-4 border-t">
      <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
        Features & Tools
      </h4>
      <div className="space-y-2">
        <Link
          to="/verarbeitungsverzeichnis"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">Verarbeitungsverzeichnis (ROPA/VVT)</div>
          <div className="text-xs text-muted-foreground">Automatisiert erstellen und pflegen</div>
        </Link>
        <Link
          to="/multi-mandant"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">Multi-Mandanten Verwaltung</div>
          <div className="text-xs text-muted-foreground">Mehrere Unternehmen zentral verwalten</div>
        </Link>
        <Link
          to="/expert-in-the-loop"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">Expert in the Loop</div>
          <div className="text-xs text-muted-foreground">KI mit Expertenvalidierung</div>
        </Link>
        <Link
          to="/assessment-center"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">Assessment Center</div>
          <div className="text-xs text-muted-foreground">Kostenlose Compliance-Tests</div>
        </Link>
      </div>
    </div>

    <div className="pt-4 border-t space-y-2">
      <Link
        to="/preise"
        className="block py-2 text-sm text-primary hover:underline font-medium"
        onClick={onClose}
      >
        Preise ansehen →
      </Link>
      <Link
        to="/features"
        className="block py-2 text-sm text-primary hover:underline font-medium"
        onClick={onClose}
      >
        Alle Features ansehen →
      </Link>
    </div>
  </div>
);

const MobileSolutionsMenu = ({ onClose }: any) => (
  <div className="space-y-4">
    <div>
      <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
        Regulierungen
      </h4>
      <div className="space-y-2">
        <Link
          to="/dsgvo"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">DSGVO</div>
          <div className="text-xs text-muted-foreground">Datenschutz-Grundverordnung</div>
        </Link>
        <Link
          to="/eu-ai-act"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">EU AI Act</div>
          <div className="text-xs text-muted-foreground">KI-Verordnung der EU</div>
        </Link>
        <Link
          to="/nis2-compliance"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">NIS2-Richtlinie</div>
          <div className="text-xs text-muted-foreground">Cybersecurity-Richtlinie</div>
        </Link>
        <Link
          to="/hinweisgeberschutzgesetz"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">Hinweisgeberschutzgesetz</div>
          <div className="text-xs text-muted-foreground">Whistleblower-Schutz</div>
        </Link>
        <Link
          to="/eu-data-act"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">EU Data Act</div>
          <div className="text-xs text-muted-foreground">Daten-Governance</div>
        </Link>
        <Link
          to="/geldwaeschegesetz"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">Geldwäschegesetz</div>
          <div className="text-xs text-muted-foreground">AML Compliance</div>
        </Link>
      </div>
    </div>

    <div className="pt-4 border-t">
      <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
        Zertifizierungen
      </h4>
      <div className="space-y-2">
        <Link
          to="/iso-27001-zertifizierung"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">ISO 27001</div>
          <div className="text-xs text-muted-foreground">Informationssicherheits-Management</div>
        </Link>
        <Link
          to="/soc2-zertifizierung"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">SOC 2</div>
          <div className="text-xs text-muted-foreground">Security & Compliance für SaaS</div>
        </Link>
        <Link
          to="/iso-27017-zertifizierung"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">ISO 27017</div>
          <div className="text-xs text-muted-foreground">Cloud Security Controls</div>
        </Link>
        <Link
          to="/iso-27018-zertifizierung"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">ISO 27018</div>
          <div className="text-xs text-muted-foreground">Cloud Privacy Controls</div>
        </Link>
        <Link
          to="/tisax-zertifizierung"
          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={onClose}
        >
          <div className="font-medium text-sm">TISAX®</div>
          <div className="text-xs text-muted-foreground">Automotive Security</div>
        </Link>
      </div>
    </div>
  </div>
);

const MobileKnowledgeMenu = ({ onClose }: any) => (
  <div className="space-y-2">
    <Link
      to="/wissen"
      className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
      onClick={onClose}
    >
      <div className="font-medium text-sm">Knowledge Hub</div>
      <div className="text-xs text-muted-foreground">150+ Compliance Guides, Templates und Checklisten</div>
    </Link>

    <Link
      to="/wissen/dsgvo"
      className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
      onClick={onClose}
    >
      <div className="font-medium text-sm">DSGVO</div>
    </Link>

    <Link
      to="/wissen/leitfaden"
      className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
      onClick={onClose}
    >
      <div className="font-medium text-sm">Leitfäden</div>
    </Link>

    <Link
      to="/wissen/ki-datenschutz"
      className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
      onClick={onClose}
    >
      <div className="font-medium text-sm">KI & Datenschutz</div>
    </Link>

    <Link
      to="/wissen/branchen"
      className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
      onClick={onClose}
    >
      <div className="font-medium text-sm">Branchen</div>
    </Link>

    <Link
      to="/wissen/rechtsprechung"
      className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
      onClick={onClose}
    >
      <div className="font-medium text-sm">Rechtsprechung</div>
    </Link>

    <Link
      to="/wissen/china"
      className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
      onClick={onClose}
    >
      <div className="font-medium text-sm">China & DSGVO</div>
    </Link>

    <Link
      to="/wissen/krisenmanagement"
      className="block p-2 rounded-lg hover:bg-muted/50 transition-colors"
      onClick={onClose}
    >
      <div className="font-medium text-sm">Krisenmanagement</div>
    </Link>

    <div className="pt-4 border-t">
      <Card className="p-4 bg-gradient-to-br from-blue-500/10 to-background border-blue-500/20">
        <Badge className="mb-2" variant="secondary">
          <Users className="h-3 w-3 mr-1" />
          Experten
        </Badge>
        <h4 className="font-bold text-sm mb-1">Datenschutzexperten</h4>
        <p className="text-xs text-muted-foreground mb-2">
          Zertifizierte Datenschutzbeauftragte und Compliance-Experten
        </p>
        <Link to="/datenschutzexperten" className="text-xs text-primary hover:underline" onClick={onClose}>
          Team kennenlernen →
        </Link>
      </Card>
    </div>
  </div>
);

export default VantaStyleMenu;
