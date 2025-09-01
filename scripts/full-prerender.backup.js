import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
// Temporär deaktiviert bis format-html.js fertig ist
// import { formatHTML, addDebugComments } from './format-html.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * HTML Optimierungen und Formatierung
 */
function optimizeHtml(html, route) {
  // Entferne Development-spezifische Scripts
  html = html.replace(/<script.*?\/\/@vite\/client.*?<\/script>/g, '');
  
  // WICHTIGER FIX: Title tag ist oft fehlerhaft (fehlt >)
  // Korrigiere zuerst alle malformed title tags
  html = html.replace(/<title(?!>)([^<]*)<\/title>/g, '<title>$1</title>');
  
  // Extract title from the document
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/);
  const titleContent = titleMatch ? titleMatch[1] : '';
  
  // Remove ALL title tags from the document first
  html = html.replace(/<title[^>]*>.*?<\/title>/g, '');
  
  // WICHTIG: Entferne doppelte meta tags (React Helmet cleanup issue)
  // Behalte nur das erste Vorkommen jedes meta tags
  const metaTagMap = new Map();
  
  // Finde alle meta tags
  const metaTagRegex = /<meta\s+([^>]*?)>/g;
  let match;
  const metaTags = [];
  
  while ((match = metaTagRegex.exec(html)) !== null) {
    metaTags.push({
      fullTag: match[0],
      attributes: match[1]
    });
  }
  
  // Filtere doppelte meta tags
  const uniqueMetaTags = [];
  metaTags.forEach(tag => {
    // Extract key attributes (name, property)
    const nameMatch = tag.attributes.match(/name="([^"]+)"/);
    const propertyMatch = tag.attributes.match(/property="([^"]+)"/);
    const key = nameMatch ? `name:${nameMatch[1]}` : propertyMatch ? `property:${propertyMatch[1]}` : null;
    
    if (key) {
      if (!metaTagMap.has(key)) {
        metaTagMap.set(key, tag.fullTag);
        uniqueMetaTags.push(tag.fullTag);
      }
    } else {
      uniqueMetaTags.push(tag.fullTag);
    }
  });
  
  // Ersetze alle meta tags mit den gefilterten
  metaTags.forEach(tag => {
    html = html.replace(tag.fullTag, '');
  });
  
  // Add title tag and meta tags back to head in proper order
  const titleTag = titleContent ? `  <title>${titleContent}</title>\n` : '';
  const metaTagsString = uniqueMetaTags.join('\n  ');
  html = html.replace('</head>', `${titleTag}  ${metaTagsString}\n</head>`);
  
  // Füge canonical URL hinzu wenn nicht vorhanden
  if (!html.includes('rel="canonical"')) {
    const canonicalUrl = `https://marsstein.ai${route}`;
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
  }
  
  // Entferne inline styles die animations blockieren
  html = html.replace(/style="opacity:\s*0[^"]*"/g, '');
  html = html.replace(/style="[^"]*transform:\s*translate[^"]*"/g, '');
  
  // Performance: Füge preload für wichtige Ressourcen hinzu
  const heroImageMatch = html.match(/src="(\/[^"]+\.(?:jpg|png|webp))"/);
  if (heroImageMatch && !html.includes('rel="preload"')) {
    const preloadTag = `  <link rel="preload" as="image" href="${heroImageMatch[1]}" fetchpriority="high" />\n`;
    html = html.replace('</head>', `${preloadTag}</head>`);
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
  
  // Füge Debug-Kommentar hinzu
  html = html.replace('</head>', `  <!-- Prerendered at ${new Date().toISOString()} -->\n</head>`);
  
  // Verbesserte HTML-Formatierung direkt hier
  if (process.env.NODE_ENV !== 'production') {
    // Basis-Formatierung
    html = html
      // Entferne existierende Whitespaces
      .replace(/>\s+</g, '><')
      // Head-Bereich
      .replace(/<head>/g, '<head>\n')
      .replace(/<\/head>/g, '\n</head>')
      .replace(/<meta/g, '\n  <meta')
      .replace(/<link/g, '\n  <link')
      .replace(/<title>/g, '\n  <title')
      .replace(/<script/g, '\n  <script')
      // Body-Bereich
      .replace(/<body/g, '\n<body')
      .replace(/<\/body>/g, '\n</body>')
      .replace(/<div id="root">/g, '\n  <div id="root">\n')
      // Haupt-Container
      .replace(/<div class="([^"]+)">/g, (match, classes) => {
        // Einrückung für Haupt-Container
        if (classes.includes('min-h-screen') || classes.includes('container')) {
          return `\n    ${match}\n`;
        }
        return match;
      })
      // Header, Main, Footer
      .replace(/<(header|main|footer|section|article|nav)([^>]*)>/g, '\n      <$1$2>\n')
      .replace(/<\/(header|main|footer|section|article|nav)>/g, '\n      </$1>\n')
      // Aufräumen
      .replace(/\n\n+/g, '\n\n')
      .replace(/\n\s*\n/g, '\n');
  }
  
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

// Routes to prerender with their specific metadata
const routes = [
  {
    path: '/',
    waitForSelector: 'h1' // Wait for main heading to ensure content is loaded
  },
  {
    path: '/eu-ai-act',
    waitForSelector: 'h1'
  },
  {
    path: '/wissen/rechtsprechung/amazon-luxemburg-2021',
    waitForSelector: 'h1'
  },
  {
    path: '/wissen/rechtsprechung/schrems-ii',
    waitForSelector: 'h1'
  },
  {
    path: '/compliance/dsgvo',
    waitForSelector: 'h1'
  },
  {
    path: '/wissen/dsgvo/grundlagen',
    waitForSelector: 'h1'
  },
  {
    path: '/wissen/compliance/iso-27001',
    waitForSelector: 'h1'
  },
  {
    path: '/nis2-compliance',
    waitForSelector: 'h1'
  },
  {
    path: '/iso-27001-zertifizierung',
    waitForSelector: 'h1'
  },
  {
    path: '/soc2-zertifizierung',
    waitForSelector: 'h1'
  }
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
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  };
  
  // Use system Chrome if available (e.g., in GitHub Actions)
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  }
  
  const browser = await puppeteer.launch(launchOptions);
  
  try {
    const page = await browser.newPage();
    
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
    
    // Wait longer for Helmet to update
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 3000)));
    
    // Then wait for specific meta tag changes
    try {
      await page.waitForFunction(() => {
        const helmetTags = document.querySelectorAll('[data-rh="true"]');
        const description = document.querySelector('meta[name="description"]');
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const title = document.title;
        
        // Check if Helmet has added its tags
        return helmetTags.length > 0 || (
          description && 
          description.content && 
          !description.content.includes('MVP 1.0 Demo') &&
          ogTitle && 
          ogTitle.content &&
          title && 
          title !== 'Marsstein'
        );
      }, { timeout: 15000 });
      
      // Additional wait for all updates to complete
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
      
    } catch (e) {
      console.warn(`Warning: Helmet meta tags not fully loaded for ${route.path}, using fallback wait`);
      // Fallback to fixed wait if meta tags don't appear
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    }
    
    // Verify content is loaded
    try {
      await page.waitForSelector('h1, h2', { timeout: 5000 });
    } catch (e) {
      console.warn(`Warning: No headings found for ${route.path}`);
    }
    
    // Get the fully rendered HTML
    const html = await page.content();
    
    // Debug: Check if meta tags are captured
    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]', el => el.content).catch(() => 'No description found');
    const ogTitle = await page.$eval('meta[property="og:title"]', el => el.content).catch(() => 'No og:title found');
    console.log(`   Title: ${title}`);
    console.log(`   Description: ${metaDescription}`);
    console.log(`   OG Title: ${ogTitle}`);
    
    // Additional debug: Check if HTML contains correct meta tags
    const hasCorrectTitle = html.includes(title);
    const hasCorrectDescription = html.includes(metaDescription);
    console.log(`   HTML contains correct title: ${hasCorrectTitle}`);
    console.log(`   HTML contains correct description: ${hasCorrectDescription}`);
    
    // Optimize and format HTML for better source readability
    const optimizedHtml = optimizeHtml(html, route.path);
    
    // Create directory structure
    const outputPath = join(__dirname, '..', 'dist', route.path.slice(1));
    mkdirSync(outputPath, { recursive: true });
    
    // Write the HTML file
    writeFileSync(join(outputPath, 'index.html'), optimizedHtml);
    
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