import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Shield,
  Globe,
  FileText,
  CheckCircle,
  Lock,
  Users,
  TrendingUp,
  AlertCircle,
  Ban,
  Zap,
  Award,
  Download,
  CheckCircle2,
  Sparkles,
  Clock,
  Bell,
  ArrowRight,
  Tag,
  Send,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

const TypewriterText: React.FC<{ text: string; delay: number; isInView: boolean; speed?: number }> = ({
  text,
  delay,
  isInView,
  speed = 20
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isInView) {
      setDisplayedText("");
      return;
    }

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setShowCursor(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, isInView, speed]);

  return (
    <span className="relative font-mono">
      {displayedText}
      {showCursor && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-4 bg-[#e24e1b] ml-0.5"
        />
      )}
    </span>
  );
};

const Confetti: React.FC<{ trigger: boolean }> = ({ trigger }) => {
  const particles = Array.from({ length: 15 });

  return (
    <>
      {trigger && particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
          }}
          animate={{
            x: (Math.random() - 0.5) * 100,
            y: -50 - Math.random() * 50,
            opacity: 0,
            scale: 0,
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.02,
            ease: "easeOut"
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ['#e24e1b', '#39B37B', '#FFD700'][i % 3]
          }}
        />
      ))}
    </>
  );
};

