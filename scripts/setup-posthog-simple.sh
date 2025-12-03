#!/bin/bash

# PostHog Quick Setup Script
#
# This script provides the commands to manually set up PostHog
# because the API requires Personal API Key which is safer to enter manually

echo "🚀 PostHog Beta Analytics Setup Guide"
echo "======================================"
echo ""
echo "📋 Step 1: Get Your Project API Key"
echo "   1. Go to: https://eu.posthog.com/settings/project"
echo "   2. Copy your 'Project API Key'"
echo "   3. Export it: export POSTHOG_API_KEY='your-key-here'"
echo ""

read -p "Have you set POSTHOG_API_KEY? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Please set POSTHOG_API_KEY first"
    exit 1
fi

if [ -z "$POSTHOG_API_KEY" ]; then
    echo "❌ POSTHOG_API_KEY is not set"
    exit 1
fi

echo "✅ API Key found"
echo ""

# Get Project ID
echo "📋 Step 2: Getting Project ID..."
PROJECT_RESPONSE=$(curl -s -X GET \
  https://eu.i.posthog.com/api/projects/ \
  -H "Authorization: Bearer $POSTHOG_API_KEY" \
  -H "Content-Type: application/json")

PROJECT_ID=$(echo $PROJECT_RESPONSE | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)

if [ -z "$PROJECT_ID" ]; then
    echo "❌ Could not get Project ID"
    echo "Response: $PROJECT_RESPONSE"
    exit 1
fi

echo "✅ Project ID: $PROJECT_ID"
echo ""

# Create Beta Signup Funnel
echo "📊 Step 3: Creating Beta Signup Funnel..."
FUNNEL_RESPONSE=$(curl -s -X POST \
  "https://eu.i.posthog.com/api/projects/$PROJECT_ID/insights/" \
  -H "Authorization: Bearer $POSTHOG_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "🎯 Beta Signup Conversion Funnel",
    "description": "Track user journey from page view to beta signup completion",
    "filters": {
      "insight": "FUNNELS",
      "events": [
        {
          "id": "$pageview",
          "name": "$pageview",
          "type": "events",
          "order": 0,
          "properties": [{
            "key": "$current_url",
            "value": "/beta",
            "operator": "icontains",
            "type": "event"
          }]
        },
        {
          "id": "section_viewed",
          "name": "section_viewed",
          "type": "events",
          "order": 1,
          "properties": [{
            "key": "section",
            "value": "beta_problem_section",
            "operator": "exact",
            "type": "event"
          }]
        },
        {
          "id": "section_viewed",
          "name": "section_viewed",
          "type": "events",
          "order": 2,
          "properties": [{
            "key": "section",
            "value": "beta_signup_section",
            "operator": "exact",
            "type": "event"
          }]
        },
        {
          "id": "form_started",
          "name": "form_started",
          "type": "events",
          "order": 3,
          "properties": [{
            "key": "form_name",
            "value": "beta_signup",
            "operator": "exact",
            "type": "event"
          }]
        },
        {
          "id": "form_submitted",
          "name": "form_submitted",
          "type": "events",
          "order": 4,
          "properties": [{
            "key": "form_name",
            "value": "beta_signup",
            "operator": "exact",
            "type": "event"
          }]
        }
      ],
      "funnel_window_interval": 30,
      "funnel_window_interval_unit": "minute",
      "date_from": "-30d",
      "funnel_viz_type": "steps"
    }
  }')

FUNNEL_ID=$(echo $FUNNEL_RESPONSE | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)

if [ -z "$FUNNEL_ID" ]; then
    echo "❌ Could not create funnel"
    echo "Response: $FUNNEL_RESPONSE"
else
    echo "✅ Funnel created (ID: $FUNNEL_ID)"
    echo "   View at: https://eu.posthog.com/project/$PROJECT_ID/insights/$FUNNEL_ID"
fi

echo ""
echo "✅ ========================================"
echo "✅ PostHog Setup Complete!"
echo "✅ ========================================"
echo ""
echo "🔗 Next Steps:"
echo "   1. View your funnel: https://eu.posthog.com/project/$PROJECT_ID/insights"
echo "   2. Enable Session Recordings: https://eu.posthog.com/project/$PROJECT_ID/settings/session-recordings"
echo "   3. Create Cohorts: https://eu.posthog.com/project/$PROJECT_ID/cohorts"
echo ""
echo "📊 To see your analytics:"
echo "   - Visit /beta in your browser"
echo "   - Interact with the page (scroll, click CTAs, fill form)"
echo "   - Events will appear in PostHog within 1-2 minutes"
echo ""
