# Design-Vorlage: Gesundheitswesen-DSGVO Seite

## Übersicht
Diese Design-Vorlage dokumentiert das Design-System und die Struktur der Gesundheitswesen-DSGVO Seite, die sich durch ein helles, professionelles Design mit roten/pinken Akzentfarben auszeichnet.

## Technologie-Stack
- **Framework**: React mit TypeScript
- **Styling**: Tailwind CSS mit Light/Dark Mode Support
- **Animationen**: Framer Motion
- **UI-Komponenten**: Shadcn/ui (Card, Button, Badge, Progress)
- **Icons**: Lucide React (extensive icon set)
- **Routing**: React Router
- **State Management**: React Hooks (useState, useEffect)

## Farbschema

### Hauptfarben
- **Hintergrund**: 
  - Light Mode: `bg-white`, `bg-gray-50`
  - Dark Mode: `bg-gray-950`, `bg-gray-900`
  - Cards: `bg-white dark:bg-gray-900`
  
- **Text**:
  - Haupttext: `text-gray-900 dark:text-white`
  - Sekundärtext: `text-gray-600 dark:text-gray-300`
  - Beschreibungen: `text-gray-600 dark:text-gray-400`

### Akzentfarben (Healthcare-Theme)
```css
/* Rot-Pink Gradient (Primär) */
from-red-600 to-pink-600

/* Weitere Healthcare-Farben */
- Rot: red-600, red-500, red-400
- Pink: pink-600, pink-500
- Rose: rose-600
- Lila: purple-600 (für AI/Tech)
- Orange: orange-500 (für Warnungen)
- Grün: green-600 (für Erfolg)
- Blau: blue-600 (für Info)
```

### Status-Farben
- **Erfolg**: `bg-green-100 text-green-700`
- **Warnung**: `bg-yellow-100 text-yellow-700`
- **Fehler**: `bg-red-100 text-red-700`
- **Info**: `bg-blue-100 text-blue-700`

## Typografie

### Schriftgrößen
- **Hero-Titel**: `text-4xl md:text-5xl font-bold`
- **Seitentitel**: `text-3xl font-bold`
- **Abschnittstittel**: `text-2xl font-bold`
- **Card-Titel**: `text-xl font-bold`
- **Unterüberschriften**: `text-lg font-semibold`
- **Normaler Text**: `text-base`
- **Kleiner Text**: `text-sm`
- **Sehr klein**: `text-xs`

### Schriftgewichte
- **Bold**: Headlines
- **Semibold**: Unterüberschriften
- **Medium**: Buttons und wichtige Labels
- **Regular**: Fließtext

## Layout-Struktur

### 1. Hero-Bereich mit Parallax
```tsx
<section ref={heroRef} className="relative py-20 md:py-28">
  {/* Animierte Hintergrund-Blobs */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
  </div>
  
  {/* Parallax Content */}
  <motion.div style={{ y, opacity }}>
    <!-- Hero Content -->
  </motion.div>
</section>
```

### 2. Sticky Navigation
```tsx
<div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b">
  <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto">
    {navigationItems.map(item => (
      <button className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg",
        activeSection === item.id
          ? "bg-red-100 dark:bg-red-950/50 text-red-700"
          : "hover:bg-red-50 dark:hover:bg-red-950/30"
      )}>
        <item.icon /> {item.label}
      </button>
    ))}
  </nav>
</div>
```

### 3. Content-Container
```tsx
<div className="py-20">
  <div className="container px-4">
    <div className="max-w-7xl mx-auto space-y-20">
      <!-- Sections -->
    </div>
  </div>
</div>
```

### 4. Sections mit Scroll-Offset
```tsx
<section id="section-id" className="space-y-8 scroll-mt-32">
  <!-- Section Content -->
</section>
```

## Komponenten-Muster

### 1. Interaktives Compliance Dashboard
```tsx
<Card className="p-6 shadow-2xl border-2 border-red-200 dark:border-red-800">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    {stats.map(stat => (
      <motion.div whileHover={{ scale: 1.05 }} className="p-3 bg-white rounded-lg">
        <div className="text-sm font-medium">{stat.label}</div>
        <div className="text-xl font-bold text-red-600">{stat.value}%</div>
        <div className="text-xs text-green-600">{stat.trend}</div>
      </motion.div>
    ))}
  </div>
</Card>
```

### 2. Healthcare-spezifische Cards
```tsx
<Card className="border-l-4 border-red-500">
  <CardHeader>
    <div className="flex items-start justify-between">
      <CardTitle>{title}</CardTitle>
      <Badge variant="destructive">Kritisch</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <!-- Content -->
  </CardContent>
</Card>
```

### 3. Praxis-Szenario Komponente
```tsx
<div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-6">
  <h3 className="text-xl font-bold mb-4">
    🏥 Praxis-Szenario: {scenario.title}
  </h3>
  <div className="space-y-4">
    <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-4">
      <h4 className="font-semibold mb-2">📋 Kontext</h4>
      <p>{scenario.context}</p>
    </div>
    <!-- Weitere Schritte -->
  </div>
</div>
```

