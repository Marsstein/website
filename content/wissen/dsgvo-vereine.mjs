export default {
  route: '/wissen/branchen/dsgvo-vereine',
  title: 'Dsgvo Vereine',
  description: 'Ob Sportverein, Kulturverein oder gemeinnützige Organisation – die DSGVO betrifft jeden Verein, 
                der personenbezogene Daten verarbeitet. Wir zei',
  content: `) => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => 
        document.getElementById(item.id)
      ).filter(Boolean);
      
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  const scrollToSection = (sectionId: string) => {
    // Update URL with hash for SEO
    if (window.location.hash !== `#${sectionId}`) {
      window.location.hash = sectionId;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const targetPosition = section.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const toggleScenario = (id: string) => ;

  const toggleChecklistItem = (itemId: string) => ;

  const calculateProgress = () => ;

  return (
    <div>
      <Header ></Header>
      
      {/* Hero Section mit Parallax */}
      <section>
        {/* Animierte Hintergrund-Blobs */}
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" ></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" ></div>
        </div>

        <motion.div 
          style={{ y, opacity }}
          class="container px-4"
        >
          <div class="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge>
                <Users class="h-4 w-4 mr-2" ></Users>
                DSGVO für Vereine & Verbände
              </Badge>
            </motion.div>

            <motion.h1 
              class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span class="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Datenschutz im Verein
              </span>
              <br />
              <span>
                DSGVO-konform & rechtssicher
              </span>
            </motion.h1>

            <motion.p 
              class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Schützen Sie Mitgliederdaten, Fotos und Kommunikation in Ihrem Verein rechtskonform. 
              Praxisnahe Lösungen für Sport-, Kultur- und gemeinnützige Vereine.
            </motion.p>

            <motion.div 
              class="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button>
                <Shield class="mr-2 h-5 w-5" ></Shield>
                Kostenlose Vereins-Beratung
                <ArrowRight class="ml-2 h-5 w-5" ></ArrowRight>
              </Button>
              <Button>
                <Download class="mr-2 h-5 w-5" ></Download>
                DSGVO-Leitfaden herunterladen
              </Button>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              class="absolute top-20 left-20 opacity-20"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Users class="h-24 w-24 text-emerald-600" ></Users>
            </motion.div>
            
            <motion.div
              class="absolute bottom-20 right-20 opacity-20"
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Shield class="h-32 w-32 text-teal-600" ></Shield>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sticky Navigation */}
      <div>
        <div class="container px-4 py-3">
          <nav>
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href=#${item.id}
               }
                class=
              >
                <item.icon class="h-4 w-4" ></item>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div class="container px-4 py-20">
        <div class="max-w-7xl mx-auto space-y-20">
          {/* Overview Section */}
          <section id="ueberblick" class="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 class="text-3xl font-bold mb-4">DSGVO im Vereinsleben</h2>
              <p>
                Ob Sportverein, Kulturverein oder gemeinnützige Organisation – die DSGVO betrifft jeden Verein, 
                der personenbezogene Daten verarbeitet. Wir zeigen Ihnen, wie Sie Datenschutz praktikabel umsetzen.
              </p>
              
              {/* Ausführliche Einführung */}
              <div>
                <div class="space-y-4">
                  <h3 class="text-xl font-semibold flex items-center gap-2">
                    <Scale class="h-5 w-5 text-emerald-600" ></Scale>
                    Rechtliche Grundlagen für Vereine
                  </h3>
                  <p>
                    Seit dem 25. Mai 2018 gilt die DSGVO auch für alle eingetragenen und nicht eingetragenen Vereine 
                    in Deutschland. Als Verantwortlicher im Sinne der DSGVO muss jeder Verein, der personenbezogene 
                    Daten verarbeitet, die gesetzlichen Anforderungen erfüllen – unabhängig von der Vereinsgröße.
                  </p>
                  <ul>
                    <li class="flex items-start gap-2">
                      <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                      <span>Keine Ausnahme für kleine oder gemeinnützige Vereine</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                      <span>Besondere Sorgfaltspflicht bei Minderjährigen</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                      <span>Haftung des Vorstands bei Verstößen</span>
                    </li>
                  </ul>
                </div>
                
                <div class="space-y-4">
                  <h3 class="text-xl font-semibold flex items-center gap-2">
                    <AlertTriangle class="h-5 w-5 text-orange-600" ></AlertTriangle>
                    Häufige Datenschutz-Fallen
                  </h3>
                  <p>
                    Viele Vereine unterschätzen die Tragweite der DSGVO. Bereits kleine Nachlässigkeiten können 
                    zu empfindlichen Bußgeldern führen. Die häufigsten Fehlerquellen haben wir für Sie identifiziert.
                  </p>
                  <ul>
                    <li class="flex items-start gap-2">
                      <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                      <span>WhatsApp-Gruppen für Vereinskommunikation</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                      <span>Unverschlüsselte E-Mail-Verteiler</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                      <span>Fehlende Einwilligungen für Fotos</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Zusätzliche Informationsboxen */}
              <div>
                <Card>
                  <CardContent class="p-4">
                    <h4>
                      💡 Wussten Sie schon?
                    </h4>
                    <p>
                      Auch Vereine mit weniger als 20 Mitgliedern müssen ein Verzeichnis von 
                      Verarbeitungstätigkeiten führen, wenn sie regelmäßig personenbezogene Daten verarbeiten.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent class="p-4">
                    <h4>
                      ⚠️ Achtung Haftung
                    </h4>
                    <p>
                      Der Vorstand haftet persönlich für Datenschutzverstöße, wenn er seine Sorgfaltspflicht 
                      verletzt. Eine D&O-Versicherung schützt nur bedingt.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent class="p-4">
                    <h4>
                      ✅ Unser Versprechen
                    </h4>
                    <p>
                      Mit unserer Vereinslösung erfüllen Sie alle DSGVO-Anforderungen rechtssicher 
                      und ehrenamtsfreundlich – garantiert!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Compliance Dashboard */}
            <Card>
              <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                <Activity class="h-6 w-6 text-emerald-600" ></Activity>
                Vereine & DSGVO Compliance Dashboard
              </h3>
              <div>
                {complianceStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon class="h-8 w-8 text-emerald-600 mb-2" ></stat>
                    <div>{stat.label}</div>
                    <div class="text-2xl font-bold text-emerald-600">{stat.value}</div>
                    <div>{stat.trend}</div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Key Challenges */}
            <div>
              {[
                {
                  icon: AlertTriangle,
                  title: 'Mitgliederdaten',
                  description: 'Von der Anmeldung bis zum Austritt – alle Daten rechtssicher verwalten',
                  color: 'text-orange-600'
                },
                {
                  icon: Camera,
                  title: 'Veranstaltungsfotos',
                  description: 'Fotos bei Vereinsfesten und Wettkämpfen DSGVO-konform handhaben',
                  color: 'text-emerald-600'
                },
                {
                  icon: Mail,
                  title: 'Kommunikation',
                  description: 'Newsletter, WhatsApp-Gruppen und E-Mails datenschutzgerecht nutzen',
                  color: 'text-teal-600'
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <challenge.icon class=h-12 w-12 ${challenge.color} mb-4 ></challenge>
                      <CardTitle>{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{challenge.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Member Data Management */}
          <section id="mitgliederdaten" class="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                <Users class="h-8 w-8 text-emerald-600" ></Users>
                Mitgliederdatenverwaltung
              </h2>
              <p>
                Die Verwaltung von Mitgliederdaten ist das Herzstück jedes Vereins. 
                Lernen Sie, wie Sie diese Daten rechtskonform erheben, speichern und nutzen.
              </p>
              
              {/* Detaillierte Unterabschnitte */}
              <div class="mb-12 space-y-8">
                {/* Rechtliche Grundlagen */}
                <div id="mitgliederdaten-rechtsgrundlagen" class="scroll-mt-24">
                  <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Gavel class="h-6 w-6 text-emerald-600" ></Gavel>
                    Rechtsgrundlagen der Datenverarbeitung
                  </h3>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle class="text-lg">Art. 6 Abs. 1 lit. b DSGVO - Vertragserfüllung</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Die primäre Rechtsgrundlage für die Verarbeitung von Mitgliederdaten ist die 
                          Erfüllung des Mitgliedschaftsvertrags.
                        </p>
                        <ul class="space-y-2 text-sm">
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                            <span>Name und Anschrift für Mitgliederverwaltung</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                            <span>Geburtsdatum für Altersklassen und Jugendschutz</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                            <span>Bankdaten für Beitragszahlung (bei SEPA-Mandat)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle class="text-lg">Art. 6 Abs. 1 lit. f DSGVO - Berechtigte Interessen</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Für erweiterte Datenverarbeitungen können berechtigte Interessen des Vereins 
                          als Rechtsgrundlage dienen.
                        </p>
                        <ul class="space-y-2 text-sm">
                          <li class="flex items-start gap-2">
                            <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                            <span>Vereinschronik und Jubiläen</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                            <span>Kontaktdaten für Vereinskommunikation</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                            <span>Leistungsdaten im Sport (mit Einschränkungen)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Datenerhebung */}
                <div id="mitgliederdaten-erhebung" class="scroll-mt-24">
                  <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <UserPlus class="h-6 w-6 text-emerald-600" ></UserPlus>
                    Datenerhebung bei Vereinseintritt
                  </h3>
                  <Card>
                    <CardContent class="p-6">
                      <h4 class="font-semibold mb-4">Prinzip der Datensparsamkeit</h4>
                      <p>
                        Erheben Sie nur Daten, die Sie wirklich benötigen. Jedes zusätzliche Datenfeld muss 
                        gerechtfertigt werden können.
                      </p>
                      <div>
                        <div>
                          <h5>
                            ✅ Pflichtangaben
                          </h5>
                          <ul>
                            <li>• Vor- und Nachname</li>
                            <li>• Anschrift</li>
                            <li>• Geburtsdatum</li>
                            <li>• E-Mail-Adresse</li>
                          </ul>
                        </div>
                        <div>
                          <h5>
                            ⚠️ Optionale Angaben
                          </h5>
                          <ul>
                            <li>• Telefonnummer</li>
                            <li>• Beruf</li>
                            <li>• Hobbys/Interessen</li>
                            <li>• Foto</li>
                          </ul>
                        </div>
                        <div>
                          <h5>
                            ❌ Unzulässig
                          </h5>
                          <ul>
                            <li>• Gesundheitsdaten*</li>
                            <li>• Politische Meinung</li>
                            <li>• Religion</li>
                            <li>• Sexuelle Orientierung</li>
                          </ul>
                          <p class="text-xs mt-2">*außer mit expliziter Einwilligung</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Speicherung und Sicherheit */}
                <div id="mitgliederdaten-sicherheit" class="scroll-mt-24">
                  <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Lock class="h-6 w-6 text-emerald-600" ></Lock>
                    Sichere Datenspeicherung
                  </h3>
                  <div class="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Technische und organisatorische Maßnahmen (TOM)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <div>
                            <h4 class="font-semibold mb-3 flex items-center gap-2">
                              <Server class="h-5 w-5 text-emerald-600" ></Server>
                              Technische Maßnahmen
                            </h4>
                            <ul class="space-y-2 text-sm">
                              <li class="flex items-start gap-2">
                                <Shield class="h-4 w-4 text-emerald-500 mt-0.5" ></Shield>
                                <span>Verschlüsselte Speicherung aller Mitgliederdaten</span>
                              </li>
                              <li class="flex items-start gap-2">
                                <Shield class="h-4 w-4 text-emerald-500 mt-0.5" ></Shield>
                                <span>Regelmäßige Backups mit Verschlüsselung</span>
                              </li>
                              <li class="flex items-start gap-2">
                                <Shield class="h-4 w-4 text-emerald-500 mt-0.5" ></Shield>
                                <span>Firewall und Virenschutz</span>
                              </li>
                              <li class="flex items-start gap-2">
                                <Shield class="h-4 w-4 text-emerald-500 mt-0.5" ></Shield>
                                <span>Sichere Passwortrichtlinien</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 class="font-semibold mb-3 flex items-center gap-2">
                              <Briefcase class="h-5 w-5 text-emerald-600" ></Briefcase>
                              Organisatorische Maßnahmen
                            </h4>
                            <ul class="space-y-2 text-sm">
                              <li class="flex items-start gap-2">
                                <UserCheck class="h-4 w-4 text-emerald-500 mt-0.5" ></UserCheck>
                                <span>Berechtigungskonzept mit Rollen</span>
                              </li>
                              <li class="flex items-start gap-2">
                                <UserCheck class="h-4 w-4 text-emerald-500 mt-0.5" ></UserCheck>
                                <span>Vertraulichkeitsverpflichtungen</span>
                              </li>
                              <li class="flex items-start gap-2">
                                <UserCheck class="h-4 w-4 text-emerald-500 mt-0.5" ></UserCheck>
                                <span>Schulung der Vorstandsmitglieder</span>
                              </li>
                              <li class="flex items-start gap-2">
                                <UserCheck class="h-4 w-4 text-emerald-500 mt-0.5" ></UserCheck>
                                <span>Dokumentierte Prozesse</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Löschkonzept */}
                <div id="mitgliederdaten-loeschung" class="scroll-mt-24">
                  <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <FileX class="h-6 w-6 text-emerald-600" ></FileX>
                    Löschkonzept und Aufbewahrungsfristen
                  </h3>
                  <Card>
                    <CardHeader>
                      <CardTitle class="flex items-center gap-2">
                        <AlertTriangle class="h-6 w-6 text-red-600" ></AlertTriangle>
                        Pflicht zur Datenlöschung nach Art. 17 DSGVO
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div class="space-y-6">
                        <div>
                          <p>
                            ⚠️ Wichtig: Vereine müssen ein dokumentiertes Löschkonzept vorweisen können!
                          </p>
                          <p>
                            Bei Datenschutzprüfungen ist das Löschkonzept eines der ersten Dokumente, 
                            die angefordert werden. Fehlt es, drohen empfindliche Bußgelder.
                          </p>
                        </div>
                        
                        <div>
                          <div class="space-y-3">
                            <h4 class="font-semibold flex items-center gap-2">
                              <Clock class="h-5 w-5 text-emerald-600" ></Clock>
                              Gesetzliche Aufbewahrungsfristen
                            </h4>
                            <div class="space-y-2 text-sm">
                              <div>
                                <span class="font-medium">Buchführungsunterlagen:</span>
                                <span>10 Jahre</span>
                              </div>
                              <div>
                                <span class="font-medium">Handelsbriefe:</span>
                                <span>6 Jahre</span>
                              </div>
                              <div>
                                <span class="font-medium">Arbeitsrechtliche Unterlagen:</span>
                                <span>3 Jahre</span>
                              </div>
                              <div>
                                <span class="font-medium">Versicherungsunterlagen:</span>
                                <span>5 Jahre</span>
                              </div>
                            </div>
                          </div>
                          
                          <div class="space-y-3">
                            <h4 class="font-semibold flex items-center gap-2">
                              <Timer class="h-5 w-5 text-emerald-600" ></Timer>
                              Vereinsspezifische Löschfristen
                            </h4>
                            <div class="space-y-2 text-sm">
                              <div>
                                <span class="font-medium">Mitgliederdaten (aktiv):</span>
                                <span>Dauer der Mitgliedschaft</span>
                              </div>
                              <div>
                                <span class="font-medium">Ehemalige Mitglieder:</span>
                                <span>3 Jahre nach Austritt*</span>
                              </div>
                              <div>
                                <span class="font-medium">Newsletter-Abonnenten:</span>
                                <span>Sofort nach Abmeldung</span>
                              </div>
                              <div>
                                <span class="font-medium">Veranstaltungsteilnehmer:</span>
                                <span>6 Monate nach Event</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="border-t pt-4">
                          <h4 class="font-semibold mb-3">Praktische Umsetzung des Löschkonzepts</h4>
                          <div>
                            <div>
                              <Database class="h-8 w-8 text-emerald-600 mx-auto mb-2" ></Database>
                              <p class="text-sm font-medium">Automatisierung</p>
                              <p>
                                Löschfristen in der Vereinssoftware hinterlegen
                              </p>
                            </div>
                            <div>
                              <Calendar class="h-8 w-8 text-emerald-600 mx-auto mb-2" ></Calendar>
                              <p class="text-sm font-medium">Regelmäßige Prüfung</p>
                              <p>
                                Quartalsweise Löschläufe durchführen
                              </p>
                            </div>
                            <div>
                              <FileCheck class="h-8 w-8 text-emerald-600 mx-auto mb-2" ></FileCheck>
                              <p class="text-sm font-medium">Dokumentation</p>
                              <p>
                                Löschvorgänge protokollieren
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4>
                            💡 Praxis-Tipp: Ausnahmen beachten
                          </h4>
                          <ul>
                            <li>• Vereinschronik: Historisch bedeutsame Daten dürfen länger aufbewahrt werden</li>
                            <li>• Ehrenmitglieder: Besondere Regelungen in der Satzung beachten</li>
                            <li>• Rechtsstreitigkeiten: Daten bis zum Abschluss aufbewahren</li>
                            <li>• Jubiläen: Frühzeitig Einwilligungen für längere Speicherung einholen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Praxis Scenarios */}
            <div class="space-y-6">
              {praxisScenarios.map((scenario, index) => (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card class="border-l-4 border-emerald-500">
                    <CardHeader>
                      <div class="flex items-start justify-between">
                        <div class="flex items-center gap-3">
                          <scenario.icon class="h-8 w-8 text-emerald-600" ></scenario>
                          <div>
                            <CardTitle class="text-xl">{scenario.title}</CardTitle>
                            <p>
                              {scenario.challenge}
                            </p>
                          </div>
                        </div>
                        <Badge>
                          {scenario.risk} Risiko
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div class="space-y-4">
                        <div>
                          <p>
                            Rechtsgrundlage: {scenario.legalBasis}
                          </p>
                        </div>
                        
                        <button
                         
                          class="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          
                        </button>
                        
                        {expandedScenarios.includes(scenario.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            class="space-y-4 mt-4"
                          >
                            {scenario.solution.steps.map((step, stepIndex) => (
                              <div key={stepIndex} class="border-l-2 border-emerald-200 pl-4">
                                <h4>
                                  {stepIndex + 1}. {step.title}
                                </h4>
                                <p>
                                  {step.description}
                                </p>
                                <ul class="space-y-1">
                                  {step.details.map((detail, detailIndex) => (
                                    <li>
                                      <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Code Examples */}
            <Card class="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle class="text-white flex items-center gap-2">
                  <Code class="h-5 w-5" ></Code>
                  Implementierungsbeispiele
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="space-y-6">
                  {Object.entries(scenarioTemplates).map(([key, code], index) => (
                    <div key={key} class="space-y-2">
                      <h4 class="text-sm font-medium text-gray-400">
                        {key === 'memberRegistration' && 'Mitgliederregistrierung'}
                        {key === 'eventPhotography' && 'Veranstaltungsfotografie'}
                        {key === 'volunteerManagement' && 'Ehrenamtsverwaltung'}
                      </h4>
                      <pre class="bg-gray-950 rounded-lg p-4 overflow-x-auto">
                        <code class="text-sm text-gray-300">{code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Events Section */}
          <section id="veranstaltungen" class="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                <Calendar class="h-8 w-8 text-emerald-600" ></Calendar>
                Veranstaltungen & Datenschutz
              </h2>
              <p>
                Vereinsfeste, Wettkämpfe, Versammlungen – bei jeder Veranstaltung fallen personenbezogene Daten an. 
                So gehen Sie damit richtig um.
              </p>
              
              {/* Inhaltsübersicht */}
              <div>
                <h3 class="font-semibold mb-4">Auf dieser Seite:</h3>
                <div>
                  {subNavigationItems.veranstaltungen.map((item) => (
                    <a> }
                    >
                      <ArrowRight class="h-4 w-4" ></ArrowRight>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle class="flex items-center gap-2">
                    <Camera class="h-6 w-6 text-orange-600" ></Camera>
                    Fotoaufnahmen bei Events
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <div>
                    <h4 class="font-semibold mb-2">Vorab-Information ist Pflicht!</h4>
                    <p>
                      Informieren Sie alle Teilnehmer bereits in der Einladung über geplante Fotoaufnahmen.
                    </p>
                  </div>
                  <div class="space-y-3">
                    <div class="flex items-start gap-3">
                      <AlertCircle class="h-5 w-5 text-orange-500 mt-0.5" ></AlertCircle>
                      <div>
                        <p class="font-medium">Hinweisschilder aufstellen</p>
                        <p>
                          "Bei dieser Veranstaltung werden Fotos gemacht..."
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <ShieldCheck class="h-5 w-5 text-emerald-500 mt-0.5" ></ShieldCheck>
                      <div>
                        <p class="font-medium">Widerspruchsmöglichkeit</p>
                        <p>
                          Buttons oder Bändchen für Personen, die nicht fotografiert werden möchten
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <UserCheck class="h-5 w-5 text-teal-500 mt-0.5" ></UserCheck>
                      <div>
                        <p class="font-medium">Besondere Vorsicht bei Kindern</p>
                        <p>
                          Elterneinwilligung für Einzelaufnahmen erforderlich
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle class="flex items-center gap-2">
                    <Clipboard class="h-6 w-6 text-teal-600" ></Clipboard>
                    Teilnehmerverwaltung
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <div>
                    <h4 class="font-semibold mb-2">Datensparsamkeit beachten</h4>
                    <p>
                      Erheben Sie nur Daten, die Sie wirklich für die Veranstaltung benötigen.
                    </p>
                  </div>
                  <div class="space-y-3">
                    <div class="flex items-start gap-3">
                      <Database class="h-5 w-5 text-teal-500 mt-0.5" ></Database>
                      <div>
                        <p class="font-medium">Anmeldeformulare</p>
                        <p>
                          Klare Zweckbindung und Löschfristen angeben
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <Lock class="h-5 w-5 text-emerald-500 mt-0.5" ></Lock>
                      <div>
                        <p class="font-medium">Sichere Aufbewahrung</p>
                        <p>
                          Teilnehmerlisten nicht offen herumliegen lassen
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <Timer class="h-5 w-5 text-orange-500 mt-0.5" ></Timer>
                      <div>
                        <p class="font-medium">Rechtzeitige Löschung</p>
                        <p>
                          Nach der Veranstaltung Daten zeitnah löschen
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Detaillierte Unterabschnitte für Veranstaltungen */}
            <div class="space-y-12 mt-12">
              {/* Fotografie & Bildrechte */}
              <div id="veranstaltungen-fotos" class="scroll-mt-24">
                <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Camera class="h-6 w-6 text-emerald-600" ></Camera>
                  Fotografie & Bildrechte im Detail
                </h3>
                <div class="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rechtliche Grundlagen der Vereinsfotografie</CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                      <div>
                        <div>
                          <h4 class="font-semibold mb-3">Kunsturhebergesetz (KUG)</h4>
                          <ul>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span>§ 22 KUG: Bilder dürfen nur mit Einwilligung verbreitet werden</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span>§ 23 KUG: Ausnahmen für Versammlungen und öffentliche Veranstaltungen</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                              <span>DSGVO hat Vorrang bei digitaler Speicherung und Verarbeitung</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-semibold mb-3">DSGVO-Anforderungen</h4>
                          <ul>
                            <li class="flex items-start gap-2">
                              <Shield class="h-4 w-4 text-emerald-500 mt-0.5" ></Shield>
                              <span>Rechtsgrundlage: Berechtigtes Interesse oder Einwilligung</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <Shield class="h-4 w-4 text-emerald-500 mt-0.5" ></Shield>
                              <span>Informationspflicht nach Art. 13/14 DSGVO</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <Shield class="h-4 w-4 text-emerald-500 mt-0.5" ></Shield>
                              <span>Löschpflicht nach Zweckerreichung</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h4>
                          💡 Praxis-Empfehlung: Dreistufiges Vorgehen
                        </h4>
                        <ol class="space-y-2 text-sm">
                          <li class="flex items-start gap-2">
                            <span>1.</span>
                            <span>Vorab-Information in der Einladung mit Widerspruchsmöglichkeit</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <span>2.</span>
                            <span>Sichtbare Hinweise am Veranstaltungsort und Erkennbarkeit des Fotografen</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <span>3.</span>
                            <span>Nachträgliche Löschmöglichkeit auf Anfrage gewährleisten</span>
                          </li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Spezialfälle in der Vereinspraxis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <div>
                          <h4 class="font-semibold mb-2 flex items-center gap-2">
                            <Users class="h-5 w-5 text-emerald-600" ></Users>
                            Mannschaftsfotos
                          </h4>
                          <p>
                            Einwilligung aller Abgebildeten erforderlich. Bei Minderjährigen: 
                            Elterneinwilligung. Muster-Einwilligung in Mitgliedsantrag integrieren.
                          </p>
                        </div>
                        <div>
                          <h4 class="font-semibold mb-2 flex items-center gap-2">
                            <Trophy class="h-5 w-5 text-emerald-600" ></Trophy>
                            Siegerehrungen
                          </h4>
                          <p>
                            Berechtigtes Interesse oft gegeben. Trotzdem: Information vorab und 
                            Widerspruchsmöglichkeit einräumen.
                          </p>
                        </div>
                        <div>
                          <h4 class="font-semibold mb-2 flex items-center gap-2">
                            <Heart class="h-5 w-5 text-emerald-600" ></Heart>
                            Soziale Medien
                          </h4>
                          <p>
                            Separate Einwilligung für Social Media erforderlich. Reichweite und 
                            Plattformen konkret benennen.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Anmeldemanagement */}
              <div id="veranstaltungen-anmeldung" class="scroll-mt-24">
                <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Clipboard class="h-6 w-6 text-emerald-600" ></Clipboard>
                  Anmeldemanagement für Events
                </h3>
                <Card>
                  <CardContent class="p-6">
                    <div class="space-y-6">
                      <div>
                        <h4 class="font-semibold mb-3">Online-Anmeldesysteme datenschutzkonform gestalten</h4>
                        <div>
                          <div>
                            <h5>
                              Datenminimierung
                            </h5>
                            <ul>
                              <li>• Name und E-Mail reichen meist</li>
                              <li>• Geburtsdatum nur bei Altersklassen</li>
                              <li>• Ernährung nur bei Verpflegung</li>
                              <li>• Keine unnötigen Felder</li>
                            </ul>
                          </div>
                          <div>
                            <h5>
                              Transparenz
                            </h5>
                            <ul>
                              <li>• Zweck der Datenerhebung</li>
                              <li>• Speicherdauer angeben</li>
                              <li>• Weitergabe an Dritte?</li>
                              <li>• Betroffenenrechte nennen</li>
                            </ul>
                          </div>
                          <div>
                            <h5>
                              Sicherheit
                            </h5>
                            <ul>
                              <li>• SSL-verschlüsselte Formulare</li>
                              <li>• Sichere Datenbank</li>
                              <li>• Zugriffsberechtigungen</li>
                              <li>• Backup-Konzept</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div class="border-t pt-4">
                        <h4 class="font-semibold mb-3">Besondere Herausforderungen</h4>
                        <div class="space-y-3">
                          <div class="flex items-start gap-3">
                            <AlertTriangle class="h-5 w-5 text-orange-500 mt-0.5" ></AlertTriangle>
                            <div>
                              <p class="font-medium">Minderjährige Teilnehmer</p>
                              <p>
                                Ab 16 Jahren können Jugendliche selbst einwilligen. Darunter: Elterneinwilligung erforderlich.
                                Bei gemischten Veranstaltungen: Altersabfrage einbauen.
                              </p>
                            </div>
                          </div>
                          <div class="flex items-start gap-3">
                            <Globe class="h-5 w-5 text-teal-500 mt-0.5" ></Globe>
                            <div>
                              <p class="font-medium">Externe Teilnehmer</p>
                              <p>
                                Nicht-Mitglieder haben die gleichen Rechte. Separate Datenschutzinformation bereitstellen.
                                Keine automatische Aufnahme in Vereinsverteiler!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Gästelisten */}
              <div id="veranstaltungen-gaestelisten" class="scroll-mt-24">
                <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FileText class="h-6 w-6 text-emerald-600" ></FileText>
                  Gästelisten und Teilnehmerverwaltung
                </h3>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle class="text-lg">Papierbasierte Listen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul class="space-y-3 text-sm">
                        <li class="flex items-start gap-2">
                          <Lock class="h-4 w-4 text-emerald-500 mt-0.5" ></Lock>
                          <div>
                            <span class="font-medium">Sichere Aufbewahrung</span>
                            <p>
                              Listen nicht offen auslegen, sondern sicher verwahren
                            </p>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <Eye class="h-4 w-4 text-emerald-500 mt-0.5" ></Eye>
                          <div>
                            <span class="font-medium">Einsichtnahme begrenzen</span>
                            <p>
                              Teilnehmer dürfen nicht alle Daten anderer sehen
                            </p>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <Timer class="h-4 w-4 text-emerald-500 mt-0.5" ></Timer>
                          <div>
                            <span class="font-medium">Zeitnahe Vernichtung</span>
                            <p>
                              Nach der Veranstaltung datenschutzgerecht entsorgen
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle class="text-lg">Digitale Systeme</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul class="space-y-3 text-sm">
                        <li class="flex items-start gap-2">
                          <Database class="h-4 w-4 text-emerald-500 mt-0.5" ></Database>
                          <div>
                            <span class="font-medium">Automatische Löschung</span>
                            <p>
                              Löschfristen im System hinterlegen (z.B. 30 Tage)
                            </p>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <Key class="h-4 w-4 text-emerald-500 mt-0.5" ></Key>
                          <div>
                            <span class="font-medium">Berechtigungskonzept</span>
                            <p>
                              Nur Veranstaltungsleitung hat Vollzugriff
                            </p>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <FileCheck class="h-4 w-4 text-emerald-500 mt-0.5" ></FileCheck>
                          <div>
                            <span class="font-medium">Export-Funktionen</span>
                            <p>
                              Datenportabilität für Betroffene gewährleisten
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Live-Streaming */}
              <div id="veranstaltungen-livestream" class="scroll-mt-24">
                <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Monitor class="h-6 w-6 text-emerald-600" ></Monitor>
                  Live-Streaming und Online-Events
                </h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Besondere Anforderungen bei digitalen Veranstaltungen</CardTitle>
                  </CardHeader>
                  <CardContent class="space-y-4">
                    <div>
                      <p>
                        Live-Streams und Videokonferenzen sind datenschutzrechtlich besonders sensibel, 
                        da die Aufnahmen potenziell weltweit abrufbar und dauerhaft speicherbar sind.
                      </p>
                    </div>
                    
                    <div>
                      <div>
                        <h4 class="font-semibold mb-3">Vor dem Stream</h4>
                        <ul class="space-y-2 text-sm">
                          <li class="flex items-start gap-2">
                            <Wifi class="h-4 w-4 text-purple-500 mt-0.5" ></Wifi>
                            <span>Plattform auf DSGVO-Konformität prüfen</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <UserCheck class="h-4 w-4 text-purple-500 mt-0.5" ></UserCheck>
                            <span>Teilnehmer über Aufzeichnung informieren</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <Settings class="h-4 w-4 text-purple-500 mt-0.5" ></Settings>
                            <span>Opt-out Möglichkeiten schaffen</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-3">Während des Streams</h4>
                        <ul class="space-y-2 text-sm">
                          <li class="flex items-start gap-2">
                            <Camera class="h-4 w-4 text-purple-500 mt-0.5" ></Camera>
                            <span>Kamera-aus Option respektieren</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <MessageSquare class="h-4 w-4 text-purple-500 mt-0.5" ></MessageSquare>
                            <span>Chat-Moderation sicherstellen</span>
                          </li>
                          <li class="flex items-start gap-2">
                            <Shield class="h-4 w-4 text-purple-500 mt-0.5" ></Shield>
                            <span>Keine ungefragten Bildschirmfreigaben</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="border-t pt-4">
                      <h4 class="font-semibold mb-2">Empfohlene Streaming-Plattformen für Vereine</h4>
                      <div>
                        <div>
                          <span class="font-medium">BigBlueButton</span>
                          <p>Open Source</p>
                        </div>
                        <div>
                          <span class="font-medium">Jitsi Meet</span>
                          <p>DSGVO-konform</p>
                        </div>
                        <div>
                          <span class="font-medium">Zoom</span>
                          <p>Mit AV-Vertrag</p>
                        </div>
                        <div>
                          <span class="font-medium">MS Teams</span>
                          <p>Für Vereine</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Communication Section */}
          <section id="kommunikation" class="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                <Mail class="h-8 w-8 text-emerald-600" ></Mail>
                Vereinskommunikation
              </h2>
              <p>
                Newsletter, E-Mails, WhatsApp – moderne Vereinskommunikation braucht klare Datenschutzregeln.
              </p>
              
              {/* Inhaltsübersicht */}
              <div>
                <h3 class="font-semibold mb-4">In diesem Abschnitt:</h3>
                <div>
                  {subNavigationItems.kommunikation.map((item) => (
                    <a> }
                    >
                      <ArrowRight class="h-4 w-4" ></ArrowRight>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <div>
              {[
                {
                  title: 'Newsletter & E-Mails',
                  icon: Mail,
                  items: [
                    'Double-Opt-In für Newsletter-Anmeldung',
                    'Abmeldelink in jeder Mail',
                    'BCC bei Sammel-Mails verwenden',
                    'Keine unnötigen Daten im Verteiler'
                  ],
                  warning: 'Versand ohne Einwilligung kann teuer werden!'
                },
                {
                  title: 'Messenger & Soziale Medien',
                  icon: MessageSquare,
                  items: [
                    'WhatsApp problematisch wegen Kontaktabgleich',
                    'Signal oder Threema als Alternative',
                    'Keine offiziellen Infos über private Messenger',
                    'Social Media Guidelines erstellen'
                  ],
                  warning: 'WhatsApp-Gruppen sind datenschutzrechtlich heikel!'
                },
                {
                  title: 'Vereinswebsite',
                  icon: Globe,
                  items: [
                    'Datenschutzerklärung aktuell halten',
                    'Cookie-Banner korrekt einsetzen',
                    'SSL-Verschlüsselung aktivieren',
                    'Kontaktformulare absichern'
                  ],
                  warning: 'Fehlende Datenschutzerklärung = Abmahngefahr!'
                }
              ].map((comm, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <comm.icon class="h-10 w-10 text-emerald-600 mb-3" ></comm>
                      <CardTitle>{comm.title}</CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                      <ul class="space-y-2">
                        {comm.items.map((item, itemIndex) => (
                          <li key={itemIndex} class="flex items-start gap-2 text-sm">
                            <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" ></CheckCircle>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <p>
                          <AlertTriangle class="h-4 w-4 inline mr-1" ></AlertTriangle>
                          {comm.warning}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Detaillierte Unterabschnitte für Kommunikation */}
            <div class="space-y-12 mt-12">
              {/* Newsletter & E-Mail */}
              <div id="kommunikation-newsletter" class="scroll-mt-24">
                <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Mail class="h-6 w-6 text-emerald-600" ></Mail>
                  Newsletter & E-Mail-Kommunikation im Detail
                </h3>
                <div class="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Double-Opt-In Verfahren richtig umsetzen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div class="space-y-4">
                        <div>
                          <p>
                            Das Double-Opt-In-Verfahren ist rechtlich nicht zwingend, aber der sicherste Weg 
                            zur Nachweisbarkeit der Einwilligung.
                          </p>
                        </div>
                        
                        <div>
                          <div>
                            <h4 class="font-semibold mb-3">So funktioniert's:</h4>
                            <ol class="space-y-2 text-sm">
                              <li class="flex items-start gap-2">
                                <span class="font-medium text-emerald-600">1.</span>
                                <div>
                                  <span class="font-medium">Anmeldung</span>
                                  <p>
                                    Interessent trägt E-Mail-Adresse ein
                                  </p>
                                </div>
                              </li>
                              <li class="flex items-start gap-2">
                                <span class="font-medium text-emerald-600">2.</span>
                                <div>
                                  <span class="font-medium">Bestätigungsmail</span>
                                  <p>
                                    Automatische Mail mit Bestätigungslink
                                  </p>
                                </div>
                              </li>
                              <li class="flex items-start gap-2">
                                <span class="font-medium text-emerald-600">3.</span>
                                <div>
                                  <span class="font-medium">Aktivierung</span>
                                  <p>
                                    Erst nach Klick auf Link aktiv
                                  </p>
                                </div>
                              </li>
                              <li class="flex items-start gap-2">
                                <span class="font-medium text-emerald-600">4.</span>
                                <div>
                                  <span class="font-medium">Dokumentation</span>
                                  <p>
                                    Zeitpunkt und IP-Adresse speichern
                                  </p>
                                </div>
                              </li>
                            </ol>
                          </div>
                          
                          <div>
                            <h4 class="font-semibold mb-3">Wichtige Details:</h4>
                            <ul class="space-y-2 text-sm">
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                                <span>Bestätigungsmail darf keine Werbung enthalten</span>
                              </li>
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                                <span>Link sollte nach 48-72h verfallen</span>
                              </li>
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                                <span>Klare Betreffzeile: "Bitte bestätigen Sie..."</span>
                              </li>
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                                <span>Speicherung der Einwilligung nachweisbar</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div>
                          <h4>
                            ⚠️ Achtung bei Bestandskontakten
                          </h4>
                          <p>
                            Altmitglieder, die vor der DSGVO Newsletter erhielten, brauchen keine neue Einwilligung, 
                            wenn die Verarbeitung auf Basis der Mitgliedschaft (Vertrag) erfolgt. Bei reinen 
                            Werbe-Newslettern ist jedoch eine neue Einwilligung erforderlich!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>E-Mail-Verteiler DSGVO-konform nutzen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <div>
                          <h4>
                            ✅ Richtig: BCC nutzen
                          </h4>
                          <p>
                            Bei Sammel-Mails alle Empfänger ins BCC-Feld. So bleiben 
                            E-Mail-Adressen für andere unsichtbar.
                          </p>
                        </div>
                        <div>
                          <h4>
                            ❌ Falsch: CC-Feld
                          </h4>
                          <p>
                            Niemals alle Empfänger ins CC-Feld! Das ist eine 
                            Datenschutzverletzung mit Bußgeldrisiko.
                          </p>
                        </div>
                        <div>
                          <h4>
                            💡 Besser: Newsletter-Tool
                          </h4>
                          <p>
                            Professionelle Tools bieten Personalisierung, 
                            Abmelde-Links und Statistiken.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Messenger-Dienste */}
              <div id="kommunikation-messenger" class="scroll-mt-24">
                <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare class="h-6 w-6 text-emerald-600" ></MessageSquare>
                  Messenger-Dienste und DSGVO
                </h3>
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <AlertTriangle class="h-6 w-6 text-orange-600" ></AlertTriangle>
                      WhatsApp im Verein - Ein Datenschutz-Dilemma
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-6">
                      <div>
                        <h4>
                          Das Hauptproblem:
                        </h4>
                        <p>
                          WhatsApp gleicht das komplette Adressbuch mit Meta-Servern ab. Dabei werden auch 
                          Kontaktdaten von Personen übertragen, die WhatsApp gar nicht nutzen oder dem nicht 
                          zugestimmt haben. Dies verstößt gegen die DSGVO.
                        </p>
                      </div>
                      
                      <div>
                        <div>
                          <h4 class="font-semibold mb-3">Risiken für Vereine:</h4>
                          <ul class="space-y-2 text-sm">
                            <li class="flex items-start gap-2">
                              <X class="h-4 w-4 text-red-500 mt-0.5" ></X>
                              <span>Unerlaubte Datenweitergabe an Meta (USA)</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <X class="h-4 w-4 text-red-500 mt-0.5" ></X>
                              <span>Keine Kontrolle über Datenverarbeitung</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <X class="h-4 w-4 text-red-500 mt-0.5" ></X>
                              <span>Haftung des Vorstands möglich</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <X class="h-4 w-4 text-red-500 mt-0.5" ></X>
                              <span>Bußgelder bis 20 Mio. € möglich</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-semibold mb-3">Rechtskonforme Alternativen:</h4>
                          <ul class="space-y-2 text-sm">
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span><strong>Signal:</strong> Open Source, verschlüsselt</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span><strong>Threema:</strong> Schweizer Datenschutz</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span><strong>Element:</strong> Dezentral, selbst hostbar</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span><strong>Telegram:</strong> Mit Einschränkungen</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="border-t pt-4">
                        <h4 class="font-semibold mb-3">Wenn WhatsApp unvermeidbar scheint:</h4>
                        <div>
                          <p class="text-sm font-medium mb-2">Risikominimierung (ersetzt keine rechtliche Beratung!):</p>
                          <ul>
                            <li>• Nur auf ausdrücklich freiwilliger Basis</li>
                            <li>• Keine offiziellen Vereinsinformationen</li>
                            <li>• Alternative Kommunikationswege anbieten</li>
                            <li>• Bei Minderjährigen: Elterneinwilligung</li>
                            <li>• Klare Trennung: privat vs. Verein</li>
                            <li>• Dokumentation der Freiwilligkeit</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Website & Social Media */}
              <div id="kommunikation-website" class="scroll-mt-24">
                <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Globe class="h-6 w-6 text-emerald-600" ></Globe>
                  Website & Social Media
                </h3>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Vereinswebsite DSGVO-konform</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div class="space-y-4">
                        <div class="space-y-3">
                          <h4 class="font-semibold">Pflichtangaben:</h4>
                          <ul class="space-y-2 text-sm">
                            <li class="flex items-start gap-2">
                              <FileText class="h-4 w-4 text-emerald-500 mt-0.5" ></FileText>
                              <div>
                                <span class="font-medium">Datenschutzerklärung</span>
                                <p>
                                  Umfassend, verständlich, leicht auffindbar
                                </p>
                              </div>
                            </li>
                            <li class="flex items-start gap-2">
                              <Shield class="h-4 w-4 text-emerald-500 mt-0.5" ></Shield>
                              <div>
                                <span class="font-medium">SSL-Verschlüsselung</span>
                                <p>
                                  HTTPS ist Pflicht bei Kontaktformularen
                                </p>
                              </div>
                            </li>
                            <li class="flex items-start gap-2">
                              <Cookie class="h-4 w-4 text-emerald-500 mt-0.5" ></Cookie>
                              <div>
                                <span class="font-medium">Cookie-Banner</span>
                                <p>
                                  Bei nicht-essentiellen Cookies erforderlich
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4>
                            Tools & Plugins prüfen:
                          </h4>
                          <ul class="text-sm space-y-1">
                            <li>• Google Analytics nur mit Anonymisierung</li>
                            <li>• Facebook Pixel braucht Einwilligung</li>
                            <li>• YouTube-Videos im erweiterten Modus</li>
                            <li>• Google Maps Alternative erwägen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Social Media Präsenz</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div class="space-y-4">
                        <div class="space-y-3">
                          <h4 class="font-semibold">Datenschutz beachten bei:</h4>
                          <ul class="space-y-2 text-sm">
                            <li class="flex items-start gap-2">
                              <Camera class="h-4 w-4 text-emerald-500 mt-0.5" ></Camera>
                              <div>
                                <span class="font-medium">Fotos von Mitgliedern</span>
                                <p>
                                  Separate Einwilligung für Social Media nötig
                                </p>
                              </div>
                            </li>
                            <li class="flex items-start gap-2">
                              <Users class="h-4 w-4 text-emerald-500 mt-0.5" ></Users>
                              <div>
                                <span class="font-medium">Namensnennung</span>
                                <p>
                                  Nur mit ausdrücklicher Zustimmung
                                </p>
                              </div>
                            </li>
                            <li class="flex items-start gap-2">
                              <Heart class="h-4 w-4 text-emerald-500 mt-0.5" ></Heart>
                              <div>
                                <span class="font-medium">Minderjährige</span>
                                <p>
                                  Besondere Vorsicht, Elterneinwilligung
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4>
                            Best Practices:
                          </h4>
                          <ul class="text-sm space-y-1">
                            <li>• Social Media Guidelines erstellen</li>
                            <li>• Verantwortliche Person benennen</li>
                            <li>• Keine Echtzeit-Updates von Events</li>
                            <li>• Kommentare moderieren</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Mitgliederzeitung */}
              <div id="kommunikation-mitgliederzeitung" class="scroll-mt-24">
                <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FileText class="h-6 w-6 text-emerald-600" ></FileText>
                  Vereinszeitung und Mitgliederpublikationen
                </h3>
                <Card>
                  <CardContent class="p-6">
                    <div class="space-y-6">
                      <div>
                        <h4 class="font-semibold mb-3">Rechtliche Grundlagen für Vereinspublikationen</h4>
                        <p>
                          Die Vereinszeitung ist oft ein wichtiges Kommunikationsmittel. Auch hier gelten 
                          strenge Datenschutzregeln, besonders bei personenbezogenen Inhalten.
                        </p>
                      </div>
                      
                      <div>
                        <div>
                          <h5 class="font-medium mb-3">Erlaubt ohne Einwilligung:</h5>
                          <ul class="space-y-2 text-sm">
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span>Berichte über Vereinsaktivitäten</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span>Termine und Ankündigungen</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span>Allgemeine Vereinsinformationen</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5" ></CheckCircle>
                              <span>Funktionsträger mit Funktion</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium mb-3">Einwilligung erforderlich:</h5>
                          <ul class="space-y-2 text-sm">
                            <li class="flex items-start gap-2">
                              <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                              <span>Fotos von Mitgliedern</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                              <span>Private Jubiläen (Geburtstage)</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                              <span>Persönliche Geschichten</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <AlertCircle class="h-4 w-4 text-orange-500 mt-0.5" ></AlertCircle>
                              <span>Kontaktdaten von Mitgliedern</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="border-t pt-4">
                        <h4 class="font-semibold mb-3">Digitale vs. Gedruckte Ausgabe</h4>
                        <div>
                          <div>
                            <h5 class="font-medium mb-1">📰 Gedruckte Version</h5>
                            <p>
                              Begrenzter Empfängerkreis, schwerer nachträglich zu ändern, 
                              aber geringeres Verbreitungsrisiko.
                            </p>
                          </div>
                          <div>
                            <h5 class="font-medium mb-1">💻 Digitale Version</h5>
                            <p>
                              Weltweite Verbreitung möglich, höhere Anforderungen an Einwilligungen, 
                              aber nachträgliche Korrekturen möglich.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Financial Data Section */}
          <section id="finanzen" class="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                <Euro class="h-8 w-8 text-emerald-600" ></Euro>
                Finanzdaten im Verein
              </h2>
              <p>
                Mitgliedsbeiträge, Spenden, Zuschüsse – auch Finanzdaten unterliegen dem Datenschutz.
              </p>
            </motion.div>

            <Card>
              <CardContent class="p-6">
                <div>
                  <div>
                    <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CreditCard class="h-6 w-6 text-emerald-600" ></CreditCard>
                      Beitragsverwaltung
                    </h3>
                    <div class="space-y-3">
                      <div>
                        <h4 class="font-medium mb-2">SEPA-Lastschrift</h4>
                        <ul>
                          <li>• Mandat sicher aufbewahren</li>
                          <li>• Vorabankündigung beachten</li>
                          <li>• Löschung nach Vereinsaustritt + 10 Jahre</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-medium mb-2">Mahnwesen</h4>
                        <ul>
                          <li>• Sensible Kommunikation</li>
                          <li>• Keine öffentlichen Listen</li>
                          <li>• Diskretion wahren</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                      <HandshakeIcon class="h-6 w-6 text-emerald-600" ></HandshakeIcon>
                      Spenden & Zuschüsse
                    </h3>
                    <div class="space-y-3">
                      <div>
                        <h4 class="font-medium mb-2">Spenderverwaltung</h4>
                        <ul>
                          <li>• Einwilligung für Veröffentlichung</li>
                          <li>• Spendenbescheinigungen sicher</li>
                          <li>• Anonyme Spenden respektieren</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-medium mb-2">Fördermittel</h4>
                        <ul>
                          <li>• Nachweispflichten beachten</li>
                          <li>• Verwendungsnachweise archivieren</li>
                          <li>• Prüfrechte berücksichtigen</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Section */}
          <section id="umsetzung" class="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                <Settings class="h-8 w-8 text-emerald-600" ></Settings>
                Praktische Umsetzung
              </h2>
              <p>
                Schritt für Schritt zur DSGVO-Compliance in Ihrem Verein.
              </p>
            </motion.div>

            <div>
              {[
                {
                  step: '1',
                  title: 'Bestandsaufnahme',
                  icon: FileSearch,
                  tasks: [
                    'Welche Daten werden erhoben?',
                    'Wo werden sie gespeichert?',
                    'Wer hat Zugriff?',
                    'Wie lange werden sie aufbewahrt?'
                  ]
                },
                {
                  step: '2',
                  title: 'Dokumentation',
                  icon: FileText,
                  tasks: [
                    'Verarbeitungsverzeichnis erstellen',
                    'Datenschutzerklärung formulieren',
                    'Prozesse dokumentieren',
                    'Verantwortlichkeiten festlegen'
                  ]
                },
                {
                  step: '3',
                  title: 'Technische Maßnahmen',
                  icon: Shield,
                  tasks: [
                    'Passwortrichtlinien einführen',
                    'Backups implementieren',
                    'Verschlüsselung aktivieren',
                    'Zugriffsrechte vergeben'
                  ]
                },
                {
                  step: '4',
                  title: 'Schulung & Kontrolle',
                  icon: UserCheck,
                  tasks: [
                    'Vorstand schulen',
                    'Ehrenamtliche informieren',
                    'Regelmäßige Überprüfung',
                    'Prozesse optimieren'
                  ]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <div>
                      <span class="text-2xl font-bold text-emerald-600">{phase.step}</span>
                    </div>
                    <CardHeader>
                      <phase.icon class="h-10 w-10 text-emerald-600 mb-3" ></phase>
                      <CardTitle class="text-lg">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul class="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li>
                            <CheckCircle class="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" ></CheckCircle>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Interactive Checklist */}
          <section id="checkliste" class="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                <CheckSquare class="h-8 w-8 text-emerald-600" ></CheckSquare>
                DSGVO-Checkliste für Vereine
              </h2>
              <p>
                Prüfen Sie, ob Ihr Verein alle wichtigen Datenschutzanforderungen erfüllt.
              </p>
            </motion.div>

            {/* Progress Overview */}
            <Card>
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-semibold">Ihr Fortschritt</h3>
                <span class="text-3xl font-bold text-emerald-600">%</span>
              </div>
              <Progress value= class="h-3 mb-4" ></Progress>
              <p>
                {completedItems.length} von  Aufgaben erledigt
              </p>
            </Card>

            {/* Checklist Categories */}
            <div class="space-y-6">
              {checklistCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle class="text-xl">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div class="space-y-3">
                        
                          >
                            
                            <span class=>
                              {item.text}
                            </span>
                            
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section id="ressourcen" class="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                <BookOpen class="h-8 w-8 text-emerald-600" ></BookOpen>
                Hilfreiche Ressourcen
              </h2>
              <p>
                Vorlagen, Muster und weiterführende Informationen für Ihren Verein.
              </p>
            </motion.div>

            <div>
              {[
                {
                  title: 'Muster-Datenschutzerklärung',
                  description: 'Anpassbare Vorlage für Vereinswebsites',
                  icon: FileText,
                  badge: 'Download',
                  color: 'emerald'
                },
                {
                  title: 'Einwilligungsformulare',
                  description: 'Vorlagen für Mitglieder und Veranstaltungen',
                  icon: Clipboard,
                  badge: 'Download',
                  color: 'teal'
                },
                {
                  title: 'Verarbeitungsverzeichnis',
                  description: 'Excel-Vorlage nach Art. 30 DSGVO',
                  icon: Database,
                  badge: 'Download',
                  color: 'cyan'
                },
                {
                  title: 'Schulungsmaterial',
                  description: 'Präsentation für Vorstand und Ehrenamtliche',
                  icon: Target,
                  badge: 'PDF',
                  color: 'emerald'
                },
                {
                  title: 'Leitfaden Vereinsfotografie',
                  description: 'Rechtssichere Fotos bei Events',
                  icon: Camera,
                  badge: 'Guide',
                  color: 'teal'
                },
                {
                  title: 'DSGVO-Notfallplan',
                  description: 'Was tun bei Datenpannen?',
                  icon: AlertTriangle,
                  badge: 'Wichtig',
                  color: 'orange'
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div class="flex items-start justify-between">
                        <resource.icon class=h-10 w-10 text-${resource.color}-600 mb-3 ></resource>
                        <Badge variant="secondary">{resource.badge}</Badge>
                      </div>
                      <CardTitle class="text-lg">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        {resource.description}
                      </p>
                      <div>
                        <span class="text-sm font-medium">Herunterladen</span>
                        <Download>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section class="space-y-8">
            <Card class="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white border-0">
              <CardContent>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  class="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
                >
                  <HeartHandshake class="h-12 w-12" ></HeartHandshake>
                </motion.div>
                
                <h2>
                  Machen Sie Ihren Verein DSGVO-fit!
                </h2>
                <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Wir unterstützen Vereine mit maßgeschneiderten Datenschutzlösungen. 
                  Ehrenamtsfreundlich, praxisnah und bezahlbar.
                </p>
                
                <div>
                  <Button>
                    <Phone class="mr-2 h-5 w-5" ></Phone>
                    Kostenlose Vereinsberatung
                  </Button>
                  <Button>
                    <FileText class="mr-2 h-5 w-5" ></FileText>
                    DSGVO-Paket für Vereine
                  </Button>
                </div>

                <div class="mt-8 pt-8 border-t border-white/20">
                  <p class="text-sm opacity-80">
                    Spezialkonditionen für gemeinnützige Vereine • Keine versteckten Kosten • Persönliche Betreuung
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer ></Footer>
    </div>`
};