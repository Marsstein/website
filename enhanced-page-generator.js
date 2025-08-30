#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Enhanced Page Generator
 * Findet React-Komponenten und generiert spezifischen Content
 */

// Mapping von Routes zu React-Komponenten
const ROUTE_TO_COMPONENT_MAP = {
  '/': 'src/pages/Index.tsx',
  '/tools': 'src/pages/tools/index.tsx',
  '/tools/compliance-ai-assistant': 'src/pages/tools/ComplianceAI.tsx',
  '/tools/cookie-management': 'src/pages/tools/CookieManagement.tsx',
  '/tools/dsgvo-compliance-scorecard': 'src/pages/DsgvoComplianceScorecard.tsx',
  '/tools/dsgvo-email-template-generator': 'src/pages/DsgvoEmailTemplateGenerator.tsx',
  '/academy': 'src/pages/AcademyPage.tsx',
  '/pricing': 'src/pages/Pricing.tsx',
  '/contact': 'src/pages/Contact.tsx',
  '/dsgvo': 'src/pages/compliance/DsgvoCompliance.tsx',
  '/nis2': 'src/pages/compliance/Nis2Compliance.tsx',
  '/eu-ai-act': 'src/pages/compliance/EuAiActCompliance.tsx',
  '/hinweisgeberschutzgesetz': 'src/pages/HinweisgeberschutzCompliance.tsx',
  '/geldwaeschegesetz': 'src/pages/compliance/GeldwaescheCompliance.tsx',
  '/dsg-ekd': 'src/pages/compliance/DsgEkdCompliance.tsx',
  '/kdg': 'src/pages/compliance/KdgCompliance.tsx',
  '/lieferkettensorgfaltspflicht': 'src/pages/compliance/LieferketteCompliance.tsx',
  '/wissen': 'src/pages/Knowledge.tsx',
  '/wissen/dsgvo': 'src/pages/wissen/DsgvoGrundlagen.tsx',
  '/wissen/cybersecurity': 'src/pages/wissen/Cybersecurity.tsx',
  '/wissen/compliance-frameworks': 'src/pages/wissen/ComplianceFrameworks.tsx',
  '/wissen/ki-datenschutz': 'src/pages/wissen/KiDatenschutz.tsx',
  '/wissen/risk-management': 'src/pages/wissen/RiskManagement.tsx',
  '/wissen/leitfaden/betroffenenrechte': 'src/pages/wissen/leitfaden/Betroffenenrechte.tsx',
  '/wissen/leitfaden/verarbeitungsverzeichnis': 'src/pages/wissen/leitfaden/Verarbeitungsverzeichnis.tsx',
  '/assessment-center': 'src/pages/assessment-center/index.tsx',
  '/assessment-center/ai-governance-check': 'src/pages/assessment-center/AIGovernanceCheck.tsx',
  '/assessment-center/ai-risk-assessment': 'src/pages/assessment-center/AIRiskAssessment.tsx',
  '/assessment-center/algorithmic-impact-assessment': 'src/pages/assessment-center/AlgorithmicImpactAssessment.tsx',
  '/assessment-center/dsgvo-compliance-checklist': 'src/pages/assessment-center/DsgvoComplianceChecklist.tsx',
  '/assessment-center/iso27001-readiness-check': 'src/pages/assessment-center/ISO27001ReadinessCheck.tsx',
  '/assessment-center/isms-maturity-assessment': 'src/pages/assessment-center/ISMSMaturityAssessment.tsx',
  '/assessment-center/nis2-compliance-check': 'src/pages/assessment-center/NIS2ComplianceCheck.tsx',
  '/assessment-center/security-controls-audit': 'src/pages/assessment-center/SecurityControlsAudit.tsx',
  '/assessment-center/soc2-readiness-assessment': 'src/pages/assessment-center/SOC2ReadinessAssessment.tsx',
};

