# MarsStein Design System

## Überblick

Dieses Design System definiert die visuellen und strukturellen Standards für alle Seiten der MarsStein Plattform. Es basiert auf modernen Web-Standards und nutzt React, TypeScript, Tailwind CSS und shadcn/ui Komponenten.

## 🎨 Farbschema

### Primärfarben
```css
/* Hauptakzentfarbe - Orange-Rot */
--primary: #e24e1b;
--primary-hover: #c73e0f;

/* Vertrauensblau */
--trust-blue: #003366;
--trust-blue-light: #0056b3;

/* Erfolgsgrün */
--success: #39B37B;
--success-light: #4bc48a;
```

### Sekundärfarben
```css
/* Gradients */
--gradient-primary: linear-gradient(to right, #e24e1b, #f97316);
--gradient-trust: linear-gradient(to right, #003366, #0056b3);
--gradient-premium: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Neutral */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-900: #111827;
--charcoal: #1a1a1a;
```

### Branchenspezifische Farben
```css
/* Healthcare */
--healthcare-red: #dc2626;
--healthcare-pink: #ec4899;
--healthcare-rose: #f43f5e;

/* Energy/Smart Grid */
--energy-blue: #0ea5e9;
--energy-teal: #14b8a6;
--energy-green: #22c55e;

/* Finance */
--finance-purple: #9333ea;
--finance-indigo: #6366f1;
```

## 📐 Layout & Struktur

### Container System
```tsx
<div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
  <Header />
  <main className="overflow-hidden">
    <div className="container px-4">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
      </div>
    </div>
  </main>
  <Footer />
</div>
```

### Grid System
```tsx
/* Responsive Grid */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid Items */}
</div>

/* Feature Grid */
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Feature Cards */}
</div>
```

### Spacing Scale
- `space-y-4`: Kleine Abstände innerhalb von Komponenten
- `space-y-6`: Standard Abstände zwischen Elementen
- `space-y-8`: Große Abstände zwischen Sektionen
- `space-y-20`: Abstände zwischen Hauptsektionen
- `py-20`: Standard Padding für Sektionen
- `py-28`: Hero Section Padding

## 🎯 Komponenten

### Hero Section
```tsx
<section className="relative py-20 md:py-28">
  {/* Animated Background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
  </div>

  <motion.div className="container px-4">
    <div className="max-w-7xl mx-auto">
      {/* Hero Content */}
    </div>
  </motion.div>
</section>
```

### Cards
```tsx
/* Standard Card */
<Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Icon className="h-6 w-6 text-primary" />
      Title
    </CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>

/* Gradient Border Card */
<Card className="relative overflow-hidden border-0">
  <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-10" />
  <div className="relative p-6">
    {/* Content */}
  </div>
</Card>

/* Interactive Card */
<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
  <Card className="cursor-pointer">
    {/* Content */}
  </Card>
</motion.div>
```

### Buttons
```tsx
/* Primary Button */
<Button className="bg-gradient-to-r from-primary to-orange-500 text-white hover:opacity-90">
  <Icon className="mr-2 h-5 w-5" />
  Button Text
</Button>

/* Ghost Button */
<Button variant="ghost" className="text-gray-600 hover:text-primary">
  Button Text
</Button>

/* Outline Button */
<Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
  Button Text
</Button>

/* Size Variants */
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Badges
```tsx
/* Status Badges */
<Badge className="bg-green-100 text-green-700">Aktiv</Badge>
<Badge variant="destructive">Kritisch</Badge>
<Badge variant="secondary">Ausstehend</Badge>

/* Custom Badges */
<Badge className="bg-gradient-to-r from-primary to-orange-500 text-white">
  Premium
</Badge>
```

### Navigation
```tsx
/* Sticky Navigation */
<div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b">
  <nav className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
    {navigationItems.map(item => (
      <button className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
        isActive
          ? "bg-primary/10 text-primary border-primary"
          : "hover:bg-gray-100 dark:hover:bg-gray-800"
      )}>
        <item.icon className="h-4 w-4" />
        <span>{item.label}</span>
      </button>
    ))}
  </nav>
</div>
```

## 🎭 Animationen

### Framer Motion Patterns
```tsx
/* Fade In */
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

/* Stagger Children */
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>

/* Hover Effects */
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>

/* Scroll Animations */
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
```

### CSS Animationen
```css
/* Pulse */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Float */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Shimmer */
.shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  animation: shimmer 2s infinite;
}
```

## 📱 Responsive Design

### Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Mobile-First Approach
```tsx
/* Text Sizing */
<h1 className="text-3xl md:text-4xl lg:text-5xl">

/* Grid Responsive */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

/* Padding Responsive */
<div className="p-4 md:p-6 lg:p-8">

/* Hide/Show Elements */
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>
```

## 🎨 Spezialeffekte

### Glassmorphism
```tsx
<div className="backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/20">
  {/* Glassmorphic content */}
</div>
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
  Gradient Text
</span>
```

### Glow Effects
```tsx
<div className="relative">
  <div className="absolute inset-0 bg-primary/20 blur-xl" />
  <div className="relative">
    {/* Content */}
  </div>
</div>
```

### Tech Grid Background
```tsx
<div className="relative">
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</div>
```

## 🔤 Typografie

### Schriftarten
```css
/* Primary Font */
font-family: 'Inter', system-ui, sans-serif;

/* Monospace */
font-family: 'JetBrains Mono', 'Courier New', monospace;
```

### Heading Hierarchy
```tsx
/* H1 - Page Title */
<h1 className="text-4xl md:text-5xl font-bold tracking-tight">

/* H2 - Section Title */
<h2 className="text-3xl font-bold mb-8">

/* H3 - Subsection */
<h3 className="text-xl font-semibold mb-4">

/* H4 - Card Title */
<h4 className="text-lg font-medium">

/* Body Text */
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">

/* Small Text */
<span className="text-sm text-gray-500">
```

## 🎯 Best Practices

### 1. Konsistenz
- Verwende immer die definierten Farben und Komponenten
- Halte dich an die Spacing-Scale
- Nutze einheitliche Animationsmuster

### 2. Accessibility
- Kontrastverhältnisse beachten (WCAG AA)
- Fokus-States für alle interaktiven Elemente
- Semantisches HTML verwenden

### 3. Performance
- Lazy Loading für Bilder
- Code-Splitting für große Komponenten
- Minimale Bundle-Größe anstreben

### 4. Dark Mode
- Alle Komponenten müssen Dark Mode unterstützen
- Verwende Tailwind's dark: Prefix
- Teste beide Modi regelmäßig

## 📦 Komponenten-Bibliothek

Die Basis-Komponenten stammen von shadcn/ui und werden wie folgt erweitert:

### Installation neuer Komponenten
```bash
npx shadcn-ui@latest add [component-name]
```

### Anpassung
Komponenten befinden sich in `src/components/ui/` und können dort angepasst werden.

## 🚀 Neue Seiten erstellen

### Template für neue Seiten
```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container px-4"
          >
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Page Title
              </h1>
            </div>
          </motion.div>
        </section>

        {/* Content Sections */}
        <div className="py-20">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto space-y-20">
              {/* Add sections here */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewPage;
```

---

Dieses Design System wird kontinuierlich weiterentwickelt. Bei Fragen oder Ergänzungen bitte das Development Team kontaktieren.