const OnboardingAnimation: React.FC<{ isInView: boolean }> = ({ isInView }) => {
  const [activeField, setActiveField] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAutofill, setShowAutofill] = useState(false);

  const fields = [
    { label: "公司名称 (Firmenname)", text: "深圳电子有限公司" },
    { label: "地址 (Adresse)", text: "深圳市南山区科技园" },
    { label: "行业 (Branche)", text: "电子商务 / E-Commerce" }
  ];

  useEffect(() => {
    if (!isInView) return;

    const timeline = [
      { delay: 100, action: () => setActiveField(0) },
      { delay: 800, action: () => setActiveField(1) },
      { delay: 1500, action: () => setActiveField(2) },
      { delay: 2200, action: () => setShowSuccess(true) },
      { delay: 2500, action: () => setShowAutofill(true) }
    ];

    const timeouts = timeline.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div className="relative w-full rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 md:p-8 border-2 border-[#e24e1b] overflow-visible min-h-[350px] sm:min-h-[400px]">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#e24e1b 1px, transparent 1px), linear-gradient(90deg, #e24e1b 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative space-y-3 sm:space-y-4">
        {fields.map((field, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: i * 0.3, duration: 0.4 }}
            className="space-y-1.5"
          >
            <div className="text-xs font-medium text-slate-900">{field.label}</div>
            <div className={`h-10 bg-white rounded-lg border-2 transition-all duration-300 relative overflow-hidden ${
              activeField === i ? 'border-[#e24e1b] shadow-lg shadow-orange-200' : 'border-orange-200'
            }`}>
              <div className="absolute inset-0 flex items-center px-3 text-sm text-slate-900">
                {activeField >= i && (
                  <TypewriterText
                    text={field.text}
                    delay={0}
                    isInView={isInView && activeField >= i}
                    speed={25}
                  />
                )}
              </div>
              {activeField === i && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e24e1b] origin-left"
                />
              )}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showSuccess ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="pt-4 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={showSuccess ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-green-50 border-2 border-green-500 rounded-lg px-4 py-2"
          >
            <motion.div
              animate={showSuccess ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </motion.div>
            <span className="text-sm font-bold text-green-700">基本数据已保存 (Grunddaten erfasst)</span>
            <div className="absolute -top-2 -right-2">
              <Confetti trigger={showSuccess} />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={showAutofill ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="mt-4"
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border-2 border-orange-200">
            <div className="flex items-start gap-3">
              <motion.div
                animate={showAutofill ? { rotate: 360 } : {}}
                transition={{ duration: 1, ease: "linear" }}
                className="w-8 h-8 rounded-full bg-[#e24e1b] flex items-center justify-center flex-shrink-0"
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 text-sm mb-2">自动填充 (Automatisch vorbefüllt):</div>
                <div className="space-y-1">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={showAutofill ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>数据处理流程 (Verarbeitungsprozesse): 12 erkannt</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={showAutofill ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>IT系统和工具 (IT-Systeme & Tools): 8 identifiziert</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={showAutofill ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>公司信息已完成 (Unternehmensinformationen vervollständigt)</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ThinkingDots: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={isActive ? {
            scale: [1, 1.3, 1],
            opacity: [0.3, 1, 0.3]
          } : {}}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="w-1.5 h-1.5 rounded-full bg-[#e24e1b]"
        />
      ))}
    </div>
  );
};

const GenerationAnimation: React.FC<{ isInView: boolean }> = ({ isInView }) => {
  const [stage, setStage] = useState(0);

  const sections = [
    { title: "隐私政策 (Privacy Policy)", content: "根据DSGVO第13/14条...", delay: 0 },
    { title: "处理活动记录 (RoPA)", content: "Art. 30 DSGVO - 数据处理活动...", delay: 800 },
    { title: "标准合同条款 (SCCs)", content: "中国 ↔ 欧盟数据传输...", delay: 1600 }
  ];

  useEffect(() => {
    if (!isInView) {
      setStage(0);
      return;
    }

    const timers = sections.map(({ delay }, i) =>
      setTimeout(() => setStage(i + 1), delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div className="relative w-full rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 border-2 border-slate-200 min-h-[350px] sm:min-h-[400px]">
      <div className="mb-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#e24e1b] flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-slate-900">AI 正在工作 (KI arbeitet)</span>
        <ThinkingDots isActive={isInView} />
      </div>

      <div className="space-y-4">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={stage > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-lg border-2 border-slate-200 p-4"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h4 className="font-bold text-slate-900 text-sm">{section.title}</h4>
              <motion.div
                initial={{ scale: 0 }}
                animate={stage > i ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3 }}
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              </motion.div>
            </div>
            <p className="text-xs text-slate-600">{section.content}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={stage === sections.length ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6"
      >
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-2 border-green-500">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <div className="font-bold text-green-800">文档已生成! (Dokument generiert!)</div>
              <div className="text-sm text-green-700">立即可用 (Sofort einsatzbereit)</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function CnGdpr() {
  const [salesChannel, setSalesChannel] = useState("");
  const [euRep, setEuRep] = useState("no");
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: "",
    betaAccess: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target?.getAttribute('role') === 'presentation' || target?.hasAttribute('data-radix-select-viewport')) {
        return;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, betaAccess: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const fullFormData = {
      ...formData,
      salesChannel,
      euRep,
    };

    console.log("Form submitted:", fullFormData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        companyName: "",
        email: "",
        phone: "",
        message: "",
        betaAccess: false,
      });
      setSalesChannel("");
      setEuRep("no");
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          DSGVO China: Compliance für chinesische Unternehmen | Marsstein
        </title>
        <meta
          name="description"
          content="DSGVO-Lösungen für chinesische Unternehmen im EU-Markt. Art. 27 EU-Vertreter, Privacy Policy & SCCs automatisch. Auf Mandarin. ✓ Schnelle Implementierung"
        />
        <meta name="keywords" content="DSGVO China, GDPR China, EU Vertreter China, Art 27 DSGVO, chinesische Unternehmen DSGVO, Amazon Seller GDPR China, TikTok Shop DSGVO" />
        <link rel="canonical" href="https://marsstein.ai/dsgvo-china" />
        <meta property="og:title" content="DSGVO China: Compliance für chinesische Unternehmen" />
        <meta property="og:description" content="DSGVO-Lösungen für chinesische Unternehmen im EU-Markt. Art. 27 EU-Vertreter, Privacy Policy & SCCs automatisch." />
        <meta property="og:url" content="https://marsstein.ai/dsgvo-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DSGVO China: Compliance für chinesische Unternehmen" />
        <meta name="twitter:description" content="DSGVO-Lösungen für chinesische Unternehmen im EU-Markt. Automatisch auf Mandarin." />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div className="container relative mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                DSGVO-Compliance für chinesische Unternehmen
              </h1>
              <p className="mb-8 text-xl text-slate-300 lg:text-2xl">
                Privacy Policy, Art. 27 EU-Vertreter, Verarbeitungsverzeichnis – alles automatisch generiert. Auf Mandarin geführt, EU-konform, ohne Anwalt.
              </p>

              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-[#e24e1b] text-white hover:bg-[#c43d0f]"
                  asChild
                >
                  <a href="/beta">Kostenlosen DSGVO-Check starten</a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
                  <a href="/beta">Demo buchen</a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#e24e1b]" />
                  <span>Automatische Dokumentenerstellung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#e24e1b]" />
                  <span>Mandarin-Interface</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#e24e1b]" />
                  <span>Schnelle Implementierung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#e24e1b]" />
                  <span>EU-Hosting in Deutschland</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#e24e1b]" />
                  <span>Art. 27 DSGVO-Vertreter inkl.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-6xl"
            >
              <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
                Die vier größten DSGVO-Hürden für chinesische Unternehmen in Europa
              </h2>
              <p className="mb-12 text-center text-lg text-slate-600">
                Verstehen Sie die rechtlichen Herausforderungen – und wie Marsstein sie automatisiert löst
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    EU-Vertreter (Art. 27)
                  </h3>
                  <p className="text-slate-600">
                    Wer EU-Kundendaten verarbeitet, braucht einen EU-Vertreter – sonst drohen Bußgelder und Plattformsperren.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    Sprache & Komplexität
                  </h3>
                  <p className="text-slate-600">
                    DSGVO-Texte gibt's meist nur DE/EN; Fehlübersetzungen bedeuten Rechtsrisiko und hohe Beratungskosten.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    Bußgelder
                  </h3>
                  <p className="text-slate-600">
                    Strafen bis 4 % des weltweiten Umsatzes; schon formale Fehler im Verarbeitungsverzeichnis können teuer werden.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    PIPL vs. DSGVO
                  </h3>
                  <p className="text-slate-600">
                    PIPL verlangt „separate consent", DSGVO SCC + Dokumentation – ohne Strategie: Grauzone.
                  </p>
                </motion.div>
              </div>

              <div className="mt-10 text-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white"
                  asChild
                >
                  <a href="#solution">Erfahren Sie, wie wir diese Probleme lösen</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="solution" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-6xl"
            >
              <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
                So einfach geht DSGVO-Compliance mit Marsstein
              </h2>
              <p className="mb-12 text-center text-lg text-slate-600">
                In drei einfachen Schritten zur vollständigen DSGVO-Compliance – auf Chinesisch geführt
              </p>

              <div className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid gap-8 lg:grid-cols-2 items-center"
                >
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e24e1b] px-4 py-2 text-white">
                      <span className="text-sm font-bold">步骤 1 / Schritt 1</span>
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-slate-900">
                      入职培训 (Onboarding)
                    </h3>
                    <p className="mb-6 text-lg text-slate-600">
                      Unternehmensdaten einmal erfassen – der Rest wird automatisch vorbefüllt. Beantworten Sie einfache Fragen auf Chinesisch, unsere KI erkennt automatisch Ihre Verarbeitungsprozesse.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">Mandarin-geführter Fragebogen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">KI-gestützte Prozesserkennung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">Automatische Vorbefüllung</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <OnboardingAnimation isInView={true} />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid gap-8 lg:grid-cols-2 items-center"
                >
                  <div className="lg:order-2">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e24e1b] px-4 py-2 text-white">
                      <span className="text-sm font-bold">步骤 2 / Schritt 2</span>
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-slate-900">
                      自动生成 (Automatische Generierung)
                    </h3>
                    <p className="mb-6 text-lg text-slate-600">
                      Experten-Vorlagen werden automatisch befüllt – sofort einsatzbereit. Alle DSGVO-Dokumente in Deutsch, Englisch und Chinesisch.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">Privacy Policy (DE/EN/CN)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">Verarbeitungsverzeichnis (Art. 30)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">Standard Contractual Clauses (SCCs)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:order-1">
                    <GenerationAnimation isInView={true} />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid gap-8 lg:grid-cols-2 items-center"
                >
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e24e1b] px-4 py-2 text-white">
                      <span className="text-sm font-bold">步骤 3 / Schritt 3</span>
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-slate-900">
                      完整文档 (Vollständige Dokumentation)
                    </h3>
                    <p className="mb-6 text-lg text-slate-600">
                      Jederzeit audit-ready. Alle Ihre DSGVO-Dokumente werden automatisch aktuell gehalten und sind sofort verfügbar.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">Art. 27 EU-Vertreter-Service</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">GDPR Verified Badge für Ihre Website</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-slate-700">Automatische Updates bei Gesetzesänderungen</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm">
                      <div className="mb-6">
                        <div className="mb-2 text-sm font-semibold text-slate-700">完整文档 (Vollständige Dokumentation)</div>
                        <div className="text-xs text-slate-500">自动保持最新 • 随时可供审核 (Automatisch aktuell • Jederzeit audit-ready)</div>
                      </div>
                      <div className="space-y-3">
                        {[
                          { name: "处理活动记录 (Verarbeitungsverzeichnis)", ref: "Art. 30 DSGVO" },
                          { name: "技术组织措施 (TOM-Dokumentation)", ref: "Art. 32 DSGVO" },
                          { name: "隐私政策 (Datenschutzerklärung)", ref: "Art. 13/14 DSGVO" },
                          { name: "删除概念 (Löschkonzept)", ref: "Art. 17 DSGVO" }
                        ].map((doc, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-slate-900">{doc.name}</div>
                              <div className="text-xs text-slate-500">{doc.ref}</div>
                            </div>
                            <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              Live
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border border-blue-200">
                        <div className="flex items-start gap-3">
                          <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-blue-900 text-sm mb-1">自动更新 (Automatische Aktualisierung)</div>
                            <div className="text-xs text-blue-700">
                              Gesetzesänderungen werden automatisch erkannt und in Ihre Dokumentation integriert. Sie werden sofort benachrichtigt, wenn Handlungsbedarf besteht.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 mx-auto max-w-4xl p-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F6F8] via-white to-[#e24e1b]/5 border-2 border-[#e24e1b]/20 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#e24e1b]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#39B37B]/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0 mb-4">
                      <Sparkles className="w-3 h-3 mr-1" />
                      LIMITED BETA ACCESS
                    </Badge>
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#232323] to-[#474747] bg-clip-text text-transparent mb-3">
                      Werden Sie Beta-Tester
                    </h4>
                    <p className="text-[#474747] text-lg">
                      Gestalten Sie die Zukunft der Compliance mit uns
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e24e1b]/10 hover:border-[#e24e1b]/30 transition-all duration-300 hover:shadow-lg">
                      <Users className="w-5 h-5 text-[#e24e1b] mb-2" />
                      <span className="block text-sm font-semibold text-[#232323]">Exklusive Community</span>
                      <span className="text-xs text-[#474747]">Direkter Draht zum Team</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#39B37B]/20 hover:border-[#39B37B]/40 transition-all duration-300 hover:shadow-lg">
                      <Tag className="w-5 h-5 text-[#39B37B] mb-2" />
                      <span className="block text-sm font-semibold text-[#232323]">50% Rabatt</span>
                      <span className="text-xs text-[#474747]">Nach der Beta-Phase</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e24e1b]/10 hover:border-[#e24e1b]/30 transition-all duration-300 hover:shadow-lg">
                      <Sparkles className="w-5 h-5 text-[#e24e1b] mb-2" />
                      <span className="block text-sm font-semibold text-[#232323]">Kostenlos testen</span>
                      <span className="text-xs text-[#474747]">Keine Kreditkarte nötig</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/beta"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-xl hover:from-[#d63f14] hover:to-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:scale-[1.02]"
                    >
                      Jetzt Beta-Zugang sichern
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/preise"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#474747] bg-white/90 backdrop-blur-sm border-2 border-[#232323]/20 rounded-xl hover:bg-[#F5F6F8] hover:border-[#232323]/30 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Preise ansehen
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-6xl"
            >
              <div className="text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                  为什么选择 Marsstein? (Warum Marsstein?)
                </h2>
                <p className="text-lg text-slate-600">
                  Compliance, die sich einfach erledigt
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-[#e24e1b] transition-all h-full">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex items-center justify-center text-white">
                        <FileText className="h-8 w-8" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-slate-900">
                        Automatisierte Dokumente
                      </h3>
                      <p className="text-slate-600">
                        KI-basierte Dokumentenerstellung ersetzt Handarbeit und hält Inhalte konsistent – fertige Texte in Deutsch, Englisch und Chinesisch (DE/EN/中文).
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-[#e24e1b] transition-all h-full">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex items-center justify-center text-white">
                        <Clock className="h-8 w-8" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-slate-900">
                        Echtzeit-Audit-Trail
                      </h3>
                      <p className="text-slate-600">
                        Jede Änderung, Freigabe und jeder Kommentar wird lückenlos protokolliert – Nachweise für Plattformen und Behörden per Klick.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-[#e24e1b] transition-all h-full">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex items-center justify-center text-white">
                        <Bell className="h-8 w-8" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-slate-900">
                        Automatische Gesetzesänderungen
                      </h3>
                      <p className="text-slate-600">
                        Neue Anforderungen fließen automatisch ein; klare Hinweise zeigen Handlungsbedarf.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-[#e24e1b] transition-all h-full">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex items-center justify-center text-white">
                        <Users className="h-8 w-8" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-slate-900">
                        Intuitive Team-Workflows
                      </h3>
                      <p className="text-slate-600">
                        Klare Aufgaben, Zuständigkeiten und Fristen – ohne Juristensprache.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0 mb-4">
                <Send className="w-3 h-3 mr-1" />
                联系我们 (Kontakt)
              </Badge>
              <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                Der EU-Markt wartet nicht – starten Sie jetzt compliant und sicher.
              </h2>
              <p className="text-lg text-slate-600">
                Erhalten Sie innerhalb von 24 Stunden eine individuelle Einschätzung für Ihr Unternehmen
              </p>
            </div>

            <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card className="border-2 border-slate-200 shadow-lg">
                <CardContent className="pt-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {submitStatus === "success" && (
                      <div className="rounded-lg bg-green-50 border border-green-200 p-4 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-1">Vielen Dank für Ihre Anfrage!</h4>
                          <p className="text-sm text-green-700">
                            Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-red-900 mb-1">Fehler beim Absenden</h4>
                          <p className="text-sm text-red-700">
                            Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-slate-700 font-semibold">
                          Firmenname (公司名称) <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="z.B. 深圳电子有限公司"
                          required
                          disabled={isSubmitting}
                          className="border-slate-300 focus:border-[#e24e1b]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-semibold">
                          E-Mail (电子邮件) <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ihre@email.com"
                          required
                          disabled={isSubmitting}
                          className="border-slate-300 focus:border-[#e24e1b]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-semibold">
                        Telefon (电话)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+86 xxx xxxx xxxx"
                        disabled={isSubmitting}
                        className="border-slate-300 focus:border-[#e24e1b]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="salesChannel" className="text-slate-700 font-semibold">
                        Wie verkaufen Sie in die EU? (欧盟销售渠道) <span className="text-[#e24e1b]">*</span>
                      </Label>
                      <Select value={salesChannel} onValueChange={setSalesChannel} required disabled={isSubmitting}>
                        <SelectTrigger className="border-slate-300 focus:border-[#e24e1b]">
                          <SelectValue placeholder="Bitte wählen..." />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          sideOffset={5}
                          onOpenAutoFocus={(e) => e.preventDefault()}
                          onCloseAutoFocus={(e) => e.preventDefault()}
                        >
                          <SelectItem value="amazon">Amazon</SelectItem>
                          <SelectItem value="tiktok">TikTok Shop</SelectItem>
                          <SelectItem value="temu">Temu</SelectItem>
                          <SelectItem value="shopify">Shopify / Eigener Online-Shop</SelectItem>
                          <SelectItem value="b2b">B2B / Großhandel</SelectItem>
                          <SelectItem value="multiple">Mehrere Kanäle</SelectItem>
                          <SelectItem value="other">Andere</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-slate-700 font-semibold">
                        Haben Sie bereits einen Art. 27 EU-Vertreter? <span className="text-[#e24e1b]">*</span>
                      </Label>
                      <RadioGroup value={euRep} onValueChange={setEuRep} disabled={isSubmitting} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="rep-yes" disabled={isSubmitting} className="border-slate-300 text-[#e24e1b]" />
                          <Label htmlFor="rep-yes" className="font-normal cursor-pointer">
                            Ja, wir haben bereits einen EU-Vertreter
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="rep-no" disabled={isSubmitting} className="border-slate-300 text-[#e24e1b]" />
                          <Label htmlFor="rep-no" className="font-normal cursor-pointer">
                            Nein, wir benötigen einen
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="rep-unknown" disabled={isSubmitting} className="border-slate-300 text-[#e24e1b]" />
                          <Label htmlFor="rep-unknown" className="font-normal cursor-pointer">
                            Weiß nicht / Bin mir unsicher
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-semibold">
                        Ihre Nachricht (您的信息)
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Beschreiben Sie Ihre aktuelle Situation oder stellen Sie Fragen..."
                        rows={4}
                        disabled={isSubmitting}
                        className="border-slate-300 focus:border-[#e24e1b] resize-none"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="betaAccess"
                        checked={formData.betaAccess}
                        onCheckedChange={handleCheckboxChange}
                        disabled={isSubmitting}
                        className="mt-1 border-slate-300 data-[state=checked]:bg-[#e24e1b] data-[state=checked]:border-[#e24e1b]"
                      />
                      <Label htmlFor="betaAccess" className="font-normal text-sm cursor-pointer leading-relaxed">
                        Ich möchte den <strong>Beta-Zugang</strong> erhalten und die Plattform kostenlos testen
                      </Label>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white hover:from-[#d63f14] hover:to-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="w-4 h-4 mr-2 animate-spin" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Anfrage absenden
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-slate-500 text-center mt-3">
                        Antwort innerhalb von 24 Stunden • Kostenlose Erstberatung • Keine Verpflichtung
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <Card className="border-2 border-slate-200 shadow-lg">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Direkter Kontakt</h3>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-start gap-3 mb-2">
                          <Mail className="w-5 h-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-slate-900">E-Mail</div>
                            <a href="mailto:info@marsstein.ai" className="text-[#e24e1b] hover:underline">
                              info@marsstein.ai
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 ml-8">Antwort innerhalb von 24 Stunden</p>
                      </div>

                      <div>
                        <div className="flex items-start gap-3 mb-2">
                          <Phone className="w-5 h-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-slate-900">Telefon</div>
                            <a href="tel:+4917670560292" className="text-[#e24e1b] hover:underline">
                              +49 176 70560292
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 ml-8">Mo-Fr 9:00-18:00 Uhr</p>
                      </div>

                      <div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">Adresse</div>
                            <div className="text-slate-600 text-sm leading-relaxed">
                              Marsstein GmbH i.G.<br />
                              Bücklestraße 3<br />
                              78467 Konstanz<br />
                              Deutschland
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-white to-[#e24e1b]/5 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Calendar className="w-6 h-6 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Kostenlose Erstberatung</h4>
                        <p className="text-slate-600 text-sm">
                          Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unseren Compliance-Experten.
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        30 Minuten Expertengespräch
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        Individuelle Lösungsvorschläge
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        Unverbindlich & kostenlos
                      </li>
                    </ul>

                    <Button
                      className="w-full bg-[#e24e1b] text-white hover:bg-[#c43d0f]"
                      asChild
                    >
                      <a href="/beta">
                        <Calendar className="w-4 h-4 mr-2" />
                        Termin buchen
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
                Häufig gestellte Fragen
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Brauche ich wirklich einen EU-Vertreter, wenn ich nur online verkaufe?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Ja. Art. 27 DSGVO verlangt einen EU-Vertreter für alle Nicht-EU-Unternehmen, die personenbezogene Daten von EU-Bürgern verarbeiten (Name, Adresse, E-Mail bei Bestellung). Dies gilt auch für reine Online-Shops auf Amazon, TikTok Shop oder eigenen Websites. Ohne EU-Vertreter drohen Bußgelder bis €525.000 (Precedent-Fall).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Was sind Standard Contractual Clauses (SCCs)?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    SCCs sind von der EU-Kommission vorgegebene Vertragsklauseln für Datentransfers außerhalb der EU. Sie sind seit dem Schrems-II-Urteil (2020) die wichtigste Rechtsgrundlage für China ↔ EU Datenaustausch. Marsstein generiert diese automatisch für Sie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Wie funktioniert die PIPL-GDPR-Synchronisation?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Marsstein erstellt Ihre DSGVO-Dokumente so, dass sie gleichzeitig PIPL-konform sind. Beispiel: Wir dokumentieren sowohl 'separate consent' (PIPL) als auch transparente Verarbeitungszwecke (DSGVO) in einem Workflow. So erfüllen Sie beide Rechtssysteme ohne Widersprüche.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Ist die Plattform wirklich komplett auf Chinesisch?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Ja. Das gesamte Interface, alle Fragen, Hilfe-Texte und der Support-Chat sind auf Mandarin verfügbar. Die generierten Dokumente erhalten Sie in drei Sprachen: Deutsch, Englisch und Chinesisch (vereinfacht).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Was passiert, wenn sich die DSGVO ändert?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Ihre Dokumente werden automatisch aktualisiert. Professional- und Enterprise-Kunden erhalten proaktive Benachrichtigungen über relevante Gesetzesänderungen auf Chinesisch. Sie müssen sich nicht selbst um Updates kümmern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Wie lange dauert die Implementierung wirklich?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Onboarding: 30-60 Minuten | Dokumentenerstellung: 1-2 Tage | EU-Vertreter-Setup: 3-5 Tage. <strong>Gesamt: 7 Tage bis zur vollständigen DSGVO-Compliance.</strong> Im Notfall (z.B. drohende Account-Sperrung) können wir die wichtigsten Dokumente in 48 Stunden bereitstellen.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
