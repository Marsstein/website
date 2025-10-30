import React, { useEffect, useRef, useState } from 'react';
import '../../styles/about.css';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/zh/Header';
import { Footer } from '@/components/zh/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import headerImage from '@/assets/marsstein-header-ueberuns.png';
import jaysonImage from '@/assets/team/jayson.png';
import jonasImage from '@/assets/team/jonas.png';
import javierImage from '@/assets/team/javier.png';
import manuelImage from '@/assets/team/manuel.png';
import niklasImage from '@/assets/team/niklas.png';
import teamGroupImage from '@/assets/team/team-group.png';
import { 
  Shield, 
  Zap, 
  Target, 
  Users,
  CheckCircle,
  Globe,
  ArrowRight,
  Linkedin,
  Mail,
  Clock,
  Award,
  BookOpen,
  Sparkles,
  Rocket,
  Brain,
  Code2,
  Database,
  Lock,
  TrendingUp,
  Heart,
  Coffee,
  Lightbulb
} from 'lucide-react';

const About: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const AnimatedCard = ({ children, className = '', delay = 0, id }: { 
    children: React.ReactNode; 
    className?: string; 
    delay?: number;
    id?: string;
  }) => {
    const isVisible = id ? visibleSections.has(id) : true;
    return (
      <div 
        id={id}
        data-animate
        className={`transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        } ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  const teamMembers = [
    {
      name: "Jayson Chen",
      role: "创始人兼首席执行官",
      description: "Jayson将技术和监管结合成可用的产品：从入职到审计追踪的精简工作流程，优先考虑影响和市场推广。凭借在企业和中型企业环境（包括ZF集团）超过十年的项目经验，他确保速度和可实施性；此外，他还是认证的数据保护官。",
      linkedin: "https://www.linkedin.com/in/jayson-chen/",
      email: "jayson@marsstein.ai",
      image: jaysonImage
    },
    {
      name: "Jonas Krüger",
      role: "首席增长官 (CGO)",
      description: "Jonas将复杂的监管转化为清晰、可衡量的客户旅程，并通过SEO、内容、外展和绩效构建可重复的获客系统。他同时负责品牌管理——定位、叙事、设计准则和营销活动——为整个漏斗提供一致的Marsstein体验。",
      linkedin: "https://www.linkedin.com/in/jonas-kr%C3%BCger-676722267/",
      email: "jonas@marsstein.ai",
      image: jonasImage
    },
    {
      name: "Javier Ponzo",
      role: "技术负责人",
      description: "Javier领导Marsstein AI的工程团队，将产品、法律和销售需求转化为安全、可扩展、可审计的软件。他设定清晰的架构标准（TypeScript/React/Node），建立CI/CD、测试和安全设计——确保团队从0到1再到规模化可靠交付。",
      linkedin: "https://www.linkedin.com/in/javierponzo/",
      email: "javier@marsstein.ai",
      image: javierImage,
      imagePosition: "center 40%"
    },
    {
      name: "Manuel Szedlak",
      role: "首席技术官 (CTO)",
      description: "Manuel专注于稳健性和速度，扩展Marsstein平台。作为Implyt的创始人，曾在保时捷、Ascon和Steinbeis工作，他建立了DevOps/SRE实践（CI/CD、自动化、可观测性）和AI驱动的系统，显著加速开发和运营。",
      linkedin: "https://www.linkedin.com/in/manuel-szedlak/",
      email: "manuel@marsstein.ai",
      image: manuelImage
    },
    {
      name: "Niklas Steppan",
      role: "AI工程师",
      description: "Niklas将LLM原型转化为生产就绪的功能：自动化、评估框架和清晰的指标。凭借汽车机电一体化背景和在康斯坦茨应用科学大学的机器人/AI/航天专业深造，他在研究和可扩展服务之间架起桥梁。",
      linkedin: "https://www.linkedin.com/in/niklas-steppan/",
      email: "niklas@marsstein.ai",
      image: niklasImage,
      imagePosition: "center 35%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>关于我们 - Marsstein | 生命太短，不应浪费在法规上</title>
        <meta
          name="description"
          content="认识Marsstein团队。我们让欧盟合规像保存文件一样简单——通过AI支持的GDPR、ISO 27001和AI法案解决方案。"
        />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="keywords" content="Marsstein团队, 合规专家, GDPR自动化, 欧盟AI法案, 数据保护软件" />
        <link rel="canonical" href="https://marsstein.ai/zh/guanyu-women" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={headerImage}
              alt="Marsstein Header"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#e24e1b]/20 to-[#f97316]/20"></div>
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/30">
                <Target className="w-4 h-4" />
                关于Marsstein
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                生命太短
                <br />
                <span className="text-yellow-200">不应浪费在法规上</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95">
                我们让合规像<span className="font-bold underline">保存文件</span>一样理所当然——快速、安全、可解释。
              </p>

              {/* Description */}
              <p className="text-lg mb-10 max-w-3xl mx-auto opacity-90">
                Marsstein是AI驱动的平台，将GDPR、ISO 27001和欧盟AI法案转化为清晰的工作流程。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/zh/beta">
                  <Button
                    size="lg"
                    className="bg-white text-[#e24e1b] hover:bg-gray-100 px-8 py-3 font-semibold"
                  >
                    预约演示
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/zh/lianxi">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[#e24e1b] px-8 py-3 font-semibold backdrop-blur-sm"
                  >
                    认识团队
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                我们为什么打造<span className="text-[#e24e1b]">Marsstein</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#e24e1b] to-[#f97316] mx-auto rounded-full"></div>
            </AnimatedCard>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <AnimatedCard delay={200}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-[#e24e1b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    化繁为简，清晰明了
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    全欧洲的法规（GDPR、AI法案、ISO 27001）很重要——
                    但不必要地复杂。我们将它们转化为可理解的工作流程。
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    中小企业优先
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    中型企业承担着最大的工作量，却拥有最少的资源。
                    因此我们为你们而建——不是为大企业。
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={600}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    从数周到数天
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    自动化文档、控制和审计准备——
                    专家参与循环，确保最高质量。
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                我们具体<span className="text-[#e24e1b]">做什么</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                30秒解释——Marsstein如何工作
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#e24e1b] to-[#f97316] mx-auto rounded-full"></div>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedCard delay={200}>
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    文档生成器
                  </h3>
                  <p className="text-gray-600 mb-4">
                    政策、DPIA、TOM、SCC——结构化、可审查且合法地生成。
                  </p>
                  <div className="text-sm text-blue-600 font-medium">
                    自动化
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    控制与任务
                  </h3>
                  <p className="text-gray-600 mb-4">
                    规划、分配、跟踪措施——完整记录，无遗漏。
                  </p>
                  <div className="text-sm text-green-600 font-medium">
                    可追溯
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={600}>
                <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    审计准备
                  </h3>
                  <p className="text-gray-600 mb-4">
                    收集证据，指导审核步骤——包含审计员导出功能。
                  </p>
                  <div className="text-sm text-purple-600 font-medium">
                    审计就绪
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={800}>
                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#e24e1b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    多框架支持
                  </h3>
                  <p className="text-gray-600 mb-4">
                    GDPR、AI法案和ISO 27001——一个账户，一个工作流程，所有标准。
                  </p>
                  <div className="text-sm text-[#e24e1b] font-medium">
                    一体化
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Marsstein背后的<span className="text-[#e24e1b]">团队</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
                五位创始人，结合超过50年的
                深度技术、合规和企业增长经验
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#e24e1b] to-[#f97316] mx-auto rounded-full"></div>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <AnimatedCard key={index} delay={index * 200}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: member.imagePosition || 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#e24e1b] font-semibold mb-4 text-sm">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
                        {member.description}
                      </p>
                      <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-blue-50">
                            <Linkedin className="w-5 h-5 text-blue-600" />
                          </Button>
                        </a>
                        <a href={`mailto:${member.email}`}>
                          <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-orange-50">
                            <Mail className="w-5 h-5 text-[#e24e1b]" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Team Stats */}
            <AnimatedCard delay={1200}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#e24e1b] mb-2">50+</div>
                    <div className="text-gray-600 font-medium">年经验</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                    <div className="text-gray-600 font-medium">创始人</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600 font-medium">远程就绪</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                    <div className="text-gray-600 font-medium">热情</div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Team Mission Statement */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedCard delay={800}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-[500px]">
                  <img
                    src={teamGroupImage}
                    alt="Marsstein Team"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e24e1b]/30 to-[#f97316]/20"></div>
                </div>
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">
                      <div className="inline-block mb-6">
                        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                          <Users className="w-5 h-5 text-white" />
                          <span className="text-white font-semibold text-sm">我们的团队</span>
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Marsstein团队将{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e24e1b] to-[#f97316]">
                          产品、工程、AI和增长
                        </span>
                        {' '}结合为一个清晰的使命
                      </h3>
                      <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                        将法规转化为可用的软件——安全、可审计、可扩展。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                我们<span className="text-[#e24e1b]">客户</span>的声音
              </h2>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedCard delay={200}>
                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                  <div className="flex text-orange-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg mb-6">
                    "8万欧元的GDPR咨询——缓慢而痛苦。使用Marsstein，我们在30天内以3600欧元完成。"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">首席执行官</div>
                    <div className="text-gray-600">Klein Automotive GmbH</div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                  <div className="flex text-blue-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg mb-6">
                    "AI解释比律师文本更清晰。每周为我们节省10+小时。"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">合规官</div>
                    <div className="text-gray-600">ATTC</div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316]">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              在Marsstein工作
            </h2>
            <p className="text-xl mb-8 opacity-95">
              我们将影响力（社会相关的合规）与清晰的产品焦点相结合。
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div>
                <h3 className="font-bold text-lg mb-2">欧洲优先远程</h3>
                <p className="opacity-90">定期线下聚会，直接交流</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">干净的代码库</h3>
                <p className="opacity-90">小团队，高自主权</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">有意义的影响</h3>
                <p className="opacity-90">为数百万人简化合规</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[#e24e1b] hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                查看职位空缺
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#e24e1b] px-8 py-3 font-semibold"
              >
                主动申请
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;