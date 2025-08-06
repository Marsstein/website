import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  CheckCircle2,
  AlertCircle,
  Users,
  ArrowRight,
  FileCheck,
  Settings,
  Lock,
  Eye,
  Database,
  Network
} from 'lucide-react';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';

interface ISO27001Control {
  id: string;
  domain: string;
  title: string;
  description: string;
  controls: number;
  implementation: string;
  icon: React.ComponentType<any>;
}

const iso27001Domains: ISO27001Control[] = [
  {
    id: 'information-security-policies',
    domain: 'A.5',
    title: 'Informationssicherheitsrichtlinien',
    description: 'Managementrichtlinien für Informationssicherheit',
    controls: 2,
    implementation: 'Vollständig implementiert',
    icon: FileCheck
  },
  {
    id: 'organization-information-security',
    domain: 'A.6',
    title: 'Organisation der Informationssicherheit',
    description: 'Interne Organisation und mobile Geräte',
    controls: 8,
    implementation: 'Vollständig implementiert',
    icon: Users
  },
  {
    id: 'human-resource-security',
    domain: 'A.7',
    title: 'Personalsicherheit',
    description: 'Vor, während und nach der Beschäftigung',
    controls: 6,
    implementation: 'Vollständig implementiert',
    icon: Shield
  },
  {
    id: 'asset-management',
    domain: 'A.8',
    title: 'Asset Management',
    description: 'Verantwortlichkeit für Assets und Medienhandhabung',
    controls: 10,
    implementation: 'Vollständig implementiert',
    icon: Database
  },
  {
    id: 'access-control',
    domain: 'A.9',
    title: 'Zugriffskontrolle',
    description: 'Geschäftsanforderungen und Benutzerzugriffsmanagement',
    controls: 14,
    implementation: 'Vollständig implementiert',
    icon: Lock
  },
  {
    id: 'cryptography',
    domain: 'A.10',
    title: 'Kryptografie',
    description: 'Kryptografische Kontrollen',
    controls: 2,
    implementation: 'Vollständig implementiert',
    icon: Settings
  },
  {
    id: 'physical-security',
    domain: 'A.11',
    title: 'Physische und umgebungsbezogene Sicherheit',
    description: 'Sichere Bereiche und Geräteschutz',
    controls: 15,
    implementation: 'Vollständig implementiert',
    icon: Shield
  },
  {
    id: 'operations-security',
    domain: 'A.12',
    title: 'Betriebssicherheit',
    description: 'Betriebsverfahren und Systemsicherheit',
    controls: 14,
    implementation: 'Vollständig implementiert',
    icon: Settings
  },
  {
    id: 'communications-security',
    domain: 'A.13',
    title: 'Kommunikationssicherheit',
    description: 'Netzwerksicherheitsmanagement',
    controls: 7,
    implementation: 'Vollständig implementiert',
    icon: Network
  },
  {
    id: 'system-acquisition',
    domain: 'A.14',
    title: 'Systembeschaffung, -entwicklung und -wartung',
    description: 'Sicherheitsanforderungen von Informationssystemen',
    controls: 13,
    implementation: 'Vollständig implementiert',
    icon: Settings
  },
  {
    id: 'supplier-relationships',
    domain: 'A.15',
    title: 'Lieferantenbeziehungen',
    description: 'Informationssicherheit in Lieferantenbeziehungen',
    controls: 5,
    implementation: 'Vollständig implementiert',
    icon: Users
  },
  {
    id: 'incident-management',
    domain: 'A.16',
    title: 'Informationssicherheitsvorfälle',
    description: 'Management von Informationssicherheitsvorfällen',
    controls: 7,
    implementation: 'Vollständig implementiert',
    icon: AlertCircle
  },
  {
    id: 'business-continuity',
    domain: 'A.17',
    title: 'Informationssicherheitsaspekte des Business Continuity Managements',
    description: 'Informationssicherheit bei Unterbrechungen',
    controls: 4,
    implementation: 'Vollständig implementiert',
    icon: Shield
  },
  {
    id: 'compliance',
    domain: 'A.18',
    title: 'Compliance',
    description: 'Einhaltung gesetzlicher und vertraglicher Anforderungen',
    controls: 7,
    implementation: 'Vollständig implementiert',
    icon: FileCheck
  }
];

