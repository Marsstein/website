export default {
  route: '/wissen/branchen/smart-grid-compliance',
  title: 'Smart Grid Compliance',
  description: 'Intelligente Stromnetze revolutionieren die Energiewirtschaft. Erfahren Sie, wie Sie Smart Grid-Technologien                    DSGVO-konform implementieren und',
  content: `) => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Helmet>
        <title>Smart Grid Datenschutz – Compliance für Energienetze</title>
        <meta name="description" content="Umfassender Leitfaden für Smart Grid Datenschutz. Smart Meter DSGVO-konform einsetzen, Energiedaten schützen & Cyber-Security für kritische Infrastruktur." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://datenschutz-assistent.de/wissen/branchen/smart-grid-compliance" />
      </Helmet>
      
      <Header ></Header>
      
      {/* Hero Section */}
      <section>
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5" ></div>
          <motion.div 
            class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 30, 0], 
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion>
          <motion.div 
            class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0], 
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          ></motion>
        </div>

        <motion.div 
          style={{ y, opacity }}
          class="container relative px-4 mx-auto"
        >
          <div>
            <div class="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge class="mb-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white border-0">
                  <Zap class="w-4 h-4 mr-2" ></Zap>
                  Smart Grid Compliance
                </Badge>
                <h1>
                  Datenschutz im 
                  <span class="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    Smart Grid
                  </span>
                </h1>
                <p class="text-xl text-gray-600 leading-relaxed">
                  Intelligente Stromnetze revolutionieren die Energiewirtschaft. Erfahren Sie, wie Sie Smart Grid-Technologien 
                  DSGVO-konform implementieren und dabei Verbraucherdaten optimal schützen.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                class="space-y-4"
              >
                {[
                  'Smart Meter Privacy-by-Design implementieren',
                  'Energiedaten rechtssicher verarbeiten',
                  'Cyber-Sicherheit für kritische Infrastruktur'
                ].map((feature, index) => (
                  <div key={index} class="flex items-center space-x-3">
                    <CheckCircle2 class="w-5 h-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                    <span class="text-gray-700">{feature}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                class="flex flex-col sm:flex-row gap-4"
              >
                <Button>
                  <a href="#smart-grid-datenschutz-ueberblick");
                    }
                  }}>
                    Guide starten
                    <ArrowRight class="w-4 h-4 ml-2" ></ArrowRight>
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  class="border-gray-300"
                  asChild
                >
                  <a href="/wissen/branchen">
                    Alle Branchen-Guides
                    <ExternalLink class="w-4 h-4 ml-2" ></ExternalLink>
                  </a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              class="relative"
            >
              <Card class="p-6 bg-white/80 backdrop-blur-sm border-gray-200">
                <CardHeader class="pb-4">
                  <CardTitle class="flex items-center text-lg">
                    <Monitor class="w-5 h-5 mr-2 text-blue-600" ></Monitor>
                    Smart Grid Compliance Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  {complianceStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      class="space-y-2"
                    >
                      <div class="flex justify-between items-center">
                        <span class="text-sm font-medium text-gray-700">{stat.label}</span>
                        <div class="flex items-center space-x-2">
                          <span class=text-sm font-semibold \${stat.color}>{stat.value}%</span>
                          <Badge variant="secondary" class="text-xs px-2 py-0.5">
                            {stat.trend}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={stat.value} class="h-2" ></Progress>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Table of Contents */}
      <section class="py-12 bg-white">
        <div class="container px-4 mx-auto">
          <div class="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center gap-2">
                  <FileText class="h-5 w-5 text-gray-600" ></FileText>
                  Inhaltsverzeichnis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav aria-label="Inhaltsverzeichnis">
                  <ul>
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.id}>
                          <button
                           );
                              }
                            }}
                            class="text-left w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 group"
                          >
                            <Icon>
                            <span>
                              {item.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div class="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div class="container px-4 mx-auto">
          <nav class="flex space-x-8 overflow-x-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                 );
                    }
                  }}
                  class=
                >
                  <Icon class="w-4 h-4" ></Icon>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div class="container px-4 mx-auto py-16 space-y-16">
        
        {/* Überblick Section */}
        <section id="ueberblick" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="smart-grid-datenschutz-ueberblick" class="absolute -top-32" ></div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            class="text-3xl font-bold text-center"
          >
            <Shield class="w-8 h-8 inline-block mr-3 text-blue-600" ></Shield>
            Smart Grid Datenschutz Überblick
          </motion.h2>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <Lightbulb class="w-5 h-5 mr-2 text-yellow-600" ></Lightbulb>
                    Was ist ein Smart Grid?
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Smart Grids sind intelligente Stromnetze, die durch digitale Kommunikationstechnologie 
                    die Erzeugung, Verteilung und den Verbrauch von Elektrizität optimieren. Sie ermöglichen 
                    eine bidirektionale Kommunikation zwischen Energieversorgern und Verbrauchern.
                  </p>
                  <div class="space-y-2">
                    <h4 class="font-semibold text-gray-900">Kernkomponenten:</h4>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-green-600" ></CheckCircle2>Smart Meter (intelligente Stromzähler)</li>
                      <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-green-600" ></CheckCircle2>Smart Meter Gateway (Kommunikationseinheit)</li>
                      <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-green-600" ></CheckCircle2>Netzsteuerungs- und Managementsysteme</li>
                      <li class="flex items-center"><CheckCircle2 class="w-4 h-4 mr-2 text-green-600" ></CheckCircle2>Energiemanagementsysteme beim Verbraucher</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <AlertTriangle class="w-5 h-5 mr-2 text-orange-600" ></AlertTriangle>
                    Datenschutz-Herausforderungen
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Smart Grids sammeln detaillierte Energieverbrauchsdaten, die Rückschlüsse auf 
                    Lebensgewohnheiten, Anwesenheit und sogar verwendete Geräte ermöglichen. 
                    Dies erfordert besondere Datenschutzmaßnahmen.
                  </p>
                  <div class="space-y-2">
                    <h4 class="font-semibold text-gray-900">Kritische Bereiche:</h4>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li class="flex items-center"><AlertTriangle class="w-4 h-4 mr-2 text-orange-600" ></AlertTriangle>Hochfrequente Verbrauchsdatenerfassung</li>
                      <li class="flex items-center"><AlertTriangle class="w-4 h-4 mr-2 text-orange-600" ></AlertTriangle>Profilbildung und Verhaltensmuster</li>
                      <li class="flex items-center"><AlertTriangle class="w-4 h-4 mr-2 text-orange-600" ></AlertTriangle>Datenweitergabe an Dritte</li>
                      <li class="flex items-center"><AlertTriangle class="w-4 h-4 mr-2 text-orange-600" ></AlertTriangle>Langzeitspeicherung von Energiedaten</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center">
                  <FileText class="w-5 h-5 mr-2 text-purple-600" ></FileText>
                  Rechtliche Rahmenbedingungen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  {smartGridFrameworks.map((framework, index) => (
                    <motion.div
                      key={framework.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      class=
                    >
                      <h4 class="font-semibold text-gray-900 mb-2">{framework.name}</h4>
                      <Badge variant="secondary" class="mb-3 text-xs">
                        {framework.category}
                      </Badge>
                      <ul class="space-y-1 text-sm text-gray-600">
                        {framework.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} class="flex items-start">
                            <CheckCircle2 class="w-3 h-3 mr-2 mt-0.5 text-green-600 flex-shrink-0" ></CheckCircle2>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Smart Meter Section */}
        <section id="smart-meter" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="smart-meter-datenschutz-dsgvo" class="absolute -top-32" ></div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            class="text-3xl font-bold text-center"
          >
            <Activity class="w-8 h-8 inline-block mr-3 text-teal-600" ></Activity>
            Smart Meter Datenschutz
          </motion.h2>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <Smartphone class="w-5 h-5 mr-2 text-blue-600" ></Smartphone>
                    Smart Meter Funktionsweise
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Smart Meter erfassen Energieverbrauchsdaten in kurzen Intervallen (15 Minuten bis Echtzeit) 
                    und übertragen diese über das Smart Meter Gateway an autorisierte Marktteilnehmer.
                  </p>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Datenerfassung & -übertragung</h4>
                    <pre class="text-xs bg-white p-3 rounded border overflow-x-auto">
Messintervall: 15 Min → 1 Stunde → 1 Tag
Datenvolumen: ~35.000 Datenpunkte/Jahr/Haushalt
Übertragung: verschlüsselt über Smart Meter Gateway
Empfänger: Netzbetreiber, Messstellenbetreiber, 
          Energielieferant (mit Einwilligung)
                    </pre>
                  </div>
                  <div class="space-y-2">
                    <h4 class="font-semibold text-gray-900">Übertragene Daten:</h4>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li>• Energieverbrauch (kWh) in definierten Intervallen</li>
                      <li>• Zeitstempel der Messung</li>
                      <li>• Zählerstand und Geräte-ID</li>
                      <li>• Status- und Diagnosedaten</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <Lock class="w-5 h-5 mr-2 text-green-600" ></Lock>
                    Privacy-by-Design Ansätze
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Implementierung von Datenschutzmaßnahmen bereits in der Systemarchitektur, 
                    um Privatsphäre von Beginn an zu gewährleisten.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <Badge class="bg-blue-100 text-blue-800 mt-1">1</Badge>
                      <div>
                        <h5 class="font-medium">Datenminimierung</h5>
                        <p class="text-sm text-gray-600">Nur notwendige Daten erfassen und übertragen</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Badge class="bg-teal-100 text-teal-800 mt-1">2</Badge>
                      <div>
                        <h5 class="font-medium">Pseudonymisierung</h5>
                        <p class="text-sm text-gray-600">Verbrauchsdaten von Identitäten trennen</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Badge class="bg-green-100 text-green-800 mt-1">3</Badge>
                      <div>
                        <h5 class="font-medium">Verschlüsselung</h5>
                        <p class="text-sm text-gray-600">Ende-zu-Ende Verschlüsselung der Datenübertragung</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Badge class="bg-purple-100 text-purple-800 mt-1">4</Badge>
                      <div>
                        <h5 class="font-medium">Zugriffskontrolle</h5>
                        <p class="text-sm text-gray-600">Granulare Berechtigungen für Datennutzung</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center justify-between">
                  <span class="flex items-center">
                    <Users class="w-5 h-5 mr-2 text-orange-600" ></Users>
                    Einwilligungsmanagement für Smart Meter
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                   
                  >
                    <ChevronDown class= ></ChevronDown>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Verbraucher müssen transparente Kontrolle über ihre Energiedaten haben. Ein effektives 
                  Einwilligungsmanagement ist Grundlage für DSGVO-konforme Smart Meter Implementierung.
                </p>
                
                {expandedSection === 'consent' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    class="space-y-4"
                  >
                    <div>
                      <div class="space-y-4">
                        <h4 class="font-semibold text-gray-900">Einwilligungsebenen</h4>
                        <div class="space-y-3">
                          <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                            <h5 class="font-medium text-green-800">Basis-Datenübertragung</h5>
                            <p class="text-sm text-green-700">Gesetzlich erforderlich für Abrechnung</p>
                            <Badge class="mt-1 bg-green-600 text-white text-xs">Obligatorisch</Badge>
                          </div>
                          <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <h5 class="font-medium text-blue-800">Erweiterte Analytics</h5>
                            <p class="text-sm text-blue-700">Verbrauchsoptimierung und Prognosen</p>
                            <Badge class="mt-1 bg-blue-600 text-white text-xs">Optional</Badge>
                          </div>
                          <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <h5 class="font-medium text-purple-800">Drittanbieter-Services</h5>
                            <p class="text-sm text-purple-700">Energiemanagement-Apps und Services</p>
                            <Badge class="mt-1 bg-purple-600 text-white text-xs">Opt-in</Badge>
                          </div>
                        </div>
                      </div>
                      <div class="space-y-4">
                        <h4 class="font-semibold text-gray-900">Technische Implementierung</h4>
                        <div class="bg-gray-50 p-4 rounded-lg">
                          <pre class="text-xs bg-white p-3 rounded border overflow-x-auto">
// Consent Management API
interface SmartMeterConsent {
  customerId: string;
  meterGatewayId: string;
  consentLevels: {
    basicData: boolean;        // mandatory
    analytics: boolean;        // optional
    thirdParty: boolean[];     // granular
  };
  dataRetention: number;       // months
  withdrawalDate?: Date;
}

// Granulare Datenfreigabe
const consentConfig = {
  interval: '15min' | 'hourly' | 'daily',
  recipients: ['netzbetreiber', 'mssb', 'lieferant'],
  purposes: ['abrechnung', 'netzstabilität', 'prognose']
};
                          </pre>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Energiedaten Section */}
        <section id="energiedaten" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="energiedaten-management-compliance" class="absolute -top-32" ></div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            class="text-3xl font-bold text-center"
          >
            <Database class="w-8 h-8 inline-block mr-3 text-green-600" ></Database>
            Energiedaten-Management
          </motion.h2>

          <div>
            {smartGridChallenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={challenge.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card class="h-full">
                    <CardHeader>
                      <CardTitle class="flex items-center text-lg">
                        <Icon class="w-5 h-5 mr-2 text-blue-600" ></Icon>
                        {challenge.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul class="space-y-3">
                        {challenge.challenges.map((item, itemIndex) => (
                          <li key={itemIndex} class="flex items-start space-x-2">
                            <AlertTriangle class="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" ></AlertTriangle>
                            <span class="text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center justify-between">
                  <span class="flex items-center">
                    <Shield class="w-5 h-5 mr-2 text-blue-600" ></Shield>
                    Datenschutz-Architektur für Energiedaten
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                   
                  >
                    <ChevronDown class= ></ChevronDown>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Eine sichhere Datenschutz-Architektur für Smart Grids trennt personenbezogene Daten von 
                  Energieverbrauchsdaten und implementiert Sicherheitsmaßnahmen auf allen Ebenen.
                </p>
                
                {expandedSection === 'architecture' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    class="space-y-6"
                  >
                    <div>
                      <div class="space-y-4">
                        <h4 class="font-semibold text-gray-900">Datenarchitektur-Ebenen</h4>
                        <div class="space-y-3">
                          <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <h5 class="font-medium text-blue-800">Device Layer</h5>
                            <p class="text-sm text-blue-700">Smart Meter, Sensoren, IoT-Geräte</p>
                            <Badge class="mt-1 bg-blue-600 text-white text-xs">Hardware-Verschlüsselung</Badge>
                          </div>
                          <div class="p-3 bg-teal-50 rounded-lg border border-teal-200">
                            <h5 class="font-medium text-teal-800">Gateway Layer</h5>
                            <p class="text-sm text-teal-700">Smart Meter Gateway, Protokoll-Translation</p>
                            <Badge class="mt-1 bg-teal-600 text-white text-xs">BSI TR-03109</Badge>
                          </div>
                          <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                            <h5 class="font-medium text-green-800">Data Processing Layer</h5>
                            <p class="text-sm text-green-700">Datenaufbereitung, Anonymisierung</p>
                            <Badge class="mt-1 bg-green-600 text-white text-xs">Privacy-Preserving</Badge>
                          </div>
                          <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <h5 class="font-medium text-purple-800">Application Layer</h5>
                            <p class="text-sm text-purple-700">Analytics, Dashboards, APIs</p>
                            <Badge class="mt-1 bg-purple-600 text-white text-xs">Zugriffskontrolle</Badge>
                          </div>
                        </div>
                      </div>
                      <div class="space-y-4">
                        <h4 class="font-semibold text-gray-900">Privacy-Preserving Technologies</h4>
                        <div class="bg-gray-50 p-4 rounded-lg">
                          <pre class="text-xs bg-white p-3 rounded border overflow-x-auto">
// Differential Privacy für Energiedaten
class EnergyDataPrivacy {
  addNoise(data: number[], epsilon: number): number[] 
  
  // k-Anonymität für Verbrauchsgruppen
  anonymizeConsumption(groups: ConsumerGroup[]) {
    return groups.filter(group => group.size >= k)
                 .map(group => ());
  }
  
  // Homomorphe Verschlüsselung für Aggregation
  aggregateEncrypted(encryptedValues: EncryptedValue[]): EncryptedSum 
}
                          </pre>
                        </div>
                        <div class="space-y-2">
                          <h5 class="font-medium text-gray-900">Implementierte Technologien:</h5>
                          <ul class="space-y-1 text-sm text-gray-600">
                            <li>• Differential Privacy für statistische Analysen</li>
                            <li>• k-Anonymität für Gruppierungen</li>
                            <li>• Homomorphe Verschlüsselung für Aggregationen</li>
                            <li>• Secure Multi-Party Computation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Netzinfrastruktur Section */}
        <section id="netzinfrastruktur" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="netzinfrastruktur-cyber-security" class="absolute -top-32" ></div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            class="text-3xl font-bold text-center"
          >
            <Network class="w-8 h-8 inline-block mr-3 text-purple-600" ></Network>
            Netzinfrastruktur & Cyber-Security
          </motion.h2>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <Radio class="w-5 h-5 mr-2 text-purple-600" ></Radio>
                    Kommunikationsinfrastruktur
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Smart Grid Kommunikation erfolgt über verschiedene Technologien und Protokolle. 
                    Jede Kommunikationsebene erfordert spezifische Sicherheitsmaßnahmen.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <h5 class="font-medium text-blue-800">Wide Area Network (WAN)</h5>
                        <p class="text-xs text-blue-600">Netzbetreiber ↔ Smart Meter Gateway</p>
                      </div>
                      <Badge class="bg-blue-600 text-white text-xs">TLS 1.3</Badge>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                      <div>
                        <h5 class="font-medium text-teal-800">Local Metrological Network (LMN)</h5>
                        <p class="text-xs text-teal-600">Gateway ↔ Smart Meter</p>
                      </div>
                      <Badge class="bg-teal-600 text-white text-xs">OMS</Badge>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <h5 class="font-medium text-green-800">Home Area Network (HAN)</h5>
                        <p class="text-xs text-green-600">Gateway ↔ Verbrauchergeräte</p>
                      </div>
                      <Badge class="bg-green-600 text-white text-xs">CLS</Badge>
                    </div>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Sicherheitsprotokolle</h4>
                    <pre class="text-xs bg-white p-3 rounded border overflow-x-auto">
BSI TR-03109-1: Smart Meter Gateway Requirements
├── Public Key Infrastructure (PKI)
├── TLS 1.3 für WAN-Kommunikation
├── OMS-Standard für LMN
└── Controllable Local Systems (CLS) für HAN

Verschlüsselung:
- AES-256 für symmetrische Verschlüsselung
- RSA-4096/ECDSA für asymmetrische Verfahren
- SHA-256 für Hash-Funktionen
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <Shield class="w-5 h-5 mr-2 text-red-600" ></Shield>
                    Cyber-Security Maßnahmen
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Smart Grids sind kritische Infrastruktur und damit attraktive Ziele für Cyber-Angriffe. 
                    Mehrschichtige Sicherheitskonzepte sind essentiell.
                  </p>
                  <div class="space-y-3">
                    <div class="p-3 bg-red-50 rounded-lg border border-red-200">
                      <h5 class="font-medium text-red-800">Network Security</h5>
                      <ul class="text-xs text-red-700 mt-1 space-y-0.5">
                        <li>• Netzwerksegmentierung und Firewalls</li>
                        <li>• Intrusion Detection/Prevention Systems</li>
                        <li>• VPN für sichere Fernzugriffe</li>
                      </ul>
                    </div>
                    <div class="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <h5 class="font-medium text-orange-800">Device Security</h5>
                      <ul class="text-xs text-orange-700 mt-1 space-y-0.5">
                        <li>• Hardware Security Module (HSM)</li>
                        <li>• Secure Boot und Code Signing</li>
                        <li>• Over-the-Air Updates mit Signaturprüfung</li>
                      </ul>
                    </div>
                    <div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h5 class="font-medium text-yellow-800">Operational Security</h5>
                      <ul class="text-xs text-yellow-700 mt-1 space-y-0.5">
                        <li>• 24/7 Security Operations Center</li>
                        <li>• Incident Response Prozesse</li>
                        <li>• Regelmäßige Penetrationstests</li>
                      </ul>
                    </div>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Threat Monitoring</h4>
                    <pre class="text-xs bg-white p-3 rounded border overflow-x-auto">
// SIEM Integration für Smart Grid
const securityEvents = {
  anomalousConsumption: 'Ungewöhnliche Verbrauchsmuster',
  unauthorizedAccess: 'Unbefugte Gateway-Zugriffe',
  communicationFailure: 'Gestörte Kommunikation',
  firmwareManipulation: 'Firmware-Integritätsverletzung'
};

// Automated Response
if (threatLevel > CRITICAL) 
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Verbraucherschutz Section */}
        <section id="verbraucherschutz" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="verbraucherschutz-transparenz-dsgvo" class="absolute -top-32" ></div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            class="text-3xl font-bold text-center"
          >
            <Users class="w-8 h-8 inline-block mr-3 text-orange-600" ></Users>
            Verbraucherschutz & Transparenz
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center justify-between">
                  <span class="flex items-center">
                    <Eye class="w-5 h-5 mr-2 text-blue-600" ></Eye>
                    Verbraucher-Dashboard & Transparenz
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                   
                  >
                    <ChevronDown class= ></ChevronDown>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Verbraucher haben das Recht auf transparente Information über die Verarbeitung ihrer 
                  Energiedaten. Ein benutzerfreundliches Dashboard schafft Vertrauen und Kontrolle.
                </p>
                
                {expandedSection === 'dashboard' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    class="space-y-6"
                  >
                    <div>
                      <div class="space-y-4">
                        <h4 class="font-semibold text-gray-900">Dashboard-Funktionen</h4>
                        <div class="space-y-3">
                          <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <h5 class="font-medium text-blue-800 flex items-center">
                              <Activity class="w-4 h-4 mr-2" ></Activity>
                              Energieverbrauch Monitoring
                            </h5>
                            <ul class="text-sm text-blue-700 mt-1 space-y-0.5">
                              <li>• Echzeit-Verbrauchsanzeige</li>
                              <li>• Historische Trends und Vergleiche</li>
                              <li>• Kostenaufschlüsselung nach Tarifen</li>
                            </ul>
                          </div>
                          <div class="p-3 bg-teal-50 rounded-lg border border-teal-200">
                            <h5 class="font-medium text-teal-800 flex items-center">
                              <Settings class="w-4 h-4 mr-2" ></Settings>
                              Datenschutz-Einstellungen
                            </h5>
                            <ul class="text-sm text-teal-700 mt-1 space-y-0.5">
                              <li>• Granulare Einwilligungsverwaltung</li>
                              <li>• Datenfreigabe an Dritte kontrollieren</li>
                              <li>• Löschfristen anpassen</li>
                            </ul>
                          </div>
                          <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                            <h5 class="font-medium text-green-800 flex items-center">
                              <Download class="w-4 h-4 mr-2" ></Download>
                              Datenexport & Portabilität
                            </h5>
                            <ul class="text-sm text-green-700 mt-1 space-y-0.5">
                              <li>• Vollständiger Datenexport (DSGVO Art. 20)</li>
                              <li>• Maschinenlesbare Formate (JSON, CSV)</li>
                              <li>• API-Zugang für Drittanbieter</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="space-y-4">
                        <h4 class="font-semibold text-gray-900">Benutzerfreundliche Implementierung</h4>
                        <div class="bg-gray-50 p-4 rounded-lg">
                          <pre class="text-xs bg-white p-3 rounded border overflow-x-auto">
// React Dashboard Component
const EnergyDashboard = () => {
  const [consents, setConsents] = useState({
    analytics: true,
    thirdParty: false,
    marketing: false
  });

  const [exportFormat, setExportFormat] = useState('json');
  
  return (
    <div class="space-y-6">
      <ConsentManager 
        consents={consents}
       
        granular={true}
      ></ConsentManager>
      
      <EnergyChart 
        data={energyData}
        privacy={consents.analytics}
      ></EnergyChart>
      
      <DataExport 
        format={exportFormat}
       
      ></DataExport>
    </div>
  );
};
                          </pre>
                        </div>
                        <div class="space-y-2">
                          <h5 class="font-medium text-gray-900">UX/UI Prinzipien:</h5>
                          <ul class="space-y-1 text-sm text-gray-600">
                            <li>• Klare, verständliche Sprache verwenden</li>
                            <li>• Komplexe Sachverhalte visuell aufbereiten</li>
                            <li>• Ein-Klick Zugang zu Datenschutzfunktionen</li>
                            <li>• Responsive Design für alle Endgeräte</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <FileText class="w-5 h-5 mr-2 text-green-600" ></FileText>
                    Betroffenenrechte umsetzen
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Smart Grid Betreiber müssen alle DSGVO-Betroffenenrechte technisch und 
                    organisatorisch umsetzen können.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <Badge class="bg-blue-100 text-blue-800 mt-1 text-xs">Art. 15</Badge>
                      <div>
                        <h5 class="font-medium text-sm">Auskunftsrecht</h5>
                        <p class="text-xs text-gray-600">Vollständige Übersicht aller verarbeiteten Energiedaten</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Badge class="bg-teal-100 text-teal-800 mt-1 text-xs">Art. 16</Badge>
                      <div>
                        <h5 class="font-medium text-sm">Berichtigungsrecht</h5>
                        <p class="text-xs text-gray-600">Korrektur fehlerhafter Verbrauchsdaten</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Badge class="bg-green-100 text-green-800 mt-1 text-xs">Art. 17</Badge>
                      <div>
                        <h5 class="font-medium text-sm">Löschungsrecht</h5>
                        <p class="text-xs text-gray-600">Löschen nach Ablauf gesetzlicher Aufbewahrungsfristen</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Badge class="bg-purple-100 text-purple-800 mt-1 text-xs">Art. 20</Badge>
                      <div>
                        <h5 class="font-medium text-sm">Datenportabilität</h5>
                        <p class="text-xs text-gray-600">Export in maschinenlesbaren Formaten</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Badge class="bg-orange-100 text-orange-800 mt-1 text-xs">Art. 21</Badge>
                      <div>
                        <h5 class="font-medium text-sm">Widerspruchsrecht</h5>
                        <p class="text-xs text-gray-600">Stopp der Datenverarbeitung für bestimmte Zwecke</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <Clock class="w-5 h-5 mr-2 text-purple-600" ></Clock>
                    Incident Response & Meldepflichten
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Bei Datenschutzverletzungen in Smart Grid Systemen greifen besondere 
                    Meldepflichten für kritische Infrastruktur.
                  </p>
                  <div class="space-y-3">
                    <div class="p-3 bg-red-50 rounded-lg border border-red-200">
                      <h5 class="font-medium text-red-800">DSGVO Meldepflicht</h5>
                      <div class="text-sm text-red-700 space-y-1">
                        <p><strong>72h</strong> - Meldung an Aufsichtsbehörde</p>
                        <p><strong>ohne Verzug</strong> - Information der Betroffenen</p>
                      </div>
                    </div>
                    <div class="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <h5 class="font-medium text-orange-800">BSI Meldepflicht</h5>
                      <div class="text-sm text-orange-700 space-y-1">
                        <p><strong>KRITIS-Verordnung</strong> - Störungen kritischer IT</p>
                        <p><strong>ohne Verzug</strong> - Cyber-Sicherheitsvorfälle</p>
                      </div>
                    </div>
                    <div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h5 class="font-medium text-yellow-800">Regulierungsbehörde</h5>
                      <div class="text-sm text-yellow-700 space-y-1">
                        <p><strong>Bundesnetzagentur</strong> - Netzstörungen</p>
                        <p><strong>EnWG § 13b</strong> - Systemsicherheit</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2 text-sm">Incident Response Workflow</h4>
                    <pre class="text-xs bg-white p-3 rounded border overflow-x-auto">
1. Detection & Assessment
   └── Automated monitoring alerts
   
2. Classification & Impact Analysis  
   ├── Data breach severity
   ├── Infrastructure impact
   └── Regulatory requirements
   
3. Notification Timeline
   ├── Internal escalation: 1h
   ├── BSI notification: 4h
   ├── DSGVO authority: 72h
   └── Customer notification: varies
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Implementation Section */}
        <section id="implementation" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="praktische-umsetzung-smart-grid" class="absolute -top-32" ></div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            class="text-3xl font-bold text-center"
          >
            <Code class="w-8 h-8 inline-block mr-3 text-blue-600" ></Code>
            Praktische Umsetzung
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center">
                  <Target class="w-5 h-5 mr-2 text-green-600" ></Target>
                  Implementation Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  {implementationPhases.map((phase, index) => (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      class="space-y-4"
                    >
                      <div class="text-center">
                        <Badge class=>
                          Phase {index + 1}
                        </Badge>
                        <h4 class="font-semibold mt-2">{phase.phase}</h4>
                        <p class="text-sm text-gray-600">{phase.duration}</p>
                      </div>
                      <div class="space-y-2">
                        <h5 class="font-medium text-sm">Hauptaufgaben:</h5>
                        <ul class="space-y-1">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} class="text-xs text-gray-600 flex items-start">
                              <CheckCircle2 class="w-3 h-3 mr-1 mt-0.5 text-green-600 flex-shrink-0" ></CheckCircle2>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div class="space-y-2">
                        <h5 class="font-medium text-sm">Deliverables:</h5>
                        <ul class="space-y-1">
                          {phase.deliverables.map((deliverable, delIndex) => (
                            <li key={delIndex} class="text-xs text-blue-600 flex items-start">
                              <ArrowRight class="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" ></ArrowRight>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <Cpu class="w-5 h-5 mr-2 text-blue-600" ></Cpu>
                    Technology Stack
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Bewährte Technologien und Standards für DSGVO-konforme Smart Grid Implementierung.
                  </p>
                  <div class="space-y-3">
                    <div>
                      <h5 class="font-medium text-gray-900 mb-2">Infrastructure & Security</h5>
                      <div class="grid grid-cols-2 gap-2">
                        <Badge variant="outline" class="justify-center">BSI TR-03109</Badge>
                        <Badge variant="outline" class="justify-center">TLS 1.3</Badge>
                        <Badge variant="outline" class="justify-center">PKI</Badge>
                        <Badge variant="outline" class="justify-center">HSM</Badge>
                      </div>
                    </div>
                    <div>
                      <h5 class="font-medium text-gray-900 mb-2">Data Processing</h5>
                      <div class="grid grid-cols-2 gap-2">
                        <Badge variant="outline" class="justify-center">Apache Kafka</Badge>
                        <Badge variant="outline" class="justify-center">PostgreSQL</Badge>
                        <Badge variant="outline" class="justify-center">InfluxDB</Badge>
                        <Badge variant="outline" class="justify-center">Redis</Badge>
                      </div>
                    </div>
                    <div>
                      <h5 class="font-medium text-gray-900 mb-2">Privacy Tech</h5>
                      <div class="grid grid-cols-2 gap-2">
                        <Badge variant="outline" class="justify-center">Differential Privacy</Badge>
                        <Badge variant="outline" class="justify-center">Homomorphic Encryption</Badge>
                        <Badge variant="outline" class="justify-center">Secure MPC</Badge>
                        <Badge variant="outline" class="justify-center">Zero-Knowledge</Badge>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Architektur-Pattern</h4>
                    <pre class="text-xs bg-white p-3 rounded border overflow-x-auto">
// Microservices für Smart Grid
services:
  gateway-manager:
    - Smart Meter Gateway Verwaltung
    - Geräte-Authentifizierung
    
  data-processor:
    - Energiedaten Anonymisierung
    - Privacy-preserving Analytics
    
  consent-manager:
    - Einwilligungsverwaltung
    - Betroffenenrechte
    
  audit-service:
    - Compliance Monitoring
    - Incident Response
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card class="h-full">
                <CardHeader>
                  <CardTitle class="flex items-center">
                    <CheckCircle2 class="w-5 h-5 mr-2 text-green-600" ></CheckCircle2>
                    Deployment Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  <p class="text-gray-600">
                    Comprehensive Checklist für die produktive Einführung von Smart Grid 
                    Datenschutzmaßnahmen.
                  </p>
                  <div class="space-y-4">
                    <div>
                      <h5 class="font-medium text-gray-900 mb-2">Vor der Implementierung</h5>
                      <div class="space-y-1 text-sm">
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Datenschutz-Folgenabschätzung durchgeführt</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Rechtliche Grundlagen geprüft (DSGVO, MsbG)</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>BSI-Zertifizierung für Smart Meter Gateway</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Mitarbeiterschulungen durchgeführt</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 class="font-medium text-gray-900 mb-2">Technische Umsetzung</h5>
                      <div class="space-y-1 text-sm">
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Verschlüsselung End-to-End implementiert</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Consent Management System deployed</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Privacy Dashboard für Kunden</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Automated Privacy Controls</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 class="font-medium text-gray-900 mb-2">Compliance & Monitoring</h5>
                      <div class="space-y-1 text-sm">
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Audit-Logs und Monitoring aktiv</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Incident Response Verfahren getestet</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Betroffenenrechte-Workflow funktional</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input type="checkbox" class="rounded" />
                          <span>Regelmäßige Compliance-Reviews geplant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section class="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div class="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            class="max-w-3xl mx-auto space-y-8"
          >
            <div class="flex justify-center">
              <Zap class="w-16 h-16 text-white/80" ></Zap>
            </div>
            <h2>
              Bereit für DSGVO-konforme Smart Grid Implementation?
            </h2>
            <p class="text-xl text-white/90">
              Nutzen Sie unsere Expertise für die sichere und rechtskonforme Digitalisierung 
              Ihrer Energieinfrastruktur. Privacy-by-Design von Anfang an.
            </p>
            <div>
              <Button>
                <a href="/kontakt">
                  Kostenlose Beratung
                  <ArrowRight class="w-4 h-4 ml-2" ></ArrowRight>
                </a>
              </Button>
              <Button>
                <a href="/tools">
                  Compliance Tools entdecken
                  <ExternalLink class="w-4 h-4 ml-2" ></ExternalLink>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section class="py-16 bg-gray-50">
        <div class="container px-4 mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            class="text-2xl font-bold text-center mb-8"
          >
            Verwandte Ressourcen
          </motion.h3>
          <div>
            {[
              {
                title: 'Industrie 4.0 Datenschutz',
                description: 'Privacy in vernetzten Produktionsanlagen',
                link: '/wissen/branchen/industrie-40-datenschutz',
                icon: Building
              },
              {
                title: 'Fintech Compliance',
                description: 'Datenschutz in Finanzdienstleistungen',
                link: '/wissen/branchen/fintech-compliance',
                icon: TrendingUp
              },
              {
                title: 'Healthcare DSGVO',
                description: 'Patientendaten rechtssicher verarbeiten',
                link: '/wissen/branchen/healthcare-dsgvo',
                icon: Heart
              },
              {
                title: 'Privacy Tools',
                description: 'Praktische Werkzeuge für Compliance',
                link: '/tools',
                icon: BookOpen
              }
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent class="p-6">
                      <Icon class="w-8 h-8 text-blue-600 mb-4" ></Icon>
                      <h4 class="font-semibold mb-2">{resource.title}</h4>
                      <p class="text-sm text-gray-600 mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" asChild class="w-full">
                        <Link to={resource.link}>
                          Mehr erfahren
                          <ChevronRight class="w-4 h-4 ml-2" ></ChevronRight>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer ></Footer>
      
      {/* Back to Top Button */}
      
          class="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
          aria-label="Zurück nach oben"
        >
          <ChevronUp class="h-5 w-5" ></ChevronUp>
        </button>
      )}
    </div>`
};