import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

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
    path: '/wissen/rechtsprechung/amazon-luxemburg-2021',
    waitForSelector: 'h1' // Wait for main heading to ensure content is loaded
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
  // Add more critical SEO pages
  {
    path: '/',
    waitForSelector: 'h1'
  },
  {
    path: '/eu-ai-act',
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
    
    // Wait additional time for React Helmet to update meta tags
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 3000)));
    
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
    console.log(`   Title: ${title}`);
    console.log(`   Description: ${metaDescription}`);
    
    // Create directory structure
    const outputPath = join(__dirname, '..', 'dist', route.path.slice(1));
    mkdirSync(outputPath, { recursive: true });
    
    // Write the HTML file
    writeFileSync(join(outputPath, 'index.html'), html);
    
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