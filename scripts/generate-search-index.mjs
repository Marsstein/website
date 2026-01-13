#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const categoryMap = {
  '/compliance': 'Compliance',
  '/branchen': 'Branchen',
  '/wissen': 'Wissen',
  '/guides': 'Guides',
  '/assessment-center': 'Assessment',
  '/crisis': 'Krisenmanagement',
  '/tools': 'Tools',
  '/ki': 'KI & AI Act',
  '/legal': 'Rechtsfälle',
  '/industries': 'Industrien',
};

function getCategory(route) {
  for (const [prefix, category] of Object.entries(categoryMap)) {
    if (route.startsWith(prefix)) {
      return category;
    }
  }
  return 'Allgemein';
}

async function generateSearchIndex() {
  const seoScriptPath = path.join(__dirname, 'generate-static-seo.mjs');
  const seoContent = fs.readFileSync(seoScriptPath, 'utf-8');

  const routeConfigMatch = seoContent.match(/const routeConfigs = \{([\s\S]*?)\n\};/);
  if (!routeConfigMatch) {
    console.error('Could not find routeConfigs in generate-static-seo.mjs');
    process.exit(1);
  }

  const routeConfigs = {};
  const routeRegex = /'([^']+)':\s*\{[^}]*title:\s*'([^']*)'[^}]*description:\s*'([^']*)'[^}]*keywords:\s*'([^']*)'/g;

  let match;
  while ((match = routeRegex.exec(seoContent)) !== null) {
    const [, route, title, description, keywords] = match;
    if (!route.startsWith('/zh/')) {
      routeConfigs[route] = {
        title: title.replace(/\s*\|\s*Marsstein$/, '').replace(/\s*–\s*.*$/, '').trim(),
        description,
        keywords: keywords.split(',').map(k => k.trim()),
      };
    }
  }

  const searchIndex = Object.entries(routeConfigs).map(([route, config], index) => ({
    id: index,
    route,
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    category: getCategory(route),
  }));

  const outputPath = path.join(__dirname, '..', 'src', 'data', 'searchIndex.json');
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));

  console.log(`✓ Search index generated with ${searchIndex.length} entries`);
  console.log(`  Output: ${outputPath}`);

  const categories = {};
  searchIndex.forEach(item => {
    categories[item.category] = (categories[item.category] || 0) + 1;
  });
  console.log('  Categories:', categories);
}

generateSearchIndex().catch(console.error);
