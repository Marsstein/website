# Knowledge Hub Design Guide - Marsstein

## 🎯 Zielsetzung

Dieses Dokument beschreibt das **"Knowledge Library"** Design-System für alle Wissens-Hub-Seiten (z.B. Compliance Frameworks, Industry Guides, etc.).

Das Design unterscheidet sich bewusst von den produktorientierten Seiten (Homepage, Preise) und kommuniziert klar: **"Hier ist der Wissensbereich"**.

---

## 🎨 Design-Prinzipien

### Kernwerte
- **Lesbarkeit**: Heller Hintergrund, hoher Kontrast, großzügiger Weißraum
- **Bildungsfokus**: Dokumenten-orientiertes Layout statt Marketing-Dynamik
- **Marsstein CI**: Konsistente Nutzung der Corporate Design Farben
- **Klarheit**: Fokus auf relevante Informationen, keine überflüssigen Metriken

### Unterscheidungsmerkmale

| Merkmal | Produktseiten | Wissens-Hubs |
|---------|---------------|--------------|
| **Hintergrund** | Dunkel oder reines Weiß | Helles Grau mit warmem Touch |
| **Akzentfarbe** | Blau (#3B82F6) | Orange (#e24e1b) |
| **Cards** | Dunkle Gradients oder weiß | Weiß mit orangem Border-Akzent |
| **Badges** | Filled, kräftige Farben | Outline, helle Pastellfarben |
| **Typografie** | Kompakt | Luftig (line-height: 1.8) |
| **Hover** | Scale + Glow | Translate + Shadow |
| **Animationen** | Dynamisch, mehrere Effekte | Subtil, minimal |

---

## 📐 Layout & Struktur

### Container & Spacing
```tsx
// Hauptcontainer
<div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]">

// Content Container
<div className="container mx-auto max-w-7xl px-4 py-8">

// Grid Layout (Sidebar + Content)
<div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
  <div className="lg:col-span-1"> {/* Sidebar */} </div>
  <div className="lg:col-span-3"> {/* Main Content */} </div>
</div>
```

### Breadcrumb Navigation
```tsx
<div className="container px-4 py-4">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className="text-[#474747] hover:text-[#e24e1b]">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="text-[#474747]" />
      <BreadcrumbItem>
        <BreadcrumbLink href="/wissen" className="text-[#474747] hover:text-[#e24e1b]">
          Wissen
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="text-[#474747]" />
      <BreadcrumbItem>
        <BreadcrumbPage className="text-[#e24e1b] font-medium">
          {CurrentPage}
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>
```

---

## 🎨 Farbschema

### Primärfarben (aus Corporate Design Guide)

```css
/* Haupthintergrund */
background: from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]

/* Marsstein Orange (Akzente) */
primary: #e24e1b
primary-hover: #f97316

/* Marsstein Charcoal (Haupttext) */
text-primary: #232323

/* Marsstein Stone (Sekundärtext) */
text-secondary: #474747

/* Brand Dark Blue (Sekundäre Akzente) */
secondary: #003366
```

### Funktionale Farben

```css
/* Card Backgrounds */
card-bg: #FFFFFF (white)
card-bg-alt: #F5F6F8 (Granite Grey)

/* Borders */
border-default: stone-200
border-hover: #e24e1b

/* Focus States */
focus-ring: ring-[#e24e1b]
```

### Badge-Farben

```tsx
// Status Badges (helle Pastelltöne)
popular: "bg-yellow-50 text-yellow-700 border-yellow-200"
upcoming: "bg-purple-50 text-purple-700 border-purple-200"
mandatory: "bg-red-50 text-red-700 border-red-200"
certification: "bg-green-50 text-green-700 border-green-200"

// Difficulty Badges
beginner: "bg-green-50 text-green-700 border-green-200"
intermediate: "bg-orange-50 text-[#e24e1b] border-orange-200"
expert: "bg-red-50 text-red-700 border-red-200"

// Category Badges
orange-accent: "bg-orange-50 border-[#e24e1b] text-[#e24e1b]"
blue-accent: "bg-blue-50 border-[#003366] text-[#003366]"
neutral: "bg-stone-100 border-stone-400 text-[#474747]"
```

---

## 🧩 Komponenten

### Hero Section

```tsx
<motion.section
  className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-stone-200"
>
  <div className="relative container mx-auto max-w-7xl text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Icon + Title */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="p-3 bg-[#e24e1b] rounded-xl shadow-sm">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
          Page Title
        </h1>
      </div>

      {/* Description */}
      <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
        Description text
      </p>

      {/* Stats Badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
          <Icon className="h-4 w-4 mr-2" />
          Stat 1
        </Badge>
        {/* More badges */}
      </div>
    </motion.div>
  </div>
</motion.section>
```

### Sidebar Filters

```tsx
<div className="lg:sticky lg:top-24 space-y-6">
  {/* Search */}
  <Card className="bg-white border-stone-200 shadow-sm">
    <CardContent className="p-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#474747]" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 bg-[#F5F6F8] border border-stone-300 rounded-lg text-[#232323] placeholder-[#474747] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:border-transparent"
        />
      </div>
    </CardContent>
  </Card>

  {/* Filter Category */}
  <Card className="bg-white border-stone-200 shadow-sm">
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold text-[#232323] mb-4">Category Name</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
              isSelected
                ? "bg-orange-50 border border-[#e24e1b] text-[#e24e1b]"
                : "border border-stone-200 text-[#474747] hover:bg-[#F5F6F8] hover:text-[#232323]"
            )}
          >
            <div className="flex items-center gap-3">
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            <Badge variant="outline" className="text-xs border-current">
              {item.count}
            </Badge>
          </button>
        ))}
      </div>
    </CardContent>
  </Card>
</div>
```

### Content Cards (Grid View)

```tsx
<Card className={cn(
  "group relative overflow-hidden bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg",
  "hover:-translate-y-1"
)}>
  <CardContent className="p-6">
    {/* Header mit Icon + Status Badges */}
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-r {colorClass}">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Status Badges (top right) */}
      <div className="flex flex-col items-end gap-2">
        {item.popular && (
          <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
            <Star className="h-3 w-3 mr-1" />
            Beliebt
          </Badge>
        )}
        {/* More badges */}
      </div>
    </div>

    {/* Title + Subtitle */}
    <h3 className="text-xl font-bold text-[#232323] mb-1">{item.title}</h3>
    <p className="text-[#e24e1b] text-sm mb-3">{item.subtitle}</p>

    {/* Description */}
    <p className="text-[#474747] leading-relaxed mb-4">
      {item.description}
    </p>

    {/* Stats Box (nur wenn relevant) */}
    <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3 mb-4">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="h-4 w-4 text-[#474747]" />
        <span className="text-xs text-[#474747]">Label</span>
      </div>
      <span className="text-sm font-medium text-[#232323]">{value}</span>
    </div>

    {/* Difficulty (falls vorhanden) */}
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#474747]">Schwierigkeit</span>
        <Badge className="bg-orange-50 text-[#e24e1b] border-orange-200">
          Fortgeschritten
        </Badge>
      </div>
    </div>

    {/* Industry/Category Tags */}
    <div className="mb-4">
      <span className="text-sm text-[#474747] mb-2 block">Label:</span>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-xs bg-stone-100 text-[#474747] border-stone-300"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>

    {/* CTA Button */}
    <Button
      asChild
      className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm"
    >
      <Link to={item.link}>
        <BookOpen className="h-4 w-4 mr-2" />
        Details ansehen
        <ArrowRight className="h-4 w-4 ml-2" />
      </Link>
    </Button>
  </CardContent>
</Card>
```

### Empty State

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="text-center py-16"
>
  <div className="p-4 bg-orange-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
    <Search className="h-6 w-6 text-[#e24e1b]" />
  </div>
  <h3 className="text-xl font-semibold text-[#232323] mb-2">
    Keine Ergebnisse gefunden
  </h3>
  <p className="text-[#474747] mb-4">
    Versuchen Sie andere Suchbegriffe oder Filter.
  </p>
  <Button
    onClick={resetFilters}
    className="bg-[#e24e1b] hover:bg-[#f97316] text-white"
  >
    Filter zurücksetzen
  </Button>
</motion.div>
```

---

## 📝 Typografie

### Text Styles

```tsx
// Headlines
h1: "text-4xl md:text-6xl font-bold text-[#232323]"
h2: "text-2xl font-bold text-[#232323]"
h3: "text-xl font-bold text-[#232323]"

// Body Text
body-large: "text-xl text-[#474747] leading-relaxed"
body: "text-[#474747] leading-relaxed"
body-small: "text-sm text-[#474747]"

// Accent Text
accent: "text-[#e24e1b]"
subtitle: "text-sm text-[#e24e1b]"

// Labels
label: "text-xs text-[#474747]"
```

### Line Heights

```css
/* Generell höhere Line-Heights für bessere Lesbarkeit */
default: 1.6
relaxed: 1.8 (für lange Texte)
```

---

## 🎭 Animationen

### Motion Variants

```tsx
// Card Entry Animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>

// Hero Section Animation
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

### Hover Effects

```tsx
// Card Hover
className="hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"

// Button Hover
className="bg-[#e24e1b] hover:bg-[#f97316] transition-colors"

// Filter Button Hover
className="hover:bg-[#F5F6F8] hover:text-[#232323] transition-all duration-200"
```

---

## ⚠️ Was zu vermeiden ist

### ❌ Don'ts

1. **Keine falschen Metriken**
   - ❌ "Lesezeit" bei Übersichtsseiten (keine echten Artikel)
   - ❌ "Compliance Status %" bei Frameworks (keine individuellen Implementierungen)
   - ✅ Nur echte, relevante Daten anzeigen

2. **Keine dunklen Designs**
   - ❌ Dunkle Hintergründe (reserviert für Produktseiten)
   - ✅ Helle, lesbare Backgrounds

3. **Keine überladenen Animationen**
   - ❌ Mehrere gleichzeitige Effekte
   - ✅ Subtile, einzelne Animationen

4. **Keine Blau-Akzente**
   - ❌ Blau ist für Produktseiten reserviert
   - ✅ Orange als Hauptakzentfarbe

5. **Keine Filled Badges auf hellem Grund**
   - ❌ Kräftige, gefüllte Badges
   - ✅ Helle Outline-Badges mit Pastellfarben

---

## 📊 Beispiel-Implementierung

### Vollständiges Card-Layout (Compliance Frameworks)

```tsx
{filteredItems.map((item, index) => {
  const IconComponent = item.icon;
  const CategoryIcon = getCategoryIcon(item.category);

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={cn(
        "group relative overflow-hidden bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg",
        "hover:-translate-y-1"
      )}>
        <CardContent className="p-6">
          {/* Icon + Status Badges */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={cn("p-3 rounded-xl bg-gradient-to-r", item.color)}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              {item.popular && (
                <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
                  <Star className="h-3 w-3 mr-1" />
                  Beliebt
                </Badge>
              )}
              {item.certification && (
                <Badge className="bg-green-50 text-green-700 border-green-200">
                  <BadgeCheck className="h-3 w-3 mr-1" />
                  Zertifizierung
                </Badge>
              )}
            </div>
          </div>

          {/* Title + Subtitle */}
          <h3 className="text-xl font-bold text-[#232323] mb-1">{item.title}</h3>
          <p className="text-[#e24e1b] text-sm mb-3">{item.subtitle}</p>

          {/* Description */}
          <p className="text-[#474747] leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Implementation Time */}
          <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <Target className="h-4 w-4 text-[#474747]" />
              <span className="text-xs text-[#474747]">Umsetzungsdauer</span>
            </div>
            <span className="text-sm font-medium text-[#232323]">{item.implementationTime}</span>
          </div>

          {/* Difficulty */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#474747]">Schwierigkeit</span>
              <Badge className="bg-orange-50 text-[#e24e1b] border-orange-200">
                Fortgeschritten
              </Badge>
            </div>
          </div>

          {/* Industries */}
          <div className="mb-4">
            <span className="text-sm text-[#474747] mb-2 block">Branchen:</span>
            <div className="flex flex-wrap gap-1">
              {item.industries.slice(0, 3).map((industry) => (
                <Badge
                  key={industry}
                  variant="outline"
                  className="text-xs bg-stone-100 text-[#474747] border-stone-300"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button
            asChild
            className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm"
          >
            <Link to={item.link}>
              <BookOpen className="h-4 w-4 mr-2" />
              Details ansehen
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
})}
```

---

## 🔄 Migration Checklist

Beim Umsetzen auf andere Hub-Seiten:

- [ ] Hintergrund: `from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]`
- [ ] Hero Section: Weißer Hintergrund mit orangem Icon-Badge
- [ ] Breadcrumbs: Orange Akzente bei aktiver Seite
- [ ] Sidebar: Weiße Cards, orange Highlights bei Auswahl
- [ ] Content Cards: Weiß mit linkem orangem Border (4px)
- [ ] Badges: Helle Pastellfarben (bg-{color}-50, text-{color}-700)
- [ ] CTAs: `bg-[#e24e1b] hover:bg-[#f97316]`
- [ ] Text: Charcoal (#232323) + Stone (#474747)
- [ ] Hover: Translate + Shadow (nicht Scale)
- [ ] Nur echte, relevante Daten anzeigen
- [ ] Line-height: 1.8 für Body-Text

---

## 📚 Referenz

**Implementiert in:**
- `/src/pages/ComplianceFrameworks.tsx` (✅ Umgesetzt)

**TODO für:**
- `/src/pages/IndustryGuides.tsx`
- `/src/pages/AssessmentCenter.tsx`
- Weitere Wissens-Hub-Seiten

---

**Version**: 1.0
**Letzte Aktualisierung**: Januar 2025
**Autor**: Claude + Jonas Krüger
**Basierend auf**: Corporate Design Guide v1.0
