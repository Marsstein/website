import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu as LucideMenu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
          <Link to="/contact?demo=true">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Demo anfordern
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Navigation Menu öffnen">
                <LucideMenu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <img 
                    src="/JLogoMarsstein.svg" 
                    alt="Marsstein Logo" 
                    className="h-6 w-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-1">
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                        Regulierungen
                      </div>
                      <Link to="/eu-ai-act" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        EU AI Act
                      </Link>
                      <Link to="/dsgvo" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        DSGVO
                      </Link>
                      <Link to="/nis2-compliance" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        NIS2-Richtlinie
                      </Link>
                      <Link to="/hinweisgeberschutzgesetz" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        Hinweisgeberschutzgesetz
                      </Link>
                    </div>

                    <div className="pt-4 space-y-1">
                      <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                        Zertifizierungen
                      </div>
                      <Link to="/iso-27001-zertifizierung" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        ISO 27001
                      </Link>
                      <Link to="/soc2-zertifizierung" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        SOC 2
                      </Link>
                      <Link to="/iso-27017-zertifizierung" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        ISO 27017
                      </Link>
                      <Link to="/iso-27018-zertifizierung" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        ISO 27018
                      </Link>
                      <Link to="/tisax-zertifizierung" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        TISAX®
                      </Link>
                    </div>

                    <div className="pt-4 space-y-1">
                      <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                        Wissen
                      </div>
                      <Link to="/wissen" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        Übersicht
                      </Link>
                      <Link to="/wissen/dsgvo" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        DSGVO
                      </Link>
                      <Link to="/wissen/compliance-frameworks" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        Frameworks
                      </Link>
                      <Link to="/wissen/rechtsprechung" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                        Rechtsprechungen
                      </Link>
                    </div>

                    <div className="pt-4 space-y-1">
                      <Link to="/branchen" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors">
                        Branchen
                      </Link>
                      <Link to="/ueber-uns" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors">
                        Über uns
                      </Link>
                      <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors">
                        Kontakt
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <Button variant="ghost" className="w-full justify-center" aria-label="Anmelden">
                    Anmelden
                  </Button>
                  <Link to="/contact?demo=true" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Demo anfordern
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
