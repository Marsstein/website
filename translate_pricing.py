#!/usr/bin/env python3
"""
Automated translation script for Pricing.tsx
Translates all German strings to Simplified Chinese while preserving code structure
"""

import re
import sys

# Translation dictionary for common terms
translations = {
    # Component and file references
    "Preise": "Pricing",
    "SEOHead": "Helmet",

    # Pricing related
    "monatlich": "每月",
    "jährlich": "每年",
    "monthly": "monthly",  # Keep English for code
    "yearly": "yearly",    # Keep English for code

    # Package names (keep English in code, translate display)
    "STARTER": "入门版",
    "PROFESSIONAL": "专业版",
    "ENTERPRISE": "企业版",

    # Common UI elements
    "Alle DSGVO-Pflichtdokumente": "所有GDPR必需文档",
    "KI-Anfragen/Monat": "AI查询/月",
    "DSGVO-Siegel VERIFIED": "GDPR认证徽章",
    "Externer Datenschutzbeauftragter": "外部数据保护官",
    "DSB-Haftung": "DPO责任保险",
    "API-Integration": "API集成",
    "DSB-Hotline": "DPO热线",
    "Unbegrenzte KI-Anfragen": "无限AI查询",
    "Dedizierter Account Manager": "专属客户经理",

    # Billing
    "pro Monat": "/月",
    "pro Jahr": "/年",
    "Jährliche Zahlung": "年付",
    "Monatliche Zahlung": "月付",
    "Sparen Sie": "节省",
    "im Vergleich zur monatlichen Zahlung": "相比月付",

    # Buttons and CTAs
    "Jetzt starten": "立即开始",
    "Kostenlos testen": "免费试用",
    "Kontakt aufnehmen": "联系我们",
    "Mehr erfahren": "了解更多",
    "Paket auswählen": "选择套餐",

    # Features - Categories
    "Pflichtdokumente": "必需文档",
    "Datenschutzbeauftragter": "数据保护官",
    "KI-Assistenz": "AI助手",
    "Monitoring & Berichte": "监控与报告",
    "Support": "支持",
    "Integrationen": "集成",

    # Common features
    "Inklusive": "包含",
    "Optional": "可选",
    "Auf Anfrage": "按需提供",
    "Individuell": "定制",

    # Support levels
    "E-Mail Support": "电子邮件支持",
    "E-Mail & Chat Support": "电子邮件和聊天支持",
    "24/7 Premium Support": "24/7高级支持",
    "Persönlicher Account Manager": "专属客户经理",

    # FAQ
    "Häufig gestellte Fragen": "常见问题",
    "Was ist in den Paketen enthalten?": "套餐包含什么？",
    "Kann ich jederzeit kündigen?": "我可以随时取消吗？",
    "Gibt es eine kostenlose Testphase?": "有免费试用期吗？",

    # Descriptions
    "Perfekt für": "适合",
    "kleine Unternehmen": "小型企业",
    "mittelständische Unternehmen": "中型企业",
    "große Unternehmen": "大型企业",
    "Startups": "初创公司",

    # Schema.org
    "MARSSTEIN DSGVO-Compliance Software": "MARSSTEIN GDPR合规软件",
    "KI-gestützte DSGVO-Compliance Software mit externem Datenschutzbeauftragten": "基于AI的GDPR合规软件，配备外部数据保护官",

    # Meta tags and headings
    "Transparente Preise für DSGVO-Compliance": "GDPR合规透明定价",
    "Transparente Preise": "透明定价",
    "Datenschutz-Pakete": "数据保护套餐",
    "Preise - MARSSTEIN DSGVO-Compliance Pakete": "价格 - MARSSTEIN GDPR合规套餐",
    "Transparente Preise für DSGVO-Compliance Software. Von €69 bis €449 monatlich. Mit externem Datenschutzbeauftragten und KI-Support.": "透明的GDPR合规软件定价。月付€69至€449。配备外部数据保护官和AI支持。",
    "DSGVO-Compliance": "GDPR合规",
    "Pakete": "套餐",
    "Wählen Sie das passende Paket für Ihre": "选择适合您的",
    "Monatlich kündbar": "可按月取消",
    "keine versteckten Kosten": "无隐藏费用",
}

def translate_file(input_file, output_file):
    """
    Read the TypeScript file, translate German strings, and write output
    """
    print(f"Reading {input_file}...")

    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace import statement
    content = content.replace(
        "import SEOHead from '../components/SEOHead';",
        "import { Helmet } from 'react-helmet-async';"
    )

    # Replace component name
    content = content.replace(
        "const Preise: React.FC = () => {",
        "const Pricing: React.FC = () => {"
    )
    content = content.replace(
        "export default Preise;",
        "export default Pricing;"
    )

    # Apply translations (only in strings, not in code)
    for german, chinese in translations.items():
        # Match strings in quotes, preserving the quotes
        # Single quotes
        content = re.sub(
            rf"'({re.escape(german)})'",
            f"'{chinese}'",
            content
        )
        # Double quotes
        content = re.sub(
            rf'"({re.escape(german)})"',
            f'"{chinese}"',
            content
        )
        # Template literals
        content = re.sub(
            rf'`({re.escape(german)})`',
            f'`{chinese}`',
            content
        )

    # Replace SEOHead component with Helmet
    # This is more complex, so we do a simple replace for now
    content = content.replace(
        "<SEOHead",
        "<Helmet"
    )
    content = content.replace(
        "</SEOHead>",
        "</Helmet>"
    )

    # Update canonical URL to Chinese path
    content = content.replace(
        'canonical="/preise"',
        'canonical="/zh/jiage"'
    )

    print(f"Writing translated content to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print("✅ Translation complete!")
    print(f"📝 Translated {len(translations)} terms")

if __name__ == "__main__":
    input_file = "/Users/jonaskruger/Mars25/Website/src/pages/Preise.tsx"
    output_file = "/Users/jonaskruger/Mars25/Website/src/pages/zh/Pricing.tsx"

    translate_file(input_file, output_file)
    print(f"\n🎉 Chinese Pricing page ready at: {output_file}")
