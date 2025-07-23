import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const isDemoRequest = searchParams.get('demo') === 'true';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactForm isDemoRequest={isDemoRequest} />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;