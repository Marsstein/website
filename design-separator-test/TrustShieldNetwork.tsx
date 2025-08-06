import React from 'react';
import { Shield, Zap, Globe, Lock, Activity, CheckCircle2 } from 'lucide-react';

export const TrustShieldNetwork: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Shield Network Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
              <stop offset="70%" stopColor="#059669" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#047857" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="networkLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0"/>
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          {/* Network Connections */}
          <g stroke="url(#networkLine)" strokeWidth="2" fill="none">
            <path d="M200,200 L400,150 L600,200 L800,150" className="animate-pulse"/>
            <path d="M300,300 L500,250 L700,300 L900,250" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
            <path d="M150,400 L350,350 L550,400 L750,350" className="animate-pulse" style={{animationDelay: '1s'}}/>
            <path d="M250,500 L450,450 L650,500 L850,450" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
          </g>
          
          {/* Shield Nodes */}
          <g>
            <circle cx="200" cy="200" r="30" fill="url(#shieldGlow)" className="animate-ping"/>
            <circle cx="600" cy="200" r="35" fill="url(#shieldGlow)" className="animate-ping" style={{animationDelay: '0.8s'}}/>
            <circle cx="1000" cy="200" r="25" fill="url(#shieldGlow)" className="animate-ping" style={{animationDelay: '1.6s'}}/>
            <circle cx="400" cy="400" r="40" fill="url(#shieldGlow)" className="animate-ping" style={{animationDelay: '0.4s'}}/>
            <circle cx="800" cy="400" r="30" fill="url(#shieldGlow)" className="animate-ping" style={{animationDelay: '1.2s'}}/>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <Shield className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trust Shield Network
            <span className="block text-emerald-600 text-lg font-normal mt-2">
              Mehrschichtiger Schutz durch intelligente Vernetzung
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser Trust Shield Network bildet ein undurchdringliches Sicherheitsnetz aus 
            vernetzten Schutzschichten, KI-gestützter Überwachung und proaktiver Bedrohungserkennung.
          </p>
        </div>

        {/* Live Security Dashboard */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-emerald-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Security Dashboard</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">99.99%</div>
              <div className="text-sm text-gray-600">Uptime</div>
              <div className="w-full bg-emerald-100 rounded-full h-2 mt-2">
                <div className="bg-emerald-600 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">1.2M+</div>
              <div className="text-sm text-gray-600">Threats Blocked</div>
              <div className="w-full bg-emerald-100 rounded-full h-2 mt-2">
                <div className="bg-emerald-600 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">5 EU</div>
              <div className="text-sm text-gray-600">Data Centers</div>
              <div className="w-full bg-emerald-100 rounded-full h-2 mt-2">
                <div className="bg-emerald-600 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Compliance Score</div>
              <div className="w-full bg-emerald-100 rounded-full h-2 mt-2">
                <div className="bg-emerald-600 h-2 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-emerald-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">End-to-End Verschlüsselung</h4>
            <p className="text-sm text-gray-600">AES-256 Verschlüsselung für alle Daten im Transit und at Rest mit HSM.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-emerald-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">EU-Infrastruktur</h4>
            <p className="text-sm text-gray-600">Ausschließlich europäische Rechenzentren mit DSGVO-konformer Verarbeitung.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-emerald-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">24/7 Security Monitoring</h4>
            <p className="text-sm text-gray-600">KI-gestützte Anomalieerkennung und automatisierte Incident Response.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-emerald-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Zero-Trust Architektur</h4>
            <p className="text-sm text-gray-600">Multi-Faktor-Authentifizierung und rollenbasierte Zugriffskontrolle.</p>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Zertifizierungen & Standards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex flex-col items-center justify-center mx-auto mb-4 group-hover:border-emerald-400 transition-colors">
                <div className="text-xs font-semibold text-emerald-600">ISO</div>
                <div className="text-lg font-bold text-emerald-600">27001</div>
              </div>
              <div className="font-semibold text-gray-900">Zertifiziert</div>
              <div className="text-sm text-emerald-600 flex items-center justify-center mt-1">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Enterprise
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex flex-col items-center justify-center mx-auto mb-4 group-hover:border-emerald-400 transition-colors">
                <div className="text-xs font-semibold text-emerald-600">SOC 2</div>
                <div className="text-lg font-bold text-emerald-600">Type II</div>
              </div>
              <div className="font-semibold text-gray-900">Zertifiziert</div>
              <div className="text-sm text-emerald-600 flex items-center justify-center mt-1">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Type II
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex flex-col items-center justify-center mx-auto mb-4 group-hover:border-emerald-400 transition-colors">
                <div className="text-xs font-semibold text-emerald-600">DSGVO</div>
                <div className="text-lg font-bold text-emerald-600">EU</div>
              </div>
              <div className="font-semibold text-gray-900">Konform</div>
              <div className="text-sm text-emerald-600 flex items-center justify-center mt-1">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                EU-Weit
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex flex-col items-center justify-center mx-auto mb-4 group-hover:border-emerald-400 transition-colors">
                <div className="text-xs font-semibold text-emerald-600">TISAX</div>
                <div className="text-lg font-bold text-emerald-600">AL3</div>
              </div>
              <div className="font-semibold text-gray-900">In Arbeit</div>
              <div className="text-sm text-yellow-600 flex items-center justify-center mt-1">
                <Activity className="h-3 w-3 mr-1 animate-pulse" />
                Zertifizierung
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Vertrauen durch Transparenz</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
            Bei Marsstein setzen wir auf höchste Sicherheitsstandards und vollständige Transparenz. 
            Ihre Daten bleiben in Europa, sind verschlüsselt und werden niemals für andere Zwecke verwendet.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              EU-DSGVO konform
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Open Source Audit
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Penetration Tests
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};