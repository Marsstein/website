import React, { useState, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Swords } from 'lucide-react';

const CompetitionDeckV1 = lazy(() => import('./competition-versions/CompetitionDeckV1'));

const decks = [
  { component: CompetitionDeckV1, name: 'Wettbewerb', icon: Swords },
];

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center w-full h-full bg-gray-100">
    <Loader2 className="h-16 w-16 text-gray-400 animate-spin" />
  </div>
);

const CompetitionDeck: React.FC = () => {
  const [activeDeck, setActiveDeck] = useState(0);

  const ActiveDeckComponent = decks[activeDeck].component;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 relative">
        <Suspense fallback={<LoadingSpinner />}>
          <ActiveDeckComponent />
        </Suspense>
      </div>

      <div className="bg-gray-900/95 backdrop-blur-md p-4 border-t border-white/20 shadow-lg flex flex-wrap justify-center">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {decks.map((deck, index) => (
            <Button
              key={deck.name}
              onClick={() => setActiveDeck(index)}
              variant={activeDeck === index ? 'default' : 'ghost'}
              className={`transition-all duration-300 ${activeDeck === index ? 'bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
            >
              <deck.icon className="h-4 w-4 mr-2" />
              {deck.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitionDeck;
