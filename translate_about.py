#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Translation script for About page
"""

import re

translations = {
    # SEO
    "Über uns - Marsstein | Life's too short for regs.": "关于我们 - Marsstein | 生命太短，不应浪费在法规上",
    "Lernen Sie das Marsstein-Team kennen. Wir machen EU-Compliance so einfach wie das Speichern einer Datei – mit KI-gestützter GDPR-, ISO 27001- und AI Act-Unterstützung.": "认识Marsstein团队。我们让欧盟合规像保存文件一样简单——通过AI支持的GDPR、ISO 27001和AI法案解决方案。",
    "Marsstein Team, Compliance Experten, GDPR Automatisierung, EU AI Act, Datenschutz Software": "Marsstein团队, 合规专家, GDPR自动化, 欧盟AI法案, 数据保护软件",

    # Hero section
    "Unser Team": "我们的团队",
    "Die Menschen hinter Marsstein": "Marsstein背后的人",
    "Wir bauen die Zukunft der Compliance": "我们构建合规的未来",

    # Team member roles
    "Gründer & CEO": "创始人兼首席执行官",
    "Chief Growth Officer (CGO)": "首席增长官 (CGO)",
    "Tech Lead": "技术负责人",
    "Chief Technology Officer (CTO)": "首席技术官 (CTO)",
    "KI-Ingenieur": "AI工程师",

    # Team member descriptions - Jayson
    "Jayson verbindet Technik und Regulatorik zu nutzbaren Produkten: schlanke Workflows von Onboarding bis Audit-Trail, priorisiert mit Blick auf Wirkung und Go-to-Market. Mit über zehn Jahren Projekterfahrung in Konzern- und Mittelstandsumfeldern (u. a. ZF Group) sorgt er für Tempo und Umsetzbarkeit; zusätzlich ist er als Datenschutzbeauftragter zertifiziert.": "Jayson将技术和监管结合成可用的产品：从入职到审计追踪的精简工作流程，优先考虑影响和市场推广。凭借在企业和中型企业环境（包括ZF集团）超过十年的项目经验，他确保速度和可实施性；此外，他还是认证的数据保护官。",

    # Team member descriptions - Jonas
    "Jonas macht komplexe Regulierung zu klaren, messbaren Customer Journeys und baut wiederholbare Akquisesysteme über SEO, Content, Outbound und Performance. Er verantwortet zugleich die Markenführung – Positionierung, Narrative, Designleitplanken und Kampagnen – für ein konsistentes Marsstein-Erlebnis entlang des gesamten Funnels.": "Jonas将复杂的监管转化为清晰、可衡量的客户旅程，并通过SEO、内容、外展和绩效构建可重复的获客系统。他同时负责品牌管理——定位、叙事、设计准则和营销活动——为整个漏斗提供一致的Marsstein体验。",

    # Team member descriptions - Javier
    "Javier führt das Engineering bei Marsstein AI und übersetzt Anforderungen aus Produkt, Recht und Sales in sichere, skalierbare, audit-fähige Software. Er setzt klare Architekturstandards (TypeScript/React/Node), etabliert CI/CD, Tests und Security-by-Design – damit das Team von 0→1→Scale verlässlich liefert.": "Javier领导Marsstein AI的工程团队，将产品、法律和销售需求转化为安全、可扩展、可审计的软件。他设定清晰的架构标准（TypeScript/React/Node），建立CI/CD、测试和安全设计——确保团队从0到1再到规模化可靠交付。",

    # Team member descriptions - Manuel
    "Manuel skaliert die Marsstein-Plattform mit Fokus auf Robustheit und Geschwindigkeit. Als Gründer von Implyt, mit Stationen bei Porsche, Ascon und Steinbeis, etabliert er DevOps/SRE-Praktiken (CI/CD, Automatisierung, Observability) und KI-gestützte Systeme, die Entwicklung und Betrieb spürbar beschleunigen.": "Manuel专注于稳健性和速度，扩展Marsstein平台。作为Implyt的创始人，曾在保时捷、Ascon和Steinbeis工作，他建立了DevOps/SRE实践（CI/CD、自动化、可观测性）和AI驱动的系统，显著加速开发和运营。",

    # Team member descriptions - Niklas
    "Niklas überführt LLM-Prototypen in produktionsreife Features: Automatisierungen, Evaluationsframeworks und saubere Metriken. Mit Background in Automotive-Mechatronik und Vertiefung in Robotik/KI/Raumfahrt an der HTWG Konstanz schlägt er die Brücke zwischen Forschung und skalierbaren Services.": "Niklas将LLM原型转化为生产就绪的功能：自动化、评估框架和清晰的指标。凭借汽车机电一体化背景和在康斯坦茨应用科学大学的机器人/AI/航天专业深造，他在研究和可扩展服务之间架起桥梁。",

    # Common UI elements
    "Kontakt aufnehmen": "联系我们",
    "E-Mail senden": "发送邮件",
    "LinkedIn Profil": "LinkedIn档案",
    "Zum Team gehören": "加入团队",
    "Karriere": "职业机会",

    # Values/Mission section (if exists)
    "Unsere Werte": "我们的价值观",
    "Unsere Mission": "我们的使命",
    "Unsere Vision": "我们的愿景",
    "Was uns antreibt": "我们的动力",
    "Warum Marsstein": "为什么选择Marsstein",

    # Stats/Numbers
    "Jahre Erfahrung": "年经验",
    "Team-Mitglieder": "团队成员",
    "Zufriedene Kunden": "满意客户",
    "Länder": "国家",

    # Footer-like content
    "Mehr über uns": "了解更多",
    "Schreib uns": "给我们写信",
    "Folge uns": "关注我们",

    # Mission section
    "Wir bauen die Zukunft der Compliance": "我们构建合规的未来",
    "Komplexität raus, Klarheit rein": "化繁为简，清晰明了",
    "Europaweite Regulierungen (GDPR, AI Act, ISO 27001) sind wichtig – aber unnötig kompliziert. Wir übersetzen sie in verständliche Workflows.": "全欧洲的法规（GDPR、AI法案、ISO 27001）很重要——但不必要地复杂。我们将它们转化为可理解的工作流程。",
    "SMBs zuerst": "中小企业优先",
    "Mittelständische Unternehmen tragen den größten Aufwand bei knappsten Ressourcen. Deshalb bauen wir für euch – nicht für Konzerne.": "中型企业承担着最大的工作量，却拥有最少的资源。因此我们为你们而建——不是为大企业。",
    "Von Wochen zu Tagen": "从数周到数天",
    "Automatisierte Dokumente, Kontrollen & Audit-Vorbereitung – mit Expert·innen im Loop für maximale Qualität.": "自动化文档、控制和审计准备——专家参与循环，确保最高质量。",

    # What We Do section
    "Was wir konkret": "我们具体",
    "tun": "做什么",
    "In 30 Sekunden erklärt – so funktioniert Marsstein": "30秒解释——Marsstein如何工作",
    "Dokument-Generator": "文档生成器",
    "Policies, DPIA, TOM, SCCs – strukturiert, prüfbar und rechtssicher generiert.": "政策、DPIA、TOM、SCC——结构化、可审查且合法地生成。",
    "Automatisiert": "自动化",
    "Kontrollen & Tasks": "控制与任务",
    "Maßnahmen planen, zuweisen, verfolgen – mit lückenloser Dokumentation.": "规划、分配、跟踪措施——完整记录，无遗漏。",
    "Nachverfolgbar": "可追溯",
    "Audit-Vorbereitung": "审计准备",
    "Evidenzen sammeln, Prüfschritte leiten – Export für Auditor·innen inklusive.": "收集证据，指导审核步骤——包含审计员导出功能。",
    "Audit-Ready": "审计就绪",
    "Multi-Framework": "多框架支持",
    "GDPR, AI-Act & ISO 27001 – ein Konto, ein Workflow, alle Standards.": "GDPR、AI法案和ISO 27001——一个账户，一个工作流程，所有标准。",
    "All-in-One": "一体化",

    # Team section
    "Das": "Marsstein背后的",
    "Team": "团队",
    "hinter Marsstein": "",
    "Fünf Gründer mit über 50 Jahren kombinierter Erfahrung aus Deep-Tech, Compliance und Enterprise-Growth": "五位创始人，结合超过50年的深度技术、合规和企业增长经验",
    "Gründer": "创始人",
    "Remote-Ready": "远程就绪",
    "Leidenschaft": "热情",
    "Das Marsstein-Team verbindet": "Marsstein团队将",
    "Produkt, Engineering, KI und Growth": "产品、工程、AI和增长",
    "zu einer klaren Mission": "结合为一个清晰的使命",
    "Regulierung wird zu nutzbarer Software — sicher, audit-fähig und skalierbar.": "将法规转化为可用的软件——安全、可审计、可扩展。",

    # Testimonials
    "Stimmen unserer": "我们",
    "Kund:innen": "客户",
    "€80.000 für GDPR-Beratung – langsam und schmerzhaft. Mit Marsstein schaffen wir es in 30 Tagen für €3.600.": "8万欧元的GDPR咨询——缓慢而痛苦。使用Marsstein，我们在30天内以3600欧元完成。",
    "CEO": "首席执行官",
    "Die KI-Erklärungen sind klarer als Juristen-Texte. Spart uns jede Woche 10+ Stunden.": "AI解释比律师文本更清晰。每周为我们节省10+小时。",
    "Compliance Officer": "合规官",

    # Jobs/CTA section
    "Arbeiten bei Marsstein": "在Marsstein工作",
    "Wir verbinden Impact (gesellschaftlich relevante Compliance) mit klarem Produktfokus.": "我们将影响力（社会相关的合规）与清晰的产品焦点相结合。",
    "Remote-first in Europa": "欧洲优先远程",
    "Regelmäßige Offsites für direkten Austausch": "定期线下聚会，直接交流",
    "Saubere Code-Basen": "干净的代码库",
    "Kleine Teams mit viel Ownership": "小团队，高自主权",
    "Meaningful Impact": "有意义的影响",
    "Compliance für Millionen vereinfachen": "为数百万人简化合规",
    "Offene Rollen ansehen": "查看职位空缺",
    "Initiativ bewerben": "主动申请",
}

def translate_file(input_file, output_file):
    """
    Read the TypeScript file, translate German strings, and write output
    """
    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update canonical URL
    content = content.replace(
        'href="https://marsstein.ai/ueber-uns"',
        'href="https://marsstein.ai/zh/guanyu-women"'
    )

    # Sort translations by length (longest first) to avoid partial matches
    sorted_translations = sorted(translations.items(), key=lambda x: len(x[0]), reverse=True)

    print(f"Applying {len(sorted_translations)} translations...")

    for german, chinese in sorted_translations:
        # Escape special regex characters
        escaped_german = re.escape(german)

        # Replace in single quotes
        content = re.sub(
            rf"'({escaped_german})'",
            f"'{chinese}'",
            content
        )

        # Replace in double quotes
        content = re.sub(
            rf'"({escaped_german})"',
            f'"{chinese}"',
            content
        )

        # Replace in template literals
        content = re.sub(
            rf'`({escaped_german})`',
            f'`{chinese}`',
            content
        )

        # Replace JSX text content
        content = re.sub(
            rf'>\s*{escaped_german}\s*<',
            f'>{chinese}<',
            content
        )

    print(f"Writing translated content to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print("✅ Translation complete!")
    print(f"📝 Translated {len(translations)} terms")

if __name__ == "__main__":
    input_file = "/Users/jonaskruger/Mars25/Website/src/pages/zh/About.tsx"
    output_file = "/Users/jonaskruger/Mars25/Website/src/pages/zh/About.tsx"

    translate_file(input_file, output_file)
    print(f"\n🎉 Chinese About page ready at: {output_file}")
