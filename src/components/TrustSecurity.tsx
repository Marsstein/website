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
    title: 'End-to-End Verschlüsselung',
    description: 'AES-256 Verschlüsselung für alle Daten im Transit und at Rest mit Hardware Security Modules.',
    icon: Lock,
    gradient: 'from-blue-500/20 to-cyan-600/20',
    metrics: [
      { label: 'Verschlüsselung', value: 'AES-256' },
      { label: 'Key Management', value: 'HSM' },
      { label: 'Rotation', value: 'Automatisch' }
    ]
  },
  {
    id: 'infrastructure',
    title: 'EU-Infrastruktur',
    description: 'Ausschließlich europäische Rechenzentren mit DSGVO-konformer Datenverarbeitung.',
    icon: Server,
    gradient: 'from-green-500/20 to-emerald-600/20',
    metrics: [
      { label: 'Standorte', value: 'EU-Only' },
      { label: 'Verfügbarkeit', value: '99.9%' },
      { label: 'Latenz', value: '<50ms' }
    ]
  },
  {
    id: 'monitoring',
    title: '24/7 Security Monitoring',
    description: 'Kontinuierliche Überwachung mit KI-gestützter Anomalieerkennung und Incident Response.',
    icon: Eye,
    gradient: 'from-purple-500/20 to-indigo-600/20',
    metrics: [
      { label: 'Monitoring', value: '24/7' },
      { label: 'Response Time', value: '<5 Min.' },
      { label: 'Detection Rate', value: '99.8%' }
    ]
  },
  {
    id: 'access',
    title: 'Zero-Trust Architektur',
    description: 'Multi-Faktor-Authentifizierung und rollenbasierte Zugriffskontrolle für maximale Sicherheit.',
    icon: Shield,
    gradient: 'from-red-500/20 to-rose-600/20',
    metrics: [
      { label: 'Auth Faktoren', value: 'Multi-FA' },
      { label: 'Sessions', value: 'Temporal' },
      { label: 'Audit Trail', value: '100%' }
    ]
  }
];

const certifications: Certification[] = [
  {
    id: 'iso27001',
    name: 'ISO 27001',
    description: 'Informationssicherheits-Managementsystem',
    icon: Award,
    status: 'certified',
    level: 'Enterprise'
  },
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    description: 'Service Organization Control Bericht',
    icon: FileCheck,
    status: 'certified',
    level: 'Type II'
  },
  {
    id: 'gdpr',
    name: 'DSGVO Konform',
    description: 'Vollständige DSGVO-Compliance',
    icon: Globe,
    status: 'certified',
    level: 'EU-Weit'
  },
  {
    id: 'tisax',
    name: 'TISAX',
    description: 'Automotive Security Standard',
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
            Sicherheit & Vertrauen
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Enterprise-Grade <span className="text-primary">Sicherheit</span>
          </h2>
          
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Ihre Daten sind bei uns in sicheren Händen. Mit höchsten Sicherheitsstandards 
            und europäischen Rechenzentren gewährleisten wir maximalen Schutz.
          </p>
        </div>


        {/* Compact Certifications */}
        <div className="mb-8">
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Zertifizierungen & Standards
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  const statusStyle = statusColors[cert.status];
                  
                  return (
                    <div
                      key={cert.id}
                      className="p-3 text-center bg-white/80 border border-gray-200/50 rounded-lg hover:shadow-sm transition-all duration-200"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 w-fit mx-auto mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      
                      <h4 className="text-sm font-semibold text-card-foreground mb-1">
                        {cert.name}
                      </h4>
                      
                      <Badge 
                        className={cn(
                          "text-xs",
                          statusStyle.bg,
                          statusStyle.text,
                          statusStyle.border
                        )}
                      >
                        {statusLabels[cert.status]}
                      </Badge>
                      
                      {cert.level && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {cert.level}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
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
                Vertrauen durch Transparenz
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Bei Marsstein setzen wir auf höchste Sicherheitsstandards und vollständige 
                Transparenz. Ihre Daten bleiben in Europa, sind verschlüsselt und werden 
                niemals für andere Zwecke verwendet.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-secondary" />
                  EU-DSGVO konform
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