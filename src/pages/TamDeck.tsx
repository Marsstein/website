import React, { useState, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Palette, Zap, Award, Star, BookOpen, BarChart2, Briefcase, FileText, Layout } from 'lucide-react';

const TamDeckV1 = lazy(() => import('./tam-versions/TamDeckV1'));
const TamDeckV2 = lazy(() => import('./tam-versions/TamDeckV2'));
const TamDeckV3 = lazy(() => import('./tam-versions/TamDeckV3'));
const TamDeckV4 = lazy(() => import('./tam-versions/TamDeckV4'));
const TamDeckV5 = lazy(() => import('./tam-versions/TamDeckV5'));
const TamDeckV6 = lazy(() => import('./tam-versions/TamDeckV6'));
const TamDeckV7 = lazy(() => import('./tam-versions/TamDeckV7'));
const TamDeckV8 = lazy(() => import('./tam-versions/TamDeckV8'));
const TamDeckV9 = lazy(() => import('./tam-versions/TamDeckV9'));

const decks = [
  { component: TamDeckV1, name: 'The Executive', icon: Award },
  { component: TamDeckV2, name: 'The Futurist', icon: Zap },
  { component: TamDeckV3, name: 'The Analyst', icon: BarChart2 },
  { component: TamDeckV4, name: 'The Bold', icon: Star },
  { component: TamDeckV5, name: 'The Storyteller', icon: BookOpen },
  { component: TamDeckV6, name: 'Klarheit', icon: Palette },
  { component: TamDeckV7, name: 'Strategie', icon: Briefcase },
  { component: TamDeckV8, name: 'Infografik', icon: FileText },
  { component: TamDeckV9, name: 'Klarheit V2', icon: Layout },
];

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center w-full h-full bg-gray-100">
    <Loader2 className="h-16 w-16 text-gray-400 animate-spin" />
  </div>
);

const TamDeck: React.FC = () => {
  const [activeDeck, setActiveDeck] = useState(5); // Start with the first new German version

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

export default TamDeck;