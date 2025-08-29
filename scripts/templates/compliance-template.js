/**
 * Template for generating compliance pages
 * Provides consistent structure and SEO optimization
 */

export const generateCompliancePage = (config) => {
  const {
    standard,        // e.g., "TISAX", "SOC2", "DSGVO"
    fullName,        // e.g., "Trusted Information Security Assessment Exchange"
    heroTitle,       // Main title in hero section
    heroSubtitle,    // Subtitle/tagline
    description,     // Main description
    keywords = [],   // SEO keywords
    badge = '',      // Badge text (e.g., "TISAX® Compliance")
    badgeIcon = 'shield', // Icon for badge
    
    // Core content sections
    painPoints = [], // Array of {icon, title, description, impact, example}
    solutions = [],  // Array of {title, description, features, icon, color}
    benefits = [],   // Array of {title, description, metric, detail}
    controls = [],   // Array of {name, description, coverage, controls, icon, detail}
    useCases = [],   // Array of {title, challenge, solution, outcome, timeline, complexity}
    
    // CTA Section
    ctaTitle = '',
    ctaDescription = '',
    
    // Colors
    primaryColor = 'red',
    secondaryColor = 'orange',
  } = config;

  // Generate SEO-optimized title and description
  const seoTitle = `${standard}${fullName ? ' – ' + fullName : ''} Zertifizierung`;
  const seoDescription = description || 
    `${standard} Compliance für Ihr Unternehmen: ${keywords.slice(0, 3).join(', ')}. ✓ Zertifizierung ✓ Beratung ✓ Implementation. Jetzt anfragen!`;

  // Helper functions for generating sections
  const generateHeroSection = () => `
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-[#F5F6F8] via-white to-${primaryColor}-500/5" />
      </div>
      
      <div class="container relative z-10 mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              ${badge ? `
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${primaryColor}-100 dark:bg-${primaryColor}-950/30 text-${primaryColor}-700 dark:text-${primaryColor}-400">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="${getIconPath(badgeIcon)}"/>
                </svg>
                <span class="text-sm font-medium">${badge}</span>
              </div>` : ''}
              
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                ${heroTitle}
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-${primaryColor}-600 to-${secondaryColor}-600 mt-2">
                  ${heroSubtitle}
                </span>
              </h1>
              
              <p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
                ${description}
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/contact?demo=true&framework=${standard.toLowerCase()}" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-${primaryColor}-600 to-${secondaryColor}-600 rounded-lg hover:opacity-90 transition-all group">
                  <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  ${standard} Readiness Assessment
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="#guide" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                  <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                  ${standard} Implementation Guide
                </a>
              </div>
            </div>
            
            <!-- Compliance Dashboard -->
            <div class="relative">
              ${generateComplianceDashboard()}
            </div>
          </div>
        </div>
      </div>
    </section>`;

  const generatePainPointsSection = () => painPoints.length > 0 ? `
    <!-- Pain Points Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div class="container px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              ${standard} Compliance Herausforderungen
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              Die wichtigsten Herausforderungen bei der ${standard}-Implementierung
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${painPoints.map(point => `
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="space-y-4">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <svg class="h-6 w-6 text-${primaryColor}-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="${getIconPath(point.icon)}"/>
                    </svg>
                    <div>
                      <h3 class="font-bold">${point.title}</h3>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImpactColor(point.impact)} mt-1">
                        ${point.impact}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p class="text-gray-600 dark:text-gray-400">
                  ${point.description}
                </p>
                
                <div class="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <span class="font-medium">Beispiele:</span> ${point.example}
                  </p>
                </div>
              </div>
            </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>` : '';

  const generateSolutionsSection = () => solutions.length > 0 ? `
    <!-- Solutions Section -->
    <section class="py-20">
      <div class="container px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              ${standard} Implementation Solutions
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              Strukturierte Lösungen für erfolgreiche ${standard}-Compliance
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${solutions.map(solution => `
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div class="space-y-4">
                <div class="inline-flex p-3 rounded-xl bg-gradient-to-r ${solution.color} text-white">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="${getIconPath(solution.icon)}"/>
                  </svg>
                </div>
                
                <h3 class="text-xl font-bold">${solution.title}</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  ${solution.description}
                </p>
                
                <div class="space-y-2 pt-2">
                  ${solution.features.map(feature => `
                  <div class="flex items-start gap-2 text-sm">
                    <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>${feature}</span>
                  </div>
                  `).join('')}
                </div>
              </div>
            </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>` : '';

  const generateBenefitsSection = () => benefits.length > 0 ? `
    <!-- Benefits Section -->
    <section class="py-20 bg-gradient-to-r from-${primaryColor}-50 to-${secondaryColor}-50 dark:from-${primaryColor}-950/20 dark:to-${secondaryColor}-950/20">
      <div class="container px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              Business Impact von ${standard}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              Messbare Vorteile für Ihr Unternehmen
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${benefits.map(benefit => `
            <div class="bg-white dark:bg-gray-800 p-6 text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div class="text-3xl md:text-4xl font-bold text-${primaryColor}-600 mb-2">
                ${benefit.metric}
              </div>
              <div class="font-semibold mb-2">${benefit.title}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                ${benefit.description}
              </div>
              <div class="text-xs text-${primaryColor}-600 font-medium">
                ${benefit.detail}
              </div>
            </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>` : '';

  const generateCTASection = () => `
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-${primaryColor}-600 to-${secondaryColor}-600">
      <div class="container px-4">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            ${ctaTitle || `Starten Sie Ihre ${standard} Journey heute`}
          </h2>
          <p class="text-xl mb-8 text-white/90">
            ${ctaDescription || `Erreichen Sie ${standard}-Compliance mit professioneller Unterstützung.`}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact?demo=true&framework=${standard.toLowerCase()}" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-${primaryColor}-600 rounded-lg hover:bg-gray-100 transition-all group">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              ${standard} Assessment buchen
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="tel:+4917670560292" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              Expertenberatung anfordern
            </a>
          </div>
        </div>
      </div>
    </section>`;

  const generateComplianceDashboard = () => `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border-2 border-${primaryColor}-200 dark:border-${primaryColor}-800">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-lg">${standard} Compliance Center</h3>
          <span class="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Ready</span>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 bg-gradient-to-br from-${primaryColor}-50 to-${primaryColor}-100 dark:from-${primaryColor}-950/20 dark:to-${primaryColor}-900/20 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <svg class="h-5 w-5 text-${primaryColor}-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span class="text-2xl font-bold text-${primaryColor}-700">92%</span>
            </div>
            <p class="text-sm font-medium">Compliance Score</p>
          </div>
          
          <div class="p-4 bg-gradient-to-br from-${secondaryColor}-50 to-${secondaryColor}-100 dark:from-${secondaryColor}-950/20 dark:to-${secondaryColor}-900/20 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <svg class="h-5 w-5 text-${secondaryColor}-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
              </svg>
              <span class="text-2xl font-bold text-${secondaryColor}-700">6</span>
            </div>
            <p class="text-sm font-medium">Monate bis Zertifizierung</p>
          </div>
        </div>
      </div>
    </div>`;

  // Generate full content
  const content = `
    <main class="min-h-screen">
      ${generateHeroSection()}
      ${generatePainPointsSection()}
      ${controls.length > 0 ? generateControlsSection(controls, standard, primaryColor) : ''}
      ${generateSolutionsSection()}
      ${useCases.length > 0 ? generateUseCasesSection(useCases, primaryColor) : ''}
      ${generateBenefitsSection()}
      ${generateCTASection()}
    </main>
  `;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: keywords.join(', '),
    content: content.trim()
  };
};

// Helper functions
const getIconPath = (iconName) => {
  const icons = {
    shield: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z',
    car: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z',
    lock: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
    check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
    users: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    // Add more icons as needed
  };
  return icons[iconName] || icons.shield;
};

const getImpactColor = (impact) => {
  const colors = {
    'Kritisch': 'bg-red-100 text-red-800',
    'Hoch': 'bg-orange-100 text-orange-800',
    'Mittel': 'bg-yellow-100 text-yellow-800',
    'Niedrig': 'bg-green-100 text-green-800'
  };
  return colors[impact] || colors['Mittel'];
};

// Additional section generators
const generateControlsSection = (controls, standard, primaryColor) => `
  <!-- Controls Section -->
  <section class="py-20">
    <div class="container px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            ${standard} Security Controls
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Umfassende Kontrollen für ${standard}-Compliance
          </p>
        </div>
        
        <div class="space-y-6">
          ${controls.map(control => `
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-${primaryColor}-100 dark:bg-${primaryColor}-900/30 rounded-lg">
                  <svg class="h-6 w-6 text-${primaryColor}-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="${getIconPath(control.icon)}"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold">${control.name}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    ${control.description}
                  </p>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2">
                ${control.controls.map(item => `
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  ${item}
                </span>
                `).join('')}
              </div>
              
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span>Coverage</span>
                  <span class="font-semibold">${control.coverage}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-${primaryColor}-600 h-2 rounded-full" style="width: ${control.coverage}%"></div>
                </div>
              </div>
              
              <div>
                <span class="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>
`;

const generateUseCasesSection = (useCases, primaryColor) => `
  <!-- Use Cases Section -->
  <section class="py-20 bg-gray-50 dark:bg-gray-900/50">
    <div class="container px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Erfolgreiche Implementierungen unserer Kunden
          </p>
        </div>
        
        <div class="space-y-6">
          ${useCases.map(useCase => `
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
              <div>
                <h3 class="text-lg font-bold mb-2 text-${primaryColor}-700">${useCase.title}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <span class="font-medium">Challenge:</span> ${useCase.challenge}
                </p>
              </div>
              
              <div>
                <p class="text-sm">
                  <span class="font-medium text-${primaryColor}-700">Solution:</span> ${useCase.solution}
                </p>
              </div>
              
              <div>
                <p class="text-sm font-medium text-green-700">
                  ${useCase.outcome}
                </p>
              </div>
              
              <div class="flex flex-col gap-2">
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  ${useCase.timeline}
                </span>
                <span class="text-xs px-2 py-1 ${useCase.complexity === 'Hoch' ? 'bg-red-100 text-red-800' : useCase.complexity === 'Mittel' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'} rounded">
                  ${useCase.complexity}
                </span>
              </div>
              
              <div class="text-center">
                <svg class="h-8 w-8 text-green-600 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            </div>
          </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>
`;