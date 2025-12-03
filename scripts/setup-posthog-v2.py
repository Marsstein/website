#!/usr/bin/env python3
"""
PostHog Setup V2 - Using correct authentication
Works by creating insights config that you can copy-paste into PostHog UI
"""

import json

def generate_funnel_config():
    """Generate funnel configuration"""
    return {
        "name": "🎯 Beta Signup Conversion Funnel",
        "description": "Track user journey from page view to beta signup",
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

def generate_insights_guide():
    """Generate step-by-step guide for creating insights"""

    guide = """
╔══════════════════════════════════════════════════════════════════════╗
║         📊 PostHog Beta Analytics - Setup Guide                     ║
╚══════════════════════════════════════════════════════════════════════╝

Wir erstellen 4 Insights manuell in PostHog (dauert nur 5 Minuten):

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 INSIGHT 1: Beta Signup Conversion Funnel
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Gehe zu: https://eu.posthog.com/insights/new
2. Wähle: "Funnels"
3. Name: "🎯 Beta Signup Conversion Funnel"
4. Füge 5 Steps hinzu:

   Step 1: Pageview
   └─ Add filter: Current URL contains "/beta"

   Step 2: section_viewed
   └─ Add filter: section equals "beta_problem_section"

   Step 3: section_viewed
   └─ Add filter: section equals "beta_signup_section"

   Step 4: form_started
   └─ Add filter: form_name equals "beta_signup"

   Step 5: form_submitted
   └─ Add filter: form_name equals "beta_signup"

5. Funnel window: 30 minutes
6. Date range: Last 30 days
7. Klicke "Save"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 INSIGHT 2: Scroll Depth Distribution
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Gehe zu: https://eu.posthog.com/insights/new
2. Wähle: "Trends"
3. Name: "📊 Beta Scroll Depth"
4. Event: "scroll_depth"
   └─ Add filter: page equals "beta"
5. Breakdown by: "depth_percentage" (Event property)
6. Chart type: Bar chart
7. Date range: Last 30 days
8. Klicke "Save"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 INSIGHT 3: CTA Click Performance
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Gehe zu: https://eu.posthog.com/insights/new
2. Wähle: "Trends"
3. Name: "🎯 CTA Click Performance"
4. Event: "button_click"
   └─ Add filter: button_name equals "beta_cta"
5. Breakdown by: "location" (Event property)
6. Chart type: Bar chart
7. Date range: Last 30 days
8. Klicke "Save"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 INSIGHT 4: Form Field Drop-off
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Gehe zu: https://eu.posthog.com/insights/new
2. Wähle: "Trends"
3. Name: "📝 Form Field Drop-off"
4. Event: "form_field_completed"
   └─ Add filter: form_name equals "beta_signup"
5. Breakdown by: "field" (Event property)
6. Chart type: Bar chart
7. Date range: Last 30 days
8. Klicke "Save"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 DASHBOARD ERSTELLEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Gehe zu: https://eu.posthog.com/dashboard
2. Klicke "New dashboard"
3. Name: "📊 Beta Page Analytics"
4. Klicke "Add insight" für jeden der 4 Insights oben
5. Ordne die Kacheln an wie du möchtest
6. Pin das Dashboard (oben rechts)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ FERTIG!

Jetzt hast du ein vollständiges Analytics Dashboard für die Beta Page!

📈 Next Steps:
- Generiere Traffic auf /beta
- Warte 5 Minuten
- Insights füllen sich automatisch mit Daten

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Tipp: Speichere diese Insights als Templates für zukünftige Pages!

"""

    return guide

def main():
    print(generate_insights_guide())

    # Save to file
    with open("scripts/POSTHOG_MANUAL_SETUP.md", "w") as f:
        f.write(generate_insights_guide())

    print("\n✅ Setup Guide saved to: scripts/POSTHOG_MANUAL_SETUP.md\n")

if __name__ == "__main__":
    main()
