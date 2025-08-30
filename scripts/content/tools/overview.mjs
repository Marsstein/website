export default {
  route: '/tools',
  title: 'Compliance Tools & Automatisierung',
  description: 'KI-gestützte Compliance-Tools. DSGVO-Generator, Cookie-Management und mehr. Kostenlos testen.',
  content: `
  
  <!-- Header -->
  <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-3">
          <svg class="w-10 h-10 text-[#00A5FF]" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" opacity="0.1"/>
            <path d="M20 10L30 16V24L20 30L10 24V16L20 10Z" opacity="0.3"/>
            <path d="M20 15L25 18V22L20 25L15 22V18L20 15Z"/>
          </svg>
          <span class="text-xl font-bold text-[#0B1D2A]">Marsstein</span>
        </a>
        
        <!-- Navigation Desktop -->
        <nav class="hidden lg:flex items-center space-x-8">
          <div class="relative group">
            <button class="flex items-center space-x-1 text-gray-700 hover:text-[#00A5FF] transition-colors">
              <span>Regulierungen</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <a href="/dsgvo" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A5FF]">DSGVO</a>
              <a href="/nis2" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A5FF]">NIS2</a>
              <a href="/eu-ai-act" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A5FF]">EU AI Act</a>
              <a href="/hinweisgeberschutzgesetz" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A5FF]">HinSchG</a>
            </div>
          </div>
          
          <div class="relative group">
            <button class="flex items-center space-x-1 text-gray-700 hover:text-[#00A5FF] transition-colors">
              <span>Zertifizierungen</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <a href="/iso-27001-zertifizierung" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A5FF]">ISO 27001</a>
              <a href="/iso-27017-zertifizierung" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A5FF]">ISO 27017</a>
              <a href="/iso-27018-zertifizierung" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A5FF]">ISO 27018</a>
              <a href="/soc2-zertifizierung" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A5FF]">SOC 2</a>
              <a href="/tisax-compliance" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A5FF]">TISAX</a>
            </div>
          </div>
          
          <a href="/wissen" class="text-gray-700 hover:text-[#00A5FF] transition-colors">Wissen</a>
          <a href="/branchen" class="text-gray-700 hover:text-[#00A5FF] transition-colors">Branchen</a>
          <a href="/tools" class="text-gray-700 hover:text-[#00A5FF] transition-colors">Tools</a>
          <a href="/pricing" class="text-gray-700 hover:text-[#00A5FF] transition-colors">Preise</a>
        </nav>
        
        <!-- CTA Buttons -->
        <div class="hidden lg:flex items-center space-x-4">
          <a href="/dashboard" class="text-gray-700 hover:text-[#00A5FF] transition-colors">
            Anmelden
          </a>
          <a href="/contact" class="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
            Demo anfordern
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="lg:hidden p-2">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
  
  <!-- Header Spacer -->
  <div class="h-20"></div>

  
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
      <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span>Compliance Tools</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Compliance<br>
            <span class="text-[#00A5FF]">leicht</span> gemacht
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligente Tools, die Ihre Compliance-Herausforderungen lösen und aus komplexen Anforderungen einfache Lösungen machen.
          </p>
          <div class="flex gap-4 justify-center">
            <a href="#tools" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
              Tools entdecken
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <a href="/demo" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#00A5FF] bg-white rounded-lg hover:bg-gray-100 transition-all">
              Demo ansehen
            </a>
          </div>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold text-[#00A5FF]">100%</div>
            <div class="text-sm text-gray-400 mt-1">DSGVO-konform</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#00A5FF]">5 Min</div>
            <div class="text-sm text-gray-400 mt-1">Setup-Zeit</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#00A5FF]">24/7</div>
            <div class="text-sm text-gray-400 mt-1">KI-Support</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#00A5FF]">€1000+</div>
            <div class="text-sm text-gray-400 mt-1">Ersparnis/Monat</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section id="tools" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-[#0B1D2A] mb-4">
            Unsere Compliance-Tools im Überblick
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Von Cookie-Management bis KI-Beratung - alle Tools für Ihre Compliance
          </p>
        </div>
        
        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button class="px-6 py-2 bg-[#00A5FF] text-white rounded-lg font-medium">
            Alle Tools
            <span class="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">5</span>
          </button>
          <button class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Cookie-Tools
            <span class="ml-2 px-2 py-0.5 bg-gray-200 rounded-full text-xs">1</span>
          </button>
          <button class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Compliance-Tools
            <span class="ml-2 px-2 py-0.5 bg-gray-200 rounded-full text-xs">2</span>
          </button>
          <button class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            KI-Tools
            <span class="ml-2 px-2 py-0.5 bg-gray-200 rounded-full text-xs">1</span>
          </button>
          <button class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Kommunikations-Tools
            <span class="ml-2 px-2 py-0.5 bg-gray-200 rounded-full text-xs">1</span>
          </button>
        </div>
        
        <!-- Complexity Filter -->
        <div class="flex justify-center gap-2 mb-12">
          <span class="text-gray-600">Komplexität:</span>
          <button class="px-4 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Alle Level</button>
          <button class="px-4 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Einfach</button>
          <button class="px-4 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Mittel</button>
          <button class="px-4 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Experte</button>
        </div>
        
        <!-- Tools Grid -->
        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Cookie Management Tool -->
          <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#00A5FF] transition-all hover:shadow-xl">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center space-x-3">
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Live</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Mittel</span>
              </div>
              <div class="text-3xl font-bold text-[#00A5FF]">95%</div>
            </div>
            
            <h3 class="text-2xl font-bold text-[#0B1D2A] mb-2">Cookie Management Tool</h3>
            <p class="text-lg text-gray-700 font-semibold mb-3">Schluss mit Cookie-Chaos</p>
            <p class="text-gray-600 mb-6">
              Ihre Website sammelt Cookies, aber Ihr Banner ist rechtlich unsicher? Unser Tool löst das DSGVO-Problem in 5 Minuten - ohne teure Anwälte.
            </p>
            
            <div class="flex items-center space-x-6 mb-6">
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">5 Min</div>
                <div class="text-xs text-gray-500">Setup</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">€3000</div>
                <div class="text-xs text-gray-500">Anwaltskosten sparen</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">+15%</div>
                <div class="text-xs text-gray-500">ROI</div>
              </div>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-4 mb-6">
              <div class="flex items-center space-x-2 text-blue-700 text-sm font-semibold mb-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span>95% Beliebt</span>
              </div>
              <ul class="space-y-1">
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Rechtssicheres Banner in 5 Min
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Mehr Consent = mehr Daten = mehr Umsatz
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Keine Anwaltskosten mehr
                </li>
              </ul>
            </div>
            
            <a href="/tools/cookie-management" class="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all font-semibold">
              Tool nutzen
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          <!-- Hinweisgebersystem Tool -->
          <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-500 transition-all hover:shadow-xl">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center space-x-3">
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Live</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Experte</span>
              </div>
              <div class="text-3xl font-bold text-purple-600">88%</div>
            </div>
            
            <h3 class="text-2xl font-bold text-[#0B1D2A] mb-2">Hinweisgebersystem Tool</h3>
            <p class="text-lg text-gray-700 font-semibold mb-3">EU-Pflicht? Kein Problem!</p>
            <p class="text-gray-600 mb-6">
              Ab 50 Mitarbeitern brauchen Sie ein Hinweisgebersystem. Bußgelder bis 100.000€ drohen. Unser Tool macht Sie in 24h compliant.
            </p>
            
            <div class="flex items-center space-x-6 mb-6">
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">24h</div>
                <div class="text-xs text-gray-500">Setup</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">€100k</div>
                <div class="text-xs text-gray-500">Bußgeld vermeiden</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">100%</div>
                <div class="text-xs text-gray-500">ROI</div>
              </div>
            </div>
            
            <div class="bg-purple-50 rounded-lg p-4 mb-6">
              <div class="flex items-center space-x-2 text-purple-700 text-sm font-semibold mb-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span>88% Beliebt</span>
              </div>
              <ul class="space-y-1">
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Bußgeld-Risiko eliminiert
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  EU-Vorgaben automatisch erfüllt
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Totale Anonymität garantiert
                </li>
              </ul>
            </div>
            
            <a href="/tools/hinweisgebersystem" class="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all font-semibold">
              Tool nutzen
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          <!-- DSGVO Email Template Generator -->
          <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-green-500 transition-all hover:shadow-xl">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center space-x-3">
                <span class="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Beta</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Einfach</span>
              </div>
              <div class="text-3xl font-bold text-green-600">92%</div>
            </div>
            
            <h3 class="text-2xl font-bold text-[#0B1D2A] mb-2">DSGVO Email Template Generator</h3>
            <p class="text-lg text-gray-700 font-semibold mb-3">Nie wieder rechtsunsichere Emails</p>
            <p class="text-gray-600 mb-6">
              Jede Email an Kunden kann eine DSGVO-Falle sein. Falsche Datenschutz-Texte = Abmahnungen. Unser Generator produziert sichere Templates in 2 Minuten.
            </p>
            
            <div class="flex items-center space-x-6 mb-6">
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">2 Min</div>
                <div class="text-xs text-gray-500">Setup</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">€5000</div>
                <div class="text-xs text-gray-500">Abmahnungen vermeiden</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">200%</div>
                <div class="text-xs text-gray-500">ROI</div>
              </div>
            </div>
            
            <div class="bg-green-50 rounded-lg p-4 mb-6">
              <div class="flex items-center space-x-2 text-green-700 text-sm font-semibold mb-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span>92% Beliebt</span>
              </div>
              <ul class="space-y-1">
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Abmahn-sicher emailen
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Keine Anwalts-Checks mehr nötig
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Templates für alle Fälle fertig
                </li>
              </ul>
            </div>
            
            <a href="/tools/dsgvo-email-template-generator" class="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all font-semibold">
              Tool nutzen
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          <!-- DSGVO Compliance Check -->
          <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 transition-all hover:shadow-xl">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center space-x-3">
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Live</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">Mittel</span>
              </div>
              <div class="text-3xl font-bold text-orange-600">87%</div>
            </div>
            
            <h3 class="text-2xl font-bold text-[#0B1D2A] mb-2">DSGVO Compliance Check</h3>
            <p class="text-lg text-gray-700 font-semibold mb-3">Wo stehen Sie wirklich?</p>
            <p class="text-gray-600 mb-6">
              Sie wissen nicht, ob Ihr Datenschutz ausreicht? Behörden-Prüfungen können teuer werden. Checken Sie Ihren Status in 15 Minuten - kostenlos.
            </p>
            
            <div class="flex items-center space-x-6 mb-6">
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">15 Min</div>
                <div class="text-xs text-gray-500">Setup</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">100%</div>
                <div class="text-xs text-gray-500">Prüfungs-sicher</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">€10k</div>
                <div class="text-xs text-gray-500">ROI</div>
              </div>
            </div>
            
            <div class="bg-orange-50 rounded-lg p-4 mb-6">
              <div class="flex items-center space-x-2 text-orange-700 text-sm font-semibold mb-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span>87% Beliebt</span>
              </div>
              <ul class="space-y-1">
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Schwachstellen sofort erkannt
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Prüfungs-bereit in Rekordzeit
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Konkurrenz-Vergleich inklusive
                </li>
              </ul>
            </div>
            
            <a href="/tools/dsgvo-compliance-scorecard" class="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all font-semibold">
              Tool nutzen
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          <!-- KI Compliance Berater (Coming Soon) -->
          <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-indigo-500 transition-all hover:shadow-xl opacity-75">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center space-x-3">
                <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">Bald verfügbar</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">Mittel</span>
              </div>
              <div class="text-3xl font-bold text-indigo-600">96%</div>
            </div>
            
            <h3 class="text-2xl font-bold text-[#0B1D2A] mb-2">KI Compliance Berater</h3>
            <p class="text-lg text-gray-700 font-semibold mb-3">Ihr 24/7 Rechts-Experte</p>
            <p class="text-gray-600 mb-6">
              Compliance-Fragen zur Unzeit? Anwalt nicht erreichbar? Stundensatz zu hoch? Unser KI-Berater gibt Ihnen sofort Antworten - rund um die Uhr.
            </p>
            
            <div class="flex items-center space-x-6 mb-6">
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">30s</div>
                <div class="text-xs text-gray-500">Setup</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">€500/h</div>
                <div class="text-xs text-gray-500">Anwaltskosten sparen</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#0B1D2A]">∞</div>
                <div class="text-xs text-gray-500">ROI</div>
              </div>
            </div>
            
            <div class="bg-indigo-50 rounded-lg p-4 mb-6">
              <div class="flex items-center space-x-2 text-indigo-700 text-sm font-semibold mb-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span>96% Beliebt</span>
              </div>
              <ul class="space-y-1">
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Sofort-Antworten statt teure Anwalt-Termine
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Nachts, Wochenende - immer verfügbar
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Team wird zum Compliance-Experten
                </li>
              </ul>
            </div>
            
            <button disabled class="inline-flex items-center justify-center w-full px-6 py-3 text-gray-500 bg-gray-100 rounded-lg cursor-not-allowed font-semibold">
              Bald verfügbar
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
      <div class="container mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für<br>
            <span class="text-[#00A5FF]">smarte Tools?</span>
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Machen Sie den ersten Schritt in eine Zukunft, in der Tools Ihre Probleme lösen statt neue zu schaffen.
          </p>
          <div class="flex gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0B1D2A] bg-white rounded-lg hover:bg-gray-100 transition-all">
              Kostenlose Demo buchen
            </a>
            <a href="tel:+4917670560292" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#0B1D2A] transition-all">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Sofort anrufen
            </a>
          </div>
        </div>
        
        <!-- Trust Section -->
        <div class="mt-16 pt-16 border-t border-white/10">
          <p class="text-gray-400 text-sm mb-8">Tools, die echte Probleme lösen</p>
          <div class="flex flex-wrap justify-center gap-8">
            <div class="flex items-center space-x-2 text-gray-400">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3.5 7v6c0 5.55 3.84 10.74 8.5 12 4.66-1.26 8.5-6.45 8.5-12V7L12 2zm-2 16l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z"/>
              </svg>
              <span>100% DSGVO-konform</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-400">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>Von Experten entwickelt</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-400">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L18 8l-9 9z"/>
              </svg>
              <span>14 Tage kostenlos testen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  
  <!-- Footer -->
  <footer class="bg-[#0B1D2A] text-white pt-20 pb-10">
    <div class="container mx-auto px-6">
      <!-- Footer Grid -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <!-- Logo & Description -->
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center space-x-3 mb-4">
            <svg class="w-10 h-10 text-[#00A5FF]" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" opacity="0.3"/>
              <path d="M20 10L30 16V24L20 30L10 24V16L20 10Z" opacity="0.5"/>
              <path d="M20 15L25 18V22L20 25L15 22V18L20 15Z"/>
            </svg>
            <span class="text-xl font-bold">Marsstein</span>
          </div>
          <p class="text-gray-400 text-sm">
            Compliance made simple
          </p>
        </div>
        
        <!-- Regulierungen -->
        <div>
          <h3 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Regulierungen</h3>
          <ul class="space-y-2">
            <li><a href="/eu-ai-act" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">EU AI Act</a></li>
            <li><a href="/dsgvo" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">DSGVO</a></li>
            <li><a href="/nis2" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">NIS2 Compliance</a></li>
          </ul>
        </div>
        
        <!-- Zertifizierungen -->
        <div>
          <h3 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Zertifizierungen</h3>
          <ul class="space-y-2">
            <li><a href="/iso-27001-zertifizierung" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">ISO 27001</a></li>
            <li><a href="/soc2-zertifizierung" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">SOC2</a></li>
            <li><a href="/tisax-compliance" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">TISAX</a></li>
          </ul>
        </div>
        
        <!-- Tools & Services -->
        <div>
          <h3 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Tools & Services</h3>
          <ul class="space-y-2">
            <li><a href="/dashboard" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">Dashboard</a></li>
            <li><a href="/assessment-center" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">Assessment Center</a></li>
            <li><a href="/tools/cookie-management" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">Cookie Management</a></li>
            <li><a href="/tools/compliance-ai-assistant" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">AI Assistant</a></li>
          </ul>
        </div>
        
        <!-- Wissen & Guides -->
        <div>
          <h3 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Wissen & Guides</h3>
          <ul class="space-y-2">
            <li><a href="/wissen/dsgvo" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">DSGVO Leitfäden</a></li>
            <li><a href="/wissen/ki-datenschutz" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">KI Compliance</a></li>
            <li><a href="/wissen/leitfaden/data-breach-notfall" class="text-gray-400 hover:text-[#00A5FF] text-sm transition-colors">Krisenmanagement</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Contact Info -->
      <div class="border-t border-gray-800 pt-8 mb-8">
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h3 class="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Kontakt & Support</h3>
            <p class="text-gray-400 text-sm">
              <a href="mailto:info@marsstein.ai" class="hover:text-[#00A5FF] transition-colors">info@marsstein.ai</a><br>
              <a href="/contact" class="hover:text-[#00A5FF] transition-colors">Kontakt aufnehmen</a>
            </p>
          </div>
          <div class="md:text-right">
            <div class="flex items-center md:justify-end space-x-4 mb-4">
              <!-- Social Media Icons -->
              <a href="https://www.linkedin.com/company/marsstein/" class="text-gray-400 hover:text-[#00A5FF] transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/marsstein.ai/" class="text-gray-400 hover:text-[#00A5FF] transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Marsstein • Compliance made simple
          </p>
          <div class="flex space-x-6 text-sm">
            <a href="/agb" class="text-gray-400 hover:text-[#00A5FF] transition-colors">AGB</a>
            <span class="text-gray-600">•</span>
            <a href="/impressum" class="text-gray-400 hover:text-[#00A5FF] transition-colors">Impressum</a>
            <span class="text-gray-600">•</span>
            <a href="/datenschutz" class="text-gray-400 hover:text-[#00A5FF] transition-colors">Datenschutz</a>
          </div>
        </div>
        
        <!-- Trust Badges -->
        <div class="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-gray-800">
          <div class="flex items-center space-x-2 text-gray-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L3.5 7v6c0 5.55 3.84 10.74 8.5 12 4.66-1.26 8.5-6.45 8.5-12V7L12 2z"/>
            </svg>
            <span class="text-xs">GDPR Compliant</span>
          </div>
          <div class="flex items-center space-x-2 text-gray-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span class="text-xs">ISO 27001 Certified</span>
          </div>
          <div class="flex items-center space-x-2 text-gray-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span class="text-xs">EU AI Act Approved</span>
          </div>
        </div>
      </div>
    </div>
  </footer>

`
};