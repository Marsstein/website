# Stadt-Seiten Generator - Dokumentation

## Übersicht

Der Stadt-Seiten-Generator erstellt automatisch lokale Landing Pages für "Externer Datenschutzbeauftragter [Stadt]" mit individuellen SEO-Optimierungen.

## Generator-Script

**Pfad:** `scripts/generate-city-pages.mjs`

### Ausführung

```bash
# Alle Städte generieren
node scripts/generate-city-pages.mjs

# Einzelne Stadt generieren
node scripts/generate-city-pages.mjs bremen

# Mehrere Städte generieren
node scripts/generate-city-pages.mjs bremen hamburg muenchen
```

## Verfügbare Städte (26)

| Stadt | Slug | Bundesland | URL |
|-------|------|------------|-----|
| Bremen | bremen | Bremen | /externer-datenschutzbeauftragter-bremen |
| Hamburg | hamburg | Hamburg | /externer-datenschutzbeauftragter-hamburg |
| München | muenchen | Bayern | /externer-datenschutzbeauftragter-muenchen |
| Stuttgart | stuttgart | Baden-Württemberg | /externer-datenschutzbeauftragter-stuttgart |
| Düsseldorf | duesseldorf | NRW | /externer-datenschutzbeauftragter-duesseldorf |
| Köln | koeln | NRW | /externer-datenschutzbeauftragter-koeln |
| Frankfurt | frankfurt | Hessen | /externer-datenschutzbeauftragter-frankfurt |
| Hannover | hannover | Niedersachsen | /externer-datenschutzbeauftragter-hannover |
| Oldenburg | oldenburg | Niedersachsen | /externer-datenschutzbeauftragter-oldenburg |
| Braunschweig | braunschweig | Niedersachsen | /externer-datenschutzbeauftragter-braunschweig |
| Bremerhaven | bremerhaven | Bremen | /externer-datenschutzbeauftragter-bremerhaven |
| Dortmund | dortmund | NRW | /externer-datenschutzbeauftragter-dortmund |
| Leipzig | leipzig | Sachsen | /externer-datenschutzbeauftragter-leipzig |
| Dresden | dresden | Sachsen | /externer-datenschutzbeauftragter-dresden |
| Nürnberg | nuernberg | Bayern | /externer-datenschutzbeauftragter-nuernberg |
| Mannheim | mannheim | Baden-Württemberg | /externer-datenschutzbeauftragter-mannheim |
| Karlsruhe | karlsruhe | Baden-Württemberg | /externer-datenschutzbeauftragter-karlsruhe |
| Heidelberg | heidelberg | Baden-Württemberg | /externer-datenschutzbeauftragter-heidelberg |
| Ulm | ulm | Baden-Württemberg | /externer-datenschutzbeauftragter-ulm |
| Münster | muenster | NRW | /externer-datenschutzbeauftragter-muenster |
| Osnabrück | osnabrueck | Niedersachsen | /externer-datenschutzbeauftragter-osnabrueck |
| Magdeburg | magdeburg | Sachsen-Anhalt | /externer-datenschutzbeauftragter-magdeburg |
| Wolfsburg | wolfsburg | Niedersachsen | /externer-datenschutzbeauftragter-wolfsburg |
| Lüneburg | lueneburg | Niedersachsen | /externer-datenschutzbeauftragter-lueneburg |
| Celle | celle | Niedersachsen | /externer-datenschutzbeauftragter-celle |
| Wedemark | wedemark | Niedersachsen | /externer-datenschutzbeauftragter-wedemark |

### Zusätzliche Seiten (manuell erstellt)

- Konstanz: /externer-datenschutzbeauftragter-konstanz
- Hildesheim: /externer-datenschutzbeauftragter-hildesheim
- Bayern (Bundesland): /externer-datenschutzbeauftragter-bayern
- NRW (Bundesland): /externer-datenschutzbeauftragter-nrw
- Niedersachsen (Bundesland): /externer-datenschutzbeauftragter-niedersachsen

## SEO-Optimierung

### Title-Tag

```
Externer Datenschutzbeauftragter [Stadt] inkl. Plattform
```

### Meta-Description

Die Descriptions variieren automatisch zwischen 3 Varianten:

**Variante 1:**
```
Externer DSB in [Stadt] gesucht? Wir matchen zertifizierte Experten für [Branche1], [Branche2], [Branche3] + Plattform für audit-ready Dokumentation. Ab 199€/Monat.
```

**Variante 2:**
```
Datenschutzbeauftragten in [Stadt] gesucht? Zertifizierte Experten aus unserem Netzwerk für [Branche1], [Branche2], [Branche3] + Compliance-Plattform für lückenlose Dokumentation. Ab 199€/Monat – Angebot in 24h.
```

**Variante 3:**
```
Externen Datenschutzbeauftragten für [Stadt] gesucht? Experten aus unserem Netzwerk für [Branche1], [Branche2], [Branche3] + audit-ready Plattform inklusive. Festpreis ab 199€/Monat.
```

### Beispiele

| Stadt | Meta-Description |
|-------|-----------------|
| Bremen | Externer DSB in Bremen gesucht? Wir matchen zertifizierte Experten für Hafen, Luft-, Automotive + Plattform für audit-ready Dokumentation. Ab 199€/Monat. |
| Hamburg | Datenschutzbeauftragten in Hamburg gesucht? Zertifizierte Experten aus unserem Netzwerk für Hafen, Medien, Handel + Compliance-Plattform für lückenlose Dokumentation. Ab 199€/Monat – Angebot in 24h. |
| München | Externen Datenschutzbeauftragten für München gesucht? Experten aus unserem Netzwerk für Automotive, IT, Finanzdienstleister + audit-ready Plattform inklusive. Festpreis ab 199€/Monat. |
| Frankfurt | Externer DSB in Frankfurt gesucht? Wir matchen zertifizierte Experten für Finanzdienstleister, IT, Beratung + Plattform für audit-ready Dokumentation. Ab 199€/Monat. |
| Dresden | Datenschutzbeauftragten in Dresden gesucht? Zertifizierte Experten für Halbleiter, IT, Pharma + Compliance-Plattform für lückenlose Dokumentation. Ab 199€/Monat – Angebot in 24h. |

## Stadt-Konfiguration

Jede Stadt hat folgende Eigenschaften:

```javascript
{
  name: 'Bremen',              // Anzeigename
  slug: 'bremen',              // URL-Slug
  bundesland: 'Bremen',        // Bundesland
  aufsicht: 'LfDI Bremen',     // Aufsichtsbehörde
  aufsichtLink: '/dsgvo',      // Link zur Aufsicht-Info
  geo: { lat: '53.0793', lng: '8.8017' },  // Koordinaten für Schema.org
  branchen: [                  // Top 6 Branchen der Stadt
    { title: 'Hafen & Logistik', desc: '...', link: '/branchen/logistik' },
    // ...
  ],
  nachbarStaedte: [            // Verlinkung zu Nachbarstädten
    { name: 'Bremerhaven', slug: 'bremerhaven' },
    // ...
  ],
  regionText: '...',           // Regionaler Einleitungstext
  regionBranchen: '...'        // Branchen-Keywords für FAQs
}
```

## Seitenstruktur

Jede generierte Seite enthält:

1. **Hero Section** - Headline, Preis, CTAs
2. **Branchen Section** - 6 lokale Branchen mit Links
3. **Vorteile Section** - USPs der Marsstein-Methode
4. **Prozess Section** - 3-Schritte-Ablauf
5. **Preise Section** - Paketübersicht
6. **FAQ Section** - 7 lokale FAQs
7. **Kontaktformular** - Direktanfrage
8. **Nachbarstädte** - Links zu anderen Stadt-Seiten
9. **CTA Section** - Abschluss-CTA

## Sitemap

Alle Stadt-Seiten sind in `scripts/sitemap.js` integriert:

- Große Städte (München, Hamburg, Frankfurt, etc.): Priority 0.8
- Mittlere Städte: Priority 0.7
- Hauptseite: Priority 0.9

## Neue Stadt hinzufügen

1. Stadt-Konfiguration in `scripts/generate-city-pages.mjs` unter `cityConfigs` hinzufügen
2. Generator ausführen: `node scripts/generate-city-pages.mjs [stadtslug]`
3. Route in `src/App.tsx` hinzufügen
4. URL in `scripts/sitemap.js` hinzufügen
5. Build testen: `npm run build`

## Dateien

- `scripts/generate-city-pages.mjs` - Generator-Script
- `scripts/sitemap.js` - Sitemap mit allen URLs
- `src/pages/ExternerDatenschutzbeauftragter[Stadt].tsx` - Generierte Seiten
