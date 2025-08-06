import React from 'react';
import { Lightbulb, Cpu, Rocket, Brain, Network, Eye, CheckCircle2, Sparkles, Zap, Globe } from 'lucide-react';

export const TrustInnovationHub: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-violet-50 relative overflow-hidden">
      {/* Innovation Neural Network Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <radialGradient id="innovationNode" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
              <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="innovationFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          
          {/* Innovation Network Lines */}
          <g stroke="url(#innovationFlow)" strokeWidth="2" fill="none" className="animate-pulse">
            <path d="M150,150 Q350,100 550,150 Q750,200 950,150"/>
            <path d="M200,250 Q400,200 600,250 Q800,300 1000,250" style={{animationDelay: '0.5s'}}/>
            <path d="M100,350 Q300,300 500,350 Q700,400 900,350" style={{animationDelay: '1s'}}/>
            <path d="M250,450 Q450,400 650,450 Q850,500 1050,450" style={{animationDelay: '1.5s'}}/>
            <path d="M180,550 Q380,500 580,550 Q780,600 980,550" style={{animationDelay: '2s'}}/>
          </g>
          
          {/* Innovation Nodes */}
          <g>
            <circle cx="200" cy="180" r="25" fill="url(#innovationNode)" className="animate-ping"/>
            <circle cx="500" cy="220" r="30" fill="url(#innovationNode)" className="animate-ping" style={{animationDelay: '0.7s'}}/>
            <circle cx="800" cy="180" r="20" fill="url(#innovationNode)" className="animate-ping" style={{animationDelay: '1.4s'}}/>
            <circle cx="350" cy="380" r="35" fill="url(#innovationNode)" className="animate-ping" style={{animationDelay: '0.3s'}}/>
            <circle cx="650" cy="380" r="25" fill="url(#innovationNode)" className="animate-ping" style={{animationDelay: '1.1s'}}/>
            <circle cx="450" cy="580" r="28" fill="url(#innovationNode)" className="animate-ping" style={{animationDelay: '1.8s'}}/>
          </g>
          
          {/* Data Particles */}
          <g>
            <circle cx="0" cy="180" r="3" fill="#06b6d4" className="animate-bounce">
              <animateMotion dur="6s" repeatCount="indefinite">
                <mpath href="#dataPath1"/>
              </animateMotion>
            </circle>
            <circle cx="0" cy="380" r="2" fill="#0ea5e9" className="animate-bounce" style={{animationDelay: '2s'}}>
              <animateMotion dur="8s" repeatCount="indefinite">
                <mpath href="#dataPath2"/>
              </animateMotion>
            </circle>
          </g>
          
          {/* Hidden paths for motion */}
          <defs>
            <path id="dataPath1" d="M150,150 Q350,100 550,150 Q750,200 950,150" fill="none"/>
            <path id="dataPath2" d="M100,350 Q300,300 500,350 Q700,400 900,350" fill="none"/>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6">
            <Lightbulb className="h-8 w-8 text-cyan-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trust Innovation Hub
            <span className="block text-cyan-600 text-lg font-normal mt-2">
              Zukunftsweisende Compliance-Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser Innovation Hub vereint modernste KI-Technologien, neueste Compliance-Standards 
            und innovative Sicherheitslösungen zu einer revolutionären Plattform der Zukunft.
          </p>
        </div>

        {/* Innovation Dashboard */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-cyan-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Innovation Dashboard</h3>
            <p className="text-gray-600">Compliance in Echtzeit verfolgen</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 hover:border-cyan-400 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-cyan-600" />
                </div>
                <div className="text-xs text-green-600 font-semibold">+12.3%</div>
              </div>
              <div className="text-2xl font-bold text-cyan-600 mb-1">98.7%</div>
              <div className="text-sm text-gray-600">Compliance Score</div>
              <div className="w-full bg-cyan-100 rounded-full h-2 mt-3">
                <div className="bg-cyan-500 h-2 rounded-full w-[98.7%] transition-all duration-1000"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 hover:border-cyan-400 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-cyan-600" />
                </div>
                <div className="text-xs text-green-600 font-semibold">+45.2%</div>
              </div>
              <div className="text-2xl font-bold text-cyan-600 mb-1">89.0%</div>
              <div className="text-sm text-gray-600">Automatisierung</div>
              <div className="w-full bg-cyan-100 rounded-full h-2 mt-3">
                <div className="bg-cyan-500 h-2 rounded-full w-[89%] transition-all duration-1000"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 hover:border-cyan-400 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-5 w-5 text-cyan-600" />
                </div>
                <div className="text-xs text-green-600 font-semibold">+23.1%</div>
              </div>
              <div className="text-2xl font-bold text-cyan-600 mb-1">3.2K</div>
              <div className="text-sm text-gray-600">Active Users</div>
              <div className="w-full bg-cyan-100 rounded-full h-2 mt-3">
                <div className="bg-cyan-500 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 hover:border-cyan-400 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-cyan-600" />
                </div>
                <div className="text-xs text-green-600 font-semibold">+67.8%</div>
              </div>
              <div className="text-2xl font-bold text-cyan-600 mb-1">127h</div>
              <div className="text-sm text-gray-600">Zeit Ersparnis</div>
              <div className="w-full bg-cyan-100 rounded-full h-2 mt-3">
                <div className="bg-cyan-500 h-2 rounded-full w-5/6 transition-all duration-1000"></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Live Demo ansehen
            </button>
          </div>
        </div>

        {/* Innovation Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">KI-gestützte Automatisierung</h3>
            <p className="text-gray-600 mb-6">
              Intelligente Workflows reduzieren manuelle Arbeit um bis zu 85%. 
              Unsere Advanced AI lernt kontinuierlich und optimiert automatisch.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Machine Learning Algorithms</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Predictive Compliance Analytics</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Natural Language Processing</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Network className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Echtzeit-Monitoring</h3>
            <p className="text-gray-600 mb-6">
              24/7 Überwachung mit sofortigen Benachrichtigungen bei Anomalien. 
              Proaktive Bedrohungserkennung durch fortschrittliche KI-Systeme.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Real-time Threat Detection</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Automated Incident Response</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Behavioral Analytics</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Framework Support</h3>
            <p className="text-gray-600 mb-6">
              DSGVO, ISO 27001, SOC 2, TISAX und weitere in einer Plattform. 
              Zukunftssicher durch kontinuierliche Innovation und Updates.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>EU AI Act Ready</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>ISO 27001/27017/27018</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                <span>Next-Gen Compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Innovation */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-cyan-200 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Sicherheit & Vertrauen</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">99.99%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">1.2M+</div>
              <div className="text-sm text-gray-600">Threats Blocked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">5 EU</div>
              <div className="text-sm text-gray-600">Data Centers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Compliance Score</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-b from-cyan-50 to-white rounded-xl border border-cyan-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="font-semibold text-sm">End-to-End Verschlüsselung</div>
              <div className="text-xs text-gray-600 mt-1">AES-256 with HSM</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-cyan-50 to-white rounded-xl border border-cyan-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="font-semibold text-sm">EU-Infrastruktur</div>
              <div className="text-xs text-gray-600 mt-1">DSGVO-konform</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-cyan-50 to-white rounded-xl border border-cyan-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="font-semibold text-sm">24/7 Security Monitoring</div>
              <div className="text-xs text-gray-600 mt-1">KI-gestützt</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-cyan-50 to-white rounded-xl border border-cyan-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="font-semibold text-sm">Zero-Trust Architektur</div>
              <div className="text-xs text-gray-600 mt-1">Multi-Faktor Auth</div>
            </div>
          </div>
        </div>

        {/* Innovation Trust Statement */}
        <div className="text-center bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Über 500 Unternehmen vertrauen uns</h3>
          <p className="text-xl opacity-90 mb-6">Werden Sie Teil der Compliance-Revolution</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm mb-6">
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Europäische Datensicherheit
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              DSGVO-konforme Datenverarbeitung
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Europäische Rechenzentren
            </div>
          </div>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Bei Marsstein setzen wir auf höchste Sicherheitsstandards und vollständige Transparenz. 
            Ihre Daten bleiben in Europa, sind verschlüsselt und werden niemals für andere Zwecke verwendet.
          </p>
        </div>
      </div>
    </section>
  );
};