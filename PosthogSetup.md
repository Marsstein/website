# PostHog Setup & Analytics - Komplette Dokumentation

**Stand:** 2025-11-06
**Projekt:** Marsstein Website - Beta Page Analytics
**PostHog Project ID:** 99640

---

## 📋 Inhaltsverzeichnis

1. [Überblick](#überblick)
2. [Wichtige Erkenntnisse](#wichtige-erkenntnisse)
3. [Setup-Prozess](#setup-prozess)
4. [Tracking-Implementierung](#tracking-implementierung)
5. [API-Integration](#api-integration)
6. [Troubleshooting](#troubleshooting)
7. [Zukünftige Erweiterungen](#zukünftige-erweiterungen)

---

## 🎯 Überblick

### Was haben wir implementiert?

**Dual Analytics Setup:**
- ✅ **Beam Analytics** - GDPR-konform, cookie-frei, basic metrics
- ✅ **PostHog** - Advanced product analytics, funnels, session recordings

**Für die Beta Page (`/beta`):**
- 🎯 Conversion Funnel (5 Steps)
- 📊 Scroll Depth Tracking
- 🎯 CTA Performance Analysis
- 📝 Form Field Drop-off Analysis

### Tech Stack

```typescript
// Frontend Tracking
- posthog-js (npm package)
- React hooks für event tracking
- IntersectionObserver API für section views

// Backend/API
- Python scripts für PostHog API
- Personal API Key mit full permissions
```

---

## 🔑 Wichtige Erkenntnisse

### Problem #1: API Keys

**❌ Falsch:**
- Project API Key (`phc_...`) → Nur für Frontend tracking
- Personal API Key ohne Scopes → Kann keine Insights erstellen

**✅ Richtig:**
- Personal API Key (`phx_...`) mit **allen Scopes**
- Mindestens: Insight (read & write), Dashboard (read & write), Cohort (read & write)

### Problem #2: Insight IDs

**❌ Falsch:**
```
URL: /insights/1590277  (numeric ID)
❌ → "Insight not found"
```

**✅ Richtig:**
```
URL: /insights/TlpJZHTW  (short_id)
✅ → Insight lädt korrekt
```

**API Response enthält beide:**
```json
{
  "id": 1590277,        // Numeric ID (für API calls)
  "short_id": "TlpJZHTW" // Short ID (für URLs)
}
```

### Problem #3: Saved Status

**❌ Falsch:**
```python
insight_data = {
    "name": "My Insight",
    "filters": {...}
    # saved fehlt!
}
```
→ Insight wird als **unsaved draft** erstellt → nicht sichtbar in UI

**✅ Richtig:**
```python
insight_data = {
    "name": "My Insight",
    "saved": True,  # ← WICHTIG!
    "filters": {...}
}
```

### Problem #4: Dashboard Tiles

**PostHog API für Dashboard Updates ist buggy:**
- `/dashboards/{id}/tiles/` → 404 Not Found
- PATCH `/dashboards/{id}/` → 500 Internal Server Error

**✅ Workaround:**
Insights manuell zum Dashboard hinzufügen:
1. Insight öffnen (mit short_id URL)
2. "Add to dashboard" klicken
3. Dashboard auswählen

---

## 🚀 Setup-Prozess

### Schritt 1: PostHog Account & API Key

1. **Gehe zu:** https://eu.posthog.com/settings/user-api-keys
2. **Klicke:** "Create personal API key"
3. **Konfiguration:**
   ```
   Label: "Beta Analytics Automation"

   Scopes (alle auf "read & write"):
   ✅ Cohort
   ✅ Dashboard
   ✅ Insight
   ✅ Session recording playlist
   ✅ Project (nur "read" reicht)
   ```
4. **Kopiere** den Key (beginnt mit `phx_...`)

### Schritt 2: Frontend Tracking Setup

**Installation:**
```bash
npm install posthog-js
```

**Initialisierung** (`src/main.tsx`):
```typescript
import { initializePostHog } from './lib/analytics';

initializePostHog();
```

**Analytics Library** (`src/lib/analytics.ts`):
```typescript
import posthog from 'posthog-js';

export const initializePostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init('phc_VD40IEcKzwwg3HK9j3jBoeOB9E7nZBsDS9FF01SEYwY', {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
      session_recording: {
        maskAllInputs: true,
        maskTextSelector: '[data-private]',
      },
    });
  }
};

export const trackEvent = (
  eventName: string,
  metadata?: Record<string, any>
) => {
  if (typeof window === 'undefined') return;

  // Dual tracking: Beam + PostHog
  if (window.beam) {
    const beamPath = `/events/${eventName.toLowerCase().replace(/\s+/g, '-')}`;
    window.beam(beamPath);
  }

  posthog.capture(eventName, metadata);

  // Debug logging in dev
  if (import.meta.env.DEV) {
    console.log('[Analytics]', eventName, metadata);
  }
};
```

**Tracking Hooks** (`src/hooks/useTracking.ts`):
```typescript
// Section View Tracking (IntersectionObserver)
export const useSectionTracking = (
  sectionName: string,
  metadata?: Record<string, any>
) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionName, metadata);
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionName, metadata]);

  return ref;
};

// Scroll Depth Tracking
export const useScrollDepthTracking = (page: string) => {
  useEffect(() => {
    const tracked = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      thresholds.forEach((threshold) => {
        if (scrollPercentage >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          trackScrollDepth(threshold, page);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);
};

// Form Tracking
export const useFormTracking = (formName: string) => {
  const formStarted = useRef(false);
  const fieldCompletions = useRef<Set<string>>(new Set());

  const trackFormStart = useCallback(() => {
    if (!formStarted.current) {
      trackFormEvent(formName, 'started');
      formStarted.current = true;
    }
  }, [formName]);

  const trackFieldCompletion = useCallback(
    (fieldName: string, value: any) => {
      if (!fieldCompletions.current.has(fieldName) && value) {
        fieldCompletions.current.add(fieldName);
        trackFormEvent(formName, 'field_completed', { field: fieldName });
      }
    },
    [formName]
  );

  const trackFormSubmit = useCallback(
    (success: boolean, error?: string) => {
      trackFormEvent(formName, success ? 'submitted' : 'error',
        success ? undefined : { error }
      );
    },
    [formName]
  );

  return { trackFormStart, trackFieldCompletion, trackFormSubmit };
};
```

**Page Implementation** (`src/pages/Beta.tsx`):
```typescript
const Beta: React.FC = () => {
  const { trackButtonClick } = useTracking();
  const { trackFormStart, trackFieldCompletion, trackFormSubmit } =
    useFormTracking('beta_signup');

  useScrollDepthTracking('beta');
  useExitIntentTracking({ page: 'beta', form_started: false });

  // Section tracking refs
  const problemSectionRef = useSectionTracking('beta_problem_section');
  const workflowSectionRef = useSectionTracking('beta_workflow_section');
  const featuresSectionRef = useSectionTracking('beta_features_section');
  const signupSectionRef = useSectionTracking('beta_signup_section');

  const handleCTAClick = (location: string) => {
    trackButtonClick('beta_cta', location);
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ... validation ...

    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Signup failed');

      // Identify user in PostHog
      identifyUser(formData.email, {
        email: formData.email,
        name: formData.firstName,
        company: formData.company,
        signup_source: 'beta_page',
      });

      trackFormSubmit(true);
      setSubmitted(true);
    } catch (err) {
      trackFormSubmit(false, err.message);
    }
  };

  return (
    <>
      <section ref={problemSectionRef}>
        {/* Problem section content */}
      </section>

      <section ref={workflowSectionRef}>
        {/* Workflow section content */}
      </section>

      <section ref={signupSectionRef}>
        <form onSubmit={handleSubmit}>
          <input
            onFocus={trackFormStart}
            onChange={(e) => {
              handleInputChange('firstName')(e);
              trackFieldCompletion('firstName', e.target.value);
            }}
          />
        </form>
      </section>
    </>
  );
};
```

### Schritt 3: API-basiertes Setup (Insights & Dashboards)

**Setup Script** (`scripts/setup-posthog.py`):

```python
#!/usr/bin/env python3
import requests
import time

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_YOUR_API_KEY_HERE"

def api_request(endpoint, method="GET", data=None):
    url = f"{API_URL}{endpoint}"
    headers = {
        "Authorization": f"Bearer {PERSONAL_API_KEY}",
        "Content-Type": "application/json"
    }

    if method == "GET":
        response = requests.get(url, headers=headers)
    elif method == "POST":
        response = requests.post(url, headers=headers, json=data)
    elif method == "PATCH":
        response = requests.patch(url, headers=headers, json=data)

    response.raise_for_status()
    return response.json()

def create_funnel(project_id):
    funnel_data = {
        "name": "🎯 Beta Signup Conversion Funnel",
        "description": "Track user journey from page view to beta signup",
        "saved": True,  # ← WICHTIG!
        "filters": {
            "insight": "FUNNELS",
            "events": [
                {
                    "id": "$pageview",
                    "name": "$pageview",
                    "type": "events",
                    "order": 0,
                    "properties": [{
                        "key": "$current_url",
                        "value": "/beta",
                        "operator": "icontains",
                        "type": "event"
                    }]
                },
                {
                    "id": "section_viewed",
                    "name": "section_viewed",
                    "type": "events",
                    "order": 1,
                    "properties": [{
                        "key": "section",
                        "value": "beta_problem_section",
                        "operator": "exact",
                        "type": "event"
                    }]
                },
                {
                    "id": "section_viewed",
                    "name": "section_viewed",
                    "type": "events",
                    "order": 2,
                    "properties": [{
                        "key": "section",
                        "value": "beta_signup_section",
                        "operator": "exact",
                        "type": "event"
                    }]
                },
                {
                    "id": "form_started",
                    "name": "form_started",
                    "type": "events",
                    "order": 3,
                    "properties": [{
                        "key": "form_name",
                        "value": "beta_signup",
                        "operator": "exact",
                        "type": "event"
                    }]
                },
                {
                    "id": "form_submitted",
                    "name": "form_submitted",
                    "type": "events",
                    "order": 4,
                    "properties": [{
                        "key": "form_name",
                        "value": "beta_signup",
                        "operator": "exact",
                        "type": "event"
                    }]
                }
            ],
            "funnel_window_interval": 30,
            "funnel_window_interval_unit": "minute",
            "date_from": "-30d",
            "funnel_viz_type": "steps"
        }
    }

    result = api_request(f"/projects/{project_id}/insights/", "POST", funnel_data)
    print(f"✅ Funnel created (ID: {result['id']}, Short ID: {result['short_id']})")
    return result

# Ähnlich für andere Insights...
```

**Ausführung:**
```bash
python3 scripts/setup-posthog.py
```

### Schritt 4: Insights zum Dashboard hinzufügen

**⚠️ WICHTIG:** Dashboard API ist buggy - manuelles Hinzufügen empfohlen!

**Manuelle Methode (zuverlässig):**

1. Script ausführen → liefert `short_id` URLs
2. Jede URL öffnen (z.B. `/insights/TlpJZHTW`)
3. "Add to dashboard" klicken
4. Dashboard auswählen

**Alternative: Save Script nutzen**

Falls Insights als unsaved drafts erstellt wurden:

```bash
python3 scripts/save-insights.py
```

```python
# scripts/save-insights.py
def save_insight(insight_id):
    url = f"{API_URL}/projects/{PROJECT_ID}/insights/{insight_id}/"
    data = {"saved": True}
    response = requests.patch(url, headers=headers, json=data)
    return response.json()
```

---

## 📊 Tracked Events

### Beta Page Events

| Event Name | Trigger | Properties | Verwendung |
|------------|---------|------------|------------|
| `$pageview` | Page Load | `$current_url: "/beta"` | Funnel Entry |
| `scroll_depth` | Scroll Thresholds | `depth_percentage: 25/50/75/100`, `page: "beta"` | Engagement |
| `section_viewed` | IntersectionObserver | `section: "beta_problem_section"` etc. | Content Performance |
| `button_click` | CTA Click | `button_name: "beta_cta"`, `location: "hero/problem/workflow"` | Conversion Optimization |
| `form_started` | Focus on first field | `form_name: "beta_signup"` | Funnel Step |
| `form_field_completed` | Field filled | `form_name`, `field: "firstName/email/company"` | Drop-off Analysis |
| `form_submitted` | Form Submit Success | `form_name: "beta_signup"` | Primary Conversion |
| `form_abandoned` | Exit without submit | `form_name`, fields completed | Recovery Opportunities |
| `exit_intent` | Mouse leaves viewport | `page`, `form_started` | Retention |

### Event-Struktur

```typescript
// Beispiel: Section View
{
  event: "section_viewed",
  properties: {
    section: "beta_problem_section",
    $current_url: "http://localhost:8083/beta",
    $browser: "Chrome",
    $device_type: "Desktop",
    // ... automatische PostHog properties
  },
  timestamp: "2025-11-06T14:30:00.000Z"
}
```

---

## 🔧 Troubleshooting

### Events werden nicht getrackt

**Check 1: Browser Console**
```javascript
// Sollte Events loggen:
[Analytics] scroll_depth { depth_percentage: 25, page: 'beta' }
```

**Check 2: Network Tab**
```
Filter: "posthog" oder "batch"
POST https://eu.i.posthog.com/batch/
Status: 200 OK
```

**Check 3: PostHog Init**
```javascript
// In Browser Console:
window.posthog.isFeatureEnabled('test')
// Sollte true/false zurückgeben (nicht undefined)
```

**Check 4: PostHog Live Events**
- https://eu.posthog.com/project/99640/events
- Klicke "Live" (oben rechts)
- Events sollten in Echtzeit erscheinen

### Insights nicht sichtbar

**Problem:** Insight existiert aber URL gibt 404

**Lösung:**
```bash
# Check ob insight saved ist
python3 scripts/debug-insight.py

# Falls saved=False:
python3 scripts/save-insights.py
```

**Richtige URL verwenden:**
```
❌ /insights/1590277      (numeric ID)
✅ /insights/TlpJZHTW     (short_id)
```

### Dashboard bleibt leer

**Problem:** API gibt 500 Error beim Dashboard Update

**Workaround:**
1. Insights einzeln öffnen (mit short_id URL)
2. "Add to dashboard" klicken
3. Dashboard auswählen

### Events kommen nicht in PostHog an

**Mögliche Ursachen:**

1. **PostHog nicht initialisiert**
   ```typescript
   // src/main.tsx sollte enthalten:
   initializePostHog();
   ```

2. **CORS Fehler**
   - PostHog EU instance: `https://eu.i.posthog.com`
   - API Host muss in init() korrekt sein

3. **AdBlocker**
   - PostHog wird oft geblockt
   - Test in Incognito mode ohne Extensions

4. **Processing Delay**
   - Events brauchen 1-2 Minuten bis sie im Dashboard erscheinen
   - Live Events zeigen sie sofort

---

## 📁 Projektstruktur

```
Website/
├── src/
│   ├── lib/
│   │   └── analytics.ts          # Core tracking functions
│   ├── hooks/
│   │   └── useTracking.ts        # React tracking hooks
│   ├── main.tsx                  # PostHog initialization
│   └── pages/
│       └── Beta.tsx              # Beta page with tracking
│
├── scripts/
│   ├── setup-posthog.py          # Main setup script
│   ├── save-insights.py          # Fix unsaved insights
│   ├── debug-insight.py          # Debug insight IDs
│   ├── list-all-insights.py     # List all insights
│   └── POSTHOG_SETUP.md         # Setup guide
│
├── TRACKING.md                   # Event documentation
├── POSTHOG_QUICK_REFERENCE.md   # Quick reference
└── PosthogSetup.md              # This file
```

---

## 🚀 Zukünftige Erweiterungen

### 1. Weitere Pages tracken

**Template für neue Pages:**

```typescript
// In new page component
const { trackButtonClick } = useTracking();
const { trackFormStart, trackFieldCompletion, trackFormSubmit } =
  useFormTracking('contact_form');

useScrollDepthTracking('contact');

const contactSectionRef = useSectionTracking('contact_hero');
```

**Funnel erstellen:**

```bash
# Anpassen und ausführen:
python3 scripts/setup-posthog.py
# → Neue event names & properties verwenden
```

### 2. A/B Testing

**Feature Flags nutzen:**

```typescript
import { useFeatureFlag } from 'posthog-js/react';

const newHeadline = useFeatureFlag('beta-headline-test');

<h1>{newHeadline ? "Variante A" : "Variante B"}</h1>
```

**In PostHog:**
1. Feature Flags → New Flag
2. Name: `beta-headline-test`
3. Rollout: 50% A/B Split
4. Analyse: Insights → Group by Feature Flag

### 3. Cohorts & Retargeting

**Form Abandoners Cohort:**

```python
cohort_data = {
    "name": "Beta Form Abandoners",
    "groups": [{
        "properties": [
            {
                "key": "form_started",
                "type": "behavioral",
                "value": "performed_event",
                "operator": "equals",
                "event_filters": [{
                    "key": "form_name",
                    "value": "beta_signup",
                    "operator": "exact"
                }]
            },
            {
                "key": "form_submitted",
                "type": "behavioral",
                "value": "did_not_perform_event",
                "operator": "equals"
            }
        ]
    }]
}
```

**Verwendung:**
- Email Retargeting (Export zu Loops.so)
- Session Recording Filter
- Personalisierte CTAs

### 4. Session Recordings

**In PostHog aktivieren:**
1. Settings → Session Recordings
2. Toggle "Record user sessions" AN
3. Konfiguration:
   ```
   ✅ Mask all text inputs
   ✅ Mask sensitive elements
   ✅ Sample rate: 100% (Beta)
   ✅ Min duration: 10s
   ```

**Playlist für Abandoners:**

```python
playlist_data = {
    "name": "Beta Form Abandonment Sessions",
    "filters": {
        "events": [{
            "id": "form_abandoned",
            "properties": [{
                "key": "form_name",
                "value": "beta_signup"
            }]
        }],
        "date_from": "-7d"
    }
}
```

### 5. Custom Dashboards

**Pricing Page Dashboard:**
```python
# Neue Insights:
- Plan Selection Funnel
- Price Point Click Distribution
- FAQ Interaction
- Trial Signup Rate

# Dashboard:
python3 scripts/create-page-analytics.py \
  --page="pricing" \
  --events="plan_selected,trial_started"
```

### 6. Alerts & Monitoring

**Conversion Alert:**
```python
# PostHog UI: Funnel → Set Alert
alert_config = {
    "name": "Low Beta Conversion",
    "condition": "conversion_rate < 10%",
    "notify": ["slack", "email"],
    "frequency": "hourly"
}
```

**Abandonment Alert:**
```python
alert_config = {
    "name": "High Form Abandonment",
    "condition": "abandonment_rate > 50%",
    "action": "trigger_webhook",
    "webhook_url": "https://api.loops.so/retarget"
}
```

---

## 📚 Wichtige Links

### PostHog URLs

- **Dashboard:** https://eu.posthog.com/project/99640/dashboard/295288
- **Live Events:** https://eu.posthog.com/project/99640/events
- **Insights:** https://eu.posthog.com/project/99640/insights
- **Settings:** https://eu.posthog.com/settings/user-api-keys
- **Session Recordings:** https://eu.posthog.com/project/99640/replay

### Dokumentation

- **PostHog Docs:** https://posthog.com/docs
- **API Reference:** https://posthog.com/docs/api
- **Funnels Guide:** https://posthog.com/docs/user-guides/funnels
- **Feature Flags:** https://posthog.com/docs/feature-flags

### Projekt-Docs

- `TRACKING.md` - Event-Liste und Implementierung
- `POSTHOG_QUICK_REFERENCE.md` - Quick reference card
- `scripts/POSTHOG_SETUP.md` - Setup guide

---

## ✅ Checkliste: Neues Page Tracking Setup

- [ ] **1. Events definieren**
  - [ ] Liste alle trackbaren Interaktionen
  - [ ] Definiere Event Properties
  - [ ] Dokumentiere in TRACKING.md

- [ ] **2. Frontend Tracking implementieren**
  - [ ] Tracking Hooks importieren
  - [ ] Section refs hinzufügen
  - [ ] CTA onClick handler
  - [ ] Form tracking

- [ ] **3. Funnel konzipieren**
  - [ ] Entry point definieren (meist $pageview)
  - [ ] Conversion Steps festlegen
  - [ ] Funnel Window setzen (15-30 Min)

- [ ] **4. Insights erstellen**
  - [ ] Python Script anpassen
  - [ ] `saved: True` setzen!
  - [ ] Script ausführen
  - [ ] Short IDs notieren

- [ ] **5. Dashboard erstellen**
  - [ ] In PostHog UI: New Dashboard
  - [ ] Insights manuell hinzufügen (via short_id URLs)
  - [ ] Layout ordnen
  - [ ] Dashboard pinnen

- [ ] **6. Testing**
  - [ ] Localhost: Events in Console
  - [ ] Network Tab: POST Requests zu PostHog
  - [ ] Live Events: Events erscheinen
  - [ ] Dashboard: Charts werden befüllt (5 Min warten)

- [ ] **7. Session Recordings aktivieren** (optional)
  - [ ] Settings → Session Recordings AN
  - [ ] Masking konfiguriert
  - [ ] Sample Rate gesetzt

- [ ] **8. Alerts setzen** (optional)
  - [ ] Conversion Goal Alert
  - [ ] Abandonment Alert
  - [ ] Slack/Email Notifications

---

## 🎯 Conversion Goals - Beta Page

| Metric | Aktuell | Ziel | Exzellent |
|--------|---------|------|-----------|
| **Problem Section View** | - | 75% | 85% |
| **Signup Section View** | - | 50% | 65% |
| **Form Start Rate** | - | 30% | 45% |
| **Form Completion** | - | **15%** | **25%** |

**Berechnung:**
```
Overall Conversion Rate = (Form Submitted / Page Views) × 100
Target: 15% = 15 Submissions per 100 Page Views
```

---

## 🔐 Security & GDPR

### API Keys

**❌ NIEMALS committen:**
```bash
# .gitignore sollte enthalten:
scripts/setup-posthog.py  # (wenn key hardcoded)
*.env
.env.local
```

**✅ Environment Variables nutzen:**
```python
import os
PERSONAL_API_KEY = os.getenv('POSTHOG_API_KEY')
```

### User Privacy

**PostHog Config:**
```typescript
posthog.init('...', {
  person_profiles: 'identified_only',  // Nur nach Signup
  autocapture: false,                   // Manuelles tracking only
  session_recording: {
    maskAllInputs: true,                // Alle Inputs maskieren
    maskTextSelector: '[data-private]', // Custom masking
  }
});
```

**GDPR Compliance:**
- ✅ Cookie-frei (posthog-js nutzt localStorage)
- ✅ EU Server (eu.i.posthog.com)
- ✅ Input Masking
- ✅ Keine PII in Events (außer nach explizitem Opt-in)
- ✅ User kann PostHog data deletion anfragen

---

## 🎓 Lessons Learned

### 1. API vs. UI

**API Vorteile:**
- ✅ Skalierbar (batch creation)
- ✅ Wiederholbar (git-tracked scripts)
- ✅ Versionierbar

**API Nachteile:**
- ❌ Bugs (Dashboard update 500 errors)
- ❌ Saved-Status nicht automatisch
- ❌ ID vs. short_id Verwirrung

**Fazit:** Hybrid approach am besten
- Python scripts für Insights
- Manuelle UI für Dashboard assembly

### 2. Event Design

**❌ Zu granular:**
```typescript
trackEvent('button_click_hero_cta_1')
trackEvent('button_click_hero_cta_2')
// → Zu viele Events, keine Aggregation
```

**✅ Properties nutzen:**
```typescript
trackEvent('button_click', {
  button_name: 'beta_cta',
  location: 'hero'
})
// → Breakdown by location möglich
```

### 3. Testing

**Local Testing reicht nicht:**
- Events von localhost werden getrackt
- Aber Production URLs können anders sein
- **→ Staging environment empfohlen**

### 4. Documentation

**Was wir gelernt haben:**
- Scripts ohne Docs = nutzlos nach 2 Wochen
- Event names dokumentieren!
- API quirks dokumentieren (saved, short_id, etc.)

---

**🎉 Setup Complete!**

Bei Fragen: Siehe POSTHOG_QUICK_REFERENCE.md oder PostHog Docs.
