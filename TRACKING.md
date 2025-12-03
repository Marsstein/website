# 📊 Tracking Implementation Guide

## Overview

Die Website nutzt **Beam Analytics** (GDPR-konform, cookiefrei) + **PostHog** (Product Analytics + Session Recordings) für umfassendes Tracking.

## 🔧 Setup

### Beam Analytics
- **Token**: `57282d9a-71ff-40e1-a054-5805365eb8e8`
- **Script**: Bereits in `index.html` integriert (Zeile 158)
- **Dashboard**: https://beamanalytics.io/

### PostHog
- **API Key**: `phc_VD40IEcKzwwg3HK9j3jBoeOB9E7nZBsDS9FF01SEYwY`
- **Region**: EU (https://eu.i.posthog.com)
- **Dashboard**: https://eu.posthog.com/

## 📁 File Structure

```
src/
├── lib/
│   └── analytics.ts              # Core tracking functions (Beam + PostHog)
├── hooks/
│   └── useTracking.ts            # React hooks for tracking
└── pages/
    └── Beta.tsx                  # Fully instrumented beta page
```

## 🎯 Tracked Events auf /beta

### 1. Automatic Events
- ✅ **Page Views**: Via Beam + PostHog
- ✅ **Page Leave**: Via PostHog
- ✅ **Scroll Depth**: 25%, 50%, 75%, 100%
- ✅ **Exit Intent**: Mouse leaves viewport

### 2. Section Views (IntersectionObserver)
- ✅ `beta_problem_section` - Problem section visibility
- ✅ `beta_workflow_section` - Workflow animation section
- ✅ `beta_features_section` - Features overview
- ✅ `beta_signup_section` - Sign-up form section

### 3. Button Clicks
- ✅ **Hero CTA**: `button_click` (location: 'hero')
- ✅ **Problem CTA**: `button_click` (location: 'problem')
- ✅ **Workflow CTA**: `button_click` (location: 'workflow')

### 4. Form Tracking
- ✅ `form_started` - User focuses first field
- ✅ `form_field_completed` - Each field completion (firstName, email, company, consent)
- ✅ `form_submitted` - Successful submission with metadata
- ✅ `form_error` - Form errors with error message
- ✅ `form_abandoned` - User leaves with incomplete form

### 5. User Identification
- ✅ PostHog user identification on successful signup
- ✅ User properties: email, name, company, signup_source

## 🚀 Usage

### Basic Event Tracking

```typescript
import { useTracking } from '@/hooks/useTracking';

const MyComponent = () => {
  const { trackButtonClick, trackEvent } = useTracking();

  return (
    <button onClick={() => trackButtonClick('my_button', 'header')}>
      Click Me
    </button>
  );
};
```

### Section View Tracking

```typescript
import { useSectionTracking } from '@/hooks/useTracking';

const MyComponent = () => {
  const sectionRef = useSectionTracking('my_section', { page: 'home' });

  return <div ref={sectionRef}>Content</div>;
};
```

### Form Tracking

```typescript
import { useFormTracking } from '@/hooks/useTracking';

const MyForm = () => {
  const { trackFormStart, trackFieldCompletion, trackFormSubmit } =
    useFormTracking('contact_form');

  return (
    <form onSubmit={handleSubmit}>
      <input
        onFocus={trackFormStart}
        onChange={(e) => trackFieldCompletion('email', e.target.value)}
      />
    </form>
  );
};
```

### Scroll Depth Tracking

```typescript
import { useScrollDepthTracking } from '@/hooks/useTracking';

const MyPage = () => {
  useScrollDepthTracking('pricing'); // Tracks 25%, 50%, 75%, 100%
  return <div>...</div>;
};
```

## 📈 Key Metrics Dashboard

### Conversion Funnel (/beta)
1. **Page View** → 100% (baseline)
2. **Problem Section View** → % of users who scroll to problem
3. **Workflow Section View** → % who reach workflow
4. **Signup Section View** → % who reach form
5. **Form Started** → % who click into form
6. **Form Submitted** → % who complete signup

### Form Analytics
- **Form Start Rate**: % of visitors who start form
- **Field Completion Rate**: % completing each field
- **Form Abandonment Rate**: % leaving incomplete
- **Form Error Rate**: % encountering errors
- **Conversion Rate**: % completing signup

### Engagement Metrics
- **Scroll Depth**: Distribution of 25/50/75/100%
- **Time on Page**: Average time spent
- **CTA Click Rate**: % clicking each CTA
- **Section View Rate**: % reaching each section
- **Exit Intent Rate**: % triggering exit intent

## 🔍 PostHog Features

### Session Recordings
- Maskiert alle Input-Felder automatisch
- Elemente mit `data-private` attribute werden maskiert
- Nur nach User-Identification (nach Signup)

### Funnel Analysis
Erstellen Sie Funnels in PostHog:
1. Beta Page View
2. Problem Section View
3. Workflow Section View
4. Form Started
5. Form Submitted

### Cohort Analysis
Segmentieren Sie User nach:
- Signup Source (beta_page, contact_form, etc.)
- Company Size
- Industry
- Time to Convert

## 🛠️ Development

### Testing Events Lokal

Alle Events werden in Development in der Console geloggt:

```
[Analytics] button_click { button_name: 'beta_cta', location: 'hero' }
[Analytics] form_started { form_name: 'beta_signup' }
[Analytics] scroll_depth { depth_percentage: 50, page: 'beta' }
```

### Disabling Tracking

```typescript
// In development, setzen Sie in .env:
VITE_DISABLE_TRACKING=true
```

## 📊 Reporting

### Beam Analytics
- **URL**: https://beamanalytics.io/dashboard
- **Focus**: Page views, referrers, devices, locations
- **Vorteil**: GDPR-konform, kein Cookie-Banner nötig

### PostHog
- **URL**: https://eu.posthog.com/
- **Focus**: Funnels, Session Recordings, Cohorts, Retention
- **Vorteil**: Tiefe User-Insights, A/B Testing möglich

## 🎨 Best Practices

### DO ✅
- Track meaningful events (conversions, key interactions)
- Use consistent naming conventions (snake_case)
- Add context via metadata
- Test events in development
- Document new events here

### DON'T ❌
- Track PII ohne Consent
- Über-tracken (jede Mausbewegung)
- Tracking ohne klaren Zweck
- Vergessen, Events zu dokumentieren

## 📝 Adding New Events

1. **Define Event**: Klarer Name + Metadata
2. **Implement**: Nutze `trackEvent()` oder Hook
3. **Test**: Check Console in Development
4. **Verify**: Check Beam + PostHog Dashboard
5. **Document**: Update dieses Dokument

## 🔐 Privacy & GDPR

### Beam Analytics
- ✅ Cookiefrei
- ✅ GDPR-konform ohne Consent
- ✅ Keine PII gespeichert

### PostHog
- ✅ EU-Server (Frankfurt)
- ✅ User identification NUR nach Signup
- ✅ Input-Felder automatisch maskiert
- ✅ `person_profiles: 'identified_only'`

### User Rights
- User können opt-out via PostHog
- Keine Tracking-Cookies = kein Cookie-Banner nötig
- Datenschutzerklärung updated (TODO: verify)

## 🚨 Troubleshooting

### Events erscheinen nicht in Beam
- Check `window.beam` is defined in Console
- Verify Beam script loaded (check Network tab)
- Events as pageviews: `/events/{event_name}`

### Events erscheinen nicht in PostHog
- Check PostHog initialized: `posthog.isFeatureEnabled('test')`
- Verify API key korrekt
- Check EU region: `https://eu.i.posthog.com`
- PostHog needs ~1min to process events

### Development Console Errors
- Check all hooks imported correctly
- Verify refs are passed to components
- Check TypeScript types

## 📞 Support

- **Beam**: hi@beamanalytics.io
- **PostHog**: https://posthog.com/slack
- **Internal**: See `/CLAUDE.md` for dev setup

---

**Last Updated**: 2025-01-06
**Maintained By**: Marsstein Development Team
