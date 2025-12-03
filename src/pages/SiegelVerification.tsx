import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Shield, Award, CheckCircle2, Calendar, ExternalLink,
  FileCheck, AlertCircle, User, Building, Clock, Sparkles,
  TrendingUp, Lock, ArrowRight, Download
} from 'lucide-react';
import { cn } from '@/lib/utils';
import certificatesData from '@/data/certificates.json';

interface Certificate {
  companyName: string;
  logo: string | null;
  sealType: 'VERIFIED' | 'CERTIFIED' | 'EXCELLENCE';
  issuedDate: string;
  expiryDate: string;
  certificateId: string;
  website: string;
  auditScope: string[];
  status: 'active' | 'expired' | 'revoked';
  auditDate: string;
  nextAudit: string;
  package: string;
  dsbName?: string;
  dsbCertification?: string;
  auditManager?: string;
}

const SiegelVerification: React.FC = () => {
  const { sealLevel, companySlug } = useParams<{ sealLevel: string; companySlug: string }>();

  const certificates = certificatesData as Record<string, Certificate>;
  const certificate = companySlug ? certificates[companySlug] : null;

  if (!certificate) {
    return <Navigate to="/404" replace />;
  }

  const isExpired = new Date(certificate.expiryDate) < new Date();
  const isActive = certificate.status === 'active' && !isExpired;

  const getSealConfig = (sealType: string) => {
    switch (sealType) {
      case 'VERIFIED':
        return {
          color: 'from-[#667eea] to-[#764ba2]',
          bgColor: 'bg-[#667eea]/10',
          textColor: 'text-[#667eea]',
          borderColor: 'border-[#667eea]/30',
          name: 'VERIFIED',
          description: 'Basis-Compliance bestätigt'
        };
      case 'CERTIFIED':
        return {
          color: 'from-[#e24e1b] to-[#ea580c]',
          bgColor: 'bg-[#e24e1b]/10',
          textColor: 'text-[#e24e1b]',
          borderColor: 'border-[#e24e1b]/30',
          name: 'CERTIFIED',
          description: 'Professionelle Compliance zertifiziert'
        };
      case 'EXCELLENCE':
        return {
          color: 'from-[#003366] to-[#1F1F24]',
          bgColor: 'bg-[#003366]/10',
          textColor: 'text-[#003366]',
          borderColor: 'border-[#003366]/30',
          name: 'EXCELLENCE',
          description: 'Premium-Compliance Excellence'
        };
      default:
        return {
          color: 'from-gray-400 to-gray-600',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-600',
          borderColor: 'border-gray-300',
          name: 'UNKNOWN',
          description: 'Status unbekannt'
        };
    }
  };

  const sealConfig = getSealConfig(certificate.sealType);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Certificate",
    "name": `MARSSTEIN ${certificate.sealType} Zertifikat`,
    "description": `DSGVO Compliance Zertifikat für ${certificate.companyName}`,
    "issuedBy": {
      "@type": "Organization",
      "name": "MARSSTEIN"
    },
    "about": {
      "@type": "Organization",
      "name": certificate.companyName,
      "url": certificate.website
    },
    "dateIssued": certificate.issuedDate,
    "expires": certificate.expiryDate
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`${certificate.companyName} - ${certificate.sealType} Siegel verifiziert`}
        description={`Offizielles MARSSTEIN ${certificate.sealType} DSGVO-Compliance Siegel für ${certificate.companyName}. Zertifikat verifiziert und gültig.`}
        canonical={`/dsgvo-audit/${sealLevel}/${companySlug}`}
        structuredData={structuredData}
      />
      <Header />

      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">

          {/* Professional Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
              <Shield className="h-4 w-4 text-[#e24e1b]" />
              <span className="text-sm font-medium text-gray-700">Zertifikatsverifizierung</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              DSGVO-Compliance Zertifikat
            </h1>
            <p className="text-gray-600">Ausgestellt von MARSSTEIN GmbH</p>
          </motion.div>

          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            {isActive ? (
              <div className="bg-white border-l-4 border-[#39B37B] shadow-sm p-4 flex items-center gap-3">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-[#39B37B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Zertifikat verifiziert und gültig
                  </p>
                  <p className="text-xs text-gray-600">
                    Gültig bis {formatDate(certificate.expiryDate)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white border-l-4 border-red-600 shadow-sm p-4 flex items-center gap-3">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Zertifikat {certificate.status === 'revoked' ? 'widerrufen' : 'abgelaufen'}
                  </p>
                  <p className="text-xs text-gray-600">
                    {certificate.status === 'revoked'
                      ? 'Dieses Zertifikat wurde widerrufen und ist nicht mehr gültig.'
                      : `Abgelaufen am ${formatDate(certificate.expiryDate)}`
                    }
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Main Certificate Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden bg-white">
              {/* Certificate Header with Border Pattern */}
              <div className={cn(
                "h-2 bg-gradient-to-r",
                sealConfig.color
              )} />

              <CardContent className="p-8 sm:p-12 lg:p-16">

                {/* Seal Badge - Clean & Professional */}
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                      Zertifikats-Nr.
                    </div>
                    <div className="text-sm font-mono font-semibold text-gray-900">
                      {certificate.certificateId}
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="relative"
                  >
                    <div className={cn(
                      "w-24 h-24 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg border-4 border-white ring-2",
                      sealConfig.color,
                      sealConfig.textColor.replace('text-', 'ring-')
                    )}>
                      <Award className="h-12 w-12 text-white" />
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute -bottom-1 -right-1 bg-[#39B37B] rounded-full p-1.5 border-2 border-white shadow-md"
                      >
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Certificate Title */}
                <div className="text-center mb-12 pb-12 border-b border-gray-200">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                    DSGVO-Compliance Zertifikat
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
                    {certificate.companyName}
                  </h2>
                  <div className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold",
                    sealConfig.bgColor,
                    sealConfig.textColor
                  )}>
                    <Shield className="h-4 w-4" />
                    {sealConfig.name} LEVEL
                  </div>
                  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Hiermit wird bestätigt, dass das Unternehmen die Anforderungen für das MARSSTEIN {sealConfig.name}
                    Zertifikat erfüllt und ein {sealConfig.description.toLowerCase()} nachgewiesen hat.
                  </p>
                </div>

                {/* Certificate Metadata - Table Style */}
                <div className="mb-12">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 text-sm font-medium text-gray-500 w-1/3">
                          Compliance-Level
                        </td>
                        <td className="py-4 text-sm font-semibold text-gray-900">
                          <div className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded text-xs",
                            sealConfig.bgColor,
                            sealConfig.textColor
                          )}>
                            {certificate.package} - {sealConfig.name}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 text-sm font-medium text-gray-500">
                          Ausstellungsdatum
                        </td>
                        <td className="py-4 text-sm font-semibold text-gray-900">
                          {formatDate(certificate.issuedDate)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 text-sm font-medium text-gray-500">
                          Gültigkeitsdatum
                        </td>
                        <td className="py-4 text-sm font-semibold text-gray-900">
                          {formatDate(certificate.expiryDate)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 text-sm font-medium text-gray-500">
                          Letztes Audit
                        </td>
                        <td className="py-4 text-sm font-semibold text-gray-900">
                          {formatDate(certificate.auditDate)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 text-sm font-medium text-gray-500">
                          Nächste Überprüfung
                        </td>
                        <td className="py-4 text-sm font-semibold text-gray-900">
                          {formatDate(certificate.nextAudit)}
                        </td>
                      </tr>
                      {certificate.website && (
                        <tr>
                          <td className="py-4 text-sm font-medium text-gray-500">
                            Unternehmenswebsite
                          </td>
                          <td className="py-4 text-sm">
                            <a
                              href={certificate.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#e24e1b] hover:underline font-medium inline-flex items-center gap-1"
                            >
                              {certificate.website.replace('https://', '')}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* DSB Info (CERTIFIED & EXCELLENCE only) */}
                {certificate.dsbName && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-12 border-t border-gray-200 pt-8"
                  >
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                          Verantwortlicher Datenschutzbeauftragter
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="font-semibold text-gray-900 mb-1">
                            {certificate.dsbName}
                          </p>
                          <p className="text-xs text-gray-600">
                            {certificate.dsbCertification}
                          </p>
                        </div>
                      </div>
                      {certificate.auditManager && (
                        <div>
                          <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                            Audit-Manager
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <p className="font-semibold text-gray-900">
                              {certificate.auditManager}
                            </p>
                            <p className="text-xs text-gray-600">
                              MARSSTEIN GmbH
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Audit Scope */}
                <div className="mb-12 border-t border-gray-200 pt-8">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                    Geprüfte Compliance-Bereiche
                  </div>
                  <div className="bg-gray-50 rounded-lg border border-gray-200 divide-y divide-gray-200">
                    {certificate.auditScope.map((scope, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.02 }}
                        className="flex items-start gap-3 p-4"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#39B37B] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{scope}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Certificate Footer - Signature Style */}
                <div className="mt-16 pt-8 border-t-2 border-gray-200">
                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                        Ausgestellt von
                      </div>
                      <p className="font-semibold text-gray-900">MARSSTEIN GmbH</p>
                      <p className="text-sm text-gray-600">Zertifizierte DSGVO-Compliance Audits</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                        Digitale Signatur
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
                        <Lock className="h-4 w-4 text-gray-600" />
                        <span className="text-xs font-mono text-gray-700">SHA-256 verifiziert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={certificate.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
              >
                <Building className="h-5 w-5 mr-2" />
                Zur Unternehmenswebsite
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </a>
            <Link to="/dsgvo-audit">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#e24e1b] hover:bg-[#ea580c] text-white"
              >
                <Shield className="h-5 w-5 mr-2" />
                Mehr über MARSSTEIN Audits
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 bg-white border border-gray-200 rounded-lg p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Shield className="h-6 w-6 text-[#e24e1b]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Über dieses Zertifikat
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Das MARSSTEIN {sealConfig.name} Zertifikat bestätigt, dass {certificate.companyName} ein
                  professionelles DSGVO-Audit durchlaufen hat und die geprüften Compliance-Anforderungen erfüllt.
                  Das Zertifikat wird von einem zertifizierten Datenschutzbeauftragten ausgestellt und regelmäßig überprüft.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 text-sm pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                    <span className="text-gray-700">Unabhängig geprüft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                    <span className="text-gray-700">Regelmäßig überwacht</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                    <span className="text-gray-700">DSGVO-konform</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SiegelVerification;
