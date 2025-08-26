import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Enhanced HTML Optimization with better React Helmet handling
 */
function optimizeHtml(html, route) {
  // Entferne Development-spezifische Scripts
  html = html.replace(/<script.*?\/\/@vite\/client.*?<\/script>/g, '');
  
  // CRITICAL FIX: React Helmet often outputs malformed title tags like <titleContent instead of <title>Content
  // This regex fixes various malformed patterns
  html = html.replace(/<title([^>]*)(?!>)/g, (match, content) => {
    // If there's content directly after title without >, it's malformed
    if (content && !content.startsWith('>')) {
      // Extract the actual title content
      const titleMatch = match.match(/<title(.+?)(?:<\/title>|$)/);
      if (titleMatch && titleMatch[1]) {
        return `<title>${titleMatch[1]}`;
      }
    }
    return match;
  });
  
  // Also fix cases where title content is directly attached: <titleSOC becomes <title>SOC
  html = html.replace(/<title([A-Z][^<]*)<\/title>/g, '<title>$1</title>');
  
  // Extract title content after fixes
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const titleContent = titleMatch ? titleMatch[1] : '';
  
  // Remove ALL title tags to rebuild properly
  html = html.replace(/<title[^>]*>.*?<\/title>/g, '');
  
  // Handle meta tags deduplication
  const metaTagMap = new Map();
  const metaTagRegex = /<meta\s+([^>]*?)>/g;
  let match;
  const metaTags = [];
  
  while ((match = metaTagRegex.exec(html)) !== null) {
    metaTags.push({
      fullTag: match[0],
      attributes: match[1]
    });
  }
  
  // Filter duplicates, keeping only the first occurrence
  const uniqueMetaTags = [];
  metaTags.forEach(tag => {
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
  
  // Remove all meta tags
  metaTags.forEach(tag => {
    html = html.replace(tag.fullTag, '');
  });
  
  // Rebuild head section with proper formatting
  const titleTag = titleContent ? `  <title>${titleContent}</title>\n` : '';
  const metaTagsString = uniqueMetaTags.join('\n  ');
  html = html.replace('</head>', `${titleTag}  ${metaTagsString}\n</head>`);
  
  // Add canonical if missing
  if (!html.includes('rel="canonical"')) {
    const canonicalUrl = `https://marsstein.com${route}`;
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
  }
  
  // Clean up any remaining malformed tags in body
  const bodyStart = html.indexOf('<body');
  if (bodyStart !== -1) {
    const beforeBody = html.substring(0, bodyStart);
    let afterBodyTag = html.substring(bodyStart);
    // Remove any title tags that ended up in body
    afterBodyTag = afterBodyTag.replace(/<title[^>]*>.*?<\/title>/g, '');
    html = beforeBody + afterBodyTag;
  }
  
  // Remove animation-blocking styles
  html = html.replace(/style="opacity:\s*0[^"]*"/g, '');
  html = html.replace(/style="[^"]*transform:\s*translate[^"]*"/g, '');
  
  // Add performance hints
  const heroImageMatch = html.match(/src="(\/[^"]+\.(?:jpg|png|webp))"/);
  if (heroImageMatch && !html.includes('rel="preload"')) {
    const preloadTag = `  <link rel="preload" as="image" href="${heroImageMatch[1]}" fetchpriority="high" />\n`;
    html = html.replace('</head>', `${preloadTag}</head>`);
  }
  
  // Format HTML for development
  if (process.env.NODE_ENV === 'development') {
    html = formatHtmlForDev(html);
  }
  
  // Add debug comment
  html = html.replace('</head>', `  <!-- Prerendered at ${new Date().toISOString()} -->\n</head>`);
  
  return html;
}

/**
 * Format HTML for better readability in development
 */
function formatHtmlForDev(html) {
  return html
    .replace(/>\s+</g, '><')
    .replace(/<head>/g, '<head>\n')
    .replace(/<\/head>/g, '\n</head>')
    .replace(/<meta/g, '\n  <meta')
    .replace(/<link/g, '\n  <link')
    .replace(/<title>/g, '\n  <title>')
    .replace(/<script/g, '\n  <script')
    .replace(/<body/g, '\n<body')
    .replace(/<\/body>/g, '\n</body>')
    .replace(/\n\n+/g, '\n');
}

// Routes configuration
const routes = [
  { path: '/', waitForSelector: 'h1' },
  { path: '/eu-ai-act', waitForSelector: 'h1' },
  { path: '/soc2-zertifizierung', waitForSelector: 'h1' },
  { path: '/nis2-compliance', waitForSelector: 'h1' },
  { path: '/iso-27001-zertifizierung', waitForSelector: 'h1' },
  { path: '/wissen/rechtsprechung/amazon-luxemburg-2021', waitForSelector: 'h1' },
  { path: '/wissen/rechtsprechung/schrems-ii', waitForSelector: 'h1' },
  { path: '/compliance/dsgvo', waitForSelector: 'h1' },
  { path: '/wissen/dsgvo/grundlagen', waitForSelector: 'h1' },
  { path: '/wissen/compliance/iso-27001', waitForSelector: 'h1' }
];

// Process handling
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT, cleaning up...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, cleaning up...');
  process.exit(0);
});

