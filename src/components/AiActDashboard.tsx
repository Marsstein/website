import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Activity,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  XCircle,
  BarChart3,
  Users,
  FileText,
  Eye,
  Clock,
  Settings,
  Gavel,
  MessageSquare,
  Camera,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RiskCategoryProps {
  title: string;
  count: number;
  risk: 'unacceptable' | 'high' | 'limited' | 'minimal';
  icon: React.ElementType;
}

const RiskCategoryCard: React.FC<RiskCategoryProps> = ({ title, count, risk, icon: Icon }) => {
  const getRiskColor = () => {
    switch (risk) {
      case 'unacceptable': return 'text-red-500 bg-red-50 border-red-200';
      case 'high': return 'text-orange-500 bg-orange-50 border-orange-200';
      case 'limited': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'minimal': return 'text-green-500 bg-green-50 border-green-200';
    }
  };

  const getRiskText = () => {
    switch (risk) {
      case 'unacceptable': return 'Verboten';
      case 'high': return 'Hochrisiko';
      case 'limited': return 'Begrenzt';
      case 'minimal': return 'Minimal';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-lg border p-4 ${getRiskColor()}`}
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className="h-5 w-5" />
        <Badge variant="outline" className="text-xs px-2 py-0.5">
          {getRiskText()}
        </Badge>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{count}</p>
        <p className="text-xs text-gray-600">KI-Systeme</p>
      </div>
    </motion.div>
  );
};

export const AiActDashboard: React.FC = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [fineRisk, setFineRisk] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceScore(67);
      setFineRisk(35);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const riskCategories = [
    { title: 'Verbotene KI', count: 2, risk: 'unacceptable' as const, icon: XCircle },
    { title: 'Hochrisiko-KI', count: 7, risk: 'high' as const, icon: AlertCircle },
    { title: 'Begrenzte Risiko', count: 12, risk: 'limited' as const, icon: Eye },
    { title: 'Minimales Risiko', count: 34, risk: 'minimal' as const, icon: CheckCircle }
  ];

  const criticalFindings = [
    { system: 'Emotionserkennung Büro', violation: 'Verbotene KI', fine: '€35M', urgent: true },
    { system: 'HR-Bewerbungsfilter', violation: 'Fehlende CE-Kennzeichnung', fine: '€15M', urgent: true },
    { system: 'ChatGPT Integration', violation: 'Keine Nutzer-Information', fine: '€7.5M', urgent: false }
  ];

  const aiActTimeline = [
    { date: '01.08.2024', milestone: 'Verbotene KI-Systeme', status: 'active', critical: true },
    { date: '02.02.2025', milestone: 'GPAI-Modelle', status: 'upcoming', critical: true },
    { date: '02.08.2025', milestone: 'Generative AI Transparenz', status: 'upcoming', critical: false },
    { date: '02.08.2026', milestone: 'Hochrisiko-KI CE-Kennzeichnung', status: 'upcoming', critical: false }
  ];

  return (
    <Card className="bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          EU AI Act Dashboard
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
                  stroke="rgba(147, 51, 234, 0.1)"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#9333ea"
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
                <div className="text-2xl font-bold text-red-600">{complianceScore}%</div>
                <div className="text-xs text-gray-600">Compliance-Risiko</div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Categories Grid */}
        <div className="grid grid-cols-2 gap-3">
          {riskCategories.map((category, index) => (
            <RiskCategoryCard key={index} {...category} />
          ))}
        </div>

        {/* Critical Findings */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Gavel className="h-4 w-4 text-red-500" />
            Kritische Verstöße
          </h4>
          <div className="space-y-2">
            {criticalFindings.map((finding, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center justify-between py-2 px-3 bg-red-50 rounded-lg border border-red-200"
              >
                <div className="flex-1">
                  <span className="text-sm font-medium text-red-800">{finding.system}</span>
                  <div className="text-xs text-red-600">{finding.violation}</div>
                </div>
                <div className="flex items-center gap-2">
                  {finding.urgent && <AlertCircle className="h-4 w-4 text-red-500" />}
                  <span className="text-xs font-bold text-red-700">{finding.fine}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Act Timeline */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            AI Act Timeline
          </h4>
          <div className="space-y-2">
            {aiActTimeline.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`p-2 rounded-lg border ${
                  milestone.status === 'active' 
                    ? 'bg-red-50 border-red-200' 
                    : 'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{milestone.date}</span>
                  {milestone.critical && (
                    <Badge variant="destructive" className="text-xs">
                      Kritisch
                    </Badge>
                  )}
                </div>
                <div className="text-xs text-gray-600">{milestone.milestone}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-lg font-bold text-red-600">€{fineRisk}M</div>
            <div className="text-xs text-gray-600">Max. Bußgeld</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-orange-600">23</div>
            <div className="text-xs text-gray-600">Anforderungen</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">127</div>
            <div className="text-xs text-gray-600">Tage bis Deadline</div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-between pt-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span>Hohe Risiken erkannt</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Letzte Prüfung: 1h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};