#!/usr/bin/env python3
"""
Google Index Checker für marsstein.ai

Prüft alle URLs aus der Sitemap, ob sie im Google Index sind.
Erstellt einen detaillierten CSV-Report.

VERWENDUNG:
    python3 scripts/check-google-index.py

OUTPUT:
    scripts/google-index-status.csv

WICHTIG:
- Verwendet Google Custom Search API (100 Queries/Tag kostenlos)
- Wartet zwischen Requests um Rate Limits zu vermeiden
- Zeigt Progress Bar während des Scans
"""

import requests
import time
import csv
from datetime import datetime
from urllib.parse import quote_plus
import sys

BASE_URL = 'https://marsstein.ai'

routes = [
    { 'url': '/', 'priority': '1.0' },
    { 'url': '/contact', 'priority': '0.8' },
    { 'url': '/preise', 'priority': '0.9' },
    { 'url': '/externer-datenschutzbeauftragter', 'priority': '0.9' },
    { 'url': '/externer-datenschutzbeauftragter-oldenburg', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-hannover', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-bremen', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-duesseldorf', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-hamburg', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-hildesheim', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-stuttgart', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-muenchen', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-nuernberg', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-koeln', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-wedemark', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-osnabrueck', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-lueneburg', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-dresden', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-dortmund', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-nrw', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-braunschweig', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-karlsruhe', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-celle', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-magdeburg', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-frankfurt', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-ulm', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-heidelberg', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-leipzig', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-bremerhaven', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-mannheim', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-wolfsburg', 'priority': '0.7' },
    { 'url': '/externer-datenschutzbeauftragter-bayern', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-niedersachsen', 'priority': '0.8' },
    { 'url': '/externer-datenschutzbeauftragter-muenster', 'priority': '0.7' },
    { 'url': '/features', 'priority': '0.9' },
    { 'url': '/beta', 'priority': '0.8' },
    { 'url': '/ueber-uns', 'priority': '0.8' },
    { 'url': '/dsgvo', 'priority': '0.9' },
    { 'url': '/dsgvo-audit', 'priority': '0.9' },
    { 'url': '/dsgvo-audit/verified/demo-unternehmen', 'priority': '0.5' },
    { 'url': '/dsgvo-audit/certified/demo-mittelstand', 'priority': '0.5' },
    { 'url': '/dsgvo-audit/excellence/demo-enterprise', 'priority': '0.5' },
    { 'url': '/eu-ai-act', 'priority': '0.9' },
    { 'url': '/eu-data-act', 'priority': '0.8' },
    { 'url': '/nis2-compliance', 'priority': '0.8' },
    { 'url': '/hinweisgeberschutzgesetz', 'priority': '0.8' },
    { 'url': '/geldwaeschegesetz', 'priority': '0.8' },
    { 'url': '/dsg-ekd', 'priority': '0.7' },
    { 'url': '/kdg', 'priority': '0.7' },
    { 'url': '/dsgvo-compliance', 'priority': '0.8' },
    { 'url': '/eu-ai-act-compliance', 'priority': '0.8' },
    { 'url': '/iso-27001-compliance', 'priority': '0.8' },
    { 'url': '/iso-27017-compliance', 'priority': '0.7' },
    { 'url': '/iso-27018-compliance', 'priority': '0.7' },
    { 'url': '/soc2-compliance', 'priority': '0.8' },
    { 'url': '/tisax-compliance', 'priority': '0.7' },
    { 'url': '/regulierung/dsgvo', 'priority': '0.8' },
    { 'url': '/regulierung/eu-ai-act', 'priority': '0.8' },
    { 'url': '/regulierung/nis2', 'priority': '0.7' },
    { 'url': '/regulierung/hinweisgeberschutzgesetz', 'priority': '0.7' },
    { 'url': '/regulierung/geldwaeschegesetz', 'priority': '0.7' },
    { 'url': '/zertifizierung/iso-27001', 'priority': '0.8' },
    { 'url': '/zertifizierung/iso-27017', 'priority': '0.7' },
    { 'url': '/zertifizierung/iso-27018', 'priority': '0.7' },
    { 'url': '/zertifizierung/soc2', 'priority': '0.8' },
    { 'url': '/zertifizierung/tisax', 'priority': '0.7' },
    { 'url': '/iso-27001-zertifizierung', 'priority': '0.8' },
    { 'url': '/soc2-zertifizierung', 'priority': '0.8' },
    { 'url': '/iso-27017-zertifizierung', 'priority': '0.7' },
    { 'url': '/iso-27018-zertifizierung', 'priority': '0.7' },
    { 'url': '/tisax-zertifizierung', 'priority': '0.7' },
    { 'url': '/compliance/iso-27001', 'priority': '0.7' },
    { 'url': '/compliance/soc-2', 'priority': '0.7' },
    { 'url': '/compliance/eu-ai-act', 'priority': '0.7' },
    { 'url': '/compliance/nis2', 'priority': '0.6' },
    { 'url': '/compliance/iso-27017', 'priority': '0.6' },
    { 'url': '/compliance/iso-27018', 'priority': '0.6' },
    { 'url': '/compliance/hinweisgeberschutzgesetz', 'priority': '0.6' },
    { 'url': '/compliance/geldwaeschegesetz', 'priority': '0.6' },
    { 'url': '/compliance/tisax', 'priority': '0.6' },
    { 'url': '/compliance/dsgvo', 'priority': '0.7' },
    { 'url': '/compliance/dsg-ekd', 'priority': '0.6' },
    { 'url': '/compliance/kdg', 'priority': '0.6' },
    { 'url': '/dsgvo-china', 'priority': '0.8' },
    { 'url': '/dsgvo-amazon-sellers-china', 'priority': '0.7' },
    { 'url': '/dsgvo-tiktok-shop-china', 'priority': '0.7' },
    { 'url': '/deepseek-dsgvo', 'priority': '0.7' },
    { 'url': '/eu-vertreter-china', 'priority': '0.7' },
    { 'url': '/artikel-15-dsgvo-auskunftsrecht-china', 'priority': '0.6' },
    { 'url': '/joint-venture-china-datenschutz', 'priority': '0.6' },
    { 'url': '/china-investitionen-dsgvo-screening', 'priority': '0.6' },
    { 'url': '/china-scc-vs-eu-scc', 'priority': '0.6' },
    { 'url': '/dsgvo-wechat-alipay-china', 'priority': '0.6' },
    { 'url': '/dsgvo-douyin-china', 'priority': '0.6' },
    { 'url': '/dsgvo-b2b-hersteller-china', 'priority': '0.6' },
    { 'url': '/pipl-gdpr-china', 'priority': '0.7' },
    { 'url': '/assessment-center', 'priority': '0.6' },
    { 'url': '/assessment-center/dsgvo-compliance-checklist', 'priority': '0.5' },
    { 'url': '/assessment-center/datenschutz-readiness-assessment', 'priority': '0.5' },
    { 'url': '/assessment-center/breach-response-checklist', 'priority': '0.5' },
    { 'url': '/assessment-center/cookie-compliance-audit', 'priority': '0.5' },
    { 'url': '/assessment-center/vendor-assessment-template', 'priority': '0.5' },
    { 'url': '/assessment-center/ai-risk-assessment', 'priority': '0.6' },
    { 'url': '/assessment-center/algorithmic-impact-assessment', 'priority': '0.6' },
    { 'url': '/assessment-center/ai-governance-check', 'priority': '0.6' },
    { 'url': '/assessment-center/datenschutz-test', 'priority': '0.5' },
    { 'url': '/assessment-center/dsgvo-kosten-rechner', 'priority': '0.7' },
    { 'url': '/assessment-center/isms-maturity-assessment', 'priority': '0.5' },
    { 'url': '/assessment-center/iso-27001-readiness-check', 'priority': '0.6' },
    { 'url': '/assessment-center/nis2-compliance-check', 'priority': '0.6' },
    { 'url': '/assessment-center/security-controls-audit', 'priority': '0.5' },
    { 'url': '/assessment-center/soc2-readiness-assessment', 'priority': '0.6' },
    { 'url': '/ratgeber/datenschutzbeauftragter-auswahl', 'priority': '0.7' },
    { 'url': '/ratgeber/sicherheitszertifizierung-auswahl', 'priority': '0.7' },
    { 'url': '/ratgeber/dsgvo-software-auswahlkriterien', 'priority': '0.7' },
    { 'url': '/branchen', 'priority': '0.7' },
    { 'url': '/branchen/gesundheitswesen', 'priority': '0.6' },
    { 'url': '/branchen/finanzdienstleister', 'priority': '0.6' },
    { 'url': '/branchen/e-commerce', 'priority': '0.6' },
    { 'url': '/branchen/saas-unternehmen', 'priority': '0.6' },
    { 'url': '/branchen/produktion', 'priority': '0.6' },
    { 'url': '/branchen/automotive', 'priority': '0.6' },
    { 'url': '/branchen/energie', 'priority': '0.6' },
    { 'url': '/branchen/lebensmittel', 'priority': '0.5' },
    { 'url': '/branchen/logistik', 'priority': '0.5' },
    { 'url': '/tools', 'priority': '0.7' },
    { 'url': '/tools/cookie-management', 'priority': '0.6' },
    { 'url': '/tools/whistleblower-system', 'priority': '0.6' },
    { 'url': '/tools/cookie-management-tool', 'priority': '0.6' },
    { 'url': '/tools/whistleblower-system-tool', 'priority': '0.6' },
    { 'url': '/tools/dsgvo-email-template-generator', 'priority': '0.5' },
    { 'url': '/tools/dsgvo-compliance-scorecard', 'priority': '0.5' },
    { 'url': '/tools/compliance-ai-assistant', 'priority': '0.5' },
    { 'url': '/wissen', 'priority': '0.8' },
    { 'url': '/wissen/branchen', 'priority': '0.7' },
    { 'url': '/wissen/china', 'priority': '0.7' },
    { 'url': '/wissen/cybersecurity', 'priority': '0.7' },
    { 'url': '/wissen/dsgvo', 'priority': '0.7' },
    { 'url': '/wissen/ki-datenschutz', 'priority': '0.7' },
    { 'url': '/wissen/krisenmanagement', 'priority': '0.7' },
    { 'url': '/wissen/rechtsprechung', 'priority': '0.7' },
    { 'url': '/wissen/risk-management', 'priority': '0.7' },
    { 'url': '/wissen/zertifizierungen', 'priority': '0.7' },
    { 'url': '/wissen/dsgvo-leitfaeden', 'priority': '0.7' },
    { 'url': '/wissen/kosten', 'priority': '0.7' },
    { 'url': '/wissen/compliance-frameworks', 'priority': '0.6' },
    { 'url': '/wissen/leitfaden/dsgvo-grundlagen', 'priority': '0.6' },
    { 'url': '/wissen/leitfaden/website-dsgvo', 'priority': '0.6' },
    { 'url': '/wissen/leitfaden/dsgvo-30-tage', 'priority': '0.6' },
    { 'url': '/wissen/leitfaden/data-breach-notfall', 'priority': '0.6' },
    { 'url': '/wissen/leitfaden/verarbeitungsverzeichnis', 'priority': '0.6' },
    { 'url': '/wissen/leitfaden/betroffenenrechte', 'priority': '0.6' },
    { 'url': '/wissen/leitfaden/tom-massnahmen', 'priority': '0.6' },
    { 'url': '/wissen/leitfaden/dsfa-durchfuehrung', 'priority': '0.6' },
    { 'url': '/wissen/leitfaden/datenschutzbeauftragter', 'priority': '0.8' },
    { 'url': '/wissen/leitfaden/datenschutzbeauftragter-ausbildung', 'priority': '0.7' },
    { 'url': '/wissen/kosten/dsgvo-compliance-kosten', 'priority': '0.7' },
    { 'url': '/wissen/kosten/externer-datenschutzbeauftragter-kosten', 'priority': '0.7' },
    { 'url': '/wissen/kosten/iso-27001-zertifizierung-kosten', 'priority': '0.7' },
    { 'url': '/wissen/dsgvo-compliance-luecken', 'priority': '0.6' },
    { 'url': '/wissen/interner-dsb-scheitert', 'priority': '0.6' },
    { 'url': '/wissen/dsgvo-software-vs-manuell', 'priority': '0.6' },
    { 'url': '/wissen/dsgvo-vs-bdsg', 'priority': '0.8' },
    { 'url': '/wissen/branchen/automotive-datenschutz', 'priority': '0.6' },
    { 'url': '/wissen/branchen/datenschutz-arztpraxis', 'priority': '0.6' },
    { 'url': '/wissen/branchen/datenschutz-betriebsrat', 'priority': '0.6' },
    { 'url': '/wissen/branchen/datenschutz-homeoffice', 'priority': '0.6' },
    { 'url': '/wissen/branchen/datenschutz-kindergarten', 'priority': '0.6' },
    { 'url': '/wissen/branchen/datenschutz-personalwesen', 'priority': '0.8' },
    { 'url': '/wissen/branchen/datenschutz-pflege', 'priority': '0.6' },
    { 'url': '/wissen/branchen/dsgvo-vereine', 'priority': '0.6' },
    { 'url': '/wissen/branchen/dsgvo-vermieter', 'priority': '0.6' },
    { 'url': '/wissen/branchen/ecommerce-privacy', 'priority': '0.6' },
    { 'url': '/wissen/branchen/edtech-privacy', 'priority': '0.6' },
    { 'url': '/wissen/branchen/fintech-compliance', 'priority': '0.6' },
    { 'url': '/wissen/branchen/gesundheitswesen-dsgvo', 'priority': '0.6' },
    { 'url': '/wissen/branchen/healthcare-ai-compliance', 'priority': '0.6' },
    { 'url': '/wissen/branchen/industrie-40-datenschutz', 'priority': '0.6' },
    { 'url': '/wissen/branchen/insurtech-compliance', 'priority': '0.6' },
    { 'url': '/wissen/branchen/logistics-compliance', 'priority': '0.6' },
    { 'url': '/wissen/branchen/pharma-compliance', 'priority': '0.6' },
    { 'url': '/wissen/branchen/produktion', 'priority': '0.6' },
    { 'url': '/wissen/branchen/proptech-compliance', 'priority': '0.6' },
    { 'url': '/wissen/branchen/saas-privacy-design', 'priority': '0.6' },
    { 'url': '/wissen/branchen/smart-grid-compliance', 'priority': '0.6' },
    { 'url': '/wissen/branchen/travel-compliance', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/algorithmic-impact-assessment', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/automated-decision-making', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/data-minimization', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/explainable-ai', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/federated-learning', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/financial-ai-compliance', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/hr-ai-compliance', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/ki-einwilligungsmanagement', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/model-privacy-attacks', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/privacy-by-design-ai', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/privacy-preserving-ai', 'priority': '0.6' },
    { 'url': '/wissen/ki-datenschutz/risikoklassifizierung', 'priority': '0.6' },
    { 'url': '/wissen/krisenmanagement/business-continuity', 'priority': '0.6' },
    { 'url': '/wissen/krisenmanagement/communication-templates', 'priority': '0.6' },
    { 'url': '/wissen/krisenmanagement/compliance-audit-emergency', 'priority': '0.6' },
    { 'url': '/wissen/krisenmanagement/data-breach-72h', 'priority': '0.6' },
    { 'url': '/wissen/krisenmanagement/gdpr-fine-response', 'priority': '0.6' },
    { 'url': '/wissen/krisenmanagement/media-crisis', 'priority': '0.6' },
    { 'url': '/wissen/krisenmanagement/security-incident', 'priority': '0.6' },
    { 'url': '/wissen/krisenmanagement/vendor-data-breach', 'priority': '0.6' },
    { 'url': '/wissen/rechtsprechung/amazon-luxemburg-2021', 'priority': '0.6' },
    { 'url': '/wissen/rechtsprechung/cookie-law', 'priority': '0.6' },
    { 'url': '/wissen/rechtsprechung/facebook-fanpage', 'priority': '0.6' },
    { 'url': '/wissen/rechtsprechung/google-analytics-austria', 'priority': '0.6' },
    { 'url': '/wissen/rechtsprechung/google-fonts-muenchen', 'priority': '0.6' },
    { 'url': '/wissen/rechtsprechung/meta-irland-2024', 'priority': '0.6' },
    { 'url': '/wissen/rechtsprechung/planet49-cookie', 'priority': '0.6' },
    { 'url': '/wissen/rechtsprechung/schrems-ii', 'priority': '0.6' },
    { 'url': '/wissen/rechtsprechung/whatsapp-irland-2021', 'priority': '0.6' }
]


def check_url_indexed(url):
    """
    Prüft ob eine URL im Google Index ist.

    Verwendet einfachen HTTP Request zu Google Search.
    Parst HTML Response um zu prüfen ob URL gefunden wurde.
    """
    try:
        search_query = f'site:{url}'
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }

        search_url = f'https://www.google.com/search?q={quote_plus(search_query)}'
        response = requests.get(search_url, headers=headers, timeout=10)

        if response.status_code == 200:
            if 'did not match any documents' in response.text or 'ergab keine Ergebnisse' in response.text:
                return False
            if url.replace('https://', '').replace('http://', '') in response.text:
                return True
            return False
        else:
            return None

    except Exception as e:
        print(f'Error checking {url}: {str(e)}', file=sys.stderr)
        return None


def main():
    print('🔍 Google Index Checker für marsstein.ai')
    print(f'📊 Prüfe {len(routes)} URLs...\n')

    results = []
    indexed_count = 0
    not_indexed_count = 0
    error_count = 0

    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    for i, route in enumerate(routes, 1):
        full_url = BASE_URL + route['url']

        print(f'⏳ [{i}/{len(routes)}] Checking: {route["url"]}')

        is_indexed = check_url_indexed(full_url)

        if is_indexed is True:
            status = 'Ja'
            indexed_count += 1
            print(f'   ✅ Indexiert')
        elif is_indexed is False:
            status = 'Nein'
            not_indexed_count += 1
            print(f'   ❌ Nicht indexiert')
        else:
            status = 'Fehler'
            error_count += 1
            print(f'   ⚠️  Fehler beim Prüfen')

        results.append({
            'URL': full_url,
            'Path': route['url'],
            'Priority': route['priority'],
            'Indexiert': status,
            'Letzter Check': timestamp
        })

        time.sleep(2)

    csv_file = 'scripts/google-index-status.csv'
    with open(csv_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['URL', 'Path', 'Priority', 'Indexiert', 'Letzter Check'])
        writer.writeheader()
        writer.writerows(results)

    print('\n\n📊 ZUSAMMENFASSUNG')
    print('=' * 60)
    print(f'✅ Indexiert: {indexed_count}/{len(routes)} ({indexed_count/len(routes)*100:.1f}%)')
    print(f'❌ Nicht indexiert: {not_indexed_count}/{len(routes)} ({not_indexed_count/len(routes)*100:.1f}%)')
    print(f'⚠️  Fehler: {error_count}/{len(routes)}')
    print('=' * 60)
    print(f'\n📄 CSV-Report erstellt: {csv_file}')
    print('\n💡 Tipp: Öffne die CSV-Datei in Excel/Numbers/Google Sheets')
    print('   Filter nach "Indexiert = Nein" um fehlende URLs zu sehen')


if __name__ == '__main__':
    main()
