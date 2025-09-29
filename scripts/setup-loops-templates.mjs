#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOOPS_API_KEY = '79f6346ac2c3c7d564fa0b7280d2cacb';

async function sendTransactionalEmail(transactionalId, email, dataVariables, subject, body) {
  const response = await fetch('https://app.loops.so/api/v1/transactional', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${LOOPS_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      transactionalId,
      email,
      dataVariables
    })
  });

  if (!response.ok) {
    const error = await response.text();
    console.log('Response:', error);
    throw new Error(`Failed to send email: ${error}`);
  }

  return await response.json();
}

async function checkApiKey() {
  console.log('🔑 Checking API key...');
  const response = await fetch('https://app.loops.so/api/v1/api-key', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${LOOPS_API_KEY}`,
    }
  });

  if (!response.ok) {
    throw new Error('Invalid API key!');
  }

  const data = await response.json();
  console.log('✅ API key valid!\n');
  return data;
}

async function setupTemplates() {
  console.log('🚀 Setting up Loops email templates via API...\n');

  // Read HTML templates
  const confirmationHtml = fs.readFileSync(
    path.join(__dirname, '../email-templates/beta-confirmation.html'),
    'utf8'
  );

  const adminNotificationHtml = fs.readFileSync(
    path.join(__dirname, '../email-templates/beta-admin-notification.html'),
    'utf8'
  );

  try {
    await checkApiKey();

    console.log('📝 IMPORTANT: Loops API requires manual template creation first!\n');
    console.log('📋 Manual Setup Instructions:\n');
    console.log('1️⃣  Go to: https://app.loops.so/transactional');
    console.log('2️⃣  Click: "Create transactional email"\n');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧 TEMPLATE 1: Beta Confirmation');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Name:            Beta Registration Confirmation');
    console.log('Transactional ID: beta_confirmation');
    console.log('From name:       Marsstein Team');
    console.log('From email:      noreply@marsstein.ai');
    console.log('Subject:         Willkommen im Marsstein Beta-Programm! 🚀');
    console.log('\n📄 HTML Template Location:');
    console.log('   → email-templates/beta-confirmation.html\n');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧 TEMPLATE 2: Admin Notification');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Name:            Beta Application - Admin Notification');
    console.log('Transactional ID: beta_admin_notification');
    console.log('From name:       Marsstein Beta System');
    console.log('From email:      noreply@marsstein.ai');
    console.log('Subject:         🚀 Neue Beta-Anmeldung: {{company}}');
    console.log('\n📄 HTML Template Location:');
    console.log('   → email-templates/beta-admin-notification.html\n');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🔧 Variables for both templates:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('{{firstName}}');
    console.log('{{lastName}}');
    console.log('{{email}}');
    console.log('{{company}}');
    console.log('{{companySize}}');
    console.log('{{phone}}');
    console.log('{{currentSolution}}');
    console.log('{{challenges}}');
    console.log('{{challengeLevel}}');
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('✅ Once created in Loops, your Beta form will work!');
    console.log('🧪 Test at: http://localhost:8080/beta\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n💡 Check your API key in .env files');
  }
}

setupTemplates();