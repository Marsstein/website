import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Creates static HTML files for SEO without JavaScript
 * This prevents "Root element not found" errors
 */

console.log('🔧 SEO Static HTML Builder V2');
console.log('============================\n');

// Pfade
const distDir = join(__dirname, '..', 'dist');
const seoDistDir = join(__dirname, '..', 'dist-seo');

// Erstelle SEO dist Verzeichnis
mkdirSync(seoDistDir, { recursive: true });

/**
 * Entfernt alle Script-Tags aus HTML für reines statisches SEO-HTML
 */
function removeScripts(html) {
  // Entferne alle <script> Tags
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Entferne modulepreload links (da wir kein JS laden)
  html = html.replace(/<link[^>]*rel="modulepreload"[^>]*>/gi, '');
  
  // Entferne type="module" script tags
  html = html.replace(/<script[^>]*type="module"[^>]*>.*?<\/script>/gi, '');
  
  return html;
}

/**
 * Bereinigt malformed title tags
 */
function cleanupMalformedTags(html) {
  // Entferne alle titlecompliance tags
  html = html.replace(/<titlecompliance[^>]*>[\s\S]*?<\/titlecompliance>/gi, '');
  
  // Entferne titleSOC tags
  html = html.replace(/<titleSOC[^>]*>[\s\S]*?<\/title>/gi, '');
  
  // Entferne title tags aus dem body (sie gehören nur in den head)
  const parts = html.split('</head>');
  if (parts.length === 2) {
    const head = parts[0] + '</head>';
    let body = parts[1];
    
    // Entferne alle title-ähnlichen Tags aus dem body
    body = body.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '');
    
    html = head + body;
  }
  
  return html;
}

/**
 * Verbessert HTML für SEO
 */
function optimizeForSEO(html, pagePath) {
  // Bereinige zuerst malformed tags
  html = cleanupMalformedTags(html);
  
  // Füge Kommentar hinzu
  html = html.replace('</head>', 
    `  <!-- Static SEO Version - No JavaScript -->
  <!-- Generated at ${new Date().toISOString()} -->
</head>`);
  
  // Stelle sicher dass Title-Tags im head richtig formatiert sind
  html = html.replace(/<title(?!>)([^<]*)<\/title>/g, '<title>$1</title>');
  
  // Formatiere für bessere Lesbarkeit (nur im head)
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (headMatch) {
    let headContent = headMatch[1];
    
    // Formatiere head content
    headContent = headContent.replace(/<meta/g, '\n  <meta');
    headContent = headContent.replace(/<link/g, '\n  <link');
    headContent = headContent.replace(/<title>/g, '\n  <title>');
    
    // Ersetze head content
    html = html.replace(headMatch[0], `<head>${headContent}\n</head>`);
  }
  
  return html;
}

/**
 * Kopiert eine HTML-Datei und erstellt SEO-Version
 */
function createSEOVersion(sourcePath, targetPath) {
  if (!existsSync(sourcePath)) {
    console.warn(`⚠️  Quelldatei nicht gefunden: ${sourcePath}`);
    return false;
  }
  
  // Lese Original HTML
  let html = readFileSync(sourcePath, 'utf-8');
  
  // Entferne alle Scripts
  html = removeScripts(html);
  
  // Optimiere für SEO
  const pagePath = targetPath.replace(seoDistDir, '').replace('/index.html', '');
  html = optimizeForSEO(html, pagePath);
  
  // Erstelle Verzeichnis falls nötig
  const targetDir = dirname(targetPath);
  mkdirSync(targetDir, { recursive: true });
  
  // Schreibe SEO HTML
  writeFileSync(targetPath, html);
  
  return true;
}

// Liste der zu verarbeitenden Seiten
const pages = [
  'index.html',
  'soc2-zertifizierung/index.html',
  'eu-ai-act/index.html',
  'nis2-compliance/index.html',
  'iso-27001-zertifizierung/index.html',
  'wissen/rechtsprechung/amazon-luxemburg-2021/index.html',
  'wissen/rechtsprechung/schrems-ii/index.html',
  'compliance/dsgvo/index.html',
  'wissen/dsgvo/grundlagen/index.html',
  'wissen/compliance/iso-27001/index.html'
];

console.log('📄 Erstelle statische SEO HTML-Dateien...\n');

let successCount = 0;
let errorCount = 0;

// Verarbeite alle Seiten
pages.forEach(page => {
  const sourcePath = join(distDir, page);
  const targetPath = join(seoDistDir, page);
  
  console.log(`Processing: ${page}`);
  
  if (createSEOVersion(sourcePath, targetPath)) {
    console.log(`✅ Erstellt: ${targetPath}`);
    successCount++;
  } else {
    console.log(`❌ Fehler bei: ${page}`);
    errorCount++;
  }
});

// Kopiere Assets (CSS, Bilder, etc.)
console.log('\n📁 Kopiere Assets...');

// CSS
const cssDir = join(distDir, 'assets');
const targetCssDir = join(seoDistDir, 'assets');
if (existsSync(cssDir)) {
  mkdirSync(targetCssDir, { recursive: true });
  
  const files = readdirSync(cssDir);
  files.forEach(file => {
    if (file.endsWith('.css')) {
      copyFileSync(join(cssDir, file), join(targetCssDir, file));
      console.log(`✅ CSS kopiert: ${file}`);
    }
  });
}

// Statische Dateien (favicon, etc.)
const staticFiles = [
  'favicon-32.png',
  'favicon-16.png',
  'apple-touch-icon.png',
  'JLogoMarsstein.svg',
  'safari-pinned-tab.svg',
  'og-image-marsstein.jpg'
];

staticFiles.forEach(file => {
  const sourcePath = join(distDir, file);
  const targetPath = join(seoDistDir, file);
  
  if (existsSync(sourcePath)) {
    copyFileSync(sourcePath, targetPath);
    console.log(`✅ Asset kopiert: ${file}`);
  }
});

console.log(`
=============================
✨ SEO Static Build Complete!
=============================

📊 Ergebnis:
- Erfolgreiche Seiten: ${successCount}
- Fehler: ${errorCount}

📁 Output: dist-seo/

Diese Version:
✅ Keine JavaScript-Ausführung
✅ Kein "Root element not found" Fehler
✅ Vollständiges HTML mit allen SEO-Tags
✅ Vollständiger Body-Content erhalten
✅ Perfekt für SEO-Testing und Crawler

Teste mit: npx serve dist-seo -p 5000
`);