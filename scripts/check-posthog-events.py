#!/usr/bin/env python3
"""
Check PostHog Events - Verify events are being received
"""

import requests
import json

API_URL = "https://eu.i.posthog.com/api"
PERSONAL_API_KEY = "phx_YhDTqie5J3xRLxvcT9Vu5qyP6A0xTz1sEzU5xOry3gwrc0c"
PROJECT_ID = 99640

def check_events():
    """Check if events are being received"""
    print("🔍 Checking PostHog Events...\n")

    url = f"{API_URL}/projects/{PROJECT_ID}/events/"
    headers = {
        "Authorization": f"Bearer {PERSONAL_API_KEY}",
        "Content-Type": "application/json"
    }

    params = {
        "limit": 50,
        "orderBy": ["-timestamp"]
    }

    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        data = response.json()

        results = data.get("results", [])

        if not results:
            print("❌ No events found!")
            print("\n💡 This means:")
            print("   1. Events are being logged in console (we saw this ✅)")
            print("   2. But they're not reaching PostHog servers")
            print("\n🔧 Debugging steps:")
            print("   1. Check Network tab for POST to https://eu.i.posthog.com/")
            print("   2. Verify response is 200 OK")
            print("   3. Check for CORS errors")
            return False

        print(f"✅ Found {len(results)} events!\n")
        print("Recent events:")
        print("-" * 80)

        event_types = {}
        for event in results[:20]:
            event_name = event.get("event")
            timestamp = event.get("timestamp", "Unknown time")
            properties = event.get("properties", {})

            if event_name not in event_types:
                event_types[event_name] = 0
            event_types[event_name] += 1

            print(f"📌 {event_name}")
            print(f"   Time: {timestamp}")

            # Show relevant properties
            if "page" in properties:
                print(f"   Page: {properties['page']}")
            if "section" in properties:
                print(f"   Section: {properties['section']}")
            if "form_name" in properties:
                print(f"   Form: {properties['form_name']}")
            if "button_name" in properties:
                print(f"   Button: {properties['button_name']}")
            if "depth_percentage" in properties:
                print(f"   Depth: {properties['depth_percentage']}%")
            print()

        print("\n📊 Event Summary:")
        print("-" * 80)
        for event_type, count in sorted(event_types.items(), key=lambda x: x[1], reverse=True):
            print(f"   {event_type}: {count} times")

        return True

    except requests.exceptions.RequestException as e:
        print(f"❌ API Error: {e}")
        if hasattr(e, 'response') and e.response:
            print(f"Response: {e.response.text}")
        return False

if __name__ == "__main__":
    check_events()
