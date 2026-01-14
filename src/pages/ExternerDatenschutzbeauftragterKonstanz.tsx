import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check, Shield, Star, ChevronRight, Phone,
  FileText, UserCheck, Clock, AlertTriangle, Cpu, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExternerDatenschutzbeauftragterKonstanz: React.FC = () => {
    const faqs = [
    {
      question: "Warum einen externen Datenschutzbeauftragten in Konstanz?",
      answer: (<>
        Als Konstanzer Unternehmen profitieren Sie von regionaler Nähe bei gleichzeitig niedrigeren Kosten (ab 69€/Monat) im Vergleich zu einem internen DSB. Wir kennen die lokalen Gegebenheiten und typischen Branchen in der Bodensee-Region.
      </>)
    },
    {
      question: "Warum kombiniert Marsstein Software mit persönlicher Beratung?",
      answer: (<>
        Reine Software kann Ihre individuellen Prozesse nicht vollständig abbilden, und ein reiner Berater ist oft kostenintensiv. Unsere Plattform automatisiert Routineaufgaben wie Dokumentation und Schulungen. Ihr persönlicher DSB konzentriert sich dadurch auf die strategisch wichtigen Themen für Ihr Unternehmen.
      </>)
    },
    {
      question: "Wie läuft die Beratung für Unternehmen in Konstanz ab?",
      answer: "Wir arbeiten primär digital via E-Mail, Telefon und Video-Call - schnell, flexibel und kostensparend für Sie. So können wir innerhalb von 24h reagieren und Sie unterstützen, ohne Anfahrtskosten zu berechnen."
    },
    {
      question: "Was kostet ein externer DSB in Konstanz?",
      answer: (<>
        Ab 69€/Monat für die Compliance-Plattform, ab 199€/Monat inkl. persönlichem Datenschutzbeauftragten. Alle Leistungen inklusive - keine regionalen Aufschläge für Konstanz. <Link to="/preise" className="text-[#e24e1b] hover:underline">Alle Pakete im Überblick</Link>.
      </>)
    },
    {
      question: "Welche Branchen in Konstanz betreuen Sie?",
      answer: "Wir haben Expertise in typischen Konstanzer Wirtschaftszweigen: Tourismus & Hotellerie, Pharma & Life Sciences, IT-Dienstleister, Einzelhandel, Gesundheitswesen, Produktionsbetriebe."
    },
    {
      question: "Wie schnell können Sie in Konstanz starten?",
      answer: "Sofort nach Vertragsabschluss erhalten Sie Zugang zur Software. Ein erstes Beratungsgespräch per Telefon oder Video-Call ist in der Regel innerhalb von 24-48 Stunden möglich."
    },
    {
      question: "Was genau ist der 'Lawyer-in-the-Loop'?",
      answer: (<>
        Für kritische Dokumente oder komplexe Rechtsfragen können Sie über die Plattform auf Wunsch einen spezialisierten Anwalt hinzuziehen. Dieses <Link to="/features/human-in-the-loop" className="text-[#e24e1b] hover:underline">optionale Feature</Link> bietet eine zusätzliche Sicherheitsebene für Situationen, in denen juristische Absicherung gefordert ist.
      </>)
    },
    {
      question: "Kennen Sie die Datenschutz-Anforderungen in Baden-Württemberg?",
      answer: (<>
        Ja, unsere Experten sind mit den Anforderungen und der Praxis des <Link to="/dsgvo" className="text-[#e24e1b] hover:underline">LfDI Baden-Württemberg</Link> vertraut. Unsere Plattform und Prozesse sind darauf ausgelegt, die spezifischen Anforderungen für Unternehmen in der Region Konstanz zu erfüllen.
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
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-white text-[#e24e1b] border-[#e24e1b]/20 py-2 px-4 rounded-full font-semibold">
              Persönliche Beratung. Smarte Technologie.
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold my-6 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent bg-300% animate-gradient"
            >
              Externer Datenschutzbeauftragter Konstanz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Wir kombinieren <span className="font-bold text-[#232323]">zertifizierte Experten</span> mit einer <span className="font-bold text-[#232323]">intelligenten Software-Plattform</span> – für maximale Rechtssicherheit bei minimalen Kosten.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl font-bold text-lg px-8 py-6" asChild>
                      <Link to="/contact"><Phone className="mr-2 h-5 w-5" />Kostenlose Erstberatung</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-[#e24e1b] hover:text-[#e24e1b] font-bold text-lg px-8 py-6" asChild>
                      <Link to="/preise">Preise und Pakete ansehen</Link>
                  </Button>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM / AGITATION SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-6">Der traditionelle Datenschutz: Teuer, langsam, riskant.</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Ein lokaler Datenschutzbeauftragter in Konstanz ist oft nicht die effizienteste Lösung. Manuelle Prozesse und mangelnde technologische Unterstützung führen zu hohen Kosten und langsamen Reaktionszeiten.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="border-0 shadow-none">
                    <CardContent className="p-6 text-center">
                        <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-[#232323] mb-2">Hoher Zeitaufwand</h3>
                        <p className="text-sm text-gray-600">Manuelle Dokumentationspflege (VVT, TOMs) bindet unnötig Ressourcen und ist fehleranfällig.</p>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-none">
                    <CardContent className="p-6 text-center">
                        <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-[#232323] mb-2">Intransparente Kosten</h3>
                        <p className="text-sm text-gray-600">Hohe Stundensätze und unklare Abrechnungen erschweren die Budgetplanung.</p>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-none">
                    <CardContent className="p-6 text-center">
                        <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-[#232323] mb-2">Begrenzte Expertise</h3>
                        <p className="text-sm text-gray-600">Ein einzelner Beauftragter kann selten die Expertise für alle Branchen und Technologien abdecken.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>



      {/* 4. HOW IT WORKS SECTION (Static) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-6">So funktioniert Ihr Datenschutz mit Marsstein in Konstanz</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Unser bewährter Dreischritt-Prozess kombiniert modernste Technologie mit menschlicher Expertise für Ihre Compliance.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1: KI-Plattform */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-xl p-3 w-fit mb-4 mx-auto"><Cpu className="h-8 w-8 text-white" /></div>
                  <h3 className="text-xl font-bold text-[#232323] mb-2">1. Smarte Compliance-Plattform</h3>
                  <p className="text-gray-700">Sie erhalten Zugang zu unserer intuitiven Plattform, die 80% der Routineaufgaben wie Verarbeitungsverzeichnisse und TOMs automatisiert.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Step 2: Smart Matching */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3 w-fit mb-4 mx-auto"><UserCheck className="h-8 w-8 text-white" /></div>
                  <h3 className="text-xl font-bold text-[#232323] mb-2">2. Persönlicher DSB (Smart Matching)</h3>
                  <p className="text-gray-700">Wir matchen Sie mit dem idealen, zertifizierten Datenschutzexperten aus unserem Netzwerk, der Ihre Branche und Region Konstanz versteht.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 3: Kontinuierliche Optimierung */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-3 w-fit mb-4 mx-auto"><Shield className="h-8 w-8 text-white" /></div>
                  <h3 className="text-xl font-bold text-[#232323] mb-2">3. Laufende Betreuung & Lawyer-in-the-Loop</h3>
                  <p className="text-gray-700">Ihr DSB begleitet Sie kontinuierlich, verifiziert kritische Dokumente und steht für Fragen bereit. Dies geschieht effizient und kostengünstig durch unsere Plattform und die optionale Anwaltsprüfung, die passgenaue Expertise sichert.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4.5 REGIONAL EXPERTISE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-6">Ihr Datenschutzbeauftragter für Konstanz & Region</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Warum Unternehmen in Konstanz, Singen, Radolfzell und am Bodensee auf unsere Expertise vertrauen</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-xl p-3 w-fit mb-4 mx-auto">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#232323] mb-2">Baden-Württemberg-Expertise</h3>
                  <p className="text-sm text-gray-600">Kenntnis des LfDI Baden-Württemberg und typischer Compliance-Anforderungen in der Region Konstanz</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3 w-fit mb-4 mx-auto">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#232323] mb-2">Branchenkenntnis</h3>
                  <p className="text-sm text-gray-600">Spezialisierung auf Konstanzer Wirtschaftszweige: Tourismus & Hotellerie, Pharma & Life Sciences, IT-Dienstleister</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-3 w-fit mb-4 mx-auto">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#232323] mb-2">Schnelle Reaktionszeiten</h3>
                  <p className="text-sm text-gray-600">Support innerhalb von 24h per E-Mail, Telefon oder Video-Call - flexible digitale Beratung</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-3 w-fit mb-4 mx-auto">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#232323] mb-2">Plattform-Experten</h3>
                  <p className="text-sm text-gray-600">Unsere DSBs sind zertifiziert auf das Marsstein-System - für nahtlose Einrichtung und maximale Effizienz</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-6">Ihr Externer Datenschutzbeauftragter für Konstanz</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Wählen Sie das Paket, das zu Ihrem Bedarf passt. Transparent, planbar und auf Ihre Unternehmensgröße zugeschnitten.</p>
            </motion.div>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* STARTER PACKAGE - Reframed as Software-only */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300 flex flex-col">
                <CardContent className="p-8 flex-grow">
                  <Badge className="bg-gradient-to-r from-gray-700 to-gray-800 text-white border-0 mb-4">STARTER</Badge>
                  <h3 className="text-2xl font-bold text-[#232323] mb-2">Compliance-Plattform</h3>
                  <p className="text-gray-600 mb-6">Ideal für Selbst-Manager</p>
                  <div className="mb-6"><span className="text-5xl font-bold bg-gradient-to-r from-[#232323] to-[#e24e1b] bg-clip-text text-transparent">€69</span><span className="text-gray-600">/Monat</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm font-bold">Smarte Compliance-Software</span></li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm">Automatisierte Dokumentation</span></li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm">Online-Mitarbeiterschulungen</span></li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm">E-Mail & Chat Support</span></li>
                  </ul>
                </CardContent>
                <div className="p-8 pt-0">
                  <Button variant="outline" className="w-full border-2 border-gray-300" asChild><Link to="/preise">Plattform entdecken</Link></Button>
                </div>
              </Card>
            </motion.div>
            {/* PROFESSIONAL PACKAGE - Highlighted */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white px-4 py-1 border-0 shadow-lg"><Star className="h-4 w-4 mr-1" />BELIEBT IN KONSTANZ</Badge>
              </div>
              <Card className="h-full border-2 border-[#e24e1b] shadow-2xl scale-105 flex flex-col">
                <CardContent className="p-8 flex-grow">
                  <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white border-0 mb-4">PROFESSIONAL</Badge>
                  <h3 className="text-2xl font-bold text-[#232323] mb-2">DSB + Plattform</h3>
                  <p className="text-gray-600 mb-6">Das Rundum-Sorglos-Paket</p>
                  <div className="mb-6"><span className="text-5xl font-bold bg-gradient-to-r from-[#232323] to-[#e24e1b] bg-clip-text text-transparent">€199</span><span className="text-gray-600">/Monat</span></div>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm font-bold">Externer Datenschutzbeauftragter</span></li>
                     <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm">Einrichtung des Managementsystems</span></li>
                     <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm">DSB-Haftungsübernahme</span></li>
                     <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm">Offizielles DSB-Zertifikat</span></li>
                  </ul>
                </CardContent>
                <div className="p-8 pt-0">
                   <Button className="w-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white" asChild><Link to="/contact">Jetzt DSB anfragen</Link></Button>
                </div>
              </Card>
            </motion.div>
            {/* ENTERPRISE PACKAGE */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300 flex flex-col">
                <CardContent className="p-8 flex-grow">
                  <Badge className="bg-gradient-to-r from-blue-900 to-gray-900 text-white border-0 mb-4">ENTERPRISE</Badge>
                  <h3 className="text-2xl font-bold text-[#232323] mb-2">DSB für Konzerne</h3>
                  <p className="text-gray-600 mb-6">Maßgeschneiderte Compliance</p>
                  <div className="mb-6"><div className="text-3xl font-bold text-[#232323]">ab €449</div><p className="text-gray-600">/Monat</p></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm font-bold">Dedizierter DSB-Ansprechpartner</span></li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm">Individuelle Audits & SLAs</span></li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm">Vollständige Haftungsübernahme</span></li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-[#39B37B] mt-0.5" /><span className="text-sm">Priority Support & Schulungen</span></li>
                  </ul>
                </CardContent>
                <div className="p-8 pt-0">
                  <Button variant="outline" className="w-full border-2 border-gray-300" asChild><Link to="/contact">Beratung anfragen</Link></Button>
                </div>
              </Card>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3}} className="text-center mt-12">
            <Link to="/preise" className="text-gray-600 hover:text-[#e24e1b] font-semibold text-sm">
                Alle Pakete und Features im Detail vergleichen <ChevronRight className="inline h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* 6. FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-4">Häufige Fragen von Unternehmen in Konstanz</h2>
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
              <h3 className="text-xl font-bold text-[#232323] mb-4">Auch verfügbar in Ihrer Nähe</h3>
              <p className="text-gray-600 mb-6">Externer Datenschutzbeauftragter auch in diesen Städten</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/externer-datenschutzbeauftragter-freiburg" className="px-4 py-2 bg-gray-100 hover:bg-[#e24e1b]/10 hover:text-[#e24e1b] rounded-lg text-sm font-medium transition-colors">Freiburg</Link>
                <Link to="/externer-datenschutzbeauftragter-ulm" className="px-4 py-2 bg-gray-100 hover:bg-[#e24e1b]/10 hover:text-[#e24e1b] rounded-lg text-sm font-medium transition-colors">Ulm</Link>
                <Link to="/externer-datenschutzbeauftragter-stuttgart" className="px-4 py-2 bg-gray-100 hover:bg-[#e24e1b]/10 hover:text-[#e24e1b] rounded-lg text-sm font-medium transition-colors">Stuttgart</Link>
                <Link to="/externer-datenschutzbeauftragter-karlsruhe" className="px-4 py-2 bg-gray-100 hover:bg-[#e24e1b]/10 hover:text-[#e24e1b] rounded-lg text-sm font-medium transition-colors">Karlsruhe</Link>
              </div>
            </motion.div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#e24e1b] via-[#ea580c] to-[#e24e1b]">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Steigen Sie jetzt auf intelligenten Datenschutz um!</h2>
            <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto">Finden Sie heraus, wie die Marsstein-Methode Ihr Unternehmen in Konstanz effizienter und sicherer machen kann. Fordern Sie Ihre kostenlose Erstberatung an.</p>
            <Button size="lg" className="bg-white text-[#e24e1b] hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-2xl" asChild>
                <Link to="/contact"><Phone className="mr-2 h-5 w-5" />Jetzt kostenlos beraten lassen<ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <p className="mt-8 text-white/80 text-sm">✓ Unverbindlich ✓ Individuelle Analyse ✓ Sofort umsetzbare Tipps</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExternerDatenschutzbeauftragterKonstanz;