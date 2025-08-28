/**
 * Vercel Edge Function for SEO rendering
 * Serves pre-built files but injects proper SEO tags at runtime
 */

import { readFileSync } from 'fs';
import { join } from 'path';

// SEO data for all routes
const seoData = {
  '/': {
    title: 'Marsstein - KI-native Compliance Platform | DSGVO, ISO 27001 & EU AI Act',
    description: 'Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act. Automatisieren Sie Ihre Compliance-Prozesse im DACH-Raum.',
    keywords: 'Compliance Software, DSGVO, ISO 27001, EU AI Act, KI Compliance, DACH',
    image: 'https://marsstein.ai/og-marsstein-home.png'
  },
  '/iso-27001-zertifizierung': {
    title: 'ISO 27001 Zertifizierung | Compliance Management Software | Marsstein',
    description: 'ISO 27001 Zertifizierung vereinfacht. Gap-Analyse, Dokumentation und Audit-Vorbereitung mit KI-Unterstützung.',
    keywords: 'ISO 27001, Zertifizierung, ISMS, Informationssicherheit, Compliance Management',
    image: 'https://marsstein.ai/og-iso27001.png'
  },
  // ... add more routes
};

// Function to inject SEO tags
function injectSEO(html, path) {
  const data = seoData[path] || generateDefaultSEO(path);
  const baseUrl = 'https://marsstein.ai';
  
  // Create meta tags
  const seoTags = `
    <title>${data.title}</title>
    <meta name="description" content="${data.description}" data-rh="true">
    <meta name="keywords" content="${data.keywords}" data-rh="true">
    <meta property="og:title" content="${data.title}" data-rh="true">
    <meta property="og:description" content="${data.description}" data-rh="true">
    <meta property="og:image" content="${data.image}" data-rh="true">
    <meta property="og:url" content="${baseUrl}${path}" data-rh="true">
    <meta property="twitter:title" content="${data.title}" data-rh="true">
    <meta property="twitter:description" content="${data.description}" data-rh="true">
    <meta property="twitter:image" content="${data.image}" data-rh="true">
    <link rel="canonical" href="${baseUrl}${path}" data-rh="true">
  `;
  
  // Replace existing head tags or inject new ones
  if (html.includes('<title>')) {
    html = html.replace(/<title>.*?<\/title>/s, '');
  }
  
  // Inject right after <head>
  html = html.replace('<head>', `<head>\n${seoTags}`);
  
  return html;
}

// Generate default SEO for undefined routes
function generateDefaultSEO(path) {
  const segments = path.split('/').filter(Boolean);
  const pageName = segments[segments.length - 1] || 'Home';
  const title = `${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Marsstein`;
  
  return {
    title,
    description: `${title} - Compliance-Lösungen und Automatisierung mit Marsstein.`,
    keywords: `${pageName.replace(/-/g, ' ')}, Compliance, Marsstein`,
    image: 'https://marsstein.ai/og-default.png'
  };
}

export default function handler(req, res) {
  try {
    const path = req.url || '/';
    
    // Read the pre-built HTML file
    const filePath = path === '/' 
      ? join(process.cwd(), 'dist', 'index.html')
      : join(process.cwd(), 'dist', path, 'index.html');
    
    let html = readFileSync(filePath, 'utf-8');
    
    // Inject SEO tags
    html = injectSEO(html, path);
    
    // Set headers
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    
    res.status(200).send(html);
  } catch (error) {
    // Fallback to base HTML
    try {
      let html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
      html = injectSEO(html, req.url || '/');
      res.status(200).send(html);
    } catch (fallbackError) {
      res.status(404).send('Page not found');
    }
  }
}

// Edge runtime for better performance
export const config = {
  runtime: 'edge',
};