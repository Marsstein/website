import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Rocket, Shield, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Beta: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '',
    industry: '',
    challenges: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Beta form submission:', formData);
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Früher Zugang",
      description: "Seien Sie unter den Ersten, die unsere innovative Compliance-Plattform nutzen"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Kostenlose Nutzung",
      description: "Vollständiger Zugriff während der Beta-Phase ohne Kosten"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Direkter Einfluss",
      description: "Ihr Feedback formt die Zukunft unserer Plattform"
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Premium Support",
      description: "Persönliche Betreuung und schneller Support während der Beta"
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-2xl mx-auto py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl font-bold">Vielen Dank für Ihre Anmeldung!</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Wir haben Ihre Bewerbung für die Beta-Phase erhalten. Unser Team wird sich in Kürze bei Ihnen melden.
            </p>
            <Button onClick={() => window.location.href = '/'} size="lg">
              Zur Startseite
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="h-4 w-4" />
            BETA PROGRAMM
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Werden Sie Beta-Tester
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gestalten Sie die Zukunft der Compliance-Automatisierung mit und erhalten Sie exklusiven,
            kostenlosen Zugang zu unserer innovativen Plattform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Ihre Vorteile als Beta-Tester</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Was erwartet Sie?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>3 Monate kostenlosen Vollzugriff auf alle Features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Wöchentliche Updates mit neuen Funktionen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Direkter Draht zum Entwicklungsteam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Exklusive Beta-Tester Community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>50% Rabatt nach der Beta-Phase</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Jetzt für die Beta anmelden</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und sichern Sie sich Ihren Platz im Beta-Programm
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Vorname *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        placeholder="Max"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nachname *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail-Adresse *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="max.mustermann@firma.de"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefonnummer</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 123 456789"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Unternehmen *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      placeholder="Musterfirma GmbH"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Unternehmensgröße *</Label>
                      <Select
                        value={formData.companySize}
                        onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                        required
                      >
                        <SelectTrigger id="companySize">
                          <SelectValue placeholder="Wählen Sie..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 Mitarbeiter</SelectItem>
                          <SelectItem value="11-50">11-50 Mitarbeiter</SelectItem>
                          <SelectItem value="51-200">51-200 Mitarbeiter</SelectItem>
                          <SelectItem value="201-500">201-500 Mitarbeiter</SelectItem>
                          <SelectItem value="500+">500+ Mitarbeiter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Branche *</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData({ ...formData, industry: value })}
                        required
                      >
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Wählen Sie..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Technologie & IT</SelectItem>
                          <SelectItem value="finance">Finanzdienstleistungen</SelectItem>
                          <SelectItem value="health">Gesundheitswesen</SelectItem>
                          <SelectItem value="retail">Handel & E-Commerce</SelectItem>
                          <SelectItem value="manufacturing">Produktion & Industrie</SelectItem>
                          <SelectItem value="consulting">Beratung & Dienstleistung</SelectItem>
                          <SelectItem value="education">Bildung & Forschung</SelectItem>
                          <SelectItem value="other">Andere</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenges">
                      Welche Compliance-Herausforderungen möchten Sie lösen?
                    </Label>
                    <Textarea
                      id="challenges"
                      value={formData.challenges}
                      onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                      placeholder="Beschreiben Sie kurz Ihre aktuellen Herausforderungen im Bereich Compliance..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="consent" required className="mt-1" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      Ich stimme zu, dass meine Daten für die Teilnahme am Beta-Programm verarbeitet werden.
                      Die Daten werden vertraulich behandelt und gemäß unserer Datenschutzerklärung verarbeitet.
                    </label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Jetzt für Beta anmelden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center py-8 border-t"
        >
          <p className="text-sm text-muted-foreground">
            Begrenzte Plätze verfügbar • Keine Kreditkarte erforderlich • Start: Q1 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Beta;