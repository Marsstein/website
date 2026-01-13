import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Building2, BookOpen, Shield, AlertTriangle, Wrench, Bot, Scale, Factory, ArrowRight, Sparkles } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { useSearch, SearchResult } from '@/hooks/useSearch';

const categoryIcons: Record<string, React.ElementType> = {
  Allgemein: FileText,
  Compliance: Shield,
  Branchen: Building2,
  Wissen: BookOpen,
  Guides: BookOpen,
  Assessment: Wrench,
  Krisenmanagement: AlertTriangle,
  Tools: Wrench,
  'KI & AI Act': Bot,
  Rechtsfälle: Scale,
  Industrien: Factory,
};

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const navigate = useNavigate();
  const { query, setQuery, resultsByCategory, clearQuery, hasResults, totalResults } = useSearch();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      navigate(result.route);
      onOpenChange(false);
      clearQuery();
    },
    [navigate, onOpenChange, clearQuery]
  );

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      onOpenChange(newOpen);
      if (!newOpen) {
        clearQuery();
      }
    },
    [onOpenChange, clearQuery]
  );

  return (
    <CommandDialog open={open} onOpenChange={handleOpenChange}>
      <CommandInput
        placeholder="Seiten, Guides, Compliance-Themen durchsuchen..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {query.length > 0 && hasResults && (
          <div className="px-4 py-2 text-xs text-muted-foreground border-b">
            {totalResults} Ergebnis{totalResults !== 1 ? 'se' : ''} gefunden
          </div>
        )}
        <CommandEmpty>
          <div className="flex flex-col items-center py-6">
            {query.length > 0 ? (
              <>
                <div className="text-muted-foreground mb-2">Keine Ergebnisse für "{query}"</div>
                <div className="text-xs text-muted-foreground">Versuchen Sie einen anderen Suchbegriff</div>
              </>
            ) : (
              <>
                <Sparkles className="h-8 w-8 text-muted-foreground/50 mb-3" />
                <div className="text-muted-foreground">Wonach suchen Sie?</div>
                <div className="text-xs text-muted-foreground mt-1">Tippen Sie, um Seiten zu finden</div>
              </>
            )}
          </div>
        </CommandEmpty>
        {Object.entries(resultsByCategory).map(([category, results]) => {
          const Icon = categoryIcons[category] || FileText;
          return (
            <CommandGroup key={category} heading={category}>
              {results.map((result) => (
                <CommandItem
                  key={result.id}
                  value={`${result.title} ${result.description}`}
                  onSelect={() => handleSelect(result)}
                >
                  <div className="flex items-center justify-between w-full gap-3">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium truncate">{result.title}</span>
                        <span className="text-xs text-muted-foreground line-clamp-1">
                          {result.description}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 opacity-0 group-data-[selected=true]:opacity-100 transition-opacity" />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          );
        })}
        {!hasResults && query.length === 0 && (
          <>
            <CommandGroup heading="Schnellzugriff">
              <CommandItem
                onSelect={() => handleSelect({ route: '/dsgvo', title: 'DSGVO', description: 'Datenschutz-Grundverordnung', keywords: [], category: '', id: -1 })}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">DSGVO Compliance</span>
                    <span className="text-xs text-muted-foreground">Datenschutz-Grundverordnung</span>
                  </div>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => handleSelect({ route: '/eu-ai-act', title: 'EU AI Act', description: 'KI-Verordnung der EU', keywords: [], category: '', id: -2 })}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">EU AI Act</span>
                    <span className="text-xs text-muted-foreground">KI-Verordnung der EU</span>
                  </div>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => handleSelect({ route: '/iso-27001-zertifizierung', title: 'ISO 27001', description: 'Informationssicherheits-Management', keywords: [], category: '', id: -3 })}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-green-500/10 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">ISO 27001 Zertifizierung</span>
                    <span className="text-xs text-muted-foreground">Informationssicherheits-Management</span>
                  </div>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => handleSelect({ route: '/nis2-compliance', title: 'NIS2', description: 'Cybersecurity-Richtlinie', keywords: [], category: '', id: -5 })}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-orange-500/10 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-orange-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">NIS2 Compliance</span>
                    <span className="text-xs text-muted-foreground">Cybersecurity-Richtlinie</span>
                  </div>
                </div>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Bereiche erkunden">
              <CommandItem
                onSelect={() => handleSelect({ route: '/branchen', title: 'Branchen', description: 'Branchenlösungen', keywords: [], category: '', id: -4 })}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="font-medium">Branchen</span>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => handleSelect({ route: '/wissen', title: 'Wissen', description: 'Knowledge Hub', keywords: [], category: '', id: -6 })}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="font-medium">Wissen & Guides</span>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => handleSelect({ route: '/assessment-center', title: 'Assessment Center', description: 'Compliance-Tests', keywords: [], category: '', id: -7 })}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                    <Wrench className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="font-medium">Assessment Center</span>
                </div>
              </CommandItem>
            </CommandGroup>
          </>
        )}
      </CommandList>
      <div className="border-t px-4 py-3 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-[10px]">↑↓</kbd>
            Navigieren
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-[10px]">↵</kbd>
            Öffnen
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-[10px]">esc</kbd>
            Schließen
          </span>
        </div>
      </div>
    </CommandDialog>
  );
}
