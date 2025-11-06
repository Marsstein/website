# PostHog Funnel & Dashboard Setup

Automatisches Setup für Beta Page Analytics mit Funnels, Insights und Dashboards.

## 🚀 Quick Start (Empfohlen)

### Option 1: Web UI (Am einfachsten)

1. **Öffne das Setup Tool:**
   ```bash
   open scripts/posthog-setup.html
   ```
   Oder öffne die Datei direkt im Browser.

2. **Hol dir deinen Personal API Key:**
   - Gehe zu: https://eu.posthog.com/settings/user-api-keys
   - Erstelle einen neuen Key mit "Read & Write" Permissions
   - Kopiere den Key (beginnt mit `phx_...`)

3. **Füge den Key ein und klicke "Setup starten"**
   - Das Tool erstellt automatisch alle Ressourcen
   - Nach ~20 Sekunden ist das Setup fertig
   - Du erhältst einen direkten Link zum Dashboard

### Option 2: Bash Script

```bash
# 1. Export API Key
export POSTHOG_API_KEY='phx_your_personal_api_key_here'

# 2. Führe Setup aus
chmod +x scripts/setup-posthog-simple.sh
./scripts/setup-posthog-simple.sh
```

### Option 3: Node.js Script (Erweitert)

```bash
# 1. Export Keys
export POSTHOG_API_KEY='phx_your_personal_api_key_here'
export POSTHOG_PROJECT_ID='your_project_id'  # Optional, wird automatisch ermittelt

# 2. Führe Setup aus
node scripts/setup-posthog-funnel.js
```

---

## 📊 Was wird erstellt?

### 1. **Beta Signup Conversion Funnel** 🎯
5-Step Funnel:
1. `/beta` Page View
2. Problem Section Viewed
3. Signup Section Viewed
4. Form Started
5. Form Submitted

**Ziel:** 15% Conversion Rate (Page View → Form Submitted)

### 2. **Key Insights** 📈
- **Scroll Depth Distribution**: Wie weit scrollen User?
- **CTA Click Performance**: Welcher CTA konvertiert am besten?
- **Form Field Drop-off**: An welchem Feld brechen User ab?
- **Conversion Rate Trend**: Wie entwickelt sich die Conversion?

### 3. **Form Abandoners Cohort** 👥
- User die Form gestartet aber nicht abgeschlossen haben
- Nutze für Session Recordings Filter

### 4. **Session Recording Playlist** 🎥
- Automatische Playlist für Form Abandoners
- Sehe genau was User tun bevor sie abbrechen

### 5. **Analytics Dashboard** 📊
- Alle Insights in einem Dashboard
- Gepinnt für schnellen Zugriff
- Direkter Link nach Setup

---

## 🔑 API Keys erklärt

### Personal API Key (`phx_...`)
- **Wo:** https://eu.posthog.com/settings/user-api-keys
- **Permissions:** Read & Write auf Projekt
- **Nutzen:** Für Setup Scripts und API Calls
- **Sicherheit:** Nur lokal verwenden, NIEMALS committen!

### Project API Key (`phc_...`)
- **Wo:** https://eu.posthog.com/settings/project
- **Nutzen:** Für Frontend Tracking (bereits in Code)
- **Sicherheit:** Kann public sein (read-only für Events)

---

## 🎮 Nach dem Setup

### 1. Verifiziere das Setup

```bash
# Starte Dev Server
npm run dev

# Öffne Beta Page
open http://localhost:8082/beta
```

**Interagiere mit der Seite:**
- ✅ Scrolle bis ganz unten
- ✅ Klicke auf verschiedene CTAs
- ✅ Starte das Formular (fülle mindestens 1 Feld aus)
- ✅ Optional: Schließe Form ab

**Check PostHog (nach 1-2 Min):**
- Gehe zu: https://eu.posthog.com/insights
- Öffne dein Dashboard
- Events sollten erscheinen

### 2. Session Recordings aktivieren

PostHog Session Recordings sind standardmäßig **opt-in**:

1. Gehe zu: https://eu.posthog.com/project/settings/session-recordings
2. Aktiviere "Record user sessions"
3. Settings:
   - ✅ **Mask all text inputs** (GDPR!)
   - ✅ **Mask all sensitive elements** (class/id with "private")
   - ✅ **Sample rate:** 100% (für Beta Phase)
   - ✅ **Minimum duration:** 10 seconds

**Bereits im Code konfiguriert:**
```typescript
session_recording: {
  maskAllInputs: true,
  maskTextSelector: '[data-private]',
}
```

### 3. Erstelle Alerts & Goals

