# Single-Page Conversion Guide

## Übersicht
Diese Anleitung beschreibt, wie eine Tab-basierte Seite in eine Single-Page-Anwendung mit Scroll-Sektionen und Anker-Navigation umgewandelt wird.

## Vorher-Nachher Vergleich

### Vorher (Tab-basiert)
- Inhalte in separaten Tabs versteckt
- Nur ein Tab gleichzeitig sichtbar
- Keine direkte URL-Navigation zu Abschnitten

### Nachher (Single-Page)
- Alle Inhalte auf einer Seite sichtbar
- Smooth Scrolling zwischen Sektionen
- Anker-Links mit Hash in URL (#overview, #art9, etc.) auf deutsch
- Sticky Navigation mit aktivem Abschnitt-Highlighting

## Schritt-für-Schritt Anleitung

### 1. State Management anpassen

#### Entfernen
```tsx
const [activeTab, setActiveTab] = useState('overview');
```

#### Hinzufügen
```tsx
const [activeSection, setActiveSection] = useState<string>('overview');
```

### 2. Navigation Items definieren

```tsx
// Navigation items for sticky navigation
const navigationItems = [
  { id: 'overview', label: 'Überblick', icon: Shield },
  { id: 'art9', label: 'Art. 9 DSGVO', icon: Lock },
  { id: 'consent', label: 'Einwilligungsmanagement', icon: UserCheck },
  { id: 'tom', label: 'TOM Healthcare', icon: Settings },
  { id: 'dsfa', label: 'DSFA & Risikoanalyse', icon: BarChart3 },
  { id: 'implementation', label: 'Praxis-Implementation', icon: Code }
];
```

### 3. Scroll-Funktionalität implementieren

```tsx
const scrollToSection = (sectionId: string) => {
  // Update URL with hash
  window.history.pushState(null, '', `#${sectionId}`);
  
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 120; // Offset for sticky navigation
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
```

### 4. useEffect Hooks hinzufügen

```tsx
// Handle initial load with hash
useEffect(() => {
  const hash = window.location.hash.slice(1);
  if (hash) {
    setTimeout(() => {
      scrollToSection(hash);
      setActiveSection(hash);
    }, 100);
  }
}, []);

// Track active section on scroll
useEffect(() => {
  const handleScroll = () => {
    const sections = navigationItems.map(item => ({
      id: item.id,
      element: document.getElementById(item.id)
    }));
    
    const scrollPosition = window.scrollY + 150; // Offset for sticky nav
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.element && section.element.offsetTop <= scrollPosition) {
        setActiveSection(section.id);
        break;
      }
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 5. Tab-Struktur durch Sticky Navigation ersetzen

#### Entfernen
```tsx
<Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
  <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto p-1">
    {tabs.map((tab) => (
      <TabsTrigger
        key={tab.id}
        value={tab.id}
        className="..."
      >
        <tab.icon className="h-5 w-5" />
        <span className="text-xs font-medium text-center leading-tight">
          {tab.label}
        </span>
      </TabsTrigger>
    ))}
  </TabsList>
```

#### Ersetzen durch
```tsx
{/* Sticky Navigation */}
<div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
  <div className="container px-4">
    <div className="max-w-7xl mx-auto">
      <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide">
        {navigationItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              scrollToSection(item.id);
              setActiveSection(item.id);
            }}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
              activeSection === item.id
                ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800"
                : "hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400",
              "border",
              activeSection === item.id
                ? "border-red-200 dark:border-red-800"
                : "border-transparent hover:border-red-200 dark:hover:border-red-800"
            )}
          >
            <item.icon className={cn(
              "h-4 w-4",
              activeSection === item.id && "text-red-600 dark:text-red-500"
            )} />
            <span className={cn(
              "text-sm font-medium",
              activeSection === item.id && "text-red-700 dark:text-red-400"
            )}>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  </div>
</div>
```

### 6. TabsContent durch Sections ersetzen

#### Entfernen
```tsx
<TabsContent value="overview" className="space-y-8">
  {/* Content */}
</TabsContent>
```

#### Ersetzen durch
```tsx
{/* Overview Section */}
<section id="overview" className="space-y-8 scroll-mt-32">
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold mb-8"
  >
    Sektions-Titel
  </motion.h2>
  {/* Content */}
</section>

{/* Divider */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

{/* Next Section */}
<section id="next-section" className="space-y-8 scroll-mt-32">
  {/* ... */}
</section>
```

### 7. Imports anpassen

#### Entfernen
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
```

#### Hinzufügen/Anpassen
```tsx
import React, { useState, useRef, useEffect } from 'react';
```

## Wichtige CSS-Klassen

### scroll-mt-32
Sorgt für korrekten Offset beim Anker-Sprung (verhindert, dass Content unter der Sticky Navigation verschwindet)

### sticky top-16
Fixiert die Navigation am oberen Rand (top-16 = 4rem Abstand für Header)

### scrollbar-hide
Optional: Versteckt horizontale Scrollbar bei Navigation auf kleinen Bildschirmen

## Struktur-Template

```tsx
<div className="min-h-screen">
  <Header />
  
  <main>
    {/* Hero Section */}
    <section>{/* ... */}</section>
    
    {/* Sticky Navigation */}
    <div className="sticky top-16 z-40">{/* ... */}</div>
    
    {/* Main Content */}
    <div className="py-20">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Section 1 */}
          <section id="section1" className="space-y-8 scroll-mt-32">
            <motion.h2>{/* Title */}</motion.h2>
            {/* Content */}
          </section>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          
          {/* Section 2 */}
          <section id="section2" className="space-y-8 scroll-mt-32">
            {/* ... */}
          </section>
          
        </div>
      </div>
    </div>
  </main>
  
  <Footer />
</div>
```

## Testing Checklist

- [ ] Direktlinks mit Hash funktionieren (z.B. `/page#section`)
- [ ] Smooth Scrolling zu allen Sektionen
- [ ] Aktive Sektion wird in Navigation hervorgehoben
- [ ] Navigation bleibt beim Scrollen sichtbar (sticky)
- [ ] Korrekte Offsets (Content nicht unter Navigation versteckt)
- [ ] Mobile Responsiveness (horizontales Scrollen der Navigation)
- [ ] URL wird beim Klick auf Navigation aktualisiert
- [ ] Browser-Zurück-Button funktioniert mit Hash-Navigation

## Vorteile der Single-Page-Struktur

1. **Bessere Übersicht**: Nutzer können alle Inhalte durch Scrollen erkunden
2. **SEO-freundlich**: Alle Inhalte sind sofort sichtbar für Suchmaschinen
3. **Teilbare Links**: Direktlinks zu spezifischen Abschnitten möglich
4. **Bessere Performance**: Kein Nachladen von Tab-Inhalten
5. **Mobile-freundlich**: Natürliches Scroll-Verhalten auf Mobilgeräten