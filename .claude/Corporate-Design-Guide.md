# Corporate Design Guide - Marsstein

## 🎨 Markenidentität

**Marsstein** ist eine moderne, technologie-orientierte Compliance-Plattform, die sich auf EU AI Act und KI-Governance spezialisiert hat. Unser Corporate Design reflektiert Professionalität, Innovation und Vertrauen im Bereich der KI-Compliance.

## 🎯 Kernwerte & Tonalität

### Markenpersönlichkeit
- **Professionell & Vertrauenswürdig**: Seriöse Compliance-Beratung auf höchstem Niveau
- **Innovativ & Modern**: Cutting-Edge-Technologie für KI-Governance
- **Präzise & Verlässlich**: Exakte Analysen und zuverlässige Ergebnisse
- **Zugänglich & Transparent**: Komplexe Sachverhalte verständlich erklärt

### Kommunikationsstil
- **Ton**: Professionell, aber zugänglich. Fachkompetent ohne überheblich zu wirken
- **Sprache**: Klar und präzise. Fachbegriffe werden erklärt
- **Ansprache**: Sie/Du je nach Kontext (B2B = Sie, Community = Du)
- **Messaging**: "Compliance made simple" - Komplexität reduzieren, Klarheit schaffen

## 🎨 Farbpalette

### Primärfarben (Brand Core)

#### Marsstein Orange (Akzentfarbe)
```css
--brand-primary: #e24e1b
--brand-primary-hover: #f97316  /* Heller für Hover-States */
--brand-primary-dark: #ea580c   /* Dunkler für Active-States */
```
**Verwendung**: Hauptakzentfarbe für CTAs, Buttons, Links, Highlights, Logo-Akzente

#### Marsstein Charcoal
```css
--brand-charcoal: #232323
```
**Verwendung**: Haupttextfarbe, Headlines, wichtige UI-Elemente

#### Marsstein Stone
```css
--brand-stone: #474747
```
**Verwendung**: Sekundärtext, Untertitel, weniger wichtige UI-Elemente

### Unterstützende Farben

#### Neutrale Farben
```css
--brand-white: #FFFFFF       /* Haupthintergrund */
--brand-light: #F5F6F8       /* Sekundärer Hintergrund */
--brand-dark-blue: #003366   /* Für Compliance-Themen */
```

#### Funktionsfarben
```css
--success-green: #39B37B     /* Erfolg, Validierung */
--warning-orange: #F57C00    /* Warnungen */
--error-red: #DC2626         /* Fehler */
--info-blue: #3B82F6         /* Information */
```

### Alternative Farbvarianten (Marsstein Core)
```css
--mars-red: #E03A3E          /* Alternative Akzentfarbe */
--basalt-grey: #1F1F24       /* Dunkle Premium-Variante */
--granite-grey: #F5F6F8      /* Helle Premium-Variante */
```

## 📝 Typografie

### Hauptschriftarten

#### Inter (Primary Font)
- **Verwendung**: Alle UI-Texte, Headlines, Body-Text, Navigation
- **Eigenschaften**: Modern, gut lesbar, excellent web performance
- **Varianten**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

#### JetBrains Mono (Secondary Font)
- **Verwendung**: Code-Snippets, Metriken, technische Daten, Monospace-Inhalte
- **Eigenschaften**: Optimiert für Code-Darstellung, technischer Charakter

### Typography-Hierarchie

```css
/* Headlines */
h1: 3rem (48px), font-weight: 700, line-height: 1.2
h2: 2.25rem (36px), font-weight: 600, line-height: 1.3
h3: 1.875rem (30px), font-weight: 600, line-height: 1.4
h4: 1.5rem (24px), font-weight: 600, line-height: 1.5

/* Body Text */
body: 1rem (16px), font-weight: 400, line-height: 1.6
body-large: 1.125rem (18px), font-weight: 400, line-height: 1.6
body-small: 0.875rem (14px), font-weight: 400, line-height: 1.5

/* UI Elements */
button: 0.875rem (14px), font-weight: 500
caption: 0.75rem (12px), font-weight: 400, line-height: 1.4
```

## 🖼️ Logo & Branding

### Hauptlogo
- **Datei**: `/JLogoMarsstein.svg`
- **Standard-Höhe**: 32px (h-8 in Tailwind)
- **Mindestgröße**: 24px (niemals kleiner)
- **Format**: Vektorgrafik (SVG) für optimale Skalierung

### Logo-Verwendung
- **Header**: Standard 32px Höhe
- **Footer**: 24-28px Höhe
- **Dokumentationen**: Variable Größe je nach Kontext
- **Favicon**: 16x16px, 32x32px Versionen

