#!/usr/bin/env node
/**
 * Fügt statischen Fallback-Content für Bots hinzu
 * Löst das NO_FCP Problem bei PageSpeed Insights
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, '../dist/index.html');

// Lese die index.html
let html = fs.readFileSync(indexPath, 'utf8');

// Füge sichtbaren Initial-Content für Bots hinzu
const fallbackContent = `
  <!-- Initial Loading State for Bots -->
  <div id="initial-content" style="
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #0B1D2A 0%, #2C3E50 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.3s ease;
  ">
    <div style="text-align: center; color: white; font-family: system-ui, -apple-system, sans-serif;">
      <h1 style="font-size: 2.5rem; margin-bottom: 1rem; font-weight: 700;">
        Marsstein
      </h1>
      <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 2rem;">
        DSGVO & EU AI Act Compliance Experten
      </p>
      <div style="
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255,255,255,0.3);
        border-top-color: #e24e1b;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto;
      "></div>
    </div>
  </div>
  
  <style>
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    /* Verstecke Initial-Content wenn App lädt */
    body.app-loaded #initial-content {
      opacity: 0;
      pointer-events: none;
    }
  </style>
  
  <script>
    // Entferne Loading-Screen nach App-Start
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        const root = document.getElementById('root');
        if (root && root.children.length > 0) {
          document.body.classList.add('app-loaded');
          setTimeout(function() {
            const loader = document.getElementById('initial-content');
            if (loader) loader.remove();
          }, 300);
        }
      }, 100);
    });
  </script>
`;

// Füge Content direkt nach <body> ein
html = html.replace('<body>', `<body>${fallbackContent}`);

// Schreibe die aktualisierte HTML zurück
fs.writeFileSync(indexPath, html);

console.log('✅ Fallback-Content für Bots hinzugefügt');
console.log('   - Loading-Screen mit Marsstein-Branding');
console.log('   - Sofort sichtbarer Content für PageSpeed Insights');
console.log('   - Automatisches Ausblenden nach App-Start');