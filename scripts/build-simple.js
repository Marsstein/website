#!/usr/bin/env node

/**
 * Einfaches Build-Script für Vercel
 * Ohne Puppeteer oder komplexe Prerendering-Logik
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function build() {
  console.log('🚀 Starting simple build for Vercel...');
  
  try {
    // Nur Vite Build ausführen
    console.log('📦 Building application...');
    await execAsync('npm run build');
    
    // Einfache SEO-Optimierung: Modifiziere index.html
    console.log('🔍 Adding SEO tags to index.html...');
    await addSEOTags();
    
    console.log('✅ Build complete!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

async function addSEOTags() {
  const indexPath = path.join(process.cwd(), 'dist', 'index.html');
  let html = await fs.readFile(indexPath, 'utf-8');
  
  // Füge erweiterte SEO-Tags hinzu
  const seoTags = `
    <meta name="description" content="Marsstein - Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act. Automatisieren Sie Ihre Compliance-Prozesse im DACH-Raum.">
    <meta name="keywords" content="Compliance Software, DSGVO, ISO 27001, EU AI Act, KI Compliance, DACH, Marsstein">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="Marsstein - KI-native Compliance Platform">
    <meta property="og:description" content="Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://marsstein.ai">
    <meta property="og:image" content="https://marsstein.ai/og-image.png">
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Marsstein - KI-native Compliance Platform">
    <meta name="twitter:description" content="Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act.">
    <meta name="twitter:image" content="https://marsstein.ai/og-image.png">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://marsstein.ai">
  `;
  
  // Ersetze </head> mit SEO-Tags + </head>
  html = html.replace('</head>', seoTags + '\n</head>');
  
  await fs.writeFile(indexPath, html);
  console.log('✅ SEO tags added to index.html');
}

// Führe Build aus
build();