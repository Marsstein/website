import React, { useState, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Cog, Users, ArrowDownCircle, Target, GitBranch, Repeat, Columns, PackageCheck, RotateCw, Layers, Workflow, LayoutDashboard, Lightbulb, Rocket, BookCopy, Table, ArrowDownUp } from 'lucide-react';

const FunktionDeckV1 = lazy(() => import('./funktion-versions/FunktionDeckV1'));
const FunktionDeckV2 = lazy(() => import('./funktion-versions/FunktionDeckV2'));
const FunktionDeckV3 = lazy(() => import('./funktion-versions/FunktionDeckV3'));
const FunktionDeckV4 = lazy(() => import('./funktion-versions/FunktionDeckV4'));
const FunktionDeckV5 = lazy(() => import('./funktion-versions/FunktionDeckV5'));
const FunktionDeckV6 = lazy(() => import('./funktion-versions/FunktionDeckV6'));
const FunktionDeckV7 = lazy(() => import('./funktion-versions/FunktionDeckV7'));
const FunktionDeckV8 = lazy(() => import('./funktion-versions/FunktionDeckV8'));
const FunktionDeckV9 = lazy(() => import('./funktion-versions/FunktionDeckV9'));
const FunktionDeckV10 = lazy(() => import('./funktion-versions/FunktionDeckV10'));
const FunktionDeckV11 = lazy(() => import('./funktion-versions/FunktionDeckV11'));
const FunktionDeckV12 = lazy(() => import('./funktion-versions/FunktionDeckV12'));
const FunktionDeckV13 = lazy(() => import('./funktion-versions/FunktionDeckV13'));
const FunktionDeckV14 = lazy(() => import('./funktion-versions/FunktionDeckV14'));
const FunktionDeckV15 = lazy(() => import('./funktion-versions/FunktionDeckV15'));
const FunktionDeckV16 = lazy(() => import('./funktion-versions/FunktionDeckV16'));
const FunktionDeckV17 = lazy(() => import('./funktion-versions/FunktionDeckV17'));
const FunktionDeckV18 = lazy(() => import('./funktion-versions/FunktionDeckV18'));

const decks = [
  { component: FunktionDeckV1, name: 'Workflow', icon: Cog },
  { component: FunktionDeckV2, name: 'Zielgruppen', icon: Users },
  { component: FunktionDeckV3, name: 'Vertikal', icon: ArrowDownCircle },
  { component: FunktionDeckV4, name: 'Hub', icon: Target },
  { component: FunktionDeckV5, name: 'Pipeline', icon: GitBranch },
  { component: FunktionDeckV6, name: 'Ökosystem', icon: Repeat },
  { component: FunktionDeckV7, name: 'Vorher/Nachher', icon: Columns },
  { component: FunktionDeckV8, name: 'Wertschöpfung', icon: PackageCheck },
  { component: FunktionDeckV9, name: 'Schwungrad', icon: RotateCw },
  { component: FunktionDeckV10, name: 'Kreisläufe', icon: Layers },
  { component: FunktionDeckV11, name: 'Zyklus', icon: Workflow },
  { component: FunktionDeckV12, name: 'KI-Cockpit', icon: LayoutDashboard },
  { component: FunktionDeckV13, name: 'Problem/Lösung', icon: Lightbulb },
  { component: FunktionDeckV14, name: 'Wert-Ebenen', icon: Layers },
  { component: FunktionDeckV15, name: 'DSB Co-Pilot', icon: Rocket },
  { component: FunktionDeckV16, name: 'Zwei Seiten', icon: BookCopy },
  { component: FunktionDeckV17, name: 'Lösungs-Matrix', icon: Table },
  { component: FunktionDeckV18, name: 'Workflows', icon: ArrowDownUp },
];

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center w-full h-full bg-gray-100">
    <Loader2 className="h-16 w-16 text-gray-400 animate-spin" />
  </div>
);

const FunktionDeck: React.FC = () => {
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

export default FunktionDeck;
