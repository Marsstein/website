import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Activity,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  BarChart3,
  PieChart,
  Users,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MetricCardProps {
  title: string;
  value: number;
  change: number;
  status: 'success' | 'warning' | 'danger';
  icon: React.ElementType;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, status, icon: Icon }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'success': return 'text-green-500 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'danger': return 'text-red-500 bg-red-50 border-red-200';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-lg border p-4 ${getStatusColor()}`}
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className="h-5 w-5" />
        <div className={`flex items-center text-xs ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
          <TrendingUp className={`h-3 w-3 mr-1 ${change < 0 ? 'rotate-180' : ''}`} />
          {Math.abs(change)}%
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}%</p>
      </div>
    </motion.div>
  );
};

export const CompactDsgvoDashboard: React.FC = () => {
  const [complianceScore, setComplianceScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceScore(94);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    { title: 'Dokumentation', value: 92, change: 5, status: 'success' as const, icon: FileText },
    { title: 'TOM-Maßnahmen', value: 88, change: -2, status: 'warning' as const, icon: Shield },
    { title: 'Anfragen', value: 95, change: 8, status: 'success' as const, icon: Users },
    { title: 'Überwachung', value: 91, change: 3, status: 'success' as const, icon: Activity }
  ];

  const activities = [
    { name: 'Kundendaten', status: 'compliant', risk: 'low' },
    { name: 'Marketing', status: 'review', risk: 'medium' },
    { name: 'HR-Daten', status: 'action', risk: 'high' }
  ];

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="h-10 w-10 rounded-full bg-[#a1251b] flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          DSGVO Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Score */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(229, 231, 235, 0.5)"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#a1251b"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={2 * Math.PI * 56 * (1 - complianceScore / 100)}
                  initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 56 * (1 - complianceScore / 100) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-gray-900">{complianceScore}%</div>
                <div className="text-xs text-gray-600">Compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Processing Activities */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Verarbeitungsverzeichnis
          </h4>
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg border"
              >
                <span className="text-sm font-medium text-gray-700">{activity.name}</span>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={activity.risk === 'low' ? 'secondary' : activity.risk === 'medium' ? 'outline' : 'destructive'}
                    className="text-xs px-2 py-0.5"
                  >
                    {activity.risk === 'low' ? 'Niedrig' : activity.risk === 'medium' ? 'Mittel' : 'Hoch'}
                  </Badge>
                  {activity.status === 'compliant' && <CheckCircle className="h-4 w-4 text-green-500" />}
                  {activity.status === 'review' && <AlertCircle className="h-4 w-4 text-yellow-500" />}
                  {activity.status === 'action' && <AlertCircle className="h-4 w-4 text-red-500" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">24</div>
            <div className="text-xs text-gray-600">Dokumente</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">3</div>
            <div className="text-xs text-gray-600">Offene Anfragen</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-orange-600">7</div>
            <div className="text-xs text-gray-600">Tage bis Audit</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};