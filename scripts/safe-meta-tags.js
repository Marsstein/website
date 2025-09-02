#!/usr/bin/env node

/**
 * Sicheres Script zum Hinzufügen von Meta-Tags für SEO
 * OHNE die React-App zu beschädigen
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🏷️  Füge Meta-Tags für SEO hinzu...');

try {
  const htmlPath = join(__dirname, '../dist/index.html');
  let html = readFileSync(htmlPath, 'utf-8');
  
  // Überprüfe ob Meta-Description bereits existiert
  if (!html.includes('meta name="description"')) {
    // Füge Meta-Description vor </head> ein
    html = html.replace(
      '</head>',
      `  <meta name="description" content="Marsstein - Ihre Experten für DSGVO, EU AI Act und Datenschutz-Compliance. ISO 27001, SOC2 und TISAX Zertifizierung.">
  <meta name="keywords" content="DSGVO, Datenschutz, EU AI Act, ISO 27001, SOC2, TISAX, Compliance, Beratung">
  <meta property="og:title" content="Marsstein - DSGVO & EU AI Act Compliance Experten">
  <meta property="og:description" content="Professionelle Beratung für Datenschutz und Compliance">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.marsstein.de">
</head>`
    );
  }
  
  // Überprüfe ob Title-Tag existiert
  if (!html.includes('<title>')) {
    html = html.replace(
      '</head>',
      `  <title>Marsstein - DSGVO & EU AI Act Compliance Experten</title>
</head>`
    );
  }
  
  // Füge versteckten SEO-Content direkt nach <body> ein
  // OHNE das React-Root-Element zu verändern
  if (!html.includes('seo-fallback')) {
    const seoContent = `
  <!-- SEO Fallback Content (hidden) -->
  <noscript id="seo-fallback">
    <h1>Marsstein - Datenschutz & Compliance Experten</h1>
    <p>Professionelle Beratung für DSGVO, EU AI Act, ISO 27001, SOC2 und TISAX Compliance.</p>
    <ul>
      <li><a href="/dsgvo">DSGVO Compliance</a></li>
      <li><a href="/eu-ai-act">EU AI Act</a></li>
      <li><a href="/iso-27001-zertifizierung">ISO 27001 Zertifizierung</a></li>
      <li><a href="/tools">Compliance Tools</a></li>
      <li><a href="/wissen">Wissen & Resources</a></li>
      <li><a href="/branchen">Branchenlösungen</a></li>
      <li><a href="/contact">Kontakt</a></li>
    </ul>
  </noscript>
`;
    
    html = html.replace(
      '<body>',
      `<body>${seoContent}`
    );
  }
  
  // Stelle ABSOLUT sicher, dass das root-div leer und unverändert bleibt
  const rootMatch = html.match(/<div\s+id=["']root["'][^>]*>.*?<\/div>/s);
  if (rootMatch && rootMatch[0].includes('>') && !rootMatch[0].includes('><')) {
    // Root hat Inhalt - das darf nicht sein!
    html = html.replace(/<div\s+id=["']root["'][^>]*>.*?<\/div>/s, '<div id="root"></div>');
  }
  
  // Speichere die optimierte HTML
  writeFileSync(htmlPath, html);
  
  console.log('✅ Meta-Tags erfolgreich hinzugefügt');
  console.log('✅ React-Root bleibt unverändert');
  
  // Validierung
  const finalHtml = readFileSync(htmlPath, 'utf-8');
  const hasMetaDesc = finalHtml.includes('meta name="description"');
  const hasTitle = finalHtml.includes('<title>');
  const hasEmptyRoot = finalHtml.includes('<div id="root"></div>');
  
  console.log('\n📊 Validierung:');
  console.log(`   Meta-Description: ${hasMetaDesc ? '✅' : '❌'}`);
  console.log(`   Title-Tag: ${hasTitle ? '✅' : '❌'}`);
  console.log(`   React-Root leer: ${hasEmptyRoot ? '✅' : '❌'}`);
  
  if (!hasEmptyRoot) {
    console.error('⚠️  WARNUNG: React-Root ist nicht leer! Dies könnte Probleme verursachen.');
  }
  
} catch (error) {
  console.error('❌ Fehler beim Hinzufügen der Meta-Tags:', error);
  process.exit(1);
}