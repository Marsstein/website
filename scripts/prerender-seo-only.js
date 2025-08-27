import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { gzip } from 'zlib';
import { promisify } from 'util';

const gzipAsync = promisify(gzip);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the SEO routes from our generated file
const seoRoutes = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'prerender-routes-simple.json'), 'utf8')
);

const PORT = 3001;
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = path.join(__dirname, '..', 'dist');

// HTML optimization function
async function optimizeHTML(html) {
    // Remove unnecessary whitespace while preserving structure
    let optimized = html
        // Remove comments except for important ones
        .replace(/<!--(?![\s]*(?:if|endif|<!\[))[^>]*?-->/g, '')
        // Clean up whitespace between tags
        .replace(/>\s+</g, '><')
        // Remove trailing whitespace
        .replace(/\s+$/gm, '')
        // Normalize multiple spaces
        .replace(/\s{2,}/g, ' ');
    
    return optimized;
}

// Start Express server
async function startServer() {
    return new Promise((resolve) => {
        const app = express();
        app.use(express.static(DIST_DIR));
        
        // Fallback route for SPA
        app.get('*', (req, res) => {
            res.sendFile(path.join(DIST_DIR, 'index.html'));
        });
        
        const server = app.listen(PORT, () => {
            console.log(`✅ Server running at ${BASE_URL}`);
            resolve(server);
        });
    });
}

// Prerender function
async function prerenderRoute(browser, route) {
    const page = await browser.newPage();
    
    try {
        console.log(`  📄 Rendering: ${route}`);
        
        // Navigate to the route
        await page.goto(`${BASE_URL}${route}`, {
            waitUntil: ['networkidle0', 'domcontentloaded'],
            timeout: 30000
        });
        
        // Wait for React to finish rendering
        await page.waitForTimeout(1000);
        
        // Get the rendered HTML
        let html = await page.content();
        
        // Optimize the HTML
        html = await optimizeHTML(html);
        
        // Create directory structure if needed
        const routePath = route === '/' ? '/index' : route;
        const filePath = path.join(DIST_DIR, `${routePath}.html`);
        const dirPath = path.dirname(filePath);
        
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        
        // Write the prerendered HTML
        fs.writeFileSync(filePath, html);
        
        // Create gzipped version
        const compressed = await gzipAsync(html);
        fs.writeFileSync(`${filePath}.gz`, compressed);
        
        // Also update the main route directory's index.html
        if (route !== '/' && route !== '/index') {
            const indexPath = path.join(DIST_DIR, route, 'index.html');
            const indexDir = path.dirname(indexPath);
            
            if (!fs.existsSync(indexDir)) {
                fs.mkdirSync(indexDir, { recursive: true });
            }
            
            fs.writeFileSync(indexPath, html);
            fs.writeFileSync(`${indexPath}.gz`, compressed);
        }
        
        console.log(`    ✅ Saved: ${filePath}`);
        
        return { route, success: true };
    } catch (error) {
        console.error(`    ❌ Failed: ${route} - ${error.message}`);
        return { route, success: false, error: error.message };
    } finally {
        await page.close();
    }
}

// Main function
async function main() {
    console.log(`\n🚀 Starting SEO-only Prerendering`);
    console.log(`${'='.repeat(80)}\n`);
    console.log(`📊 Routes to prerender: ${seoRoutes.length}`);
    console.log(`📁 Output directory: ${DIST_DIR}\n`);
    
    // Start the server
    const server = await startServer();
    
    // Launch Puppeteer
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    console.log(`\n🎭 Puppeteer launched\n`);
    
    // Process routes in batches for better performance
    const batchSize = 5;
    const results = [];
    
    for (let i = 0; i < seoRoutes.length; i += batchSize) {
        const batch = seoRoutes.slice(i, i + batchSize);
        console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(seoRoutes.length / batchSize)}`);
        
        const batchResults = await Promise.all(
            batch.map(route => prerenderRoute(browser, route))
        );
        
        results.push(...batchResults);
    }
    
    // Close browser and server
    await browser.close();
    server.close();
    
    // Summary
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log(`\n${'='.repeat(80)}`);
    console.log(`✨ Prerendering Complete!\n`);
    console.log(`📊 Summary:`);
    console.log(`  ✅ Successful: ${successful}/${seoRoutes.length}`);
    if (failed > 0) {
        console.log(`  ❌ Failed: ${failed}`);
        console.log(`\n❌ Failed routes:`);
        results.filter(r => !r.success).forEach(r => {
            console.log(`  - ${r.route}: ${r.error}`);
        });
    }
    
    // Save the results
    const reportPath = path.join(__dirname, '..', 'prerender-seo-report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        totalRoutes: seoRoutes.length,
        successful,
        failed,
        results
    }, null, 2));
    
    console.log(`\n📄 Report saved to: ${reportPath}\n`);
}

// Run the script
main().catch(error => {
    console.error('❌ Prerendering failed:', error);
    process.exit(1);
});