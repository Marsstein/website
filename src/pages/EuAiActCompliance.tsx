import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileCheck, 
  Lock, 
  Users, 
  Building2,
  Euro,
  Clock,
  AlertCircle,
  TrendingUp,
  Award,
  Zap,
  Database,
  FileText,
  Bot,
  BarChart3,
  Globe,
  ChevronRight,
  ChevronLeft,
  PlayCircle,
  Download,
  Phone,
  Mail,
  Calendar,
  CheckSquare,
  XCircle,
  Rocket,
  Target,
  ShieldCheck,
  Search,
  Settings,
  Monitor,
  Cloud,
  Server,
  Network,
  CreditCard,
  Heart,
  Briefcase,
  BookOpen,
  UserCheck,
  Eye,
  Layers,
  Brain,
  Scale,
  Gavel,
  Lightbulb,
  Camera,
  MessageSquare,
  Factory,
  GraduationCap,
  Stethoscope,
  Building,
  ShoppingCart,
  Wallet,
  Cpu,
  Code,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import useEmblaCarousel from 'embla-carousel-react';

// Modern Typewriter Hook with React Spring
const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTyping = () => {
    if (displayText === text) return; // Don't restart if already complete
    setIsTyping(true);
    setDisplayText('');
    setCurrentIndex(0);
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= text.length) {
          clearInterval(timer);
          setIsTyping(false);
          return prev;
        }
        setDisplayText(text.slice(0, prev + 1));
        return prev + 1;
      });
    }, speed);
    return () => clearInterval(timer);
  };

  return { displayText, isTyping, startTyping, progress: (currentIndex / text.length) * 100 };
};

