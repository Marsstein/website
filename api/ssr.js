import { readFileSync } from 'fs';
import { join } from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from '../src/App';
import prettier from 'prettier';

export default async function handler(req, res) {
  try {
    const url = req.url || '/';
    
    // Create helmet context
    const helmetContext = {};
    
    // Render React app to string
    const html = renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    );
    
    // Extract helmet data
    const { helmet } = helmetContext;
    
    // Read base HTML template
    const template = readFileSync(
      join(process.cwd(), 'dist', 'index.html'),
      'utf-8'
    );
    
    // Replace placeholders with rendered content
    let finalHtml = template
      .replace('<!--helmet-title-->', helmet.title.toString())
      .replace('<!--helmet-meta-->', helmet.meta.toString())
      .replace('<!--helmet-link-->', helmet.link.toString())
      .replace('<!--helmet-script-->', helmet.script.toString())
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    
    // Format HTML with Prettier
    finalHtml = await prettier.format(finalHtml, {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2,
      useTabs: false
    });
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(finalHtml);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
}