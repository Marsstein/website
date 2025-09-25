import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export const CalendlyButton: React.FC = () => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleClick = () => {
    console.log('Button clicked!');
    console.log('Calendly available?', typeof window.Calendly !== 'undefined');

    if (window.Calendly && window.Calendly.initPopupWidget) {
      console.log('Opening Calendly popup...');
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/marsstein-info/marsstein-intro'
      });
    } else {
      console.log('Opening in new window...');
      window.open('https://calendly.com/marsstein-info/marsstein-intro', '_blank');
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        style={{
          width: '100%',
          backgroundColor: '#e24e1b',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          marginTop: '16px'
        }}
      >
        Termin buchen
      </button>

      {/* Fallback: Direct link */}
      <div style={{ marginTop: '8px', textAlign: 'center' }}>
        <a
          href="https://calendly.com/marsstein-info/marsstein-intro"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '12px',
            color: '#666',
            textDecoration: 'underline'
          }}
        >
          Falls der Button nicht funktioniert, hier klicken
        </a>
      </div>
    </>
  );
};