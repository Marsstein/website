import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Lock,
  Globe,
  CheckCircle2,
  Server,
  Zap,
  Eye,
  FileCheck,
  Award,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  metrics: { label: string; value: string; trend?: string }[];
}

interface Certification {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  status: 'certified' | 'in-progress' | 'planned';
  level?: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    id: 'encryption',
    title: '端到端加密',
    description: '使用硬件安全模块对传输中和静态的所有数据进行AES-256加密。',
    icon: Lock,
    gradient: 'from-blue-500/20 to-cyan-600/20',
    metrics: [
      { label: '加密', value: 'AES-256' },
      { label: '密钥管理', value: 'HSM' },
      { label: '轮换', value: '自动' }
    ]
  },
  {
    id: 'infrastructure',
    title: '欧盟基础设施',
    description: '专用欧洲数据中心，符合GDPR的数据处理。',
    icon: Server,
    gradient: 'from-green-500/20 to-emerald-600/20',
    metrics: [
      { label: '位置', value: '仅欧盟' },
      { label: '可用性', value: '99.9%' },
      { label: '延迟', value: '<50ms' }
    ]
  },
  {
    id: 'monitoring',
    title: '7x24安全监控',
    description: '通过AI驱动的异常检测和事件响应进行持续监控。',
    icon: Eye,
    gradient: 'from-purple-500/20 to-indigo-600/20',
    metrics: [
      { label: '监控', value: '7x24' },
      { label: '响应时间', value: '<5分钟' },
      { label: '检测率', value: '99.8%' }
    ]
  },
  {
    id: 'access',
    title: '零信任架构',
    description: '多因素身份验证和基于角色的访问控制，确保最高安全性。',
    icon: Shield,
    gradient: 'from-red-500/20 to-rose-600/20',
    metrics: [
      { label: '认证因素', value: '多重FA' },
      { label: '会话', value: '时效性' },
      { label: '审计追踪', value: '100%' }
    ]
  }
];

const certifications: Certification[] = [
  {
    id: 'iso27001',
    name: 'ISO 27001',
    description: '信息安全管理系统',
    icon: Award,
    status: 'certified',
    level: '企业级'
  },
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    description: '服务组织控制报告',
    icon: FileCheck,
    status: 'certified',
    level: 'Type II'
  },
  {
    id: 'gdpr',
    name: '符合GDPR',
    description: '完全符合GDPR',
    icon: Globe,
    status: 'certified',
    level: '全欧盟'
  },
  {
    id: 'tisax',
    name: 'TISAX',
    description: '汽车安全标准',
    icon: Shield,
    status: 'in-progress',
    level: 'AL3'
  }
];

const statusColors = {
  certified: { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/20' },
  'in-progress': { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20' },
  planned: { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/20' }
};

const statusLabels = {
  certified: 'Zertifiziert',
  'in-progress': 'In Arbeit',
  planned: 'Geplant'
};

export const TrustSecurity: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      // Stagger animations
      securityFeatures.forEach((feature, index) => {
        setTimeout(() => {
          setVisibleElements(prev => new Set([...prev, feature.id]));
        }, index * 150);
      });
      
      certifications.forEach((cert, index) => {
        setTimeout(() => {
          setVisibleElements(prev => new Set([...prev, cert.id]));
        }, (securityFeatures.length + index) * 150);
      });

      // Auto-rotate active feature
      const interval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % securityFeatures.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-gradient-to-b from-white via-[#E6F2FF]/20 to-white relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.02)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-8 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <Shield className="w-4 h-4 mr-1" />
            安全与信任
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            企业级<span className="text-primary">安全</span>
          </h2>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            您的数据在我们这里得到安全保护。凭借最高的安全标准
            和欧洲数据中心，我们确保最大程度的保护。
          </p>
        </div>

        {/* Compact Trust Statement */}
        <div className="text-center">
          <Card className="inline-block p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm max-w-2xl hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <div className="p-2 rounded-lg bg-accent/10">
                  <Lock className="h-5 w-5 text-accent" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground">
                通过透明建立信任
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                在Marsstein，我们依赖最高的安全标准和完全的
                透明度。您的数据留在欧洲，经过加密，永远不会
                用于其他目的。
              </p>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-secondary" />
                  符合欧盟GDPR
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-secondary" />
                  Open Source Audit
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-secondary" />
                  Penetration Tests
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};