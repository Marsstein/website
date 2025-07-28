import React, { useState } from 'react';
import { Shield, Lock, Key, CreditCard, Globe, Database, AlertTriangle, CheckCircle, ArrowRight, Code, FileText, Users, TrendingUp, Layers, GitBranch, Server, Cloud, Zap, BookOpen } from 'lucide-react';

const FintechComplianceGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'pci-dss', label: 'PCI DSS', icon: CreditCard },
    { id: 'open-banking', label: 'Open Banking Security', icon: Globe },
    { id: 'kyc-aml', label: 'KYC/AML Data', icon: Users },
    { id: 'crypto', label: 'Crypto Assets', icon: Database },
    { id: 'implementation', label: 'Implementation', icon: Code }
  ];

  const complianceFrameworks = [
    {
      name: 'PSD2 (Payment Services Directive 2)',
      category: 'Payment Services',
      requirements: [
        'Strong Customer Authentication (SCA)',
        'Secure Communication (TLS 1.2+)',
        'API Security Standards',
        'Transaction Monitoring'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'MiCA (Markets in Crypto-Assets)',
      category: 'Crypto Assets',
      requirements: [
        'Wallet Security Standards',
        'Private Key Management',
        'Transaction Transparency',
        'AML Compliance for Crypto'
      ],
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      name: 'DORA (Digital Operational Resilience Act)',
      category: 'Operational Resilience',
      requirements: [
        'ICT Risk Management',
        'Incident Reporting',
        'Digital Resilience Testing',
        'Third-party Risk Management'
      ],
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const securityGuidelines = [
    {
      category: 'Payment Processing',
      icon: CreditCard,
      guidelines: [
        'Tokenization für Kartendaten',
        'End-to-End Verschlüsselung',
        '3D Secure 2.0 Implementation',
        'PCI DSS Level 1 Compliance'
      ]
    },
    {
      category: 'API Security',
      icon: Globe,
      guidelines: [
        'OAuth 2.0 / OpenID Connect',
        'API Rate Limiting',
        'Certificate Pinning',
        'API Gateway Security'
      ]
    },
    {
      category: 'Data Protection',
      icon: Database,
      guidelines: [
        'Encryption at Rest & Transit',
        'Key Management Systems',
        'Data Minimization',
        'Secure Data Deletion'
      ]
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-600" />
          FinTech Compliance Excellence
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Implementieren Sie erstklassige Sicherheits- und Compliance-Standards für Ihre FinTech-Lösungen. 
          Von Payment Processing über Open Banking bis zu Crypto Assets - wir bieten umfassende Leitlinien 
          für regulatorische Anforderungen und Security-Best-Practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['99.9% Compliance Rate', 'PCI DSS Level 1', 'ISO 27001 zertifiziert'].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{stat}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Compliance Frameworks</h4>
        <div className="space-y-4">
          {complianceFrameworks.map((framework, index) => (
            <div key={index} className={`rounded-lg p-6 border-2 ${framework.color}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h5 className="font-bold text-lg text-gray-900">{framework.name}</h5>
                  <p className="text-sm text-gray-600">{framework.category}</p>
                </div>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {framework.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Security-First Development</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityGuidelines.map((guide, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <guide.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h5 className="font-bold text-gray-900">{guide.category}</h5>
              </div>
              <ul className="space-y-2">
                {guide.guidelines.map((guideline, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPCIDSS = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">PCI DSS Compliance</h3>
        <p className="text-gray-700 mb-6">
          Payment Card Industry Data Security Standard (PCI DSS) ist der wichtigste Standard für 
          die sichere Verarbeitung von Kreditkartendaten.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Secure Payment Architecture</h4>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm">
{`// Tokenization Service für Kartendaten
import { encrypt, generateToken } from '@secure/crypto';
import { PCIVault } from '@secure/vault';

class PaymentTokenizer {
  private vault: PCIVault;
  
  constructor() {
    this.vault = new PCIVault({
      encryptionKey: process.env.PCI_MASTER_KEY,
      hsmEnabled: true,
      keyRotationDays: 90
    });
  }
  
  async tokenizeCard(cardData: CardInfo): Promise<PaymentToken> {
    // Validierung
    if (!this.validateCard(cardData)) {
      throw new SecurityError('Invalid card data');
    }
    
    // Verschlüsselung vor Speicherung
    const encryptedData = await encrypt(cardData, {
      algorithm: 'AES-256-GCM',
      keyDerivation: 'PBKDF2'
    });
    
    // Token Generation
    const token = generateToken({
      length: 32,
      format: 'alphanumeric',
      prefix: 'tok_'
    });
    
    // Sichere Speicherung im PCI-konformen Vault
    await this.vault.store({
      token,
      data: encryptedData,
      expiresAt: Date.now() + 3600000, // 1 Stunde
      metadata: {
        lastFour: cardData.number.slice(-4),
        brand: this.detectCardBrand(cardData.number)
      }
    });
    
    return {
      token,
      lastFour: cardData.number.slice(-4),
      brand: this.detectCardBrand(cardData.number),
      expiresAt: new Date(Date.now() + 3600000)
    };
  }
  
  private validateCard(card: CardInfo): boolean {
    // Luhn Algorithm Implementation
    const luhnCheck = (num: string): boolean => {
      let sum = 0;
      let isEven = false;
      
      for (let i = num.length - 1; i >= 0; i--) {
        let digit = parseInt(num[i]);
        
        if (isEven) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }
        
        sum += digit;
        isEven = !isEven;
      }
      
      return sum % 10 === 0;
    };
    
    return luhnCheck(card.number) && 
           this.validateExpiry(card.expiry) &&
           this.validateCVV(card.cvv);
  }
}`}
          </pre>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">3D Secure 2.0 Implementation</h4>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm">
{`// 3DS 2.0 Authentication Flow
class ThreeDSecureService {
  async authenticateTransaction(payment: PaymentRequest): Promise<AuthResult> {
    // Risk-Based Authentication
    const riskScore = await this.calculateRiskScore(payment);
    
    if (riskScore < 30) {
      // Frictionless Flow
      return this.frictionlessAuth(payment);
    }
    
    // Challenge Flow erforderlich
    const authRequest = {
      messageType: '01', // AReq
      threeDSServerTransID: generateUUID(),
      acsTransID: generateUUID(),
      messageVersion: '2.2.0',
      
      // Device Information für bessere Fraud Detection
      deviceChannel: '02', // Browser
      deviceInfo: {
        browserAcceptHeader: payment.headers['accept'],
        browserIP: payment.clientIP,
        browserJavaEnabled: false,
        browserLanguage: payment.headers['accept-language'],
        browserColorDepth: '24',
        browserScreenHeight: payment.deviceInfo?.screenHeight || 1080,
        browserScreenWidth: payment.deviceInfo?.screenWidth || 1920,
        browserTZ: payment.deviceInfo?.timezone || -60,
        browserUserAgent: payment.headers['user-agent']
      },
      
      // Transaction Data
      purchaseAmount: payment.amount,
      purchaseCurrency: payment.currency,
      purchaseDate: new Date().toISOString(),
      
      // Cardholder Information
      cardholderInfo: {
        accountNumber: payment.tokenizedCard,
        email: payment.customerEmail,
        mobilePhone: payment.customerPhone,
        
        // Account History für bessere Risikoanalyse
        acctInfo: {
          chAccAgeInd: '04', // 31-60 Tage
          chAccChange: '20230101',
          chAccPwChange: '20230615',
          nbPurchaseAccount: 5,
          provisionAttemptsDay: 0,
          txnActivityDay: 1,
          txnActivityYear: 25
        }
      }
    };
    
    // Send to 3DS Server
    const authResponse = await this.send3DSRequest(authRequest);
    
    if (authResponse.transStatus === 'Y') {
      return {
        authenticated: true,
        eci: authResponse.eci,
        cavv: authResponse.authenticationValue,
        transactionId: authResponse.dsTransID
      };
    }
    
    // Challenge required
    return this.initializeChallenge(authResponse);
  }
}`}
          </pre>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">PCI DSS Requirements</h5>
          <ul className="space-y-3">
            {[
              'Firewall-Konfiguration zum Schutz von Kartendaten',
              'Keine Vendor-Standardpasswörter',
              'Verschlüsselung gespeicherter Kartendaten',
              'Verschlüsselung bei Übertragung',
              'Antivirensoftware und Updates',
              'Sichere Systeme und Anwendungen'
            ].map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">Network Segmentation</h5>
          <div className="bg-gray-100 rounded-lg p-4">
            <img src="/api/placeholder/400/300" alt="Network Segmentation Diagram" className="w-full rounded" />
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-sm">CDE (Cardholder Data Environment)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-sm">DMZ</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm">Trusted Network</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderOpenBanking = () => (
    <div className="space-y-8">
      <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Open Banking Security</h3>
        <p className="text-gray-700 mb-6">
          Sichere API-Integration für Open Banking gemäß PSD2-Richtlinien mit starker 
          Kundenauthentifizierung und sicherer Kommunikation.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Secure Banking API Integration</h4>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm">
{`// Open Banking API Security Layer
import { JWK, JWS, JWE } from 'node-jose';
import { X509Certificate } from 'crypto';

class OpenBankingSecurityLayer {
  private signingKey: JWK.Key;
  private encryptionKey: JWK.Key;
  private mtlsCert: X509Certificate;
  
  async initializeSecureConnection(config: BankingConfig) {
    // QWAC (Qualified Website Authentication Certificate)
    this.mtlsCert = await this.loadCertificate(config.qwacPath);
    
    // QSEAL (Qualified Electronic Seal Certificate)
    this.signingKey = await JWK.asKey(
      fs.readFileSync(config.qsealPath),
      'pem'
    );
    
    // Setup mTLS connection
    this.httpAgent = new https.Agent({
      cert: this.mtlsCert,
      key: config.privateKey,
      ca: config.trustedCAs,
      rejectUnauthorized: true,
      securityOptions: 'SSL_OP_NO_TLSv1_0 | SSL_OP_NO_TLSv1_1'
    });
  }
  
  async makeSecureRequest(endpoint: string, payload: any): Promise<any> {
    // JWS Signature für Request Integrity
    const signedPayload = await this.signRequest(payload);
    
    // Request mit mTLS
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jose+json',
        'X-Request-ID': generateUUID(),
        'TPP-Signature-Certificate': this.encodeCertificate(this.mtlsCert),
        'Digest': await this.calculateDigest(signedPayload)
      },
      body: signedPayload,
      agent: this.httpAgent
    });
    
    // Verify Response Signature
    return this.verifyAndDecryptResponse(await response.text());
  }
  
  private async signRequest(payload: any): Promise<string> {
    const jws = await JWS.createSign({
      format: 'compact',
      fields: {
        alg: 'RS256',
        kid: this.signingKey.kid,
        typ: 'JOSE',
        crit: ['b64', 'http://openbanking.org.uk/iat'],
        'http://openbanking.org.uk/iat': Date.now(),
        'http://openbanking.org.uk/iss': process.env.TPP_ID
      }
    }, this.signingKey)
    .update(JSON.stringify(payload))
    .final();
    
    return jws;
  }
  
  async implementSCA(transactionRequest: TransactionRequest): Promise<SCAResult> {
    // Dynamic Linking nach PSD2
    const dynamicLinkingData = {
      amount: transactionRequest.amount,
      payee: transactionRequest.beneficiary,
      reference: generateSecureReference()
    };
    
    // Generate Authentication Code
    const authCode = await this.generateDynamicLinkingCode(dynamicLinkingData);
    
    // Multi-Factor Authentication
    const factors = [];
    
    // Faktor 1: Besitz (Device Binding)
    factors.push(await this.verifyDeviceBinding(transactionRequest.deviceId));
    
    // Faktor 2: Wissen (PIN/Password)
    factors.push(await this.verifyKnowledge(transactionRequest.credentials));
    
    // Faktor 3: Inhärenz (Biometrie) - Optional
    if (transactionRequest.biometricData) {
      factors.push(await this.verifyBiometric(transactionRequest.biometricData));
    }
    
    // Validate all factors
    const scaResult = factors.every(f => f.valid);
    
    if (scaResult) {
      // Generate Confirmation of Funds Token
      return {
        authenticated: true,
        authenticationCode: authCode,
        confirmationToken: await this.generateConfirmationToken(transactionRequest),
        validUntil: new Date(Date.now() + 300000) // 5 Minuten
      };
    }
    
    throw new AuthenticationError('SCA failed');
  }
}`}
          </pre>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h5 className="font-bold text-lg text-gray-900 mb-4">API Security Standards</h5>
          <div className="space-y-4">
            {[
              {
                title: 'OAuth 2.0 + FAPI',
                description: 'Financial-grade API Security Profile',
                requirements: ['PKCE', 'PAR', 'RAR', 'JARM']
              },
              {
                title: 'mTLS',
                description: 'Mutual TLS Authentication',
                requirements: ['QWAC Certificate', 'Certificate Pinning', 'OCSP Stapling']
              },
              {
                title: 'JWS/JWE',
                description: 'Message-level Security',
                requirements: ['Request Signing', 'Response Encryption', 'Non-Repudiation']
              }
            ].map((standard, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <h6 className="font-bold text-gray-900">{standard.title}</h6>
                <p className="text-sm text-gray-600 mb-2">{standard.description}</p>
                <ul className="space-y-1">
                  {standard.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h5 className="font-bold text-lg text-gray-900 mb-4">Consent Management</h5>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 font-mono text-sm">
{`// Consent Lifecycle Management
class ConsentManager {
  async createConsent(request: ConsentRequest): Promise<Consent> {
    const consent = {
      id: generateUUID(),
      status: 'AwaitingAuthorisation',
      permissions: request.permissions,
      validFrom: new Date(),
      validUntil: this.calculateExpiry(request),
      transactionLimit: request.limits,
      frequency: request.frequency || 'Recurring'
    };
    
    // Audit Trail
    await this.auditLog.record({
      action: 'CONSENT_CREATED',
      consentId: consent.id,
      tppId: request.tppId,
      timestamp: new Date()
    });
    
    return consent;
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );

  const renderKYCAML = () => (
    <div className="space-y-8">
      <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">KYC/AML Data Protection</h3>
        <p className="text-gray-700 mb-6">
          Sichere Verarbeitung und Speicherung von KYC/AML-Daten unter Einhaltung von 
          Datenschutzbestimmungen und regulatorischen Anforderungen.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Secure KYC Implementation</h4>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm">
{`// Privacy-Preserving KYC System
import { HomomorphicEncryption } from '@privacy/he';
import { SecureMultipartyComputation } from '@privacy/smpc';

class PrivacyPreservingKYC {
  private heSystem: HomomorphicEncryption;
  private smpcProtocol: SecureMultipartyComputation;
  
  async performKYCCheck(customer: CustomerData): Promise<KYCResult> {
    // Data Minimization - nur notwendige Daten verarbeiten
    const minimalData = this.extractMinimalKYCData(customer);
    
    // Encrypt PII data
    const encryptedData = await this.encryptSensitiveData(minimalData);
    
    // Perform checks on encrypted data
    const riskScore = await this.calculateRiskScoreOnEncryptedData(encryptedData);
    
    // Sanctions Screening with Privacy
    const sanctionsCheck = await this.privacySanctionsScreening(encryptedData);
    
    // PEP (Politically Exposed Person) Check
    const pepCheck = await this.performPEPCheck(encryptedData);
    
    // Store only necessary data with encryption
    const kycRecord = {
      customerId: this.generatePseudonymousId(customer),
      riskScore: riskScore,
      checkResults: {
        sanctions: sanctionsCheck.passed,
        pep: pepCheck.status,
        verification: await this.verifyIdentity(customer)
      },
      dataRetention: {
        createdAt: new Date(),
        expiresAt: this.calculateRetentionPeriod(riskScore),
        purpose: 'AML_COMPLIANCE'
      }
    };
    
    // Secure Storage with Audit Trail
    await this.secureStore(kycRecord);
    
    return {
      status: this.determineKYCStatus(kycRecord),
      riskLevel: this.categorizeRisk(riskScore),
      nextActions: this.determineNextActions(kycRecord)
    };
  }
  
  private async encryptSensitiveData(data: any): Promise<EncryptedData> {
    // Field-level encryption für verschiedene Datentypen
    const encryptionScheme = {
      // Format Preserving Encryption für strukturierte Daten
      ssn: await this.fpeEncrypt(data.ssn, 'SSN_FORMAT'),
      phone: await this.fpeEncrypt(data.phone, 'PHONE_FORMAT'),
      
      // Standard encryption für unstrukturierte Daten
      name: await this.standardEncrypt(data.name),
      address: await this.standardEncrypt(data.address),
      
      // Tokenization für wiederverwendbare Identifikatoren
      email: await this.tokenize(data.email)
    };
    
    return encryptionScheme;
  }
  
  async performTransactionMonitoring(transaction: Transaction): Promise<AMLAlert[]> {
    const alerts = [];
    
    // Pattern Detection
    const patterns = await this.detectSuspiciousPatterns(transaction);
    
    // Velocity Checks
    const velocityCheck = await this.checkTransactionVelocity(
      transaction.accountId,
      transaction.amount
    );
    
    // Geographic Risk
    const geoRisk = await this.assessGeographicRisk(
      transaction.originCountry,
      transaction.destinationCountry
    );
    
    // ML-based Anomaly Detection
    const anomalyScore = await this.mlAnomalyDetection(transaction);
    
    // Generate Alerts
    if (patterns.suspicious || velocityCheck.exceeded || 
        geoRisk.high || anomalyScore > 0.8) {
      alerts.push({
        id: generateUUID(),
        severity: this.calculateSeverity(patterns, velocityCheck, geoRisk, anomalyScore),
        type: 'SUSPICIOUS_ACTIVITY',
        transaction: transaction.id,
        reasons: this.compileReasons(patterns, velocityCheck, geoRisk, anomalyScore),
        requiredAction: 'MANUAL_REVIEW',
        deadline: this.calculateDeadline(transaction)
      });
    }
    
    // SAR (Suspicious Activity Report) Generation wenn nötig
    if (alerts.some(a => a.severity === 'CRITICAL')) {
      await this.generateSAR(transaction, alerts);
    }
    
    return alerts;
  }
}`}
          </pre>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">Data Protection Measures</h5>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Lock className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Encryption at Rest</p>
                <p className="text-sm text-gray-600">AES-256-GCM für alle PII-Daten</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Key className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Key Management</p>
                <p className="text-sm text-gray-600">HSM-basierte Schlüsselverwaltung</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Database className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Data Retention</p>
                <p className="text-sm text-gray-600">Automatische Löschung nach Ablauf</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">AML Risk Indicators</h5>
          <div className="space-y-3">
            {[
              { risk: 'High', color: 'text-red-600', indicators: ['Rapid movement', 'High-risk countries'] },
              { risk: 'Medium', color: 'text-yellow-600', indicators: ['Unusual patterns', 'New account'] },
              { risk: 'Low', color: 'text-green-600', indicators: ['Regular patterns', 'Verified source'] }
            ].map((level, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`font-bold ${level.color}`}>{level.risk}</div>
                <div className="text-sm text-gray-600">
                  {level.indicators.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">Compliance Automation</h5>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Auto-Screening</span>
              <span className="text-green-600 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Real-time Monitoring</span>
              <span className="text-green-600 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">ML Risk Scoring</span>
              <span className="text-green-600 font-bold">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCrypto = () => (
    <div className="space-y-8">
      <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Crypto Asset Security</h3>
        <p className="text-gray-700 mb-6">
          Implementierung von Best Practices für die sichere Verwaltung von Kryptowährungen 
          und digitalen Assets gemäß MiCA-Regularien.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Secure Wallet Architecture</h4>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm">
{`// Multi-Signature HD Wallet Implementation
import { BIP32Factory } from 'bip32';
import * as bip39 from 'bip39';
import { ECPairFactory } from 'ecpair';
import * as bitcoin from 'bitcoinjs-lib';

class SecureCryptoWallet {
  private masterKey: BIP32Interface;
  private network: bitcoin.Network;
  
  async createHDWallet(entropy?: Buffer): Promise<WalletInfo> {
    // Generate secure entropy if not provided
    if (!entropy) {
      entropy = crypto.randomBytes(32);
    }
    
    // Generate mnemonic phrase
    const mnemonic = bip39.entropyToMnemonic(entropy);
    
    // Derive seed with additional passphrase
    const seed = await bip39.mnemonicToSeed(
      mnemonic, 
      process.env.WALLET_PASSPHRASE
    );
    
    // Create HD wallet
    this.masterKey = BIP32Factory(ecc).fromSeed(seed, this.network);
    
    // Implement key derivation paths
    const accounts = [];
    for (let i = 0; i < 5; i++) {
      const path = \`m/84'/0'/\${i}'/0/0\`; // BIP84 for SegWit
      const child = this.masterKey.derivePath(path);
      
      accounts.push({
        path,
        address: this.getSegwitAddress(child),
        publicKey: child.publicKey.toString('hex')
      });
    }
    
    return {
      mnemonic: this.encryptMnemonic(mnemonic),
      accounts,
      backupRequired: true
    };
  }
  
  async createMultiSigWallet(
    pubkeys: string[], 
    m: number
  ): Promise<MultiSigWallet> {
    // Sort pubkeys for deterministic address generation
    const sortedPubkeys = pubkeys
      .map(hex => Buffer.from(hex, 'hex'))
      .sort(Buffer.compare);
    
    // Create P2SH-P2WSH multisig
    const p2ms = bitcoin.payments.p2ms({
      m,
      pubkeys: sortedPubkeys,
      network: this.network
    });
    
    const p2wsh = bitcoin.payments.p2wsh({
      redeem: p2ms,
      network: this.network
    });
    
    const p2sh = bitcoin.payments.p2sh({
      redeem: p2wsh,
      network: this.network
    });
    
    return {
      address: p2sh.address!,
      redeemScript: p2ms.output!.toString('hex'),
      witnessScript: p2wsh.redeem!.output!.toString('hex'),
      requiredSignatures: m,
      totalSigners: pubkeys.length
    };
  }
  
  async secureKeyStorage(privateKey: string): Promise<EncryptedKey> {
    // Hardware Security Module Integration
    if (process.env.HSM_ENABLED === 'true') {
      return this.storeInHSM(privateKey);
    }
    
    // Software-based secure storage
    const salt = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    
    // Key derivation with high iteration count
    const key = crypto.pbkdf2Sync(
      process.env.MASTER_KEY!,
      salt,
      100000,
      32,
      'sha256'
    );
    
    // Encrypt private key
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    const encrypted = Buffer.concat([
      cipher.update(privateKey, 'hex'),
      cipher.final()
    ]);
    
    const authTag = cipher.getAuthTag();
    
    // Store with metadata
    return {
      encrypted: encrypted.toString('base64'),
      salt: salt.toString('base64'),
      iv: iv.toString('base64'),
      authTag: authTag.toString('base64'),
      algorithm: 'AES-256-GCM',
      kdf: 'PBKDF2',
      iterations: 100000
    };
  }
  
  async implementColdStorage(): Promise<ColdStorageSetup> {
    // Air-gapped key generation
    const coldKeys = [];
    
    for (let i = 0; i < 3; i++) {
      const keyPair = ECPairFactory(ecc).makeRandom({
        network: this.network,
        rng: this.secureRandom
      });
      
      coldKeys.push({
        publicKey: keyPair.publicKey.toString('hex'),
        // Private key never touches online system
        privateKeyHash: this.hashPrivateKey(keyPair.privateKey!)
      });
    }
    
    // Create 2-of-3 multisig for cold storage
    const coldWallet = await this.createMultiSigWallet(
      coldKeys.map(k => k.publicKey),
      2
    );
    
    // Generate QR codes for offline signing
    const qrCodes = await this.generateSigningQRCodes(coldWallet);
    
    return {
      wallet: coldWallet,
      signers: coldKeys,
      qrCodes,
      backupInstructions: this.generateBackupInstructions()
    };
  }
}`}
          </pre>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Blockchain Transaction Security</h4>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm">
{`// Secure Transaction Processing
class BlockchainTransactionProcessor {
  async processTransaction(
    request: TransactionRequest
  ): Promise<TransactionResult> {
    // Input validation
    this.validateTransactionRequest(request);
    
    // AML checks for crypto
    const amlCheck = await this.cryptoAMLScreening(request);
    if (!amlCheck.passed) {
      throw new ComplianceError('Transaction blocked by AML screening');
    }
    
    // Fee estimation with safety margin
    const feeEstimate = await this.estimateTransactionFee(request);
    const totalAmount = request.amount + feeEstimate.recommended * 1.2;
    
    // Balance verification
    const balance = await this.getBalance(request.from);
    if (balance < totalAmount) {
      throw new InsufficientFundsError();
    }
    
    // Build transaction
    const tx = await this.buildSecureTransaction({
      ...request,
      fee: feeEstimate.recommended,
      nonce: await this.getSecureNonce(request.from)
    });
    
    // Multi-party approval if required
    if (request.requiresApproval) {
      const approvals = await this.collectApprovals(tx);
      if (approvals.length < request.minApprovals) {
        throw new ApprovalError('Insufficient approvals');
      }
    }
    
    // Sign and broadcast
    const signedTx = await this.signTransaction(tx);
    const txHash = await this.broadcastTransaction(signedTx);
    
    // Monitor confirmation
    return this.monitorTransaction(txHash);
  }
  
  private async cryptoAMLScreening(
    request: TransactionRequest
  ): Promise<AMLResult> {
    // Check against sanctioned addresses
    const sanctionsCheck = await this.checkSanctionsList(
      request.to,
      request.from
    );
    
    // Risk scoring based on address history
    const riskScore = await this.calculateAddressRisk([
      request.from,
      request.to
    ]);
    
    // Check for mixing service interaction
    const mixerCheck = await this.detectMixerUsage(
      request.from,
      request.to
    );
    
    // Travel Rule compliance
    if (request.amount > TRAVEL_RULE_THRESHOLD) {
      const travelRuleData = await this.collectTravelRuleData(request);
      if (!travelRuleData.complete) {
        return { passed: false, reason: 'Travel Rule data incomplete' };
      }
    }
    
    return {
      passed: !sanctionsCheck.hits && 
              riskScore < 0.7 && 
              !mixerCheck.detected,
      riskScore,
      details: {
        sanctions: sanctionsCheck,
        mixer: mixerCheck,
        addressRisk: riskScore
      }
    };
  }
}`}
          </pre>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">MiCA Compliance Checklist</h5>
          <ul className="space-y-3">
            {[
              'Whitepaper-Anforderungen erfüllt',
              'Reserve Asset Management implementiert',
              'Marktmissbrauchsüberwachung aktiv',
              'Kundenvermögensschutz gewährleistet',
              'Governance-Struktur dokumentiert',
              'Risikomanagement-Framework etabliert'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">Crypto Security Best Practices</h5>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h6 className="font-bold text-gray-900">Key Management</h6>
              <p className="text-sm text-gray-600">
                Multi-sig, HSM Integration, Cold Storage
              </p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h6 className="font-bold text-gray-900">Transaction Security</h6>
              <p className="text-sm text-gray-600">
                Whitelisting, Time-locks, Multi-approval
              </p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h6 className="font-bold text-gray-900">Audit & Monitoring</h6>
              <p className="text-sm text-gray-600">
                Real-time monitoring, Anomaly detection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderImplementation = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guide</h3>
        <p className="text-gray-700 mb-6">
          Schritt-für-Schritt Anleitung zur Implementierung einer sicheren und 
          compliance-konformen FinTech-Architektur.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Complete FinTech Security Stack</h4>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm">
{`// Complete FinTech Security Architecture
import { SecurityOrchestrator } from '@fintech/security';

class FintechSecurityStack {
  private components: Map<string, SecurityComponent>;
  
  async initialize(): Promise<void> {
    // Layer 1: Infrastructure Security
    this.components.set('infrastructure', {
      waf: new WebApplicationFirewall({
        rules: ['OWASP', 'Custom'],
        mode: 'blocking'
      }),
      ddos: new DDoSProtection({
        rateLimit: 1000,
        burstLimit: 5000
      }),
      cdn: new ContentDeliveryNetwork({
        geoBlocking: true,
        tlsVersion: 'TLS1.3'
      })
    });
    
    // Layer 2: Application Security
    this.components.set('application', {
      authentication: new MultiFactorAuth({
        factors: ['password', 'totp', 'biometric'],
        riskBasedAuth: true
      }),
      authorization: new FineGrainedAuthz({
        model: 'RBAC+ABAC',
        policyEngine: 'OPA'
      }),
      sessionManagement: new SecureSessionManager({
        tokenType: 'JWT',
        refreshStrategy: 'sliding',
        secureStorage: 'httpOnly+sameSite'
      })
    });
    
    // Layer 3: Data Security
    this.components.set('data', {
      encryption: new DataEncryption({
        atRest: 'AES-256-GCM',
        inTransit: 'TLS1.3',
        keyManagement: 'AWS-KMS'
      }),
      tokenization: new Tokenizer({
        vault: 'HashiCorp',
        formats: ['PAN', 'SSN', 'Email']
      }),
      dlp: new DataLossPrevention({
        patterns: this.loadDLPPatterns(),
        actions: ['block', 'alert', 'quarantine']
      })
    });
    
    // Layer 4: Compliance & Monitoring
    this.components.set('compliance', {
      auditLog: new AuditLogger({
        retention: 7 * 365, // 7 years
        immutable: true,
        encryption: true
      }),
      monitoring: new SecurityMonitoring({
        siem: 'Splunk',
        alerting: 'PagerDuty',
        metrics: 'Prometheus'
      }),
      compliance: new ComplianceEngine({
        frameworks: ['PCI-DSS', 'PSD2', 'GDPR', 'MiCA'],
        automation: true
      })
    });
  }
  
  async deploySecurityControls(): Promise<DeploymentResult> {
    const deployment = new SecureDeployment();
    
    // Pre-deployment security checks
    await deployment.runSecurityTests({
      sast: true,
      dast: true,
      dependencyCheck: true,
      containerScan: true
    });
    
    // Infrastructure as Code security
    const terraformConfig = {
      backend: {
        s3: {
          bucket: 'fintech-tfstate',
          encrypt: true,
          kms_key_id: process.env.KMS_KEY
        }
      },
      required_providers: {
        aws: {
          version: '~> 4.0',
          configuration_aliases: ['aws.security']
        }
      }
    };
    
    // Deploy with security hardening
    return deployment.deploy({
      environment: 'production',
      securityGroups: this.createSecurityGroups(),
      networkACLs: this.createNetworkACLs(),
      wafRules: this.createWAFRules(),
      monitoring: this.setupMonitoring()
    });
  }
}`}
          </pre>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Risk Assessment Framework</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h5 className="font-bold text-lg text-gray-900 mb-4">Technical Risks</h5>
            <div className="space-y-3">
              {[
                { risk: 'API Security', mitigation: 'OAuth 2.0, Rate Limiting, WAF' },
                { risk: 'Data Breaches', mitigation: 'Encryption, Access Control, DLP' },
                { risk: 'DDoS Attacks', mitigation: 'CDN, Rate Limiting, Geo-blocking' },
                { risk: 'Insider Threats', mitigation: 'Least Privilege, Audit Logs, SIEM' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium text-gray-900">{item.risk}</p>
                  <p className="text-sm text-gray-600">{item.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h5 className="font-bold text-lg text-gray-900 mb-4">Compliance Risks</h5>
            <div className="space-y-3">
              {[
                { risk: 'Regulatory Fines', mitigation: 'Automated Compliance Checks' },
                { risk: 'License Revocation', mitigation: 'Continuous Monitoring' },
                { risk: 'Reputational Damage', mitigation: 'Incident Response Plan' },
                { risk: 'Legal Actions', mitigation: 'Legal Review Process' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-4">
                  <p className="font-medium text-gray-900">{item.risk}</p>
                  <p className="text-sm text-gray-600">{item.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Implementation Roadmap</h4>
        <div className="space-y-6">
          {[
            {
              phase: 'Phase 1: Foundation (Wochen 1-4)',
              tasks: [
                'Security Architecture Design',
                'Compliance Gap Analysis',
                'Tool Selection & Procurement',
                'Team Training'
              ]
            },
            {
              phase: 'Phase 2: Core Security (Wochen 5-12)',
              tasks: [
                'Authentication & Authorization',
                'Encryption Implementation',
                'API Security Layer',
                'Monitoring Setup'
              ]
            },
            {
              phase: 'Phase 3: Compliance (Wochen 13-20)',
              tasks: [
                'PCI DSS Certification',
                'PSD2 Implementation',
                'Audit Trail System',
                'Reporting Automation'
              ]
            },
            {
              phase: 'Phase 4: Advanced Features (Wochen 21-24)',
              tasks: [
                'ML-based Fraud Detection',
                'Advanced Threat Protection',
                'Disaster Recovery',
                'Performance Optimization'
              ]
            }
          ].map((phase, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h5 className="font-bold text-lg text-gray-900 mb-3">{phase.phase}</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {phase.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'pci-dss':
        return renderPCIDSS();
      case 'open-banking':
        return renderOpenBanking();
      case 'kyc-aml':
        return renderKYCAML();
      case 'crypto':
        return renderCrypto();
      case 'implementation':
        return renderImplementation();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">FinTech Compliance Guide</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Umfassende Sicherheits- und Compliance-Lösungen für Payment Processing, 
              Open Banking und Crypto Assets
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                Compliance-Beratung anfordern
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
                Download Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für erstklassige FinTech Compliance?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Lassen Sie uns gemeinsam Ihre FinTech-Lösung sicher und compliant gestalten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2 justify-center">
              <Shield className="w-5 h-5" />
              Kostenlose Compliance-Analyse
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition flex items-center gap-2 justify-center">
              <FileText className="w-5 h-5" />
              Regulatory Mapping anfordern
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'PCI DSS Level 1', value: 'Zertifiziert' },
              { label: 'PSD2 Compliant', value: '100%' },
              { label: 'Uptime SLA', value: '99.99%' },
              { label: 'Incident Response', value: '< 15 Min' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FintechComplianceGuide;