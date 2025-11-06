#!/usr/bin/env python3
"""
PostHog Beta Analytics Setup Script
Automatically creates funnels, insights, and dashboards via API
"""

import requests
import json
import sys
import time

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_NcpQITlvedsm0zHHGenA8qYMQqELel9XSKNPsMWEu3mNOSV"

def api_request(endpoint, method="GET", data=None):
    """Make authenticated request to PostHog API"""
    url = f"{API_URL}{endpoint}"
    headers = {
        "Authorization": f"Bearer {PERSONAL_API_KEY}",
        "Content-Type": "application/json"
    }

    try:
        if method == "GET":
            response = requests.get(url, headers=headers)
        elif method == "POST":
            response = requests.post(url, headers=headers, json=data)
        elif method == "PATCH":
            response = requests.patch(url, headers=headers, json=data)

        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"❌ API Error: {e}")
        if hasattr(e.response, 'text'):
            print(f"Response: {e.response.text}")
        sys.exit(1)

def get_project_id():
    """Get the first project ID"""
    print("🔍 Getting Project ID...")
    result = api_request("/projects/")

    if not result.get("results"):
        print("❌ No projects found")
        sys.exit(1)

    project_id = result["results"][0]["id"]
    print(f"✅ Found Project ID: {project_id}")
    return project_id

def create_funnel(project_id):
    """Create Beta Signup Conversion Funnel"""
    print("\n📊 Creating Beta Signup Funnel...")

    funnel_data = {
        "name": "🎯 Beta Signup Conversion Funnel",
        "description": "Track user journey from page view to beta signup",
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
    print(f"✅ Funnel created (ID: {result['id']})")
    return result

def create_scroll_depth_insight(project_id):
    """Create Scroll Depth Distribution insight"""
    print("\n📊 Creating Scroll Depth Insight...")

    insight_data = {
        "name": "📊 Beta Scroll Depth",
        "description": "How far do users scroll on the beta page?",
        "filters": {
            "insight": "TRENDS",
            "events": [{
                "id": "scroll_depth",
                "name": "scroll_depth",
                "type": "events",
                "properties": [{
                    "key": "page",
                    "value": "beta",
                    "operator": "exact",
                    "type": "event"
                }]
            }],
            "breakdown": "depth_percentage",
            "breakdown_type": "event",
            "date_from": "-30d",
            "display": "ActionsBar"
        }
    }

    result = api_request(f"/projects/{project_id}/insights/", "POST", insight_data)
    print(f"✅ Scroll Depth Insight created (ID: {result['id']})")
    return result

def create_cta_performance_insight(project_id):
    """Create CTA Click Performance insight"""
    print("\n🎯 Creating CTA Performance Insight...")

    insight_data = {
        "name": "🎯 CTA Click Performance",
        "description": "Which CTAs are most effective?",
        "filters": {
            "insight": "TRENDS",
            "events": [{
                "id": "button_click",
                "name": "button_click",
                "type": "events",
                "properties": [{
                    "key": "button_name",
                    "value": "beta_cta",
                    "operator": "exact",
                    "type": "event"
                }]
            }],
            "breakdown": "location",
            "breakdown_type": "event",
            "date_from": "-30d",
            "display": "ActionsBar"
        }
    }

    result = api_request(f"/projects/{project_id}/insights/", "POST", insight_data)
    print(f"✅ CTA Performance Insight created (ID: {result['id']})")
    return result

def create_form_dropoff_insight(project_id):
    """Create Form Field Drop-off insight"""
    print("\n📝 Creating Form Drop-off Insight...")

    insight_data = {
        "name": "📝 Form Field Drop-off",
        "description": "At which form field do users drop off?",
        "filters": {
            "insight": "TRENDS",
            "events": [{
                "id": "form_field_completed",
                "name": "form_field_completed",
                "type": "events",
                "properties": [{
                    "key": "form_name",
                    "value": "beta_signup",
                    "operator": "exact",
                    "type": "event"
                }]
            }],
            "breakdown": "field",
            "breakdown_type": "event",
            "date_from": "-30d",
            "display": "ActionsBar"
        }
    }

    result = api_request(f"/projects/{project_id}/insights/", "POST", insight_data)
    print(f"✅ Form Drop-off Insight created (ID: {result['id']})")
    return result

def create_dashboard(project_id, insights):
    """Create main analytics dashboard"""
    print("\n📊 Creating Analytics Dashboard...")

    tiles = []
    for idx, insight in enumerate(insights):
        tiles.append({
            "insight": insight["id"],
            "layouts": {
                "sm": {"x": 0, "y": idx * 6, "w": 6, "h": 5}
            }
        })

    dashboard_data = {
        "name": "📊 Beta Page Analytics",
        "description": "Complete analytics dashboard for beta signup page",
        "pinned": True,
        "tiles": tiles
    }

    result = api_request(f"/projects/{project_id}/dashboards/", "POST", dashboard_data)
    print(f"✅ Dashboard created (ID: {result['id']})")
    return result

def main():
    print("🚀 PostHog Beta Analytics Setup\n")
    print("=" * 50)

    try:
        # Step 1: Get Project ID
        project_id = get_project_id()
        time.sleep(0.5)

        # Step 2: Create Funnel
        funnel = create_funnel(project_id)
        time.sleep(0.5)

        # Step 3: Create Insights
        scroll_insight = create_scroll_depth_insight(project_id)
        time.sleep(0.5)

        cta_insight = create_cta_performance_insight(project_id)
        time.sleep(0.5)

        form_insight = create_form_dropoff_insight(project_id)
        time.sleep(0.5)

        # Step 4: Create Dashboard
        all_insights = [funnel, scroll_insight, cta_insight, form_insight]
        dashboard = create_dashboard(project_id, all_insights)

        # Success Summary
        print("\n" + "=" * 50)
        print("✅ Setup Complete!")
        print("=" * 50)
        print(f"\n📊 Created Resources:")
        print(f"   - Conversion Funnel (ID: {funnel['id']})")
        print(f"   - Scroll Depth Insight (ID: {scroll_insight['id']})")
        print(f"   - CTA Performance Insight (ID: {cta_insight['id']})")
        print(f"   - Form Drop-off Insight (ID: {form_insight['id']})")
        print(f"   - Analytics Dashboard (ID: {dashboard['id']})")

        print(f"\n🔗 View Dashboard:")
        print(f"   https://eu.posthog.com/project/{project_id}/dashboard/{dashboard['id']}")

    except Exception as e:
        print(f"\n❌ Setup failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
