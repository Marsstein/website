#!/usr/bin/env python3
"""
Create Clean Dashboard with latest insights only
"""

import requests

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_YhDTqie5J3xRLxvcT9Vu5qyP6A0xTz1sEzU5xOry3gwrc0c"
PROJECT_ID = 99640

# Use the LATEST insights from the last run
LATEST_INSIGHTS = [1590121, 1590122, 1590123, 1590124]

def api_request(endpoint, method="GET", data=None):
    """Make authenticated request to PostHog API"""
    url = f"{API_URL}{endpoint}"
    headers = {
        "Authorization": f"Bearer {PERSONAL_API_KEY}",
        "Content-Type": "application/json"
    }

    try:
        if method == "POST":
            response = requests.post(url, headers=headers, json=data)
        else:
            response = requests.get(url, headers=headers)

        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"❌ API Error: {e}")
        if hasattr(e.response, 'text'):
            print(f"Response: {e.response.text}")
        return None

def create_dashboard():
    """Create new dashboard with latest insights"""
    print("🚀 Creating Clean Dashboard\n")
    print("=" * 50)

    # Create tiles
    tiles = []
    layout_configs = [
        {"x": 0, "y": 0, "w": 12, "h": 6},  # Funnel - full width
        {"x": 0, "y": 6, "w": 6, "h": 5},   # Scroll Depth - left
        {"x": 6, "y": 6, "w": 6, "h": 5},   # CTA Performance - right
        {"x": 0, "y": 11, "w": 6, "h": 5},  # Form Drop-off - left
    ]

    for idx, insight_id in enumerate(LATEST_INSIGHTS):
        layout = layout_configs[idx] if idx < len(layout_configs) else {"x": 0, "y": idx * 6, "w": 6, "h": 5}

        tiles.append({
            "insight": insight_id,
            "layouts": {
                "sm": layout
            }
        })

    # Create dashboard
    dashboard_data = {
        "name": "📊 Beta Page Analytics",
        "description": "Complete analytics dashboard for beta signup page",
        "pinned": True,
        "tiles": tiles
    }

    print("📊 Creating dashboard...")
    result = api_request(f"/projects/{PROJECT_ID}/dashboards/", "POST", dashboard_data)

    if result:
        dashboard_id = result["id"]
        print(f"✅ Dashboard created (ID: {dashboard_id})")
        print("\n" + "=" * 50)
        print("✅ Setup Complete!")
        print("=" * 50)
        print(f"\n🔗 View Dashboard:")
        print(f"   https://eu.posthog.com/project/{PROJECT_ID}/dashboard/{dashboard_id}")
        print("\n📊 Dashboard contains:")
        print("   ✓ 🎯 Beta Signup Conversion Funnel")
        print("   ✓ 📊 Scroll Depth Distribution")
        print("   ✓ 🎯 CTA Click Performance")
        print("   ✓ 📝 Form Field Drop-off Analysis")
        return dashboard_id
    else:
        print("❌ Failed to create dashboard")
        return None

if __name__ == "__main__":
    create_dashboard()
