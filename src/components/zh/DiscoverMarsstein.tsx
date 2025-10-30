import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import {
  BookOpen,
  Shield,
  Building2,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
  FileText,
  Scale,
  MessageCircle,
  Phone
} from 'lucide-react';

const features = [
  {
    title: '合规框架',
    subtitle: '所有框架一览',
    description: '从GDPR到ISO 27001再到行业特定标准——轻松理解和实施每个框架。',
    link: '/zh/zhishi/heguixing-kuangjia',
    icon: Shield,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: 'GDPR • ISO 27001 • SOC2'
  },
  {
    title: 'GDPR大师课程',
    subtitle: '让数据保护易于理解',
    description: '实用指南、清单和分步说明，让您的GDPR合规变得轻而易举。',
    link: '/zh/zhishi/gdpr',
    icon: Scale,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: '指南 • 模板 • 实践'
  },
  {
    title: '行业解决方案',
    subtitle: '为您量身定制',
    description: '无论是电子商务、SaaS还是医疗保健——发现适合您行业的特定合规解决方案。',
    link: '/zh/zhishi/hangye',
    icon: Building2,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: '电子商务 • SaaS • 医疗'
  },
  {
    title: '我们的使命',
    subtitle: 'Marsstein背后的团队',
    description: '了解我们为什么开发Marsstein，以及我们的愿景将如何永远改变合规。',
    link: '/zh/guanyu-women',
    icon: Users,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: '团队 • 愿景 • 价值观'
  },
  {
    title: '知识中心',
    subtitle: '您的合规指南针',
    description: '最新法理、最佳实践以及成功实施合规所需的一切。',
    link: '/zh/zhishi',
    icon: BookOpen,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: '指南 • 更新 • 资源'
  },
  {
    title: '联系我们',
    subtitle: '我们随时为您服务',
    description: '有问题吗？我们的专家团队很乐意帮助您应对所有合规挑战，为您的企业找到完美的解决方案。',
    link: '/zh/lianxi',
    icon: MessageCircle,
    iconBg: 'bg-gradient-to-br from-[#e24e1b]/10 to-[#f97316]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-gradient-to-br hover:from-[#e24e1b]/5 hover:to-[#f97316]/5',
    highlight: '支持 • 咨询 • 演示',
    isSpecial: true
  }
];

export const DiscoverMarsstein = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with PointerHighlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            探索
            <PointerHighlight>
              <span>Marsstein</span>
            </PointerHighlight>
            的世界
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            您的合规指南针——从实用指南
            到行业特定解决方案。
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={feature.link}
                className="block h-full group"
              >
                <div className={`
                  relative h-full p-6 rounded-xl backdrop-blur-sm
                  shadow-sm transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                  ${feature.isSpecial
                    ? 'bg-gradient-to-br from-[#e24e1b]/5 via-white to-[#39B37B]/5 border-2 border-[#e24e1b]/30 hover:border-[#e24e1b]/50'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                  }
                  ${feature.hoverBg}
                `}>

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`
                      inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5
                      ${feature.iconBg} ${feature.iconColor}
                      transition-transform duration-300 group-hover:scale-110
                    `}>
                      <feature.icon className="w-6 h-6" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#e24e1b] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">
                      {feature.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Highlight tags */}
                    <div className="mb-5">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {feature.highlight}
                      </span>
                    </div>

                    {/* CTA with arrow */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#e24e1b] group-hover:text-[#d63f14] transition-colors">
                      <span>{feature.isSpecial ? 'Jetzt kontaktieren' : 'Mehr erfahren'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Special badge for contact card */}
                    {feature.isSpecial && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-gradient-to-r from-[#e24e1b] to-[#39B37B] text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Persönlich</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};