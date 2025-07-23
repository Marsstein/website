import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  FileText, 
  Users, 
  Lock, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Activity,
  Database,
  Clock,
  BarChart,
  PieChart,
  FileCheck,
  UserCheck,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ComplianceMetric {
  label: string;
  value: number;
  change: number;
  status: 'success' | 'warning' | 'danger';
}

interface ProcessingActivity {
  id: string;
  name: string;
  lastUpdated: string;
  status: 'compliant' | 'review' | 'action-required';
  riskLevel: 'low' | 'medium' | 'high';
}

interface DataRequest {
  id: string;
  type: 'access' | 'deletion' | 'portability' | 'correction';
  status: 'pending' | 'processing' | 'completed';
  daysRemaining: number;
  requester: string;
}

const DsgvoComplianceDashboard: React.FC = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  // Animate compliance score on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceScore(87);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const metrics: ComplianceMetric[] = [
    { label: 'Verarbeitungsverzeichnis', value: 92, change: 5, status: 'success' },
    { label: 'TOM-Dokumentation', value: 88, change: -2, status: 'warning' },
    { label: 'Betroffenenanfragen', value: 95, change: 8, status: 'success' },
    { label: 'Datenschutzerklärung', value: 78, change: -5, status: 'danger' }
  ];

  const processingActivities: ProcessingActivity[] = [
    { id: '1', name: 'Kundendatenverwaltung', lastUpdated: '2024-01-15', status: 'compliant', riskLevel: 'low' },
    { id: '2', name: 'Marketing Analytics', lastUpdated: '2024-01-10', status: 'review', riskLevel: 'medium' },
    { id: '3', name: 'Mitarbeiterdaten HR', lastUpdated: '2024-01-08', status: 'action-required', riskLevel: 'high' },
    { id: '4', name: 'Webseitentracking', lastUpdated: '2024-01-12', status: 'compliant', riskLevel: 'medium' }
  ];

  const dataRequests: DataRequest[] = [
    { id: '1', type: 'access', status: 'pending', daysRemaining: 25, requester: 'Max Mustermann' },
    { id: '2', type: 'deletion', status: 'processing', daysRemaining: 18, requester: 'Anna Schmidt' },
    { id: '3', type: 'portability', status: 'completed', daysRemaining: 0, requester: 'Peter Weber' },
    { id: '4', type: 'correction', status: 'pending', daysRemaining: 28, requester: 'Lisa Müller' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
      case 'compliant':
      case 'completed':
        return 'text-green-500';
      case 'warning':
      case 'review':
      case 'processing':
        return 'text-yellow-500';
      case 'danger':
      case 'action-required':
      case 'pending':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getRequestTypeIcon = (type: string) => {
    switch (type) {
      case 'access':
        return <FileCheck className="w-4 h-4" />;
      case 'deletion':
        return <UserCheck className="w-4 h-4" />;
      case 'portability':
        return <Database className="w-4 h-4" />;
      case 'correction':
        return <FileText className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className={`min-h-screen p-8 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Dark Mode Toggle */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 right-8 p-2 rounded-lg backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20"
        onClick={() => setIsDarkMode(!isDarkMode)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          DSGVO Compliance Dashboard
        </h1>
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Echtzeit-Überwachung Ihrer Datenschutz-Compliance
        </p>
      </motion.div>

      {/* Main Compliance Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <div className="relative max-w-md mx-auto">
          <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-2xl">
            <div className="relative w-64 h-64 mx-auto">
              {/* Animated circular progress */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  stroke={isDarkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(229, 231, 235, 0.5)'}
                  strokeWidth="16"
                  fill="none"
                />
                <motion.circle
                  cx="128"
                  cy="128"
                  r="120"
                  stroke="#a1251b"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 120}`}
                  strokeDashoffset={2 * Math.PI * 120 * (1 - complianceScore / 100)}
                  initial={{ strokeDashoffset: 2 * Math.PI * 120 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 120 * (1 - complianceScore / 100) }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <ShieldCheck className="w-12 h-12 text-[#a1251b] mb-2" />
                  <div className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {complianceScore}%
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Compliance Score
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Status indicators */}
            <div className="mt-8 flex justify-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2"
              >
                <Activity className="w-5 h-5 text-green-500" />
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  System aktiv
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2"
              >
                <Clock className="w-5 h-5 text-blue-500" />
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Letzte Prüfung: 5 Min
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            onHoverStart={() => setHoveredMetric(metric.label)}
            onHoverEnd={() => setHoveredMetric(null)}
            className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg cursor-pointer"
            onClick={() => setSelectedSection(metric.label)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${metric.status === 'success' ? 'bg-green-100/20' : metric.status === 'warning' ? 'bg-yellow-100/20' : 'bg-red-100/20'}`}>
                {metric.label === 'Verarbeitungsverzeichnis' && <FileText className={`w-6 h-6 ${getStatusColor(metric.status)}`} />}
                {metric.label === 'TOM-Dokumentation' && <Shield className={`w-6 h-6 ${getStatusColor(metric.status)}`} />}
                {metric.label === 'Betroffenenanfragen' && <Users className={`w-6 h-6 ${getStatusColor(metric.status)}`} />}
                {metric.label === 'Datenschutzerklärung' && <Lock className={`w-6 h-6 ${getStatusColor(metric.status)}`} />}
              </div>
              <div className={`flex items-center space-x-1 text-sm ${metric.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                <TrendingUp className={`w-4 h-4 ${metric.change < 0 ? 'transform rotate-180' : ''}`} />
                <span>{Math.abs(metric.change)}%</span>
              </div>
            </div>
            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {metric.label}
            </h3>
            <div className="flex items-baseline">
              <span className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {metric.value}%
              </span>
              <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Compliance
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="mt-4 h-2 bg-gray-200/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className={`h-full rounded-full ${
                  metric.status === 'success' ? 'bg-green-500' :
                  metric.status === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Data Flow Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mb-12"
      >
        <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-lg">
          <h2 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Datenfluss-Überwachung
          </h2>
          
          <div className="relative h-64">
            {/* Animated data flow lines */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a1251b" stopOpacity="0" />
                  <stop offset="50%" stopColor="#a1251b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#a1251b" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {[...Array(5)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="10%"
                  y1={`${20 + i * 30}%`}
                  x2="90%"
                  y2={`${20 + i * 30}%`}
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  opacity="0.5"
                >
                  <animate
                    attributeName="x1"
                    from="-20%"
                    to="100%"
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x2"
                    from="0%"
                    to="120%"
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </motion.line>
              ))}
            </svg>
            
            {/* Data nodes */}
            <div className="relative h-full flex items-center justify-between px-12">
              {['Erfassung', 'Verarbeitung', 'Speicherung', 'Löschung'].map((stage, index) => (
                <motion.div
                  key={stage}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#a1251b] to-[#d6352a] flex items-center justify-center shadow-xl">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                      {index === 0 && <Zap className="w-8 h-8 text-white" />}
                      {index === 1 && <BarChart className="w-8 h-8 text-white" />}
                      {index === 2 && <Database className="w-8 h-8 text-white" />}
                      {index === 3 && <ShieldCheck className="w-8 h-8 text-white" />}
                    </div>
                  </div>
                  <div className={`text-center mt-3 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {stage}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Processing Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg"
        >
          <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <FileText className="w-6 h-6 mr-2 text-[#a1251b]" />
            Verarbeitungsverzeichnis
          </h3>
          
          <div className="space-y-4">
            {processingActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} border border-gray-200/20`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {activity.name}
                  </h4>
                  <span className={`text-sm px-2 py-1 rounded-full ${getRiskColor(activity.riskLevel)}`}>
                    {activity.riskLevel === 'low' ? 'Niedrig' : activity.riskLevel === 'medium' ? 'Mittel' : 'Hoch'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Aktualisiert: {new Date(activity.lastUpdated).toLocaleDateString('de-DE')}
                  </span>
                  <div className={`flex items-center space-x-1 ${getStatusColor(activity.status)}`}>
                    {activity.status === 'compliant' && <CheckCircle className="w-4 h-4" />}
                    {activity.status === 'review' && <AlertCircle className="w-4 h-4" />}
                    {activity.status === 'action-required' && <AlertCircle className="w-4 h-4" />}
                    <span className="text-sm capitalize">
                      {activity.status === 'compliant' ? 'Konform' : 
                       activity.status === 'review' ? 'Überprüfung' : 
                       'Handlung erforderlich'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Subject Requests */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg"
        >
          <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <Users className="w-6 h-6 mr-2 text-[#a1251b]" />
            Betroffenenanfragen
          </h3>
          
          <div className="space-y-4">
            {dataRequests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ x: -10 }}
                className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} border border-gray-200/20`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getRequestTypeIcon(request.type)}
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {request.requester}
                    </h4>
                  </div>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    request.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    request.status === 'processing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {request.status === 'completed' ? 'Abgeschlossen' :
                     request.status === 'processing' ? 'In Bearbeitung' :
                     'Ausstehend'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {request.type === 'access' ? 'Auskunft' :
                     request.type === 'deletion' ? 'Löschung' :
                     request.type === 'portability' ? 'Übertragbarkeit' :
                     'Berichtigung'}
                  </span>
                  {request.daysRemaining > 0 && (
                    <span className={`text-sm ${request.daysRemaining < 10 ? 'text-red-500' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {request.daysRemaining} Tage verbleibend
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating action buttons */}
      <AnimatePresence>
        {selectedSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedSection(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="backdrop-blur-xl bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-2xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {selectedSection}
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Detaillierte Informationen zu {selectedSection} werden hier angezeigt.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-[#a1251b] text-white rounded-lg font-medium shadow-lg"
                onClick={() => setSelectedSection(null)}
              >
                Schließen
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DsgvoComplianceDashboard;