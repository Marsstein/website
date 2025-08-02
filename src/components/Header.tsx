import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';
import { Menu as LucideMenu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
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
    { key: 'nav_tools', href: '/tools' },
    { key: 'nav_knowledge', href: '#' },
    { key: 'nav_resources', href: '/assessment-center' },
    { key: 'nav_industries', href: '/branchen' },
    { key: 'nav_contact', href: '/contact' },
  ];

  const regulationsDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Regulierungen
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/regulierung/eu-ai-act" className="block w-full">
            EU AI Act
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/regulierung/dsgvo" className="block w-full">
            DSGVO
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/regulierung/nis2" className="block w-full">
            NIS2-Richtlinie
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/regulierung/hinweisgeberschutzgesetz" className="block w-full">
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
          <Link to="/zertifizierung/iso-27001" className="block w-full">
            ISO 27001
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zertifizierung/soc2" className="block w-full">
            SOC 2
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zertifizierung/iso-27017" className="block w-full">
            ISO 27017 Cloud Security
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zertifizierung/iso-27018" className="block w-full">
            ISO 27018 Cloud Privacy
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zertifizierung/tisax" className="block w-full">
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
          <Link to="/tools/cookie-management-tool" className="block w-full">
            Cookie Management
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/tools/whistleblower-system-tool" className="block w-full">
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
            Wissen Übersicht
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/dsgvo" className="block w-full">
            DSGVO & Datenschutz
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/ki-compliance" className="block w-full">
            KI & Compliance
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/cybersecurity" className="block w-full">
            Cybersecurity
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/zertifizierungen" className="block w-full">
            Zertifizierungen
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wissen/branchen" className="block w-full">
            Branchenwissen
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="brand-name text-2xl font-bold tracking-tight">
            MAR<span className="brand-symbol">§</span>TEIN
          </span>
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
                {t(item.key)}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="flex items-center space-x-1 rounded-lg border p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-medium rounded ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              } transition-colors`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('de')}
              className={`px-2 py-1 text-xs font-medium rounded ${
                language === 'de'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              } transition-colors`}
            >
              DE
            </button>
          </div>

          <Button variant="ghost" size="sm">
            {t('nav_login')}
          </Button>
          <Link to="/contact?demo=true">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t('nav_demo')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <LucideMenu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  item.key === 'nav_regulations' ? (
                    <DropdownMenu key={item.key}>
                      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Regulierungen
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link to="/regulierung/eu-ai-act" className="block w-full">
                            EU AI Act
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/regulierung/dsgvo" className="block w-full">
                            DSGVO
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/regulierung/nis2" className="block w-full">
                            NIS2-Richtlinie
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/regulierung/hinweisgeberschutzgesetz" className="block w-full">
                            Hinweisgeberschutzgesetz
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : item.key === 'nav_certifications' ? (
                    <DropdownMenu key={item.key}>
                      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Zertifizierungen
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link to="/zertifizierung/iso-27001" className="block w-full">
                            ISO 27001
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/zertifizierung/soc2" className="block w-full">
                            SOC 2
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/zertifizierung/iso-27017" className="block w-full">
                            ISO 27017 Cloud Security
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/zertifizierung/iso-27018" className="block w-full">
                            ISO 27018 Cloud Privacy
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/zertifizierung/tisax" className="block w-full">
                            TISAX® Automotive Security
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : item.key === 'nav_tools' ? (
                    <DropdownMenu key={item.key}>
                      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Tools
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link to="/tools" className="block w-full">
                            Alle Tools
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/tools/cookie-management-tool" className="block w-full">
                            Cookie Management
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/tools/whistleblower-system-tool" className="block w-full">
                            Hinweisgebersystem
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/tools/dsgvo-email-template-generator" className="block w-full">
                            DSGVO Email Templates
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/tools/dsgvo-compliance-scorecard" className="block w-full">
                            DSGVO Compliance Scorecard
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/tools/compliance-ai-assistant" className="block w-full">
                            Compliance AI Assistant
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : item.key === 'nav_knowledge' ? (
                    <DropdownMenu key={item.key}>
                      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Wissen
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link to="/wissen" className="block w-full">
                            Wissen Übersicht
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/wissen/dsgvo-leitfaeden" className="block w-full">
                            DSGVO-Leitfäden
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/wissen/leitfaden/dsgvo-grundlagen" className="block w-full">
                            DSGVO Grundlagen
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/wissen/leitfaden/dsgvo-30-tage" className="block w-full">
                            DSGVO in 30 Tagen
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/wissen/leitfaden/website-dsgvo" className="block w-full">
                            Website DSGVO-konform
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/wissen/leitfaden/data-breach-notfall" className="block w-full">
                            Data Breach Notfallplan
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      key={item.key}
                      to={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                    >
                      {t(item.key)}
                    </Link>
                  )
                ))}

                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 mb-4">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">Language</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-2 text-sm font-medium rounded ${
                        language === 'en'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLanguage('de')}
                      className={`px-3 py-2 text-sm font-medium rounded ${
                        language === 'de'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      Deutsch
                    </button>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    {t('nav_login')}
                  </Button>
                  <Link to="/contact?demo=true" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      {t('nav_demo')}
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