export const ISO27001Section: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Removed auto-switching for better user control

  const totalControls = iso27001Domains.reduce((sum, domain) => sum + domain.controls, 0);

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(226,78,27,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Compact Header */}
        <motion.div 
          className="text-center mb-8 space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e24e1b]/20 shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Shield className="w-4 h-4 text-[#e24e1b]" />
            <span className="text-sm font-semibold text-gray-700">ISO 27001 Zertifizierung</span>
            <Badge className="bg-[#e24e1b] text-white text-xs px-2 py-0.5">2024</Badge>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-black text-gray-900"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ISO 27001 <span className="text-[#e24e1b]">Compliance</span>
          </motion.h2>
          
          <motion.p 
            className="text-base text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Vollständige Umsetzung aller <span className="font-bold text-[#e24e1b]">114 Kontrollen</span> für maximale Informationssicherheit im DACH-Raum.
          </motion.p>
        </motion.div>

        {/* Prominent Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Kontrollen', value: totalControls.toString(), icon: FileCheck, gradient: 'from-emerald-500 to-green-600' },
            { label: 'Domains', value: '14', icon: Settings, gradient: 'from-blue-500 to-cyan-600' },
            { label: 'Implementierung', value: '100%', icon: CheckCircle2, gradient: 'from-emerald-500 to-green-600' },
            { label: 'Zertifiziert', value: '2024', icon: Shield, gradient: 'from-[#e24e1b] to-orange-500' }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group cursor-pointer"
              >
                <Card className="p-4 text-center bg-white/60 backdrop-blur-sm border-white/60 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="space-y-2">
                    <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${stat.gradient} text-white`}>
                      <StatIcon className="h-5 w-5" />
                    </div>
                    
                    <div className="text-2xl font-black text-gray-900">
                      {isVisible && (
                        <CountUp 
                          end={stat.value.includes('%') ? 100 : parseInt(stat.value)} 
                          duration={1.5}
                          suffix={stat.value.includes('%') ? '%' : ''}
                        />
                      )}
                    </div>
                    
                    <div className="text-xs font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Domain Overview */}
        <motion.div 
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Settings className="h-5 w-5 text-[#e24e1b]" />
                <h3 className="text-lg font-bold text-gray-900">ISO 27001:2022 Kontrollen</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 text-xs">
                {iso27001Domains.map((domain, index) => (
                  <motion.div
                    key={domain.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.02) }}
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 hover:border-[#e24e1b]/20 transition-all duration-200 hover:shadow-sm">
                      <div className="flex flex-col items-center gap-1">
                        <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20 text-xs px-2 py-0.5 font-mono">
                          {domain.domain}
                        </Badge>
                        <div className="text-xs font-semibold text-gray-700 text-center leading-tight">
                          {domain.controls} Kontrollen
                        </div>
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  <span>Vollständig implementiert</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-blue-500" />
                  <span>Extern validiert & zertifiziert</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Compact Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="inline-block p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm max-w-2xl relative overflow-hidden group hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e24e1b]/10 border border-[#e24e1b]/20">
                <Shield className="h-4 w-4 text-[#e24e1b]" />
                <span className="text-sm font-semibold text-[#e24e1b]">ISO 27001 Ready</span>
                <Badge className="bg-[#e24e1b] text-white text-xs px-2 py-0.5">2024</Badge>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900">
                ISO 27001 Zertifizierung starten?
              </h3>
              
              <p className="text-sm text-gray-600 max-w-lg mx-auto">
                Lassen Sie uns eine kostenlose Analyse Ihrer aktuellen Informationssicherheit durchführen.
                <span className="font-semibold text-gray-900"> Vollständig automatisiert und DACH-optimiert.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact?demo=true">
                  <Button 
                    className="bg-gradient-to-r from-[#e24e1b] to-orange-500 hover:from-[#e24e1b]/90 hover:to-orange-500/90 text-white px-6 py-2 font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    ISO 27001 Analyse
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                
                <Link to="/iso-27001-zertifizierung">
                  <Button 
                    variant="outline" 
                    className="px-6 py-2 font-semibold border border-gray-300 hover:bg-white hover:border-[#e24e1b] hover:text-[#e24e1b] transition-all duration-200"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Details ansehen
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  <span>Kostenlos</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  <span>DACH-optimiert</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  <span>Sofort verfügbar</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};