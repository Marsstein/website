export default {
  route: '/assessment-center/ai-governance-check',
  title: 'AI Governance Check',
  description: 'Wir analysieren Ihre AI Governance-Strukturen und erstellen einen detaillierten                  Reifegrad-Report mit spezifischen Verbesserungsempfehlungen.',
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
                AI Governance Assessment wird ausgewertet...
              </h2>
              <p>
                Wir analysieren Ihre AI Governance-Strukturen und erstellen einen detaillierten 
                Reifegrad-Report mit spezifischen Verbesserungsempfehlungen.
              </p>
              <div class="space-y-4">
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Building2 class="h-4 w-4 animate-pulse" ></Building2>
                  <span>Governance-Strukturen bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FileText class="h-4 w-4 animate-pulse" ></FileText>
                  <span>Richtlinien und Verfahren prüfen...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield class="h-4 w-4 animate-pulse" ></Shield>
                  <span>Risikomanagement analysieren...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Users class="h-4 w-4 animate-pulse" ></Users>
                  <span>Verantwortlichkeiten bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <BarChart3 class="h-4 w-4 animate-pulse" ></BarChart3>
                  <span>Compliance-Reifegrad bestimmen...</span>
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
    const MaturityIcon = getMaturityIcon(result.overallMaturity);
    const maturityLabels = {
      basic: 'Grundstufe',
      developing: 'Entwickelnd',
      defined: 'Definiert', 
      managed: 'Gesteuert',
      optimized: 'Optimiert'
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
                  <MaturityIcon class="h-6 w-6" ></MaturityIcon>
                  <span class="font-semibold">
                    Reifegrad: {maturityLabels[result.overallMaturity]}
                  </span>
                </div>
                
                <h1>
                  AI Governance Check
                </h1>
                <p>
                  Detaillierte Analyse Ihrer AI Governance-Strukturen und -Prozesse
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
                    <div>Governance Score</div>
                    <Progress 
                      value= 
                      class="mt-3"
                    ></Progress>
                  </CardContent>
                </Card>

                <Card class="text-center">
                  <CardContent class="p-6">
                    <div>
                      {maturityLabels[result.overallMaturity]}
                    </div>
                    <div>Reifegrad</div>
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
                  Reifegrad nach Governance-Bereichen
                </h2>
                <div>
                  {Object.entries(result.categoryScores).map(([category, data], index) => {
                    const percentage = (data.score / data.maxScore) * 100;
                    const level = percentage <= 20 ? 'basic' : percentage <= 40 ? 'developing' : percentage <= 60 ? 'defined' : percentage <= 80 ? 'managed' : 'optimized';
                    
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
                            {maturityLabels[level]} (%)
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>

              {/* Strengths and Improvement Areas */}
              {(result.strengths.length > 0 || result.improvementAreas.length > 0) && (
                <motion.div
                  class="grid md:grid-cols-2 gap-6 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {result.strengths.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <Award class="h-5 w-5" ></Award>
                          Stärken
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div class="space-y-2">
                          {result.strengths.map((strength, index) => (
                            <div key={index} class="flex items-center gap-2">
                              <CheckCircle class="h-4 w-4 text-green-500 flex-shrink-0" ></CheckCircle>
                              <span>{strength}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {result.improvementAreas.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <TrendingUp class="h-5 w-5" ></TrendingUp>
                          Verbesserungsbereiche
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div class="space-y-2">
                          {result.improvementAreas.map((area, index) => (
                            <div key={index} class="flex items-center gap-2">
                              <AlertTriangle class="h-4 w-4 text-orange-500 flex-shrink-0" ></AlertTriangle>
                              <span>{area}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              )}

              {/* Recommendations and Next Steps */}
              <motion.div
                class="grid md:grid-cols-2 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
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
                      {result.recommendations.map((rec, index) => (
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
                      <Clipboard class="h-5 w-5 text-blue-500" ></Clipboard>
                      Nächste Schritte
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-3">
                      {result.nextSteps.map((step, index) => (
                        <div key={index} class="flex items-start gap-2">
                          <ChevronRight class="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" ></ChevronRight>
                          <span>{step}</span>
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
                transition={{ delay: 0.6 }}
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
                  Governance Report downloaden
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  class="flex items-center gap-2"
                >
                  <BookOpen class="h-5 w-5" ></BookOpen>
                  Improvement Roadmap erstellen
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
                <Settings class="h-4 w-4" ></Settings>
                <span class="text-sm font-medium">AI Governance Check</span>
              </div>
              
              <h1>
                AI Governance Reifegrad bewerten
              </h1>
              
              <p>
                Evaluieren Sie systematisch den Reifegrad Ihrer AI Governance-Strukturen und 
                erhalten Sie konkrete Handlungsempfehlungen zur Verbesserung.
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
                      const MaturityIcon = getMaturityIcon(option.maturityLevel);
                      
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
                                <MaturityIcon class= ></MaturityIcon>
                              </div>
                              
                              <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2 mb-2">
                                  <span>
                                    {option.text}
                                  </span>
                                  <Badge 
                                    class=
                                  >
                                    {option.maturityLevel === 'basic' ? 'Grundstufe' :
                                     option.maturityLevel === 'developing' ? 'Entwickelnd' :
                                     option.maturityLevel === 'defined' ? 'Definiert' :
                                     option.maturityLevel === 'managed' ? 'Gesteuert' : 'Optimiert'}
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