### Brand-Symbol
- **§ Symbol**: Verwendung in der Primärfarbe #e24e1b
- **Bedeutung**: Rechtsbezug, Compliance-Fokus
- **Kontext**: Standalone oder kombiniert mit Textelementen

## 🎯 UI-Komponenten

### Button-System

#### Primary Button
```css
background: var(--brand-primary);
color: white;
border-radius: 0.5rem;
padding: 0.5rem 1rem;
font-weight: 500;
```

#### Secondary Button
```css
background: transparent;
border: 1px solid var(--brand-primary);
color: var(--brand-primary);
border-radius: 0.5rem;
```

#### Ghost Button
```css
background: transparent;
color: var(--brand-charcoal);
border: none;
text-decoration: underline;
```

### Card-System
- **Hintergrund**: Weiß oder --brand-light
- **Border-Radius**: 0.5rem (8px)
- **Shadow**: Subtile Drop-Shadows für Tiefe
- **Padding**: 1.5rem standard

## ✨ Animationen & Effekte

### Standard-Animationen
```css
/* Eingangs-Animationen */
.slide-up: transform translateY(20px) → translateY(0)
.fade-in: opacity 0 → 1
.scale-in: transform scale(0.95) → scale(1)

/* Interaktions-Animationen */
.pulse-glow: box-shadow pulsing effect
.shimmer: Schimmer-Effekt für Premium-Look
```

### Glassmorphism-Effekte
- **Backdrop-Blur**: 16px
- **Transparenz**: rgba mit 0.8-0.95 Alpha
- **Border**: Subtile Border mit geringer Opazität

## 📱 Responsive Design

### Breakpoints
```css
mobile: < 768px
tablet: 768px - 1024px
desktop: > 1024px
max-width: 1400px (Container)
```

### Mobile-First Approach
- Alle Designs beginnen mobile
- Progressive Enhancement für größere Screens
- Touch-friendly Button-Größen (min. 44px)

## 🌓 Design-Varianten

### Light Mode (Standard)
- Heller Hintergrund (#FFFFFF, #F5F6F8)
- Dunkler Text (#232323, #474747)
- Orange Akzente (#e24e1b)

### Dark Mode (Future)
- Dunkler Hintergrund (#1F1F24)
- Heller Text (#F5F6F8)
- Orange Akzente bleiben bestehen

## 📐 Spacing & Layout

### Spacing-System (basierend auf 8px Grid)
```css
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

### Container & Grid
- **Max-Width**: 1400px
- **Gutters**: 1rem mobile, 1.5rem desktop
- **Grid**: CSS Grid und Flexbox für Layouts

## 🎨 Anwendungsrichtlinien

### Do's
✅ Verwende die definierten Farben konsistent
✅ Halte Weißraum großzügig für bessere Lesbarkeit
✅ Nutze die Typography-Hierarchie konsequent
✅ Achte auf ausreichenden Kontrast (min. 4.5:1)
✅ Verwende SVG-Logos für optimale Qualität

### Don'ts
❌ Keine zusätzlichen Schriftarten ohne Absprache
❌ Orange nicht als Hintergrundfarbe für Text verwenden
❌ Logo nicht verzerren oder unproportional skalieren
❌ Keine zu kleinen Schriftgrößen (< 14px für Body-Text)
❌ Keine übermäßige Animation (Performance & Accessibility)

## 🚀 Technische Implementierung

### CSS-Framework
- **Tailwind CSS**: Utility-First Framework
- **Custom Properties**: CSS-Variablen für Konsistenz
- **PostCSS**: Build-Tool für optimierte Styles

### Asset-Management
- **SVG**: Für Logos und Icons
- **WebP/AVIF**: Für optimierte Bilder
- **Font Loading**: Mit font-display: swap

## 📊 Accessibility

### WCAG 2.1 AA Compliance
- **Farbkontrast**: Minimum 4.5:1 für normalen Text
- **Focus States**: Deutlich sichtbare Fokus-Indikatoren
- **Alt-Texte**: Für alle informativen Bilder
- **Keyboard Navigation**: Vollständig tastaturzugänglich

### Performance
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Font Loading**: Optimierte Web-Font-Performance
- **Image Optimization**: Responsive Images mit optimalen Formaten

---

**Version**: 1.0  
**Letzte Aktualisierung**: August 2025  
**Gültig für**: Marsstein Platform (localhost:8080)

*Dieses Dokument ist ein lebender Leitfaden und wird bei Bedarf aktualisiert.*