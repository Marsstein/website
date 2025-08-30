export default {
  route: '/wissen/branchen/automotive-datenschutz',
  title: 'Datenschutz in der Automobilindustrie',
  description: 'Von Connected Cars bis Autonomous Driving: Navigieren Sie sicher durch die komplexen 
                  Datenschutzanforderungen der modernen Mobilität',
  content: `) => window.removeEventListener('scroll', handleScroll);
  }, []);

  const automotiveDataTypes = [
    {
      category: 'Fahrzeugdaten',
      icon: Gauge,
      data: [
        'Geschwindigkeit & Beschleunigung',
        'Motor- und Getriebedaten',
        'Kraftstoffverbrauch & Emissionen',
        'Wartungsintervalle & Fehlercodes',
        'Fahrstil & Fahrverhalten'
      ],
      risk: 'high'
    },
    {
      category: 'Standortdaten',
      icon: MapPin,
      data: [
        'GPS-Position in Echtzeit',
        'Bewegungsprofile & Routen',
        'Parkplätze & Aufenthaltsorte',
        'Geschwindigkeitsüberschreitungen',
        'Grenzübertritte'
      ],
      risk: 'critical'
    },
    {
      category: 'Personendaten',
      icon: Users,
      data: [
        'Fahrer-Identifikation',
        'Kontakte & Anruflisten',
        'Musikpräferenzen',
        'Sprachaufzeichnungen',
        'Biometrische Daten'
      ],
      risk: 'high'
    },
    
  ];

  const connectedCarFeatures = [
    {
      feature: 'Over-the-Air Updates',
      description: 'Software-Updates ohne Werkstattbesuch',
      privacy: 'Übertragung von Fahrzeugdaten an Hersteller',
      icon: Download
    },
    {
      feature: 'Remote Services',
      description: 'Fahrzeugsteuerung per App',
      privacy: 'Standortzugriff und Fahrzeugstatus',
      icon: Smartphone
    },
    {
      feature: 'Predictive Maintenance',
      description: 'Vorhersage von Wartungsbedarf',
      privacy: 'Analyse von Fahrverhalten und Nutzung',
      icon: Wrench
    },
    
  ];

  const complianceRequirements = [
    ,
    ,
    
  ];

  const renderOverview = () => (
    <>
      <div>
        {[
          { label: 'Datenvolumen/Fahrzeug', value: '25 GB/Stunde', icon: Database, trend: '+150%' },
          { label: 'Sensoren/Fahrzeug', value: '100-200', icon: CircuitBoard, trend: '+40%' },
          { label: 'Software-Codezeilen', value: '100+ Mio.', icon: Code, trend: '+200%' },
          { label: 'Connected Cars 2025', value: '75%', icon: Wifi, trend: 'Prognose' }
        ].map((stat, index) => (
          <Card key={index} class="relative overflow-hidden">
            <CardHeader class="pb-2">
              <div class="flex items-center justify-between">
                <stat.icon class="h-8 w-8 text-blue-600" ></stat>
                <Badge variant="secondary" class="text-xs">
                  {stat.trend}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">{stat.value}</div>
              <p class="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" ></div>
          </Card>
        ))}
      </div>

      <Card class="border-blue-200 bg-blue-50/50">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <AlertCircle class="h-5 w-5 text-blue-600" ></AlertCircle>
            Datenschutz-Herausforderungen in der Automobilindustrie
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div>
            <div class="space-y-3">
              <h4 class="font-semibold flex items-center gap-2">
                <Car class="h-4 w-4" ></Car>
                Technische Komplexität
              </h4>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                  <span>Über 100 ECUs (Electronic Control Units) pro Fahrzeug</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                  <span>Heterogene Systemlandschaft verschiedener Zulieferer</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                  <span>Lange Produktlebenszyklen (10-15 Jahre)</span>
                </li>
              </ul>
            </div>
            <div class="space-y-3">
              <h4 class="font-semibold flex items-center gap-2">
                <Shield class="h-4 w-4" ></Shield>
                Regulatorische Anforderungen
              </h4>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start gap-2">
                  <AlertTriangle class="h-4 w-4 text-orange-600 mt-0.5" ></AlertTriangle>
                  <span>Konflikt zwischen Funktionalität und Privacy</span>
                </li>
                <li class="flex items-start gap-2">
                  <AlertTriangle class="h-4 w-4 text-orange-600 mt-0.5" ></AlertTriangle>
                  <span>Internationale Datentransfers bei globalen Herstellern</span>
                </li>
                <li class="flex items-start gap-2">
                  <AlertTriangle class="h-4 w-4 text-orange-600 mt-0.5" ></AlertTriangle>
                  <span>Unklare Verantwortlichkeiten in der Lieferkette</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Datenerhebung im Fahrzeug</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              {automotiveDataTypes.map((type, index) => (
                <div key={index} class="flex items-start gap-3">
                  <div class=>
                    <type.icon class= ></type>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <h4 class="font-semibold">{type.category}</h4>
                      <Badge>
                        {type.risk === 'critical' ? 'Kritisch' : 
                         type.risk === 'high' ? 'Hoch' : 
                         'Mittel'}
                      </Badge>
                    </div>
                    <ul class="text-sm text-muted-foreground space-y-1">
                      {type.data.map((item, idx) => (
                        <li key={idx} class="flex items-center gap-1">
                          <span class="text-xs">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Stakeholder im Automotive-Ökosystem</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              {[
                ,
                { name: 'Tier-1/2 Zulieferer', role: 'Komponenten mit eigener Datenverarbeitung', icon: Package },
                { name: 'Werkstätten', role: 'Zugriff auf Diagnose- und Wartungsdaten', icon: Wrench },
                { name: 'Versicherungen', role: 'Telematik-Tarife und Schadensanalyse', icon: Shield },
                { name: 'Behörden', role: 'Zugriff bei Unfällen oder Ermittlungen', icon: Building2 },
                { name: 'App-Entwickler', role: 'Third-Party Services und Infotainment', icon: Smartphone }
              ].map((stakeholder, index) => (
                <div>
                  <stakeholder.icon class="h-5 w-5 text-blue-600" ></stakeholder>
                  <div class="flex-1">
                    <div class="font-medium text-sm">{stakeholder.name}</div>
                    <div class="text-xs text-muted-foreground">{stakeholder.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderConnectedCar = () => (
    <>
      <Card class="border-green-200">
        <CardHeader class="bg-green-50">
          <CardTitle class="flex items-center gap-2">
            <Wifi class="h-5 w-5 text-green-600" ></Wifi>
            Connected Car Services & Datenschutz
          </CardTitle>
        </CardHeader>
        <CardContent class="pt-6">
          <div>
            {connectedCarFeatures.map((feature, index) => (
              <div>
                <div class="flex items-start gap-3">
                  <div class="p-2 bg-green-100 rounded-lg">
                    <feature.icon class="h-5 w-5 text-green-600" ></feature>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold mb-1">{feature.feature}</h4>
                    <p class="text-sm text-muted-foreground mb-2">{feature.description}</p>
                    <div class="flex items-start gap-2 text-sm">
                      <Eye class="h-4 w-4 text-orange-600 mt-0.5" ></Eye>
                      <span>{feature.privacy}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div>
        <Card>
          <CardHeader>
            <CardTitle class="text-lg flex items-center gap-2">
              <Cloud class="h-5 w-5" ></Cloud>
              Backend-Infrastruktur
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <Server class="h-4 w-4 text-blue-600 mt-0.5" ></Server>
                <span>Zentrale Datenplattformen der Hersteller</span>
              </li>
              <li class="flex items-start gap-2">
                <Globe class="h-4 w-4 text-blue-600 mt-0.5" ></Globe>
                <span>Globale Datenspeicherung und -verarbeitung</span>
              </li>
              <li class="flex items-start gap-2">
                <Shield class="h-4 w-4 text-blue-600 mt-0.5" ></Shield>
                <span>Security Operations Center (SOC)</span>
              </li>
              <li class="flex items-start gap-2">
                <Database class="h-4 w-4 text-blue-600 mt-0.5" ></Database>
                <span>Big Data Analytics für Produktverbesserung</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg flex items-center gap-2">
              <Radio class="h-5 w-5" ></Radio>
              Kommunikationstechnologien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <Wifi class="h-4 w-4 text-green-600 mt-0.5" ></Wifi>
                <span>4G/5G Mobilfunk für Echtzeitdaten</span>
              </li>
              <li class="flex items-start gap-2">
                <Waves class="h-4 w-4 text-green-600 mt-0.5" ></Waves>
                <span>V2X (Vehicle-to-Everything)</span>
              </li>
              <li class="flex items-start gap-2">
                <Satellite class="h-4 w-4 text-green-600 mt-0.5" ></Satellite>
                <span>Satellitennavigation (GPS, Galileo)</span>
              </li>
              <li class="flex items-start gap-2">
                <Radio class="h-4 w-4 text-green-600 mt-0.5" ></Radio>
                <span>Bluetooth/WiFi für lokale Dienste</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg flex items-center gap-2">
              <Lock class="h-5 w-5" ></Lock>
              Sicherheitsmaßnahmen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <Key class="h-4 w-4 text-red-600 mt-0.5" ></Key>
                <span>Ende-zu-Ende Verschlüsselung</span>
              </li>
              <li class="flex items-start gap-2">
                <ShieldCheck class="h-4 w-4 text-red-600 mt-0.5" ></ShieldCheck>
                <span>Secure Boot & Code Signing</span>
              </li>
              <li class="flex items-start gap-2">
                <Fingerprint class="h-4 w-4 text-red-600 mt-0.5" ></Fingerprint>
                <span>Authentifizierung & Autorisierung</span>
              </li>
              <li class="flex items-start gap-2">
                <AlertCircle class="h-4 w-4 text-red-600 mt-0.5" ></AlertCircle>
                <span>Intrusion Detection Systems</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Datenschutz by Design für Connected Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="p-4 bg-blue-50 rounded-lg">
              <h4 class="font-semibold mb-2 flex items-center gap-2">
                <Settings class="h-4 w-4" ></Settings>
                Technische Maßnahmen
              </h4>
              <div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-sm">
                    <CheckCircle2 class="h-4 w-4 text-green-600" ></CheckCircle2>
                    <span>Datenminimierung durch Edge Computing</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <CheckCircle2 class="h-4 w-4 text-green-600" ></CheckCircle2>
                    <span>Anonymisierung von Bewegungsprofilen</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <CheckCircle2 class="h-4 w-4 text-green-600" ></CheckCircle2>
                    <span>Pseudonymisierung von Nutzeridentitäten</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-sm">
                    <CheckCircle2 class="h-4 w-4 text-green-600" ></CheckCircle2>
                    <span>Lokale Datenverarbeitung wo möglich</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <CheckCircle2 class="h-4 w-4 text-green-600" ></CheckCircle2>
                    <span>Automatische Datenlöschung nach Zweckerfüllung</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <CheckCircle2 class="h-4 w-4 text-green-600" ></CheckCircle2>
                    <span>Granulare Einwilligungsoptionen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderFahrzeugdaten = () => (
    <>
      <Card class="border-orange-200">
        <CardHeader class="bg-orange-50">
          <CardTitle class="flex items-center gap-2">
            <Database class="h-5 w-5 text-orange-600" ></Database>
            Kategorisierung von Fahrzeugdaten
          </CardTitle>
        </CardHeader>
        <CardContent class="pt-6">
          <div class="space-y-6">
            <div>
              <div class="p-4 border rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <User class="h-4 w-4" ></User>
                  Personenbezogene Daten
                </h4>
                <ul class="space-y-1 text-sm">
                  <li>• Fahrername & Kontaktdaten</li>
                  <li>• Fahrzeug-ID verknüpft mit Halter</li>
                  <li>• Zahlungsinformationen</li>
                  <li>• Biometrische Daten (Stimme, Gesicht)</li>
                  <li>• Smartphone-Kontakte</li>
                </ul>
                <Badge class="mt-2" variant="destructive">DSGVO relevant</Badge>
              </div>

              <div class="p-4 border rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <MapPin class="h-4 w-4" ></MapPin>
                  Standortbezogene Daten
                </h4>
                <ul class="space-y-1 text-sm">
                  <li>• GPS-Koordinaten</li>
                  <li>• Fahrtrouten & Ziele</li>
                  <li>• Parkplätze & Aufenthaltsdauer</li>
                  <li>• Geschwindigkeit je Streckenabschnitt</li>
                  <li>• Grenzübergänge</li>
                </ul>
                <Badge class="mt-2" variant="destructive">Besonders sensibel</Badge>
              </div>

              <div class="p-4 border rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <Gauge class="h-4 w-4" ></Gauge>
                  Technische Daten
                </h4>
                <ul class="space-y-1 text-sm">
                  <li>• Motordaten & Diagnose</li>
                  <li>• Verschleißzustand</li>
                  <li>• Fehlercodes</li>
                  <li>• Kraftstoffverbrauch</li>
                  <li>• Reifendruck & Temperatur</li>
                </ul>
                <Badge class="mt-2" variant="secondary">Meist anonymisierbar</Badge>
              </div>
            </div>

            <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 class="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle class="h-5 w-5 text-yellow-600" ></AlertTriangle>
                Besondere Risiken bei Fahrzeugdaten
              </h4>
              <div>
                <div>
                  <strong>Profilbildung:</strong>
                  <ul class="mt-1 space-y-1 ml-4">
                    <li>• Fahrverhalten & Persönlichkeit</li>
                    <li>• Wirtschaftliche Situation</li>
                    <li>• Soziale Kontakte & Beziehungen</li>
                  </ul>
                </div>
                <div>
                  <strong>Missbrauchspotential:</strong>
                  <ul class="mt-1 space-y-1 ml-4">
                    <li>• Überwachung & Stalking</li>
                    <li>• Diskriminierung bei Versicherungen</li>
                    <li>• Manipulation von Beweismitteln</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Datenflüsse im Fahrzeug</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="relative">
                <div class="absolute left-5 top-8 bottom-0 w-0.5 bg-gray-300"></div>
                {[
                  { title: 'Sensoren', desc: 'Erfassung von Rohdaten', icon: CircuitBoard },
                  { title: 'ECUs', desc: 'Verarbeitung & Aggregation', icon: Cpu },
                  { title: 'Gateway', desc: 'Zentrale Kommunikation', icon: Network },
                  { title: 'Backend', desc: 'Cloud-Speicherung & Analyse', icon: Cloud }
                ].map((step, index) => (
                  <div key={index} class="relative flex items-center gap-4 mb-4">
                    <div class="z-10 p-2 bg-white border-2 border-gray-300 rounded-full">
                      <step.icon class="h-4 w-4" ></step>
                    </div>
                    <div class="flex-1 p-3 bg-gray-50 rounded-lg">
                      <h5 class="font-semibold">{step.title}</h5>
                      <p class="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Zugriffsrechte verwalten</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              {[
                { entity: 'Fahrzeughalter', access: 'Vollzugriff auf eigene Daten', level: 'full' },
                { entity: 'Werkstatt', access: 'Diagnosedaten bei Wartung', level: 'limited' },
                { entity: 'Hersteller', access: 'Aggregierte & anonymisierte Daten', level: 'restricted' },
                { entity: 'Versicherung', access: 'Nach expliziter Einwilligung', level: 'consent' },
                { entity: 'Behörden', access: 'Bei rechtlicher Grundlage', level: 'legal' }
              ].map((access, index) => (
                <div key={index} class="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div class="font-medium text-sm">{access.entity}</div>
                    <div class="text-xs text-muted-foreground">{access.access}</div>
                  </div>
                  <Badge>
                    {access.level === 'full' ? 'Vollzugriff' :
                     access.level === 'limited' ? 'Begrenzt' :
                     access.level === 'restricted' ? 'Eingeschränkt' :
                     access.level === 'consent' ? 'Mit Einwilligung' :
                     'Rechtliche Basis'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Best Practices für Datenmanagement</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div class="space-y-3">
              <h4 class="font-semibold flex items-center gap-2">
                <Database class="h-4 w-4" ></Database>
                Datenspeicherung
              </h4>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                  <span>Klare Trennung von personen- und fahrzeugbezogenen Daten</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                  <span>Verschlüsselung at rest und in transit</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                  <span>Regelmäßige Löschung nach definierten Fristen</span>
                </li>
              </ul>
            </div>
            <div class="space-y-3">
              <h4 class="font-semibold flex items-center gap-2">
                <Shield class="h-4 w-4" ></Shield>
                Datenschutzkonzepte
              </h4>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                  <span>Privacy Dashboard im Fahrzeug</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                  <span>Opt-in/Opt-out für nicht-kritische Services</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                  <span>Transparente Datenschutzerklärungen</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderTelematik = () => (
    <>
      <Card class="border-purple-200">
        <CardHeader class="bg-purple-50">
          <CardTitle class="flex items-center gap-2">
            <Navigation class="h-5 w-5 text-purple-600" ></Navigation>
            Telematik & GPS-Systeme
          </CardTitle>
        </CardHeader>
        <CardContent class="pt-6">
          <div>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-2">eCall-System (Pflicht seit 2018)</h4>
                <div class="space-y-2 text-sm">
                  <div class="p-3 bg-red-50 rounded-lg">
                    <strong class="text-red-700">Automatische Datenübertragung bei:</strong>
                    <ul class="mt-1 space-y-1 ml-4">
                      <li>• Schweren Unfällen (Airbag-Auslösung)</li>
                      <li>• Manueller Aktivierung (SOS-Taste)</li>
                    </ul>
                  </div>
                  <div class="p-3 bg-blue-50 rounded-lg">
                    <strong class="text-blue-700">Übertragene Daten:</strong>
                    <ul class="mt-1 space-y-1 ml-4">
                      <li>• GPS-Position des Unfalls</li>
                      <li>• Fahrtrichtung</li>
                      <li>• Fahrzeugtyp & Antriebsart</li>
                      <li>• Anzahl der Insassen</li>
                      <li>• Zeitstempel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-2">Kommerzielle Telematik-Dienste</h4>
                <div class="space-y-3">
                  {[
                    { service: 'Pay-as-you-drive Versicherung', data: 'Fahrverhalten, Strecken, Zeiten' },
                    { service: 'Flottenmanagement', data: 'Echtzeit-Tracking, Fahreridentifikation' },
                    { service: 'Stolen Vehicle Tracking', data: 'Permanente Standortüberwachung' },
                    { service: 'Predictive Maintenance', data: 'Fahrzeugzustand, Nutzungsmuster' }
                  ].map((item, index) => (
                    <div key={index} class="p-3 border rounded-lg">
                      <div class="font-medium text-sm">{item.service}</div>
                      <div class="text-xs text-muted-foreground mt-1">
                        <Eye class="inline h-3 w-3 mr-1" ></Eye>
                        {item.data}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <Card>
          <CardHeader>
            <CardTitle class="text-lg flex items-center gap-2">
              <MapPin class="h-5 w-5" ></MapPin>
              Standortgenauigkeit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-sm">GPS Standard</span>
                <Badge>~5-10m</Badge>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">GPS + GLONASS</span>
                <Badge>~3-5m</Badge>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">RTK/DGPS</span>
                <Badge variant="secondary">~1-2cm</Badge>
              </div>
              <div class="mt-3 p-3 bg-orange-50 rounded-lg text-sm">
                <AlertTriangle class="inline h-4 w-4 text-orange-600 mr-1" ></AlertTriangle>
                Höhere Genauigkeit = Größeres Datenschutzrisiko
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg flex items-center gap-2">
              <Clock class="h-5 w-5" ></Clock>
              Datenaufbewahrung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="p-3 bg-gray-50 rounded-lg">
                <div class="font-medium text-sm mb-1">eCall-Daten</div>
                <div class="text-xs text-muted-foreground">13 Stunden nach Notruf</div>
              </div>
              <div class="p-3 bg-gray-50 rounded-lg">
                <div class="font-medium text-sm mb-1">Telematik-Versicherung</div>
                <div class="text-xs text-muted-foreground">3-10 Jahre (vertragsabhängig)</div>
              </div>
              <div class="p-3 bg-gray-50 rounded-lg">
                <div class="font-medium text-sm mb-1">Hersteller-Backend</div>
                <div class="text-xs text-muted-foreground">Oft unbegrenzt (anonymisiert)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg flex items-center gap-2">
              <UserCheck class="h-5 w-5" ></UserCheck>
              Nutzerrechte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                <span>Deaktivierung kommerzieller Dienste</span>
              </div>
              <div class="flex items-start gap-2">
                <X class="h-4 w-4 text-red-600 mt-0.5" ></X>
                <span>eCall nicht deaktivierbar (gesetzlich)</span>
              </div>
              <div class="flex items-start gap-2">
                <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                <span>Auskunft über gespeicherte Daten</span>
              </div>
              <div class="flex items-start gap-2">
                <AlertCircle class="h-4 w-4 text-orange-600 mt-0.5" ></AlertCircle>
                <span>Löschung nur teilweise möglich</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Datenschutzkonformer Einsatz von Telematik</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div>
              <div class="p-4 border rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <Shield class="h-4 w-4 text-green-600" ></Shield>
                  Technische Schutzmaßnahmen
                </h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">✓</span>
                    <span>Verschlüsselung der GPS-Daten</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">✓</span>
                    <span>Pseudonymisierung von Bewegungsprofilen</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">✓</span>
                    <span>Geofencing für sensible Bereiche</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">✓</span>
                    <span>Automatisches Löschen alter Standortdaten</span>
                  </li>
                </ul>
              </div>

              <div class="p-4 border rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <FileText class="h-4 w-4 text-blue-600" ></FileText>
                  Organisatorische Maßnahmen
                </h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600">✓</span>
                    <span>Klare Zweckbindung definieren</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600">✓</span>
                    <span>Transparente Nutzerinformation</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600">✓</span>
                    <span>Einwilligung für kommerzielle Nutzung</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600">✓</span>
                    <span>Regelmäßige Datenschutz-Audits</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-yellow-50 rounded-lg">
              <h4 class="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle class="h-4 w-4 text-yellow-600" ></AlertTriangle>
                Besondere Vorsicht bei
              </h4>
              <div>
                <div>• Firmenwagen mit Privatnutzung</div>
                <div>• Grenzüberschreitenden Fahrten</div>
                <div>• Weitergabe an Dritte (z.B. Versicherungen)</div>
                <div>• Langzeitspeicherung von Bewegungsprofilen</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderInfotainment = () => (
    <>
      <Card class="border-indigo-200">
        <CardHeader class="bg-indigo-50">
          <CardTitle class="flex items-center gap-2">
            <Smartphone class="h-5 w-5 text-indigo-600" ></Smartphone>
            Infotainment & Connectivity
          </CardTitle>
        </CardHeader>
        <CardContent class="pt-6">
          <div>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-2">Smartphone-Integration</h4>
                <div class="space-y-3">
                  <div class="p-3 border rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Smartphone class="h-4 w-4" ></Smartphone>
                      <span class="font-medium text-sm">Apple CarPlay / Android Auto</span>
                    </div>
                    <ul class="text-xs text-muted-foreground space-y-1 ml-6">
                      <li>• Zugriff auf Kontakte & Anrufliste</li>
                      <li>• Nachrichten & Benachrichtigungen</li>
                      <li>• Standort & Navigation</li>
                      <li>• Musik & Medienbibliothek</li>
                    </ul>
                  </div>

                  <div class="p-3 border rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Wifi class="h-4 w-4" ></Wifi>
                      <span class="font-medium text-sm">Bluetooth & WiFi</span>
                    </div>
                    <ul class="text-xs text-muted-foreground space-y-1 ml-6">
                      <li>• Automatische Gerätekopplung</li>
                      <li>• Kontaktsynchronisation</li>
                      <li>• Hotspot-Funktionalität</li>
                      <li>• App-Datenübertragung</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-2">Sprachassistenten</h4>
                <div class="space-y-3">
                  <div class="p-3 bg-orange-50 rounded-lg">
                    <div class="flex items-center gap-2 mb-2">
                      <Mic class="h-4 w-4 text-orange-600" ></Mic>
                      <span class="font-medium text-sm">Datenerfassung</span>
                    </div>
                    <ul class="text-xs space-y-1">
                      <li>• Sprachbefehle & Aktivierungswort</li>
                      <li>• Umgebungsgeräusche</li>
                      <li>• Stimmprofile der Nutzer</li>
                      <li>• Kontext der Anfragen</li>
                    </ul>
                  </div>

                  <div class="p-3 bg-red-50 rounded-lg">
                    <div class="flex items-center gap-2 mb-2">
                      <AlertCircle class="h-4 w-4 text-red-600" ></AlertCircle>
                      <span class="font-medium text-sm">Risiken</span>
                    </div>
                    <ul class="text-xs space-y-1">
                      <li>• Dauerhafte Mikrofonaktivierung</li>
                      <li>• Cloud-Verarbeitung der Sprache</li>
                      <li>• Profilbildung über Anfragen</li>
                      <li>• Mithören durch Dritte</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <Card>
          <CardHeader>
            <CardTitle class="text-lg flex items-center gap-2">
              <Camera class="h-5 w-5" ></Camera>
              Kamera-Systeme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="font-medium text-sm">Innenraumkameras</div>
              <ul class="text-xs space-y-1 text-muted-foreground">
                <li>• Fahrerüberwachung (Müdigkeit)</li>
                <li>• Gesichtserkennung</li>
                <li>• Videotelefonie</li>
                <li>• Unfallaufzeichnung</li>
              </ul>
              <div class="font-medium text-sm mt-3">Außenkameras</div>
              <ul class="text-xs space-y-1 text-muted-foreground">
                <li>• 360° Rundumsicht</li>
                <li>• Dashcam-Funktion</li>
                <li>• Verkehrszeichenerkennung</li>
                <li>• Fußgängererkennung</li>
              </ul>
              <Badge variant="destructive" class="mt-2 text-xs">
                Hohe Datenschutzrelevanz
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg flex items-center gap-2">
              <HardDrive class="h-5 w-5" ></HardDrive>
              Lokale Datenspeicherung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="p-3 bg-gray-50 rounded-lg">
                <div class="text-sm font-medium">Nutzerprofile</div>
                <div class="text-xs text-muted-foreground">Sitzposition, Klimaeinstellungen, Favoriten</div>
              </div>
              <div class="p-3 bg-gray-50 rounded-lg">
                <div class="text-sm font-medium">Navigationsverlauf</div>
                <div class="text-xs text-muted-foreground">Letzte Ziele, Heimatadresse, POIs</div>
              </div>
              <div class="p-3 bg-gray-50 rounded-lg">
                <div class="text-sm font-medium">Mediendaten</div>
                <div class="text-xs text-muted-foreground">Gekoppelte Geräte, Wiedergabelisten</div>
              </div>
              <div class="text-xs text-orange-600 mt-2">
                <AlertTriangle class="inline h-3 w-3 mr-1" ></AlertTriangle>
                Daten bleiben oft nach Fahrzeugverkauf
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg flex items-center gap-2">
              <Cloud class="h-5 w-5" ></Cloud>
              Cloud-Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <Globe class="h-4 w-4 text-blue-600 mt-0.5" ></Globe>
                <div>
                  <div class="font-medium">Online-Dienste</div>
                  <div class="text-xs text-muted-foreground">Wetter, News, Verkehr</div>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <Download class="h-4 w-4 text-green-600 mt-0.5" ></Download>
                <div>
                  <div class="font-medium">App-Store</div>
                  <div class="text-xs text-muted-foreground">Third-Party Apps</div>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <Server class="h-4 w-4 text-purple-600 mt-0.5" ></Server>
                <div>
                  <div class="font-medium">Backup & Sync</div>
                  <div class="text-xs text-muted-foreground">Einstellungen, Favoriten</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Datenschutz-Checkliste für Infotainment</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div class="space-y-3">
              <h4 class="font-semibold flex items-center gap-2">
                <UserCheck class="h-4 w-4" ></UserCheck>
                Vor der Nutzung
              </h4>
              <div class="space-y-2">
                {[
                  'Datenschutzerklärung des Systems prüfen',
                  'Nur notwendige Berechtigungen erteilen',
                  'Automatische Synchronisation deaktivieren',
                  'Sprachassistent-Einstellungen anpassen'
                ].map((item, index) => (
                  <label key={index} class="flex items-center gap-2 text-sm">
                    <CheckSquare class="h-4 w-4 text-gray-400" ></CheckSquare>
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div class="space-y-3">
              <h4 class="font-semibold flex items-center gap-2">
                <Truck class="h-4 w-4" ></Truck>
                Vor Fahrzeugweitergabe
              </h4>
              <div class="space-y-2">
                {[
                  'Alle persönlichen Daten löschen',
                  'Bluetooth-Kopplungen entfernen',
                  'Navigationsverlauf zurücksetzen',
                  'Auf Werkseinstellungen zurücksetzen'
                ].map((item, index) => (
                  <label key={index} class="flex items-center gap-2 text-sm">
                    <CheckSquare class="h-4 w-4 text-gray-400" ></CheckSquare>
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div class="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 class="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb class="h-4 w-4 text-blue-600" ></Lightbulb>
              Empfehlungen
            </h4>
            <div>
              <div class="flex items-start gap-2">
                <span class="text-blue-600">•</span>
                <span>Gastmodus für temporäre Nutzer verwenden</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-blue-600">•</span>
                <span>Regelmäßige Privacy-Einstellungen überprüfen</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-blue-600">•</span>
                <span>Kritische Apps nicht mit Fahrzeug verbinden</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-blue-600">•</span>
                <span>Offline-Alternativen bevorzugen</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderCompliance = () => (
    <>
      <Card class="border-red-200">
        <CardHeader class="bg-red-50">
          <CardTitle class="flex items-center gap-2">
            <Scale class="h-5 w-5 text-red-600" ></Scale>
            Regulatorische Anforderungen
          </CardTitle>
        </CardHeader>
        <CardContent class="pt-6">
          <div class="space-y-6">
            {complianceRequirements.map((reg, index) => (
              <div key={index} class="border rounded-lg p-4">
                <div class="flex items-start justify-between mb-3">
                  <h4 class="font-semibold text-lg">{reg.regulation}</h4>
                  <Badge variant="outline">{reg.deadline}</Badge>
                </div>
                <div class="grid gap-2">
                  {reg.requirements.map((req, idx) => (
                    <div key={idx} class="flex items-start gap-2 text-sm">
                      <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div>
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Verantwortlichkeiten nach DSGVO</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="p-3 border rounded-lg">
                <div class="flex items-center gap-2 mb-2">
                  <Building2 class="h-4 w-4 text-blue-600" ></Building2>
                  <span class="font-semibold">Fahrzeughersteller (OEM)</span>
                </div>
                <ul class="text-sm space-y-1 text-muted-foreground">
                  <li>• Hauptverantwortlicher für Fahrzeugsysteme</li>
                  <li>• Privacy by Design bei Entwicklung</li>
                  <li>• Datenschutz-Folgenabschätzung</li>
                </ul>
              </div>

              <div class="p-3 border rounded-lg">
                <div class="flex items-center gap-2 mb-2">
                  <Package class="h-4 w-4 text-green-600" ></Package>
                  <span class="font-semibold">Zulieferer</span>
                </div>
                <ul class="text-sm space-y-1 text-muted-foreground">
                  <li>• Auftragsverarbeiter für OEM</li>
                  <li>• Eigene Verantwortung bei eigenen Services</li>
                  <li>• Technische Sicherheitsmaßnahmen</li>
                </ul>
              </div>

              <div class="p-3 border rounded-lg">
                <div class="flex items-center gap-2 mb-2">
                  <Users class="h-4 w-4 text-purple-600" ></Users>
                  <span class="font-semibold">Händler & Werkstätten</span>
                </div>
                <ul class="text-sm space-y-1 text-muted-foreground">
                  <li>• Verantwortlich für Kundendaten</li>
                  <li>• Löschung bei Fahrzeugweitergabe</li>
                  <li>• Schulung des Personals</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Technische & Organisatorische Maßnahmen</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="space-y-2">
                <h4 class="font-semibold text-sm flex items-center gap-2">
                  <Shield class="h-4 w-4" ></Shield>
                  Security by Design
                </h4>
                <div class="pl-6 space-y-1 text-sm">
                  <div>• Secure Boot & Code Signing</div>
                  <div>• Hardware Security Module (HSM)</div>
                  <div>• Intrusion Detection System</div>
                </div>
              </div>

              <div class="space-y-2">
                <h4 class="font-semibold text-sm flex items-center gap-2">
                  <Lock class="h-4 w-4" ></Lock>
                  Zugriffskontrolle
                </h4>
                <div class="pl-6 space-y-1 text-sm">
                  <div>• Role-Based Access Control</div>
                  <div>• Multi-Faktor-Authentifizierung</div>
                  <div>• Audit-Logging</div>
                </div>
              </div>

              <div class="space-y-2">
                <h4 class="font-semibold text-sm flex items-center gap-2">
                  <FileCheck class="h-4 w-4" ></FileCheck>
                  Dokumentation
                </h4>
                <div class="pl-6 space-y-1 text-sm">
                  <div>• Verzeichnis von Verarbeitungstätigkeiten</div>
                  <div>• Datenschutz-Folgenabschätzung</div>
                  <div>• Incident Response Plan</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Umsetzungsfahrplan für Automotive-Unternehmen</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-6">
            <div class="relative">
              <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {[
                {
                  phase: 'Assessment Phase',
                  duration: '2-3 Monate',
                  tasks: [
                    'Bestandsaufnahme aller Datenflüsse',
                    'Identifikation von Risiken',
                    'Gap-Analyse zu Anforderungen'
                  ],
                  icon: Search,
                  color: 'blue'
                },
                {
                  phase: 'Design Phase',
                  duration: '3-4 Monate',
                  tasks: [
                    'Privacy by Design Konzepte',
                    'Technische Architektur',
                    'Prozessdefinition'
                  ],
                  icon: Lightbulb,
                  color: 'green'
                },
                {
                  phase: 'Implementation',
                  duration: '6-12 Monate',
                  tasks: [
                    'Technische Umsetzung',
                    'Schulung der Mitarbeiter',
                    'Pilotprojekte'
                  ],
                  icon: Settings,
                  color: 'orange'
                },
                {
                  phase: 'Validation',
                  duration: 'Kontinuierlich',
                  tasks: [
                    'Audits & Zertifizierung',
                    'Monitoring & Verbesserung',
                    'Incident Management'
                  ],
                  icon: CheckCircle2,
                  color: 'purple'
                }
              ].map((phase, index) => (
                <div key={index} class="relative flex items-start gap-4 mb-6">
                  <div class=>
                    <phase.icon class= ></phase>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <h4 class="font-semibold">{phase.phase}</h4>
                      <Badge variant="outline" class="text-xs">{phase.duration}</Badge>
                    </div>
                    <ul class="space-y-1">
                      {phase.tasks.map((task, idx) => (
                        <li key={idx} class="text-sm text-muted-foreground flex items-center gap-2">
                          <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div class="p-4 bg-green-50 rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp class="h-4 w-4 text-green-600" ></TrendingUp>
                  Vorteile der Compliance
                </h4>
                <ul class="space-y-1 text-sm">
                  <li>• Wettbewerbsvorteil durch Vertrauen</li>
                  <li>• Vermeidung von Bußgeldern</li>
                  <li>• Internationale Marktfähigkeit</li>
                  <li>• Innovation durch Privacy by Design</li>
                </ul>
              </div>

              <div class="p-4 bg-orange-50 rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <Target class="h-4 w-4 text-orange-600" ></Target>
                  Key Success Factors
                </h4>
                <ul class="space-y-1 text-sm">
                  <li>• Management Commitment</li>
                  <li>• Cross-funktionale Teams</li>
                  <li>• Kontinuierliche Verbesserung</li>
                  <li>• Transparente Kommunikation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  return (
    <div>
      <Helmet>
        <title>Automotive Datenschutz – Connected Cars DSGVO-konform</title>
        <meta name="description" content="Datenschutz-Leitfaden für die Automobilindustrie. Connected Cars, Telematik & Infotainment DSGVO-konform gestalten. Compliance für OEMs & Zulieferer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://datenschutz-assistent.de/wissen/branchen/automotive-datenschutz" />
      </Helmet>
      
      <Header ></Header>
      
      <main class="flex-grow">
        {/* Hero Section */}
        <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div class="container px-4 py-20">
            <div class="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div class="flex justify-center mb-6">
                  <div class="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <Car class="h-16 w-16 text-white" ></Car>
                  </div>
                </div>
                <h1>
                  Datenschutz in der Automobilindustrie
                </h1>
                <p class="text-xl mb-8 text-blue-100">
                  Von Connected Cars bis Autonomous Driving: Navigieren Sie sicher durch die komplexen 
                  Datenschutzanforderungen der modernen Mobilität
                </p>
                <div class="flex flex-wrap gap-4 justify-center">
                  <Button>
                    <Download class="mr-2 h-5 w-5" ></Download>
                    Automotive DSGVO-Guide
                  </Button>
                  <Button>
                    <Phone class="mr-2 h-5 w-5" ></Phone>
                    Beratung anfragen
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section>
          <div class="container px-4">
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
                      {navigationItems.map((item) => (
                        <li key={item.id}>
                          <button
                           
                            class="text-left w-full px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex items-center gap-3 group"
                          >
                            <item.icon class="h-5 w-5 text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" ></item>
                            <span>
                              {item.label}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section>
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              <div>
                {[
                  { label: 'Daten pro Fahrzeug/Tag', value: '25 GB', icon: Database },
                  { label: 'Sensoren im Fahrzeug', value: '100+', icon: CircuitBoard },
                  { label: 'DSGVO-Bußgeldrisiko', value: '4% Umsatz', icon: Euro },
                  { label: 'Compliance-Aufwand', value: '+40%', icon: TrendingUp }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    class="text-center"
                  >
                    <stat.icon class="h-8 w-8 mx-auto mb-2 text-blue-600" ></stat>
                    <div>{stat.value}</div>
                    <div>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div>
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <nav>
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                   }
                    class=
                  >
                    <item.icon class= ></item>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div class="py-20">
          <div class="container px-4">
            <div class="max-w-7xl mx-auto space-y-20">
              
              {/* Überblick Section */}
              <section id="ueberblick" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Die Datenrevolution im Automobil
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Connected Car Section */}
              <section id="connected-car" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Connected Car Services
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Fahrzeugdaten Section */}
              <section id="fahrzeugdaten" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Fahrzeugdaten & Datenkategorien
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Telematik Section */}
              <section id="telematik" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Telematik & GPS-Systeme
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Infotainment Section */}
              <section id="infotainment" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Infotainment & Connectivity
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Compliance Section */}
              <section id="compliance" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Compliance & Umsetzung
                </motion.h2>
                
              </section>
            </div>

            {/* CTA Section */}
            <div class="mt-20">
              <Card class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0">
                <CardContent class="p-12 text-center">
                  <Car class="h-16 w-16 mx-auto mb-6 text-white/90" ></Car>
                  <h2 class="text-3xl font-bold mb-4">
                    Bereit für die Zukunft der Mobilität?
                  </h2>
                  <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                    Lassen Sie uns gemeinsam Ihre Datenschutz-Strategie für Connected und Autonomous Vehicles entwickeln.
                  </p>
                  <div class="flex flex-wrap gap-4 justify-center">
                    <Button>
                      <Calendar class="mr-2 h-5 w-5" ></Calendar>
                      Beratungstermin vereinbaren
                    </Button>
                    <Button>
                      <FileText class="mr-2 h-5 w-5" ></FileText>
                      Whitepaper anfordern
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Links */}
            <Card class="mt-12">
              <CardHeader>
                <CardTitle class="flex items-center gap-2">
                  <ExternalLink class="h-5 w-5 text-blue-600" ></ExternalLink>
                  Weiterführende Ressourcen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <a href="/wissen/branchen/industrie-40-datenschutz" class="block">
                    <div>
                      <Gauge class="h-5 w-5 text-orange-600 mb-2" ></Gauge>
                      <div class="font-medium">Industrie 4.0</div>
                      <div class="text-sm text-gray-600">Smart Factory & IoT</div>
                    </div>
                  </a>
                  <a href="/wissen/branchen/smart-grid-compliance" class="block">
                    <div>
                      <Wifi class="h-5 w-5 text-green-600 mb-2" ></Wifi>
                      <div class="font-medium">Smart Grid</div>
                      <div class="text-sm text-gray-600">Energie & Datenschutz</div>
                    </div>
                  </a>
                  <a href="/wissen/compliance/dsgvo" class="block">
                    <div>
                      <Shield class="h-5 w-5 text-purple-600 mb-2" ></Shield>
                      <div class="font-medium">DSGVO Guide</div>
                      <div class="text-sm text-gray-600">Compliance Leitfaden</div>
                    </div>
                  </a>
                  <a href="/wissen/technologie/ki" class="block">
                    <div>
                      <BrainCircuit class="h-5 w-5 text-red-600 mb-2" ></BrainCircuit>
                      <div class="font-medium">KI & Datenschutz</div>
                      <div class="text-sm text-gray-600">AI Act & DSGVO</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer ></Footer>
      
      {/* Back to Top Button */}
      
          class="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 dark:bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all"
          aria-label="Zurück nach oben"
        >
          <ChevronUp class="h-5 w-5" ></ChevronUp>
        </button>
      )}
    </div>`
};