import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  CheckCircle2,
  Rocket,
  FileCheck,
  AlertCircle,
  UserCheck,
  ArrowRight,
  Clock,
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

const Beta: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '',
    challenges: [],
    phone: '',
    currentSolution: '',
    challengeLevel: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email ||
        !formData.company || !formData.companySize || !formData.challengeLevel) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    console.log('Beta form submission:', formData);
    setSubmitted(true);
  };

  const dsgvoChallenges = [
    { id: 'verarbeitungsverzeichnis', label: 'Verarbeitungsverzeichnis erstellen & pflegen' },
    { id: 'tom', label: 'Technische und organisatorische Maßnahmen (TOM)' },
    { id: 'datenschutzerklaerung', label: 'Datenschutzerklärungen aktuell halten' },
    { id: 'betroffenenanfragen', label: 'Betroffenenanfragen managen' },
    { id: 'auftragsverarbeitung', label: 'Auftragsverarbeitungsverträge verwalten' },
    { id: 'datenpannen', label: 'Datenpannen-Management' },
    { id: 'schulungen', label: 'Mitarbeiterschulungen durchführen' },
    { id: 'loeschkonzept', label: 'Löschkonzept umsetzen' }
  ];

  const features = [
    {
      icon: <FileCheck className="h-5 w-5" />,
      title: "Verarbeitungsverzeichnis",
      description: "Automatisiert erstellt und immer aktuell"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "TOM-Dokumentation",
      description: "Technische Maßnahmen vollständig dokumentiert"
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Betroffenenrechte",
      description: "Anfragen in unter 30 Minuten bearbeitet"
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: "Datenpannen-Workflow",
      description: "72-Stunden-Frist automatisch eingehalten"
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container max-w-2xl mx-auto py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 dark:bg-green-950/20">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-500" />
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-foreground">
                Vielen Dank für Ihre Anmeldung
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Wir haben Ihre Bewerbung für das Beta-Programm erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>

            <Card className="max-w-md mx-auto border-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Ihre nächsten Schritte:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium">Bestätigungs-E-Mail prüfen</p>
                      <p className="text-muted-foreground">In den nächsten Minuten erhalten</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium">Onboarding-Termin</p>
                      <p className="text-muted-foreground">Wir kontaktieren Sie binnen 24h</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Rocket className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium">Start der Beta-Phase</p>
                      <p className="text-muted-foreground">Sofort nach dem Onboarding</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={() => window.location.href = '/'}
              size="lg"
              variant="outline"
            >
              Zur Startseite
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto py-16 px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
            <Rocket className="h-4 w-4" />
            BETA-PROGRAMM
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            DSGVO-Software im Beta-Test
          </h1>

          <p className="text-xl text-muted-foreground">
            Testen Sie 3 Monate kostenlos unsere KI-gestützte DSGVO-Automatisierung
            und sparen Sie 80% Ihrer Zeit bei der Datenschutz-Dokumentation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Was Sie erhalten</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Limitiertes Angebot
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      3 Monate kostenlos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Danach 50% Rabatt für immer
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Nur noch 12 Plätze verfügbar
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Beta-Zugang anfordern</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und starten Sie in 24 Stunden
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
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

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="max@firma.de"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+49 123 456789"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
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
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Unternehmensgröße *</Label>
                      <select
                        id="companySize"
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Bitte wählen</option>
                        <option value="1-10">1-10 Mitarbeiter</option>
                        <option value="11-50">11-50 Mitarbeiter</option>
                        <option value="51-250">51-250 Mitarbeiter</option>
                        <option value="251-1000">251-1000 Mitarbeiter</option>
                        <option value="1000+">1000+ Mitarbeiter</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentSolution">Wie managen Sie DSGVO aktuell?</Label>
                    <select
                      id="currentSolution"
                      value={formData.currentSolution}
                      onChange={(e) => setFormData({ ...formData, currentSolution: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="excel">Excel / Word</option>
                      <option value="paper">Papierbasiert</option>
                      <option value="software">Andere Software</option>
                      <option value="external">Externer Datenschutzbeauftragter</option>
                      <option value="none">Noch keine Lösung</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>Ihre DSGVO-Herausforderungen</Label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {dsgvoChallenges.map((challenge) => (
                        <div key={challenge.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={challenge.id}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  challenges: [...formData.challenges, challenge.id]
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  challenges: formData.challenges.filter(c => c !== challenge.id)
                                });
                              }
                            }}
                          />
                          <label
                            htmlFor={challenge.id}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {challenge.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challengeLevel">Wie herausfordernd ist DSGVO für Sie aktuell? *</Label>
                    <select
                      id="challengeLevel"
                      value={formData.challengeLevel}
                      onChange={(e) => setFormData({ ...formData, challengeLevel: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Bitte wählen</option>
                      <option value="very-challenging">Sehr herausfordernd - wir kämpfen damit</option>
                      <option value="time-intensive">Machbar, aber zeitintensiv</option>
                      <option value="running-well">Läuft ganz gut</option>
                      <option value="no-problem">Kein Problem für uns</option>
                    </select>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Checkbox id="consent" required className="mt-1" />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                        <a href="/datenschutz" className="text-primary hover:underline">
                          Datenschutzerklärung
                        </a>{' '}
                        zu.
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                  >
                    Beta-Zugang anfordern
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 text-sm text-muted-foreground"
        >
          Bereits 38 Unternehmen nutzen unsere DSGVO-Automatisierung erfolgreich
        </motion.div>
      </div>
    </div>
  );
};

export default Beta;