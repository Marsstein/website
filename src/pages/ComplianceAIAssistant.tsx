import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Trophy,
  AlertTriangle,
  Target,
  Clock,
  Users,
  Building2,
  Eye,
  Lock,
  Globe,
  Sparkles,
  PlayCircle,
  Download,
  Star,
  Rocket,
  Settings,
  BarChart3,
  Zap,
  Award,
  TrendingUp,
  ChevronRight,
  Phone,
  Calendar,
  Mail,
  Brain,
  Search,
  FileText,
  UserCheck,
  ShieldCheck,
  BadgeCheck,
  Gavel,
  AlertOctagon,
  TrendingDown,
  XCircle,
  DollarSign,
  Medal,
  Gamepad2,
  Crown,
  Gauge,
  Gem,
  PieChart,
  BarChart4,
  LineChart,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowUp,
  ArrowDown,
  Scale,
  Euro,
  Percent,
  FileCheck,
  Activity,
  Coins,
  Wallet,
  RefreshCw,
  Repeat,
  TrendingUp as TrendUp,
  Gift,
  Hash,
  Link2,
  Key,
  Banknote,
  MessageCircle,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Send,
  Bot,
  Headphones,
  Smartphone,
  Monitor,
  Watch,
  Cpu,
  Wifi
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ComplianceAIAssistant = () => {
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [responseTime, setResponseTime] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (isHeroInView) {
      const timer = setTimeout(() => {
        const interval1 = setInterval(() => {
          setQuestionsAnswered((prev) => {
            if (prev >= 284752) {
              clearInterval(interval1);
              return 284752;
            }
            return prev + 5600;
          });
        }, 30);

        const interval2 = setInterval(() => {
          setAccuracy((prev) => {
            if (prev >= 97.8) {
              clearInterval(interval2);
              return 97.8;
            }
            return prev + 0.2;
          });
        }, 50);

        const interval3 = setInterval(() => {
          setResponseTime((prev) => {
            if (prev >= 1.3) {
              clearInterval(interval3);
              return 1.3;
            }
            return prev + 0.03;
          });
        }, 40);

        const interval4 = setInterval(() => {
          setActiveUsers((prev) => {
            if (prev >= 12847) {
              clearInterval(interval4);
              return 12847;
            }
            return prev + 250;
          });
        }, 30);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isHeroInView]);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // AI Capabilities
  const aiCapabilities = [
    {
      icon: MessageCircle,
      title: "Natural Language Understanding",
      description: "Verstehe komplexe DSGVO-Fragen in natürlicher Sprache",
      accuracy: "97.8%",
      examples: [
        "Darf ich Kundendaten nach USA übertragen?",
        "Wie lange darf ich Bewerberdaten speichern?",
        "Benötige ich ein Verarbeitungsverzeichnis?"
      ]
    },
    {
      icon: Brain,
      title: "Contextual Analysis",
      description: "Analysiert Kontext und Branche für präzise Antworten",
      accuracy: "94.2%",
      examples: [
        "Branchenspezifische Compliance-Anforderungen",
        "Risikobewertung basierend auf Unternehmensgröße",
        "Relevante Rechtsgrundlagen identifizieren"
      ]
    },
    {
      icon: FileCheck,
      title: "Document Processing",
      description: "Scannt und analysiert Dokumente auf DSGVO-Compliance",
      accuracy: "96.1%",
      examples: [
        "Datenschutzerklärungen prüfen",
        "Verträge auf AVV-Klauseln scannen",
        "Cookie-Banner Compliance checken"
      ]
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Immer aktuell mit neuesten Gesetzen und Urteilen",
      accuracy: "99.9%",
      examples: [
        "EuGH Urteile automatisch einarbeiten",
        "Neue Aufsichtsbehörden-Leitlinien",
        "Aktuelle Bußgeld-Entwicklungen"
      ]
    }
  ];

  // Conversation Examples
  const conversationExamples = [
    {
      user: "Alexa, darf ich Kundendaten für Marketing nutzen?",
      ai: "Das hängt von der Rechtsgrundlage ab. Für Marketing benötigen Sie in der Regel eine ausdrückliche Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Bei bestehenden Kunden können Sie auch das berechtigte Interesse nach Art. 6 Abs. 1 lit. f DSGVO prüfen, müssen dann aber eine Interessenabwägung durchführen.",
      followUp: "Möchten Sie eine Vorlage für die Interessenabwägung?"
    },
    {
      user: "Hey Google, wie lange Bewerberdaten aufbewahren?",
      ai: "Nach einer Absage sollten Bewerberdaten grundsätzlich nach 6 Monaten gelöscht werden, es sei denn der Bewerber stimmt einer längeren Speicherung zu. Bei erfolgreichen Bewerbern beginnt die reguläre Aufbewahrungsfrist als Personaldaten.",
      followUp: "Soll ich Ihnen ein Löschkonzept für Bewerberdaten erstellen?"
    },
    {
      user: "Siri, ist unser Cookie-Banner DSGVO-konform?",
      ai: "Ich kann Ihren Cookie-Banner analysieren. Dafür benötige ich die URL oder einen Screenshot. Wichtige Punkte: Opt-in vor Tracking, granulare Auswahl, einfacher Widerruf und keine Benachteiligung bei Ablehnung.",
      followUp: "Möchten Sie mir die URL Ihrer Website mitteilen?"
    }
  ];

  // Voice Platforms
  const voicePlatforms = [
    { name: "Amazon Alexa", icon: "🔊", users: "45.2M", feature: "DSGVO Skill verfügbar" },
    { name: "Google Assistant", icon: "🎤", users: "38.7M", feature: "Compliance Action" },
    { name: "Apple Siri", icon: "📱", users: "28.3M", feature: "Shortcuts Integration" },
    { name: "Microsoft Cortana", icon: "💻", users: "12.1M", feature: "Business Integration" }
  ];


  // Demo Chat Messages
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai',
      message: 'Hallo! Ich bin Ihr DSGVO AI Assistant. Fragen Sie mich alles zum Datenschutz.',
      timestamp: new Date(Date.now() - 60000).toLocaleTimeString()
    }
  ]);

  const demoQuestions = [
    "Darf ich Newsletter ohne Opt-in versenden?",
    "Wie erstelle ich ein Verarbeitungsverzeichnis?",
    "Welche Bußgelder drohen bei Verstößen?",
    "Brauche ich einen Datenschutzbeauftragten?"
  ];

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setChatMessages(prev => [...prev, {
      type: 'user',
      message: message,
      timestamp: new Date().toLocaleTimeString()
    }]);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        "Darf ich Newsletter ohne Opt-in versenden?": "Nein, für Newsletter benötigen Sie eine ausdrückliche Einwilligung (Double-Opt-In) nach Art. 6 Abs. 1 lit. a DSGVO. Ausnahme: Bei bestehenden Kunden für ähnliche Produkte nach § 7 Abs. 3 UWG.",
        "Wie erstelle ich ein Verarbeitungsverzeichnis?": "Ein Verarbeitungsverzeichnis nach Art. 30 DSGVO muss folgende Angaben enthalten: Zwecke, Kategorien personenbezogener Daten, Kategorien von Empfängern, Übermittlungen in Drittländer und Löschfristen. Ich kann Ihnen eine Vorlage erstellen.",
        "Welche Bußgelder drohen bei Verstößen?": "DSGVO-Bußgelder können bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes betragen. Die Höhe hängt von Schwere, Vorsatz, Unternehmensgröße und Kooperationsbereitschaft ab.",
        "Brauche ich einen Datenschutzbeauftragten?": "Ja, wenn Sie regelmäßig personenbezogene Daten verarbeiten und mind. 20 Personen damit beschäftigt sind, oder wenn Kerntätigkeit in umfangreicher Verarbeitung besonderer Kategorien besteht (Art. 37 DSGVO)."
      };

      setChatMessages(prev => [...prev, {
        type: 'ai',
        message: responses[message] || "Das ist eine interessante Frage! Lassen Sie mich das für Sie recherchieren und Ihnen eine präzise, rechtssichere Antwort geben basierend auf aktueller DSGVO-Rechtsprechung.",
        timestamp: new Date().toLocaleTimeString()
      }]);
    }, 1500);

    setCurrentMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40" />
          <motion.div
            className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* AI Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 30a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM6 6h12v12H6V6zm24 24h12v12H30V30zM6 30h12v12H6V30zm24-24h12v12H30V6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Bot className="w-6 h-6 text-blue-400" />
              <span className="text-blue-100 font-medium">AI-Powered Legal Assistant</span>
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30">
                VOICE
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Compliance
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                AI Assistant
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              "Alexa, darf ich diese Kundendaten nach USA senden?" 
              <br className="hidden md:block" />
              Instant Compliance-Beratung durch Voice AI. 24/7 verfügbar.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg"
                className="px-8 py-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-lg group"
                onClick={() => setIsListening(!isListening)}
              >
                {isListening ? <MicOff className="w-6 h-6 mr-3" /> : <Mic className="w-6 h-6 mr-3" />}
                {isListening ? 'Stop Listening' : 'Try Voice Demo'}
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 text-lg"
              >
                <Download className="w-6 h-6 mr-3" />
                Alexa Skill installieren
              </Button>
            </motion.div>
            
            {/* Live AI Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{questionsAnswered.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Fragen beantwortet</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{accuracy}%</div>
                <div className="text-sm text-gray-400">Genauigkeit</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{responseTime}s</div>
                <div className="text-sm text-gray-400">Antwortzeit</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{activeUsers.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* AI Capabilities */}
      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
              <Brain className="w-4 h-4 mr-2" />
              AI Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Künstliche Intelligenz trifft Rechtsexpertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Unser AI-System wurde mit 50.000+ DSGVO-Fällen und aktueller Rechtsprechung trainiert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl">
                    <capability.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {capability.accuracy} Accuracy
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Beispiele:</h4>
                  {capability.examples.map((example, idx) => (
                    <div key={idx} lass="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Chat */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2">
              <PlayCircle className="w-4 h-4 mr-2" />
              Live Demo
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Testen Sie den AI Assistant
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Probieren Sie echte DSGVO-Fragen aus und erleben Sie die Antwort-Qualität
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Chat Interface */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500 rounded-full">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">DSGVO AI Assistant</h3>
                <div className="flex items-center gap-1 ml-auto">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto mb-4 space-y-4 bg-gray-900/30 rounded-xl p-4">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "flex",
                      msg.type === 'user' ? 'justify-end' : 'justify-start'
                    )}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className={cn(
                      "max-w-xs lg:max-w-md px-4 py-2 rounded-2xl",
                      msg.type === 'user' 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-700 text-gray-100"
                    )}>
                      <p className="text-sm">{msg.message}</p>
                      <div className="text-xs opacity-70 mt-1">{msg.timestamp}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Häufige Fragen:</div>
                <div className="flex flex-wrap gap-2">
                  {demoQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs border-gray-600 text-gray-300 hover:bg-gray-700"
                      onClick={() => handleSendMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Stellen Sie Ihre DSGVO-Frage..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(currentMessage)}
                  className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <Button 
                  onClick={() => setIsListening(!isListening)}
                  className={cn(
                    "px-4 py-3 rounded-xl",
                    isListening ? "bg-red-500 hover:bg-red-600" : "bg-gray-600 hover:bg-gray-500"
                  )}
                >
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </Button>
                <Button 
                  onClick={() => handleSendMessage(currentMessage)}
                  className="px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Voice Platforms */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <Volume2 className="w-8 h-8 text-green-400" />
                    Voice Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {voicePlatforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{platform.icon}</div>
                        <div>
                          <div className="font-bold text-white">{platform.name}</div>
                          <div className="text-sm text-gray-400">{platform.users} Users</div>
                        </div>
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {platform.feature}
                      </Badge>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Conversation Examples */}
              <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-500/30 p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <MessageCircle className="w-8 h-8 text-blue-400" />
                    Conversation Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {conversationExamples.slice(0, 1).map((conv, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-white/10 rounded-full">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 p-3 bg-white/10 rounded-xl">
                            <p className="text-white text-sm">{conv.user}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-500 rounded-full">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 p-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
                            <p className="text-gray-200 text-sm mb-2">{conv.ai}</p>
                            <p className="text-blue-300 text-xs italic">{conv.followUp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-black/40">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              <Settings className="w-4 h-4 mr-2" />
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mehr als nur Fragen & Antworten
            </h2>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Smartphone, title: "Multi-Platform", desc: "Verfügbar auf allen Geräten und Plattformen" },
              { icon: Shield, title: "Datenschutz by Design", desc: "Ihre Fragen werden nicht gespeichert oder analysiert" },
              { icon: Globe, title: "Mehrsprachig", desc: "Deutsch, Englisch, Französisch und weitere Sprachen" },
              { icon: Clock, title: "24/7 Verfügbar", desc: "Rund um die Uhr verfügbar, keine Wartezeiten" },
              { icon: FileCheck, title: "Document Review", desc: "Automatische Analyse von Verträgen und Dokumenten" },
              { icon: Users, title: "Team Integration", desc: "Für ganze Teams und Abteilungen verfügbar" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Starten Sie noch heute
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              "Alexa, installiere DSGVO Assistant" - In 2 Minuten einsatzbereit. 
              Keine Verträge, keine Verpflichtungen, 14 Tage kostenlos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <Button
                size="lg"
                className="px-8 py-6 bg-white text-indigo-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
              >
                <Bot className="w-6 h-6 mr-3" />
                14 Tage kostenlos testen
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 bg-indigo-600/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-indigo-600/30 transition-all duration-300 border-white/30 text-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                Demo Call buchen
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-100">
              <div className="flex flex-col items-center space-y-2">
                <MessageCircle className="w-8 h-8" />
                <span className="text-sm">284k+ Fragen</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Target className="w-8 h-8" />
                <span className="text-sm">97.8% Genauigkeit</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Zap className="w-8 h-8" />
                <span className="text-sm">1.3s Antwortzeit</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Users className="w-8 h-8" />
                <span className="text-sm">12k+ Users</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceAIAssistant;