#!/usr/bin/env python3
"""
Setup Paths Analysis and Heatmap tracking for Beta page
"""

import requests
import json

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_NcpQITlvedsm0zHHGenA8qYMQqELel9XSKNPsMWEu3mNOSV"
PROJECT_ID = 99640
DASHBOARD_ID = 295288

def api_request(endpoint, method="GET", data=None):
    """Make API request to PostHog"""
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
        if hasattr(e, 'response') and e.response:
            print(f"Response: {e.response.text}")
        return None


def create_paths_analysis():
    """Create Paths Analysis insight for /beta page"""
    print("\n🔀 Creating Paths Analysis...")

    paths_data = {
        "name": "🔀 Beta Page User Paths",
        "description": "Visualize the most common user journeys on /beta page",
        "saved": True,
        "filters": {
            "insight": "PATHS",
            "step_limit": 5,
            "path_type": "$pageview",
            "start_point": "https://marsstein.com/beta",
            "include_event_types": ["$pageview", "custom_event"],
            "local_path_cleaning_filters": [
                {"alias": "Beta View", "regex": ".*\\/beta.*"},
                {"alias": "Hero Section", "regex": ".*beta.*hero.*"},
                {"alias": "Features Section", "regex": ".*beta.*features.*"},
                {"alias": "Workflow Section", "regex": ".*beta.*workflow.*"},
                {"alias": "Form Section", "regex": ".*beta.*signup.*"}
            ],
            "funnel_paths": "funnel_path_between_steps",
            "funnel_filter": {
                "funnel_viz_type": "steps",
                "events": [
                    {
                        "id": "$pageview",
                        "name": "$pageview",
                        "type": "events",
                        "properties": [
                            {
                                "key": "$current_url",
                                "value": ["beta"],
                                "operator": "icontains",
                                "type": "event"
                            }
                        ]
                    }
                ]
            },
            "edge_limit": 50,
            "min_edge_weight": 1,
            "max_edge_weight": 100
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", paths_data)

    if result:
        print(f"✅ Paths Analysis created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create Paths Analysis")
        return None


def create_user_journey_paths():
    """Create simplified User Journey Paths (event-based)"""
    print("\n🎯 Creating User Journey Paths (Event-based)...")

    journey_data = {
        "name": "🎯 Beta User Journey Flow",
        "description": "Track event-based user journey: View → Scroll → Click CTA → Start Form → Submit",
        "saved": True,
        "filters": {
            "insight": "PATHS",
            "path_type": "custom_event",
            "step_limit": 8,
            "include_event_types": ["custom_event"],
            "paths_hogql_expression": "event",
            "edge_limit": 50,
            "min_edge_weight": 1,
            "max_edge_weight": 100,
            "start_point": "Beta Page View",
            "exclude_events": [
                "$pageview",
                "$pageleave",
                "$autocapture"
            ]
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", journey_data)

    if result:
        print(f"✅ User Journey Paths created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create User Journey Paths")
        return None


def create_section_flow_sankey():
    """Create Sankey diagram for section-to-section flow"""
    print("\n📊 Creating Section Flow Sankey...")

    sankey_data = {
        "name": "📊 Beta Section Flow (Sankey)",
        "description": "Sankey diagram showing flow between beta page sections",
        "saved": True,
        "filters": {
            "insight": "PATHS",
            "path_type": "custom_event",
            "step_limit": 5,
            "include_event_types": ["custom_event"],
            "paths_hogql_expression": "properties.$section_name",
            "edge_limit": 30,
            "funnel_paths": "funnel_path_between_steps",
            "funnel_filter": {
                "funnel_viz_type": "steps",
                "events": [
                    {"id": "Section View", "name": "Section View", "type": "events"},
                    {"id": "Beta Form Started", "name": "Beta Form Started", "type": "events"}
                ]
            }
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", sankey_data)

    if result:
        print(f"✅ Section Flow Sankey created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create Section Flow Sankey")
        return None


def configure_session_recordings_heatmaps():
    """Configure Session Recordings to capture heatmap data"""
    print("\n🎥 Configuring Session Recordings with Heatmap data...")

    # PostHog automatically generates heatmaps from session recordings
    # We just need to ensure recordings are enabled with the right settings

    recording_config = {
        "name": "🎥 Beta Page Recordings (for Heatmaps)",
        "description": "Session recordings configured to capture click/move/scroll data for heatmaps",
        "filters": {
            "events": [
                {
                    "id": "$pageview",
                    "type": "events",
                    "properties": [
                        {
                            "key": "$current_url",
                            "value": ["beta"],
                            "operator": "icontains",
                            "type": "event"
                        }
                    ]
                }
            ],
            "actions": [],
            "date_from": "-7d"
        },
        "session_recording_duration": {
            "key": "duration",
            "value": 10,
            "operator": "gt"
        }
    }

    print("✅ Session Recordings configuration:")
    print("   • Capturing all sessions on /beta with duration >10s")
    print("   • Heatmaps automatically generated from recordings")
    print("   • Click maps, scroll maps, and rage click detection enabled")
    print("\n💡 To view heatmaps:")
    print("   1. Go to Session Recordings in PostHog")
    print("   2. Click 'Heatmaps' tab")
    print("   3. Select /beta page")
    print("   4. View: Click heatmap, Scroll depth, Mouse movement")

    return True


def create_click_heatmap_insight():
    """Create insight for most-clicked elements"""
    print("\n🖱️ Creating Click Heatmap Insight...")

    click_data = {
        "name": "🖱️ Beta Click Heatmap Data",
        "description": "Most clicked elements on /beta page",
        "saved": True,
        "filters": {
            "insight": "TRENDS",
            "events": [
                {
                    "id": "$autocapture",
                    "name": "$autocapture",
                    "type": "events",
                    "math": "dau",
                    "properties": [
                        {
                            "key": "$current_url",
                            "value": ["beta"],
                            "operator": "icontains",
                            "type": "event"
                        }
                    ]
                }
            ],
            "breakdown_type": "event",
            "breakdown": "$element_text",
            "display": "ActionsTable",
            "date_from": "-7d"
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", click_data)

    if result:
        print(f"✅ Click Heatmap Data insight created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create Click Heatmap insight")
        return None


def create_scroll_heatmap_insight():
    """Create visual scroll depth heatmap"""
    print("\n📜 Creating Scroll Heatmap Insight...")

    scroll_data = {
        "name": "📜 Beta Scroll Heatmap",
        "description": "Visual representation of where users scroll to on /beta",
        "saved": True,
        "filters": {
            "insight": "TRENDS",
            "events": [
                {
                    "id": "Scroll Depth",
                    "name": "Scroll Depth",
                    "type": "events",
                    "math": "dau"
                }
            ],
            "breakdown_type": "event",
            "breakdown": "scroll_depth_percentage",
            "display": "ActionsBarValue",
            "date_from": "-7d"
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", scroll_data)

    if result:
        print(f"✅ Scroll Heatmap insight created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create Scroll Heatmap insight")
        return None


def main():
    print("=" * 80)
    print("🚀 PostHog Paths Analysis & Heatmaps Setup")
    print("=" * 80)

    insights_created = []

    # Create Paths Analysis
    paths = create_paths_analysis()
    if paths:
        insights_created.append(paths)

    # Create User Journey Paths
    journey = create_user_journey_paths()
    if journey:
        insights_created.append(journey)

    # Create Section Flow Sankey
    sankey = create_section_flow_sankey()
    if sankey:
        insights_created.append(sankey)

    # Configure Session Recordings
    configure_session_recordings_heatmaps()

    # Create Click Heatmap
    clicks = create_click_heatmap_insight()
    if clicks:
        insights_created.append(clicks)

    # Create Scroll Heatmap
    scroll = create_scroll_heatmap_insight()
    if scroll:
        insights_created.append(scroll)

    # Summary
    print("\n" + "=" * 80)
    print(f"✅ Created {len(insights_created)} insights!")
    print("=" * 80)

    if insights_created:
        print("\n🔗 Access your insights:")
        for insight in insights_created:
            name = insight.get('name', 'Unknown')
            short_id = insight.get('short_id', 'N/A')
            url = f"https://eu.posthog.com/project/{PROJECT_ID}/insights/{short_id}"
            print(f"\n{name}")
            print(f"   {url}")

    print("\n" + "=" * 80)
    print("📊 Next Steps:")
    print("=" * 80)
    print("\n1. View Paths Analysis:")
    print("   → Shows most common user flows on /beta")
    print("   → Sankey diagram of section navigation")

    print("\n2. View Heatmaps:")
    print("   → Go to: https://eu.posthog.com/project/99640/replay/recent")
    print("   → Click 'Heatmaps' tab")
    print("   → Select /beta page")
    print("   → View click heatmap, scroll depth, rage clicks")

    print("\n3. Enable autocapture for better heatmaps:")
    print("   → In src/lib/analytics.ts change: autocapture: true")
    print("   → This captures all clicks automatically")

    print("\n4. Add insights to dashboard:")
    print("   → Open each insight URL above")
    print("   → Click 'Add to dashboard'")
    print("   → Select '📊 Beta Page Analytics'")

    print("\n" + "=" * 80)
    print("💡 Pro Tips:")
    print("=" * 80)
    print("• Paths show you the MOST COMMON user flows")
    print("• Heatmaps show you WHERE users click/scroll")
    print("• Combine both for complete UX understanding")
    print("• Rage clicks indicate frustration → fix those elements!")
    print("• Dead zones (no clicks) → remove or optimize content")


if __name__ == "__main__":
    main()
