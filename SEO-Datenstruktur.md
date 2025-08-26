# SEO-Datenstruktur - Marsstein

## Übersicht

Die SEO-Datenstruktur im Marsstein-Projekt folgt einem **dezentralen Ansatz**, bei dem jede Seite ihre eigenen SEO-Daten definiert, während die Implementierung über eine zentrale Komponente erfolgt.

## 1. Zentrale SEO-Komponente

### SEOHead Component
**Pfad:** `/src/components/SEOHead.tsx`

Die SEOHead-Komponente ist das Herzstück der SEO-Implementierung:

```typescript
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  structuredData?: any;
}
```

**Funktionen:**
- Generiert alle Meta-Tags (title, description, robots)
- Open Graph Tags für Social Media
- Twitter Card Integration
- Canonical URL Management
- JSON-LD Structured Data
- Theme Color und Favicon-Referenzen

## 2. Seitenspezifische SEO-Daten

### Implementierungsmuster
Jede Seite importiert SEOHead und definiert ihre eigenen SEO-Daten:

```jsx
// Beispiel aus einer Seite
<SEOHead
  title="SOC 2 Zertifizierung – Trust Services für SaaS & Cloud | Marsstein"
  description="SOC 2 Type II Compliance für SaaS-Anbieter: 5 Trust Principles meistern."
  canonical="/soc2-zertifizierung"
  structuredData={structuredData}
/>
```

### Structured Data Beispiel
```javascript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SOC 2 Zertifizierung",
  "provider": {
    "@type": "Organization",
    "name": "Marsstein"
  },
  "description": "SOC 2 Type II Compliance Beratung und Implementierung"
};
```

## 3. SEO-Datenquellen im Projekt

### 3.1 Page Components
**Pfad:** `/src/pages/*.tsx`

Jede Seiten-Komponente enthält:
- Titel (optimiert für 50-60 Zeichen)
- Beschreibung (optimiert für 150-160 Zeichen)
- Canonical URL
- Optional: Structured Data

### 3.2 Prerender Configuration
**Pfad:** `/scripts/prerender-config.js`

Enthält globale SEO-Einstellungen:
```javascript
seo: {
  defaultMeta: {
    viewport: 'width=device-width, initial-scale=1',
    author: 'Marsstein',
    robots: 'index, follow'
  },
  sitemap: {
    hostname: 'https://marsstein.com',
    changefreq: 'weekly',
    priority: 0.7
  }
}
```

### 3.3 Route-Prioritäten
Routen sind nach SEO-Priorität kategorisiert:
- **Kritisch** (1.0): Homepage, Pricing, Contact
- **Wichtig** (0.8): Compliance-Seiten (DSGVO, ISO 27001, etc.)
- **Standard** (0.6): Branchenseiten, Tools
- **Niedrig** (0.4): Rechtliche Seiten (Impressum, Datenschutz)

## 4. SEO-Daten-Typen

### Meta-Tags
- **Title**: Seitentitel (Browser-Tab, Suchergebnisse)
- **Description**: Meta-Beschreibung für Suchergebnisse
- **Robots**: Indexierungs-Anweisungen
- **Viewport**: Mobile Optimierung
- **Author**: Autoren-Information

### Open Graph (Social Media)
- **og:title**: Titel für Social Media
- **og:description**: Beschreibung für Social Media
- **og:image**: Vorschaubild (1200x630px empfohlen)
- **og:type**: Inhaltstyp (website, article, etc.)
- **og:url**: Kanonische URL
- **og:site_name**: Website-Name
- **og:locale**: Sprache (de_DE)

### Twitter Card
- **twitter:card**: Kartentyp (summary_large_image)
- **twitter:site**: Twitter-Handle
- **twitter:title**: Titel für Twitter
- **twitter:description**: Beschreibung für Twitter
- **twitter:image**: Vorschaubild für Twitter

### Structured Data (JSON-LD)
Verschiedene Schema-Typen je nach Seiteninhalt:
- **Organization**: Für Unternehmensseiten
- **Service**: Für Dienstleistungsseiten
- **Article**: Für Blog/Wissensartikel
- **SoftwareApplication**: Für Tool-Seiten
- **LocalBusiness**: Für lokale Geschäftsinformationen

## 5. SEO-Optimierungen im Build-Prozess

### Prerendering
**Pfad:** `/scripts/full-prerender.js`

Der Prerender-Prozess:
1. Extrahiert alle Meta-Tags aus dem gerenderten HTML
2. Entfernt Duplikate
3. Optimiert die HTML-Struktur
4. Fügt fehlende Tags hinzu (z.B. canonical)

### HTML-Optimierungen
- Entfernung von Development-Scripts
- Deduplizierung von Meta-Tags
- Korrekte Formatierung von Title-Tags
- Hinzufügen von Performance-Hints (preload, preconnect)

## 6. Spezielle SEO-Komponenten

### SitemapSEO Component
**Pfad:** `/src/pages/SitemapSEO.tsx`

Visuelle Sitemap mit SEO-Metadaten:
- Alle Seiten mit Titel und Beschreibung
- Prioritätsstufen
- Verfügbarkeitsstatus
- Kategorisierung nach Bereichen

### Dynamic OG Meta API
**Pfad:** `/api/og.js`

Vercel Edge Function für dynamische Meta-Tags:
- Route-spezifische Meta-Tags
- Fallback zu Default-Tags
- Dynamische Bildgenerierung möglich

## 7. Best Practices

### Titel-Optimierung
- Länge: 50-60 Zeichen
- Format: `[Hauptkeyword] – [Zusatz] | Marsstein`
- Unique für jede Seite
- Keyword am Anfang

### Beschreibungs-Optimierung
- Länge: 150-160 Zeichen
- Call-to-Action einbauen
- Unique Content
- Keywords natürlich einbauen

### Structured Data
- Immer validieren mit Google's Testing Tool
- Relevante Schema-Typen verwenden
- Vollständige Informationen angeben
- Konsistenz mit sichtbarem Content

## 8. Wartung und Aktualisierung

### Neue Seite hinzufügen
1. SEOHead in der Komponente importieren
2. SEO-Props definieren (title, description, canonical)
3. Optional: Structured Data hinzufügen
4. In Prerender-Routes aufnehmen
5. Sitemap aktualisieren

### SEO-Daten aktualisieren
1. Direkt in der jeweiligen Seiten-Komponente
2. Props des SEOHead-Components anpassen
3. Prerender neu ausführen
4. Änderungen validieren

## 9. Monitoring und Validation

### Tools zur Überprüfung
- Google Search Console
- Schema.org Validator
- Open Graph Debugger (Facebook)
- Twitter Card Validator
- Lighthouse SEO Audit

### Wichtige Metriken
- Indexierungsstatus
- Core Web Vitals
- Mobile Usability
- Structured Data Errors
- Crawl-Fehler

## 10. Zukünftige Verbesserungen

### Mögliche Optimierungen
1. **Zentralisierte SEO-Konfiguration**: Alle SEO-Daten in einer zentralen Datei
2. **Automatische Sitemap-Generierung**: Basierend auf Routes
3. **i18n SEO**: Mehrsprachige SEO-Unterstützung
4. **Dynamic Meta Images**: Automatische OG-Image-Generierung
5. **SEO-Score-Tracking**: Integriertes Monitoring

### Geplante Features
- RSS Feed für Blog/Wissen
- Schema.org Breadcrumbs
- FAQ Schema für häufige Fragen
- Video Schema für Tutorials
- Event Schema für Webinare

---

**Letzte Aktualisierung:** August 2025  
**Verantwortlich:** Development Team  
**Dokumentversion:** 1.0