#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re

with open('src/pages/zh/Iso27001Guide.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Comprehensive translation dictionary
translations = {
    # Section titles
    "'Überblick'": "'概述'",
    "'Geschichte & Evolution'": "'历史与演变'",
    "'ISMS-Grundlagen'": "'ISMS基础'",
    "'Rechtlicher Rahmen'": "'法律框架'",
    "'Anforderungen (Clauses)'": "'要求（条款）'",
    "'Sicherheitskontrollen'": "'安全控制'",
    "'Risikomanagement'": "'风险管理'",
    "'Implementierung'": "'实施'",
    "'Dokumentation'": "'文档记录'",
    "'Audit & Assessment'": "'审计与评估'",
    "'Zertifizierung'": "'认证'",
    "'Aufrechterhaltung'": "'维护'",
    "'Integration & Standards'": "'集成与标准'",
    "'Branchenspezifika'": "'行业特定'",
    "'Vorteile & ROI'": "'优势与投资回报'",
    "'Fallstudien'": "'案例研究'",
    "'Tools & Software'": "'工具与软件'",
    "'Ressourcen'": "'资源'",

    # Time
    "' Min'": "'分钟'",

    # Control domains with descriptions
    "'A.5 - Informationssicherheitspolitiken'": "'A.5 - 信息安全政策'",
    "'Bereitstellung von Managementrichtlinien und -unterstützung für die Informationssicherheit'": "'为信息安全提供管理指导和支持'",

    "'A.6 - Organisation der Informationssicherheit'": "'A.6 - 信息安全组织'",
    "'Etablierung eines Managementframeworks zur Initiierung und Kontrolle der Implementierung von Informationssicherheit'": "'建立管理框架以启动和控制信息安全的实施'",

    "'A.7 - Personalwesen'": "'A.7 - 人力资源'",
    "'Sicherstellung, dass Mitarbeiter die Verantwortlichkeiten verstehen und für ihre Rollen geeignet sind'": "'确保员工理解其责任并适合其角色'",

    "'A.8 - Vermögenswerte-Management'": "'A.8 - 资产管理'",
    "'Identifikation von Organisationsvermögen und Definition angemessener Schutzverantwortlichkeiten'": "'识别组织资产并定义适当的保护责任'",

    "'A.9 - Zugangskontrollen'": "'A.9 - 访问控制'",
    "'Begrenzung des Zugangs zu Informationen und informationsverarbeitenden Einrichtungen'": "'限制对信息和信息处理设施的访问'",

    "'A.10 - Kryptographie'": "'A.10 - 密码学'",
    "'Gewährleistung einer ordnungsgemäßen und wirksamen Verwendung der Kryptographie'": "'确保正确和有效地使用密码学'",

    "'A.11 - Physische und umgebende Sicherheit'": "'A.11 - 物理和环境安全'",
    "'Verhinderung von unbefugtem physischem Zugang, Schäden und Beeinträchtigungen'": "'防止未经授权的物理访问、损坏和干扰'",

    "'A.12 - Betriebssicherheit'": "'A.12 - 运营安全'",
    "'Gewährleistung eines korrekten und sicheren Betriebs der informationsverarbeitenden Einrichtungen'": "'确保信息处理设施的正确和安全运行'",

    "'A.13 - Kommunikationssicherheit'": "'A.13 - 通信安全'",
    "'Gewährleistung des Schutzes von Informationen in Netzwerken und unterstützenden informationsverarbeitenden Einrichtungen'": "'确保网络和支持信息处理设施中信息的保护'",

    "'A.14 - Systemakquisition, -entwicklung und -wartung'": "'A.14 - 系统获取、开发和维护'",
    "'Gewährleistung, dass Informationssicherheit ein integraler Bestandteil von Informationssystemen ist'": "'确保信息安全是信息系统的组成部分'",

    "'A.15 - Lieferantenbeziehungen'": "'A.15 - 供应商关系'",
    "'Gewährleistung des Schutzes der Organisationsvermögen, die für Lieferanten zugänglich sind'": "'确保供应商可访问的组织资产的保护'",

    "'A.16 - Behandlung von Informationssicherheitsvorfällen'": "'A.16 - 信息安全事件管理'",
    "'Gewährleistung eines konsistenten und wirksamen Ansatzes für das Management von Informationssicherheitsvorfällen'": "'确保对信息安全事件管理采取一致和有效的方法'",

    "'A.17 - Informationssicherheitsaspekte des Business Continuity Management'": "'A.17 - 业务连续性管理的信息安全方面'",
    "'Kontinuität des Informationssicherheitsmanagements unter widrigen Bedingungen'": "'在不利条件下保持信息安全管理的连续性'",

    "'A.18 - Compliance'": "'A.18 - 合规性'",
    "'Vermeidung von Verstößen gegen gesetzliche, regulatorische oder vertragliche Verpflichtungen'": "'避免违反法律、监管或合同义务'",

    # Specific controls
    "'Policys für Informationssicherheit'": "'信息安全政策'",
    "'Interne Organisation'": "'内部组织'",
    "'Mobile Geräte und Telearbeit'": "'移动设备和远程办公'",
    "'Vor der Beschäftigung'": "'雇佣前'",
    "'Während der Beschäftigung'": "'雇佣期间'",
    "'Beendigung oder Änderung der Beschäftigung'": "'雇佣终止或变更'",
    "'Verantwortung für Vermögenswerte'": "'资产责任'",
    "'Informationsklassifizierung'": "'信息分类'",
    "'Medienhandhabung'": "'媒体处理'",
    "'Geschäftsanforderungen für Zugangskontrolle'": "'访问控制的业务要求'",
    "'Benutzerzugriffsverwaltung'": "'用户访问管理'",
    "'Benutzerverantwortlichkeiten'": "'用户责任'",
    "'Systemzugriffskontrolle'": "'系统访问控制'",
    "'Kryptographische Kontrollen'": "'密码控制'",
    "'Sichere Bereiche'": "'安全区域'",
    "'Ausrüstung'": "'设备'",
    "'Betriebsverfahren und -verantwortlichkeiten'": "'操作程序和责任'",
    "'Schutz vor Malware'": "'恶意软件防护'",
    "'Datensicherung'": "'数据备份'",
    "'Protokollierung und Überwachung'": "'日志记录和监控'",
    "'Kontrolle von Betriebssoftware'": "'操作软件控制'",
    "'Management technischer Schwachstellen'": "'技术漏洞管理'",
    "'Überlegungen zum Informationssystem-Audit'": "'信息系统审计考虑'",
    "'Netzwerksicherheitsmanagement'": "'网络安全管理'",
    "'Informationsübertragung'": "'信息传输'",
    "'Sicherheitsanforderungen für Informationssysteme'": "'信息系统的安全要求'",
    "'Sicherheit in Entwicklungs- und Unterstützungsprozessen'": "'开发和支持过程中的安全'",
    "'Testdaten'": "'测试数据'",
    "'Informationssicherheit in Lieferantenbeziehungen'": "'供应商关系中的信息安全'",
    "'Lieferanten-Service-Bereitstellungsmanagement'": "'供应商服务交付管理'",
    "'Management von Informationssicherheitsvorfällen und Verbesserungen'": "'信息安全事件管理和改进'",
    "'Kontinuität der Informationssicherheit'": "'信息安全连续性'",
    "'Redundanz'": "'冗余'",
    "'Compliance mit gesetzlichen und vertraglichen Anforderungen'": "'符合法律和合同要求'",
    "'Informationssicherheitsreviews'": "'信息安全审查'",

    # Certification phases
    "'Phase 1: Vorbereitung'": "'阶段1：准备'",
    "'Phase 2: Stage 1 Audit'": "'阶段2：第一阶段审计'",
    "'Phase 3: Stage 2 Audit'": "'阶段3：第二阶段审计'",
    "'Phase 4: Zertifizierung'": "'阶段4：认证'",

    # Duration
    "'3-6 Monate'": "'3-6个月'",
    "'2-4 Wochen'": "'2-4周'",
    "'4-8 Wochen'": "'4-8周'",
    "'2-3 Wochen'": "'2-3周'",

    # Steps
    "'Gap-Analyse durchführen'": "'进行差距分析'",
    "'ISMS-Dokumentation erstellen'": "'创建ISMS文档'",
    "'Risikobewertung durchführen'": "'进行风险评估'",
    "'Sicherheitsziele definieren'": "'定义安全目标'",
    "'Statement of Applicability (SoA) erstellen'": "'创建适用性声明（SoA）'",
}

# Apply translations
for german, chinese in sorted(translations.items(), key=lambda x: len(x[0]), reverse=True):
    content = content.replace(german, chinese)

# Write back
with open('src/pages/zh/Iso27001Guide.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ ISO 27001 Guide übersetzt!")
print("📄 Datei: src/pages/zh/Iso27001Guide.tsx")
