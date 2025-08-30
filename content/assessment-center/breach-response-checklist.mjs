export default {
  route: '/assessment-center/breach-response-checklist',
  title: 'Breach-Response-Checklist',
  description: 'Strukturierter 72-Stunden-Notfallplan bei Datenschutzverletzungen und Sicherheitsvorfällen',
  content: `
    <>
      <SEOHead>
      <div>
      {/* Hero Section */}
      <section class="pt-24 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-3xl" ></div>
        </div>

        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div>
              <Link>Resources</Link>
              <ChevronRight class="h-4 w-4" ></ChevronRight>
              <span>Breach-Response-Checklist</span>
            </div>

            <div class="flex items-start gap-4 mb-6">
              <div class="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-lg">
                <AlertTriangle class="h-8 w-8 text-white" ></AlertTriangle>
              </div>
              <div class="flex-1">
                <Badge class="bg-red-100 text-red-700 border-red-200 mb-3">
                  72h-Notfallplan
                </Badge>
                <h1>
                  Breach-Response-Checklist
                </h1>
                <p>
                  Strukturierter 72-Stunden-Notfallplan bei Datenschutzverletzungen und Sicherheitsvorfällen
                </p>
                <div class="flex items-center gap-4 text-sm text-gray-500">
                  <div class="flex items-center gap-1">
                    <Star class="h-4 w-4 text-yellow-500 fill-current" ></Star>
                    <span>4.9 (3.156 Downloads)</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Calendar class="h-4 w-4" ></Calendar>
                    <span>Aktualisiert: Januar 2025</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Timer class="h-4 w-4" ></Timer>
                    <span>Kritische 72h-Timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Timer & Status */}
      <section class="pb-8">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center gap-3">
                  <Timer class="h-6 w-6 text-red-600" ></Timer>
                  Incident-Timer & Meldepflicht
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-red-600 mb-2">
                      
                    </div>
                    <div>Vergangene Zeit</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-orange-600 mb-2">
                      72h
                    </div>
                    <div>Meldepflicht an Aufsichtsbehörde</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-yellow-600 mb-2">
                      ASAP
                    </div>
                    <div>Information der Betroffenen</div>
                  </div>
                </div>
                
                <div class="flex items-center justify-center gap-4">
                  <Button>
                    
                  </Button>
                  
                  <div>
                    Simuliert einen echten Vorfall zur Übung
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Status Overview */}
      <section class="pb-16">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            <div>
              <Card>
                <CardContent class="p-6 text-center">
                  <div class="text-3xl font-bold text-red-600 mb-2">
                    {completedCritical}/{criticalItems.length}
                  </div>
                  <div>
                    Kritische Schritte
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent class="p-6 text-center">
                  <div class="text-3xl font-bold text-blue-600 mb-2">
                    {completedCount}/{totalItems}
                  </div>
                  <div>
                    Gesamtfortschritt
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent class="p-6 text-center">
                  <div class="text-3xl font-bold text-green-600 mb-2">
                    %
                  </div>
                  <div>
                    Vollständigkeit
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <Phone class="h-6 w-6" ></Phone>
                  Notfall-Kontakte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  {emergencyContacts.map((contact, index) => (
                    <div>
                      <div>
                        {contact.role}
                      </div>
                      <div>
                        {contact.contact}
                      </div>
                      <div>
                        {contact.available}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div class="text-center mb-8">
              <Button 
               
                class="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Download class="mr-2 h-4 w-4" ></Download>
                Vollständige Checkliste als PDF herunterladen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Phases */}
      <section class="pb-16">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            <div class="space-y-8">
              {timelinePhases.map((phase, phaseIndex) => (
                <Card key={phase.id} class=>
                  <CardHeader class=>
                    <div class="flex items-center gap-4">
                      <div class=>
                        <phase.icon class="h-6 w-6 text-white" ></phase>
                      </div>
                      <div class="flex-1">
                        <CardTitle>
                          {phase.title}
                        </CardTitle>
                        <p>
                          {phase.description}
                        </p>
                      </div>
                      <div class="text-right">
                        <div>
                          /{phase.items.length}
                        </div>
                        <div class="text-xs text-gray-500">abgeschlossen</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent class="p-6">
                    <div class="space-y-4">
                      {phase.items.map((item, itemIndex) => (
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
                                  
                                  <Badge variant="outline" class="text-xs">
                                    {item.timeframe}
                                  </Badge>
                                </div>
                              </div>
                              <p>
                                {item.description}
                              </p>
                              <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4 text-xs text-gray-500">
                                  <div class="flex items-center gap-1">
                                    <Users class="h-3 w-3" ></Users>
                                    <span>Verantwortlich: {item.responsible}</span>
                                  </div>
                                  <div class="flex items-center gap-1">
                                    <Clock class="h-3 w-3" ></Clock>
                                    <span>{item.timeframe}</span>
                                  </div>
                                </div>
                                
                                {/* Expand Button */}
                                
                              </div>

                              {/* Expanded Details */}
                              {expandedItems.has(item.id) && (item as any).tips && (
                                <div>
                                  {/* Implementation Tips */}
                                  <div>
                                    <div class="flex items-center gap-2 mb-2">
                                      <Lightbulb class="h-4 w-4 text-yellow-600" ></Lightbulb>
                                      <h5>Umsetzungstipps</h5>
                                    </div>
                                    <div class="space-y-1">
                                      {(item as any).tips?.map((tip: string, tipIndex: number) => (
                                        <div key={tipIndex} class="flex items-start gap-2">
                                          <div class="w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                          <p>{tip}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Legal Basis */}
                                  {(item as any).legalBasis && (
                                    <div>
                                      <div class="flex items-center gap-2 mb-2">
                                        <Gavel class="h-4 w-4 text-blue-600" ></Gavel>
                                        <h5>Rechtsgrundlage</h5>
                                      </div>
                                      <p>
                                        
                                      </p>
                                    </div>
                                  )}

                                  {/* Consequences */}
                                  {(item as any).consequences && (
                                    <div>
                                      <div class="flex items-center gap-2 mb-2">
                                        <AlertCircle class="h-4 w-4 text-red-600" ></AlertCircle>
                                        <h5>Konsequenzen bei Nicht-Beachtung</h5>
                                      </div>
                                      <p>
                                        
                                      </p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Form Modal */}
      

      {/* Legal Disclaimer */}
      <section>
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            <Card>
              <CardContent class="p-6">
                <div class="flex items-start gap-3">
                  <Scale class="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" ></Scale>
                  <div>
                    <h3>
                      Rechtlicher Hinweis
                    </h3>
                    <p>
                      Diese Checkliste dient als Orientierungshilfe und ersetzt keine individuelle 
                      Rechtsberatung. Die konkreten Meldepflichten und -fristen können je nach 
                      Einzelfall variieren. Konsultieren Sie bei einem tatsächlichen Vorfall 
                      umgehend Ihren Datenschutzbeauftragten oder Rechtsanwalt.
                    </p>
                    <div>
                      <a href="/contact?source=breach-response">
                        <Button>
                          <Shield class="mr-2 h-4 w-4" ></Shield>
                          Notfall-Beratung anfordern
                        </Button>
                      </a>
                      <a href="/resources">
                        <Button>
                          <FileText class="mr-2 h-4 w-4" ></FileText>
                          Weitere Compliance-Tools
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </>`
};