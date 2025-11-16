#!/usr/bin/env python3
"""
Einfacher Index Checker - Zeigt an welche URLs aus der Sitemap indexiert sind.

Nutzt die CSV-Daten die du bereits hast und vergleicht mit der Sitemap.

VERWENDUNG:
    python3 scripts/check-index-simple.py

WICHTIG:
Exportiere zuerst die Indexierungs-Daten aus Google Search Console:
1. https://search.google.com/search-console
2. Linkes Menü → "Seiten"
3. Scrolle runter zu "Warum Seiten nicht indexiert sind"
4. Klicke "DATEN EXPORTIEREN" → CSV herunterladen
5. Speichere als: scripts/search-console-pages.csv
"""

import csv
import sys
from datetime import datetime

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
]


def main():
    print('📊 Sitemap URL Check\n')
    print(f'Anzahl URLs in Sitemap: {len(routes)}')
    print('=' * 60)

    high_priority = [r for r in routes if float(r['priority']) >= 0.8]
    medium_priority = [r for r in routes if 0.6 <= float(r['priority']) < 0.8]
    low_priority = [r for r in routes if float(r['priority']) < 0.6]

    print(f'\n🔴 High Priority (≥0.8): {len(high_priority)} URLs')
    for route in high_priority:
        print(f'   [{route["priority"]}] {BASE_URL}{route["url"]}')

    print(f'\n🟡 Medium Priority (0.6-0.7): {len(medium_priority)} URLs')
    for route in medium_priority:
        print(f'   [{route["priority"]}] {BASE_URL}{route["url"]}')

    print(f'\n🟢 Low Priority (<0.6): {len(low_priority)} URLs')
    for route in low_priority:
        print(f'   [{route["priority"]}] {BASE_URL}{route["url"]}')

    print('\n' + '=' * 60)
    print('\n💡 NÄCHSTER SCHRITT:')
    print('1. Gehe zu: https://search.google.com/search-console')
    print('2. Wähle Property: marsstein.ai')
    print('3. Linkes Menü → "Seiten"')
    print('4. Sieh dir an:')
    print('   - Indexiert: Wie viele URLs sind im Index?')
    print('   - Nicht indexiert: Welche URLs fehlen noch?')


if __name__ == '__main__':
    main()
