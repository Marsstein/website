import React, { useState } from 'react';
import { TrustChain } from './TrustChain';
import { TrustShieldNetwork } from './TrustShieldNetwork';
import { TrustVerificationFlow } from './TrustVerificationFlow';
import { TrustExcellenceGrid } from './TrustExcellenceGrid';
import { TrustInnovationHub } from './TrustInnovationHub';

const designVariations = [
  { id: 'trust-chain', name: 'Trust Chain', component: TrustChain, description: 'Vertrauen durch lückenlose Transparenz' },
  { id: 'trust-shield', name: 'Trust Shield Network', component: TrustShieldNetwork, description: 'Mehrschichtiger Schutz durch intelligente Vernetzung' },
  { id: 'trust-verification', name: 'Trust Verification Flow', component: TrustVerificationFlow, description: 'Kontinuierliche Verifikation in Echtzeit' },
  { id: 'trust-excellence', name: 'Trust Excellence Grid', component: TrustExcellenceGrid, description: 'Exzellenz in jeder Dimension' },
  { id: 'trust-innovation', name: 'Trust Innovation Hub', component: TrustInnovationHub, description: 'Zukunftsweisende Compliance-Innovation' },
];

export const DesignSeparatorTest: React.FC = () => {
  const [selectedDesign, setSelectedDesign] = useState(designVariations[0].id);
  const selectedVariation = designVariations.find(d => d.id === selectedDesign);
  const SelectedComponent = selectedVariation?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Design Selector */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Trust Network Design Variations</h1>
          <div className="flex flex-wrap gap-2">
            {designVariations.map((design) => (
              <button
                key={design.id}
                onClick={() => setSelectedDesign(design.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedDesign === design.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {design.name}
              </button>
            ))}
          </div>
          {selectedVariation && (
            <p className="text-gray-600 mt-2">{selectedVariation.description}</p>
          )}
        </div>
      </div>

      {/* Selected Design Component */}
      <div className="relative">
        {SelectedComponent && <SelectedComponent />}
      </div>

      {/* Design Info */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Design-Übersicht</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designVariations.map((design) => (
                <div
                  key={design.id}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    selectedDesign === design.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedDesign(design.id)}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{design.name}</h3>
                  <p className="text-sm text-gray-600">{design.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};