// Content-spezifische Templates basierend auf Seitentyp
const CONTENT_TEMPLATES = {
  tools: (title, description) => `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
        <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6">
              🚀 Compliance-Tools
            </span>
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div class="flex gap-4 justify-center">
              <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
                Tool kostenlos testen
              </a>
              <a href="/tools" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#00A5FF] bg-white rounded-lg hover:bg-gray-100 transition-all">
                Alle Tools ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Tools Grid -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-[#0B1D2A] text-center mb-12">
            Unsere Compliance-Tools im Überblick
          </h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Cookie Management Tool -->
            <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
              <div class="w-14 h-14 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mb-3">Cookie Management</h3>
              <p class="text-gray-600 mb-4">
                DSGVO-konforme Cookie-Banner in 5 Minuten. TCF 2.0 kompatibel mit maximaler Conversion.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">DSGVO & ePrivacy konform</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">A/B Testing integriert</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">30+ CMP Integrationen</span>
                </li>
              </ul>
              <a href="/tools/cookie-management" class="inline-flex items-center text-[#00A5FF] font-semibold hover:text-[#0095e8]">
                Tool nutzen
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>

            <!-- DSGVO Email Generator -->
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <div class="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mb-3">DSGVO Email Templates</h3>
              <p class="text-gray-600 mb-4">
                Rechtssichere E-Mail-Vorlagen für alle Datenschutz-Anfragen. In 2 Minuten erstellt.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Betroffenenanfragen</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Löschanträge</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Datenpannen-Meldungen</span>
                </li>
              </ul>
              <a href="/tools/dsgvo-email-template-generator" class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
                Tool nutzen
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>

            <!-- Compliance AI Assistant -->
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <div class="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mb-3">KI Compliance Berater</h3>
              <p class="text-gray-600 mb-4">
                24/7 Compliance-Beratung durch KI. Sofort-Antworten auf alle Ihre Fragen.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">DSGVO, ISO 27001, NIS2</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Immer aktuell</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Maßgeschneiderte Antworten</span>
                </li>
              </ul>
              <a href="/tools/compliance-ai-assistant" class="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
                Tool nutzen
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-[#0B1D2A] text-center mb-12">
              Warum Marsstein Tools?
            </h2>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Sofort einsatzbereit</h3>
                  <p class="text-gray-600">
                    Keine Installation, keine Einrichtung. Unsere Tools funktionieren direkt im Browser.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">100% rechtssicher</h3>
                  <p class="text-gray-600">
                    Von Datenschutz-Experten entwickelt und ständig aktualisiert.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Kosteneffizient</h3>
                  <p class="text-gray-600">
                    Sparen Sie tausende Euro für Berater und Anwälte mit unseren Tools.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">KI-gestützt</h3>
                  <p class="text-gray-600">
                    Modernste KI-Technologie für maximale Effizienz und Genauigkeit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-[#0B1D2A]">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Starten Sie jetzt mit unseren Tools
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Alle Tools 14 Tage kostenlos testen. Keine Kreditkarte erforderlich.
          </p>
          <div class="flex gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0B1D2A] bg-white rounded-lg hover:bg-gray-100 transition-all">
              Kostenlos testen
            </a>
            <a href="/pricing" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#0B1D2A] transition-all">
              Preise ansehen
            </a>
          </div>
        </div>
      </section>
    </main>
  `,
  
  compliance: (title, description, standard) => `
    <main class="min-h-screen">
      <!-- Hero Section with Gradient -->
      <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] via-[#1a3a52] to-[#0B1D2A]">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div class="absolute top-0 right-0 w-96 h-96 bg-[#00A5FF] rounded-full filter blur-3xl opacity-10"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#00A5FF] rounded-full filter blur-3xl opacity-10"></div>
        </div>
        
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6">
              ⚡ ${standard || 'Compliance Standard'}
            </span>
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div class="flex gap-4 justify-center">
              <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all shadow-lg">
                Kostenlose Beratung
              </a>
              <a href="/assessment-center" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#00A5FF] bg-white rounded-lg hover:bg-gray-100 transition-all shadow-lg">
                Self-Assessment starten
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Facts -->
      <section class="py-16 bg-white border-b">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold text-[#00A5FF]">30 Tage</div>
              <div class="text-gray-600 mt-2">Bis zur Compliance</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-[#00A5FF]">100%</div>
              <div class="text-gray-600 mt-2">Automatisiert</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-[#00A5FF]">50%</div>
              <div class="text-gray-600 mt-2">Kostenersparnis</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-[#00A5FF]">24/7</div>
              <div class="text-gray-600 mt-2">KI-Support</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-[#0B1D2A] mb-8">
              Was ist ${title}?
            </h2>
            <div class="prose prose-lg max-w-none text-gray-600">
              <p class="mb-6">
                ${description} Mit Marsstein erreichen Sie vollständige Compliance in Rekordzeit - 
                automatisiert, rechtssicher und ohne teure Berater.
              </p>
              
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mt-8 mb-4">
                Wichtige Anforderungen
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Dokumentierte Prozesse und Richtlinien</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Regelmäßige Audits und Überprüfungen</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Risikomanagement und Notfallpläne</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Schulung und Sensibilisierung der Mitarbeiter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Steps -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-[#0B1D2A] text-center mb-12">
              Ihr Weg zur ${standard || 'Compliance'} in 4 Schritten
            </h2>
            
            <div class="space-y-8">
              <div class="flex gap-6 items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Gap-Analyse</h3>
                  <p class="text-gray-600">
                    Unsere KI analysiert Ihre aktuelle Situation und identifiziert Lücken zur vollständigen Compliance.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-6 items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Dokumentation</h3>
                  <p class="text-gray-600">
                    Automatische Erstellung aller erforderlichen Dokumente, Richtlinien und Prozessbeschreibungen.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-6 items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Implementierung</h3>
                  <p class="text-gray-600">
                    Schritt-für-Schritt-Anleitung zur Umsetzung mit kontinuierlicher KI-Unterstützung.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-6 items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF] rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Zertifizierung</h3>
                  <p class="text-gray-600">
                    Vorbereitung auf das Audit und Begleitung bis zur erfolgreichen Zertifizierung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-[#0B1D2A] text-center mb-12">
              Ihre Vorteile mit Marsstein
            </h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="w-14 h-14 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Zeit sparen</h3>
                <p class="text-gray-600">
                  Was normalerweise Monate dauert, schaffen Sie mit uns in 30 Tagen.
                </p>
              </div>
              
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="w-14 h-14 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Kosten senken</h3>
                <p class="text-gray-600">
                  Bis zu 70% günstiger als traditionelle Beratungsunternehmen.
                </p>
              </div>
              
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="w-14 h-14 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Rechtssicher</h3>
                <p class="text-gray-600">
                  Immer auf dem neuesten Stand der Gesetzgebung und Best Practices.
                </p>
              </div>
              
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="w-14 h-14 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">KI-gestützt</h3>
                <p class="text-gray-600">
                  Modernste KI analysiert und optimiert Ihre Compliance-Prozesse.
                </p>
              </div>
              
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="w-14 h-14 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Expertenbetreuung</h3>
                <p class="text-gray-600">
                  Persönliche Betreuung durch zertifizierte Compliance-Experten.
                </p>
              </div>
              
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="w-14 h-14 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Kontinuierlich</h3>
                <p class="text-gray-600">
                  Automatische Updates bei Gesetzesänderungen und neuen Anforderungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Starten Sie jetzt Ihre ${standard || 'Compliance'}-Journey
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            In 30 Tagen zur vollständigen Compliance. KI-gestützt, rechtssicher und kosteneffizient.
          </p>
          <div class="flex gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0B1D2A] bg-white rounded-lg hover:bg-gray-100 transition-all shadow-lg">
              Kostenlose Erstberatung
            </a>
            <a href="/assessment-center" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#0B1D2A] transition-all">
              Self-Assessment starten
            </a>
          </div>
        </div>
      </section>
    </main>
  `,
};

