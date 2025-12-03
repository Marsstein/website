#!/usr/bin/env python3
"""
List all insights in the project
"""

import requests

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_NcpQITlvedsm0zHHGenA8qYMQqELel9XSKNPsMWEu3mNOSV"
PROJECT_ID = 99640

def list_insights():
    """List all insights"""
    print("🔍 Listing All Insights\n")
    print("=" * 80)

    url = f"{API_URL}/projects/{PROJECT_ID}/insights/"
    headers = {
        "Authorization": f"Bearer {PERSONAL_API_KEY}",
        "Content-Type": "application/json"
    }

    # Get all insights (with pagination)
    params = {"limit": 100}

    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        data = response.json()

        results = data.get("results", [])
        print(f"📊 Found {len(results)} total insights\n")

        # Filter for Beta insights
        beta_insights = []
        for insight in results:
            name = insight.get("name", "Unnamed")
            insight_id = insight.get("id")
            created_by = insight.get("created_by", {})
            created_at = insight.get("created_at", "Unknown")

            # Check if it's a Beta insight
            if any(keyword in name for keyword in ["Beta", "🎯", "📊", "📝", "beta"]):
                beta_insights.append(insight)
                print(f"✅ ID: {insight_id}")
                print(f"   Name: {name}")
                print(f"   Created: {created_at[:10] if created_at != 'Unknown' else 'Unknown'}")
                print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{insight_id}")
                print()

        if not beta_insights:
            print("❌ No Beta insights found!")
            print("\n💡 Let's create them from scratch...")
        else:
            print("=" * 80)
            print(f"\n📊 Found {len(beta_insights)} Beta insights")
            print("\n🔗 Quick Links:")
            for insight in beta_insights:
                print(f"   {insight['name']}: https://eu.posthog.com/project/{PROJECT_ID}/insights/{insight['id']}")

        return beta_insights

    except requests.exceptions.RequestException as e:
        print(f"❌ API Error: {e}")
        if hasattr(e, 'response') and e.response:
            print(f"Response: {e.response.text}")
        return []

if __name__ == "__main__":
    insights = list_insights()

    if insights:
        print("\n" + "=" * 80)
        print("📝 To add these to a dashboard:")
        print("   1. Go to: https://eu.posthog.com/dashboard")
        print("   2. Open your dashboard")
        print("   3. Click 'Add insight'")
        print("   4. Select the insights above")