### 4. Interaktive Checkliste
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
  {items.map(item => (
    <div
      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
      onClick={() => toggleItem(item.id)}
    >
      {isChecked ? (
        <CheckSquare className="h-5 w-5 text-green-600" />
      ) : (
        <Square className="h-5 w-5 text-gray-400" />
      )}
      <span className={cn(isChecked && "line-through text-gray-500")}>
        {item.text}
      </span>
    </div>
  ))}
</div>
```

### 5. Code-Beispiele
```tsx
<div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
  <pre className="text-sm">
    <code className="language-javascript">
      {codeExample}
    </code>
  </pre>
</div>
```

### 6. Progress-Visualisierungen
```tsx
<div className="space-y-3">
  {phases.map(phase => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{phase.name}</span>
        <span>{phase.completion}%</span>
      </div>
      <Progress value={phase.completion} className="h-2" />
    </div>
  ))}
</div>
```

## Interaktive Elemente

### 1. Hover-Effekte
- Cards: `hover:shadow-md`, `hover:border-red-300`
- Buttons: `hover:opacity-90` oder `hover:bg-red-50`
- Navigation: `hover:bg-red-50 dark:hover:bg-red-950/30`
- Links: `group-hover:translate-x-1` für Pfeile

### 2. Animationen
```tsx
// Eingangsanimationen
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}

// Floating Elements
animate={{ y: [0, -10, 0] }}
transition={{ duration: 2, repeat: Infinity }}

// Pulse Animation
className="animate-pulse"
```

### 3. Scroll-basierte Features
- Sticky Navigation mit Active-State
- Parallax-Effekte im Hero
- Smooth Scroll zu Sections
- Progress-Tracking

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

### Grid-Anpassungen
- Mobile: `grid-cols-1`
- Tablet: `md:grid-cols-2`
- Desktop: `lg:grid-cols-3` oder `lg:grid-cols-4`

### Text-Anpassungen
- Hero: `text-4xl md:text-5xl`
- Sections: Responsive padding `py-20`
- Navigation: `overflow-x-auto` für Mobile

## Healthcare-spezifische Patterns

### 1. Risiko-Badges
```tsx
<Badge variant={risk === 'Kritisch' ? 'destructive' : 'secondary'}>
  {risk} Risiko
</Badge>
```

### 2. Compliance-Statistiken
```tsx
<div className="text-center">
  <div className="text-2xl font-bold text-red-600">{value}%</div>
  <div className="text-xs text-gray-600">{label}</div>
  <div className="text-xs text-green-600">{trend}</div>
</div>
```

### 3. Medizinische Icons
- Heart, Stethoscope, Brain, Pill, Syringe
- Thermometer, Microscope, Activity, Pulse
- Shield, Lock für Sicherheit
- AlertTriangle für Warnungen

### 4. DSGVO-spezifische Inhalte
- Art. 9 DSGVO Referenzen
- Bußgeld-Warnungen mit roten Boxen
- Gesetzliche Grundlagen prominent
- Praxis-Beispiele mit realen Szenarien

## Call-to-Action Section
```tsx
<Card className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white">
  <CardContent className="p-8 md:p-12 text-center">
    <Heart className="h-16 w-16 mx-auto mb-6" />
    <h2 className="text-3xl md:text-4xl font-bold">
      Starten Sie Ihre Healthcare DSGVO Journey
    </h2>
    <div className="flex gap-4 justify-center mt-8">
      <Button className="bg-white text-red-600">
        Healthcare Demo buchen
      </Button>
      <Button variant="outline" className="text-white border-white">
        Guide herunterladen
      </Button>
    </div>
  </CardContent>
</Card>
```

## Best Practices

### 1. Accessibility
- Hoher Kontrast zwischen Text und Hintergrund
- Klare Fokus-States für Keyboard-Navigation
- ARIA-Labels für interaktive Elemente
- Semantische HTML-Struktur

### 2. Performance
- Lazy Loading für große Sections
- Optimierte Animationen (GPU-beschleunigt)
- Code-Splitting für verschiedene Routen
- Debounced Scroll-Events

### 3. Healthcare-Compliance
- Klare Kennzeichnung sensibler Informationen
- Verschlüsselungs-Hinweise prominent
- Datenschutz-Informationen leicht zugänglich
- Audit-Trail Visualisierungen

### 4. User Experience
- Klare visuelle Hierarchie
- Konsistente Farbverwendung
- Intuitive Navigation
- Hilfreiche Praxis-Beispiele

## Verwendung für neue Healthcare-Seiten

1. **Farbschema anpassen**:
   - Rot/Pink für Healthcare beibehalten
   - Gleiche Status-Farben verwenden
   - Light/Dark Mode Support

2. **Layout übernehmen**:
   - Hero mit Parallax-Effekten
   - Sticky Navigation
   - Grid-basierte Sections

3. **Healthcare-Komponenten**:
   - Compliance-Dashboard
   - Praxis-Szenarien
   - Interaktive Checklisten
   - Risiko-Bewertungen

4. **Content-Struktur**:
   - Rechtliche Grundlagen zuerst
   - Praktische Beispiele
   - Technische Implementierung
   - Call-to-Action am Ende

Diese Vorlage gewährleistet eine konsistente, professionelle und compliance-orientierte Darstellung für alle Healthcare-bezogenen Seiten.