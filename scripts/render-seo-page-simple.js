/**
 * Vereinfachte Version ohne JSX
 * Nutzt Puppeteer für echtes React Helmet Rendering
 */

import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let previewProcess = null;
let browser = null;

/**
 * Startet den Preview Server
 */
export async function startPreviewServer() {
  console.log('🚀 Starting preview server for SSR...');
  
  previewProcess = spawn('npm', ['run', 'preview', '--', '--port', '5173'], {
    stdio: 'pipe',
    shell: true
  });
  
  // Warte bis der Server läuft
  await new Promise(resolve => setTimeout(resolve, 5000));
}

/**
 * Rendert eine Route mit echtem React Helmet
 */
export async function renderPageWithHelmet(route) {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }
  
  const page = await browser.newPage();
  
  try {
    // Navigiere zur Route
    await page.goto(`http://localhost:5173${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Warte auf React Helmet
    await page.waitForFunction(() => {
      const hasHelmetTags = document.querySelector('meta[data-rh="true"]');
      const hasTitle = document.title && document.title !== 'Vite + React';
      return hasHelmetTags && hasTitle;
    }, { timeout: 10000 }).catch(() => {});
    
    // Extrahiere Helmet-Daten
    const helmetData = await page.evaluate(() => {
      // Title
      const title = document.title;
      
      // Meta Tags
      const metaTags = [];
      document.querySelectorAll('meta[data-rh="true"]').forEach(meta => {
        const name = meta.getAttribute('name');
        const property = meta.getAttribute('property');
        const content = meta.getAttribute('content');
        
        if (name || property) {
          metaTags.push({
            name,
            property,
            content
          });
        }
      });
      
      // Link Tags
      const linkTags = [];
      document.querySelectorAll('link[data-rh="true"]').forEach(link => {
        const rel = link.getAttribute('rel');
        const href = link.getAttribute('href');
        
        if (rel && href) {
          linkTags.push({ rel, href });
        }
      });
      
      // Body content
      const bodyHtml = document.getElementById('root').innerHTML;
      
      return {
        title,
        metaTags,
        linkTags,
        bodyHtml
      };
    });
    
    await page.close();
    
    return helmetData;
    
  } catch (error) {
    console.error(`Error rendering ${route}:`, error.message);
    await page.close();
    return null;
  }
}

/**
 * Cleanup
 */
export async function cleanup() {
  if (browser) {
    await browser.close();
  }
  
  if (previewProcess) {
    previewProcess.kill();
  }
}

/**
 * Konvertiert Helmet-Daten zu HTML-Strings
 */
export function helmetDataToHtml(helmetData) {
  if (!helmetData) {
    return {
      title: '<title>Marsstein - Compliance Platform</title>',
      meta: '',
      link: '',
      bodyHtml: ''
    };
  }
  
  const title = `<title>${helmetData.title}</title>`;
  
  const meta = helmetData.metaTags
    .map(tag => {
      if (tag.property) {
        return `<meta property="${tag.property}" content="${tag.content}">`;
      } else if (tag.name) {
        return `<meta name="${tag.name}" content="${tag.content}">`;
      }
      return '';
    })
    .filter(Boolean)
    .join('\n    ');
  
  const link = helmetData.linkTags
    .map(tag => `<link rel="${tag.rel}" href="${tag.href}">`)
    .join('\n    ');
  
  return {
    title,
    meta,
    link,
    bodyHtml: helmetData.bodyHtml || ''
  };
}