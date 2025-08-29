# Modulare Content-Architektur für SEO-Seiten

## Übersicht
Dieses Dokument beschreibt die neue modulare Architektur für die Verwaltung von statischen SEO-Inhalten. Statt alle Seiteninhalte in einer einzigen großen Datei zu speichern, werden sie in separate Module aufgeteilt.

## Problem der bisherigen Lösung
- Die `prerender-react-content-full.js` wurde mit 60+ Seiten zu groß (mehrere MB)
- Schwierige Wartbarkeit und Debugging
- Große Git-Diffs bei kleinen Änderungen
- Keine parallele Bearbeitung möglich
- Performance-Probleme beim Parsen

## Neue Architektur

### Dateistruktur
```
scripts/
├── content/
│   ├── compliance/        # Compliance-bezogene Seiten
│   │   ├── iso27001.js
│   │   ├── iso27017.js
│   │   ├── iso27018.js
│   │   ├── soc2.js
│   │   ├── tisax.js
│   │   ├── dsgvo.js
│   │   ├── nis2.js
│   │   └── eu-ai-act.js
│   ├── branchen/         # Branchenspezifische Seiten
│   │   ├── automotive.js
│   │   ├── healthcare.js
│   │   └── finance.js
│   ├── wissen/           # Wissensbasis-Seiten
│   │   └── ...
│   ├── tools/            # Tool-Seiten
│   │   └── ...
│   └── index.js          # Zentrale Export-Datei
└── prerender-react-content-full.js  # Haupt-Build-Script (bleibt schlank)
```

### Format einer Content-Datei

```javascript
// scripts/content/compliance/iso27001.js
export default {
  title: 'ISO 27001-Zertifizierung - Automatisiert & Rechtssicher',
  description: 'ISO 27001 Zertifizierung in nur 6 Monaten mit KI-Unterstützung. 75% Zeitersparnis, 99.2% Erfolgsquote.',
  keywords: 'ISO 27001, Zertifizierung, Informationssicherheit, ISMS',
  content: `
    <main class="min-h-screen">
      <!-- Vollständiger HTML-Content -->
    </main>
  `
};
```

### Zentrale Index-Datei

```javascript
// scripts/content/index.js
// Compliance
export { default as iso27001 } from './compliance/iso27001.js';
export { default as iso27017 } from './compliance/iso27017.js';
export { default as iso27018 } from './compliance/iso27018.js';
export { default as soc2 } from './compliance/soc2.js';
export { default as tisax } from './compliance/tisax.js';
export { default as dsgvo } from './compliance/dsgvo.js';
export { default as nis2 } from './compliance/nis2.js';
export { default as euAiAct } from './compliance/eu-ai-act.js';

// Branchen
export { default as automotive } from './branchen/automotive.js';
// ... weitere Exporte
```

### Integration im Build-Script

```javascript
// scripts/prerender-react-content-full.js
import * as pageContents from './content/index.js';

const fullPageContent = {
  '/iso-27001-zertifizierung': () => pageContents.iso27001,
  '/iso-27017-zertifizierung': () => pageContents.iso27017,
  '/iso-27018-zertifizierung': () => pageContents.iso27018,
  '/soc2-zertifizierung': () => pageContents.soc2,
  '/tisax-compliance': () => pageContents.tisax,
  '/dsgvo-compliance': () => pageContents.dsgvo,
  '/nis2-compliance': () => pageContents.nis2,
  '/eu-ai-act-compliance': () => pageContents.euAiAct,
  // ... weitere Mappings
};
```

## Migrations-Strategie

### Phase 1: Neue Seiten (SOFORT)
Alle neuen Seiten werden direkt im modularen Format erstellt:
- [ ] TISAX
- [ ] DSGVO  
- [ ] NIS2
- [ ] EU AI Act
- [ ] Homepage
- [ ] Weitere neue Seiten

### Phase 2: Bestehende Seiten (SPÄTER)
Die bereits in `prerender-react-content-full.js` implementierten Seiten werden schrittweise migriert:
- [ ] ISO 27001
- [ ] ISO 27017
- [ ] ISO 27018
- [ ] SOC2

### Migration einer bestehenden Seite

1. **Content extrahieren** aus `prerender-react-content-full.js`
2. **Neue Datei erstellen** im entsprechenden Verzeichnis
3. **Export hinzufügen** in `scripts/content/index.js`
4. **Mapping anpassen** in `prerender-react-content-full.js`
5. **Testen** mit `npm run build:react-content-full`
6. **Alten Code entfernen** aus der Hauptdatei

## Vorteile

✅ **Modularität**: Jede Seite ist eine eigene Datei  
✅ **Performance**: Kleinere Dateien, besseres Caching  
✅ **Wartbarkeit**: Einfaches Finden und Bearbeiten einzelner Seiten  
✅ **Git-freundlich**: Kleine, fokussierte Commits  
✅ **Teamarbeit**: Mehrere Entwickler können parallel arbeiten  
✅ **Skalierbarkeit**: Problemlos auf 100+ Seiten erweiterbar  

## Implementierungs-Workflow

### Neue Seite hinzufügen

1. **React-Komponente analysieren** (z.B. `/src/pages/TisaxCompliance.tsx`)
2. **Content-Datei erstellen** (z.B. `/scripts/content/compliance/tisax.js`)
3. **Export hinzufügen** in `/scripts/content/index.js`
4. **Route-Mapping hinzufügen** in `prerender-react-content-full.js`
5. **Build testen**: `npm run build:react-content-full`

### Content-Extraktion aus React

Beim Extrahieren des Contents aus React-Komponenten:
- Alle dynamischen Elemente durch statische HTML ersetzen
- React-spezifische Props entfernen
- SVG-Icons inline einbetten
- Tailwind-Klassen beibehalten
- Links zu internen Routen anpassen

## Best Practices

1. **Dateinamen**: Verwende kebab-case (z.B. `iso-27001.js`)
2. **Exports**: Immer `export default` verwenden
3. **Content**: Vollständiges `<main>` Element mit allen Sections
4. **SEO**: Title max. 60 Zeichen, Description 150-160 Zeichen
5. **Keywords**: Relevante Keywords für jede Seite definieren

## Trouble Shooting

### Build-Fehler
- Prüfe Syntax in der Content-Datei (besonders Template Strings)
- Stelle sicher, dass alle Exports in index.js definiert sind
- Überprüfe Route-Mappings in der Hauptdatei

### Content wird nicht angezeigt
- Vergewissere dich, dass die Route korrekt gemappt ist
- Prüfe, ob die Content-Datei korrekt exportiert wird
- Schaue im Build-Output nach Fehlermeldungen

## Nächste Schritte

1. **Sofort**: Neue Seiten im modularen Format implementieren
2. **Diese Woche**: Alle ausstehenden Compliance-Seiten fertigstellen  
3. **Nächste Woche**: Migration der bestehenden Seiten beginnen
4. **Langfristig**: Automatisierung der Content-Extraktion aus React

## Status Tracking

### Implementiert (Modular)
- [ ] Noch keine

### Implementiert (Monolithisch - Migration ausstehend)
- [x] ISO 27001
- [x] ISO 27017
- [x] ISO 27018
- [x] SOC2

### In Arbeit
- [ ] TISAX
- [ ] DSGVO
- [ ] NIS2
- [ ] EU AI Act

### Ausstehend
- [ ] Homepage
- [ ] Branchen-Seiten
- [ ] Wissen-Seiten
- [ ] Tool-Seiten

---

Letzte Aktualisierung: 2025-08-29

## Update: Erfolgreiche Implementierung!

✅ **Die modulare Architektur wurde erfolgreich implementiert!**

### Was wurde erreicht:
1. **Modulare Struktur erstellt** unter `scripts/content/`
2. **4 Compliance-Seiten migriert** (ISO 27001, 27017, 27018, SOC2)
3. **ES6 Module** verwendet für bessere Kompatibilität
4. **Build-Script `prerender-react-content-full-modular.js`** erstellt
5. **Erfolgreich getestet** - alle 4 Seiten generieren vollständigen HTML-Content

### Neue Dateistruktur:
```
scripts/
├── content/
│   ├── compliance/
│   │   ├── iso-27001.mjs    # ES6 Module mit export default
│   │   ├── iso-27017.mjs
│   │   ├── iso-27018.mjs
│   │   ├── soc2.mjs
│   │   └── index.mjs        # Exportiert alle Module
│   └── index.mjs            # Zentrale Registry mit Helper-Funktionen
└── prerender-react-content-full-modular.js  # Neues Build-Script
```

### Build-Befehl:
```bash
npm run build:modular
```

Die Architektur ist jetzt bereit für die Implementierung weiterer Seiten!