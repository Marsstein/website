#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Universal component translation script
Translates German text to Chinese inline
"""

import re
import sys

# Comprehensive translation dictionary
translations = {
    # ComplianceJourney specific
    "Das Problem": "问题所在",
    "DSGVO war ein Versprechen, das niemand halten konnte": "GDPR是一个无人能兑现的承诺",
    "Ein Moving Target, das immer schneller wegläuft, als Sie hinterherkommen.": "一个不断加速远离的移动目标，您永远无法追上。",
    "Sie sind gefangen zwischen Angst vor Bußgeldern und der Lähmung durch Bürokratie.": "您被困在对罚款的恐惧和官僚主义的麻痹之间。",
    "Zwischen dem, was sein sollte, und dem, was ist.": "在应该是什么和实际是什么之间。",
    "Das war der wahre Preis der DSGVO. Nicht die Bußgelder - die Lebenszeit.": "这才是GDPR的真正代价。不是罚款——而是生命时间。",
    "Ihre Lebenszeit. Verschwendet an Formulare, die niemand lesen will.": "您的生命时间。浪费在没人想读的表格上。",
    "An Prozesse, die niemand versteht. An eine Bürokratie, die niemand braucht.": "浪费在没人理解的流程上。浪费在没人需要的官僚主义上。",
    "Stunden pro Audit": "审计小时数",
    "Unvollständige Docs": "不完整文档",
    "Maximale Strafe": "最高罚款",

    "Das Fundament": "基础建设",
    "Einmal das Fundament legen": "一次性奠定基础",
    "Ihre Unternehmensdaten eingeben. Darauf baut Marsstein ein ganzes Compliance-Haus.": "输入您的企业数据。Marsstein在此基础上构建完整的合规体系。",
    "Stockwerk für Stockwerk. Dokument für Dokument. Stein auf Stein.": "一层又一层。一个文档接一个文档。稳扎稳打。",
    "Datenschutz ist wichtig. Die Bürokratie drumherum nicht.": "数据保护很重要。周围的官僚主义不重要。",

    "Die Zukunft": "未来展望",
    "Ab jetzt läuft DSGVO wie die Buchhaltung": "从现在开始，GDPR就像会计一样运行",
    "Einfach mit. Niemand denkt mehr daran. Niemand spricht mehr darüber.": "简单运行。没人再想它。没人再谈论它。",
    "Es ist einfach erledigt. Für immer.": "就这样完成了。永远。",
    "Ihre Teams atmen auf. Ihr Unternehmen erinnert sich wieder, warum es existiert.": "您的团队松了一口气。您的公司重新记起它存在的意义。",
    "Der neue Markt? Kein Compliance-Problem. Die KI-Features? Kein Datenschutz-Drama.": "新市场？没有合规问题。AI功能？没有数据保护麻烦。",
    "Nicht für Formulare. Für die Zukunft.": "不是为了表格。是为了未来。",
    "95% Zeitersparnis": "节省95%时间",
    "Null Stress": "零压力",
    "24/7 aktuell": "24/7最新",
    "Automatische Updates": "自动更新",

    # Feature names
    "Echtzeit-Synchronisation": "实时同步",
    "Immer aktuell": "始终最新",
    "Automatische Compliance": "自动合规",
    "Für immer": "永久有效",
    "Kosten-Garantie": "成本保证",
    "Transparent": "透明",
    "Experten-Support": "专家支持",
    "24/7 verfügbar": "24/7可用",

    # Common UI elements
    "Jetzt starten": "立即开始",
    "Mehr erfahren": "了解更多",
    "Kostenlos testen": "免费测试",
    "Zum Pricing": "查看价格",

    # Links and navigation
    "Zurück zur Übersicht": "返回概览",
    "Weiter": "继续",
    "Überspringen": "跳过",
}

def translate_content(content, input_file):
    """Apply translations to content"""

    # Sort by length (longest first) to avoid partial matches
    sorted_translations = sorted(translations.items(), key=lambda x: len(x[0]), reverse=True)

    for german, chinese in sorted_translations:
        # Escape special regex characters
        escaped_german = re.escape(german)

        # Replace in various contexts
        # 1. In single quotes
        content = re.sub(rf"'({escaped_german})'", f"'{chinese}'", content)
        # 2. In double quotes
        content = re.sub(rf'"({escaped_german})"', f'"{chinese}"', content)
        # 3. In template literals
        content = re.sub(rf'`({escaped_german})`', f'`{chinese}`', content)
        # 4. JSX text content (between > and <)
        content = re.sub(rf'>\s*{escaped_german}\s*<', f'>{chinese}<', content)
        # 5. Inside curly braces
        content = re.sub(rf"{{\s*['\"]({escaped_german})['\"]\s*}}", f"{{'{chinese}'}}", content)

    return content

def main():
    if len(sys.argv) < 3:
        print("Usage: python translate_component.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    print(f"Translating content ({len(translations)} translation rules)...")
    content = translate_content(content, input_file)

    print(f"Writing to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✅ Translation complete!")
    print(f"📝 Applied {len(translations)} translation rules")
    print(f"\n🎉 Chinese component ready at: {output_file}")

if __name__ == "__main__":
    main()
