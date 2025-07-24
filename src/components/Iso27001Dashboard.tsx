import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Activity,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Users,
  FileText,
  Eye,
  Clock,
  Settings,
  Server,
  Network,
  Database,
  Lock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ControlCardProps {
  title: string;
  value: number;
  change: number;
  status: 'implemented' | 'in-progress' | 'planned';
  icon: React.ElementType;
}

const ControlCard: React.FC<ControlCardProps> = ({ title, value, change, status, icon: Icon }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'implemented': return 'text-green-500 bg-green-50 border-green-200';
      case 'in-progress': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'planned': return 'text-blue-500 bg-blue-50 border-blue-200';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'implemented': return 'Implementiert';
      case 'in-progress': return 'In Arbeit';
      case 'planned': return 'Geplant';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-lg border p-4 ${getStatusColor()}`}
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className="h-5 w-5" />
        <div className={`flex items-center text-xs ${change > 0 ? 'text-green-600' : 'text-gray-600'}`}>
          <TrendingUp className={`h-3 w-3 mr-1 ${change < 0 ? 'rotate-180' : ''}`} />
          {Math.abs(change)}%
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}%</p>
        <Badge variant="outline" className="text-xs px-2 py-0.5">
          {getStatusText()}
        </Badge>
      </div>
    </motion.div>
  );
};

export const Iso27001Dashboard: React.FC = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [controlsProgress, setControlsProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceScore(89);
      setControlsProgress(134);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const controls = [
    { title: 'Zugangskontrollen', value: 94, change: 8, status: 'implemented' as const, icon: Lock },
    { title: 'Netzwerksicherheit', value: 87, change: -3, status: 'in-progress' as const, icon: Network },
    { title: 'Asset Management', value: 92, change: 12, status: 'implemented' as const, icon: Database },
    { title: 'Incident Response', value: 78, change: 5, status: 'planned' as const, icon: Activity }
  ];

  const riskAreas = [
    { name: 'Physische Sicherheit', level: 'Niedrig', status: 'compliant', priority: 'low' },
    { name: 'Personalmanagement', level: 'Mittel', status: 'review', priority: 'medium' },
    { name: 'Krypto-Management', level: 'Hoch', status: 'action', priority: 'high' }
  ];

  const auditProgress = [
    { phase: 'Dokumentation', completion: 95, status: 'completed' },
    { phase: 'Gap-Analyse', completion: 89, status: 'completed' },
    { phase: 'Kontrollen', completion: 67, status: 'in-progress' },
    { phase: 'Audit-Vorbereitung', completion: 23, status: 'upcoming' }
  ];

  return (
    <Card className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          ISO 27001 Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Compliance Score */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(59, 130, 246, 0.1)"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#2563eb"
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
                <div className="text-2xl font-bold text-blue-600">{complianceScore}%</div>
                <div className="text-xs text-gray-600">ISO Readiness</div>
              </div>
            </div>
          </div>
        </div>

        {/* Control Areas Grid */}
        <div className="grid grid-cols-2 gap-3">
          {controls.map((control, index) => (
            <ControlCard key={index} {...control} />
          ))}
        </div>

        {/* Risk Assessment */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Risikobereiche
          </h4>
          <div className="space-y-2">
            {riskAreas.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center justify-between py-2 px-3 bg-white rounded-lg border"
              >
                <span className="text-sm font-medium text-gray-700">{risk.name}</span>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={risk.priority === 'low' ? 'secondary' : risk.priority === 'medium' ? 'outline' : 'destructive'}
                    className="text-xs px-2 py-0.5"
                  >
                    {risk.level}
                  </Badge>
                  {risk.status === 'compliant' && <CheckCircle className="h-4 w-4 text-green-500" />}
                  {risk.status === 'review' && <AlertCircle className="h-4 w-4 text-yellow-500" />}
                  {risk.status === 'action' && <AlertCircle className="h-4 w-4 text-red-500" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audit Progress */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Audit-Fortschritt
          </h4>
          <div className="space-y-3">
            {auditProgress.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{phase.phase}</span>
                  <span className="text-sm text-gray-600">{phase.completion}%</span>
                </div>
                <div className="relative">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${phase.completion}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full rounded-full ${
                        phase.status === 'completed' ? 'bg-green-500' :
                        phase.status === 'in-progress' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">{controlsProgress}</div>
            <div className="text-xs text-gray-600">Kontrollen</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">67</div>
            <div className="text-xs text-gray-600">Implementiert</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-orange-600">42</div>
            <div className="text-xs text-gray-600">Tage bis Audit</div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-between pt-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>System Online</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Letzte Prüfung: 2h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};