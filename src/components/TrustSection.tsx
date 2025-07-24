import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  Lock, 
  FileCheck, 
  Users, 
  Building2,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const TrustSection: React.FC = () => {
  const trustMetrics = [
    {
      icon: Shield,
      value: '100%',
      label: 'DSGVO-Konform',
      description: 'Vollständige Compliance garantiert',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Unternehmen',
      description: 'Vertrauen auf Marsstein',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: FileCheck,
      value: '10k+',
      label: 'Audits',
      description: 'Erfolgreich durchgeführt',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      value: '90%',
      label: 'Zeitersparnis',
      description: 'Bei Compliance-Prozessen',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', icon: Award },
    { name: 'SOC 2 Type II', icon: Lock },
    { name: 'EU AI Act Ready', icon: CheckCircle2 },
    { name: 'Cloud Security Alliance', icon: Building2 }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className={cn(
                "absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300",
                `bg-gradient-to-br ${metric.color}`
              )} />
              <CardContent className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "p-3 rounded-lg bg-gradient-to-br",
                    metric.color
                  )}>
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold">{metric.value}</h3>
                  <p className="text-lg font-medium text-foreground">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Zertifiziert und ausgezeichnet von führenden Institutionen
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-6 py-3 text-sm font-medium border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                <cert.icon className="h-4 w-4 mr-2" />
                {cert.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};