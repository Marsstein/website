#!/usr/bin/env python3
"""
Alternative: Python Script mit OAuth 2.0 (kein Service Account)

SETUP:
1. pip install google-auth-oauthlib google-auth-httplib2 google-api-python-client
2. Erstelle OAuth Client ID (nicht Service Account!) in Google Cloud Console
3. Lade client_secret.json herunter
4. Beim ersten Run: Browser öffnet sich → Login → Autorisierung
5. Token wird in ~/.credentials/indexing-oauth.json gespeichert

VORTEILE:
- In eurem Repo
- Kein Service Account Key
- OAuth 2.0 wie Apps Script

NACHTEILE:
- Interaktiver Login beim ersten Mal
- Token expires nach ~7 Tagen (muss erneuert werden)
- Komplexer Setup als Apps Script
"""

import os
import json
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
import pickle

SCOPES = ['https://www.googleapis.com/auth/indexing']
BASE_URL = 'https://marsstein.ai'

def get_credentials():
    """OAuth 2.0 Authentifizierung"""
    creds = None
    token_path = os.path.expanduser('~/.credentials/indexing-oauth.pickle')

    if os.path.exists(token_path):
        with open(token_path, 'rb') as token:
            creds = pickle.load(token)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'client_secret.json', SCOPES)
            creds = flow.run_local_server(port=0)

        os.makedirs(os.path.dirname(token_path), exist_ok=True)
        with open(token_path, 'wb') as token:
            pickle.dump(creds, token)

    return creds

def submit_url(url, action='URL_UPDATED'):
    """Submit URL via Indexing API"""
    creds = get_credentials()
    service = build('indexing', 'v3', credentials=creds)

    endpoint = f'https://indexing.googleapis.com/v3/urlNotifications:publish'
    body = {
        'url': url,
        'type': action
    }

    try:
        response = service.urlNotifications().publish(body=body).execute()
        print(f'✅ {url}')
        return response
    except Exception as e:
        print(f'❌ {url}: {e}')
        return None

def main():
    high_priority_urls = [
        '/',
        '/preise',
        '/dsgvo',
        '/eu-ai-act',
        # ... mehr URLs
    ]

    print('🚀 Submitting high-priority URLs...\n')

    for path in high_priority_urls:
        url = BASE_URL + path
        submit_url(url)

if __name__ == '__main__':
    main()
