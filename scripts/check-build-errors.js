#!/usr/bin/env node

/**
 * Build Error Checker
 * Attempts to import all page components to catch runtime errors at build time
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '..', 'src', 'pages');

async function checkComponent(filePath) {
  try {
    // Try to dynamically import the component
    await import(filePath);
    return { success: true, file: filePath };
  } catch (error) {
    return {
      success: false,
      file: filePath,
      error: error.message,
      stack: error.stack
    };
  }
}

async function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const errors = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const subErrors = await scanDirectory(fullPath);
      errors.push(...subErrors);
    } else if (entry.name.endsWith('.tsx')) {
      const result = await checkComponent(fullPath);
      if (!result.success) {
        errors.push(result);
      }
    }
  }

  return errors;
}

console.log('🔍 Checking for component errors...\n');

scanDirectory(pagesDir)
  .then(errors => {
    if (errors.length === 0) {
      console.log('✅ All components loaded successfully!');
    } else {
      console.log(`❌ Found ${errors.length} component(s) with errors:\n`);
      errors.forEach(({ file, error }) => {
        const relativePath = path.relative(process.cwd(), file);
        console.log(`\n📄 ${relativePath}`);
        console.log(`   Error: ${error}`);
      });
    }
  })
  .catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