// Start preview server
console.log('🚀 Starting preview server...');
const previewProcess = spawn('npm', ['run', 'preview'], {
  stdio: 'pipe',
  shell: true
});

// Wait for server
await new Promise(resolve => setTimeout(resolve, 5000));

async function prerenderRoute(route) {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log(`📄 Prerendering: ${route.path}`);
    
    // Navigate
    await page.goto(`http://localhost:4173${route.path}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content
    if (route.waitForSelector) {
      await page.waitForSelector(route.waitForSelector, { timeout: 10000 });
    }
    
    // IMPORTANT: Extra wait for React Helmet to properly update ALL tags
    console.log('   Waiting for React Helmet to update all tags...');
    await page.waitForFunction(() => {
      // Check if React has finished rendering
      const root = document.getElementById('root');
      if (!root || root.children.length === 0) return false;
      
      // Check if Helmet has updated the head
      const helmetTags = document.querySelectorAll('[data-rh="true"]');
      const title = document.title;
      const hasTitle = title && title !== '' && title !== 'Marsstein';
      
      // Wait until we have helmet tags and a proper title
      return helmetTags.length > 0 && hasTitle;
    }, { timeout: 15000 });
    
    // Additional wait to ensure all async updates are complete
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Get HTML
    const html = await page.content();
    
    // Debug logging
    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]', el => el.content).catch(() => 'Not found');
    console.log(`   Title: ${title}`);
    console.log(`   Description: ${metaDescription}`);
    
    // Verify title is present in HTML
    if (!html.includes(`<title>${title}</title>`) && !html.includes(`<title${title}`)) {
      console.warn(`   ⚠️  Warning: Title may be malformed in HTML`);
    }
    
    // Optimize HTML with enhanced fixes
    const optimizedHtml = optimizeHtml(html, route.path);
    
    // Save
    const outputPath = join(__dirname, '..', 'dist', route.path.slice(1));
    mkdirSync(outputPath, { recursive: true });
    writeFileSync(join(outputPath, 'index.html'), optimizedHtml);
    
    console.log(`✅ Prerendered: ${route.path}`);
    
  } catch (error) {
    console.error(`❌ Failed to prerender ${route.path}:`, error.message);
  } finally {
    await browser.close();
  }
}

// Main execution
console.log('🎯 Starting enhanced prerendering with React Helmet fixes...\n');

for (const route of routes) {
  await prerenderRoute(route);
}

// Cleanup
previewProcess.kill('SIGTERM');
setTimeout(() => process.exit(0), 1000);

console.log(`\n✨ Prerendered ${routes.length} routes with React Helmet fixes!`);
console.log('📦 Build complete with properly formatted SEO tags.');