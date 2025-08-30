export default {
  route: '/assessment-center/ai-risk-assessment',
  title: 'Ihr AI Risk Assessment',
  description: 'Unsere AI-Experten bewerten Ihre Antworten nach EU AI Act Kriterien',
  content: `
      <>
        <SEOHead>
        <div>
          <Header ></Header>
        <div class="pt-24 pb-16 px-4">
          <div class="container mx-auto max-w-4xl">
            <Card class="text-center p-12">
              <CardContent>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  class="mx-auto mb-6"
                >
                  <Brain class="h-16 w-16 text-purple-600" ></Brain>
                </motion.div>
                <h2>
                  Analysiere Ihr KI-System...
                </h2>
                <p>
                  Unsere AI-Experten bewerten Ihre Antworten nach EU AI Act Kriterien
                </p>
                <Progress value={75} class="w-full max-w-md mx-auto" ></Progress>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </>
    );
  }

  if (showResults && result) {
    const RiskIcon = getRiskIcon(result.overallRisk);
    
    return (
      <>
        <SEOHead>
        <div>
          <Header ></Header>
        <div class="pt-24 pb-16 px-4">
          <div class="container mx-auto max-w-6xl">
            {/* Results Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              class="text-center mb-12"
            >
              <Badge class=>
                <RiskIcon class="w-5 h-5 mr-2" ></RiskIcon>
                {result.overallRisk === 'minimal' && 'Minimales Risiko'}
                {result.overallRisk === 'limited' && 'Begrenztes Risiko'}
                {result.overallRisk === 'high' && 'Hohes Risiko'}
                {result.overallRisk === 'unacceptable' && 'Inakzeptables Risiko'}
              </Badge>
              
              <h1>
                Ihr AI Risk Assessment
              </h1>
              
              <p>
                Basierend auf Ihren Antworten haben wir Ihr KI-System nach EU AI Act Kriterien bewertet
              </p>
            </motion.div>

            <div>
              {/* Main Results */}
              <div>
                {/* Overall Score */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <Target class="h-5 w-5 text-purple-600" ></Target>
                      Gesamtbewertung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="flex items-center justify-between mb-4">
                      <span>
                        {result.score} / {result.maxScore} Punkte
                      </span>
                      <Badge class=>
                        % Risiko
                      </Badge>
                    </div>
                    <Progress 
                      value= 
                      class="mb-4"
                    ></Progress>
                    <p>
                      {result.complianceStatus === 'compliant' && 'Ihr System entspricht den grundlegenden EU AI Act Anforderungen.'}
                      {result.complianceStatus === 'action_needed' && 'Handlungsbedarf: Einige Bereiche benötigen Verbesserungen für vollständige Compliance.'}
                      {result.complianceStatus === 'critical' && 'Kritisch: Sofortige Maßnahmen erforderlich um EU AI Act Compliance zu erreichen.'}
                    </p>
                  </CardContent>
                </Card>

                {/* Category Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <BarChart3 class="h-5 w-5 text-purple-600" ></BarChart3>
                      Bewertung nach Kategorien
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-4">
                      {Object.entries(result.categoryScores).map(([category, score]) => {
                        const percentage = (score.score / score.maxScore) * 100;
                        const CategoryIcon = getRiskIcon(score.riskLevel);
                        
                        return (
                          <div key={category} class="flex items-center gap-3">
                            <CategoryIcon>
                            <div class="flex-1">
                              <div class="flex justify-between items-center mb-1">
                                <span>
                                  {category}
                                </span>
                                <span>
                                  {score.score}/{score.maxScore}
                                </span>
                              </div>
                              <Progress value={percentage} class="h-2" ></Progress>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <Lightbulb class="h-5 w-5 text-purple-600" ></Lightbulb>
                      Empfehlungen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-3">
                      {result.recommendations.map((rec, index) => (
                        <div>
                          <CheckCircle2 class="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div class="space-y-6">
                {/* Next Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <ArrowRight class="h-5 w-5 text-purple-600" ></ArrowRight>
                      Nächste Schritte
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-3">
                      {result.nextSteps.map((step, index) => (
                        <div key={index} class="flex items-center gap-2">
                          <span>
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <Download class="h-5 w-5 text-purple-600" ></Download>
                      Report & Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent class="space-y-3">
                    <Button>
                      <FileText class="mr-2 h-4 w-4" ></FileText>
                      Detailreport herunterladen
                    </Button>
                    <Button variant="outline" class="w-full">
                      <RefreshCw class="mr-2 h-4 w-4" ></RefreshCw>
                      Neues Assessment
                    </Button>
                    <Button variant="outline" class="w-full">
                      <Users class="mr-2 h-4 w-4" ></Users>
                      Experten-Beratung buchen
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardContent class="pt-6">
                    <div class="text-center space-y-2">
                      <div class="text-2xl font-bold text-purple-600">
                        %
                      </div>
                      <div>
                        Compliance-Potenzial
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
      
      {/* Hero Section */}
      <section class="pt-24 pb-16 px-4">
        <div class="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            class="mb-8"
          >
            <Badge class="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              <Target class="w-4 h-4 mr-2" ></Target>
              EU AI Act Risk Assessment
            </Badge>
            
            <h1>
              Ist Ihr KI-System EU AI Act konform?
            </h1>
            
            <p>
              Finden Sie in 5 Minuten heraus, welche Compliance-Anforderungen für Ihr KI-System gelten. 
              Kostenlos und ohne Verpflichtung.
            </p>
          </motion.div>

          {/* Progress */}
          <div class="mb-8">
            <div class="flex justify-between items-center mb-2">
              <span>
                Frage {currentStep + 1} von {questions.length}
              </span>
              <span>
                % abgeschlossen
              </span>
            </div>
            <Progress value={progress} class="w-full" ></Progress>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section class="pb-16 px-4">
        <div class="container mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader class="text-center pb-6">
                  <Badge variant="outline" class="mb-4 w-fit mx-auto">
                    {currentQuestion.category}
                  </Badge>
                  <CardTitle>
                    {currentQuestion.question}
                  </CardTitle>
                  <p>
                    {currentQuestion.explanation}
                  </p>
                </CardHeader>
                
                <CardContent class="space-y-4">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedAnswer === option.id;
                    const RiskIcon = getRiskIcon(option.riskLevel);
                    
                    return (
                      <motion.div
                        key={option.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        class=
                       
                      >
                        <div class="flex items-start gap-4">
                          <div>
                            <RiskIcon>
                          </div>
                          
                          <div class="flex-1">
                            <div class="flex items-center justify-between mb-2">
                              <h3>
                                {option.text}
                              </h3>
                              <Badge class=>
                                {option.riskLevel === 'minimal' && 'Minimal'}
                                {option.riskLevel === 'limited' && 'Begrenzt'}
                                {option.riskLevel === 'high' && 'Hoch'}
                                {option.riskLevel === 'unacceptable' && 'Kritisch'}
                              </Badge>
                            </div>
                            <p>
                              {option.explanation}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {currentQuestion.helpText && (
                    <div>
                      <div class="flex items-start gap-2">
                        <Info>
                        <p>
                          <strong>Hinweis:</strong> {currentQuestion.helpText}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
                
                <div class="p-6 pt-0">
                  <div class="flex justify-between">
                    <Button
                      variant="outline"
                     
                      disabled={currentStep === 0}
                      class="flex items-center gap-2"
                    >
                      <ArrowLeft class="h-4 w-4" ></ArrowLeft>
                      Zurück
                    </Button>
                    
                    <Button>
                      {currentStep === questions.length - 1 ? 'Ergebnis anzeigen' : 'Weiter'}
                      <ArrowRight class="h-4 w-4" ></ArrowRight>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      <Footer ></Footer>
    </div>
    </>`
};