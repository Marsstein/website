import { useMemo, useState, useCallback } from 'react';
import Fuse from 'fuse.js';
import searchIndex from '@/data/searchIndex.json';

export interface SearchResult {
  id: number;
  route: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
}

const fuseOptions: Fuse.IFuseOptions<SearchResult> = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'keywords', weight: 0.3 },
  ],
  threshold: 0.3,
  ignoreLocation: true,
  includeScore: true,
  minMatchCharLength: 2,
};

export function useSearch() {
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () => new Fuse(searchIndex as SearchResult[], fuseOptions),
    []
  );

  const results = useMemo(() => {
    if (!query.trim()) {
      return [];
    }
    return fuse.search(query, { limit: 10 }).map((result) => result.item);
  }, [fuse, query]);

  const resultsByCategory = useMemo(() => {
    const grouped: Record<string, SearchResult[]> = {};
    results.forEach((result) => {
      if (!grouped[result.category]) {
        grouped[result.category] = [];
      }
      grouped[result.category].push(result);
    });
    return grouped;
  }, [results]);

  const clearQuery = useCallback(() => {
    setQuery('');
  }, []);

  return {
    query,
    setQuery,
    results,
    resultsByCategory,
    clearQuery,
    hasResults: results.length > 0,
    totalResults: results.length,
  };
}
