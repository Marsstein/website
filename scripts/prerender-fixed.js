import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// SEO-optimized routes to prerender
const routes = [
  '/',
  '/contact',
  '/branchen',
  '/compliance/dsgvo',
  '/compliance/iso-27001',
  '/compliance/eu-ai-act',
  '/compliance/nis2',
  '/wissen',
  '/wissen/dsgvo-leitfaeden',
  '/wissen/rechtsprechung/schrems-ii',
  '/wissen/rechtsprechung/amazon-luxemburg-2021',
  '/tools',
  '/iso-27001-zertifizierung',
  '/dsgvo-compliance',
  '/eu-ai-act-compliance'
];

console.log('🚀 Starting prerender process...');
console.log(`📊 Routes to prerender: ${routes.length}`);

// Start dev server
console.log('🌐 Starting dev server...');
const serverProcess = spawn('npm', ['run', 'preview'], {
  stdio: 'pipe',
  shell: true,
  cwd: join(__dirname, '..')
});

// Handle server output
serverProcess.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('Local:') || output.includes('4173')) {
    console.log('✅ Server started on port 4173');
  }
});

serverProcess.stderr.on('data', (data) => {
  console.error('Server error:', data.toString());
});

// Wait for server to be ready
console.log('⏳ Waiting for server to start...');
await new Promise(resolve => setTimeout(resolve, 5000));

// Launch Puppeteer
const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

async function prerenderRoute(route) {
  const page = await browser.newPage();
  
  try {
    console.log(`\n📄 Prerendering: ${route}`);
    
    // Navigate to the page
    await page.goto(`http://localhost:4173${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for React to hydrate
    await page.waitForFunction(() => {
      const root = document.getElementById('root');
      return root && root.children.length > 0;
    }, { timeout: 10000 });
    
    // Wait for dynamic content
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Get the rendered HTML
    const html = await page.content();
    
    // Check if we have actual content
    const hasContent = html.includes('<h1') || html.includes('<h2');
    if (!hasContent) {
      console.warn(`⚠️  No content found for ${route}`);
      return false;
    }
    
    // Get meta information
    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]', el => el.content).catch(() => null);
    
    console.log(`   ✓ Title: ${title}`);
    if (metaDescription) {
      console.log(`   ✓ Description: ${metaDescription.substring(0, 60)}...`);
    }
    
    // Determine output path
    let outputPath;
    if (route === '/') {
      outputPath = join(__dirname, '..', 'dist');
    } else {
      outputPath = join(__dirname, '..', 'dist', ...route.split('/').filter(Boolean));
      mkdirSync(outputPath, { recursive: true });
    }
    
    // Write the HTML file
    const outputFile = join(outputPath, 'index.html');
    writeFileSync(outputFile, html, 'utf-8');
    
    console.log(`   ✅ Saved to: ${outputFile.replace(join(__dirname, '..'), '.')}`);
    return true;
    
  } catch (error) {
    console.error(`   ❌ Error prerendering ${route}:`, error.message);
    return false;
  } finally {
    await page.close();
  }
}

// Prerender all routes
let successCount = 0;
let failCount = 0;

for (const route of routes) {
  const success = await prerenderRoute(route);
  if (success) {
    successCount++;
  } else {
    failCount++;
  }
}

// Cleanup
await browser.close();
serverProcess.kill('SIGTERM');

// Update sitemap with correct domain
console.log('\n🗺️  Updating sitemap.xml...');
const sitemapPath = join(__dirname, '..', 'dist', 'sitemap.xml');
if (existsSync(sitemapPath)) {
  let sitemap = readFileSync(sitemapPath, 'utf-8');
  sitemap = sitemap.replace(/http:\/\/localhost:8080/g, 'https://marsstein.ai');
  sitemap = sitemap.replace(/http:\/\/localhost:4173/g, 'https://marsstein.ai');
  writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log('   ✅ Sitemap updated with production domain');
}

// Update robots.txt
console.log('\n🤖 Updating robots.txt...');
const robotsPath = join(__dirname, '..', 'dist', 'robots.txt');
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://marsstein.ai/sitemap.xml

# Crawl-delay for responsible crawling
User-agent: *
Crawl-delay: 1
`;
writeFileSync(robotsPath, robotsContent, 'utf-8');
console.log('   ✅ robots.txt updated');

console.log('\n' + '='.repeat(50));
console.log('✨ Prerendering complete!');
console.log(`✅ Successfully prerendered: ${successCount} pages`);
if (failCount > 0) {
  console.log(`⚠️  Failed: ${failCount} pages`);
}
console.log('='.repeat(50));

// Exit cleanly
setTimeout(() => {
  process.exit(0);
}, 1000);