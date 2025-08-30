export default {
  route: '/wissen/dsgvo-leitfaeden',
  title: 'DSGVO Leitfäden: Praktische Anleitungen für Ihre Compliance',
  description: 'Über 20 praxiserprobte Schritt-für-Schritt-Anleitungen für Ihre DSGVO-Compliance. 
                Von Einsteiger-Guides bis zu Experten-Themen – mit Vorlagen u',
  content: `
    <>
      <SEOHead>
      <div>
        <Header ></Header>
        
        {/* Hero Section */}
        <section class="pt-24 pb-12 px-4" aria-labelledby="main-heading">
          <div class="container mx-auto max-w-7xl">
            <motion.div
              class="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <nav aria-label="Breadcrumb" class="mb-4">
                <ol>
                  <li><Link>Wissen</Link></li>
                  <li><span class="mx-2">/</span></li>
                  <li>DSGVO Leitfäden</li>
                </ol>
              </nav>
              <Badge class="mb-4 px-4 py-1" variant="outline">
                <BookOpen class="h-3 w-3 mr-1" ></BookOpen>
                20+ Praxis-Leitfäden
              </Badge>
              <h1>
                DSGVO Leitfäden: Praktische Anleitungen für Ihre Compliance
              </h1>
              <p>
                Über 20 praxiserprobte Schritt-für-Schritt-Anleitungen für Ihre DSGVO-Compliance. 
                Von Einsteiger-Guides bis zu Experten-Themen – mit Vorlagen und Checklisten.
              </p>
            </motion.div>

            {/* Featured Guide */}
            <motion.div
              class="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card class="bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" ></div>
                <CardContent class="p-8 relative">
                  <div>
                    <div class="flex-1">
                      <Badge class="mb-3 bg-white/20 text-white border-white/30">
                        Featured Guide
                      </Badge>
                      <h2 class="text-2xl font-bold mb-2" id="main-heading">{featuredGuide.title}</h2>
                      <p class="text-blue-100 mb-4">{featuredGuide.description}</p>
                      <div class="flex flex-wrap gap-4 text-sm">
                        <span class="flex items-center gap-1">
                          <FileText class="h-4 w-4" ></FileText>
                          {featuredGuide.stats.pages} Seiten
                        </span>
                        <span class="flex items-center gap-1">
                          <Clock class="h-4 w-4" ></Clock>
                          {featuredGuide.stats.readTime}
                        </span>
                        <span class="flex items-center gap-1">
                          <Download class="h-4 w-4" ></Download>
                          {featuredGuide.stats.downloads}
                        </span>
                        <span class="flex items-center gap-1">
                          <CheckCircle2 class="h-4 w-4" ></CheckCircle2>
                          {featuredGuide.stats.rating}/5
                        </span>
                      </div>
                    </div>
                    <Link to={featuredGuide.link}>
                      <Button>
                        Guide herunterladen
                        <Download class="ml-2 h-5 w-5" ></Download>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Tabs value={activeCategory} class="w-full">
                <TabsList>
                  {Object.entries(categories).map(([key, category]) => {
                    const Icon = category.icon;
                    return (
                      <TabsTrigger>
                        <Icon class="h-4 w-4" ></Icon>
                        <span>{category.title}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {Object.entries(guides).map(([key, categoryGuides]) => (
                  <TabsContent key={key} value={key}>
                    <div class="mb-6">
                      <p>
                        {categories[key as keyof typeof categories].description}
                      </p>
                    </div>
                    <div>
                      {categoryGuides.map((guide, index) => {
                        const Icon = guide.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card>
                              <CardHeader>
                                <div class="flex items-start justify-between mb-2">
                                  <div class="flex items-start gap-3">
                                    <div>
                                      <Icon>
                                    </div>
                                    <div class="flex-1">
                                      <CardTitle>
                                        {guide.title}
                                      </CardTitle>
                                      
                                      
                                    </div>
                                  </div>
                                  <Badge variant="outline">{guide.difficulty}</Badge>
                                </div>
                                <CardDescription>{guide.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div class="space-y-3">
                                  <div>
                                    <span class="flex items-center gap-1">
                                      <Clock class="h-4 w-4" ></Clock>
                                      {guide.readTime}
                                    </span>
                                  </div>
                                  
                                  <div class="space-y-1">
                                    {guide.highlights.map((highlight, idx) => (
                                      <div key={idx} class="flex items-center gap-2 text-sm">
                                        <CheckCircle2 class="h-3 w-3 text-green-500 flex-shrink-0" ></CheckCircle2>
                                        <span>{highlight}</span>
                                      </div>
                                    ))}
                                  </div>

                                  <Link to={guide.link}>
                                    <Button>
                                      Leitfaden öffnen
                                      <ChevronRight>
                                    </Button>
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            {/* Quick Access */}
            <section aria-label="Weitere DSGVO-Ressourcen" class="mt-16">
            <h2>
              Weitere hilfreiche DSGVO-Ressourcen
            </h2>
            <motion.div
              class="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card class="text-center">
                <CardContent class="p-6">
                  <FileText class="h-12 w-12 text-blue-600 mx-auto mb-4" ></FileText>
                  <h3 class="font-semibold mb-2 text-lg">Vorlagen-Sammlung</h3>
                  <p>
                    Über 50 DSGVO-Vorlagen zum Download
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/vorlagen/dsgvo">
                      Zu den Vorlagen
                      <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card class="text-center">
                <CardContent class="p-6">
                  <CheckCircle2 class="h-12 w-12 text-green-600 mx-auto mb-4" ></CheckCircle2>
                  <h3 class="font-semibold mb-2 text-lg">DSGVO-Checkliste</h3>
                  <p>
                    Interaktive Checkliste mit 100+ Punkten
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/assessment-center/dsgvo-compliance-checklist">
                      Checkliste starten
                      <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card class="text-center">
                <CardContent class="p-6">
                  <Users class="h-12 w-12 text-purple-600 mx-auto mb-4" ></Users>
                  <h3 class="font-semibold mb-2 text-lg">Experten-Support</h3>
                  <p>
                    Persönliche Beratung für komplexe Fälle
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/contact">
                      Beratung anfragen
                      <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            </section>

            {/* CTA */}
            <motion.div
              class="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <h2 class="text-2xl font-bold mb-4">
                  Maßgeschneiderte DSGVO-Leitfäden für Ihr Unternehmen
                </h2>
                <p class="text-lg mb-6 opacity-90">
                  Wir erstellen maßgeschneiderte DSGVO-Leitfäden für Ihre spezifischen Anforderungen
                </p>
                <div>
                  <Button>
                    Individuellen Leitfaden anfragen
                    <ArrowRight class="ml-2 h-5 w-5" ></ArrowRight>
                  </Button>
                  <Button>
                    Workshop buchen
                    <ExternalLink class="ml-2 h-5 w-5" ></ExternalLink>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
        
        <Footer ></Footer>
      </div>
    </>`
};