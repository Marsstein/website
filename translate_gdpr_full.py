#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('src/pages/zh/Gdpr.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Comprehensive GDPR translation dictionary
translations = {
    # Meta and titles
    '"DSGVO Wissen - Umfassendes Kompendium"': '"GDPR知识 - 综合指南"',
    '"Umfassendes DSGVO-Wissen: Grundlagen, Betroffenenrechte, Verarbeitungsverzeichnis, TOMs, internationale Datentransfers. Praxisnah erklärt."': '"全面的GDPR知识：基础、数据主体权利、处理记录、技术措施、国际数据传输。实用解释。"',
    '"https://marsstein.ai/wissen/dsgvo"': '"https://marsstein.ai/zh/gdpr"',
    'title="DSGVO Wissen – Kompendium & Praxis-Guide"': 'title="GDPR知识 – 综合指南与实用手册"',
    'description="DSGVO-Wissen kompakt: Grundlagen, Betroffenenrechte, Verarbeitungsverzeichnis, TOMs. ✓ Praxisnahe Guides ✓ Vorlagen ✓ Aktuelle Rechtsprechung. Jetzt lernen!"': 'description="全面的GDPR知识：基础、数据主体权利、处理记录、技术措施。✓ 实用指南 ✓ 模板 ✓ 最新判例。立即学习！"',
    'canonical="/wissen/dsgvo"': 'canonical="/zh/gdpr"',
    'keywords="DSGVO Wissen, GDPR Guide, Datenschutz Kompendium, DSGVO Grundlagen, Betroffenenrechte"': 'keywords="GDPR知识, GDPR指南, 数据保护综合, GDPR基础, 数据主体权利"',

    # Main headings
    'DSGVO Wissenszentrum': 'GDPR知识中心',
    'DSGVO-Wissen kompakt': 'GDPR知识精要',
    'Von Grundlagen über Betroffenenrechte bis zu komplexen Themen – ': '从基础知识到数据主体权利再到复杂主题——',
    'alles was Sie zur DSGVO wissen müssen': '您需要了解的关于GDPR的一切',

    # Topic titles
    "'DSGVO Grundlagen'": "'GDPR基础'",
    "'Betroffenenrechte'": "'数据主体权利'",
    "'Dokumentation'": "'文档记录'",
    "'Technische Maßnahmen'": "'技术措施'",
    "'Internationale Aspekte'": "'国际方面'",

    # Article titles - Grundlagen
    "'Was ist die DSGVO?'": "'什么是GDPR？'",
    "'Einführung in die Datenschutz-Grundverordnung und ihre Ziele'": "'欧盟通用数据保护条例及其目标简介'",
    "'Die 7 Grundsätze der DSGVO'": "'GDPR的7项原则'",
    "'Rechtmäßigkeit, Transparenz, Zweckbindung und mehr verständlich erklärt'": "'合法性、透明度、目的限制等原则的清晰解释'",
    "'Rechtsgrundlagen der Verarbeitung'": "'处理的法律依据'",
    "'Art. 6 DSGVO: Einwilligung, Vertrag, berechtigtes Interesse im Detail'": "'GDPR第6条：同意、合同、合法利益详解'",
    "'Verantwortlichkeiten nach DSGVO'": "'GDPR下的责任'",
    "'Verantwortlicher, Auftragsverarbeiter, gemeinsame Verantwortlichkeit'": "'控制者、处理者、共同控制者'",

    # Article titles - Betroffenenrechte
    "'Auskunftsrecht nach Art. 15'": "'第15条访问权'",
    "'Wie Sie Auskunftsersuchen rechtssicher beantworten'": "'如何以合法方式回应访问请求'",
    "'Recht auf Löschung'": "'删除权'",
    "'Wann und wie personenbezogene Daten gelöscht werden müssen'": "'何时以及如何删除个人数据'",
    "'Datenportabilität'": "'数据可携权'",
    "'Das Recht auf Datenübertragbarkeit praktisch umsetzen'": "'实际实施数据传输权'",
    "'Widerspruchsrecht'": "'反对权'",
    "'Umgang mit Widersprüchen gegen die Datenverarbeitung'": "'处理对数据处理的反对'",

    # Article titles - Dokumentation
    "'Verarbeitungsverzeichnis erstellen'": "'创建处理活动记录'",
    "'Schritt-für-Schritt Anleitung mit Vorlagen'": "'带模板的分步指南'",
    "'Datenschutzerklärung'": "'隐私政策'",
    "'Rechtssichere Datenschutzerklärungen formulieren'": "'制定符合法律要求的隐私政策'",
    "'Auftragsverarbeitung (AVV)'": "'数据处理协议（DPA）'",
    "'Verträge zur Auftragsverarbeitung richtig gestalten'": "'正确起草数据处理协议'",
    "'Datenschutz-Folgenabschätzung'": "'数据保护影响评估'",
    "'DSFA durchführen und dokumentieren'": "'执行和记录DPIA'",

    # Article titles - Technische Maßnahmen
    "'TOMs nach Art. 32'": "'第32条技术和组织措施'",
    "'Technische und organisatorische Maßnahmen implementieren'": "'实施技术和组织措施'",
    "'Verschlüsselung'": "'加密'",
    "'Verschlüsselungsanforderungen der DSGVO erfüllen'": "'满足GDPR的加密要求'",
    "'Privacy by Design'": "'隐私设计'",
    "'Datenschutz von Anfang an in Systeme integrieren'": "'从一开始就将数据保护集成到系统中'",
    "'Pseudonymisierung'": "'假名化'",
    "'Daten wirksam pseudonymisieren und anonymisieren'": "'有效地假名化和匿名化数据'",

    # Article titles - International
    "'Drittlandtransfers'": "'第三国传输'",
    "'Datenübermittlung in Länder außerhalb der EU'": "'向欧盟以外国家传输数据'",
    "'Standardvertragsklauseln'": "'标准合同条款'",
    "'SCCs für internationale Datentransfers nutzen'": "'使用SCC进行国际数据传输'",
    "'Angemessenheitsbeschlüsse'": "'充分性决定'",
    "'Welche Länder bieten angemessenes Datenschutzniveau?'": "'哪些国家提供足够的数据保护水平？'",
    "'Brexit und Datenschutz'": "'英国脱欧与数据保护'",
    "'Datentransfers nach UK post-Brexit'": "'脱欧后向英国的数据传输'",

    # Quick links
    "'DSGVO Checkliste'": "'GDPR检查清单'",
    "'Interaktive Checkliste für Ihre DSGVO-Compliance'": "'GDPR合规性互动检查清单'",
    "'Muster & Vorlagen'": "'样本和模板'",
    "'Kostenlose DSGVO-Vorlagen zum Download'": "'免费GDPR模板下载'",
    "'DSGVO in 30 Tagen'": "'30天GDPR'",
    "'Express-Guide zur schnellen Compliance'": "'快速合规速成指南'",
    "'FAQ'": "'常见问题'",
    "'Häufige Fragen zur DSGVO beantwortet'": "'GDPR常见问题解答'",

    # Links - update paths to Chinese
    "'/assessment-center/dsgvo-compliance-checklist'": "'/zh/pinggu-zhongxin/gdpr-heguixing-qingdan'",
    "'/vorlagen/dsgvo'": "'/zh/muban/gdpr'",
    "'/wissen/leitfaden/dsgvo-30-tage'": "'/zh/zhishi/zhinan/gdpr-30-tian'",
    "'/faq/dsgvo'": "'/zh/changjianwenti/gdpr'",
    "'/wissen/dsgvo/": "'/zh/zhishi/gdpr/",

    # Levels
    "'Einsteiger'": "'入门'",
    "'Fortgeschritten'": "'进阶'",
    "'Praktisch'": "'实用'",
    "'Experte'": "'专家'",
    "'Technisch'": "'技术'",

    # Time
    "' Min'": "'分钟'",

    # Buttons and UI
    'Lesen': '阅读',

    # Key facts section
    'Rechtliche Grundlage': '法律基础',
    'Die DSGVO ist seit dem 25. Mai 2018 in der gesamten EU unmittelbar anwendbar': 'GDPR自2018年5月25日起在整个欧盟直接适用',
    'Bußgelder': '罚款',
    'Bis zu 20 Mio. EUR oder 4% des weltweiten Jahresumsatzes': '最高2000万欧元或全球年营业额的4%',
    'Betroffenenrechte': '数据主体权利',
    '8 zentrale Rechte stärken die Position der betroffenen Personen': '8项核心权利加强了数据主体的地位',

    # CTA section
    'Brauchen Sie Unterstützung bei der DSGVO-Umsetzung?': '需要GDPR实施方面的帮助吗？',
    'Unsere Experten helfen Ihnen bei der praktischen Implementierung': '我们的专家帮助您进行实际实施',
    'Kostenlose Beratung': '免费咨询',
    'DSGVO-Check starten': '开始GDPR检查',
}

# Apply translations
for german, chinese in sorted(translations.items(), key=lambda x: len(x[0]), reverse=True):
    content = content.replace(german, chinese)

# Write back
with open('src/pages/zh/Gdpr.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ GDPR Seite vollständig übersetzt!")
print("📄 Datei: src/pages/zh/Gdpr.tsx")
