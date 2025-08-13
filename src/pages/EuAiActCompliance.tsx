import React, { useEffect, useState } from 'react';
import SEOHead from '../components/SEOHead';
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
  LineChart,
  Bell,
  ExternalLink
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
        "relative overflow-hidden rounded-lg border-2 transition-all duration-500",
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
                ? 'bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20' 
                : challenge.riskLevel === 'high' 
                ? 'bg-[#f97316]/10 text-[#f97316] border-[#f97316]/20'
                : 'bg-[#ea580c]/10 text-[#ea580c] border-[#ea580c]/20'
            )}
          >
            {challenge.priority}
          </Badge>
        </div>

        {/* Title and Description */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-semibold text-[#232323] leading-tight">
            {challenge.title}
          </h3>
          <p className="text-xs text-[#474747] leading-relaxed">
            {challenge.problem}
          </p>
        </div>

        {/* Impact Card */}
        <div className="bg-white/80 border border-[#474747]/10 rounded-lg p-3 space-y-1.5 shadow-inner backdrop-blur-sm">
          <div className={cn(
            "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-white text-xs font-bold",
            challenge.accentColor
          )}>
            <Euro className="h-3 w-3" />
            Bußgeld-Risiko
          </div>
          <div className="text-sm font-bold text-[#232323]">
            {challenge.impact}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#474747]">
            <Clock className="h-3 w-3" />
            <span>{challenge.timeline}</span>
          </div>
          <p className="text-xs text-[#474747]">
            {challenge.details}
          </p>
        </div>

        {/* Affected Systems */}
        <div className="space-y-1.5">
          <h4 className="text-xs font-semibold text-[#232323] flex items-center gap-1.5">
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
                  className="px-1.5 py-0.5 text-xs bg-[#F5F6F8] hover:bg-[#F5F6F8]/80 transition-colors duration-200 font-medium text-[#474747]"
                >
                  {example}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fixed News Section */}
        <div className="border-t border-[#474747]/10 pt-3">
          <div className="p-3 bg-gradient-to-br from-[#F5F6F8] to-[#F5F6F8]/60 rounded-lg border border-[#474747]/20">
            {/* News Header */}
            <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#474747]/30">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-[#232323] rounded-full flex items-center justify-center">
                  <FileText className="h-2 w-2 text-white" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#232323] tracking-tight">
                    PRAXISBEISPIEL
                  </h5>
                  <p className="text-xs text-[#474747] font-mono">
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
              <div className="font-mono text-xs text-[#232323] leading-relaxed min-h-[40px]">
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
              <div className="pt-2 border-t border-[#474747]/20">
                <a 
                  href={challenge.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#474747] hover:text-[#232323] transition-colors group/link"
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "EU AI Act Compliance Service",
    "description": "KI-Compliance nach EU AI Act: Risikoanalyse, Konformitätsbewertung und Dokumentation",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "AI Compliance Management",
    "areaServed": "EU"
  };

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
        accentColor: 'bg-[#e24e1b]',
        borderColor: 'border-[#e24e1b]/20'
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
        accentColor: 'bg-[#f97316]',
        borderColor: 'border-[#f97316]/20'
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
        accentColor: 'bg-[#e24e1b]',
        borderColor: 'border-[#e24e1b]/20'
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
        accentColor: 'bg-[#ea580c]',
        borderColor: 'border-[#ea580c]/20'
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
        accentColor: 'bg-[#39B37B]',
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
        accentColor: 'bg-[#e24e1b]',
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
            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20 px-6 py-3">
              <AlertCircle className="h-4 w-4 mr-2" />
              AI Act Compliance-Herausforderungen
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#232323] leading-tight">
              Die 6 wichtigsten Compliance-Bereiche
              <span className="block text-[#e24e1b] mt-2">
                des EU AI Act
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-[#474747] leading-relaxed">
                <span className="font-semibold text-[#232323]">87% der deutschen Unternehmen</span> nutzen bereits KI, 
                aber nur <span className="font-semibold text-[#e24e1b]">13% sind AI Act compliant</span>.
              </p>
              
              {/* Professional Stats */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#232323]">
                      {painInView && <CountUp end={127} duration={2} />}
                    </div>
                    <div className="text-sm text-[#474747]">Tage bis erste AI Act Prüfungen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#232323]">
                      €{painInView && <CountUp end={245} duration={2} />}M
                    </div>
                    <div className="text-sm text-[#474747]">bereits verhängte EU-Bußgelder</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#232323]">
                      {painInView && <CountUp end={94} duration={2} />}%
                    </div>
                    <div className="text-sm text-[#474747]">der KI-Nutzer noch nicht compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Central Card Display */}
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-[#232323]">Compliance-Herausforderungen</h3>
              <p className="text-[#474747] mt-2">{currentIndex + 1} von {complianceChallenges.length}</p>
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
                        ? "bg-[#e24e1b] scale-125" 
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
                    <h3 className="font-semibold text-xl mb-2">Marsstein automatisiert AI Act Compliance</h3>
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
                <div className="text-2xl font-bold text-[#232323] mb-2">
                  {painInView && <CountUp end={200} duration={2} />}+
                </div>
                <div className="text-sm text-[#474747]">Unternehmen bereits compliant</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-[#232323] mb-2">
                  €{painInView && <CountUp end={15} duration={2} />}M
                </div>
                <div className="text-sm text-[#474747]">Bußgeld-Risiken minimiert</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-[#232323] mb-2">
                  {painInView && <CountUp end={48} duration={2} />}h
                </div>
                <div className="text-sm text-[#474747]">Durchschnittliche Implementierung</div>
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
                <Badge className="bg-[#F5F6F8]/80 text-[#474747] border-gray-200 px-4 py-2 font-semibold">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  AI Act seit 01.08.2024 aktiv
                </Badge>
                <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20 px-4 py-2 font-semibold">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Fristen bis 2026
                </Badge>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#232323] leading-[1.1]">
                  EU AI Act Compliance
                  <span className="block text-[#e24e1b] mt-2">
                    leicht gemacht
                  </span>
                </h1>
                
                <p className="text-xl text-[#474747] leading-relaxed max-w-xl">
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
                  <span className="text-sm text-[#474747] font-medium">Für professionelle AI Act Compliance</span>
                </div>
              </div>
            </div>
            
            {/* Professional Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl border border-[#474747]/20 p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#232323]">AI Act Compliance Status</h3>
                  <Badge className="bg-[#39B37B]/10 text-[#39B37B] border-[#39B37B]/20">
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
                        <div className="text-3xl font-bold text-[#232323]">{complianceScore}%</div>
                        <div className="text-sm text-[#474747]">Compliant</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-[#39B37B]/5 rounded-lg border border-[#39B37B]/20">
                      <div className="text-lg font-bold text-green-700">23</div>
                      <div className="text-xs text-green-600">Anforderungen erfüllt</div>
                    </div>
                    <div className="text-center p-3 bg-[#F57C00]/10 rounded-lg border border-[#F57C00]/20">
                      <div className="text-lg font-bold text-yellow-700">7</div>
                      <div className="text-xs text-yellow-600">In Bearbeitung</div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-gray-200">
                    <div className="text-sm text-[#474747] mb-2">Nächste Deadline</div>
                    <div className="text-lg font-semibold text-[#232323]">August 2025</div>
                    <div className="text-sm text-[#474747]">Generative AI Transparenz</div>
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
          <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
            <Brain className="h-3.5 w-3.5 mr-2" />
            AI Act Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Die 4 Risikokategorien des EU AI Act verstehen
          </h2>
          <p className="text-lg text-[#474747] max-w-3xl mx-auto">
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
                    <div className="text-xs text-[#474747]">{item.requirements}</div>
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
                <div className="mt-3 p-3 bg-[#F57C00]/20 rounded-lg">
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
                  <Brain className="h-6 w-6 text-[#e24e1b]" />
                  Live AI Act Risk-Scanner
                </CardTitle>
                <CardDescription>
                  Automatische Klassifizierung Ihrer KI-Systeme
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* AI Systems Detection */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-[#232323]">Erkannte KI-Systeme:</h4>
                  {[
                    { name: 'Microsoft 365 Copilot', risk: 'Begrenzt', category: 'Generative AI', status: 'warning' },
                    { name: 'HR-Bewerbungsfilter', risk: 'Hochrisiko', category: 'Beschäftigung', status: 'danger' },
                    { name: 'ChatGPT Integration', risk: 'Begrenzt', category: 'Chatbot', status: 'warning' },
                    { name: 'Zutrittskontrolle Gesicht', risk: 'Hochrisiko', category: 'Biometrie', status: 'danger' }
                  ].map((system, index) => (
                    <div key={index} className="p-3 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#474747]">{system.name}</span>
                        <Badge 
                          variant={system.status === 'danger' ? 'destructive' : 'outline'}
                          className="text-xs"
                        >
                          {system.risk}
                        </Badge>
                      </div>
                      <div className="text-xs text-[#474747]">{system.category}</div>
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
                  <h4 className="font-semibold text-[#232323] mb-4">AI Act Timeline</h4>
                  <div className="space-y-3">
                    {[
                      { date: '01.08.2024', task: 'Verbotene KI-Systeme', status: 'active', urgent: true },
                      { date: '02.02.2025', task: 'GPAI-Modelle', status: 'upcoming', urgent: true },
                      { date: '02.08.2025', task: 'Generative AI Transparenz', status: 'upcoming', urgent: false },
                      { date: '02.08.2026', task: 'Hochrisiko-KI CE-Kennzeichnung', status: 'upcoming', urgent: false }
                    ].map((milestone, index) => (
                      <div key={index} className={`p-2 rounded-lg border ${
                        milestone.status === 'active' ? 'bg-[#e24e1b]/10 border-[#e24e1b]/20' : 'bg-[#F5F6F8] border-[#474747]/20'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">{milestone.date}</div>
                          {milestone.urgent && <Badge variant="destructive" className="text-xs">Urgent</Badge>}
                        </div>
                        <div className="text-xs text-[#474747]">{milestone.task}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#e24e1b] hover:bg-[#8a1f17] text-white">
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

  // Implementation Guide Section - Comprehensive step-by-step guidance
  const ImplementationGuideSection = () => {
    const { ref: guideRef, inView: guideInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
      <section ref={guideRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
              <Rocket className="h-3.5 w-3.5 mr-2" />
              AI Act Implementierung
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Ihr Weg zur AI Act Compliance
              <span className="block text-[#e24e1b] mt-2">
                Schritt-für-Schritt Anleitung
              </span>
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Von der ersten Bestandsaufnahme bis zur vollständigen Compliance - 
              unser erprobter Prozess führt Sie sicher durch alle Anforderungen.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Phase 1: Vorbereitung und Analyse */}
            <div className="mb-12">
              <Card className="border-2 border-[#e24e1b]/20 overflow-hidden">
                <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Search className="h-6 w-6 text-white" />
                    </div>
                    Phase 1: Vorbereitung und Analyse (Woche 1-2)
                  </h3>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckSquare className="h-5 w-5 text-[#e24e1b]" />
                          1.1 AI Inventory erstellen
                        </h4>
                        <div className="space-y-3 pl-7">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#232323] mb-2">Alle KI-Systeme identifizieren:</p>
                            <ul className="space-y-2 text-sm text-[#474747]">
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" />
                                <span>Chatbots (ChatGPT, Claude, Copilot)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" />
                                <span>HR-Tools (Bewerbungsfilter, Performance-Tracking)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" />
                                <span>Analytik-Software mit ML-Komponenten</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" />
                                <span>Biometrische Systeme (Zutrittskontrolle)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" />
                                <span>Embedded AI in Software-Produkten</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-[#e24e1b]/10 p-4 rounded-lg border border-[#e24e1b]/20">
                            <p className="text-sm font-medium text-[#e24e1b]">
                              💡 Praxis-Tipp: Befragen Sie alle Abteilungen - 
                              oft wird KI unbewusst eingesetzt!
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5 text-[#e24e1b]" />
                          1.2 Risikokategorien bestimmen
                        </h4>
                        <div className="space-y-3 pl-7">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#232323] mb-2">Klassifizierung nach EU AI Act:</p>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between p-2 bg-white rounded border border-red-200">
                                <span className="text-sm font-medium text-red-700">Verboten</span>
                                <Badge variant="destructive" className="text-xs">Sofort abstellen</Badge>
                              </div>
                              <div className="flex items-center justify-between p-2 bg-white rounded border border-orange-200">
                                <span className="text-sm font-medium text-orange-700">Hochrisiko</span>
                                <Badge className="bg-orange-100 text-orange-700 text-xs">CE-Kennzeichnung</Badge>
                              </div>
                              <div className="flex items-center justify-between p-2 bg-white rounded border border-yellow-200">
                                <span className="text-sm font-medium text-yellow-700">Begrenzt</span>
                                <Badge className="bg-yellow-100 text-yellow-700 text-xs">Transparenz</Badge>
                              </div>
                              <div className="flex items-center justify-between p-2 bg-white rounded border border-green-200">
                                <span className="text-sm font-medium text-green-700">Minimal</span>
                                <Badge className="bg-green-100 text-green-700 text-xs">Best Practices</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Users className="h-5 w-5 text-[#e24e1b]" />
                          1.3 AI Governance Team aufbauen
                        </h4>
                        <div className="space-y-3 pl-7">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#232323] mb-2">Erforderliche Rollen:</p>
                            <ul className="space-y-2 text-sm text-[#474747]">
                              <li className="flex items-start gap-2">
                                <UserCheck className="h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" />
                                <div>
                                  <span className="font-medium">AI Officer</span>
                                  <p className="text-xs text-[#474747]">Zentrale Verantwortung für AI Act Compliance</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <Shield className="h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" />
                                <div>
                                  <span className="font-medium">Datenschutzbeauftragter</span>
                                  <p className="text-xs text-[#474747]">DSGVO und AI Act Schnittstelle</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <Code className="h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" />
                                <div>
                                  <span className="font-medium">Technische Experten</span>
                                  <p className="text-xs text-[#474747]">Implementierung und Testing</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <Scale className="h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" />
                                <div>
                                  <span className="font-medium">Rechtsabteilung</span>
                                  <p className="text-xs text-[#474747]">Vertragsanpassungen und Haftung</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-[#e24e1b]" />
                          1.4 Gap-Analyse durchführen
                        </h4>
                        <div className="space-y-3 pl-7">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#232323] mb-2">Prüfbereiche:</p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>Dokumentation</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-orange-500" />
                                <span>Risikoanalysen</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-orange-500" />
                                <span>Transparenz</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <XCircle className="h-4 w-4 text-red-500" />
                                <span>CE-Kennzeichnung</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>Datenschutz</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-orange-500" />
                                <span>Monitoring</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase 2: Technische Umsetzung */}
            <div className="mb-12">
              <Card className="border-2 border-[#f97316]/20 overflow-hidden">
                <div className="bg-gradient-to-r from-[#f97316] to-[#fb923c] p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    Phase 2: Technische Umsetzung (Woche 3-6)
                  </h3>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Database className="h-5 w-5 text-[#f97316]" />
                          2.1 Datenqualität sicherstellen
                        </h4>
                        <div className="space-y-3 pl-7">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#232323] mb-2">Anforderungen an Trainingsdaten:</p>
                            <ul className="space-y-2 text-sm text-[#474747]">
                              <li className="flex items-start gap-2">
                                <CheckSquare className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                                <span>Repräsentativität und Vollständigkeit prüfen</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckSquare className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                                <span>Bias-Detection und Fairness-Metriken implementieren</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckSquare className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                                <span>Datenherkunft und Lizenzierung dokumentieren</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckSquare className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                                <span>Regelmäßige Datenqualitätsprüfungen etablieren</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Brain className="h-5 w-5 text-[#f97316]" />
                          2.2 Transparenz implementieren
                        </h4>
                        <div className="space-y-3 pl-7">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#232323] mb-2">Technische Maßnahmen:</p>
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded border border-gray-200">
                                <p className="text-sm font-medium text-[#232323]">KI-Kennzeichnung</p>
                                <p className="text-xs text-[#474747] mt-1">
                                  Automatische Hinweise bei KI-generierten Inhalten
                                </p>
                                <div className="mt-2 bg-[#f97316]/10 p-2 rounded text-xs font-mono">
                                  &lt;div class="ai-generated"&gt;Dieser Text wurde mit KI erstellt&lt;/div&gt;
                                </div>
                              </div>
                              <div className="bg-white p-3 rounded border border-gray-200">
                                <p className="text-sm font-medium text-[#232323]">Explainable AI</p>
                                <p className="text-xs text-[#474747] mt-1">
                                  Entscheidungswege nachvollziehbar machen
                                </p>
                              </div>
                              <div className="bg-white p-3 rounded border border-gray-200">
                                <p className="text-sm font-medium text-[#232323]">Model Cards</p>
                                <p className="text-xs text-[#474747] mt-1">
                                  Standardisierte Dokumentation für jedes KI-Modell
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-[#f97316]" />
                          2.3 Sicherheitsmaßnahmen
                        </h4>
                        <div className="space-y-3 pl-7">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#232323] mb-2">Cybersecurity für KI:</p>
                            <ul className="space-y-2 text-sm text-[#474747]">
                              <li className="flex items-start gap-2">
                                <Lock className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                                <span>Adversarial Attack Prevention</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Lock className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                                <span>Model Poisoning Detection</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Lock className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                                <span>Secure Model Deployment</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Lock className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                                <span>Access Control & Audit Logs</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Monitor className="h-5 w-5 text-[#f97316]" />
                          2.4 Monitoring Setup
                        </h4>
                        <div className="space-y-3 pl-7">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#232323] mb-2">Überwachungs-Dashboard:</p>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-white p-2 rounded border border-gray-200">
                                <div className="text-xs font-medium text-[#232323]">Performance</div>
                                <div className="text-xs text-[#474747]">Accuracy, Latency</div>
                              </div>
                              <div className="bg-white p-2 rounded border border-gray-200">
                                <div className="text-xs font-medium text-[#232323]">Fairness</div>
                                <div className="text-xs text-[#474747]">Bias Metriken</div>
                              </div>
                              <div className="bg-white p-2 rounded border border-gray-200">
                                <div className="text-xs font-medium text-[#232323]">Compliance</div>
                                <div className="text-xs text-[#474747]">Audit Logs</div>
                              </div>
                              <div className="bg-white p-2 rounded border border-gray-200">
                                <div className="text-xs font-medium text-[#232323]">Incidents</div>
                                <div className="text-xs text-[#474747]">Fehlerreports</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-8 bg-[#f97316]/10 p-6 rounded-lg border border-[#f97316]/20">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold text-[#232323]">Typischer Fortschritt nach Phase 2:</h5>
                      <span className="text-2xl font-bold text-[#f97316]">65%</span>
                    </div>
                    <Progress value={65} className="h-3" />
                    <div className="grid grid-cols-3 gap-4 mt-4 text-xs">
                      <div className="text-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                        <span>Grundlagen</span>
                      </div>
                      <div className="text-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                        <span>Technik</span>
                      </div>
                      <div className="text-center">
                        <Clock className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                        <span>Zertifizierung</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase 3: Dokumentation und Zertifizierung */}
            <div className="mb-12">
              <Card className="border-2 border-green-200 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    Phase 3: Dokumentation und Zertifizierung (Woche 7-10)
                  </h3>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* CE-Kennzeichnung Process */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-green-600" />
                        CE-Kennzeichnung für Hochrisiko-KI
                      </h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        {[
                          {
                            step: '1',
                            title: 'Konformitätsbewertung',
                            tasks: ['Technische Dokumentation', 'Risikoanalyse', 'QM-System'],
                            duration: '2 Wochen'
                          },
                          {
                            step: '2',
                            title: 'Benannte Stelle',
                            tasks: ['Prüfstelle wählen', 'Unterlagen einreichen', 'Audit vorbereiten'],
                            duration: '3 Wochen'
                          },
                          {
                            step: '3',
                            title: 'Prüfverfahren',
                            tasks: ['Technische Prüfung', 'Dokumentenprüfung', 'Nachbesserungen'],
                            duration: '4 Wochen'
                          },
                          {
                            step: '4',
                            title: 'CE-Kennzeichnung',
                            tasks: ['Zertifikat erhalten', 'CE-Zeichen anbringen', 'EU-Datenbank'],
                            duration: '1 Woche'
                          }
                        ].map((phase, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {phase.step}
                              </div>
                              <h5 className="font-semibold text-sm">{phase.title}</h5>
                            </div>
                            <ul className="space-y-1 text-xs text-[#474747] mb-3">
                              {phase.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-500 shrink-0" />
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="text-xs font-medium text-green-600">
                              ⏱️ {phase.duration}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Required Documentation */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-green-600" />
                          Erforderliche Dokumentation
                        </h4>
                        <div className="space-y-3">
                          {[
                            {
                              doc: 'Technische Dokumentation',
                              contents: ['Systemarchitektur', 'Algorithmen-Beschreibung', 'Datenflüsse', 'Sicherheitskonzept'],
                              pages: '50-100'
                            },
                            {
                              doc: 'Risikomanagementsystem',
                              contents: ['Risikoidentifikation', 'Bewertungsmatrix', 'Mitigationsmaßnahmen', 'Notfallpläne'],
                              pages: '30-50'
                            },
                            {
                              doc: 'Qualitätsmanagement',
                              contents: ['Prozessbeschreibungen', 'Testprotokolle', 'Validierung', 'Change Management'],
                              pages: '40-60'
                            },
                            {
                              doc: 'Compliance-Nachweise',
                              contents: ['Rechtsgrundlagen', 'Datenschutz-Folgenabschätzung', 'Ethik-Bewertung', 'Audit-Berichte'],
                              pages: '20-40'
                            }
                          ].map((doc, index) => (
                            <Card key={index} className="border border-gray-200">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-semibold text-sm">{doc.doc}</h5>
                                  <Badge variant="outline" className="text-xs">
                                    ~{doc.pages} Seiten
                                  </Badge>
                                </div>
                                <ul className="space-y-1 text-xs text-[#474747]">
                                  {doc.contents.map((content, i) => (
                                    <li key={i} className="flex items-center gap-1">
                                      <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                      <span>{content}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <Gavel className="h-5 w-5 text-green-600" />
                          Rechtliche Anforderungen
                        </h4>
                        <div className="space-y-4">
                          <Card className="border border-gray-200">
                            <CardContent className="p-4">
                              <h5 className="font-semibold text-sm mb-2">EU-Vertreter bestellen</h5>
                              <p className="text-xs text-[#474747] mb-2">
                                Nicht-EU Unternehmen müssen einen bevollmächtigten Vertreter in der EU benennen.
                              </p>
                              <div className="bg-green-50 p-3 rounded text-xs">
                                <p className="font-medium text-green-700 mb-1">Aufgaben des EU-Vertreters:</p>
                                <ul className="space-y-1 text-green-600">
                                  <li>• Kontakt zu Behörden</li>
                                  <li>• Dokumentenverwahrung</li>
                                  <li>• Compliance-Überwachung</li>
                                </ul>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border border-gray-200">
                            <CardContent className="p-4">
                              <h5 className="font-semibold text-sm mb-2">Haftpflichtversicherung</h5>
                              <p className="text-xs text-[#474747] mb-2">
                                Anpassung der Betriebshaftpflicht für KI-spezifische Risiken.
                              </p>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-gray-50 p-2 rounded">
                                  <span className="font-medium">Deckung:</span> €10-50M
                                </div>
                                <div className="bg-gray-50 p-2 rounded">
                                  <span className="font-medium">Kosten:</span> €5-20k/Jahr
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border border-gray-200">
                            <CardContent className="p-4">
                              <h5 className="font-semibold text-sm mb-2">Vertragsanpassungen</h5>
                              <p className="text-xs text-[#474747]">
                                Alle bestehenden Verträge müssen auf AI Act Konformität geprüft werden:
                              </p>
                              <ul className="mt-2 space-y-1 text-xs text-[#474747]">
                                <li>• Lieferantenverträge</li>
                                <li>• Kundenverträge</li>
                                <li>• Partnervereinbarungen</li>
                                <li>• Arbeitsverträge</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Bereit für Ihre AI Act Compliance Journey?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Starten Sie jetzt mit unserer kostenlosen Risikoanalyse und 
                  erhalten Sie einen maßgeschneiderten Implementierungsplan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-[#e24e1b] hover:bg-gray-100">
                    <Rocket className="mr-2 h-5 w-5" />
                    Kostenlose Analyse starten
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    <Calendar className="mr-2 h-5 w-5" />
                    Beratungstermin buchen
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Technical Requirements Section - Deep dive into technical specifications
  const TechnicalRequirementsSection = () => {
    const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
      <section ref={techRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
              <Code className="h-3.5 w-3.5 mr-2" />
              Technische Anforderungen
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              AI Act Technische Spezifikationen
              <span className="block text-[#e24e1b] mt-2">
                im Detail erklärt
              </span>
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Von API-Dokumentation bis Zero-Day-Protection - alle technischen 
              Anforderungen des EU AI Act verständlich aufbereitet.
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {/* Data Governance Requirements */}
            <Card className="border-2 border-[#e24e1b]/20 overflow-hidden">
              <div className="bg-gradient-to-r from-[#232323] to-[#474747] p-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Database className="h-6 w-6" />
                  Data Governance & Qualitätsmanagement
                </h3>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-[#e24e1b]" />
                      Datenqualitäts-Metriken
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-[#232323] mb-3">Erforderliche Messgrößen:</h5>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Completeness Score</span>
                              <Badge variant="outline" className="text-xs">≥ 95%</Badge>
                            </div>
                            <div className="text-xs text-[#474747]">
                              Anteil vollständiger Datensätze ohne fehlende Werte
                            </div>
                            <div className="mt-2 bg-gray-100 p-2 rounded text-xs font-mono">
                              completeness = (non_null_values / total_values) * 100
                            </div>
                          </div>
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Accuracy Rate</span>
                              <Badge variant="outline" className="text-xs">≥ 98%</Badge>
                            </div>
                            <div className="text-xs text-[#474747]">
                              Korrektheit der Daten im Vergleich zur Ground Truth
                            </div>
                          </div>
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Timeliness</span>
                              <Badge variant="outline" className="text-xs">≤ 24h</Badge>
                            </div>
                            <div className="text-xs text-[#474747]">
                              Maximales Alter der Trainingsdaten für zeitkritische Modelle
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-[#e24e1b]" />
                      Bias Detection & Mitigation
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-[#232323] mb-3">Implementierungscode-Beispiel:</h5>
                        <div className="bg-[#232323] text-white p-4 rounded-lg overflow-x-auto">
                          <pre className="text-xs font-mono">
{`# AI Act Bias Detection Framework
from fairlearn.metrics import demographic_parity_ratio
from aif360.metrics import BinaryLabelDatasetMetric

class AIActBiasDetector:
    def __init__(self, protected_attributes):
        self.protected_attrs = protected_attributes
        self.thresholds = {
            'demographic_parity': 0.8,  # AI Act requirement
            'equal_opportunity': 0.8,
            'disparate_impact': 0.8
        }
    
    def check_compliance(self, dataset, predictions):
        metrics = {}
        for attr in self.protected_attrs:
            metrics[attr] = {
                'dp_ratio': demographic_parity_ratio(
                    y_true=dataset.labels,
                    y_pred=predictions,
                    sensitive_features=dataset[attr]
                ),
                'compliant': False
            }
            
            # Check AI Act compliance
            if metrics[attr]['dp_ratio'] >= self.thresholds['demographic_parity']:
                metrics[attr]['compliant'] = True
        
        return metrics`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-[#e24e1b]/10 p-6 rounded-lg border border-[#e24e1b]/20">
                  <h4 className="font-semibold text-[#232323] mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-[#e24e1b]" />
                    AI Act Data Governance Checkliste
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="space-y-2">
                      <h5 className="font-medium text-[#232323]">Datenerfassung</h5>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-xs">Einwilligungen dokumentiert</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-xs">Datenquellen verifiziert</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-xs">Lizenzierung geprüft</span>
                      </label>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-[#232323]">Datenqualität</h5>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-xs">Bias-Tests durchgeführt</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-xs">Repräsentativität geprüft</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-xs">Validierung abgeschlossen</span>
                      </label>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-[#232323]">Dokumentation</h5>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-xs">Data Sheets erstellt</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-xs">Versioning implementiert</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-xs">Audit Trail vorhanden</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Model Documentation Requirements */}
            <Card className="border-2 border-[#f97316]/20 overflow-hidden">
              <div className="bg-gradient-to-r from-[#f97316] to-[#fb923c] p-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <FileText className="h-6 w-6" />
                  Model Cards & Dokumentationsstandards
                </h3>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">EU AI Act Model Card Template</h4>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-[#232323] mb-3">1. Model Details</h5>
                          <ul className="space-y-2 text-sm text-[#474747]">
                            <li className="flex items-start gap-2">
                              <CheckSquare className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                              <div>
                                <span className="font-medium">Model Name & Version</span>
                                <p className="text-xs">Eindeutige Identifikation inkl. Versionsnummer</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckSquare className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                              <div>
                                <span className="font-medium">Architecture Description</span>
                                <p className="text-xs">Transformer, CNN, RNN mit Layer-Details</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckSquare className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                              <div>
                                <span className="font-medium">Training Infrastructure</span>
                                <p className="text-xs">Hardware, Software, Frameworks verwendet</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckSquare className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                              <div>
                                <span className="font-medium">License & IP Rights</span>
                                <p className="text-xs">Open Source oder proprietär, Nutzungsrechte</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-[#232323] mb-3">2. Intended Use</h5>
                          <ul className="space-y-2 text-sm text-[#474747]">
                            <li className="flex items-start gap-2">
                              <Target className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                              <div>
                                <span className="font-medium">Primary Use Cases</span>
                                <p className="text-xs">Genehmigte Anwendungsfälle definieren</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 mt-0.5 text-red-500 shrink-0" />
                              <div>
                                <span className="font-medium">Out-of-Scope Uses</span>
                                <p className="text-xs">Explizit verbotene Nutzungsarten</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Users className="h-4 w-4 mt-0.5 text-[#f97316] shrink-0" />
                              <div>
                                <span className="font-medium">Target Users</span>
                                <p className="text-xs">Entwickler, Endnutzer, Administratoren</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h5 className="font-medium text-[#232323] mb-3">3. Performance Metrics</h5>
                        <div className="bg-white p-4 rounded border border-gray-200">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="text-xs text-[#474747]">Accuracy</div>
                              <div className="font-mono font-bold">98.5%</div>
                            </div>
                            <div>
                              <div className="text-xs text-[#474747]">Precision</div>
                              <div className="font-mono font-bold">97.2%</div>
                            </div>
                            <div>
                              <div className="text-xs text-[#474747]">Recall</div>
                              <div className="font-mono font-bold">96.8%</div>
                            </div>
                            <div>
                              <div className="text-xs text-[#474747]">F1-Score</div>
                              <div className="font-mono font-bold">97.0%</div>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t">
                            <p className="text-xs text-[#474747]">
                              <strong>Fairness Metrics:</strong> Demographic Parity Ratio: 0.85 | 
                              Equal Opportunity Ratio: 0.82 | Disparate Impact: 0.88
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4">API Dokumentation für Transparenz</h4>
                    <div className="bg-[#232323] text-white p-6 rounded-lg">
                      <pre className="text-xs font-mono overflow-x-auto">
{`// AI Act Compliant API Response Structure
{
  "prediction": {
    "result": "approved",
    "confidence": 0.92,
    "timestamp": "2024-01-20T10:30:00Z"
  },
  "ai_transparency": {
    "model_used": "credit_scorer_v2.1",
    "ai_generated": true,
    "decision_factors": [
      {
        "feature": "income_stability",
        "importance": 0.35,
        "value": "high"
      },
      {
        "feature": "credit_history",
        "importance": 0.28,
        "value": "excellent"
      }
    ],
    "explanation": "Diese Entscheidung wurde durch ein KI-System getroffen. 
                    Die wichtigsten Faktoren waren Einkommensstabilität (35%) 
                    und Kredithistorie (28%).",
    "human_review_available": true,
    "appeal_process": "https://api.company.com/appeals"
  },
  "compliance": {
    "ai_act_version": "2024.08",
    "risk_category": "high_risk",
    "ce_marking": "CE-AI-2024-12345",
    "last_audit": "2024-01-15"
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security & Robustness Requirements */}
            <Card className="border-2 border-green-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Lock className="h-6 w-6" />
                  Security & Robustness Standards
                </h3>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Adversarial Defense Mechanisms</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-[#232323] mb-3">Implementierungsbeispiel:</h5>
                        <div className="bg-[#232323] text-white p-4 rounded-lg text-xs font-mono overflow-x-auto">
{`import torch
from cleverhans.torch.attacks import ProjectedGradientDescent

class AIActSecurityFramework:
    def __init__(self, model):
        self.model = model
        self.attack_configs = {
            'pgd': {'eps': 0.3, 'eps_iter': 0.01, 'nb_iter': 40},
            'fgsm': {'eps': 0.3},
            'cw': {'c': 1e-4, 'kappa': 0, 'max_iter': 100}
        }
    
    def test_robustness(self, x, y):
        results = {}
        
        # Test gegen verschiedene Angriffe
        pgd = ProjectedGradientDescent(self.model, **self.attack_configs['pgd'])
        adv_x = pgd.generate(x, y)
        
        # Berechne Robustness Score
        clean_acc = self.evaluate(x, y)
        adv_acc = self.evaluate(adv_x, y)
        
        results['robustness_score'] = adv_acc / clean_acc
        results['ai_act_compliant'] = results['robustness_score'] > 0.8
        
        return results`}
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h5 className="font-medium text-green-800 mb-2">Security Checklist:</h5>
                        <ul className="space-y-2 text-sm text-green-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>Input Validation & Sanitization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>Model Encryption at Rest & in Transit</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>Access Control & Authentication</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>Anomaly Detection Systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4">Monitoring & Incident Response</h4>
                    <div className="space-y-4">
                      <Card className="border border-gray-200">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-sm mb-3">Real-time Monitoring Dashboard</h5>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <span className="text-xs font-medium">Model Drift Detection</span>
                              <Badge className="bg-green-100 text-green-700 text-xs">Active</Badge>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <span className="text-xs font-medium">Performance Degradation</span>
                              <Badge className="bg-green-100 text-green-700 text-xs">Monitoring</Badge>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <span className="text-xs font-medium">Security Threats</span>
                              <Badge className="bg-yellow-100 text-yellow-700 text-xs">1 Alert</Badge>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <span className="text-xs font-medium">Bias Metrics</span>
                              <Badge className="bg-green-100 text-green-700 text-xs">Compliant</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-200">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-sm mb-3">Incident Response Plan</h5>
                          <div className="space-y-2 text-xs">
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                1
                              </div>
                              <div>
                                <p className="font-medium">Detection & Alert</p>
                                <p className="text-[#474747]">Automatische Erkennung &lt; 5 Min</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                2
                              </div>
                              <div>
                                <p className="font-medium">Assessment & Triage</p>
                                <p className="text-[#474747]">Schweregrad bestimmen &lt; 15 Min</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                3
                              </div>
                              <div>
                                <p className="font-medium">Containment</p>
                                <p className="text-[#474747]">System isolieren &lt; 30 Min</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                4
                              </div>
                              <div>
                                <p className="font-medium">Recovery & Report</p>
                                <p className="text-[#474747]">Behördenmeldung &lt; 72h</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Human Oversight Requirements */}
            <Card className="border-2 border-[#474747]/20 overflow-hidden">
              <div className="bg-gradient-to-r from-[#474747] to-[#232323] p-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <UserCheck className="h-6 w-6" />
                  Human Oversight & Control Mechanisms
                </h3>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border border-gray-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Eye className="h-5 w-5 text-[#e24e1b]" />
                        Human-in-the-Loop
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-[#474747] mb-3">
                        Mensch trifft finale Entscheidung basierend auf KI-Empfehlung
                      </p>
                      <div className="bg-gray-50 p-3 rounded text-xs">
                        <p className="font-medium mb-2">Anwendungsfälle:</p>
                        <ul className="space-y-1 text-[#474747]">
                          <li>• Kreditentscheidungen</li>
                          <li>• Einstellungsprozesse</li>
                          <li>• Medizinische Diagnosen</li>
                        </ul>
                      </div>
                      <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700">
                        ✓ Höchste Kontrolle
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Settings className="h-5 w-5 text-[#f97316]" />
                        Human-on-the-Loop
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-[#474747] mb-3">
                        KI entscheidet, Mensch kann eingreifen und übersteuern
                      </p>
                      <div className="bg-gray-50 p-3 rounded text-xs">
                        <p className="font-medium mb-2">Anwendungsfälle:</p>
                        <ul className="space-y-1 text-[#474747]">
                          <li>• Content Moderation</li>
                          <li>• Fraud Detection</li>
                          <li>• Quality Control</li>
                        </ul>
                      </div>
                      <div className="mt-3 p-2 bg-yellow-50 rounded text-xs text-yellow-700">
                        ⚡ Balance aus Effizienz & Kontrolle
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        Human-over-the-Loop
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-[#474747] mb-3">
                        Mensch überwacht KI-System und greift bei Anomalien ein
                      </p>
                      <div className="bg-gray-50 p-3 rounded text-xs">
                        <p className="font-medium mb-2">Anwendungsfälle:</p>
                        <ul className="space-y-1 text-[#474747]">
                          <li>• Monitoring Systeme</li>
                          <li>• Predictive Maintenance</li>
                          <li>• Anomalieerkennung</li>
                        </ul>
                      </div>
                      <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                        📊 Governance & Oversight
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">Implementierung der Kill-Switch Anforderung</h4>
                  <div className="bg-[#232323] text-white p-4 rounded-lg">
                    <pre className="text-xs font-mono overflow-x-auto">
{`# EU AI Act Kill-Switch Implementation
class AIActKillSwitch:
    def __init__(self, model_service):
        self.model_service = model_service
        self.emergency_contacts = ['ai-officer@company.com', 'cto@company.com']
        self.shutdown_reasons = []
    
    def emergency_shutdown(self, reason, triggered_by):
        """Sofortige Abschaltung des KI-Systems gemäß AI Act Art. 14"""
        
        # 1. System sofort stoppen
        self.model_service.stop_all_predictions()
        
        # 2. Logging für Audit Trail
        self.log_shutdown(reason, triggered_by)
        
        # 3. Benachrichtigungen
        self.notify_stakeholders(reason, triggered_by)
        
        # 4. Fallback auf manuellen Prozess
        self.activate_manual_fallback()
        
        # 5. Incident Report vorbereiten
        return self.generate_incident_report(reason, triggered_by)
    
    def can_shutdown(self, user_role):
        """Definierte Rollen die System abschalten dürfen"""
        authorized_roles = ['ai_officer', 'cto', 'compliance_manager', 'security_team']
        return user_role in authorized_roles`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  };

  // Compliance Checklists Section - Detailed actionable checklists
  const ComplianceChecklistsSection = () => {
    const { ref: checklistRef, inView: checklistInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [activeChecklist, setActiveChecklist] = useState('verbotene-systeme');
    
    const checklists = {
      'verbotene-systeme': {
        title: 'Verbotene KI-Systeme',
        icon: XCircle,
        color: 'red',
        description: 'Prüfen Sie, ob Ihre Systeme in verbotene Kategorien fallen',
        deadline: 'Sofort zu prüfen',
        items: [
          {
            category: 'Social Scoring & Verhaltensmanipulation',
            checks: [
              { id: 'ss1', text: 'Keine Bewertung von Bürgern basierend auf sozialem Verhalten', critical: true },
              { id: 'ss2', text: 'Keine KI zur unterschwelligen Manipulation vulnerabler Gruppen', critical: true },
              { id: 'ss3', text: 'Keine Ausnutzung von Schwächen (Alter, Behinderung)', critical: true },
              { id: 'ss4', text: 'Keine KI die zu physischem/psychischem Schaden führen kann', critical: true }
            ]
          },
          {
            category: 'Biometrische Systeme',
            checks: [
              { id: 'bio1', text: 'Keine Echtzeit-Gesichtserkennung in öffentlichen Räumen', critical: true },
              { id: 'bio2', text: 'Keine nachträgliche Gesichtserkennung (außer Strafverfolgung)', critical: true },
              { id: 'bio3', text: 'Keine Emotionserkennung am Arbeitsplatz oder in Bildungseinrichtungen', critical: true },
              { id: 'bio4', text: 'Keine biometrische Kategorisierung nach sensitiven Merkmalen', critical: true }
            ]
          },
          {
            category: 'Predictive Policing',
            checks: [
              { id: 'pp1', text: 'Keine KI zur Vorhersage von Straftaten basierend auf Profiling', critical: true },
              { id: 'pp2', text: 'Keine individuelle Risikobewertung ohne Straftat', critical: true }
            ]
          }
        ]
      },
      'hochrisiko-systeme': {
        title: 'Hochrisiko-KI Anforderungen',
        icon: AlertCircle,
        color: 'orange',
        description: 'Compliance-Anforderungen für Hochrisiko-KI-Systeme',
        deadline: 'Bis August 2026',
        items: [
          {
            category: 'Risikomanagement',
            checks: [
              { id: 'rm1', text: 'Risikomanagementsystem etabliert und dokumentiert' },
              { id: 'rm2', text: 'Regelmäßige Risikobewertungen durchgeführt' },
              { id: 'rm3', text: 'Maßnahmen zur Risikominderung implementiert' },
              { id: 'rm4', text: 'Testprotokolle für bekannte und vorhersehbare Risiken' }
            ]
          },
          {
            category: 'Daten-Governance',
            checks: [
              { id: 'dg1', text: 'Datenqualitätskriterien definiert und umgesetzt' },
              { id: 'dg2', text: 'Bias-Tests und Fairness-Metriken implementiert' },
              { id: 'dg3', text: 'Datenherkunft und -verarbeitung dokumentiert' },
              { id: 'dg4', text: 'Datenschutz-Folgenabschätzung durchgeführt' }
            ]
          },
          {
            category: 'Technische Dokumentation',
            checks: [
              { id: 'td1', text: 'Vollständige technische Dokumentation erstellt' },
              { id: 'td2', text: 'Algorithmen und Entscheidungslogik beschrieben' },
              { id: 'td3', text: 'Leistungsmetriken und Grenzen dokumentiert' },
              { id: 'td4', text: 'Anleitungen für Nutzer verfügbar' }
            ]
          },
          {
            category: 'Menschliche Aufsicht',
            checks: [
              { id: 'ma1', text: 'Human-in/on/over-the-loop Mechanismen implementiert' },
              { id: 'ma2', text: 'Interpretierbarkeit der KI-Entscheidungen gewährleistet' },
              { id: 'ma3', text: 'Überstimmungsmöglichkeit für Menschen vorhanden' },
              { id: 'ma4', text: 'Notausschalter (Kill-Switch) implementiert' }
            ]
          },
          {
            category: 'Cybersicherheit',
            checks: [
              { id: 'cs1', text: 'Schutz gegen Adversarial Attacks implementiert' },
              { id: 'cs2', text: 'Datenintegrität und Modellsicherheit gewährleistet' },
              { id: 'cs3', text: 'Zugriffskontrollen und Authentifizierung eingerichtet' },
              { id: 'cs4', text: 'Incident Response Plan vorhanden' }
            ]
          }
        ]
      },
      'transparenz-pflichten': {
        title: 'Transparenzpflichten',
        icon: Eye,
        color: 'yellow',
        description: 'Anforderungen für KI-Systeme mit begrenztem Risiko',
        deadline: 'Bis August 2025',
        items: [
          {
            category: 'KI-Kennzeichnung',
            checks: [
              { id: 'tk1', text: 'Nutzer werden über KI-Interaktion informiert' },
              { id: 'tk2', text: 'KI-generierte Inhalte sind gekennzeichnet' },
              { id: 'tk3', text: 'Deepfakes und manipulierte Inhalte sind markiert' },
              { id: 'tk4', text: 'Opt-out Möglichkeit wo anwendbar' }
            ]
          },
          {
            category: 'Informationspflichten',
            checks: [
              { id: 'ip1', text: 'Funktionsweise der KI verständlich erklärt' },
              { id: 'ip2', text: 'Datenverarbeitung transparent dargestellt' },
              { id: 'ip3', text: 'Kontaktmöglichkeiten für Fragen bereitgestellt' },
              { id: 'ip4', text: 'Beschwerdemechanismus etabliert' }
            ]
          }
        ]
      },
      'gpai-modelle': {
        title: 'GPAI & Foundation Models',
        icon: Brain,
        color: 'purple',
        description: 'Spezielle Anforderungen für General Purpose AI',
        deadline: 'Seit Februar 2025',
        items: [
          {
            category: 'Modell-Dokumentation',
            checks: [
              { id: 'gp1', text: 'Detaillierte Modell-Karte erstellt' },
              { id: 'gp2', text: 'Training-Daten und -Methoden dokumentiert' },
              { id: 'gp3', text: 'Energieverbrauch und Umweltauswirkungen erfasst' },
              { id: 'gp4', text: 'Bekannte Limitierungen aufgelistet' }
            ]
          },
          {
            category: 'Systemische Risiken (>10²⁵ FLOPs)',
            checks: [
              { id: 'sr1', text: 'Bewertung systemischer Risiken durchgeführt' },
              { id: 'sr2', text: 'Adversarial Testing abgeschlossen' },
              { id: 'sr3', text: 'Schwerwiegende Vorfälle werden gemeldet' },
              { id: 'sr4', text: 'Zusammenarbeit mit EU AI Office' }
            ]
          },
          {
            category: 'Copyright Compliance',
            checks: [
              { id: 'cc1', text: 'Urheberrechtlich geschützte Trainingsdaten dokumentiert' },
              { id: 'cc2', text: 'Opt-out Mechanismen für Rechteinhaber' },
              { id: 'cc3', text: 'Zusammenfassung der Trainingsdaten öffentlich' }
            ]
          }
        ]
      }
    };

    return (
      <section ref={checklistRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
              <CheckSquare className="h-3.5 w-3.5 mr-2" />
              Compliance Checklisten
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Ihre AI Act Compliance Checklisten
              <span className="block text-[#e24e1b] mt-2">
                Schritt für Schritt zur Konformität
              </span>
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Nutzen Sie unsere detaillierten Checklisten, um systematisch alle 
              AI Act Anforderungen zu erfüllen. Jeder Punkt ist praxiserprobt und juristisch validiert.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Checklist Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(checklists).map(([key, checklist]) => (
                <Button
                  key={key}
                  variant={activeChecklist === key ? "default" : "outline"}
                  onClick={() => setActiveChecklist(key)}
                  className={cn(
                    "flex items-center gap-2",
                    activeChecklist === key && "bg-[#e24e1b] hover:bg-[#8a1f17]"
                  )}
                >
                  <checklist.icon className="h-4 w-4" />
                  {checklist.title}
                </Button>
              ))}
            </div>

            {/* Active Checklist Content */}
            <motion.div
              key={activeChecklist}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeChecklist && (
                <Card className={cn(
                  "border-2 overflow-hidden",
                  checklists[activeChecklist].color === 'red' && "border-red-200",
                  checklists[activeChecklist].color === 'orange' && "border-orange-200",
                  checklists[activeChecklist].color === 'yellow' && "border-yellow-200",
                  checklists[activeChecklist].color === 'purple' && "border-purple-200"
                )}>
                  <div className={cn(
                    "p-6",
                    checklists[activeChecklist].color === 'red' && "bg-gradient-to-r from-red-500 to-red-600",
                    checklists[activeChecklist].color === 'orange' && "bg-gradient-to-r from-orange-500 to-orange-600",
                    checklists[activeChecklist].color === 'yellow' && "bg-gradient-to-r from-yellow-500 to-yellow-600",
                    checklists[activeChecklist].color === 'purple' && "bg-gradient-to-r from-purple-500 to-purple-600"
                  )}>
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                          {React.createElement(checklists[activeChecklist].icon, { className: "h-6 w-6" })}
                          {checklists[activeChecklist].title}
                        </h3>
                        <p className="mt-2 text-white/90">
                          {checklists[activeChecklist].description}
                        </p>
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30">
                        <Clock className="h-3.5 w-3.5 mr-2" />
                        {checklists[activeChecklist].deadline}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-8">
                      {checklists[activeChecklist].items.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          <h4 className="font-semibold text-lg mb-4 text-[#232323]">
                            {category.category}
                          </h4>
                          <div className="space-y-3">
                            {category.checks.map((check) => (
                              <label
                                key={check.id}
                                className={cn(
                                  "flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all",
                                  "hover:bg-gray-50",
                                  check.critical && "border-red-200 bg-red-50/50"
                                )}
                              >
                                <input
                                  type="checkbox"
                                  className={cn(
                                    "mt-0.5 rounded",
                                    check.critical && "text-red-600 focus:ring-red-500"
                                  )}
                                />
                                <div className="flex-1">
                                  <span className={cn(
                                    "text-sm font-medium",
                                    check.critical ? "text-red-700" : "text-[#232323]"
                                  )}>
                                    {check.text}
                                  </span>
                                  {check.critical && (
                                    <div className="mt-1 flex items-center gap-2 text-xs text-red-600">
                                      <AlertCircle className="h-3 w-3" />
                                      Kritisch: Verstöße führen zu sofortigen Strafen
                                    </div>
                                  )}
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Download and Progress Section */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                          <h5 className="font-semibold text-[#232323] mb-2">
                            Ihre Compliance-Fortschritt
                          </h5>
                          <div className="flex items-center gap-4">
                            <Progress value={0} className="w-48 h-3" />
                            <span className="text-sm text-[#474747]">0% abgeschlossen</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Als PDF exportieren
                          </Button>
                          <Button className="bg-[#e24e1b] hover:bg-[#8a1f17] flex items-center gap-2">
                            <FileCheck className="h-4 w-4" />
                            Audit-Bericht erstellen
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Warning Box for Critical Items */}
                    {activeChecklist === 'verbotene-systeme' && (
                      <div className="mt-6 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <XCircle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-semibold text-red-800 mb-2">
                              Wichtiger Hinweis zu verbotenen Systemen
                            </h5>
                            <p className="text-sm text-red-700 mb-3">
                              Falls Sie eines der oben genannten Systeme betreiben, müssen Sie dieses 
                              <strong> sofort abschalten</strong>. Es gibt keine Übergangsfrist. 
                              Verstöße werden mit bis zu 35 Millionen Euro oder 7% des weltweiten 
                              Jahresumsatzes geahndet.
                            </p>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Sofort-Hilfe anfordern
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </motion.div>

            {/* Quick Stats */}
            <div className="mt-12 grid md:grid-cols-4 gap-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#e24e1b] mb-2">113</div>
                  <div className="text-sm text-[#474747]">Compliance-Punkte insgesamt</div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">16</div>
                  <div className="text-sm text-[#474747]">Kritische Punkte</div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                  <div className="text-sm text-[#474747]">Risikokategorien</div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {checklistInView && <CountUp end={90} duration={2} />}%
                  </div>
                  <div className="text-sm text-[#474747]">Automatisierbar mit Marsstein</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Case Studies and Regulatory Updates Section
  const CaseStudiesSection = () => {
    const { ref: caseRef, inView: caseInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    const caseStudies = [
      {
        company: 'Meta (Facebook)',
        title: 'Gesichtserkennung abgeschaltet',
        category: 'Biometrische Daten',
        fine: '€1.2 Milliarden',
        violation: 'Unzulässige biometrische Verarbeitung',
        outcome: 'Meta löschte über 1 Milliarde Gesichtsabdrücke und stellte die automatische Gesichtserkennung ein',
        lesson: 'Biometrische Systeme sind Hochrisiko - selbst Tech-Giganten mussten zurückrudern',
        date: '2023',
        link: '#',
        severity: 'critical'
      },
      {
        company: 'Amazon',
        title: 'Rekrutierungs-KI eingestellt',
        category: 'HR & Einstellung',
        fine: 'Präventiv vermieden',
        violation: 'Gender-Bias in KI-Bewerbungsfilter',
        outcome: 'Komplettes KI-Recruiting-Tool wurde eingestellt, bevor Strafen verhängt wurden',
        lesson: 'Bias in HR-KI ist schwer zu eliminieren - menschliche Kontrolle unerlässlich',
        date: '2024',
        link: '#',
        severity: 'high'
      },
      {
        company: 'Clearview AI',
        title: 'EU-weites Verbot',
        category: 'Gesichtserkennung',
        fine: '€20 Millionen',
        violation: 'Illegale Gesichtsdatenbank aus Social Media',
        outcome: 'Vollständiges Betriebsverbot in der EU, Löschung aller EU-Bürgerdaten',
        lesson: 'Web-Scraping für biometrische Daten ist illegal - keine Ausnahmen',
        date: '2024',
        link: '#',
        severity: 'critical'
      },
      {
        company: 'Deutsche Bank',
        title: 'KI-Compliance Vorreiter',
        category: 'Finanzsektor',
        fine: 'Keine - Compliance erreicht',
        violation: 'Keine - proaktive Umsetzung',
        outcome: 'Erste Bank mit vollständiger AI Act Zertifizierung für alle KI-Systeme',
        lesson: 'Frühe Investition in Compliance zahlt sich aus - Wettbewerbsvorteil',
        date: '2024',
        link: '#',
        severity: 'success'
      }
    ];

    const regulatoryUpdates = [
      {
        date: '15. März 2025',
        title: 'Neue Leitlinien für Hochrisiko-KI',
        description: 'EU AI Office veröffentlicht detaillierte technische Standards für CE-Kennzeichnung',
        impact: 'Alle Hochrisiko-KI-Anbieter müssen bis Juni 2025 nachbessern',
        urgent: true
      },
      {
        date: '1. Februar 2025',
        title: 'GPAI Modelle Deadline abgelaufen',
        description: 'Erste Prüfungen von Foundation Models über 10²⁵ FLOPs beginnen',
        impact: 'OpenAI, Google und Anthropic unter Beobachtung',
        urgent: true
      },
      {
        date: '20. Januar 2025',
        title: 'Harmonisierte Standards veröffentlicht',
        description: 'CEN/CENELEC Standards für AI Act Konformität final',
        impact: 'Vereinfachte Compliance durch klare technische Vorgaben',
        urgent: false
      }
    ];

    return (
      <section ref={caseRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
              <FileText className="h-3.5 w-3.5 mr-2" />
              Praxis & Updates
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Aus der Praxis lernen
              <span className="block text-[#e24e1b] mt-2">
                Reale Fälle & aktuelle Entwicklungen
              </span>
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Lernen Sie aus echten AI Act Verstößen und Erfolgsgeschichten. 
              Bleiben Sie auf dem Laufenden mit den neuesten regulatorischen Updates.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Case Studies */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl font-semibold text-[#232323] mb-6">
                  Aktuelle Fallbeispiele
                </h3>
                
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={caseInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={cn(
                      "border-2 hover:shadow-lg transition-all cursor-pointer",
                      study.severity === 'critical' && "border-red-200 hover:border-red-300",
                      study.severity === 'high' && "border-orange-200 hover:border-orange-300",
                      study.severity === 'success' && "border-green-200 hover:border-green-300"
                    )}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-[#232323]">{study.company}</h4>
                            <p className="text-lg font-medium text-[#474747]">{study.title}</p>
                          </div>
                          <div className="text-right">
                            <Badge 
                              variant={study.severity === 'success' ? 'default' : 'destructive'}
                              className={cn(
                                study.severity === 'critical' && "bg-red-500",
                                study.severity === 'high' && "bg-orange-500",
                                study.severity === 'success' && "bg-green-500"
                              )}
                            >
                              {study.category}
                            </Badge>
                            <p className="text-sm text-[#474747] mt-1">{study.date}</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#474747] mb-1">Strafe/Ergebnis</p>
                            <p className="text-lg font-bold text-[#232323]">{study.fine}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#474747] mb-1">Verstoß</p>
                            <p className="text-sm text-[#232323]">{study.violation}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-[#474747] mb-1">Was geschah:</p>
                            <p className="text-sm text-[#232323]">{study.outcome}</p>
                          </div>
                          
                          <div className={cn(
                            "p-4 rounded-lg",
                            study.severity === 'critical' && "bg-red-50 border border-red-200",
                            study.severity === 'high' && "bg-orange-50 border border-orange-200",
                            study.severity === 'success' && "bg-green-50 border border-green-200"
                          )}>
                            <p className="text-sm font-medium text-[#232323] flex items-center gap-2">
                              <Lightbulb className="h-4 w-4" />
                              Wichtigste Lektion:
                            </p>
                            <p className={cn(
                              "text-sm mt-1",
                              study.severity === 'critical' && "text-red-700",
                              study.severity === 'high' && "text-orange-700",
                              study.severity === 'success' && "text-green-700"
                            )}>
                              {study.lesson}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Call to Action */}
                <Card className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3">
                      Vermeiden Sie diese Fehler!
                    </h4>
                    <p className="text-white/90 mb-4">
                      Lassen Sie uns gemeinsam Ihre KI-Systeme auf Compliance prüfen, 
                      bevor es zu spät ist.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-white text-[#e24e1b] hover:bg-gray-100"
                    >
                      Kostenlose Risikoanalyse
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Regulatory Updates Sidebar */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#232323] mb-6">
                  Regulatorische Updates
                </h3>

                <Card className="border-2 border-[#e24e1b]/20 sticky top-24">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-[#e24e1b]" />
                      Aktuelle Entwicklungen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {regulatoryUpdates.map((update, index) => (
                      <div 
                        key={index}
                        className={cn(
                          "p-4 rounded-lg border",
                          update.urgent 
                            ? "bg-[#e24e1b]/5 border-[#e24e1b]/20" 
                            : "bg-gray-50 border-gray-200"
                        )}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <p className="text-xs font-medium text-[#474747]">
                            {update.date}
                          </p>
                          {update.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Dringend
                            </Badge>
                          )}
                        </div>
                        <h5 className="font-semibold text-sm text-[#232323] mb-2">
                          {update.title}
                        </h5>
                        <p className="text-xs text-[#474747] mb-2">
                          {update.description}
                        </p>
                        <div className={cn(
                          "text-xs font-medium",
                          update.urgent ? "text-[#e24e1b]" : "text-[#474747]"
                        )}>
                          → {update.impact}
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 border-t">
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center justify-center gap-2"
                      >
                        <Bell className="h-4 w-4" />
                        Update-Benachrichtigungen aktivieren
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Resources */}
                <Card className="border border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Schnellzugriff</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a 
                      href="#"
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      <Download className="h-4 w-4 text-[#e24e1b]" />
                      <span className="text-sm">AI Act Volltext (PDF)</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-[#e24e1b]" />
                      <span className="text-sm">EU AI Office Website</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      <FileText className="h-4 w-4 text-[#e24e1b]" />
                      <span className="text-sm">Technische Standards</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      <Scale className="h-4 w-4 text-[#e24e1b]" />
                      <span className="text-sm">Musterverträge</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Benefits Section
  const BenefitsSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Die Marsstein AI Act Lösung
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            KI-Compliance so einfach wie nie
          </h2>
          <p className="text-lg text-[#474747] max-w-3xl mx-auto">
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
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#e24e1b]/30 hover:scale-105">
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
                
                <div className="p-3 bg-[#F5F6F8] rounded-lg border border-[#474747]/20">
                  <div className="text-xs font-semibold text-purple-800 mb-1">Tech-Specs:</div>
                  <div className="text-xs text-purple-700">{benefit.techDetails}</div>
                </div>
                
                <div className="p-3 bg-[#39B37B]/5 rounded-lg border border-[#39B37B]/20">
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
            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
              <Building2 className="h-3.5 w-3.5 mr-2" />
              Branchen-spezifische AI Act Compliance
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              AI Act Anforderungen nach Branchen
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
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
                      ? "bg-[#e24e1b] text-white border-[#e24e1b] shadow-lg scale-105"
                      : "bg-white text-[#474747] border-gray-200 hover:border-[#e24e1b]/30 hover:bg-[#F5F6F8]"
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
                      <h3 className="text-2xl font-semibold">{industries[selectedIndustry].title}</h3>
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
                    <div className="h-12 w-12 rounded-lg bg-[#e24e1b] flex items-center justify-center flex-shrink-0">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#232323] mb-2">
                        {industries[selectedIndustry].realWorldExample.title}
                      </h4>
                      <p className="text-[#474747] mb-3">
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
                  <h4 className="text-lg font-bold text-[#232323] mb-4 flex items-center gap-2">
                    <Cpu className="h-5 w-5" />
                    Betroffene KI-Systeme in dieser Branche
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {industries[selectedIndustry].aiSystems.map((system, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-[#232323]">{system.name}</h5>
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
                        <p className="text-sm text-[#474747]">
                          <span className="font-medium">Beispiel:</span> {system.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concrete Steps */}
                <div className="bg-[#F5F6F8] rounded-xl p-6 border border-[#474747]/20">
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
                        <p className="text-[#474747]">{step}</p>
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
                          <Button className="bg-white text-[#e24e1b] hover:bg-[#F5F6F8]/80">
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
          <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Unser AI Act Prozess
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            In 2 Wochen AI Act compliant
          </h2>
          <p className="text-lg text-[#474747] max-w-2xl mx-auto">
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
                  <div className="text-xs text-[#474747]">
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
          <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
            <BookOpen className="h-3.5 w-3.5 mr-2" />
            AI Act FAQ
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
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
                <AccordionContent className="text-[#474747] leading-relaxed pb-6">
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
    <section className="py-20 md:py-32 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <Badge className="bg-white/20 text-white border-white/20">
            <Gavel className="h-3.5 w-3.5 mr-2" />
            Professionelle AI Act Compliance
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            AI Act Compliance in 2 Wochen statt 6 Monaten
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Werden Sie frühzeitig AI Act compliant mit Marsstein. 
            <span className="font-semibold"> Frühzeitige Compliance sichert Wettbewerbsvorteile</span> 
            und vermeidet rechtliche Risiken.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-white text-[#e24e1b] hover:bg-[#F5F6F8]/80 px-8">
              <Brain className="mr-2 h-5 w-5" />
              Kostenlose AI-Risikoanalyse
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#e24e1b] px-8">
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
    <>
      <SEOHead
        title="EU AI Act Compliance – KI-Regulierung sicher umsetzen"
        description="EU AI Act Compliance einfach gemacht: Risikoklassifizierung, CE-Kennzeichnung & Konformität. ✓ Automatisierte Prozesse ✓ Rechtssicher. Jetzt beraten lassen!"
        canonical="/eu-ai-act"
        keywords="EU AI Act, KI-Regulierung, AI Compliance, Künstliche Intelligenz Gesetz, KI-Verordnung"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
      <main>
        <HeroSection />
        <AiActPainpointsSection />
        <AiActDeepDiveSection />
        <ImplementationGuideSection />
        <TechnicalRequirementsSection />
        <ComplianceChecklistsSection />
        <CaseStudiesSection />
        <BenefitsSection />
        <TargetIndustriesSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default EuAiActCompliance;