/**
 * Extrahiert Content aus React-Komponente
 */
async function extractReactContent(componentPath) {
  if (!fs.existsSync(componentPath)) {
    console.log(`   ⚠️  Komponente nicht gefunden: ${componentPath}`);
    return null;
  }
  
  try {
    const content = fs.readFileSync(componentPath, 'utf8');
    
    // Extrahiere SEOHead für Title und Description
    const titleMatch = content.match(/title=["']([^"']+)["']/);
    const descMatch = content.match(/description=["']([^"']+)["']/);
    
    const title = titleMatch ? titleMatch[1] : null;
    const description = descMatch ? descMatch[1] : null;
    
    // Versuche HTML aus return statement zu extrahieren
    const returnMatch = content.match(/return\s*\(([\s\S]*?)\);?\s*}/m);
    let htmlContent = null;
    
    if (returnMatch) {
      htmlContent = returnMatch[1]
        .replace(/className=/g, 'class=')
        .replace(/\{[^}]+\}/g, '') // Entferne JavaScript expressions
        .replace(/<SEOHead[^>]*\/>/g, '') // Entferne SEOHead
        .replace(/<Link/g, '<a')
        .replace(/<\/Link>/g, '</a>')
        .replace(/to=/g, 'href=')
        .trim();
    }
    
    return { title, description, content: htmlContent };
  } catch (error) {
    console.log(`   ⚠️  Fehler beim Parsen: ${error.message}`);
    return null;
  }
}

/**
 * Generiert Content basierend auf Route und Typ
 */
