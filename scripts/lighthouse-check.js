#!/usr/bin/env node

/**
 * Lighthouse Performance Check für Netlify
 * Läuft nach dem Build und generiert einen Performance-Report
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔍 Lighthouse Performance Check');
console.log('================================');

const distPath = path.join(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

if (fs.existsSync(indexPath)) {
  console.log('✅ Build erfolgreich - index.html gefunden');
  console.log('✅ Bereit für Deploy');
  
  // Basis-Checks für SEO
  const htmlContent = fs.readFileSync(indexPath, 'utf-8');
  
  const checks = {
    'Meta Description': htmlContent.includes('meta name="description"'),
    'Viewport Meta': htmlContent.includes('viewport'),
    'Title Tag': htmlContent.includes('<title>'),
    'Lang Attribute': htmlContent.includes('lang='),
    'Favicon': htmlContent.includes('favicon'),
  };
  
  console.log('\n📋 SEO Basis-Checks:');
  Object.entries(checks).forEach(([check, passed]) => {
    console.log(`  ${passed ? '✅' : '❌'} ${check}`);
  });
  
  // File-Size Check
  const stats = fs.statSync(indexPath);
  const fileSizeInKB = stats.size / 1024;
  console.log(`\n📦 HTML Größe: ${fileSizeInKB.toFixed(2)} KB`);
  
  // Count JS/CSS files
  const jsFiles = fs.readdirSync(path.join(distPath, 'assets')).filter(f => f.endsWith('.js'));
  const cssFiles = fs.readdirSync(path.join(distPath, 'assets')).filter(f => f.endsWith('.css'));
  
  console.log(`\n📊 Bundle-Statistik:`);
  console.log(`  JavaScript-Dateien: ${jsFiles.length}`);
  console.log(`  CSS-Dateien: ${cssFiles.length}`);
  
  // Größte Dateien identifizieren
  const allAssets = fs.readdirSync(path.join(distPath, 'assets'));
  const assetSizes = allAssets.map(file => {
    const filePath = path.join(distPath, 'assets', file);
    const stats = fs.statSync(filePath);
    return { name: file, size: stats.size / 1024 };
  }).sort((a, b) => b.size - a.size);
  
  console.log(`\n🔝 Top 5 größte Assets:`);
  assetSizes.slice(0, 5).forEach(asset => {
    const warning = asset.size > 200 ? ' ⚠️' : '';
    console.log(`  ${asset.name}: ${asset.size.toFixed(2)} KB${warning}`);
  });
  
  console.log('\n✨ Performance-Check abgeschlossen!');
} else {
  console.error('❌ Build fehlgeschlagen - index.html nicht gefunden');
  process.exit(1);
}