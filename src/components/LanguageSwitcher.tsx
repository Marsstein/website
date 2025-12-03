import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳' },
];

const LanguageSwitcher: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentLanguage = (): string => {
    const path = location.pathname;
    if (path.startsWith('/zh')) return 'zh';
    if (path.startsWith('/en')) return 'en';
    return 'de';
  };

  const currentLang = getCurrentLanguage();
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    const currentPath = location.pathname;
    let newPath = currentPath;

    if (currentPath.startsWith('/zh')) {
      newPath = currentPath.replace(/^\/zh/, '');
    } else if (currentPath.startsWith('/en')) {
      newPath = currentPath.replace(/^\/en/, '');
    }

    if (langCode === 'zh') {
      newPath = '/zh' + (newPath || '');
    } else if (langCode === 'en') {
      newPath = '/en' + (newPath || '');
    }

    if (!newPath || newPath === '/') {
      newPath = langCode === 'de' ? '/' : `/${langCode}`;
    }

    navigate(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={currentLang === lang.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{lang.flag}</span>
            <span>{lang.nativeName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
