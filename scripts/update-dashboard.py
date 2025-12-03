#!/usr/bin/env python3
"""
Update dashboard with insights
"""

import requests

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_NcpQITlvedsm0zHHGenA8qYMQqELel9XSKNPsMWEu3mNOSV"
PROJECT_ID = 99640
DASHBOARD_ID = 295288

# Latest insights
INSIGHTS = [1590277, 1590279, 1590280, 1590281]

def update_dashboard():
    """Update dashboard with tiles"""
    print("🚀 Updating Dashboard with Insights\n")
    print("=" * 50)

    # Create tiles array
    tiles = [
        {
            "insight": INSIGHTS[0],  # Funnel
            "color": "blue",
            "layouts": {
                "sm": {"x": 0, "y": 0, "w": 12, "h": 6, "minW": 6, "minH": 5}
            }
        },
        {
            "insight": INSIGHTS[1],  # Scroll Depth
            "color": "green",
            "layouts": {
                "sm": {"x": 0, "y": 6, "w": 4, "h": 5, "minW": 3, "minH": 5}
            }
        },
        {
            "insight": INSIGHTS[2],  # CTA Performance
            "color": "purple",
            "layouts": {
                "sm": {"x": 4, "y": 6, "w": 4, "h": 5, "minW": 3, "minH": 5}
            }
        },
        {
            "insight": INSIGHTS[3],  # Form Drop-off
            "color": "orange",
            "layouts": {
                "sm": {"x": 8, "y": 6, "w": 4, "h": 5, "minW": 3, "minH": 5}
            }
        }
    ]

    url = f"{API_URL}/projects/{PROJECT_ID}/dashboards/{DASHBOARD_ID}/"
    headers = {
        "Authorization": f"Bearer {PERSONAL_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {"tiles": tiles}

    print(f"📊 Updating dashboard {DASHBOARD_ID}...")
    print(f"   Adding {len(tiles)} insights...")

    try:
        response = requests.patch(url, headers=headers, json=payload)
        response.raise_for_status()

        print("\n✅ Dashboard updated successfully!")
        print("=" * 50)
        print(f"\n🔗 View Dashboard:")
        print(f"   https://eu.posthog.com/project/{PROJECT_ID}/dashboard/{DASHBOARD_ID}")
        print("\n📊 Dashboard now contains:")
        print("   ✓ 🎯 Beta Signup Conversion Funnel")
        print("   ✓ 📊 Scroll Depth Distribution")
        print("   ✓ 🎯 CTA Click Performance")
        print("   ✓ 📝 Form Field Drop-off")

    except requests.exceptions.RequestException as e:
        print(f"\n❌ Failed to update dashboard: {e}")
        if hasattr(e, 'response') and e.response:
            print(f"Response: {e.response.text}")

if __name__ == "__main__":
    update_dashboard()
