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
    { key: 'nav_frameworks', href: '#' },
    { key: 'nav_academy', href: '/academy' },
    { key: 'nav_pricing', href: '/pricing' },
    { key: 'nav_resources', href: '/resources' }, // Resources is now a standalone link
    { key: 'nav_contact', href: '/contact' },
  ];

  const frameworksDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        {t('Rahmenwerke')}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/eu-ai-act-compliance" className="block w-full">
            {t('nav_ai_act')}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/iso-27001-compliance" className="block w-full">
            {t('nav_iso27001')}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/dsgvo-compliance" className="block w-full">
            {t('nav_dsgvo')}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logomarsstein.png"
            alt="Marsstein Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-foreground"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.key === 'nav_frameworks' ? (
              <div key={item.key}>{frameworksDropdown}</div>
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
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
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
                  item.key === 'nav_frameworks' ? (
                    <DropdownMenu key={item.key}>
                      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        {t('nav_frameworks')}
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link to="/eu-ai-act-compliance" className="block w-full">
                            {t('nav_ai_act')}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/iso-27001-compliance" className="block w-full">
                            {t('nav_iso27001')}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/dsgvo-compliance" className="block w-full">
                            {t('nav_dsgvo')}
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
                    <Button className="w-full bg-gradient-primary">
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
