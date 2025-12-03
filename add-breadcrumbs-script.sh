#!/bin/bash

# Artikel-Mapping: Dateiname -> breadcrumb-label -> article-id
declare -A articles=(
    ["EuVertreterChina"]="EU-Vertreter:eu-vertreter"
    ["JointVentureChinaDatenschutz"]="Joint Ventures:joint-venture"
    ["ChinaInvestitionenDsgvoScreening"]="Investitionen:investitionen"
    ["ChinaSccVsEuScc"]="SCC Vergleich:scc"
    ["DsgvoWeChatAlipayChina"]="WeChat & Alipay:wechat-alipay"
    ["DsgvoDouyinChina"]="Douyin:douyin"
    ["DsgvoB2BHerstellerChina"]="B2B Hersteller:b2b-hersteller"
    ["PiplGdprChina"]="PIPL vs GDPR:pipl-gdpr"
)

echo "Artikel-Updates für Breadcrumbs & Related Articles"
echo "===================================================="
echo ""

for file in "${!articles[@]}"; do
    IFS=':' read -r label articleId <<< "${articles[$file]}"
    filepath="src/pages/${file}.tsx"

    echo "📄 Verarbeite: $file"
    echo "   Label: $label"
    echo "   Article ID: $articleId"
    echo "   Pfad: $filepath"

    if [ ! -f "$filepath" ]; then
        echo "   ❌ Datei nicht gefunden!"
        echo ""
        continue
    fi

    # Prüfe ob Breadcrumbs bereits existieren
    if grep -q "import.*Breadcrumbs" "$filepath"; then
        echo "   ✅ Breadcrumbs bereits vorhanden"
    else
        echo "   ⚠️  Breadcrumbs fehlen - manuelle Bearbeitung erforderlich"
    fi

    # Prüfe ob RelatedArticles bereits existieren
    if grep -q "import.*RelatedArticles" "$filepath"; then
        echo "   ✅ RelatedArticles bereits vorhanden"
    else
        echo "   ⚠️  RelatedArticles fehlen - manuelle Bearbeitung erforderlich"
    fi

    echo ""
done

echo "Hinweis: Verwende Claude Code für automatische Updates"
