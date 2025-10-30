import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, FileText, ShieldCheck, Wrench, BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setIsLoading(false);

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const regulierungLinks = [
    { label: '欧盟AI法案', href: '/zh/ou-ai-fa' },
    { label: 'GDPR', href: '/zh/gdpr' },
    { label: '外部数据保护官', href: '/zh/waib u-shuju-baohu-guan' },
    { label: 'NIS2合规', href: '/zh/nis2-heguixing' }
  ];

  const zertifizierungLinks = [
    { label: 'ISO 27001', href: '/zh/iso-27001-renzheng' },
    { label: 'SOC2', href: '/zh/soc2-renzheng' },
    { label: 'TISAX', href: '/zh/tisax-renzheng' }
  ];

  const toolsLinks = [
    { label: '所有工具', href: '/zh/gongju' },
    { label: 'GDPR测试', href: '/zh/pinggu-zhongxin/shuju-baohu-ceshi' },
    { label: 'Cookie管理', href: '/zh/gongju/cookie-guanli' },
    { label: '评估中心', href: '/zh/pinggu-zhongxin' }
  ];

  const wissenLinks = [
    { label: 'GDPR指南', href: '/zh/zhishi/gdpr' },
    { label: 'AI合规', href: '/zh/zhishi/ai-shuju-baohu' },
    { label: '危机管理', href: '/zh/zhishi/weiji-guanli' }
  ];

  return (
    <footer className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-[#e24e1b]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-24 w-24 h-24 bg-gradient-to-br from-[#f97316]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-1/4 w-32 h-32 bg-gradient-to-br from-[#e24e1b]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 relative z-10">
        <div className="py-16">
          {/* Newsletter Section */}
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 text-center shadow-[0_8px_32px_rgba(228,78,27,0.1)] mb-12">
            {isSubscribed ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="h-6 w-6" />
                  <p className="font-semibold text-lg">订阅成功！</p>
                </div>
                <p className="text-sm text-[#474747]">您将很快收到确认电子邮件。</p>
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-[#232323] mb-3 text-lg">合规通讯</h3>
                <p className="text-sm text-[#474747] mb-6">
                  每周洞察 • 关键变化即时提醒 • 专家指南
                </p>
                <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="您的电子邮件地址"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-11"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:from-[#f97316] hover:to-[#e24e1b] px-8 h-11 text-white font-medium transition-all duration-300"
                    >
                      {isLoading ? '加载中...' : '订阅'}
                    </Button>
                  </div>
                  <p className="text-xs text-[#474747] mt-3">
                    免费 • 符合GDPR • 随时可退订
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Logo Section */}
          <div className="mb-12 text-center">
            <Link to="/zh" className="inline-block mb-4">
              <img
                src="/JLogoMarsstein.svg"
                alt="Marsstein Logo"
                className="h-10 w-auto filter drop-shadow-[0_4px_20px_rgba(228,78,27,0.3)] hover:drop-shadow-[0_6px_30px_rgba(228,78,27,0.4)] transition-all duration-300"
              />
            </Link>
            <p className="text-xl font-light tracking-wide text-[#232323]">
              让合规变得简单
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: '法规', links: regulierungLinks, icon: FileText },
              { title: '认证', links: zertifizierungLinks, icon: ShieldCheck },
              { title: '工具与服务', links: toolsLinks, icon: Wrench },
              { title: '知识与指南', links: wissenLinks, icon: BookOpen }
            ].map((section, index) => (
              <div key={index} className="group backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-6 hover:bg-white/80 transition-all duration-500 shadow-[0_8px_32px_rgba(228,78,27,0.1)] hover:shadow-[0_16px_48px_rgba(228,78,27,0.15)] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-gradient-to-br from-[#e24e1b]/20 to-[#f97316]/10 rounded-xl group-hover:from-[#e24e1b]/30 group-hover:to-[#f97316]/20 transition-all duration-300">
                    <section.icon className="h-5 w-5 text-[#e24e1b]" />
                  </div>
                  <h3 className="font-semibold text-sm tracking-wider text-[#232323]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-sm text-[#474747] hover:text-[#e24e1b] transition-all duration-200 block py-1 hover:translate-x-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Card */}
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 text-center shadow-[0_8px_32px_rgba(228,78,27,0.1)]">
            <h3 className="font-semibold text-[#232323] mb-6 text-lg">联系与支持</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#e24e1b]/10 rounded-lg">
                  <Mail className="h-5 w-5 text-[#e24e1b]" />
                </div>
                <a href="mailto:info@marsstein.ai" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                  info@marsstein.ai
                </a>
              </div>
              <Link
                to="/zh/lianxi"
                className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:from-[#f97316] hover:to-[#e24e1b] px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom with Legal Links */}
        <div className="border-t border-[#e24e1b]/10 py-8">
          <div className="flex flex-col items-center justify-center gap-4 text-sm">
            <div className="text-[#474747]">
              © 2025 Marsstein • 让合规变得简单
            </div>
            <div className="flex items-center gap-2">
              <Link to="/zh/tiaokuan" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                条款
              </Link>
              <span className="text-[#474747]">•</span>
              <Link to="/zh/fali-shengming" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                法律声明
              </Link>
              <span className="text-[#474747]">•</span>
              <Link to="/zh/yinsi" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                隐私
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
