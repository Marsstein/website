export default {
  route: '/assessment-center/cookie-compliance-audit',
  title: 'Cookie-Compliance-Audit',
  description: 'Automatisierte Website-Analyse und systematische Prüfliste für rechtskonforme Cookie-Nutzung',
  content: `
    <>
      <SEOHead>
      <div>
      {/* Hero Section */}
      <section class="pt-24 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-transparent rounded-full blur-3xl" ></div>
        </div>

        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div>
              <Link>Resources</Link>
              <ChevronRight class="h-4 w-4" ></ChevronRight>
              <span>Cookie-Compliance-Audit</span>
            </div>

            <div class="flex items-start gap-4 mb-6">
              <div class="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg">
                <Cookie class="h-8 w-8 text-white" ></Cookie>
              </div>
              <div class="flex-1">
                <Badge class="bg-green-100 text-green-700 border-green-200 mb-3">
                  Website-Scanner + Prüfliste
                </Badge>
                <h1>
                  Cookie-Compliance-Audit
                </h1>
                <p>
                  Automatisierte Website-Analyse und systematische Prüfliste für rechtskonforme Cookie-Nutzung
                </p>
                <div class="flex items-center gap-4 text-sm text-gray-500">
                  <div class="flex items-center gap-1">
                    <Star class="h-4 w-4 text-yellow-500 fill-current" ></Star>
                    <span>4.7 (4.234 Scans)</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Calendar class="h-4 w-4" ></Calendar>
                    <span>Aktualisiert: Januar 2025</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Scan class="h-4 w-4" ></Scan>
                    <span>Automatischer Scanner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Scanner */}
      <section class="pb-16">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center gap-3">
                  <Globe class="h-6 w-6 text-green-600" ></Globe>
                  Website Cookie-Scanner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Scannen Sie Ihre Website automatisch auf Cookie-Compliance-Probleme. 
                  Unser Scanner analysiert alle Cookies und gibt sofortige Empfehlungen.
                </p>
                
                <div class="flex gap-3 mb-6">
                  <div class="flex-1">
                    <Input
                      placeholder="https://ihre-website.de"
                      value={websiteUrl}
                     
                      class="h-12"
                    />
                  </div>
                  <Button 
                   
                    disabled={!websiteUrl || isScanning}
                    class="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 h-12"
                  >
                    
                  </Button>
                </div>

                {/* Scanning Progress */}
                {isScanning && (
                  <div>
                    <div class="flex items-center gap-3 mb-4">
                      <Loader2 class="h-5 w-5 text-blue-600 animate-spin" ></Loader2>
                      <span>
                        {scanStep}
                      </span>
                    </div>
                    <div class="space-y-2">
                      <div class="flex items-center justify-between text-sm">
                        <span>Fortschritt</span>
                        <span>%</span>
                      </div>
                      <div>
                        <div 
                          class="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: \`\${scanProgress}%\` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Scan Results */}
                {auditResults && (
                  <div class="space-y-6">
                    {/* Score Overview */}
                    <div>
                      <Card class="text-center p-4">
                        <div class="text-2xl font-bold text-green-600 mb-1">
                          {auditResults.totalCookies}
                        </div>
                        <div>
                          Cookies gefunden
                        </div>
                      </Card>
                      
                      <Card class="text-center p-4">
                        <div class="text-2xl font-bold text-blue-600 mb-1">
                          {auditResults.essentialCookies}
                        </div>
                        <div>
                          Essentielle
                        </div>
                      </Card>
                      
                      <Card class="text-center p-4">
                        <div class="text-2xl font-bold text-orange-600 mb-1">
                          {auditResults.thirdPartyCookies}
                        </div>
                        <div>
                          Third-Party
                        </div>
                      </Card>
                      
                      <Card class="text-center p-4">
                        <div class=>
                          {auditResults.score}%
                        </div>
                        <div>
                          Compliance-Score
                        </div>
                      </Card>
                    </div>

                    {/* Detected Cookies */}
                    <Card>
                      <CardHeader>
                        <CardTitle class="flex items-center gap-3">
                          <Cookie class="h-5 w-5 text-green-600" ></Cookie>
                          Erkannte Cookies ({detectedCookies.length})
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div class="space-y-3">
                          {detectedCookies.map((cookie, index) => (
                            <div>
                              <div class="flex-1">
                                <div>
                                  {cookie.name}
                                </div>
                                <div>
                                  {cookie.domain} • {cookie.duration}
                                </div>
                              </div>
                              <div class="flex items-center gap-2">
                                <Badge class=>
                                  {cookie.category}
                                </Badge>
                                
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Issues */}
                    <Card>
                      <CardHeader>
                        <CardTitle class="flex items-center gap-3">
                          <AlertTriangle class="h-5 w-5 text-orange-500" ></AlertTriangle>
                          Gefundene Probleme
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div class="space-y-3">
                          {auditResults.issues.map((issue: any, index: number) => (
                            <div>
                              
                              <div>
                                <div>
                                  {issue.message}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <div class="text-center">
                      <Button 
                       
                        class="bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <Download class="mr-2 h-4 w-4" ></Download>
                        Detaillierten Scan-Report herunterladen
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manual Checklist */}
      <section class="pb-16">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-8">
              <h2>
                Manuelle Compliance-Prüfung
              </h2>
              <p>
                Ergänzende Checkliste für Aspekte, die eine menschliche Bewertung erfordern
              </p>
            </div>

            {/* Progress Overview */}
            <Card>
              <CardContent class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <div class="text-2xl font-bold text-purple-600">
                      {completedCount}/{totalItems}
                    </div>
                    <div>
                      Punkte abgehakt
                    </div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-purple-600">
                      %
                    </div>
                    <div>
                      Vollständigkeit
                    </div>
                  </div>
                </div>
                <div>
                  <div 
                    class="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: \`$%\` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist Categories */}
            <div class="space-y-6">
              {auditCategories.map((category, categoryIndex) => (
                <Card>
                  <CardHeader>
                    <div class="flex items-center gap-4">
                      <div class=>
                        <category.icon class="h-6 w-6 text-white" ></category>
                      </div>
                      <div class="flex-1">
                        <CardTitle class="text-xl">{category.title}</CardTitle>
                        <p>
                          {category.description}
                        </p>
                      </div>
                      <div class="text-right">
                        <div>
                          /{category.items.length}
                        </div>
                        <div class="text-xs text-gray-500">abgeschlossen</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div class="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div>
                          <div class="flex items-start gap-4">
                            <Checkbox
                              checked=
                             
                              class="mt-1"
                            ></Checkbox>
                            <div class="flex-1">
                              <div class="flex items-start justify-between mb-2">
                                <h4>
                                  {item.title}
                                </h4>
                                <div class="flex items-center gap-2 ml-4">
                                  
                                  
                                </div>
                              </div>
                              <p>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div class="text-center mt-8">
              <Button 
               
                class="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Download class="mr-2 h-4 w-4" ></Download>
                Vollständige Checkliste als PDF herunterladen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Form Modal */}
      

      {/* Tools & Resources */}
      <section>
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-8">
              <h3>
                Weiterführende Cookie-Compliance-Tools
              </h3>
            </div>
            
            <div>
              <Card>
                <CardContent class="p-6">
                  <div class="flex items-start gap-4">
                    <div>
                      <Settings class="h-6 w-6 text-blue-600" ></Settings>
                    </div>
                    <div>
                      <h4>
                        Cookie-Banner-Generator
                      </h4>
                      <p>
                        Erstellen Sie DSGVO-konforme Cookie-Banner mit unserem interaktiven Generator.
                      </p>
                      <Button>
                        <ExternalLink class="mr-2 h-4 w-4" ></ExternalLink>
                        Zum Generator
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent class="p-6">
                  <div class="flex items-start gap-4">
                    <div>
                      <FileText class="h-6 w-6 text-green-600" ></FileText>
                    </div>
                    <div>
                      <h4>
                        Cookie-Policy-Template
                      </h4>
                      <p>
                        Vorgefertigte Cookie-Richtlinien-Vorlagen für verschiedene Website-Typen.
                      </p>
                      <Button>
                        <Download class="mr-2 h-4 w-4" ></Download>
                        Template laden
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div class="text-center mt-8">
              <div>
                <a href="/contact?source=cookie-audit">
                  <Button>
                    <Users class="mr-2 h-5 w-5" ></Users>
                    Cookie-Compliance-Beratung buchen
                    <ArrowRight>
                  </Button>
                </a>
                
                <a href="/resources">
                  <Button>
                    <BarChart3 class="mr-2 h-5 w-5" ></BarChart3>
                    Weitere Compliance-Tools
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>`
};