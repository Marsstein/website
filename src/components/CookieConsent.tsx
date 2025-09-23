import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { X, Cookie, Settings, Shield, Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface CookieConsentProps {
  onConsentChange?: (consent: CookieConsent) => void;
}

export interface CookieConsent {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CONSENT_KEY = 'marsstein-cookie-consent';
const CONSENT_VERSION = '1.0';

export const CookieConsentBanner: React.FC<CookieConsentProps> = ({ onConsentChange }) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Always required
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    checkExistingConsent();
  }, []);

  const checkExistingConsent = () => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.version === CONSENT_VERSION) {
          setConsent(parsed.consent);
          onConsentChange?.(parsed.consent);
          return;
        }
      }
    } catch (error) {
      console.warn('Error reading cookie consent:', error);
    }
    
    // Show banner if no valid consent found
    setIsVisible(true);
  };

  const saveConsent = (newConsent: CookieConsent) => {
    try {
      const consentData = {
        consent: newConsent,
        timestamp: Date.now(),
        version: CONSENT_VERSION
      };
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));
      
      // Clean up if user rejects functional cookies
      if (!newConsent.functional) {
        // Remove EmailJS localStorage data
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('emailjs') || key.includes('rate_limit')) {
            localStorage.removeItem(key);
          }
        });
      }
      
      setConsent(newConsent);
      onConsentChange?.(newConsent);
      setIsVisible(false);
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: false, // No analytics implemented
      marketing: false  // No marketing cookies
    });
  };

  const acceptSelected = () => {
    saveConsent(consent);
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm">
      <div className="fixed bottom-0 left-0 right-0 p-4">
        <Card className="max-w-4xl mx-auto p-6 shadow-2xl border-2">
          <div className="flex items-start gap-4">
            <Cookie className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
            
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                🍪 Cookie-Einstellungen für marsstein.ai
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Wir respektieren Ihre Privatsphäre und verwenden Cookies nur, um Ihnen die bestmögliche Erfahrung zu bieten. 
                Als Compliance-Experten halten wir uns selbstverständlich an alle DSGVO-Bestimmungen.
              </p>

              {!showDetails ? (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <Shield className="inline h-4 w-4 mr-2" />
                    <strong>Notwendige Cookies:</strong> Grundfunktionen der Website
                  </p>
                  <p className="text-sm text-gray-600">
                    <Settings className="inline h-4 w-4 mr-2" />
                    <strong>Funktionale Cookies:</strong> Kontaktformular und E-Mail-Service (EmailJS)
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button onClick={acceptAll} className="bg-green-600 hover:bg-green-700">
                      <Check className="h-4 w-4 mr-2" />
                      Alle akzeptieren
                    </Button>
                    <Button onClick={rejectAll} variant="outline">
                      Nur notwendige
                    </Button>
                    <Button 
                      onClick={() => setShowDetails(true)} 
                      variant="ghost" 
                      className="text-blue-600"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Einstellungen anpassen
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid gap-4">
                    {/* Necessary Cookies */}
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-green-800">
                          <Shield className="inline h-4 w-4 mr-2" />
                          Notwendige Cookies
                        </h4>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                          Immer aktiv
                        </span>
                      </div>
                      <p className="text-sm text-green-700">
                        Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                      </p>
                    </div>

                    {/* Functional Cookies */}
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-blue-800">
                            <Settings className="inline h-4 w-4 mr-2" />
                            Funktionale Cookies
                          </h4>
                          <p className="text-sm text-blue-700 mt-1">
                            Ermöglichen das Kontaktformular und E-Mail-Services (EmailJS mit localStorage für Rate-Limiting)
                          </p>
                        </div>
                        <Checkbox
                          checked={consent.functional}
                          onCheckedChange={(checked) => 
                            setConsent(prev => ({ ...prev, functional: !!checked }))
                          }
                          className="data-[state=checked]:bg-blue-600"
                        />
                      </div>
                    </div>

                    {/* Analytics - Not used */}
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-600">Analytics Cookies</h4>
                          <p className="text-sm text-gray-500 mt-1">
                            Nicht verwendet - Wir sammeln keine Analysedaten
                          </p>
                        </div>
                        <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          Nicht aktiv
                        </span>
                      </div>
                    </div>

                    {/* Marketing - Not used */}
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-600">Marketing Cookies</h4>
                          <p className="text-sm text-gray-500 mt-1">
                            Nicht verwendet - Wir setzen keine Marketing-Cookies
                          </p>
                        </div>
                        <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          Nicht aktiv
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    <Button onClick={acceptSelected} className="bg-blue-600 hover:bg-blue-700">
                      <Check className="h-4 w-4 mr-2" />
                      Auswahl speichern
                    </Button>
                    <Button onClick={acceptAll} variant="outline">
                      Alle akzeptieren
                    </Button>
                    <Button onClick={rejectAll} variant="ghost" aria-label="Nur notwendige Cookies akzeptieren">
                      Nur notwendige
                    </Button>
                    <Button 
                      onClick={() => setShowDetails(false)} 
                      variant="ghost" 
                      size="sm"
                    >
                      Zurück
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
              className="p-1 h-8 w-8 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Hook to check if functional cookies are allowed
export const useFunctionalCookies = (): boolean => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const stored = localStorage.getItem(CONSENT_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setAllowed(parsed.consent?.functional || false);
        }
      } catch (error) {
        setAllowed(false);
      }
    };

    checkConsent();
    
    // Listen for storage changes
    const handleStorageChange = () => checkConsent();
    window.addEventListener('storage', handleStorageChange);
    
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return allowed;
};