import React from 'react';
import { Shield, CheckCircle, Lock, Eye, Server, Users } from 'lucide-react';

export const TrustChain: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Chain Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          
          {/* Chain Links */}
          <g stroke="url(#chainGradient)" strokeWidth="3" fill="none">
            <ellipse cx="200" cy="200" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '0s'}}/>
            <ellipse cx="280" cy="200" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
            <ellipse cx="360" cy="200" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
            <ellipse cx="440" cy="200" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
            <ellipse cx="520" cy="200" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
            
            <ellipse cx="240" cy="300" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
            <ellipse cx="320" cy="300" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
            <ellipse cx="400" cy="300" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
            <ellipse cx="480" cy="300" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '1.1s'}}/>
            
            <ellipse cx="800" cy="400" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
            <ellipse cx="880" cy="400" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '0.7s'}}/>
            <ellipse cx="960" cy="400" rx="40" ry="20" className="animate-pulse" style={{animationDelay: '1.0s'}}/>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trust Chain
            <span className="block text-blue-600 text-lg font-normal mt-2">
              Vertrauen durch lückenlose Transparenz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jedes Element unserer Compliance-Kette ist verifiziert und dokumentiert. 
            Von der Datenerfassung bis zur Berichterstattung - vollständige Rückverfolgbarkeit.
          </p>
        </div>

        {/* Trust Chain Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">EU-DSGVO</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-sm text-gray-600">EU Rechenzentren</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Monitoring</div>
          </div>
        </div>

        {/* Trust Chain Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-End Verschlüsselung</h3>
            <p className="text-gray-600 mb-6">
              AES-256 Verschlüsselung für alle Daten im Transit und at Rest mit Hardware Security Modules.
            </p>
            <div className="flex items-center text-sm text-blue-600">
              <CheckCircle className="h-4 w-4 mr-2" />
              Verifiziert durch ISO 27001
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Server className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">EU-Infrastruktur</h3>
            <p className="text-gray-600 mb-6">
              Ausschließlich europäische Rechenzentren mit DSGVO-konformer Datenverarbeitung.
            </p>
            <div className="flex items-center text-sm text-blue-600">
              <CheckCircle className="h-4 w-4 mr-2" />
              DSGVO-zertifiziert
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Security Monitoring</h3>
            <p className="text-gray-600 mb-6">
              Kontinuierliche Überwachung mit KI-gestützter Anomalieerkennung und Incident Response.
            </p>
            <div className="flex items-center text-sm text-blue-600">
              <CheckCircle className="h-4 w-4 mr-2" />
              SOC 2 Type II konform
            </div>
          </div>
        </div>

        {/* Chain Certifications */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Zertifizierungen & Standards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">ISO 27001</div>
              <div className="text-sm text-green-600">Zertifiziert</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">SOC 2 Type II</div>
              <div className="text-sm text-green-600">Zertifiziert</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">DSGVO</div>
              <div className="text-sm text-green-600">Konform</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">TISAX</div>
              <div className="text-sm text-yellow-600">In Arbeit</div>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Vertrauen durch Transparenz</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bei Marsstein setzen wir auf höchste Sicherheitsstandards und vollständige Transparenz. 
            Ihre Daten bleiben in Europa, sind verschlüsselt und werden niemals für andere Zwecke verwendet.
          </p>
        </div>
      </div>
    </section>
  );
};