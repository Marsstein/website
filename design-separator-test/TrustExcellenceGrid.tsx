import React from 'react';
import { Star, Trophy, Target, Zap, Shield, Globe, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';

export const TrustExcellenceGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Geometric Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <pattern id="excellenceGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="none" stroke="#f97316" strokeWidth="0.5" opacity="0.2"/>
              <circle cx="50" cy="50" r="2" fill="#f97316" opacity="0.3"/>
            </pattern>
            <radialGradient id="excellenceGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
            </radialGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#excellenceGrid)"/>
          
          {/* Excellence Nodes */}
          <g>
            <circle cx="200" cy="200" r="30" fill="url(#excellenceGlow)" className="animate-pulse"/>
            <circle cx="600" cy="200" r="40" fill="url(#excellenceGlow)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
            <circle cx="1000" cy="200" r="25" fill="url(#excellenceGlow)" className="animate-pulse" style={{animationDelay: '1s'}}/>
            <circle cx="400" cy="500" r="35" fill="url(#excellenceGlow)" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
            <circle cx="800" cy="500" r="30" fill="url(#excellenceGlow)" className="animate-pulse" style={{animationDelay: '2s'}}/>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <Trophy className="h-8 w-8 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trust Excellence Grid
            <span className="block text-orange-600 text-lg font-normal mt-2">
              Exzellenz in jeder Dimension
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unsere Excellence Grid vereint alle Aspekte vertrauensvoller Compliance: 
            Von Sicherheit und Performance bis hin zu Innovation und Kundenzufriedenheit.
          </p>
        </div>

        {/* Excellence Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">98.7%</div>
              <div className="text-sm text-gray-600">Compliance Score</div>
              <div className="text-xs text-green-600 mt-1">+12.3% ↗</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">89.0%</div>
              <div className="text-sm text-gray-600">Automatisierung</div>
              <div className="text-xs text-green-600 mt-1">+45.2% ↗</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">2.4K</div>
              <div className="text-sm text-gray-600">Active Users</div>
              <div className="text-xs text-green-600 mt-1">+23.1% ↗</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">127h</div>
              <div className="text-sm text-gray-600">Zeit Ersparnis</div>
              <div className="text-xs text-green-600 mt-1">+67.8% ↗</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">99.99%</div>
              <div className="text-sm text-gray-600">Uptime</div>
              <div className="text-xs text-green-600 mt-1">SLA ✓</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">1.2M+</div>
              <div className="text-sm text-gray-600">Threats Blocked</div>
              <div className="text-xs text-green-600 mt-1">Täglich</div>
            </div>
          </div>
        </div>

        {/* Excellence Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Trophy className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Enterprise-Grade Sicherheit</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Ihre Daten sind bei uns in sicheren Händen. Mit höchsten Sicherheitsstandards und 
              europäischen Rechenzentren gewährleisten wir maximalen Schutz.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>End-to-End Verschlüsselung</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>EU-Infrastruktur</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>24/7 Security Monitoring</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">KI-gestützte Automatisierung</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Intelligente Workflows reduzieren manuelle Arbeit um bis zu 85%. 
              Unsere KI lernt kontinuierlich und optimiert Ihre Compliance-Prozesse.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Intelligente Workflows</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Predictive Analytics</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Continuous Learning</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Multi-Framework Support</h3>
            </div>
            <p className="text-gray-600 mb-6">
              DSGVO, ISO 27001, SOC 2, TISAX und weitere Standards in einer einheitlichen Plattform. 
              Alles nahtlos integriert und zentral verwaltbar.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>DSGVO & EU-AI Act</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>ISO 27001/27017/27018</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>SOC 2 & TISAX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Excellence Certifications */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Excellence Zertifizierungen</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-200 rounded-xl flex flex-col items-center justify-center mx-auto mb-4 group-hover:border-orange-400 transition-all duration-300 group-hover:scale-105">
                <Award className="h-8 w-8 text-orange-600 mb-1" />
                <div className="text-xs font-bold text-orange-600">ISO</div>
              </div>
              <div className="font-semibold text-gray-900">ISO 27001</div>
              <div className="text-sm text-green-600 flex items-center justify-center mt-1">
                <Star className="h-3 w-3 mr-1" />
                Zertifiziert
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-200 rounded-xl flex flex-col items-center justify-center mx-auto mb-4 group-hover:border-orange-400 transition-all duration-300 group-hover:scale-105">
                <Shield className="h-8 w-8 text-orange-600 mb-1" />
                <div className="text-xs font-bold text-orange-600">SOC 2</div>
              </div>
              <div className="font-semibold text-gray-900">SOC 2 Type II</div>
              <div className="text-sm text-green-600 flex items-center justify-center mt-1">
                <Star className="h-3 w-3 mr-1" />
                Zertifiziert
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-200 rounded-xl flex flex-col items-center justify-center mx-auto mb-4 group-hover:border-orange-400 transition-all duration-300 group-hover:scale-105">
                <Users className="h-8 w-8 text-orange-600 mb-1" />
                <div className="text-xs font-bold text-orange-600">DSGVO</div>
              </div>
              <div className="font-semibold text-gray-900">EU-DSGVO</div>
              <div className="text-sm text-green-600 flex items-center justify-center mt-1">
                <Star className="h-3 w-3 mr-1" />
                Konform
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-200 rounded-xl flex flex-col items-center justify-center mx-auto mb-4 group-hover:border-orange-400 transition-all duration-300 group-hover:scale-105">
                <Target className="h-8 w-8 text-orange-600 mb-1" />
                <div className="text-xs font-bold text-orange-600">TISAX</div>
              </div>
              <div className="font-semibold text-gray-900">TISAX AL3</div>
              <div className="text-sm text-yellow-600 flex items-center justify-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                In Arbeit
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statement with Customer Count */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ihre Compliance-Plattform</h3>
          <p className="text-xl opacity-90 mb-6">Werden Sie Teil der Compliance-Revolution</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">Enterprise-Grade Sicherheit</div>
              <p className="text-sm opacity-80">Höchste Sicherheitsstandards für maximalen Schutz</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">Europäische Datensicherheit</div>
              <p className="text-sm opacity-80">DSGVO-konforme Datenverarbeitung in EU-Rechenzentren</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">Vertrauen durch Transparenz</div>
              <p className="text-sm opacity-80">Vollständige Transparenz und Open Source Audits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};