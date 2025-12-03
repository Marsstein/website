#!/usr/bin/env python3
"""
Setup Homepage Tracking - Conversion Funnels & Feature Interest
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


def create_homepage_to_pricing_funnel():
    """Create Homepage → Pricing Conversion Funnel"""
    print("\n🎯 Creating Homepage → Pricing Funnel...")

    funnel_data = {
        "name": "🎯 Homepage → Pricing Funnel",
        "description": "Track user journey from homepage view to pricing page visit",
        "saved": True,
        "filters": {
            "insight": "FUNNELS",
            "funnel_viz_type": "steps",
            "date_from": "-30d",
            "interval": "day",
            "events": [
                {
                    "id": "$pageview",
                    "name": "$pageview",
                    "type": "events",
                    "order": 0,
                    "properties": [
                        {
                            "key": "$current_url",
                            "value": ["/", "marsstein.com/", "marsstein.ai/"],
                            "operator": "exact",
                            "type": "event"
                        }
                    ]
                },
                {
                    "id": "Scroll Depth",
                    "name": "Scroll Depth",
                    "type": "events",
                    "order": 1,
                    "properties": [
                        {
                            "key": "page",
                            "value": "homepage",
                            "operator": "exact",
                            "type": "event"
                        },
                        {
                            "key": "depth_percentage",
                            "value": 50,
                            "operator": "gt",
                            "type": "event"
                        }
                    ]
                },
                {
                    "id": "button_click",
                    "name": "CTA Click: Jetzt starten",
                    "type": "events",
                    "order": 2,
                    "properties": [
                        {
                            "key": "button_name",
                            "value": "homepage_cta_pricing",
                            "operator": "exact",
                            "type": "event"
                        }
                    ]
                },
                {
                    "id": "$pageview",
                    "name": "$pageview",
                    "type": "events",
                    "order": 3,
                    "properties": [
                        {
                            "key": "$current_url",
                            "value": ["preis", "pricing"],
                            "operator": "icontains",
                            "type": "event"
                        }
                    ]
                }
            ],
            "funnel_window_interval": 30,
            "funnel_window_interval_unit": "minute"
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", funnel_data)

    if result:
        print(f"✅ Homepage → Pricing Funnel created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create Homepage → Pricing Funnel")
        return None


def create_homepage_to_contact_funnel():
    """Create Homepage → Contact/Demo Funnel"""
    print("\n📞 Creating Homepage → Contact Funnel...")

    funnel_data = {
        "name": "📞 Homepage → Demo Request Funnel",
        "description": "Track user journey from homepage to demo request",
        "saved": True,
        "filters": {
            "insight": "FUNNELS",
            "funnel_viz_type": "steps",
            "date_from": "-30d",
            "interval": "day",
            "events": [
                {
                    "id": "$pageview",
                    "name": "$pageview",
                    "type": "events",
                    "order": 0,
                    "properties": [
                        {
                            "key": "$current_url",
                            "value": ["/", "marsstein.com/", "marsstein.ai/"],
                            "operator": "exact",
                            "type": "event"
                        }
                    ]
                },
                {
                    "id": "Scroll Depth",
                    "name": "Scroll Depth > 25%",
                    "type": "events",
                    "order": 1,
                    "properties": [
                        {
                            "key": "page",
                            "value": "homepage",
                            "operator": "exact",
                            "type": "event"
                        },
                        {
                            "key": "depth_percentage",
                            "value": 25,
                            "operator": "gte",
                            "type": "event"
                        }
                    ]
                },
                {
                    "id": "button_click",
                    "name": "CTA Click: Demo anfragen",
                    "type": "events",
                    "order": 2,
                    "properties": [
                        {
                            "key": "button_name",
                            "value": "homepage_cta_demo",
                            "operator": "exact",
                            "type": "event"
                        }
                    ]
                },
                {
                    "id": "$pageview",
                    "name": "$pageview",
                    "type": "events",
                    "order": 3,
                    "properties": [
                        {
                            "key": "$current_url",
                            "value": "contact",
                            "operator": "icontains",
                            "type": "event"
                        }
                    ]
                }
            ],
            "funnel_window_interval": 30,
            "funnel_window_interval_unit": "minute"
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", funnel_data)

    if result:
        print(f"✅ Homepage → Contact Funnel created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create Homepage → Contact Funnel")
        return None


def create_feature_interest_heatmap():
    """Create Feature Interest Heatmap - which features get clicked most"""
    print("\n🔥 Creating Feature Interest Heatmap...")

    heatmap_data = {
        "name": "🔥 Homepage Feature Interest Heatmap",
        "description": "Which compliance features are users most interested in?",
        "saved": True,
        "filters": {
            "insight": "TRENDS",
            "events": [
                {
                    "id": "button_click",
                    "name": "button_click",
                    "type": "events",
                    "math": "dau",
                    "properties": [
                        {
                            "key": "button_name",
                            "value": "homepage_feature_link",
                            "operator": "exact",
                            "type": "event"
                        }
                    ]
                }
            ],
            "breakdown_type": "event",
            "breakdown": "feature_name",
            "display": "ActionsBarValue",
            "date_from": "-30d"
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", heatmap_data)

    if result:
        print(f"✅ Feature Interest Heatmap created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create Feature Interest Heatmap")
        return None


def create_homepage_section_flow():
    """Create section-to-section flow visualization"""
    print("\n🔀 Creating Homepage Section Flow...")

    flow_data = {
        "name": "🔀 Homepage Section Navigation Flow",
        "description": "How users navigate through homepage sections",
        "saved": True,
        "filters": {
            "insight": "PATHS",
            "path_type": "custom_event",
            "step_limit": 5,
            "include_event_types": ["custom_event"],
            "paths_hogql_expression": "event",
            "edge_limit": 30,
            "start_point": "Section View",
            "path_groupings": ["homepage_hero", "homepage_features", "homepage_dsb_info", "homepage_cta"],
            "funnel_filter": {
                "funnel_viz_type": "steps",
                "events": [
                    {"id": "Section View", "type": "events", "properties": [{"key": "section", "value": "homepage_", "operator": "icontains"}]}
                ]
            }
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", flow_data)

    if result:
        print(f"✅ Section Flow created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create Section Flow")
        return None


def create_homepage_engagement_score():
    """Create engagement score: scroll depth + time on page"""
    print("\n📊 Creating Homepage Engagement Score...")

    engagement_data = {
        "name": "📊 Homepage Engagement Quality Score",
        "description": "Users who scroll deep + spend time = high engagement",
        "saved": True,
        "filters": {
            "insight": "TRENDS",
            "events": [
                {
                    "id": "$pageview",
                    "name": "High Engagement Users",
                    "type": "events",
                    "math": "dau",
                    "properties": [
                        {
                            "key": "$current_url",
                            "value": ["/", "marsstein.com/", "marsstein.ai/"],
                            "operator": "exact",
                            "type": "event"
                        }
                    ]
                }
            ],
            "formula": "(A * 0.6) + (B * 0.4)",
            "date_from": "-30d",
            "interval": "day"
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", engagement_data)

    if result:
        print(f"✅ Engagement Score created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create Engagement Score")
        return None


def create_cta_performance_comparison():
    """Compare Hero CTA vs Footer CTA performance"""
    print("\n⚡ Creating CTA Performance Comparison...")

    cta_data = {
        "name": "⚡ Homepage CTA Performance: Hero vs Footer",
        "description": "Which CTA placement converts better?",
        "saved": True,
        "filters": {
            "insight": "TRENDS",
            "events": [
                {
                    "id": "button_click",
                    "name": "Hero CTA (Jetzt starten)",
                    "type": "events",
                    "math": "total",
                    "properties": [
                        {
                            "key": "button_name",
                            "value": "homepage_cta_pricing",
                            "operator": "exact",
                            "type": "event"
                        },
                        {
                            "key": "location",
                            "value": "hero",
                            "operator": "exact",
                            "type": "event"
                        }
                    ]
                },
                {
                    "id": "button_click",
                    "name": "Footer CTA (Kostenlos testen)",
                    "type": "events",
                    "math": "total",
                    "properties": [
                        {
                            "key": "button_name",
                            "value": "homepage_cta_pricing",
                            "operator": "exact",
                            "type": "event"
                        },
                        {
                            "key": "location",
                            "value": "footer-cta",
                            "operator": "exact",
                            "type": "event"
                        }
                    ]
                },
                {
                    "id": "button_click",
                    "name": "Demo CTA (Demo anfragen)",
                    "type": "events",
                    "math": "total",
                    "properties": [
                        {
                            "key": "button_name",
                            "value": "homepage_cta_demo",
                            "operator": "exact",
                            "type": "event"
                        }
                    ]
                }
            ],
            "display": "ActionsLineGraph",
            "date_from": "-30d",
            "interval": "day"
        }
    }

    result = api_request(f"/projects/{PROJECT_ID}/insights/", "POST", cta_data)

    if result:
        print(f"✅ CTA Performance Comparison created!")
        print(f"   ID: {result.get('id')}")
        print(f"   Short ID: {result.get('short_id')}")
        print(f"   URL: https://eu.posthog.com/project/{PROJECT_ID}/insights/{result.get('short_id')}")
        return result
    else:
        print("❌ Failed to create CTA Performance Comparison")
        return None


def main():
    print("=" * 80)
    print("🚀 Homepage Tracking Setup - PostHog Insights")
    print("=" * 80)

    insights_created = []

    # Create all insights
    funnel1 = create_homepage_to_pricing_funnel()
    if funnel1:
        insights_created.append(funnel1)

    funnel2 = create_homepage_to_contact_funnel()
    if funnel2:
        insights_created.append(funnel2)

    heatmap = create_feature_interest_heatmap()
    if heatmap:
        insights_created.append(heatmap)

    flow = create_homepage_section_flow()
    if flow:
        insights_created.append(flow)

    cta = create_cta_performance_comparison()
    if cta:
        insights_created.append(cta)

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
    print("📊 What to track:")
    print("=" * 80)
    print("\n1️⃣  Homepage → Pricing Funnel:")
    print("   • View → Scroll 50% → CTA Click → Pricing Visit")
    print("   • Shows: Drop-off at each step")
    print("   • Optimize: CTA placement if low click rate")

    print("\n2️⃣  Homepage → Demo Funnel:")
    print("   • View → Scroll → Demo CTA → Contact Page")
    print("   • Shows: High-intent user behavior")
    print("   • Optimize: Demo CTA visibility")

    print("\n3️⃣  Feature Interest Heatmap:")
    print("   • Which features get clicked most?")
    print("   • DSGVO, ISO 27001, EU AI Act, etc.")
    print("   • Optimize: Prioritize popular features in design")

    print("\n4️⃣  Section Flow:")
    print("   • Hero → Features → DSB Info → CTA")
    print("   • Shows: Most common paths")
    print("   • Optimize: Remove unused sections")

    print("\n5️⃣  CTA Performance:")
    print("   • Hero vs Footer: Which converts better?")
    print("   • Shows: A/B test winner")
    print("   • Optimize: Replicate winning pattern")

    print("\n" + "=" * 80)
    print("🎯 Quick Wins:")
    print("=" * 80)
    print("• If Hero CTA > 3x Footer CTA: Remove footer CTA")
    print("• If Feature X gets 50%+ clicks: Make it more prominent")
    print("• If Scroll < 50%: Content too long, move CTA up")
    print("• If Demo CTA > Pricing CTA: You attract consultative buyers")

    print("\n" + "=" * 80)
    print("📝 Next Steps:")
    print("=" * 80)
    print("1. Wait 24h for first data")
    print("2. Check insights weekly")
    print("3. A/B test based on findings")
    print("4. Add insights to dashboard:")
    print("   → Open each URL above")
    print("   → Click 'Add to dashboard'")
    print("   → Select '📊 Beta Page Analytics' (or create new)")


if __name__ == "__main__":
    main()
