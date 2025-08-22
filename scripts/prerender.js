import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Define routes and their meta tags
const routes = [
  {
    path: 'wissen/rechtsprechung/amazon-luxemburg-2021',
    title: 'Amazon Luxemburg DSGVO-Bußgeld 2021 | Marsstein',
    description: 'Analyse des Rekord-DSGVO-Bußgelds von 746 Mio. EUR gegen Amazon - Hintergründe, Auswirkungen und Learnings für Unternehmen.',
    keywords: 'Amazon DSGVO Bußgeld, CNPD Luxemburg, Datenschutz Verstoß, DSGVO Rekordstrafe'
  },
  {
    path: 'wissen/rechtsprechung/schrems-ii',
    title: 'Schrems II Urteil - Auswirkungen auf Datentransfers | Marsstein',
    description: 'Das Schrems II Urteil des EuGH und seine Folgen für internationale Datentransfers. Was Unternehmen jetzt beachten müssen.',
    keywords: 'Schrems II, Privacy Shield, Datentransfer USA, EuGH Urteil'
  },
  {
    path: 'compliance/dsgvo',
    title: 'DSGVO Compliance - Vollständiger Leitfaden | Marsstein',
    description: 'Umfassender DSGVO Compliance Leitfaden mit Checklisten, Vorlagen und Best Practices für Unternehmen.',
    keywords: 'DSGVO Compliance, Datenschutz Grundverordnung, GDPR, Datenschutz'
  },
  // Add more routes as needed
];

// Read the base HTML template
const baseHtml = readFileSync(join(__dirname, '..', 'dist', 'index.html'), 'utf-8');

// Generate HTML files for each route
routes.forEach(route => {
  // Replace meta tags
  let html = baseHtml
    .replace(/<title>.*<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${route.description}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${route.title}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${route.description}"`);
  
  // Add keywords if provided
  if (route.keywords) {
    html = html.replace('</title>', `</title>\n    <meta name="keywords" content="${route.keywords}" />`);
  }
  
  // Create directory structure
  const dirPath = join(__dirname, '..', 'dist', route.path);
  mkdirSync(dirPath, { recursive: true });
  
  // Write the HTML file
  writeFileSync(join(dirPath, 'index.html'), html);
  
  console.log(`✓ Prerendered: ${route.path}`);
});

console.log(`\n✨ Prerendered ${routes.length} routes successfully!`);