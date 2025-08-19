# Marsstein Design System Documentation

## 🎨 Design Philosophy

The Marsstein design system is built around modern compliance and regulatory technology aesthetics, combining professional trust with innovative tech appeal. It emphasizes clarity, accessibility, and user confidence through careful color choices, typography, and interactive patterns.

## 🎯 Core Principles

1. **Trust & Authority**: Using deep blues and professional grays to convey expertise
2. **Modern Tech**: Glassmorphism, gradients, and subtle animations for contemporary feel
3. **Accessibility**: High contrast ratios and clear visual hierarchy
4. **Performance**: Optimized animations with reduced motion support
5. **Consistency**: Reusable components following shadcn/ui patterns

## 🎨 Color System

### Brand Colors

```css
/* Primary Brand Colors */
--brand-red: #e24e1b         /* Primary accent - energy, action */
--brand-charcoal: #232323    /* Dark backgrounds, text */
--brand-stone: #474747       /* Secondary dark, borders */
--brand-light: #F5F6F8       /* Light backgrounds */
--brand-green: #39B37B       /* Success, positive states */
--brand-white: #FFFFFF       /* Pure white */
```

### Semantic Colors

```css
/* Light Theme */
--background: 220 14% 98%     /* #F2F2F2 - Light Gray */
--foreground: 210 100% 20%    /* #003366 - Dark Blue */
--primary: 15 86% 49%         /* #e24e1b - Accent Orange */
--secondary: 150 48% 49%      /* #39B37B - Success Green */
--destructive: 15 86% 49%     /* #e24e1b - Error/Warning */
--muted: 200 20% 95%          /* #E6F2FF - Light Blue */
--accent: 210 100% 20%        /* #003366 - Dark Blue */

/* Dark Theme */
--background: 0 0% 14%        /* #232323 - Charcoal */
--foreground: 0 0% 100%       /* #FFFFFF - White */
/* Other colors remain similar with adjusted opacity */
```

### Gradient System

```css
/* Primary Gradients */
--gradient-primary: linear-gradient(135deg, #e24e1b, #ff6b3d)
--gradient-secondary: linear-gradient(135deg, #1f2937, #374151)
--gradient-hero: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
--gradient-accent: linear-gradient(90deg, #e24e1b, #f97316, #ea580c)
```

## 📝 Typography

### Font Stack

```css
/* Primary Font - Inter */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Monospace - JetBrains Mono */
font-family: 'JetBrains Mono', 'Monaco', 'Consolas', monospace;
```

### Type Scale

```css
h1: 3rem (48px) - font-weight: 700
h2: 2.25rem (36px) - font-weight: 600
h3: 1.875rem (30px) - font-weight: 600
body: 1rem (16px) - font-weight: 400
small: 0.875rem (14px) - font-weight: 400
```

## 🧩 Component Patterns

### Card Component

```tsx
/* Basic Card */
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>

/* Enhanced Card with Gradient Border */
<Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
  ...
</Card>
```

### Button Variants

```tsx
/* Primary Button */
<Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
  Action
</Button>

/* Outline Button */
<Button variant="outline" className="border-gray-300">
  Secondary Action
</Button>

/* Ghost Button */
<Button variant="ghost">
  Tertiary Action
</Button>
```

### Badge Patterns

```tsx
/* Status Badges */
<Badge className="bg-blue-100 text-blue-700 border-blue-200">Status</Badge>
<Badge className="bg-green-100 text-green-700 border-green-200">Success</Badge>
<Badge className="bg-orange-100 text-orange-700 border-orange-200">Warning</Badge>
<Badge className="bg-red-100 text-red-700 border-red-200">Critical</Badge>
```

## ✨ Animation Patterns

### Core Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Slide Up */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Float */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### Framer Motion Patterns

```tsx
/* Page Entry Animation */
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

/* Stagger Children */
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>

/* Hover Effects */
<motion.div
  whileHover={{ scale: 1.02, y: -4 }}
  transition={{ duration: 0.3 }}
>
```

## 🎯 Layout Patterns

### Hero Section

