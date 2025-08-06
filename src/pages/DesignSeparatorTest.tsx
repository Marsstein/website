import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { TrustSeparator1 } from '../../design-separator-test/TrustSeparator1';
import { TrustSeparator2 } from '../../design-separator-test/TrustSeparator2';
import { TrustSeparator3 } from '../../design-separator-test/TrustSeparator3';
import { TrustSeparator4 } from '../../design-separator-test/TrustSeparator4';
import { TrustSeparator5 } from '../../design-separator-test/TrustSeparator5';

const separatorVariations = [
  { id: 'trust-chain', name: 'Trust Chain', component: TrustSeparator1, description: 'Animierte Vertrauenskette mit blauen Chain-Links' },
  { id: 'shield-network', name: 'Shield Network', component: TrustSeparator2, description: 'Grünes Sicherheitsnetzwerk mit Shield-Symbolen' },
  { id: 'verification-flow', name: 'Verification Flow', component: TrustSeparator3, description: 'Lila Verifikationsflow mit beweglichen Checkpoints' },
  { id: 'excellence-grid', name: 'Excellence Grid', component: TrustSeparator4, description: 'Orange Excellence-Raster mit Stern-Zentrum' },
  { id: 'neural-innovation', name: 'Neural Innovation', component: TrustSeparator5, description: 'Cyan Neural Network mit beweglichen Datenpulsen' },
];

const DesignSeparatorTest: React.FC = () => {
  const [selectedSeparator, setSelectedSeparator] = useState(separatorVariations[0].id);
  const selectedVariation = separatorVariations.find(d => d.id === selectedSeparator);
  const SelectedComponent = selectedVariation?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Design Selector */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 mb-4">
              🔗 Trust Separator Designs
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Trust Separator Variationen</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              5 ansprechende Separator-Designs für den Übergang vor dem "Sicherheit & Vertrauen" Abschnitt
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {separatorVariations.map((separator) => (
              <button
                key={separator.id}
                onClick={() => setSelectedSeparator(separator.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                  selectedSeparator === separator.id
                    ? 'bg-brand-red text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {separator.name}
              </button>
            ))}
          </div>
          
          {selectedVariation && (
            <div className="text-center">
              <p className="text-gray-600 font-medium">{selectedVariation.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Demo Section Before Separator */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Über 500 Unternehmen vertrauen uns</h2>
          <p className="text-xl text-gray-600 mb-8">Werden Sie Teil der Compliance-Revolution</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">98.7%</div>
              <div className="text-sm text-gray-600">Compliance Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">89.0%</div>
              <div className="text-sm text-gray-600">Automatisierung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">2.4K</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">127h</div>
              <div className="text-sm text-gray-600">Zeit Ersparnis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Separator Component */}
      <div className="relative">
        {SelectedComponent && <SelectedComponent />}
      </div>

      {/* Demo Section After Separator */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sicherheit & Vertrauen</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise-Grade Sicherheit</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Ihre Daten sind bei uns in sicheren Händen. Mit höchsten Sicherheitsstandards und 
              europäischen Rechenzentren gewährleisten wir maximalen Schutz.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">End-to-End Verschlüsselung</h4>
                <p className="text-sm text-gray-600">AES-256 Verschlüsselung für alle Daten</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">EU-Infrastruktur</h4>
                <p className="text-sm text-gray-600">DSGVO-konforme Datenverarbeitung</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">24/7 Security Monitoring</h4>
                <p className="text-sm text-gray-600">Kontinuierliche Überwachung</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Overview */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Alle Separator-Variationen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {separatorVariations.map((separator) => (
                <div
                  key={separator.id}
                  className={`p-6 rounded-xl border-2 transition-all cursor-pointer hover:shadow-lg transform hover:scale-105 ${
                    selectedSeparator === separator.id
                      ? 'border-brand-red bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                  onClick={() => setSelectedSeparator(separator.id)}
                >
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{separator.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{separator.description}</p>
                  
                  {/* Separator Features */}
                  <div className="space-y-2 text-xs text-gray-500">
                    {separator.id === 'trust-chain' && (
                      <>
                        <div>• Blaue Chain-Animation</div>
                        <div>• Trust-Shield im Zentrum</div>
                        <div>• Sanfte Pulsierung</div>
                      </>
                    )}
                    {separator.id === 'shield-network' && (
                      <>
                        <div>• Grünes Netzwerk-Design</div>
                        <div>• Vernetzte Shield-Punkte</div>
                        <div>• Sicherheits-Indikatoren</div>
                      </>
                    )}
                    {separator.id === 'verification-flow' && (
                      <>
                        <div>• Lila Verification-Badge</div>
                        <div>• Beweglicher Datenfluss</div>
                        <div>• Checkpoint-Animation</div>
                      </>
                    )}
                    {separator.id === 'excellence-grid' && (
                      <>
                        <div>• Orange Excellence-Grid</div>
                        <div>• Stern-Symbol zentral</div>
                        <div>• Geometrische Verbindungen</div>
                      </>
                    )}
                    {separator.id === 'neural-innovation' && (
                      <>
                        <div>• Cyan Neural Network</div>
                        <div>• Bewegliche Datenpulse</div>
                        <div>• Innovation-Symbol</div>
                      </>
                    )}
                  </div>
                  
                  {selectedSeparator === separator.id && (
                    <div className="mt-4 text-center">
                      <Badge className="bg-brand-red text-white">Aktuelle Auswahl</Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DesignSeparatorTest;