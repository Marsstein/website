import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/zh/Header';
import { Footer } from '@/components/zh/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Brain,
  Shield,
  FileText,
  Users,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Clock,
  Scale,
  Eye,
  Target,
  Gavel,
  Building2,
  TrendingUp,
  Search,
  Download,
  ExternalLink,
  ChevronRight,
  Zap,
  Database,
  Globe,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const EuAiActZh: React.FC = () => {
  const [activeTab, setActiveTab] = useState('grundlagen');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "欧盟AI法案知识 - 综合指南",
    "description": "全面的欧盟AI法案知识：基础、风险分类、高风险AI系统、禁止做法、透明度要求。实用解释。",
    "url": "https://marsstein.ai/zh/ou-ai-fa"
  };

  const topics = {
    grundlagen: {
      title: 'AI法案基础',
      icon: Brain,
      articles: [
        {
          title: '什么是欧盟AI法案？',
          description: '全球首部AI综合监管框架简介',
          readTime: '8分钟',
          level: '入门',
          link: '/zh/zhishi/ai-fa/shenme-shi-ai-fa'
        },
        {
          title: 'AI法案的目标和范围',
          description: '监管目标、适用范围和生效时间表',
          readTime: '10分钟',
          level: '入门',
          link: '/zh/zhishi/ai-fa/mubiao-fanwei'
        },
        {
          title: '基于风险的方法',
          description: 'AI法案如何根据风险对AI系统进行分类',
          readTime: '12分钟',
          level: '进阶',
          link: '/zh/zhishi/ai-fa/fengxian-fangfa'
        },
        {
          title: '重要定义和术语',
          description: 'AI系统、提供者、部署者等关键术语',
          readTime: '9分钟',
          level: '入门',
          link: '/zh/zhishi/ai-fa/dingyiyu-shuyu'
        }
      ]
    },
    risikokategorien: {
      title: '风险类别',
      icon: Target,
      articles: [
        {
          title: '禁止的AI做法',
          description: '欧盟禁止的AI应用和系统',
          readTime: '10分钟',
          level: '实用',
          link: '/zh/zhishi/ai-fa/jinzhi-zuofa'
        },
        {
          title: '高风险AI系统',
          description: '识别和管理高风险AI应用',
          readTime: '15分钟',
          level: '进阶',
          link: '/zh/zhishi/ai-fa/gaofengxian-xitong'
        },
        {
          title: '有限风险AI',
          description: '透明度义务和信息要求',
          readTime: '8分钟',
          level: '实用',
          link: '/zh/zhishi/ai-fa/youxian-fengxian'
        },
        {
          title: '最小风险AI',
          description: '自愿行为准则和最佳实践',
          readTime: '6分钟',
          level: '入门',
          link: '/zh/zhishi/ai-fa/zuixiao-fengxian'
        }
      ]
    },
    hochrisiko: {
      title: '高风险AI要求',
      icon: Shield,
      articles: [
        {
          title: '风险管理系统',
          description: '为高风险AI系统建立风险管理',
          readTime: '14分钟',
          level: '技术',
          link: '/zh/zhishi/ai-fa/fengxian-guanli'
        },
        {
          title: '数据治理',
          description: '训练、验证和测试数据的要求',
          readTime: '12分钟',
          level: '技术',
          link: '/zh/zhishi/ai-fa/shuju-zhili'
        },
        {
          title: '技术文档',
          description: '记录AI系统及其开发过程',
          readTime: '16分钟',
          level: '实用',
          link: '/zh/zhishi/ai-fa/jishu-wendang'
        },
        {
          title: '人工监督',
          description: '设计支持人类监督的系统',
          readTime: '10分钟',
          level: '进阶',
          link: '/zh/zhishi/ai-fa/rengong-jiandu'
        }
      ]
    },
    transparenz: {
      title: '透明度和治理',
      icon: Eye,
      articles: [
        {
          title: '透明度义务',
          description: 'AI系统的信息和披露要求',
          readTime: '11分钟',
          level: '实用',
          link: '/zh/zhishi/ai-fa/touming-yiwu'
        },
        {
          title: '符合性评估',
          description: '评估和认证高风险AI系统',
          readTime: '18分钟',
          level: '专家',
          link: '/zh/zhishi/ai-fa/fuhe-pinggu'
        },
        {
          title: 'CE标志和注册',
          description: 'CE标志和欧盟数据库注册',
          readTime: '13分钟',
          level: '进阶',
          link: '/zh/zhishi/ai-fa/ce-biaozhi'
        },
        {
          title: 'AI治理框架',
          description: '在组织中建立AI治理结构',
          readTime: '15分钟',
          level: '专家',
          link: '/zh/zhishi/ai-fa/zhili-kuangjia'
        }
      ]
    },
    umsetzung: {
      title: '实施与合规',
      icon: CheckCircle2,
      articles: [
        {
          title: '合规路线图',
          description: '为AI法案准备组织的分步指南',
          readTime: '20分钟',
          level: '实用',
          link: '/zh/zhishi/ai-fa/heguixing-luxiantu'
        },
        {
          title: '影响评估',
          description: '评估AI法案对您业务的影响',
          readTime: '14分钟',
          level: '进阶',
          link: '/zh/zhishi/ai-fa/yingxiang-pinggu'
        },
        {
          title: '监管沙盒',
          description: '在受控环境中测试创新AI',
          readTime: '9分钟',
          level: '进阶',
          link: '/zh/zhishi/ai-fa/jianguan-shaxiang'
        },
        {
          title: '罚款和执法',
          description: '处罚、执法机构和补救措施',
          readTime: '11分钟',
          level: '实用',
          link: '/zh/zhishi/ai-fa/fakuan-zhifa'
        }
      ]
    }
  };

  const quickLinks = [
    {
      title: 'AI风险评估',
      description: '评估您的AI系统的风险类别',
      icon: Target,
      link: '/zh/pinggu-zhongxin/ai-fengxian-pinggu',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'AI治理检查',
      description: '评估您的AI治理成熟度',
      icon: Shield,
      link: '/zh/pinggu-zhongxin/ai-zhili-jiancha',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '合规检查清单',
      description: 'AI法案合规互动清单',
      icon: CheckCircle2,
      link: '/zh/pinggu-zhongxin/ai-fa-qingdan',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'AI法案时间表',
      description: '重要截止日期和过渡期',
      icon: Clock,
      link: '/zh/zhishi/ai-fa/shijian-biao',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <>
      <SEOHead
        title="欧盟AI法案知识 – 综合指南与实用手册"
        description="全面的欧盟AI法案知识：风险分类、高风险要求、透明度义务、合规路线图。✓ 实用指南 ✓ 评估工具 ✓ 最新法规。"
        canonical="/zh/ou-ai-fa"
        keywords="欧盟AI法案, AI监管, AI合规, 高风险AI, AI治理"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-4 px-4 py-1" variant="outline">
                <Brain className="h-3 w-3 mr-1" />
                欧盟AI法案知识中心
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                欧盟AI法案知识精要
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                从基础知识到风险分类再到合规实施——
                您需要了解的关于欧盟AI法案的一切
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={index} to={link.link}>
                    <Card className="h-full hover:shadow-lg transition-all group cursor-pointer">
                      <CardContent className="p-6">
                        <div className={cn(
                          "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4",
                          link.color
                        )}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {link.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </motion.div>

            {/* Topics Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                  {Object.entries(topics).map(([key, topic]) => {
                    const Icon = topic.icon;
                    return (
                      <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{topic.title}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {Object.entries(topics).map(([key, topic]) => (
                  <TabsContent key={key} value={key}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.articles.map((article, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-lg transition-all group">
                            <CardHeader>
                              <div className="flex items-start justify-between mb-2">
                                <CardTitle className="text-lg group-hover:text-brand-red transition-colors">
                                  {article.title}
                                </CardTitle>
                                <Badge variant="outline">{article.level}</Badge>
                              </div>
                              <CardDescription>{article.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                  <Clock className="h-4 w-4" />
                                  {article.readTime}
                                </div>
                                <Link to={article.link}>
                                  <Button variant="ghost" size="sm" className="group-hover:text-brand-red">
                                    阅读
                                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            {/* Key Facts */}
            <motion.div
              className="mt-16 grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">全球首创</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    欧盟AI法案是世界上第一部全面的AI监管法律
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800">
                <CardContent className="p-6">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">高额罚款</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    最高3500万欧元或全球年营业额的7%
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">基于风险的方法</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    4个风险级别决定您的AI系统的监管要求
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    重要实施日期
                  </CardTitle>
                  <CardDescription>欧盟AI法案的关键里程碑和截止日期</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Badge className="bg-red-500">2024年2月</Badge>
                      <div>
                        <p className="font-semibold">禁止的AI做法</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          禁止的AI应用（第5条）生效后6个月
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Badge className="bg-orange-500">2025年2月</Badge>
                      <div>
                        <p className="font-semibold">通用AI治理</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          通用AI模型（GPAI）规则适用后12个月
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Badge className="bg-yellow-500">2026年8月</Badge>
                      <div>
                        <p className="font-semibold">高风险AI系统</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          所有高风险AI系统的全面要求后24个月
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Badge className="bg-green-500">2027年8月</Badge>
                      <div>
                        <p className="font-semibold">现有系统</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          法案生效前投放市场的高风险AI系统的过渡期结束
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-4">
                  需要AI法案合规方面的帮助吗？
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  我们的AI合规专家帮助您为欧盟AI法案做好准备
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/zh/lianxi">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      免费AI合规咨询
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/zh/pinggu-zhongxin/ai-fengxian-pinggu">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900"
                    >
                      开始AI风险评估
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EuAiActZh;
