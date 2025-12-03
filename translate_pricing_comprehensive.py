#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive translation script for Pricing page
Translates ALL German text including JSX content, not just quoted strings
"""

import re

# Complete translation dictionary with all German phrases
translations = {
    # Component name
    "const Preise": "const Pricing",
    "Preise: React.FC": "Pricing: React.FC",

    # SEO/Meta
    "Preise - MARSSTEIN DSGVO-Compliance Pakete": "价格 - MARSSTEIN GDPR合规套餐",
    "Transparente Preise für DSGVO-Compliance Software. Von €69 bis €449 monatlich. Mit externem Datenschutzbeauftragten und KI-Support.": "透明的GDPR合规软件定价。月付€69至€449。配备外部数据保护官和AI支持。",
    "MARSSTEIN DSGVO-Compliance Software": "MARSSTEIN GDPR合规软件",
    "KI-gestützte DSGVO-Compliance Software mit externem Datenschutzbeauftragten": "基于AI的GDPR合规软件，配备外部数据保护官",

    # Package names
    "STARTER": "入门版",
    "PROFESSIONAL": "专业版",
    "ENTERPRISE": "企业版",

    # Common UI text
    "monatlich kündbar": "可按月取消",
    "Monatlich kündbar": "可按月取消",
    "keine versteckten Kosten": "无隐藏费用",
    "Transparente Preise": "透明定价",
    "DSGVO-Compliance": "GDPR合规",
    "Pakete": "套餐",
    "Highlights": "亮点",
    "Monat": "月",
    "Jahr": "年",

    # Billing cycle
    "Monatlich": "按月",
    "Jährlich": "按年",
    "monatlich": "按月",
    "jährlich": "按年",

    # Buttons and CTAs
    "Paket wählen": "选择套餐",
    "Jetzt DSB beauftragen": "立即委托数据保护官",
    "Jetzt starten": "立即开始",
    "Kontakt aufnehmen": "联系我们",
    "Upload Freistellungsbescheid": "上传免税证明",
    "Sofort starten": "立即开始",

    # Popular badge
    "BELIEBT": "热门",

    # Feature categories
    "PFLICHTDOKUMENTE": "必需文档",
    "DATENSCHUTZBEAUFTRAGTER": "数据保护官",
    "MARSSTEIN AUDIT & SIEGEL": "MARSSTEIN 审计与认证",
    "MARS-AI COMPLIANCE ASSISTANT": "MARS-AI 合规助手",
    "COMPLIANCE-MONITORING": "合规监控",
    "SECURITY & MONITORING": "安全与监控",
    "SUPPORT": "支持服务",

    # Feature details
    "Alle GDPR必需文档": "所有GDPR必需文档",
    "所有GDPR必需文档": "所有GDPR必需文档",
    "Externer DSB": "外部数据保护官",
    "Externer Datenschutzbeauftragter": "外部数据保护官",
    "DSB-Haftungsübernahme": "数据保护官责任保险",
    "DSB-Haftung": "数据保护官责任险",
    "DSB-Zertifikat": "数据保护官证书",
    "DSB-Hotline": "数据保护官热线",
    "DPO-Hotline": "DPO热线",
    "Geschäftszeiten": "工作时间",
    "24/7": "24/7全天候",

    # AI features
    "KI-Anfragen/Monat": "AI查询/月",
    "KI-Anfragen pro Monat": "每月AI查询次数",
    "Unbegrenzt": "无限制",
    "无限AI查询": "无限AI查询",
    "Allgemeine DSGVO-Informationen": "通用GDPR信息",
    "Kennt Ihre Unternehmensdaten": "了解您的企业数据",
    "Individuelle Compliance-Analyse": "个性化合规分析",
    "Dokumenten-Prüfassistent": "文档审查助手",
    "Basis": "基础版",
    "Erweitert": "增强版",
    "Premium": "高级版",

    # Documents
    "Verarbeitungsverzeichnis (Art. 30)": "处理活动记录 (第30条)",
    "TOMs (Technische & Org. Maßnahmen)": "技术与组织措施 (TOMs)",
    "Löschkonzept": "删除方案",
    "Datenschutz-Handbuch": "数据保护手册",
    "Datenschutzerklärung Website": "网站隐私政策",
    "Datenschutzerklärung App": "应用隐私政策",
    "Cookie-Banner & Policy": "Cookie横幅与政策",
    "AVV-Verträge": "数据处理协议 (DPA)",
    "Datenpannen-Management": "数据泄露管理",
    "Mitarbeiter-Verpflichtungen": "员工承诺书",
    "Betroffenenrechte-Prozesse": "数据主体权利流程",
    "DSGVO-konforme E-Mail-Signaturen": "符合GDPR的电子邮件签名",

    # Audit & Certificate
    "Audit-Typ": "审计类型",
    "Self-Assessment": "自我评估",
    "System-Audit": "系统审计",
    "Voll-Audit": "全面审计",
    "Audit-Frequenz": "审计频率",
    "Jährlich": "每年",
    "Halbjährlich": "每半年",
    "Quartalsweise": "每季度",
    "DSGVO-Siegel": "GDPR认证徽章",
    "✅ VERIFIED": "✅ 已验证",
    "✅ CERTIFIED": "✅ 已认证",
    "✅ EXCELLENCE": "✅ 卓越认证",
    "Eignung für Ausschreibungen": "适用招标范围",
    "Kleinaufträge": "小型项目",
    "Standard-Aufträge": "标准项目",
    "Alle inkl. kritisch": "所有项目（含关键项目）",

    # Compliance Monitoring
    "Live Compliance-Score": "实时合规评分",
    "Aufgaben-Tracker": "任务追踪器",
    "Fristenmanagement": "期限管理",
    "Gesetzesänderungs-Alerts": "法规变更提醒",
    "Automatische Policy-Updates": "自动政策更新",
    "Compliance-Reports": "合规报告",
    "Monatlich": "每月",
    "Wöchentlich": "每周",
    "Täglich": "每日",
    "Export-Formate": "导出格式",

    # Security features
    "Penetrationstest": "渗透测试",
    "1x/Jahr": "每年1次",
    "2x/Jahr": "每年2次",
    "SSL/TLS-Überwachung": "SSL/TLS监控",
    "Phishing-Simulation": "钓鱼模拟",
    "Passwort-Leak-Check": "密码泄露检查",
    "Email Breach Monitor": "邮件泄露监控",
    "E-Mails": "邮箱",
    "Dark Web Monitoring": "暗网监控",
    "Firmendaten": "企业数据",
    "+ Executive Protection": "+ 高管保护",
    "Vulnerability Scan": "漏洞扫描",
    "Cookie-Scanner": "Cookie扫描器",

    # Support
    "电子邮件支持": "电子邮件支持",
    "E-Mail Support": "电子邮件支持",
    "Telefon Support": "电话支持",
    "Reaktionszeit": "响应时间",
    "Priority Support": "优先支持",
    "Dedizierter Success Manager": "专属成功经理",
    "Onboarding-Session": "入职培训",
    "Self-Service": "自助服务",
    "2h Assisted": "2小时协助",
    "8h Full-Service": "8小时全程服务",

    # Special packages header
    "NEU: MARSSTEIN SPECIALS 2025": "新推出：MARSSTEIN 特别套餐 2025",
    "MARSSTEIN": "MARSSTEIN",
    "GEMEINNÜTZIG-SPECIAL": "公益组织特惠",
    "2025": "2025",

    # Special package content
    "Gemeinsam Gutes tun - Vollschutz zum Selbstkostenpreis": "共同行善 - 成本价全面保护",
    "GEMEINNÜTZIG-STARTER": "公益组织入门版",
    "Das komplette STARTER-Paket für Vereine & NGOs": "完整的入门套餐，专为协会与非政府组织设计",
    "✓ 78% Vereinsrabatt dauerhaft": "✓ 永久享受78%协会折扣",
    "✓ Keine versteckten Kosten": "✓ 无隐藏费用",

    # Promise section
    "🤝 UNSER VERSPRECHEN:": "🤝 我们的承诺：",
    "Wer sich für andere einsetzt, verdient unsere volle Unterstützung. Deshalb erhalten alle gemeinnützigen Organisationen unseren kompletten STARTER-Schutz zum Selbstkostenpreis.": "为他人奉献的组织值得我们全力支持。因此，所有公益组织均可享受成本价的完整入门版保护。",

    # What you get sections
    "WAS IHR VEREIN BEKOMMT:": "您的组织将获得：",
    "KOMPLETTER DSGVO-SCHUTZ": "完整的GDPR保护",
    "Alle DSGVO-Pflichtdokumente für Vereine": "协会所需的所有GDPR文档",
    "2 Datenschutzerklärungen für Websites": "2份网站隐私政策",
    "Mitgliederverwaltung DSGVO-konform": "符合GDPR的会员管理",
    "Einwilligungen für Veranstaltungsfotos": "活动照片授权书",
    "Spendendaten-Management Vorlagen": "捐赠数据管理模板",
    "Newsletter-Einwilligungen rechtssicher": "合法的新闻通讯授权",
    "Ehrenamtlichen-Vereinbarungen": "志愿者协议",

    "MARS-AI ASSISTENT": "MARS-AI 助手",
    "100 KI-Anfragen/Monat": "每月100次AI查询",
    "Speziell geschult auf Vereinsthemen": "专门针对协会主题培训",
    "Verständliche Antworten ohne Juristendeutsch": "通俗易懂，无法律术语",

    "MARSSTEIN-SIEGEL": "MARSSTEIN认证",
    '"DSGVO-VERIFIED" Siegel für Vertrauen': '"GDPR认证"徽章增强信任',
    "Jährliches Audit inklusive": "包含年度审计",
    "Wichtig für Förderanträge & Spender": "对资助申请和捐赠者很重要",

    # Qualification
    "EINFACHE QUALIFIKATION:": "简单资格认证：",
    "✓ Eingetragener e.V. oder anerkannte NGO": "✓ 注册协会或认可的非政府组织",
    "✓ Gültiger Freistellungsbescheid": "✓ 有效的免税证明",
    "✓ 24h Schnell-Verifikation": "✓ 24小时快速验证",

    # Newsletter
    "COMPLIANCE NEWSLETTER": "合规通讯",
    "Wöchentliche Insights": "每周洞察",
    "Sofort-Alerts bei kritischen Änderungen": "关键变更即时提醒",
    "Experten-Guides": "专家指南",
    "Kostenlos": "免费",
    "DSGVO-konform": "符合GDPR",
    "Jederzeit abmeldbar": "随时取消订阅",

    # Footer sections
    "Compliance made simple": "合规变简单",
    "REGULIERUNGEN": "法规",
    "EU AI Act": "欧盟AI法案",
    "DSGVO": "GDPR",
    "NIS2 Compliance": "NIS2合规",

    "ZERTIFIZIERUNGEN": "认证",
    "ISO 27001": "ISO 27001",
    "SOC2": "SOC2",
    "TISAX": "TISAX",

    "TOOLS & SERVICES": "工具与服务",
    "Alle Tools": "所有工具",
    "DSGVO Test": "GDPR测试",
    "Cookie Management": "Cookie管理",
    "Assessment Center": "评估中心",

    "WISSEN & GUIDES": "知识与指南",
    "DSGVO Leitfäden": "GDPR指南",
    "KI Compliance": "AI合规",
    "Krisenmanagement": "危机管理",

    "KONTAKT & SUPPORT": "联系与支持",
    "AGB": "条款",
    "Impressum": "法律信息",
    "Datenschutz": "隐私保护",

    # Long phrases
    "Wählen Sie das passende Paket für Ihre": "选择适合您的",
    "Detaillierte Feature-Übersicht": "详细功能对比",
    "Features": "功能",

    # Savings text
    "Sie sparen": "您可节省",
    "pro Jahr": "每年",
    "20% Rabatt": "8折优惠",

    # Table headers
    "Accounts": "账户",
    "Unlimited + Monitoring": "无限制 + 监控",

    # Money back guarantee
    "30 Tage Geld-zurück-Garantie": "30天退款保证",
}

def translate_content(content):
    """
    Apply all translations to the content
    Handles both quoted strings and JSX text content
    """
    # Sort by length (longest first) to avoid partial matches
    sorted_translations = sorted(translations.items(), key=lambda x: len(x[0]), reverse=True)

    for german, chinese in sorted_translations:
        # Escape special regex characters
        escaped_german = re.escape(german)

        # Replace in various contexts:
        # 1. In single quotes
        content = re.sub(rf"'({escaped_german})'", f"'{chinese}'", content)
        # 2. In double quotes
        content = re.sub(rf'"({escaped_german})"', f'"{chinese}"', content)
        # 3. In template literals
        content = re.sub(rf'`({escaped_german})`', f'`{chinese}`', content)
        # 4. JSX text between tags (with optional whitespace)
        content = re.sub(rf'>\s*{escaped_german}\s*<', f'>{chinese}<', content)
        # 5. After {' and before '}
        content = re.sub(rf"{{\s*'{escaped_german}'\s*}}", f"{{'{chinese}'}}", content)

    return content

def main():
    input_file = "/Users/jonaskruger/Mars25/Website/src/pages/Preise.tsx"
    output_file = "/Users/jonaskruger/Mars25/Website/src/pages/zh/Pricing.tsx"

    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update imports
    content = content.replace(
        "import SEOHead from '../components/SEOHead';",
        "import { Helmet } from 'react-helmet-async';"
    )

    # Replace SEOHead with Helmet tags
    content = content.replace("<SEOHead", "<Helmet")
    content = content.replace("</SEOHead>", "</Helmet>")

    # Update canonical URL
    content = content.replace('canonical="/preise"', 'canonical="/zh/jiage"')

    # Apply all translations
    print(f"Translating content ({len(translations)} translation rules)...")
    content = translate_content(content)

    # Update component export name
    content = content.replace("export default Preise;", "export default Pricing;")

    print(f"Writing to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print("✅ Translation complete!")
    print(f"📝 Applied {len(translations)} translation rules")
    print(f"\n🎉 Chinese Pricing page ready at: {output_file}")

if __name__ == "__main__":
    main()
