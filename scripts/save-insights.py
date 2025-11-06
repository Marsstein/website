#!/usr/bin/env python3
"""
Save unsaved insights
"""

import requests

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_NcpQITlvedsm0zHHGenA8qYMQqELel9XSKNPsMWEu3mNOSV"
PROJECT_ID = 99640

INSIGHTS = [
    {"id": 1590277, "short_id": "TlpJZHTW", "name": "🎯 Beta Signup Conversion Funnel"},
    {"id": 1590279, "short_id": "swvkEGh9", "name": "📊 Beta Scroll Depth"},
    {"id": 1590280, "short_id": "Z5FWENPw", "name": "🎯 CTA Click Performance"},
    {"id": 1590281, "short_id": "qHZwdDNf", "name": "📝 Form Field Drop-off"},
]

def save_insight(insight_id):
    """Save an insight"""
    url = f"{API_URL}/projects/{PROJECT_ID}/insights/{insight_id}/"
    headers = {
        "Authorization": f"Bearer {PERSONAL_API_KEY}",
        "Content-Type": "application/json"
    }

    # PATCH with saved=True
    data = {"saved": True}

    try:
        response = requests.patch(url, headers=headers, json=data)
        response.raise_for_status()
        result = response.json()

        if result.get("saved"):
            print(f"✅ Saved: {result['name']}")
            return True
        else:
            print(f"⚠️  Failed to save: {result['name']}")
            return False

    except requests.exceptions.RequestException as e:
        print(f"❌ API Error: {e}")
        if hasattr(e, 'response') and e.response:
            print(f"Response: {e.response.text}")
        return False

def main():
    print("🚀 Saving PostHog Insights\n")
    print("=" * 80)

    saved_count = 0
    for insight in INSIGHTS:
        print(f"\n📊 Saving: {insight['name']} (ID: {insight['id']})...")
        if save_insight(insight['id']):
            saved_count += 1

    print("\n" + "=" * 80)
    print(f"✅ Saved {saved_count}/{len(INSIGHTS)} insights!")
    print("=" * 80)

    print("\n🔗 Correct URLs (with short_id):")
    for insight in INSIGHTS:
        url = f"https://eu.posthog.com/project/{PROJECT_ID}/insights/{insight['short_id']}"
        print(f"   {insight['name']}: {url}")

    print("\n💡 Now add them to your dashboard:")
    print("   1. Open each URL above")
    print("   2. Click 'Add to dashboard' (top right)")
    print("   3. Select '📊 Beta Page Analytics'")

if __name__ == "__main__":
    main()
