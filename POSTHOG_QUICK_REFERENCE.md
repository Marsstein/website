# 📊 PostHog Quick Reference Card

## 🚀 Setup in 3 Schritten

```bash
# 1. Öffne Setup UI
open scripts/posthog-setup.html

# 2. Hol API Key
# → https://eu.posthog.com/settings/user-api-keys
# → Erstelle neuen Key

# 3. Klick "Setup starten" im UI
```

---

## 📈 Beta Page Events

| Event | Was es trackt | Wichtig für |
|-------|--------------|-------------|
| `$pageview` | Page Load | Traffic |
| `scroll_depth` | 25/50/75/100% | Engagement |
| `section_viewed` | Section visibility | Content Performance |
| `button_click` | CTA Klicks | Conversion Optimization |
| `form_started` | Form Interaction | Funnel Entry |
| `form_field_completed` | Field Completion | Drop-off Analysis |
| `form_submitted` | Signup Success | **Primary Conversion** |
| `form_abandoned` | Incomplete Form | Recovery Opportunities |
| `exit_intent` | User leaving | Retention |

---

## 🎯 Conversion Funnel (5 Steps)

```
100% → Page View (/beta)
 75% → Problem Section Viewed
 50% → Signup Section Viewed
 30% → Form Started
 15% → Form Submitted ✅
```

**Ziel:** 15% Overall Conversion Rate

---

## 🔗 Quick Links

| Was | Link |
|-----|------|
| **Dashboard** | https://eu.posthog.com/ |
| **Insights** | https://eu.posthog.com/insights |
| **Funnels** | https://eu.posthog.com/insights?insight=FUNNELS |
| **Recordings** | https://eu.posthog.com/replay |
| **API Keys** | https://eu.posthog.com/settings/user-api-keys |
| **Project Settings** | https://eu.posthog.com/settings/project |

---

## 🎥 Session Recordings aktivieren

```
1. Settings → Session Recordings
2. Toggle "Record user sessions" AN
3. Settings:
   ✅ Mask all text inputs
   ✅ Mask sensitive elements
   ✅ Sample rate: 100%
   ✅ Min duration: 10s
```

---

## 🧪 A/B Testing Setup

### 1. Feature Flag erstellen
```
PostHog → Feature Flags → New Flag
Name: beta-headline-test
Rollout: 50% (A/B Split)
```

### 2. Im Code nutzen
```typescript
import { useFeatureFlag } from 'posthog-js/react';

const newHeadline = useFeatureFlag('beta-headline-test');

<h1>{newHeadline ? "Variante A" : "Variante B"}</h1>
```

### 3. Ergebnisse analysieren
```
Insights → Trends → Group by: Feature Flag
Compare conversion rates between variants
```

---

## 📊 Key Metrics Tracking

### Page Level
- **Traffic:** Unique Visitors, Page Views
- **Engagement:** Avg. Time on Page, Scroll Depth
- **Bounce:** Exit Rate, Immediate Exits

### Funnel Level
- **Awareness:** Problem Section View Rate
- **Interest:** Signup Section View Rate
- **Consideration:** Form Start Rate
- **Conversion:** Form Completion Rate

### Form Level
- **Start Rate:** % clicking into form
- **Field Completion:** Per-field drop-off
- **Error Rate:** Validation errors
- **Abandonment:** Incomplete submissions
- **Time to Complete:** Avg. duration

---

## 🔍 Debug Checklist

Events nicht sichtbar?

```bash
# ✅ 1. Check Console Logs
# Browser Console → Should show:
[Analytics] event_name { metadata }

# ✅ 2. Check PostHog Init
posthog.isFeatureEnabled('test')
# Should return true/false

# ✅ 3. Check Network
# Network Tab → Filter: "posthog"
# Should see POST to eu.i.posthog.com

# ✅ 4. Wait for Processing
# PostHog needs 1-2 min to process events
```

---

## 🎨 Custom Events hinzufügen

### 1. Track Event direkt
```typescript
import { trackEvent } from '@/lib/analytics';

trackEvent('custom_event', {
  property1: 'value1',
  property2: 123
});
```

