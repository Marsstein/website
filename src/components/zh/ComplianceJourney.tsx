import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { InlineMultiStepLoader } from '@/components/ui/inline-multi-step-loader';
import {
  ArrowRight,
  Clock,
  Shield,
  RefreshCw,
  Target,
  Sparkles,
  Users,
  Tag
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const complianceContent = [
  {
    badge: "01",
    title: "问题所在",
    subtitle: "GDPR是一个无人能兑现的承诺",
    description: (
      <>
        <p className="text-gray-600 mb-4">
          一个移动目标，总是跑得比您追赶的速度更快。
          您被困在对罚款的恐惧和官僚主义的瘫痪之间。
          在应该如何和实际情况之间。
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="font-medium text-gray-900">这才是GDPR的真正代价。不是罚款——而是生命时间。</p>
          <p className="text-sm text-gray-600 mt-2">
            您的生命时间。浪费在没人想读的表格上。
            浪费在没人理解的流程上。浪费在没人需要的官僚主义上。
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">120+</div>
            <div className="text-xs text-gray-500">审计小时数</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">67%</div>
            <div className="text-xs text-gray-500">不完整文档</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">20 Mio €</div>
            <div className="text-xs text-gray-500">最高罚款</div>
          </div>
        </div>
      </>
    ),
  },
  {
    badge: "02",
    title: "基础建设",
    subtitle: "一次性奠定基础",
    description: (
      <>
        <p className="text-gray-600 mb-4">
          输入您的企业数据。Marsstein在此基础上构建整个合规体系。
          一层一层。一份文档接一份文档。一砖一瓦。
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="font-medium text-gray-900">数据保护很重要。周围的官僚主义不重要。</p>
        </div>
      </>
    ),
    features: true,
  },
  {
    badge: "03",
    title: "未来展望",
    subtitle: "从现在开始，GDPR就像会计一样运行",
    description: (
      <>
        <p className="text-gray-600 mb-4">
          自动运行。没人再想起它。没人再谈论它。
          它就是完成了。永远如此。
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
          <p className="font-medium text-gray-900">您的团队松了一口气。您的公司重新记起它存在的意义。</p>
          <p className="text-sm text-gray-600 mt-2">
            新市场？没有合规问题。AI功能？没有数据保护戏剧。
            不是为了表格。为了未来。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-gray-700">节省95%时间</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-gray-700">100% Compliance</span>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-gray-700">自动更新</span>
          </div>
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-gray-700">Fokus aufs Geschäft</span>
          </div>
        </div>
      </>
    ),
    cta: true,
  },
];

const loadingStates = [
  {
    text: "自动文档生成",
  },
  {
    text: "AI驱动的合规检查",
  },
  {
    text: "实时监控",
  },
  {
    text: "集中管理",
  },
];

export const ComplianceJourney = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              ✓ Die Compliance-Revolution
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Von der Last zur Leichtigkeit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drei Schritte, die alles verändern. Von der Compliance-Hölle zum automatisierten Paradies.
            </p>
          </motion.div>

          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {complianceContent.map((item, index) => (
                <motion.div
                  key={`content-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-16"
                >
                  <h2 className={cn(
                    "text-white rounded-full text-sm w-fit px-4 py-1 mb-4",
                    index === 0 && "bg-gradient-to-r from-red-500 to-orange-500",
                    index === 1 && "bg-gradient-to-r from-blue-500 to-indigo-500",
                    index === 2 && "bg-gradient-to-r from-emerald-500 to-teal-500"
                  )}>
                    {item.badge}
                  </h2>

                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {item.description}
                    {item.features && (
                      <div className="mt-6">
                        <InlineMultiStepLoader
                          loadingStates={loadingStates}
                          duration={1500}
                        />
                      </div>
                    )}
                    {item.cta && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 p-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F6F8] via-white to-[#e24e1b]/5 border-2 border-[#e24e1b]/20 shadow-xl"
                      >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#e24e1b]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#39B37B]/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                          <div className="text-center mb-6">
                            <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0 mb-4">
                              <Sparkles className="w-3 h-3 mr-1" />
                              限量测试版访问
                            </Badge>
                            <h4 className="text-2xl font-bold bg-gradient-to-r from-[#232323] to-[#474747] bg-clip-text text-transparent mb-3">
                              成为测试用户
                            </h4>
                            <p className="text-[#474747] text-lg">
                              与我们一起塑造合规的未来
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e24e1b]/10 hover:border-[#e24e1b]/30 transition-all duration-300 hover:shadow-lg">
                              <Users className="w-5 h-5 text-[#e24e1b] mb-2" />
                              <span className="block text-sm font-semibold text-[#232323]">专属社区</span>
                              <span className="text-xs text-[#474747]">与团队直接沟通</span>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#39B37B]/20 hover:border-[#39B37B]/40 transition-all duration-300 hover:shadow-lg">
                              <Tag className="w-5 h-5 text-[#39B37B] mb-2" />
                              <span className="block text-sm font-semibold text-[#232323]">50%折扣</span>
                              <span className="text-xs text-[#474747]">测试阶段后</span>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e24e1b]/10 hover:border-[#e24e1b]/30 transition-all duration-300 hover:shadow-lg">
                              <Sparkles className="w-5 h-5 text-[#e24e1b] mb-2" />
                              <span className="block text-sm font-semibold text-[#232323]">免费测试</span>
                              <span className="text-xs text-[#474747]">无需信用卡</span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                              to="/zh/dsgvo-compliance-software"
                              className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-xl hover:from-[#d63f14] hover:to-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:scale-[1.02]"
                            >
                              立即获取测试访问权限
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                              to="/zh/jiage"
                              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#474747] bg-white/90 backdrop-blur-sm border-2 border-[#232323]/20 rounded-xl hover:bg-[#F5F6F8] hover:border-[#232323]/30 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                              查看价格
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </TracingBeam>

      </div>
    </section>
  );
};