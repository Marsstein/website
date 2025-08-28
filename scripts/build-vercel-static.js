#!/usr/bin/env node

/**
 * Vercel Static Build with React Helmet SSR
 * Renders React components server-side to capture Helmet tags
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import puppeteer from 'puppeteer-core';
import prettier from 'prettier';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load all routes
const allRoutes = JSON.parse(
  readFileSync(join(__dirname, '..', 'prerender-routes-simple.json'), 'utf-8')
);

/**
 * Format HTML with Prettier
 */
async function formatHTML(html) {
  try {
    return await prettier.format(html, {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      singleQuote: false,
      bracketSpacing: true,
      htmlWhitespaceSensitivity: 'css',
      endOfLine: 'lf'
    });
  } catch (error) {
    console.warn('Prettier formatting failed:', error.message);
    return html;
  }
}

/**
 * Static rendering approach - no browser needed
 */
async function buildStatic() {
  console.log('🚀 Starting Vercel Static SEO Build...\n');
  
  try {
    // 1. Build the app
    console.log('📦 Building application...');
    await execAsync('npm run build');
    
    // 2. Start a local server
    console.log('🌐 Starting preview server...');
    const serverProcess = exec('npm run preview -- --port 5173', {
      stdio: 'pipe'
    });
    
    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // 3. Use Chrome that comes with Vercel
    console.log('🔍 Rendering pages with SEO tags...\n');
    
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: process.env.CHROME_BIN || '/usr/bin/google-chrome-stable'
    });
    
    for (const route of allRoutes) {
      try {
        const page = await browser.newPage();
        
        // Navigate and wait for React
        await page.goto(`http://localhost:5173${route}`, {
          waitUntil: 'networkidle0',
          timeout: 30000
        });
        
        // Wait for React Helmet to update
        await page.waitForFunction(() => {
          const hasHelmetTags = document.querySelector('meta[data-rh="true"]');
          const hasTitle = document.title && document.title !== 'Vite + React';
          return hasHelmetTags && hasTitle;
        }, { timeout: 10000 }).catch(() => {});
        
        // Get HTML
        let html = await page.content();
        
        // Clean up development artifacts
        html = html.replace(/<script.*?\/\/@vite\/client.*?<\/script>/g, '');
        
        // Format HTML
        html = await formatHTML(html);
        
        // Write to file
        const outputPath = route === '/' 
          ? join(__dirname, '..', 'dist', 'index.html')
          : join(__dirname, '..', 'dist', route, 'index.html');
        
        mkdirSync(dirname(outputPath), { recursive: true });
        writeFileSync(outputPath, html);
        
        console.log(`✅ Rendered: ${route}`);
        
        await page.close();
      } catch (error) {
        console.error(`❌ Failed to render ${route}:`, error.message);
      }
    }
    
    await browser.close();
    
    // Kill server
    serverProcess.kill();
    
    console.log('\n✨ Build complete!');
    console.log(`📄 Rendered ${allRoutes.length} pages with SEO tags`);
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Execute
buildStatic();