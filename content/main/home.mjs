export default {
  route: '/',
  title: '',
  description: '- Compliance-Automatisierung mit KI. Marsstein GmbH.',
  content: `
    <>
      
      <div>
        <Header ></Header>
        <main class="overflow-hidden">
        <HeroSection ></HeroSection>
        
        {/* 1. Hero → ScrollTransformation: KI-Activation Network */}
        <KIActivationSeparator ></KIActivationSeparator>
        
        <div class="py-8"></div>
        
        <div class="bg-gradient-to-b from-transparent to-orange-50/20">
          <ScrollTransformation ></ScrollTransformation>
        </div>
        
        <TransformationCTA ></TransformationCTA>
        
        <div class="py-12"></div>
        
        {/* 2. TransformationCTA → DACH: Regulatory Bridge */}
        <RegulatoryBridgeSeparator ></RegulatoryBridgeSeparator>
        
        <div class="py-8"></div>
        
        <div class="bg-gradient-to-b from-orange-50/20 via-white to-red-50/10">
          <DACHCompliance ></DACHCompliance>
        </div>
        
        {/* 3. DACH → ISO: Security Standards Matrix */}
        <SecurityStandardsMatrixSeparator ></SecurityStandardsMatrixSeparator>
        
        <div class="bg-gradient-to-b from-red-50/10 to-orange-50/15">
          <ISO27001Section ></ISO27001Section>
        </div>
        
        {/* 4. ISO → AI Act: AI Risk Spectrum */}
        <AIRiskSpectrumSeparator ></AIRiskSpectrumSeparator>
        
        <div class="bg-gradient-to-b from-orange-50/15 via-white to-gray-50">
          <EUAIActSection ></EUAIActSection>
        </div>
        
        {/* 5. AI Act → Interactive: Gesture Flow */}
        <GestureFlowSeparator ></GestureFlowSeparator>
        
        <InteractiveShowcase ></InteractiveShowcase>
        
        {/* 6. Interactive → Security: Quantum Shield Wave */}
        <QuantumShieldWaveSeparator ></QuantumShieldWaveSeparator>
        
        <TrustSecurity ></TrustSecurity>
        
        {/* 7. Security → FAQ: Knowledge Constellation */}
        <KnowledgeConstellationSeparator ></KnowledgeConstellationSeparator>
        
        <SmartFAQ ></SmartFAQ>
        <div class="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <IntelligentNewsletter ></IntelligentNewsletter>
        <div class="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        
        <CTASection ></CTASection>
      </main>
      <Footer ></Footer>
    </div>
    </>`
};