```tsx
<section className="relative py-20 md:py-28 overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5" />
    <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
  </div>
  
  {/* Content */}
  <div className="container relative px-4 mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div className="space-y-8">
        <Badge>Category</Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          Title with <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Gradient</span>
        </h1>
        <p className="text-xl text-gray-600">Description</p>
        <div className="flex gap-4">
          <Button size="lg">Primary Action</Button>
          <Button size="lg" variant="outline">Secondary</Button>
        </div>
      </div>
      
      {/* Visual Element */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm">
        {/* Dashboard, metrics, or illustration */}
      </Card>
    </div>
  </div>
</section>
```

### Navigation Pattern

```tsx
/* Sticky Navigation */
<div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
  <nav className="flex space-x-8 overflow-x-auto">
    {items.map((item) => (
      <a
        href={item.href}
        className={cn(
          "flex items-center space-x-2 py-4 text-sm font-medium transition-colors border-b-2",
          activeSection === item.id
            ? "text-blue-600 border-blue-600"
            : "text-gray-600 border-transparent hover:text-gray-900"
        )}
      >
        <Icon className="w-4 h-4" />
        <span>{item.label}</span>
      </a>
    ))}
  </nav>
</div>
```

## 📊 Data Visualization

### Progress Indicators

```tsx
/* Basic Progress */
<Progress value={percentage} className="h-2" />

/* Enhanced Progress with Label */
<div className="space-y-2">
  <div className="flex justify-between">
    <span className="text-sm font-medium">{label}</span>
    <span className="text-sm font-semibold text-blue-600">{value}%</span>
  </div>
  <Progress value={value} className="h-2" />
</div>
```

### Metric Cards

```tsx
<Card>
  <CardContent className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{metric.label}</p>
        <p className="text-2xl font-bold">{metric.value}</p>
      </div>
      <Badge variant="secondary">{metric.trend}</Badge>
    </div>
    <Progress value={metric.progress} className="h-2 mt-4" />
  </CardContent>
</Card>
```

## 🎨 Special Effects

### Glassmorphism

```css
.glassmorphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### Gradient Text

```css
.gradient-text {
  background: linear-gradient(135deg, #e24e1b, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Shimmer Effect

```css
.shimmer-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer-slide 3s infinite;
}
```

## 📱 Responsive Patterns

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

### Responsive Typography

```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
```

## 🔧 Utility Classes

### Shadows

```css
shadow-soft: 0 1px 2px 0 hsl(15 86% 49% / 0.05)
shadow-medium: 0 4px 6px -1px hsl(15 86% 49% / 0.1)
shadow-large: 0 10px 15px -3px hsl(15 86% 49% / 0.1)
shadow-extra: 0 20px 25px -5px hsl(15 86% 49% / 0.1)
```

### Transitions

```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--transition-bounce: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

## 🎯 Best Practices

1. **Consistency**: Use the predefined color variables and component patterns
2. **Accessibility**: Ensure proper contrast ratios and keyboard navigation
3. **Performance**: Use `prefers-reduced-motion` for animations
4. **Dark Mode**: Always provide dark mode variants using Tailwind's dark: prefix
5. **Mobile First**: Design for mobile screens first, then enhance for larger screens

## 📚 Common Patterns

### Page Structure

```tsx
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <Header />
  
  {/* Hero Section */}
  <section className="pt-24 pb-16">
    {/* Hero content */}
  </section>
  
  {/* Main Content */}
  <section className="py-16">
    <div className="container px-4 mx-auto">
      <div className="max-w-4xl mx-auto">
        {/* Content */}
      </div>
    </div>
  </section>
  
  {/* CTA Section */}
  <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
    {/* Call to action */}
  </section>
  
  <Footer />
</div>
```

### Form Patterns

```tsx
<form className="space-y-6">
  <div>
    <label className="text-sm font-medium text-gray-700">Label</label>
    <input 
      className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
    />
  </div>
  <Button type="submit" className="w-full">
    Submit
  </Button>
</form>
```

This design system provides a comprehensive foundation for building consistent, accessible, and visually appealing interfaces across the Marsstein platform.