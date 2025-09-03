#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

console.log('🧪 React Hydration Test Tool');
console.log('============================\n');

// Check if dist exists
if (!existsSync(distDir)) {
  console.error('❌ Build directory not found. Run "npm run build:standard" first.');
  process.exit(1);
}

// Start preview server
function startServer() {
  return new Promise((resolve, reject) => {
    console.log('🌐 Starting preview server...');
    
    const server = spawn('npx', ['serve', 'dist', '-p', '5000'], {
      cwd: rootDir,
      stdio: 'pipe',
      shell: true
    });

    setTimeout(() => {
      console.log('✅ Server started on port 5000\n');
      resolve(server);
    }, 2000);

    server.on('error', reject);
  });
}

// Test routes for hydration issues
const testRoutes = [
  '/',
  '/compliance/dsgvo',
  '/wissen/rechtsprechung/schrems-ii',
  '/iso-27001-zertifizierung'
];

async function testHydration() {
  const server = await startServer();
  
  console.log('🎭 Launching browser for hydration tests...\n');
  
  const browser = await puppeteer.launch({
    headless: false, // Set to true for CI/CD
    devtools: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = [];

  for (const route of testRoutes) {
    const page = await browser.newPage();
    
    // Capture console errors
    const errors = [];
    const warnings = [];
    const logs = [];
    
    page.on('console', msg => {
      const text = msg.text();
      if (msg.type() === 'error') {
        errors.push(text);
      } else if (msg.type() === 'warning') {
        warnings.push(text);
      } else if (text.includes('hydration') || text.includes('Hydration')) {
        logs.push(text);
      }
    });

    page.on('pageerror', error => {
      errors.push(error.toString());
    });

    console.log(`\n📄 Testing: ${route}`);
    console.log('─'.repeat(40));
    
    try {
      // Navigate to page
      await page.goto(`http://localhost:5000${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait for React to initialize
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return root && root.children.length > 0;
        },
        { timeout: 10000 }
      );

      // Check for React DevTools
      const hasReactDevTools = await page.evaluate(() => {
        return window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== undefined;
      });

      // Check if hydration script is present
      const hasHydrationScript = await page.evaluate(() => {
        const scripts = Array.from(document.scripts);
        return scripts.some(script => 
          script.innerHTML.includes('Safe hydration') || 
          script.innerHTML.includes('useLayoutEffect')
        );
      });

      // Check for useLayoutEffect errors
      const hasUseLayoutError = errors.some(e => 
        e.includes('useLayoutEffect') || 
        e.includes('Cannot read properties of undefined')
      );

      // Test interactive elements
      const isInteractive = await page.evaluate(() => {
        // Try clicking a button or link
        const button = document.querySelector('button, a');
        if (button) {
          button.click();
          return true;
        }
        return false;
      });

      // Collect results
      results.push({
        route,
        status: errors.length === 0 ? '✅ PASS' : '❌ FAIL',
        errors: errors.length,
        warnings: warnings.length,
        hasReactDevTools,
        hasHydrationScript,
        hasUseLayoutError,
        isInteractive,
        details: {
          errors: errors.slice(0, 3),
          warnings: warnings.slice(0, 3),
          logs
        }
      });

      // Display results
      console.log(`Status: ${errors.length === 0 ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`React DevTools: ${hasReactDevTools ? '✓' : '✗'}`);
      console.log(`Hydration Script: ${hasHydrationScript ? '✓' : '✗'}`);
      console.log(`Interactive: ${isInteractive ? '✓' : '✗'}`);
      
      if (errors.length > 0) {
        console.log(`\n⚠️  Errors (${errors.length}):`);
        errors.slice(0, 3).forEach(e => console.log(`   - ${e}`));
      }
      
      if (warnings.length > 0) {
        console.log(`\n⚠️  Warnings (${warnings.length}):`);
        warnings.slice(0, 3).forEach(w => console.log(`   - ${w}`));
      }

      if (logs.length > 0) {
        console.log(`\n📝 Hydration Logs:`);
        logs.forEach(l => console.log(`   - ${l}`));
      }

    } catch (error) {
      console.error(`❌ Test failed: ${error.message}`);
      results.push({
        route,
        status: '❌ ERROR',
        error: error.message
      });
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.kill();

  // Final Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 HYDRATION TEST SUMMARY');
  console.log('='.repeat(50));

  const passed = results.filter(r => r.status.includes('PASS')).length;
  const failed = results.filter(r => !r.status.includes('PASS')).length;

  results.forEach(r => {
    console.log(`${r.status} ${r.route}`);
    if (r.hasUseLayoutError) {
      console.log('   ⚠️  useLayoutEffect error detected!');
    }
  });

  console.log('\n' + '─'.repeat(50));
  console.log(`Total: ${results.length} | Passed: ${passed} | Failed: ${failed}`);
  
  if (failed === 0) {
    console.log('\n🎉 All hydration tests passed!');
    console.log('✨ Your app is ready for deployment.');
  } else {
    console.log('\n⚠️  Some tests failed. Review the errors above.');
    console.log('💡 Tip: Check for useLayoutEffect usage in SSR context.');
  }

  // Recommendations
  if (results.some(r => r.hasUseLayoutError)) {
    console.log('\n📌 RECOMMENDATIONS:');
    console.log('1. The hydration-safe plugin should prevent useLayoutEffect errors');
    console.log('2. Check if all React hooks are properly imported');
    console.log('3. Ensure React and ReactDOM versions match');
    console.log('4. Try clearing node_modules and reinstalling');
  }

  process.exit(failed > 0 ? 1 : 0);
}

// Run tests
testHydration().catch(error => {
  console.error('❌ Test runner failed:', error);
  process.exit(1);
});