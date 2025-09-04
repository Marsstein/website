import { chromium } from 'playwright';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// SEO Configuration for critical pages
const SEO_CONFIG = {
  '/': {
    title: 'Marsstein - DSGVO Compliance & AI Datenschutz Lösungen',
    description: 'Marsstein bietet führende DSGVO-Compliance und KI-Datenschutz Lösungen für Unternehmen im DACH-Raum.',
    keywords: 'DSGVO, Datenschutz, Compliance, ISO 27001, NIS2, EU AI Act'
  },
  '/contact': {
    title: 'Kontakt - Marsstein DSGVO Beratung',
    description: 'Kontaktieren Sie Marsstein für professionelle DSGVO-Beratung.',
    keywords: 'DSGVO Beratung, Datenschutz Kontakt, Compliance'
  },
  '/pricing': {
    title: 'Preise - DSGVO Compliance Services | Marsstein',
    description: 'Transparente Preise für DSGVO-Compliance Services.',
    keywords: 'DSGVO Preise, Compliance Kosten'
  },
  '/academy': {
    title: 'Academy - Datenschutz Schulungen | Marsstein',
    description: 'DSGVO, ISO 27001, NIS2 Schulungen und Zertifizierungen.',
    keywords: 'DSGVO Schulung, Datenschutz Training'
  },
  '/dsgvo': {
    title: 'DSGVO Beratung - Compliance Lösungen | Marsstein',
    description: 'Professionelle DSGVO-Beratung und Compliance-Lösungen.',
    keywords: 'DSGVO, GDPR, Datenschutz-Grundverordnung'
  },
  '/iso-27001-zertifizierung': {
    title: 'ISO 27001 Zertifizierung | Marsstein',
    description: 'ISO 27001 Zertifizierung für Informationssicherheit.',
    keywords: 'ISO 27001, ISMS, Zertifizierung'
  },
  '/iso-27017-zertifizierung': {
    title: 'ISO 27017 Cloud-Sicherheit | Marsstein',
    description: 'ISO 27017 Zertifizierung für Cloud-Sicherheit.',
    keywords: 'ISO 27017, Cloud Security'
  },
  '/iso-27018-zertifizierung': {
    title: 'ISO 27018 Cloud-Datenschutz | Marsstein',
    description: 'ISO 27018 Zertifizierung für Cloud-Datenschutz.',
    keywords: 'ISO 27018, Cloud Privacy'
  },
  '/soc2-zertifizierung': {
    title: 'SOC 2 Zertifizierung | Marsstein',
    description: 'SOC 2 Type II Zertifizierung für SaaS Anbieter.',
    keywords: 'SOC2, Trust Service Criteria'
  },
  '/tisax-compliance': {
    title: 'TISAX Automotive Security | Marsstein',
    description: 'TISAX Zertifizierung für die Automobilindustrie.',
    keywords: 'TISAX, VDA ISA, Automotive'
  },
  '/nis2': {
    title: 'NIS2 Richtlinie Compliance | Marsstein',
    description: 'NIS2-Richtlinie für kritische Infrastrukturen.',
    keywords: 'NIS2, Cybersecurity'
  },
  '/eu-ai-act': {
    title: 'EU AI Act Compliance | Marsstein',
    description: 'EU AI Act Compliance für KI-Systeme.',
    keywords: 'EU AI Act, KI-Verordnung'
  },
  '/hinweisgeberschutzgesetz': {
    title: 'Hinweisgeberschutzgesetz | Marsstein',
    description: 'Hinweisgeberschutzgesetz Compliance.',
    keywords: 'HinSchG, Whistleblower'
  },
  '/geldwaeschegesetz': {
    title: 'Geldwäschegesetz GwG | Marsstein',
    description: 'Geldwäschegesetz Compliance.',
    keywords: 'GwG, AML, KYC'
  }
};

