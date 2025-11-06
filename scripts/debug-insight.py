#!/usr/bin/env python3
"""
Debug insight response to find correct ID
"""

import requests
import json

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_NcpQITlvedsm0zHHGenA8qYMQqELel9XSKNPsMWEu3mNOSV"
PROJECT_ID = 99640

def get_insight_details(insight_id):
    """Get full insight details"""
    url = f"{API_URL}/projects/{PROJECT_ID}/insights/{insight_id}/"
    headers = {
        "Authorization": f"Bearer {PERSONAL_API_KEY}",
        "Content-Type": "application/json"
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()

        print(f"\n📊 Insight {insight_id} Details:")
        print("=" * 80)
        print(f"ID: {data.get('id')}")
        print(f"Short ID: {data.get('short_id')}")
        print(f"Name: {data.get('name')}")
        print(f"Created By: {data.get('created_by')}")
        print(f"Created At: {data.get('created_at')}")
        print(f"Saved: {data.get('saved')}")
        print(f"Filters: {json.dumps(data.get('filters', {}), indent=2)[:200]}...")

        # The correct URL should use short_id
        if data.get('short_id'):
            correct_url = f"https://eu.posthog.com/project/{PROJECT_ID}/insights/{data['short_id']}"
            print(f"\n✅ Correct URL:")
            print(f"   {correct_url}")
        else:
            print("\n❌ No short_id found!")

        return data

    except requests.exceptions.RequestException as e:
        print(f"❌ API Error: {e}")
        if hasattr(e, 'response') and e.response:
            print(f"Response: {e.response.text}")
        return None

if __name__ == "__main__":
    print("🔍 Debugging PostHog Insights\n")

    # Check the latest insights
    test_ids = [1590277, 1590279, 1590280, 1590281]

    for insight_id in test_ids:
        get_insight_details(insight_id)
        print()
