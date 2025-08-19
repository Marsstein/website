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
  const developmentGoals = [
    {
      icon: Shield,
      value: 'EU',
      label: 'Compliance-Focus',
      description: 'DSGVO & AI Act Ready',
      color: 'from-green-500 to-emerald-600',
      badge: 'Roadmap'
    },
    {
      icon: Users,
      value: 'DACH',
      label: 'Zielmarkt',
      description: 'Fokus auf DACH-Region',
      color: 'from-blue-500 to-cyan-600',
      badge: 'Potenzial'
    },
    {
      icon: FileCheck,
      value: 'Beta',
      label: 'Audit-Kapazität',
      description: 'Skalierung geplant',
      color: 'from-purple-500 to-pink-600',
      badge: 'Vision 2025'
    },
    {
      icon: TrendingUp,
      value: 'Auto',
      label: 'Zeitersparnis',
      description: 'Unser Automatisierungsziel',
      color: 'from-orange-500 to-red-600',
      badge: 'Ziel'
    }
  ];

  const complianceStandards = [
    { name: 'ISO 27001 Ready', icon: Award, status: 'Roadmap' },
    { name: 'SOC 2 Framework', icon: Lock, status: 'Geplant' },
    { name: 'EU AI Act Compliance', icon: CheckCircle2, status: 'In Entwicklung' },
    { name: 'Enterprise Security', icon: Building2, status: 'By Design' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        {/* Development Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {developmentGoals.map((goal, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className={cn(
                "absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300",
                `bg-gradient-to-br ${goal.color}`
              )} />
              <CardContent className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "p-3 rounded-lg bg-gradient-to-br",
                    goal.color
                  )}>
                    <goal.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {goal.badge}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold">{goal.value}</h3>
                  <p className="text-lg font-medium text-foreground">{goal.label}</p>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Standards */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Entwickelt nach führenden Sicherheits- und Compliance-Standards
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="relative">
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                >
                  <standard.icon className="h-4 w-4 mr-2" />
                  {standard.name}
                </Badge>
                <div className="absolute -top-2 -right-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                  {standard.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};