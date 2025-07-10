import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { key: 'nav_home', href: '#' },
    { key: 'nav_features', href: '#features' },
    { key: 'nav_pricing', href: '#pricing' },
    { key: 'nav_academy', href: '#academy' },
    { key: 'nav_contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">Marsstein</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.key)}
            </a>
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
          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
            {t('nav_demo')}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {t(item.key)}
                  </a>
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
                  <Button className="w-full bg-gradient-primary">
                    {t('nav_demo')}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};