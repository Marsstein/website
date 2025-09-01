import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ALLE wichtigen SEO-Routen für maximale Sichtbarkeit
const routes = [
  // Hauptseiten
  '/',
  '/contact',
  '/pricing',
  '/academy',
  '/ueber-uns',
  
  // Regulierungen (Top-Priority für SEO!)
  '/dsgvo',
  '/eu-ai-act',
  '/nis2-compliance',
  '/hinweisgeberschutzgesetz',
  '/geldwaeschegesetz',
  
  // Zertifizierungen (Sehr wichtig für B2B)
  '/iso-27001-zertifizierung',
  '/soc2-zertifizierung',
  '/iso-27017-zertifizierung',
  '/iso-27018-zertifizierung',
  '/tisax-zertifizierung',
  
  // Branchen (Zielgruppen-spezifisch)
  '/branchen',
  '/branchen/gesundheitswesen',
  '/branchen/finanzdienstleister',
  '/branchen/e-commerce',
  '/branchen/saas-unternehmen',
  '/branchen/produktion',
  '/branchen/automotive',
  
  // Wissen & Guides (Content Marketing)
  '/wissen',
  '/wissen/dsgvo',
  '/wissen/ki-datenschutz',
  '/wissen/cybersecurity',
  '/wissen/zertifizierungen',
  '/wissen/branchen',
  
  // Tools (Lead Generation)
  '/tools',
  '/tools/cookie-management',
  '/tools/whistleblower-system',
  '/tools/dsgvo-email-template-generator',
  '/tools/compliance-ai-assistant',
  
  // Assessment Center
  '/assessment-center',
  '/assessment-center/dsgvo-compliance-checklist',
  '/assessment-center/ai-risk-assessment',
  
  // Rechtliche Seiten (Pflicht)
  '/impressum',
  '/datenschutz'
];

console.log('🚀 Starting prerender process for Netlify...');
console.log(`📊 Routes to prerender: ${routes.length}`);

// Start preview server
console.log('🌐 Starting preview server...');
const serverProcess = spawn('npm', ['run', 'preview'], {
  stdio: 'pipe',
  shell: true,
  cwd: join(__dirname, '..')
});

// Wait for server
await new Promise(resolve => setTimeout(resolve, 5000));

// Launch Puppeteer with Netlify-compatible settings
const browser = await puppeteer.launch({
  args: chromium.args,
  defaultViewport: chromium.defaultViewport,
  executablePath: await chromium.executablePath(),
  headless: chromium.headless,
});

async function prerenderRoute(route) {
  const page = await browser.newPage();
  
  try {
    console.log(`📄 Prerendering: ${route}`);
    
    await page.goto(`http://localhost:4173${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for React
    await page.waitForFunction(() => {
      const root = document.getElementById('root');
      return root && root.children.length > 0;
    }, { timeout: 10000 });
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const html = await page.content();
    
    // Determine output path
    const outputPath = route === '/' 
      ? join(__dirname, '../dist/index.html')
      : join(__dirname, `../dist${route}/index.html`);
    
    // Create directory if needed
    if (route !== '/') {
      mkdirSync(dirname(outputPath), { recursive: true });
    }
    
    // Read original HTML
    const originalHtml = readFileSync(join(__dirname, '../dist/index.html'), 'utf-8');
    
    // Replace body content while keeping head intact
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/);
    if (bodyMatch) {
      const prerenderedHtml = originalHtml.replace(
        /<body[^>]*>[\s\S]*<\/body>/,
        `<body>${bodyMatch[1]}</body>`
      );
      
      writeFileSync(outputPath, prerenderedHtml);
      console.log(`   ✓ Saved to: ${outputPath}`);
    }
    
    return true;
  } catch (error) {
    console.error(`   ❌ Error prerendering ${route}:`, error.message);
    return false;
  } finally {
    await page.close();
  }
}

// Prerender all routes
for (const route of routes) {
  await prerenderRoute(route);
}

// Cleanup
await browser.close();
serverProcess.kill();

console.log('\n✅ Prerendering complete!');
process.exit(0);