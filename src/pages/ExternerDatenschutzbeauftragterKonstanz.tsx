import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import {
  Check, Shield, Star, ChevronRight, Phone,
  UserCheck, Clock, Cpu, Mail, Calendar
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ExternerDatenschutzbeauftragterKonstanz: React.FC = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      privacy: false
    });

    const handleInputChange = (field: string, value: string | boolean) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.privacy) {
        toast({
          title: 'Fehler',
          description: 'Bitte akzeptieren Sie die Datenschutzbestimmungen.',
          variant: "destructive",
        });
        return;
      }

      setIsLoading(true);

      try {
        const userMessage = formData.message.trim();
        const sanitizedData = {
          firstName: formData.firstName.trim().slice(0, 50),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim().slice(0, 20),
          company: formData.company.trim().slice(0, 100),
          topic: 'externer_dsb_konstanz',
          message: userMessage
            ? `[Anfrage von Konstanz-Seite] ${userMessage.slice(0, 2000)}`
            : '[Anfrage von Konstanz-Seite] Interesse an externem DSB-Paket',
          isDemoRequest: false,
          newsletter: false,
          userGroup: 'dsb_inquiries',
          source: 'landing_page_konstanz'
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(sanitizedData.email)) {
          toast({
            title: 'Fehler',
            description: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }

        const response = await fetch('/api/contact-submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sanitizedData)
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Fehler beim Senden');
        }

        toast({
          title: 'Erfolgreich gesendet!',
          description: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
        });

        setFormData({
          firstName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          privacy: false
        });

        setTimeout(() => {
          navigate('/thank-you');
        }, 1500);

      } catch (error) {
        toast({
          title: 'Fehler',
          description: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    const faqs = [
    {
      question: "Muss der externe Datenschutzbeauftragte in Konstanz sitzen?",
      answer: "Nein. Entscheidend sind Qualifikation, Erreichbarkeit und saubere Dokumentation. Wir arbeiten remote-first (Reaktionszeit <24h) und stellen über unser zertifiziertes Netzwerk den passenden DSB. Vor-Ort-Termine sind je nach Bedarf über Netzwerkpartner möglich."
    },
    {
      question: "Warum kombiniert Marsstein Software mit persönlicher Beratung?",
      answer: (<>
        Reine Software kann Ihre individuellen Prozesse nicht vollständig abbilden, und ein reiner Berater ist oft kostenintensiv. Unsere Plattform automatisiert Routineaufgaben wie Dokumentation und Schulungen. Ihr persönlicher DSB konzentriert sich dadurch auf die strategisch wichtigen Themen für Ihr Unternehmen.
      </>)
    },
    {
      question: "Wie läuft die Beratung für Unternehmen in Konstanz ab?",
      answer: "Wir arbeiten primär digital via E-Mail, Telefon und Video-Call – schnell, flexibel und kostensparend für Sie. So können wir innerhalb von 24h reagieren und Sie unterstützen, ohne Anfahrtskosten zu berechnen."
    },
    {
      question: "Was kostet ein externer DSB für Unternehmen in Konstanz?",
      answer: (<>
        Ab 69€/Monat für die Compliance-Plattform (ohne DSB-Rollenübernahme), ab 199€/Monat inkl. persönlichem Datenschutzbeauftragten mit Rollenübernahme. <Link to="/preise" className="text-[#e24e1b] hover:underline">Alle Pakete im Überblick</Link>.
      </>)
    },
    {
      question: "Welche Branchen in der Bodensee-Region betreuen Sie?",
      answer: "Wir haben Expertise in typischen Wirtschaftszweigen der Region: Tourismus & Hotellerie, Pharma & Life Sciences, IT-Dienstleister, Einzelhandel, Gesundheitswesen, Produktionsbetriebe."
    },
    {
      question: "Wie schnell können Sie starten?",
      answer: "1. Nach Vertragsabschluss: sofortiger Software-Zugang. 2. Innerhalb 24-48h: erstes Beratungsgespräch (Video/Telefon). 3. In 7 Tagen: Onboarding komplett, DSB formal benannt."
    },
    {
      question: "Kennen Sie die Datenschutz-Anforderungen in Baden-Württemberg?",
      answer: (<>
        Ja, unsere Experten sind mit den Anforderungen und der Praxis des <Link to="/dsgvo" className="text-[#e24e1b] hover:underline">LfDI Baden-Württemberg</Link> vertraut. Unsere Plattform und Prozesse sind darauf ausgelegt, die spezifischen Anforderungen für Unternehmen in der Region zu erfüllen.
      </>)
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "MARSSTEIN - Externer Datenschutzbeauftragter Konstanz mit Compliance-Plattform",
        "description": "Ihr externer Datenschutzbeauftragter in Konstanz. Wir kombinieren zertifizierte Experten mit einer intelligenten Software für maximale Rechtssicherheit bei minimalen Kosten. Ab 29€/Monat.",
        "url": "https://marsstein.ai/externer-datenschutzbeauftragter-konstanz",
        "telephone": "+49-XXX-XXXXXXX",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Konstanz",
          "addressRegion": "Baden-Württemberg",
          "addressCountry": "DE"
        },
        "areaServed": { "@type": "City", "name": "Konstanz" },
        "serviceType": "Datenschutzbeauftragter",
        "provider": { "@type": "Organization", "name": "MARSSTEIN", "url": "https://marsstein.ai" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => {
            const extractText = (node: any): string => {
            if (typeof node === 'string') return node;
            if (node === null || node === undefined) return '';
            if (Array.isArray(node)) return node.map(extractText).join('');
            if (node.props?.children) return extractText(node.props.children);
            return '';
          };
          return {
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": typeof faq.answer === 'string' ? faq.answer : extractText(faq.answer)
            }
          };
        })
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://marsstein.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Externer Datenschutzbeauftragter", "item": "https://marsstein.ai/externer-datenschutzbeauftragter" },
          { "@type": "ListItem", "position": 3, "name": "Konstanz", "item": "https://marsstein.ai/externer-datenschutzbeauftragter-konstanz" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <SEOHead
        title="Externer Datenschutzbeauftragter Konstanz | Software + Experte"
        description="Externer Datenschutzbeauftragter in Konstanz: Unsere Marsstein-Methode kombiniert persönliche Experten-Beratung mit einer KI-Plattform. ✓ Smart Matching ✓ Lawyer-in-the-Loop ✓ Ab 29€/Monat"
        canonical="/externer-datenschutzbeauftragter-konstanz"
        structuredData={structuredData}
      />
      <Header />
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-[#e24e1b]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/externer-datenschutzbeauftragter" className="text-gray-600 hover:text-[#e24e1b]">Externer Datenschutzbeauftragter</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">Konstanz</span>
          </nav>
        </div>
      </section>

      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-sm font-medium text-[#e24e1b] mb-3">Zertifizierte Experten + Compliance-Plattform</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#232323] leading-tight">
                Externer Datenschutz­beauftragter für Unternehmen in Konstanz
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-6">
                <span className="font-bold text-[#232323]">Ab 199€/Monat</span> – externer DSB inkl. Plattform, audit-ready Nachweise jederzeit abrufbar
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Wir kombinieren zertifizierte DSBs aus unserem Netzwerk mit einer Compliance-Plattform. Die Software automatisiert Routineaufgaben – dadurch zahlen Sie weniger Beratungsstunden.
              </p>

              {/* 3 Bullet Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#39B37B] shrink-0" />
                  <span className="text-gray-700"><span className="font-semibold">Sofort startklar</span> – Onboarding in 7 Tagen</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#39B37B] shrink-0" />
                  <span className="text-gray-700"><span className="font-semibold">Fixpreis statt Stundenchaos</span> – planbare Kosten</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#39B37B] shrink-0" />
                  <span className="text-gray-700"><span className="font-semibold">Audit-ready</span> – alle Nachweise dokumentiert</span>
                </div>
              </div>

              {/* 2-stufiger CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl font-bold text-lg px-8 py-6" asChild>
                  <a href="https://calendly.com/marsstein-info/marsstein-intro" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />Erstgespräch (15 Min) – Angebot in 24h
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-[#e24e1b] hover:text-[#e24e1b] font-semibold text-base px-6 py-6" asChild>
                  <a href="mailto:info@marsstein.ai">
                    <Mail className="mr-2 h-5 w-5" />Fixpreis-Angebot per E-Mail
                  </a>
                </Button>
              </div>

              {/* CTA Microcopy */}
              <p className="text-sm text-gray-500 mb-8">
                Monatlich kündbar · Keine Setup-Gebühr · Start in 7 Tagen
              </p>

              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-[#e24e1b]" />
                  <span>Haftung vertraglich geregelt</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#e24e1b]" />
                  <span>Zertifizierte DSBs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#e24e1b]" />
                  <span>Reaktion &lt;24h</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Cpu className="h-4 w-4 text-[#e24e1b]" />
                  <span>EU-Hosting</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Preis-Vergleich Card */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Card className="border-2 border-[#e24e1b] shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-[#232323] mb-6 text-center">Klassisch vs. Systembasiert</h3>

                  <div className="space-y-6">
                    {/* Klassisch */}
                    <div className="bg-gray-100 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-600">Klassischer Ansatz</span>
                        <span className="text-gray-400 line-through">400–800€/Monat</span>
                      </div>
                      <div className="text-sm text-gray-500">Viel manuelle Dokumentation, hoher Stundenaufwand</div>
                    </div>

                    {/* Marsstein */}
                    <div className="bg-[#e24e1b]/5 border-2 border-[#e24e1b] rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-[#232323]">Systembasiert</span>
                        <span className="text-2xl font-bold text-[#e24e1b]">ab 199€/Monat</span>
                      </div>
                      <div className="text-sm text-gray-600">Plattform-gestützt: weniger Stunden, gleiches Pflichtenpaket</div>
                    </div>

                    {/* Erklärung */}
                    <div className="text-center text-sm text-gray-600 pt-2">
                      <p><span className="font-semibold">Routine sauber systematisiert</span></p>
                      <p className="text-gray-500">VVT, TOMs, Schulungen, Fristenmanagement – automatisiert</p>
                    </div>

                    {/* Credibility Microcopy */}
                    <p className="text-xs text-gray-400 text-center pt-2 border-t border-gray-200 mt-4">
                      Marktübliche Bandbreite je nach Mitarbeiterzahl & Komplexität
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SO LÄUFT'S AB */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-4">So starten Sie mit uns</h2>
            <p className="text-lg text-gray-600">In 4 einfachen Schritten zu Ihrem externen Datenschutzbeauftragten</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="text-center">
              <div className="bg-[#e24e1b] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-[#232323] mb-2">Erstgespräch</h3>
              <p className="text-sm text-gray-600">15 Min. kostenlos – wir klären Ihren Bedarf</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-center">
              <div className="bg-[#e24e1b] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-[#232323] mb-2">Angebot in 24h</h3>
              <p className="text-sm text-gray-600">Transparenter Fixpreis, keine versteckten Kosten</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-center">
              <div className="bg-[#e24e1b] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-[#232323] mb-2">Onboarding</h3>
              <p className="text-sm text-gray-600">Einrichtung in 7 Tagen, formale Benennung inkl. notwendiger Meldungen</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-center">
              <div className="bg-[#e24e1b] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-[#232323] mb-2">Laufender Betrieb</h3>
              <p className="text-sm text-gray-600">Fristen, Doku, Schulungen – wir kümmern uns</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center mt-10">
            <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl font-bold" asChild>
              <a href="https://calendly.com/marsstein-info/marsstein-intro" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />Jetzt Erstgespräch buchen
              </a>
            </Button>
          </motion.div>
        </div>
      </section>



      {/* 3. LEISTUNGEN - Was wir übernehmen */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-4">Was wir als Ihr externer DSB übernehmen</h2>
            <p className="text-lg text-gray-600">Konkrete Leistungen – klar definiert, im Fixpreis enthalten</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Linke Spalte: DSB-Leistungen */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card className="h-full border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#e24e1b] rounded-lg p-2">
                      <UserCheck className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#232323]">Ihr persönlicher DSB</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700"><span className="font-semibold">Formale Benennung</span> als externer DSB (inkl. notwendiger Meldungen)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700"><span className="font-semibold">Haftung</span> im vereinbarten Leistungsumfang</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ansprechpartner für <span className="font-semibold">Betroffenenanfragen</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700"><span className="font-semibold">Support bei Datenpannen</span> und Vorfällen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700">Regelmäßige <span className="font-semibold">Statusberichte</span> an Geschäftsführung</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Rechte Spalte: Software-Leistungen */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="h-full border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-600 rounded-lg p-2">
                      <Cpu className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#232323]">Software inklusive</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700"><span className="font-semibold">Verarbeitungsverzeichnis</span> (VVT) automatisiert</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700"><span className="font-semibold">Technische & org. Maßnahmen</span> (TOMs)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700"><span className="font-semibold">Mitarbeiterschulungen</span> online</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700"><span className="font-semibold">Fristenverwaltung</span> mit Erinnerungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#39B37B] shrink-0 mt-0.5" />
                      <span className="text-gray-700"><span className="font-semibold">Audit-ready Nachweise</span> für Prüfungen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Scope-Block */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#232323] mb-6 text-center">Umfang auf einen Blick</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-[#232323] mb-3 flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#39B37B]" />
                    Inklusive
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1.5">
                    <li>• DSB-Rollenübernahme & Haftung (Leistungsumfang)</li>
                    <li>• Plattformzugang (VVT, TOMs, Schulungen)</li>
                    <li>• Betroffenenanfragen-Handling</li>
                    <li>• Fristenverwaltung & Erinnerungen</li>
                    <li>• Erstbewertung bei Datenpannen (Triage)</li>
                    <li>• E-Mail/Telefon-Support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#232323] mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#e24e1b]" />
                    Projektbasiert
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1.5">
                    <li>• DSFA bei neuen Verarbeitungen</li>
                    <li>• Audit-Vorbereitung intensiv</li>
                    <li>• Intensives Incident-Management (Koordination, Behörde, Doku)</li>
                    <li>• Individuelle Schulungen vor Ort</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#232323] mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-gray-400" />
                    Optional
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1.5">
                    <li>• Vor-Ort-Termine (über Netzwerk)</li>
                    <li>• Whistleblowing-System</li>
                    <li>• ISO 27001-Begleitung</li>
                    <li>• KI-Compliance (EU AI Act)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Zusatz-Hinweis */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Wichtig:</span> Sie behalten alle Entscheidungen – wir liefern System & Expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3.5 REGION-BLOCK - Warum Konstanz/BW */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#232323] mb-2 text-center">Warum Unternehmen in Konstanz uns vertrauen</h3>
              <p className="text-sm text-gray-500 text-center mb-4">Marsstein-Standard: zertifizierte Experten, dokumentierte Prozesse, geprüfter Tech-Stack</p>
              <p className="text-sm text-gray-600 text-center mb-6 max-w-3xl mx-auto">
                Unternehmen in Konstanz und der Bodensee-Region stehen häufig vor besonderen Datenschutz-Herausforderungen – etwa im <Link to="/branchen/tourismus" className="text-[#e24e1b] hover:underline">Tourismus</Link>, <Link to="/branchen/gesundheitswesen" className="text-[#e24e1b] hover:underline">Gesundheitswesen</Link> oder bei forschungsnahen Unternehmen. Genau darauf sind unsere Prozesse ausgelegt.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-[#e24e1b]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-5 w-5 text-[#e24e1b]" />
                  </div>
                  <h4 className="font-semibold text-[#232323] mb-1">LfDI BW Praxis</h4>
                  <p className="text-sm text-gray-600">Erfahrung mit Baden-Württembergs Aufsichtsbehörde</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#e24e1b]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-5 w-5 text-[#e24e1b]" />
                  </div>
                  <h4 className="font-semibold text-[#232323] mb-1">Remote-first</h4>
                  <p className="text-sm text-gray-600">Reaktion &lt;24h, keine Anfahrtskosten</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#e24e1b]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <UserCheck className="h-5 w-5 text-[#e24e1b]" />
                  </div>
                  <h4 className="font-semibold text-[#232323] mb-1">Branchen-Match</h4>
                  <p className="text-sm text-gray-600">Tourismus, IT, Healthcare, Pharma der Bodensee-Region</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#e24e1b]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Check className="h-5 w-5 text-[#e24e1b]" />
                  </div>
                  <h4 className="font-semibold text-[#232323] mb-1">Vor-Ort möglich</h4>
                  <p className="text-sm text-gray-600">Auf Wunsch über Netzwerkpartner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PRICING - Fokus auf DSB-Paket */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-4">Transparente Preise – keine versteckten Kosten</h2>
            <p className="text-lg text-gray-600">Fixpreis pro Monat, alle Leistungen inklusive</p>
          </motion.div>

          {/* Haupt-Paket: DSB + Plattform */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="border-2 border-[#e24e1b] shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white px-4 py-1 border-0 shadow-lg">
                  <Star className="h-4 w-4 mr-1" />Best Value
                </Badge>
              </div>
              <CardContent className="p-8 pt-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-[#232323] mb-2">Externer DSB + Plattform</h3>
                    <p className="text-gray-600 mb-6">Rollenübernahme + Plattform + Support – alles inklusive</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-[#e24e1b]">€199</span>
                      <span className="text-gray-600">/Monat</span>
                      <p className="text-sm text-gray-500 mt-1">zzgl. MwSt. • monatlich kündbar</p>
                    </div>
                    <Button size="lg" className="w-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl font-bold" asChild>
                      <a href="https://calendly.com/marsstein-info/marsstein-intro" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-5 w-5" />Jetzt Erstgespräch buchen
                      </a>
                    </Button>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39B37B] mt-0.5" />
                        <span className="text-gray-700"><span className="font-semibold">Zertifizierter DSB</span> mit Haftungsübernahme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39B37B] mt-0.5" />
                        <span className="text-gray-700"><span className="font-semibold">Offizielle Bestellung</span> bei der Behörde</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39B37B] mt-0.5" />
                        <span className="text-gray-700"><span className="font-semibold">Compliance-Plattform</span> (VVT, TOMs, Schulungen)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39B37B] mt-0.5" />
                        <span className="text-gray-700"><span className="font-semibold">Support</span> bei Anfragen & Vorfällen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39B37B] mt-0.5" />
                        <span className="text-gray-700"><span className="font-semibold">Onboarding</span> in 7 Tagen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Weitere Optionen - dezent */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-10 text-center">
            <p className="text-sm text-gray-500 mb-4">Weitere Optionen:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span><span className="font-medium">Alternative: Nur Plattform (ohne DSB-Rollenübernahme)</span> ab €69/Monat</span>
              <span className="text-gray-300">|</span>
              <span><span className="font-medium">Enterprise:</span> ab €449/Monat</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center mt-8">
            <Link to="/preise" className="text-gray-600 hover:text-[#e24e1b] font-semibold text-sm">
              Alle Pakete im Detail vergleichen <ChevronRight className="inline h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. KONTAKT - Kompakt */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="border-2 border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Links: Kontaktdaten */}
                  <div>
                    <h3 className="text-xl font-bold text-[#232323] mb-4">Lieber schreiben?</h3>
                    <p className="text-gray-600 mb-6">
                      Wenn Sie nicht direkt einen Termin buchen möchten, erreichen Sie uns auch per E-Mail oder Telefon.
                    </p>
                    <div className="space-y-3">
                      <a href="mailto:info@marsstein.ai" className="flex items-center gap-3 text-[#232323] hover:text-[#e24e1b]">
                        <div className="bg-[#e24e1b]/10 rounded-lg p-2">
                          <Mail className="h-5 w-5 text-[#e24e1b]" />
                        </div>
                        <span className="font-medium">info@marsstein.ai</span>
                      </a>
                      <a href="tel:+4917670560292" className="flex items-center gap-3 text-[#232323] hover:text-[#e24e1b]">
                        <div className="bg-[#e24e1b]/10 rounded-lg p-2">
                          <Phone className="h-5 w-5 text-[#e24e1b]" />
                        </div>
                        <span className="font-medium">+49 176 70560292</span>
                      </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Antwort innerhalb von 24 Stunden</p>
                  </div>

                  {/* Rechts: Formular kompakt */}
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Vorname *"
                          required
                        />
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Firma *"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="E-Mail *"
                          required
                        />
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Telefon (optional)"
                        />
                      </div>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Ihre Nachricht (optional)"
                        className="min-h-[60px]"
                      />
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="privacy"
                          checked={formData.privacy}
                          onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
                          required
                        />
                        <Label htmlFor="privacy" className="text-xs leading-4 text-gray-500">
                          Ich akzeptiere die <Link to="/datenschutzerklaerung" className="text-[#e24e1b] hover:underline">Datenschutzbestimmungen</Link>. *
                        </Label>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#e24e1b] text-white hover:bg-[#c9411a] font-semibold"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Wird gesendet...' : 'Erstberatung anfragen'}
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-4">Häufige Fragen</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                {faqs.map((faq, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05, duration: 0.5 }}>
                        <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <h3 className="text-base font-bold text-[#232323] mb-3">{faq.question}</h3>
                            <div className="text-gray-700 leading-relaxed text-sm">{faq.answer}</div>
                        </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="mt-12 text-center">
              <h3 className="text-xl font-bold text-[#232323] mb-4">Externer Datenschutzbeauftragter in Baden-Württemberg</h3>
              <p className="text-gray-600 mb-6">Auch für Unternehmen in diesen Städten verfügbar</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/externer-datenschutzbeauftragter-heidelberg" className="px-4 py-2 bg-gray-100 hover:bg-[#e24e1b]/10 hover:text-[#e24e1b] rounded-lg text-sm font-medium transition-colors">Externer DSB Heidelberg</Link>
                <Link to="/externer-datenschutzbeauftragter-ulm" className="px-4 py-2 bg-gray-100 hover:bg-[#e24e1b]/10 hover:text-[#e24e1b] rounded-lg text-sm font-medium transition-colors">Externer DSB Ulm</Link>
                <Link to="/externer-datenschutzbeauftragter-stuttgart" className="px-4 py-2 bg-gray-100 hover:bg-[#e24e1b]/10 hover:text-[#e24e1b] rounded-lg text-sm font-medium transition-colors">Externer DSB Stuttgart</Link>
                <Link to="/externer-datenschutzbeauftragter-karlsruhe" className="px-4 py-2 bg-gray-100 hover:bg-[#e24e1b]/10 hover:text-[#e24e1b] rounded-lg text-sm font-medium transition-colors">Externer DSB Karlsruhe</Link>
              </div>
            </motion.div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#e24e1b] via-[#ea580c] to-[#e24e1b]">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Externen DSB beauftragen – in 24h startklar</h2>
            <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto">Kostenlose Erstberatung buchen, Angebot erhalten, loslegen. Ohne versteckte Kosten, ohne lange Vertragslaufzeiten.</p>
            <Button size="lg" className="bg-white text-[#e24e1b] hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-2xl" asChild>
                <a href="https://calendly.com/marsstein-info/marsstein-intro" target="_blank" rel="noopener noreferrer"><Calendar className="mr-2 h-5 w-5" />Kostenlose Erstberatung buchen<ChevronRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <p className="mt-8 text-white/80 text-sm">15 Min. Gespräch · Unverbindlich · Angebot innerhalb 24h</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExternerDatenschutzbeauftragterKonstanz;