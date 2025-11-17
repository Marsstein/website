import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
  Search,
  Filter,
  MapPin,
  Briefcase,
  Heart,
  TrendingUp,
  ShoppingCart,
  Code,
  Factory,
  Scale,
  Building2,
  Globe,
  Clock,
  Mail,
  Brain,
  Zap,
  Target,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { experts, Expert } from '@/data/experts';

const Datenschutzbeauftragter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedCertification, setSelectedCertification] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const industries = [
    { id: 'all', label: 'Alle Branchen', icon: Globe },
    { id: 'Automotive', label: 'Automotive', icon: Factory },
    { id: 'Manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'Healthcare', label: 'Healthcare', icon: Heart },
    { id: 'MedTech', label: 'MedTech', icon: Heart },
    { id: 'FinTech', label: 'FinTech', icon: TrendingUp },
    { id: 'Banking', label: 'Banking', icon: TrendingUp },
    { id: 'E-Commerce', label: 'E-Commerce', icon: ShoppingCart },
    { id: 'SaaS', label: 'SaaS', icon: Code },
    { id: 'Cloud', label: 'Cloud', icon: Code },
    { id: 'Tech', label: 'Tech', icon: Code },
    { id: 'Legal', label: 'Legal', icon: Scale },
  ];

  const certifications = [
    { id: 'all', label: 'Alle Qualifikationen' },
    { id: 'CIPP/E', label: 'CIPP/E' },
    { id: 'GDD', label: 'GDD-zertifiziert' },
    { id: 'TÜV', label: 'TÜV-zertifiziert' },
    { id: 'Jurist', label: 'Jurist/Rechtsanwalt' },
  ];

  const locations = [
    { id: 'all', label: 'Alle Standorte' },
    { id: 'Deutschland', label: 'Deutschland' },
    { id: 'Hamburg', label: 'Hamburg' },
    { id: 'München', label: 'München' },
    { id: 'Berlin', label: 'Berlin' },
    { id: 'Frankfurt', label: 'Frankfurt am Main' },
    { id: 'Köln', label: 'Köln' },
    { id: 'Stuttgart', label: 'Stuttgart' },
  ];

  const filteredExperts = useMemo(() => {
    return experts.filter(expert => {
      const matchesSearch = searchQuery === '' ||
        expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.industries.some(ind => ind.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (expert.company && expert.company.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesIndustry = selectedIndustry === 'all' ||
        expert.industries.some(ind => ind === selectedIndustry);

      const matchesCertification = selectedCertification === 'all' ||
        expert.qualifications.some(qual => qual.toLowerCase().includes(selectedCertification.toLowerCase()));

      const matchesLocation = selectedLocation === 'all' ||
        expert.location.toLowerCase().includes(selectedLocation.toLowerCase());

      return matchesSearch && matchesIndustry && matchesCertification && matchesLocation;
    });
  }, [searchQuery, selectedIndustry, selectedCertification, selectedLocation]);


  const getIndustryIcon = (industryId: string) => {
    const industry = industries.find(i => i.id === industryId);
    return industry?.icon || Building2;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Datenschutzexperten finden – 50+ Zertifizierte DSB Experten | Marsstein"
        description="Finden Sie den passenden Datenschutzexperten für Ihr Unternehmen. CIPP/E-zertifiziert ✓ Branchenexpertise ✓ DSGVO-Compliance ✓ Human-in-the-Loop Reviews."
        keywords="Datenschutzexperten, externer DSB, DSGVO Experte, CIPP/E, Datenschutz Berater, Datenschutzbeauftragte"
        canonical="https://marsstein.ai/datenschutzexperten"
      />

      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 md:py-32">
          <div className="container px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0 px-4 py-2 text-sm">
                  <Shield className="h-4 w-4 mr-2 inline" />
                  Zertifizierte Datenschutzexperten
                </Badge>

                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                  Finden Sie Ihren<br />
                  <span className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] bg-clip-text text-transparent">
                    Datenschutzexperten
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Zertifizierte Datenschutzexperten mit Branchenspezialisierung – für externe DSB-Mandate, KI-gestützte Reviews und maßgeschneiderte DSGVO-Beratung.
                </p>

                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Suchen Sie nach Name, Branche oder Expertise..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-6 text-lg border-2 focus:border-[#e24e1b]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] -z-0" />
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filter
                </h2>
                <Badge variant="secondary">
                  {filteredExperts.length} Ergebnis{filteredExperts.length !== 1 ? 'se' : ''}
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Branche wählen" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    sideOffset={5}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                  >
                    {industries.map((industry) => (
                      <SelectItem key={industry.id} value={industry.id}>
                        {industry.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedCertification} onValueChange={setSelectedCertification}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Qualifikation wählen" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    sideOffset={5}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                  >
                    {certifications.map((cert) => (
                      <SelectItem key={cert.id} value={cert.id}>
                        {cert.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Standort wählen" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    sideOffset={5}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                  >
                    {locations.map((loc) => (
                      <SelectItem key={loc.id} value={loc.id}>
                        {loc.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedIndustry('all');
                    setSelectedCertification('all');
                    setSelectedLocation('all');
                    setSearchQuery('');
                  }}
                >
                  Zurücksetzen
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            {filteredExperts.length === 0 ? (
              <div className="text-center py-20">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Keine Experten gefunden</h3>
                <p className="text-muted-foreground mb-6">
                  Versuchen Sie andere Filter-Kombinationen oder kontaktieren Sie uns direkt.
                </p>
                <Link to="/contact">
                  <Button>
                    Kontakt aufnehmen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredExperts.map((expert, index) => (
                  <motion.div
                    key={expert.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group hover:border-[#e24e1b] dark:hover:border-[#f97316]">
                      <CardHeader>
                        <div className="flex items-start gap-4 mb-4">
                          {expert.image ? (
                            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                              <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="text-5xl">{expert.avatar}</div>
                          )}
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 transition-colors group-hover:text-[#e24e1b]">
                              {expert.name}
                            </CardTitle>
                            {expert.company && (
                              <CardDescription className="font-medium mb-2">
                                {expert.company}
                              </CardDescription>
                            )}

                            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                              {expert.location && (
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{expert.location}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-1">
                                <Shield className="h-3 w-3" />
                                <span>DSB seit {expert.dsbSince}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-3">
                              {expert.aiQualified && (
                                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-0 text-xs">
                                  <Brain className="h-3 w-3 mr-1" />
                                  KI-qualifiziert
                                </Badge>
                              )}
                              {expert.qualifications.slice(0, 2).map((cert, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  <Award className="h-3 w-3 mr-1" />
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="text-sm text-muted-foreground">
                            <p className="line-clamp-3">{expert.bio}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-xs text-muted-foreground mb-2">Branchen:</div>
                          <div className="flex flex-wrap gap-1">
                            {expert.industries.slice(0, 3).map((industry, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                <Briefcase className="h-3 w-3 mr-1" />
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {expert.availability && (
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-0 text-xs mb-4">
                            <Clock className="h-3 w-3 mr-1" />
                            {expert.availability}
                          </Badge>
                        )}
                      </CardHeader>

                      <CardContent className="pt-0">
                        <Link to={`/datenschutzexperten/${expert.slug}`}>
                          <Button className="w-full transition-all bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:opacity-90">
                            Profil ansehen
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Warum einen externen Datenschutzbeauftragten?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Die Vorteile im Überblick
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Zap,
                    title: 'Sofort verfügbar',
                    description: 'Keine lange Rekrutierung oder Einarbeitung. Expertise ab Tag 1.'
                  },
                  {
                    icon: Target,
                    title: 'Spezialisierte Expertise',
                    description: 'Branchenkenntnis und aktuelle Rechtsprechung inklusive.'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Kosteneffizienz',
                    description: 'Keine Vollzeit-Gehälter, Sozialabgaben oder Weiterbildungskosten.'
                  },
                  {
                    icon: Shield,
                    title: 'Unabhängigkeit',
                    description: 'Externe Perspektive ohne interne Interessenskonflikte.'
                  },
                  {
                    icon: Users,
                    title: 'Netzwerk-Zugang',
                    description: 'Verbindung zu Behörden, Auditoren und Rechtsexperten.'
                  },
                  {
                    icon: Award,
                    title: 'Zertifizierte Qualität',
                    description: 'CIPP/E, GDD und weitere anerkannte Qualifikationen.'
                  }
                ].map((benefit, index) => (
                  <Card key={index} className="border-2 hover:border-[#e24e1b] dark:hover:border-[#f97316] transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-lg">
                          <benefit.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-br from-[#e24e1b] via-[#f97316] to-[#ea580c] text-white relative overflow-hidden">
          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-12 w-12 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Bereit für DSGVO-Compliance?
                </h2>
                <p className="text-xl mb-8 text-orange-100">
                  Finden Sie den perfekten Datenschutzbeauftragten für Ihr Unternehmen.
                  Kostenlose Erstberatung inklusive.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-[#e24e1b] hover:bg-gray-100 px-8">
                      Jetzt Anfrage senden
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/features/human-in-the-loop">
                    <Button size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#e24e1b] transition-all">
                      <Brain className="mr-2 h-5 w-5" />
                      Human-in-the-Loop entdecken
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutzbeauftragter;
