export default {
  route: '/wissen/branchen/produktion-datenschutz',
  title: 'Produktion Datenschutz',
  description: 'Meistern Sie DSGVO, EU AI Act und ISO 27001 für Smart Factories,
                    KI-gestützte Produktionsoptimierung und sichere OT/IT-Integration.',
  content: `
    <>
      <SEOHead>
      <div>
        <Header ></Header>
      
      <main class="overflow-hidden">
        {/* Hero Section */}
        <section>
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" ></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
          </div>

          <div class="container px-4">
            <div class="max-w-5xl mx-auto">
              <div>
                <div class="space-y-6">
                  <div>
                    <Factory class="h-4 w-4" ></Factory>
                    <span class="text-sm font-medium">Produktion</span>
                  </div>
                  
                  <h1>
                    Compliance für
                    <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block mt-2">
                      Produzierende Unternehmen
                    </span>
                  </h1>
                  
                  <p>
                    Meistern Sie DSGVO, EU AI Act und ISO 27001 für Smart Factories,
                    KI-gestützte Produktionsoptimierung und sichere OT/IT-Integration.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle>
                      <span>DSGVO-konforme Smart Factory Datenverarbeitung</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle>
                      <span>EU AI Act transparente Produktions-KI</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle>
                      <span>ISO 27001 OT/IT Security Integration</span>
                    </div>
                  </div>

                  <div>
                    <a href="/contact?demo=true&industry=manufacturing">
                      <Button>
                        <Factory class="mr-2 h-5 w-5" ></Factory>
                        Industrie Demo
                        <ArrowRight>
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" class="group">
                      <Shield class="mr-2 h-5 w-5" ></Shield>
                      OT Security Guide
                    </Button>
                  </div>
                </div>

                {/* Manufacturing Dashboard */}
                <div class="relative">
                  <Card>
                    <div class="space-y-4">
                      <div class="flex items-center justify-between">
                        <h3 class="font-bold text-lg">Production Security Center</h3>
                        <Badge class="bg-green-100 text-green-700">Secure</Badge>
                      </div>

                      <div class="grid grid-cols-3 gap-3">
                        <Card>
                          <Shield class="h-5 w-5 text-blue-600 mx-auto mb-1" ></Shield>
                          <p class="text-lg font-bold text-blue-700">DSGVO</p>
                          <p class="text-xs text-blue-600">Factory Data</p>
                        </Card>

                        <Card>
                          <Brain class="h-5 w-5 text-green-600 mx-auto mb-1" ></Brain>
                          <p class="text-lg font-bold text-green-700">AI Act</p>
                          <p class="text-xs text-green-600">Production AI</p>
                        </Card>

                        <Card>
                          <Lock class="h-5 w-5 text-orange-600 mx-auto mb-1" ></Lock>
                          <p class="text-lg font-bold text-orange-700">ISO 27001</p>
                          <p class="text-xs text-orange-600">OT Security</p>
                        </Card>
                      </div>

                      <div class="space-y-3">
                        {complianceAreas.map((area, index) => (
                          <div key={index} class="space-y-2">
                            <div class="flex items-center justify-between text-sm">
                              <span>{area.name}</span>
                              <div class="flex items-center gap-2">
                                <Badge variant="outline" class="text-xs">{area.framework}</Badge>
                                <span class="font-semibold">{area.coverage}%</span>
                              </div>
                            </div>
                            <Progress value={area.coverage} class="h-2" ></Progress>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <div>
                    <div class="flex items-center gap-2">
                      <Cpu class="h-4 w-4 text-orange-500" ></Cpu>
                      <span class="text-sm font-medium">Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section>
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2>
                  Manufacturing Compliance Herausforderungen
                </h2>
                <p>
                  Smart Factories und Industrie 4.0 erfordern spezialisierte Compliance
                </p>
              </div>

              <div>
                {painPoints.map((point, index) => (
                  <Card>
                    <div class="space-y-4">
                      <div class="flex items-start justify-between">
                        <div class="flex items-center gap-3">
                          <point.icon class="h-6 w-6 text-orange-600" ></point>
                          <div>
                            <h3 class="font-bold">{point.title}</h3>
                            <Badge class="text-xs mt-1">{point.framework}</Badge>
                          </div>
                        </div>
                        <Badge 
                          variant={point.impact === 'Kritisch' ? 'destructive' : 'secondary'}
                          class="text-xs"
                        >
                          {point.impact}
                        </Badge>
                      </div>
                      
                      <p>
                        {point.description}
                      </p>
                      
                      <div>
                        <p>
                          <span class="font-medium">Anwendungen:</span> {point.example}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section class="py-20">
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2>
                  Framework-spezialisierte Lösungen
                </h2>
                <p>
                  Spezialisierte Compliance-Tools für jedes der drei Hauptframeworks
                </p>
              </div>

              <div>
                {solutions.map((solution, index) => (
                  <Card>
                    <div class="space-y-4">
                      <div class="flex items-center justify-between">
                        <div class=>
                          <solution.icon class="h-6 w-6" ></solution>
                        </div>
                        <Badge class="bg-gray-100 text-gray-700 text-xs">
                          {solution.framework}
                        </Badge>
                      </div>

                      <h3 class="text-xl font-bold">{solution.title}</h3>
                      <p>
                        {solution.description}
                      </p>

                      <div class="space-y-2 pt-2">
                        {solution.features.map((feature, i) => (
                          <div key={i} class="flex items-start gap-2 text-sm">
                            <CheckCircle class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" ></CheckCircle>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section>
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2>
                  Manufacturing Use Cases
                </h2>
                <p>
                  Wie unsere Framework-Expertise in realen Produktionsszenarien hilft
                </p>
              </div>

              <div class="space-y-6">
                {useCases.map((useCase, index) => (
                  <Card key={index} class="p-6">
                    <div>
                      <div>
                        <h3 class="text-lg font-bold mb-2">{useCase.title}</h3>
                        <p>
                          <span class="font-medium">Challenge:</span> {useCase.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <p class="text-sm">
                          <span class="font-medium text-green-700">Solution:</span> {useCase.solution}
                        </p>
                      </div>
                      
                      <div class="flex flex-wrap gap-2">
                        {useCase.frameworks.map((framework, i) => (
                          <Badge key={i} variant="outline" class="text-xs">
                            {framework}
                          </Badge>
                        ))}
                      </div>
                      
                      <div>
                        <p class="text-sm font-medium text-blue-700">
                          {useCase.outcome}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div class="container px-4">
            <div class="max-w-4xl mx-auto text-center text-white">
              <h2>
                Sichern Sie Ihre Smart Factory
              </h2>
              <p class="text-xl mb-8 text-white/90">
                Implementieren Sie DSGVO, EU AI Act und ISO 27001 für zukunftssichere
                Smart Factories mit KI-gestützter Produktion.
              </p>

              <div>
                <a href="/contact?demo=true&industry=manufacturing">
                  <Button>
                    <Factory class="mr-2 h-5 w-5" ></Factory>
                    Production Security Demo
                    <ArrowRight>
                  </Button>
                </a>
                <Button>
                  <Shield class="mr-2 h-5 w-5" ></Shield>
                  IEC 62443 Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer ></Footer>
    </div>
    </>`
};