### 2. Track mit Hook
```typescript
import { useTracking } from '@/hooks/useTracking';

const { trackButtonClick } = useTracking();

<button onClick={() => trackButtonClick('my_button', 'header')}>
  Click Me
</button>
```

### 3. Automatisches Section Tracking
```typescript
import { useSectionTracking } from '@/hooks/useTracking';

const sectionRef = useSectionTracking('my_section');

<div ref={sectionRef}>Content</div>
```

---

## 🚨 Alerts & Monitoring

### Conversion Goal Alert
```
1. Funnel → Beta Signup Conversion Funnel
2. "..." Menu → Set Alert
3. Alert wenn: Conversion < 10%
4. Notify: Slack/Email
```

### Abandonment Alert
```
1. Insights → Form Abandonment Rate
2. "..." Menu → Set Alert
3. Alert wenn: Rate > 50%
4. Check Session Recordings
```

---

## 💡 Optimization Playbook

### Low Scroll Depth?
```
Problem: User scrollen nicht
→ Check: Hero CTA effectiveness
→ Test: Kürzere Hero Section
→ Test: Stärkerer Hook im ersten Screen
```

### High Form Abandonment?
```
Problem: User starten aber completen nicht
→ Check: Session Recordings für Confusion
→ Test: Weniger Felder (nur Email?)
→ Test: Progress Indicator
→ Test: Inline Validation
```

### Low CTA Clicks?
```
Problem: CTAs werden nicht geklickt
→ Check: CTA Visibility (Heatmaps)
→ Test: Kontrastreichere Farben
→ Test: Stärkere Copy
→ Test: Größere Buttons
```

### Section Drop-off?
```
Problem: User erreichen Section nicht
→ Check: Previous Section Performance
→ Test: Kürzerer Content davor
→ Test: Scroll-Trigger Animation
→ Test: Sticky CTA
```

---

## 📚 Cheat Sheet: API Calls

### Get All Events (Last 24h)
```bash
curl -X GET \
  'https://eu.i.posthog.com/api/projects/YOUR_PROJECT_ID/events/' \
  -H 'Authorization: Bearer phx_YOUR_API_KEY'
```

### Get Funnel Results
```bash
curl -X GET \
  'https://eu.i.posthog.com/api/projects/YOUR_PROJECT_ID/insights/FUNNEL_ID/' \
  -H 'Authorization: Bearer phx_YOUR_API_KEY'
```

### Export Session Recordings
```bash
curl -X GET \
  'https://eu.i.posthog.com/api/projects/YOUR_PROJECT_ID/session_recordings/' \
  -H 'Authorization: Bearer phx_YOUR_API_KEY'
```

---

## 🎯 Weekly Review Checklist

**Jeden Montag:**
- [ ] Check Conversion Rate (Ziel: 15%)
- [ ] Review Top Drop-off Point
- [ ] Watch 5 Abandonment Recordings
- [ ] Check Scroll Depth Trend
- [ ] Review CTA Performance
- [ ] Identify 1 A/B Test Opportunity

**Jeden Freitag:**
- [ ] Update Conversion Goal if needed
- [ ] Export Weekly Report
- [ ] Share Insights mit Team
- [ ] Plan nächste Woche Optimizations

---

## 🔑 Environment Variables

```bash
# Development
VITE_POSTHOG_KEY=phc_VD40IEcKzwwg3HK9j3jBoeOB9E7nZBsDS9FF01SEYwY
VITE_POSTHOG_HOST=https://eu.i.posthog.com

# Production (same)
VITE_POSTHOG_KEY=phc_VD40IEcKzwwg3HK9j3jBoeOB9E7nZBsDS9FF01SEYwY
VITE_POSTHOG_HOST=https://eu.i.posthog.com
```

---

**📖 Ausführliche Docs:**
- Setup: `/scripts/POSTHOG_SETUP.md`
- Tracking: `/TRACKING.md`
- Code: `/src/lib/analytics.ts`

**🆘 Support:**
- PostHog Slack: https://posthog.com/slack
- PostHog Docs: https://posthog.com/docs