// Force inject SEO tags
async function injectSEO(page, route) {
  const seo = SEO_CONFIG[route] || {
    title: `Marsstein - ${route.slice(1) || 'Home'}`,
    description: 'Marsstein DSGVO Compliance',
    keywords: 'DSGVO, Datenschutz'
  };
  
  await page.evaluate((data, path) => {
    // Title
    let title = document.querySelector('title');
    if (!title) {
      title = document.createElement('title');
      document.head.appendChild(title);
    }
    title.textContent = data.title;
    
    // Meta tags
    function setMeta(name, content) {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    }
    
    setMeta('description', data.description);
    setMeta('keywords', data.keywords);
    setMeta('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph
    function setOG(property, content) {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    }
    
    setOG('og:title', data.title);
    setOG('og:description', data.description);
    setOG('og:url', `https://marsstein.com${path}`);
    setOG('og:type', 'website');
    
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://marsstein.com${path}`;
    
    console.log('[SEO] Tags injected for', path);
  }, seo, route);
}

// Prerender route with Playwright
async function prerenderRoute(page, route) {
  try {
    console.log(`  📄 Processing ${route}...`);
    
    // Navigate to page
    await page.goto(`http://localhost:4173${route}`, {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    
    // Wait for React to render
    await page.waitForTimeout(2000);
    
    // Inject SEO tags
    await injectSEO(page, route);
    
    // Wait for SEO to settle
    await page.waitForTimeout(1000);
    
    // Get HTML content
    const html = await page.content();
    
    // Validate SEO
    const hasTitle = html.includes('<title>') && !html.includes('Vite + React');
    const hasDescription = html.includes('meta name="description"');
    
    if (!hasTitle || !hasDescription) {
      console.warn(`  ⚠️  SEO incomplete for ${route}`);
    }
    
    // Save HTML
    const outputPath = route === '/' 
      ? join(__dirname, '..', 'dist', 'index.html')
      : join(__dirname, '..', 'dist', route.slice(1), 'index.html');
    
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html);
    
    console.log(`  ✅ ${route}`);
    return { success: true, route };
    
  } catch (error) {
    console.error(`  ❌ ${route}: ${error.message}`);
    return { success: false, route, error: error.message };
  }
}

// Main function
async function main() {
  console.log('🚀 Starting Playwright SSG with SEO\n');
  
  // Critical routes
  const routes = Object.keys(SEO_CONFIG);
  
  console.log(`📄 Processing ${routes.length} critical routes\n`);
  
  // Start preview server
  console.log('🚀 Starting preview server...');
  const previewProcess = spawn('npm', ['run', 'preview'], {
    stdio: 'pipe',
    shell: true
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Launch Playwright browser
  console.log('🌐 Launching browser...\n');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  // Process all routes
  const results = [];
  
  for (const route of routes) {
    const page = await context.newPage();
    const result = await prerenderRoute(page, route);
    await page.close();
    results.push(result);
  }
  
  // Close browser
  await browser.close();
  
  // Kill preview server
  previewProcess.kill();
  
  // Generate sitemap
  console.log('\n📝 Generating sitemap...');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${results.filter(r => r.success).map(r => `  <url>
    <loc>https://marsstein.com${r.route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${r.route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${r.route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  writeFileSync(join(__dirname, '..', 'dist', 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml created');
  
  // Create redirects
  writeFileSync(join(__dirname, '..', 'dist', '_redirects'), '/* /index.html 200');
  console.log('✅ _redirects created');
  
  // Create robots.txt
  writeFileSync(join(__dirname, '..', 'dist', 'robots.txt'), `User-agent: *
Allow: /
Sitemap: https://marsstein.com/sitemap.xml`);
  console.log('✅ robots.txt created');
  
  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log('\n' + '='.repeat(50));
  console.log('✨ SSG Complete!');
  console.log(`✅ Successful: ${successful}/${routes.length}`);
  if (failed > 0) {
    console.log(`❌ Failed: ${failed}`);
  }
  console.log('='.repeat(50));
  
  process.exit(0);
}

// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('💥 Fatal error:', error);
  process.exit(1);
});

// Run
main().catch(error => {
  console.error('💥 Error:', error);
  process.exit(1);
});