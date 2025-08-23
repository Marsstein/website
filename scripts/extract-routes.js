/**
 * Extrahiert alle Routen aus routes.tsx für das Prerendering
 * Da wir TypeScript/JSX nicht direkt in Node ausführen können,
 * parsen wir die Datei
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function extractRoutesFromFile() {
  const routesPath = join(__dirname, '..', 'src', 'routes.tsx');
  const content = readFileSync(routesPath, 'utf-8');
  
  // Finde alle path: 'xxx' Definitionen
  const pathRegex = /path:\s*['"]([^'"]+)['"]/g;
  const routes = [];
  let match;
  
  while ((match = pathRegex.exec(content)) !== null) {
    const path = match[1];
    // Ignoriere catch-all und test routes
    if (path !== '*' && !path.includes(':') && !path.startsWith('test')) {
      routes.push(path.startsWith('/') ? path : `/${path}`);
    }
  }
  
  // Füge Index Route hinzu
  if (content.includes('index: true')) {
    routes.unshift('/');
  }
  
  // Entferne Duplikate
  return [...new Set(routes)];
}

// Wenn direkt ausgeführt, gebe Routes aus
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const routes = extractRoutesFromFile();
  console.log(JSON.stringify(routes, null, 2));
  console.log(`\nTotal: ${routes.length} routes`);
}