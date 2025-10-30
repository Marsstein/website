import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/zh/Header';
import { Footer } from '@/components/zh/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check, X, Star, Shield, Zap, ChevronDown, ChevronUp,
  Sparkles, FileText, UserCheck, Award, Bot, BarChart3,
  Lock, Headphones, Globe, Heart, TrendingUp, Rocket, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { PackageFinder } from '@/components/PackageFinder';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['pflichtdokumente']);
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<'starter' | 'professional' | 'enterprise'>('professional');
  const [selectedSpecial, setSelectedSpecial] = useState<'kleinunternehmer' | 'neugruender' | 'gemeinnuetzig'>('kleinunternehmer');
  const [showPackageFinder, setShowPackageFinder] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MARSSTEIN GDPR合规软件",
    "description": "基于AI的GDPR合规软件，配备外部数据保护官",
    "brand": {
      "@type": "Brand",
      "name": "MARSSTEIN"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": 3,
      "lowPrice": 69,
      "highPrice": 449,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31"
    }
  };

  const calculatePrice = (basePrice: string, cycle: 'monthly' | 'yearly') => {
    const price = parseInt(basePrice);
    if (cycle === 'yearly') {
      return Math.round(price * 0.8);
    }
    return price;
  };

  const calculateYearlySavings = (basePrice: string) => {
    const monthly = parseInt(basePrice);
    const yearlyMonthly = Math.round(monthly * 0.8);
    return (monthly - yearlyMonthly) * 12;
  };

  const packages = [
    {
      name: '入门版',
      basePrice: '69',
      color: 'from-[#474747] to-[#232323]',
      popular: false,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: {
        highlights: [
          '所有GDPR必需文档',
          '每月100次AI查询',
          'GDPR认证徽章'
        ]
      }
    },
    {
      name: '专业版',
      basePrice: '199',
      color: 'from-[#e24e1b] to-[#ea580c]',
      popular: true,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: {
        highlights: [
          '外部数据保护官',
          '€100.000 数据保护官责任险',
          '每月1000次AI查询',
          'API集成'
        ]
      }
    },
    {
      name: '企业版',
      basePrice: '449',
      color: 'from-[#003366] to-[#1F1F24]',
      popular: false,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: {
        highlights: [
          '24/7全天候数据保护官热线',
          '€250.000 数据保护官责任险',
          '无限AI查询',
          '专属成功经理'
        ]
      }
    }
  ];

  const featureCategories = [
    {
      id: 'pflichtdokumente',
      title: '必需文档',
      icon: FileText,
      features: [
        { label: '处理活动记录 (第30条)', starter: true, professional: true, enterprise: true },
        { label: '技术与组织措施 (TOMs)', starter: true, professional: true, enterprise: true },
        { label: '删除方案', starter: true, professional: true, enterprise: true },
        { label: '数据保护手册', starter: true, professional: true, enterprise: true },
        { label: '网站隐私政策', starter: '2', professional: '10', enterprise: '无限制' },
        { label: '应用隐私政策', starter: '1', professional: '5', enterprise: '无限制' },
        { label: 'Cookie横幅与政策', starter: true, professional: true, enterprise: true },
        { label: '数据处理协议 (DPA)', starter: true, professional: true, enterprise: true },
        { label: '数据泄露管理', starter: true, professional: true, enterprise: true },
        { label: '员工承诺书', starter: true, professional: true, enterprise: true },
        { label: '数据主体权利流程', starter: true, professional: true, enterprise: true },
        { label: '符合GDPR的电子邮件签名', starter: true, professional: true, enterprise: true }
      ]
    },
    {
      id: 'dsb',
      title: '数据保护官',
      icon: UserCheck,
      features: [
        { label: '外部数据保护官', starter: false, professional: true, enterprise: true },
        { label: '数据保护官责任保险', starter: false, professional: '€100.000', enterprise: '€250.000' },
        { label: '数据保护官证书', starter: false, professional: true, enterprise: true },
        { label: '数据保护官热线', starter: false, professional: '工作时间', enterprise: '24/7全天候' }
      ]
    },
    {
      id: 'audit',
      title: 'MARSSTEIN 审计与认证',
      icon: Award,
      features: [
        { label: '审计类型', starter: '自我评估', professional: '系统审计', enterprise: '全面审计' },
        { label: '审计频率', starter: '每年', professional: '每半年', enterprise: '每季度' },
        { label: 'GDPR认证徽章', starter: '✅ 已验证', professional: '✅ 已认证', enterprise: '✅ 卓越认证' },
        { label: '适用招标范围', starter: '小型项目', professional: '标准项目', enterprise: '所有项目（含关键项目）' }
      ]
    },
    {
      id: 'ai',
      title: 'MARS-AI 合规助手',
      icon: Bot,
      features: [
        { label: '每月AI查询次数', starter: '100', professional: '1.000', enterprise: '无限制' },
        { label: '通用GDPR信息', starter: true, professional: true, enterprise: true },
        { label: '了解您的企业数据', starter: false, professional: true, enterprise: true },
        { label: '个性化合规分析', starter: false, professional: true, enterprise: true },
        { label: '文档审查助手', starter: '基础版', professional: '增强版', enterprise: '高级版' }
      ]
    },
    {
      id: 'monitoring',
      title: '合规监控',
      icon: BarChart3,
      features: [
        { label: '实时合规评分', starter: true, professional: true, enterprise: true },
        { label: '任务追踪器', starter: true, professional: true, enterprise: true },
        { label: '期限管理', starter: true, professional: true, enterprise: true },
        { label: '法规变更提醒', starter: true, professional: true, enterprise: true },
        { label: '自动政策更新', starter: false, professional: true, enterprise: true },
        { label: '合规报告', starter: '每月', professional: '每周', enterprise: '每日' },
        { label: '导出格式', starter: 'PDF', professional: 'PDF, Excel', enterprise: 'PDF, Excel, API' }
      ]
    },
    {
      id: 'security',
      title: '安全与监控',
      icon: Lock,
      features: [
        { label: '渗透测试', starter: false, professional: '每年1次', enterprise: '每年2次' },
        { label: 'SSL/TLS监控', starter: '基础版', professional: '增强版', enterprise: '高级版' },
        { label: '钓鱼模拟', starter: '每年1次', professional: '每半年', enterprise: '每季度' },
        { label: '密码泄露检查', starter: 'Basis (5 Accounts)', professional: 'Erweitert (50 Accounts)', enterprise: '无限制 + 监控' },
        { label: '邮件泄露监控', starter: '3 E-Mails', professional: '25 E-Mails', enterprise: '无限制' },
        { label: '暗网监控', starter: false, professional: '企业数据', enterprise: '+ 高管保护' },
        { label: '漏洞扫描', starter: false, professional: '每月', enterprise: '每周' },
        { label: 'Cookie扫描器', starter: '每月', professional: '每周', enterprise: '每日' }
      ]
    },
    {
      id: 'support',
      title: '支持服务',
      icon: Headphones,
      features: [
        { label: '电子邮件支持', starter: true, professional: true, enterprise: true },
        { label: '电话支持', starter: false, professional: true, enterprise: true },
        { label: '响应时间', starter: '48h', professional: '24h', enterprise: '4h' },
        { label: '优先支持', starter: false, professional: false, enterprise: true },
        { label: '专属成功经理', starter: false, professional: false, enterprise: true },
        { label: '入职培训', starter: '自助服务', professional: '2小时协助', enterprise: '8小时全程服务' }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };


  const shouldShowFeature = (feature: any) => {
    if (!showOnlyDifferences) return true;
    return feature.starter !== feature.professional ||
           feature.professional !== feature.enterprise;
  };

  const getValue = (value: any) => {
    if (value === true) return <Check className="h-5 w-5 text-[#39B37B] mx-auto" />;
    if (value === false) return <X className="h-4 w-4 text-gray-300 mx-auto" />;
    return <span className="text-sm font-medium text-[#232323]">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <Helmet>
        <title>价格 - MARSSTEIN GDPR合规套餐</title>
        <meta name="description" content="透明的GDPR合规软件定价。月付€69至€449。配备外部数据保护官和AI支持。" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href="https://marsstein.ai/zh/jiage" />
        <html lang="zh-CN" />
        <meta property="og:locale" content="zh_CN" />
        <meta property="og:title" content="价格 - MARSSTEIN GDPR合规套餐" />
        <meta property="og:description" content="透明的GDPR合规软件定价。月付€69至€449。配备外部数据保护官和AI支持。" />
        <link rel="alternate" hreflang="zh-CN" href="https://marsstein.ai/zh/jiage" />
        <link rel="alternate" hreflang="de" href="https://marsstein.ai/preise" />
        <link rel="alternate" hreflang="en" href="https://marsstein.ai/en/pricing" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 backdrop-blur-sm rounded-full mb-8 border border-[#e24e1b]/20"
            >
              <Sparkles className="h-5 w-5 text-[#e24e1b] animate-pulse" />
              <span className="text-sm font-semibold text-[#e24e1b]">透明定价</span>
              <Shield className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent bg-300% animate-gradient"
            >
              <span>MARSSTEIN</span>
              <br />
              <span>GDPR合规</span>
              <br />
              <span>套餐</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#474747] max-w-4xl mx-auto leading-relaxed"
            >选择适合您的<span className="font-semibold text-[#e24e1b]">GDPR合规</span>套餐。
              可按月取消，<span className="font-semibold text-[#232323]">无隐藏费用</span>。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8"
            >
              <Button
                onClick={() => setShowPackageFinder(!showPackageFinder)}
                size="lg"
                className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-bold group"
              >
                <Target className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                {showPackageFinder ? '显示所有套餐' : '60秒找到您的完美套餐'}
                <Sparkles className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {showPackageFinder ? (
              <motion.div
                key="finder"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <PackageFinder />
              </motion.div>
            ) : (
              <motion.div
                key="packages"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-16 gap-4 relative"
                >
            <div className="bg-white/80 backdrop-blur-md rounded-full p-1 border-2 border-[#e24e1b]/20 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={cn(
                    "px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 font-medium text-sm sm:text-base",
                    billingCycle === 'monthly'
                      ? "bg-[#e24e1b] text-white shadow-lg"
                      : "text-[#474747] hover:text-[#232323]"
                  )}
                >每月</button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={cn(
                    "px-6 py-3 rounded-full transition-all duration-300 font-medium relative",
                    billingCycle === 'yearly'
                      ? "bg-[#e24e1b] text-white shadow-lg"
                      : "text-[#474747] hover:text-[#232323]"
                  )}
                >
                  按年
                  {billingCycle === 'yearly' && (
                    <Badge className="absolute -top-3 -right-3 bg-[#39B37B] text-white border-0 animate-bounce">
                      节省20%
                    </Badge>
                  )}
                </button>
              </div>
            </div>
            {billingCycle === 'yearly' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[#39B37B] font-semibold text-sm sm:text-base"
              >
                <Sparkles className="inline-block h-4 w-4 mr-1" />
                2 Monate gratis!
              </motion.div>
            )}
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white px-4 py-1 border-0 shadow-lg">
                      <Star className="h-4 w-4 mr-1 animate-pulse" />热门</Badge>
                  </div>
                )}

                <Card className={cn(
                  "relative h-full border-2 transition-all duration-500 overflow-hidden",
                  pkg.popular
                    ? "border-[#e24e1b] shadow-xl scale-105"
                    : "border-gray-200 hover:border-[#e24e1b]/50"
                )}>

                  <CardContent className="relative p-4 sm:p-6 lg:p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#232323] mb-2">{pkg.name}</h3>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={billingCycle}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-baseline justify-center mb-4"
                        >
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#232323]">
                            €{calculatePrice(pkg.basePrice, billingCycle)}
                          </span>
                          <span className="text-[#232323] ml-2">/Monat</span>
                        </motion.div>
                      </AnimatePresence>
                      <p className="text-sm text-[#232323]">
                        {billingCycle === 'yearly'
                          ? `Sie sparen €${calculateYearlySavings(pkg.basePrice)}/Jahr`
                          : '可按月取消'
                        }
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-[#e24e1b] uppercase tracking-wider mb-3 flex items-center">
                          <Sparkles className="h-3 w-3 mr-1" />亮点</h4>
                        <ul className="space-y-2">
                          {pkg.features.highlights.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              className="flex items-center text-sm text-[#232323]"
                            >
                              <Check className="h-4 w-4 text-[#39B37B] mr-2 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className={cn(
                          "w-full font-medium group/btn relative overflow-hidden",
                          pkg.popular
                            ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl"
                            : "bg-white border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white"
                        )}
                        asChild
                      >
                        <Link to={pkg.name === '专业版' ? '/externer-datenschutzbeauftragter' : '/contact'}>
                          <span className="relative z-10">{pkg.name === '专业版' ? '立即委托数据保护官' : '选择套餐'}</span>
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative -mx-4 sm:mx-0"
                >
            <div className="sm:hidden sticky top-0 z-30 bg-white border-b-2 border-gray-200 shadow-md">
              <div className="flex gap-1 p-2 bg-gray-50">
                <div className="flex-1 text-center py-2">
                  <div className="text-[10px] font-bold text-[#474747]">入门版</div>
                  <div className="text-xs text-[#232323] font-semibold">€69</div>
                </div>
                <div className="flex-1 text-center py-2 bg-[#e24e1b]/10 rounded-lg relative">
                  <Star className="h-3 w-3 absolute top-1 right-1 text-[#e24e1b]" />
                  <div className="text-[10px] font-bold text-[#e24e1b]">PRO</div>
                  <div className="text-xs text-[#232323] font-semibold">€199</div>
                </div>
                <div className="flex-1 text-center py-2">
                  <div className="text-[10px] font-bold text-[#474747]">企业版</div>
                  <div className="text-xs text-[#232323] font-semibold">€449</div>
                </div>
              </div>
            </div>

            <div className="relative bg-white sm:rounded-2xl border-t sm:border border-gray-200 shadow-lg">
              <div className="p-4 sm:p-6 border-b border-gray-200 hidden sm:block">
                <h2 className="text-lg sm:text-2xl font-bold text-[#232323]">详细功能对比</h2>
              </div>

              {/* Desktop Table View */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-[#e24e1b]">功能</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-[#232323]">入门版</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-[#232323] bg-[#e24e1b]/5">专业版</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-[#232323]">企业版</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureCategories.map((category) => {
                      const isExpanded = expandedCategories.includes(category.id);
                      const filteredFeatures = category.features.filter(shouldShowFeature);

                      return (
                        <React.Fragment key={category.id}>
                          <tr
                            className="border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => toggleCategory(category.id)}
                          >
                            <td className="px-6 py-4 font-semibold text-[#232323] flex items-center gap-2">
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="h-5 w-5 text-[#474747]" />
                              </motion.div>
                              <category.icon className="h-5 w-5 text-[#e24e1b]" />
                              <span>{category.title}</span>
                              {filteredFeatures.length > 0 && (
                                <Badge className="ml-auto bg-gray-100 text-[#474747] border-0">
                                  {filteredFeatures.length}
                                </Badge>
                              )}
                            </td>
                            <td colSpan={3} />
                          </tr>
                          <AnimatePresence>
                            {isExpanded && filteredFeatures.map((feature, idx) => (
                              <motion.tr
                                key={feature.label}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                              >
                                <td className="px-12 py-3 text-sm font-medium text-[#232323]">{feature.label}</td>
                                <td className="px-6 py-3 text-center">{getValue(feature.starter)}</td>
                                <td className="px-6 py-3 text-center bg-gray-50/50">{getValue(feature.professional)}</td>
                                <td className="px-6 py-3 text-center">{getValue(feature.enterprise)}</td>
                              </motion.tr>
                            ))}
                          </AnimatePresence>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="sm:hidden">
                <div className="space-y-2 p-2">
                  {featureCategories.map((category) => {
                    const isExpanded = expandedCategories.includes(category.id);
                    const filteredFeatures = category.features.filter(shouldShowFeature);

                    return (
                      <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="w-full px-3 py-2 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-1.5">
                            <category.icon className="h-4 w-4 text-[#e24e1b] flex-shrink-0" />
                            <span className="font-semibold text-[10px] text-[#232323] text-left leading-tight">{category.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Badge className="bg-gray-100 text-[#474747] border-0 text-[9px] px-1.5 py-0.5">
                              {filteredFeatures.length}
                            </Badge>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-4 w-4 text-[#474747]" />
                            </motion.div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-white">
                                {filteredFeatures.map((feature, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: idx * 0.02 }}
                                    className="border-b border-gray-100 last:border-0 px-2 py-2"
                                  >
                                    <div className="text-[10px] font-medium text-[#232323] mb-1.5 leading-tight">{feature.label}</div>
                                    <div className="grid grid-cols-3 gap-0.5">
                                      <div className="text-center p-1.5 bg-gray-50 rounded flex items-center justify-center min-h-[28px]">
                                        {feature.starter === true && <Check className="h-4 w-4 text-[#39B37B]" />}
                                        {feature.starter === false && <X className="h-3 w-3 text-gray-300" />}
                                        {typeof feature.starter === 'string' && (
                                          <span className="text-[9px] font-medium text-[#232323] leading-[1.2] break-words px-0.5">{feature.starter}</span>
                                        )}
                                      </div>
                                      <div className="text-center p-1.5 bg-[#e24e1b]/5 rounded border border-[#e24e1b]/20 flex items-center justify-center min-h-[28px]">
                                        {feature.professional === true && <Check className="h-4 w-4 text-[#39B37B]" />}
                                        {feature.professional === false && <X className="h-3 w-3 text-gray-300" />}
                                        {typeof feature.professional === 'string' && (
                                          <span className="text-[9px] font-medium text-[#232323] leading-[1.2] break-words px-0.5">{feature.professional}</span>
                                        )}
                                      </div>
                                      <div className="text-center p-1.5 bg-gray-50 rounded flex items-center justify-center min-h-[28px]">
                                        {feature.enterprise === true && <Check className="h-4 w-4 text-[#39B37B]" />}
                                        {feature.enterprise === false && <X className="h-3 w-3 text-gray-300" />}
                                        {typeof feature.enterprise === 'string' && (
                                          <span className="text-[9px] font-medium text-[#232323] leading-[1.2] break-words px-0.5">{feature.enterprise}</span>
                                        )}
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#F5F6F8] via-white to-[#F5F6F8]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#e24e1b]/5 to-transparent pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 backdrop-blur-xl rounded-full mb-4 sm:mb-8 border border-[#e24e1b]/20 shadow-lg"
            >
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#e24e1b] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-[#e24e1b]">新推出：MARSSTEIN 特别套餐 2025</span>
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center mb-8 gap-3"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-full p-1 border-2 border-[#e24e1b]/20 shadow-xl">
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() => setSelectedSpecial('kleinunternehmer')}
                    className={cn(
                      "px-3 sm:px-5 py-2 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm flex items-center gap-1.5",
                      selectedSpecial === 'kleinunternehmer'
                        ? "bg-[#e24e1b] text-white shadow-lg"
                        : "text-[#474747] hover:text-[#232323]"
                    )}
                  >
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Kleinunternehmer</span>
                    <span className="sm:hidden">Klein</span>
                  </button>
                  <button
                    onClick={() => setSelectedSpecial('neugruender')}
                    className={cn(
                      "px-3 sm:px-5 py-2 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm flex items-center gap-1.5",
                      selectedSpecial === 'neugruender'
                        ? "bg-[#e24e1b] text-white shadow-lg"
                        : "text-[#474747] hover:text-[#232323]"
                    )}
                  >
                    <Rocket className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Neugründer</span>
                    <span className="sm:hidden">Neu</span>
                  </button>
                  <button
                    onClick={() => setSelectedSpecial('gemeinnuetzig')}
                    className={cn(
                      "px-3 sm:px-5 py-2 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm flex items-center gap-1.5",
                      selectedSpecial === 'gemeinnuetzig'
                        ? "bg-[#e24e1b] text-white shadow-lg"
                        : "text-[#474747] hover:text-[#232323]"
                    )}
                  >
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Gemeinnützig</span>
                    <span className="sm:hidden">NGO</span>
                  </button>
                </div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSpecial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#e24e1b] via-[#232323] to-[#e24e1b] bg-clip-text text-transparent bg-300% animate-gradient">MARSSTEIN<br className="sm:hidden" />
                  <span className="text-xl sm:text-4xl md:text-6xl">
                    {selectedSpecial === 'kleinunternehmer' && 'KLEINUNTERNEHMER-SPECIAL'}
                    {selectedSpecial === 'neugruender' && 'NEUGRÜNDER-SPECIAL'}
                    {selectedSpecial === 'gemeinnuetzig' && '公益组织特惠'}
                  </span>
                  <br />2025</h2>

                <p className="text-base sm:text-xl md:text-2xl text-[#474747] italic px-4 sm:px-0">
                  {selectedSpecial === 'kleinunternehmer' && '"Datenschutz für alle - weil jedes Unternehmen Schutz verdient"'}
                  {selectedSpecial === 'neugruender' && '"Wir waren auch mal jung - Profi-Schutz zum Gründerpreis"'}
                  {selectedSpecial === 'gemeinnuetzig' && '"共同行善 - 成本价全面保护"'}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSpecial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#e24e1b] via-[#ea580c] to-[#e24e1b] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse" />

              <Card className="relative border-2 border-[#e24e1b]/50 shadow-2xl bg-white/95 backdrop-blur-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e24e1b]/5 via-transparent to-[#003366]/5 pointer-events-none" />

                <CardContent className="relative p-4 sm:p-8 md:p-12">
                  {selectedSpecial === 'kleinunternehmer' && (
                    <>
                      <div className="text-center mb-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-full text-white text-sm font-bold mb-4 shadow-lg"
                        >
                          <Zap className="h-4 w-4 animate-pulse" />
                          KLEIN-STARTER
                          <Zap className="h-4 w-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </motion.div>

                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#232323] mb-3">
                          Der absolute No-Brainer für Kleinunternehmen
                        </h3>

                        <div className="flex items-baseline justify-center mb-4">
                          <span className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent">
                            €29
                          </span>
                          <span className="text-xl text-[#232323] ml-2">/Monat</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                          <span className="text-[#232323]">✓ Keine Einrichtungsgebühr</span>
                          <span className="text-[#232323]">✓ 可按月取消</span>
                          <span className="text-[#232323]">✓ 无隐藏费用</span>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedSpecial === 'neugruender' && (
                    <>
                      <div className="text-center mb-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-full text-white text-sm font-bold mb-4 shadow-lg"
                        >
                          <Rocket className="h-4 w-4 animate-pulse" />
                          NEUGRÜNDER-PROFESSIONAL
                          <Rocket className="h-4 w-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </motion.div>

                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#232323] mb-3">
                          €199专业版套餐半价优惠
                        </h3>

                        <div className="flex items-baseline justify-center mb-4">
                          <span className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent">
                            €99
                          </span>
                          <span className="text-xl text-[#232323] ml-2">/Monat</span>
                          <span className="text-sm text-[#474747] ml-2">für 2 Jahre</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm mb-4">
                          <span className="text-[#232323]">✓ 50% Gründerrabatt</span>
                          <span className="text-[#232323]">✓ 可按月取消</span>
                          <span className="text-[#232323]">✓ Externer DSB inklusive</span>
                        </div>

                        <div className="bg-[#e24e1b]/10 rounded-lg p-4 border border-[#e24e1b]/20">
                          <p className="text-sm text-[#232323] font-semibold">
                            💪 UNSERE PHILOSOPHIE:
                          </p>
                          <p className="text-xs sm:text-sm text-[#474747] mt-2">
                            "Die ersten zwei Jahre entscheiden über Erfolg oder Scheitern. Datenschutz-Abmahnungen gehören nicht zu den Herausforderungen, mit denen sich junge Unternehmen beschäftigen sollten. Wir übernehmen das - Sie konzentrieren sich aufs Wachstum."
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedSpecial === 'gemeinnuetzig' && (
                    <>
                      <div className="text-center mb-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-full text-white text-sm font-bold mb-4 shadow-lg"
                        >
                          <Heart className="h-4 w-4 animate-pulse" />公益组织入门版<Heart className="h-4 w-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </motion.div>

                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#232323] mb-3">完整的入门套餐，专为协会与非政府组织设计</h3>

                        <div className="flex items-baseline justify-center mb-4">
                          <span className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent">
                            €15
                          </span>
                          <span className="text-xl text-[#232323] ml-2">/Monat</span>
                          <span className="text-sm text-[#474747] ml-2 line-through">€69</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm mb-4">
                          <span className="text-[#232323]">✓ 永久享受78%协会折扣</span>
                          <span className="text-[#232323]">✓ 可按月取消</span>
                          <span className="text-[#232323]">✓ 无隐藏费用</span>
                        </div>

                        <div className="bg-[#e24e1b]/10 rounded-lg p-4 border border-[#e24e1b]/20">
                          <p className="text-sm text-[#232323] font-semibold">🤝 我们的承诺：</p>
                          <p className="text-xs sm:text-sm text-[#474747] mt-2">
                            "为他人奉献的组织值得我们全力支持。因此，所有公益组织均可享受成本价的完整入门版保护。"
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedSpecial === 'kleinunternehmer' && (
                    <div className="border-t border-gray-200 pt-10">
                      <h4 className="text-base sm:text-xl font-bold text-[#232323] mb-4 sm:mb-8 flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" />
                        WAS SIE BEKOMMEN:
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            DSGVO-GRUNDSCHUTZ KOMPLETT
                          </h5>
                          <ul className="space-y-3">
                            {[
                              'Alle DSGVO-Pflichtdokumente fertig vorbereitet',
                              'Datenschutzerklärung für Ihre Website (inkl. Updates)',
                              'Cookie-Banner rechtssicher & abmahnsicher',
                              'Verarbeitungsverzeichnis (Art. 30 DSGVO)',
                              'TOMs (Technische & Organisatorische Maßnahmen)',
                              'AVV-Verträge für alle gängigen Dienstleister',
                              'Mitarbeiter-Verpflichtungen als Vorlage'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="bg-gradient-to-br from-white to-[#F5F6F8] p-6 rounded-xl border border-gray-100 mb-6">
                            <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                              <Zap className="h-5 w-5" />
                              MARSSTEIN KI-ASSISTENT
                            </h5>
                            <ul className="space-y-3">
                              {[
                                '50 KI-Anfragen/Monat für Ihre DSGVO-Fragen',
                                '24/7 verfügbar - immer eine Antwort parat',
                                'In einfacher Sprache - kein Juristendeutsch'
                              ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-[#232323]">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gradient-to-br from-white to-[#F5F6F8] p-6 rounded-xl border border-gray-100">
                            <h5 className="text-sm sm:text-lg font-bold text-[#003366] mb-3 sm:mb-4 flex items-center gap-2">
                              <Shield className="h-5 w-5" />
                              COMPLIANCE-DASHBOARD
                            </h5>
                            <ul className="space-y-3">
                              {[
                                'Live Compliance-Score - Sehen Sie Ihren Status',
                                'Einfache Checklisten - Schritt für Schritt',
                                'Automatische Erinnerungen bei wichtigen Fristen',
                                'Gesetzesänderungs-Alerts - immer aktuell'
                              ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-[#232323]">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-center"
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#ea580c] hover:to-[#e24e1b] text-white px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                        >
                          <Zap className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                          Jetzt KLEIN-STARTER sichern
                        </Button>

                        <p className="mt-4 text-sm text-[#474747]">
                          Keine Kreditkarte erforderlich • 14 Tage kostenlos testen • Jederzeit kündbar
                        </p>
                      </motion.div>
                    </div>
                  )}

                  {selectedSpecial === 'neugruender' && (
                    <div className="border-t border-gray-200 pt-10">
                      <h4 className="text-base sm:text-xl font-bold text-[#232323] mb-4 sm:mb-8 flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" />
                        WAS IHRE NEUGRÜNDUNG BEKOMMT:
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <UserCheck className="h-5 w-5" />
                            EXTERNER DATENSCHUTZBEAUFTRAGTER
                          </h5>
                          <ul className="space-y-3">
                            {[
                              'Zertifizierter DSB offiziell benannt',
                              '€100.000 Haftungsübernahme inklusive',
                              'DSB-Hotline während Geschäftszeiten',
                              'Spart €3.000+/Monat Personalkosten'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Sparkles className="h-5 w-5" />
                            ENTERPRISE-FEATURES
                          </h5>
                          <ul className="space-y-3">
                            {[
                              '10 Datenschutzerklärungen für Websites/Apps',
                              '1.000 KI-Anfragen/Monat mit Firmen-Kontext',
                              'API-Integration für Ihre Tools',
                              'Dark Web Monitoring für Firmendaten',
                              '每年1次渗透测试'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-white to-[#F5F6F8] p-6 rounded-xl border border-gray-100 mb-8"
                      >
                        <h5 className="text-sm sm:text-lg font-bold text-[#003366] mb-3 sm:mb-4 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5" />
                          WACHSTUMS-BEREIT
                        </h5>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {[
                            'Trust-Badge für mehr Conversions',
                            'Incident-Response-Plan vorbereitet',
                            'Automatische Dokumenten-Updates',
                            'Notfall-Anwalt-Vermittlung inklusive'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#232323]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#e24e1b]/10 rounded-lg p-4 border border-[#e24e1b]/20 mb-8"
                      >
                        <p className="text-sm text-[#232323] font-semibold mb-2">
                          QUALIFIKATION:
                        </p>
                        <ul className="space-y-2">
                          {[
                            '✓ Gründung vor weniger als 24 Monaten',
                            '✓ GmbH, UG, AG oder GbR',
                            '✓ Handelsregisterauszug genügt'
                          ].map((item, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-[#474747]">{item}</li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-center"
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#ea580c] hover:to-[#e24e1b] text-white px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                        >
                          <Rocket className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                          Jetzt mit Code NEUSTART99 durchstarten
                        </Button>

                        <p className="mt-4 text-sm text-[#474747]">
                          14 Tage kostenlos testen • Keine Kreditkarte nötig • In 3 Minuten startklar
                        </p>
                      </motion.div>
                    </div>
                  )}

                  {selectedSpecial === 'gemeinnuetzig' && (
                    <div className="border-t border-gray-200 pt-10">
                      <h4 className="text-base sm:text-xl font-bold text-[#232323] mb-4 sm:mb-8 flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" />您的组织将获得：<Star className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </h4>

                      <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5" />完整的GDPR保护</h5>
                          <ul className="space-y-2">
                            {[
                              '协会所需的所有GDPR文档',
                              '2份网站隐私政策',
                              '符合GDPR的会员管理',
                              '活动照片授权书',
                              '捐赠数据管理模板',
                              '合法的新闻通讯授权',
                              '志愿者协议'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Bot className="h-5 w-5" />MARS-AI 助手</h5>
                          <ul className="space-y-2">
                            {[
                              '每月100次AI查询',
                              '专门针对协会主题培训',
                              '通俗易懂，无法律术语'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Award className="h-5 w-5" />MARSSTEIN认证</h5>
                          <ul className="space-y-2">
                            {[
                              '"GDPR认证"徽章增强信任',
                              '包含年度审计',
                              '对资助申请和捐赠者很重要'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#e24e1b]/10 rounded-lg p-4 border border-[#e24e1b]/20 mb-8"
                      >
                        <p className="text-sm text-[#232323] font-semibold mb-2">简单资格认证：</p>
                        <ul className="space-y-2">
                          {[
                            '✓ 注册协会或认可的非政府组织',
                            '✓ 有效的免税证明',
                            '✓ 24小时快速验证'
                          ].map((item, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-[#474747]">{item}</li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-center"
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#ea580c] hover:to-[#e24e1b] text-white px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                        >
                          <Heart className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                          Jetzt mit Code GEMEIN2025 registrieren
                        </Button>

                        <p className="mt-4 text-sm text-[#474747]">
                          Upload Freistellungsbescheid • Sofort starten • 30 Tage Geld-zurück-Garantie
                        </p>
                      </motion.div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;