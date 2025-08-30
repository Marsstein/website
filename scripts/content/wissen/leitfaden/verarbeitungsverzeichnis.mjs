export default {
  route: '/wissen/leitfaden/verarbeitungsverzeichnis',
  title: 'Verarbeitungsverzeichnis erstellen – Art. 30 DSGVO',
  description: 'Verarbeitungsverzeichnis nach Art. 30 DSGVO erstellen: ✓ Schritt-für-Schritt Anleitung ✓ Vorlagen ✓ Beispiele ✓ Pflichtangaben. Jetzt rechtssicher dokumentieren!',
  content: `<>
      
      <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        
        
        <section class="pt-24 pb-12 px-4">
          <div class="container mx-auto max-w-6xl">
            <motion.div
              class="text-center mb-8"
              initial=}
              animate=}
            >
              <Badge class="mb-4 px-4 py-1" variant="outline">
                <FileText class="h-3 w-3 mr-1" />
                DSGVO Art. 30
              </Badge>
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Verarbeitungsverzeichnis erstellen
              </h1>
              <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Schritt-für-Schritt Anleitung zur rechtssicheren Dokumentation 
                aller Verarbeitungstätigkeiten nach Art. 30 DSGVO
              </p>
            </motion.div>

            
            <motion.div
              class="grid md:grid-cols-4 gap-4 mb-12"
              initial=}
              animate=}
              transition=}
            >
              <Card class="text-center">
                <CardContent class="p-4">
                  <Scale class="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div class="text-sm font-medium">Pflicht ab</div>
                  <div class="text-lg font-bold">250 Mitarbeiter</div>
                  <div class="text-xs text-gray-500">oder bei Risiko</div>
                </CardContent>
              </Card>
              <Card class="text-center">
                <CardContent class="p-4">
                  <Clock class="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div class="text-sm font-medium">Aufwand</div>
                  <div class="text-lg font-bold">2-4 Wochen</div>
                  <div class="text-xs text-gray-500">Ersterstellung</div>
                </CardContent>
              </Card>
              <Card class="text-center">
                <CardContent class="p-4">
                  <AlertTriangle class="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div class="text-sm font-medium">Bußgeld bis</div>
                  <div class="text-lg font-bold">10 Mio €</div>
                  <div class="text-xs text-gray-500">bei Verstößen</div>
                </CardContent>
              </Card>
              <Card class="text-center">
                <CardContent class="p-4">
                  <Shield class="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div class="text-sm font-medium">Nutzen</div>
                  <div class="text-lg font-bold">Transparenz</div>
                  <div class="text-xs text-gray-500">& Compliance</div>
                </CardContent>
              </Card>
            </motion.div>

            
            <motion.div
              initial=}
              animate=}
              transition=}
            >
              <Tabs value= onValueChange= class="w-full">
                <TabsList class="grid grid-cols-4 mb-8">
                  <TabsTrigger value="basics">Grundlagen</TabsTrigger>
                  <TabsTrigger value="pflichtangaben">Pflichtangaben</TabsTrigger>
                  <TabsTrigger value="beispiele">Beispiele</TabsTrigger>
                  <TabsTrigger value="erstellung">Erstellung</TabsTrigger>
                </TabsList>

                <TabsContent value="basics" class="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Was ist ein Verarbeitungsverzeichnis?</CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                      <p class="text-gray-600 dark:text-gray-400">
                        Das Verarbeitungsverzeichnis ist eine strukturierte Dokumentation aller 
                        Verarbeitungstätigkeiten personenbezogener Daten in Ihrem Unternehmen. 
                        Es dient als zentrales Nachweisdokument für die Datenschutz-Compliance.
                      </p>
                      
                      <div class="grid md:grid-cols-2 gap-4">
                        <div class="space-y-3">
                          <h4 class="font-semibold flex items-center gap-2">
                            <CheckCircle2 class="h-5 w-5 text-green-500" />
                            Wer muss es führen?
                          </h4>
                          <ul class="space-y-2 text-sm">
                            <li>• Unternehmen mit ≥ 250 Mitarbeitern</li>
                            <li>• Bei regelmäßiger Verarbeitung</li>
                            <li>• Bei Risiko für Betroffene</li>
                            <li>• Bei besonderen Datenkategorien</li>
                          </ul>
                        </div>
                        
                        <div class="space-y-3">
                          <h4 class="font-semibold flex items-center gap-2">
                            <Target class="h-5 w-5 text-blue-500" />
                            Zweck & Nutzen
                          </h4>
                          <ul class="space-y-2 text-sm">
                            <li>• Transparenz schaffen</li>
                            <li>• Compliance nachweisen</li>
                            <li>• Prozesse optimieren</li>
                            <li>• Risiken identifizieren</li>
                          </ul>
                        </div>
                      </div>

                      <Alert>
                        <Lightbulb class="h-4 w-4" />
                        <AlertDescription>
                          <strong>Tipp:</strong> Auch wenn Sie nicht verpflichtet sind, empfiehlt sich 
                          ein Verarbeitungsverzeichnis als Best Practice für jeden Verantwortlichen.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Rechtliche Grundlage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                        <h4 class="font-semibold mb-2">Art. 30 DSGVO - Verzeichnis von Verarbeitungstätigkeiten</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          "Jeder Verantwortliche und gegebenenfalls sein Vertreter führen ein Verzeichnis 
                          aller Verarbeitungstätigkeiten, die ihrer Zuständigkeit unterliegen."
                        </p>
                      </div>
                      
                      <div class="space-y-3">
                        <div class="flex items-start gap-3">
                          <Info class="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h5 class="font-medium">Vorlage auf Anfrage</h5>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                              Das Verzeichnis muss der Aufsichtsbehörde auf Anfrage zur Verfügung gestellt werden.
                            </p>
                          </div>
                        </div>
                        <div class="flex items-start gap-3">
                          <FileText class="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <h5 class="font-medium">Schriftliche Form</h5>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                              Das Verzeichnis ist schriftlich zu führen, auch in einem elektronischen Format.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="pflichtangaben" class="space-y-6">
                  >
                      <CardHeader>
                        <CardTitle class="capitalize">
                          
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div class="grid md:grid-cols-2 gap-4">
                           class="flex items-start gap-3">
                              <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                                <span class="text-sm font-semibold text-blue-600"></span>
                              </div>
                              <span class="text-sm"></span>
                            </div>
                          )`
};