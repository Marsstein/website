#!/usr/bin/env python3
"""
Fix PostHog Dashboard - Add missing insights
"""

import requests
import json

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_YhDTqie5J3xRLxvcT9Vu5qyP6A0xTz1sEzU5xOry3gwrc0c"
PROJECT_ID = 99640
DASHBOARD_ID = 295227

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

def get_all_insights():
    """Get all insights for the project"""
    print("🔍 Getting all insights...")

    result = api_request(f"/projects/{PROJECT_ID}/insights/")

    if not result:
        return []

    insights = result.get("results", [])
    print(f"✅ Found {len(insights)} insights\n")

    # Find our custom insights
    custom_insights = []
    for insight in insights:
        name = insight.get("name", "")
        if any(keyword in name for keyword in ["Beta", "🎯", "📊", "📝"]):
            print(f"   ✓ {name} (ID: {insight['id']})")
            custom_insights.append(insight)

    return custom_insights

def update_dashboard(insights):
    """Update dashboard with insights"""
    print(f"\n📊 Updating dashboard {DASHBOARD_ID}...")

    # Create tiles for each insight
    tiles = []
    for idx, insight in enumerate(insights):
        row = idx // 2  # 2 columns
        col = idx % 2

        tiles.append({
            "insight": insight["id"],
            "layouts": {
                "sm": {
                    "x": col * 6,
                    "y": row * 6,
                    "w": 6,
                    "h": 5,
                    "minW": 3,
                    "minH": 5
                }
            }
        })

    # Update dashboard
    update_data = {
        "tiles": tiles
    }

    result = api_request(
        f"/projects/{PROJECT_ID}/dashboards/{DASHBOARD_ID}/",
        "PATCH",
        update_data
    )

    if result:
        print(f"✅ Dashboard updated with {len(tiles)} insights!")
        return True
    return False

def main():
    print("🚀 Fixing PostHog Dashboard\n")
    print("=" * 50)

    # Get our custom insights
    insights = get_all_insights()

    if not insights:
        print("\n❌ No custom insights found!")
        print("\n💡 Creating insights first...")
        # Run the setup script
        import subprocess
        subprocess.run(["python3", "scripts/setup-posthog.py"])
        return

    # Update dashboard
    if update_dashboard(insights):
        print("\n" + "=" * 50)
        print("✅ Dashboard Fixed!")
        print("=" * 50)
        print(f"\n🔗 View Dashboard:")
        print(f"   https://eu.posthog.com/project/{PROJECT_ID}/dashboard/{DASHBOARD_ID}")
    else:
        print("\n❌ Failed to update dashboard")

if __name__ == "__main__":
    main()
