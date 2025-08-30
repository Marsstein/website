export default {
  route: '/assessment-center/dsgvo-compliance-checklist',
  title: 'Dsgvo Compliance Checklist',
  description: 'Umfassende Prüfung Ihrer DSGVO-Compliance mit',
  content: `
    <>
      
      <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header ></Header>
        
        {/* Animated Background Elements */}
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" ></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        </div>

        {/* Hero Section */}
        <section>
          <div class="container mx-auto max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              class="text-center mb-16"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                class="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
              >
                <Shield class="h-5 w-5 text-purple-400" ></Shield>
                <span class="text-sm font-semibold text-purple-300">DSGVO Assessment Tool</span>
              </motion.div>
              
              <h1>
                <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">DSGVO Compliance Checklist</span>
              </h1>
              
              <p>
                Umfassende Prüfung Ihrer DSGVO-Compliance mit <span class="font-semibold text-purple-300">über 50 Prüfpunkten</span>. 
                Strukturiert nach rechtlichen Kategorien mit <span class="font-semibold text-pink-300">konkreten Handlungsempfehlungen</span>.
              </p>

              {/* Progress Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                class="max-w-lg mx-auto mb-8"
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 p-6">
                  <div class="text-center">
                    <div class="text-4xl font-bold text-white mb-2">%</div>
                    <div class="text-slate-300 mb-4">Compliance Status</div>
                    <Progress value= class="mb-4" ></Progress>
                    <div class="text-sm text-slate-400">
                      {completedItems.size} von  Punkten erfüllt
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category Navigation */}
        <section>
          <div class="container mx-auto max-w-7xl">
            <div class="flex flex-wrap justify-center gap-4">
              {checklistCategories.map((category, index) => (
                <Button
                  key={category.id}
                 
                  variant={currentCategory === index ? "default" : "outline"}
                  class={\`\${
                    currentCategory === index 
                      ? \`bg-gradient-to-r \${category.color} text-white\` 
                      : 'border-slate-600 text-slate-300 hover:bg-slate-700'
                  }\`}
                >
                  <category.icon class="h-4 w-4 mr-2" ></category>
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist Content */}
        <section>
          <div class="container mx-auto max-w-5xl">
            {checklistCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: currentCategory === categoryIndex ? 1 : 0,
                  x: currentCategory === categoryIndex ? 0 : 20
                }}
                class={currentCategory === categoryIndex ? 'block' : 'hidden'}
              >
                <Card class="mb-8 bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50">
                  <CardHeader>
                    <div class="flex items-center gap-4 mb-4">
                      <div class=inline-flex p-3 rounded-xl bg-gradient-to-r \${category.color}>
                        <category.icon class="h-6 w-6 text-white" ></category>
                      </div>
                      <div>
                        <CardTitle class="text-2xl font-bold text-white">{category.title}</CardTitle>
                        <p class="text-slate-300 mt-2">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent class="pt-0">
                    <div class="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.3 }}
                          class="group"
                        >
                          <Card>
                            <div class="flex items-start gap-4">
                              <Checkbox
                                checked=
                               
                                class="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                              ></Checkbox>
                              <div class="flex-grow">
                                <div class="flex items-center gap-3 mb-2">
                                  <h3 class=font-semibold transition-colors $>
                                    {item.title}
                                  </h3>
                                  <Badge class=>
                                    {item.priority === 'critical' ? 'Kritisch' : 
                                     item.priority === 'high' ? 'Hoch' : 
                                     item.priority === 'medium' ? 'Mittel' : 'Niedrig'}
                                  </Badge>
                                  <Badge variant="outline" class="border-slate-600 text-slate-400 text-xs">
                                    {item.reference}
                                  </Badge>
                                </div>
                                <p class="text-slate-300 text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Results & Actions */}
        <section>
          <div class="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" ></div>
          
          <div class="container mx-auto max-w-5xl relative z-10">
            <Card class="bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 p-8">
              <CardHeader>
                <CardTitle class="text-2xl font-bold text-white text-center mb-6">
                  Ihr Compliance-Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-green-400 mb-2">{completedItems.size}</div>
                    <div class="text-slate-300">Erfüllte Punkte</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-orange-400 mb-2"></div>
                    <div class="text-slate-300">Offene Punkte</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-purple-400 mb-2">%</div>
                    <div class="text-slate-300">Compliance Rate</div>
                  </div>
                </div>
                
                <div class="text-center space-y-4">
                  <Button>
                    <Download class="mr-2 h-5 w-5" ></Download>
                    Compliance Report herunterladen
                  </Button>
                  <Button>
                    <Calendar class="mr-2 h-5 w-5" ></Calendar>
                    Beratungstermin vereinbaren
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer ></Footer>
      </div>
    </>`
};