async function generateEnhancedContent(route, config) {
  const { title, description, sourceFile } = config;
  
  // Versuche React-Komponente zu finden
  const componentPath = ROUTE_TO_COMPONENT_MAP[route] || sourceFile;
  
  if (componentPath && fs.existsSync(componentPath)) {
    const extracted = await extractReactContent(componentPath);
    if (extracted && extracted.content) {
      console.log(`   ✅ React-Content extrahiert`);
      return {
        title: extracted.title || title,
        description: extracted.description || description,
        content: extracted.content
      };
    }
  }
  
  // Fallback zu spezifischen Templates basierend auf Route-Typ
  let template = null;
  
  if (route.includes('/tools')) {
    template = CONTENT_TEMPLATES.tools(title, description);
  } else if (route.includes('/compliance') || route.includes('/dsgvo') || route.includes('/nis2') || 
             route.includes('/iso-') || route.includes('/soc') || route.includes('/tisax')) {
    const standard = title.split(' ')[0]; // Extrahiere Standard-Name
    template = CONTENT_TEMPLATES.compliance(title, description, standard);
  }
  
  if (template) {
    console.log(`   ✅ Spezifisches Template verwendet`);
    return { title, description, content: template };
  }
  
  // Generisches Template als letzter Fallback
  console.log(`   ⚠️  Generisches Template verwendet`);
  return {
    title,
    description,
    content: generateGenericTemplate(title, description)
  };
}

/**
 * Generisches Template
 */
function generateGenericTemplate(title, description) {
  return `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
        <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div class="flex gap-4 justify-center">
              <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
                Jetzt starten
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

/**
 * Generiert Module für alle Seiten
 */
async function generateAllModules() {
  console.log('🚀 Starte Enhanced Page Generation...\n');
  
  // Lade pages-config.json
  const pagesConfig = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'pages-config.json'), 'utf8')
  );
  
  let totalGenerated = 0;
  let totalWithContent = 0;
  
  // Verarbeite alle Kategorien
  for (const [category, pages] of Object.entries(pagesConfig)) {
    console.log(`\n📁 Kategorie: ${category}`);
    console.log('='.repeat(50));
    
    const categoryDir = path.join(__dirname, 'scripts/content', category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }
    
    const moduleNames = [];
    
    for (const [key, config] of Object.entries(pages)) {
      const { route, title, description } = config;
      console.log(`📄 Generiere: ${route}`);
      
      // Generiere enhanced content
      const pageContent = await generateEnhancedContent(route, config);
      
      // Erstelle Modul
      const moduleContent = `export default {
  route: '${route}',
  title: '${pageContent.title}',
  description: '${pageContent.description}',
  content: \`${pageContent.content.replace(/`/g, '\\`')}\`
};`;
      
      // Schreibe Datei
      const fileName = key.replace(/-/g, '_') + '.mjs';
      const filePath = path.join(categoryDir, fileName);
      fs.writeFileSync(filePath, moduleContent);
      
      moduleNames.push(key);
      totalGenerated++;
      if (pageContent.content && !pageContent.content.includes('Ihre Compliance-Lösung mit KI')) {
        totalWithContent++;
      }
    }
    
    // Erstelle Index für Kategorie
    if (moduleNames.length > 0) {
      const imports = moduleNames.map(name => 
        `import ${name.replace(/-/g, '_')} from './${name.replace(/-/g, '_')}.mjs';`
      ).join('\n');
      
      const exports = moduleNames.map(name => 
        `  '${name}': ${name.replace(/-/g, '_')}`
      ).join(',\n');
      
      const indexContent = `${imports}

export default {
${exports}
};`;
      
      fs.writeFileSync(path.join(categoryDir, 'index.mjs'), indexContent);
      console.log(`📚 Index erstellt für ${category}`);
    }
  }
  
  // Zusammenfassung
  console.log('\n' + '='.repeat(50));
  console.log('✨ Generation abgeschlossen!\n');
  console.log(`📊 Statistik:`);
  console.log(`   Gesamt: ${totalGenerated} Module`);
  console.log(`   Mit spezifischem Content: ${totalWithContent}`);
  
  // Build ausführen
  console.log('\n🔨 Führe Build aus...');
  try {
    execSync('npm run build:modular', { stdio: 'inherit' });
    console.log('✅ Build erfolgreich!');
  } catch (error) {
    console.error('❌ Build fehlgeschlagen:', error.message);
  }
}

// Hauptfunktion
if (import.meta.url === `file://${process.argv[1]}`) {
  generateAllModules().catch(console.error);
}