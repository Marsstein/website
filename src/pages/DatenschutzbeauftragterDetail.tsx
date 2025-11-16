import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Briefcase,
  Globe,
  Clock,
  Mail,
  Calendar,
  Shield,
  ArrowLeft,
  Brain,
  Phone,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import { getExpertBySlug, experts } from '@/data/experts';
import { Helmet } from 'react-helmet-async';

const DatenschutzbeauftragterDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const expert = slug ? getExpertBySlug(slug) : undefined;

  if (!expert) {
    return <Navigate to="/datenschutzexperten" replace />;
  }

  const relatedExperts = experts
    .filter(e => e.slug !== expert.slug && e.industries.some(i => expert.industries.includes(i)))
    .slice(0, 3);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": expert.name,
    "jobTitle": "Datenschutzbeauftragter",
    "description": expert.bio,
    "email": expert.email,
    "telephone": expert.phone,
    "worksFor": expert.company ? {
      "@type": "Organization",
      "name": expert.company
    } : {
      "@type": "Organization",
      "name": "Marsstein"
    },
    "knowsAbout": expert.industries,
    "hasCredential": expert.qualifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": cert
    })),
    "url": `https://marsstein.com/datenschutzexperten/${expert.slug}`,
    "address": expert.location ? {
      "@type": "PostalAddress",
      "addressLocality": expert.location,
      "addressCountry": "Deutschland"
    } : undefined
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${expert.name} – Datenschutzexperte ${expert.company ? `bei ${expert.company}` : ''} | Marsstein`}
        description={expert.bio}
        keywords={`${expert.name}, Datenschutzexperte, ${expert.industries.join(', ')}, ${expert.qualifications.join(', ')}`}
        canonical={`https://marsstein.com/datenschutzexperten/${expert.slug}`}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container px-4">
            <Link to="/datenschutzexperten" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Übersicht
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-7xl">{expert.avatar}</div>
                      <div className="flex-1">
                        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                          {expert.name}
                        </h1>
                        {expert.company && (
                          <p className="text-xl text-muted-foreground mb-2">
                            {expert.company}
                          </p>
                        )}
                        <p className="text-lg text-muted-foreground mb-4">
                          Datenschutzbeauftragter seit {expert.dsbSince}
                        </p>

                        <div className="flex items-center gap-4 mb-4">
                          {expert.location && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-5 w-5" />
                              <span>{expert.location}</span>
                            </div>
                          )}
                          {expert.aiQualified && (
                            <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-0">
                              <Brain className="h-4 w-4 mr-2" />
                              KI-qualifizierter DSB
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {expert.bio}
                    </p>
                  </motion.div>
                </div>

                <div className="md:col-span-1">
                  <Card className="sticky top-24 border-2">
                    <CardHeader>
                      <CardTitle>Verfügbarkeit</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {expert.availability && (
                        <Badge className="w-full justify-center bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-0 py-2">
                          <Clock className="h-4 w-4 mr-2" />
                          {expert.availability}
                        </Badge>
                      )}

                      <div className="space-y-2 pt-4 border-t">
                        <div className="text-sm font-medium text-muted-foreground mb-2">Kontakt:</div>
                        <div className="space-y-2">
                          <a href={`mailto:${expert.email}`} className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors">
                            <Mail className="h-4 w-4 flex-shrink-0" />
                            <span className="break-all">{expert.email}</span>
                          </a>
                          {expert.phone && (
                            <a href={`tel:${expert.phone}`} className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors">
                              <Phone className="h-4 w-4 flex-shrink-0" />
                              <span>{expert.phone}</span>
                            </a>
                          )}
                          {expert.website && (
                            <a href={expert.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors">
                              <ExternalLink className="h-4 w-4 flex-shrink-0" />
                              <span className="break-all">Website</span>
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 pt-4 border-t">
                        <div className="text-sm font-medium text-muted-foreground mb-2">Sprachen:</div>
                        <div className="flex flex-wrap gap-1">
                          {expert.languages.map((lang, idx) => (
                            <Badge key={idx} variant="outline">
                              <Globe className="h-3 w-3 mr-1" />
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 space-y-2">
                        <Link to="/contact" className="block">
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90">
                            <Mail className="mr-2 h-4 w-4" />
                            Anfrage senden
                          </Button>
                        </Link>
                        <Link to="/contact" className="block">
                          <Button variant="outline" className="w-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Beratung buchen
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                    Branchen-Expertise
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {expert.industries.map((industry, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                        {industry}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 mt-8">
                    <Award className="h-6 w-6 text-blue-600" />
                    Qualifikationen
                  </h2>
                  <div className="grid gap-3">
                    {expert.qualifications.map((qual, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <div className="p-2 bg-blue-600 rounded">
                          <Award className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">{qual}</span>
                      </div>
                    ))}
                  </div>

                  {expert.additionalEducation && (
                    <>
                      <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">
                        Zusätzliche Ausbildung
                      </h3>
                      <p className="text-muted-foreground">{expert.additionalEducation}</p>
                    </>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    Über {expert.name.split(' ')[0]}
                  </h2>

                  <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-600 rounded">
                            <Shield className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium mb-1">Datenschutzbeauftragter seit {expert.dsbSince}</div>
                            <div className="text-sm text-muted-foreground">
                              Über {new Date().getFullYear() - expert.dsbSince} Jahre Erfahrung im Datenschutz
                            </div>
                          </div>
                        </div>

                        {expert.aiQualified && (
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-600 rounded">
                              <Brain className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium mb-1">KI-qualifizierter Datenschutzbeauftragter</div>
                              <div className="text-sm text-muted-foreground">
                                Spezialisiert auf KI-Systeme und Human-in-the-Loop Reviews
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-600 rounded">
                            <Briefcase className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium mb-1">Branchenspezialisierung</div>
                            <div className="text-sm text-muted-foreground">
                              {expert.industries.join(', ')}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-600 rounded">
                            <Globe className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium mb-1">Sprachen</div>
                            <div className="text-sm text-muted-foreground">
                              {expert.languages.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedExperts.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Weitere Experten in ähnlichen Branchen
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedExperts.map((relatedExpert) => (
                    <Card key={relatedExpert.slug} className="hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="text-4xl mb-3">{relatedExpert.avatar}</div>
                        <CardTitle className="text-lg">{relatedExpert.name}</CardTitle>
                        {relatedExpert.company && (
                          <p className="text-sm text-muted-foreground font-medium">
                            {relatedExpert.company}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                          <Shield className="h-3 w-3" />
                          <span>DSB seit {relatedExpert.dsbSince}</span>
                        </div>
                        {relatedExpert.aiQualified && (
                          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-0 text-xs mt-2">
                            <Brain className="h-3 w-3 mr-1" />
                            KI-qualifiziert
                          </Badge>
                        )}
                      </CardHeader>
                      <CardContent>
                        <Link to={`/datenschutzexperten/${relatedExpert.slug}`}>
                          <Button variant="outline" className="w-full">
                            Profil ansehen
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Interessiert an {expert.name.split(' ')[0]}?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie,
                wie {expert.name.split(' ')[0]} Ihr Unternehmen unterstützen kann.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Mail className="mr-2 h-5 w-5" />
                    Anfrage senden
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Calendar className="mr-2 h-5 w-5" />
                    Termin vereinbaren
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DatenschutzbeauftragterDetail;
