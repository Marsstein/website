# Design-Vorlage: ISO 27001 Compliance Seite

## Übersicht
Diese Design-Vorlage dokumentiert das Design-System und die Struktur der ISO 27001 Compliance-Seite, die als Basis für weitere Seiten im gleichen Stil dient.

## Technologie-Stack
- **Framework**: React mit TypeScript
- **Styling**: Tailwind CSS mit custom utility classes
- **Animationen**: Framer Motion
- **UI-Komponenten**: Shadcn/ui (Card, Button, Badge, Progress, Tabs)
- **Icons**: Lucide React
- **Routing**: React Router

## Farbschema

### Hauptfarben
- **Hintergrund**: 
  - Primär: `bg-slate-900` (dunkler Modus)
  - Sekundär: `bg-slate-800/80` mit `backdrop-blur-sm`
  - Cards: `bg-slate-800/50` bis `bg-slate-700/50`
  
- **Text**:
  - Haupttext: `text-white`
  - Sekundärtext: `text-slate-300`
  - Beschreibungen: `text-slate-400`
  - Hervorhebungen: `text-slate-200`

### Akzentfarben (Gradients)
```css
/* Blau-Indigo */
from-blue-500 to-indigo-600

/* Emerald-Teal */
from-emerald-500 to-teal-600

/* Purple-Pink */
from-purple-500 to-pink-600

/* Orange-Red */
from-orange-500 to-red-600

/* Cyan-Blue */
from-cyan-500 to-blue-600

/* Yellow-Orange */
from-yellow-500 to-orange-600
```

### Status-Farben
- **Erfolg**: `text-green-400`, `bg-green-500`
- **Warnung**: `text-yellow-400`, `bg-yellow-500`
- **Fehler**: `text-red-400`, `bg-red-500`
- **Info**: `text-blue-400`, `bg-blue-500`

## Typografie

### Schriftgrößen
- **Hero-Titel**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **Seitentitel**: `text-3xl font-bold`
- **Abschnittstittel**: `text-2xl font-bold`
- **Unterüberschriften**: `text-xl font-bold`
- **Card-Titel**: `text-lg font-bold`
- **Normaler Text**: `text-base` (Standard)
- **Kleiner Text**: `text-sm`
- **Sehr klein**: `text-xs`

### Schriftgewichte
- **Bold**: Headlines und wichtige Elemente
- **Semibold**: Unterüberschriften
- **Medium**: Buttons und Navigation
- **Regular**: Fließtext

## Layout-Struktur

### 1. Header
- Feste Navigation mit Dropdown-Menüs
- Transparenter Hintergrund mit Blur-Effekt
- Sprachauswahl-Button
- Mobile-Responsive mit Sheet-Component

### 2. Hero-Bereich
```tsx
<div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
  <div className="absolute inset-0 bg-[radial-gradient(...)] opacity-40"></div>
  <!-- Hero Content -->
</div>
```

### 3. Content-Container
```tsx
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Inhalt -->
</div>
```

### 4. Sidebar-Navigation (Links)
```tsx
<div className="hidden lg:block w-64 flex-shrink-0">
  <div className="sticky top-32 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
    <!-- Navigation Items -->
  </div>
</div>
```

### 5. Hauptinhalt
```tsx
<div className="flex-1 lg:ml-8">
  <section id="section-id" className="space-y-8 scroll-mt-32">
    <!-- Section Content -->
  </section>
</div>
```

## Komponenten-Muster

### 1. Cards mit Gradient-Border
```tsx
<Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
  <CardContent className="p-8">
    <!-- Inhalt -->
  </CardContent>
</Card>
```

### 2. Animierte Sections
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <!-- Inhalt -->
</motion.div>
```

### 3. Icon-Boxen mit Gradient
```tsx
<div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600">
  <IconComponent className="h-6 w-6 text-white" />
</div>
```

### 4. Progress-Anzeigen
```tsx
<Progress 
  value={progress} 
  className="h-2 bg-slate-700"
  indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-600"
/>
```

### 5. Timeline-Komponente
```tsx
<div className="flex items-start gap-4">
  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
    <!-- Jahr/Nummer -->
  </div>
  <div className="w-0.5 h-16 bg-slate-600 ml-6 mt-2"></div>
  <div className="flex-1 bg-slate-800/50 rounded-lg p-4">
    <!-- Timeline-Inhalt -->
  </div>
</div>
```

### 6. Expandable Controls
```tsx
<div className="border border-slate-700 rounded-lg overflow-hidden">
  <button onClick={toggle} className="w-full p-4 flex items-center justify-between">
    <!-- Control Header -->
    <ChevronRight className={expanded ? "rotate-90" : ""} />
  </button>
  {expanded && (
    <div className="p-4 border-t border-slate-700">
      <!-- Expanded Content -->
    </div>
  )}
</div>
```

## Interaktive Elemente

### 1. Hover-Effekte
- Cards: `hover:scale-[1.02]` mit `transition-transform`
- Buttons: `hover:scale-105` 
- Links: `hover:text-white` (von `text-slate-400`)
- Border-Glow: `hover:border-blue-500/50`

### 2. Scroll-Effekte
- Sticky Navigation mit aktiver Section-Hervorhebung
- Smooth Scroll zu Sections: `scroll-behavior: smooth`
- Progress-Bar für Lesefortschritt
- Parallax-Effekte im Hero-Bereich

### 3. Animationen
- **Eingangsanimationen**: 
  - `initial={{ opacity: 0, y: 20 }}`
  - `animate={{ opacity: 1, y: 0 }}`
  - Gestaffelte Delays für Listen
  
- **Progress-Animationen**:
  - Circular Progress mit SVG
  - Linear Progress mit Framer Motion
  
- **Micro-Interactions**:
  - Button-Press: `whileTap={{ scale: 0.95 }}`
  - Badge-Erscheinen: Fade-in mit Scale

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-Anpassungen
- Sidebar wird zu Dropdown
- Grid-Columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Text-Größen: `text-2xl md:text-3xl lg:text-4xl`
- Padding: `p-4 md:p-6 lg:p-8`

## Wiederverwendbare Patterns

### 1. Section-Header
```tsx
<div className="flex items-center justify-between mb-6">
  <h2 className="text-3xl font-bold text-white">{title}</h2>
  <Button variant="outline" size="sm">
    <CheckCircle2 className="h-4 w-4 mr-2" />
    Als gelesen markieren
  </Button>
</div>
```

### 2. Feature-Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature) => (
    <Card key={feature.id} className="bg-slate-800/50">
      <!-- Feature Content -->
    </Card>
  ))}
</div>
```

### 3. Stat-Boxes
```tsx
<div className="bg-slate-900/50 rounded-lg p-4">
  <div className="text-2xl font-bold text-blue-400 mb-1">{value}</div>
  <div className="text-sm text-slate-400">{label}</div>
</div>
```

### 4. Alert/Info-Boxen
```tsx
<div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
  <div className="flex items-start gap-3">
    <InfoIcon className="h-5 w-5 text-blue-400 mt-0.5" />
    <div>
      <h4 className="font-semibold text-white mb-2">{title}</h4>
      <p className="text-slate-300">{content}</p>
    </div>
  </div>
</div>
```

## Best Practices

### 1. Performance
- Lazy Loading für große Sections
- Debounced Scroll-Events
- Optimierte Animationen (will-change: transform)
- Code-Splitting für Routen

### 2. Accessibility
- Semantische HTML-Struktur
- ARIA-Labels für interaktive Elemente
- Keyboard-Navigation Support
- Ausreichender Farbkontrast

### 3. SEO
- Strukturierte Überschriften (h1 > h2 > h3)
- Descriptive Link-Texte
- Meta-Tags für jede Seite
- Schema.org Markup

### 4. Code-Organisation
- Komponenten in eigene Dateien
- Wiederverwendbare Hooks
- Zentrale Konstanten für Farben/Größen
- TypeScript für Type-Safety

## Verwendung für neue Seiten

1. **Basis-Template kopieren**:
   - Header und Footer importieren
   - Hero-Bereich anpassen
   - Navigation-Struktur übernehmen

2. **Farbschema beibehalten**:
   - Gleiche Gradient-Kombinationen
   - Konsistente Status-Farben
   - Einheitliche Hover-Effekte

3. **Komponenten wiederverwenden**:
   - Card-Komponenten mit gleichen Klassen
   - Button-Styles konsistent
   - Badge und Progress einheitlich

4. **Animationen standardisieren**:
   - Gleiche Timing-Funktionen
   - Einheitliche Delays
   - Konsistente Scroll-Effekte

Diese Vorlage stellt sicher, dass alle neuen Seiten im gleichen professionellen, modernen Design-Stil erstellt werden und eine konsistente User Experience bieten.