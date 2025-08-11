import React from 'react';
import { CheckCircle, ArrowRight, Shield, Clock, Users, Award, Zap, FileCheck } from 'lucide-react';

export const TrustVerificationFlow: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 relative overflow-hidden">
      {/* Animated Flow Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
            </radialGradient>
          </defs>
          
          {/* Flow Lines */}
          <g stroke="url(#flowGradient)" strokeWidth="3" fill="none">
            <path d="M100,300 Q300,250 500,300 Q700,350 900,300 Q1000,280 1100,300" className="animate-pulse"/>
            <path d="M150,400 Q350,350 550,400 Q750,450 950,400" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
            <path d="M200,500 Q400,450 600,500 Q800,550 1000,500" className="animate-pulse" style={{animationDelay: '1s'}}/>
          </g>
          
          {/* Flow Nodes */}
          <g>
            <circle cx="200" cy="300" r="20" fill="url(#nodeGlow)" className="animate-ping"/>
            <circle cx="400" cy="300" r="25" fill="url(#nodeGlow)" className="animate-ping" style={{animationDelay: '0.3s'}}/>
            <circle cx="600" cy="300" r="20" fill="url(#nodeGlow)" className="animate-ping" style={{animationDelay: '0.6s'}}/>
            <circle cx="800" cy="300" r="25" fill="url(#nodeGlow)" className="animate-ping" style={{animationDelay: '0.9s'}}/>
            <circle cx="1000" cy="300" r="20" fill="url(#nodeGlow)" className="animate-ping" style={{animationDelay: '1.2s'}}/>
          </g>
          
          {/* Moving Verification Particles */}
          <g>
            <circle cx="0" cy="300" r="4" fill="#8b5cf6" className="animate-bounce">
              <animateMotion dur="8s" repeatCount="indefinite">
                <mpath href="#flowPath"/>
              </animateMotion>
            </circle>
            <circle cx="0" cy="400" r="3" fill="#6366f1" className="animate-bounce" style={{animationDelay: '2s'}}>
              <animateMotion dur="6s" repeatCount="indefinite">
                <mpath href="#flowPath2"/>
              </animateMotion>
            </circle>
          </g>
          
          {/* Hidden paths for motion */}
          <defs>
            <path id="flowPath" d="M100,300 Q300,250 500,300 Q700,350 900,300 Q1000,280 1100,300" fill="none"/>
            <path id="flowPath2" d="M150,400 Q350,350 550,400 Q750,450 950,400" fill="none"/>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <CheckCircle className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trust Verification Flow
            <span className="block text-purple-600 text-lg font-normal mt-2">
              Kontinuierliche Verifikation in Echtzeit
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser intelligenter Verifikationsflow überwacht, validiert und dokumentiert jeden Schritt 
            Ihrer Compliance-Journey. Transparenz und Vertrauen durch kontinuierliche Überprüfung.
          </p>
        </div>

        {/* Verification Flow Steps */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Datenerfassung</h4>
            <p className="text-sm text-gray-600">Sichere und DSGVO-konforme Datensammlung</p>
            <div className="hidden md:block absolute top-8 left-full w-6 h-0.5 bg-purple-300 transform translate-x-4"></div>
          </div>

          <div className="text-center group relative">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Automatisierung</h4>
            <p className="text-sm text-gray-600">KI-gestützte Workflow-Automatisierung</p>
            <div className="hidden md:block absolute top-8 left-full w-6 h-0.5 bg-purple-300 transform translate-x-4"></div>
          </div>

          <div className="text-center group relative">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
            <p className="text-sm text-gray-600">24/7 Echtzeit-Überwachung aller Prozesse</p>
            <div className="hidden md:block absolute top-8 left-full w-6 h-0.5 bg-purple-300 transform translate-x-4"></div>
          </div>

          <div className="text-center group relative">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <FileCheck className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Verifikation</h4>
            <p className="text-sm text-gray-600">Kontinuierliche Compliance-Validierung</p>
            <div className="hidden md:block absolute top-8 left-full w-6 h-0.5 bg-purple-300 transform translate-x-4"></div>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Zertifizierung</h4>
            <p className="text-sm text-gray-600">Automatisierte Compliance-Berichte</p>
          </div>
        </div>

        {/* Live Verification Dashboard */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-purple-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Live Verification Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Compliance in Echtzeit verfolgen</h4>
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Behalten Sie den Überblick über alle Compliance-Metriken mit unserem interaktiven Dashboard und KI-gestützten Insights.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-purple-600">98.7%</div>
                  <div className="text-sm text-gray-600">Compliance Score</div>
                  <div className="text-xs text-green-600">+12.3%</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">89.0%</div>
                  <div className="text-sm text-gray-600">Automatisierung</div>
                  <div className="text-xs text-green-600">+45.2%</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">KI-gestützte Automatisierung</h4>
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Intelligente Workflows reduzieren manuelle Arbeit um bis zu 85%
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-purple-600">0.0K</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                  <div className="text-xs text-green-600">+23.1%</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">127h</div>
                  <div className="text-sm text-gray-600">Zeit Ersparnis</div>
                  <div className="text-xs text-green-600">+67.8%</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Echtzeit-Monitoring</h4>
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 mb-6">
                24/7 Überwachung mit sofortigen Benachrichtigungen bei Anomalien
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>DSGVO</span>
                  <span className="text-green-600">✓ Aktiv</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>ISO 27001</span>
                  <span className="text-green-600">✓ Aktiv</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>SOC 2</span>
                  <span className="text-green-600">✓ Aktiv</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Framework Support */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-purple-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Multi-Framework Support</h3>
          <p className="text-center text-gray-600 mb-8">DSGVO, ISO 27001, SOC 2, TISAX und weitere in einer Plattform</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-white rounded-xl border border-purple-100 hover:border-purple-300 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <div className="font-semibold text-sm">DSGVO</div>
              <div className="text-xs text-green-600">Konform</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-white rounded-xl border border-purple-100 hover:border-purple-300 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="font-semibold text-sm">ISO 27001</div>
              <div className="text-xs text-green-600">Zertifiziert</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-white rounded-xl border border-purple-100 hover:border-purple-300 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileCheck className="h-6 w-6 text-purple-600" />
              </div>
              <div className="font-semibold text-sm">SOC 2</div>
              <div className="text-xs text-green-600">Type II</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-white rounded-xl border border-purple-100 hover:border-purple-300 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="font-semibold text-sm">TISAX</div>
              <div className="text-xs text-yellow-600">In Arbeit</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-white rounded-xl border border-purple-100 hover:border-purple-300 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="font-semibold text-sm">NIS2</div>
              <div className="text-xs text-blue-600">Vorbereitung</div>
            </div>
          </div>
        </div>

        {/* Über 500 Unternehmen vertrauen uns */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Compliance-Lösungen für Unternehmen</h3>
          <p className="text-lg opacity-90 mb-6">Werden Sie Teil der Compliance-Revolution</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Europäische Datensicherheit
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              DSGVO-konforme Datenverarbeitung
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Europäische Rechenzentren
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};