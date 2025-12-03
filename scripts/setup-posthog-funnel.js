#!/usr/bin/env node

/**
 * PostHog Funnel & Insights Setup Script
 *
 * This script automatically creates:
 * 1. Beta Signup Conversion Funnel
 * 2. Session Recording Filters for Form Abandoners
 * 3. Key Insights & Dashboards
 *
 * Usage: node scripts/setup-posthog-funnel.js
 */

const POSTHOG_API_KEY = 'phc_VD40IEcKzwwg3HK9j3jBoeOB9E7nZBsDS9FF01SEYwY';
const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID || ''; // Get from PostHog settings
const POSTHOG_API_URL = 'https://eu.i.posthog.com/api';

// Helper function to make API requests
async function posthogRequest(endpoint, method = 'GET', body = null) {
  const url = `${POSTHOG_API_URL}${endpoint}`;

  const options = {
    method,
    headers: {
      'Authorization': `Bearer ${POSTHOG_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`PostHog API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// 1. Create Beta Signup Funnel
async function createBetaSignupFunnel() {
  console.log('📊 Creating Beta Signup Funnel...');

  const funnelInsight = {
    name: 'Beta Signup Conversion Funnel',
    description: 'Track user journey from page view to beta signup completion',
    filters: {
      insight: 'FUNNELS',
      events: [
        {
          id: '$pageview',
          name: '$pageview',
          type: 'events',
          order: 0,
          properties: [
            {
              key: '$current_url',
              value: '/beta',
              operator: 'icontains',
              type: 'event'
            }
          ]
        },
        {
          id: 'section_viewed',
          name: 'section_viewed',
          type: 'events',
          order: 1,
          properties: [
            {
              key: 'section',
              value: 'beta_problem_section',
              operator: 'exact',
              type: 'event'
            }
          ]
        },
        {
          id: 'section_viewed',
          name: 'section_viewed',
          type: 'events',
          order: 2,
          properties: [
            {
              key: 'section',
              value: 'beta_workflow_section',
              operator: 'exact',
              type: 'event'
            }
          ]
        },
        {
          id: 'section_viewed',
          name: 'section_viewed',
          type: 'events',
          order: 3,
          properties: [
            {
              key: 'section',
              value: 'beta_signup_section',
              operator: 'exact',
              type: 'event'
            }
          ]
        },
        {
          id: 'form_started',
          name: 'form_started',
          type: 'events',
          order: 4,
          properties: [
            {
              key: 'form_name',
              value: 'beta_signup',
              operator: 'exact',
              type: 'event'
            }
          ]
        },
        {
          id: 'form_submitted',
          name: 'form_submitted',
          type: 'events',
          order: 5,
          properties: [
            {
              key: 'form_name',
              value: 'beta_signup',
              operator: 'exact',
              type: 'event'
            }
          ]
        }
      ],
      funnel_window_interval: 30,
      funnel_window_interval_unit: 'minute',
      breakdown_type: null,
      date_from: '-30d',
      display: 'FunnelViz',
      funnel_viz_type: 'steps',
      exclusions: []
    }
  };

  try {
    const result = await posthogRequest(
      `/projects/${POSTHOG_PROJECT_ID}/insights/`,
      'POST',
      funnelInsight
    );
    console.log('✅ Beta Signup Funnel created:', result.id);
    return result;
  } catch (error) {
    console.error('❌ Failed to create funnel:', error.message);
    throw error;
  }
}

// 2. Create Form Abandoners Cohort
async function createFormAbandonersCohort() {
  console.log('👥 Creating Form Abandoners Cohort...');

  const cohort = {
    name: 'Beta Form Abandoners',
    description: 'Users who started the beta form but did not complete it',
    groups: [
      {
        properties: [
          {
            key: 'form_started',
            type: 'behavioral',
            value: 'performed_event',
            operator: 'equals',
            event_type: 'events',
            time_value: 30,
            time_interval: 'day',
            event_filters: [
              {
                key: 'form_name',
                value: 'beta_signup',
                operator: 'exact',
                type: 'event'
              }
            ]
          },
          {
            key: 'form_submitted',
            type: 'behavioral',
            value: 'did_not_perform_event',
            operator: 'equals',
            event_type: 'events',
            time_value: 30,
            time_interval: 'day',
            event_filters: [
              {
                key: 'form_name',
                value: 'beta_signup',
                operator: 'exact',
                type: 'event'
              }
            ]
          }
        ]
      }
    ]
  };

  try {
    const result = await posthogRequest(
      `/projects/${POSTHOG_PROJECT_ID}/cohorts/`,
      'POST',
      cohort
    );
    console.log('✅ Form Abandoners Cohort created:', result.id);
    return result;
  } catch (error) {
    console.error('❌ Failed to create cohort:', error.message);
    throw error;
  }
}

// 3. Create Session Recording Playlist for Abandoners
async function createSessionRecordingPlaylist(cohortId) {
  console.log('🎥 Creating Session Recording Playlist for Abandoners...');

  const playlist = {
    name: 'Beta Form Abandonment Sessions',
    description: 'Watch sessions of users who abandoned the beta signup form',
    filters: {
      events: [
        {
          id: 'form_abandoned',
          name: 'form_abandoned',
          type: 'events',
          properties: [
            {
              key: 'form_name',
              value: 'beta_signup',
              operator: 'exact',
              type: 'event'
            }
          ]
        }
      ],
      properties: [],
      date_from: '-7d',
      session_recording_duration: {
        type: 'recording',
        key: 'duration',
        value: 10,
        operator: 'gt'
      }
    },
    derived_name: 'Beta Form Abandoners'
  };

  try {
    const result = await posthogRequest(
      `/projects/${POSTHOG_PROJECT_ID}/session_recording_playlists/`,
      'POST',
      playlist
    );
    console.log('✅ Session Recording Playlist created:', result.id);
    return result;
  } catch (error) {
    console.error('❌ Failed to create playlist:', error.message);
    throw error;
  }
}

// 4. Create Key Insights
async function createKeyInsights() {
  console.log('📈 Creating Key Insights...');

  const insights = [
    {
      name: 'Beta Page Scroll Depth Distribution',
      description: 'How far do users scroll on the beta page?',
      filters: {
        insight: 'TRENDS',
        events: [
          {
            id: 'scroll_depth',
            name: 'scroll_depth',
            type: 'events',
            properties: [
              {
                key: 'page',
                value: 'beta',
                operator: 'exact',
                type: 'event'
              }
            ]
          }
        ],
        breakdown: 'depth_percentage',
        breakdown_type: 'event',
        date_from: '-30d',
        display: 'ActionsBar'
      }
    },
    {
      name: 'Beta CTA Click Performance',
      description: 'Which CTAs are most effective?',
      filters: {
        insight: 'TRENDS',
        events: [
          {
            id: 'button_click',
            name: 'button_click',
            type: 'events',
            properties: [
              {
                key: 'button_name',
                value: 'beta_cta',
                operator: 'exact',
                type: 'event'
              }
            ]
          }
        ],
        breakdown: 'location',
        breakdown_type: 'event',
        date_from: '-30d',
        display: 'ActionsBar'
      }
    },
    {
      name: 'Form Field Drop-off Analysis',
      description: 'At which form field do users drop off?',
      filters: {
        insight: 'TRENDS',
        events: [
          {
            id: 'form_field_completed',
            name: 'form_field_completed',
            type: 'events',
            properties: [
              {
                key: 'form_name',
                value: 'beta_signup',
                operator: 'exact',
                type: 'event'
              }
            ]
          }
        ],
        breakdown: 'field',
        breakdown_type: 'event',
        date_from: '-30d',
        display: 'ActionsBar'
      }
    },
    {
      name: 'Beta Conversion Rate',
      description: 'Overall conversion rate from page view to signup',
      filters: {
        insight: 'TRENDS',
        events: [
          {
            id: 'form_submitted',
            name: 'form_submitted',
            type: 'events',
            math: 'dau',
            properties: [
              {
                key: 'form_name',
                value: 'beta_signup',
                operator: 'exact',
                type: 'event'
              }
            ]
          }
        ],
        date_from: '-30d',
        display: 'ActionsLineGraph'
      }
    }
  ];

  const results = [];
  for (const insight of insights) {
    try {
      const result = await posthogRequest(
        `/projects/${POSTHOG_PROJECT_ID}/insights/`,
        'POST',
        insight
      );
      console.log(`✅ Created insight: ${insight.name} (ID: ${result.id})`);
      results.push(result);
    } catch (error) {
      console.error(`❌ Failed to create insight "${insight.name}":`, error.message);
    }
  }

  return results;
}

// 5. Create Main Dashboard
async function createMainDashboard(insightIds) {
  console.log('📊 Creating Beta Analytics Dashboard...');

  const dashboard = {
    name: 'Beta Page Analytics',
    description: 'Complete analytics dashboard for beta signup page performance',
    pinned: true,
    tiles: insightIds.map((insightId, index) => ({
      insight: insightId,
      color: 'blue',
      layouts: {
        sm: { x: 0, y: index * 6, w: 6, h: 5 },
        xs: { x: 0, y: index * 6, w: 1, h: 5 }
      }
    }))
  };

  try {
    const result = await posthogRequest(
      `/projects/${POSTHOG_PROJECT_ID}/dashboards/`,
      'POST',
      dashboard
    );
    console.log('✅ Dashboard created:', result.id);
    console.log(`🔗 View at: https://eu.posthog.com/project/${POSTHOG_PROJECT_ID}/dashboard/${result.id}`);
    return result;
  } catch (error) {
    console.error('❌ Failed to create dashboard:', error.message);
    throw error;
  }
}

// 6. Get Project ID automatically
async function getProjectId() {
  console.log('🔍 Getting Project ID...');

  try {
    const result = await posthogRequest('/projects/');
    if (result.results && result.results.length > 0) {
      const projectId = result.results[0].id;
      console.log(`✅ Found Project ID: ${projectId}`);
      return projectId;
    }
    throw new Error('No projects found');
  } catch (error) {
    console.error('❌ Failed to get project ID:', error.message);
    throw error;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting PostHog Funnel Setup...\n');

  try {
    // Get project ID if not set
    if (!POSTHOG_PROJECT_ID) {
      console.log('⚠️  POSTHOG_PROJECT_ID not set, fetching automatically...');
      const projectId = await getProjectId();
      process.env.POSTHOG_PROJECT_ID = projectId.toString();
    }

    // Step 1: Create Funnel
    const funnel = await createBetaSignupFunnel();
    console.log('\n');

    // Step 2: Create Cohort
    const cohort = await createFormAbandonersCohort();
    console.log('\n');

    // Step 3: Create Session Recording Playlist
    await createSessionRecordingPlaylist(cohort.id);
    console.log('\n');

    // Step 4: Create Insights
    const insights = await createKeyInsights();
    console.log('\n');

    // Step 5: Create Dashboard
    const insightIds = [funnel.id, ...insights.map(i => i.id)];
    await createMainDashboard(insightIds);
    console.log('\n');

    console.log('✅ ========================================');
    console.log('✅ PostHog Setup Complete!');
    console.log('✅ ========================================\n');
    console.log('📊 Created Resources:');
    console.log(`   - Beta Signup Funnel (ID: ${funnel.id})`);
    console.log(`   - Form Abandoners Cohort (ID: ${cohort.id})`);
    console.log(`   - ${insights.length} Key Insights`);
    console.log(`   - Main Analytics Dashboard\n`);
    console.log('🔗 View in PostHog:');
    console.log(`   https://eu.posthog.com/project/${process.env.POSTHOG_PROJECT_ID}/insights\n`);

  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    console.error('\n💡 Manual Setup Instructions:');
    console.error('   1. Go to https://eu.posthog.com/');
    console.error('   2. Navigate to Project Settings > API Keys');
    console.error('   3. Copy your Project ID');
    console.error('   4. Run: POSTHOG_PROJECT_ID=<your-id> node scripts/setup-posthog-funnel.js\n');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  createBetaSignupFunnel,
  createFormAbandonersCohort,
  createSessionRecordingPlaylist,
  createKeyInsights,
  createMainDashboard
};
