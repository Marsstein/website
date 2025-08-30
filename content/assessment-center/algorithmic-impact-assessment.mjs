export default {
  route: '/assessment-center/algorithmic-impact-assessment',
  title: 'Algorithmic Impact Assessment',
  description: 'Wir analysieren die gesellschaftlichen Auswirkungen Ihres Algorithmus und erstellen                  einen detaillierten Impact-Report mit Handlungsempfehlungen',
  content: `
      <>
        <SEOHead>
        <div>
          <Header ></Header>
        <div class="pt-24 pb-16">
          <div class="container px-4">
            <div class="max-w-2xl mx-auto text-center">
              <motion.div
                class="mb-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw class="h-16 w-16 text-brand-red mx-auto" ></RefreshCw>
              </motion.div>
              <h2>
                Algorithmic Impact Assessment wird berechnet...
              </h2>
              <p>
                Wir analysieren die gesellschaftlichen Auswirkungen Ihres Algorithmus und erstellen 
                einen detaillierten Impact-Report mit Handlungsempfehlungen.
              </p>
              <div class="space-y-4">
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Activity class="h-4 w-4 animate-pulse" ></Activity>
                  <span>Gesellschaftliche Auswirkungen bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Users class="h-4 w-4 animate-pulse" ></Users>
                  <span>Vulnerable Gruppen analysieren...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Scale class="h-4 w-4 animate-pulse" ></Scale>
                  <span>Fairness-Risiken identifizieren...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Eye class="h-4 w-4 animate-pulse" ></Eye>
                  <span>Transparenz-Level prüfen...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  if (showResults && result) {
    const ImpactIcon = getImpactIcon(result.overallImpact);
    const impactLabels = {
      low: 'Geringer Impact',
      medium: 'Moderater Impact', 
      high: 'Hoher Impact',
      critical: 'Kritischer Impact'
    };

    return (
      <>
        <SEOHead>
        <div>
          <Header ></Header>
        <div class="pt-24 pb-16">
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              {/* Results Header */}
              <motion.div
                class="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div class=>
                  <ImpactIcon class="h-6 w-6" ></ImpactIcon>
                  <span class="font-semibold">
                    {impactLabels[result.overallImpact]}
                  </span>
                </div>
                
                <h1>
                  Algorithmic Impact Assessment
                </h1>
                <p>
                  Detaillierte Analyse der gesellschaftlichen Auswirkungen Ihres Algorithmus
                </p>
              </motion.div>

              {/* Score Overview */}
              <motion.div
                class="grid md:grid-cols-3 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card class="text-center">
                  <CardContent class="p-6">
                    <div>
                      {result.score}/{result.maxScore}
                    </div>
                    <div>Impact Score</div>
                    <Progress 
                      value= 
                      class="mt-3"
                    ></Progress>
                  </CardContent>
                </Card>

                <Card class="text-center">
                  <CardContent class="p-6">
                    <div>
                      {impactLabels[result.overallImpact]}
                    </div>
                    <div>Gesamtbewertung</div>
                  </CardContent>
                </Card>

                <Card class="text-center">
                  <CardContent class="p-6">
                    <div>
                      {result.complianceStatus === 'compliant' ? 'Konform' :
                       result.complianceStatus === 'action_needed' ? 'Handlung nötig' : 'Kritisch'}
                    </div>
                    <div>Compliance Status</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Category Breakdown */}
              <motion.div
                class="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2>
                  Bewertung nach Kategorien
                </h2>
                <div>
                  {Object.entries(result.categoryScores).map(([category, data], index) => {
                    const percentage = (data.score / data.maxScore) * 100;
                    const level = percentage <= 25 ? 'low' : percentage <= 50 ? 'medium' : percentage <= 75 ? 'high' : 'critical';
                    
                    return (
                      <Card key={category}>
                        <CardContent class="p-6">
                          <div class="flex items-center justify-between mb-3">
                            <h3>
                              {category}
                            </h3>
                            <Badge class=>
                              {data.score}/{data.maxScore}
                            </Badge>
                          </div>
                          <Progress value={percentage} class="mb-2" ></Progress>
                          <div>
                            % Impact Level
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>

              {/* Recommendations */}
              <motion.div
                class="grid md:grid-cols-3 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <Lightbulb class="h-5 w-5 text-yellow-500" ></Lightbulb>
                      Empfehlungen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-3">
                      {result.recommendations.slice(0, 4).map((rec, index) => (
                        <div key={index} class="flex items-start gap-2">
                          <CheckCircle2 class="h-4 w-4 text-green-500 mt-1 flex-shrink-0" ></CheckCircle2>
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <ArrowRight class="h-5 w-5 text-blue-500" ></ArrowRight>
                      Nächste Schritte
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-3">
                      {result.nextSteps.slice(0, 4).map((step, index) => (
                        <div key={index} class="flex items-start gap-2">
                          <ChevronRight class="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" ></ChevronRight>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Mitigation Strategies */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <Shield class="h-5 w-5 text-green-500" ></Shield>
                      Mitigationsstrategien
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-3">
                      {result.mitigationStrategies.slice(0, 4).map((strategy, index) => (
                        <div key={index} class="flex items-start gap-2">
                          <Shield class="h-4 w-4 text-green-500 mt-1 flex-shrink-0" ></Shield>
                          <span>{strategy}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Actions */}
              <motion.div
                class="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                 
                  variant="outline"
                  size="lg"
                  class="flex items-center gap-2"
                >
                  <RefreshCw class="h-5 w-5" ></RefreshCw>
                  Erneut bewerten
                </Button>
                
                <Button>
                  <Download class="h-5 w-5" ></Download>
                  Impact Report downloaden
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  class="flex items-center gap-2"
                >
                  <FileText class="h-5 w-5" ></FileText>
                  Mitigation Plan erstellen
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer ></Footer>
      </div>
      </>
    );
  }

  return (
    <>
      <SEOHead>
      <div>
        <Header ></Header>
      
      <div class="pt-24 pb-16">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              class="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 mb-6">
                <BarChart3 class="h-4 w-4" ></BarChart3>
                <span class="text-sm font-medium">Algorithmic Impact Assessment</span>
              </div>
              
              <h1>
                Gesellschaftliche Auswirkungen bewerten
              </h1>
              
              <p>
                Analysieren Sie die gesellschaftlichen Auswirkungen Ihres Algorithmus systematisch 
                und entwickeln Sie Strategien zur Risikominimierung.
              </p>

              {/* Progress */}
              <div class="max-w-md mx-auto">
                <div>
                  <span>Fortschritt</span>
                  <span>{currentStep + 1} von {questions.length}</span>
                </div>
                <Progress value={progress} class="h-2" ></Progress>
              </div>
            </motion.div>

            {/* Question Card */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              class="mb-8"
            >
              <Card>
                <CardHeader class="pb-6">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="p-2 bg-brand-red/10 rounded-lg">
                      <Hash class="h-5 w-5 text-brand-red" ></Hash>
                    </div>
                    <Badge variant="outline" class="text-brand-red border-brand-red/30">
                      {currentQuestion.category}
                    </Badge>
                  </div>
                  
                  <CardTitle>
                    {currentQuestion.question}
                  </CardTitle>
                  
                  <p>
                    {currentQuestion.explanation}
                  </p>

                  {currentQuestion.helpText && (
                    <div>
                      <div class="flex items-start gap-2">
                        <Info class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Info>
                        <p>
                          {currentQuestion.helpText}
                        </p>
                      </div>
                    </div>
                  )}
                </CardHeader>

                <CardContent>
                  <div class="space-y-3">
                    {currentQuestion.options.map((option) => {
                      const isSelected = selectedAnswer === option.id;
                      const ImpactIcon = getImpactIcon(option.impactLevel);
                      
                      return (
                        <motion.div
                          key={option.id}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <button
                           
                            class=
                          >
                            <div class="flex items-start gap-4">
                              <div>
                                <ImpactIcon class= ></ImpactIcon>
                              </div>
                              
                              <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2 mb-2">
                                  <span>
                                    {option.text}
                                  </span>
                                  <Badge 
                                    class=
                                  >
                                    {option.impactLevel === 'low' ? 'Niedrig' :
                                     option.impactLevel === 'medium' ? 'Mittel' :
                                     option.impactLevel === 'high' ? 'Hoch' : 'Kritisch'}
                                  </Badge>
                                </div>
                                
                                <p>
                                  {option.explanation}
                                </p>
                              </div>

                              <div>
                                
                              </div>
                            </div>
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation */}
            <div class="flex items-center justify-between">
              <Button
               
                disabled={currentStep === 0}
                variant="outline"
                size="lg"
                class="flex items-center gap-2"
              >
                <ArrowLeft class="h-4 w-4" ></ArrowLeft>
                Zurück
              </Button>

              <div>
                Frage {currentStep + 1} von {questions.length}
              </div>

              <Button>
                
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer ></Footer>
    </div>
    </>`
};