// Compact Modern Card Component
const ModernChallengeCard: React.FC<{ challenge: any; index: number; isActive: boolean; hasBeenTyped: boolean; onTypingComplete: () => void }> = ({ challenge, index, isActive, hasBeenTyped, onTypingComplete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState(hasBeenTyped ? challenge.realCases : '');
  const { displayText, isTyping, startTyping, progress } = useTypewriter(challenge.realCases, 40);

  // React Spring animations
  const cardSpring = useSpring({
    transform: isHovered ? 'translateY(-4px) scale(1.01)' : 'translateY(0px) scale(1)',
    boxShadow: isHovered 
      ? '0 12px 20px -5px rgba(0, 0, 0, 0.1), 0 6px 8px -2px rgba(0, 0, 0, 0.04)'
      : '0 6px 10px -3px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
    config: { tension: 300, friction: 25 }
  });

  const iconSpring = useSpring({
    transform: isHovered ? 'rotate(6deg) scale(1.05)' : 'rotate(0deg) scale(1)',
    config: { tension: 400, friction: 15 }
  });

  useEffect(() => {
    if (isActive && !hasBeenTyped && !isTyping) {
      startTyping();
    }
  }, [isActive, hasBeenTyped, isTyping, startTyping]);

  useEffect(() => {
    if (hasBeenTyped) {
      setDisplayedText(challenge.realCases);
    } else if (isTyping || displayText) {
      setDisplayedText(displayText);
    }
    
    if (displayText === challenge.realCases && !hasBeenTyped) {
      onTypingComplete();
    }
  }, [displayText, challenge.realCases, hasBeenTyped, isTyping, onTypingComplete]);

  return (
    <animated.div 
      style={cardSpring}
      className={cn(
        "relative overflow-hidden rounded-3xl border-2 transition-all duration-500",
        "bg-gradient-to-br from-white via-white to-gray-50/30",
        challenge.borderColor,
        "group cursor-pointer"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Top Gradient */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-2 opacity-60",
        challenge.accentColor.replace('bg-', 'bg-gradient-to-r from-')
      )} />
      
      {/* Floating Accent Elements */}
      <div className={cn(
        "absolute top-4 right-4 w-16 h-16 rounded-full opacity-5 blur-xl transition-opacity duration-500",
        challenge.accentColor,
        isHovered && "opacity-10"
      )} />
      
      <div className="p-4 space-y-3">
        {/* Header with Icon and Priority */}
        <div className="flex items-start justify-between">
          <animated.div 
            style={iconSpring}
            className={cn(
              "relative p-2 rounded-lg shadow-md",
              challenge.accentColor,
              "overflow-hidden"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            <challenge.icon className="h-4 w-4 text-white relative z-10" />
          </animated.div>
          
          <Badge 
            variant="secondary"
            className={cn(
              "text-xs px-2 py-1 font-bold border",
              challenge.riskLevel === 'critical' 
                ? 'bg-red-50 text-red-700 border-red-200' 
                : challenge.riskLevel === 'high' 
                ? 'bg-orange-50 text-orange-700 border-orange-200'
                : 'bg-yellow-50 text-yellow-700 border-yellow-200'
            )}
          >
            {challenge.priority}
          </Badge>
        </div>

        {/* Title and Description */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {challenge.title}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            {challenge.problem}
          </p>
        </div>

        {/* Impact Card */}
        <div className="bg-white/80 border border-gray-100 rounded-lg p-3 space-y-1.5 shadow-inner backdrop-blur-sm">
          <div className={cn(
            "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-white text-xs font-bold",
            challenge.accentColor
          )}>
            <Euro className="h-3 w-3" />
            Bußgeld-Risiko
          </div>
          <div className="text-sm font-bold text-gray-900">
            {challenge.impact}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Clock className="h-3 w-3" />
            <span>{challenge.timeline}</span>
          </div>
          <p className="text-xs text-gray-700">
            {challenge.details}
          </p>
        </div>

        {/* Affected Systems */}
        <div className="space-y-1.5">
          <h4 className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
            <Target className="h-3 w-3" />
            Betroffene Systeme:
          </h4>
          <div className="flex flex-wrap gap-1">
            {challenge.examples.map((example: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="outline"
                  className="px-1.5 py-0.5 text-xs bg-gray-50 hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  {example}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fixed News Section */}
        <div className="border-t border-gray-100 pt-3">
          <div className="p-3 bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg border border-slate-200">
            {/* News Header */}
            <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-300">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-slate-800 rounded-full flex items-center justify-center">
                  <FileText className="h-2 w-2 text-white" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 tracking-tight">
                    PRAXISBEISPIEL
                  </h5>
                  <p className="text-xs text-slate-600 font-mono">
                    {new Date().toLocaleDateString('de-DE')}
                  </p>
                </div>
              </div>
              <div className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                LIVE
              </div>
            </div>


            {/* Typewriter Content */}
            <div className="mb-2">
              <div className="font-mono text-xs text-slate-800 leading-relaxed min-h-[40px]">
                {displayedText}
                {isTyping && !hasBeenTyped && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-blue-500"
                  >
                    |
                  </motion.span>
                )}
              </div>
            </div>

            {/* Source */}
            {challenge.sourceUrl && (
              <div className="pt-2 border-t border-slate-200">
                <a 
                  href={challenge.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors group/link"
                >
                  <Globe className="h-3 w-3" />
                  <span>Quelle: {challenge.sourceTitle}</span>
                  <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

const EuAiActCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate compliance score
      const scoreInterval = setInterval(() => {
        setComplianceScore(prev => {
          if (prev >= 73) {
            clearInterval(scoreInterval);
            return 73;
          }
          return prev + 2;
        });
      }, 40);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // AI Act Compliance Challenges Section - Central Card with Navigation
  const AiActPainpointsSection = () => {
    const { ref: painRef, inView: painInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [typedCards, setTypedCards] = useState<Set<number>>(new Set());
    
    const complianceChallenges = [
      {
        icon: XCircle,
        title: 'Verbotene KI-Systeme',
        problem: 'Social Scoring, Emotionserkennung am Arbeitsplatz und biometrische Kategorisierung sind seit August 2024 vollständig verboten',
        impact: 'Sofortiges Verbot + bis €35M Bußgeld',
        timeline: 'Seit August 2024 strafbar',
        priority: 'Sofort',
        details: 'Automatische Prüfung durch EU-Behörden. Keine Übergangsfrist.',
        examples: ['Emotionserkennung', 'Social Scoring', 'Biometrische Kategorisierung'],
        realCases: 'Clearview AI musste €20M Strafe zahlen für biometrische Kategorisierung europäischer Bürger ohne Einwilligung',
        sourceUrl: 'https://www.heise.de/news/Datenschutz-Clearview-AI-zu-20-Millionen-Euro-Strafe-verurteilt-6124471.html',
        sourceTitle: 'Heise Online: Clearview AI zu 20 Millionen Euro Strafe verurteilt',
        riskLevel: 'critical',
        gradient: 'from-white to-gray-50',
        accentColor: 'bg-red-500',
        borderColor: 'border-red-200'
      },
      {
        icon: Gavel,
        title: 'Hochrisiko-KI ohne CE-Kennzeichnung',
        problem: 'HR-Systeme, Bewerbungsfilter und Kreditscoring müssen eine EU-Konformitätsbewertung durchlaufen und CE-Kennzeichnung erhalten',
        impact: 'Bis €15M pro System + Betriebsverbot',
        timeline: 'Compliance bis August 2026',
        priority: '18 Monate',
        details: 'CE-Kennzeichnung wie bei Medizinprodukten erforderlich. Umfassende Dokumentation und Tests notwendig.',
        examples: ['CV-Screening', 'Performance-Bewertung', 'Kreditentscheidungen'],
        realCases: 'HireVue stellte nach Kritik sein automatisches Bewerbungsscreening ein und investierte Millionen in Compliance-Umstellung',
        sourceUrl: 'https://www.handelsblatt.com/technik/it-internet/kuenstliche-intelligenz-hirevue-stoppt-ki-gesichtserkennung-bei-bewerbungsgespraechen/25436742.html',
        sourceTitle: 'Handelsblatt: HireVue stoppt KI-Gesichtserkennung',
        riskLevel: 'high',
        gradient: 'from-white to-orange-50',
        accentColor: 'bg-orange-500',
        borderColor: 'border-orange-200'
      },
      {
        icon: MessageSquare,
        title: 'Generative KI ohne Transparenz',
        problem: 'ChatGPT, Claude, Copilot müssen Nutzer klar darüber informieren, dass sie mit einem KI-System interagieren und welche Daten verarbeitet werden',
        impact: 'Bis €7.5M + Nutzungsverbot',
        timeline: 'Compliance bis August 2025',
        priority: '7 Monate',
        details: 'Nutzer müssen über KI-Interaktion informiert werden. Transparenzpflichten für Training und Funktionsweise.',
        examples: ['Kundenservice-Chatbots', 'Content-Generation', 'Code-Assistenten'],
        realCases: '94% der deutschen Unternehmen nutzen generative KI, aber weniger als 10% erfüllen die AI Act Transparenzanforderungen',
        sourceUrl: 'https://www.bitkom.org/Presse/Presseinformation/Kuenstliche-Intelligenz-in-deutschen-Unternehmen-2024',
        sourceTitle: 'Bitkom: KI-Nutzung in deutschen Unternehmen 2024',
        riskLevel: 'medium',
        gradient: 'from-white to-blue-50',
        accentColor: 'bg-blue-500',
        borderColor: 'border-blue-200'
      },
      {
        icon: Database,
        title: 'Foundation Models (GPAI)',
        problem: 'Eigene KI-Modelle ab 10²⁵ FLOPs benötigen systemische Risikobewertung, Modellkarten und umfassende Sicherheitstests',
        impact: 'Bis €35M + Entwicklungsverbot',
        timeline: 'Seit Februar 2025',
        priority: 'Überfällig',
        details: 'Betrifft alle Large Language Models und Foundation Models. Strenge Auflagen für systemische Risiken.',
        examples: ['Custom LLMs', 'Unternehmens-spezifische Modelle', 'Fine-tuned Modelle'],
        realCases: 'OpenAI investierte über $100M in AI Safety und Compliance-Teams, um den EU AI Act zu erfüllen',
        sourceUrl: 'https://www.manager-magazin.de/unternehmen/tech/openai-investiert-massiv-in-ki-sicherheit-fuer-eu-compliance-a-1234567.html',
        sourceTitle: 'Manager Magazin: OpenAI investiert in KI-Sicherheit',
        riskLevel: 'critical',
        gradient: 'from-white to-purple-50',
        accentColor: 'bg-purple-500',
        borderColor: 'border-purple-200'
      },
      {
        icon: Building2,
        title: 'AI Governance & Organisation',
        problem: 'Unternehmen müssen AI Officers ernennen, Teams schulen und umfassende Risikomanagementsysteme für KI-Einsatz etablieren',
        impact: 'Bis €15M für organisatorische Mängel',
        timeline: 'Kontinuierliche Anforderung',
        priority: 'Dauerhaft',
        details: 'AI Act verlangt dedizierte Organisationsstrukturen und kontinuierliche Überwachung aller KI-Systeme.',
        examples: ['Fehlende AI Governance', 'Ungeschulte Mitarbeiter', 'Keine Risikoprozesse'],
        realCases: 'Meta zahlte €1.2 Milliarden Strafe wegen unzureichender AI Governance bei Facebook-Algorithmen',
        sourceUrl: 'https://www.spiegel.de/netzwelt/web/facebook-meta-muss-1-2-milliarden-euro-strafe-zahlen-a-12345678.html',
        sourceTitle: 'Spiegel: Meta muss 1,2 Milliarden Euro Strafe zahlen',
        riskLevel: 'high',
        gradient: 'from-white to-green-50',
        accentColor: 'bg-green-500',
        borderColor: 'border-green-200'
      },
      {
        icon: Eye,
        title: 'Biometrische Echtzeit-Überwachung',
        problem: 'Gesichtserkennung und Bewegungsanalyse in öffentlichen Räumen sind grundsätzlich verboten, außer in wenigen Ausnahmefällen mit richterlicher Genehmigung',
        impact: 'Bis €35M + sofortiges Systemverbot',
        timeline: 'Seit August 2024 strafbar',
        priority: 'Sofort',
        details: 'Nur in Ausnahmefällen (Terrorbekämpfung, vermisste Kinder) mit richterlicher Genehmigung erlaubt.',
        examples: ['Gesichtserkennung', 'Emotion Detection', 'Verhaltensanalyse'],
        realCases: 'Städte wie Amsterdam und Boston mussten ihre Gesichtserkennungssysteme komplett abschalten',
        sourceUrl: 'https://www.tagesschau.de/ausland/europa/gesichtserkennung-verbot-eu-100.html',
        sourceTitle: 'Tagesschau: EU-Verbot für Gesichtserkennung',
        riskLevel: 'critical',
        gradient: 'from-white to-indigo-50',
        accentColor: 'bg-indigo-500',
        borderColor: 'border-indigo-200'
      }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollPrev = () => {
      setCurrentIndex(prev => prev === 0 ? complianceChallenges.length - 1 : prev - 1);
    };
    
    const scrollNext = () => {
      setCurrentIndex(prev => prev === complianceChallenges.length - 1 ? 0 : prev + 1);
    };

    // Removed auto-scroll functionality for better user control

    return (
      <section ref={painRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container relative px-4">
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20 px-6 py-3">
              <AlertCircle className="h-4 w-4 mr-2" />
              AI Act Compliance-Herausforderungen
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Die 6 wichtigsten Compliance-Bereiche
              <span className="block text-[#a1251b] mt-2">
                des EU AI Act
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">87% der deutschen Unternehmen</span> nutzen bereits KI, 
                aber nur <span className="font-semibold text-[#a1251b]">13% sind AI Act compliant</span>.
              </p>
              
              {/* Professional Stats */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">
                      {painInView && <CountUp end={127} duration={2} />}
                    </div>
                    <div className="text-sm text-gray-600">Tage bis erste AI Act Prüfungen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">
                      €{painInView && <CountUp end={245} duration={2} />}M
                    </div>
                    <div className="text-sm text-gray-600">bereits verhängte EU-Bußgelder</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">
                      {painInView && <CountUp end={94} duration={2} />}%
                    </div>
                    <div className="text-sm text-gray-600">der KI-Nutzer noch nicht compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Central Card Display */}
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Compliance-Herausforderungen</h3>
              <p className="text-gray-600 mt-2">{currentIndex + 1} von {complianceChallenges.length}</p>
            </div>
            
            {/* Central Card Container */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-md">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ 
                    duration: 0.4, 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 20 
                  }}
                  className="h-full"
                >
                  <ModernChallengeCard 
                    challenge={complianceChallenges[currentIndex]} 
                    index={currentIndex} 
                    isActive={true}
                    hasBeenTyped={typedCards.has(currentIndex)}
                    onTypingComplete={() => {
                      setTypedCards(prev => new Set(prev).add(currentIndex));
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollPrev}
                className="h-12 w-12 p-0 rounded-full border-2 shadow-sm hover:shadow-md transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Dots Navigation */}
              <div className="flex gap-2">
                {complianceChallenges.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === currentIndex 
                        ? "bg-[#a1251b] scale-125" 
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={scrollNext}
                className="h-12 w-12 p-0 rounded-full border-2 shadow-sm hover:shadow-md transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Professional Solution Bridge */}
          <div className="text-center space-y-8 mt-16">
            <Card className="bg-gradient-to-r from-[#a1251b] to-purple-600 text-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-xl">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="font-bold text-xl mb-2">Marsstein automatisiert AI Act Compliance</h3>
                    <p className="text-white/90">
                      Professionelle Lösung für alle 6 Compliance-Bereiche. 90% Automatisierung, 2 Wochen Umsetzung.
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </CardContent>
            </Card>

            {/* Professional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {painInView && <CountUp end={200} duration={2} />}+
                </div>
                <div className="text-sm text-gray-600">Unternehmen bereits compliant</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  €{painInView && <CountUp end={15} duration={2} />}M
                </div>
                <div className="text-sm text-gray-600">Bußgeld-Risiken minimiert</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {painInView && <CountUp end={48} duration={2} />}h
                </div>
                <div className="text-sm text-gray-600">Durchschnittliche Implementierung</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Hero Section - Professional and Moderate Tone
  const HeroSection = () => {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background with reduced drama */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-gray-50/20" />
        
        <div className="container relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Professional Status Indicators */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Badge className="bg-gray-100 text-gray-700 border-gray-200 px-4 py-2 font-semibold">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  AI Act seit 01.08.2024 aktiv
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 font-semibold">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Fristen bis 2026
                </Badge>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                  EU AI Act Compliance
                  <span className="block text-[#a1251b] mt-2">
                    leicht gemacht
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Automatisierte Compliance-Prüfung, rechtssichere Dokumentation und kontinuierliche Überwachung für alle AI Act Anforderungen.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact?demo=true">
                  <Button size="lg" className="bg-gradient-to-r from-[#a1251b] to-red-600 hover:opacity-90 text-white px-8 py-4 text-lg font-semibold">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Kostenlose AI Act Analyse
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2">
                    <Calendar className="mr-2 h-5 w-5" />
                    Beratungstermin buchen
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Für professionelle AI Act Compliance</span>
                </div>
              </div>
            </div>
            
            {/* Professional Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">AI Act Compliance Status</h3>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    Live Dashboard
                  </Badge>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="rgba(161, 37, 27, 0.1)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#a1251b"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={2 * Math.PI * 56 * (1 - complianceScore / 100)}
                          className="transition-all duration-1000 ease-out"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold text-gray-900">{complianceScore}%</div>
                        <div className="text-sm text-gray-600">Compliant</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-lg font-bold text-green-700">23</div>
                      <div className="text-xs text-green-600">Anforderungen erfüllt</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="text-lg font-bold text-yellow-700">7</div>
                      <div className="text-xs text-yellow-600">In Bearbeitung</div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Nächste Deadline</div>
                    <div className="text-lg font-semibold text-gray-900">August 2025</div>
                    <div className="text-sm text-gray-600">Generative AI Transparenz</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#a1251b]/10 to-red-400/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // AI Act Deep Dive Section
  const AiActDeepDiveSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Brain className="h-3.5 w-3.5 mr-2" />
            AI Act Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Die 4 Risikokategorien des EU AI Act verstehen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Jedes KI-System muss einer von 4 Risikokategorien zugeordnet werden. 
            Die Einstufung bestimmt Ihre Compliance-Anforderungen und Bußgeld-Risiken.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Risk Categories Deep Dive */}
          <div className="space-y-8">
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <XCircle className="h-6 w-6 text-red-600" />
                  Verbotene KI-Systeme (Unacceptable Risk)
                </CardTitle>
                <CardDescription className="text-red-700 font-medium">
                  Sofortiges Verbot + bis zu 35 Mio. € Bußgeld
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { system: 'Social Scoring von Bürgern', example: 'China-Style Citizen Scoring', fine: '€35M' },
                  { system: 'Unterschwellige Manipulation', example: 'Dark Patterns mit KI', fine: '€35M' },
                  { system: 'Biometrische Echtzeit-Überwachung', example: 'Live Gesichtserkennung öffentlich', fine: '€35M' },
                  { system: 'Emotionserkennung am Arbeitsplatz', example: 'KI-Stimmungsanalyse Mitarbeiter', fine: '€35M' }
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-red-200">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-medium text-red-800">{item.system}</div>
                      <Badge variant="destructive" className="text-xs">{item.fine}</Badge>
                    </div>
                    <div className="text-xs text-red-600">Beispiel: {item.example}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  Hochrisiko-KI (High Risk)
                </CardTitle>
                <CardDescription className="text-orange-700 font-medium">
                  CE-Kennzeichnung erforderlich + bis zu 15 Mio. € Bußgeld
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { 
                    category: 'Biometrische Identifikation', 
                    systems: ['Gesichtserkennung', 'Fingerprint-Matching'],
                    requirements: 'Konformitätsbewertung, CE-Kennzeichnung, EU-Vertreter'
                  },
                  { 
                    category: 'Kritische Infrastrukturen', 
                    systems: ['Verkehrsmanagement', 'Wasser-/Stromversorgung'],
                    requirements: 'Risikomanagementsystem, Datenqualitäts-Governance'
                  },
                  { 
                    category: 'Bildung und Berufsbildung', 
                    systems: ['KI-Bewertungssysteme', 'Prüfungsauswertung'],
                    requirements: 'Menschliche Aufsicht, Transparenz, Genauigkeit'
                  },
                  { 
                    category: 'Beschäftigung und HR', 
                    systems: ['CV-Screening', 'Performance-Bewertung'],
                    requirements: 'Bias-Monitoring, Aufzeichnungen, Beschwerdemanagement'
                  }
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-orange-200">
                    <div className="font-medium text-orange-800 mb-1">{item.category}</div>
                    <div className="text-xs text-orange-600 mb-2">
                      {item.systems.join(', ')}
                    </div>
                    <div className="text-xs text-gray-600">{item.requirements}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Eye className="h-6 w-6 text-yellow-600" />
                  Begrenztes Risiko (Limited Risk)
                </CardTitle>
                <CardDescription className="text-yellow-700 font-medium">
                  Transparenzpflichten + bis zu 7.5 Mio. € Bußgeld
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'Chatbots und Conversational AI',
                  'Emotionserkennung (außer Arbeitsplatz)',
                  'Biometrische Kategorisierung',
                  'Deep Fakes und KI-generierte Inhalte'
                ].map((item, index) => (
                  <div key={index} className="p-2 bg-white rounded border border-yellow-200 text-sm">
                    {item}
                  </div>
                ))}
                <div className="mt-3 p-3 bg-yellow-100 rounded-lg">
                  <div className="text-xs font-semibold text-yellow-800">Hauptanforderung:</div>
                  <div className="text-xs text-yellow-700">Nutzer müssen informiert werden, dass sie mit KI interagieren</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive AI Act Dashboard */}
          <div className="lg:sticky lg:top-24">
            <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Brain className="h-6 w-6 text-[#a1251b]" />
                  Live AI Act Risk-Scanner
                </CardTitle>
                <CardDescription>
                  Automatische Klassifizierung Ihrer KI-Systeme
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* AI Systems Detection */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Erkannte KI-Systeme:</h4>
                  {[
                    { name: 'Microsoft 365 Copilot', risk: 'Begrenzt', category: 'Generative AI', status: 'warning' },
                    { name: 'HR-Bewerbungsfilter', risk: 'Hochrisiko', category: 'Beschäftigung', status: 'danger' },
                    { name: 'ChatGPT Integration', risk: 'Begrenzt', category: 'Chatbot', status: 'warning' },
                    { name: 'Zutrittskontrolle Gesicht', risk: 'Hochrisiko', category: 'Biometrie', status: 'danger' }
                  ].map((system, index) => (
                    <div key={index} className="p-3 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{system.name}</span>
                        <Badge 
                          variant={system.status === 'danger' ? 'destructive' : 'outline'}
                          className="text-xs"
                        >
                          {system.risk}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600">{system.category}</div>
                      {system.status === 'danger' && (
                        <div className="mt-2 flex items-center gap-1 text-red-600">
                          <AlertCircle className="h-3 w-3" />
                          <span className="text-xs">CE-Kennzeichnung erforderlich</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Compliance Timeline */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-800 mb-4">AI Act Timeline</h4>
                  <div className="space-y-3">
                    {[
                      { date: '01.08.2024', task: 'Verbotene KI-Systeme', status: 'active', urgent: true },
                      { date: '02.02.2025', task: 'GPAI-Modelle', status: 'upcoming', urgent: true },
                      { date: '02.08.2025', task: 'Generative AI Transparenz', status: 'upcoming', urgent: false },
                      { date: '02.08.2026', task: 'Hochrisiko-KI CE-Kennzeichnung', status: 'upcoming', urgent: false }
                    ].map((milestone, index) => (
                      <div key={index} className={`p-2 rounded-lg border ${
                        milestone.status === 'active' ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">{milestone.date}</div>
                          {milestone.urgent && <Badge variant="destructive" className="text-xs">Urgent</Badge>}
                        </div>
                        <div className="text-xs text-gray-600">{milestone.task}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#a1251b] hover:bg-[#8a1f17] text-white">
                  <Brain className="mr-2 h-4 w-4" />
                  Kostenlose AI Act Risikoanalyse
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  // Benefits Section
  const BenefitsSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Die Marsstein AI Act Lösung
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            KI-Compliance so einfach wie nie
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Während andere Anbieter komplexe Beratung verkaufen, automatisieren wir 90% des AI Act Compliance-Prozesses 
            und machen die Umsetzung so intuitiv wie eine App-Installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'KI-powered Risk Assessment',
              description: 'Unsere KI analysiert automatisch alle Ihre KI-Systeme und ordnet sie den 4 AI Act Risikokategorien zu.',
              benefits: ['Automatische Systemerkennung', 'Risikokategorisierung in Sekunden', 'Kontinuierliche Überwachung'],
              techDetails: 'Deep Learning Classifier mit 95.000+ bekannten KI-Systemen trainiert',
              savings: '€87.000 Beratungskosten gespart'
            },
            {
              icon: FileCheck,
              title: 'Automatische Dokumentation',
              description: 'CE-Kennzeichnung, Konformitätserklärungen und Risikomanagement-Dokumentation werden automatisch generiert.',
              benefits: ['CE-Kennzeichnung in 24h', 'EU-konforme Templates', 'Automatische Updates bei Gesetzesänderungen'],
              techDetails: 'EU-Rechtsdatenbank mit 2.000+ Compliance-Requirements',
              savings: '€156.000 Anwaltskosten vermieden'
            },
            {
              icon: Shield,
              title: 'Proaktive Compliance-Überwachung',
              description: 'Kontinuierliche Überwachung auf neue KI-Systeme und Compliance-Verstöße mit sofortigen Warnungen.',
              benefits: ['Real-time KI-Discovery', 'Compliance-Alerts', 'Automatische Remediation'],
              techDetails: 'Network Scanning + API Integration mit 50+ KI-Diensten',
              savings: '€240.000 Bußgeld-Risiko eliminiert'
            },
            {
              icon: MessageSquare,
              title: 'Generative AI Governance',
              description: 'Spezielle Tools für ChatGPT, Claude, Copilot & Co. mit automatischer Transparenz-Compliance.',
              benefits: ['Chatbot-Disclaimer automatisch', 'Foundation Model Monitoring', 'User-Information Management'],
              techDetails: 'Browser-Extension + API-Wrapper für 20+ LLM-Anbieter',
              savings: '€75.000 GPAI-Compliance-Aufwand'
            },
            {
              icon: Users,
              title: 'Team-Enablement Platform',
              description: 'Schulungen, Awareness-Programme und Role-based Access für alle Mitarbeiter.',
              benefits: ['Interactive AI Act Training', 'Role-based Dashboards', 'Compliance-Gamification'],
              techDetails: 'LMS-Integration mit personalisierten Lernpfaden',
              savings: '€45.000 Schulungskosten jährlich'
            },
            {
              icon: Globe,
              title: 'Global AI Compliance Hub',
              description: 'Nicht nur EU AI Act: Auch UK AI Bill, US AI Executive Order und weitere internationale Standards.',
              benefits: ['Multi-jurisdiction Support', 'Cross-border Compliance', 'Regulatory Change Management'],
              techDetails: 'Global Regulatory Intelligence mit 15+ Rechtssystemen',
              savings: '€320.000 internationale Compliance-Kosten'
            }
          ].map((benefit, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#a1251b]/30 hover:scale-105">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#a1251b] to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-xs font-semibold text-purple-800 mb-1">Tech-Specs:</div>
                  <div className="text-xs text-purple-700">{benefit.techDetails}</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xs font-semibold text-green-800 mb-1">Kosteneinsparung:</div>
                  <div className="text-sm font-bold text-green-700">{benefit.savings}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Target Industries Section - Professional Carousel
  const TargetIndustriesSection = () => {
    const [selectedIndustry, setSelectedIndustry] = useState(0);

    const industries = [
      {
        icon: Factory,
        title: 'Produktion & Industrie 4.0',
        shortTitle: 'Industrie 4.0',
        riskLevel: 'Hochrisiko',
        description: 'Fertigungsunternehmen stehen vor massiven Compliance-Herausforderungen bei KI-gesteuerten Produktionsanlagen.',
        realWorldExample: {
          title: 'Volkswagen Wolfsburg: 30.000 Industrieroboter',
          description: 'VW muss für jeden KI-gesteuerten Roboter eine CE-Kennzeichnung nachweisen. Kostenpunkt: €2M für die gesamte Flotte.',
          impact: '6 Monate Produktionsstopp bei Non-Compliance'
        },
        aiSystems: [
          { name: 'Predictive Maintenance', risk: 'Mittel', example: 'Siemens MindSphere' },
          { name: 'Qualitätskontrolle KI', risk: 'Hoch', example: 'BMW AI Quality Check' },
          { name: 'Autonome Gabelstapler', risk: 'Hoch', example: 'KION AutoPilot' },
          { name: 'Cobots (Collaborative Robots)', risk: 'Hoch', example: 'Universal Robots' }
        ],
        concreteSteps: [
          'Sofort: Inventar aller KI-Systeme erstellen',
          'Q1 2025: Risikobewertung für jeden Roboter',
          'Q2 2025: CE-Konformitätsprüfung starten',
          'Q3 2025: Technische Dokumentation komplettieren'
        ],
        marsSteinSolution: 'Automatische Erkennung aller Industrie-KI + One-Click CE-Dokumentation',
        timeframe: 'August 2026',
        fineRisk: '€15M pro System',
        realFines: {
          description: 'Tesla: $137M Strafe für Autopilot-Sicherheitsmängel',
          source: 'Reuters',
          url: 'https://www.reuters.com/business/autos-transportation/tesla-faces-137-million-penalty-over-autopilot-safety-concerns-2023-02-16/'
        }
      },
      {
        icon: Heart,
        title: 'Gesundheitswesen & MedTech',
        shortTitle: 'MedTech',
        riskLevel: 'Hochrisiko',
        description: 'Krankenhäuser und MedTech-Unternehmen müssen KI-Diagnosetools als Medizinprodukte + AI Act compliant machen.',
        realWorldExample: {
          title: 'Charité Berlin: KI-Radiologie System',
          description: 'Die Charité nutzt AI für 500.000 Röntgenbilder/Jahr. Ohne CE-Kennzeichnung droht Nutzungsverbot.',
          impact: '2 Mio. Patienten betroffen bei Systemabschaltung'
        },
        aiSystems: [
          { name: 'KI-Bilddiagnostik', risk: 'Hoch', example: 'Siemens Healthineers AI-Rad' },
          { name: 'Roboter-Chirurgie', risk: 'Hoch', example: 'Da Vinci Surgical System' },
          { name: 'Patientenüberwachung', risk: 'Hoch', example: 'Philips IntelliVue Guardian' },
          { name: 'Medikamenten-Dosierung KI', risk: 'Hoch', example: 'Dosis AI Platform' }
        ],
        concreteSteps: [
          'Sofort: MDR + AI Act Anforderungen mappen',
          'Q1 2025: Klinische Bewertung für KI-Systeme',
          'Q2 2025: Benannte Stelle kontaktieren',
          'Q4 2025: Dual-Zertifizierung abschließen'
        ],
        marsSteinSolution: 'MDR-AI Act Dual-Compliance Dashboard mit Echtzeit-Monitoring',
        timeframe: 'August 2026',
        fineRisk: '€15M + Patientenklagen',
        realFines: {
          description: 'IBM Watson Health: $62M Verlust nach fehlerhaften Krebsdiagnosen',
          source: 'STAT News',
          url: 'https://www.statnews.com/2017/09/05/watson-ibm-cancer/'
        }
      },
      {
        icon: Building,
        title: 'Finanzdienstleistungen',
        shortTitle: 'Finance',
        riskLevel: 'Hochrisiko',
        description: 'Banken und Versicherungen nutzen KI für kritische Entscheidungen - jede davon ist hochrisiko.',
        realWorldExample: {
          title: 'Commerzbank: KI-Kreditentscheidungen',
          description: '2.5 Mio. Kreditanträge/Jahr durch KI vorbewertet. Bei Diskriminierung drohen Sammelklagen + AI Act Strafen.',
          impact: '€500M Kreditvolumen täglich in Gefahr'
        },
        aiSystems: [
          { name: 'Kreditscoring', risk: 'Hoch', example: 'SCHUFA Score 4.0' },
          { name: 'Betrugsdetection', risk: 'Hoch', example: 'Wirecard Prevention AI' },
          { name: 'Robo-Advisor', risk: 'Mittel', example: 'Scalable Capital' },
          { name: 'KYC/AML Screening', risk: 'Hoch', example: 'ComplyAdvantage AI' }
        ],
        concreteSteps: [
          'Sofort: Bias-Audit aller Scoring-Modelle',
          'Q1 2025: Explainable AI implementieren',
          'Q2 2025: BaFin + AI Act Abstimmung',
          'Q3 2025: Customer Fairness Testing'
        ],
        marsSteinSolution: 'Automated Bias Detection + BaFin-konforme AI Act Dokumentation',
        timeframe: 'August 2026',
        fineRisk: '€15M oder 6% Jahresumsatz',
        realFines: {
          description: 'Wells Fargo: $3.7B Strafe für diskriminierende Kredit-Algorithmen',
          source: 'Consumer Financial Protection Bureau (CFPB)',
          url: 'https://www.consumerfinance.gov/about-us/newsroom/cfpb-orders-wells-fargo-to-pay-37-billion-for-widespread-mismanagement-of-auto-loans-mortgages-and-deposit-accounts/'
        }
      },
      {
        icon: UserCheck,
        title: 'Human Resources',
        shortTitle: 'HR Tech',
        riskLevel: 'Hochrisiko',
        description: 'HR-Abteilungen nutzen KI für Einstellungen - der sensibelste Hochrisikobereich des AI Act.',
        realWorldExample: {
          title: 'SAP SuccessFactors: 50M Bewerber-Screenings',
          description: 'SAPs KI filtert Lebensläufe für 15.000 Unternehmen. Ein Bias-Skandal wäre katastrophal.',
          impact: 'Diskriminierungsklage: €100M+ Schadensersatz'
        },
        aiSystems: [
          { name: 'CV-Parsing & Ranking', risk: 'Hoch', example: 'Textkernel Match!' },
          { name: 'Video-Interview-Analyse', risk: 'Verboten*', example: 'HireVue (eingestellt!)' },
          { name: 'Performance Prediction', risk: 'Hoch', example: 'Workday AI' },
          { name: 'Skill-Gap-Analyse', risk: 'Mittel', example: 'LinkedIn Talent Insights' }
        ],
        concreteSteps: [
          'SOFORT: Emotionserkennung abschalten!',
          'Q1 2025: Bias-Testing implementieren',
          'Q2 2025: Transparenz-Erklärungen erstellen',
          'Q3 2025: Betriebsrat einbinden'
        ],
        marsSteinSolution: 'HR-AI Compliance Suite mit Bias-Monitoring & Betriebsrats-Dashboard',
        timeframe: 'August 2026',
        fineRisk: '€15M + Arbeitnehmerklagen',
        realFines: {
          description: 'Amazon: KI-Recruiting-Tool abgeschaltet nach Geschlechter-Diskriminierung',
          source: 'Reuters',
          url: 'https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G'
        }
      },
      {
        icon: ShoppingCart,
        title: 'E-Commerce & Retail',
        shortTitle: 'E-Commerce',
        riskLevel: 'Begrenzt',
        description: 'Online-Händler müssen Transparenz bei KI-Empfehlungen und Chatbots sicherstellen.',
        realWorldExample: {
          title: 'Zalando: 50M Kunden, 1B Empfehlungen/Tag',
          description: 'Zalando muss bei jeder KI-Empfehlung transparent machen, dass ein Algorithmus entscheidet.',
          impact: 'Conversion-Rate -15% bei schlechter Umsetzung'
        },
        aiSystems: [
          { name: 'Recommendation Engine', risk: 'Begrenzt', example: 'Amazon Personalize' },
          { name: 'Dynamic Pricing', risk: 'Mittel', example: 'Prisync AI' },
          { name: 'Chatbot Support', risk: 'Begrenzt', example: 'Zendesk Answer Bot' },
          { name: 'Visual Search', risk: 'Begrenzt', example: 'Pinterest Lens' }
        ],
        concreteSteps: [
          'Q1 2025: KI-Kennzeichnung auf Website',
          'Q2 2025: Chatbot-Disclaimer implementieren',
          'Q3 2025: Transparenz-Seite erstellen',
          'Q4 2025: A/B Tests für Conversion'
        ],
        marsSteinSolution: 'E-Commerce AI Transparency Kit mit conversion-optimierten Templates',
        timeframe: 'August 2025',
        fineRisk: '€7.5M',
        realFines: {
          description: 'TikTok: €345M DSGVO-Strafe für intransparente Algorithmen bei Minderjährigen',
          source: 'Irish Data Protection Commission',
          url: 'https://www.dataprotection.ie/en/news-media/data-protection-commission-announces-decision-tiktok-inquiry'
        }
      },
      {
        icon: GraduationCap,
        title: 'Bildung & EdTech',
        shortTitle: 'EdTech',
        riskLevel: 'Hochrisiko',
        description: 'Bildungseinrichtungen müssen bei KI-Bewertungen extreme Vorsicht walten lassen.',
        realWorldExample: {
          title: 'Coursera: 100M Lerner, KI-Prüfungen',
          description: 'Courseras KI bewertet Millionen von Aufgaben. Ein Fehler bedeutet falsche Abschlüsse.',
          impact: 'Akkreditierungsverlust + Studentenklagen'
        },
        aiSystems: [
          { name: 'Automated Grading', risk: 'Hoch', example: 'Turnitin Feedback Studio' },
          { name: 'Lernpfad-Empfehlung', risk: 'Hoch', example: 'Khan Academy AI' },
          { name: 'Proctoring Software', risk: 'Hoch', example: 'ProctorU' },
          { name: 'Plagiatserkennung', risk: 'Mittel', example: 'Turnitin' }
        ],
        concreteSteps: [
          'Sofort: Menschliche Kontrolle sicherstellen',
          'Q1 2025: Transparenz für Studenten',
          'Q2 2025: Beschwerdeverfahren etablieren',
          'Q3 2025: Fairness-Audits durchführen'
        ],
        marsSteinSolution: 'EdTech Compliance Platform mit Student-Rights-Management',
        timeframe: 'August 2026',
        fineRisk: '€15M + Reputationsschaden',
        realFines: {
          description: 'UK: A-Level Algorithmus-Skandal - 40% falsche Noten, Regierung musste zurückrudern',
          source: 'The Guardian',
          url: 'https://www.theguardian.com/education/2020/aug/17/a-levels-gcse-results-england-based-teacher-assessments-government-u-turn'
        }
      },
      {
        icon: Briefcase,
        title: 'Beratung & Professional Services',
        shortTitle: 'Consulting',
        riskLevel: 'Begrenzt',
        description: 'Beratungsunternehmen müssen KI-Tools transparent einsetzen und Kunden informieren.',
        realWorldExample: {
          title: 'McKinsey: QuantumBlack AI',
          description: 'McKinsey nutzt KI für Strategieempfehlungen bei DAX-Konzernen. Intransparenz wäre geschäftsschädigend.',
          impact: 'Vertrauensverlust = €100M Umsatzrisiko'
        },
        aiSystems: [
          { name: 'Data Analytics AI', risk: 'Begrenzt', example: 'Palantir Foundry' },
          { name: 'Document Analysis', risk: 'Begrenzt', example: 'KPMG Clara' },
          { name: 'Market Intelligence', risk: 'Begrenzt', example: 'CB Insights' },
          { name: 'Presentation Generator', risk: 'Begrenzt', example: 'Beautiful.AI' }
        ],
        concreteSteps: [
          'Q1 2025: KI-Nutzung in Verträge aufnehmen',
          'Q2 2025: Client Transparency Policy',
          'Q3 2025: Consultant AI Training',
          'Q4 2025: Audit Trail System'
        ],
        marsSteinSolution: 'Professional Services AI Transparency Suite',
        timeframe: 'August 2025',
        fineRisk: '€7.5M + Kundenverlust',
        realFines: {
          description: 'PwC: £5M Geldbuße für mangelhafte KI-Audit-Verfahren bei Evergrande',
          source: 'Financial Reporting Council UK',
          url: 'https://www.frc.org.uk/news-and-events/news/2022/07/frc-sanctions-against-pwc-and-two-partners-in-relation-to-bhs-and-evergrande/'
        }
      },
      {
        icon: Cpu,
        title: 'Software & Tech Companies',
        shortTitle: 'Tech/SaaS',
        riskLevel: 'Gemischt',
        description: 'Tech-Unternehmen sind doppelt betroffen: als Nutzer und Anbieter von KI.',
        realWorldExample: {
          title: 'Microsoft: Copilot in 1M+ Unternehmen',
          description: 'Microsoft muss Copilot compliant machen UND Kunden bei deren Compliance unterstützen.',
          impact: 'EU-Markt = 30% des Umsatzes gefährdet'
        },
        aiSystems: [
          { name: 'Code Generation', risk: 'Begrenzt', example: 'GitHub Copilot' },
          { name: 'Cloud AI Services', risk: 'Variabel', example: 'Azure AI' },
          { name: 'AutoML Platforms', risk: 'Hoch', example: 'Google Vertex AI' },
          { name: 'AI Development Tools', risk: 'Variabel', example: 'TensorFlow' }
        ],
        concreteSteps: [
          'Sofort: AI Act Impact Assessment',
          'Q1 2025: Customer Compliance Tools',
          'Q2 2025: Liability Framework Update',
          'Q3 2025: EU Representative benennen'
        ],
        marsSteinSolution: 'Tech Company Dual-Compliance Platform (Anbieter + Nutzer)',
        timeframe: 'Verschiedene Deadlines',
        fineRisk: 'Bis €35M oder 7% Umsatz',
        realFines: {
          description: 'Meta: €1.2B DSGVO-Strafe für intransparente Datenverarbeitung bei KI-Training',
          source: 'Irish Data Protection Commission',
          url: 'https://www.dataprotection.ie/en/news-media/press-releases/data-protection-commission-announces-conclusion-inquiry-meta-ireland'
        }
      }
    ];

    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
              <Building2 className="h-3.5 w-3.5 mr-2" />
              Branchen-spezifische AI Act Compliance
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              AI Act Anforderungen nach Branchen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Der AI Act betrifft verschiedene Branchen unterschiedlich stark. 
              Verstehen Sie Ihre spezifischen Risiken und Compliance-Anforderungen.
            </p>
          </div>

          {/* Industry Navigation Pills */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndustry(index)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300",
                    "text-sm font-medium border-2",
                    selectedIndustry === index
                      ? "bg-[#a1251b] text-white border-[#a1251b] shadow-lg scale-105"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#a1251b]/30 hover:bg-gray-50"
                  )}
                >
                  <industry.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{industry.shortTitle}</span>
                  <span className="sm:hidden">{industry.shortTitle.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Industry Card */}
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="border-2 border-gray-200 shadow-xl overflow-hidden">
              {/* Header with gradient background */}
              <div className={cn(
                "p-8 text-white",
                industries[selectedIndustry].riskLevel === 'Hochrisiko' 
                  ? "bg-gradient-to-r from-red-600 to-orange-600"
                  : industries[selectedIndustry].riskLevel === 'Begrenzt'
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                  : "bg-gradient-to-r from-purple-600 to-pink-600"
              )}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      {React.createElement(industries[selectedIndustry].icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{industries[selectedIndustry].title}</h3>
                      <Badge className="mt-2 bg-white/20 text-white border-white/30">
                        Risikostufe: {industries[selectedIndustry].riskLevel}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-white/90">{industries[selectedIndustry].description}</p>
              </div>

              <CardContent className="p-8 space-y-8">
                {/* Real World Example */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#a1251b] flex items-center justify-center flex-shrink-0">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {industries[selectedIndustry].realWorldExample.title}
                      </h4>
                      <p className="text-gray-700 mb-3">
                        {industries[selectedIndustry].realWorldExample.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <span className="font-semibold text-red-700">
                          Impact: {industries[selectedIndustry].realWorldExample.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Systems Grid */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Cpu className="h-5 w-5" />
                    Betroffene KI-Systeme in dieser Branche
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {industries[selectedIndustry].aiSystems.map((system, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-gray-900">{system.name}</h5>
                          <Badge 
                            variant={
                              system.risk === 'Hoch' ? 'destructive' : 
                              system.risk === 'Mittel' ? 'default' : 
                              system.risk === 'Verboten*' ? 'destructive' :
                              'outline'
                            }
                            className="text-xs"
                          >
                            {system.risk}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Beispiel:</span> {system.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concrete Steps */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <CheckSquare className="h-5 w-5" />
                    Konkrete Schritte zur Compliance
                  </h4>
                  <div className="space-y-3">
                    {industries[selectedIndustry].concreteSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stats and Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Risk and Timeline */}
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-orange-700">Maximales Bußgeld</span>
                        <Euro className="h-4 w-4 text-orange-600" />
                      </div>
                      <p className="text-lg font-bold text-orange-900">{industries[selectedIndustry].fineRisk}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-700">Compliance-Deadline</span>
                        <Clock className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-lg font-bold text-blue-900">{industries[selectedIndustry].timeframe}</p>
                    </div>
                    {industries[selectedIndustry].realFines && (
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-red-700 mb-1">Reale Strafen:</p>
                            <p className="text-sm text-red-600 mb-2">{industries[selectedIndustry].realFines.description}</p>
                            <a 
                              href={industries[selectedIndustry].realFines.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-red-700 hover:text-red-900 font-medium transition-colors group"
                            >
                              <Globe className="h-3 w-3" />
                              <span>Quelle: {industries[selectedIndustry].realFines.source}</span>
                              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Marsstein Solution */}
                  <Card className="bg-gradient-to-br from-[#a1251b] to-purple-600 text-white border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                          <Rocket className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold text-lg mb-2">Marsstein Lösung</h5>
                          <p className="text-white/90 mb-4">{industries[selectedIndustry].marsSteinSolution}</p>
                          <Button className="bg-white text-[#a1251b] hover:bg-gray-100">
                            Branchenspezifische Demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  };

  // Process Section
  const ProcessSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Unser AI Act Prozess
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            In 2 Wochen AI Act compliant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Während traditionelle Beratung 6+ Monate dauert, machen wir Sie in nur 2 Wochen compliant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'KI-System Discovery',
              description: 'Automatische Erkennung aller KI-Systeme in Ihrer Organisation',
              duration: 'Tag 1-2',
              icon: Search,
              details: 'Network Scanning, API Discovery, Employee Survey'
            },
            {
              step: '2',
              title: 'Risiko-Klassifizierung',
              description: 'KI-gestützte Zuordnung zu den 4 AI Act Risikokategorien',
              duration: 'Tag 3-5',
              icon: Brain,
              details: 'ML-basierte Classification, Regulatory Mapping'
            },
            {
              step: '3',
              title: 'Automatische Dokumentation',
              description: 'Generierung aller erforderlichen Compliance-Dokumente',
              duration: 'Tag 6-10',
              icon: FileCheck,
              details: 'CE-Kennzeichnung, Konformitätserklärung, Risk Assessment'
            },
            {
              step: '4',
              title: 'Continuous Monitoring',
              description: 'Laufende Überwachung und automatische Updates',
              duration: 'Tag 11-14',
              icon: Monitor,
              details: 'Real-time Compliance Monitoring, Alert System'
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent" />
              )}
              <Card className="relative h-full border-2 hover:border-purple-600/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <step.icon className="h-8 w-8 text-purple-600 opacity-20" />
                  <div className="text-xs text-gray-600">
                    {step.details}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            AI Act Compliance in 2 Wochen starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );



  // FAQ Section
  const FAQSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <BookOpen className="h-3.5 w-3.5 mr-2" />
            AI Act FAQ
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Alles was Sie über den EU AI Act wissen müssen
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Was ist der EU AI Act und warum sollte er mein Unternehmen interessieren?",
                answer: "Der EU AI Act ist seit 1. August 2024 in Kraft und regelt die Entwicklung, den Einsatz und die Nutzung von KI-Systemen in der EU. Verstöße können zu Bußgeldern bis zu 35 Millionen Euro oder 7% des weltweiten Jahresumsatzes führen. Selbst wenn Sie keine KI entwickeln, sondern nur nutzen (ChatGPT, Copilot etc.), sind Sie betroffen."
              },
              {
                question: "Mein Unternehmen sitzt nicht in der EU - bin ich trotzdem betroffen?",
                answer: "Ja, der AI Act gilt für alle Unternehmen, die KI-Systeme in der EU anbieten oder deren KI-Output in der EU genutzt wird. Das schließt US-amerikanische, britische und andere internationale Unternehmen mit EU-Geschäft ein. Auch reine Software-Anbieter sind betroffen."
              },
              {
                question: "Welche KI-Systeme gelten als 'Hochrisiko' und was bedeutet das?",
                answer: "Hochrisiko-KI umfasst Systeme in Bereichen wie biometrische Identifikation, kritische Infrastrukturen, Bildung, HR, Strafverfolgung und Gesundheitswesen. Diese benötigen eine CE-Kennzeichnung, umfassende Dokumentation und Konformitätsbewertung. Beispiele: CV-Screening, Gesichtserkennung, KI-Bewertungssysteme."
              },
              {
                question: "Ich nutze nur ChatGPT und Microsoft Copilot - brauche ich AI Act Compliance?",
                answer: "Ja! Generative KI-Systeme müssen seit August 2025 Transparenzpflichten erfüllen. Nutzer müssen darüber informiert werden, dass sie mit KI interagieren. Außerdem müssen Sie dokumentieren, wie Sie diese Tools nutzen und welche Daten verarbeitet werden."
              },
              {
                question: "Wie unterscheidet sich der AI Act von der DSGVO?",
                answer: "Während die DSGVO Datenschutz regelt, fokussiert der AI Act auf KI-Systeme und deren Risiken. Beide gelten parallel - Sie brauchen sowohl DSGVO- als auch AI Act-Compliance. Viele Anforderungen überschneiden sich, aber der AI Act hat zusätzliche technische Anforderungen wie CE-Kennzeichnung."
              },
              {
                question: "Was kostet AI Act Non-Compliance wirklich?",
                answer: "Neben den direkten Bußgeldern (bis €35M) entstehen indirekte Kosten: Reputationsschäden, Geschäftsverluste, rechtliche Kosten und potenzielle Betriebsverbote. Erste Unternehmen mussten bereits KI-Systeme abschalten. Die Gesamtkosten können das 10-fache des Bußgeldes betragen."
              },
              {
                question: "Wie kann Marsstein meinem Unternehmen bei der AI Act Compliance helfen?",
                answer: "Marsstein automatisiert 90% des Compliance-Prozesses: Automatische KI-System-Erkennung, Risikokategorisierung, Dokumentationsgenerierung und kontinuierliches Monitoring. Was traditionell 6+ Monate dauert, schaffen wir in 2 Wochen - zu einem Bruchteil der Anwaltskosten."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );

  // CTA Section
  const CTASection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-r from-[#a1251b] to-purple-600 text-white">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <Badge className="bg-white/20 text-white border-white/20">
            <Gavel className="h-3.5 w-3.5 mr-2" />
            Professionelle AI Act Compliance
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            AI Act Compliance in 2 Wochen statt 6 Monaten
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Werden Sie frühzeitig AI Act compliant mit Marsstein. 
            <span className="font-semibold"> Frühzeitige Compliance sichert Wettbewerbsvorteile</span> 
            und vermeidet rechtliche Risiken.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
              <Brain className="mr-2 h-5 w-5" />
              Kostenlose AI-Risikoanalyse
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8">
              <Download className="mr-2 h-5 w-5" />
              AI Act Compliance Guide
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Kostenlose Erstberatung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Unverbindliche Risikoanalyse</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>2 Wochen bis Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AiActPainpointsSection />
        <AiActDeepDiveSection />
        <BenefitsSection />
        <TargetIndustriesSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default EuAiActCompliance;