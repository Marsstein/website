import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Menu as LucideMenu,
  ChevronDown,
  Shield,
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Users,
  Mail,
  FileCheck,
  FileText,
  AlertTriangle,
  Bell,
  Cloud,
  Car,
  Wrench,
  Cookie,
  Bot,
  BarChart3,
  Home,
  X
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Navigate to home page first, then scroll to features
      navigate('/');
      setTimeout(() => {
        const featuresElement = document.getElementById('features');
        if (featuresElement) {
          featuresElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll to features
      const featuresElement = document.getElementById('features');
      if (featuresElement) {
        featuresElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { key: 'nav_regulations', href: '#' },
    { key: 'nav_certifications', href: '#' },
    { key: 'nav_knowledge', href: '#' },
    { key: 'nav_industries', href: '/branchen' },
    { key: 'nav_pricing', href: '/preise' },
    { key: 'nav_about', href: '/ueber-uns' },
    { key: 'nav_contact', href: '/contact' },
  ];

  const regulationsDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Regulierungen
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/eu-ai-act" className="block w-full">
            EU AI Act
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/eu-data-act" className="block w-full">
            EU Data Act
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/dsgvo" className="block w-full">
            DSGVO
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/nis2-compliance" className="block w-full">
            NIS2-Richtlinie
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/hinweisgeberschutzgesetz" className="block w-full">
            Hinweisgeberschutzgesetz
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const certificationsDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Zertifizierungen
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/iso-27001-zertifizierung" className="block w-full">
            ISO 27001
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/soc2-zertifizierung" className="block w-full">
            SOC 2
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/iso-27017-zertifizierung" className="block w-full">
            ISO 27017 Cloud Security
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/iso-27018-zertifizierung" className="block w-full">
            ISO 27018 Cloud Privacy
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/tisax-zertifizierung" className="block w-full">
            TISAX® Automotive Security
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const toolsDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Tools
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/tools" className="block w-full">
            Tools Übersicht
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/tools/cookie-management" className="block w-full">
            Cookie Management
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/tools/whistleblower-system" className="block w-full">
            Hinweisgebersystem
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/tools/dsgvo-email-template-generator" className="block w-full">
            DSGVO Email Templates
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/tools/compliance-ai-assistant" className="block w-full">
            Compliance AI Assistant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/tools/dsgvo-compliance-scorecard" className="block w-full">
            DSGVO Compliance Scorecard
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const knowledgeDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Wissen
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/wissen" className="block w-full">
            Übersicht
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/dsgvo" className="block w-full">
            DSGVO
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/compliance-frameworks" className="block w-full">
            Frameworks
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/rechtsprechung" className="block w-full">
            Rechtsprechungen
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/risk-management" className="block w-full">
            Risk Management
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/branchen" className="block w-full">
            Branchen
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/krisenmanagement" className="block w-full">
            Krisenmanagement
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/JLogoMarsstein.svg" 
            alt="Marsstein Logo" 
            className="h-8 w-auto"
            width="32"
            height="32"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.key === 'nav_regulations' ? (
              <div key={item.key}>{regulationsDropdown}</div>
            ) : item.key === 'nav_certifications' ? (
              <div key={item.key}>{certificationsDropdown}</div>
            ) : item.key === 'nav_tools' ? (
              <div key={item.key}>{toolsDropdown}</div>
            ) : item.key === 'nav_knowledge' ? (
              <div key={item.key}>{knowledgeDropdown}</div>
            ) : (
              <Link
                key={item.key}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.key === 'nav_industries' ? 'Branchen' :
                 item.key === 'nav_pricing' ? 'Preise' :
                 item.key === 'nav_about' ? 'Über uns' :
                 item.key === 'nav_contact' ? 'Kontakt' :
                 item.key}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" aria-label="Anmelden">
            Anmelden
          </Button>
          <Link to="/beta">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Kostenlos testen
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Navigation Menu öffnen"
                className="relative hover:bg-accent transition-colors"
              >
                <LucideMenu className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full animate-pulse" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm sm:max-w-md p-0 overflow-hidden">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full bg-gradient-to-b from-background to-muted/20">
                <div className="flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur border-b">
                  <Link to="/" onClick={handleMobileNavClick}>
                    <img
                      src="/JLogoMarsstein.svg"
                      alt="Marsstein Logo"
                      className="h-7 w-auto hover:scale-105 transition-transform"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:bg-accent transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent">
                  <nav className="px-4 py-6 space-y-2">
                    {/* Home Link */}
                    <Link
                      to="/"
                      onClick={handleMobileNavClick}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                        location.pathname === '/'
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-accent hover:translate-x-1"
                      )}
                    >
                      <Home className="h-4 w-4" />
                      <span>Startseite</span>
                    </Link>

                    {/* Regulierungen Section */}
                    <Collapsible
                      open={openSections.includes('regulations')}
                      onOpenChange={() => toggleSection('regulations')}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-all group">
                        <div className="flex items-center gap-3">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="font-medium">Regulierungen</span>
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSections.includes('regulations') && "rotate-180"
                        )} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/eu-ai-act"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Bot className="h-3.5 w-3.5" />
                          EU AI Act
                        </Link>
                        <Link
                          to="/eu-data-act"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          EU Data Act
                        </Link>
                        <Link
                          to="/dsgvo"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileCheck className="h-3.5 w-3.5" />
                          DSGVO
                        </Link>
                        <Link
                          to="/nis2-compliance"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <AlertTriangle className="h-3.5 w-3.5" />
                          NIS2-Richtlinie
                        </Link>
                        <Link
                          to="/hinweisgeberschutzgesetz"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Bell className="h-3.5 w-3.5" />
                          Hinweisgeberschutzgesetz
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Zertifizierungen Section */}
                    <Collapsible
                      open={openSections.includes('certifications')}
                      onOpenChange={() => toggleSection('certifications')}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-all group">
                        <div className="flex items-center gap-3">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="font-medium">Zertifizierungen</span>
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSections.includes('certifications') && "rotate-180"
                        )} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/iso-27001-zertifizierung"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          ISO 27001
                        </Link>
                        <Link
                          to="/soc2-zertifizierung"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          SOC 2
                        </Link>
                        <Link
                          to="/iso-27017-zertifizierung"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Cloud className="h-3.5 w-3.5" />
                          ISO 27017 Cloud Security
                        </Link>
                        <Link
                          to="/iso-27018-zertifizierung"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Cloud className="h-3.5 w-3.5" />
                          ISO 27018 Cloud Privacy
                        </Link>
                        <Link
                          to="/tisax-zertifizierung"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Car className="h-3.5 w-3.5" />
                          TISAX® Automotive
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Tools Section */}
                    <Collapsible
                      open={openSections.includes('tools')}
                      onOpenChange={() => toggleSection('tools')}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-all group">
                        <div className="flex items-center gap-3">
                          <Wrench className="h-4 w-4 text-primary" />
                          <span className="font-medium">Tools</span>
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSections.includes('tools') && "rotate-180"
                        )} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/tools"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Wrench className="h-3.5 w-3.5" />
                          Tools Übersicht
                        </Link>
                        <Link
                          to="/tools/cookie-management"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Cookie className="h-3.5 w-3.5" />
                          Cookie Management
                        </Link>
                        <Link
                          to="/tools/whistleblower-system"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Bell className="h-3.5 w-3.5" />
                          Hinweisgebersystem
                        </Link>
                        <Link
                          to="/tools/compliance-ai-assistant"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Bot className="h-3.5 w-3.5" />
                          AI Assistant
                        </Link>
                        <Link
                          to="/tools/dsgvo-compliance-scorecard"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <BarChart3 className="h-3.5 w-3.5" />
                          Compliance Scorecard
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Wissen Section */}
                    <Collapsible
                      open={openSections.includes('knowledge')}
                      onOpenChange={() => toggleSection('knowledge')}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-all group">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="font-medium">Wissen</span>
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSections.includes('knowledge') && "rotate-180"
                        )} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/wissen"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          Übersicht
                        </Link>
                        <Link
                          to="/wissen/dsgvo"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileCheck className="h-3.5 w-3.5" />
                          DSGVO Guides
                        </Link>
                        <Link
                          to="/wissen/compliance-frameworks"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          Frameworks
                        </Link>
                        <Link
                          to="/wissen/rechtsprechung"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          Rechtsprechungen
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Direct Links */}
                    <div className="pt-2 space-y-2">
                      <Link
                        to="/branchen"
                        onClick={handleMobileNavClick}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                          location.pathname === '/branchen'
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent hover:translate-x-1"
                        )}
                      >
                        <Building2 className="h-4 w-4" />
                        <span>Branchen</span>
                      </Link>
                      <Link
                        to="/preise"
                        onClick={handleMobileNavClick}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                          location.pathname === '/preise'
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent hover:translate-x-1"
                        )}
                      >
                        <DollarSign className="h-4 w-4" />
                        <span>Preise</span>
                      </Link>
                      <Link
                        to="/ueber-uns"
                        onClick={handleMobileNavClick}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                          location.pathname === '/ueber-uns'
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent hover:translate-x-1"
                        )}
                      >
                        <Users className="h-4 w-4" />
                        <span>Über uns</span>
                      </Link>
                      <Link
                        to="/contact"
                        onClick={handleMobileNavClick}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                          location.pathname === '/contact'
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent hover:translate-x-1"
                        )}
                      >
                        <Mail className="h-4 w-4" />
                        <span>Kontakt</span>
                      </Link>
                    </div>
                  </nav>
                </div>

                <div className="border-t bg-background/95 backdrop-blur p-4 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-center border-2 hover:bg-accent transition-all"
                    aria-label="Anmelden"
                  >
                    Anmelden
                  </Button>
                  <Link to="/beta" className="block" onClick={handleMobileNavClick}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                      <span className="mr-2">🚀</span>
                      Kostenlos testen
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
