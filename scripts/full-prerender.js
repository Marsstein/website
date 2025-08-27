import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import prettier from 'prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Format HTML for better readability using Prettier
 */
async function formatHTML(html) {
  try {
    const formatted = await prettier.format(html, {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      singleQuote: false,
      bracketSpacing: true,
      htmlWhitespaceSensitivity: 'css',
      endOfLine: 'lf',
      semi: true,
      arrowParens: 'avoid'
    });
    return formatted;
  } catch (error) {
    console.warn('⚠️  Prettier formatting failed, using fallback formatter:', error.message);
    // Fallback to simple formatting
    return html
      .replace(/(<!DOCTYPE[^>]*>)/i, '$1\n')
      .replace(/(<html[^>]*>)/i, '$1\n')
      .replace(/(<head[^>]*>)/i, '$1\n')
      .replace(/(<\/head>)/i, '\n$1\n')
      .replace(/(<meta[^>]*>)/g, '  $1\n')
      .replace(/(<link[^>]*>)/g, '  $1\n')
      .replace(/(<title[^>]*>)/g, '  $1')
      .replace(/(<\/title>)/g, '$1\n')
      .replace(/(<script[^>]*>)(<\/script>)/g, '  $1$2\n')
      .replace(/(<style[^>]*>)/g, '  $1')
      .replace(/(<\/style>)/g, '$1\n')
      .replace(/(<body[^>]*>)/i, '\n$1\n')
      .replace(/(<\/body>)/i, '\n$1\n')
      .replace(/(<\/html>)/i, '$1\n')
      .replace(/\n{3,}/g, '\n\n');
  }
}

/**
 * HTML Optimierungen und Formatierung
 */
