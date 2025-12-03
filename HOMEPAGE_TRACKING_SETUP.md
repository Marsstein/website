# Homepage Tracking Setup - Conversion Funnel Analysis

**Stand:** 2025-11-06
**Page:** Homepage (/)
**PostHog Project ID:** 99640

---

## 📋 Überblick

Homepage Tracking wurde vollständig implementiert für:
- ✅ **Conversion Funnels** (Homepage → Pricing, Homepage → Contact)
- ✅ **Feature Interest Tracking** (Welche Features interessieren User?)
- ✅ **Section Flow Analysis** (Wie navigieren User durch die Page?)
- ✅ **CTA Performance** (Hero vs Footer CTA Vergleich)
- ✅ **Scroll Depth & Exit Intent**

---

## 🎯 Warum Homepage Tracking?

Die Homepage ist der **Haupteinstiegspunkt** für organischen Traffic:
- 🔍 **Entscheidungspunkt**: Demo vs. Self-Service vs. Bounce
- 📊 **A/B Test Potenzial**: Hero-Text, CTA-Platzierung
- 💰 **Revenue Impact**: Direkter Einfluss auf Conversion Rate

---

## 🔧 Was wurde implementiert?

### 1. Code-Änderungen in `src/pages/Home.tsx`

```typescript
import React, { useEffect, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import {
  useTracking,
  useSectionTracking,
  useScrollDepthTracking,
  useExitIntentTracking
} from '@/hooks/useTracking';

const Home = () => {
  const { trackButtonClick } = useTracking();

  // ✅ Scroll Depth Tracking (25%, 50%, 75%, 100%)
  useScrollDepthTracking('homepage');

  // ✅ Exit Intent Detection (Mouse verlässt Viewport)
  useExitIntentTracking({ page: 'homepage' });

  // ✅ Section View Tracking (IntersectionObserver)
  const heroSectionRef = useSectionTracking('homepage_hero');
  const featuresSectionRef = useSectionTracking('homepage_features');
  const dsbSectionRef = useSectionTracking('homepage_dsb_info');
  const ctaSectionRef = useSectionTracking('homepage_cta');

  return (
    <>
      {/* ✅ Hero Section mit Tracking */}
      <section
        ref={heroSectionRef}
        id="hero-section"
        data-section="hero"
        className="relative overflow-hidden"
      >
        {/* Hero CTAs */}
        <Link
          to="/preise"
          onClick={() => trackButtonClick('homepage_cta_pricing', 'hero')}
          data-ph-capture="homepage-hero-pricing-cta"
        >
          Jetzt starten
        </Link>

        <Link
          to="/contact"
          onClick={() => trackButtonClick('homepage_cta_demo', 'hero')}
          data-ph-capture="homepage-hero-demo-cta"
        >
          Demo anfragen
        </Link>
      </section>

      {/* ✅ Features Section mit Click Tracking */}
      <section
        ref={featuresSectionRef}
        id="features-section"
        data-section="features"
      >
        {features.map((feature, index) => (
          <Link
            to={feature.link}
            onClick={() => trackButtonClick('homepage_feature_link', 'features', {
              feature_name: feature.title
            })}
            data-ph-capture={`homepage-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Mehr erfahren →
          </Link>
        ))}
      </section>

      {/* ✅ DSB Info Section */}
      <section
        ref={dsbSectionRef}
        id="dsb-section"
        data-section="dsb-info"
      >
        <Link
          to="/wissen/leitfaden/datenschutzbeauftragter"
          onClick={() => trackButtonClick('homepage_dsb_learn_more', 'dsb-info')}
          data-ph-capture="homepage-dsb-learn-more"
        >
          Mehr über DSB-Aufgaben erfahren →
        </Link>

        <Link
          to="/externer-datenschutzbeauftragter"
          onClick={() => trackButtonClick('homepage_dsb_hire', 'dsb-info')}
          data-ph-capture="homepage-dsb-hire"
        >
          Externen DSB beauftragen
        </Link>
      </section>

      {/* ✅ Footer CTA Section */}
      <section
        ref={ctaSectionRef}
        id="cta-section"
        data-section="cta"
      >
        <Link
          to="/preise"
          onClick={() => trackButtonClick('homepage_cta_pricing', 'footer-cta')}
          data-ph-capture="homepage-footer-pricing-cta"
        >
          Kostenlos testen
        </Link>
      </section>
    </>
  );
};
```

### 2. Autocapture für Homepage aktiviert

**`src/lib/analytics.ts`:**
```typescript
autocapture: {
  dom_event_allowlist: ['click', 'change', 'submit'],
  url_allowlist: [
    'marsstein.com/beta',
    'marsstein.com/',      // ✅ Homepage hinzugefügt
    'marsstein.ai/',
    'marsstein.ai'
  ],
  element_allowlist: ['button', 'a', 'input', 'select', 'textarea', 'label'],
  css_selector_allowlist: ['[data-ph-capture]'],
},
```

---

## 📊 PostHog Insights erstellt

### 1. 🎯 Homepage → Pricing Funnel (bHX7eE4K)
**URL:** https://eu.posthog.com/project/99640/insights/bHX7eE4K

**Funnel Steps:**
1. **Homepage View** - User landet auf `/`
2. **Scroll > 50%** - User scrollt mindestens zur Hälfte
3. **CTA Click: "Jetzt starten"** - User klickt auf Pricing CTA
4. **Pricing Page View** - User erreicht `/preise` oder `/pricing`

**Was zeigt es:**
- Drop-off Rate bei jedem Step
- Conversion Rate: Homepage → Pricing
- Time to convert (Funnel Window: 30 min)

**Actionable Insights:**
- **Hoher Drop-off bei Step 2 (Scroll)?** → Content zu lang, CTA früher platzieren
- **Hoher Drop-off bei Step 3 (CTA Click)?** → CTA nicht sichtbar genug, Design ändern
- **Hoher Drop-off bei Step 4 (Page Load)?** → Technisches Problem, Pricing Page zu langsam

---

### 2. 📞 Homepage → Demo Request Funnel (rvx8urHT)
**URL:** https://eu.posthog.com/project/99640/insights/rvx8urHT

**Funnel Steps:**
1. **Homepage View**
2. **Scroll > 25%** (niedrigere Schwelle für Demo-Interessenten)
3. **CTA Click: "Demo anfragen"**
4. **Contact Page View**

**Was zeigt es:**
- High-Intent User Behavior (Demo-Anfragen = qualifizierte Leads)
- Vergleich Demo vs. Self-Service (Pricing) Intent

**Actionable Insights:**
- **Demo Funnel > Pricing Funnel?** → Ihr Produkt ist consultative, fokussiert euch auf persönlichen Kontakt
- **Demo Funnel < Pricing Funnel?** → Self-Service-Buyer dominieren, Product-Led Growth Strategie

---

### 3. 🔥 Homepage Feature Interest Heatmap (18vhWpGl)
**URL:** https://eu.posthog.com/project/99640/insights/18vhWpGl

**Was zeigt es:**
- Bar Chart: Welche Features werden am meisten geklickt
- Breakdown nach Feature-Name:
  - DSGVO Compliance
  - ISO 27001 Zertifizierung
  - EU AI Act Ready
  - Cookie Management
  - Whistleblower System
  - Compliance AI Assistant

**Actionable Insights:**
- **Feature X hat 50%+ aller Klicks?** → Macht dieses Feature prominenter (Hero-Section?)
- **Feature Y hat <5% Klicks?** → Entfernen oder umgestalten
- **Repliziere Interest** → Die Top-3 Features auch auf Pricing Page prominent zeigen

---

### 4. 🔀 Homepage Section Navigation Flow (iQ58GOqf)
**URL:** https://eu.posthog.com/project/99640/insights/iQ58GOqf

**Was zeigt es:**
- Sankey Diagram: Hero → Features → DSB Info → CTA
- Drop-off zwischen Sections
- Most common paths (z.B. 60% gehen Hero → Features, 20% Hero → CTA direkt)

**Actionable Insights:**
- **Hero → CTA direct path ist häufig?** → User wollen schnell konvertieren, macht CTA noch prominenter
- **Features → DSB Info → Drop?** → DSB Info Section nicht relevant, entfernen oder kürzen
- **Niedrige Scroll-Tiefe generell?** → Page zu lang, wichtigsten Content nach oben

---

### 5. ⚡ Homepage CTA Performance: Hero vs Footer (gsRdAGQp)
**URL:** https://eu.posthog.com/project/99640/insights/gsRdAGQp

**Was zeigt es:**
- Line Graph über Zeit:
  - **Hero CTA "Jetzt starten"** (blau)
  - **Footer CTA "Kostenlos testen"** (grün)
  - **Demo CTA "Demo anfragen"** (orange)
- Vergleich: Welche Position/Wording funktioniert besser?

**Actionable Insights:**
- **Hero CTA > 3x Footer CTA?** → Footer CTA entfernen, Fokus auf Hero
- **Footer CTA > Hero CTA?** → Unwahrscheinlich, aber wenn ja: User lesen viel vor Conversion (Thought-Leadership Content)
- **Demo CTA > Pricing CTA?** → Enterprise-Fokus, mehr Sales-Driven statt Self-Service
- **A/B Test Ideas:**
  - "Jetzt starten" vs. "Kostenlos testen" vs. "Demo buchen"
  - Button-Farbe: Blau vs. Orange
  - Position: Above fold vs. Below fold

---

## 🚀 Wie nutze ich die Insights?

### **Wöchentlicher Review (jeden Montag 30 min)**

1. **Öffne alle 5 Insights** (Links oben)
2. **Check Conversion Rates:**
   - Homepage → Pricing Funnel: >15% = gut, <10% = optimieren
   - Homepage → Demo Funnel: >5% = gut, <2% = optimieren

3. **Identify Bottlenecks:**
   - Größter Drop-off Step? → Das ist euer Problem
   - Feature mit wenig Klicks? → Entfernen oder redesignen

4. **Compare CTAs:**
   - Hero vs Footer Performance
   - Welcher CTA-Text funktioniert besser?

5. **Action Items:**
   - Erstellt 1-2 Quick Wins basierend auf Daten
   - A/B Test für größte Probleme
   - Review next week

---

## 🎯 Quick Wins & Optimization Ideas

### **Scenario 1: Hoher Scroll Drop-off (<50% erreichen Features)**
**Problem:** User verlassen Page bevor sie Features sehen

**Lösung:**
- ✅ CTA im Hero prominenter machen
- ✅ Hero-Section kürzen (weniger Text)
- ✅ Features weiter nach oben schieben
- ✅ Video/Animation im Hero (engagierender)

---

### **Scenario 2: Feature Interest stark ungleich verteilt**
**Problem:** DSGVO hat 70% aller Klicks, EU AI Act nur 5%

**Lösung:**
- ✅ DSGVO Feature größer/prominenter darstellen
- ✅ EU AI Act entfernen oder umgestalten ("Neu!" Badge?)
- ✅ Top-3 Features als Hero-USPs verwenden

---

### **Scenario 3: Hero CTA >> Footer CTA (3:1 Ratio)**
**Problem:** Footer CTA wird ignoriert

**Lösung:**
- ✅ Footer CTA entfernen (reduziert Distraction)
- ✅ Alle Conversions auf Hero fokussieren
- ✅ Mehr Budget in Hero-Design investieren

---

### **Scenario 4: Demo CTA > Pricing CTA**
**Problem:** User wollen persönlichen Kontakt, nicht Self-Service

**Lösung:**
- ✅ Hauptstrategie: Sales-Led statt Product-Led Growth
- ✅ Hero CTA ändern zu "Demo buchen"
- ✅ Mehr Social Proof (Testimonials, Case Studies)
- ✅ Pricing Page vereinfachen (weniger Self-Service, mehr "Contact Sales")

---

### **Scenario 5: Hohe Exit Intent ohne Conversion**
**Problem:** User scrollen viel, lesen alles, verlassen aber ohne Action

**Lösung:**
- ✅ Exit Intent Popup mit Lead Magnet (z.B. "DSGVO Checklist PDF")
- ✅ "Haben Sie Fragen?" - Chat Widget
- ✅ CTA-Texte überarbeiten (nicht klar genug?)
- ✅ Trust Signals fehlen (Testimonials, Logos, Zertifikate)

---

## 📝 Tracking Events Reference

### Events die getrackt werden:

| Event Name | Wann | Metadata |
|------------|------|----------|
| `$pageview` | Page Load | `$current_url: /` |
| `section_viewed` | Section in Viewport | `section: homepage_hero` |
| `scroll_depth` | 25%, 50%, 75%, 100% | `depth_percentage: 50, page: homepage` |
| `button_click` | CTA geklickt | `button_name: homepage_cta_pricing, location: hero` |
| `button_click` | Feature Link | `button_name: homepage_feature_link, feature_name: DSGVO Compliance` |
| `exit_intent` | Mouse verlässt | `page: homepage` |

---

## 🔧 Setup Script

Das komplette Setup kann reproduziert werden:

```bash
python3 scripts/setup-homepage-tracking.py
```

**Was macht das Script:**
- ✅ Erstellt Homepage → Pricing Funnel
- ✅ Erstellt Homepage → Contact Funnel
- ✅ Erstellt Feature Interest Heatmap
- ✅ Erstellt Section Flow Visualization
- ✅ Erstellt CTA Performance Comparison

**Nach dem Script:**
1. Insights manuell zum Dashboard hinzufügen
2. Erste Daten sammeln (24h warten)
3. Weekly Review Termin einrichten

---

## 📈 Expected Metrics (Benchmarks)

Basierend auf B2B SaaS Standards:

| Metric | Good | Average | Poor |
|--------|------|---------|------|
| **Homepage → Pricing Conversion** | >15% | 10-15% | <10% |
| **Homepage → Demo Conversion** | >5% | 2-5% | <2% |
| **Scroll Depth (>50%)** | >70% | 50-70% | <50% |
| **Time on Page** | >2min | 1-2min | <1min |
| **Bounce Rate** | <40% | 40-60% | >60% |
| **CTA Click Rate** | >8% | 4-8% | <4% |

**Wenn ihr unter "Poor" seid:** Sofort optimieren! 🚨

---

## 🔗 Related Docs

- **[PosthogSetup.md](./PosthogSetup.md)** - Grundlegende PostHog Setup Infos
- **[PATHS_HEATMAPS_SETUP.md](./PATHS_HEATMAPS_SETUP.md)** - Heatmaps & Path Analysis Details
- **[TRACKING.md](./TRACKING.md)** - Event Documentation

---

## ✅ Checklist: Ist Homepage Tracking aktiv?

- [x] Tracking Hooks in `Home.tsx` integriert
- [x] Section Refs mit `data-section` Attributen
- [x] CTA Buttons mit `data-ph-capture` + `onClick` Tracking
- [x] Feature Links tracken `feature_name`
- [x] Autocapture für Homepage aktiviert
- [x] 5 PostHog Insights erstellt
- [x] Scroll Depth Tracking (25%, 50%, 75%, 100%)
- [x] Exit Intent Detection

**Test (jetzt):**
1. Öffne http://localhost:8083 (oder `/`)
2. Öffne DevTools Console
3. Scrolle und klicke auf CTAs
4. Sollte `[Analytics]` Logs sehen
5. PostHog Network Request in Network Tab
6. Nach 5 Min: PostHog checken für Events

---

## 🎓 Learning: Was haben wir erreicht?

**Vorher (ohne Tracking):**
- ❌ Keine Ahnung warum User nicht konvertieren
- ❌ Welche Features interessieren niemanden
- ❌ Ob Hero CTA besser als Footer CTA funktioniert
- ❌ Wo User abspringen

**Jetzt (mit Tracking):**
- ✅ **Datenbasierte Entscheidungen**: A/B Tests basierend auf Fakten
- ✅ **Conversion Optimierung**: Identifiziert Bottlenecks
- ✅ **Feature Prioritization**: Fokus auf was User wollen
- ✅ **CTA Optimization**: Wissen welche CTAs funktionieren
- ✅ **Content Strategy**: Scroll-Daten zeigen was gelesen wird

**ROI Calculation:**
- Wenn Homepage 1000 Visits/Monat hat
- Conversion Rate steigt von 5% → 10% (realistisch durch Optimierung)
- = 50 zusätzliche Leads/Monat
- Bei 10% Lead → Customer Rate = 5 zusätzliche Kunden/Monat
- Bei €500 MRR = €2.500 zusätzlicher MRR/Monat

**Setup Time:** 2h
**Potential Impact:** Unbegrenzt 🚀

---

**Fragen oder Probleme?** Check [PosthogSetup.md](./PosthogSetup.md) oder schreib mir!
