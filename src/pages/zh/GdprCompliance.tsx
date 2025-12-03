import React, { useEffect, useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { Header } from '@/components/zh/Header';
import { Footer } from '@/components/zh/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CompactDsgvoDashboard } from '@/components/CompactDsgvoDashboard';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileCheck, 
  Lock, 
  Users, 
  Building2,
  Euro,
  Clock,
  AlertCircle,
  TrendingUp,
  Award,
  Star,
  Zap,
  Database,
  FileText,
  Bot,
  BarChart3,
  Globe,
  Quote,
  ChevronRight,
  PlayCircle,
  Download,
  Phone,
  Mail,
  Calendar,
  CheckSquare,
  XCircle,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GdprComplianceZh = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate compliance score
      const scoreInterval = setInterval(() => {
        setComplianceScore(prev => {
          if (prev >= 25) {
            clearInterval(scoreInterval);
            return 25;
          }
          return prev + 1;
        });
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Hero Section
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GDPR合规服务",
    "description": "AI驱动的自动化GDPR合规解决方案",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein公司"
    },
    "serviceType": "合规管理",
    "areaServed": "DE"
  };

  const HeroSection = () => (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e24e1b]/5 via-transparent to-[#ea580c]/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e24e1b]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20 px-4 py-1.5">
              <Shield className="h-3.5 w-3.5 mr-2" />
              GDPR合规自2018年
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#232323]">
              GDPR合规
              <span className="block bg-gradient-to-r from-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent">
                自动化且合法
              </span>
            </h1>
            
            <div className="text-xl text-[#474747] leading-relaxed">
              <span>保护您的企业免受GDPR罚款。
              我们的愿景：符合标准的AI驱动GDPR合规解决方案。</span>
              <Badge variant="outline" className="ml-2 text-xs align-middle">测试版阶段</Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#e24e1b] hover:bg-[#f97316] text-white px-8" asChild>
                <Link to="/zh/externer-datenschutzbeauftragter">
                  立即任命数据保护官
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/zh/assessment-center/datenschutz-test">
                  <CheckSquare className="mr-2 h-5 w-5 group-hover:text-[#e24e1b]" />
                  免费数据保护测试
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-sm">30天免费试用</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-sm">无需信用卡</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="border-2 border-[#e24e1b]/20 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-[#232323]">您的GDPR合规分数</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative h-48 flex items-center justify-center">
                  <div className="text-5xl font-bold text-[#e24e1b]">
                    测试版阶段
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-48 h-48 transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-[#474747]/20"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 88}`}
                        strokeDashoffset={`${2 * Math.PI * 88 * (1 - complianceScore / 100)}`}
                        className="text-[#e24e1b] transition-all duration-1000 ease-out"
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#39B37B]/10 rounded-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                      隐私政策
                    </span>
                    <Badge className="bg-[#39B37B] text-white">合规</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#39B37B]/10 rounded-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                      处理活动记录
                    </span>
                    <Badge className="bg-[#39B37B] text-white">最新</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F57C00]/10 rounded-lg">
                    <span className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-[#F57C00]" />
                      TOM文档
                    </span>
                    <Badge className="bg-[#F57C00] text-white">审核中</Badge>
                  </div>
                </div>

                <Button className="w-full bg-[#e24e1b] hover:bg-[#f97316]">
                  开始完整分析
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  // Trust Indicators Section
  const TrustSection = () => (
    <section className="py-16 bg-[#F5F6F8] dark:bg-gray-900/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-[#474747] mb-2">
            为德国现代企业开发
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          {['科技', '汽车', '工程', '制造业', '金融', '航空'].map((sector) => (
            <div key={sector} className="flex items-center justify-center">
              <span className="text-lg font-medium text-gray-400">{sector}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '标准', label: 'GDPR合规开发', icon: Shield },
            { number: '测试版', label: '开发阶段', icon: Clock },
            { number: '安全', label: '首次尝试', icon: Euro },
            { number: '社区', label: '测试版-Support', icon: Users }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 border-[#e24e1b]/20">
              <stat.icon className="h-8 w-8 text-[#e24e1b] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#e24e1b] mb-2">{stat.number}</div>
              <div className="text-sm text-[#474747]">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Industry-specific DSGVO challenges section with modern UI
  const IndustrySection = () => {
    const [activeIndustry, setActiveIndustry] = useState(0);
    const [hoveredIndustry, setHoveredIndustry] = useState(null);

    const industries = [
      {
        id: 'ecommerce',
        name: '电子商务',
        icon: '🛒',
        description: '在线交易与网店',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-[#e24e1b]/5',
        borderColor: 'border-blue-200 dark:border-blue-800',
        textColor: 'text-[#232323]',
        challenges: [
          'Cookie管理与追踪',
          '客户数据处理',
          '新闻通讯与营销',
          '支付服务提供商集成'
        ],
        realWorldExample: '一家中型在线商店每天收集数千条客户数据，使用营销Cookie，并通过各种服务提供商处理支付信息。',
        complianceSteps: [
          '实施Cookie同意管理',
          '所有数据处理的隐私政策',
          '与支付提供商的数据处理协议',
          '设置数据主体权利管理'
        ],
        marsteinSolution: '自动化Cookie合规、集成隐私政策以及适用于所有常见支付提供商的数据处理协议生成器。',
        realFines: [
          {
            description: '在线零售商因Cookie同意不足被罚',
            source: '柏林数据保护专员',
            url: 'https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/pressemitteilungen/2021/20211216-PM-Cookie-Banner.pdf'
          },
          {
            description: '电子商务公司因新闻通讯营销缺乏法律依据被罚',
            source: '巴登-符腾堡州数据保护专员',
            url: 'https://www.baden-wuerttemberg.datenschutz.de/lfdi-verhaengt-bussgeld-gegen-unternehmen-wegen-unzulaessiger-newsletter-versendung/'
          }
        ]
      },
      {
        id: 'healthcare',
        name: '医疗保健',
        icon: '🏥',
        description: '诊所、医院与医疗IT',
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
        textColor: 'text-emerald-900 dark:text-emerald-100',
        challenges: [
          '患者数据保护',
          '远程医疗基础设施合规',
          '外部服务提供商（实验室、放射科）',
          '数字健康应用'
        ],
        realWorldExample: '一家医疗诊所使用数字患者记录，与实验室交换数据，并提供在线预约服务 - 所有这些都在最严格的数据保护要求下进行。',
        complianceSteps: [
          'Patientendaten-处理活动记录 erstellen',
          '为敏感健康数据定义技术和组织措施',
          '与服务提供商签署符合保密义务的数据处理协议',
          '实施患者权利管理'
        ],
        marsteinSolution: 'Spezialisierte Gesundheitsdaten-Templates, automatische TOM文档 und rechtssichere AVV-Vorlagen für Gesundheitsdienstleister.',
        realFines: [
          {
            description: '医院因患者数据保护不足被罚',
            source: '巴登-符腾堡州数据保护专员',
            url: 'https://www.baden-wuerttemberg.datenschutz.de/lfdi-verhaengt-rekordbussgeld-von-4-25-millionen-euro-gegen-suedwestdeutsche-klinikgruppe/'
          },
          {
            description: '医疗诊所因错误传输患者数据被罚',
            source: '巴伐利亚数据保护局',
            url: 'https://www.lda.bayern.de/media/pm2020_05.pdf'
          }
        ]
      },
      {
        id: 'fintech',
        name: '金融服务',
        icon: '🏦',
        description: '银行、保险与金融科技',
        color: 'from-amber-500 to-orange-500',
        bgColor: 'bg-amber-50 dark:bg-amber-950/20',
        borderColor: 'border-amber-200 dark:border-amber-800',
        textColor: 'text-amber-900 dark:text-amber-100',
        challenges: [
          'PCI-DSS与GDPR协调',
          '信用评分与画像',
          '反洗钱与数据保护',
          '开放银行API'
        ],
        realWorldExample: '一款金融科技应用处理账户数据以实现自动预算管理，创建信用评分，同时必须遵守金融监管和GDPR。',
        complianceSteps: [
          '定义评分的法律依据',
          '自动化决策的透明度',
          '画像的数据保护影响评估',
          '第三方访问的安全API文档'
        ],
        marsteinSolution: '金融科技专用DPIA模板、自动化透明度报告以及符合PCI-DSS的数据保护文档。',
        realFines: [
          {
            description: 'Deutsche Bank wegen unzureichender 客户数据处理',
            source: '黑森州数据保护专员',
            url: 'https://datenschutz.hessen.de/pressemitteilungen/der-hessische-beauftragte-fuer-datenschutz-und-informationsfreiheit-7'
          },
          {
            description: '保险公司因评分程序不透明被罚',
            source: '莱茵兰-普法尔茨州数据保护专员',
            url: 'https://www.datenschutz.rlp.de/de/aktuelles/detail/news/detail/News/bussgeldverfahren-gegen-versicherungsunternehmen-abgeschlossen/'
          }
        ]
      },
      {
        id: 'saas',
        name: 'SaaS与科技',
        icon: '💻',
        description: '软件公司与云服务',
        color: 'from-[#e24e1b] to-[#ea580c]',
        bgColor: 'bg-[#ea580c]/5',
        borderColor: 'border-[#e24e1b]/20',
        textColor: 'text-[#232323]',
        challenges: [
          '国际数据传输',
          '处理者与控制者状态',
          'API-安全 & Access-Logs',
          '多租户数据保护'
        ],
        realWorldExample: '一家SaaS提供商在欧盟和美国处理客户数据，为第三方提供API，同时必须区分自己的数据处理和客户的数据处理。',
        complianceSteps: [
          '标准化数据处理协议（DPA）',
          '实施国际传输机制',
          '建立子处理者管理',
          '记录多租户技术保护措施'
        ],
        marsteinSolution: '自动化DPA生成、标准合同条款（SCC）集成以及子处理者通知系统。',
        realFines: [
          {
            description: 'SaaS提供商因非法第三国传输被罚',
            source: 'CNIL（法国）',
            url: 'https://www.cnil.fr/en/cookies-google-analytics-and-data-transfers-united-states-cnil-orders-website-operator-comply'
          },
          {
            description: '云服务提供商因缺少数据处理协议被罚',
            source: '奥地利数据保护局',
            url: 'https://www.dsb.gv.at/download/DSB-D123.270/0003-DSB/2019/DSB.pdf'
          }
        ]
      },
      {
        id: 'marketing',
        name: '营销与广告',
        icon: '📢',
        description: '代理机构与营销服务',
        color: 'from-pink-500 to-rose-500',
        bgColor: 'bg-pink-50 dark:bg-pink-950/20',
        borderColor: 'border-pink-200 dark:border-pink-800',
        textColor: 'text-pink-900 dark:text-pink-100',
        challenges: [
          '追踪与归因模型',
          '个性化广告',
          '潜在客户生成与培育',
          '社交媒体管理'
        ],
        realWorldExample: '一家营销机构通过各种渠道收集潜在客户，使用营销自动化，并基于用户数据创建个性化营销活动。',
        complianceSteps: [
          '所有追踪工具的同意管理',
          '营销传播中的透明数据使用',
          '优化潜在客户培育的选择加入流程',
          '开发无Cookie营销策略'
        ],
        marsteinSolution: '营销技术堆栈合规检查器、自动同意集成以及符合GDPR的潜在客户评分文档。',
        realFines: [
          {
            description: '营销机构因未经授权的电子邮件广告被罚',
            source: '下萨克森州数据保护专员',
            url: 'https://lfd.niedersachsen.de/startseite/infothek/presseinformationen/100-000-euro-bussgeld-wegen-unerlaubter-e-mail-werbung-199019.html'
          },
          {
            description: '广告公司因未经同意追踪被罚',
            source: '柏林数据保护专员',
            url: 'https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/pressemitteilungen/2022/20220331-PM_Bussgeld_Tracking.pdf'
          }
        ]
      },
      {
        id: 'hr',
        name: '人力资源与人事',
        icon: '👥',
        description: '人事部门与人力资源服务',
        color: 'from-teal-500 to-cyan-500',
        bgColor: 'bg-teal-50 dark:bg-teal-950/20',
        borderColor: 'border-teal-200 dark:border-teal-800',
        textColor: 'text-teal-900 dark:text-teal-100',
        challenges: [
          '求职者数据管理',
          '员工监控',
          '工资核算与福利',
          '绩效追踪'
        ],
        realWorldExample: '一个人力资源团队管理求职者数据库，数字化监控工作时间，并使用绩效管理工具 - 所有这些都考虑到员工权利。',
        complianceSteps: [
          '标准化求职者同意声明',
          '员工监控 rechtlich absichern',
          '定义并自动化人力资源数据的删除期限',
          '在数据保护中纳入员工代表'
        ],
        marsteinSolution: '人力资源专用同意模板、自动删除期限管理以及符合工会的数据保护文档。',
        realFines: [
          {
            description: '公司因过度员工监控被罚',
            source: '柏林数据保护专员',
            url: 'https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/pressemitteilungen/2019/20190930-PM-Mitarbeiterueberwachung.pdf'
          },
          {
            description: '人力资源服务提供商因不安全的求职者数据处理被罚',
            source: '巴登-符腾堡州数据保护专员',
            url: 'https://www.baden-wuerttemberg.datenschutz.de/lfdi-verhaengt-bussgeld-wegen-datenschutzverstoessen-bei-bewerbungsverfahren/'
          }
        ]
      }
    ];

    return (
      <section className="relative py-12 md:py-16 overflow-hidden min-h-[90vh] flex items-center">
        {/* Modern Background with Geometric Patterns */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
          
          {/* Animated geometric shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(161,37,27,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(161,37,27,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        <div className="container relative z-10 px-4 w-full">
          <motion.div 
            className="text-center mb-8 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white border-0 px-4 py-1.5 text-sm font-medium shadow-lg">
                <Building2 className="h-3.5 w-3.5 mr-2" />
                行业专属GDPR解决方案
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              为您的行业提供GDPR合规
            </motion.h2>
            <motion.p 
              className="text-lg text-[#474747] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              行业专属解决方案、真实罚款案例和具体合规步骤。
            </motion.p>
          </motion.div>

          {/* Modern Industry Navigation with Glass Effect */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {industries.map((industry, index) => (
              <motion.button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className={cn(
                  "group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-500 backdrop-blur-sm border",
                  activeIndustry === index
                    ? "bg-gradient-to-r from-[#a1251b] to-purple-600 text-white shadow-lg shadow-[#a1251b]/25 border-[#e24e1b]/50 scale-105"
                    : "bg-white/70 dark:bg-gray-800/70 text-[#474747] dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-800/90 border-gray-200/50 dark:border-gray-700/50 hover:shadow-md hover:scale-105"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.span 
                  className="text-lg filter"
                  animate={{ 
                    scale: hoveredIndustry === index ? 1.1 : 1,
                    rotate: hoveredIndustry === index ? 5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {industry.icon}
                </motion.span>
                <span className="relative z-10">{industry.name}</span>
                
                {/* Hover glow effect */}
                {hoveredIndustry === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#a1251b]/20 to-purple-600/20 rounded-xl blur-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Compact Active Industry Content */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                className="relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 20 }}
              >
                <Card className="relative overflow-hidden border-0 shadow-xl shadow-black/10 dark:shadow-black/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                  {/* Compact Dynamic gradient header */}
                  <CardHeader className={`relative bg-gradient-to-r ${industries[activeIndustry].color} text-white overflow-hidden py-4`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <motion.div 
                      className="relative z-10 flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <motion.div 
                        className="text-3xl filter drop-shadow-lg"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 3, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        {industries[activeIndustry].icon}
                      </motion.div>
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-bold text-white drop-shadow-md">
                          {industries[activeIndustry].name}
                        </CardTitle>
                        <CardDescription className="text-white/90 text-sm font-medium">
                          {industries[activeIndustry].description}
                        </CardDescription>
                      </div>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-6">
                    {/* Compact grid layout */}
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Real World Example - more compact */}
                      <motion.div 
                        className={`${industries[activeIndustry].bgColor} rounded-xl p-4 border ${industries[activeIndustry].borderColor} shadow-sm lg:col-span-3`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <h3 className={`text-lg font-bold ${industries[activeIndustry].textColor} mb-2 flex items-center gap-2`}>
                          <Globe className="h-4 w-4" />
                          实际案例
                        </h3>
                        <p className={`${industries[activeIndustry].textColor} leading-relaxed text-sm`}>
                          {industries[activeIndustry].realWorldExample}
                        </p>
                      </motion.div>

                      {/* Challenges - compact */}
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-[#232323] dark:text-gray-100">
                          <div className="p-1.5 bg-[#DC2626]/10 rounded-lg">
                            <AlertCircle className="h-4 w-4 text-[#DC2626]" />
                          </div>
                          挑战
                        </h3>
                        <div className="space-y-2">
                          {industries[activeIndustry].challenges.slice(0, 3).map((challenge, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-2 p-2 bg-[#DC2626]/5 rounded-lg border border-[#DC2626]/20"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.4 + idx * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <XCircle className="h-3 w-3 text-[#DC2626] flex-shrink-0" />
                              <span className="text-xs font-medium text-[#232323] dark:text-gray-200">{challenge}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Compliance Steps - compact */}
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-[#232323] dark:text-gray-100">
                          <div className="p-1.5 bg-[#39B37B]/10 rounded-lg">
                            <CheckSquare className="h-4 w-4 text-[#39B37B]" />
                          </div>
                          解决步骤
                        </h3>
                        <div className="space-y-2">
                          {industries[activeIndustry].complianceSteps.slice(0, 3).map((step, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-2 p-2 bg-[#39B37B]/5 rounded-lg border border-[#39B37B]/20"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.4 + idx * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <CheckCircle2 className="h-3 w-3 text-[#39B37B] flex-shrink-0" />
                              <span className="text-xs font-medium text-[#232323] dark:text-gray-200">{step}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Real Fines - compact */}
                      <motion.div 
                        className="space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-[#DC2626]">
                          <div className="p-1.5 bg-[#DC2626]/10 rounded-lg">
                            <Euro className="h-4 w-4 text-[#DC2626]" />
                          </div>
                          真实罚款
                        </h3>
                        <div className="space-y-2">
                          {industries[activeIndustry].realFines.slice(0, 2).map((fine, idx) => (
                            <motion.div 
                              key={idx} 
                              className="p-3 bg-[#DC2626]/5 rounded-lg border border-[#DC2626]/20"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: 0.5 + idx * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <p className="text-[#DC2626] font-semibold text-xs mb-1">
                                {fine.description}
                              </p>
                              <motion.a 
                                href={fine.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-[#DC2626] hover:text-[#DC2626]/80 font-medium hover:underline"
                                whileHover={{ x: 2 }}
                              >
                                <span>📄 {fine.source}</span>
                                <ChevronRight className="h-3 w-3" />
                              </motion.a>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Compact Marsstein Solution */}
                    <motion.div 
                      className="bg-gradient-to-r from-[#a1251b]/10 via-purple-600/10 to-[#a1251b]/10 rounded-xl p-4 border border-[#e24e1b]/20 shadow-sm relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#a1251b]/5 to-purple-600/5 animate-pulse" />
                      <div className="relative z-10">
                        <h3 className="text-lg font-semibold text-[#e24e1b] mb-2 flex items-center gap-2">
                          <div className="p-1.5 bg-[#e24e1b]/10 rounded-lg">
                            <Zap className="h-4 w-4" />
                          </div>
                          Marsstein针对{industries[activeIndustry].name}
                        </h3>
                        <p className="text-[#474747] dark:text-gray-300 leading-relaxed text-sm">
                          {industries[activeIndustry].marsteinSolution}
                        </p>
                      </div>
                    </motion.div>

                    {/* Compact CTA */}
                    <motion.div 
                      className="text-center pt-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c] text-white px-8 py-3 text-base font-semibold shadow-lg shadow-[#e24e1b]/25 border-0">
                          请求行业专属演示
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
  };

  // Benefits Section
  const BenefitsSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#ea580c]/10 text-[#ea580c]">
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            您的优势
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            为什么选择Marsstein进行GDPR合规？
          </h2>
          <p className="text-lg text-[#474747] max-w-2xl mx-auto">
            降低风险、节省时间并赢得客户信任
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: '标准-konforme Entwicklung',
              description: 'Von Compliance-Experten entwickelt nach DSGVO-标准. Kontinuierliche rechtliche Validierung geplant.',
              benefits: ['计划更新', '法律审查流程', '标准-合规ität']
            },
            {
              icon: Clock,
              title: '通过自动化节省时间',
              description: '愿景：自动化重复性任务以专注于核心业务。',
              benefits: ['计划：AI文档', '路线图：工作流程', '愿景：一键报告']
            },
            {
              icon: Euro,
              title: '风险最小化',
              description: 'Ziel: Schutz vor DSGVO-Strafen durch 标准-konforme Prozesse.',
              benefits: ['路线图：预警系统', '计划：审计追踪', '愿景：符合监管机构要求']
            },
            {
              icon: Bot,
              title: 'AI助手愿景',
              description: '路线图：GDPR专家，提供即时准确的答案。',
              benefits: ['计划：多语言', '愿景：法律咨询', '测试版: Basis-Antworten']
            },
            {
              icon: Database,
              title: '安全数据管理',
              description: '概念：集中、安全的文档和流程管理。',
              benefits: ['目标：端到端加密', '计划：云备份', '愿景：版本控制']
            },
            {
              icon: BarChart3,
              title: '透明报告',
              description: '愿景：一键向审计师证明合规性。',
              benefits: ['路线图：导出功能', '计划：仪表板', '愿景：审计报告']
            }
          ].map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#e24e1b]/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#a1251b] to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Features Showcase Section
  const FeaturesShowcase = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 to-gray-950">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
            <Zap className="h-3.5 w-3.5 mr-2" />
            功能详情
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            GDPR合规所需的一切
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {[
              {
                icon: FileCheck,
                title: 'Automatisches 处理活动记录',
                description: '借助AI支持创建和维护您的处理活动记录。',
                status: '上线'
              },
              {
                icon: Shield,
                title: 'TOM生成器',
                description: '自动记录技术和组织措施并保持最新。',
                status: '上线'
              },
              {
                icon: Users,
                title: '数据主体请求管理',
                description: '在几分钟内以符合GDPR的方式处理访问、删除和更正请求。',
                status: '上线'
              },
              {
                icon: FileText,
                title: '隐私政策-Generator',
                description: '法律安全e 隐私政策en für Website, App und Offline-Prozesse.',
                status: '测试版'
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-[#e24e1b]/30 transition-colors">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-[#e24e1b]/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-[#e24e1b]" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <Badge variant={feature.status === '上线' ? 'default' : 'secondary'} className="text-xs">
                      {feature.status}
                    </Badge>
                  </div>
                  <p className="text-[#474747]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Dashboard Component */}
          <div className="lg:sticky lg:top-24">
            <CompactDsgvoDashboard />
          </div>
        </div>
      </div>
    </section>
  );

  // How It Works Section
  const HowItWorksSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#39B37B]/10 text-[#39B37B]">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            工作原理
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            GDPR标准合规路线图
          </h2>
          <p className="text-lg text-[#474747] max-w-2xl mx-auto">
            我们计划的流程：逐步实现标准合规
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: '测试版-Analyse',
              description: '计划：AI驱动的数据保护状况分析',
              duration: '第1阶段',
              icon: BarChart3
            },
            {
              step: '2',
              title: '标准-Dokumentation',
              description: '愿景：自动创建符合GDPR的文档',
              duration: '第2阶段',
              icon: FileText
            },
            {
              step: '3',
              title: '工作流程集成',
              description: '路线图：将流程集成到现有系统中',
              duration: '第3阶段',
              icon: Zap
            },
            {
              step: '4',
              title: '合规验证',
              description: 'Ziel: 标准-konforme Prüfung und Dokumentation',
              duration: '第4阶段',
              icon: Award
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#a1251b] to-transparent" />
              )}
              <Card className="relative h-full border-2 hover:border-[#e24e1b]/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#e24e1b] text-white flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <step.icon className="h-8 w-8 text-[#e24e1b] opacity-20" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-[#e24e1b] hover:bg-[#f97316]">
            立即开始
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );

  // GDPR工具与资源 Section
  const DsgvoToolsSection = () => {
    const tools = [
      {
        title: '2025年GDPR合规清单',
        description: '2025年所有重要GDPR要求的全面清单',
        icon: CheckSquare,
        features: ['174个检查点', '法律安全', '立即可用'],
        color: 'from-[#a1251b] to-red-600',
        bgColor: 'bg-[#DC2626]/5',
        borderColor: 'border-red-200 dark:border-red-800',
        href: '/resources#dsgvo-checkliste'
      },
      {
        title: '数据保护就绪评估',
        description: '评估您当前的数据保护状态并识别改进潜力',
        icon: BarChart3,
        features: ['自动评估', '行动建议', 'PDF报告'],
        color: 'from-blue-600 to-indigo-600',
        bgColor: 'bg-[#e24e1b]/5',
        borderColor: 'border-blue-200 dark:border-blue-800',
        href: '/resources#readiness-assessment'
      },
      {
        title: 'Cookie合规审计',
        description: '检查您的网站是否符合Cookie合规并获得具体改进建议',
        icon: Globe,
        features: ['网站分析', '合规检查', '实施计划'],
        color: 'from-emerald-600 to-teal-600',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
        href: '/resources#cookie-audit'
      }
    ];

    return (
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />
          
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#a1251b]/10 to-blue-600/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-full blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>
        </div>

        <div className="container relative z-10 px-4">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="bg-[#e24e1b]/10 backdrop-blur-sm text-[#e24e1b] border-[#e24e1b]/20 px-6 py-2.5 text-sm font-medium">
                <FileText className="h-4 w-4 mr-2" />
                GDPR工具与资源
              </Badge>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-[#a1251b] to-blue-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              免费GDPR工具，即时实现合规
            </motion.h2>
            
            <motion.p
              className="text-xl text-[#474747] dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              使用我们的专业工具和评估来检查和改进您的GDPR合规性。
            </motion.p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className={`
                  relative overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 
                  border-2 ${tool.borderColor} hover:shadow-2xl 
                  transition-all duration-500 group-hover:scale-[1.02] h-full
                `}>
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10 pb-4">
                    <motion.div
                      className={`h-16 w-16 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg mb-4`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <tool.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-xl font-bold text-[#232323] dark:text-gray-100 mb-3 group-hover:text-[#e24e1b] transition-colors">
                      {tool.title}
                    </CardTitle>
                    
                    <p className="text-sm text-[#474747] dark:text-gray-400 leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-4">
                    {/* Features */}
                    <div className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * featureIndex }}
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-[#474747] dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      className="pt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to={tool.href}
                        className={`
                          inline-flex items-center justify-center w-full px-4 py-3 
                          bg-gradient-to-r ${tool.color} text-white font-medium rounded-lg 
                          hover:shadow-lg transition-all duration-300 group/btn
                        `}
                      >
                        <span>使用工具</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </CardContent>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/zh/resources"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <span>显示所有工具和资源</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };

  // Pricing/CTA Section


  // FAQ Section
  const FAQSection = () => (
    <section className="py-20 md:py-32 bg-[#F5F6F8] dark:bg-gray-900/50">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
            <HelpCircle className="h-3.5 w-3.5 mr-2" />
            常见问题
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            关于GDPR合规的问题？
          </h2>
          <p className="text-lg text-[#474747] max-w-2xl mx-auto">
            在这里找到最重要问题的答案
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "使用Marsstein多快可以实现GDPR合规？",
                answer: "GDPR合规的时间框架取决于您企业的规模和复杂性。我们计划的AI驱动分析将帮助快速识别最重要的行动领域。"
              },
              {
                question: "GDPR法律变更时会发生什么？",
                answer: "我们的数据保护专家团队持续监控所有法律变更。一旦有任何变更，您的文档和流程将自动更新。您将收到有关变更和所需措施的通知。这样您就可以始终保持合规而无需额外努力。"
              },
              {
                question: "我的企业数据在Marsstein安全吗？",
                answer: "安全性对我们来说至关重要。我们计划实施端到端加密并使用德国的认证数据中心。GDPR合规是我们的目标。"
              },
              {
                question: "我可以将Marsstein用于国际合规吗？",
                answer: "可以！虽然我们的重点在GDPR上，但Marsstein也支持国际数据保护法律，如CCPA（加利福尼亚）、LGPD（巴西）等。我们的企业解决方案可以适应不同司法管辖区的特定要求。"
              },
              {
                question: "如果我已经有数据保护官怎么办？",
                answer: "Marsstein旨在支持数据保护官。计划的功能包括自动化耗时任务和报告创建，为战略任务腾出更多时间。"
              },
              {
                question: "有最低合同期限吗？",
                answer: "没有，我们所有的计划都是按月取消的。我们相信我们解决方案的质量，希望您因为信任而留下，而不是因为合同约束。您可以随时升级、降级或取消。"
              },
              {
                question: "免费试用如何运作？",
                answer: "您将获得30天的专业版计划所有功能的完全访问权限 - 无需信用卡。入职专家将帮助您设置，您可以立即开始合规分析。30天后，您决定是否继续。"
              },
              {
                question: "您为我的员工提供培训吗？",
                answer: "是的！每个计划都包括访问我们的GDPR学院，提供视频课程、网络研讨会和认证。对于企业客户，我们还提供量身定制的现场培训。所有内容都很实用并定期更新。"
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-gray-900 px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:text-[#e24e1b]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#474747]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#474747] mb-4">还有问题？我们随时为您服务！</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="group">
              <Phone className="mr-2 h-4 w-4 group-hover:text-[#e24e1b]" />
              +49 30 12345678
            </Button>
            <Button variant="outline" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:text-[#e24e1b]" />
              compliance@marsstein.de
            </Button>
            <Button variant="outline" className="group">
              <Calendar className="mr-2 h-4 w-4 group-hover:text-[#e24e1b]" />
              预约演示
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  // Final CTA Section
  const FinalCTASection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <Card className="relative overflow-hidden border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#a1251b]/5 to-purple-600/5">
          <div className="absolute inset-0 bg-grid-black/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <CardContent className="relative z-10 p-12 md:p-20 text-center space-y-8">
            <Badge className="bg-[#e24e1b] text-white px-6 py-2 text-base">
              <Sparkles className="h-4 w-4 mr-2" />
              测试版阶段访问
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
              保护您的企业
              <span className="block text-[#e24e1b]">就在今天</span>
            </h2>
            
            <p className="text-xl text-[#474747] max-w-2xl mx-auto">
              没有完整GDPR合规的每一天都是风险。
              现在开始，睡得更安心。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#e24e1b] hover:bg-[#f97316] text-white px-10 py-6 text-lg">
                立即免费开始
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg group">
                <Phone className="mr-2 h-5 w-5 group-hover:text-[#e24e1b]" />
                专家咨询
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
              {[
                { icon: CheckCircle2, text: '30天免费试用' },
                { icon: XCircle, text: '无需信用卡' },
                { icon: Users, text: '个人入职支持' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <item.icon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  // Add missing import
  const HelpCircle = AlertCircle;

  return (
    <>
      <SEOHead
        title="GDPR合规软件 – 自动化且合法"
        description="轻松实现GDPR合规：AI驱动的数据保护解决方案。✓ 自动化流程 ✓ 节省高达80%的时间。立即试用！"
        canonical="/zh/compliance/dsgvo"
        keywords="GDPR合规，数据保护软件，GDPR合规，通用数据保护条例"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <TrustSection />
        <IndustrySection />
        <BenefitsSection />
        <FeaturesShowcase />
        <HowItWorksSection />
        <DsgvoToolsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default GdprComplianceZh;