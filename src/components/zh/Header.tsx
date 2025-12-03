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
    if (location.pathname !== '/zh') {
      navigate('/zh');
      setTimeout(() => {
        const featuresElement = document.getElementById('features');
        if (featuresElement) {
          featuresElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
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
    { key: 'nav_industries', href: '/zh/hangye' },
    { key: 'nav_pricing', href: '/zh/jiage' },
    { key: 'nav_about', href: '/zh/guanyu-women' },
    { key: 'nav_contact', href: '/zh/lianxi' },
  ];

  const regulationsDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        法规
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/zh/ou-ai-fa" className="block w-full">
            欧盟AI法案
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/ou-shuju-fa" className="block w-full">
            欧盟数据法案
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/gdpr" className="block w-full">
            GDPR
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/nis2-heguixing" className="block w-full">
            NIS2指令
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/jubaozhe-baohu-fa" className="block w-full">
            举报者保护法
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const certificationsDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        认证
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/zh/iso-27001-renzheng" className="block w-full">
            ISO 27001
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/soc2-renzheng" className="block w-full">
            SOC 2
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/iso-27017-renzheng" className="block w-full">
            ISO 27017 云安全
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/iso-27018-renzheng" className="block w-full">
            ISO 27018 云隐私
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/tisax-renzheng" className="block w-full">
            TISAX® 汽车安全
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const toolsDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        工具
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/zh/gongju" className="block w-full">
            工具概览
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/gongju/cookie-guanli" className="block w-full">
            Cookie管理
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/gongju/jubaozhe-xitong" className="block w-full">
            举报者系统
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/gongju/gdpr-youjian-muban" className="block w-full">
            GDPR邮件模板
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/gongju/heguixing-ai-zhushou" className="block w-full">
            合规AI助手
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/gongju/gdpr-jifen-ka" className="block w-full">
            GDPR评分卡
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const knowledgeDropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        知识
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/zh/zhishi" className="block w-full">
            概览
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/zhishi/gdpr" className="block w-full">
            GDPR
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/zhishi/heguixing-kuangjia" className="block w-full">
            框架
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/zhishi/fali" className="block w-full">
            法理
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/zhishi/fengxian-guanli" className="block w-full">
            风险管理
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/zhishi/hangye" className="block w-full">
            行业
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/zh/zhishi/weiji-guanli" className="block w-full">
            危机管理
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/zh" className="flex items-center">
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
                {item.key === 'nav_industries' ? '行业' :
                 item.key === 'nav_pricing' ? '价格' :
                 item.key === 'nav_about' ? '关于我们' :
                 item.key === 'nav_contact' ? '联系' :
                 item.key}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" aria-label="登录">
            登录
          </Button>
          <Link to="/zh/dsgvo-compliance-software">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              免费试用
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
                aria-label="打开导航菜单"
                className="relative hover:bg-accent transition-colors"
              >
                <LucideMenu className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full animate-pulse" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm sm:max-w-md p-0 overflow-hidden">
              <SheetTitle className="sr-only">导航菜单</SheetTitle>
              <div className="flex flex-col h-full bg-gradient-to-b from-background to-muted/20">
                <div className="flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur border-b">
                  <Link to="/zh" onClick={handleMobileNavClick}>
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
                      to="/zh"
                      onClick={handleMobileNavClick}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                        location.pathname === '/zh'
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-accent hover:translate-x-1"
                      )}
                    >
                      <Home className="h-4 w-4" />
                      <span>首页</span>
                    </Link>

                    {/* Regulierungen Section */}
                    <Collapsible
                      open={openSections.includes('regulations')}
                      onOpenChange={() => toggleSection('regulations')}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-all group">
                        <div className="flex items-center gap-3">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="font-medium">法规</span>
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSections.includes('regulations') && "rotate-180"
                        )} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/zh/ou-ai-fa"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Bot className="h-3.5 w-3.5" />
                          欧盟AI法案
                        </Link>
                        <Link
                          to="/zh/ou-shuju-fa"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          欧盟数据法案
                        </Link>
                        <Link
                          to="/zh/gdpr"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileCheck className="h-3.5 w-3.5" />
                          GDPR
                        </Link>
                        <Link
                          to="/zh/nis2-heguixing"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <AlertTriangle className="h-3.5 w-3.5" />
                          NIS2指令
                        </Link>
                        <Link
                          to="/zh/jubaozhe-baohu-fa"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Bell className="h-3.5 w-3.5" />
                          举报者保护法
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
                          <span className="font-medium">认证</span>
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSections.includes('certifications') && "rotate-180"
                        )} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/zh/iso-27001-renzheng"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          ISO 27001
                        </Link>
                        <Link
                          to="/zh/soc2-renzheng"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          SOC 2
                        </Link>
                        <Link
                          to="/zh/iso-27017-renzheng"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Cloud className="h-3.5 w-3.5" />
                          ISO 27017 云安全
                        </Link>
                        <Link
                          to="/zh/iso-27018-renzheng"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Cloud className="h-3.5 w-3.5" />
                          ISO 27018 云隐私
                        </Link>
                        <Link
                          to="/zh/tisax-renzheng"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Car className="h-3.5 w-3.5" />
                          TISAX® 汽车
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
                          <span className="font-medium">工具</span>
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSections.includes('tools') && "rotate-180"
                        )} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/zh/gongju"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Wrench className="h-3.5 w-3.5" />
                          工具概览
                        </Link>
                        <Link
                          to="/zh/gongju/cookie-guanli"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Cookie className="h-3.5 w-3.5" />
                          Cookie管理
                        </Link>
                        <Link
                          to="/zh/gongju/jubaozhe-xitong"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Bell className="h-3.5 w-3.5" />
                          举报者系统
                        </Link>
                        <Link
                          to="/zh/gongju/heguixing-ai-zhushou"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <Bot className="h-3.5 w-3.5" />
                          AI助手
                        </Link>
                        <Link
                          to="/zh/gongju/gdpr-jifen-ka"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <BarChart3 className="h-3.5 w-3.5" />
                          合规评分卡
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
                          <span className="font-medium">知识</span>
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSections.includes('knowledge') && "rotate-180"
                        )} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/zh/zhishi"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          概览
                        </Link>
                        <Link
                          to="/zh/zhishi/gdpr"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileCheck className="h-3.5 w-3.5" />
                          GDPR指南
                        </Link>
                        <Link
                          to="/zh/zhishi/heguixing-kuangjia"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          框架
                        </Link>
                        <Link
                          to="/zh/zhishi/fali"
                          onClick={handleMobileNavClick}
                          className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all hover:translate-x-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          法理
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Direct Links */}
                    <div className="pt-2 space-y-2">
                      <Link
                        to="/zh/hangye"
                        onClick={handleMobileNavClick}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                          location.pathname === '/zh/hangye'
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent hover:translate-x-1"
                        )}
                      >
                        <Building2 className="h-4 w-4" />
                        <span>行业</span>
                      </Link>
                      <Link
                        to="/zh/jiage"
                        onClick={handleMobileNavClick}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                          location.pathname === '/zh/jiage'
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent hover:translate-x-1"
                        )}
                      >
                        <DollarSign className="h-4 w-4" />
                        <span>价格</span>
                      </Link>
                      <Link
                        to="/zh/guanyu-women"
                        onClick={handleMobileNavClick}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                          location.pathname === '/zh/guanyu-women'
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent hover:translate-x-1"
                        )}
                      >
                        <Users className="h-4 w-4" />
                        <span>关于我们</span>
                      </Link>
                      <Link
                        to="/zh/lianxi"
                        onClick={handleMobileNavClick}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                          location.pathname === '/zh/lianxi'
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent hover:translate-x-1"
                        )}
                      >
                        <Mail className="h-4 w-4" />
                        <span>联系</span>
                      </Link>
                    </div>
                  </nav>
                </div>

                <div className="border-t bg-background/95 backdrop-blur p-4 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-center border-2 hover:bg-accent transition-all"
                    aria-label="登录"
                  >
                    登录
                  </Button>
                  <Link to="/zh/dsgvo-compliance-software" className="block" onClick={handleMobileNavClick}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                      <span className="mr-2">🚀</span>
                      免费试用
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
