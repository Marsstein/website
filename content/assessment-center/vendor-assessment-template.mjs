export default {
  route: '/assessment-center/vendor-assessment-template',
  title: 'Vendor-Assessment-Template',
  description: 'Strukturierte Bewertung und Auswahl DSGVO-konformer Auftragsverarbeiter und Dienstleister',
  content: `
    <>
      <SEOHead>
      <div>
      {/* Hero Section */}
      <section class="pt-24 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-full blur-3xl" ></div>
        </div>

        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div>
              <Link>Resources</Link>
              <ChevronRight class="h-4 w-4" ></ChevronRight>
              <span>Vendor-Assessment-Template</span>
            </div>

            <div class="flex items-start gap-4 mb-6">
              <div class="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg">
                <Users class="h-8 w-8 text-white" ></Users>
              </div>
              <div class="flex-1">
                <Badge class="bg-indigo-100 text-indigo-700 border-indigo-200 mb-3">
                  Systematische Dienstleister-Bewertung
                </Badge>
                <h1>
                  Vendor-Assessment-Template
                </h1>
                <p>
                  Strukturierte Bewertung und Auswahl DSGVO-konformer Auftragsverarbeiter und Dienstleister
                </p>
                <div class="flex items-center gap-4 text-sm text-gray-500">
                  <div class="flex items-center gap-1">
                    <Star class="h-4 w-4 text-yellow-500 fill-current" ></Star>
                    <span>4.8 (1.678 Downloads)</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Calendar class="h-4 w-4" ></Calendar>
                    <span>Aktualisiert: Januar 2025</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <BarChart3 class="h-4 w-4" ></BarChart3>
                    <span>Automatische Risikobewertung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Management */}
      <section class="pb-16">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            {/* Vendor List */}
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <Building class="h-6 w-6 text-indigo-600" ></Building>
                    Dienstleister verwalten
                  </div>
                  <Button 
                   
                    class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                    size="sm"
                  >
                    <Plus class="mr-2 h-4 w-4" ></Plus>
                    Hinzufügen
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="space-y-4">
                  {vendors.map((vendor, index) => (
                    <div>
                      <div class="flex items-center gap-4">
                        <div>
                          <Input
                            placeholder="Firmenname"
                            value={vendor.name}
                           
                            class="bg-white dark:bg-gray-800"
                          />
                          <Input
                            placeholder="Kategorie (z.B. Cloud-Provider)"
                            value={vendor.category}
                           
                            class="bg-white dark:bg-gray-800"
                          />
                          <div class="flex items-center gap-2">
                            {assessmentData[vendor.id] && (
                              <div class=>
                                
                              </div>
                            )}
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <Button
                            variant={currentVendor === index ? "default" : "outline"}
                            size="sm"
                           
                          >
                            <Eye class="h-4 w-4" ></Eye>
                          </Button>
                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assessment Overview */}
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center gap-3">
                  <Activity class="h-6 w-6 text-indigo-600" ></Activity>
                  Assessment-Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-indigo-600 mb-2">
                      
                    </div>
                    <div>Registrierte Vendor</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-green-600 mb-2">
                      {completedVendors.size}
                    </div>
                    <div>Vollständig bewertet</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-orange-600 mb-2">
                      
                    </div>
                    <div>Hohe Risiken</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-blue-600 mb-2">
                      %
                    </div>
                    <div>Durchschnittlicher Score</div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div class="flex flex-wrap gap-3 items-center justify-center">
                  <Button 
                   
                    variant="outline"
                    size="sm"
                    class="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                  >
                    <Lightbulb class="mr-2 h-4 w-4" ></Lightbulb>
                    {showTips ? 'Tipps ausblenden' : 'Assessment-Tipps anzeigen'}
                  </Button>
                  <Button>
                    <Plus class="mr-2 h-4 w-4" ></Plus>
                    Vendor hinzufügen
                  </Button>
                </div>

                {/* Assessment Tips */}
                
              </CardContent>
            </Card>

            {/* Current Vendor Assessment */}
            {vendors[currentVendor] && (
              <>
                {/* Risk Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-3">
                      <BarChart3 class="h-6 w-6 text-purple-600" ></BarChart3>
                      Risikobewertung: {vendors[currentVendor].name || 'Unbenannt'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div class="text-center">
                        <div class="text-3xl font-bold text-purple-600 mb-2">
                          %
                        </div>
                        <div>
                          Compliance-Score
                        </div>
                      </div>
                      <div class="text-center">
                        <div class=>
                          <riskLevel.icon class="h-5 w-5" ></riskLevel>
                          {riskLevel.level}
                        </div>
                        <div>
                          Risikostufe
                        </div>
                      </div>
                      <div class="text-center">
                        <div class="text-3xl font-bold text-purple-600 mb-2">
                          
                        </div>
                        <div>
                          Bewertete Kriterien
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span>Assessment-Fortschritt</span>
                        <span class="text-sm font-bold text-purple-600">%</span>
                      </div>
                      <div>
                        <div 
                          class="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `$%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Assessment Categories */}
                <div class="space-y-6">
                  {assessmentCategories.map((category, categoryIndex) => (
                    <Card>
                      <CardHeader>
                        <div class="flex items-center gap-4">
                          <div class=>
                            <category.icon class="h-6 w-6 text-white" ></category>
                          </div>
                          <div>
                            <CardTitle class="text-xl">{category.title}</CardTitle>
                            <p>
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div class="space-y-6">
                          {category.criteria.map((criteria, criteriaIndex) => (
                            <div>
                              <div class="mb-3">
                                <div class="flex items-center gap-2 mb-2">
                                  <h4>
                                    {criteria.title}
                                  </h4>
                                  
                                </div>
                                <p>
                                  {criteria.description}
                                </p>
                              </div>

                              {/* Input Fields */}
                              {criteria.type === 'text' && (
                                <Input
                                  placeholder=${criteria.title} eingeben...
                                  value={currentVendorData[criteria.id] || ''}
                                 
                                  class="bg-white dark:bg-gray-700"
                                />
                              )}

                              {criteria.type === 'textarea' && (
                                <textarea
                                  placeholder=${criteria.title} beschreiben...
                                  value={currentVendorData[criteria.id] || ''}
                                 
                                  class="w-full p-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
                                  rows={3}
                                ></textarea>
                              )}

                              {criteria.type === 'radio' && criteria.options && (
                                <RadioGroup 
                                  value={currentVendorData[criteria.id] || ''} 
                                 
                                  class="space-y-2"
                                >
                                  {criteria.options.map((option: any) => (
                                    <div>
                                      <RadioGroupItem value={option.value} id=${criteria.id}_${option.value} ></RadioGroupItem>
                                      <Label>
                                        {option.label}
                                      </Label>
                                      <div>
                                        {option.points} Pkt.
                                      </div>
                                    </div>
                                  ))}
                                </RadioGroup>
                              )}

                              {criteria.type === 'multiselect' && criteria.options && (
                                <div class="space-y-2">
                                  {criteria.options.map((option: string) => (
                                    <div>
                                      <Checkbox
                                        checked=
                                       }
                                      ></Checkbox>
                                      <Label>
                                        {option}
                                      </Label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}

            <div class="text-center mt-8">
              <Button 
               
                class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Download class="mr-2 h-4 w-4" ></Download>
                Bewertungsreport als PDF herunterladen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Form Modal */}
      

      {/* Benefits Section */}
      <section>
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-8">
              <h3>
                Warum Vendor-Assessments kritisch sind
              </h3>
            </div>
            
            <div>
              <Card>
                <div>
                  <Scale class="h-6 w-6 text-red-600" ></Scale>
                </div>
                <h4>
                  Rechtliche Verpflichtung
                </h4>
                <p>
                  Art. 28 DSGVO verpflichtet zur sorgfältigen Auswahl und regelmäßigen Überprüfung von Auftragsverarbeitern.
                </p>
              </Card>
              
              <Card>
                <div>
                  <AlertTriangle class="h-6 w-6 text-orange-600" ></AlertTriangle>
                </div>
                <h4>
                  Haftungsprinzip
                </h4>
                <p>
                  Sie haften für Datenschutzverstöße Ihrer Dienstleister als wären es Ihre eigenen.
                </p>
              </Card>
              
              <Card>
                <div>
                  <Shield class="h-6 w-6 text-blue-600" ></Shield>
                </div>
                <h4>
                  Risikominimierung
                </h4>
                <p>
                  Systematische Bewertung reduziert Compliance-Risiken und potenzielle Bußgelder erheblich.
                </p>
              </Card>
            </div>

            <div class="text-center">
              <div>
                <a href="/contact?source=vendor-assessment">
                  <Button>
                    <Users class="mr-2 h-5 w-5" ></Users>
                    Vendor-Assessment-Beratung buchen
                    <ArrowRight>
                  </Button>
                </a>
                
                <a href="/resources">
                  <Button>
                    <FileText class="mr-2 h-5 w-5" ></FileText>
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