function optimizeHtml(html, route) {
  // Entferne Development-spezifische Scripts
  html = html.replace(/<script.*?\/\/@vite\/client.*?<\/script>/g, '');
  
  // Entferne inline styles die animations blockieren
  html = html.replace(/style="opacity:\s*0[^"]*"/g, '');
  html = html.replace(/style="[^"]*transform:\s*translate[^"]*"/g, '');
  
  // Fix encoding issues
  html = html
    .replace(/Ã¤/g, 'ä')
    .replace(/Ã¶/g, 'ö')
    .replace(/Ã¼/g, 'ü')
    .replace(/Ã„/g, 'Ä')
    .replace(/Ã–/g, 'Ö')
    .replace(/Ãœ/g, 'Ü')
    .replace(/ÃŸ/g, 'ß')
    .replace(/â€™/g, "'")
    .replace(/â€"/g, '–')
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€¢/g, '•')
    .replace(/â€¦/g, '…');

  // Fix malformed title tags
  html = html.replace(/<title([^>]*)>([^<]+)<\/title>/gi, (match, attrs, content) => {
    // Don't remove content that looks like valid title beginnings
    return `<title${attrs}>${content}</title>`;
  });
  
  // Reorder head elements to ensure proper SEO tag positioning
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/);
  if (headMatch) {
    let headContent = headMatch[1];
    
    // Extract different types of elements
    const elements = {
      charset: [],
      viewport: [],
      title: [],
      helmetMeta: [],
      helmetLink: [],
      otherMeta: [],
      preloadLinks: [],
      stylesheetLinks: [],
      inlineStyles: [],
      scripts: [],
      other: []
    };
    
    // Extract charset meta tag
    const charsetMatches = headContent.match(/<meta\s+charset[^>]*>/gi) || [];
    elements.charset = charsetMatches;
    charsetMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract viewport meta tag
    const viewportMatches = headContent.match(/<meta\s+name=["']viewport["'][^>]*>/gi) || [];
    elements.viewport = viewportMatches;
    viewportMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract title tag
    const titleMatches = headContent.match(/<title[^>]*>[\s\S]*?<\/title>/gi) || [];
    elements.title = titleMatches;
    titleMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract React Helmet meta tags (with data-rh="true")
    const helmetMetaMatches = headContent.match(/<meta[^>]*data-rh=["']true["'][^>]*>/gi) || [];
    elements.helmetMeta = helmetMetaMatches;
    helmetMetaMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract React Helmet link tags (with data-rh="true")
    const helmetLinkMatches = headContent.match(/<link[^>]*data-rh=["']true["'][^>]*>/gi) || [];
    elements.helmetLink = helmetLinkMatches;
    helmetLinkMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract other meta tags
    const otherMetaMatches = headContent.match(/<meta[^>]*>/gi) || [];
    elements.otherMeta = otherMetaMatches;
    otherMetaMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract preload links
    const preloadLinkMatches = headContent.match(/<link[^>]*rel=["']preload["'][^>]*>/gi) || [];
    elements.preloadLinks = preloadLinkMatches;
    preloadLinkMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract stylesheet links
    const stylesheetLinkMatches = headContent.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || [];
    elements.stylesheetLinks = stylesheetLinkMatches;
    stylesheetLinkMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract inline styles
    const styleMatches = headContent.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
    elements.inlineStyles = styleMatches;
    styleMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract script tags
    const scriptMatches = headContent.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || [];
    elements.scripts = scriptMatches;
    scriptMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Extract remaining link tags
    const remainingLinkMatches = headContent.match(/<link[^>]*>/gi) || [];
    remainingLinkMatches.forEach(tag => { headContent = headContent.replace(tag, ''); });
    
    // Performance: Füge preload für wichtige Ressourcen hinzu
    const heroImageMatch = html.match(/src="(\/[^"]+\.(?:jpg|png|webp))"/);
    if (heroImageMatch && !elements.preloadLinks.some(link => link.includes(heroImageMatch[1]))) {
      elements.preloadLinks.push(`<link rel="preload" as="image" href="${heroImageMatch[1]}" fetchpriority="high" />`);
    }
    
    // Füge canonical URL hinzu wenn nicht vorhanden
    if (!elements.helmetLink.some(link => link.includes('rel="canonical"')) && 
        !remainingLinkMatches.some(link => link.includes('rel="canonical"'))) {
      const canonicalUrl = `https://marsstein.com${route}`;
      elements.helmetLink.push(`<link rel="canonical" href="${canonicalUrl}" data-rh="true" />`);
    }
    
    // Remaining content
    elements.other = [headContent.trim()];
    
    // Rebuild head in correct SEO order
    const orderedElements = [
      ...elements.charset,
      ...elements.viewport,
      ...elements.title,
      ...elements.helmetMeta,     // React Helmet SEO meta tags come early
      ...elements.helmetLink,     // React Helmet canonical and other SEO links
      ...elements.otherMeta,      // Other meta tags
      ...elements.preloadLinks,   // Preload hints
      ...remainingLinkMatches,    // Other links
      ...elements.stylesheetLinks, // Stylesheets
      ...elements.inlineStyles,   // Inline styles come after SEO tags
      ...elements.scripts,        // Scripts
      ...elements.other.filter(Boolean),
      `<!-- Prerendered at ${new Date().toISOString()} -->`
    ].filter(Boolean);
    
    // Format the head content properly
    const formattedHead = orderedElements
      .map(element => `  ${element}`)
      .join('\n');
    
    html = html.replace(headMatch[0], `<head>\n${formattedHead}\n</head>`);
  }
  
  // Füge width/height zu Bildern hinzu um Layout Shifts zu vermeiden
  html = html.replace(/<img([^>]+)src="([^"]+)"([^>]*)>/g, (match, pre, src, post) => {
    if (!match.includes('width=') && !match.includes('height=')) {
      // Standard-Größen für bekannte Bilder
      if (src.includes('hero')) {
        return `<img${pre}src="${src}" width="1920" height="1080"${post}>`;
      } else if (src.includes('icon') || src.includes('logo')) {
        return `<img${pre}src="${src}" width="64" height="64"${post}>`;
      }
    }
    return match;
  });
  
  // Ensure proper DOCTYPE
  if (!html.startsWith('<!DOCTYPE')) {
    html = '<!DOCTYPE html>\n' + html;
  }
  
  // Final formatting pass
  html = html
    .replace(/\n\s*\n\s*\n/g, '\n\n')  // Remove excessive newlines
    .replace(/^\s*$/gm, '');            // Remove empty lines
  
  return html;
}

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT, cleaning up...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, cleaning up...');
  process.exit(0);
});

// Routes to prerender - comprehensive list of all important routes with SEO
const routes = [
  // Homepage
  { path: '/', waitForSelector: 'h1' },
  
  // Main compliance pages (using actual routes from App.tsx)
  { path: '/dsgvo', waitForSelector: 'h1' }, // DsgvoCompliance page with SEO
  { path: '/eu-ai-act', waitForSelector: 'h1' },
  { path: '/nis2-compliance', waitForSelector: 'h1' },
  { path: '/iso-27001-zertifizierung', waitForSelector: 'h1' },
  { path: '/soc2-zertifizierung', waitForSelector: 'h1' },
  { path: '/tisax-compliance', waitForSelector: 'h1' }, // Correct route
  { path: '/tisax-zertifizierung', waitForSelector: 'h1' }, // Alternative route
  { path: '/iso-27017-compliance', waitForSelector: 'h1' }, // Correct route
  { path: '/iso-27017-zertifizierung', waitForSelector: 'h1' }, // Alternative route
  { path: '/iso-27018-compliance', waitForSelector: 'h1' }, // Correct route
  { path: '/iso-27018-zertifizierung', waitForSelector: 'h1' }, // Alternative route
  { path: '/geldwaeschegesetz', waitForSelector: 'h1' },
  { path: '/hinweisgeberschutzgesetz', waitForSelector: 'h1' },
  { path: '/kdg', waitForSelector: 'h1' },
  { path: '/compliance/dsg-ekd', waitForSelector: 'h1' },
  { path: '/compliance/kdg', waitForSelector: 'h1' },
  
  // Knowledge base - DSGVO
  { path: '/wissen', waitForSelector: 'h1' },
  { path: '/wissen/dsgvo', waitForSelector: 'h1' },
  { path: '/wissen/dsgvo/grundlagen', waitForSelector: 'h1' },
  { path: '/wissen/dsgvo-leitfaeden', waitForSelector: 'h1' },
  
  // Knowledge base - Compliance
  { path: '/wissen/compliance/iso-27001', waitForSelector: 'h1' },
  { path: '/wissen/compliance-frameworks', waitForSelector: 'h1' },
  { path: '/wissen/ki-compliance', waitForSelector: 'h1' },
  { path: '/wissen/cybersecurity', waitForSelector: 'h1' },
  { path: '/wissen/risk-management', waitForSelector: 'h1' },
  
  // Legal cases
  { path: '/wissen/rechtsprechung/schrems-ii', waitForSelector: 'h1' },
  { path: '/wissen/rechtsprechung/amazon-luxemburg-2021', waitForSelector: 'h1' },
  { path: '/wissen/rechtsprechung/facebook-fanpage', waitForSelector: 'h1' },
  { path: '/wissen/rechtsprechung/google-analytics-austria', waitForSelector: 'h1' },
  
  // Industries
  { path: '/branchen', waitForSelector: 'h1' },
  { path: '/branchen/automotive', waitForSelector: 'h1' },
  { path: '/branchen/e-commerce', waitForSelector: 'h1' },
  { path: '/branchen/energie', waitForSelector: 'h1' },
  { path: '/branchen/finanzdienstleister', waitForSelector: 'h1' },
  { path: '/branchen/gesundheitswesen', waitForSelector: 'h1' },
  { path: '/branchen/lebensmittel', waitForSelector: 'h1' },
  { path: '/branchen/logistik', waitForSelector: 'h1' },
  { path: '/branchen/produktion', waitForSelector: 'h1' },
  { path: '/branchen/saas-unternehmen', waitForSelector: 'h1' },
  
  // Industry knowledge pages
  { path: '/wissen/branchen/gesundheitswesen-dsgvo', waitForSelector: 'h1' },
  { path: '/wissen/branchen/healthcare-ai-compliance', waitForSelector: 'h1' },
  { path: '/wissen/branchen/insurtech-compliance', waitForSelector: 'h1' },
  { path: '/wissen/branchen/proptech-compliance', waitForSelector: 'h1' },
  { path: '/wissen/branchen/travel-compliance', waitForSelector: 'h1' },
  { path: '/wissen/branchen/edtech-privacy', waitForSelector: 'h1' },
  
  // Tools & Assessment
  { path: '/tools', waitForSelector: 'h1' },
  { path: '/assessment-center', waitForSelector: 'h1' },
  { path: '/tools/compliance-ai-assistant', waitForSelector: 'h1' },
  { path: '/tools/cookie-management', waitForSelector: 'h1' },
  { path: '/tools/dsgvo-compliance-scorecard', waitForSelector: 'h1' },
  { path: '/tools/dsgvo-email-template-generator', waitForSelector: 'h1' },
  
  // Assessment tools
  { path: '/assessment-center/ai-governance-check', waitForSelector: 'h1' },
  { path: '/assessment-center/ai-risk-assessment', waitForSelector: 'h1' },
  { path: '/assessment-center/algorithmic-impact-assessment', waitForSelector: 'h1' },
  { path: '/assessment-center/dsgvo-compliance-checklist', waitForSelector: 'h1' },
  { path: '/assessment-center/isms-maturity-assessment', waitForSelector: 'h1' },
  { path: '/assessment-center/soc2-readiness-assessment', waitForSelector: 'h1' },
  { path: '/assessment-center/breach-response-checklist', waitForSelector: 'h1' },
  { path: '/assessment-center/cookie-compliance-audit', waitForSelector: 'h1' },
  { path: '/assessment-center/datenschutz-readiness-assessment', waitForSelector: 'h1' },
  { path: '/assessment-center/vendor-assessment-template', waitForSelector: 'h1' },
  
  // Guides
  { path: '/wissen/leitfaden/dsgvo-grundlagen', waitForSelector: 'h1' },
  { path: '/wissen/leitfaden/dsgvo-30-tage', waitForSelector: 'h1' },
  { path: '/wissen/leitfaden/betroffenenrechte', waitForSelector: 'h1' },
  { path: '/wissen/leitfaden/verarbeitungsverzeichnis', waitForSelector: 'h1' },
  { path: '/wissen/leitfaden/tom-massnahmen', waitForSelector: 'h1' },
  { path: '/wissen/leitfaden/dsfa-durchfuehrung', waitForSelector: 'h1' },
  { path: '/wissen/leitfaden/data-breach-notfall', waitForSelector: 'h1' },
  { path: '/wissen/leitfaden/website-dsgvo', waitForSelector: 'h1' },
  
  // Compliance guides
  { path: '/compliance/kdg', waitForSelector: 'h1' },
  
  // Other important pages
  { path: '/academy', waitForSelector: 'h1' },
  { path: '/pricing', waitForSelector: 'h1' },
  { path: '/contact', waitForSelector: 'h1' },
  { path: '/dashboard', waitForSelector: 'h1' },
  { path: '/thank-you', waitForSelector: 'h1' }
];

// Start preview server
console.log('🚀 Starting preview server...');
const previewProcess = spawn('npm', ['run', 'preview'], {
  stdio: 'pipe',
  shell: true
});

// Wait for server to start
await new Promise(resolve => setTimeout(resolve, 5000));

async function prerenderRoute(route) {
  const launchOptions = { 
    headless: 'new',
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--lang=de-DE',  // Ensure German locale
      '--accept-lang=de-DE,de'
    ]
  };
  
  // Use system Chrome if available (e.g., in GitHub Actions)
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  }
  
  const browser = await puppeteer.launch(launchOptions);
  
  try {
    const page = await browser.newPage();
    
    // Set proper encoding and locale
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'de-DE,de;q=0.9,en;q=0.8',
      'Accept-Charset': 'utf-8'
    });
    
    // Override navigator.languages to ensure German locale
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', {
        get: function() { return 'de-DE'; }
      });
      Object.defineProperty(navigator, 'languages', {
        get: function() { return ['de-DE', 'de']; }
      });
    });
    
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log(`📄 Prerendering: ${route.path}`);
    
    // Navigate to the route
    await page.goto(`http://localhost:4173${route.path}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content to load
    if (route.waitForSelector) {
      await page.waitForSelector(route.waitForSelector, { timeout: 10000 });
    }
    
    // Wait for React app to fully hydrate
    await page.waitForFunction(() => {
      // Check if React root is mounted
      const root = document.getElementById('root');
      return root && root.children.length > 0;
    }, { timeout: 10000 });
    
    // Wait for React Helmet to update meta tags
    console.log('   Waiting for meta tags to update...');
    
    // Give React Helmet plenty of time to update all tags
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));
    
    // Wait for all React Helmet tags to be present
    try {
      await page.waitForFunction(() => {
        // Check for essential SEO tags
        const hasDescription = document.querySelector('meta[name="description"][data-rh="true"]');
        const hasOgTitle = document.querySelector('meta[property="og:title"][data-rh="true"]');
        const hasOgDescription = document.querySelector('meta[property="og:description"][data-rh="true"]');
        const hasCanonical = document.querySelector('link[rel="canonical"][data-rh="true"]');
        const hasTitle = document.title && document.title !== 'Marsstein';
        
        return hasDescription && hasOgTitle && hasOgDescription && hasCanonical && hasTitle;
      }, { timeout: 10000 });
      
    } catch (e) {
      console.warn(`⚠️  Some SEO tags may be missing for ${route.path}`);
    }
    
    // Additional wait to ensure all updates are complete
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    
    // Get the fully rendered HTML
    let html = await page.content();
    
    // Debug: Check if meta tags are captured
    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]', el => el.content).catch(() => 'No description found');
    const ogTitle = await page.$eval('meta[property="og:title"]', el => el.content).catch(() => 'No og:title found');
    const canonicalUrl = await page.$eval('link[rel="canonical"]', el => el.href).catch(() => 'No canonical found');
    
    console.log(`   Title: ${title}`);
    console.log(`   Description: ${metaDescription}`);
    console.log(`   OG Title: ${ogTitle}`);
    console.log(`   Canonical: ${canonicalUrl}`);
    
    // Optimize HTML first
    html = optimizeHtml(html, route.path);
    
    // Then format HTML for better readability with Prettier
    html = await formatHTML(html);
    
    // Create directory structure
    const outputPath = join(__dirname, '..', 'dist', route.path.slice(1));
    mkdirSync(outputPath, { recursive: true });
    
    // Write the HTML file with proper UTF-8 encoding
    writeFileSync(join(outputPath, 'index.html'), html, { encoding: 'utf8' });
    
    console.log(`✅ Prerendered: ${route.path}`);
    
  } catch (error) {
    console.error(`❌ Failed to prerender ${route.path}:`, error.message);
  } finally {
    await browser.close();
  }
}

// Prerender all routes
console.log('🎯 Starting prerendering process...\n');

for (const route of routes) {
  await prerenderRoute(route);
}

// Kill the preview server
previewProcess.kill('SIGTERM');

// Force kill after a short delay to ensure cleanup
setTimeout(() => {
  process.exit(0);
}, 1000);

console.log(`\n✨ Prerendered ${routes.length} routes successfully!`);
console.log('📦 Build complete with full HTML content for SEO.');