**Conversion Goal:**
1. Gehe zu Funnel → "Beta Signup Conversion Funnel"
2. Klicke "Set as Goal"
3. Ziel: **15% Conversion Rate**
4. Alert wenn < 10%

**Drop-off Alert:**
1. Insights → "Form Field Drop-off"
2. Alert wenn abandonment rate > 50%

---

## 📈 Funnel Optimierung

### Schritt 1: Analysiere Drop-off Points

**Dashboard öffnen:**
```
https://eu.posthog.com/project/YOUR_PROJECT_ID/insights
```

**Fragen beantworten:**
- Wo verlieren wir die meisten User? (Funnel Step mit größtem Drop)
- Welche CTAs funktionieren am besten?
- An welchem Form-Feld brechen User ab?
- Wie tief scrollen User durchschnittlich?

### Schritt 2: Session Recordings analysieren

**Filter:**
1. Gehe zu Session Recordings
2. Filter: `form_abandoned` Event
3. Sortiere nach: Duration (länger = engaged user)

**Fragen:**
- Was tun User bevor sie abbrechen?
- Gibt es UI Bugs oder Verwirrung?
- Welche Sections werden übersprungen?

### Schritt 3: A/B Tests durchführen

**PostHog Feature Flags nutzen:**

```typescript
// In Beta.tsx
import { useFeatureFlag } from 'posthog-js/react';

const Beta = () => {
  const newHeadline = useFeatureFlag('beta-headline-test');

  return (
    <h1>
      {newHeadline
        ? "DSB-Arbeit in 80% weniger Zeit"
        : "Versteht Ihre Arbeit. Spricht Ihre Sprache."}
    </h1>
  );
};
```

**Feature Flag erstellen:**
1. PostHog → Feature Flags → New Flag
2. Name: `beta-headline-test`
3. Rollout: 50% A/B Test
4. Vergleiche Conversion Rates zwischen Varianten

---

## 🎯 Conversion Rate Ziele

| Metric | Current | Goal | Excellent |
|--------|---------|------|-----------|
| **Problem Section View** | - | 75% | 85% |
| **Signup Section View** | - | 50% | 65% |
| **Form Start Rate** | - | 30% | 45% |
| **Form Completion** | - | 15% | 25% |

### Berechnung:
```
Overall Conversion Rate = (Form Submitted / Page Views) * 100
Target: 15% = 15 Submissions per 100 Page Views
```

---

## 🔧 Troubleshooting

### Events erscheinen nicht in PostHog

**1. Check Browser Console:**
```javascript
// Öffne Console auf /beta
// Events sollten geloggt werden:
[Analytics] button_click { button_name: 'beta_cta', location: 'hero' }
```

**2. Check PostHog Init:**
```javascript
// In Console:
window.posthog.isFeatureEnabled('test')
// Sollte true/false zurückgeben, nicht undefined
```

**3. Check Network Tab:**
- Öffne Network Tab
- Filter: `posthog`
- Events sollten zu `https://eu.i.posthog.com/` gesendet werden
- Status: 200 OK

**4. PostHog Processing Delay:**
- Events brauchen 1-2 Minuten bis sie in UI erscheinen
- Warte und refreshe Dashboard

### API Setup schlägt fehl

**Fehler: "Unauthorized"**
- Check: Hast du Personal API Key verwendet? (nicht Project Key)
- Check: Key hat "Read & Write" Permissions

**Fehler: "Project not found"**
- Check: `POSTHOG_PROJECT_ID` korrekt gesetzt
- Lass es leer → wird automatisch ermittelt

**Fehler: "Network error"**
- Check: Internet Connection
- Check: Firewall/VPN blockiert `eu.i.posthog.com`?

---

## 📚 Weiterführende Links

**PostHog Docs:**
- Funnels: https://posthog.com/docs/user-guides/funnels
- Session Recordings: https://posthog.com/docs/session-replay
- Feature Flags: https://posthog.com/docs/feature-flags

**PostHog Dashboard:**
- EU Instance: https://eu.posthog.com/
- Insights: https://eu.posthog.com/insights
- Session Recordings: https://eu.posthog.com/replay

**Projekt Docs:**
- Tracking Implementierung: `/TRACKING.md`
- Analytics Code: `/src/lib/analytics.ts`
- Tracking Hooks: `/src/hooks/useTracking.ts`

---

## 🆘 Support

**PostHog Community:**
- Slack: https://posthog.com/slack
- Docs: https://posthog.com/docs
- GitHub: https://github.com/PostHog/posthog

**Internes Team:**
- Siehe `/CLAUDE.md` für Dev Setup
- Analytics Fragen → Check `/TRACKING.md`

---

**Last Updated:** 2025-01-06
**Maintained By:** Marsstein Development Team
