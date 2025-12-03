#!/usr/bin/env python3
"""
Add insights to existing dashboard
"""

import requests
import json

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_NcpQITlvedsm0zHHGenA8qYMQqELel9XSKNPsMWEu3mNOSV"
PROJECT_ID = 99640
DASHBOARD_ID = 295288

# Latest insights from the last run
INSIGHTS = [1590277, 1590279, 1590280, 1590281]

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
        return None

def add_tile_to_dashboard(insight_id, position):
    """Add a single insight tile to the dashboard"""
    tile_data = {
        "insight": insight_id,
        "layouts": {
            "sm": position
        }
    }

    result = api_request(
        f"/projects/{PROJECT_ID}/dashboards/{DASHBOARD_ID}/tiles/",
        "POST",
        tile_data
    )

    if result:
        print(f"✅ Added insight {insight_id} to dashboard")
        return True
    return False

def main():
    print("🚀 Adding Insights to Dashboard\n")
    print("=" * 50)

    positions = [
        {"x": 0, "y": 0, "w": 12, "h": 6},   # Funnel - full width
        {"x": 0, "y": 6, "w": 4, "h": 5},    # Scroll Depth
        {"x": 4, "y": 6, "w": 4, "h": 5},    # CTA Performance
        {"x": 8, "y": 6, "w": 4, "h": 5},    # Form Drop-off
    ]

    success_count = 0
    for idx, insight_id in enumerate(INSIGHTS):
        position = positions[idx] if idx < len(positions) else {"x": 0, "y": idx * 6, "w": 6, "h": 5}

        print(f"\n📊 Adding Insight {insight_id}...")
        if add_tile_to_dashboard(insight_id, position):
            success_count += 1

    print("\n" + "=" * 50)
    if success_count == len(INSIGHTS):
        print("✅ All insights added successfully!")
    else:
        print(f"⚠️  Added {success_count}/{len(INSIGHTS)} insights")

    print("=" * 50)
    print(f"\n🔗 View Dashboard:")
    print(f"   https://eu.posthog.com/project/{PROJECT_ID}/dashboard/{DASHBOARD_ID}")

if __name__ == "__main__":
    main()
